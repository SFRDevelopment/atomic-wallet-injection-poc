(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [155, 156],
  {
    2891: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Height = void 0));
      var s = e(3058),
        c = a(e(2754)),
        u = e(2756),
        p = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.revision_number = o), (r.revision_height = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.revision_number,
                r = t.revision_height;
              return new o(parseInt(e || "0"), parseInt(r || "0"));
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.revision_number,
                e = t.revision_height,
                r = {
                  revision_number: o > 0 ? o.toFixed() : void 0,
                  revision_height: e > 0 ? e.toFixed() : void 0,
                };
              return r;
            }),
            (o.fromData = function (t) {
              var e = t.revision_number,
                r = t.revision_height;
              return new o(Number.parseInt(e), Number.parseInt(r));
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.revision_number,
                e = t.revision_height,
                r = {
                  revision_number: o.toFixed(),
                  revision_height: e.toFixed(),
                };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(
                t.revisionNumber.toNumber(),
                t.revisionHeight.toNumber(),
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.revision_number,
                e = t.revision_height;
              return s.Height.fromPartial({
                revisionNumber: c.fromNumber(o),
                revisionHeight: c.fromNumber(e),
              });
            }),
            o
          );
        })(u.JSONSerializable);
      o.Height = p;
    },
    2906: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5034), o),
        n(e(2915), o),
        n(e(2817), o),
        n(e(5035), o),
        n(e(3668), o),
        n(e(2859), o),
        n(e(3059), o),
        n(e(4344), o),
        n(e(5135), o),
        n(e(3437), o),
        n(e(5136), o),
        n(e(5140), o),
        n(e(5141), o),
        n(e(3438), o),
        n(e(5142), o),
        n(e(5143), o),
        n(e(3687), o),
        n(e(3176), o),
        n(e(4345), o),
        n(e(4347), o),
        n(e(4346), o),
        n(e(4348), o),
        n(e(4302), o),
        n(e(4305), o),
        n(e(4311), o),
        n(e(4306), o),
        n(e(3670), o),
        n(e(4309), o),
        n(e(4315), o),
        n(e(4310), o),
        n(e(4321), o),
        n(e(4322), o),
        n(e(4324), o),
        n(e(3673), o),
        n(e(4328), o),
        n(e(5147), o),
        n(e(5148), o),
        n(e(4312), o),
        n(e(4313), o),
        n(e(4331), o),
        n(e(4332), o),
        n(e(4350), o),
        n(e(4351), o),
        n(e(5149), o),
        n(e(3430), o),
        n(e(5150), o),
        n(e(5152), o),
        n(e(5153), o),
        n(e(4352), o),
        n(e(4337), o),
        n(e(4319), o),
        n(e(4343), o),
        n(e(4340), o),
        n(e(4342), o),
        n(e(4338), o),
        n(e(5155), o));
    },
    3300: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Version = void 0));
      var n = e(3299),
        i = e(2756),
        a = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.identifier = o), (r.features = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.identifier,
                r = t.features;
              return new o(e, r);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.identifier,
                e = t.features,
                r = { identifier: o, features: e };
              return r;
            }),
            (o.fromData = function (t) {
              var e = t.identifier,
                r = t.features;
              return new o(e, r);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.identifier,
                e = t.features,
                r = { identifier: o, features: e };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(t.identifier, t.features);
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.identifier,
                e = t.features;
              return n.Version.fromPartial({ identifier: o, features: e });
            }),
            o
          );
        })(i.JSONSerializable);
      o.Version = a;
    },
    3424: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.BasicAllowance = void 0));
      var n = e(2756),
        i = e(2817),
        a = e(2759),
        s = e(3671),
        c = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            r.expiration = e;
            var n = !1;
            if (
              (o &&
                ((r.spend_limit = new i.Coins(o)),
                r.spend_limit.map(function (t) {
                  t.amount.lessThanOrEqualTo(0) && (n = !0);
                })),
              o && n)
            )
              throw Error("spend_limit must be positive");
            return r;
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.spend_limit,
                a = r.expiration;
              return new o(
                n ? i.Coins.fromAmino(n) : void 0,
                a ? new Date(a) : void 0,
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.spend_limit,
                r = o.expiration;
              return {
                type: t
                  ? "feegrant/BasicAllowance"
                  : "cosmos-sdk/BasicAllowance",
                value: {
                  spend_limit:
                    (null === e || void 0 === e ? void 0 : e.toAmino()) ||
                    void 0,
                  expiration:
                    (null === r || void 0 === r
                      ? void 0
                      : r.toISOString().replace(/\.000Z$/, "Z")) || void 0,
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.spend_limit,
                n = t.expiration;
              return new o(
                r ? i.Coins.fromData(r) : void 0,
                n ? new Date(n) : void 0,
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.spend_limit,
                r = o.expiration;
              return {
                "@type": "/cosmos.feegrant.v1beta1.BasicAllowance",
                spend_limit:
                  (null === e || void 0 === e ? void 0 : e.toData()) || void 0,
                expiration:
                  (null === r || void 0 === r
                    ? void 0
                    : r.toISOString().replace(/\.000Z$/, "Z")) || void 0,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                i.Coins.fromProto(t.spendLimit),
                t.expiration ? t.expiration : void 0,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.spend_limit,
                r = o.expiration;
              return s.BasicAllowance.fromPartial({
                expiration: r,
                spendLimit:
                  (null === e || void 0 === e ? void 0 : e.toProto()) || void 0,
              });
            }),
            (o.prototype.packAny = function (t) {
              return a.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: s.BasicAllowance.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(s.BasicAllowance.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.BasicAllowance = c;
    },
    3433: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Counterparty = void 0));
      var n = e(3299),
        i = e(2756),
        a = e(5117),
        s = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return (
              (n.client_id = o),
              (n.connection_id = e),
              (n.prefix = r),
              n
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.client_id,
                r = t.connection_id,
                n = t.prefix;
              return new o(e, r, n ? a.MerklePrefix.fromAmino(n) : void 0);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.client_id,
                e = t.connection_id,
                r = t.prefix,
                n = { client_id: o, connection_id: e, prefix: r };
              return n;
            }),
            (o.fromData = function (t) {
              var e = t.client_id,
                r = t.connection_id,
                n = t.prefix;
              return new o(e, r, n ? a.MerklePrefix.fromData(n) : void 0);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.client_id,
                e = t.connection_id,
                r = t.prefix,
                n = {
                  client_id: o,
                  connection_id: e,
                  prefix: r ? r.toData() : void 0,
                };
              return n;
            }),
            (o.fromProto = function (t) {
              return new o(
                t.clientId,
                t.connectionId,
                t.prefix ? a.MerklePrefix.fromProto(t.prefix) : void 0,
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.client_id,
                e = t.connection_id,
                r = t.prefix;
              return n.Counterparty.fromPartial({
                clientId: o,
                connectionId: e,
                prefix: r ? r.toProto() : void 0,
              });
            }),
            o
          );
        })(i.JSONSerializable);
      o.Counterparty = s;
    },
    3435: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__extends) ||
            (function () {
              var t = function (o, e) {
                return (
                  (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, o) {
                        t.__proto__ = o;
                      }) ||
                    function (t, o) {
                      for (var e in o)
                        Object.prototype.hasOwnProperty.call(o, e) &&
                          (t[e] = o[e]);
                    }),
                  t(o, e)
                );
              };
              return function (o, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function r() {
                  this.constructor = o;
                }
                (t(o, e),
                  (o.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r())));
              };
            })(),
          n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.Packet = void 0));
        var i = e(3301),
          a = n(e(2754)),
          s = e(2756),
          c = e(2891),
          u = (function (o) {
            function e(t, e, r, n, i, a, s, c) {
              var u = o.call(this) || this;
              return (
                (u.sequence = t),
                (u.source_port = e),
                (u.source_channel = r),
                (u.destination_port = n),
                (u.destination_channel = i),
                (u.data = a),
                (u.timeout_height = s),
                (u.timeout_timestamp = c),
                u
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t) {
                var o = t.sequence,
                  r = t.source_port,
                  n = t.source_channel,
                  i = t.destination_port,
                  a = t.destination_channel,
                  s = t.data,
                  u = t.timeout_height,
                  p = t.timeout_timestamp;
                return new e(
                  o,
                  r,
                  n,
                  i,
                  a,
                  s,
                  u ? c.Height.fromAmino(u) : void 0,
                  p,
                );
              }),
              (e.prototype.toAmino = function () {
                var t = this,
                  o = t.sequence,
                  e = t.source_port,
                  r = t.source_channel,
                  n = t.destination_port,
                  i = t.destination_channel,
                  a = t.data,
                  s = t.timeout_height,
                  c = t.timeout_timestamp,
                  u = {
                    sequence: o,
                    source_port: e,
                    source_channel: r,
                    destination_port: n,
                    destination_channel: i,
                    data: a,
                    timeout_height: s ? s.toAmino() : void 0,
                    timeout_timestamp: c,
                  };
                return u;
              }),
              (e.fromData = function (t) {
                var o = t.sequence,
                  r = t.source_port,
                  n = t.source_channel,
                  i = t.destination_port,
                  a = t.destination_channel,
                  s = t.data,
                  u = t.timeout_height,
                  p = t.timeout_timestamp;
                return new e(
                  o,
                  r,
                  n,
                  i,
                  a,
                  s,
                  u ? c.Height.fromData(u) : void 0,
                  Number.parseInt(p),
                );
              }),
              (e.prototype.toData = function () {
                var t = this,
                  o = t.sequence,
                  e = t.source_port,
                  r = t.source_channel,
                  n = t.destination_port,
                  i = t.destination_channel,
                  a = t.data,
                  s = t.timeout_height,
                  c = t.timeout_timestamp,
                  u = {
                    sequence: o,
                    source_port: e,
                    source_channel: r,
                    destination_port: n,
                    destination_channel: i,
                    data: a,
                    timeout_height: s ? s.toData() : void 0,
                    timeout_timestamp: c.toFixed(),
                  };
                return u;
              }),
              (e.fromProto = function (o) {
                return new e(
                  o.sequence.toNumber(),
                  o.sourcePort,
                  o.sourceChannel,
                  o.destinationPort,
                  o.destinationChannel,
                  t.from(o.data).toString("base64"),
                  o.timeoutHeight
                    ? c.Height.fromProto(o.timeoutHeight)
                    : void 0,
                  o.timeoutTimestamp.toNumber(),
                );
              }),
              (e.prototype.toProto = function () {
                var o = this,
                  e = o.sequence,
                  r = o.source_port,
                  n = o.source_channel,
                  s = o.destination_port,
                  c = o.destination_channel,
                  u = o.data,
                  p = o.timeout_height,
                  l = o.timeout_timestamp;
                return i.Packet.fromPartial({
                  sequence: a.default.fromNumber(e),
                  sourcePort: r,
                  sourceChannel: n,
                  destinationPort: s,
                  destinationChannel: c,
                  data: t.from(u, "base64"),
                  timeoutHeight: p ? p.toProto() : void 0,
                  timeoutTimestamp: a.default.fromNumber(l),
                });
              }),
              e
            );
          })(s.JSONSerializable);
        o.Packet = u;
      }).call(this, e(2).Buffer);
    },
    3670: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Allowance = void 0));
      var i = e(3424),
        a = e(3672),
        s = e(4307);
      (n(e(3424), o),
        n(e(3672), o),
        n(e(4307), o),
        (function (t) {
          function o(t, o) {
            switch (t.type) {
              case "feegrant/BasicAllowance":
              case "cosmos-sdk/BasicAllowance":
                return i.BasicAllowance.fromAmino(t, o);
              case "feegrant/PeriodicAllowance":
              case "cosmos-sdk/PeriodicAllowance":
                return a.PeriodicAllowance.fromAmino(t, o);
              case "feegrant/AllowedMsgAllowance":
              case "cosmos-sdk/AllowedMsgAllowance":
                return s.AllowedMsgAllowance.fromAmino(t, o);
            }
          }
          function e(t, o) {
            switch (t["@type"]) {
              case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
                return a.PeriodicAllowance.fromData(t, o);
              case "/cosmos.feegrant.v1beta1.BasicAllowance":
                return i.BasicAllowance.fromData(t, o);
              case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
                return s.AllowedMsgAllowance.fromData(t, o);
            }
          }
          function r(t, o) {
            switch (t.typeUrl) {
              case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
                return a.PeriodicAllowance.unpackAny(t, o);
              case "/cosmos.feegrant.v1beta1.BasicAllowance":
                return i.BasicAllowance.unpackAny(t, o);
              case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
                return s.AllowedMsgAllowance.unpackAny(t, o);
            }
            throw new Error("not supported allowance ".concat(t.typeUrl));
          }
          ((t.fromAmino = o), (t.fromData = e), (t.fromProto = r));
        })(o.Allowance || (o.Allowance = {})));
    },
    3672: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.PeriodicAllowance = void 0));
      var s = e(2756),
        c = e(2817),
        u = e(3424),
        p = e(2759),
        l = e(3671),
        f = a(e(2754)),
        d = (function (t) {
          function o(o, e, r, n, i) {
            var a = t.call(this) || this;
            return (
              (a.basic = o),
              (a.period = e),
              (a.period_reset = i),
              (a.period_spend_limit = new c.Coins(r)),
              (a.period_can_spend = new c.Coins(n)),
              a
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.basic,
                i = r.period,
                a = r.period_spend_limit,
                s = r.period_can_spend,
                p = r.period_reset;
              return new o(
                u.BasicAllowance.fromAmino(n, e),
                Number.parseInt(i),
                c.Coins.fromAmino(a),
                c.Coins.fromAmino(s),
                new Date(p),
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.basic,
                r = o.period,
                n = o.period_spend_limit,
                i = o.period_can_spend,
                a = o.period_reset;
              return {
                type: t
                  ? "feegrant/PeriodicAllowance"
                  : "cosmos-sdk/PeriodicAllowance",
                value: {
                  basic: e.toAmino(t),
                  period: r.toString(),
                  period_spend_limit: n.toAmino(),
                  period_can_spend: i.toAmino(),
                  period_reset: a.toISOString().replace(/\.000Z$/, "Z"),
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.basic,
                n = t.period,
                i = t.period_spend_limit,
                a = t.period_can_spend,
                s = t.period_reset;
              return new o(
                u.BasicAllowance.fromData(r),
                Number.parseInt(n),
                c.Coins.fromData(i),
                c.Coins.fromData(a),
                new Date(s),
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.basic,
                r = o.period,
                n = o.period_spend_limit,
                i = o.period_can_spend,
                a = o.period_reset;
              return {
                "@type": "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                basic: e.toData(),
                period: r.toString(),
                period_spend_limit: n.toData(),
                period_can_spend: i.toData(),
                period_reset: a.toISOString().replace(/\.000Z$/, "Z"),
              };
            }),
            (o.fromProto = function (t, e) {
              var r;
              return new o(
                u.BasicAllowance.fromProto(t.basic),
                null === (r = t.period) || void 0 === r
                  ? void 0
                  : r.seconds.toNumber(),
                c.Coins.fromProto(t.periodSpendLimit),
                c.Coins.fromProto(t.periodCanSpend),
                t.periodReset,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.basic,
                r = o.period,
                n = o.period_spend_limit,
                i = o.period_can_spend,
                a = o.period_reset;
              return l.PeriodicAllowance.fromPartial({
                basic: e,
                period: { seconds: f.fromNumber(r) },
                periodCanSpend: i.toProto(),
                periodReset: a,
                periodSpendLimit: n.toProto(),
              });
            }),
            (o.prototype.packAny = function (t) {
              return p.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                value: l.PeriodicAllowance.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(l.PeriodicAllowance.decode(t.value), e);
            }),
            o
          );
        })(s.JSONSerializable);
      o.PeriodicAllowance = d;
    },
    3684: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Channel = void 0));
      var n = e(3301),
        i = e(2756),
        a = e(5122),
        s = (function (t) {
          function o(o, e, r, n, i) {
            var a = t.call(this) || this;
            return (
              (a.state = o),
              (a.ordering = e),
              (a.counterparty = r),
              (a.connection_hops = n),
              (a.version = i),
              a
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.state,
                r = t.ordering,
                n = t.counterparty,
                i = t.connection_hops,
                s = t.version;
              return new o(
                e,
                r,
                n ? a.Counterparty.fromAmino(n) : void 0,
                i,
                s,
              );
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.state,
                e = t.ordering,
                r = t.counterparty,
                n = t.connection_hops,
                i = t.version,
                a = {
                  state: o,
                  ordering: e,
                  counterparty: r ? r.toAmino() : void 0,
                  connection_hops: n,
                  version: i,
                };
              return a;
            }),
            (o.fromData = function (t) {
              var e = t.state,
                r = t.ordering,
                n = t.counterparty,
                i = t.connection_hops,
                s = t.version;
              return new o(e, r, n ? a.Counterparty.fromData(n) : void 0, i, s);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.state,
                e = t.ordering,
                r = t.counterparty,
                n = t.connection_hops,
                i = t.version,
                a = {
                  state: o,
                  ordering: e,
                  counterparty: r ? r.toData() : void 0,
                  connection_hops: n,
                  version: i,
                };
              return a;
            }),
            (o.fromProto = function (t) {
              return new o(
                t.state,
                t.ordering,
                t.counterparty
                  ? a.Counterparty.fromProto(t.counterparty)
                  : void 0,
                t.connectionHops,
                t.version,
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.state,
                e = t.ordering,
                r = t.counterparty,
                i = t.connection_hops,
                a = t.version;
              return n.Channel.fromPartial({
                state: o,
                ordering: e,
                counterparty: r ? r.toProto() : void 0,
                connectionHops: i,
                version: a,
              });
            }),
            o
          );
        })(i.JSONSerializable);
      o.Channel = s;
    },
    4305: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5038), o),
        n(e(5039), o),
        n(e(5040), o),
        n(e(5042), o));
    },
    4306: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5043), o),
        n(e(5044), o));
    },
    4307: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.AllowedMsgAllowance = void 0));
      var n = e(2756),
        i = e(3424),
        a = e(3672),
        s = e(2759),
        c = e(3671),
        u = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.allowance = o), (r.allowed_messages = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.allowance,
                s = r.allowed_messages;
              return new o(
                "feegrant/BasicAllowance" === n.type ||
                  "cosmos-sdk/BasicAllowance" === n.type
                  ? i.BasicAllowance.fromAmino(n, e)
                  : a.PeriodicAllowance.fromAmino(n, e),
                s,
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.allowance,
                r = o.allowed_messages;
              return {
                type: t
                  ? "feegrant/AllowedMsgAllowance"
                  : "cosmos-sdk/AllowedMsgAllowance",
                value: { allowance: e.toAmino(t), allowed_messages: r },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.allowance,
                n = t.allowed_messages;
              return new o(
                "/cosmos.feegrant.v1beta1.BasicAllowance" === r["@type"]
                  ? i.BasicAllowance.fromData(r)
                  : a.PeriodicAllowance.fromData(r),
                n,
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.allowance,
                r = o.allowed_messages;
              return {
                "@type": "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                allowance: e.toData(),
                allowed_messages: r,
              };
            }),
            (o.fromProto = function (t, e) {
              var r = t.allowance;
              return new o(
                "/cosmos.feegrant.v1beta1.BasicAllowance" ===
                  (null === r || void 0 === r ? void 0 : r.typeUrl)
                  ? i.BasicAllowance.unpackAny(r, e)
                  : a.PeriodicAllowance.unpackAny(r, e),
                t.allowedMessages,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.allowance,
                r = o.allowed_messages;
              return c.AllowedMsgAllowance.fromPartial({
                allowance: e.packAny(t),
                allowedMessages: r,
              });
            }),
            (o.prototype.packAny = function (t) {
              return s.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                value: c.AllowedMsgAllowance.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(c.AllowedMsgAllowance.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.AllowedMsgAllowance = u;
    },
    4309: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5045), o),
        n(e(5046), o),
        n(e(5068), o),
        n(e(5069), o));
    },
    4310: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Proposal = void 0));
      var s = e(2817),
        c = e(2859),
        u = e(2756),
        p = e(4311),
        l = e(4312),
        f = e(5052),
        d = e(4315),
        _ = e(4316),
        v = e(4319),
        m = e(3172),
        h = a(e(2754)),
        y = (function (t) {
          function o(o, e, r, n, i, a, s, c, u) {
            var p = t.call(this) || this;
            return (
              (p.id = o),
              (p.content = e),
              (p.status = r),
              (p.final_tally_result = n),
              (p.submit_time = i),
              (p.deposit_end_time = a),
              (p.total_deposit = s),
              (p.voting_start_time = c),
              (p.voting_end_time = u),
              p
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.id,
                n = t.content,
                i = t.status,
                a = t.final_tally_result,
                u = t.submit_time,
                p = t.deposit_end_time,
                l = t.total_deposit,
                f = t.voting_start_time,
                d = t.voting_end_time;
              return new o(
                Number.parseInt(r),
                o.Content.fromAmino(n, e),
                i,
                {
                  yes: new c.Int(a.yes || 0),
                  no: new c.Int(a.no || 0),
                  abstain: new c.Int(a.abstain || 0),
                  no_with_veto: new c.Int(a.no_with_veto || 0),
                },
                new Date(u),
                new Date(p),
                s.Coins.fromAmino(l),
                new Date(f),
                new Date(d),
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.status,
                r = o.final_tally_result;
              return {
                id: this.id.toFixed(),
                content: this.content.toAmino(t),
                status: e,
                final_tally_result: {
                  yes: r.yes.toFixed(),
                  no: r.no.toFixed(),
                  abstain: r.abstain.toFixed(),
                  no_with_veto: r.no_with_veto.toFixed(),
                },
                submit_time: this.submit_time.toISOString(),
                deposit_end_time: this.deposit_end_time.toISOString(),
                total_deposit: this.total_deposit.toAmino(),
                voting_start_time: this.voting_start_time.toISOString(),
                voting_end_time: this.voting_end_time.toISOString(),
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.proposal_id,
                n = t.content,
                i = t.status,
                a = t.final_tally_result,
                u = t.submit_time,
                p = t.deposit_end_time,
                l = t.total_deposit,
                f = t.voting_start_time,
                d = t.voting_end_time;
              return new o(
                Number.parseInt(r),
                o.Content.fromData(n, e),
                (0, m.proposalStatusFromJSON)(i),
                {
                  yes: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.yes) || 0,
                  ),
                  no: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.no) || 0,
                  ),
                  abstain: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.abstain) || 0,
                  ),
                  no_with_veto: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.no_with_veto) || 0,
                  ),
                },
                new Date(u),
                new Date(p),
                s.Coins.fromData(l),
                new Date(f),
                new Date(d),
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.status,
                r = o.final_tally_result;
              return {
                proposal_id: this.id.toFixed(),
                content: this.content.toData(t),
                status: (0, m.proposalStatusToJSON)(e),
                final_tally_result: {
                  yes: r.yes.toString(),
                  no: r.no.toString(),
                  abstain: r.abstain.toString(),
                  no_with_veto: r.no_with_veto.toString(),
                },
                submit_time: this.submit_time.toISOString(),
                deposit_end_time: this.deposit_end_time.toISOString(),
                total_deposit: this.total_deposit.toData(),
                voting_start_time: this.voting_start_time.toISOString(),
                voting_end_time: this.voting_end_time.toISOString(),
              };
            }),
            (o.fromProto = function (t, e) {
              var r = t.proposalId,
                n = t.content,
                i = t.status,
                a = t.finalTallyResult,
                u = t.submitTime,
                p = t.depositEndTime,
                l = t.totalDeposit,
                f = t.votingStartTime,
                d = t.votingEndTime;
              return new o(
                r.toNumber(),
                o.Content.fromProto(n, e),
                i,
                {
                  yes: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.yes) || 0,
                  ),
                  no: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.no) || 0,
                  ),
                  abstain: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.abstain) || 0,
                  ),
                  no_with_veto: new c.Int(
                    (null === a || void 0 === a ? void 0 : a.noWithVeto) || 0,
                  ),
                },
                u,
                p,
                s.Coins.fromProto(l),
                f,
                d,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o,
                e = this,
                r = e.status,
                n = e.final_tally_result;
              return (
                n &&
                  (o = m.TallyResult.fromPartial({
                    yes: n.yes.toString(),
                    no: n.no.toString(),
                    abstain: n.abstain.toString(),
                    noWithVeto: n.no_with_veto.toString(),
                  })),
                m.Proposal.fromPartial({
                  proposalId: h.fromNumber(this.id),
                  content: this.content.packAny(t),
                  status: r,
                  finalTallyResult: o,
                  submitTime: this.submit_time,
                  depositEndTime: this.deposit_end_time,
                  totalDeposit: this.total_deposit.toProto(),
                  votingEndTime: this.voting_end_time,
                  votingStartTime: this.voting_start_time,
                })
              );
            }),
            o
          );
        })(u.JSONSerializable);
      ((o.Proposal = y),
        (function (t) {
          ((t.Status = m.ProposalStatus),
            (function (t) {
              function o(t, o) {
                switch (t.type) {
                  case "gov/TextProposal":
                  case "cosmos-sdk/TextProposal":
                    return d.TextProposal.fromAmino(t, o);
                  case "distribution/CommunityPoolSpendProposal":
                  case "cosmos-sdk/CommunityPoolSpendProposal":
                    return p.CommunityPoolSpendProposal.fromAmino(t, o);
                  case "params/ParameterChangeProposal":
                  case "cosmos-sdk/ParameterChangeProposal":
                    return l.ParameterChangeProposal.fromAmino(t, o);
                  case "upgrade/SoftwareUpgradeProposal":
                  case "cosmos-sdk/SoftwareUpgradeProposal":
                    return _.SoftwareUpgradeProposal.fromAmino(t, o);
                  case "upgrade/CancelSoftwareUpgradeProposal":
                  case "cosmos-sdk/CancelSoftwareUpgradeProposal":
                    return _.CancelSoftwareUpgradeProposal.fromAmino(t, o);
                  case "ibc/ClientUpdateProposal":
                    return f.ClientUpdateProposal.fromAmino(t, o);
                  case "wasm/ClearAdminProposal":
                    return v.ClearAdminProposal.fromAmino(t, o);
                  case "wasm/ExecuteContractProposal":
                    return v.ExecuteContractProposal.fromAmino(t, o);
                  case "wasm/InstantiateContractProposal":
                    return v.InstantiateContractProposal.fromAmino(t, o);
                  case "wasm/MigrateContractProposal":
                    return v.MigrateContractProposal.fromAmino(t, o);
                  case "wasm/PinCodesProposal":
                    return v.PinCodesProposal.fromAmino(t, o);
                  case "wasm/StoreCodeProposal":
                    return v.StoreCodeProposal.fromAmino(t, o);
                  case "wasm/SudoContractProposal":
                    return v.SudoContractProposal.fromAmino(t, o);
                  case "wasm/UnpinCodesProposal":
                    return v.UnpinCodesProposal.fromAmino(t, o);
                  case "wasm/UpdateAdminProposal":
                    return v.UpdateAdminProposal.fromAmino(t, o);
                  case "wasm/UpdateInstantiateConfigProposal":
                    return v.UpdateInstantiateConfigProposal.fromAmino(t, o);
                }
              }
              function e(t, o) {
                switch (t["@type"]) {
                  case "/cosmos.gov.v1beta1.TextProposal":
                    return d.TextProposal.fromData(t, o);
                  case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
                    return p.CommunityPoolSpendProposal.fromData(t, o);
                  case "/cosmos.params.v1beta1.ParameterChangeProposal":
                    return l.ParameterChangeProposal.fromData(t, o);
                  case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
                    return _.SoftwareUpgradeProposal.fromData(t, o);
                  case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
                    return _.CancelSoftwareUpgradeProposal.fromData(t, o);
                  case "/ibc.core.client.v1.ClientUpdateProposal":
                    return f.ClientUpdateProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.ClearAdminProposal":
                    return v.ClearAdminProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.ExecuteContractProposal":
                    return v.ExecuteContractProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.InstantiateContractProposal":
                    return v.InstantiateContractProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.MigrateContractProposal":
                    return v.MigrateContractProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.PinCodesProposal":
                    return v.PinCodesProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.StoreCodeProposal":
                    return v.StoreCodeProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.SudoContractProposal":
                    return v.SudoContractProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.UnpinCodesProposal":
                    return v.UnpinCodesProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.UpdateAdminProposal":
                    return v.UpdateAdminProposal.fromData(t, o);
                  case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
                    return v.UpdateInstantiateConfigProposal.fromData(t, o);
                }
              }
              function r(t, o) {
                var e = t.typeUrl;
                switch (e) {
                  case "/cosmos.gov.v1beta1.TextProposal":
                    return d.TextProposal.unpackAny(t, o);
                  case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
                    return p.CommunityPoolSpendProposal.unpackAny(t, o);
                  case "/cosmos.params.v1beta1.ParameterChangeProposal":
                    return l.ParameterChangeProposal.unpackAny(t, o);
                  case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
                    return _.SoftwareUpgradeProposal.unpackAny(t, o);
                  case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
                    return _.CancelSoftwareUpgradeProposal.unpackAny(t, o);
                  case "/ibc.core.client.v1.ClientUpdateProposal":
                    return f.ClientUpdateProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.ClearAdminProposal":
                    return v.ClearAdminProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.ExecuteContractProposal":
                    return v.ExecuteContractProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.InstantiateContractProposal":
                    return v.InstantiateContractProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.MigrateContractProposal":
                    return v.MigrateContractProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.PinCodesProposal":
                    return v.PinCodesProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.StoreCodeProposal":
                    return v.StoreCodeProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.SudoContractProposal":
                    return v.SudoContractProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.UnpinCodesProposal":
                    return v.UnpinCodesProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.UpdateAdminProposal":
                    return v.UpdateAdminProposal.unpackAny(t, o);
                  case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
                    return v.UpdateInstantiateConfigProposal.unpackAny(t, o);
                }
                throw "Proposal content ".concat(e, " not recognized");
              }
              ((t.fromAmino = o), (t.fromData = e), (t.fromProto = r));
            })(t.Content || (t.Content = {})));
        })((y = o.Proposal || (o.Proposal = {}))),
        (o.Proposal = y));
    },
    4311: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }), n(e(5047), o));
    },
    4315: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }), n(e(5054), o));
    },
    4321: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.WeightedVoteOption = o.Vote = void 0));
      var s = e(2756),
        c = e(3172),
        u = e(2859),
        p = a(e(2754)),
        l = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return (
              (n.proposal_id = o),
              (n.voter = e),
              (n.options = r),
              (n.Option = c.VoteOption),
              n
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.proposal_id,
                n = t.voter,
                i = t.options;
              return new o(
                Number.parseInt(r),
                n,
                i.map(function (t) {
                  return f.fromAmino(t);
                }),
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.options,
                i = {
                  proposal_id: e.toFixed(),
                  voter: r,
                  options: n.map(function (t) {
                    return t.toAmino();
                  }),
                };
              return i;
            }),
            (o.fromData = function (t, e) {
              var r = t.proposal_id,
                n = t.voter,
                i = t.options;
              return new o(
                Number.parseInt(r),
                n,
                i.map(function (t) {
                  return f.fromData(t);
                }),
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.options,
                i = {
                  proposal_id: e.toFixed(),
                  voter: r,
                  options: n.map(function (t) {
                    return t.toData();
                  }),
                };
              return i;
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.proposalId.toNumber(),
                t.voter,
                t.options.map(function (t) {
                  return f.fromProto(t);
                }),
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.options;
              return c.Vote.fromPartial({
                options: n.map(function (t) {
                  return t.toProto();
                }),
                proposalId: p.fromNumber(e),
                voter: r,
              });
            }),
            o
          );
        })(s.JSONSerializable);
      ((o.Vote = l),
        (function (t) {
          t.Option = c.VoteOption;
        })((l = o.Vote || (o.Vote = {}))),
        (o.Vote = l));
      var f = (function (t) {
        function o(o, e) {
          var r = t.call(this) || this;
          return ((r.option = o), (r.weight = new u.Dec(e)), r);
        }
        return (
          r(o, t),
          (o.fromAmino = function (t, e) {
            var r = t.option,
              n = t.weight;
            return new o(r, n);
          }),
          (o.prototype.toAmino = function (t) {
            var o = this,
              e = o.option,
              r = o.weight;
            return { option: e, weight: r.toString() };
          }),
          (o.fromData = function (t, e) {
            var r = t.option,
              n = t.weight;
            return new o(r, n);
          }),
          (o.prototype.toData = function (t) {
            var o = this,
              e = o.option,
              r = o.weight;
            return { option: e, weight: r.toString() };
          }),
          (o.fromProto = function (t, e) {
            return new o(t.option, t.weight);
          }),
          (o.prototype.toProto = function (t) {
            var o = this,
              e = o.option,
              r = o.weight;
            return c.WeightedVoteOption.fromPartial({
              option: e,
              weight: r.toString(),
            });
          }),
          o
        );
      })(s.JSONSerializable);
      o.WeightedVoteOption = f;
    },
    4338: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5102), o),
        n(e(5104), o),
        n(e(4339), o));
    },
    4339: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.DenomTrace = void 0));
      var n = e(5106),
        i = e(2756),
        a = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.path = o), (r.base_denom = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.path,
                r = t.base_denom;
              return new o(e, r);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.path,
                e = t.base_denom,
                r = { path: o, base_denom: e };
              return r;
            }),
            (o.fromData = function (t) {
              var e = t.path,
                r = t.base_denom;
              return new o(e, r);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.path,
                e = t.base_denom,
                r = { path: o, base_denom: e };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(t.path, t.baseDenom);
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.path,
                e = t.base_denom;
              return n.DenomTrace.fromPartial({ path: o, baseDenom: e });
            }),
            o
          );
        })(i.JSONSerializable);
      o.DenomTrace = a;
    },
    4340: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5107), o),
        n(e(5108), o),
        n(e(5114), o),
        n(e(5115), o));
    },
    4342: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5116), o),
        n(e(5118), o),
        n(e(5119), o),
        n(e(5120), o));
    },
    4343: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(5121), o),
        n(e(5123), o),
        n(e(5124), o),
        n(e(5125), o),
        n(e(5126), o),
        n(e(5127), o),
        n(e(5128), o),
        n(e(5129), o),
        n(e(5130), o),
        n(e(5131), o));
    },
    5038: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgSetWithdrawAddress = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3669),
        s = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.delegator_address = o), (r.withdraw_address = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.delegator_address,
                i = r.withdraw_address;
              return new o(n, i);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.delegator_address,
                r = o.withdraw_address;
              return {
                type: t
                  ? "distribution/MsgModifyWithdrawAddress"
                  : "cosmos-sdk/MsgModifyWithdrawAddress",
                value: { delegator_address: e, withdraw_address: r },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.delegator_address,
                n = t.withdraw_address;
              return new o(r, n);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.delegator_address,
                r = o.withdraw_address;
              return {
                "@type": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                delegator_address: e,
                withdraw_address: r,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.delegatorAddress, t.withdrawAddress);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.delegator_address,
                r = o.withdraw_address;
              return a.MsgSetWithdrawAddress.fromPartial({
                delegatorAddress: e,
                withdrawAddress: r,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: a.MsgSetWithdrawAddress.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgSetWithdrawAddress.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgSetWithdrawAddress = s;
    },
    5039: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgWithdrawDelegatorReward = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3669),
        s = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.delegator_address = o), (r.validator_address = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.delegator_address,
                i = r.validator_address;
              return new o(n, i);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.delegator_address,
                r = o.validator_address;
              return {
                type: t
                  ? "distribution/MsgWithdrawDelegationReward"
                  : "cosmos-sdk/MsgWithdrawDelegationReward",
                value: { delegator_address: e, validator_address: r },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.delegator_address,
                n = t.validator_address;
              return new o(r, n);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.delegator_address,
                r = o.validator_address;
              return {
                "@type":
                  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                delegator_address: e,
                validator_address: r,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.delegatorAddress, t.validatorAddress);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.delegator_address,
                r = o.validator_address;
              return a.MsgWithdrawDelegatorReward.fromPartial({
                delegatorAddress: e,
                validatorAddress: r,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl:
                  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: a.MsgWithdrawDelegatorReward.encode(
                  this.toProto(t),
                ).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(
                a.MsgWithdrawDelegatorReward.decode(t.value),
                e,
              );
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgWithdrawDelegatorReward = s;
    },
    5040: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgWithdrawValidatorCommission = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(5041),
        s = (function (t) {
          function o(o) {
            var e = t.call(this) || this;
            return ((e.validator_address = o), e);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value.validator_address;
              return new o(r);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this.validator_address;
              return {
                type: t
                  ? "distribution/MsgWithdrawValidatorCommission"
                  : "cosmos-sdk/MsgWithdrawValidatorCommission",
                value: { validator_address: o },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.validator_address;
              return new o(r);
            }),
            (o.prototype.toData = function (t) {
              var o = this.validator_address;
              return {
                "@type":
                  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                validator_address: o,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.validatorAddress);
            }),
            (o.prototype.toProto = function (t) {
              var o = this.validator_address;
              return a.MsgWithdrawValidatorCommission.fromPartial({
                validatorAddress: o,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl:
                  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: a.MsgWithdrawValidatorCommission.encode(
                  this.toProto(t),
                ).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(
                a.MsgWithdrawValidatorCommission.decode(t.value),
                e,
              );
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgWithdrawValidatorCommission = s;
    },
    5042: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgFundCommunityPool = void 0));
      var n = e(2756),
        i = e(2817),
        a = e(2759),
        s = e(3669),
        c = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.depositor = o), (r.amount = new i.Coins(e)), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.depositor,
                a = r.amount;
              return new o(n, i.Coins.fromAmino(a));
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.depositor,
                r = o.amount;
              return {
                type: t
                  ? "distribution/MsgFundCommunityPool"
                  : "cosmos-sdk/MsgFundCommunityPool",
                value: { depositor: e, amount: r.toAmino() },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.depositor,
                n = t.amount;
              return new o(r, i.Coins.fromData(n));
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.depositor,
                r = o.amount;
              return {
                "@type": "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                depositor: e,
                amount: r.toData(),
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.depositor, i.Coins.fromProto(t.amount));
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.depositor,
                r = o.amount;
              return s.MsgFundCommunityPool.fromPartial({
                amount: r.toProto(),
                depositor: e,
              });
            }),
            (o.prototype.packAny = function (t) {
              return a.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: s.MsgFundCommunityPool.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(s.MsgFundCommunityPool.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgFundCommunityPool = c;
    },
    5043: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgGrantAllowance = void 0));
      var n = e(2756),
        i = e(3670),
        a = e(2759),
        s = e(4308),
        c = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.granter = o), (n.grantee = e), (n.allowance = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.granter,
                a = r.grantee,
                s = r.allowance;
              return new o(n, a, i.Allowance.fromAmino(s, e));
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.granter,
                r = o.grantee,
                n = o.allowance;
              return {
                type: t
                  ? "feegrant/MsgGrantAllowance"
                  : "cosmos-sdk/MsgGrantAllowance",
                value: { granter: e, grantee: r, allowance: n.toAmino(t) },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.granter,
                n = t.grantee,
                a = t.allowance;
              return new o(r, n, i.Allowance.fromData(a, e));
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.granter,
                r = o.grantee,
                n = o.allowance;
              return {
                "@type": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                granter: e,
                grantee: r,
                allowance: n.toData(t),
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.granter,
                t.grantee,
                i.Allowance.fromProto(t.allowance, e),
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.granter,
                r = o.grantee,
                n = o.allowance;
              return s.MsgGrantAllowance.fromPartial({
                allowance: n.packAny(t),
                grantee: r,
                granter: e,
              });
            }),
            (o.prototype.packAny = function (t) {
              return a.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: s.MsgGrantAllowance.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(s.MsgGrantAllowance.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgGrantAllowance = c;
    },
    5044: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgRevokeAllowance = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(4308),
        s = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.granter = o), (r.grantee = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.granter,
                i = r.grantee;
              return new o(n, i);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.granter,
                r = o.grantee;
              return {
                type: t
                  ? "feegrant/MsgRevokeAllowance"
                  : "cosmos-sdk/MsgRevokeAllowance",
                value: { granter: e, grantee: r },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.granter,
                n = t.grantee;
              return new o(r, n);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.granter,
                r = o.grantee;
              return {
                "@type": "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                granter: e,
                grantee: r,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.granter, t.grantee);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.granter,
                r = o.grantee;
              return a.MsgRevokeAllowance.fromPartial({
                grantee: r,
                granter: e,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: a.MsgRevokeAllowance.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgRevokeAllowance.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgRevokeAllowance = s;
    },
    5045: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgDeposit = void 0));
      var s = e(2817),
        c = e(2756),
        u = e(2759),
        p = e(3425),
        l = a(e(2754)),
        f = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return (
              (n.proposal_id = o),
              (n.depositor = e),
              (n.amount = new s.Coins(r)),
              n
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.proposal_id,
                i = r.depositor,
                a = r.amount;
              return new o(Number.parseInt(n), i, s.Coins.fromAmino(a));
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.depositor,
                n = o.amount;
              return {
                type: t ? "gov/MsgDeposit" : "cosmos-sdk/MsgDeposit",
                value: {
                  proposal_id: e.toString(),
                  depositor: r,
                  amount: n.toAmino(),
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.proposal_id,
                n = t.depositor,
                i = t.amount;
              return new o(Number.parseInt(r), n, s.Coins.fromData(i));
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.depositor,
                n = o.amount;
              return {
                "@type": "/cosmos.gov.v1beta1.MsgDeposit",
                proposal_id: e.toString(),
                depositor: r,
                amount: n.toData(),
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.proposalId.toNumber(),
                t.depositor,
                s.Coins.fromProto(t.amount),
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.depositor,
                n = o.amount;
              return p.MsgDeposit.fromPartial({
                amount: n.toProto(),
                depositor: r,
                proposalId: l.fromNumber(e),
              });
            }),
            (o.prototype.packAny = function (t) {
              return u.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: p.MsgDeposit.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(p.MsgDeposit.decode(t.value), e);
            }),
            o
          );
        })(c.JSONSerializable);
      o.MsgDeposit = f;
    },
    5046: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgSubmitProposal = void 0));
      var n = e(2817),
        i = e(4310),
        a = e(2756),
        s = e(2759),
        c = e(3425),
        u = (function (t) {
          function o(o, e, r) {
            var i = t.call(this) || this;
            return (
              (i.content = o),
              (i.proposer = r),
              (i.initial_deposit = new n.Coins(e)),
              i
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                a = r.content,
                s = r.initial_deposit,
                c = r.proposer;
              return new o(
                i.Proposal.Content.fromAmino(a, e),
                n.Coins.fromAmino(s),
                c,
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.content,
                r = o.initial_deposit,
                n = o.proposer;
              return {
                type: t
                  ? "gov/MsgSubmitProposal"
                  : "cosmos-sdk/MsgSubmitProposal",
                value: {
                  content: e.toAmino(t),
                  initial_deposit: r.toAmino(),
                  proposer: n,
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.content,
                a = t.initial_deposit,
                s = t.proposer;
              return new o(
                i.Proposal.Content.fromData(r, e),
                n.Coins.fromData(a),
                s,
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.content,
                r = o.initial_deposit,
                n = o.proposer;
              return {
                "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal",
                content: e.toData(t),
                initial_deposit: r.toData(),
                proposer: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                i.Proposal.Content.fromProto(t.content, e),
                n.Coins.fromProto(t.initialDeposit),
                t.proposer,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.content,
                r = o.initial_deposit,
                n = o.proposer;
              return c.MsgSubmitProposal.fromPartial({
                content: e.packAny(t),
                initialDeposit: r.toProto(),
                proposer: n,
              });
            }),
            (o.prototype.packAny = function (t) {
              return s.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: c.MsgSubmitProposal.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(c.MsgSubmitProposal.decode(t.value), e);
            }),
            o
          );
        })(a.JSONSerializable);
      o.MsgSubmitProposal = u;
    },
    5047: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.CommunityPoolSpendProposal = void 0));
      var n = e(2756),
        i = e(2817),
        a = e(2841),
        s = e(5048),
        c = (function (t) {
          function o(o, e, r, n) {
            var a = t.call(this) || this;
            return (
              (a.title = o),
              (a.description = e),
              (a.recipient = r),
              (a.amount = new i.Coins(n)),
              a
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.title,
                a = r.description,
                s = r.recipient,
                c = r.amount;
              return new o(n, a, s, i.Coins.fromAmino(c));
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.title,
                r = o.description,
                n = o.recipient,
                i = o.amount;
              return {
                type: t
                  ? "distribution/CommunityPoolSpendProposal"
                  : "cosmos-sdk/CommunityPoolSpendProposal",
                value: {
                  title: e,
                  description: r,
                  recipient: n,
                  amount: i.toAmino(),
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.title,
                n = t.description,
                a = t.recipient,
                s = t.amount;
              return new o(r, n, a, i.Coins.fromData(s));
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.title,
                r = o.description,
                n = o.recipient,
                i = o.amount;
              return {
                "@type":
                  "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                title: e,
                description: r,
                recipient: n,
                amount: i.toData(),
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.title,
                t.description,
                t.recipient,
                i.Coins.fromProto(t.amount),
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.title,
                r = o.description,
                n = o.recipient,
                i = o.amount;
              return s.CommunityPoolSpendProposal.fromPartial({
                amount: i.toProto(),
                description: r,
                recipient: n,
                title: e,
              });
            }),
            (o.prototype.packAny = function (t) {
              return a.Any.fromPartial({
                typeUrl:
                  "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                value: s.CommunityPoolSpendProposal.encode(
                  this.toProto(t),
                ).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(
                s.CommunityPoolSpendProposal.decode(t.value),
                e,
              );
            }),
            o
          );
        })(n.JSONSerializable);
      o.CommunityPoolSpendProposal = c;
    },
    5052: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }), n(e(5053), o));
    },
    5053: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.ClientUpdateProposal = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3058),
        s = (function (t) {
          function o(o, e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.title = o),
              (i.description = e),
              (i.subjectClientId = r),
              (i.substituteClientId = n),
              i
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.title,
                i = r.description,
                a = r.subjectClientId,
                s = r.substituteClientId;
              return new o(n, i, a, s);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.title,
                r = o.description,
                n = o.subjectClientId,
                i = o.substituteClientId;
              return {
                type: "ibc/ClientUpdateProposal",
                value: {
                  title: e,
                  description: r,
                  subjectClientId: n,
                  substituteClientId: i,
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.title,
                n = t.description,
                i = t.subject_client_id,
                a = t.substitute_client_id;
              return new o(r, n, i, a);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.title,
                r = o.description,
                n = o.subjectClientId,
                i = o.substituteClientId;
              return {
                "@type": "/ibc.core.client.v1.ClientUpdateProposal",
                title: e,
                description: r,
                subject_client_id: n,
                substitute_client_id: i,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.title,
                t.description,
                t.subjectClientId,
                t.substituteClientId,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.title,
                r = o.description,
                n = o.subjectClientId,
                i = o.substituteClientId;
              return a.ClientUpdateProposal.fromPartial({
                subjectClientId: n,
                substituteClientId: i,
                description: r,
                title: e,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
                value: a.ClientUpdateProposal.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.ClientUpdateProposal.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.ClientUpdateProposal = s;
    },
    5054: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.TextProposal = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3172),
        s = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.title = o), (r.description = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.title,
                i = r.description;
              return new o(n, i);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.title,
                r = o.description;
              return {
                type: t ? "gov/TextProposal" : "cosmos-sdk/TextProposal",
                value: { title: e, description: r },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.title,
                n = t.description;
              return new o(r, n);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.title,
                r = o.description;
              return {
                "@type": "/cosmos.gov.v1beta1.TextProposal",
                title: e,
                description: r,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.title, t.description);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.title,
                r = o.description;
              return a.TextProposal.fromPartial({ description: r, title: e });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: a.TextProposal.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.TextProposal.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.TextProposal = s;
    },
    5068: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgVote = void 0));
      var s = e(2756),
        c = e(2759),
        u = e(3425),
        p = e(3172),
        l = a(e(2754)),
        f = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.proposal_id = o), (n.voter = e), (n.option = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.proposal_id,
                i = r.voter,
                a = r.option;
              return new o(Number.parseInt(n), i, a);
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.option;
              return {
                type: t ? "gov/MsgVote" : "cosmos-sdk/MsgVote",
                value: { proposal_id: e.toFixed(), voter: r, option: n },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.proposal_id,
                n = t.voter,
                i = t.option;
              return new o(Number.parseInt(r), n, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.option;
              return {
                "@type": "/cosmos.gov.v1beta1.MsgVote",
                proposal_id: e.toFixed(),
                voter: r,
                option: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.proposalId.toNumber(), t.voter, t.option);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.option;
              return u.MsgVote.fromPartial({
                option: n,
                proposalId: l.fromNumber(e),
                voter: r,
              });
            }),
            (o.prototype.packAny = function (t) {
              return c.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: u.MsgVote.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(u.MsgVote.decode(t.value));
            }),
            o
          );
        })(s.JSONSerializable);
      ((o.MsgVote = f),
        (function (t) {
          t.Option = p.VoteOption;
        })((f = o.MsgVote || (o.MsgVote = {}))),
        (o.MsgVote = f));
    },
    5069: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgVoteWeighted = void 0));
      var s = e(2756),
        c = e(4321),
        u = e(2759),
        p = e(3425),
        l = a(e(2754)),
        f = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.proposal_id = o), (n.voter = e), (n.options = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.proposal_id,
                i = r.voter,
                a = r.options;
              return new o(
                Number.parseInt(n),
                i,
                a.map(function (t) {
                  return c.WeightedVoteOption.fromAmino(t);
                }),
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.options;
              return {
                type: t ? "gov/MsgVoteWeighted" : "cosmos-sdk/MsgVoteWeighted",
                value: {
                  proposal_id: e.toFixed(),
                  voter: r,
                  options: n.map(function (t) {
                    return t.toAmino();
                  }),
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.proposal_id,
                n = t.voter,
                i = t.options;
              return new o(
                Number.parseInt(r),
                n,
                i.map(function (t) {
                  return c.WeightedVoteOption.fromData(t);
                }),
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.options;
              return {
                "@type": "/cosmos.gov.v1beta1.MsgVoteWeighted",
                proposal_id: e.toFixed(),
                voter: r,
                options: n.map(function (t) {
                  return t.toData();
                }),
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.proposalId.toNumber(),
                t.voter,
                t.options.map(function (t) {
                  return c.WeightedVoteOption.fromProto(t);
                }),
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.proposal_id,
                r = o.voter,
                n = o.options;
              return p.MsgVoteWeighted.fromPartial({
                options: n.map(function (t) {
                  return t.toProto();
                }),
                proposalId: l.fromNumber(e),
                voter: r,
              });
            }),
            (o.prototype.packAny = function (t) {
              return u.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: p.MsgVoteWeighted.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(p.MsgVoteWeighted.decode(t.value));
            }),
            o
          );
        })(s.JSONSerializable);
      o.MsgVoteWeighted = f;
    },
    5102: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgTransfer = void 0));
      var s = e(2756),
        c = e(2915),
        u = a(e(2754)),
        p = e(2759),
        l = e(5103),
        f = e(2891),
        d = e(2859),
        _ = (function (t) {
          function o(o, e, r, n, i, a, s) {
            var c = t.call(this) || this;
            if (!a && !s)
              throw "both of timeout_height and timeout_timestamp are undefined";
            return (
              (c.source_port = o),
              (c.source_channel = e),
              (c.token = r),
              (c.sender = n),
              (c.receiver = i),
              (c.timeout_height = a),
              (c.timeout_timestamp = s ? d.Numeric.parse(s) : void 0),
              c
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.source_port,
                i = r.source_channel,
                a = r.token,
                s = r.sender,
                u = r.receiver,
                p = r.timeout_height,
                l = r.timeout_timestamp;
              if (!p && !l)
                throw "both of timeout_height and timeout_timestamp are undefined";
              return new o(
                n,
                i,
                a ? c.Coin.fromAmino(a) : void 0,
                s,
                u,
                p ? f.Height.fromAmino(p) : void 0,
                l ? d.Numeric.parse(l) : void 0,
              );
            }),
            (o.prototype.toAmino = function (t) {
              var o = this,
                e = o.source_port,
                r = o.source_channel,
                n = o.token,
                i = o.sender,
                a = o.receiver,
                s = o.timeout_height,
                c = o.timeout_timestamp;
              return {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                  source_port: e,
                  source_channel: r,
                  token: n ? n.toAmino() : void 0,
                  sender: i,
                  receiver: a,
                  timeout_height:
                    (null === s || void 0 === s ? void 0 : s.toAmino()) || {},
                  timeout_timestamp:
                    (null === c || void 0 === c ? void 0 : c.toFixed()) ||
                    void 0,
                },
              };
            }),
            (o.fromData = function (t, e) {
              var r = t.source_port,
                n = t.source_channel,
                i = t.token,
                a = t.sender,
                s = t.receiver,
                u = t.timeout_timestamp,
                p = t.timeout_height;
              if (!p && !u)
                throw "both of timeout_height and timeout_timestamp are undefined";
              return new o(
                r,
                n,
                i ? c.Coin.fromData(i) : void 0,
                a,
                s,
                p ? f.Height.fromData(p) : void 0,
                u ? Number.parseInt(u) : void 0,
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.source_port,
                r = o.source_channel,
                n = o.token,
                i = o.sender,
                a = o.receiver,
                s = o.timeout_height,
                c = o.timeout_timestamp;
              return {
                "@type": "/ibc.applications.transfer.v1.MsgTransfer",
                source_port: e,
                source_channel: r,
                token: n ? n.toData() : void 0,
                sender: i,
                receiver: a,
                timeout_height: s ? s.toData() : new f.Height(0, 0).toData(),
                timeout_timestamp:
                  (null === c || void 0 === c ? void 0 : c.toFixed()) || "0",
              };
            }),
            (o.fromProto = function (t, e) {
              if (!t.timeoutHeight && 0 == t.timeoutTimestamp.toNumber())
                throw "both of timeout_height and timeout_timestamp are empty";
              return new o(
                t.sourcePort,
                t.sourceChannel,
                t.token ? c.Coin.fromProto(t.token) : void 0,
                t.sender,
                t.receiver,
                t.timeoutHeight ? f.Height.fromProto(t.timeoutHeight) : void 0,
                t.timeoutTimestamp.toNumber(),
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.source_port,
                r = o.source_channel,
                n = o.token,
                i = o.sender,
                a = o.receiver,
                s = o.timeout_height,
                c = o.timeout_timestamp;
              return l.MsgTransfer.fromPartial({
                sourcePort: e,
                sourceChannel: r,
                token: n ? n.toProto() : void 0,
                sender: i,
                receiver: a,
                timeoutHeight: s ? s.toProto() : void 0,
                timeoutTimestamp: u.fromString(
                  (null === c || void 0 === c ? void 0 : c.toFixed()) || "0",
                ),
              });
            }),
            (o.prototype.packAny = function (t) {
              return p.Any.fromPartial({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: l.MsgTransfer.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(l.MsgTransfer.decode(t.value), e);
            }),
            o
          );
        })(s.JSONSerializable);
      o.MsgTransfer = _;
    },
    5104: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.FungibleTokenPacketData = void 0));
      var n = e(5105),
        i = e(2756),
        a = (function (t) {
          function o(o, e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.denom = o),
              (i.amount = e),
              (i.sender = r),
              (i.receiver = n),
              i
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.denom,
                r = t.amount,
                n = t.sender,
                i = t.receiver;
              return new o(e, r, n, i);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.denom,
                e = t.amount,
                r = t.sender,
                n = t.receiver,
                i = { denom: o, amount: e, sender: r, receiver: n };
              return i;
            }),
            (o.fromData = function (t) {
              var e = t.denom,
                r = t.amount,
                n = t.sender,
                i = t.receiver;
              return new o(e, r, n, i);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.denom,
                e = t.amount,
                r = t.sender,
                n = t.receiver,
                i = { denom: o, amount: e, sender: r, receiver: n };
              return i;
            }),
            (o.fromProto = function (t) {
              return new o(t.denom, t.amount, t.sender, t.receiver);
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.denom,
                e = t.amount,
                r = t.sender,
                i = t.receiver;
              return n.FungibleTokenPacketData.fromPartial({
                denom: o,
                amount: e,
                sender: r,
                receiver: i,
              });
            }),
            o
          );
        })(i.JSONSerializable);
      o.FungibleTokenPacketData = a;
    },
    5107: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgCreateClient = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3432),
        s = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return (
              (n.client_state = o),
              (n.consensus_state = e),
              (n.signer = r),
              n
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, o) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t, e) {
              var r = t.client_state,
                n = t.consensus_state,
                i = t.signer;
              return new o(r, n, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.client_state,
                r = o.consensus_state,
                n = o.signer;
              return {
                "@type": "/ibc.core.client.v1.MsgCreateClient",
                client_state: e,
                consensus_state: r,
                signer: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.clientState, t.consensusState, t.signer);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.client_state,
                r = o.consensus_state,
                n = o.signer;
              return a.MsgCreateClient.fromPartial({
                clientState: e,
                consensusState: r,
                signer: n,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: a.MsgCreateClient.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgCreateClient.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgCreateClient = s;
    },
    5108: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgUpdateClient = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3432),
        s = e(5109),
        c = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.client_id = o), (n.header = e), (n.signer = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, o) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t, e) {
              var r = t.client_id,
                n = t.header,
                i = t.signer;
              return new o(r, n ? s.Header.fromData(n) : void 0, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.client_id,
                r = o.header,
                n = o.signer;
              return {
                "@type": "/ibc.core.client.v1.MsgUpdateClient",
                client_id: e,
                header:
                  (null === r || void 0 === r ? void 0 : r.toData()) || void 0,
                signer: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.clientId,
                t.header ? s.Header.unpackAny(t.header) : void 0,
                t.signer,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.client_id,
                r = o.header,
                n = o.signer;
              return a.MsgUpdateClient.fromPartial({
                clientId: e,
                header:
                  (null === r || void 0 === r ? void 0 : r.packAny()) || void 0,
                signer: n,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: a.MsgUpdateClient.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgUpdateClient.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgUpdateClient = c;
    },
    5109: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Header = void 0));
      var n = e(2756),
        i = e(5110),
        a = e(2891),
        s = e(5111),
        c = e(2759),
        u = (function (t) {
          function o(o, e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.signedHeader = o),
              (i.validatorSet = e),
              (i.trustedHeight = r),
              (i.trustedValidators = n),
              i
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t) {
              var e = t.signed_header,
                r = t.validator_set,
                n = t.trusted_height,
                i = t.trusted_validators;
              return new o(
                e ? s.SignedHeader.fromData(e) : void 0,
                r ? s.ValidatorSet.fromData(r) : void 0,
                n ? a.Height.fromData(n) : void 0,
                i ? s.ValidatorSet.fromData(i) : void 0,
              );
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.signedHeader,
                e = t.validatorSet,
                r = t.trustedHeight,
                n = t.trustedValidators;
              return {
                signed_header:
                  (null === o || void 0 === o ? void 0 : o.toData()) || void 0,
                validator_set:
                  (null === e || void 0 === e ? void 0 : e.toData()) || void 0,
                trusted_height:
                  (null === r || void 0 === r ? void 0 : r.toData()) || void 0,
                trusted_validators:
                  (null === n || void 0 === n ? void 0 : n.toData()) || void 0,
              };
            }),
            (o.fromProto = function (t) {
              var e = t.signedHeader,
                r = t.validatorSet,
                n = t.trustedHeight,
                i = t.trustedValidators;
              return new o(
                e ? s.SignedHeader.fromProto(e) : void 0,
                r ? s.ValidatorSet.fromProto(r) : void 0,
                n ? a.Height.fromProto(n) : void 0,
                i ? s.ValidatorSet.fromProto(i) : void 0,
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.signedHeader,
                e = t.validatorSet,
                r = t.trustedHeight,
                n = t.trustedValidators;
              return i.Header.fromPartial({
                signedHeader:
                  (null === o || void 0 === o ? void 0 : o.toProto()) || void 0,
                validatorSet:
                  (null === e || void 0 === e ? void 0 : e.toProto()) || void 0,
                trustedHeight:
                  (null === r || void 0 === r ? void 0 : r.toProto()) || void 0,
                trustedValidators:
                  (null === n || void 0 === n ? void 0 : n.toProto()) || void 0,
              });
            }),
            (o.prototype.packAny = function () {
              return c.Any.fromPartial({
                typeUrl: "ibc.lightclients.tendermint.v1.Header",
                value: i.Header.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t) {
              return o.fromProto(i.Header.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.Header = u;
    },
    5111: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__extends) ||
            (function () {
              var t = function (o, e) {
                return (
                  (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, o) {
                        t.__proto__ = o;
                      }) ||
                    function (t, o) {
                      for (var e in o)
                        Object.prototype.hasOwnProperty.call(o, e) &&
                          (t[e] = o[e]);
                    }),
                  t(o, e)
                );
              };
              return function (o, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function r() {
                  this.constructor = o;
                }
                (t(o, e),
                  (o.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r())));
              };
            })(),
          n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, o, e, r) {
                  void 0 === r && (r = e);
                  var n = Object.getOwnPropertyDescriptor(o, e);
                  ((n &&
                    !("get" in n
                      ? !o.__esModule
                      : n.writable || n.configurable)) ||
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return o[e];
                      },
                    }),
                    Object.defineProperty(t, r, n));
                }
              : function (t, o, e, r) {
                  (void 0 === r && (r = e), (t[r] = o[e]));
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, o) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: o,
                  });
                }
              : function (t, o) {
                  t["default"] = o;
                }),
          a =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var o = {};
              if (null != t)
                for (var e in t)
                  "default" !== e &&
                    Object.prototype.hasOwnProperty.call(t, e) &&
                    n(o, t, e);
              return (i(o, t), o);
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.Validator =
            o.ValidatorSet =
            o.CommitSig =
            o.Commit =
            o.PartSetHeader =
            o.BlockID =
            o.SignedHeader =
            o.Header =
              void 0));
        var s = e(3429),
          c = e(3679),
          u = a(e(2754)),
          p = e(2756),
          l = e(5112),
          f = e(5113),
          d = (function (o) {
            function e(t, e, r, n, i, a, s, c, u, p, l, f, d, _) {
              var v = o.call(this) || this;
              return (
                (v.version = t),
                (v.chainId = e),
                (v.height = r),
                (v.time = n),
                (v.lastBlockId = i),
                (v.lastCommitHash = a),
                (v.dataHash = s),
                (v.validatorsHash = c),
                (v.nextValidatorsHash = u),
                (v.consensusHash = p),
                (v.appHash = l),
                (v.lastResultsHash = f),
                (v.evidenceHash = d),
                (v.proposerAddress = _),
                v
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function () {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t) {
                var o = t.version,
                  r = t.chain_id,
                  n = t.height,
                  i = t.time,
                  a = t.last_block_id,
                  s = t.last_commit_hash,
                  c = t.data_hash,
                  u = t.validators_hash,
                  p = t.next_validators_hash,
                  f = t.consensus_hash,
                  d = t.app_hash,
                  _ = t.last_results_hash,
                  m = t.evidence_hash,
                  h = t.proposer_address;
                return new e(
                  o ? l.Consensus.fromData(o) : void 0,
                  r,
                  n,
                  i ? new Date(i) : void 0,
                  a ? v.fromData(a) : void 0,
                  s,
                  c,
                  u,
                  p,
                  f,
                  d,
                  _,
                  m,
                  h,
                );
              }),
              (e.prototype.toData = function () {
                var t = this,
                  o = t.version,
                  e = t.chainId,
                  r = t.height,
                  n = t.time,
                  i = t.lastBlockId,
                  a = t.lastCommitHash,
                  s = t.dataHash,
                  c = t.validatorsHash,
                  u = t.nextValidatorsHash,
                  p = t.consensusHash,
                  l = t.appHash,
                  f = t.lastResultsHash,
                  d = t.evidenceHash,
                  _ = t.proposerAddress,
                  v = {
                    version: null === o || void 0 === o ? void 0 : o.toData(),
                    chain_id: e,
                    height: r,
                    time: n ? n.toISOString().replace(/\.000Z$/, "Z") : void 0,
                    last_block_id: i ? i.toData() : void 0,
                    last_commit_hash: a,
                    data_hash: s,
                    validators_hash: c,
                    next_validators_hash: u,
                    consensus_hash: p,
                    app_hash: l,
                    last_results_hash: f,
                    evidence_hash: d,
                    proposer_address: _,
                  };
                return v;
              }),
              (e.fromProto = function (o) {
                var r = o.version,
                  n = o.chainId,
                  i = o.height,
                  a = o.time,
                  s = o.lastBlockId,
                  c = o.lastCommitHash,
                  u = o.dataHash,
                  p = o.validatorsHash,
                  f = o.nextValidatorsHash,
                  d = o.consensusHash,
                  _ = o.appHash,
                  m = o.lastResultsHash,
                  h = o.evidenceHash,
                  y = o.proposerAddress;
                return new e(
                  r ? l.Consensus.fromProto(r) : void 0,
                  n,
                  i.toString(),
                  a,
                  s ? v.fromProto(s) : void 0,
                  t.from(c).toString("base64"),
                  t.from(u).toString("base64"),
                  t.from(p).toString("base64"),
                  t.from(f).toString("base64"),
                  t.from(d).toString("base64"),
                  t.from(_).toString("base64"),
                  t.from(m).toString("base64"),
                  t.from(h).toString("base64"),
                  y.toString(),
                );
              }),
              (e.prototype.toProto = function () {
                var o = this,
                  e = o.version,
                  r = o.chainId,
                  n = o.height,
                  i = o.time,
                  a = o.lastBlockId,
                  c = o.lastCommitHash,
                  p = o.dataHash,
                  l = o.validatorsHash,
                  f = o.nextValidatorsHash,
                  d = o.consensusHash,
                  _ = o.appHash,
                  v = o.lastResultsHash,
                  m = o.evidenceHash,
                  h = o.proposerAddress;
                return s.Header.fromPartial({
                  version: null === e || void 0 === e ? void 0 : e.toProto(),
                  chainId: r,
                  height: u.fromString(n),
                  time: i,
                  lastBlockId:
                    null === a || void 0 === a ? void 0 : a.toProto(),
                  lastCommitHash: t.from(c, "base64"),
                  dataHash: t.from(p, "base64"),
                  validatorsHash: t.from(l, "base64"),
                  nextValidatorsHash: t.from(f, "base64"),
                  consensusHash: t.from(d, "base64"),
                  appHash: t.from(_, "base64"),
                  lastResultsHash: t.from(v, "base64"),
                  evidenceHash: t.from(m, "base64"),
                  proposerAddress: t.from(h),
                });
              }),
              e
            );
          })(p.JSONSerializable);
        o.Header = d;
        var _ = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.header = o), (r.commit = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t) {
              var e = t.header,
                r = t.commit;
              return new o(
                e ? d.fromData(e) : void 0,
                r ? h.fromData(r) : void 0,
              );
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.header,
                e = t.commit,
                r = {
                  header: null === o || void 0 === o ? void 0 : o.toData(),
                  commit: null === e || void 0 === e ? void 0 : e.toData(),
                };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(
                t.header ? d.fromProto(t.header) : void 0,
                t.commit ? h.fromProto(t.commit) : void 0,
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.header,
                e = t.commit;
              return s.SignedHeader.fromPartial({
                header: null === o || void 0 === o ? void 0 : o.toProto(),
                commit: null === e || void 0 === e ? void 0 : e.toProto(),
              });
            }),
            o
          );
        })(p.JSONSerializable);
        o.SignedHeader = _;
        var v = (function (o) {
          function e(t, e) {
            var r = o.call(this) || this;
            return ((r.hash = t), (r.partSetHeader = e), r);
          }
          return (
            r(e, o),
            (e.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (e.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (e.fromData = function (t) {
              var o = t.hash,
                r = t.part_set_header;
              return new e(o, r ? m.fromData(r) : void 0);
            }),
            (e.prototype.toData = function () {
              var t = this,
                o = t.hash,
                e = t.partSetHeader,
                r = {
                  hash: o,
                  part_set_header:
                    null === e || void 0 === e ? void 0 : e.toData(),
                };
              return r;
            }),
            (e.fromProto = function (o) {
              return new e(
                t.from(o.hash).toString("base64"),
                o.partSetHeader ? m.fromProto(o.partSetHeader) : void 0,
              );
            }),
            (e.prototype.toProto = function () {
              var o = this,
                e = o.hash,
                r = o.partSetHeader;
              return s.BlockID.fromPartial({
                hash: t.from(e, "base64"),
                partSetHeader: r ? r.toProto() : void 0,
              });
            }),
            e
          );
        })(p.JSONSerializable);
        o.BlockID = v;
        var m = (function (o) {
          function e(t, e) {
            var r = o.call(this) || this;
            return ((r.total = t), (r.hash = e), r);
          }
          return (
            r(e, o),
            (e.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (e.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (e.fromData = function (t) {
              var o = t.total,
                r = t.hash;
              return new e(parseInt(o), r);
            }),
            (e.prototype.toData = function () {
              var t = this,
                o = t.total,
                e = t.hash,
                r = { total: o.toFixed(), hash: e };
              return r;
            }),
            (e.fromProto = function (o) {
              return new e(o.total, t.from(o.hash).toString("base64"));
            }),
            (e.prototype.toProto = function () {
              var o = this,
                e = o.total,
                r = o.hash;
              return s.PartSetHeader.fromPartial({
                total: e,
                hash: t.from(r, "base64"),
              });
            }),
            e
          );
        })(p.JSONSerializable);
        o.PartSetHeader = m;
        var h = (function (t) {
          function o(o, e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.height = o),
              (i.round = e),
              (i.blockId = r),
              (i.signatures = n),
              i
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t) {
              var e = t.height,
                r = t.round,
                n = t.block_id,
                i = t.signatures;
              return new o(
                u.fromString(e),
                Number.parseInt(r),
                n ? v.fromData(n) : void 0,
                i.map(function (t) {
                  return y.fromData(t);
                }),
              );
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.height,
                e = t.round,
                r = t.blockId,
                n = t.signatures,
                i = {
                  height: o.toString(),
                  round: e.toFixed(),
                  block_id: null === r || void 0 === r ? void 0 : r.toData(),
                  signatures: n.map(function (t) {
                    return t.toData();
                  }),
                };
              return i;
            }),
            (o.fromProto = function (t) {
              var e = t.height,
                r = t.round,
                n = t.blockId,
                i = t.signatures;
              return new o(
                e,
                r,
                n ? v.fromProto(n) : void 0,
                i.map(function (t) {
                  return y.fromProto(t);
                }),
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.height,
                e = t.round,
                r = t.blockId,
                n = t.signatures;
              return s.Commit.fromPartial({
                height: o,
                round: e,
                blockId: null === r || void 0 === r ? void 0 : r.toProto(),
                signatures: n.map(function (t) {
                  return t.toProto();
                }),
              });
            }),
            o
          );
        })(p.JSONSerializable);
        o.Commit = h;
        var y = (function (o) {
          function e(t, e, r, n) {
            var i = o.call(this) || this;
            return (
              (i.blockIdFlag = t),
              (i.validatorAddress = e),
              (i.timestamp = r),
              (i.signature = n),
              i
            );
          }
          return (
            r(e, o),
            (e.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (e.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (e.fromData = function (t) {
              var o = t.block_id_flag,
                r = t.validator_address,
                n = t.timestamp,
                i = t.signature;
              return new e(
                (0, s.blockIDFlagFromJSON)(o),
                r,
                n ? new Date(n) : void 0,
                i,
              );
            }),
            (e.prototype.toData = function () {
              var t = this,
                o = t.blockIdFlag,
                e = t.validatorAddress,
                r = t.timestamp,
                n = t.signature,
                i = {
                  block_id_flag: (0, s.blockIDFlagToJSON)(o),
                  validator_address: e || "",
                  timestamp: r
                    ? r.toISOString().replace(/\.000Z$/, "Z")
                    : void 0,
                  signature: n || "",
                };
              return i;
            }),
            (e.fromProto = function (o) {
              var r = o.blockIdFlag,
                n = o.validatorAddress,
                i = o.timestamp,
                a = o.signature;
              return new e(
                r,
                t.from(n).toString("base64"),
                i,
                t.from(a).toString("base64"),
              );
            }),
            (e.prototype.toProto = function () {
              var o = this,
                e = o.blockIdFlag,
                r = o.validatorAddress,
                n = o.timestamp,
                i = o.signature;
              return s.CommitSig.fromPartial({
                blockIdFlag: e,
                validatorAddress: r ? t.from(r, "base64") : void 0,
                timestamp: n,
                signature: i ? t.from(i, "base64") : void 0,
              });
            }),
            e
          );
        })(p.JSONSerializable);
        o.CommitSig = y;
        var g = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return (
              (n.validators = o),
              (n.proposer = e),
              (n.totalVotingPower = r),
              n
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t) {
              var e = t.validators,
                r = t.proposer,
                n = t.total_voting_power;
              return new o(
                e.map(function (t) {
                  return P.fromData(t);
                }),
                r ? P.fromData(r) : void 0,
                u.fromString(n),
              );
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.validators,
                e = t.proposer,
                r = t.totalVotingPower,
                n = {
                  validators: o.map(function (t) {
                    return t.toData();
                  }),
                  proposer: null === e || void 0 === e ? void 0 : e.toData(),
                  total_voting_power: r.toString(),
                };
              return n;
            }),
            (o.fromProto = function (t) {
              var e = t.validators,
                r = t.proposer,
                n = t.totalVotingPower;
              return new o(
                e.map(function (t) {
                  return P.fromProto(t);
                }),
                r ? P.fromProto(r) : void 0,
                n,
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.validators,
                e = t.proposer,
                r = t.totalVotingPower;
              return c.ValidatorSet.fromPartial({
                validators: o.map(function (t) {
                  return t.toProto();
                }),
                proposer:
                  (null === e || void 0 === e ? void 0 : e.toProto()) || void 0,
                totalVotingPower: r,
              });
            }),
            o
          );
        })(p.JSONSerializable);
        o.ValidatorSet = g;
        var P = (function (o) {
          function e(t, e, r, n) {
            var i = o.call(this) || this;
            return (
              (i.address = t),
              (i.pubKey = e),
              (i.votingPower = r),
              (i.proposerPriority = n),
              i
            );
          }
          return (
            r(e, o),
            (e.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (e.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (e.fromData = function (t) {
              var o = t.address,
                r = t.pub_key,
                n = t.voting_power,
                i = t.proposer_priority;
              return new e(
                o,
                r ? f.PublicKey.fromData(r) : void 0,
                u.fromString(n),
                u.fromString(i),
              );
            }),
            (e.prototype.toData = function () {
              var t = this,
                o = t.address,
                e = t.pubKey,
                r = t.votingPower,
                n = t.proposerPriority,
                i = {
                  address: o,
                  pub_key: null === e || void 0 === e ? void 0 : e.toData(),
                  voting_power: r.toString(),
                  proposer_priority: n.toString(),
                };
              return i;
            }),
            (e.fromProto = function (o) {
              var r = o.address,
                n = o.pubKey,
                i = o.votingPower,
                a = o.proposerPriority;
              return new e(
                t.from(r).toString("base64"),
                n ? f.PublicKey.fromProto(n) : void 0,
                i,
                a,
              );
            }),
            (e.prototype.toProto = function () {
              var o = this,
                e = o.address,
                r = o.pubKey,
                n = o.votingPower,
                i = o.proposerPriority;
              return c.Validator.fromPartial({
                address: t.from(e, "base64"),
                pubKey:
                  (null === r || void 0 === r ? void 0 : r.toProto()) || void 0,
                votingPower: n,
                proposerPriority: i,
              });
            }),
            e
          );
        })(p.JSONSerializable);
        o.Validator = P;
      }).call(this, e(2).Buffer);
    },
    5112: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.App = o.Consensus = void 0));
      var s = e(3678),
        c = e(3678),
        u = a(e(2754)),
        p = e(2756),
        l = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.block = o), (r.app = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t) {
              var e = t.block,
                r = t.app;
              return new o(Number.parseInt(e), Number.parseInt(r));
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.block,
                e = t.app,
                r = { block: o.toFixed(), app: e.toFixed() };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(t.block.toNumber(), t.app.toNumber());
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.block,
                e = t.app;
              return s.Consensus.fromPartial({
                block: u.fromNumber(o),
                app: u.fromNumber(e),
              });
            }),
            o
          );
        })(p.JSONSerializable);
      o.Consensus = l;
      var f = (function (t) {
        function o(o, e) {
          var r = t.call(this) || this;
          return ((r.protocol = o), (r.software = e), r);
        }
        return (
          r(o, t),
          (o.fromAmino = function (t) {
            throw new Error("Amino not supported");
          }),
          (o.prototype.toAmino = function () {
            throw new Error("Amino not supported");
          }),
          (o.fromData = function (t) {
            var e = t.protocol,
              r = t.software;
            return new o(Number.parseInt(e), r);
          }),
          (o.prototype.toData = function () {
            var t = this,
              o = t.protocol,
              e = t.software,
              r = { protocol: o.toFixed(), software: e };
            return r;
          }),
          (o.fromProto = function (t) {
            return new o(t.protocol.toNumber(), t.software);
          }),
          (o.prototype.toProto = function () {
            var t = this,
              o = t.protocol,
              e = t.software;
            return c.App.fromPartial({
              protocol: u.fromNumber(o),
              software: e,
            });
          }),
          o
        );
      })(p.JSONSerializable);
      o.App = f;
    },
    5113: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__extends) ||
            (function () {
              var t = function (o, e) {
                return (
                  (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, o) {
                        t.__proto__ = o;
                      }) ||
                    function (t, o) {
                      for (var e in o)
                        Object.prototype.hasOwnProperty.call(o, e) &&
                          (t[e] = o[e]);
                    }),
                  t(o, e)
                );
              };
              return function (o, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function r() {
                  this.constructor = o;
                }
                (t(o, e),
                  (o.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r())));
              };
            })(),
          n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, o, e, r) {
                  void 0 === r && (r = e);
                  var n = Object.getOwnPropertyDescriptor(o, e);
                  ((n &&
                    !("get" in n
                      ? !o.__esModule
                      : n.writable || n.configurable)) ||
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return o[e];
                      },
                    }),
                    Object.defineProperty(t, r, n));
                }
              : function (t, o, e, r) {
                  (void 0 === r && (r = e), (t[r] = o[e]));
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, o) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: o,
                  });
                }
              : function (t, o) {
                  t["default"] = o;
                }),
          a =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var o = {};
              if (null != t)
                for (var e in t)
                  "default" !== e &&
                    Object.prototype.hasOwnProperty.call(t, e) &&
                    n(o, t, e);
              return (i(o, t), o);
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.PublicKey = o.Proof = void 0));
        var s = e(3677),
          c = e(3680),
          u = a(e(2754)),
          p = e(2756),
          l = (function (o) {
            function e(t, e, r, n) {
              var i = o.call(this) || this;
              return (
                (i.total = t),
                (i.index = e),
                (i.leafHash = r),
                (i.aunts = n),
                i
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function () {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t) {
                var o = t.total,
                  r = t.index,
                  n = t.leaf_hash,
                  i = t.aunts;
                return new e(Number.parseInt(o), Number.parseInt(r), n, i);
              }),
              (e.prototype.toData = function () {
                var t = this,
                  o = t.total,
                  e = t.index,
                  r = t.leafHash,
                  n = t.aunts,
                  i = {
                    total: o.toFixed(),
                    index: e.toFixed(),
                    leaf_hash: r,
                    aunts: n,
                  };
                return i;
              }),
              (e.fromProto = function (o) {
                return new e(
                  o.total.toNumber(),
                  o.index.toNumber(),
                  t.from(o.leafHash).toString("base64"),
                  o.aunts.map(function (o) {
                    return t.from(o).toString("base64");
                  }),
                );
              }),
              (e.prototype.toProto = function () {
                var o = this,
                  e = o.total,
                  r = o.index,
                  n = o.leafHash,
                  i = o.aunts;
                return s.Proof.fromPartial({
                  total: u.fromNumber(e),
                  index: u.fromNumber(r),
                  leafHash: t.from(n, "base64"),
                  aunts: i.map(function (o) {
                    return t.from(o, "base64");
                  }),
                });
              }),
              e
            );
          })(p.JSONSerializable);
        o.Proof = l;
        var f = (function (o) {
          function e(t, e) {
            var r = o.call(this) || this;
            return ((r.ed25519 = t), (r.secp256k1 = e), r);
          }
          return (
            r(e, o),
            (e.fromAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (e.prototype.toAmino = function () {
              throw new Error("Amino not supported");
            }),
            (e.fromData = function (t) {
              var o = t.ed25519,
                r = t.secp256k1;
              return new e(o, r);
            }),
            (e.prototype.toData = function () {
              var t = this,
                o = t.ed25519,
                e = t.secp256k1,
                r = { ed25519: o, secp256k1: e };
              return r;
            }),
            (e.fromProto = function (o) {
              var r = o.ed25519,
                n = o.secp256k1;
              return new e(
                r ? t.from(r).toString("base64") : void 0,
                n ? t.from(n).toString("base64") : void 0,
              );
            }),
            (e.prototype.toProto = function () {
              var o = this,
                e = o.ed25519,
                r = o.secp256k1;
              return c.PublicKey.fromPartial({
                ed25519: e ? t.from(e, "base64") : void 0,
                secp256k1: r ? t.from(r, "base64") : void 0,
              });
            }),
            e
          );
        })(p.JSONSerializable);
        o.PublicKey = f;
      }).call(this, e(2).Buffer);
    },
    5114: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgUpgradeClient = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(3432),
          s = (function (o) {
            function e(t, e, r, n, i, a) {
              var s = o.call(this) || this;
              return (
                (s.client_id = t),
                (s.client_state = e),
                (s.consensus_state = r),
                (s.proof_upgrade_client = n),
                (s.proof_upgrade_consensus_state = i),
                (s.signer = a),
                s
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.client_id,
                  n = t.client_state,
                  i = t.consensus_state,
                  a = t.proof_upgrade_client,
                  s = t.proof_upgrade_consensus_state,
                  c = t.signer;
                return new e(r, n, i, a, s, c);
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.client_id,
                  r = o.client_state,
                  n = o.consensus_state,
                  i = o.proof_upgrade_client,
                  a = o.proof_upgrade_consensus_state,
                  s = o.signer;
                return {
                  "@type": "/ibc.core.client.v1.MsgUpgradeClient",
                  client_id: e,
                  client_state: r,
                  consensus_state: n,
                  proof_upgrade_client: i,
                  proof_upgrade_consensus_state: a,
                  signer: s,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.clientId,
                  o.clientState,
                  o.consensusState,
                  t.from(o.proofUpgradeClient).toString("base64"),
                  t.from(o.proofUpgradeConsensusState).toString("base64"),
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.client_id,
                  n = e.client_state,
                  i = e.consensus_state,
                  s = e.proof_upgrade_client,
                  c = e.proof_upgrade_consensus_state,
                  u = e.signer;
                return a.MsgUpgradeClient.fromPartial({
                  clientId: r,
                  clientState: n,
                  consensusState: i,
                  proofUpgradeClient: t.from(s, "base64"),
                  proofUpgradeConsensusState: t.from(c, "base64"),
                  signer: u,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                  value: a.MsgUpgradeClient.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(a.MsgUpgradeClient.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgUpgradeClient = s;
      }).call(this, e(2).Buffer);
    },
    5115: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgSubmitMisbehaviour = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3432),
        s = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.client_id = o), (n.misbehaviour = e), (n.signer = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, o) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t, e) {
              var r = t.client_id,
                n = t.misbehaviour,
                i = t.signer;
              return new o(r, n, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.client_id,
                r = o.misbehaviour,
                n = o.signer;
              return {
                "@type": "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                client_id: e,
                misbehaviour: r,
                signer: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.clientId, t.misbehaviour, t.signer);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.client_id,
                r = o.misbehaviour,
                n = o.signer;
              return a.MsgSubmitMisbehaviour.fromPartial({
                clientId: e,
                misbehaviour: r,
                signer: n,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: a.MsgSubmitMisbehaviour.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgSubmitMisbehaviour.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgSubmitMisbehaviour = s;
    },
    5116: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgConnectionOpenInit = void 0));
      var i = e(2756),
        a = e(2759),
        s = e(3433),
        c = e(3300),
        u = e(3434),
        p = n(e(2754)),
        l = (function (t) {
          function o(o, e, r, n, i) {
            var a = t.call(this) || this;
            return (
              (a.client_id = o),
              (a.delay_period = e),
              (a.signer = r),
              (a.counterparty = n),
              (a.version = i),
              a
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, o) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t, e) {
              var r = t.client_id,
                n = t.counterparty,
                i = t.version,
                a = t.delay_period,
                u = t.signer;
              return new o(
                r,
                Number.parseInt(a),
                u,
                n ? s.Counterparty.fromData(n) : void 0,
                i ? c.Version.fromData(i) : void 0,
              );
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.client_id,
                r = o.counterparty,
                n = o.version,
                i = o.delay_period,
                a = o.signer;
              return {
                "@type": "/ibc.core.connection.v1.MsgConnectionOpenInit",
                client_id: e,
                delay_period: i.toFixed(),
                signer: a,
                counterparty: r ? r.toData() : void 0,
                version: n ? n.toData() : void 0,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.clientId,
                t.delayPeriod.toNumber(),
                t.signer,
                t.counterparty
                  ? s.Counterparty.fromProto(t.counterparty)
                  : void 0,
                t.version ? c.Version.fromProto(t.version) : void 0,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.client_id,
                r = o.counterparty,
                n = o.version,
                i = o.delay_period,
                a = o.signer;
              return u.MsgConnectionOpenInit.fromPartial({
                clientId: e,
                delayPeriod: p.default.fromNumber(i),
                signer: a,
                counterparty: r ? r.toProto() : void 0,
                version: n ? n.toProto() : void 0,
              });
            }),
            (o.prototype.packAny = function (t) {
              return a.Any.fromPartial({
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: u.MsgConnectionOpenInit.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(u.MsgConnectionOpenInit.decode(t.value));
            }),
            o
          );
        })(i.JSONSerializable);
      o.MsgConnectionOpenInit = l;
    },
    5117: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MerklePrefix = void 0));
        var n = e(3683),
          i = e(2756),
          a = (function (o) {
            function e(t) {
              var e = o.call(this) || this;
              return ((e.key_prefix = t), e);
            }
            return (
              r(e, o),
              (e.fromAmino = function (t) {
                var o = t.key_prefix;
                return new e(o);
              }),
              (e.prototype.toAmino = function () {
                var t = this.key_prefix,
                  o = { key_prefix: t };
                return o;
              }),
              (e.fromData = function (t) {
                var o = t.key_prefix;
                return new e(o);
              }),
              (e.prototype.toData = function () {
                var t = this.key_prefix,
                  o = { key_prefix: t };
                return o;
              }),
              (e.fromProto = function (o) {
                return new e(t.from(o.keyPrefix).toString("base64"));
              }),
              (e.prototype.toProto = function () {
                var o = this.key_prefix;
                return n.MerklePrefix.fromPartial({
                  keyPrefix: t.from(o, "base64"),
                });
              }),
              e
            );
          })(i.JSONSerializable);
        o.MerklePrefix = a;
      }).call(this, e(2).Buffer);
    },
    5118: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__extends) ||
            (function () {
              var t = function (o, e) {
                return (
                  (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, o) {
                        t.__proto__ = o;
                      }) ||
                    function (t, o) {
                      for (var e in o)
                        Object.prototype.hasOwnProperty.call(o, e) &&
                          (t[e] = o[e]);
                    }),
                  t(o, e)
                );
              };
              return function (o, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function r() {
                  this.constructor = o;
                }
                (t(o, e),
                  (o.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r())));
              };
            })(),
          n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgConnectionOpenTry = void 0));
        var i = e(2756),
          a = e(2759),
          s = e(3433),
          c = e(3300),
          u = e(3434),
          p = n(e(2754)),
          l = e(2891),
          f = (function (o) {
            function e(t, e, r, n, i, a, s, c, u, p, l, f) {
              var d = o.call(this) || this;
              return (
                (d.client_id = t),
                (d.previous_connection_id = e),
                (d.client_state = r),
                (d.counterparty = n),
                (d.delay_period = i),
                (d.counterparty_versions = a),
                (d.proof_height = s),
                (d.proof_init = c),
                (d.proof_client = u),
                (d.proof_consensus = p),
                (d.consensus_height = l),
                (d.signer = f),
                d
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (o, r) {
                var n = o.client_id,
                  i = o.previous_connection_id,
                  a = o.client_state,
                  u = o.counterparty,
                  p = o.delay_period,
                  f = o.counterparty_versions,
                  d = o.proof_height,
                  _ = o.proof_init,
                  v = o.proof_client,
                  m = o.proof_consensus,
                  h = o.consensus_height,
                  y = o.signer;
                return new e(
                  n,
                  i,
                  a,
                  u ? s.Counterparty.fromData(u) : void 0,
                  Number.parseInt(p),
                  f.length > 0
                    ? f.map(function (t) {
                        return c.Version.fromData(t);
                      })
                    : [],
                  d ? l.Height.fromData(d) : void 0,
                  t.from(_).toString("base64"),
                  t.from(v).toString("base64"),
                  t.from(m).toString("base64"),
                  h ? l.Height.fromData(h) : void 0,
                  y,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.client_id,
                  r = o.previous_connection_id,
                  n = o.client_state,
                  i = o.counterparty,
                  a = o.delay_period,
                  s = o.counterparty_versions,
                  c = o.proof_height,
                  u = o.proof_init,
                  p = o.proof_client,
                  l = o.proof_consensus,
                  f = o.consensus_height,
                  d = o.signer;
                return {
                  "@type": "/ibc.core.connection.v1.MsgConnectionOpenTry",
                  client_id: e,
                  previous_connection_id: r,
                  client_state: n,
                  counterparty: i ? i.toData() : void 0,
                  delay_period: a.toFixed(),
                  counterparty_versions:
                    s.length > 0
                      ? s.map(function (t) {
                          return t.toData();
                        })
                      : [],
                  proof_height: c ? c.toData() : void 0,
                  proof_init: u,
                  proof_client: p,
                  proof_consensus: l,
                  consensus_height: f ? f.toData() : void 0,
                  signer: d,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.clientId,
                  o.previousConnectionId,
                  o.clientState,
                  o.counterparty
                    ? s.Counterparty.fromProto(o.counterparty)
                    : void 0,
                  o.delayPeriod.toNumber(),
                  o.counterpartyVersions.length > 0
                    ? o.counterpartyVersions.map(function (t) {
                        return c.Version.fromProto(t);
                      })
                    : [],
                  o.proofHeight ? l.Height.fromProto(o.proofHeight) : void 0,
                  t.from(o.proofInit).toString("base64"),
                  t.from(o.proofClient).toString("base64"),
                  t.from(o.proofConsensus).toString("base64"),
                  o.consensusHeight
                    ? l.Height.fromProto(o.consensusHeight)
                    : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.client_id,
                  n = e.previous_connection_id,
                  i = e.client_state,
                  a = e.counterparty,
                  s = e.delay_period,
                  c = e.counterparty_versions,
                  l = e.proof_height,
                  f = e.proof_init,
                  d = e.proof_client,
                  _ = e.proof_consensus,
                  v = e.consensus_height,
                  m = e.signer;
                return u.MsgConnectionOpenTry.fromPartial({
                  clientId: r,
                  previousConnectionId: n,
                  clientState: i.toProto(),
                  counterparty: a ? a.toProto() : void 0,
                  delayPeriod: p.default.fromNumber(s),
                  counterpartyVersions:
                    c.length > 0
                      ? c.map(function (t) {
                          return t.toProto();
                        })
                      : [],
                  proofHeight: l ? l.toProto() : void 0,
                  proofInit: t.from(f, "base64"),
                  proofClient: t.from(d, "base64"),
                  proofConsensus: t.from(_, "base64"),
                  consensusHeight: v ? v.toProto() : void 0,
                  signer: m,
                });
              }),
              (e.prototype.packAny = function (t) {
                return a.Any.fromPartial({
                  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                  value: u.MsgConnectionOpenTry.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(u.MsgConnectionOpenTry.decode(t.value));
              }),
              e
            );
          })(i.JSONSerializable);
        o.MsgConnectionOpenTry = f;
      }).call(this, e(2).Buffer);
    },
    5119: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgConnectionOpenConfirm = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(3434),
          s = e(2891),
          c = (function (o) {
            function e(t, e, r, n) {
              var i = o.call(this) || this;
              return (
                (i.connection_id = t),
                (i.proof_ack = e),
                (i.proof_height = r),
                (i.signer = n),
                i
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.connection_id,
                  n = t.proof_ack,
                  i = t.proof_height,
                  a = t.signer;
                return new e(r, n, i ? s.Height.fromData(i) : void 0, a);
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.connection_id,
                  r = o.proof_ack,
                  n = o.proof_height,
                  i = o.signer;
                return {
                  "@type": "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                  connection_id: e,
                  proof_ack: r,
                  proof_height: n ? n.toData() : void 0,
                  signer: i,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.connectionId,
                  t.from(o.proofAck).toString("base64"),
                  o.proofHeight ? s.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.connection_id,
                  n = e.proof_ack,
                  i = e.proof_height,
                  s = e.signer;
                return a.MsgConnectionOpenConfirm.fromPartial({
                  connectionId: r,
                  proofAck: t.from(n, "base64"),
                  proofHeight: i ? i.toProto() : void 0,
                  signer: s,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                  value: a.MsgConnectionOpenConfirm.encode(
                    this.toProto(),
                  ).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(a.MsgConnectionOpenConfirm.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgConnectionOpenConfirm = c;
      }).call(this, e(2).Buffer);
    },
    5120: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgConnectionOpenAck = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(3300),
          s = e(3434),
          c = e(2891),
          u = (function (o) {
            function e(t, e, r, n, i, a, s, c, u, p) {
              var l = o.call(this) || this;
              return (
                (l.connection_id = t),
                (l.counterparty_connection_id = e),
                (l.version = r),
                (l.client_state = n),
                (l.proof_height = i),
                (l.proof_try = a),
                (l.proof_client = s),
                (l.proof_consensus = c),
                (l.consensus_height = u),
                (l.signer = p),
                l
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.connection_id,
                  n = t.counterparty_connection_id,
                  i = t.version,
                  s = t.client_state,
                  u = t.proof_height,
                  p = t.proof_try,
                  l = t.proof_client,
                  f = t.proof_consensus,
                  d = t.consensus_height,
                  _ = t.signer;
                return new e(
                  r,
                  n,
                  i ? a.Version.fromData(i) : void 0,
                  s,
                  u ? c.Height.fromData(u) : void 0,
                  p,
                  l,
                  f,
                  d ? c.Height.fromData(d) : void 0,
                  _,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.connection_id,
                  r = o.counterparty_connection_id,
                  n = o.version,
                  i = o.client_state,
                  a = o.proof_height,
                  s = o.proof_try,
                  c = o.proof_client,
                  u = o.proof_consensus,
                  p = o.consensus_height,
                  l = o.signer;
                return {
                  "@type": "/ibc.core.connection.v1.MsgConnectionOpenAck",
                  connection_id: e,
                  counterparty_connection_id: r,
                  version: n ? n.toData() : void 0,
                  client_state: i,
                  proof_height: a ? a.toData() : void 0,
                  proof_try: s,
                  proof_client: c,
                  proof_consensus: u,
                  consensus_height: p ? p.toData() : void 0,
                  signer: l,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.connectionId,
                  o.counterpartyConnectionId,
                  o.version ? a.Version.fromProto(o.version) : void 0,
                  o.clientState,
                  o.proofHeight ? c.Height.fromProto(o.proofHeight) : void 0,
                  t.from(o.proofTry).toString("base64"),
                  t.from(o.proofClient).toString("base64"),
                  t.from(o.proofConsensus).toString("base64"),
                  o.consensusHeight
                    ? c.Height.fromProto(o.consensusHeight)
                    : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.connection_id,
                  n = e.counterparty_connection_id,
                  i = e.version,
                  a = e.client_state,
                  c = e.proof_height,
                  u = e.proof_try,
                  p = e.proof_client,
                  l = e.proof_consensus,
                  f = e.consensus_height,
                  d = e.signer;
                return s.MsgConnectionOpenAck.fromPartial({
                  connectionId: r,
                  counterpartyConnectionId: n,
                  version: i ? i.toProto() : void 0,
                  clientState: a,
                  proofHeight: c ? c.toProto() : void 0,
                  proofTry: t.from(u, "base64"),
                  proofClient: t.from(p, "base64"),
                  proofConsensus: t.from(l, "base64"),
                  consensusHeight: f ? f.toProto() : void 0,
                  signer: d,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                  value: s.MsgConnectionOpenAck.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(s.MsgConnectionOpenAck.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgConnectionOpenAck = u;
      }).call(this, e(2).Buffer);
    },
    5121: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgChannelOpenInit = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(3684),
        s = e(2979),
        c = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.port_id = o), (n.channel = e), (n.signer = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, o) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t, e) {
              var r = t.port_id,
                n = t.channel,
                i = t.signer;
              return new o(r, n ? a.Channel.fromData(n) : void 0, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.port_id,
                r = o.channel,
                n = o.signer;
              return {
                "@type": "/ibc.core.channel.v1.MsgChannelOpenInit",
                port_id: e,
                channel: r ? r.toData() : void 0,
                signer: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(
                t.portId,
                t.channel ? a.Channel.fromProto(t.channel) : void 0,
                t.signer,
              );
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.port_id,
                r = o.channel,
                n = o.signer;
              return s.MsgChannelOpenInit.fromPartial({
                portId: e,
                channel: r ? r.toProto() : void 0,
                signer: n,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: s.MsgChannelOpenInit.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(s.MsgChannelOpenInit.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgChannelOpenInit = c;
    },
    5122: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Counterparty = void 0));
      var n = e(3301),
        i = e(2756),
        a = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.port_id = o), (r.channel_id = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.port_id,
                r = t.channel_id;
              return new o(e, r);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.port_id,
                e = t.channel_id,
                r = { port_id: o, channel_id: e };
              return r;
            }),
            (o.fromData = function (t) {
              var e = t.port_id,
                r = t.channel_id;
              return new o(e, r);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.port_id,
                e = t.channel_id,
                r = { port_id: o, channel_id: e };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(t.portId, t.channelId);
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.port_id,
                e = t.channel_id;
              return n.Counterparty.fromPartial({ portId: o, channelId: e });
            }),
            o
          );
        })(i.JSONSerializable);
      o.Counterparty = a;
    },
    5123: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgChannelOpenTry = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(3684),
          s = e(2891),
          c = e(2979),
          u = (function (o) {
            function e(t, e, r, n, i, a, s) {
              var c = o.call(this) || this;
              return (
                (c.port_id = t),
                (c.previous_channel_id = e),
                (c.channel = r),
                (c.counterparty_version = n),
                (c.proof_init = i),
                (c.proof_height = a),
                (c.signer = s),
                c
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.port_id,
                  n = t.previous_channel_id,
                  i = t.channel,
                  c = t.counterparty_version,
                  u = t.proof_init,
                  p = t.proof_height,
                  l = t.signer;
                return new e(
                  r,
                  n,
                  i ? a.Channel.fromData(i) : void 0,
                  c,
                  u,
                  p ? s.Height.fromData(p) : void 0,
                  l,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.port_id,
                  r = o.previous_channel_id,
                  n = o.channel,
                  i = o.counterparty_version,
                  a = o.proof_init,
                  s = o.proof_height,
                  c = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgChannelOpenTry",
                  port_id: e,
                  previous_channel_id: r,
                  channel: n ? n.toData() : void 0,
                  counterparty_version: i,
                  proof_init: a,
                  proof_height: s ? s.toData() : void 0,
                  signer: c,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.portId,
                  o.previousChannelId,
                  o.channel ? a.Channel.fromProto(o.channel) : void 0,
                  o.counterpartyVersion,
                  t.from(o.proofInit).toString("base64"),
                  o.proofHeight ? s.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.port_id,
                  n = e.previous_channel_id,
                  i = e.channel,
                  a = e.counterparty_version,
                  s = e.proof_init,
                  u = e.proof_height,
                  p = e.signer;
                return c.MsgChannelOpenTry.fromPartial({
                  portId: r,
                  previousChannelId: n,
                  channel: i ? i.toProto() : void 0,
                  counterpartyVersion: a,
                  proofInit: t.from(s, "base64"),
                  proofHeight: u ? u.toProto() : void 0,
                  signer: p,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                  value: c.MsgChannelOpenTry.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(c.MsgChannelOpenTry.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgChannelOpenTry = u;
      }).call(this, e(2).Buffer);
    },
    5124: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgChannelOpenConfirm = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(2891),
          s = e(2979),
          c = (function (o) {
            function e(t, e, r, n, i) {
              var a = o.call(this) || this;
              return (
                (a.port_id = t),
                (a.channel_id = e),
                (a.proof_ack = r),
                (a.proof_height = n),
                (a.signer = i),
                a
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.port_id,
                  n = t.channel_id,
                  i = t.proof_ack,
                  s = t.proof_height,
                  c = t.signer;
                return new e(r, n, i, s ? a.Height.fromData(s) : void 0, c);
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.port_id,
                  r = o.channel_id,
                  n = o.proof_ack,
                  i = o.proof_height,
                  a = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                  port_id: e,
                  channel_id: r,
                  proof_ack: n,
                  proof_height: i ? i.toData() : void 0,
                  signer: a,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.portId,
                  o.channelId,
                  t.from(o.proofAck).toString("base64"),
                  o.proofHeight ? a.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.port_id,
                  n = e.channel_id,
                  i = e.proof_ack,
                  a = e.proof_height,
                  c = e.signer;
                return s.MsgChannelOpenConfirm.fromPartial({
                  portId: r,
                  channelId: n,
                  proofAck: t.from(i, "base64"),
                  proofHeight: a ? a.toProto() : void 0,
                  signer: c,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                  value: s.MsgChannelOpenConfirm.encode(
                    this.toProto(),
                  ).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(s.MsgChannelOpenConfirm.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgChannelOpenConfirm = c;
      }).call(this, e(2).Buffer);
    },
    5125: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgChannelOpenAck = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(2891),
          s = e(2979),
          c = (function (o) {
            function e(t, e, r, n, i, a, s) {
              var c = o.call(this) || this;
              return (
                (c.port_id = t),
                (c.channel_id = e),
                (c.counterparty_channel_id = r),
                (c.counterparty_version = n),
                (c.proof_try = i),
                (c.proof_height = a),
                (c.signer = s),
                c
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.port_id,
                  n = t.channel_id,
                  i = t.counterparty_channel_id,
                  s = t.counterparty_version,
                  c = t.proof_try,
                  u = t.proof_height,
                  p = t.signer;
                return new e(
                  r,
                  n,
                  i,
                  s,
                  c,
                  u ? a.Height.fromData(u) : void 0,
                  p,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.port_id,
                  r = o.channel_id,
                  n = o.counterparty_channel_id,
                  i = o.counterparty_version,
                  a = o.proof_try,
                  s = o.proof_height,
                  c = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgChannelOpenAck",
                  port_id: e,
                  channel_id: r,
                  counterparty_channel_id: n,
                  counterparty_version: i,
                  proof_try: a,
                  proof_height: s ? s.toData() : void 0,
                  signer: c,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.portId,
                  o.channelId,
                  o.counterpartyChannelId,
                  o.counterpartyVersion,
                  t.from(o.proofTry).toString("base64"),
                  o.proofHeight ? a.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.port_id,
                  n = e.channel_id,
                  i = e.counterparty_channel_id,
                  a = e.counterparty_version,
                  c = e.proof_try,
                  u = e.proof_height,
                  p = e.signer;
                return s.MsgChannelOpenAck.fromPartial({
                  portId: r,
                  channelId: n,
                  counterpartyChannelId: i,
                  counterpartyVersion: a,
                  proofTry: t.from(c, "base64"),
                  proofHeight: u ? u.toProto() : void 0,
                  signer: p,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                  value: s.MsgChannelOpenAck.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(s.MsgChannelOpenAck.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgChannelOpenAck = c;
      }).call(this, e(2).Buffer);
    },
    5126: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgChannelCloseInit = void 0));
      var n = e(2756),
        i = e(2759),
        a = e(2979),
        s = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.port_id = o), (n.channel_id = e), (n.signer = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, o) {
              throw new Error("Amino not supported");
            }),
            (o.prototype.toAmino = function (t) {
              throw new Error("Amino not supported");
            }),
            (o.fromData = function (t, e) {
              var r = t.port_id,
                n = t.channel_id,
                i = t.signer;
              return new o(r, n, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.port_id,
                r = o.channel_id,
                n = o.signer;
              return {
                "@type": "/ibc.core.channel.v1.MsgChannelCloseInit",
                port_id: e,
                channel_id: r,
                signer: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.portId, t.channelId, t.signer);
            }),
            (o.prototype.toProto = function (t) {
              var o = this,
                e = o.port_id,
                r = o.channel_id,
                n = o.signer;
              return a.MsgChannelCloseInit.fromPartial({
                portId: e,
                channelId: r,
                signer: n,
              });
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: a.MsgChannelCloseInit.encode(this.toProto()).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgChannelCloseInit.decode(t.value));
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgChannelCloseInit = s;
    },
    5127: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgChannelCloseConfirm = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(2891),
          s = e(2979),
          c = (function (o) {
            function e(t, e, r, n, i) {
              var a = o.call(this) || this;
              return (
                (a.port_id = t),
                (a.channel_id = e),
                (a.proof_init = r),
                (a.proof_height = n),
                (a.signer = i),
                a
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.port_id,
                  n = t.channel_id,
                  i = t.proof_init,
                  s = t.proof_height,
                  c = t.signer;
                return new e(r, n, i, s ? a.Height.fromData(s) : void 0, c);
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.port_id,
                  r = o.channel_id,
                  n = o.proof_init,
                  i = o.proof_height,
                  a = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                  port_id: e,
                  channel_id: r,
                  proof_init: n,
                  proof_height: i ? i.toData() : void 0,
                  signer: a,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.portId,
                  o.channelId,
                  t.from(o.proofInit).toString("base64"),
                  o.proofHeight ? a.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.port_id,
                  n = e.channel_id,
                  i = e.proof_init,
                  a = e.proof_height,
                  c = e.signer;
                return s.MsgChannelCloseConfirm.fromPartial({
                  portId: r,
                  channelId: n,
                  proofInit: t.from(i, "base64"),
                  proofHeight: a ? a.toProto() : void 0,
                  signer: c,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                  value: s.MsgChannelCloseConfirm.encode(
                    this.toProto(),
                  ).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(s.MsgChannelCloseConfirm.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgChannelCloseConfirm = c;
      }).call(this, e(2).Buffer);
    },
    5128: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgRecvPacket = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(2891),
          s = e(3435),
          c = e(2979),
          u = (function (o) {
            function e(t, e, r, n) {
              var i = o.call(this) || this;
              return (
                (i.packet = t),
                (i.proof_commitment = e),
                (i.proof_height = r),
                (i.signer = n),
                i
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.packet,
                  n = t.proof_commitment,
                  i = t.proof_height,
                  c = t.signer;
                return new e(
                  r ? s.Packet.fromData(r) : void 0,
                  n,
                  i ? a.Height.fromData(i) : void 0,
                  c,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.packet,
                  r = o.proof_commitment,
                  n = o.proof_height,
                  i = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgRecvPacket",
                  packet: e ? e.toData() : void 0,
                  proof_commitment: r,
                  proof_height: n ? n.toData() : void 0,
                  signer: i,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.packet ? s.Packet.fromProto(o.packet) : void 0,
                  t.from(o.proofCommitment).toString("base64"),
                  o.proofHeight ? a.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.packet,
                  n = e.proof_commitment,
                  i = e.proof_height,
                  a = e.signer;
                return c.MsgRecvPacket.fromPartial({
                  packet: r ? r.toProto() : void 0,
                  proofCommitment: t.from(n, "base64"),
                  proofHeight: i ? i.toProto() : void 0,
                  signer: a,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                  value: c.MsgRecvPacket.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(c.MsgRecvPacket.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgRecvPacket = u;
      }).call(this, e(2).Buffer);
    },
    5129: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })();
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgAcknowledgement = void 0));
        var n = e(2756),
          i = e(2759),
          a = e(2891),
          s = e(3435),
          c = e(2979),
          u = (function (o) {
            function e(t, e, r, n, i) {
              var a = o.call(this) || this;
              return (
                (a.packet = t),
                (a.acknowledgement = e),
                (a.proof_acked = r),
                (a.proof_height = n),
                (a.signer = i),
                a
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.packet,
                  n = t.acknowledgement,
                  i = t.proof_acked,
                  c = t.proof_height,
                  u = t.signer;
                return new e(
                  r ? s.Packet.fromData(r) : void 0,
                  i,
                  n,
                  c ? a.Height.fromData(c) : void 0,
                  u,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.packet,
                  r = o.acknowledgement,
                  n = o.proof_acked,
                  i = o.proof_height,
                  a = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgAcknowledgement",
                  packet: e ? e.toData() : void 0,
                  acknowledgement: r,
                  proof_acked: n,
                  proof_height: i ? i.toData() : void 0,
                  signer: a,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.packet ? s.Packet.fromProto(o.packet) : void 0,
                  t.from(o.acknowledgement).toString("base64"),
                  t.from(o.proofAcked).toString("base64"),
                  o.proofHeight ? a.Height.fromProto(o.proofHeight) : void 0,
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.packet,
                  n = e.acknowledgement,
                  i = e.proof_acked,
                  a = e.proof_height,
                  s = e.signer;
                return c.MsgAcknowledgement.fromPartial({
                  packet: r ? r.toProto() : void 0,
                  acknowledgement: t.from(n, "base64"),
                  proofAcked: t.from(i, "base64"),
                  proofHeight: a ? a.toProto() : void 0,
                  signer: s,
                });
              }),
              (e.prototype.packAny = function (t) {
                return i.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                  value: c.MsgAcknowledgement.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(c.MsgAcknowledgement.decode(t.value));
              }),
              e
            );
          })(n.JSONSerializable);
        o.MsgAcknowledgement = u;
      }).call(this, e(2).Buffer);
    },
    5130: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__extends) ||
            (function () {
              var t = function (o, e) {
                return (
                  (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, o) {
                        t.__proto__ = o;
                      }) ||
                    function (t, o) {
                      for (var e in o)
                        Object.prototype.hasOwnProperty.call(o, e) &&
                          (t[e] = o[e]);
                    }),
                  t(o, e)
                );
              };
              return function (o, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function r() {
                  this.constructor = o;
                }
                (t(o, e),
                  (o.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r())));
              };
            })(),
          n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgTimeout = void 0));
        var i = e(2756),
          a = e(2759),
          s = e(2891),
          c = e(3435),
          u = e(2979),
          p = n(e(2754)),
          l = (function (o) {
            function e(t, e, r, n, i) {
              var a = o.call(this) || this;
              return (
                (a.packet = t),
                (a.proof_unreceived = e),
                (a.proof_height = r),
                (a.next_sequence_recv = n),
                (a.signer = i),
                a
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.packet,
                  n = t.proof_unreceived,
                  i = t.proof_height,
                  a = t.next_sequence_recv,
                  u = t.signer;
                return new e(
                  r ? c.Packet.fromData(r) : void 0,
                  n,
                  i ? s.Height.fromData(i) : void 0,
                  Number.parseInt(a),
                  u,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.packet,
                  r = o.proof_unreceived,
                  n = o.proof_height,
                  i = o.next_sequence_recv,
                  a = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgTimeout",
                  packet: e ? e.toData() : void 0,
                  proof_unreceived: r,
                  proof_height: n ? n.toData() : void 0,
                  next_sequence_recv: i.toFixed(),
                  signer: a,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.packet ? c.Packet.fromProto(o.packet) : void 0,
                  t.from(o.proofUnreceived).toString("base64"),
                  o.proofHeight ? s.Height.fromProto(o.proofHeight) : void 0,
                  o.nextSequenceRecv.toNumber(),
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.packet,
                  n = e.proof_unreceived,
                  i = e.proof_height,
                  a = e.next_sequence_recv,
                  s = e.signer;
                return u.MsgTimeout.fromPartial({
                  packet: r ? r.toProto() : void 0,
                  proofUnreceived: t.from(n, "base64"),
                  proofHeight: i ? i.toProto() : void 0,
                  nextSequenceRecv: p.default.fromNumber(a),
                  signer: s,
                });
              }),
              (e.prototype.packAny = function (t) {
                return a.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                  value: u.MsgTimeout.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(u.MsgTimeout.decode(t.value));
              }),
              e
            );
          })(i.JSONSerializable);
        o.MsgTimeout = l;
      }).call(this, e(2).Buffer);
    },
    5131: function (t, o, e) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__extends) ||
            (function () {
              var t = function (o, e) {
                return (
                  (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, o) {
                        t.__proto__ = o;
                      }) ||
                    function (t, o) {
                      for (var e in o)
                        Object.prototype.hasOwnProperty.call(o, e) &&
                          (t[e] = o[e]);
                    }),
                  t(o, e)
                );
              };
              return function (o, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function r() {
                  this.constructor = o;
                }
                (t(o, e),
                  (o.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r())));
              };
            })(),
          n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MsgTimeoutOnClose = void 0));
        var i = e(2756),
          a = e(2759),
          s = e(2891),
          c = e(3435),
          u = e(2979),
          p = n(e(2754)),
          l = (function (o) {
            function e(t, e, r, n, i, a) {
              var s = o.call(this) || this;
              return (
                (s.packet = t),
                (s.proof_unreceived = e),
                (s.proof_close = r),
                (s.proof_height = n),
                (s.next_sequence_recv = i),
                (s.signer = a),
                s
              );
            }
            return (
              r(e, o),
              (e.fromAmino = function (t, o) {
                throw new Error("Amino not supported");
              }),
              (e.prototype.toAmino = function (t) {
                throw new Error("Amino not supported");
              }),
              (e.fromData = function (t, o) {
                var r = t.packet,
                  n = t.proof_unreceived,
                  i = t.proof_close,
                  a = t.proof_height,
                  u = t.next_sequence_recv,
                  p = t.signer;
                return new e(
                  r ? c.Packet.fromData(r) : void 0,
                  i,
                  n,
                  a ? s.Height.fromData(a) : void 0,
                  Number.parseInt(u),
                  p,
                );
              }),
              (e.prototype.toData = function (t) {
                var o = this,
                  e = o.packet,
                  r = o.proof_unreceived,
                  n = o.proof_close,
                  i = o.proof_height,
                  a = o.next_sequence_recv,
                  s = o.signer;
                return {
                  "@type": "/ibc.core.channel.v1.MsgTimeoutOnClose",
                  packet: e ? e.toData() : void 0,
                  proof_unreceived: r,
                  proof_close: n,
                  proof_height: i ? i.toData() : void 0,
                  next_sequence_recv: a.toFixed(),
                  signer: s,
                };
              }),
              (e.fromProto = function (o, r) {
                return new e(
                  o.packet ? c.Packet.fromProto(o.packet) : void 0,
                  t.from(o.proofUnreceived).toString("base64"),
                  t.from(o.proofClose).toString("base64"),
                  o.proofHeight ? s.Height.fromProto(o.proofHeight) : void 0,
                  o.nextSequenceRecv.toNumber(),
                  o.signer,
                );
              }),
              (e.prototype.toProto = function (o) {
                var e = this,
                  r = e.packet,
                  n = e.proof_unreceived,
                  i = e.proof_close,
                  a = e.proof_height,
                  s = e.next_sequence_recv,
                  c = e.signer;
                return u.MsgTimeoutOnClose.fromPartial({
                  packet: r ? r.toProto() : void 0,
                  proofUnreceived: t.from(n, "base64"),
                  proofClose: t.from(i, "base64"),
                  proofHeight: a ? a.toProto() : void 0,
                  nextSequenceRecv: p.default.fromNumber(s),
                  signer: c,
                });
              }),
              (e.prototype.packAny = function (t) {
                return a.Any.fromPartial({
                  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                  value: u.MsgTimeoutOnClose.encode(this.toProto()).finish(),
                });
              }),
              (e.unpackAny = function (t, o) {
                return e.fromProto(u.MsgTimeoutOnClose.decode(t.value));
              }),
              e
            );
          })(i.JSONSerializable);
        o.MsgTimeoutOnClose = l;
      }).call(this, e(2).Buffer);
    },
    5132: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }), n(e(5133), o));
    },
    5133: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.MsgVerifyInvariant = void 0));
      var n = e(2756),
        i = e(2841),
        a = e(5134),
        s = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return (
              (n.sender = o),
              (n.invariantModuleName = e),
              (n.invariantRoute = r),
              n
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t, e) {
              var r = t.value,
                n = r.sender,
                i = r.invariantModuleName,
                a = r.invariantRoute;
              return new o(n, i, a);
            }),
            (o.prototype.toAmino = function (t) {
              throw new Error("MsgVerifyInvarant is not allowed to send");
            }),
            (o.fromData = function (t, e) {
              var r = t.sender,
                n = t.invariantModuleName,
                i = t.invariantRoute;
              return new o(r, n, i);
            }),
            (o.prototype.toData = function (t) {
              var o = this,
                e = o.sender,
                r = o.invariantModuleName,
                n = o.invariantRoute;
              return {
                "@type": "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                sender: e,
                invariantModuleName: r,
                invariantRoute: n,
              };
            }),
            (o.fromProto = function (t, e) {
              return new o(t.sender, t.invariantModuleName, t.invariantRoute);
            }),
            (o.prototype.toProto = function (t) {
              throw new Error("MsgVerifyInvarant is not allowed to send");
            }),
            (o.prototype.packAny = function (t) {
              return i.Any.fromPartial({
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: a.MsgVerifyInvariant.encode(this.toProto(t)).finish(),
              });
            }),
            (o.unpackAny = function (t, e) {
              return o.fromProto(a.MsgVerifyInvariant.decode(t.value), e);
            }),
            o
          );
        })(n.JSONSerializable);
      o.MsgVerifyInvariant = s;
    },
    5218: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.IdentifiedClientState = void 0));
      var n = e(3058),
        i = e(2756),
        a = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.client_id = o), (r.client_state = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.client_id,
                r = t.client_state;
              return new o(e, r);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.client_id,
                e = t.client_state,
                r = { client_id: o, client_state: e };
              return r;
            }),
            (o.fromData = function (t) {
              var e = t.client_id,
                r = t.client_state;
              return new o(e, r);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.client_id,
                e = t.client_state,
                r = { client_id: o, client_state: e };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(t.clientId, t.clientState);
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.client_id,
                e = t.client_state;
              return n.IdentifiedClientState.fromPartial({
                clientId: o,
                clientState: e,
              });
            }),
            o
          );
        })(i.JSONSerializable);
      o.IdentifiedClientState = a;
    },
    5219: function (t, o, e) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (o, e) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, o) {
                    t.__proto__ = o;
                  }) ||
                function (t, o) {
                  for (var e in o)
                    Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
                }),
              t(o, e)
            );
          };
          return function (o, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = o;
            }
            (t(o, e),
              (o.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r())));
          };
        })();
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.Params = void 0));
      var n = e(5220),
        i = e(2756),
        a = (function (t) {
          function o(o, e) {
            var r = t.call(this) || this;
            return ((r.host_enabled = o), (r.allowed_messages = e), r);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.host_enabled,
                r = t.allowed_messages;
              return new o(e, r);
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.host_enabled,
                e = t.allowed_messages,
                r = { host_enabled: o, allowed_messages: e };
              return r;
            }),
            (o.fromData = function (t) {
              var e = t.host_enabled,
                r = t.allowed_messages;
              return new o(e, r);
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.host_enabled,
                e = t.allowed_messages,
                r = { host_enabled: o, allowed_messages: e };
              return r;
            }),
            (o.fromProto = function (t) {
              return new o(t.hostEnabled, t.allowMessages);
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.host_enabled,
                e = t.allowed_messages;
              return n.Params.fromPartial({ hostEnabled: o, allowMessages: e });
            }),
            o
          );
        })(i.JSONSerializable);
      o.Params = a;
    },
    5221: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(3684), o),
        n(e(5222), o));
    },
    5222: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, o) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: o,
                });
              }
            : function (t, o) {
                t["default"] = o;
              }),
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var o = {};
            if (null != t)
              for (var e in t)
                "default" !== e &&
                  Object.prototype.hasOwnProperty.call(t, e) &&
                  n(o, t, e);
            return (i(o, t), o);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.PacketId = void 0));
      var s = e(3301),
        c = e(2756),
        u = a(e(2754)),
        p = (function (t) {
          function o(o, e, r) {
            var n = t.call(this) || this;
            return ((n.port_id = o), (n.channel_id = e), (n.sequence = r), n);
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.port_id,
                r = t.channel_id,
                n = t.sequence;
              return new o(e, r, Number.parseInt(n));
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.port_id,
                e = t.channel_id,
                r = t.sequence,
                n = { port_id: o, channel_id: e, sequence: r.toFixed() };
              return n;
            }),
            (o.fromData = function (t) {
              var e = t.port_id,
                r = t.channel_id,
                n = t.sequence;
              return new o(e, r, Number.parseInt(n));
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.port_id,
                e = t.channel_id,
                r = t.sequence,
                n = { port_id: o, channel_id: e, sequence: r.toFixed() };
              return n;
            }),
            (o.fromProto = function (t) {
              return new o(t.portId, t.channelId, t.sequence.toNumber());
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.port_id,
                e = t.channel_id,
                r = t.sequence;
              return s.PacketId.fromPartial({
                portId: o,
                channelId: e,
                sequence: u.fromNumber(r),
              });
            }),
            o
          );
        })(c.JSONSerializable);
      o.PacketId = p;
    },
    5223: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, o, e, r) {
                void 0 === r && (r = e);
                var n = Object.getOwnPropertyDescriptor(o, e);
                ((n &&
                  !("get" in n
                    ? !o.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return o[e];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, o, e, r) {
                (void 0 === r && (r = e), (t[r] = o[e]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, o) {
            for (var e in t)
              "default" === e ||
                Object.prototype.hasOwnProperty.call(o, e) ||
                r(o, t, e);
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        n(e(3433), o),
        n(e(3300), o),
        n(e(5224), o));
    },
    5224: function (t, o, e) {
      "use strict";
      var r =
          (this && this.__extends) ||
          (function () {
            var t = function (o, e) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, o) {
                      t.__proto__ = o;
                    }) ||
                  function (t, o) {
                    for (var e in o)
                      Object.prototype.hasOwnProperty.call(o, e) &&
                        (t[e] = o[e]);
                  }),
                t(o, e)
              );
            };
            return function (o, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = o;
              }
              (t(o, e),
                (o.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r())));
            };
          })(),
        n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      (Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.IdentifiedConnection =
          o.stateToJSON =
          o.stateFromJSON =
          o.State =
            void 0));
      var i = e(3299),
        a = e(2756),
        s = e(3300),
        c = e(3299);
      (Object.defineProperty(o, "State", {
        enumerable: !0,
        get: function () {
          return c.State;
        },
      }),
        Object.defineProperty(o, "stateFromJSON", {
          enumerable: !0,
          get: function () {
            return c.stateFromJSON;
          },
        }),
        Object.defineProperty(o, "stateToJSON", {
          enumerable: !0,
          get: function () {
            return c.stateToJSON;
          },
        }));
      var u = e(3433),
        p = n(e(2754)),
        l = (function (t) {
          function o(o, e, r, n, i, a) {
            var s = t.call(this) || this;
            return (
              (s.id = o),
              (s.client_id = e),
              (s.versions = r),
              (s.state = n),
              (s.counterparty = i),
              (s.delay_period = a),
              s
            );
          }
          return (
            r(o, t),
            (o.fromAmino = function (t) {
              var e = t.id,
                r = t.client_id,
                n = t.versions,
                i = t.state,
                a = t.counterparty,
                p = t.delay_period;
              return new o(
                e,
                r,
                n.map(s.Version.fromAmino),
                (0, c.stateFromJSON)(i),
                a ? u.Counterparty.fromAmino(a) : void 0,
                Number.parseInt(p),
              );
            }),
            (o.prototype.toAmino = function () {
              var t = this,
                o = t.id,
                e = t.client_id,
                r = t.versions,
                n = t.state,
                i = t.counterparty,
                a = t.delay_period,
                s = {
                  id: o,
                  client_id: e,
                  versions: r.map(function (t) {
                    return t.toAmino();
                  }),
                  state: (0, c.stateToJSON)(n),
                  counterparty:
                    null === i || void 0 === i ? void 0 : i.toAmino(),
                  delay_period: a.toFixed(),
                };
              return s;
            }),
            (o.fromData = function (t) {
              var e = t.id,
                r = t.client_id,
                n = t.versions,
                i = t.state,
                a = t.counterparty,
                p = t.delay_period;
              return new o(
                e,
                r,
                n.map(s.Version.fromData),
                (0, c.stateFromJSON)(i),
                a ? u.Counterparty.fromData(a) : void 0,
                Number.parseInt(p),
              );
            }),
            (o.prototype.toData = function () {
              var t = this,
                o = t.id,
                e = t.client_id,
                r = t.versions,
                n = t.state,
                i = t.counterparty,
                a = t.delay_period,
                s = {
                  id: o,
                  client_id: e,
                  versions: r.map(function (t) {
                    return t.toData();
                  }),
                  state: (0, c.stateToJSON)(n),
                  counterparty:
                    null === i || void 0 === i ? void 0 : i.toData(),
                  delay_period: a.toFixed(),
                };
              return s;
            }),
            (o.fromProto = function (t) {
              return new o(
                t.id,
                t.clientId,
                t.versions.map(s.Version.fromProto),
                t.state,
                t.counterparty
                  ? u.Counterparty.fromProto(t.counterparty)
                  : void 0,
                t.delayPeriod.toNumber(),
              );
            }),
            (o.prototype.toProto = function () {
              var t = this,
                o = t.id,
                e = t.client_id,
                r = t.versions,
                n = t.state,
                a = t.counterparty,
                s = t.delay_period;
              return i.IdentifiedConnection.fromPartial({
                id: o,
                clientId: e,
                versions: r.map(function (t) {
                  return t.toProto();
                }),
                state: n,
                counterparty: null === a || void 0 === a ? void 0 : a.toProto(),
                delayPeriod: p.default.fromNumber(s),
              });
            }),
            o
          );
        })(a.JSONSerializable);
      o.IdentifiedConnection = l;
    },
  },
]);
