(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [428],
  {
    7880: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.proto = t.google = t.default = t.com = void 0));
      var n = r(o(6090));
      function r(e, t) {
        if ("function" == typeof WeakMap)
          var o = new WeakMap(),
            n = new WeakMap();
        return (r = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            c,
            a = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((r = t ? n : o)) {
            if (r.has(e)) return r.get(e);
            r.set(e, a);
          }
          for (const o in e)
            "default" !== o &&
              {}.hasOwnProperty.call(e, o) &&
              ((c =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, o)) &&
              (c.get || c.set)
                ? r(a, o, c)
                : (a[o] = e[o]));
          return a;
        })(e, t);
      }
      const c = n.Reader,
        a = n.Writer,
        l = n.util,
        i = (t.default = n.roots.hashgraph || (n.roots.hashgraph = {}));
      ((t.com = i.com =
        (() => {
          const e = {};
          return (
            (e.hedera = (function () {
              const e = {};
              return (
                (e.mirror = (function () {
                  const e = {};
                  return (
                    (e.api = (function () {
                      const e = {};
                      return (
                        (e.proto = (function () {
                          const e = {};
                          return (
                            (e.ConsensusTopicQuery = (function () {
                              function e(e) {
                                if (e)
                                  for (
                                    var t = Object.keys(e), o = 0;
                                    o < t.length;
                                    ++o
                                  )
                                    null != e[t[o]] && (this[t[o]] = e[t[o]]);
                              }
                              return (
                                (e.prototype.topicID = null),
                                (e.prototype.consensusStartTime = null),
                                (e.prototype.consensusEndTime = null),
                                (e.prototype.limit = l.Long
                                  ? l.Long.fromBits(0, 0, !0)
                                  : 0),
                                (e.create = function (t) {
                                  return new e(t);
                                }),
                                (e.encode = function (e, t) {
                                  return (
                                    t || (t = a.create()),
                                    null != e.topicID &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "topicID",
                                      ) &&
                                      i.proto.TopicID.encode(
                                        e.topicID,
                                        t.uint32(10).fork(),
                                      ).ldelim(),
                                    null != e.consensusStartTime &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "consensusStartTime",
                                      ) &&
                                      i.proto.Timestamp.encode(
                                        e.consensusStartTime,
                                        t.uint32(18).fork(),
                                      ).ldelim(),
                                    null != e.consensusEndTime &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "consensusEndTime",
                                      ) &&
                                      i.proto.Timestamp.encode(
                                        e.consensusEndTime,
                                        t.uint32(26).fork(),
                                      ).ldelim(),
                                    null != e.limit &&
                                      Object.hasOwnProperty.call(e, "limit") &&
                                      t.uint32(32).uint64(e.limit),
                                    t
                                  );
                                }),
                                (e.decode = function (e, t) {
                                  e instanceof c || (e = c.create(e));
                                  var o = void 0 === t ? e.len : e.pos + t,
                                    n =
                                      new i.com.hedera.mirror.api.proto.ConsensusTopicQuery();
                                  while (e.pos < o) {
                                    var r = e.uint32();
                                    switch (r >>> 3) {
                                      case 1:
                                        n.topicID = i.proto.TopicID.decode(
                                          e,
                                          e.uint32(),
                                        );
                                        break;
                                      case 2:
                                        n.consensusStartTime =
                                          i.proto.Timestamp.decode(
                                            e,
                                            e.uint32(),
                                          );
                                        break;
                                      case 3:
                                        n.consensusEndTime =
                                          i.proto.Timestamp.decode(
                                            e,
                                            e.uint32(),
                                          );
                                        break;
                                      case 4:
                                        n.limit = e.uint64();
                                        break;
                                      default:
                                        e.skipType(7 & r);
                                        break;
                                    }
                                  }
                                  return n;
                                }),
                                (e.getTypeUrl = function (e) {
                                  return (
                                    void 0 === e && (e = "type.googleapis.com"),
                                    e +
                                      "/com.hedera.mirror.api.proto.ConsensusTopicQuery"
                                  );
                                }),
                                e
                              );
                            })()),
                            (e.ConsensusTopicResponse = (function () {
                              function e(e) {
                                if (e)
                                  for (
                                    var t = Object.keys(e), o = 0;
                                    o < t.length;
                                    ++o
                                  )
                                    null != e[t[o]] && (this[t[o]] = e[t[o]]);
                              }
                              return (
                                (e.prototype.consensusTimestamp = null),
                                (e.prototype.message = l.newBuffer([])),
                                (e.prototype.runningHash = l.newBuffer([])),
                                (e.prototype.sequenceNumber = l.Long
                                  ? l.Long.fromBits(0, 0, !0)
                                  : 0),
                                (e.prototype.runningHashVersion = l.Long
                                  ? l.Long.fromBits(0, 0, !0)
                                  : 0),
                                (e.prototype.chunkInfo = null),
                                (e.create = function (t) {
                                  return new e(t);
                                }),
                                (e.encode = function (e, t) {
                                  return (
                                    t || (t = a.create()),
                                    null != e.consensusTimestamp &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "consensusTimestamp",
                                      ) &&
                                      i.proto.Timestamp.encode(
                                        e.consensusTimestamp,
                                        t.uint32(10).fork(),
                                      ).ldelim(),
                                    null != e.message &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "message",
                                      ) &&
                                      t.uint32(18).bytes(e.message),
                                    null != e.runningHash &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "runningHash",
                                      ) &&
                                      t.uint32(26).bytes(e.runningHash),
                                    null != e.sequenceNumber &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "sequenceNumber",
                                      ) &&
                                      t.uint32(32).uint64(e.sequenceNumber),
                                    null != e.runningHashVersion &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "runningHashVersion",
                                      ) &&
                                      t.uint32(40).uint64(e.runningHashVersion),
                                    null != e.chunkInfo &&
                                      Object.hasOwnProperty.call(
                                        e,
                                        "chunkInfo",
                                      ) &&
                                      i.proto.ConsensusMessageChunkInfo.encode(
                                        e.chunkInfo,
                                        t.uint32(50).fork(),
                                      ).ldelim(),
                                    t
                                  );
                                }),
                                (e.decode = function (e, t) {
                                  e instanceof c || (e = c.create(e));
                                  var o = void 0 === t ? e.len : e.pos + t,
                                    n =
                                      new i.com.hedera.mirror.api.proto.ConsensusTopicResponse();
                                  while (e.pos < o) {
                                    var r = e.uint32();
                                    switch (r >>> 3) {
                                      case 1:
                                        n.consensusTimestamp =
                                          i.proto.Timestamp.decode(
                                            e,
                                            e.uint32(),
                                          );
                                        break;
                                      case 2:
                                        n.message = e.bytes();
                                        break;
                                      case 3:
                                        n.runningHash = e.bytes();
                                        break;
                                      case 4:
                                        n.sequenceNumber = e.uint64();
                                        break;
                                      case 5:
                                        n.runningHashVersion = e.uint64();
                                        break;
                                      case 6:
                                        n.chunkInfo =
                                          i.proto.ConsensusMessageChunkInfo.decode(
                                            e,
                                            e.uint32(),
                                          );
                                        break;
                                      default:
                                        e.skipType(7 & r);
                                        break;
                                    }
                                  }
                                  return n;
                                }),
                                (e.getTypeUrl = function (e) {
                                  return (
                                    void 0 === e && (e = "type.googleapis.com"),
                                    e +
                                      "/com.hedera.mirror.api.proto.ConsensusTopicResponse"
                                  );
                                }),
                                e
                              );
                            })()),
                            (e.ConsensusService = (function () {
                              function e(e, t, o) {
                                n.rpc.Service.call(this, e, t, o);
                              }
                              return (
                                ((e.prototype = Object.create(
                                  n.rpc.Service.prototype,
                                )).constructor = e),
                                (e.create = function (e, t, o) {
                                  return new this(e, t, o);
                                }),
                                Object.defineProperty(
                                  (e.prototype.subscribeTopic = function e(
                                    t,
                                    o,
                                  ) {
                                    return this.rpcCall(
                                      e,
                                      i.com.hedera.mirror.api.proto
                                        .ConsensusTopicQuery,
                                      i.com.hedera.mirror.api.proto
                                        .ConsensusTopicResponse,
                                      t,
                                      o,
                                    );
                                  }),
                                  "name",
                                  { value: "subscribeTopic" },
                                ),
                                e
                              );
                            })()),
                            (e.AddressBookQuery = (function () {
                              function e(e) {
                                if (e)
                                  for (
                                    var t = Object.keys(e), o = 0;
                                    o < t.length;
                                    ++o
                                  )
                                    null != e[t[o]] && (this[t[o]] = e[t[o]]);
                              }
                              return (
                                (e.prototype.fileId = null),
                                (e.prototype.limit = 0),
                                (e.create = function (t) {
                                  return new e(t);
                                }),
                                (e.encode = function (e, t) {
                                  return (
                                    t || (t = a.create()),
                                    null != e.fileId &&
                                      Object.hasOwnProperty.call(e, "fileId") &&
                                      i.proto.FileID.encode(
                                        e.fileId,
                                        t.uint32(10).fork(),
                                      ).ldelim(),
                                    null != e.limit &&
                                      Object.hasOwnProperty.call(e, "limit") &&
                                      t.uint32(16).int32(e.limit),
                                    t
                                  );
                                }),
                                (e.decode = function (e, t) {
                                  e instanceof c || (e = c.create(e));
                                  var o = void 0 === t ? e.len : e.pos + t,
                                    n =
                                      new i.com.hedera.mirror.api.proto.AddressBookQuery();
                                  while (e.pos < o) {
                                    var r = e.uint32();
                                    switch (r >>> 3) {
                                      case 1:
                                        n.fileId = i.proto.FileID.decode(
                                          e,
                                          e.uint32(),
                                        );
                                        break;
                                      case 2:
                                        n.limit = e.int32();
                                        break;
                                      default:
                                        e.skipType(7 & r);
                                        break;
                                    }
                                  }
                                  return n;
                                }),
                                (e.getTypeUrl = function (e) {
                                  return (
                                    void 0 === e && (e = "type.googleapis.com"),
                                    e +
                                      "/com.hedera.mirror.api.proto.AddressBookQuery"
                                  );
                                }),
                                e
                              );
                            })()),
                            (e.NetworkService = (function () {
                              function e(e, t, o) {
                                n.rpc.Service.call(this, e, t, o);
                              }
                              return (
                                ((e.prototype = Object.create(
                                  n.rpc.Service.prototype,
                                )).constructor = e),
                                (e.create = function (e, t, o) {
                                  return new this(e, t, o);
                                }),
                                Object.defineProperty(
                                  (e.prototype.getNodes = function e(t, o) {
                                    return this.rpcCall(
                                      e,
                                      i.com.hedera.mirror.api.proto
                                        .AddressBookQuery,
                                      i.proto.NodeAddress,
                                      t,
                                      o,
                                    );
                                  }),
                                  "name",
                                  { value: "getNodes" },
                                ),
                                e
                              );
                            })()),
                            e
                          );
                        })()),
                        e
                      );
                    })()),
                    e
                  );
                })()),
                e
              );
            })()),
            e
          );
        })()),
        (t.proto = i.proto =
          (() => {
            const e = {};
            return (
              (e.TransactionList = (function () {
                function e(e) {
                  if (((this.transactionList = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transactionList = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.transactionList && e.transactionList.length)
                    )
                      for (var o = 0; o < e.transactionList.length; ++o)
                        i.proto.Transaction.encode(
                          e.transactionList[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionList();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.transactionList && n.transactionList.length) ||
                            (n.transactionList = []),
                            n.transactionList.push(
                              i.proto.Transaction.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionList"
                    );
                  }),
                  e
                );
              })()),
              (e.ShardID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ShardID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ShardID"
                    );
                  }),
                  e
                );
              })()),
              (e.RealmID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.RealmID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.RealmID"
                    );
                  }),
                  e
                );
              })()),
              (e.AccountID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.accountNum = null),
                  (e.prototype.alias = null),
                  Object.defineProperty(e.prototype, "account", {
                    get: l.oneOfGetter((t = ["accountNum", "alias"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      null != e.accountNum &&
                        Object.hasOwnProperty.call(e, "accountNum") &&
                        t.uint32(24).int64(e.accountNum),
                      null != e.alias &&
                        Object.hasOwnProperty.call(e, "alias") &&
                        t.uint32(34).bytes(e.alias),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.AccountID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        case 3:
                          n.accountNum = e.int64();
                          break;
                        case 4:
                          n.alias = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.AccountID"
                    );
                  }),
                  e
                );
              })()),
              (e.FileID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.fileNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      null != e.fileNum &&
                        Object.hasOwnProperty.call(e, "fileNum") &&
                        t.uint32(24).int64(e.fileNum),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        case 3:
                          n.fileNum = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileID"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.contractNum = null),
                  (e.prototype.evmAddress = null),
                  Object.defineProperty(e.prototype, "contract", {
                    get: l.oneOfGetter((t = ["contractNum", "evmAddress"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      null != e.contractNum &&
                        Object.hasOwnProperty.call(e, "contractNum") &&
                        t.uint32(24).int64(e.contractNum),
                      null != e.evmAddress &&
                        Object.hasOwnProperty.call(e, "evmAddress") &&
                        t.uint32(34).bytes(e.evmAddress),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        case 3:
                          n.contractNum = e.int64();
                          break;
                        case 4:
                          n.evmAddress = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractID"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transactionValidStart = null),
                  (e.prototype.accountID = null),
                  (e.prototype.scheduled = !1),
                  (e.prototype.nonce = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.transactionValidStart &&
                        Object.hasOwnProperty.call(
                          e,
                          "transactionValidStart",
                        ) &&
                        i.proto.Timestamp.encode(
                          e.transactionValidStart,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.scheduled &&
                        Object.hasOwnProperty.call(e, "scheduled") &&
                        t.uint32(24).bool(e.scheduled),
                      null != e.nonce &&
                        Object.hasOwnProperty.call(e, "nonce") &&
                        t.uint32(32).int32(e.nonce),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transactionValidStart = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.scheduled = e.bool();
                          break;
                        case 4:
                          n.nonce = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionID"
                    );
                  }),
                  e
                );
              })()),
              (e.AccountAmount = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountID = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.isApproval = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(16).sint64(e.amount),
                      null != e.isApproval &&
                        Object.hasOwnProperty.call(e, "isApproval") &&
                        t.uint32(24).bool(e.isApproval),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.AccountAmount();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.amount = e.sint64();
                          break;
                        case 3:
                          n.isApproval = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.AccountAmount"
                    );
                  }),
                  e
                );
              })()),
              (e.TransferList = (function () {
                function e(e) {
                  if (((this.accountAmounts = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountAmounts = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.accountAmounts && e.accountAmounts.length)
                    )
                      for (var o = 0; o < e.accountAmounts.length; ++o)
                        i.proto.AccountAmount.encode(
                          e.accountAmounts[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransferList();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.accountAmounts && n.accountAmounts.length) ||
                            (n.accountAmounts = []),
                            n.accountAmounts.push(
                              i.proto.AccountAmount.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransferList"
                    );
                  }),
                  e
                );
              })()),
              (e.NftTransfer = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.senderAccountID = null),
                  (e.prototype.receiverAccountID = null),
                  (e.prototype.serialNumber = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.isApproval = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.senderAccountID &&
                        Object.hasOwnProperty.call(e, "senderAccountID") &&
                        i.proto.AccountID.encode(
                          e.senderAccountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.receiverAccountID &&
                        Object.hasOwnProperty.call(e, "receiverAccountID") &&
                        i.proto.AccountID.encode(
                          e.receiverAccountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.serialNumber &&
                        Object.hasOwnProperty.call(e, "serialNumber") &&
                        t.uint32(24).int64(e.serialNumber),
                      null != e.isApproval &&
                        Object.hasOwnProperty.call(e, "isApproval") &&
                        t.uint32(32).bool(e.isApproval),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NftTransfer();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.senderAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.receiverAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.serialNumber = e.int64();
                          break;
                        case 4:
                          n.isApproval = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NftTransfer"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenTransferList = (function () {
                function e(e) {
                  if (((this.transfers = []), (this.nftTransfers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.transfers = l.emptyArray),
                  (e.prototype.nftTransfers = l.emptyArray),
                  (e.prototype.expectedDecimals = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transfers && e.transfers.length)
                    )
                      for (var o = 0; o < e.transfers.length; ++o)
                        i.proto.AccountAmount.encode(
                          e.transfers[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    if (null != e.nftTransfers && e.nftTransfers.length)
                      for (o = 0; o < e.nftTransfers.length; ++o)
                        i.proto.NftTransfer.encode(
                          e.nftTransfers[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return (
                      null != e.expectedDecimals &&
                        Object.hasOwnProperty.call(e, "expectedDecimals") &&
                        i.google.protobuf.UInt32Value.encode(
                          e.expectedDecimals,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenTransferList();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          ((n.transfers && n.transfers.length) ||
                            (n.transfers = []),
                            n.transfers.push(
                              i.proto.AccountAmount.decode(e, e.uint32()),
                            ));
                          break;
                        case 3:
                          ((n.nftTransfers && n.nftTransfers.length) ||
                            (n.nftTransfers = []),
                            n.nftTransfers.push(
                              i.proto.NftTransfer.decode(e, e.uint32()),
                            ));
                          break;
                        case 4:
                          n.expectedDecimals =
                            i.google.protobuf.UInt32Value.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenTransferList"
                    );
                  }),
                  e
                );
              })()),
              (e.Fraction = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.numerator = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.denominator = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.numerator &&
                        Object.hasOwnProperty.call(e, "numerator") &&
                        t.uint32(8).int64(e.numerator),
                      null != e.denominator &&
                        Object.hasOwnProperty.call(e, "denominator") &&
                        t.uint32(16).int64(e.denominator),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Fraction();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.numerator = e.int64();
                          break;
                        case 2:
                          n.denominator = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Fraction"
                    );
                  }),
                  e
                );
              })()),
              (e.TopicID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.topicNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      null != e.topicNum &&
                        Object.hasOwnProperty.call(e, "topicNum") &&
                        t.uint32(24).int64(e.topicNum),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TopicID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        case 3:
                          n.topicNum = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TopicID"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.tokenNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      null != e.tokenNum &&
                        Object.hasOwnProperty.call(e, "tokenNum") &&
                        t.uint32(24).int64(e.tokenNum),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        case 3:
                          n.tokenNum = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenID"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.shardNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.realmNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.scheduleNum = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.shardNum &&
                        Object.hasOwnProperty.call(e, "shardNum") &&
                        t.uint32(8).int64(e.shardNum),
                      null != e.realmNum &&
                        Object.hasOwnProperty.call(e, "realmNum") &&
                        t.uint32(16).int64(e.realmNum),
                      null != e.scheduleNum &&
                        Object.hasOwnProperty.call(e, "scheduleNum") &&
                        t.uint32(24).int64(e.scheduleNum),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.shardNum = e.int64();
                          break;
                        case 2:
                          n.realmNum = e.int64();
                          break;
                        case 3:
                          n.scheduleNum = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleID"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "FUNGIBLE_COMMON")] = 0),
                  (t[(e[1] = "NON_FUNGIBLE_UNIQUE")] = 1),
                  t
                );
              })()),
              (e.SubType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "DEFAULT")] = 0),
                  (t[(e[1] = "TOKEN_FUNGIBLE_COMMON")] = 1),
                  (t[(e[2] = "TOKEN_NON_FUNGIBLE_UNIQUE")] = 2),
                  (t[(e[3] = "TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES")] = 3),
                  (t[(e[4] = "TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES")] =
                    4),
                  (t[(e[5] = "SCHEDULE_CREATE_CONTRACT_CALL")] = 5),
                  t
                );
              })()),
              (e.TokenSupplyType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "INFINITE")] = 0),
                  (t[(e[1] = "FINITE")] = 1),
                  t
                );
              })()),
              (e.TokenFreezeStatus = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "FreezeNotApplicable")] = 0),
                  (t[(e[1] = "Frozen")] = 1),
                  (t[(e[2] = "Unfrozen")] = 2),
                  t
                );
              })()),
              (e.TokenKycStatus = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "KycNotApplicable")] = 0),
                  (t[(e[1] = "Granted")] = 1),
                  (t[(e[2] = "Revoked")] = 2),
                  t
                );
              })()),
              (e.TokenPauseStatus = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "PauseNotApplicable")] = 0),
                  (t[(e[1] = "Paused")] = 1),
                  (t[(e[2] = "Unpaused")] = 2),
                  t
                );
              })()),
              (e.Key = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.contractID = null),
                  (e.prototype.ed25519 = null),
                  (e.prototype.RSA_3072 = null),
                  (e.prototype.ECDSA_384 = null),
                  (e.prototype.thresholdKey = null),
                  (e.prototype.keyList = null),
                  (e.prototype.ECDSASecp256k1 = null),
                  (e.prototype.delegatableContractId = null),
                  Object.defineProperty(e.prototype, "key", {
                    get: l.oneOfGetter(
                      (t = [
                        "contractID",
                        "ed25519",
                        "RSA_3072",
                        "ECDSA_384",
                        "thresholdKey",
                        "keyList",
                        "ECDSASecp256k1",
                        "delegatableContractId",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.ed25519 &&
                        Object.hasOwnProperty.call(e, "ed25519") &&
                        t.uint32(18).bytes(e.ed25519),
                      null != e.RSA_3072 &&
                        Object.hasOwnProperty.call(e, "RSA_3072") &&
                        t.uint32(26).bytes(e.RSA_3072),
                      null != e.ECDSA_384 &&
                        Object.hasOwnProperty.call(e, "ECDSA_384") &&
                        t.uint32(34).bytes(e.ECDSA_384),
                      null != e.thresholdKey &&
                        Object.hasOwnProperty.call(e, "thresholdKey") &&
                        i.proto.ThresholdKey.encode(
                          e.thresholdKey,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.keyList &&
                        Object.hasOwnProperty.call(e, "keyList") &&
                        i.proto.KeyList.encode(
                          e.keyList,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.ECDSASecp256k1 &&
                        Object.hasOwnProperty.call(e, "ECDSASecp256k1") &&
                        t.uint32(58).bytes(e.ECDSASecp256k1),
                      null != e.delegatableContractId &&
                        Object.hasOwnProperty.call(
                          e,
                          "delegatableContractId",
                        ) &&
                        i.proto.ContractID.encode(
                          e.delegatableContractId,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Key();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.ed25519 = e.bytes();
                          break;
                        case 3:
                          n.RSA_3072 = e.bytes();
                          break;
                        case 4:
                          n.ECDSA_384 = e.bytes();
                          break;
                        case 5:
                          n.thresholdKey = i.proto.ThresholdKey.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.keyList = i.proto.KeyList.decode(e, e.uint32());
                          break;
                        case 7:
                          n.ECDSASecp256k1 = e.bytes();
                          break;
                        case 8:
                          n.delegatableContractId = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Key"
                    );
                  }),
                  e
                );
              })()),
              (e.ThresholdKey = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.threshold = 0),
                  (e.prototype.keys = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.threshold &&
                        Object.hasOwnProperty.call(e, "threshold") &&
                        t.uint32(8).uint32(e.threshold),
                      null != e.keys &&
                        Object.hasOwnProperty.call(e, "keys") &&
                        i.proto.KeyList.encode(
                          e.keys,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ThresholdKey();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.threshold = e.uint32();
                          break;
                        case 2:
                          n.keys = i.proto.KeyList.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ThresholdKey"
                    );
                  }),
                  e
                );
              })()),
              (e.KeyList = (function () {
                function e(e) {
                  if (((this.keys = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.keys = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()), null != e.keys && e.keys.length)
                    )
                      for (var o = 0; o < e.keys.length; ++o)
                        i.proto.Key.encode(
                          e.keys[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.KeyList();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.keys && n.keys.length) || (n.keys = []),
                            n.keys.push(i.proto.Key.decode(e, e.uint32())));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.KeyList"
                    );
                  }),
                  e
                );
              })()),
              (e.Signature = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.contract = null),
                  (e.prototype.ed25519 = null),
                  (e.prototype.RSA_3072 = null),
                  (e.prototype.ECDSA_384 = null),
                  (e.prototype.thresholdSignature = null),
                  (e.prototype.signatureList = null),
                  Object.defineProperty(e.prototype, "signature", {
                    get: l.oneOfGetter(
                      (t = [
                        "contract",
                        "ed25519",
                        "RSA_3072",
                        "ECDSA_384",
                        "thresholdSignature",
                        "signatureList",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contract &&
                        Object.hasOwnProperty.call(e, "contract") &&
                        t.uint32(10).bytes(e.contract),
                      null != e.ed25519 &&
                        Object.hasOwnProperty.call(e, "ed25519") &&
                        t.uint32(18).bytes(e.ed25519),
                      null != e.RSA_3072 &&
                        Object.hasOwnProperty.call(e, "RSA_3072") &&
                        t.uint32(26).bytes(e.RSA_3072),
                      null != e.ECDSA_384 &&
                        Object.hasOwnProperty.call(e, "ECDSA_384") &&
                        t.uint32(34).bytes(e.ECDSA_384),
                      null != e.thresholdSignature &&
                        Object.hasOwnProperty.call(e, "thresholdSignature") &&
                        i.proto.ThresholdSignature.encode(
                          e.thresholdSignature,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.signatureList &&
                        Object.hasOwnProperty.call(e, "signatureList") &&
                        i.proto.SignatureList.encode(
                          e.signatureList,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Signature();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contract = e.bytes();
                          break;
                        case 2:
                          n.ed25519 = e.bytes();
                          break;
                        case 3:
                          n.RSA_3072 = e.bytes();
                          break;
                        case 4:
                          n.ECDSA_384 = e.bytes();
                          break;
                        case 5:
                          n.thresholdSignature =
                            i.proto.ThresholdSignature.decode(e, e.uint32());
                          break;
                        case 6:
                          n.signatureList = i.proto.SignatureList.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Signature"
                    );
                  }),
                  e
                );
              })()),
              (e.ThresholdSignature = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.sigs = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.sigs &&
                        Object.hasOwnProperty.call(e, "sigs") &&
                        i.proto.SignatureList.encode(
                          e.sigs,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ThresholdSignature();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          n.sigs = i.proto.SignatureList.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ThresholdSignature"
                    );
                  }),
                  e
                );
              })()),
              (e.SignatureList = (function () {
                function e(e) {
                  if (((this.sigs = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.sigs = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()), null != e.sigs && e.sigs.length)
                    )
                      for (var o = 0; o < e.sigs.length; ++o)
                        i.proto.Signature.encode(
                          e.sigs[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SignatureList();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          ((n.sigs && n.sigs.length) || (n.sigs = []),
                            n.sigs.push(
                              i.proto.Signature.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SignatureList"
                    );
                  }),
                  e
                );
              })()),
              (e.SignaturePair = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.pubKeyPrefix = l.newBuffer([])),
                  (e.prototype.contract = null),
                  (e.prototype.ed25519 = null),
                  (e.prototype.RSA_3072 = null),
                  (e.prototype.ECDSA_384 = null),
                  (e.prototype.ECDSASecp256k1 = null),
                  Object.defineProperty(e.prototype, "signature", {
                    get: l.oneOfGetter(
                      (t = [
                        "contract",
                        "ed25519",
                        "RSA_3072",
                        "ECDSA_384",
                        "ECDSASecp256k1",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.pubKeyPrefix &&
                        Object.hasOwnProperty.call(e, "pubKeyPrefix") &&
                        t.uint32(10).bytes(e.pubKeyPrefix),
                      null != e.contract &&
                        Object.hasOwnProperty.call(e, "contract") &&
                        t.uint32(18).bytes(e.contract),
                      null != e.ed25519 &&
                        Object.hasOwnProperty.call(e, "ed25519") &&
                        t.uint32(26).bytes(e.ed25519),
                      null != e.RSA_3072 &&
                        Object.hasOwnProperty.call(e, "RSA_3072") &&
                        t.uint32(34).bytes(e.RSA_3072),
                      null != e.ECDSA_384 &&
                        Object.hasOwnProperty.call(e, "ECDSA_384") &&
                        t.uint32(42).bytes(e.ECDSA_384),
                      null != e.ECDSASecp256k1 &&
                        Object.hasOwnProperty.call(e, "ECDSASecp256k1") &&
                        t.uint32(50).bytes(e.ECDSASecp256k1),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SignaturePair();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.pubKeyPrefix = e.bytes();
                          break;
                        case 2:
                          n.contract = e.bytes();
                          break;
                        case 3:
                          n.ed25519 = e.bytes();
                          break;
                        case 4:
                          n.RSA_3072 = e.bytes();
                          break;
                        case 5:
                          n.ECDSA_384 = e.bytes();
                          break;
                        case 6:
                          n.ECDSASecp256k1 = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SignaturePair"
                    );
                  }),
                  e
                );
              })()),
              (e.SignatureMap = (function () {
                function e(e) {
                  if (((this.sigPair = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.sigPair = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.sigPair && e.sigPair.length)
                    )
                      for (var o = 0; o < e.sigPair.length; ++o)
                        i.proto.SignaturePair.encode(
                          e.sigPair[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SignatureMap();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.sigPair && n.sigPair.length) || (n.sigPair = []),
                            n.sigPair.push(
                              i.proto.SignaturePair.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SignatureMap"
                    );
                  }),
                  e
                );
              })()),
              (e.HederaFunctionality = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "NONE")] = 0),
                  (t[(e[1] = "CryptoTransfer")] = 1),
                  (t[(e[2] = "CryptoUpdate")] = 2),
                  (t[(e[3] = "CryptoDelete")] = 3),
                  (t[(e[4] = "CryptoAddLiveHash")] = 4),
                  (t[(e[5] = "CryptoDeleteLiveHash")] = 5),
                  (t[(e[6] = "ContractCall")] = 6),
                  (t[(e[7] = "ContractCreate")] = 7),
                  (t[(e[8] = "ContractUpdate")] = 8),
                  (t[(e[9] = "FileCreate")] = 9),
                  (t[(e[10] = "FileAppend")] = 10),
                  (t[(e[11] = "FileUpdate")] = 11),
                  (t[(e[12] = "FileDelete")] = 12),
                  (t[(e[13] = "CryptoGetAccountBalance")] = 13),
                  (t[(e[14] = "CryptoGetAccountRecords")] = 14),
                  (t[(e[15] = "CryptoGetInfo")] = 15),
                  (t[(e[16] = "ContractCallLocal")] = 16),
                  (t[(e[17] = "ContractGetInfo")] = 17),
                  (t[(e[18] = "ContractGetBytecode")] = 18),
                  (t[(e[19] = "GetBySolidityID")] = 19),
                  (t[(e[20] = "GetByKey")] = 20),
                  (t[(e[21] = "CryptoGetLiveHash")] = 21),
                  (t[(e[22] = "CryptoGetStakers")] = 22),
                  (t[(e[23] = "FileGetContents")] = 23),
                  (t[(e[24] = "FileGetInfo")] = 24),
                  (t[(e[25] = "TransactionGetRecord")] = 25),
                  (t[(e[26] = "ContractGetRecords")] = 26),
                  (t[(e[27] = "CryptoCreate")] = 27),
                  (t[(e[28] = "SystemDelete")] = 28),
                  (t[(e[29] = "SystemUndelete")] = 29),
                  (t[(e[30] = "ContractDelete")] = 30),
                  (t[(e[31] = "Freeze")] = 31),
                  (t[(e[32] = "CreateTransactionRecord")] = 32),
                  (t[(e[33] = "CryptoAccountAutoRenew")] = 33),
                  (t[(e[34] = "ContractAutoRenew")] = 34),
                  (t[(e[35] = "GetVersionInfo")] = 35),
                  (t[(e[36] = "TransactionGetReceipt")] = 36),
                  (t[(e[50] = "ConsensusCreateTopic")] = 50),
                  (t[(e[51] = "ConsensusUpdateTopic")] = 51),
                  (t[(e[52] = "ConsensusDeleteTopic")] = 52),
                  (t[(e[53] = "ConsensusGetTopicInfo")] = 53),
                  (t[(e[54] = "ConsensusSubmitMessage")] = 54),
                  (t[(e[55] = "UncheckedSubmit")] = 55),
                  (t[(e[56] = "TokenCreate")] = 56),
                  (t[(e[58] = "TokenGetInfo")] = 58),
                  (t[(e[59] = "TokenFreezeAccount")] = 59),
                  (t[(e[60] = "TokenUnfreezeAccount")] = 60),
                  (t[(e[61] = "TokenGrantKycToAccount")] = 61),
                  (t[(e[62] = "TokenRevokeKycFromAccount")] = 62),
                  (t[(e[63] = "TokenDelete")] = 63),
                  (t[(e[64] = "TokenUpdate")] = 64),
                  (t[(e[65] = "TokenMint")] = 65),
                  (t[(e[66] = "TokenBurn")] = 66),
                  (t[(e[67] = "TokenAccountWipe")] = 67),
                  (t[(e[68] = "TokenAssociateToAccount")] = 68),
                  (t[(e[69] = "TokenDissociateFromAccount")] = 69),
                  (t[(e[70] = "ScheduleCreate")] = 70),
                  (t[(e[71] = "ScheduleDelete")] = 71),
                  (t[(e[72] = "ScheduleSign")] = 72),
                  (t[(e[73] = "ScheduleGetInfo")] = 73),
                  (t[(e[74] = "TokenGetAccountNftInfos")] = 74),
                  (t[(e[75] = "TokenGetNftInfo")] = 75),
                  (t[(e[76] = "TokenGetNftInfos")] = 76),
                  (t[(e[77] = "TokenFeeScheduleUpdate")] = 77),
                  (t[(e[78] = "NetworkGetExecutionTime")] = 78),
                  (t[(e[79] = "TokenPause")] = 79),
                  (t[(e[80] = "TokenUnpause")] = 80),
                  (t[(e[81] = "CryptoApproveAllowance")] = 81),
                  (t[(e[82] = "CryptoDeleteAllowance")] = 82),
                  (t[(e[83] = "GetAccountDetails")] = 83),
                  (t[(e[84] = "EthereumTransaction")] = 84),
                  (t[(e[85] = "NodeStakeUpdate")] = 85),
                  (t[(e[86] = "UtilPrng")] = 86),
                  t
                );
              })()),
              (e.FeeComponents = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.min = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.max = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.constant = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.bpt = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.vpt = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.rbh = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.sbh = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.gas = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.tv = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.bpr = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.sbpr = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.min &&
                        Object.hasOwnProperty.call(e, "min") &&
                        t.uint32(8).int64(e.min),
                      null != e.max &&
                        Object.hasOwnProperty.call(e, "max") &&
                        t.uint32(16).int64(e.max),
                      null != e.constant &&
                        Object.hasOwnProperty.call(e, "constant") &&
                        t.uint32(24).int64(e.constant),
                      null != e.bpt &&
                        Object.hasOwnProperty.call(e, "bpt") &&
                        t.uint32(32).int64(e.bpt),
                      null != e.vpt &&
                        Object.hasOwnProperty.call(e, "vpt") &&
                        t.uint32(40).int64(e.vpt),
                      null != e.rbh &&
                        Object.hasOwnProperty.call(e, "rbh") &&
                        t.uint32(48).int64(e.rbh),
                      null != e.sbh &&
                        Object.hasOwnProperty.call(e, "sbh") &&
                        t.uint32(56).int64(e.sbh),
                      null != e.gas &&
                        Object.hasOwnProperty.call(e, "gas") &&
                        t.uint32(64).int64(e.gas),
                      null != e.tv &&
                        Object.hasOwnProperty.call(e, "tv") &&
                        t.uint32(72).int64(e.tv),
                      null != e.bpr &&
                        Object.hasOwnProperty.call(e, "bpr") &&
                        t.uint32(80).int64(e.bpr),
                      null != e.sbpr &&
                        Object.hasOwnProperty.call(e, "sbpr") &&
                        t.uint32(88).int64(e.sbpr),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FeeComponents();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.min = e.int64();
                          break;
                        case 2:
                          n.max = e.int64();
                          break;
                        case 3:
                          n.constant = e.int64();
                          break;
                        case 4:
                          n.bpt = e.int64();
                          break;
                        case 5:
                          n.vpt = e.int64();
                          break;
                        case 6:
                          n.rbh = e.int64();
                          break;
                        case 7:
                          n.sbh = e.int64();
                          break;
                        case 8:
                          n.gas = e.int64();
                          break;
                        case 9:
                          n.tv = e.int64();
                          break;
                        case 10:
                          n.bpr = e.int64();
                          break;
                        case 11:
                          n.sbpr = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FeeComponents"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionFeeSchedule = (function () {
                function e(e) {
                  if (((this.fees = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.hederaFunctionality = 0),
                  (e.prototype.feeData = null),
                  (e.prototype.fees = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.hederaFunctionality &&
                        Object.hasOwnProperty.call(e, "hederaFunctionality") &&
                        t.uint32(8).int32(e.hederaFunctionality),
                      null != e.feeData &&
                        Object.hasOwnProperty.call(e, "feeData") &&
                        i.proto.FeeData.encode(
                          e.feeData,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.fees && e.fees.length)
                    )
                      for (var o = 0; o < e.fees.length; ++o)
                        i.proto.FeeData.encode(
                          e.fees[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionFeeSchedule();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.hederaFunctionality = e.int32();
                          break;
                        case 2:
                          n.feeData = i.proto.FeeData.decode(e, e.uint32());
                          break;
                        case 3:
                          ((n.fees && n.fees.length) || (n.fees = []),
                            n.fees.push(i.proto.FeeData.decode(e, e.uint32())));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionFeeSchedule"
                    );
                  }),
                  e
                );
              })()),
              (e.FeeData = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nodedata = null),
                  (e.prototype.networkdata = null),
                  (e.prototype.servicedata = null),
                  (e.prototype.subType = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.nodedata &&
                        Object.hasOwnProperty.call(e, "nodedata") &&
                        i.proto.FeeComponents.encode(
                          e.nodedata,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.networkdata &&
                        Object.hasOwnProperty.call(e, "networkdata") &&
                        i.proto.FeeComponents.encode(
                          e.networkdata,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.servicedata &&
                        Object.hasOwnProperty.call(e, "servicedata") &&
                        i.proto.FeeComponents.encode(
                          e.servicedata,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.subType &&
                        Object.hasOwnProperty.call(e, "subType") &&
                        t.uint32(32).int32(e.subType),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FeeData();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.nodedata = i.proto.FeeComponents.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.networkdata = i.proto.FeeComponents.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.servicedata = i.proto.FeeComponents.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.subType = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FeeData"
                    );
                  }),
                  e
                );
              })()),
              (e.FeeSchedule = (function () {
                function e(e) {
                  if (((this.transactionFeeSchedule = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transactionFeeSchedule = l.emptyArray),
                  (e.prototype.expiryTime = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.transactionFeeSchedule &&
                        e.transactionFeeSchedule.length)
                    )
                      for (var o = 0; o < e.transactionFeeSchedule.length; ++o)
                        i.proto.TransactionFeeSchedule.encode(
                          e.transactionFeeSchedule[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return (
                      null != e.expiryTime &&
                        Object.hasOwnProperty.call(e, "expiryTime") &&
                        i.proto.TimestampSeconds.encode(
                          e.expiryTime,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FeeSchedule();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.transactionFeeSchedule &&
                            n.transactionFeeSchedule.length) ||
                            (n.transactionFeeSchedule = []),
                            n.transactionFeeSchedule.push(
                              i.proto.TransactionFeeSchedule.decode(
                                e,
                                e.uint32(),
                              ),
                            ));
                          break;
                        case 2:
                          n.expiryTime = i.proto.TimestampSeconds.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FeeSchedule"
                    );
                  }),
                  e
                );
              })()),
              (e.CurrentAndNextFeeSchedule = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.currentFeeSchedule = null),
                  (e.prototype.nextFeeSchedule = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.currentFeeSchedule &&
                        Object.hasOwnProperty.call(e, "currentFeeSchedule") &&
                        i.proto.FeeSchedule.encode(
                          e.currentFeeSchedule,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nextFeeSchedule &&
                        Object.hasOwnProperty.call(e, "nextFeeSchedule") &&
                        i.proto.FeeSchedule.encode(
                          e.nextFeeSchedule,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CurrentAndNextFeeSchedule();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.currentFeeSchedule = i.proto.FeeSchedule.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.nextFeeSchedule = i.proto.FeeSchedule.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CurrentAndNextFeeSchedule"
                    );
                  }),
                  e
                );
              })()),
              (e.ServiceEndpoint = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ipAddressV4 = l.newBuffer([])),
                  (e.prototype.port = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.ipAddressV4 &&
                        Object.hasOwnProperty.call(e, "ipAddressV4") &&
                        t.uint32(10).bytes(e.ipAddressV4),
                      null != e.port &&
                        Object.hasOwnProperty.call(e, "port") &&
                        t.uint32(16).int32(e.port),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ServiceEndpoint();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.ipAddressV4 = e.bytes();
                          break;
                        case 2:
                          n.port = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ServiceEndpoint"
                    );
                  }),
                  e
                );
              })()),
              (e.NodeAddress = (function () {
                function e(e) {
                  if (((this.serviceEndpoint = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ipAddress = l.newBuffer([])),
                  (e.prototype.portno = 0),
                  (e.prototype.memo = l.newBuffer([])),
                  (e.prototype.RSA_PubKey = ""),
                  (e.prototype.nodeId = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.nodeAccountId = null),
                  (e.prototype.nodeCertHash = l.newBuffer([])),
                  (e.prototype.serviceEndpoint = l.emptyArray),
                  (e.prototype.description = ""),
                  (e.prototype.stake = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.ipAddress &&
                        Object.hasOwnProperty.call(e, "ipAddress") &&
                        t.uint32(10).bytes(e.ipAddress),
                      null != e.portno &&
                        Object.hasOwnProperty.call(e, "portno") &&
                        t.uint32(16).int32(e.portno),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(26).bytes(e.memo),
                      null != e.RSA_PubKey &&
                        Object.hasOwnProperty.call(e, "RSA_PubKey") &&
                        t.uint32(34).string(e.RSA_PubKey),
                      null != e.nodeId &&
                        Object.hasOwnProperty.call(e, "nodeId") &&
                        t.uint32(40).int64(e.nodeId),
                      null != e.nodeAccountId &&
                        Object.hasOwnProperty.call(e, "nodeAccountId") &&
                        i.proto.AccountID.encode(
                          e.nodeAccountId,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.nodeCertHash &&
                        Object.hasOwnProperty.call(e, "nodeCertHash") &&
                        t.uint32(58).bytes(e.nodeCertHash),
                      null != e.serviceEndpoint && e.serviceEndpoint.length)
                    )
                      for (var o = 0; o < e.serviceEndpoint.length; ++o)
                        i.proto.ServiceEndpoint.encode(
                          e.serviceEndpoint[o],
                          t.uint32(66).fork(),
                        ).ldelim();
                    return (
                      null != e.description &&
                        Object.hasOwnProperty.call(e, "description") &&
                        t.uint32(74).string(e.description),
                      null != e.stake &&
                        Object.hasOwnProperty.call(e, "stake") &&
                        t.uint32(80).int64(e.stake),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NodeAddress();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.ipAddress = e.bytes();
                          break;
                        case 2:
                          n.portno = e.int32();
                          break;
                        case 3:
                          n.memo = e.bytes();
                          break;
                        case 4:
                          n.RSA_PubKey = e.string();
                          break;
                        case 5:
                          n.nodeId = e.int64();
                          break;
                        case 6:
                          n.nodeAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 7:
                          n.nodeCertHash = e.bytes();
                          break;
                        case 8:
                          ((n.serviceEndpoint && n.serviceEndpoint.length) ||
                            (n.serviceEndpoint = []),
                            n.serviceEndpoint.push(
                              i.proto.ServiceEndpoint.decode(e, e.uint32()),
                            ));
                          break;
                        case 9:
                          n.description = e.string();
                          break;
                        case 10:
                          n.stake = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NodeAddress"
                    );
                  }),
                  e
                );
              })()),
              (e.NodeAddressBook = (function () {
                function e(e) {
                  if (((this.nodeAddress = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nodeAddress = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.nodeAddress && e.nodeAddress.length)
                    )
                      for (var o = 0; o < e.nodeAddress.length; ++o)
                        i.proto.NodeAddress.encode(
                          e.nodeAddress[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NodeAddressBook();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.nodeAddress && n.nodeAddress.length) ||
                            (n.nodeAddress = []),
                            n.nodeAddress.push(
                              i.proto.NodeAddress.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NodeAddressBook"
                    );
                  }),
                  e
                );
              })()),
              (e.SemanticVersion = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.major = 0),
                  (e.prototype.minor = 0),
                  (e.prototype.patch = 0),
                  (e.prototype.pre = ""),
                  (e.prototype.build = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.major &&
                        Object.hasOwnProperty.call(e, "major") &&
                        t.uint32(8).int32(e.major),
                      null != e.minor &&
                        Object.hasOwnProperty.call(e, "minor") &&
                        t.uint32(16).int32(e.minor),
                      null != e.patch &&
                        Object.hasOwnProperty.call(e, "patch") &&
                        t.uint32(24).int32(e.patch),
                      null != e.pre &&
                        Object.hasOwnProperty.call(e, "pre") &&
                        t.uint32(34).string(e.pre),
                      null != e.build &&
                        Object.hasOwnProperty.call(e, "build") &&
                        t.uint32(42).string(e.build),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SemanticVersion();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.major = e.int32();
                          break;
                        case 2:
                          n.minor = e.int32();
                          break;
                        case 3:
                          n.patch = e.int32();
                          break;
                        case 4:
                          n.pre = e.string();
                          break;
                        case 5:
                          n.build = e.string();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SemanticVersion"
                    );
                  }),
                  e
                );
              })()),
              (e.Setting = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.name = ""),
                  (e.prototype.value = ""),
                  (e.prototype.data = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(10).string(e.name),
                      null != e.value &&
                        Object.hasOwnProperty.call(e, "value") &&
                        t.uint32(18).string(e.value),
                      null != e.data &&
                        Object.hasOwnProperty.call(e, "data") &&
                        t.uint32(26).bytes(e.data),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Setting();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.name = e.string();
                          break;
                        case 2:
                          n.value = e.string();
                          break;
                        case 3:
                          n.data = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Setting"
                    );
                  }),
                  e
                );
              })()),
              (e.ServicesConfigurationList = (function () {
                function e(e) {
                  if (((this.nameValue = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nameValue = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.nameValue && e.nameValue.length)
                    )
                      for (var o = 0; o < e.nameValue.length; ++o)
                        i.proto.Setting.encode(
                          e.nameValue[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ServicesConfigurationList();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.nameValue && n.nameValue.length) ||
                            (n.nameValue = []),
                            n.nameValue.push(
                              i.proto.Setting.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ServicesConfigurationList"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenRelationship = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.symbol = ""),
                  (e.prototype.balance = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.kycStatus = 0),
                  (e.prototype.freezeStatus = 0),
                  (e.prototype.decimals = 0),
                  (e.prototype.automaticAssociation = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.symbol &&
                        Object.hasOwnProperty.call(e, "symbol") &&
                        t.uint32(18).string(e.symbol),
                      null != e.balance &&
                        Object.hasOwnProperty.call(e, "balance") &&
                        t.uint32(24).uint64(e.balance),
                      null != e.kycStatus &&
                        Object.hasOwnProperty.call(e, "kycStatus") &&
                        t.uint32(32).int32(e.kycStatus),
                      null != e.freezeStatus &&
                        Object.hasOwnProperty.call(e, "freezeStatus") &&
                        t.uint32(40).int32(e.freezeStatus),
                      null != e.decimals &&
                        Object.hasOwnProperty.call(e, "decimals") &&
                        t.uint32(48).uint32(e.decimals),
                      null != e.automaticAssociation &&
                        Object.hasOwnProperty.call(e, "automaticAssociation") &&
                        t.uint32(56).bool(e.automaticAssociation),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenRelationship();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.symbol = e.string();
                          break;
                        case 3:
                          n.balance = e.uint64();
                          break;
                        case 4:
                          n.kycStatus = e.int32();
                          break;
                        case 5:
                          n.freezeStatus = e.int32();
                          break;
                        case 6:
                          n.decimals = e.uint32();
                          break;
                        case 7:
                          n.automaticAssociation = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenRelationship"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenBalance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.balance = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.decimals = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.balance &&
                        Object.hasOwnProperty.call(e, "balance") &&
                        t.uint32(16).uint64(e.balance),
                      null != e.decimals &&
                        Object.hasOwnProperty.call(e, "decimals") &&
                        t.uint32(24).uint32(e.decimals),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenBalance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.balance = e.uint64();
                          break;
                        case 3:
                          n.decimals = e.uint32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenBalance"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenBalances = (function () {
                function e(e) {
                  if (((this.tokenBalances = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenBalances = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.tokenBalances && e.tokenBalances.length)
                    )
                      for (var o = 0; o < e.tokenBalances.length; ++o)
                        i.proto.TokenBalance.encode(
                          e.tokenBalances[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenBalances();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.tokenBalances && n.tokenBalances.length) ||
                            (n.tokenBalances = []),
                            n.tokenBalances.push(
                              i.proto.TokenBalance.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenBalances"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenAssociation = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.accountId = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountId &&
                        Object.hasOwnProperty.call(e, "accountId") &&
                        i.proto.AccountID.encode(
                          e.accountId,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenAssociation();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountId = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenAssociation"
                    );
                  }),
                  e
                );
              })()),
              (e.StakingInfo = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.declineReward = !1),
                  (e.prototype.stakePeriodStart = null),
                  (e.prototype.pendingReward = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stakedToMe = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stakedAccountId = null),
                  (e.prototype.stakedNodeId = null),
                  Object.defineProperty(e.prototype, "stakedId", {
                    get: l.oneOfGetter(
                      (t = ["stakedAccountId", "stakedNodeId"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.declineReward &&
                        Object.hasOwnProperty.call(e, "declineReward") &&
                        t.uint32(8).bool(e.declineReward),
                      null != e.stakePeriodStart &&
                        Object.hasOwnProperty.call(e, "stakePeriodStart") &&
                        i.proto.Timestamp.encode(
                          e.stakePeriodStart,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.pendingReward &&
                        Object.hasOwnProperty.call(e, "pendingReward") &&
                        t.uint32(24).int64(e.pendingReward),
                      null != e.stakedToMe &&
                        Object.hasOwnProperty.call(e, "stakedToMe") &&
                        t.uint32(32).int64(e.stakedToMe),
                      null != e.stakedAccountId &&
                        Object.hasOwnProperty.call(e, "stakedAccountId") &&
                        i.proto.AccountID.encode(
                          e.stakedAccountId,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.stakedNodeId &&
                        Object.hasOwnProperty.call(e, "stakedNodeId") &&
                        t.uint32(48).int64(e.stakedNodeId),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.StakingInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.declineReward = e.bool();
                          break;
                        case 2:
                          n.stakePeriodStart = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.pendingReward = e.int64();
                          break;
                        case 4:
                          n.stakedToMe = e.int64();
                          break;
                        case 5:
                          n.stakedAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.stakedNodeId = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.StakingInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.Timestamp = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.seconds = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.nanos = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.seconds &&
                        Object.hasOwnProperty.call(e, "seconds") &&
                        t.uint32(8).int64(e.seconds),
                      null != e.nanos &&
                        Object.hasOwnProperty.call(e, "nanos") &&
                        t.uint32(16).int32(e.nanos),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Timestamp();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.seconds = e.int64();
                          break;
                        case 2:
                          n.nanos = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Timestamp"
                    );
                  }),
                  e
                );
              })()),
              (e.TimestampSeconds = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.seconds = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.seconds &&
                        Object.hasOwnProperty.call(e, "seconds") &&
                        t.uint32(8).int64(e.seconds),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TimestampSeconds();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.seconds = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TimestampSeconds"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusCreateTopicTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.memo = ""),
                  (e.prototype.adminKey = null),
                  (e.prototype.submitKey = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.autoRenewAccount = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(10).string(e.memo),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.submitKey &&
                        Object.hasOwnProperty.call(e, "submitKey") &&
                        i.proto.Key.encode(
                          e.submitKey,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.autoRenewAccount &&
                        Object.hasOwnProperty.call(e, "autoRenewAccount") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccount,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusCreateTopicTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.memo = e.string();
                          break;
                        case 2:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 3:
                          n.submitKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 6:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 7:
                          n.autoRenewAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusCreateTopicTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.Duration = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.seconds = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.seconds &&
                        Object.hasOwnProperty.call(e, "seconds") &&
                        t.uint32(8).int64(e.seconds),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Duration();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.seconds = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Duration"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusDeleteTopicTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.topicID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.topicID &&
                        Object.hasOwnProperty.call(e, "topicID") &&
                        i.proto.TopicID.encode(
                          e.topicID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusDeleteTopicTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.topicID = i.proto.TopicID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusDeleteTopicTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusGetTopicInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.topicID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.topicID &&
                        Object.hasOwnProperty.call(e, "topicID") &&
                        i.proto.TopicID.encode(
                          e.topicID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusGetTopicInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.topicID = i.proto.TopicID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusGetTopicInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusGetTopicInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.topicID = null),
                  (e.prototype.topicInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.topicID &&
                        Object.hasOwnProperty.call(e, "topicID") &&
                        i.proto.TopicID.encode(
                          e.topicID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.topicInfo &&
                        Object.hasOwnProperty.call(e, "topicInfo") &&
                        i.proto.ConsensusTopicInfo.encode(
                          e.topicInfo,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusGetTopicInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.topicID = i.proto.TopicID.decode(e, e.uint32());
                          break;
                        case 5:
                          n.topicInfo = i.proto.ConsensusTopicInfo.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusGetTopicInfoResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.ResponseType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "ANSWER_ONLY")] = 0),
                  (t[(e[1] = "ANSWER_STATE_PROOF")] = 1),
                  (t[(e[2] = "COST_ANSWER")] = 2),
                  (t[(e[3] = "COST_ANSWER_STATE_PROOF")] = 3),
                  t
                );
              })()),
              (e.QueryHeader = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.payment = null),
                  (e.prototype.responseType = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.payment &&
                        Object.hasOwnProperty.call(e, "payment") &&
                        i.proto.Transaction.encode(
                          e.payment,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.responseType &&
                        Object.hasOwnProperty.call(e, "responseType") &&
                        t.uint32(16).int32(e.responseType),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.QueryHeader();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.payment = i.proto.Transaction.decode(e, e.uint32());
                          break;
                        case 2:
                          n.responseType = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.QueryHeader"
                    );
                  }),
                  e
                );
              })()),
              (e.Transaction = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.body = null),
                  (e.prototype.sigs = null),
                  (e.prototype.sigMap = null),
                  (e.prototype.bodyBytes = l.newBuffer([])),
                  (e.prototype.signedTransactionBytes = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.body &&
                        Object.hasOwnProperty.call(e, "body") &&
                        i.proto.TransactionBody.encode(
                          e.body,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.sigs &&
                        Object.hasOwnProperty.call(e, "sigs") &&
                        i.proto.SignatureList.encode(
                          e.sigs,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.sigMap &&
                        Object.hasOwnProperty.call(e, "sigMap") &&
                        i.proto.SignatureMap.encode(
                          e.sigMap,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.bodyBytes &&
                        Object.hasOwnProperty.call(e, "bodyBytes") &&
                        t.uint32(34).bytes(e.bodyBytes),
                      null != e.signedTransactionBytes &&
                        Object.hasOwnProperty.call(
                          e,
                          "signedTransactionBytes",
                        ) &&
                        t.uint32(42).bytes(e.signedTransactionBytes),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Transaction();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.body = i.proto.TransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.sigs = i.proto.SignatureList.decode(e, e.uint32());
                          break;
                        case 3:
                          n.sigMap = i.proto.SignatureMap.decode(e, e.uint32());
                          break;
                        case 4:
                          n.bodyBytes = e.bytes();
                          break;
                        case 5:
                          n.signedTransactionBytes = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Transaction"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.transactionID = null),
                  (e.prototype.nodeAccountID = null),
                  (e.prototype.transactionFee = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.transactionValidDuration = null),
                  (e.prototype.generateRecord = !1),
                  (e.prototype.memo = ""),
                  (e.prototype.contractCall = null),
                  (e.prototype.contractCreateInstance = null),
                  (e.prototype.contractUpdateInstance = null),
                  (e.prototype.contractDeleteInstance = null),
                  (e.prototype.ethereumTransaction = null),
                  (e.prototype.cryptoAddLiveHash = null),
                  (e.prototype.cryptoApproveAllowance = null),
                  (e.prototype.cryptoDeleteAllowance = null),
                  (e.prototype.cryptoCreateAccount = null),
                  (e.prototype.cryptoDelete = null),
                  (e.prototype.cryptoDeleteLiveHash = null),
                  (e.prototype.cryptoTransfer = null),
                  (e.prototype.cryptoUpdateAccount = null),
                  (e.prototype.fileAppend = null),
                  (e.prototype.fileCreate = null),
                  (e.prototype.fileDelete = null),
                  (e.prototype.fileUpdate = null),
                  (e.prototype.systemDelete = null),
                  (e.prototype.systemUndelete = null),
                  (e.prototype.freeze = null),
                  (e.prototype.consensusCreateTopic = null),
                  (e.prototype.consensusUpdateTopic = null),
                  (e.prototype.consensusDeleteTopic = null),
                  (e.prototype.consensusSubmitMessage = null),
                  (e.prototype.uncheckedSubmit = null),
                  (e.prototype.tokenCreation = null),
                  (e.prototype.tokenFreeze = null),
                  (e.prototype.tokenUnfreeze = null),
                  (e.prototype.tokenGrantKyc = null),
                  (e.prototype.tokenRevokeKyc = null),
                  (e.prototype.tokenDeletion = null),
                  (e.prototype.tokenUpdate = null),
                  (e.prototype.tokenMint = null),
                  (e.prototype.tokenBurn = null),
                  (e.prototype.tokenWipe = null),
                  (e.prototype.tokenAssociate = null),
                  (e.prototype.tokenDissociate = null),
                  (e.prototype.tokenFeeScheduleUpdate = null),
                  (e.prototype.tokenPause = null),
                  (e.prototype.tokenUnpause = null),
                  (e.prototype.scheduleCreate = null),
                  (e.prototype.scheduleDelete = null),
                  (e.prototype.scheduleSign = null),
                  (e.prototype.nodeStakeUpdate = null),
                  (e.prototype.utilPrng = null),
                  Object.defineProperty(e.prototype, "data", {
                    get: l.oneOfGetter(
                      (t = [
                        "contractCall",
                        "contractCreateInstance",
                        "contractUpdateInstance",
                        "contractDeleteInstance",
                        "ethereumTransaction",
                        "cryptoAddLiveHash",
                        "cryptoApproveAllowance",
                        "cryptoDeleteAllowance",
                        "cryptoCreateAccount",
                        "cryptoDelete",
                        "cryptoDeleteLiveHash",
                        "cryptoTransfer",
                        "cryptoUpdateAccount",
                        "fileAppend",
                        "fileCreate",
                        "fileDelete",
                        "fileUpdate",
                        "systemDelete",
                        "systemUndelete",
                        "freeze",
                        "consensusCreateTopic",
                        "consensusUpdateTopic",
                        "consensusDeleteTopic",
                        "consensusSubmitMessage",
                        "uncheckedSubmit",
                        "tokenCreation",
                        "tokenFreeze",
                        "tokenUnfreeze",
                        "tokenGrantKyc",
                        "tokenRevokeKyc",
                        "tokenDeletion",
                        "tokenUpdate",
                        "tokenMint",
                        "tokenBurn",
                        "tokenWipe",
                        "tokenAssociate",
                        "tokenDissociate",
                        "tokenFeeScheduleUpdate",
                        "tokenPause",
                        "tokenUnpause",
                        "scheduleCreate",
                        "scheduleDelete",
                        "scheduleSign",
                        "nodeStakeUpdate",
                        "utilPrng",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.transactionID &&
                        Object.hasOwnProperty.call(e, "transactionID") &&
                        i.proto.TransactionID.encode(
                          e.transactionID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nodeAccountID &&
                        Object.hasOwnProperty.call(e, "nodeAccountID") &&
                        i.proto.AccountID.encode(
                          e.nodeAccountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.transactionFee &&
                        Object.hasOwnProperty.call(e, "transactionFee") &&
                        t.uint32(24).uint64(e.transactionFee),
                      null != e.transactionValidDuration &&
                        Object.hasOwnProperty.call(
                          e,
                          "transactionValidDuration",
                        ) &&
                        i.proto.Duration.encode(
                          e.transactionValidDuration,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.generateRecord &&
                        Object.hasOwnProperty.call(e, "generateRecord") &&
                        t.uint32(40).bool(e.generateRecord),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(50).string(e.memo),
                      null != e.contractCall &&
                        Object.hasOwnProperty.call(e, "contractCall") &&
                        i.proto.ContractCallTransactionBody.encode(
                          e.contractCall,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.contractCreateInstance &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractCreateInstance",
                        ) &&
                        i.proto.ContractCreateTransactionBody.encode(
                          e.contractCreateInstance,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.contractUpdateInstance &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractUpdateInstance",
                        ) &&
                        i.proto.ContractUpdateTransactionBody.encode(
                          e.contractUpdateInstance,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.cryptoAddLiveHash &&
                        Object.hasOwnProperty.call(e, "cryptoAddLiveHash") &&
                        i.proto.CryptoAddLiveHashTransactionBody.encode(
                          e.cryptoAddLiveHash,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.cryptoCreateAccount &&
                        Object.hasOwnProperty.call(e, "cryptoCreateAccount") &&
                        i.proto.CryptoCreateTransactionBody.encode(
                          e.cryptoCreateAccount,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.cryptoDelete &&
                        Object.hasOwnProperty.call(e, "cryptoDelete") &&
                        i.proto.CryptoDeleteTransactionBody.encode(
                          e.cryptoDelete,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.cryptoDeleteLiveHash &&
                        Object.hasOwnProperty.call(e, "cryptoDeleteLiveHash") &&
                        i.proto.CryptoDeleteLiveHashTransactionBody.encode(
                          e.cryptoDeleteLiveHash,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.cryptoTransfer &&
                        Object.hasOwnProperty.call(e, "cryptoTransfer") &&
                        i.proto.CryptoTransferTransactionBody.encode(
                          e.cryptoTransfer,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.cryptoUpdateAccount &&
                        Object.hasOwnProperty.call(e, "cryptoUpdateAccount") &&
                        i.proto.CryptoUpdateTransactionBody.encode(
                          e.cryptoUpdateAccount,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.fileAppend &&
                        Object.hasOwnProperty.call(e, "fileAppend") &&
                        i.proto.FileAppendTransactionBody.encode(
                          e.fileAppend,
                          t.uint32(130).fork(),
                        ).ldelim(),
                      null != e.fileCreate &&
                        Object.hasOwnProperty.call(e, "fileCreate") &&
                        i.proto.FileCreateTransactionBody.encode(
                          e.fileCreate,
                          t.uint32(138).fork(),
                        ).ldelim(),
                      null != e.fileDelete &&
                        Object.hasOwnProperty.call(e, "fileDelete") &&
                        i.proto.FileDeleteTransactionBody.encode(
                          e.fileDelete,
                          t.uint32(146).fork(),
                        ).ldelim(),
                      null != e.fileUpdate &&
                        Object.hasOwnProperty.call(e, "fileUpdate") &&
                        i.proto.FileUpdateTransactionBody.encode(
                          e.fileUpdate,
                          t.uint32(154).fork(),
                        ).ldelim(),
                      null != e.systemDelete &&
                        Object.hasOwnProperty.call(e, "systemDelete") &&
                        i.proto.SystemDeleteTransactionBody.encode(
                          e.systemDelete,
                          t.uint32(162).fork(),
                        ).ldelim(),
                      null != e.systemUndelete &&
                        Object.hasOwnProperty.call(e, "systemUndelete") &&
                        i.proto.SystemUndeleteTransactionBody.encode(
                          e.systemUndelete,
                          t.uint32(170).fork(),
                        ).ldelim(),
                      null != e.contractDeleteInstance &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractDeleteInstance",
                        ) &&
                        i.proto.ContractDeleteTransactionBody.encode(
                          e.contractDeleteInstance,
                          t.uint32(178).fork(),
                        ).ldelim(),
                      null != e.freeze &&
                        Object.hasOwnProperty.call(e, "freeze") &&
                        i.proto.FreezeTransactionBody.encode(
                          e.freeze,
                          t.uint32(186).fork(),
                        ).ldelim(),
                      null != e.consensusCreateTopic &&
                        Object.hasOwnProperty.call(e, "consensusCreateTopic") &&
                        i.proto.ConsensusCreateTopicTransactionBody.encode(
                          e.consensusCreateTopic,
                          t.uint32(194).fork(),
                        ).ldelim(),
                      null != e.consensusUpdateTopic &&
                        Object.hasOwnProperty.call(e, "consensusUpdateTopic") &&
                        i.proto.ConsensusUpdateTopicTransactionBody.encode(
                          e.consensusUpdateTopic,
                          t.uint32(202).fork(),
                        ).ldelim(),
                      null != e.consensusDeleteTopic &&
                        Object.hasOwnProperty.call(e, "consensusDeleteTopic") &&
                        i.proto.ConsensusDeleteTopicTransactionBody.encode(
                          e.consensusDeleteTopic,
                          t.uint32(210).fork(),
                        ).ldelim(),
                      null != e.consensusSubmitMessage &&
                        Object.hasOwnProperty.call(
                          e,
                          "consensusSubmitMessage",
                        ) &&
                        i.proto.ConsensusSubmitMessageTransactionBody.encode(
                          e.consensusSubmitMessage,
                          t.uint32(218).fork(),
                        ).ldelim(),
                      null != e.uncheckedSubmit &&
                        Object.hasOwnProperty.call(e, "uncheckedSubmit") &&
                        i.proto.UncheckedSubmitBody.encode(
                          e.uncheckedSubmit,
                          t.uint32(226).fork(),
                        ).ldelim(),
                      null != e.tokenCreation &&
                        Object.hasOwnProperty.call(e, "tokenCreation") &&
                        i.proto.TokenCreateTransactionBody.encode(
                          e.tokenCreation,
                          t.uint32(234).fork(),
                        ).ldelim(),
                      null != e.tokenFreeze &&
                        Object.hasOwnProperty.call(e, "tokenFreeze") &&
                        i.proto.TokenFreezeAccountTransactionBody.encode(
                          e.tokenFreeze,
                          t.uint32(250).fork(),
                        ).ldelim(),
                      null != e.tokenUnfreeze &&
                        Object.hasOwnProperty.call(e, "tokenUnfreeze") &&
                        i.proto.TokenUnfreezeAccountTransactionBody.encode(
                          e.tokenUnfreeze,
                          t.uint32(258).fork(),
                        ).ldelim(),
                      null != e.tokenGrantKyc &&
                        Object.hasOwnProperty.call(e, "tokenGrantKyc") &&
                        i.proto.TokenGrantKycTransactionBody.encode(
                          e.tokenGrantKyc,
                          t.uint32(266).fork(),
                        ).ldelim(),
                      null != e.tokenRevokeKyc &&
                        Object.hasOwnProperty.call(e, "tokenRevokeKyc") &&
                        i.proto.TokenRevokeKycTransactionBody.encode(
                          e.tokenRevokeKyc,
                          t.uint32(274).fork(),
                        ).ldelim(),
                      null != e.tokenDeletion &&
                        Object.hasOwnProperty.call(e, "tokenDeletion") &&
                        i.proto.TokenDeleteTransactionBody.encode(
                          e.tokenDeletion,
                          t.uint32(282).fork(),
                        ).ldelim(),
                      null != e.tokenUpdate &&
                        Object.hasOwnProperty.call(e, "tokenUpdate") &&
                        i.proto.TokenUpdateTransactionBody.encode(
                          e.tokenUpdate,
                          t.uint32(290).fork(),
                        ).ldelim(),
                      null != e.tokenMint &&
                        Object.hasOwnProperty.call(e, "tokenMint") &&
                        i.proto.TokenMintTransactionBody.encode(
                          e.tokenMint,
                          t.uint32(298).fork(),
                        ).ldelim(),
                      null != e.tokenBurn &&
                        Object.hasOwnProperty.call(e, "tokenBurn") &&
                        i.proto.TokenBurnTransactionBody.encode(
                          e.tokenBurn,
                          t.uint32(306).fork(),
                        ).ldelim(),
                      null != e.tokenWipe &&
                        Object.hasOwnProperty.call(e, "tokenWipe") &&
                        i.proto.TokenWipeAccountTransactionBody.encode(
                          e.tokenWipe,
                          t.uint32(314).fork(),
                        ).ldelim(),
                      null != e.tokenAssociate &&
                        Object.hasOwnProperty.call(e, "tokenAssociate") &&
                        i.proto.TokenAssociateTransactionBody.encode(
                          e.tokenAssociate,
                          t.uint32(322).fork(),
                        ).ldelim(),
                      null != e.tokenDissociate &&
                        Object.hasOwnProperty.call(e, "tokenDissociate") &&
                        i.proto.TokenDissociateTransactionBody.encode(
                          e.tokenDissociate,
                          t.uint32(330).fork(),
                        ).ldelim(),
                      null != e.scheduleCreate &&
                        Object.hasOwnProperty.call(e, "scheduleCreate") &&
                        i.proto.ScheduleCreateTransactionBody.encode(
                          e.scheduleCreate,
                          t.uint32(338).fork(),
                        ).ldelim(),
                      null != e.scheduleDelete &&
                        Object.hasOwnProperty.call(e, "scheduleDelete") &&
                        i.proto.ScheduleDeleteTransactionBody.encode(
                          e.scheduleDelete,
                          t.uint32(346).fork(),
                        ).ldelim(),
                      null != e.scheduleSign &&
                        Object.hasOwnProperty.call(e, "scheduleSign") &&
                        i.proto.ScheduleSignTransactionBody.encode(
                          e.scheduleSign,
                          t.uint32(354).fork(),
                        ).ldelim(),
                      null != e.tokenFeeScheduleUpdate &&
                        Object.hasOwnProperty.call(
                          e,
                          "tokenFeeScheduleUpdate",
                        ) &&
                        i.proto.TokenFeeScheduleUpdateTransactionBody.encode(
                          e.tokenFeeScheduleUpdate,
                          t.uint32(362).fork(),
                        ).ldelim(),
                      null != e.tokenPause &&
                        Object.hasOwnProperty.call(e, "tokenPause") &&
                        i.proto.TokenPauseTransactionBody.encode(
                          e.tokenPause,
                          t.uint32(370).fork(),
                        ).ldelim(),
                      null != e.tokenUnpause &&
                        Object.hasOwnProperty.call(e, "tokenUnpause") &&
                        i.proto.TokenUnpauseTransactionBody.encode(
                          e.tokenUnpause,
                          t.uint32(378).fork(),
                        ).ldelim(),
                      null != e.cryptoApproveAllowance &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoApproveAllowance",
                        ) &&
                        i.proto.CryptoApproveAllowanceTransactionBody.encode(
                          e.cryptoApproveAllowance,
                          t.uint32(386).fork(),
                        ).ldelim(),
                      null != e.cryptoDeleteAllowance &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoDeleteAllowance",
                        ) &&
                        i.proto.CryptoDeleteAllowanceTransactionBody.encode(
                          e.cryptoDeleteAllowance,
                          t.uint32(394).fork(),
                        ).ldelim(),
                      null != e.ethereumTransaction &&
                        Object.hasOwnProperty.call(e, "ethereumTransaction") &&
                        i.proto.EthereumTransactionBody.encode(
                          e.ethereumTransaction,
                          t.uint32(402).fork(),
                        ).ldelim(),
                      null != e.nodeStakeUpdate &&
                        Object.hasOwnProperty.call(e, "nodeStakeUpdate") &&
                        i.proto.NodeStakeUpdateTransactionBody.encode(
                          e.nodeStakeUpdate,
                          t.uint32(410).fork(),
                        ).ldelim(),
                      null != e.utilPrng &&
                        Object.hasOwnProperty.call(e, "utilPrng") &&
                        i.proto.UtilPrngTransactionBody.encode(
                          e.utilPrng,
                          t.uint32(418).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transactionID = i.proto.TransactionID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.nodeAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.transactionFee = e.uint64();
                          break;
                        case 4:
                          n.transactionValidDuration = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.generateRecord = e.bool();
                          break;
                        case 6:
                          n.memo = e.string();
                          break;
                        case 7:
                          n.contractCall =
                            i.proto.ContractCallTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 8:
                          n.contractCreateInstance =
                            i.proto.ContractCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 9:
                          n.contractUpdateInstance =
                            i.proto.ContractUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 22:
                          n.contractDeleteInstance =
                            i.proto.ContractDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 50:
                          n.ethereumTransaction =
                            i.proto.EthereumTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 10:
                          n.cryptoAddLiveHash =
                            i.proto.CryptoAddLiveHashTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 48:
                          n.cryptoApproveAllowance =
                            i.proto.CryptoApproveAllowanceTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 49:
                          n.cryptoDeleteAllowance =
                            i.proto.CryptoDeleteAllowanceTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 11:
                          n.cryptoCreateAccount =
                            i.proto.CryptoCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 12:
                          n.cryptoDelete =
                            i.proto.CryptoDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 13:
                          n.cryptoDeleteLiveHash =
                            i.proto.CryptoDeleteLiveHashTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 14:
                          n.cryptoTransfer =
                            i.proto.CryptoTransferTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 15:
                          n.cryptoUpdateAccount =
                            i.proto.CryptoUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 16:
                          n.fileAppend =
                            i.proto.FileAppendTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 17:
                          n.fileCreate =
                            i.proto.FileCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 18:
                          n.fileDelete =
                            i.proto.FileDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 19:
                          n.fileUpdate =
                            i.proto.FileUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 20:
                          n.systemDelete =
                            i.proto.SystemDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 21:
                          n.systemUndelete =
                            i.proto.SystemUndeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 23:
                          n.freeze = i.proto.FreezeTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 24:
                          n.consensusCreateTopic =
                            i.proto.ConsensusCreateTopicTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 25:
                          n.consensusUpdateTopic =
                            i.proto.ConsensusUpdateTopicTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 26:
                          n.consensusDeleteTopic =
                            i.proto.ConsensusDeleteTopicTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 27:
                          n.consensusSubmitMessage =
                            i.proto.ConsensusSubmitMessageTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 28:
                          n.uncheckedSubmit =
                            i.proto.UncheckedSubmitBody.decode(e, e.uint32());
                          break;
                        case 29:
                          n.tokenCreation =
                            i.proto.TokenCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 31:
                          n.tokenFreeze =
                            i.proto.TokenFreezeAccountTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 32:
                          n.tokenUnfreeze =
                            i.proto.TokenUnfreezeAccountTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 33:
                          n.tokenGrantKyc =
                            i.proto.TokenGrantKycTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 34:
                          n.tokenRevokeKyc =
                            i.proto.TokenRevokeKycTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 35:
                          n.tokenDeletion =
                            i.proto.TokenDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 36:
                          n.tokenUpdate =
                            i.proto.TokenUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 37:
                          n.tokenMint = i.proto.TokenMintTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 38:
                          n.tokenBurn = i.proto.TokenBurnTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 39:
                          n.tokenWipe =
                            i.proto.TokenWipeAccountTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 40:
                          n.tokenAssociate =
                            i.proto.TokenAssociateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 41:
                          n.tokenDissociate =
                            i.proto.TokenDissociateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 45:
                          n.tokenFeeScheduleUpdate =
                            i.proto.TokenFeeScheduleUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 46:
                          n.tokenPause =
                            i.proto.TokenPauseTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 47:
                          n.tokenUnpause =
                            i.proto.TokenUnpauseTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 42:
                          n.scheduleCreate =
                            i.proto.ScheduleCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 43:
                          n.scheduleDelete =
                            i.proto.ScheduleDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 44:
                          n.scheduleSign =
                            i.proto.ScheduleSignTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 51:
                          n.nodeStakeUpdate =
                            i.proto.NodeStakeUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 52:
                          n.utilPrng = i.proto.UtilPrngTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.SystemDeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.fileID = null),
                  (e.prototype.contractID = null),
                  (e.prototype.expirationTime = null),
                  Object.defineProperty(e.prototype, "id", {
                    get: l.oneOfGetter((t = ["fileID", "contractID"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.TimestampSeconds.encode(
                          e.expirationTime,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SystemDeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.expirationTime = i.proto.TimestampSeconds.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SystemDeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.SystemUndeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.fileID = null),
                  (e.prototype.contractID = null),
                  Object.defineProperty(e.prototype, "id", {
                    get: l.oneOfGetter((t = ["fileID", "contractID"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SystemUndeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SystemUndeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FreezeTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.startHour = 0),
                  (e.prototype.startMin = 0),
                  (e.prototype.endHour = 0),
                  (e.prototype.endMin = 0),
                  (e.prototype.updateFile = null),
                  (e.prototype.fileHash = l.newBuffer([])),
                  (e.prototype.startTime = null),
                  (e.prototype.freezeType = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.startHour &&
                        Object.hasOwnProperty.call(e, "startHour") &&
                        t.uint32(8).int32(e.startHour),
                      null != e.startMin &&
                        Object.hasOwnProperty.call(e, "startMin") &&
                        t.uint32(16).int32(e.startMin),
                      null != e.endHour &&
                        Object.hasOwnProperty.call(e, "endHour") &&
                        t.uint32(24).int32(e.endHour),
                      null != e.endMin &&
                        Object.hasOwnProperty.call(e, "endMin") &&
                        t.uint32(32).int32(e.endMin),
                      null != e.updateFile &&
                        Object.hasOwnProperty.call(e, "updateFile") &&
                        i.proto.FileID.encode(
                          e.updateFile,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.fileHash &&
                        Object.hasOwnProperty.call(e, "fileHash") &&
                        t.uint32(50).bytes(e.fileHash),
                      null != e.startTime &&
                        Object.hasOwnProperty.call(e, "startTime") &&
                        i.proto.Timestamp.encode(
                          e.startTime,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.freezeType &&
                        Object.hasOwnProperty.call(e, "freezeType") &&
                        t.uint32(64).int32(e.freezeType),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FreezeTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.startHour = e.int32();
                          break;
                        case 2:
                          n.startMin = e.int32();
                          break;
                        case 3:
                          n.endHour = e.int32();
                          break;
                        case 4:
                          n.endMin = e.int32();
                          break;
                        case 5:
                          n.updateFile = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 6:
                          n.fileHash = e.bytes();
                          break;
                        case 7:
                          n.startTime = i.proto.Timestamp.decode(e, e.uint32());
                          break;
                        case 8:
                          n.freezeType = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FreezeTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FreezeType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "UNKNOWN_FREEZE_TYPE")] = 0),
                  (t[(e[1] = "FREEZE_ONLY")] = 1),
                  (t[(e[2] = "PREPARE_UPGRADE")] = 2),
                  (t[(e[3] = "FREEZE_UPGRADE")] = 3),
                  (t[(e[4] = "FREEZE_ABORT")] = 4),
                  (t[(e[5] = "TELEMETRY_UPGRADE")] = 5),
                  t
                );
              })()),
              (e.ContractCallTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractID = null),
                  (e.prototype.gas = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.functionParameters = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.gas &&
                        Object.hasOwnProperty.call(e, "gas") &&
                        t.uint32(16).int64(e.gas),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(24).int64(e.amount),
                      null != e.functionParameters &&
                        Object.hasOwnProperty.call(e, "functionParameters") &&
                        t.uint32(34).bytes(e.functionParameters),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractCallTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.gas = e.int64();
                          break;
                        case 3:
                          n.amount = e.int64();
                          break;
                        case 4:
                          n.functionParameters = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractCallTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractCreateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.fileID = null),
                  (e.prototype.initcode = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.gas = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.initialBalance = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.proxyAccountID = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.constructorParameters = l.newBuffer([])),
                  (e.prototype.shardID = null),
                  (e.prototype.realmID = null),
                  (e.prototype.newRealmAdminKey = null),
                  (e.prototype.memo = ""),
                  (e.prototype.maxAutomaticTokenAssociations = 0),
                  (e.prototype.autoRenewAccountId = null),
                  (e.prototype.stakedAccountId = null),
                  (e.prototype.stakedNodeId = null),
                  (e.prototype.declineReward = !1),
                  Object.defineProperty(e.prototype, "initcodeSource", {
                    get: l.oneOfGetter((t = ["fileID", "initcode"])),
                    set: l.oneOfSetter(t),
                  }),
                  Object.defineProperty(e.prototype, "stakedId", {
                    get: l.oneOfGetter(
                      (t = ["stakedAccountId", "stakedNodeId"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.gas &&
                        Object.hasOwnProperty.call(e, "gas") &&
                        t.uint32(32).int64(e.gas),
                      null != e.initialBalance &&
                        Object.hasOwnProperty.call(e, "initialBalance") &&
                        t.uint32(40).int64(e.initialBalance),
                      null != e.proxyAccountID &&
                        Object.hasOwnProperty.call(e, "proxyAccountID") &&
                        i.proto.AccountID.encode(
                          e.proxyAccountID,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.constructorParameters &&
                        Object.hasOwnProperty.call(
                          e,
                          "constructorParameters",
                        ) &&
                        t.uint32(74).bytes(e.constructorParameters),
                      null != e.shardID &&
                        Object.hasOwnProperty.call(e, "shardID") &&
                        i.proto.ShardID.encode(
                          e.shardID,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.realmID &&
                        Object.hasOwnProperty.call(e, "realmID") &&
                        i.proto.RealmID.encode(
                          e.realmID,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.newRealmAdminKey &&
                        Object.hasOwnProperty.call(e, "newRealmAdminKey") &&
                        i.proto.Key.encode(
                          e.newRealmAdminKey,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(106).string(e.memo),
                      null != e.maxAutomaticTokenAssociations &&
                        Object.hasOwnProperty.call(
                          e,
                          "maxAutomaticTokenAssociations",
                        ) &&
                        t.uint32(112).int32(e.maxAutomaticTokenAssociations),
                      null != e.autoRenewAccountId &&
                        Object.hasOwnProperty.call(e, "autoRenewAccountId") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccountId,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.initcode &&
                        Object.hasOwnProperty.call(e, "initcode") &&
                        t.uint32(130).bytes(e.initcode),
                      null != e.stakedAccountId &&
                        Object.hasOwnProperty.call(e, "stakedAccountId") &&
                        i.proto.AccountID.encode(
                          e.stakedAccountId,
                          t.uint32(138).fork(),
                        ).ldelim(),
                      null != e.stakedNodeId &&
                        Object.hasOwnProperty.call(e, "stakedNodeId") &&
                        t.uint32(144).int64(e.stakedNodeId),
                      null != e.declineReward &&
                        Object.hasOwnProperty.call(e, "declineReward") &&
                        t.uint32(152).bool(e.declineReward),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractCreateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 16:
                          n.initcode = e.bytes();
                          break;
                        case 3:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 4:
                          n.gas = e.int64();
                          break;
                        case 5:
                          n.initialBalance = e.int64();
                          break;
                        case 6:
                          n.proxyAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 8:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 9:
                          n.constructorParameters = e.bytes();
                          break;
                        case 10:
                          n.shardID = i.proto.ShardID.decode(e, e.uint32());
                          break;
                        case 11:
                          n.realmID = i.proto.RealmID.decode(e, e.uint32());
                          break;
                        case 12:
                          n.newRealmAdminKey = i.proto.Key.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 13:
                          n.memo = e.string();
                          break;
                        case 14:
                          n.maxAutomaticTokenAssociations = e.int32();
                          break;
                        case 15:
                          n.autoRenewAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 17:
                          n.stakedAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 18:
                          n.stakedNodeId = e.int64();
                          break;
                        case 19:
                          n.declineReward = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractCreateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractUpdateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.contractID = null),
                  (e.prototype.expirationTime = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.proxyAccountID = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.fileID = null),
                  (e.prototype.memo = null),
                  (e.prototype.memoWrapper = null),
                  (e.prototype.maxAutomaticTokenAssociations = null),
                  (e.prototype.autoRenewAccountId = null),
                  (e.prototype.stakedAccountId = null),
                  (e.prototype.stakedNodeId = null),
                  (e.prototype.declineReward = null),
                  Object.defineProperty(e.prototype, "memoField", {
                    get: l.oneOfGetter((t = ["memo", "memoWrapper"])),
                    set: l.oneOfSetter(t),
                  }),
                  Object.defineProperty(e.prototype, "stakedId", {
                    get: l.oneOfGetter(
                      (t = ["stakedAccountId", "stakedNodeId"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.proxyAccountID &&
                        Object.hasOwnProperty.call(e, "proxyAccountID") &&
                        i.proto.AccountID.encode(
                          e.proxyAccountID,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(74).string(e.memo),
                      null != e.memoWrapper &&
                        Object.hasOwnProperty.call(e, "memoWrapper") &&
                        i.google.protobuf.StringValue.encode(
                          e.memoWrapper,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.maxAutomaticTokenAssociations &&
                        Object.hasOwnProperty.call(
                          e,
                          "maxAutomaticTokenAssociations",
                        ) &&
                        i.google.protobuf.Int32Value.encode(
                          e.maxAutomaticTokenAssociations,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.autoRenewAccountId &&
                        Object.hasOwnProperty.call(e, "autoRenewAccountId") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccountId,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.stakedAccountId &&
                        Object.hasOwnProperty.call(e, "stakedAccountId") &&
                        i.proto.AccountID.encode(
                          e.stakedAccountId,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.stakedNodeId &&
                        Object.hasOwnProperty.call(e, "stakedNodeId") &&
                        t.uint32(112).int64(e.stakedNodeId),
                      null != e.declineReward &&
                        Object.hasOwnProperty.call(e, "declineReward") &&
                        i.google.protobuf.BoolValue.encode(
                          e.declineReward,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractUpdateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 6:
                          n.proxyAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 7:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 8:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 9:
                          n.memo = e.string();
                          break;
                        case 10:
                          n.memoWrapper = i.google.protobuf.StringValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 11:
                          n.maxAutomaticTokenAssociations =
                            i.google.protobuf.Int32Value.decode(e, e.uint32());
                          break;
                        case 12:
                          n.autoRenewAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 13:
                          n.stakedAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 14:
                          n.stakedNodeId = e.int64();
                          break;
                        case 15:
                          n.declineReward = i.google.protobuf.BoolValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractUpdateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.LiveHash = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountId = null),
                  (e.prototype.hash = l.newBuffer([])),
                  (e.prototype.keys = null),
                  (e.prototype.duration = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.accountId &&
                        Object.hasOwnProperty.call(e, "accountId") &&
                        i.proto.AccountID.encode(
                          e.accountId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.hash &&
                        Object.hasOwnProperty.call(e, "hash") &&
                        t.uint32(18).bytes(e.hash),
                      null != e.keys &&
                        Object.hasOwnProperty.call(e, "keys") &&
                        i.proto.KeyList.encode(
                          e.keys,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.duration &&
                        Object.hasOwnProperty.call(e, "duration") &&
                        i.proto.Duration.encode(
                          e.duration,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.LiveHash();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountId = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.hash = e.bytes();
                          break;
                        case 3:
                          n.keys = i.proto.KeyList.decode(e, e.uint32());
                          break;
                        case 5:
                          n.duration = i.proto.Duration.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.LiveHash"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoAddLiveHashTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.liveHash = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.liveHash &&
                        Object.hasOwnProperty.call(e, "liveHash") &&
                        i.proto.LiveHash.encode(
                          e.liveHash,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoAddLiveHashTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 3:
                          n.liveHash = i.proto.LiveHash.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoAddLiveHashTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoCreateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.key = null),
                  (e.prototype.initialBalance = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.proxyAccountID = null),
                  (e.prototype.sendRecordThreshold = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.receiveRecordThreshold = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.receiverSigRequired = !1),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.shardID = null),
                  (e.prototype.realmID = null),
                  (e.prototype.newRealmAdminKey = null),
                  (e.prototype.memo = ""),
                  (e.prototype.maxAutomaticTokenAssociations = 0),
                  (e.prototype.stakedAccountId = null),
                  (e.prototype.stakedNodeId = null),
                  (e.prototype.declineReward = !1),
                  (e.prototype.alias = l.newBuffer([])),
                  Object.defineProperty(e.prototype, "stakedId", {
                    get: l.oneOfGetter(
                      (t = ["stakedAccountId", "stakedNodeId"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.key &&
                        Object.hasOwnProperty.call(e, "key") &&
                        i.proto.Key.encode(e.key, t.uint32(10).fork()).ldelim(),
                      null != e.initialBalance &&
                        Object.hasOwnProperty.call(e, "initialBalance") &&
                        t.uint32(16).uint64(e.initialBalance),
                      null != e.proxyAccountID &&
                        Object.hasOwnProperty.call(e, "proxyAccountID") &&
                        i.proto.AccountID.encode(
                          e.proxyAccountID,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.sendRecordThreshold &&
                        Object.hasOwnProperty.call(e, "sendRecordThreshold") &&
                        t.uint32(48).uint64(e.sendRecordThreshold),
                      null != e.receiveRecordThreshold &&
                        Object.hasOwnProperty.call(
                          e,
                          "receiveRecordThreshold",
                        ) &&
                        t.uint32(56).uint64(e.receiveRecordThreshold),
                      null != e.receiverSigRequired &&
                        Object.hasOwnProperty.call(e, "receiverSigRequired") &&
                        t.uint32(64).bool(e.receiverSigRequired),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.shardID &&
                        Object.hasOwnProperty.call(e, "shardID") &&
                        i.proto.ShardID.encode(
                          e.shardID,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.realmID &&
                        Object.hasOwnProperty.call(e, "realmID") &&
                        i.proto.RealmID.encode(
                          e.realmID,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.newRealmAdminKey &&
                        Object.hasOwnProperty.call(e, "newRealmAdminKey") &&
                        i.proto.Key.encode(
                          e.newRealmAdminKey,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(106).string(e.memo),
                      null != e.maxAutomaticTokenAssociations &&
                        Object.hasOwnProperty.call(
                          e,
                          "maxAutomaticTokenAssociations",
                        ) &&
                        t.uint32(112).int32(e.maxAutomaticTokenAssociations),
                      null != e.stakedAccountId &&
                        Object.hasOwnProperty.call(e, "stakedAccountId") &&
                        i.proto.AccountID.encode(
                          e.stakedAccountId,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.stakedNodeId &&
                        Object.hasOwnProperty.call(e, "stakedNodeId") &&
                        t.uint32(128).int64(e.stakedNodeId),
                      null != e.declineReward &&
                        Object.hasOwnProperty.call(e, "declineReward") &&
                        t.uint32(136).bool(e.declineReward),
                      null != e.alias &&
                        Object.hasOwnProperty.call(e, "alias") &&
                        t.uint32(146).bytes(e.alias),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoCreateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.key = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 2:
                          n.initialBalance = e.uint64();
                          break;
                        case 3:
                          n.proxyAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.sendRecordThreshold = e.uint64();
                          break;
                        case 7:
                          n.receiveRecordThreshold = e.uint64();
                          break;
                        case 8:
                          n.receiverSigRequired = e.bool();
                          break;
                        case 9:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 10:
                          n.shardID = i.proto.ShardID.decode(e, e.uint32());
                          break;
                        case 11:
                          n.realmID = i.proto.RealmID.decode(e, e.uint32());
                          break;
                        case 12:
                          n.newRealmAdminKey = i.proto.Key.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 13:
                          n.memo = e.string();
                          break;
                        case 14:
                          n.maxAutomaticTokenAssociations = e.int32();
                          break;
                        case 15:
                          n.stakedAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 16:
                          n.stakedNodeId = e.int64();
                          break;
                        case 17:
                          n.declineReward = e.bool();
                          break;
                        case 18:
                          n.alias = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoCreateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoDeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transferAccountID = null),
                  (e.prototype.deleteAccountID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.transferAccountID &&
                        Object.hasOwnProperty.call(e, "transferAccountID") &&
                        i.proto.AccountID.encode(
                          e.transferAccountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.deleteAccountID &&
                        Object.hasOwnProperty.call(e, "deleteAccountID") &&
                        i.proto.AccountID.encode(
                          e.deleteAccountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoDeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transferAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.deleteAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoDeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoDeleteLiveHashTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountOfLiveHash = null),
                  (e.prototype.liveHashToDelete = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.accountOfLiveHash &&
                        Object.hasOwnProperty.call(e, "accountOfLiveHash") &&
                        i.proto.AccountID.encode(
                          e.accountOfLiveHash,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.liveHashToDelete &&
                        Object.hasOwnProperty.call(e, "liveHashToDelete") &&
                        t.uint32(18).bytes(e.liveHashToDelete),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoDeleteLiveHashTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountOfLiveHash = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.liveHashToDelete = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoDeleteLiveHashTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoTransferTransactionBody = (function () {
                function e(e) {
                  if (((this.tokenTransfers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transfers = null),
                  (e.prototype.tokenTransfers = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.transfers &&
                        Object.hasOwnProperty.call(e, "transfers") &&
                        i.proto.TransferList.encode(
                          e.transfers,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.tokenTransfers && e.tokenTransfers.length)
                    )
                      for (var o = 0; o < e.tokenTransfers.length; ++o)
                        i.proto.TokenTransferList.encode(
                          e.tokenTransfers[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoTransferTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transfers = i.proto.TransferList.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          ((n.tokenTransfers && n.tokenTransfers.length) ||
                            (n.tokenTransfers = []),
                            n.tokenTransfers.push(
                              i.proto.TokenTransferList.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoTransferTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoUpdateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.accountIDToUpdate = null),
                  (e.prototype.key = null),
                  (e.prototype.proxyAccountID = null),
                  (e.prototype.proxyFraction = 0),
                  (e.prototype.sendRecordThreshold = null),
                  (e.prototype.sendRecordThresholdWrapper = null),
                  (e.prototype.receiveRecordThreshold = null),
                  (e.prototype.receiveRecordThresholdWrapper = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.expirationTime = null),
                  (e.prototype.receiverSigRequired = null),
                  (e.prototype.receiverSigRequiredWrapper = null),
                  (e.prototype.memo = null),
                  (e.prototype.maxAutomaticTokenAssociations = null),
                  (e.prototype.stakedAccountId = null),
                  (e.prototype.stakedNodeId = null),
                  (e.prototype.declineReward = null),
                  Object.defineProperty(
                    e.prototype,
                    "sendRecordThresholdField",
                    {
                      get: l.oneOfGetter(
                        (t = [
                          "sendRecordThreshold",
                          "sendRecordThresholdWrapper",
                        ]),
                      ),
                      set: l.oneOfSetter(t),
                    },
                  ),
                  Object.defineProperty(
                    e.prototype,
                    "receiveRecordThresholdField",
                    {
                      get: l.oneOfGetter(
                        (t = [
                          "receiveRecordThreshold",
                          "receiveRecordThresholdWrapper",
                        ]),
                      ),
                      set: l.oneOfSetter(t),
                    },
                  ),
                  Object.defineProperty(
                    e.prototype,
                    "receiverSigRequiredField",
                    {
                      get: l.oneOfGetter(
                        (t = [
                          "receiverSigRequired",
                          "receiverSigRequiredWrapper",
                        ]),
                      ),
                      set: l.oneOfSetter(t),
                    },
                  ),
                  Object.defineProperty(e.prototype, "stakedId", {
                    get: l.oneOfGetter(
                      (t = ["stakedAccountId", "stakedNodeId"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.accountIDToUpdate &&
                        Object.hasOwnProperty.call(e, "accountIDToUpdate") &&
                        i.proto.AccountID.encode(
                          e.accountIDToUpdate,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.key &&
                        Object.hasOwnProperty.call(e, "key") &&
                        i.proto.Key.encode(e.key, t.uint32(26).fork()).ldelim(),
                      null != e.proxyAccountID &&
                        Object.hasOwnProperty.call(e, "proxyAccountID") &&
                        i.proto.AccountID.encode(
                          e.proxyAccountID,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.proxyFraction &&
                        Object.hasOwnProperty.call(e, "proxyFraction") &&
                        t.uint32(40).int32(e.proxyFraction),
                      null != e.sendRecordThreshold &&
                        Object.hasOwnProperty.call(e, "sendRecordThreshold") &&
                        t.uint32(48).uint64(e.sendRecordThreshold),
                      null != e.receiveRecordThreshold &&
                        Object.hasOwnProperty.call(
                          e,
                          "receiveRecordThreshold",
                        ) &&
                        t.uint32(56).uint64(e.receiveRecordThreshold),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.receiverSigRequired &&
                        Object.hasOwnProperty.call(e, "receiverSigRequired") &&
                        t.uint32(80).bool(e.receiverSigRequired),
                      null != e.sendRecordThresholdWrapper &&
                        Object.hasOwnProperty.call(
                          e,
                          "sendRecordThresholdWrapper",
                        ) &&
                        i.google.protobuf.UInt64Value.encode(
                          e.sendRecordThresholdWrapper,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.receiveRecordThresholdWrapper &&
                        Object.hasOwnProperty.call(
                          e,
                          "receiveRecordThresholdWrapper",
                        ) &&
                        i.google.protobuf.UInt64Value.encode(
                          e.receiveRecordThresholdWrapper,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.receiverSigRequiredWrapper &&
                        Object.hasOwnProperty.call(
                          e,
                          "receiverSigRequiredWrapper",
                        ) &&
                        i.google.protobuf.BoolValue.encode(
                          e.receiverSigRequiredWrapper,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        i.google.protobuf.StringValue.encode(
                          e.memo,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.maxAutomaticTokenAssociations &&
                        Object.hasOwnProperty.call(
                          e,
                          "maxAutomaticTokenAssociations",
                        ) &&
                        i.google.protobuf.Int32Value.encode(
                          e.maxAutomaticTokenAssociations,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.stakedAccountId &&
                        Object.hasOwnProperty.call(e, "stakedAccountId") &&
                        i.proto.AccountID.encode(
                          e.stakedAccountId,
                          t.uint32(130).fork(),
                        ).ldelim(),
                      null != e.stakedNodeId &&
                        Object.hasOwnProperty.call(e, "stakedNodeId") &&
                        t.uint32(136).int64(e.stakedNodeId),
                      null != e.declineReward &&
                        Object.hasOwnProperty.call(e, "declineReward") &&
                        i.google.protobuf.BoolValue.encode(
                          e.declineReward,
                          t.uint32(146).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoUpdateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          n.accountIDToUpdate = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.key = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 4:
                          n.proxyAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.proxyFraction = e.int32();
                          break;
                        case 6:
                          n.sendRecordThreshold = e.uint64();
                          break;
                        case 11:
                          n.sendRecordThresholdWrapper =
                            i.google.protobuf.UInt64Value.decode(e, e.uint32());
                          break;
                        case 7:
                          n.receiveRecordThreshold = e.uint64();
                          break;
                        case 12:
                          n.receiveRecordThresholdWrapper =
                            i.google.protobuf.UInt64Value.decode(e, e.uint32());
                          break;
                        case 8:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 9:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 10:
                          n.receiverSigRequired = e.bool();
                          break;
                        case 13:
                          n.receiverSigRequiredWrapper =
                            i.google.protobuf.BoolValue.decode(e, e.uint32());
                          break;
                        case 14:
                          n.memo = i.google.protobuf.StringValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 15:
                          n.maxAutomaticTokenAssociations =
                            i.google.protobuf.Int32Value.decode(e, e.uint32());
                          break;
                        case 16:
                          n.stakedAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 17:
                          n.stakedNodeId = e.int64();
                          break;
                        case 18:
                          n.declineReward = i.google.protobuf.BoolValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoUpdateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoApproveAllowanceTransactionBody = (function () {
                function e(e) {
                  if (
                    ((this.cryptoAllowances = []),
                    (this.nftAllowances = []),
                    (this.tokenAllowances = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.cryptoAllowances = l.emptyArray),
                  (e.prototype.nftAllowances = l.emptyArray),
                  (e.prototype.tokenAllowances = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.cryptoAllowances && e.cryptoAllowances.length)
                    )
                      for (var o = 0; o < e.cryptoAllowances.length; ++o)
                        i.proto.CryptoAllowance.encode(
                          e.cryptoAllowances[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    if (null != e.nftAllowances && e.nftAllowances.length)
                      for (o = 0; o < e.nftAllowances.length; ++o)
                        i.proto.NftAllowance.encode(
                          e.nftAllowances[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    if (null != e.tokenAllowances && e.tokenAllowances.length)
                      for (o = 0; o < e.tokenAllowances.length; ++o)
                        i.proto.TokenAllowance.encode(
                          e.tokenAllowances[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoApproveAllowanceTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.cryptoAllowances && n.cryptoAllowances.length) ||
                            (n.cryptoAllowances = []),
                            n.cryptoAllowances.push(
                              i.proto.CryptoAllowance.decode(e, e.uint32()),
                            ));
                          break;
                        case 2:
                          ((n.nftAllowances && n.nftAllowances.length) ||
                            (n.nftAllowances = []),
                            n.nftAllowances.push(
                              i.proto.NftAllowance.decode(e, e.uint32()),
                            ));
                          break;
                        case 3:
                          ((n.tokenAllowances && n.tokenAllowances.length) ||
                            (n.tokenAllowances = []),
                            n.tokenAllowances.push(
                              i.proto.TokenAllowance.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoApproveAllowanceTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoAllowance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.owner = null),
                  (e.prototype.spender = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.owner &&
                        Object.hasOwnProperty.call(e, "owner") &&
                        i.proto.AccountID.encode(
                          e.owner,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.spender &&
                        Object.hasOwnProperty.call(e, "spender") &&
                        i.proto.AccountID.encode(
                          e.spender,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(24).int64(e.amount),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.owner = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.spender = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.amount = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.NftAllowance = (function () {
                function e(e) {
                  if (((this.serialNumbers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.owner = null),
                  (e.prototype.spender = null),
                  (e.prototype.serialNumbers = l.emptyArray),
                  (e.prototype.approvedForAll = null),
                  (e.prototype.delegatingSpender = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.owner &&
                        Object.hasOwnProperty.call(e, "owner") &&
                        i.proto.AccountID.encode(
                          e.owner,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.spender &&
                        Object.hasOwnProperty.call(e, "spender") &&
                        i.proto.AccountID.encode(
                          e.spender,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.serialNumbers && e.serialNumbers.length)
                    ) {
                      t.uint32(34).fork();
                      for (var o = 0; o < e.serialNumbers.length; ++o)
                        t.int64(e.serialNumbers[o]);
                      t.ldelim();
                    }
                    return (
                      null != e.approvedForAll &&
                        Object.hasOwnProperty.call(e, "approvedForAll") &&
                        i.google.protobuf.BoolValue.encode(
                          e.approvedForAll,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.delegatingSpender &&
                        Object.hasOwnProperty.call(e, "delegatingSpender") &&
                        i.proto.AccountID.encode(
                          e.delegatingSpender,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NftAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.owner = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.spender = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 4:
                          if (
                            ((n.serialNumbers && n.serialNumbers.length) ||
                              (n.serialNumbers = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.serialNumbers.push(e.int64());
                          } else n.serialNumbers.push(e.int64());
                          break;
                        case 5:
                          n.approvedForAll = i.google.protobuf.BoolValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.delegatingSpender = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NftAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenAllowance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.owner = null),
                  (e.prototype.spender = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.owner &&
                        Object.hasOwnProperty.call(e, "owner") &&
                        i.proto.AccountID.encode(
                          e.owner,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.spender &&
                        Object.hasOwnProperty.call(e, "spender") &&
                        i.proto.AccountID.encode(
                          e.spender,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(32).int64(e.amount),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.owner = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.spender = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 4:
                          n.amount = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoDeleteAllowanceTransactionBody = (function () {
                function e(e) {
                  if (((this.nftAllowances = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nftAllowances = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.nftAllowances && e.nftAllowances.length)
                    )
                      for (var o = 0; o < e.nftAllowances.length; ++o)
                        i.proto.NftRemoveAllowance.encode(
                          e.nftAllowances[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoDeleteAllowanceTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          ((n.nftAllowances && n.nftAllowances.length) ||
                            (n.nftAllowances = []),
                            n.nftAllowances.push(
                              i.proto.NftRemoveAllowance.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoDeleteAllowanceTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.NftRemoveAllowance = (function () {
                function e(e) {
                  if (((this.serialNumbers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.owner = null),
                  (e.prototype.serialNumbers = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.owner &&
                        Object.hasOwnProperty.call(e, "owner") &&
                        i.proto.AccountID.encode(
                          e.owner,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.serialNumbers && e.serialNumbers.length)
                    ) {
                      t.uint32(26).fork();
                      for (var o = 0; o < e.serialNumbers.length; ++o)
                        t.int64(e.serialNumbers[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NftRemoveAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.owner = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          if (
                            ((n.serialNumbers && n.serialNumbers.length) ||
                              (n.serialNumbers = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.serialNumbers.push(e.int64());
                          } else n.serialNumbers.push(e.int64());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NftRemoveAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.EthereumTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ethereumData = l.newBuffer([])),
                  (e.prototype.callData = null),
                  (e.prototype.maxGasAllowance = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.ethereumData &&
                        Object.hasOwnProperty.call(e, "ethereumData") &&
                        t.uint32(10).bytes(e.ethereumData),
                      null != e.callData &&
                        Object.hasOwnProperty.call(e, "callData") &&
                        i.proto.FileID.encode(
                          e.callData,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.maxGasAllowance &&
                        Object.hasOwnProperty.call(e, "maxGasAllowance") &&
                        t.uint32(24).int64(e.maxGasAllowance),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.EthereumTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.ethereumData = e.bytes();
                          break;
                        case 2:
                          n.callData = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.maxGasAllowance = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.EthereumTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FileAppendTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.fileID = null),
                  (e.prototype.contents = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.contents &&
                        Object.hasOwnProperty.call(e, "contents") &&
                        t.uint32(34).bytes(e.contents),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileAppendTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 4:
                          n.contents = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileAppendTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FileCreateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.expirationTime = null),
                  (e.prototype.keys = null),
                  (e.prototype.contents = l.newBuffer([])),
                  (e.prototype.shardID = null),
                  (e.prototype.realmID = null),
                  (e.prototype.newRealmAdminKey = null),
                  (e.prototype.memo = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.keys &&
                        Object.hasOwnProperty.call(e, "keys") &&
                        i.proto.KeyList.encode(
                          e.keys,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contents &&
                        Object.hasOwnProperty.call(e, "contents") &&
                        t.uint32(34).bytes(e.contents),
                      null != e.shardID &&
                        Object.hasOwnProperty.call(e, "shardID") &&
                        i.proto.ShardID.encode(
                          e.shardID,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.realmID &&
                        Object.hasOwnProperty.call(e, "realmID") &&
                        i.proto.RealmID.encode(
                          e.realmID,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.newRealmAdminKey &&
                        Object.hasOwnProperty.call(e, "newRealmAdminKey") &&
                        i.proto.Key.encode(
                          e.newRealmAdminKey,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(66).string(e.memo),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileCreateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.keys = i.proto.KeyList.decode(e, e.uint32());
                          break;
                        case 4:
                          n.contents = e.bytes();
                          break;
                        case 5:
                          n.shardID = i.proto.ShardID.decode(e, e.uint32());
                          break;
                        case 6:
                          n.realmID = i.proto.RealmID.decode(e, e.uint32());
                          break;
                        case 7:
                          n.newRealmAdminKey = i.proto.Key.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 8:
                          n.memo = e.string();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileCreateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FileDeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.fileID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileDeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 2:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileDeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FileUpdateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.fileID = null),
                  (e.prototype.expirationTime = null),
                  (e.prototype.keys = null),
                  (e.prototype.contents = l.newBuffer([])),
                  (e.prototype.memo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.keys &&
                        Object.hasOwnProperty.call(e, "keys") &&
                        i.proto.KeyList.encode(
                          e.keys,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contents &&
                        Object.hasOwnProperty.call(e, "contents") &&
                        t.uint32(34).bytes(e.contents),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        i.google.protobuf.StringValue.encode(
                          e.memo,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileUpdateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.keys = i.proto.KeyList.decode(e, e.uint32());
                          break;
                        case 4:
                          n.contents = e.bytes();
                          break;
                        case 5:
                          n.memo = i.google.protobuf.StringValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileUpdateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractDeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.contractID = null),
                  (e.prototype.transferAccountID = null),
                  (e.prototype.transferContractID = null),
                  (e.prototype.permanentRemoval = !1),
                  Object.defineProperty(e.prototype, "obtainers", {
                    get: l.oneOfGetter(
                      (t = ["transferAccountID", "transferContractID"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transferAccountID &&
                        Object.hasOwnProperty.call(e, "transferAccountID") &&
                        i.proto.AccountID.encode(
                          e.transferAccountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.transferContractID &&
                        Object.hasOwnProperty.call(e, "transferContractID") &&
                        i.proto.ContractID.encode(
                          e.transferContractID,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.permanentRemoval &&
                        Object.hasOwnProperty.call(e, "permanentRemoval") &&
                        t.uint32(32).bool(e.permanentRemoval),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractDeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.transferAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.transferContractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.permanentRemoval = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractDeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusUpdateTopicTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.topicID = null),
                  (e.prototype.memo = null),
                  (e.prototype.expirationTime = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.submitKey = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.autoRenewAccount = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.topicID &&
                        Object.hasOwnProperty.call(e, "topicID") &&
                        i.proto.TopicID.encode(
                          e.topicID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        i.google.protobuf.StringValue.encode(
                          e.memo,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.submitKey &&
                        Object.hasOwnProperty.call(e, "submitKey") &&
                        i.proto.Key.encode(
                          e.submitKey,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.autoRenewAccount &&
                        Object.hasOwnProperty.call(e, "autoRenewAccount") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccount,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusUpdateTopicTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.topicID = i.proto.TopicID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.memo = i.google.protobuf.StringValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 7:
                          n.submitKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 8:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 9:
                          n.autoRenewAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusUpdateTopicTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusMessageChunkInfo = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.initialTransactionID = null),
                  (e.prototype.total = 0),
                  (e.prototype.number = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.initialTransactionID &&
                        Object.hasOwnProperty.call(e, "initialTransactionID") &&
                        i.proto.TransactionID.encode(
                          e.initialTransactionID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.total &&
                        Object.hasOwnProperty.call(e, "total") &&
                        t.uint32(16).int32(e.total),
                      null != e.number &&
                        Object.hasOwnProperty.call(e, "number") &&
                        t.uint32(24).int32(e.number),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusMessageChunkInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.initialTransactionID = i.proto.TransactionID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.total = e.int32();
                          break;
                        case 3:
                          n.number = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusMessageChunkInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusSubmitMessageTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.topicID = null),
                  (e.prototype.message = l.newBuffer([])),
                  (e.prototype.chunkInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.topicID &&
                        Object.hasOwnProperty.call(e, "topicID") &&
                        i.proto.TopicID.encode(
                          e.topicID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.message &&
                        Object.hasOwnProperty.call(e, "message") &&
                        t.uint32(18).bytes(e.message),
                      null != e.chunkInfo &&
                        Object.hasOwnProperty.call(e, "chunkInfo") &&
                        i.proto.ConsensusMessageChunkInfo.encode(
                          e.chunkInfo,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusSubmitMessageTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.topicID = i.proto.TopicID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.message = e.bytes();
                          break;
                        case 3:
                          n.chunkInfo =
                            i.proto.ConsensusMessageChunkInfo.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusSubmitMessageTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.UncheckedSubmitBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transactionBytes = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.transactionBytes &&
                        Object.hasOwnProperty.call(e, "transactionBytes") &&
                        t.uint32(10).bytes(e.transactionBytes),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.UncheckedSubmitBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transactionBytes = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.UncheckedSubmitBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenCreateTransactionBody = (function () {
                function e(e) {
                  if (((this.customFees = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.name = ""),
                  (e.prototype.symbol = ""),
                  (e.prototype.decimals = 0),
                  (e.prototype.initialSupply = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.treasury = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.kycKey = null),
                  (e.prototype.freezeKey = null),
                  (e.prototype.wipeKey = null),
                  (e.prototype.supplyKey = null),
                  (e.prototype.freezeDefault = !1),
                  (e.prototype.expiry = null),
                  (e.prototype.autoRenewAccount = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.memo = ""),
                  (e.prototype.tokenType = 0),
                  (e.prototype.supplyType = 0),
                  (e.prototype.maxSupply = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.feeScheduleKey = null),
                  (e.prototype.customFees = l.emptyArray),
                  (e.prototype.pauseKey = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(10).string(e.name),
                      null != e.symbol &&
                        Object.hasOwnProperty.call(e, "symbol") &&
                        t.uint32(18).string(e.symbol),
                      null != e.decimals &&
                        Object.hasOwnProperty.call(e, "decimals") &&
                        t.uint32(24).uint32(e.decimals),
                      null != e.initialSupply &&
                        Object.hasOwnProperty.call(e, "initialSupply") &&
                        t.uint32(32).uint64(e.initialSupply),
                      null != e.treasury &&
                        Object.hasOwnProperty.call(e, "treasury") &&
                        i.proto.AccountID.encode(
                          e.treasury,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.kycKey &&
                        Object.hasOwnProperty.call(e, "kycKey") &&
                        i.proto.Key.encode(
                          e.kycKey,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.freezeKey &&
                        Object.hasOwnProperty.call(e, "freezeKey") &&
                        i.proto.Key.encode(
                          e.freezeKey,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.wipeKey &&
                        Object.hasOwnProperty.call(e, "wipeKey") &&
                        i.proto.Key.encode(
                          e.wipeKey,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.supplyKey &&
                        Object.hasOwnProperty.call(e, "supplyKey") &&
                        i.proto.Key.encode(
                          e.supplyKey,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.freezeDefault &&
                        Object.hasOwnProperty.call(e, "freezeDefault") &&
                        t.uint32(88).bool(e.freezeDefault),
                      null != e.expiry &&
                        Object.hasOwnProperty.call(e, "expiry") &&
                        i.proto.Timestamp.encode(
                          e.expiry,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.autoRenewAccount &&
                        Object.hasOwnProperty.call(e, "autoRenewAccount") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccount,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(130).string(e.memo),
                      null != e.tokenType &&
                        Object.hasOwnProperty.call(e, "tokenType") &&
                        t.uint32(136).int32(e.tokenType),
                      null != e.supplyType &&
                        Object.hasOwnProperty.call(e, "supplyType") &&
                        t.uint32(144).int32(e.supplyType),
                      null != e.maxSupply &&
                        Object.hasOwnProperty.call(e, "maxSupply") &&
                        t.uint32(152).int64(e.maxSupply),
                      null != e.feeScheduleKey &&
                        Object.hasOwnProperty.call(e, "feeScheduleKey") &&
                        i.proto.Key.encode(
                          e.feeScheduleKey,
                          t.uint32(162).fork(),
                        ).ldelim(),
                      null != e.customFees && e.customFees.length)
                    )
                      for (var o = 0; o < e.customFees.length; ++o)
                        i.proto.CustomFee.encode(
                          e.customFees[o],
                          t.uint32(170).fork(),
                        ).ldelim();
                    return (
                      null != e.pauseKey &&
                        Object.hasOwnProperty.call(e, "pauseKey") &&
                        i.proto.Key.encode(
                          e.pauseKey,
                          t.uint32(178).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenCreateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.name = e.string();
                          break;
                        case 2:
                          n.symbol = e.string();
                          break;
                        case 3:
                          n.decimals = e.uint32();
                          break;
                        case 4:
                          n.initialSupply = e.uint64();
                          break;
                        case 5:
                          n.treasury = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 6:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 7:
                          n.kycKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 8:
                          n.freezeKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 9:
                          n.wipeKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 10:
                          n.supplyKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 11:
                          n.freezeDefault = e.bool();
                          break;
                        case 13:
                          n.expiry = i.proto.Timestamp.decode(e, e.uint32());
                          break;
                        case 14:
                          n.autoRenewAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 15:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 16:
                          n.memo = e.string();
                          break;
                        case 17:
                          n.tokenType = e.int32();
                          break;
                        case 18:
                          n.supplyType = e.int32();
                          break;
                        case 19:
                          n.maxSupply = e.int64();
                          break;
                        case 20:
                          n.feeScheduleKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 21:
                          ((n.customFees && n.customFees.length) ||
                            (n.customFees = []),
                            n.customFees.push(
                              i.proto.CustomFee.decode(e, e.uint32()),
                            ));
                          break;
                        case 22:
                          n.pauseKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenCreateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.FractionalFee = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.fractionalAmount = null),
                  (e.prototype.minimumAmount = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.maximumAmount = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.netOfTransfers = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fractionalAmount &&
                        Object.hasOwnProperty.call(e, "fractionalAmount") &&
                        i.proto.Fraction.encode(
                          e.fractionalAmount,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.minimumAmount &&
                        Object.hasOwnProperty.call(e, "minimumAmount") &&
                        t.uint32(16).int64(e.minimumAmount),
                      null != e.maximumAmount &&
                        Object.hasOwnProperty.call(e, "maximumAmount") &&
                        t.uint32(24).int64(e.maximumAmount),
                      null != e.netOfTransfers &&
                        Object.hasOwnProperty.call(e, "netOfTransfers") &&
                        t.uint32(32).bool(e.netOfTransfers),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FractionalFee();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fractionalAmount = i.proto.Fraction.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.minimumAmount = e.int64();
                          break;
                        case 3:
                          n.maximumAmount = e.int64();
                          break;
                        case 4:
                          n.netOfTransfers = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FractionalFee"
                    );
                  }),
                  e
                );
              })()),
              (e.FixedFee = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.denominatingTokenId = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(8).int64(e.amount),
                      null != e.denominatingTokenId &&
                        Object.hasOwnProperty.call(e, "denominatingTokenId") &&
                        i.proto.TokenID.encode(
                          e.denominatingTokenId,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FixedFee();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.amount = e.int64();
                          break;
                        case 2:
                          n.denominatingTokenId = i.proto.TokenID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FixedFee"
                    );
                  }),
                  e
                );
              })()),
              (e.RoyaltyFee = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.exchangeValueFraction = null),
                  (e.prototype.fallbackFee = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.exchangeValueFraction &&
                        Object.hasOwnProperty.call(
                          e,
                          "exchangeValueFraction",
                        ) &&
                        i.proto.Fraction.encode(
                          e.exchangeValueFraction,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.fallbackFee &&
                        Object.hasOwnProperty.call(e, "fallbackFee") &&
                        i.proto.FixedFee.encode(
                          e.fallbackFee,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.RoyaltyFee();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.exchangeValueFraction = i.proto.Fraction.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.fallbackFee = i.proto.FixedFee.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.RoyaltyFee"
                    );
                  }),
                  e
                );
              })()),
              (e.CustomFee = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.fixedFee = null),
                  (e.prototype.fractionalFee = null),
                  (e.prototype.royaltyFee = null),
                  (e.prototype.feeCollectorAccountId = null),
                  (e.prototype.allCollectorsAreExempt = !1),
                  Object.defineProperty(e.prototype, "fee", {
                    get: l.oneOfGetter(
                      (t = ["fixedFee", "fractionalFee", "royaltyFee"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fixedFee &&
                        Object.hasOwnProperty.call(e, "fixedFee") &&
                        i.proto.FixedFee.encode(
                          e.fixedFee,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.fractionalFee &&
                        Object.hasOwnProperty.call(e, "fractionalFee") &&
                        i.proto.FractionalFee.encode(
                          e.fractionalFee,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.feeCollectorAccountId &&
                        Object.hasOwnProperty.call(
                          e,
                          "feeCollectorAccountId",
                        ) &&
                        i.proto.AccountID.encode(
                          e.feeCollectorAccountId,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.royaltyFee &&
                        Object.hasOwnProperty.call(e, "royaltyFee") &&
                        i.proto.RoyaltyFee.encode(
                          e.royaltyFee,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.allCollectorsAreExempt &&
                        Object.hasOwnProperty.call(
                          e,
                          "allCollectorsAreExempt",
                        ) &&
                        t.uint32(40).bool(e.allCollectorsAreExempt),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CustomFee();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fixedFee = i.proto.FixedFee.decode(e, e.uint32());
                          break;
                        case 2:
                          n.fractionalFee = i.proto.FractionalFee.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.royaltyFee = i.proto.RoyaltyFee.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.feeCollectorAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.allCollectorsAreExempt = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CustomFee"
                    );
                  }),
                  e
                );
              })()),
              (e.AssessedCustomFee = (function () {
                function e(e) {
                  if (((this.effectivePayerAccountId = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.tokenId = null),
                  (e.prototype.feeCollectorAccountId = null),
                  (e.prototype.effectivePayerAccountId = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(8).int64(e.amount),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.feeCollectorAccountId &&
                        Object.hasOwnProperty.call(
                          e,
                          "feeCollectorAccountId",
                        ) &&
                        i.proto.AccountID.encode(
                          e.feeCollectorAccountId,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.effectivePayerAccountId &&
                        e.effectivePayerAccountId.length)
                    )
                      for (var o = 0; o < e.effectivePayerAccountId.length; ++o)
                        i.proto.AccountID.encode(
                          e.effectivePayerAccountId[o],
                          t.uint32(34).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.AssessedCustomFee();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.amount = e.int64();
                          break;
                        case 2:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.feeCollectorAccountId = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          ((n.effectivePayerAccountId &&
                            n.effectivePayerAccountId.length) ||
                            (n.effectivePayerAccountId = []),
                            n.effectivePayerAccountId.push(
                              i.proto.AccountID.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.AssessedCustomFee"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenFreezeAccountTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.account = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenFreezeAccountTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenFreezeAccountTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenUnfreezeAccountTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.account = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenUnfreezeAccountTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenUnfreezeAccountTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGrantKycTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.account = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGrantKycTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGrantKycTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenRevokeKycTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.account = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenRevokeKycTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenRevokeKycTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenDeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenDeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenDeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenUpdateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.symbol = ""),
                  (e.prototype.name = ""),
                  (e.prototype.treasury = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.kycKey = null),
                  (e.prototype.freezeKey = null),
                  (e.prototype.wipeKey = null),
                  (e.prototype.supplyKey = null),
                  (e.prototype.autoRenewAccount = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.expiry = null),
                  (e.prototype.memo = null),
                  (e.prototype.feeScheduleKey = null),
                  (e.prototype.pauseKey = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.symbol &&
                        Object.hasOwnProperty.call(e, "symbol") &&
                        t.uint32(18).string(e.symbol),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(26).string(e.name),
                      null != e.treasury &&
                        Object.hasOwnProperty.call(e, "treasury") &&
                        i.proto.AccountID.encode(
                          e.treasury,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.kycKey &&
                        Object.hasOwnProperty.call(e, "kycKey") &&
                        i.proto.Key.encode(
                          e.kycKey,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.freezeKey &&
                        Object.hasOwnProperty.call(e, "freezeKey") &&
                        i.proto.Key.encode(
                          e.freezeKey,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.wipeKey &&
                        Object.hasOwnProperty.call(e, "wipeKey") &&
                        i.proto.Key.encode(
                          e.wipeKey,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.supplyKey &&
                        Object.hasOwnProperty.call(e, "supplyKey") &&
                        i.proto.Key.encode(
                          e.supplyKey,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.autoRenewAccount &&
                        Object.hasOwnProperty.call(e, "autoRenewAccount") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccount,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.expiry &&
                        Object.hasOwnProperty.call(e, "expiry") &&
                        i.proto.Timestamp.encode(
                          e.expiry,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        i.google.protobuf.StringValue.encode(
                          e.memo,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.feeScheduleKey &&
                        Object.hasOwnProperty.call(e, "feeScheduleKey") &&
                        i.proto.Key.encode(
                          e.feeScheduleKey,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.pauseKey &&
                        Object.hasOwnProperty.call(e, "pauseKey") &&
                        i.proto.Key.encode(
                          e.pauseKey,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenUpdateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.symbol = e.string();
                          break;
                        case 3:
                          n.name = e.string();
                          break;
                        case 4:
                          n.treasury = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 5:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 6:
                          n.kycKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 7:
                          n.freezeKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 8:
                          n.wipeKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 9:
                          n.supplyKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 10:
                          n.autoRenewAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 11:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 12:
                          n.expiry = i.proto.Timestamp.decode(e, e.uint32());
                          break;
                        case 13:
                          n.memo = i.google.protobuf.StringValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 14:
                          n.feeScheduleKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 15:
                          n.pauseKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenUpdateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenMintTransactionBody = (function () {
                function e(e) {
                  if (((this.metadata = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !0) : 0),
                  (e.prototype.metadata = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(16).uint64(e.amount),
                      null != e.metadata && e.metadata.length)
                    )
                      for (var o = 0; o < e.metadata.length; ++o)
                        t.uint32(26).bytes(e.metadata[o]);
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenMintTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.amount = e.uint64();
                          break;
                        case 3:
                          ((n.metadata && n.metadata.length) ||
                            (n.metadata = []),
                            n.metadata.push(e.bytes()));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenMintTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenBurnTransactionBody = (function () {
                function e(e) {
                  if (((this.serialNumbers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !0) : 0),
                  (e.prototype.serialNumbers = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(16).uint64(e.amount),
                      null != e.serialNumbers && e.serialNumbers.length)
                    ) {
                      t.uint32(26).fork();
                      for (var o = 0; o < e.serialNumbers.length; ++o)
                        t.int64(e.serialNumbers[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenBurnTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.amount = e.uint64();
                          break;
                        case 3:
                          if (
                            ((n.serialNumbers && n.serialNumbers.length) ||
                              (n.serialNumbers = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.serialNumbers.push(e.int64());
                          } else n.serialNumbers.push(e.int64());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenBurnTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenWipeAccountTransactionBody = (function () {
                function e(e) {
                  if (((this.serialNumbers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.prototype.account = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !0) : 0),
                  (e.prototype.serialNumbers = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(24).uint64(e.amount),
                      null != e.serialNumbers && e.serialNumbers.length)
                    ) {
                      t.uint32(34).fork();
                      for (var o = 0; o < e.serialNumbers.length; ++o)
                        t.int64(e.serialNumbers[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenWipeAccountTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.amount = e.uint64();
                          break;
                        case 4:
                          if (
                            ((n.serialNumbers && n.serialNumbers.length) ||
                              (n.serialNumbers = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.serialNumbers.push(e.int64());
                          } else n.serialNumbers.push(e.int64());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenWipeAccountTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenAssociateTransactionBody = (function () {
                function e(e) {
                  if (((this.tokens = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.account = null),
                  (e.prototype.tokens = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.tokens && e.tokens.length)
                    )
                      for (var o = 0; o < e.tokens.length; ++o)
                        i.proto.TokenID.encode(
                          e.tokens[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenAssociateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          ((n.tokens && n.tokens.length) || (n.tokens = []),
                            n.tokens.push(
                              i.proto.TokenID.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenAssociateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenDissociateTransactionBody = (function () {
                function e(e) {
                  if (((this.tokens = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.account = null),
                  (e.prototype.tokens = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.account &&
                        Object.hasOwnProperty.call(e, "account") &&
                        i.proto.AccountID.encode(
                          e.account,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.tokens && e.tokens.length)
                    )
                      for (var o = 0; o < e.tokens.length; ++o)
                        i.proto.TokenID.encode(
                          e.tokens[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenDissociateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.account = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          ((n.tokens && n.tokens.length) || (n.tokens = []),
                            n.tokens.push(
                              i.proto.TokenID.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenDissociateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenFeeScheduleUpdateTransactionBody = (function () {
                function e(e) {
                  if (((this.customFees = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.customFees = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.customFees && e.customFees.length)
                    )
                      for (var o = 0; o < e.customFees.length; ++o)
                        i.proto.CustomFee.encode(
                          e.customFees[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenFeeScheduleUpdateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          ((n.customFees && n.customFees.length) ||
                            (n.customFees = []),
                            n.customFees.push(
                              i.proto.CustomFee.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenFeeScheduleUpdateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenPauseTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenPauseTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenPauseTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenUnpauseTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.token = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenUnpauseTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenUnpauseTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleCreateTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.scheduledTransactionBody = null),
                  (e.prototype.memo = ""),
                  (e.prototype.adminKey = null),
                  (e.prototype.payerAccountID = null),
                  (e.prototype.expirationTime = null),
                  (e.prototype.waitForExpiry = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.scheduledTransactionBody &&
                        Object.hasOwnProperty.call(
                          e,
                          "scheduledTransactionBody",
                        ) &&
                        i.proto.SchedulableTransactionBody.encode(
                          e.scheduledTransactionBody,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(18).string(e.memo),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.payerAccountID &&
                        Object.hasOwnProperty.call(e, "payerAccountID") &&
                        i.proto.AccountID.encode(
                          e.payerAccountID,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.waitForExpiry &&
                        Object.hasOwnProperty.call(e, "waitForExpiry") &&
                        t.uint32(104).bool(e.waitForExpiry),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleCreateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.scheduledTransactionBody =
                            i.proto.SchedulableTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 2:
                          n.memo = e.string();
                          break;
                        case 3:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 4:
                          n.payerAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 13:
                          n.waitForExpiry = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleCreateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.SchedulableTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.transactionFee = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.memo = ""),
                  (e.prototype.contractCall = null),
                  (e.prototype.contractCreateInstance = null),
                  (e.prototype.contractUpdateInstance = null),
                  (e.prototype.contractDeleteInstance = null),
                  (e.prototype.cryptoApproveAllowance = null),
                  (e.prototype.cryptoDeleteAllowance = null),
                  (e.prototype.cryptoCreateAccount = null),
                  (e.prototype.cryptoDelete = null),
                  (e.prototype.cryptoTransfer = null),
                  (e.prototype.cryptoUpdateAccount = null),
                  (e.prototype.fileAppend = null),
                  (e.prototype.fileCreate = null),
                  (e.prototype.fileDelete = null),
                  (e.prototype.fileUpdate = null),
                  (e.prototype.systemDelete = null),
                  (e.prototype.systemUndelete = null),
                  (e.prototype.freeze = null),
                  (e.prototype.consensusCreateTopic = null),
                  (e.prototype.consensusUpdateTopic = null),
                  (e.prototype.consensusDeleteTopic = null),
                  (e.prototype.consensusSubmitMessage = null),
                  (e.prototype.tokenCreation = null),
                  (e.prototype.tokenFreeze = null),
                  (e.prototype.tokenUnfreeze = null),
                  (e.prototype.tokenGrantKyc = null),
                  (e.prototype.tokenRevokeKyc = null),
                  (e.prototype.tokenDeletion = null),
                  (e.prototype.tokenUpdate = null),
                  (e.prototype.tokenMint = null),
                  (e.prototype.tokenBurn = null),
                  (e.prototype.tokenWipe = null),
                  (e.prototype.tokenAssociate = null),
                  (e.prototype.tokenDissociate = null),
                  (e.prototype.tokenFeeScheduleUpdate = null),
                  (e.prototype.tokenPause = null),
                  (e.prototype.tokenUnpause = null),
                  (e.prototype.scheduleDelete = null),
                  (e.prototype.utilPrng = null),
                  Object.defineProperty(e.prototype, "data", {
                    get: l.oneOfGetter(
                      (t = [
                        "contractCall",
                        "contractCreateInstance",
                        "contractUpdateInstance",
                        "contractDeleteInstance",
                        "cryptoApproveAllowance",
                        "cryptoDeleteAllowance",
                        "cryptoCreateAccount",
                        "cryptoDelete",
                        "cryptoTransfer",
                        "cryptoUpdateAccount",
                        "fileAppend",
                        "fileCreate",
                        "fileDelete",
                        "fileUpdate",
                        "systemDelete",
                        "systemUndelete",
                        "freeze",
                        "consensusCreateTopic",
                        "consensusUpdateTopic",
                        "consensusDeleteTopic",
                        "consensusSubmitMessage",
                        "tokenCreation",
                        "tokenFreeze",
                        "tokenUnfreeze",
                        "tokenGrantKyc",
                        "tokenRevokeKyc",
                        "tokenDeletion",
                        "tokenUpdate",
                        "tokenMint",
                        "tokenBurn",
                        "tokenWipe",
                        "tokenAssociate",
                        "tokenDissociate",
                        "tokenFeeScheduleUpdate",
                        "tokenPause",
                        "tokenUnpause",
                        "scheduleDelete",
                        "utilPrng",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.transactionFee &&
                        Object.hasOwnProperty.call(e, "transactionFee") &&
                        t.uint32(8).uint64(e.transactionFee),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(18).string(e.memo),
                      null != e.contractCall &&
                        Object.hasOwnProperty.call(e, "contractCall") &&
                        i.proto.ContractCallTransactionBody.encode(
                          e.contractCall,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contractCreateInstance &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractCreateInstance",
                        ) &&
                        i.proto.ContractCreateTransactionBody.encode(
                          e.contractCreateInstance,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.contractUpdateInstance &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractUpdateInstance",
                        ) &&
                        i.proto.ContractUpdateTransactionBody.encode(
                          e.contractUpdateInstance,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.contractDeleteInstance &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractDeleteInstance",
                        ) &&
                        i.proto.ContractDeleteTransactionBody.encode(
                          e.contractDeleteInstance,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.cryptoCreateAccount &&
                        Object.hasOwnProperty.call(e, "cryptoCreateAccount") &&
                        i.proto.CryptoCreateTransactionBody.encode(
                          e.cryptoCreateAccount,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.cryptoDelete &&
                        Object.hasOwnProperty.call(e, "cryptoDelete") &&
                        i.proto.CryptoDeleteTransactionBody.encode(
                          e.cryptoDelete,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.cryptoTransfer &&
                        Object.hasOwnProperty.call(e, "cryptoTransfer") &&
                        i.proto.CryptoTransferTransactionBody.encode(
                          e.cryptoTransfer,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.cryptoUpdateAccount &&
                        Object.hasOwnProperty.call(e, "cryptoUpdateAccount") &&
                        i.proto.CryptoUpdateTransactionBody.encode(
                          e.cryptoUpdateAccount,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.fileAppend &&
                        Object.hasOwnProperty.call(e, "fileAppend") &&
                        i.proto.FileAppendTransactionBody.encode(
                          e.fileAppend,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.fileCreate &&
                        Object.hasOwnProperty.call(e, "fileCreate") &&
                        i.proto.FileCreateTransactionBody.encode(
                          e.fileCreate,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.fileDelete &&
                        Object.hasOwnProperty.call(e, "fileDelete") &&
                        i.proto.FileDeleteTransactionBody.encode(
                          e.fileDelete,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.fileUpdate &&
                        Object.hasOwnProperty.call(e, "fileUpdate") &&
                        i.proto.FileUpdateTransactionBody.encode(
                          e.fileUpdate,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.systemDelete &&
                        Object.hasOwnProperty.call(e, "systemDelete") &&
                        i.proto.SystemDeleteTransactionBody.encode(
                          e.systemDelete,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.systemUndelete &&
                        Object.hasOwnProperty.call(e, "systemUndelete") &&
                        i.proto.SystemUndeleteTransactionBody.encode(
                          e.systemUndelete,
                          t.uint32(130).fork(),
                        ).ldelim(),
                      null != e.freeze &&
                        Object.hasOwnProperty.call(e, "freeze") &&
                        i.proto.FreezeTransactionBody.encode(
                          e.freeze,
                          t.uint32(138).fork(),
                        ).ldelim(),
                      null != e.consensusCreateTopic &&
                        Object.hasOwnProperty.call(e, "consensusCreateTopic") &&
                        i.proto.ConsensusCreateTopicTransactionBody.encode(
                          e.consensusCreateTopic,
                          t.uint32(146).fork(),
                        ).ldelim(),
                      null != e.consensusUpdateTopic &&
                        Object.hasOwnProperty.call(e, "consensusUpdateTopic") &&
                        i.proto.ConsensusUpdateTopicTransactionBody.encode(
                          e.consensusUpdateTopic,
                          t.uint32(154).fork(),
                        ).ldelim(),
                      null != e.consensusDeleteTopic &&
                        Object.hasOwnProperty.call(e, "consensusDeleteTopic") &&
                        i.proto.ConsensusDeleteTopicTransactionBody.encode(
                          e.consensusDeleteTopic,
                          t.uint32(162).fork(),
                        ).ldelim(),
                      null != e.consensusSubmitMessage &&
                        Object.hasOwnProperty.call(
                          e,
                          "consensusSubmitMessage",
                        ) &&
                        i.proto.ConsensusSubmitMessageTransactionBody.encode(
                          e.consensusSubmitMessage,
                          t.uint32(170).fork(),
                        ).ldelim(),
                      null != e.tokenCreation &&
                        Object.hasOwnProperty.call(e, "tokenCreation") &&
                        i.proto.TokenCreateTransactionBody.encode(
                          e.tokenCreation,
                          t.uint32(178).fork(),
                        ).ldelim(),
                      null != e.tokenFreeze &&
                        Object.hasOwnProperty.call(e, "tokenFreeze") &&
                        i.proto.TokenFreezeAccountTransactionBody.encode(
                          e.tokenFreeze,
                          t.uint32(186).fork(),
                        ).ldelim(),
                      null != e.tokenUnfreeze &&
                        Object.hasOwnProperty.call(e, "tokenUnfreeze") &&
                        i.proto.TokenUnfreezeAccountTransactionBody.encode(
                          e.tokenUnfreeze,
                          t.uint32(194).fork(),
                        ).ldelim(),
                      null != e.tokenGrantKyc &&
                        Object.hasOwnProperty.call(e, "tokenGrantKyc") &&
                        i.proto.TokenGrantKycTransactionBody.encode(
                          e.tokenGrantKyc,
                          t.uint32(202).fork(),
                        ).ldelim(),
                      null != e.tokenRevokeKyc &&
                        Object.hasOwnProperty.call(e, "tokenRevokeKyc") &&
                        i.proto.TokenRevokeKycTransactionBody.encode(
                          e.tokenRevokeKyc,
                          t.uint32(210).fork(),
                        ).ldelim(),
                      null != e.tokenDeletion &&
                        Object.hasOwnProperty.call(e, "tokenDeletion") &&
                        i.proto.TokenDeleteTransactionBody.encode(
                          e.tokenDeletion,
                          t.uint32(218).fork(),
                        ).ldelim(),
                      null != e.tokenUpdate &&
                        Object.hasOwnProperty.call(e, "tokenUpdate") &&
                        i.proto.TokenUpdateTransactionBody.encode(
                          e.tokenUpdate,
                          t.uint32(226).fork(),
                        ).ldelim(),
                      null != e.tokenMint &&
                        Object.hasOwnProperty.call(e, "tokenMint") &&
                        i.proto.TokenMintTransactionBody.encode(
                          e.tokenMint,
                          t.uint32(234).fork(),
                        ).ldelim(),
                      null != e.tokenBurn &&
                        Object.hasOwnProperty.call(e, "tokenBurn") &&
                        i.proto.TokenBurnTransactionBody.encode(
                          e.tokenBurn,
                          t.uint32(242).fork(),
                        ).ldelim(),
                      null != e.tokenWipe &&
                        Object.hasOwnProperty.call(e, "tokenWipe") &&
                        i.proto.TokenWipeAccountTransactionBody.encode(
                          e.tokenWipe,
                          t.uint32(250).fork(),
                        ).ldelim(),
                      null != e.tokenAssociate &&
                        Object.hasOwnProperty.call(e, "tokenAssociate") &&
                        i.proto.TokenAssociateTransactionBody.encode(
                          e.tokenAssociate,
                          t.uint32(258).fork(),
                        ).ldelim(),
                      null != e.tokenDissociate &&
                        Object.hasOwnProperty.call(e, "tokenDissociate") &&
                        i.proto.TokenDissociateTransactionBody.encode(
                          e.tokenDissociate,
                          t.uint32(266).fork(),
                        ).ldelim(),
                      null != e.scheduleDelete &&
                        Object.hasOwnProperty.call(e, "scheduleDelete") &&
                        i.proto.ScheduleDeleteTransactionBody.encode(
                          e.scheduleDelete,
                          t.uint32(274).fork(),
                        ).ldelim(),
                      null != e.tokenPause &&
                        Object.hasOwnProperty.call(e, "tokenPause") &&
                        i.proto.TokenPauseTransactionBody.encode(
                          e.tokenPause,
                          t.uint32(282).fork(),
                        ).ldelim(),
                      null != e.tokenUnpause &&
                        Object.hasOwnProperty.call(e, "tokenUnpause") &&
                        i.proto.TokenUnpauseTransactionBody.encode(
                          e.tokenUnpause,
                          t.uint32(290).fork(),
                        ).ldelim(),
                      null != e.cryptoApproveAllowance &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoApproveAllowance",
                        ) &&
                        i.proto.CryptoApproveAllowanceTransactionBody.encode(
                          e.cryptoApproveAllowance,
                          t.uint32(298).fork(),
                        ).ldelim(),
                      null != e.cryptoDeleteAllowance &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoDeleteAllowance",
                        ) &&
                        i.proto.CryptoDeleteAllowanceTransactionBody.encode(
                          e.cryptoDeleteAllowance,
                          t.uint32(306).fork(),
                        ).ldelim(),
                      null != e.tokenFeeScheduleUpdate &&
                        Object.hasOwnProperty.call(
                          e,
                          "tokenFeeScheduleUpdate",
                        ) &&
                        i.proto.TokenFeeScheduleUpdateTransactionBody.encode(
                          e.tokenFeeScheduleUpdate,
                          t.uint32(314).fork(),
                        ).ldelim(),
                      null != e.utilPrng &&
                        Object.hasOwnProperty.call(e, "utilPrng") &&
                        i.proto.UtilPrngTransactionBody.encode(
                          e.utilPrng,
                          t.uint32(322).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SchedulableTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transactionFee = e.uint64();
                          break;
                        case 2:
                          n.memo = e.string();
                          break;
                        case 3:
                          n.contractCall =
                            i.proto.ContractCallTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 4:
                          n.contractCreateInstance =
                            i.proto.ContractCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 5:
                          n.contractUpdateInstance =
                            i.proto.ContractUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 6:
                          n.contractDeleteInstance =
                            i.proto.ContractDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 37:
                          n.cryptoApproveAllowance =
                            i.proto.CryptoApproveAllowanceTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 38:
                          n.cryptoDeleteAllowance =
                            i.proto.CryptoDeleteAllowanceTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 7:
                          n.cryptoCreateAccount =
                            i.proto.CryptoCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 8:
                          n.cryptoDelete =
                            i.proto.CryptoDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 9:
                          n.cryptoTransfer =
                            i.proto.CryptoTransferTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 10:
                          n.cryptoUpdateAccount =
                            i.proto.CryptoUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 11:
                          n.fileAppend =
                            i.proto.FileAppendTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 12:
                          n.fileCreate =
                            i.proto.FileCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 13:
                          n.fileDelete =
                            i.proto.FileDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 14:
                          n.fileUpdate =
                            i.proto.FileUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 15:
                          n.systemDelete =
                            i.proto.SystemDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 16:
                          n.systemUndelete =
                            i.proto.SystemUndeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 17:
                          n.freeze = i.proto.FreezeTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 18:
                          n.consensusCreateTopic =
                            i.proto.ConsensusCreateTopicTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 19:
                          n.consensusUpdateTopic =
                            i.proto.ConsensusUpdateTopicTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 20:
                          n.consensusDeleteTopic =
                            i.proto.ConsensusDeleteTopicTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 21:
                          n.consensusSubmitMessage =
                            i.proto.ConsensusSubmitMessageTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 22:
                          n.tokenCreation =
                            i.proto.TokenCreateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 23:
                          n.tokenFreeze =
                            i.proto.TokenFreezeAccountTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 24:
                          n.tokenUnfreeze =
                            i.proto.TokenUnfreezeAccountTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 25:
                          n.tokenGrantKyc =
                            i.proto.TokenGrantKycTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 26:
                          n.tokenRevokeKyc =
                            i.proto.TokenRevokeKycTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 27:
                          n.tokenDeletion =
                            i.proto.TokenDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 28:
                          n.tokenUpdate =
                            i.proto.TokenUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 29:
                          n.tokenMint = i.proto.TokenMintTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 30:
                          n.tokenBurn = i.proto.TokenBurnTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 31:
                          n.tokenWipe =
                            i.proto.TokenWipeAccountTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 32:
                          n.tokenAssociate =
                            i.proto.TokenAssociateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 33:
                          n.tokenDissociate =
                            i.proto.TokenDissociateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 39:
                          n.tokenFeeScheduleUpdate =
                            i.proto.TokenFeeScheduleUpdateTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 35:
                          n.tokenPause =
                            i.proto.TokenPauseTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 36:
                          n.tokenUnpause =
                            i.proto.TokenUnpauseTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 34:
                          n.scheduleDelete =
                            i.proto.ScheduleDeleteTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 40:
                          n.utilPrng = i.proto.UtilPrngTransactionBody.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SchedulableTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleDeleteTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.scheduleID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.scheduleID &&
                        Object.hasOwnProperty.call(e, "scheduleID") &&
                        i.proto.ScheduleID.encode(
                          e.scheduleID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleDeleteTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.scheduleID = i.proto.ScheduleID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleDeleteTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.UtilPrngTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.range = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.range &&
                        Object.hasOwnProperty.call(e, "range") &&
                        t.uint32(8).int32(e.range),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.UtilPrngTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.range = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.UtilPrngTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleSignTransactionBody = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.scheduleID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.scheduleID &&
                        Object.hasOwnProperty.call(e, "scheduleID") &&
                        i.proto.ScheduleID.encode(
                          e.scheduleID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleSignTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.scheduleID = i.proto.ScheduleID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleSignTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.NodeStakeUpdateTransactionBody = (function () {
                function e(e) {
                  if (((this.nodeStake = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.endOfStakingPeriod = null),
                  (e.prototype.nodeStake = l.emptyArray),
                  (e.prototype.maxStakingRewardRatePerHbar = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.nodeRewardFeeFraction = null),
                  (e.prototype.stakingPeriodsStored = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stakingPeriod = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stakingRewardFeeFraction = null),
                  (e.prototype.stakingStartThreshold = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stakingRewardRate = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.reservedStakingRewards = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.unreservedStakingRewardBalance = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.rewardBalanceThreshold = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.maxStakeRewarded = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.maxTotalReward = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.endOfStakingPeriod &&
                        Object.hasOwnProperty.call(e, "endOfStakingPeriod") &&
                        i.proto.Timestamp.encode(
                          e.endOfStakingPeriod,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nodeStake && e.nodeStake.length)
                    )
                      for (var o = 0; o < e.nodeStake.length; ++o)
                        i.proto.NodeStake.encode(
                          e.nodeStake[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return (
                      null != e.maxStakingRewardRatePerHbar &&
                        Object.hasOwnProperty.call(
                          e,
                          "maxStakingRewardRatePerHbar",
                        ) &&
                        t.uint32(24).int64(e.maxStakingRewardRatePerHbar),
                      null != e.nodeRewardFeeFraction &&
                        Object.hasOwnProperty.call(
                          e,
                          "nodeRewardFeeFraction",
                        ) &&
                        i.proto.Fraction.encode(
                          e.nodeRewardFeeFraction,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.stakingPeriodsStored &&
                        Object.hasOwnProperty.call(e, "stakingPeriodsStored") &&
                        t.uint32(40).int64(e.stakingPeriodsStored),
                      null != e.stakingPeriod &&
                        Object.hasOwnProperty.call(e, "stakingPeriod") &&
                        t.uint32(48).int64(e.stakingPeriod),
                      null != e.stakingRewardFeeFraction &&
                        Object.hasOwnProperty.call(
                          e,
                          "stakingRewardFeeFraction",
                        ) &&
                        i.proto.Fraction.encode(
                          e.stakingRewardFeeFraction,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.stakingStartThreshold &&
                        Object.hasOwnProperty.call(
                          e,
                          "stakingStartThreshold",
                        ) &&
                        t.uint32(64).int64(e.stakingStartThreshold),
                      null != e.stakingRewardRate &&
                        Object.hasOwnProperty.call(e, "stakingRewardRate") &&
                        t.uint32(72).int64(e.stakingRewardRate),
                      null != e.reservedStakingRewards &&
                        Object.hasOwnProperty.call(
                          e,
                          "reservedStakingRewards",
                        ) &&
                        t.uint32(80).int64(e.reservedStakingRewards),
                      null != e.unreservedStakingRewardBalance &&
                        Object.hasOwnProperty.call(
                          e,
                          "unreservedStakingRewardBalance",
                        ) &&
                        t.uint32(88).int64(e.unreservedStakingRewardBalance),
                      null != e.rewardBalanceThreshold &&
                        Object.hasOwnProperty.call(
                          e,
                          "rewardBalanceThreshold",
                        ) &&
                        t.uint32(96).int64(e.rewardBalanceThreshold),
                      null != e.maxStakeRewarded &&
                        Object.hasOwnProperty.call(e, "maxStakeRewarded") &&
                        t.uint32(104).int64(e.maxStakeRewarded),
                      null != e.maxTotalReward &&
                        Object.hasOwnProperty.call(e, "maxTotalReward") &&
                        t.uint32(112).int64(e.maxTotalReward),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NodeStakeUpdateTransactionBody();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.endOfStakingPeriod = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          ((n.nodeStake && n.nodeStake.length) ||
                            (n.nodeStake = []),
                            n.nodeStake.push(
                              i.proto.NodeStake.decode(e, e.uint32()),
                            ));
                          break;
                        case 3:
                          n.maxStakingRewardRatePerHbar = e.int64();
                          break;
                        case 4:
                          n.nodeRewardFeeFraction = i.proto.Fraction.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.stakingPeriodsStored = e.int64();
                          break;
                        case 6:
                          n.stakingPeriod = e.int64();
                          break;
                        case 7:
                          n.stakingRewardFeeFraction = i.proto.Fraction.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 8:
                          n.stakingStartThreshold = e.int64();
                          break;
                        case 9:
                          n.stakingRewardRate = e.int64();
                          break;
                        case 10:
                          n.reservedStakingRewards = e.int64();
                          break;
                        case 11:
                          n.unreservedStakingRewardBalance = e.int64();
                          break;
                        case 12:
                          n.rewardBalanceThreshold = e.int64();
                          break;
                        case 13:
                          n.maxStakeRewarded = e.int64();
                          break;
                        case 14:
                          n.maxTotalReward = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NodeStakeUpdateTransactionBody"
                    );
                  }),
                  e
                );
              })()),
              (e.NodeStake = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.maxStake = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.minStake = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.nodeId = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.rewardRate = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stake = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.stakeNotRewarded = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.stakeRewarded = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.maxStake &&
                        Object.hasOwnProperty.call(e, "maxStake") &&
                        t.uint32(8).int64(e.maxStake),
                      null != e.minStake &&
                        Object.hasOwnProperty.call(e, "minStake") &&
                        t.uint32(16).int64(e.minStake),
                      null != e.nodeId &&
                        Object.hasOwnProperty.call(e, "nodeId") &&
                        t.uint32(24).int64(e.nodeId),
                      null != e.rewardRate &&
                        Object.hasOwnProperty.call(e, "rewardRate") &&
                        t.uint32(32).int64(e.rewardRate),
                      null != e.stake &&
                        Object.hasOwnProperty.call(e, "stake") &&
                        t.uint32(40).int64(e.stake),
                      null != e.stakeNotRewarded &&
                        Object.hasOwnProperty.call(e, "stakeNotRewarded") &&
                        t.uint32(48).int64(e.stakeNotRewarded),
                      null != e.stakeRewarded &&
                        Object.hasOwnProperty.call(e, "stakeRewarded") &&
                        t.uint32(56).int64(e.stakeRewarded),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NodeStake();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.maxStake = e.int64();
                          break;
                        case 2:
                          n.minStake = e.int64();
                          break;
                        case 3:
                          n.nodeId = e.int64();
                          break;
                        case 4:
                          n.rewardRate = e.int64();
                          break;
                        case 5:
                          n.stake = e.int64();
                          break;
                        case 6:
                          n.stakeNotRewarded = e.int64();
                          break;
                        case 7:
                          n.stakeRewarded = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NodeStake"
                    );
                  }),
                  e
                );
              })()),
              (e.ResponseHeader = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nodeTransactionPrecheckCode = 0),
                  (e.prototype.responseType = 0),
                  (e.prototype.cost = l.Long ? l.Long.fromBits(0, 0, !0) : 0),
                  (e.prototype.stateProof = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.nodeTransactionPrecheckCode &&
                        Object.hasOwnProperty.call(
                          e,
                          "nodeTransactionPrecheckCode",
                        ) &&
                        t.uint32(8).int32(e.nodeTransactionPrecheckCode),
                      null != e.responseType &&
                        Object.hasOwnProperty.call(e, "responseType") &&
                        t.uint32(16).int32(e.responseType),
                      null != e.cost &&
                        Object.hasOwnProperty.call(e, "cost") &&
                        t.uint32(24).uint64(e.cost),
                      null != e.stateProof &&
                        Object.hasOwnProperty.call(e, "stateProof") &&
                        t.uint32(34).bytes(e.stateProof),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ResponseHeader();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.nodeTransactionPrecheckCode = e.int32();
                          break;
                        case 2:
                          n.responseType = e.int32();
                          break;
                        case 3:
                          n.cost = e.uint64();
                          break;
                        case 4:
                          n.stateProof = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ResponseHeader"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nodeTransactionPrecheckCode = 0),
                  (e.prototype.cost = l.Long ? l.Long.fromBits(0, 0, !0) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.nodeTransactionPrecheckCode &&
                        Object.hasOwnProperty.call(
                          e,
                          "nodeTransactionPrecheckCode",
                        ) &&
                        t.uint32(8).int32(e.nodeTransactionPrecheckCode),
                      null != e.cost &&
                        Object.hasOwnProperty.call(e, "cost") &&
                        t.uint32(16).uint64(e.cost),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.nodeTransactionPrecheckCode = e.int32();
                          break;
                        case 2:
                          n.cost = e.uint64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.ResponseCodeEnum = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "OK")] = 0),
                  (t[(e[1] = "INVALID_TRANSACTION")] = 1),
                  (t[(e[2] = "PAYER_ACCOUNT_NOT_FOUND")] = 2),
                  (t[(e[3] = "INVALID_NODE_ACCOUNT")] = 3),
                  (t[(e[4] = "TRANSACTION_EXPIRED")] = 4),
                  (t[(e[5] = "INVALID_TRANSACTION_START")] = 5),
                  (t[(e[6] = "INVALID_TRANSACTION_DURATION")] = 6),
                  (t[(e[7] = "INVALID_SIGNATURE")] = 7),
                  (t[(e[8] = "MEMO_TOO_LONG")] = 8),
                  (t[(e[9] = "INSUFFICIENT_TX_FEE")] = 9),
                  (t[(e[10] = "INSUFFICIENT_PAYER_BALANCE")] = 10),
                  (t[(e[11] = "DUPLICATE_TRANSACTION")] = 11),
                  (t[(e[12] = "BUSY")] = 12),
                  (t[(e[13] = "NOT_SUPPORTED")] = 13),
                  (t[(e[14] = "INVALID_FILE_ID")] = 14),
                  (t[(e[15] = "INVALID_ACCOUNT_ID")] = 15),
                  (t[(e[16] = "INVALID_CONTRACT_ID")] = 16),
                  (t[(e[17] = "INVALID_TRANSACTION_ID")] = 17),
                  (t[(e[18] = "RECEIPT_NOT_FOUND")] = 18),
                  (t[(e[19] = "RECORD_NOT_FOUND")] = 19),
                  (t[(e[20] = "INVALID_SOLIDITY_ID")] = 20),
                  (t[(e[21] = "UNKNOWN")] = 21),
                  (t[(e[22] = "SUCCESS")] = 22),
                  (t[(e[23] = "FAIL_INVALID")] = 23),
                  (t[(e[24] = "FAIL_FEE")] = 24),
                  (t[(e[25] = "FAIL_BALANCE")] = 25),
                  (t[(e[26] = "KEY_REQUIRED")] = 26),
                  (t[(e[27] = "BAD_ENCODING")] = 27),
                  (t[(e[28] = "INSUFFICIENT_ACCOUNT_BALANCE")] = 28),
                  (t[(e[29] = "INVALID_SOLIDITY_ADDRESS")] = 29),
                  (t[(e[30] = "INSUFFICIENT_GAS")] = 30),
                  (t[(e[31] = "CONTRACT_SIZE_LIMIT_EXCEEDED")] = 31),
                  (t[(e[32] = "LOCAL_CALL_MODIFICATION_EXCEPTION")] = 32),
                  (t[(e[33] = "CONTRACT_REVERT_EXECUTED")] = 33),
                  (t[(e[34] = "CONTRACT_EXECUTION_EXCEPTION")] = 34),
                  (t[(e[35] = "INVALID_RECEIVING_NODE_ACCOUNT")] = 35),
                  (t[(e[36] = "MISSING_QUERY_HEADER")] = 36),
                  (t[(e[37] = "ACCOUNT_UPDATE_FAILED")] = 37),
                  (t[(e[38] = "INVALID_KEY_ENCODING")] = 38),
                  (t[(e[39] = "NULL_SOLIDITY_ADDRESS")] = 39),
                  (t[(e[40] = "CONTRACT_UPDATE_FAILED")] = 40),
                  (t[(e[41] = "INVALID_QUERY_HEADER")] = 41),
                  (t[(e[42] = "INVALID_FEE_SUBMITTED")] = 42),
                  (t[(e[43] = "INVALID_PAYER_SIGNATURE")] = 43),
                  (t[(e[44] = "KEY_NOT_PROVIDED")] = 44),
                  (t[(e[45] = "INVALID_EXPIRATION_TIME")] = 45),
                  (t[(e[46] = "NO_WACL_KEY")] = 46),
                  (t[(e[47] = "FILE_CONTENT_EMPTY")] = 47),
                  (t[(e[48] = "INVALID_ACCOUNT_AMOUNTS")] = 48),
                  (t[(e[49] = "EMPTY_TRANSACTION_BODY")] = 49),
                  (t[(e[50] = "INVALID_TRANSACTION_BODY")] = 50),
                  (t[(e[51] = "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY")] = 51),
                  (t[(e[52] = "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY")] = 52),
                  (t[(e[53] = "EMPTY_LIVE_HASH_BODY")] = 53),
                  (t[(e[54] = "EMPTY_LIVE_HASH")] = 54),
                  (t[(e[55] = "EMPTY_LIVE_HASH_KEYS")] = 55),
                  (t[(e[56] = "INVALID_LIVE_HASH_SIZE")] = 56),
                  (t[(e[57] = "EMPTY_QUERY_BODY")] = 57),
                  (t[(e[58] = "EMPTY_LIVE_HASH_QUERY")] = 58),
                  (t[(e[59] = "LIVE_HASH_NOT_FOUND")] = 59),
                  (t[(e[60] = "ACCOUNT_ID_DOES_NOT_EXIST")] = 60),
                  (t[(e[61] = "LIVE_HASH_ALREADY_EXISTS")] = 61),
                  (t[(e[62] = "INVALID_FILE_WACL")] = 62),
                  (t[(e[63] = "SERIALIZATION_FAILED")] = 63),
                  (t[(e[64] = "TRANSACTION_OVERSIZE")] = 64),
                  (t[(e[65] = "TRANSACTION_TOO_MANY_LAYERS")] = 65),
                  (t[(e[66] = "CONTRACT_DELETED")] = 66),
                  (t[(e[67] = "PLATFORM_NOT_ACTIVE")] = 67),
                  (t[(e[68] = "KEY_PREFIX_MISMATCH")] = 68),
                  (t[(e[69] = "PLATFORM_TRANSACTION_NOT_CREATED")] = 69),
                  (t[(e[70] = "INVALID_RENEWAL_PERIOD")] = 70),
                  (t[(e[71] = "INVALID_PAYER_ACCOUNT_ID")] = 71),
                  (t[(e[72] = "ACCOUNT_DELETED")] = 72),
                  (t[(e[73] = "FILE_DELETED")] = 73),
                  (t[(e[74] = "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS")] = 74),
                  (t[(e[75] = "SETTING_NEGATIVE_ACCOUNT_BALANCE")] = 75),
                  (t[(e[76] = "OBTAINER_REQUIRED")] = 76),
                  (t[(e[77] = "OBTAINER_SAME_CONTRACT_ID")] = 77),
                  (t[(e[78] = "OBTAINER_DOES_NOT_EXIST")] = 78),
                  (t[(e[79] = "MODIFYING_IMMUTABLE_CONTRACT")] = 79),
                  (t[(e[80] = "FILE_SYSTEM_EXCEPTION")] = 80),
                  (t[(e[81] = "AUTORENEW_DURATION_NOT_IN_RANGE")] = 81),
                  (t[(e[82] = "ERROR_DECODING_BYTESTRING")] = 82),
                  (t[(e[83] = "CONTRACT_FILE_EMPTY")] = 83),
                  (t[(e[84] = "CONTRACT_BYTECODE_EMPTY")] = 84),
                  (t[(e[85] = "INVALID_INITIAL_BALANCE")] = 85),
                  (t[(e[86] = "INVALID_RECEIVE_RECORD_THRESHOLD")] = 86),
                  (t[(e[87] = "INVALID_SEND_RECORD_THRESHOLD")] = 87),
                  (t[(e[88] = "ACCOUNT_IS_NOT_GENESIS_ACCOUNT")] = 88),
                  (t[(e[89] = "PAYER_ACCOUNT_UNAUTHORIZED")] = 89),
                  (t[(e[90] = "INVALID_FREEZE_TRANSACTION_BODY")] = 90),
                  (t[(e[91] = "FREEZE_TRANSACTION_BODY_NOT_FOUND")] = 91),
                  (t[(e[92] = "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED")] = 92),
                  (t[(e[93] = "RESULT_SIZE_LIMIT_EXCEEDED")] = 93),
                  (t[(e[94] = "NOT_SPECIAL_ACCOUNT")] = 94),
                  (t[(e[95] = "CONTRACT_NEGATIVE_GAS")] = 95),
                  (t[(e[96] = "CONTRACT_NEGATIVE_VALUE")] = 96),
                  (t[(e[97] = "INVALID_FEE_FILE")] = 97),
                  (t[(e[98] = "INVALID_EXCHANGE_RATE_FILE")] = 98),
                  (t[(e[99] = "INSUFFICIENT_LOCAL_CALL_GAS")] = 99),
                  (t[(e[100] = "ENTITY_NOT_ALLOWED_TO_DELETE")] = 100),
                  (t[(e[101] = "AUTHORIZATION_FAILED")] = 101),
                  (t[(e[102] = "FILE_UPLOADED_PROTO_INVALID")] = 102),
                  (t[(e[103] = "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK")] = 103),
                  (t[(e[104] = "FEE_SCHEDULE_FILE_PART_UPLOADED")] = 104),
                  (t[(e[105] = "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED")] = 105),
                  (t[(e[106] = "MAX_CONTRACT_STORAGE_EXCEEDED")] = 106),
                  (t[(e[107] = "TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT")] =
                    107),
                  (t[(e[108] = "TOTAL_LEDGER_BALANCE_INVALID")] = 108),
                  (t[(e[110] = "EXPIRATION_REDUCTION_NOT_ALLOWED")] = 110),
                  (t[(e[111] = "MAX_GAS_LIMIT_EXCEEDED")] = 111),
                  (t[(e[112] = "MAX_FILE_SIZE_EXCEEDED")] = 112),
                  (t[(e[113] = "RECEIVER_SIG_REQUIRED")] = 113),
                  (t[(e[150] = "INVALID_TOPIC_ID")] = 150),
                  (t[(e[155] = "INVALID_ADMIN_KEY")] = 155),
                  (t[(e[156] = "INVALID_SUBMIT_KEY")] = 156),
                  (t[(e[157] = "UNAUTHORIZED")] = 157),
                  (t[(e[158] = "INVALID_TOPIC_MESSAGE")] = 158),
                  (t[(e[159] = "INVALID_AUTORENEW_ACCOUNT")] = 159),
                  (t[(e[160] = "AUTORENEW_ACCOUNT_NOT_ALLOWED")] = 160),
                  (t[(e[162] = "TOPIC_EXPIRED")] = 162),
                  (t[(e[163] = "INVALID_CHUNK_NUMBER")] = 163),
                  (t[(e[164] = "INVALID_CHUNK_TRANSACTION_ID")] = 164),
                  (t[(e[165] = "ACCOUNT_FROZEN_FOR_TOKEN")] = 165),
                  (t[(e[166] = "TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED")] = 166),
                  (t[(e[167] = "INVALID_TOKEN_ID")] = 167),
                  (t[(e[168] = "INVALID_TOKEN_DECIMALS")] = 168),
                  (t[(e[169] = "INVALID_TOKEN_INITIAL_SUPPLY")] = 169),
                  (t[(e[170] = "INVALID_TREASURY_ACCOUNT_FOR_TOKEN")] = 170),
                  (t[(e[171] = "INVALID_TOKEN_SYMBOL")] = 171),
                  (t[(e[172] = "TOKEN_HAS_NO_FREEZE_KEY")] = 172),
                  (t[(e[173] = "TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN")] = 173),
                  (t[(e[174] = "MISSING_TOKEN_SYMBOL")] = 174),
                  (t[(e[175] = "TOKEN_SYMBOL_TOO_LONG")] = 175),
                  (t[(e[176] = "ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN")] = 176),
                  (t[(e[177] = "TOKEN_HAS_NO_KYC_KEY")] = 177),
                  (t[(e[178] = "INSUFFICIENT_TOKEN_BALANCE")] = 178),
                  (t[(e[179] = "TOKEN_WAS_DELETED")] = 179),
                  (t[(e[180] = "TOKEN_HAS_NO_SUPPLY_KEY")] = 180),
                  (t[(e[181] = "TOKEN_HAS_NO_WIPE_KEY")] = 181),
                  (t[(e[182] = "INVALID_TOKEN_MINT_AMOUNT")] = 182),
                  (t[(e[183] = "INVALID_TOKEN_BURN_AMOUNT")] = 183),
                  (t[(e[184] = "TOKEN_NOT_ASSOCIATED_TO_ACCOUNT")] = 184),
                  (t[(e[185] = "CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT")] = 185),
                  (t[(e[186] = "INVALID_KYC_KEY")] = 186),
                  (t[(e[187] = "INVALID_WIPE_KEY")] = 187),
                  (t[(e[188] = "INVALID_FREEZE_KEY")] = 188),
                  (t[(e[189] = "INVALID_SUPPLY_KEY")] = 189),
                  (t[(e[190] = "MISSING_TOKEN_NAME")] = 190),
                  (t[(e[191] = "TOKEN_NAME_TOO_LONG")] = 191),
                  (t[(e[192] = "INVALID_WIPING_AMOUNT")] = 192),
                  (t[(e[193] = "TOKEN_IS_IMMUTABLE")] = 193),
                  (t[(e[194] = "TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT")] = 194),
                  (t[(e[195] = "TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES")] =
                    195),
                  (t[(e[196] = "ACCOUNT_IS_TREASURY")] = 196),
                  (t[(e[197] = "TOKEN_ID_REPEATED_IN_TOKEN_LIST")] = 197),
                  (t[(e[198] = "TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED")] =
                    198),
                  (t[(e[199] = "EMPTY_TOKEN_TRANSFER_BODY")] = 199),
                  (t[(e[200] = "EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS")] = 200),
                  (t[(e[201] = "INVALID_SCHEDULE_ID")] = 201),
                  (t[(e[202] = "SCHEDULE_IS_IMMUTABLE")] = 202),
                  (t[(e[203] = "INVALID_SCHEDULE_PAYER_ID")] = 203),
                  (t[(e[204] = "INVALID_SCHEDULE_ACCOUNT_ID")] = 204),
                  (t[(e[205] = "NO_NEW_VALID_SIGNATURES")] = 205),
                  (t[(e[206] = "UNRESOLVABLE_REQUIRED_SIGNERS")] = 206),
                  (t[(e[207] = "SCHEDULED_TRANSACTION_NOT_IN_WHITELIST")] =
                    207),
                  (t[(e[208] = "SOME_SIGNATURES_WERE_INVALID")] = 208),
                  (t[(e[209] = "TRANSACTION_ID_FIELD_NOT_ALLOWED")] = 209),
                  (t[(e[210] = "IDENTICAL_SCHEDULE_ALREADY_CREATED")] = 210),
                  (t[(e[211] = "INVALID_ZERO_BYTE_IN_STRING")] = 211),
                  (t[(e[212] = "SCHEDULE_ALREADY_DELETED")] = 212),
                  (t[(e[213] = "SCHEDULE_ALREADY_EXECUTED")] = 213),
                  (t[(e[214] = "MESSAGE_SIZE_TOO_LARGE")] = 214),
                  (t[(e[215] = "OPERATION_REPEATED_IN_BUCKET_GROUPS")] = 215),
                  (t[(e[216] = "BUCKET_CAPACITY_OVERFLOW")] = 216),
                  (t[(e[217] = "NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION")] =
                    217),
                  (t[(e[218] = "BUCKET_HAS_NO_THROTTLE_GROUPS")] = 218),
                  (t[(e[219] = "THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC")] = 219),
                  (t[(e[220] = "SUCCESS_BUT_MISSING_EXPECTED_OPERATION")] =
                    220),
                  (t[(e[221] = "UNPARSEABLE_THROTTLE_DEFINITIONS")] = 221),
                  (t[(e[222] = "INVALID_THROTTLE_DEFINITIONS")] = 222),
                  (t[(e[223] = "ACCOUNT_EXPIRED_AND_PENDING_REMOVAL")] = 223),
                  (t[(e[224] = "INVALID_TOKEN_MAX_SUPPLY")] = 224),
                  (t[(e[225] = "INVALID_TOKEN_NFT_SERIAL_NUMBER")] = 225),
                  (t[(e[226] = "INVALID_NFT_ID")] = 226),
                  (t[(e[227] = "METADATA_TOO_LONG")] = 227),
                  (t[(e[228] = "BATCH_SIZE_LIMIT_EXCEEDED")] = 228),
                  (t[(e[229] = "INVALID_QUERY_RANGE")] = 229),
                  (t[(e[230] = "FRACTION_DIVIDES_BY_ZERO")] = 230),
                  (t[(e[231] = "INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE")] =
                    231),
                  (t[(e[232] = "CUSTOM_FEES_LIST_TOO_LONG")] = 232),
                  (t[(e[233] = "INVALID_CUSTOM_FEE_COLLECTOR")] = 233),
                  (t[(e[234] = "INVALID_TOKEN_ID_IN_CUSTOM_FEES")] = 234),
                  (t[(e[235] = "TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR")] = 235),
                  (t[(e[236] = "TOKEN_MAX_SUPPLY_REACHED")] = 236),
                  (t[(e[237] = "SENDER_DOES_NOT_OWN_NFT_SERIAL_NO")] = 237),
                  (t[(e[238] = "CUSTOM_FEE_NOT_FULLY_SPECIFIED")] = 238),
                  (t[(e[239] = "CUSTOM_FEE_MUST_BE_POSITIVE")] = 239),
                  (t[(e[240] = "TOKEN_HAS_NO_FEE_SCHEDULE_KEY")] = 240),
                  (t[(e[241] = "CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE")] = 241),
                  (t[(e[242] = "ROYALTY_FRACTION_CANNOT_EXCEED_ONE")] = 242),
                  (t[
                    (e[243] = "FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT")
                  ] = 243),
                  (t[(e[244] = "CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES")] = 244),
                  (t[
                    (e[245] = "CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON")
                  ] = 245),
                  (t[
                    (e[246] =
                      "CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON")
                  ] = 246),
                  (t[(e[247] = "INVALID_CUSTOM_FEE_SCHEDULE_KEY")] = 247),
                  (t[(e[248] = "INVALID_TOKEN_MINT_METADATA")] = 248),
                  (t[(e[249] = "INVALID_TOKEN_BURN_METADATA")] = 249),
                  (t[(e[250] = "CURRENT_TREASURY_STILL_OWNS_NFTS")] = 250),
                  (t[(e[251] = "ACCOUNT_STILL_OWNS_NFTS")] = 251),
                  (t[(e[252] = "TREASURY_MUST_OWN_BURNED_NFT")] = 252),
                  (t[(e[253] = "ACCOUNT_DOES_NOT_OWN_WIPED_NFT")] = 253),
                  (t[
                    (e[254] =
                      "ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON")
                  ] = 254),
                  (t[(e[255] = "MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED")] =
                    255),
                  (t[(e[256] = "PAYER_ACCOUNT_DELETED")] = 256),
                  (t[
                    (e[257] =
                      "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH")
                  ] = 257),
                  (t[
                    (e[258] =
                      "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS")
                  ] = 258),
                  (t[
                    (e[259] =
                      "INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE")
                  ] = 259),
                  (t[(e[260] = "SERIAL_NUMBER_LIMIT_REACHED")] = 260),
                  (t[
                    (e[261] =
                      "CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE")
                  ] = 261),
                  (t[(e[262] = "NO_REMAINING_AUTOMATIC_ASSOCIATIONS")] = 262),
                  (t[
                    (e[263] =
                      "EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT")
                  ] = 263),
                  (t[
                    (e[264] =
                      "REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT")
                  ] = 264),
                  (t[(e[265] = "TOKEN_IS_PAUSED")] = 265),
                  (t[(e[266] = "TOKEN_HAS_NO_PAUSE_KEY")] = 266),
                  (t[(e[267] = "INVALID_PAUSE_KEY")] = 267),
                  (t[(e[268] = "FREEZE_UPDATE_FILE_DOES_NOT_EXIST")] = 268),
                  (t[(e[269] = "FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH")] =
                    269),
                  (t[(e[270] = "NO_UPGRADE_HAS_BEEN_PREPARED")] = 270),
                  (t[(e[271] = "NO_FREEZE_IS_SCHEDULED")] = 271),
                  (t[
                    (e[272] = "UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE")
                  ] = 272),
                  (t[(e[273] = "FREEZE_START_TIME_MUST_BE_FUTURE")] = 273),
                  (t[(e[274] = "PREPARED_UPDATE_FILE_IS_IMMUTABLE")] = 274),
                  (t[(e[275] = "FREEZE_ALREADY_SCHEDULED")] = 275),
                  (t[(e[276] = "FREEZE_UPGRADE_IN_PROGRESS")] = 276),
                  (t[(e[277] = "UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED")] =
                    277),
                  (t[(e[278] = "UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED")] =
                    278),
                  (t[(e[279] = "CONSENSUS_GAS_EXHAUSTED")] = 279),
                  (t[(e[280] = "REVERTED_SUCCESS")] = 280),
                  (t[(e[281] = "MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED")] =
                    281),
                  (t[(e[282] = "INVALID_ALIAS_KEY")] = 282),
                  (t[(e[283] = "UNEXPECTED_TOKEN_DECIMALS")] = 283),
                  (t[(e[284] = "INVALID_PROXY_ACCOUNT_ID")] = 284),
                  (t[(e[285] = "INVALID_TRANSFER_ACCOUNT_ID")] = 285),
                  (t[(e[286] = "INVALID_FEE_COLLECTOR_ACCOUNT_ID")] = 286),
                  (t[(e[287] = "ALIAS_IS_IMMUTABLE")] = 287),
                  (t[(e[288] = "SPENDER_ACCOUNT_SAME_AS_OWNER")] = 288),
                  (t[(e[289] = "AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY")] = 289),
                  (t[(e[290] = "NEGATIVE_ALLOWANCE_AMOUNT")] = 290),
                  (t[(e[291] = "CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON")] =
                    291),
                  (t[(e[292] = "SPENDER_DOES_NOT_HAVE_ALLOWANCE")] = 292),
                  (t[(e[293] = "AMOUNT_EXCEEDS_ALLOWANCE")] = 293),
                  (t[(e[294] = "MAX_ALLOWANCES_EXCEEDED")] = 294),
                  (t[(e[295] = "EMPTY_ALLOWANCES")] = 295),
                  (t[(e[296] = "SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES")] =
                    296),
                  (t[(e[297] = "REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES")] =
                    297),
                  (t[(e[298] = "FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES")] = 298),
                  (t[(e[299] = "NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES")] = 299),
                  (t[(e[300] = "INVALID_ALLOWANCE_OWNER_ID")] = 300),
                  (t[(e[301] = "INVALID_ALLOWANCE_SPENDER_ID")] = 301),
                  (t[(e[302] = "REPEATED_ALLOWANCES_TO_DELETE")] = 302),
                  (t[(e[303] = "INVALID_DELEGATING_SPENDER")] = 303),
                  (t[
                    (e[304] = "DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL")
                  ] = 304),
                  (t[
                    (e[305] =
                      "DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL")
                  ] = 305),
                  (t[(e[306] = "SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE")] =
                    306),
                  (t[
                    (e[307] =
                      "SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME")
                  ] = 307),
                  (t[(e[308] = "SCHEDULE_FUTURE_THROTTLE_EXCEEDED")] = 308),
                  (t[(e[309] = "SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED")] = 309),
                  (t[(e[310] = "INVALID_ETHEREUM_TRANSACTION")] = 310),
                  (t[(e[311] = "WRONG_CHAIN_ID")] = 311),
                  (t[(e[312] = "WRONG_NONCE")] = 312),
                  (t[(e[313] = "ACCESS_LIST_UNSUPPORTED")] = 313),
                  (t[(e[314] = "SCHEDULE_PENDING_EXPIRATION")] = 314),
                  (t[(e[315] = "CONTRACT_IS_TOKEN_TREASURY")] = 315),
                  (t[(e[316] = "CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES")] = 316),
                  (t[(e[317] = "CONTRACT_EXPIRED_AND_PENDING_REMOVAL")] = 317),
                  (t[(e[318] = "CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT")] = 318),
                  (t[
                    (e[319] = "PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION")
                  ] = 319),
                  (t[(e[320] = "PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED")] = 320),
                  (t[(e[321] = "SELF_STAKING_IS_NOT_ALLOWED")] = 321),
                  (t[(e[322] = "INVALID_STAKING_ID")] = 322),
                  (t[(e[323] = "STAKING_NOT_ENABLED")] = 323),
                  (t[(e[324] = "INVALID_PRNG_RANGE")] = 324),
                  (t[
                    (e[325] = "MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED")
                  ] = 325),
                  (t[
                    (e[326] = "INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE")
                  ] = 326),
                  (t[(e[327] = "INSUFFICIENT_BALANCES_FOR_STORAGE_RENT")] =
                    327),
                  (t[(e[328] = "MAX_CHILD_RECORDS_EXCEEDED")] = 328),
                  (t[(e[329] = "INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES")] =
                    329),
                  (t[(e[330] = "TRANSACTION_HAS_UNKNOWN_FIELDS")] = 330),
                  (t[(e[331] = "ACCOUNT_IS_IMMUTABLE")] = 331),
                  (t[(e[332] = "ALIAS_ALREADY_ASSIGNED")] = 332),
                  t
                );
              })()),
              (e.ConsensusTopicInfo = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.memo = ""),
                  (e.prototype.runningHash = l.newBuffer([])),
                  (e.prototype.sequenceNumber = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.expirationTime = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.submitKey = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.autoRenewAccount = null),
                  (e.prototype.ledgerId = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(10).string(e.memo),
                      null != e.runningHash &&
                        Object.hasOwnProperty.call(e, "runningHash") &&
                        t.uint32(18).bytes(e.runningHash),
                      null != e.sequenceNumber &&
                        Object.hasOwnProperty.call(e, "sequenceNumber") &&
                        t.uint32(24).uint64(e.sequenceNumber),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.submitKey &&
                        Object.hasOwnProperty.call(e, "submitKey") &&
                        i.proto.Key.encode(
                          e.submitKey,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.autoRenewAccount &&
                        Object.hasOwnProperty.call(e, "autoRenewAccount") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccount,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.ledgerId &&
                        Object.hasOwnProperty.call(e, "ledgerId") &&
                        t.uint32(74).bytes(e.ledgerId),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ConsensusTopicInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.memo = e.string();
                          break;
                        case 2:
                          n.runningHash = e.bytes();
                          break;
                        case 3:
                          n.sequenceNumber = e.uint64();
                          break;
                        case 4:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 6:
                          n.submitKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 7:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 8:
                          n.autoRenewAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 9:
                          n.ledgerId = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ConsensusTopicInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.ConsensusService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.createTopic = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "createTopic" },
                  ),
                  Object.defineProperty(
                    (e.prototype.updateTopic = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "updateTopic" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteTopic = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteTopic" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTopicInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTopicInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.submitMessage = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "submitMessage" },
                  ),
                  e
                );
              })()),
              (e.Query = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.getByKey = null),
                  (e.prototype.getBySolidityID = null),
                  (e.prototype.contractCallLocal = null),
                  (e.prototype.contractGetInfo = null),
                  (e.prototype.contractGetBytecode = null),
                  (e.prototype.ContractGetRecords = null),
                  (e.prototype.cryptogetAccountBalance = null),
                  (e.prototype.cryptoGetAccountRecords = null),
                  (e.prototype.cryptoGetInfo = null),
                  (e.prototype.cryptoGetLiveHash = null),
                  (e.prototype.cryptoGetProxyStakers = null),
                  (e.prototype.fileGetContents = null),
                  (e.prototype.fileGetInfo = null),
                  (e.prototype.transactionGetReceipt = null),
                  (e.prototype.transactionGetRecord = null),
                  (e.prototype.transactionGetFastRecord = null),
                  (e.prototype.consensusGetTopicInfo = null),
                  (e.prototype.networkGetVersionInfo = null),
                  (e.prototype.tokenGetInfo = null),
                  (e.prototype.scheduleGetInfo = null),
                  (e.prototype.tokenGetAccountNftInfos = null),
                  (e.prototype.tokenGetNftInfo = null),
                  (e.prototype.tokenGetNftInfos = null),
                  (e.prototype.networkGetExecutionTime = null),
                  (e.prototype.accountDetails = null),
                  Object.defineProperty(e.prototype, "query", {
                    get: l.oneOfGetter(
                      (t = [
                        "getByKey",
                        "getBySolidityID",
                        "contractCallLocal",
                        "contractGetInfo",
                        "contractGetBytecode",
                        "ContractGetRecords",
                        "cryptogetAccountBalance",
                        "cryptoGetAccountRecords",
                        "cryptoGetInfo",
                        "cryptoGetLiveHash",
                        "cryptoGetProxyStakers",
                        "fileGetContents",
                        "fileGetInfo",
                        "transactionGetReceipt",
                        "transactionGetRecord",
                        "transactionGetFastRecord",
                        "consensusGetTopicInfo",
                        "networkGetVersionInfo",
                        "tokenGetInfo",
                        "scheduleGetInfo",
                        "tokenGetAccountNftInfos",
                        "tokenGetNftInfo",
                        "tokenGetNftInfos",
                        "networkGetExecutionTime",
                        "accountDetails",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.getByKey &&
                        Object.hasOwnProperty.call(e, "getByKey") &&
                        i.proto.GetByKeyQuery.encode(
                          e.getByKey,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.getBySolidityID &&
                        Object.hasOwnProperty.call(e, "getBySolidityID") &&
                        i.proto.GetBySolidityIDQuery.encode(
                          e.getBySolidityID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.contractCallLocal &&
                        Object.hasOwnProperty.call(e, "contractCallLocal") &&
                        i.proto.ContractCallLocalQuery.encode(
                          e.contractCallLocal,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contractGetInfo &&
                        Object.hasOwnProperty.call(e, "contractGetInfo") &&
                        i.proto.ContractGetInfoQuery.encode(
                          e.contractGetInfo,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.contractGetBytecode &&
                        Object.hasOwnProperty.call(e, "contractGetBytecode") &&
                        i.proto.ContractGetBytecodeQuery.encode(
                          e.contractGetBytecode,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.ContractGetRecords &&
                        Object.hasOwnProperty.call(e, "ContractGetRecords") &&
                        i.proto.ContractGetRecordsQuery.encode(
                          e.ContractGetRecords,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.cryptogetAccountBalance &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptogetAccountBalance",
                        ) &&
                        i.proto.CryptoGetAccountBalanceQuery.encode(
                          e.cryptogetAccountBalance,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.cryptoGetAccountRecords &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoGetAccountRecords",
                        ) &&
                        i.proto.CryptoGetAccountRecordsQuery.encode(
                          e.cryptoGetAccountRecords,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.cryptoGetInfo &&
                        Object.hasOwnProperty.call(e, "cryptoGetInfo") &&
                        i.proto.CryptoGetInfoQuery.encode(
                          e.cryptoGetInfo,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.cryptoGetLiveHash &&
                        Object.hasOwnProperty.call(e, "cryptoGetLiveHash") &&
                        i.proto.CryptoGetLiveHashQuery.encode(
                          e.cryptoGetLiveHash,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.cryptoGetProxyStakers &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoGetProxyStakers",
                        ) &&
                        i.proto.CryptoGetStakersQuery.encode(
                          e.cryptoGetProxyStakers,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.fileGetContents &&
                        Object.hasOwnProperty.call(e, "fileGetContents") &&
                        i.proto.FileGetContentsQuery.encode(
                          e.fileGetContents,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.fileGetInfo &&
                        Object.hasOwnProperty.call(e, "fileGetInfo") &&
                        i.proto.FileGetInfoQuery.encode(
                          e.fileGetInfo,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.transactionGetReceipt &&
                        Object.hasOwnProperty.call(
                          e,
                          "transactionGetReceipt",
                        ) &&
                        i.proto.TransactionGetReceiptQuery.encode(
                          e.transactionGetReceipt,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.transactionGetRecord &&
                        Object.hasOwnProperty.call(e, "transactionGetRecord") &&
                        i.proto.TransactionGetRecordQuery.encode(
                          e.transactionGetRecord,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.transactionGetFastRecord &&
                        Object.hasOwnProperty.call(
                          e,
                          "transactionGetFastRecord",
                        ) &&
                        i.proto.TransactionGetFastRecordQuery.encode(
                          e.transactionGetFastRecord,
                          t.uint32(130).fork(),
                        ).ldelim(),
                      null != e.consensusGetTopicInfo &&
                        Object.hasOwnProperty.call(
                          e,
                          "consensusGetTopicInfo",
                        ) &&
                        i.proto.ConsensusGetTopicInfoQuery.encode(
                          e.consensusGetTopicInfo,
                          t.uint32(402).fork(),
                        ).ldelim(),
                      null != e.networkGetVersionInfo &&
                        Object.hasOwnProperty.call(
                          e,
                          "networkGetVersionInfo",
                        ) &&
                        i.proto.NetworkGetVersionInfoQuery.encode(
                          e.networkGetVersionInfo,
                          t.uint32(410).fork(),
                        ).ldelim(),
                      null != e.tokenGetInfo &&
                        Object.hasOwnProperty.call(e, "tokenGetInfo") &&
                        i.proto.TokenGetInfoQuery.encode(
                          e.tokenGetInfo,
                          t.uint32(418).fork(),
                        ).ldelim(),
                      null != e.scheduleGetInfo &&
                        Object.hasOwnProperty.call(e, "scheduleGetInfo") &&
                        i.proto.ScheduleGetInfoQuery.encode(
                          e.scheduleGetInfo,
                          t.uint32(426).fork(),
                        ).ldelim(),
                      null != e.tokenGetAccountNftInfos &&
                        Object.hasOwnProperty.call(
                          e,
                          "tokenGetAccountNftInfos",
                        ) &&
                        i.proto.TokenGetAccountNftInfosQuery.encode(
                          e.tokenGetAccountNftInfos,
                          t.uint32(434).fork(),
                        ).ldelim(),
                      null != e.tokenGetNftInfo &&
                        Object.hasOwnProperty.call(e, "tokenGetNftInfo") &&
                        i.proto.TokenGetNftInfoQuery.encode(
                          e.tokenGetNftInfo,
                          t.uint32(442).fork(),
                        ).ldelim(),
                      null != e.tokenGetNftInfos &&
                        Object.hasOwnProperty.call(e, "tokenGetNftInfos") &&
                        i.proto.TokenGetNftInfosQuery.encode(
                          e.tokenGetNftInfos,
                          t.uint32(450).fork(),
                        ).ldelim(),
                      null != e.networkGetExecutionTime &&
                        Object.hasOwnProperty.call(
                          e,
                          "networkGetExecutionTime",
                        ) &&
                        i.proto.NetworkGetExecutionTimeQuery.encode(
                          e.networkGetExecutionTime,
                          t.uint32(458).fork(),
                        ).ldelim(),
                      null != e.accountDetails &&
                        Object.hasOwnProperty.call(e, "accountDetails") &&
                        i.proto.GetAccountDetailsQuery.encode(
                          e.accountDetails,
                          t.uint32(466).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Query();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.getByKey = i.proto.GetByKeyQuery.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.getBySolidityID =
                            i.proto.GetBySolidityIDQuery.decode(e, e.uint32());
                          break;
                        case 3:
                          n.contractCallLocal =
                            i.proto.ContractCallLocalQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 4:
                          n.contractGetInfo =
                            i.proto.ContractGetInfoQuery.decode(e, e.uint32());
                          break;
                        case 5:
                          n.contractGetBytecode =
                            i.proto.ContractGetBytecodeQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 6:
                          n.ContractGetRecords =
                            i.proto.ContractGetRecordsQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 7:
                          n.cryptogetAccountBalance =
                            i.proto.CryptoGetAccountBalanceQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 8:
                          n.cryptoGetAccountRecords =
                            i.proto.CryptoGetAccountRecordsQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 9:
                          n.cryptoGetInfo = i.proto.CryptoGetInfoQuery.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 10:
                          n.cryptoGetLiveHash =
                            i.proto.CryptoGetLiveHashQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 11:
                          n.cryptoGetProxyStakers =
                            i.proto.CryptoGetStakersQuery.decode(e, e.uint32());
                          break;
                        case 12:
                          n.fileGetContents =
                            i.proto.FileGetContentsQuery.decode(e, e.uint32());
                          break;
                        case 13:
                          n.fileGetInfo = i.proto.FileGetInfoQuery.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 14:
                          n.transactionGetReceipt =
                            i.proto.TransactionGetReceiptQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 15:
                          n.transactionGetRecord =
                            i.proto.TransactionGetRecordQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 16:
                          n.transactionGetFastRecord =
                            i.proto.TransactionGetFastRecordQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 50:
                          n.consensusGetTopicInfo =
                            i.proto.ConsensusGetTopicInfoQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 51:
                          n.networkGetVersionInfo =
                            i.proto.NetworkGetVersionInfoQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 52:
                          n.tokenGetInfo = i.proto.TokenGetInfoQuery.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 53:
                          n.scheduleGetInfo =
                            i.proto.ScheduleGetInfoQuery.decode(e, e.uint32());
                          break;
                        case 54:
                          n.tokenGetAccountNftInfos =
                            i.proto.TokenGetAccountNftInfosQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 55:
                          n.tokenGetNftInfo =
                            i.proto.TokenGetNftInfoQuery.decode(e, e.uint32());
                          break;
                        case 56:
                          n.tokenGetNftInfos =
                            i.proto.TokenGetNftInfosQuery.decode(e, e.uint32());
                          break;
                        case 57:
                          n.networkGetExecutionTime =
                            i.proto.NetworkGetExecutionTimeQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 58:
                          n.accountDetails =
                            i.proto.GetAccountDetailsQuery.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Query"
                    );
                  }),
                  e
                );
              })()),
              (e.GetByKeyQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.key = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.key &&
                        Object.hasOwnProperty.call(e, "key") &&
                        i.proto.Key.encode(e.key, t.uint32(18).fork()).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GetByKeyQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.key = i.proto.Key.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GetByKeyQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.EntityID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.accountID = null),
                  (e.prototype.liveHash = null),
                  (e.prototype.fileID = null),
                  (e.prototype.contractID = null),
                  Object.defineProperty(e.prototype, "entity", {
                    get: l.oneOfGetter(
                      (t = ["accountID", "liveHash", "fileID", "contractID"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.liveHash &&
                        Object.hasOwnProperty.call(e, "liveHash") &&
                        i.proto.LiveHash.encode(
                          e.liveHash,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.EntityID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.liveHash = i.proto.LiveHash.decode(e, e.uint32());
                          break;
                        case 3:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 4:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.EntityID"
                    );
                  }),
                  e
                );
              })()),
              (e.GetByKeyResponse = (function () {
                function e(e) {
                  if (((this.entities = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.entities = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.entities && e.entities.length)
                    )
                      for (var o = 0; o < e.entities.length; ++o)
                        i.proto.EntityID.encode(
                          e.entities[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GetByKeyResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          ((n.entities && n.entities.length) ||
                            (n.entities = []),
                            n.entities.push(
                              i.proto.EntityID.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GetByKeyResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.GetBySolidityIDQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.solidityID = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.solidityID &&
                        Object.hasOwnProperty.call(e, "solidityID") &&
                        t.uint32(18).string(e.solidityID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GetBySolidityIDQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.solidityID = e.string();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GetBySolidityIDQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.GetBySolidityIDResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.prototype.fileID = null),
                  (e.prototype.contractID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GetBySolidityIDResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 4:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GetBySolidityIDResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractLoginfo = (function () {
                function e(e) {
                  if (((this.topic = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractID = null),
                  (e.prototype.bloom = l.newBuffer([])),
                  (e.prototype.topic = l.emptyArray),
                  (e.prototype.data = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.bloom &&
                        Object.hasOwnProperty.call(e, "bloom") &&
                        t.uint32(18).bytes(e.bloom),
                      null != e.topic && e.topic.length)
                    )
                      for (var o = 0; o < e.topic.length; ++o)
                        t.uint32(26).bytes(e.topic[o]);
                    return (
                      null != e.data &&
                        Object.hasOwnProperty.call(e, "data") &&
                        t.uint32(34).bytes(e.data),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractLoginfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.bloom = e.bytes();
                          break;
                        case 3:
                          ((n.topic && n.topic.length) || (n.topic = []),
                            n.topic.push(e.bytes()));
                          break;
                        case 4:
                          n.data = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractLoginfo"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractFunctionResult = (function () {
                function e(e) {
                  if (
                    ((this.logInfo = []),
                    (this.createdContractIDs = []),
                    (this.contractNonces = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractID = null),
                  (e.prototype.contractCallResult = l.newBuffer([])),
                  (e.prototype.errorMessage = ""),
                  (e.prototype.bloom = l.newBuffer([])),
                  (e.prototype.gasUsed = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.logInfo = l.emptyArray),
                  (e.prototype.createdContractIDs = l.emptyArray),
                  (e.prototype.evmAddress = null),
                  (e.prototype.gas = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.functionParameters = l.newBuffer([])),
                  (e.prototype.senderId = null),
                  (e.prototype.contractNonces = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractCallResult &&
                        Object.hasOwnProperty.call(e, "contractCallResult") &&
                        t.uint32(18).bytes(e.contractCallResult),
                      null != e.errorMessage &&
                        Object.hasOwnProperty.call(e, "errorMessage") &&
                        t.uint32(26).string(e.errorMessage),
                      null != e.bloom &&
                        Object.hasOwnProperty.call(e, "bloom") &&
                        t.uint32(34).bytes(e.bloom),
                      null != e.gasUsed &&
                        Object.hasOwnProperty.call(e, "gasUsed") &&
                        t.uint32(40).uint64(e.gasUsed),
                      null != e.logInfo && e.logInfo.length)
                    )
                      for (var o = 0; o < e.logInfo.length; ++o)
                        i.proto.ContractLoginfo.encode(
                          e.logInfo[o],
                          t.uint32(50).fork(),
                        ).ldelim();
                    if (
                      null != e.createdContractIDs &&
                      e.createdContractIDs.length
                    )
                      for (o = 0; o < e.createdContractIDs.length; ++o)
                        i.proto.ContractID.encode(
                          e.createdContractIDs[o],
                          t.uint32(58).fork(),
                        ).ldelim();
                    if (
                      (null != e.evmAddress &&
                        Object.hasOwnProperty.call(e, "evmAddress") &&
                        i.google.protobuf.BytesValue.encode(
                          e.evmAddress,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.gas &&
                        Object.hasOwnProperty.call(e, "gas") &&
                        t.uint32(80).int64(e.gas),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(88).int64(e.amount),
                      null != e.functionParameters &&
                        Object.hasOwnProperty.call(e, "functionParameters") &&
                        t.uint32(98).bytes(e.functionParameters),
                      null != e.senderId &&
                        Object.hasOwnProperty.call(e, "senderId") &&
                        i.proto.AccountID.encode(
                          e.senderId,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.contractNonces && e.contractNonces.length)
                    )
                      for (o = 0; o < e.contractNonces.length; ++o)
                        i.proto.ContractNonceInfo.encode(
                          e.contractNonces[o],
                          t.uint32(114).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractFunctionResult();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.contractCallResult = e.bytes();
                          break;
                        case 3:
                          n.errorMessage = e.string();
                          break;
                        case 4:
                          n.bloom = e.bytes();
                          break;
                        case 5:
                          n.gasUsed = e.uint64();
                          break;
                        case 6:
                          ((n.logInfo && n.logInfo.length) || (n.logInfo = []),
                            n.logInfo.push(
                              i.proto.ContractLoginfo.decode(e, e.uint32()),
                            ));
                          break;
                        case 7:
                          ((n.createdContractIDs &&
                            n.createdContractIDs.length) ||
                            (n.createdContractIDs = []),
                            n.createdContractIDs.push(
                              i.proto.ContractID.decode(e, e.uint32()),
                            ));
                          break;
                        case 9:
                          n.evmAddress = i.google.protobuf.BytesValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 10:
                          n.gas = e.int64();
                          break;
                        case 11:
                          n.amount = e.int64();
                          break;
                        case 12:
                          n.functionParameters = e.bytes();
                          break;
                        case 13:
                          n.senderId = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 14:
                          ((n.contractNonces && n.contractNonces.length) ||
                            (n.contractNonces = []),
                            n.contractNonces.push(
                              i.proto.ContractNonceInfo.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractFunctionResult"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractCallLocalQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.contractID = null),
                  (e.prototype.gas = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.functionParameters = l.newBuffer([])),
                  (e.prototype.maxResultSize = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.senderId = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.gas &&
                        Object.hasOwnProperty.call(e, "gas") &&
                        t.uint32(24).int64(e.gas),
                      null != e.functionParameters &&
                        Object.hasOwnProperty.call(e, "functionParameters") &&
                        t.uint32(34).bytes(e.functionParameters),
                      null != e.maxResultSize &&
                        Object.hasOwnProperty.call(e, "maxResultSize") &&
                        t.uint32(40).int64(e.maxResultSize),
                      null != e.senderId &&
                        Object.hasOwnProperty.call(e, "senderId") &&
                        i.proto.AccountID.encode(
                          e.senderId,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractCallLocalQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.gas = e.int64();
                          break;
                        case 4:
                          n.functionParameters = e.bytes();
                          break;
                        case 5:
                          n.maxResultSize = e.int64();
                          break;
                        case 6:
                          n.senderId = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractCallLocalQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractCallLocalResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.functionResult = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.functionResult &&
                        Object.hasOwnProperty.call(e, "functionResult") &&
                        i.proto.ContractFunctionResult.encode(
                          e.functionResult,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractCallLocalResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.functionResult =
                            i.proto.ContractFunctionResult.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractCallLocalResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractNonceInfo = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractId = null),
                  (e.prototype.nonce = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contractId &&
                        Object.hasOwnProperty.call(e, "contractId") &&
                        i.proto.ContractID.encode(
                          e.contractId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nonce &&
                        Object.hasOwnProperty.call(e, "nonce") &&
                        t.uint32(16).int64(e.nonce),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractNonceInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractId = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.nonce = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractNonceInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractGetInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.contractID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractGetInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractGetInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractGetInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.contractInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractInfo &&
                        Object.hasOwnProperty.call(e, "contractInfo") &&
                        i.proto.ContractGetInfoResponse.ContractInfo.encode(
                          e.contractInfo,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractGetInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.contractInfo =
                            i.proto.ContractGetInfoResponse.ContractInfo.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractGetInfoResponse"
                    );
                  }),
                  (e.ContractInfo = (function () {
                    function e(e) {
                      if (((this.tokenRelationships = []), e))
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.contractID = null),
                      (e.prototype.accountID = null),
                      (e.prototype.contractAccountID = ""),
                      (e.prototype.adminKey = null),
                      (e.prototype.expirationTime = null),
                      (e.prototype.autoRenewPeriod = null),
                      (e.prototype.storage = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.memo = ""),
                      (e.prototype.balance = l.Long
                        ? l.Long.fromBits(0, 0, !0)
                        : 0),
                      (e.prototype.deleted = !1),
                      (e.prototype.tokenRelationships = l.emptyArray),
                      (e.prototype.ledgerId = l.newBuffer([])),
                      (e.prototype.autoRenewAccountId = null),
                      (e.prototype.maxAutomaticTokenAssociations = 0),
                      (e.prototype.stakingInfo = null),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        if (
                          (t || (t = a.create()),
                          null != e.contractID &&
                            Object.hasOwnProperty.call(e, "contractID") &&
                            i.proto.ContractID.encode(
                              e.contractID,
                              t.uint32(10).fork(),
                            ).ldelim(),
                          null != e.accountID &&
                            Object.hasOwnProperty.call(e, "accountID") &&
                            i.proto.AccountID.encode(
                              e.accountID,
                              t.uint32(18).fork(),
                            ).ldelim(),
                          null != e.contractAccountID &&
                            Object.hasOwnProperty.call(
                              e,
                              "contractAccountID",
                            ) &&
                            t.uint32(26).string(e.contractAccountID),
                          null != e.adminKey &&
                            Object.hasOwnProperty.call(e, "adminKey") &&
                            i.proto.Key.encode(
                              e.adminKey,
                              t.uint32(34).fork(),
                            ).ldelim(),
                          null != e.expirationTime &&
                            Object.hasOwnProperty.call(e, "expirationTime") &&
                            i.proto.Timestamp.encode(
                              e.expirationTime,
                              t.uint32(42).fork(),
                            ).ldelim(),
                          null != e.autoRenewPeriod &&
                            Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                            i.proto.Duration.encode(
                              e.autoRenewPeriod,
                              t.uint32(50).fork(),
                            ).ldelim(),
                          null != e.storage &&
                            Object.hasOwnProperty.call(e, "storage") &&
                            t.uint32(56).int64(e.storage),
                          null != e.memo &&
                            Object.hasOwnProperty.call(e, "memo") &&
                            t.uint32(66).string(e.memo),
                          null != e.balance &&
                            Object.hasOwnProperty.call(e, "balance") &&
                            t.uint32(72).uint64(e.balance),
                          null != e.deleted &&
                            Object.hasOwnProperty.call(e, "deleted") &&
                            t.uint32(80).bool(e.deleted),
                          null != e.tokenRelationships &&
                            e.tokenRelationships.length)
                        )
                          for (var o = 0; o < e.tokenRelationships.length; ++o)
                            i.proto.TokenRelationship.encode(
                              e.tokenRelationships[o],
                              t.uint32(90).fork(),
                            ).ldelim();
                        return (
                          null != e.ledgerId &&
                            Object.hasOwnProperty.call(e, "ledgerId") &&
                            t.uint32(98).bytes(e.ledgerId),
                          null != e.autoRenewAccountId &&
                            Object.hasOwnProperty.call(
                              e,
                              "autoRenewAccountId",
                            ) &&
                            i.proto.AccountID.encode(
                              e.autoRenewAccountId,
                              t.uint32(106).fork(),
                            ).ldelim(),
                          null != e.maxAutomaticTokenAssociations &&
                            Object.hasOwnProperty.call(
                              e,
                              "maxAutomaticTokenAssociations",
                            ) &&
                            t
                              .uint32(112)
                              .int32(e.maxAutomaticTokenAssociations),
                          null != e.stakingInfo &&
                            Object.hasOwnProperty.call(e, "stakingInfo") &&
                            i.proto.StakingInfo.encode(
                              e.stakingInfo,
                              t.uint32(122).fork(),
                            ).ldelim(),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n =
                            new i.proto.ContractGetInfoResponse.ContractInfo();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.contractID = i.proto.ContractID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 2:
                              n.accountID = i.proto.AccountID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 3:
                              n.contractAccountID = e.string();
                              break;
                            case 4:
                              n.adminKey = i.proto.Key.decode(e, e.uint32());
                              break;
                            case 5:
                              n.expirationTime = i.proto.Timestamp.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 6:
                              n.autoRenewPeriod = i.proto.Duration.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 7:
                              n.storage = e.int64();
                              break;
                            case 8:
                              n.memo = e.string();
                              break;
                            case 9:
                              n.balance = e.uint64();
                              break;
                            case 10:
                              n.deleted = e.bool();
                              break;
                            case 11:
                              ((n.tokenRelationships &&
                                n.tokenRelationships.length) ||
                                (n.tokenRelationships = []),
                                n.tokenRelationships.push(
                                  i.proto.TokenRelationship.decode(
                                    e,
                                    e.uint32(),
                                  ),
                                ));
                              break;
                            case 12:
                              n.ledgerId = e.bytes();
                              break;
                            case 13:
                              n.autoRenewAccountId = i.proto.AccountID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 14:
                              n.maxAutomaticTokenAssociations = e.int32();
                              break;
                            case 15:
                              n.stakingInfo = i.proto.StakingInfo.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/proto.ContractGetInfoResponse.ContractInfo"
                        );
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              (e.ContractGetBytecodeQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.contractID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractGetBytecodeQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractGetBytecodeQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractGetBytecodeResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.bytecode = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.bytecode &&
                        Object.hasOwnProperty.call(e, "bytecode") &&
                        t.uint32(50).bytes(e.bytecode),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractGetBytecodeResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.bytecode = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractGetBytecodeResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractGetRecordsQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.contractID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractGetRecordsQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractGetRecordsQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractGetRecordsResponse = (function () {
                function e(e) {
                  if (((this.records = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.contractID = null),
                  (e.prototype.records = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.records && e.records.length)
                    )
                      for (var o = 0; o < e.records.length; ++o)
                        i.proto.TransactionRecord.encode(
                          e.records[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractGetRecordsResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          ((n.records && n.records.length) || (n.records = []),
                            n.records.push(
                              i.proto.TransactionRecord.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractGetRecordsResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionRecord = (function () {
                function e(e) {
                  if (
                    ((this.tokenTransferLists = []),
                    (this.assessedCustomFees = []),
                    (this.automaticTokenAssociations = []),
                    (this.paidStakingRewards = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.receipt = null),
                  (e.prototype.transactionHash = l.newBuffer([])),
                  (e.prototype.consensusTimestamp = null),
                  (e.prototype.transactionID = null),
                  (e.prototype.memo = ""),
                  (e.prototype.transactionFee = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.contractCallResult = null),
                  (e.prototype.contractCreateResult = null),
                  (e.prototype.transferList = null),
                  (e.prototype.tokenTransferLists = l.emptyArray),
                  (e.prototype.scheduleRef = null),
                  (e.prototype.assessedCustomFees = l.emptyArray),
                  (e.prototype.automaticTokenAssociations = l.emptyArray),
                  (e.prototype.parentConsensusTimestamp = null),
                  (e.prototype.alias = l.newBuffer([])),
                  (e.prototype.ethereumHash = l.newBuffer([])),
                  (e.prototype.paidStakingRewards = l.emptyArray),
                  (e.prototype.prngBytes = null),
                  (e.prototype.prngNumber = null),
                  (e.prototype.evmAddress = l.newBuffer([])),
                  Object.defineProperty(e.prototype, "body", {
                    get: l.oneOfGetter(
                      (t = ["contractCallResult", "contractCreateResult"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  Object.defineProperty(e.prototype, "entropy", {
                    get: l.oneOfGetter((t = ["prngBytes", "prngNumber"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.receipt &&
                        Object.hasOwnProperty.call(e, "receipt") &&
                        i.proto.TransactionReceipt.encode(
                          e.receipt,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionHash &&
                        Object.hasOwnProperty.call(e, "transactionHash") &&
                        t.uint32(18).bytes(e.transactionHash),
                      null != e.consensusTimestamp &&
                        Object.hasOwnProperty.call(e, "consensusTimestamp") &&
                        i.proto.Timestamp.encode(
                          e.consensusTimestamp,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.transactionID &&
                        Object.hasOwnProperty.call(e, "transactionID") &&
                        i.proto.TransactionID.encode(
                          e.transactionID,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(42).string(e.memo),
                      null != e.transactionFee &&
                        Object.hasOwnProperty.call(e, "transactionFee") &&
                        t.uint32(48).uint64(e.transactionFee),
                      null != e.contractCallResult &&
                        Object.hasOwnProperty.call(e, "contractCallResult") &&
                        i.proto.ContractFunctionResult.encode(
                          e.contractCallResult,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.contractCreateResult &&
                        Object.hasOwnProperty.call(e, "contractCreateResult") &&
                        i.proto.ContractFunctionResult.encode(
                          e.contractCreateResult,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.transferList &&
                        Object.hasOwnProperty.call(e, "transferList") &&
                        i.proto.TransferList.encode(
                          e.transferList,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.tokenTransferLists &&
                        e.tokenTransferLists.length)
                    )
                      for (var o = 0; o < e.tokenTransferLists.length; ++o)
                        i.proto.TokenTransferList.encode(
                          e.tokenTransferLists[o],
                          t.uint32(90).fork(),
                        ).ldelim();
                    if (
                      (null != e.scheduleRef &&
                        Object.hasOwnProperty.call(e, "scheduleRef") &&
                        i.proto.ScheduleID.encode(
                          e.scheduleRef,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.assessedCustomFees &&
                        e.assessedCustomFees.length)
                    )
                      for (o = 0; o < e.assessedCustomFees.length; ++o)
                        i.proto.AssessedCustomFee.encode(
                          e.assessedCustomFees[o],
                          t.uint32(106).fork(),
                        ).ldelim();
                    if (
                      null != e.automaticTokenAssociations &&
                      e.automaticTokenAssociations.length
                    )
                      for (o = 0; o < e.automaticTokenAssociations.length; ++o)
                        i.proto.TokenAssociation.encode(
                          e.automaticTokenAssociations[o],
                          t.uint32(114).fork(),
                        ).ldelim();
                    if (
                      (null != e.parentConsensusTimestamp &&
                        Object.hasOwnProperty.call(
                          e,
                          "parentConsensusTimestamp",
                        ) &&
                        i.proto.Timestamp.encode(
                          e.parentConsensusTimestamp,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.alias &&
                        Object.hasOwnProperty.call(e, "alias") &&
                        t.uint32(130).bytes(e.alias),
                      null != e.ethereumHash &&
                        Object.hasOwnProperty.call(e, "ethereumHash") &&
                        t.uint32(138).bytes(e.ethereumHash),
                      null != e.paidStakingRewards &&
                        e.paidStakingRewards.length)
                    )
                      for (o = 0; o < e.paidStakingRewards.length; ++o)
                        i.proto.AccountAmount.encode(
                          e.paidStakingRewards[o],
                          t.uint32(146).fork(),
                        ).ldelim();
                    return (
                      null != e.prngBytes &&
                        Object.hasOwnProperty.call(e, "prngBytes") &&
                        t.uint32(154).bytes(e.prngBytes),
                      null != e.prngNumber &&
                        Object.hasOwnProperty.call(e, "prngNumber") &&
                        t.uint32(160).int32(e.prngNumber),
                      null != e.evmAddress &&
                        Object.hasOwnProperty.call(e, "evmAddress") &&
                        t.uint32(170).bytes(e.evmAddress),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionRecord();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.receipt = i.proto.TransactionReceipt.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.transactionHash = e.bytes();
                          break;
                        case 3:
                          n.consensusTimestamp = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.transactionID = i.proto.TransactionID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.memo = e.string();
                          break;
                        case 6:
                          n.transactionFee = e.uint64();
                          break;
                        case 7:
                          n.contractCallResult =
                            i.proto.ContractFunctionResult.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 8:
                          n.contractCreateResult =
                            i.proto.ContractFunctionResult.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 10:
                          n.transferList = i.proto.TransferList.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 11:
                          ((n.tokenTransferLists &&
                            n.tokenTransferLists.length) ||
                            (n.tokenTransferLists = []),
                            n.tokenTransferLists.push(
                              i.proto.TokenTransferList.decode(e, e.uint32()),
                            ));
                          break;
                        case 12:
                          n.scheduleRef = i.proto.ScheduleID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 13:
                          ((n.assessedCustomFees &&
                            n.assessedCustomFees.length) ||
                            (n.assessedCustomFees = []),
                            n.assessedCustomFees.push(
                              i.proto.AssessedCustomFee.decode(e, e.uint32()),
                            ));
                          break;
                        case 14:
                          ((n.automaticTokenAssociations &&
                            n.automaticTokenAssociations.length) ||
                            (n.automaticTokenAssociations = []),
                            n.automaticTokenAssociations.push(
                              i.proto.TokenAssociation.decode(e, e.uint32()),
                            ));
                          break;
                        case 15:
                          n.parentConsensusTimestamp = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 16:
                          n.alias = e.bytes();
                          break;
                        case 17:
                          n.ethereumHash = e.bytes();
                          break;
                        case 18:
                          ((n.paidStakingRewards &&
                            n.paidStakingRewards.length) ||
                            (n.paidStakingRewards = []),
                            n.paidStakingRewards.push(
                              i.proto.AccountAmount.decode(e, e.uint32()),
                            ));
                          break;
                        case 19:
                          n.prngBytes = e.bytes();
                          break;
                        case 20:
                          n.prngNumber = e.int32();
                          break;
                        case 21:
                          n.evmAddress = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionRecord"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionReceipt = (function () {
                function e(e) {
                  if (((this.serialNumbers = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.status = 0),
                  (e.prototype.accountID = null),
                  (e.prototype.fileID = null),
                  (e.prototype.contractID = null),
                  (e.prototype.exchangeRate = null),
                  (e.prototype.topicID = null),
                  (e.prototype.topicSequenceNumber = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.topicRunningHash = l.newBuffer([])),
                  (e.prototype.topicRunningHashVersion = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.tokenID = null),
                  (e.prototype.newTotalSupply = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.scheduleID = null),
                  (e.prototype.scheduledTransactionID = null),
                  (e.prototype.serialNumbers = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.status &&
                        Object.hasOwnProperty.call(e, "status") &&
                        t.uint32(8).int32(e.status),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.exchangeRate &&
                        Object.hasOwnProperty.call(e, "exchangeRate") &&
                        i.proto.ExchangeRateSet.encode(
                          e.exchangeRate,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.topicID &&
                        Object.hasOwnProperty.call(e, "topicID") &&
                        i.proto.TopicID.encode(
                          e.topicID,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.topicSequenceNumber &&
                        Object.hasOwnProperty.call(e, "topicSequenceNumber") &&
                        t.uint32(56).uint64(e.topicSequenceNumber),
                      null != e.topicRunningHash &&
                        Object.hasOwnProperty.call(e, "topicRunningHash") &&
                        t.uint32(66).bytes(e.topicRunningHash),
                      null != e.topicRunningHashVersion &&
                        Object.hasOwnProperty.call(
                          e,
                          "topicRunningHashVersion",
                        ) &&
                        t.uint32(72).uint64(e.topicRunningHashVersion),
                      null != e.tokenID &&
                        Object.hasOwnProperty.call(e, "tokenID") &&
                        i.proto.TokenID.encode(
                          e.tokenID,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.newTotalSupply &&
                        Object.hasOwnProperty.call(e, "newTotalSupply") &&
                        t.uint32(88).uint64(e.newTotalSupply),
                      null != e.scheduleID &&
                        Object.hasOwnProperty.call(e, "scheduleID") &&
                        i.proto.ScheduleID.encode(
                          e.scheduleID,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.scheduledTransactionID &&
                        Object.hasOwnProperty.call(
                          e,
                          "scheduledTransactionID",
                        ) &&
                        i.proto.TransactionID.encode(
                          e.scheduledTransactionID,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.serialNumbers && e.serialNumbers.length)
                    ) {
                      t.uint32(114).fork();
                      for (var o = 0; o < e.serialNumbers.length; ++o)
                        t.int64(e.serialNumbers[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionReceipt();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.status = e.int32();
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        case 4:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.exchangeRate = i.proto.ExchangeRateSet.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 6:
                          n.topicID = i.proto.TopicID.decode(e, e.uint32());
                          break;
                        case 7:
                          n.topicSequenceNumber = e.uint64();
                          break;
                        case 8:
                          n.topicRunningHash = e.bytes();
                          break;
                        case 9:
                          n.topicRunningHashVersion = e.uint64();
                          break;
                        case 10:
                          n.tokenID = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 11:
                          n.newTotalSupply = e.uint64();
                          break;
                        case 12:
                          n.scheduleID = i.proto.ScheduleID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 13:
                          n.scheduledTransactionID =
                            i.proto.TransactionID.decode(e, e.uint32());
                          break;
                        case 14:
                          if (
                            ((n.serialNumbers && n.serialNumbers.length) ||
                              (n.serialNumbers = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.serialNumbers.push(e.int64());
                          } else n.serialNumbers.push(e.int64());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionReceipt"
                    );
                  }),
                  e
                );
              })()),
              (e.ExchangeRate = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.hbarEquiv = 0),
                  (e.prototype.centEquiv = 0),
                  (e.prototype.expirationTime = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.hbarEquiv &&
                        Object.hasOwnProperty.call(e, "hbarEquiv") &&
                        t.uint32(8).int32(e.hbarEquiv),
                      null != e.centEquiv &&
                        Object.hasOwnProperty.call(e, "centEquiv") &&
                        t.uint32(16).int32(e.centEquiv),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.TimestampSeconds.encode(
                          e.expirationTime,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ExchangeRate();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.hbarEquiv = e.int32();
                          break;
                        case 2:
                          n.centEquiv = e.int32();
                          break;
                        case 3:
                          n.expirationTime = i.proto.TimestampSeconds.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ExchangeRate"
                    );
                  }),
                  e
                );
              })()),
              (e.ExchangeRateSet = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.currentRate = null),
                  (e.prototype.nextRate = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.currentRate &&
                        Object.hasOwnProperty.call(e, "currentRate") &&
                        i.proto.ExchangeRate.encode(
                          e.currentRate,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nextRate &&
                        Object.hasOwnProperty.call(e, "nextRate") &&
                        i.proto.ExchangeRate.encode(
                          e.nextRate,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ExchangeRateSet();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.currentRate = i.proto.ExchangeRate.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.nextRate = i.proto.ExchangeRate.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ExchangeRateSet"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetAccountBalanceQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.prototype.contractID = null),
                  Object.defineProperty(e.prototype, "balanceSource", {
                    get: l.oneOfGetter((t = ["accountID", "contractID"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.contractID &&
                        Object.hasOwnProperty.call(e, "contractID") &&
                        i.proto.ContractID.encode(
                          e.contractID,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetAccountBalanceQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.contractID = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetAccountBalanceQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetAccountBalanceResponse = (function () {
                function e(e) {
                  if (((this.tokenBalances = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.prototype.balance = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.tokenBalances = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.balance &&
                        Object.hasOwnProperty.call(e, "balance") &&
                        t.uint32(24).uint64(e.balance),
                      null != e.tokenBalances && e.tokenBalances.length)
                    )
                      for (var o = 0; o < e.tokenBalances.length; ++o)
                        i.proto.TokenBalance.encode(
                          e.tokenBalances[o],
                          t.uint32(34).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetAccountBalanceResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.balance = e.uint64();
                          break;
                        case 4:
                          ((n.tokenBalances && n.tokenBalances.length) ||
                            (n.tokenBalances = []),
                            n.tokenBalances.push(
                              i.proto.TokenBalance.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetAccountBalanceResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetAccountRecordsQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetAccountRecordsQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetAccountRecordsQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetAccountRecordsResponse = (function () {
                function e(e) {
                  if (((this.records = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.prototype.records = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.records && e.records.length)
                    )
                      for (var o = 0; o < e.records.length; ++o)
                        i.proto.TransactionRecord.encode(
                          e.records[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetAccountRecordsResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          ((n.records && n.records.length) || (n.records = []),
                            n.records.push(
                              i.proto.TransactionRecord.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetAccountRecordsResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountInfo &&
                        Object.hasOwnProperty.call(e, "accountInfo") &&
                        i.proto.CryptoGetInfoResponse.AccountInfo.encode(
                          e.accountInfo,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.accountInfo =
                            i.proto.CryptoGetInfoResponse.AccountInfo.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetInfoResponse"
                    );
                  }),
                  (e.AccountInfo = (function () {
                    function e(e) {
                      if (
                        ((this.liveHashes = []),
                        (this.tokenRelationships = []),
                        e)
                      )
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.accountID = null),
                      (e.prototype.contractAccountID = ""),
                      (e.prototype.deleted = !1),
                      (e.prototype.proxyAccountID = null),
                      (e.prototype.proxyReceived = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.key = null),
                      (e.prototype.balance = l.Long
                        ? l.Long.fromBits(0, 0, !0)
                        : 0),
                      (e.prototype.generateSendRecordThreshold = l.Long
                        ? l.Long.fromBits(0, 0, !0)
                        : 0),
                      (e.prototype.generateReceiveRecordThreshold = l.Long
                        ? l.Long.fromBits(0, 0, !0)
                        : 0),
                      (e.prototype.receiverSigRequired = !1),
                      (e.prototype.expirationTime = null),
                      (e.prototype.autoRenewPeriod = null),
                      (e.prototype.liveHashes = l.emptyArray),
                      (e.prototype.tokenRelationships = l.emptyArray),
                      (e.prototype.memo = ""),
                      (e.prototype.ownedNfts = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.maxAutomaticTokenAssociations = 0),
                      (e.prototype.alias = l.newBuffer([])),
                      (e.prototype.ledgerId = l.newBuffer([])),
                      (e.prototype.ethereumNonce = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.stakingInfo = null),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        if (
                          (t || (t = a.create()),
                          null != e.accountID &&
                            Object.hasOwnProperty.call(e, "accountID") &&
                            i.proto.AccountID.encode(
                              e.accountID,
                              t.uint32(10).fork(),
                            ).ldelim(),
                          null != e.contractAccountID &&
                            Object.hasOwnProperty.call(
                              e,
                              "contractAccountID",
                            ) &&
                            t.uint32(18).string(e.contractAccountID),
                          null != e.deleted &&
                            Object.hasOwnProperty.call(e, "deleted") &&
                            t.uint32(24).bool(e.deleted),
                          null != e.proxyAccountID &&
                            Object.hasOwnProperty.call(e, "proxyAccountID") &&
                            i.proto.AccountID.encode(
                              e.proxyAccountID,
                              t.uint32(34).fork(),
                            ).ldelim(),
                          null != e.proxyReceived &&
                            Object.hasOwnProperty.call(e, "proxyReceived") &&
                            t.uint32(48).int64(e.proxyReceived),
                          null != e.key &&
                            Object.hasOwnProperty.call(e, "key") &&
                            i.proto.Key.encode(
                              e.key,
                              t.uint32(58).fork(),
                            ).ldelim(),
                          null != e.balance &&
                            Object.hasOwnProperty.call(e, "balance") &&
                            t.uint32(64).uint64(e.balance),
                          null != e.generateSendRecordThreshold &&
                            Object.hasOwnProperty.call(
                              e,
                              "generateSendRecordThreshold",
                            ) &&
                            t.uint32(72).uint64(e.generateSendRecordThreshold),
                          null != e.generateReceiveRecordThreshold &&
                            Object.hasOwnProperty.call(
                              e,
                              "generateReceiveRecordThreshold",
                            ) &&
                            t
                              .uint32(80)
                              .uint64(e.generateReceiveRecordThreshold),
                          null != e.receiverSigRequired &&
                            Object.hasOwnProperty.call(
                              e,
                              "receiverSigRequired",
                            ) &&
                            t.uint32(88).bool(e.receiverSigRequired),
                          null != e.expirationTime &&
                            Object.hasOwnProperty.call(e, "expirationTime") &&
                            i.proto.Timestamp.encode(
                              e.expirationTime,
                              t.uint32(98).fork(),
                            ).ldelim(),
                          null != e.autoRenewPeriod &&
                            Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                            i.proto.Duration.encode(
                              e.autoRenewPeriod,
                              t.uint32(106).fork(),
                            ).ldelim(),
                          null != e.liveHashes && e.liveHashes.length)
                        )
                          for (var o = 0; o < e.liveHashes.length; ++o)
                            i.proto.LiveHash.encode(
                              e.liveHashes[o],
                              t.uint32(114).fork(),
                            ).ldelim();
                        if (
                          null != e.tokenRelationships &&
                          e.tokenRelationships.length
                        )
                          for (o = 0; o < e.tokenRelationships.length; ++o)
                            i.proto.TokenRelationship.encode(
                              e.tokenRelationships[o],
                              t.uint32(122).fork(),
                            ).ldelim();
                        return (
                          null != e.memo &&
                            Object.hasOwnProperty.call(e, "memo") &&
                            t.uint32(130).string(e.memo),
                          null != e.ownedNfts &&
                            Object.hasOwnProperty.call(e, "ownedNfts") &&
                            t.uint32(136).int64(e.ownedNfts),
                          null != e.maxAutomaticTokenAssociations &&
                            Object.hasOwnProperty.call(
                              e,
                              "maxAutomaticTokenAssociations",
                            ) &&
                            t
                              .uint32(144)
                              .int32(e.maxAutomaticTokenAssociations),
                          null != e.alias &&
                            Object.hasOwnProperty.call(e, "alias") &&
                            t.uint32(154).bytes(e.alias),
                          null != e.ledgerId &&
                            Object.hasOwnProperty.call(e, "ledgerId") &&
                            t.uint32(162).bytes(e.ledgerId),
                          null != e.ethereumNonce &&
                            Object.hasOwnProperty.call(e, "ethereumNonce") &&
                            t.uint32(168).int64(e.ethereumNonce),
                          null != e.stakingInfo &&
                            Object.hasOwnProperty.call(e, "stakingInfo") &&
                            i.proto.StakingInfo.encode(
                              e.stakingInfo,
                              t.uint32(178).fork(),
                            ).ldelim(),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.proto.CryptoGetInfoResponse.AccountInfo();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.accountID = i.proto.AccountID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 2:
                              n.contractAccountID = e.string();
                              break;
                            case 3:
                              n.deleted = e.bool();
                              break;
                            case 4:
                              n.proxyAccountID = i.proto.AccountID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 6:
                              n.proxyReceived = e.int64();
                              break;
                            case 7:
                              n.key = i.proto.Key.decode(e, e.uint32());
                              break;
                            case 8:
                              n.balance = e.uint64();
                              break;
                            case 9:
                              n.generateSendRecordThreshold = e.uint64();
                              break;
                            case 10:
                              n.generateReceiveRecordThreshold = e.uint64();
                              break;
                            case 11:
                              n.receiverSigRequired = e.bool();
                              break;
                            case 12:
                              n.expirationTime = i.proto.Timestamp.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 13:
                              n.autoRenewPeriod = i.proto.Duration.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 14:
                              ((n.liveHashes && n.liveHashes.length) ||
                                (n.liveHashes = []),
                                n.liveHashes.push(
                                  i.proto.LiveHash.decode(e, e.uint32()),
                                ));
                              break;
                            case 15:
                              ((n.tokenRelationships &&
                                n.tokenRelationships.length) ||
                                (n.tokenRelationships = []),
                                n.tokenRelationships.push(
                                  i.proto.TokenRelationship.decode(
                                    e,
                                    e.uint32(),
                                  ),
                                ));
                              break;
                            case 16:
                              n.memo = e.string();
                              break;
                            case 17:
                              n.ownedNfts = e.int64();
                              break;
                            case 18:
                              n.maxAutomaticTokenAssociations = e.int32();
                              break;
                            case 19:
                              n.alias = e.bytes();
                              break;
                            case 20:
                              n.ledgerId = e.bytes();
                              break;
                            case 21:
                              n.ethereumNonce = e.int64();
                              break;
                            case 22:
                              n.stakingInfo = i.proto.StakingInfo.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/proto.CryptoGetInfoResponse.AccountInfo"
                        );
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              (e.CryptoGetLiveHashQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.prototype.hash = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.hash &&
                        Object.hasOwnProperty.call(e, "hash") &&
                        t.uint32(26).bytes(e.hash),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetLiveHashQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.hash = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetLiveHashQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetLiveHashResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.liveHash = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.liveHash &&
                        Object.hasOwnProperty.call(e, "liveHash") &&
                        i.proto.LiveHash.encode(
                          e.liveHash,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetLiveHashResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.liveHash = i.proto.LiveHash.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetLiveHashResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetStakersQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetStakersQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetStakersQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ProxyStaker = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountID = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(16).int64(e.amount),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ProxyStaker();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.amount = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ProxyStaker"
                    );
                  }),
                  e
                );
              })()),
              (e.AllProxyStakers = (function () {
                function e(e) {
                  if (((this.proxyStaker = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountID = null),
                  (e.prototype.proxyStaker = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.proxyStaker && e.proxyStaker.length)
                    )
                      for (var o = 0; o < e.proxyStaker.length; ++o)
                        i.proto.ProxyStaker.encode(
                          e.proxyStaker[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.AllProxyStakers();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          ((n.proxyStaker && n.proxyStaker.length) ||
                            (n.proxyStaker = []),
                            n.proxyStaker.push(
                              i.proto.ProxyStaker.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.AllProxyStakers"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoGetStakersResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.stakers = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.stakers &&
                        Object.hasOwnProperty.call(e, "stakers") &&
                        i.proto.AllProxyStakers.encode(
                          e.stakers,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.CryptoGetStakersResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.stakers = i.proto.AllProxyStakers.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.CryptoGetStakersResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.FileGetContentsQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.fileID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileGetContentsQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileGetContentsQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.FileGetContentsResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.fileContents = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.fileContents &&
                        Object.hasOwnProperty.call(e, "fileContents") &&
                        i.proto.FileGetContentsResponse.FileContents.encode(
                          e.fileContents,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileGetContentsResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.fileContents =
                            i.proto.FileGetContentsResponse.FileContents.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileGetContentsResponse"
                    );
                  }),
                  (e.FileContents = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.fileID = null),
                      (e.prototype.contents = l.newBuffer([])),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.fileID &&
                            Object.hasOwnProperty.call(e, "fileID") &&
                            i.proto.FileID.encode(
                              e.fileID,
                              t.uint32(10).fork(),
                            ).ldelim(),
                          null != e.contents &&
                            Object.hasOwnProperty.call(e, "contents") &&
                            t.uint32(18).bytes(e.contents),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n =
                            new i.proto.FileGetContentsResponse.FileContents();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.fileID = i.proto.FileID.decode(e, e.uint32());
                              break;
                            case 2:
                              n.contents = e.bytes();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/proto.FileGetContentsResponse.FileContents"
                        );
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              (e.FileGetInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.fileID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.fileID &&
                        Object.hasOwnProperty.call(e, "fileID") &&
                        i.proto.FileID.encode(
                          e.fileID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileGetInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.fileID = i.proto.FileID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileGetInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.FileGetInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.fileInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.fileInfo &&
                        Object.hasOwnProperty.call(e, "fileInfo") &&
                        i.proto.FileGetInfoResponse.FileInfo.encode(
                          e.fileInfo,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.FileGetInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.fileInfo =
                            i.proto.FileGetInfoResponse.FileInfo.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.FileGetInfoResponse"
                    );
                  }),
                  (e.FileInfo = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.fileID = null),
                      (e.prototype.size = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.expirationTime = null),
                      (e.prototype.deleted = !1),
                      (e.prototype.keys = null),
                      (e.prototype.memo = ""),
                      (e.prototype.ledgerId = l.newBuffer([])),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.fileID &&
                            Object.hasOwnProperty.call(e, "fileID") &&
                            i.proto.FileID.encode(
                              e.fileID,
                              t.uint32(10).fork(),
                            ).ldelim(),
                          null != e.size &&
                            Object.hasOwnProperty.call(e, "size") &&
                            t.uint32(16).int64(e.size),
                          null != e.expirationTime &&
                            Object.hasOwnProperty.call(e, "expirationTime") &&
                            i.proto.Timestamp.encode(
                              e.expirationTime,
                              t.uint32(26).fork(),
                            ).ldelim(),
                          null != e.deleted &&
                            Object.hasOwnProperty.call(e, "deleted") &&
                            t.uint32(32).bool(e.deleted),
                          null != e.keys &&
                            Object.hasOwnProperty.call(e, "keys") &&
                            i.proto.KeyList.encode(
                              e.keys,
                              t.uint32(42).fork(),
                            ).ldelim(),
                          null != e.memo &&
                            Object.hasOwnProperty.call(e, "memo") &&
                            t.uint32(50).string(e.memo),
                          null != e.ledgerId &&
                            Object.hasOwnProperty.call(e, "ledgerId") &&
                            t.uint32(58).bytes(e.ledgerId),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.proto.FileGetInfoResponse.FileInfo();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.fileID = i.proto.FileID.decode(e, e.uint32());
                              break;
                            case 2:
                              n.size = e.int64();
                              break;
                            case 3:
                              n.expirationTime = i.proto.Timestamp.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 4:
                              n.deleted = e.bool();
                              break;
                            case 5:
                              n.keys = i.proto.KeyList.decode(e, e.uint32());
                              break;
                            case 6:
                              n.memo = e.string();
                              break;
                            case 7:
                              n.ledgerId = e.bytes();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/proto.FileGetInfoResponse.FileInfo"
                        );
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              (e.TransactionGetReceiptQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.transactionID = null),
                  (e.prototype.includeDuplicates = !1),
                  (e.prototype.includeChildReceipts = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionID &&
                        Object.hasOwnProperty.call(e, "transactionID") &&
                        i.proto.TransactionID.encode(
                          e.transactionID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.includeDuplicates &&
                        Object.hasOwnProperty.call(e, "includeDuplicates") &&
                        t.uint32(24).bool(e.includeDuplicates),
                      null != e.includeChildReceipts &&
                        Object.hasOwnProperty.call(e, "includeChildReceipts") &&
                        t.uint32(32).bool(e.includeChildReceipts),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionGetReceiptQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.transactionID = i.proto.TransactionID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.includeDuplicates = e.bool();
                          break;
                        case 4:
                          n.includeChildReceipts = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionGetReceiptQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionGetReceiptResponse = (function () {
                function e(e) {
                  if (
                    ((this.duplicateTransactionReceipts = []),
                    (this.childTransactionReceipts = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.receipt = null),
                  (e.prototype.duplicateTransactionReceipts = l.emptyArray),
                  (e.prototype.childTransactionReceipts = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.receipt &&
                        Object.hasOwnProperty.call(e, "receipt") &&
                        i.proto.TransactionReceipt.encode(
                          e.receipt,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.duplicateTransactionReceipts &&
                        e.duplicateTransactionReceipts.length)
                    )
                      for (
                        var o = 0;
                        o < e.duplicateTransactionReceipts.length;
                        ++o
                      )
                        i.proto.TransactionReceipt.encode(
                          e.duplicateTransactionReceipts[o],
                          t.uint32(34).fork(),
                        ).ldelim();
                    if (
                      null != e.childTransactionReceipts &&
                      e.childTransactionReceipts.length
                    )
                      for (o = 0; o < e.childTransactionReceipts.length; ++o)
                        i.proto.TransactionReceipt.encode(
                          e.childTransactionReceipts[o],
                          t.uint32(42).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionGetReceiptResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.receipt = i.proto.TransactionReceipt.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          ((n.duplicateTransactionReceipts &&
                            n.duplicateTransactionReceipts.length) ||
                            (n.duplicateTransactionReceipts = []),
                            n.duplicateTransactionReceipts.push(
                              i.proto.TransactionReceipt.decode(e, e.uint32()),
                            ));
                          break;
                        case 5:
                          ((n.childTransactionReceipts &&
                            n.childTransactionReceipts.length) ||
                            (n.childTransactionReceipts = []),
                            n.childTransactionReceipts.push(
                              i.proto.TransactionReceipt.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionGetReceiptResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionGetRecordQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.transactionID = null),
                  (e.prototype.includeDuplicates = !1),
                  (e.prototype.includeChildRecords = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionID &&
                        Object.hasOwnProperty.call(e, "transactionID") &&
                        i.proto.TransactionID.encode(
                          e.transactionID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.includeDuplicates &&
                        Object.hasOwnProperty.call(e, "includeDuplicates") &&
                        t.uint32(24).bool(e.includeDuplicates),
                      null != e.includeChildRecords &&
                        Object.hasOwnProperty.call(e, "includeChildRecords") &&
                        t.uint32(32).bool(e.includeChildRecords),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionGetRecordQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.transactionID = i.proto.TransactionID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.includeDuplicates = e.bool();
                          break;
                        case 4:
                          n.includeChildRecords = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionGetRecordQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionGetRecordResponse = (function () {
                function e(e) {
                  if (
                    ((this.duplicateTransactionRecords = []),
                    (this.childTransactionRecords = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.transactionRecord = null),
                  (e.prototype.duplicateTransactionRecords = l.emptyArray),
                  (e.prototype.childTransactionRecords = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionRecord &&
                        Object.hasOwnProperty.call(e, "transactionRecord") &&
                        i.proto.TransactionRecord.encode(
                          e.transactionRecord,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.duplicateTransactionRecords &&
                        e.duplicateTransactionRecords.length)
                    )
                      for (
                        var o = 0;
                        o < e.duplicateTransactionRecords.length;
                        ++o
                      )
                        i.proto.TransactionRecord.encode(
                          e.duplicateTransactionRecords[o],
                          t.uint32(34).fork(),
                        ).ldelim();
                    if (
                      null != e.childTransactionRecords &&
                      e.childTransactionRecords.length
                    )
                      for (o = 0; o < e.childTransactionRecords.length; ++o)
                        i.proto.TransactionRecord.encode(
                          e.childTransactionRecords[o],
                          t.uint32(42).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionGetRecordResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.transactionRecord =
                            i.proto.TransactionRecord.decode(e, e.uint32());
                          break;
                        case 4:
                          ((n.duplicateTransactionRecords &&
                            n.duplicateTransactionRecords.length) ||
                            (n.duplicateTransactionRecords = []),
                            n.duplicateTransactionRecords.push(
                              i.proto.TransactionRecord.decode(e, e.uint32()),
                            ));
                          break;
                        case 5:
                          ((n.childTransactionRecords &&
                            n.childTransactionRecords.length) ||
                            (n.childTransactionRecords = []),
                            n.childTransactionRecords.push(
                              i.proto.TransactionRecord.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionGetRecordResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionGetFastRecordQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.transactionID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionID &&
                        Object.hasOwnProperty.call(e, "transactionID") &&
                        i.proto.TransactionID.encode(
                          e.transactionID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionGetFastRecordQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.transactionID = i.proto.TransactionID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionGetFastRecordQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionGetFastRecordResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.transactionRecord = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionRecord &&
                        Object.hasOwnProperty.call(e, "transactionRecord") &&
                        i.proto.TransactionRecord.encode(
                          e.transactionRecord,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionGetFastRecordResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.transactionRecord =
                            i.proto.TransactionRecord.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionGetFastRecordResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.NetworkGetVersionInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NetworkGetVersionInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NetworkGetVersionInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.NetworkGetVersionInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.hapiProtoVersion = null),
                  (e.prototype.hederaServicesVersion = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.hapiProtoVersion &&
                        Object.hasOwnProperty.call(e, "hapiProtoVersion") &&
                        i.proto.SemanticVersion.encode(
                          e.hapiProtoVersion,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.hederaServicesVersion &&
                        Object.hasOwnProperty.call(
                          e,
                          "hederaServicesVersion",
                        ) &&
                        i.proto.SemanticVersion.encode(
                          e.hederaServicesVersion,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NetworkGetVersionInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.hapiProtoVersion = i.proto.SemanticVersion.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.hederaServicesVersion =
                            i.proto.SemanticVersion.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NetworkGetVersionInfoResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.NetworkGetExecutionTimeQuery = (function () {
                function e(e) {
                  if (((this.transactionIds = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.transactionIds = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.transactionIds && e.transactionIds.length)
                    )
                      for (var o = 0; o < e.transactionIds.length; ++o)
                        i.proto.TransactionID.encode(
                          e.transactionIds[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NetworkGetExecutionTimeQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          ((n.transactionIds && n.transactionIds.length) ||
                            (n.transactionIds = []),
                            n.transactionIds.push(
                              i.proto.TransactionID.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NetworkGetExecutionTimeQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.NetworkGetExecutionTimeResponse = (function () {
                function e(e) {
                  if (((this.executionTimes = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.executionTimes = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.executionTimes && e.executionTimes.length)
                    ) {
                      t.uint32(18).fork();
                      for (var o = 0; o < e.executionTimes.length; ++o)
                        t.uint64(e.executionTimes[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NetworkGetExecutionTimeResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          if (
                            ((n.executionTimes && n.executionTimes.length) ||
                              (n.executionTimes = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.executionTimes.push(e.uint64());
                          } else n.executionTimes.push(e.uint64());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NetworkGetExecutionTimeResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.token = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        i.proto.TokenID.encode(
                          e.token,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.token = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenInfo = (function () {
                function e(e) {
                  if (((this.customFees = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.name = ""),
                  (e.prototype.symbol = ""),
                  (e.prototype.decimals = 0),
                  (e.prototype.totalSupply = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.treasury = null),
                  (e.prototype.adminKey = null),
                  (e.prototype.kycKey = null),
                  (e.prototype.freezeKey = null),
                  (e.prototype.wipeKey = null),
                  (e.prototype.supplyKey = null),
                  (e.prototype.defaultFreezeStatus = 0),
                  (e.prototype.defaultKycStatus = 0),
                  (e.prototype.deleted = !1),
                  (e.prototype.autoRenewAccount = null),
                  (e.prototype.autoRenewPeriod = null),
                  (e.prototype.expiry = null),
                  (e.prototype.memo = ""),
                  (e.prototype.tokenType = 0),
                  (e.prototype.supplyType = 0),
                  (e.prototype.maxSupply = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.feeScheduleKey = null),
                  (e.prototype.customFees = l.emptyArray),
                  (e.prototype.pauseKey = null),
                  (e.prototype.pauseStatus = 0),
                  (e.prototype.ledgerId = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(18).string(e.name),
                      null != e.symbol &&
                        Object.hasOwnProperty.call(e, "symbol") &&
                        t.uint32(26).string(e.symbol),
                      null != e.decimals &&
                        Object.hasOwnProperty.call(e, "decimals") &&
                        t.uint32(32).uint32(e.decimals),
                      null != e.totalSupply &&
                        Object.hasOwnProperty.call(e, "totalSupply") &&
                        t.uint32(40).uint64(e.totalSupply),
                      null != e.treasury &&
                        Object.hasOwnProperty.call(e, "treasury") &&
                        i.proto.AccountID.encode(
                          e.treasury,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.kycKey &&
                        Object.hasOwnProperty.call(e, "kycKey") &&
                        i.proto.Key.encode(
                          e.kycKey,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.freezeKey &&
                        Object.hasOwnProperty.call(e, "freezeKey") &&
                        i.proto.Key.encode(
                          e.freezeKey,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.wipeKey &&
                        Object.hasOwnProperty.call(e, "wipeKey") &&
                        i.proto.Key.encode(
                          e.wipeKey,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.supplyKey &&
                        Object.hasOwnProperty.call(e, "supplyKey") &&
                        i.proto.Key.encode(
                          e.supplyKey,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.defaultFreezeStatus &&
                        Object.hasOwnProperty.call(e, "defaultFreezeStatus") &&
                        t.uint32(96).int32(e.defaultFreezeStatus),
                      null != e.defaultKycStatus &&
                        Object.hasOwnProperty.call(e, "defaultKycStatus") &&
                        t.uint32(104).int32(e.defaultKycStatus),
                      null != e.deleted &&
                        Object.hasOwnProperty.call(e, "deleted") &&
                        t.uint32(112).bool(e.deleted),
                      null != e.autoRenewAccount &&
                        Object.hasOwnProperty.call(e, "autoRenewAccount") &&
                        i.proto.AccountID.encode(
                          e.autoRenewAccount,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.autoRenewPeriod &&
                        Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                        i.proto.Duration.encode(
                          e.autoRenewPeriod,
                          t.uint32(130).fork(),
                        ).ldelim(),
                      null != e.expiry &&
                        Object.hasOwnProperty.call(e, "expiry") &&
                        i.proto.Timestamp.encode(
                          e.expiry,
                          t.uint32(138).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(146).string(e.memo),
                      null != e.tokenType &&
                        Object.hasOwnProperty.call(e, "tokenType") &&
                        t.uint32(152).int32(e.tokenType),
                      null != e.supplyType &&
                        Object.hasOwnProperty.call(e, "supplyType") &&
                        t.uint32(160).int32(e.supplyType),
                      null != e.maxSupply &&
                        Object.hasOwnProperty.call(e, "maxSupply") &&
                        t.uint32(168).int64(e.maxSupply),
                      null != e.feeScheduleKey &&
                        Object.hasOwnProperty.call(e, "feeScheduleKey") &&
                        i.proto.Key.encode(
                          e.feeScheduleKey,
                          t.uint32(178).fork(),
                        ).ldelim(),
                      null != e.customFees && e.customFees.length)
                    )
                      for (var o = 0; o < e.customFees.length; ++o)
                        i.proto.CustomFee.encode(
                          e.customFees[o],
                          t.uint32(186).fork(),
                        ).ldelim();
                    return (
                      null != e.pauseKey &&
                        Object.hasOwnProperty.call(e, "pauseKey") &&
                        i.proto.Key.encode(
                          e.pauseKey,
                          t.uint32(194).fork(),
                        ).ldelim(),
                      null != e.pauseStatus &&
                        Object.hasOwnProperty.call(e, "pauseStatus") &&
                        t.uint32(200).int32(e.pauseStatus),
                      null != e.ledgerId &&
                        Object.hasOwnProperty.call(e, "ledgerId") &&
                        t.uint32(210).bytes(e.ledgerId),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.name = e.string();
                          break;
                        case 3:
                          n.symbol = e.string();
                          break;
                        case 4:
                          n.decimals = e.uint32();
                          break;
                        case 5:
                          n.totalSupply = e.uint64();
                          break;
                        case 6:
                          n.treasury = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 7:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 8:
                          n.kycKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 9:
                          n.freezeKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 10:
                          n.wipeKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 11:
                          n.supplyKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 12:
                          n.defaultFreezeStatus = e.int32();
                          break;
                        case 13:
                          n.defaultKycStatus = e.int32();
                          break;
                        case 14:
                          n.deleted = e.bool();
                          break;
                        case 15:
                          n.autoRenewAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 16:
                          n.autoRenewPeriod = i.proto.Duration.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 17:
                          n.expiry = i.proto.Timestamp.decode(e, e.uint32());
                          break;
                        case 18:
                          n.memo = e.string();
                          break;
                        case 19:
                          n.tokenType = e.int32();
                          break;
                        case 20:
                          n.supplyType = e.int32();
                          break;
                        case 21:
                          n.maxSupply = e.int64();
                          break;
                        case 22:
                          n.feeScheduleKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 23:
                          ((n.customFees && n.customFees.length) ||
                            (n.customFees = []),
                            n.customFees.push(
                              i.proto.CustomFee.decode(e, e.uint32()),
                            ));
                          break;
                        case 24:
                          n.pauseKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 25:
                          n.pauseStatus = e.int32();
                          break;
                        case 26:
                          n.ledgerId = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.tokenInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.tokenInfo &&
                        Object.hasOwnProperty.call(e, "tokenInfo") &&
                        i.proto.TokenInfo.encode(
                          e.tokenInfo,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.tokenInfo = i.proto.TokenInfo.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetInfoResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleGetInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.scheduleID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.scheduleID &&
                        Object.hasOwnProperty.call(e, "scheduleID") &&
                        i.proto.ScheduleID.encode(
                          e.scheduleID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleGetInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.scheduleID = i.proto.ScheduleID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleGetInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleInfo = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.scheduleID = null),
                  (e.prototype.deletionTime = null),
                  (e.prototype.executionTime = null),
                  (e.prototype.expirationTime = null),
                  (e.prototype.scheduledTransactionBody = null),
                  (e.prototype.memo = ""),
                  (e.prototype.adminKey = null),
                  (e.prototype.signers = null),
                  (e.prototype.creatorAccountID = null),
                  (e.prototype.payerAccountID = null),
                  (e.prototype.scheduledTransactionID = null),
                  (e.prototype.ledgerId = l.newBuffer([])),
                  (e.prototype.waitForExpiry = !1),
                  Object.defineProperty(e.prototype, "data", {
                    get: l.oneOfGetter((t = ["deletionTime", "executionTime"])),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.scheduleID &&
                        Object.hasOwnProperty.call(e, "scheduleID") &&
                        i.proto.ScheduleID.encode(
                          e.scheduleID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.deletionTime &&
                        Object.hasOwnProperty.call(e, "deletionTime") &&
                        i.proto.Timestamp.encode(
                          e.deletionTime,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.executionTime &&
                        Object.hasOwnProperty.call(e, "executionTime") &&
                        i.proto.Timestamp.encode(
                          e.executionTime,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.expirationTime &&
                        Object.hasOwnProperty.call(e, "expirationTime") &&
                        i.proto.Timestamp.encode(
                          e.expirationTime,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.scheduledTransactionBody &&
                        Object.hasOwnProperty.call(
                          e,
                          "scheduledTransactionBody",
                        ) &&
                        i.proto.SchedulableTransactionBody.encode(
                          e.scheduledTransactionBody,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.memo &&
                        Object.hasOwnProperty.call(e, "memo") &&
                        t.uint32(50).string(e.memo),
                      null != e.adminKey &&
                        Object.hasOwnProperty.call(e, "adminKey") &&
                        i.proto.Key.encode(
                          e.adminKey,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.signers &&
                        Object.hasOwnProperty.call(e, "signers") &&
                        i.proto.KeyList.encode(
                          e.signers,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.creatorAccountID &&
                        Object.hasOwnProperty.call(e, "creatorAccountID") &&
                        i.proto.AccountID.encode(
                          e.creatorAccountID,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.payerAccountID &&
                        Object.hasOwnProperty.call(e, "payerAccountID") &&
                        i.proto.AccountID.encode(
                          e.payerAccountID,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.scheduledTransactionID &&
                        Object.hasOwnProperty.call(
                          e,
                          "scheduledTransactionID",
                        ) &&
                        i.proto.TransactionID.encode(
                          e.scheduledTransactionID,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.ledgerId &&
                        Object.hasOwnProperty.call(e, "ledgerId") &&
                        t.uint32(98).bytes(e.ledgerId),
                      null != e.waitForExpiry &&
                        Object.hasOwnProperty.call(e, "waitForExpiry") &&
                        t.uint32(104).bool(e.waitForExpiry),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.scheduleID = i.proto.ScheduleID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.deletionTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.executionTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.expirationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.scheduledTransactionBody =
                            i.proto.SchedulableTransactionBody.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 6:
                          n.memo = e.string();
                          break;
                        case 7:
                          n.adminKey = i.proto.Key.decode(e, e.uint32());
                          break;
                        case 8:
                          n.signers = i.proto.KeyList.decode(e, e.uint32());
                          break;
                        case 9:
                          n.creatorAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 10:
                          n.payerAccountID = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 11:
                          n.scheduledTransactionID =
                            i.proto.TransactionID.decode(e, e.uint32());
                          break;
                        case 12:
                          n.ledgerId = e.bytes();
                          break;
                        case 13:
                          n.waitForExpiry = e.bool();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.ScheduleGetInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.scheduleInfo = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.scheduleInfo &&
                        Object.hasOwnProperty.call(e, "scheduleInfo") &&
                        i.proto.ScheduleInfo.encode(
                          e.scheduleInfo,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ScheduleGetInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.scheduleInfo = i.proto.ScheduleInfo.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ScheduleGetInfoResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetAccountNftInfosQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountID = null),
                  (e.prototype.start = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.end = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.start &&
                        Object.hasOwnProperty.call(e, "start") &&
                        t.uint32(24).int64(e.start),
                      null != e.end &&
                        Object.hasOwnProperty.call(e, "end") &&
                        t.uint32(32).int64(e.end),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetAccountNftInfosQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.start = e.int64();
                          break;
                        case 4:
                          n.end = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetAccountNftInfosQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetAccountNftInfosResponse = (function () {
                function e(e) {
                  if (((this.nfts = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.nfts = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nfts && e.nfts.length)
                    )
                      for (var o = 0; o < e.nfts.length; ++o)
                        i.proto.TokenNftInfo.encode(
                          e.nfts[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetAccountNftInfosResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          ((n.nfts && n.nfts.length) || (n.nfts = []),
                            n.nfts.push(
                              i.proto.TokenNftInfo.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetAccountNftInfosResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.NftID = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenID = null),
                  (e.prototype.serialNumber = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenID &&
                        Object.hasOwnProperty.call(e, "tokenID") &&
                        i.proto.TokenID.encode(
                          e.tokenID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.serialNumber &&
                        Object.hasOwnProperty.call(e, "serialNumber") &&
                        t.uint32(16).int64(e.serialNumber),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.NftID();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenID = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.serialNumber = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.NftID"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetNftInfoQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.nftID = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nftID &&
                        Object.hasOwnProperty.call(e, "nftID") &&
                        i.proto.NftID.encode(
                          e.nftID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetNftInfoQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.nftID = i.proto.NftID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetNftInfoQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenNftInfo = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.nftID = null),
                  (e.prototype.accountID = null),
                  (e.prototype.creationTime = null),
                  (e.prototype.metadata = l.newBuffer([])),
                  (e.prototype.ledgerId = l.newBuffer([])),
                  (e.prototype.spenderId = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.nftID &&
                        Object.hasOwnProperty.call(e, "nftID") &&
                        i.proto.NftID.encode(
                          e.nftID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.creationTime &&
                        Object.hasOwnProperty.call(e, "creationTime") &&
                        i.proto.Timestamp.encode(
                          e.creationTime,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.metadata &&
                        Object.hasOwnProperty.call(e, "metadata") &&
                        t.uint32(34).bytes(e.metadata),
                      null != e.ledgerId &&
                        Object.hasOwnProperty.call(e, "ledgerId") &&
                        t.uint32(42).bytes(e.ledgerId),
                      null != e.spenderId &&
                        Object.hasOwnProperty.call(e, "spenderId") &&
                        i.proto.AccountID.encode(
                          e.spenderId,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenNftInfo();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.nftID = i.proto.NftID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.creationTime = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.metadata = e.bytes();
                          break;
                        case 5:
                          n.ledgerId = e.bytes();
                          break;
                        case 6:
                          n.spenderId = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenNftInfo"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetNftInfoResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.nft = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.nft &&
                        Object.hasOwnProperty.call(e, "nft") &&
                        i.proto.TokenNftInfo.encode(
                          e.nft,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetNftInfoResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.nft = i.proto.TokenNftInfo.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetNftInfoResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetNftInfosQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.tokenID = null),
                  (e.prototype.start = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.end = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.tokenID &&
                        Object.hasOwnProperty.call(e, "tokenID") &&
                        i.proto.TokenID.encode(
                          e.tokenID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.start &&
                        Object.hasOwnProperty.call(e, "start") &&
                        t.uint32(24).int64(e.start),
                      null != e.end &&
                        Object.hasOwnProperty.call(e, "end") &&
                        t.uint32(32).int64(e.end),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetNftInfosQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.tokenID = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.start = e.int64();
                          break;
                        case 4:
                          n.end = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetNftInfosQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenGetNftInfosResponse = (function () {
                function e(e) {
                  if (((this.nfts = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.tokenID = null),
                  (e.prototype.nfts = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.tokenID &&
                        Object.hasOwnProperty.call(e, "tokenID") &&
                        i.proto.TokenID.encode(
                          e.tokenID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.nfts && e.nfts.length)
                    )
                      for (var o = 0; o < e.nfts.length; ++o)
                        i.proto.TokenNftInfo.encode(
                          e.nfts[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenGetNftInfosResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.tokenID = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 3:
                          ((n.nfts && n.nfts.length) || (n.nfts = []),
                            n.nfts.push(
                              i.proto.TokenNftInfo.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenGetNftInfosResponse"
                    );
                  }),
                  e
                );
              })()),
              (e.GetAccountDetailsQuery = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountId = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.QueryHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountId &&
                        Object.hasOwnProperty.call(e, "accountId") &&
                        i.proto.AccountID.encode(
                          e.accountId,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GetAccountDetailsQuery();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.QueryHeader.decode(e, e.uint32());
                          break;
                        case 2:
                          n.accountId = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GetAccountDetailsQuery"
                    );
                  }),
                  e
                );
              })()),
              (e.GetAccountDetailsResponse = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.header = null),
                  (e.prototype.accountDetails = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.header &&
                        Object.hasOwnProperty.call(e, "header") &&
                        i.proto.ResponseHeader.encode(
                          e.header,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.accountDetails &&
                        Object.hasOwnProperty.call(e, "accountDetails") &&
                        i.proto.GetAccountDetailsResponse.AccountDetails.encode(
                          e.accountDetails,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GetAccountDetailsResponse();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.header = i.proto.ResponseHeader.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.accountDetails =
                            i.proto.GetAccountDetailsResponse.AccountDetails.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GetAccountDetailsResponse"
                    );
                  }),
                  (e.AccountDetails = (function () {
                    function e(e) {
                      if (
                        ((this.tokenRelationships = []),
                        (this.grantedCryptoAllowances = []),
                        (this.grantedNftAllowances = []),
                        (this.grantedTokenAllowances = []),
                        e)
                      )
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.accountId = null),
                      (e.prototype.contractAccountId = ""),
                      (e.prototype.deleted = !1),
                      (e.prototype.proxyAccountId = null),
                      (e.prototype.proxyReceived = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.key = null),
                      (e.prototype.balance = l.Long
                        ? l.Long.fromBits(0, 0, !0)
                        : 0),
                      (e.prototype.receiverSigRequired = !1),
                      (e.prototype.expirationTime = null),
                      (e.prototype.autoRenewPeriod = null),
                      (e.prototype.tokenRelationships = l.emptyArray),
                      (e.prototype.memo = ""),
                      (e.prototype.ownedNfts = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.prototype.maxAutomaticTokenAssociations = 0),
                      (e.prototype.alias = l.newBuffer([])),
                      (e.prototype.ledgerId = l.newBuffer([])),
                      (e.prototype.grantedCryptoAllowances = l.emptyArray),
                      (e.prototype.grantedNftAllowances = l.emptyArray),
                      (e.prototype.grantedTokenAllowances = l.emptyArray),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        if (
                          (t || (t = a.create()),
                          null != e.accountId &&
                            Object.hasOwnProperty.call(e, "accountId") &&
                            i.proto.AccountID.encode(
                              e.accountId,
                              t.uint32(10).fork(),
                            ).ldelim(),
                          null != e.contractAccountId &&
                            Object.hasOwnProperty.call(
                              e,
                              "contractAccountId",
                            ) &&
                            t.uint32(18).string(e.contractAccountId),
                          null != e.deleted &&
                            Object.hasOwnProperty.call(e, "deleted") &&
                            t.uint32(24).bool(e.deleted),
                          null != e.proxyAccountId &&
                            Object.hasOwnProperty.call(e, "proxyAccountId") &&
                            i.proto.AccountID.encode(
                              e.proxyAccountId,
                              t.uint32(34).fork(),
                            ).ldelim(),
                          null != e.proxyReceived &&
                            Object.hasOwnProperty.call(e, "proxyReceived") &&
                            t.uint32(40).int64(e.proxyReceived),
                          null != e.key &&
                            Object.hasOwnProperty.call(e, "key") &&
                            i.proto.Key.encode(
                              e.key,
                              t.uint32(50).fork(),
                            ).ldelim(),
                          null != e.balance &&
                            Object.hasOwnProperty.call(e, "balance") &&
                            t.uint32(56).uint64(e.balance),
                          null != e.receiverSigRequired &&
                            Object.hasOwnProperty.call(
                              e,
                              "receiverSigRequired",
                            ) &&
                            t.uint32(64).bool(e.receiverSigRequired),
                          null != e.expirationTime &&
                            Object.hasOwnProperty.call(e, "expirationTime") &&
                            i.proto.Timestamp.encode(
                              e.expirationTime,
                              t.uint32(74).fork(),
                            ).ldelim(),
                          null != e.autoRenewPeriod &&
                            Object.hasOwnProperty.call(e, "autoRenewPeriod") &&
                            i.proto.Duration.encode(
                              e.autoRenewPeriod,
                              t.uint32(82).fork(),
                            ).ldelim(),
                          null != e.tokenRelationships &&
                            e.tokenRelationships.length)
                        )
                          for (var o = 0; o < e.tokenRelationships.length; ++o)
                            i.proto.TokenRelationship.encode(
                              e.tokenRelationships[o],
                              t.uint32(90).fork(),
                            ).ldelim();
                        if (
                          (null != e.memo &&
                            Object.hasOwnProperty.call(e, "memo") &&
                            t.uint32(98).string(e.memo),
                          null != e.ownedNfts &&
                            Object.hasOwnProperty.call(e, "ownedNfts") &&
                            t.uint32(104).int64(e.ownedNfts),
                          null != e.maxAutomaticTokenAssociations &&
                            Object.hasOwnProperty.call(
                              e,
                              "maxAutomaticTokenAssociations",
                            ) &&
                            t
                              .uint32(112)
                              .int32(e.maxAutomaticTokenAssociations),
                          null != e.alias &&
                            Object.hasOwnProperty.call(e, "alias") &&
                            t.uint32(122).bytes(e.alias),
                          null != e.ledgerId &&
                            Object.hasOwnProperty.call(e, "ledgerId") &&
                            t.uint32(130).bytes(e.ledgerId),
                          null != e.grantedCryptoAllowances &&
                            e.grantedCryptoAllowances.length)
                        )
                          for (o = 0; o < e.grantedCryptoAllowances.length; ++o)
                            i.proto.GrantedCryptoAllowance.encode(
                              e.grantedCryptoAllowances[o],
                              t.uint32(138).fork(),
                            ).ldelim();
                        if (
                          null != e.grantedNftAllowances &&
                          e.grantedNftAllowances.length
                        )
                          for (o = 0; o < e.grantedNftAllowances.length; ++o)
                            i.proto.GrantedNftAllowance.encode(
                              e.grantedNftAllowances[o],
                              t.uint32(146).fork(),
                            ).ldelim();
                        if (
                          null != e.grantedTokenAllowances &&
                          e.grantedTokenAllowances.length
                        )
                          for (o = 0; o < e.grantedTokenAllowances.length; ++o)
                            i.proto.GrantedTokenAllowance.encode(
                              e.grantedTokenAllowances[o],
                              t.uint32(154).fork(),
                            ).ldelim();
                        return t;
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n =
                            new i.proto.GetAccountDetailsResponse.AccountDetails();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.accountId = i.proto.AccountID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 2:
                              n.contractAccountId = e.string();
                              break;
                            case 3:
                              n.deleted = e.bool();
                              break;
                            case 4:
                              n.proxyAccountId = i.proto.AccountID.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 5:
                              n.proxyReceived = e.int64();
                              break;
                            case 6:
                              n.key = i.proto.Key.decode(e, e.uint32());
                              break;
                            case 7:
                              n.balance = e.uint64();
                              break;
                            case 8:
                              n.receiverSigRequired = e.bool();
                              break;
                            case 9:
                              n.expirationTime = i.proto.Timestamp.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 10:
                              n.autoRenewPeriod = i.proto.Duration.decode(
                                e,
                                e.uint32(),
                              );
                              break;
                            case 11:
                              ((n.tokenRelationships &&
                                n.tokenRelationships.length) ||
                                (n.tokenRelationships = []),
                                n.tokenRelationships.push(
                                  i.proto.TokenRelationship.decode(
                                    e,
                                    e.uint32(),
                                  ),
                                ));
                              break;
                            case 12:
                              n.memo = e.string();
                              break;
                            case 13:
                              n.ownedNfts = e.int64();
                              break;
                            case 14:
                              n.maxAutomaticTokenAssociations = e.int32();
                              break;
                            case 15:
                              n.alias = e.bytes();
                              break;
                            case 16:
                              n.ledgerId = e.bytes();
                              break;
                            case 17:
                              ((n.grantedCryptoAllowances &&
                                n.grantedCryptoAllowances.length) ||
                                (n.grantedCryptoAllowances = []),
                                n.grantedCryptoAllowances.push(
                                  i.proto.GrantedCryptoAllowance.decode(
                                    e,
                                    e.uint32(),
                                  ),
                                ));
                              break;
                            case 18:
                              ((n.grantedNftAllowances &&
                                n.grantedNftAllowances.length) ||
                                (n.grantedNftAllowances = []),
                                n.grantedNftAllowances.push(
                                  i.proto.GrantedNftAllowance.decode(
                                    e,
                                    e.uint32(),
                                  ),
                                ));
                              break;
                            case 19:
                              ((n.grantedTokenAllowances &&
                                n.grantedTokenAllowances.length) ||
                                (n.grantedTokenAllowances = []),
                                n.grantedTokenAllowances.push(
                                  i.proto.GrantedTokenAllowance.decode(
                                    e,
                                    e.uint32(),
                                  ),
                                ));
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/proto.GetAccountDetailsResponse.AccountDetails"
                        );
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              (e.GrantedCryptoAllowance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.spender = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.spender &&
                        Object.hasOwnProperty.call(e, "spender") &&
                        i.proto.AccountID.encode(
                          e.spender,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(16).int64(e.amount),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GrantedCryptoAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.spender = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.amount = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GrantedCryptoAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.GrantedNftAllowance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.spender = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.spender &&
                        Object.hasOwnProperty.call(e, "spender") &&
                        i.proto.AccountID.encode(
                          e.spender,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GrantedNftAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.spender = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GrantedNftAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.GrantedTokenAllowance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.spender = null),
                  (e.prototype.amount = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.spender &&
                        Object.hasOwnProperty.call(e, "spender") &&
                        i.proto.AccountID.encode(
                          e.spender,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.amount &&
                        Object.hasOwnProperty.call(e, "amount") &&
                        t.uint32(24).int64(e.amount),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.GrantedTokenAllowance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.spender = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 3:
                          n.amount = e.int64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.GrantedTokenAllowance"
                    );
                  }),
                  e
                );
              })()),
              (e.Response = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.getByKey = null),
                  (e.prototype.getBySolidityID = null),
                  (e.prototype.contractCallLocal = null),
                  (e.prototype.contractGetBytecodeResponse = null),
                  (e.prototype.contractGetInfo = null),
                  (e.prototype.contractGetRecordsResponse = null),
                  (e.prototype.cryptogetAccountBalance = null),
                  (e.prototype.cryptoGetAccountRecords = null),
                  (e.prototype.cryptoGetInfo = null),
                  (e.prototype.cryptoGetLiveHash = null),
                  (e.prototype.cryptoGetProxyStakers = null),
                  (e.prototype.fileGetContents = null),
                  (e.prototype.fileGetInfo = null),
                  (e.prototype.transactionGetReceipt = null),
                  (e.prototype.transactionGetRecord = null),
                  (e.prototype.transactionGetFastRecord = null),
                  (e.prototype.consensusGetTopicInfo = null),
                  (e.prototype.networkGetVersionInfo = null),
                  (e.prototype.tokenGetInfo = null),
                  (e.prototype.scheduleGetInfo = null),
                  (e.prototype.tokenGetAccountNftInfos = null),
                  (e.prototype.tokenGetNftInfo = null),
                  (e.prototype.tokenGetNftInfos = null),
                  (e.prototype.networkGetExecutionTime = null),
                  (e.prototype.accountDetails = null),
                  Object.defineProperty(e.prototype, "response", {
                    get: l.oneOfGetter(
                      (t = [
                        "getByKey",
                        "getBySolidityID",
                        "contractCallLocal",
                        "contractGetBytecodeResponse",
                        "contractGetInfo",
                        "contractGetRecordsResponse",
                        "cryptogetAccountBalance",
                        "cryptoGetAccountRecords",
                        "cryptoGetInfo",
                        "cryptoGetLiveHash",
                        "cryptoGetProxyStakers",
                        "fileGetContents",
                        "fileGetInfo",
                        "transactionGetReceipt",
                        "transactionGetRecord",
                        "transactionGetFastRecord",
                        "consensusGetTopicInfo",
                        "networkGetVersionInfo",
                        "tokenGetInfo",
                        "scheduleGetInfo",
                        "tokenGetAccountNftInfos",
                        "tokenGetNftInfo",
                        "tokenGetNftInfos",
                        "networkGetExecutionTime",
                        "accountDetails",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.getByKey &&
                        Object.hasOwnProperty.call(e, "getByKey") &&
                        i.proto.GetByKeyResponse.encode(
                          e.getByKey,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.getBySolidityID &&
                        Object.hasOwnProperty.call(e, "getBySolidityID") &&
                        i.proto.GetBySolidityIDResponse.encode(
                          e.getBySolidityID,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.contractCallLocal &&
                        Object.hasOwnProperty.call(e, "contractCallLocal") &&
                        i.proto.ContractCallLocalResponse.encode(
                          e.contractCallLocal,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.contractGetInfo &&
                        Object.hasOwnProperty.call(e, "contractGetInfo") &&
                        i.proto.ContractGetInfoResponse.encode(
                          e.contractGetInfo,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.contractGetBytecodeResponse &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractGetBytecodeResponse",
                        ) &&
                        i.proto.ContractGetBytecodeResponse.encode(
                          e.contractGetBytecodeResponse,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      null != e.contractGetRecordsResponse &&
                        Object.hasOwnProperty.call(
                          e,
                          "contractGetRecordsResponse",
                        ) &&
                        i.proto.ContractGetRecordsResponse.encode(
                          e.contractGetRecordsResponse,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.cryptogetAccountBalance &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptogetAccountBalance",
                        ) &&
                        i.proto.CryptoGetAccountBalanceResponse.encode(
                          e.cryptogetAccountBalance,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.cryptoGetAccountRecords &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoGetAccountRecords",
                        ) &&
                        i.proto.CryptoGetAccountRecordsResponse.encode(
                          e.cryptoGetAccountRecords,
                          t.uint32(66).fork(),
                        ).ldelim(),
                      null != e.cryptoGetInfo &&
                        Object.hasOwnProperty.call(e, "cryptoGetInfo") &&
                        i.proto.CryptoGetInfoResponse.encode(
                          e.cryptoGetInfo,
                          t.uint32(74).fork(),
                        ).ldelim(),
                      null != e.cryptoGetLiveHash &&
                        Object.hasOwnProperty.call(e, "cryptoGetLiveHash") &&
                        i.proto.CryptoGetLiveHashResponse.encode(
                          e.cryptoGetLiveHash,
                          t.uint32(82).fork(),
                        ).ldelim(),
                      null != e.cryptoGetProxyStakers &&
                        Object.hasOwnProperty.call(
                          e,
                          "cryptoGetProxyStakers",
                        ) &&
                        i.proto.CryptoGetStakersResponse.encode(
                          e.cryptoGetProxyStakers,
                          t.uint32(90).fork(),
                        ).ldelim(),
                      null != e.fileGetContents &&
                        Object.hasOwnProperty.call(e, "fileGetContents") &&
                        i.proto.FileGetContentsResponse.encode(
                          e.fileGetContents,
                          t.uint32(98).fork(),
                        ).ldelim(),
                      null != e.fileGetInfo &&
                        Object.hasOwnProperty.call(e, "fileGetInfo") &&
                        i.proto.FileGetInfoResponse.encode(
                          e.fileGetInfo,
                          t.uint32(106).fork(),
                        ).ldelim(),
                      null != e.transactionGetReceipt &&
                        Object.hasOwnProperty.call(
                          e,
                          "transactionGetReceipt",
                        ) &&
                        i.proto.TransactionGetReceiptResponse.encode(
                          e.transactionGetReceipt,
                          t.uint32(114).fork(),
                        ).ldelim(),
                      null != e.transactionGetRecord &&
                        Object.hasOwnProperty.call(e, "transactionGetRecord") &&
                        i.proto.TransactionGetRecordResponse.encode(
                          e.transactionGetRecord,
                          t.uint32(122).fork(),
                        ).ldelim(),
                      null != e.transactionGetFastRecord &&
                        Object.hasOwnProperty.call(
                          e,
                          "transactionGetFastRecord",
                        ) &&
                        i.proto.TransactionGetFastRecordResponse.encode(
                          e.transactionGetFastRecord,
                          t.uint32(130).fork(),
                        ).ldelim(),
                      null != e.consensusGetTopicInfo &&
                        Object.hasOwnProperty.call(
                          e,
                          "consensusGetTopicInfo",
                        ) &&
                        i.proto.ConsensusGetTopicInfoResponse.encode(
                          e.consensusGetTopicInfo,
                          t.uint32(1202).fork(),
                        ).ldelim(),
                      null != e.networkGetVersionInfo &&
                        Object.hasOwnProperty.call(
                          e,
                          "networkGetVersionInfo",
                        ) &&
                        i.proto.NetworkGetVersionInfoResponse.encode(
                          e.networkGetVersionInfo,
                          t.uint32(1210).fork(),
                        ).ldelim(),
                      null != e.tokenGetInfo &&
                        Object.hasOwnProperty.call(e, "tokenGetInfo") &&
                        i.proto.TokenGetInfoResponse.encode(
                          e.tokenGetInfo,
                          t.uint32(1218).fork(),
                        ).ldelim(),
                      null != e.scheduleGetInfo &&
                        Object.hasOwnProperty.call(e, "scheduleGetInfo") &&
                        i.proto.ScheduleGetInfoResponse.encode(
                          e.scheduleGetInfo,
                          t.uint32(1226).fork(),
                        ).ldelim(),
                      null != e.tokenGetAccountNftInfos &&
                        Object.hasOwnProperty.call(
                          e,
                          "tokenGetAccountNftInfos",
                        ) &&
                        i.proto.TokenGetAccountNftInfosResponse.encode(
                          e.tokenGetAccountNftInfos,
                          t.uint32(1234).fork(),
                        ).ldelim(),
                      null != e.tokenGetNftInfo &&
                        Object.hasOwnProperty.call(e, "tokenGetNftInfo") &&
                        i.proto.TokenGetNftInfoResponse.encode(
                          e.tokenGetNftInfo,
                          t.uint32(1242).fork(),
                        ).ldelim(),
                      null != e.tokenGetNftInfos &&
                        Object.hasOwnProperty.call(e, "tokenGetNftInfos") &&
                        i.proto.TokenGetNftInfosResponse.encode(
                          e.tokenGetNftInfos,
                          t.uint32(1250).fork(),
                        ).ldelim(),
                      null != e.networkGetExecutionTime &&
                        Object.hasOwnProperty.call(
                          e,
                          "networkGetExecutionTime",
                        ) &&
                        i.proto.NetworkGetExecutionTimeResponse.encode(
                          e.networkGetExecutionTime,
                          t.uint32(1258).fork(),
                        ).ldelim(),
                      null != e.accountDetails &&
                        Object.hasOwnProperty.call(e, "accountDetails") &&
                        i.proto.GetAccountDetailsResponse.encode(
                          e.accountDetails,
                          t.uint32(1266).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.Response();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.getByKey = i.proto.GetByKeyResponse.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.getBySolidityID =
                            i.proto.GetBySolidityIDResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 3:
                          n.contractCallLocal =
                            i.proto.ContractCallLocalResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 5:
                          n.contractGetBytecodeResponse =
                            i.proto.ContractGetBytecodeResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 4:
                          n.contractGetInfo =
                            i.proto.ContractGetInfoResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 6:
                          n.contractGetRecordsResponse =
                            i.proto.ContractGetRecordsResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 7:
                          n.cryptogetAccountBalance =
                            i.proto.CryptoGetAccountBalanceResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 8:
                          n.cryptoGetAccountRecords =
                            i.proto.CryptoGetAccountRecordsResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 9:
                          n.cryptoGetInfo =
                            i.proto.CryptoGetInfoResponse.decode(e, e.uint32());
                          break;
                        case 10:
                          n.cryptoGetLiveHash =
                            i.proto.CryptoGetLiveHashResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 11:
                          n.cryptoGetProxyStakers =
                            i.proto.CryptoGetStakersResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 12:
                          n.fileGetContents =
                            i.proto.FileGetContentsResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 13:
                          n.fileGetInfo = i.proto.FileGetInfoResponse.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 14:
                          n.transactionGetReceipt =
                            i.proto.TransactionGetReceiptResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 15:
                          n.transactionGetRecord =
                            i.proto.TransactionGetRecordResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 16:
                          n.transactionGetFastRecord =
                            i.proto.TransactionGetFastRecordResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 150:
                          n.consensusGetTopicInfo =
                            i.proto.ConsensusGetTopicInfoResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 151:
                          n.networkGetVersionInfo =
                            i.proto.NetworkGetVersionInfoResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 152:
                          n.tokenGetInfo = i.proto.TokenGetInfoResponse.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 153:
                          n.scheduleGetInfo =
                            i.proto.ScheduleGetInfoResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 154:
                          n.tokenGetAccountNftInfos =
                            i.proto.TokenGetAccountNftInfosResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 155:
                          n.tokenGetNftInfo =
                            i.proto.TokenGetNftInfoResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 156:
                          n.tokenGetNftInfos =
                            i.proto.TokenGetNftInfosResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 157:
                          n.networkGetExecutionTime =
                            i.proto.NetworkGetExecutionTimeResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        case 158:
                          n.accountDetails =
                            i.proto.GetAccountDetailsResponse.decode(
                              e,
                              e.uint32(),
                            );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.Response"
                    );
                  }),
                  e
                );
              })()),
              (e.CryptoService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.createAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "createAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.updateAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "updateAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.cryptoTransfer = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "cryptoTransfer" },
                  ),
                  Object.defineProperty(
                    (e.prototype.cryptoDelete = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "cryptoDelete" },
                  ),
                  Object.defineProperty(
                    (e.prototype.approveAllowances = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "approveAllowances" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteAllowances = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteAllowances" },
                  ),
                  Object.defineProperty(
                    (e.prototype.addLiveHash = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "addLiveHash" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteLiveHash = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteLiveHash" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getLiveHash = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getLiveHash" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getAccountRecords = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getAccountRecords" },
                  ),
                  Object.defineProperty(
                    (e.prototype.cryptoGetBalance = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "cryptoGetBalance" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getAccountInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getAccountInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTransactionReceipts = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTransactionReceipts" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getFastTransactionRecord = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getFastTransactionRecord" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTxRecordByTxID = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTxRecordByTxID" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getStakersByAccountID = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getStakersByAccountID" },
                  ),
                  e
                );
              })()),
              (e.FileService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.createFile = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "createFile" },
                  ),
                  Object.defineProperty(
                    (e.prototype.updateFile = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "updateFile" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteFile = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteFile" },
                  ),
                  Object.defineProperty(
                    (e.prototype.appendContent = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "appendContent" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getFileContent = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getFileContent" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getFileInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getFileInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.systemDelete = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "systemDelete" },
                  ),
                  Object.defineProperty(
                    (e.prototype.systemUndelete = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "systemUndelete" },
                  ),
                  e
                );
              })()),
              (e.FreezeService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.freeze = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "freeze" },
                  ),
                  e
                );
              })()),
              (e.NetworkService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.getVersionInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getVersionInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getExecutionTime = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getExecutionTime" },
                  ),
                  Object.defineProperty(
                    (e.prototype.uncheckedSubmit = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "uncheckedSubmit" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getAccountDetails = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getAccountDetails" },
                  ),
                  e
                );
              })()),
              (e.ScheduleService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.createSchedule = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "createSchedule" },
                  ),
                  Object.defineProperty(
                    (e.prototype.signSchedule = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "signSchedule" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteSchedule = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteSchedule" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getScheduleInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getScheduleInfo" },
                  ),
                  e
                );
              })()),
              (e.SmartContractService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.createContract = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "createContract" },
                  ),
                  Object.defineProperty(
                    (e.prototype.updateContract = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "updateContract" },
                  ),
                  Object.defineProperty(
                    (e.prototype.contractCallMethod = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "contractCallMethod" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getContractInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getContractInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.contractCallLocalMethod = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "contractCallLocalMethod" },
                  ),
                  Object.defineProperty(
                    (e.prototype.contractGetBytecode = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "ContractGetBytecode" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getBySolidityID = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getBySolidityID" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTxRecordByContractID = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTxRecordByContractID" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteContract = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteContract" },
                  ),
                  Object.defineProperty(
                    (e.prototype.systemDelete = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "systemDelete" },
                  ),
                  Object.defineProperty(
                    (e.prototype.systemUndelete = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "systemUndelete" },
                  ),
                  Object.defineProperty(
                    (e.prototype.callEthereum = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "callEthereum" },
                  ),
                  e
                );
              })()),
              (e.ThrottleGroup = (function () {
                function e(e) {
                  if (((this.operations = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.operations = l.emptyArray),
                  (e.prototype.milliOpsPerSec = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.operations && e.operations.length)
                    ) {
                      t.uint32(10).fork();
                      for (var o = 0; o < e.operations.length; ++o)
                        t.int32(e.operations[o]);
                      t.ldelim();
                    }
                    return (
                      null != e.milliOpsPerSec &&
                        Object.hasOwnProperty.call(e, "milliOpsPerSec") &&
                        t.uint32(16).uint64(e.milliOpsPerSec),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ThrottleGroup();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          if (
                            ((n.operations && n.operations.length) ||
                              (n.operations = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.operations.push(e.int32());
                          } else n.operations.push(e.int32());
                          break;
                        case 2:
                          n.milliOpsPerSec = e.uint64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ThrottleGroup"
                    );
                  }),
                  e
                );
              })()),
              (e.ThrottleBucket = (function () {
                function e(e) {
                  if (((this.throttleGroups = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.name = ""),
                  (e.prototype.burstPeriodMs = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.throttleGroups = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(10).string(e.name),
                      null != e.burstPeriodMs &&
                        Object.hasOwnProperty.call(e, "burstPeriodMs") &&
                        t.uint32(16).uint64(e.burstPeriodMs),
                      null != e.throttleGroups && e.throttleGroups.length)
                    )
                      for (var o = 0; o < e.throttleGroups.length; ++o)
                        i.proto.ThrottleGroup.encode(
                          e.throttleGroups[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ThrottleBucket();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.name = e.string();
                          break;
                        case 2:
                          n.burstPeriodMs = e.uint64();
                          break;
                        case 3:
                          ((n.throttleGroups && n.throttleGroups.length) ||
                            (n.throttleGroups = []),
                            n.throttleGroups.push(
                              i.proto.ThrottleGroup.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ThrottleBucket"
                    );
                  }),
                  e
                );
              })()),
              (e.ThrottleDefinitions = (function () {
                function e(e) {
                  if (((this.throttleBuckets = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.throttleBuckets = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.throttleBuckets && e.throttleBuckets.length)
                    )
                      for (var o = 0; o < e.throttleBuckets.length; ++o)
                        i.proto.ThrottleBucket.encode(
                          e.throttleBuckets[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ThrottleDefinitions();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.throttleBuckets && n.throttleBuckets.length) ||
                            (n.throttleBuckets = []),
                            n.throttleBuckets.push(
                              i.proto.ThrottleBucket.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ThrottleDefinitions"
                    );
                  }),
                  e
                );
              })()),
              (e.TokenService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.createToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "createToken" },
                  ),
                  Object.defineProperty(
                    (e.prototype.updateToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "updateToken" },
                  ),
                  Object.defineProperty(
                    (e.prototype.mintToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "mintToken" },
                  ),
                  Object.defineProperty(
                    (e.prototype.burnToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "burnToken" },
                  ),
                  Object.defineProperty(
                    (e.prototype.deleteToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "deleteToken" },
                  ),
                  Object.defineProperty(
                    (e.prototype.wipeTokenAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "wipeTokenAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.freezeTokenAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "freezeTokenAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.unfreezeTokenAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "unfreezeTokenAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.grantKycToTokenAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "grantKycToTokenAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.revokeKycFromTokenAccount = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "revokeKycFromTokenAccount" },
                  ),
                  Object.defineProperty(
                    (e.prototype.associateTokens = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "associateTokens" },
                  ),
                  Object.defineProperty(
                    (e.prototype.dissociateTokens = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "dissociateTokens" },
                  ),
                  Object.defineProperty(
                    (e.prototype.updateTokenFeeSchedule = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "updateTokenFeeSchedule" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTokenInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTokenInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getAccountNftInfos = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getAccountNftInfos" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTokenNftInfo = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTokenNftInfo" },
                  ),
                  Object.defineProperty(
                    (e.prototype.getTokenNftInfos = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Query,
                        i.proto.Response,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "getTokenNftInfos" },
                  ),
                  Object.defineProperty(
                    (e.prototype.pauseToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "pauseToken" },
                  ),
                  Object.defineProperty(
                    (e.prototype.unpauseToken = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "unpauseToken" },
                  ),
                  e
                );
              })()),
              (e.SignedTransaction = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.bodyBytes = l.newBuffer([])),
                  (e.prototype.sigMap = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.bodyBytes &&
                        Object.hasOwnProperty.call(e, "bodyBytes") &&
                        t.uint32(10).bytes(e.bodyBytes),
                      null != e.sigMap &&
                        Object.hasOwnProperty.call(e, "sigMap") &&
                        i.proto.SignatureMap.encode(
                          e.sigMap,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SignedTransaction();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.bodyBytes = e.bytes();
                          break;
                        case 2:
                          n.sigMap = i.proto.SignatureMap.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SignedTransaction"
                    );
                  }),
                  e
                );
              })()),
              (e.UtilService = (function () {
                function e(e, t, o) {
                  n.rpc.Service.call(this, e, t, o);
                }
                return (
                  ((e.prototype = Object.create(
                    n.rpc.Service.prototype,
                  )).constructor = e),
                  (e.create = function (e, t, o) {
                    return new this(e, t, o);
                  }),
                  Object.defineProperty(
                    (e.prototype.prng = function e(t, o) {
                      return this.rpcCall(
                        e,
                        i.proto.Transaction,
                        i.proto.TransactionResponse,
                        t,
                        o,
                      );
                    }),
                    "name",
                    { value: "prng" },
                  ),
                  e
                );
              })()),
              (e.TokenUnitBalance = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.tokenId = null),
                  (e.prototype.balance = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.tokenId &&
                        Object.hasOwnProperty.call(e, "tokenId") &&
                        i.proto.TokenID.encode(
                          e.tokenId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.balance &&
                        Object.hasOwnProperty.call(e, "balance") &&
                        t.uint32(16).uint64(e.balance),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TokenUnitBalance();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.tokenId = i.proto.TokenID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.balance = e.uint64();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TokenUnitBalance"
                    );
                  }),
                  e
                );
              })()),
              (e.SingleAccountBalances = (function () {
                function e(e) {
                  if (((this.tokenUnitBalances = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.accountID = null),
                  (e.prototype.hbarBalance = l.Long
                    ? l.Long.fromBits(0, 0, !0)
                    : 0),
                  (e.prototype.tokenUnitBalances = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.accountID &&
                        Object.hasOwnProperty.call(e, "accountID") &&
                        i.proto.AccountID.encode(
                          e.accountID,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.hbarBalance &&
                        Object.hasOwnProperty.call(e, "hbarBalance") &&
                        t.uint32(16).uint64(e.hbarBalance),
                      null != e.tokenUnitBalances && e.tokenUnitBalances.length)
                    )
                      for (var o = 0; o < e.tokenUnitBalances.length; ++o)
                        i.proto.TokenUnitBalance.encode(
                          e.tokenUnitBalances[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SingleAccountBalances();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.accountID = i.proto.AccountID.decode(e, e.uint32());
                          break;
                        case 2:
                          n.hbarBalance = e.uint64();
                          break;
                        case 3:
                          ((n.tokenUnitBalances &&
                            n.tokenUnitBalances.length) ||
                            (n.tokenUnitBalances = []),
                            n.tokenUnitBalances.push(
                              i.proto.TokenUnitBalance.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SingleAccountBalances"
                    );
                  }),
                  e
                );
              })()),
              (e.AllAccountBalances = (function () {
                function e(e) {
                  if (((this.allAccounts = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.consensusTimestamp = null),
                  (e.prototype.allAccounts = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.consensusTimestamp &&
                        Object.hasOwnProperty.call(e, "consensusTimestamp") &&
                        i.proto.Timestamp.encode(
                          e.consensusTimestamp,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.allAccounts && e.allAccounts.length)
                    )
                      for (var o = 0; o < e.allAccounts.length; ++o)
                        i.proto.SingleAccountBalances.encode(
                          e.allAccounts[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.AllAccountBalances();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.consensusTimestamp = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          ((n.allAccounts && n.allAccounts.length) ||
                            (n.allAccounts = []),
                            n.allAccounts.push(
                              i.proto.SingleAccountBalances.decode(
                                e,
                                e.uint32(),
                              ),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.AllAccountBalances"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractActions = (function () {
                function e(e) {
                  if (((this.contractActions = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractActions = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.contractActions && e.contractActions.length)
                    )
                      for (var o = 0; o < e.contractActions.length; ++o)
                        i.proto.ContractAction.encode(
                          e.contractActions[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractActions();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.contractActions && n.contractActions.length) ||
                            (n.contractActions = []),
                            n.contractActions.push(
                              i.proto.ContractAction.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractActions"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractActionType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "NO_ACTION")] = 0),
                  (t[(e[1] = "CALL")] = 1),
                  (t[(e[2] = "CREATE")] = 2),
                  (t[(e[3] = "PRECOMPILE")] = 3),
                  (t[(e[4] = "SYSTEM")] = 4),
                  t
                );
              })()),
              (e.CallOperationType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "OP_UNKNOWN")] = 0),
                  (t[(e[1] = "OP_CALL")] = 1),
                  (t[(e[2] = "OP_CALLCODE")] = 2),
                  (t[(e[3] = "OP_DELEGATECALL")] = 3),
                  (t[(e[4] = "OP_STATICCALL")] = 4),
                  (t[(e[5] = "OP_CREATE")] = 5),
                  (t[(e[6] = "OP_CREATE2")] = 6),
                  t
                );
              })()),
              (e.ContractAction = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.callType = 0),
                  (e.prototype.callingAccount = null),
                  (e.prototype.callingContract = null),
                  (e.prototype.gas = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.input = l.newBuffer([])),
                  (e.prototype.recipientAccount = null),
                  (e.prototype.recipientContract = null),
                  (e.prototype.targetedAddress = null),
                  (e.prototype.value = l.Long ? l.Long.fromBits(0, 0, !1) : 0),
                  (e.prototype.gasUsed = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.output = null),
                  (e.prototype.revertReason = null),
                  (e.prototype.error = null),
                  (e.prototype.callDepth = 0),
                  (e.prototype.callOperationType = 0),
                  Object.defineProperty(e.prototype, "caller", {
                    get: l.oneOfGetter(
                      (t = ["callingAccount", "callingContract"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  Object.defineProperty(e.prototype, "recipient", {
                    get: l.oneOfGetter(
                      (t = [
                        "recipientAccount",
                        "recipientContract",
                        "targetedAddress",
                      ]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  Object.defineProperty(e.prototype, "resultData", {
                    get: l.oneOfGetter(
                      (t = ["output", "revertReason", "error"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.callType &&
                        Object.hasOwnProperty.call(e, "callType") &&
                        t.uint32(8).int32(e.callType),
                      null != e.callingAccount &&
                        Object.hasOwnProperty.call(e, "callingAccount") &&
                        i.proto.AccountID.encode(
                          e.callingAccount,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.callingContract &&
                        Object.hasOwnProperty.call(e, "callingContract") &&
                        i.proto.ContractID.encode(
                          e.callingContract,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.gas &&
                        Object.hasOwnProperty.call(e, "gas") &&
                        t.uint32(32).int64(e.gas),
                      null != e.input &&
                        Object.hasOwnProperty.call(e, "input") &&
                        t.uint32(42).bytes(e.input),
                      null != e.recipientAccount &&
                        Object.hasOwnProperty.call(e, "recipientAccount") &&
                        i.proto.AccountID.encode(
                          e.recipientAccount,
                          t.uint32(50).fork(),
                        ).ldelim(),
                      null != e.recipientContract &&
                        Object.hasOwnProperty.call(e, "recipientContract") &&
                        i.proto.ContractID.encode(
                          e.recipientContract,
                          t.uint32(58).fork(),
                        ).ldelim(),
                      null != e.targetedAddress &&
                        Object.hasOwnProperty.call(e, "targetedAddress") &&
                        t.uint32(66).bytes(e.targetedAddress),
                      null != e.value &&
                        Object.hasOwnProperty.call(e, "value") &&
                        t.uint32(72).int64(e.value),
                      null != e.gasUsed &&
                        Object.hasOwnProperty.call(e, "gasUsed") &&
                        t.uint32(80).int64(e.gasUsed),
                      null != e.output &&
                        Object.hasOwnProperty.call(e, "output") &&
                        t.uint32(90).bytes(e.output),
                      null != e.revertReason &&
                        Object.hasOwnProperty.call(e, "revertReason") &&
                        t.uint32(98).bytes(e.revertReason),
                      null != e.error &&
                        Object.hasOwnProperty.call(e, "error") &&
                        t.uint32(106).bytes(e.error),
                      null != e.callDepth &&
                        Object.hasOwnProperty.call(e, "callDepth") &&
                        t.uint32(112).int32(e.callDepth),
                      null != e.callOperationType &&
                        Object.hasOwnProperty.call(e, "callOperationType") &&
                        t.uint32(120).int32(e.callOperationType),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractAction();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.callType = e.int32();
                          break;
                        case 2:
                          n.callingAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          n.callingContract = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.gas = e.int64();
                          break;
                        case 5:
                          n.input = e.bytes();
                          break;
                        case 6:
                          n.recipientAccount = i.proto.AccountID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 7:
                          n.recipientContract = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 8:
                          n.targetedAddress = e.bytes();
                          break;
                        case 9:
                          n.value = e.int64();
                          break;
                        case 10:
                          n.gasUsed = e.int64();
                          break;
                        case 11:
                          n.output = e.bytes();
                          break;
                        case 12:
                          n.revertReason = e.bytes();
                          break;
                        case 13:
                          n.error = e.bytes();
                          break;
                        case 14:
                          n.callDepth = e.int32();
                          break;
                        case 15:
                          n.callOperationType = e.int32();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractAction"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractBytecode = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractId = null),
                  (e.prototype.initcode = l.newBuffer([])),
                  (e.prototype.runtimeBytecode = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.contractId &&
                        Object.hasOwnProperty.call(e, "contractId") &&
                        i.proto.ContractID.encode(
                          e.contractId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.initcode &&
                        Object.hasOwnProperty.call(e, "initcode") &&
                        t.uint32(18).bytes(e.initcode),
                      null != e.runtimeBytecode &&
                        Object.hasOwnProperty.call(e, "runtimeBytecode") &&
                        t.uint32(26).bytes(e.runtimeBytecode),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractBytecode();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractId = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.initcode = e.bytes();
                          break;
                        case 3:
                          n.runtimeBytecode = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractBytecode"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractStateChanges = (function () {
                function e(e) {
                  if (((this.contractStateChanges = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractStateChanges = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.contractStateChanges &&
                        e.contractStateChanges.length)
                    )
                      for (var o = 0; o < e.contractStateChanges.length; ++o)
                        i.proto.ContractStateChange.encode(
                          e.contractStateChanges[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractStateChanges();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.contractStateChanges &&
                            n.contractStateChanges.length) ||
                            (n.contractStateChanges = []),
                            n.contractStateChanges.push(
                              i.proto.ContractStateChange.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractStateChanges"
                    );
                  }),
                  e
                );
              })()),
              (e.ContractStateChange = (function () {
                function e(e) {
                  if (((this.storageChanges = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.contractId = null),
                  (e.prototype.storageChanges = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.contractId &&
                        Object.hasOwnProperty.call(e, "contractId") &&
                        i.proto.ContractID.encode(
                          e.contractId,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.storageChanges && e.storageChanges.length)
                    )
                      for (var o = 0; o < e.storageChanges.length; ++o)
                        i.proto.StorageChange.encode(
                          e.storageChanges[o],
                          t.uint32(18).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.ContractStateChange();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.contractId = i.proto.ContractID.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          ((n.storageChanges && n.storageChanges.length) ||
                            (n.storageChanges = []),
                            n.storageChanges.push(
                              i.proto.StorageChange.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.ContractStateChange"
                    );
                  }),
                  e
                );
              })()),
              (e.StorageChange = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.slot = l.newBuffer([])),
                  (e.prototype.valueRead = l.newBuffer([])),
                  (e.prototype.valueWritten = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.slot &&
                        Object.hasOwnProperty.call(e, "slot") &&
                        t.uint32(10).bytes(e.slot),
                      null != e.valueRead &&
                        Object.hasOwnProperty.call(e, "valueRead") &&
                        t.uint32(18).bytes(e.valueRead),
                      null != e.valueWritten &&
                        Object.hasOwnProperty.call(e, "valueWritten") &&
                        i.google.protobuf.BytesValue.encode(
                          e.valueWritten,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.StorageChange();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.slot = e.bytes();
                          break;
                        case 2:
                          n.valueRead = e.bytes();
                          break;
                        case 3:
                          n.valueWritten = i.google.protobuf.BytesValue.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.StorageChange"
                    );
                  }),
                  e
                );
              })()),
              (e.HashAlgorithm = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "HASH_ALGORITHM_UNKNOWN")] = 0),
                  (t[(e[1] = "SHA_384")] = 1),
                  t
                );
              })()),
              (e.HashObject = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.algorithm = 0),
                  (e.prototype.length = 0),
                  (e.prototype.hash = l.newBuffer([])),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.algorithm &&
                        Object.hasOwnProperty.call(e, "algorithm") &&
                        t.uint32(8).int32(e.algorithm),
                      null != e.length &&
                        Object.hasOwnProperty.call(e, "length") &&
                        t.uint32(16).int32(e.length),
                      null != e.hash &&
                        Object.hasOwnProperty.call(e, "hash") &&
                        t.uint32(26).bytes(e.hash),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.HashObject();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.algorithm = e.int32();
                          break;
                        case 2:
                          n.length = e.int32();
                          break;
                        case 3:
                          n.hash = e.bytes();
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.HashObject"
                    );
                  }),
                  e
                );
              })()),
              (e.RecordStreamFile = (function () {
                function e(e) {
                  if (((this.recordStreamItems = []), (this.sidecars = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.hapiProtoVersion = null),
                  (e.prototype.startObjectRunningHash = null),
                  (e.prototype.recordStreamItems = l.emptyArray),
                  (e.prototype.endObjectRunningHash = null),
                  (e.prototype.blockNumber = l.Long
                    ? l.Long.fromBits(0, 0, !1)
                    : 0),
                  (e.prototype.sidecars = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.hapiProtoVersion &&
                        Object.hasOwnProperty.call(e, "hapiProtoVersion") &&
                        i.proto.SemanticVersion.encode(
                          e.hapiProtoVersion,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.startObjectRunningHash &&
                        Object.hasOwnProperty.call(
                          e,
                          "startObjectRunningHash",
                        ) &&
                        i.proto.HashObject.encode(
                          e.startObjectRunningHash,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      null != e.recordStreamItems && e.recordStreamItems.length)
                    )
                      for (var o = 0; o < e.recordStreamItems.length; ++o)
                        i.proto.RecordStreamItem.encode(
                          e.recordStreamItems[o],
                          t.uint32(26).fork(),
                        ).ldelim();
                    if (
                      (null != e.endObjectRunningHash &&
                        Object.hasOwnProperty.call(e, "endObjectRunningHash") &&
                        i.proto.HashObject.encode(
                          e.endObjectRunningHash,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.blockNumber &&
                        Object.hasOwnProperty.call(e, "blockNumber") &&
                        t.uint32(40).int64(e.blockNumber),
                      null != e.sidecars && e.sidecars.length)
                    )
                      for (o = 0; o < e.sidecars.length; ++o)
                        i.proto.SidecarMetadata.encode(
                          e.sidecars[o],
                          t.uint32(50).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.RecordStreamFile();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.hapiProtoVersion = i.proto.SemanticVersion.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.startObjectRunningHash = i.proto.HashObject.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 3:
                          ((n.recordStreamItems &&
                            n.recordStreamItems.length) ||
                            (n.recordStreamItems = []),
                            n.recordStreamItems.push(
                              i.proto.RecordStreamItem.decode(e, e.uint32()),
                            ));
                          break;
                        case 4:
                          n.endObjectRunningHash = i.proto.HashObject.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.blockNumber = e.int64();
                          break;
                        case 6:
                          ((n.sidecars && n.sidecars.length) ||
                            (n.sidecars = []),
                            n.sidecars.push(
                              i.proto.SidecarMetadata.decode(e, e.uint32()),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.RecordStreamFile"
                    );
                  }),
                  e
                );
              })()),
              (e.RecordStreamItem = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.transaction = null),
                  (e.prototype.record = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.transaction &&
                        Object.hasOwnProperty.call(e, "transaction") &&
                        i.proto.Transaction.encode(
                          e.transaction,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.record &&
                        Object.hasOwnProperty.call(e, "record") &&
                        i.proto.TransactionRecord.encode(
                          e.record,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.RecordStreamItem();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.transaction = i.proto.Transaction.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.record = i.proto.TransactionRecord.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.RecordStreamItem"
                    );
                  }),
                  e
                );
              })()),
              (e.SidecarMetadata = (function () {
                function e(e) {
                  if (((this.types = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.hash = null),
                  (e.prototype.id = 0),
                  (e.prototype.types = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.hash &&
                        Object.hasOwnProperty.call(e, "hash") &&
                        i.proto.HashObject.encode(
                          e.hash,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(16).int32(e.id),
                      null != e.types && e.types.length)
                    ) {
                      t.uint32(26).fork();
                      for (var o = 0; o < e.types.length; ++o)
                        t.int32(e.types[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SidecarMetadata();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.hash = i.proto.HashObject.decode(e, e.uint32());
                          break;
                        case 2:
                          n.id = e.int32();
                          break;
                        case 3:
                          if (
                            ((n.types && n.types.length) || (n.types = []),
                            2 === (7 & r))
                          ) {
                            var a = e.uint32() + e.pos;
                            while (e.pos < a) n.types.push(e.int32());
                          } else n.types.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SidecarMetadata"
                    );
                  }),
                  e
                );
              })()),
              (e.SidecarType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "SIDECAR_TYPE_UNKNOWN")] = 0),
                  (t[(e[1] = "CONTRACT_STATE_CHANGE")] = 1),
                  (t[(e[2] = "CONTRACT_ACTION")] = 2),
                  (t[(e[3] = "CONTRACT_BYTECODE")] = 3),
                  t
                );
              })()),
              (e.SidecarFile = (function () {
                function e(e) {
                  if (((this.sidecarRecords = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.sidecarRecords = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.sidecarRecords && e.sidecarRecords.length)
                    )
                      for (var o = 0; o < e.sidecarRecords.length; ++o)
                        i.proto.TransactionSidecarRecord.encode(
                          e.sidecarRecords[o],
                          t.uint32(10).fork(),
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SidecarFile();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          ((n.sidecarRecords && n.sidecarRecords.length) ||
                            (n.sidecarRecords = []),
                            n.sidecarRecords.push(
                              i.proto.TransactionSidecarRecord.decode(
                                e,
                                e.uint32(),
                              ),
                            ));
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SidecarFile"
                    );
                  }),
                  e
                );
              })()),
              (e.TransactionSidecarRecord = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                let t;
                return (
                  (e.prototype.consensusTimestamp = null),
                  (e.prototype.migration = !1),
                  (e.prototype.stateChanges = null),
                  (e.prototype.actions = null),
                  (e.prototype.bytecode = null),
                  Object.defineProperty(e.prototype, "sidecarRecords", {
                    get: l.oneOfGetter(
                      (t = ["stateChanges", "actions", "bytecode"]),
                    ),
                    set: l.oneOfSetter(t),
                  }),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.consensusTimestamp &&
                        Object.hasOwnProperty.call(e, "consensusTimestamp") &&
                        i.proto.Timestamp.encode(
                          e.consensusTimestamp,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.migration &&
                        Object.hasOwnProperty.call(e, "migration") &&
                        t.uint32(16).bool(e.migration),
                      null != e.stateChanges &&
                        Object.hasOwnProperty.call(e, "stateChanges") &&
                        i.proto.ContractStateChanges.encode(
                          e.stateChanges,
                          t.uint32(26).fork(),
                        ).ldelim(),
                      null != e.actions &&
                        Object.hasOwnProperty.call(e, "actions") &&
                        i.proto.ContractActions.encode(
                          e.actions,
                          t.uint32(34).fork(),
                        ).ldelim(),
                      null != e.bytecode &&
                        Object.hasOwnProperty.call(e, "bytecode") &&
                        i.proto.ContractBytecode.encode(
                          e.bytecode,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.TransactionSidecarRecord();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.consensusTimestamp = i.proto.Timestamp.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.migration = e.bool();
                          break;
                        case 3:
                          n.stateChanges = i.proto.ContractStateChanges.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 4:
                          n.actions = i.proto.ContractActions.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 5:
                          n.bytecode = i.proto.ContractBytecode.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.TransactionSidecarRecord"
                    );
                  }),
                  e
                );
              })()),
              (e.SignatureFile = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.fileSignature = null),
                  (e.prototype.metadataSignature = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.fileSignature &&
                        Object.hasOwnProperty.call(e, "fileSignature") &&
                        i.proto.SignatureObject.encode(
                          e.fileSignature,
                          t.uint32(10).fork(),
                        ).ldelim(),
                      null != e.metadataSignature &&
                        Object.hasOwnProperty.call(e, "metadataSignature") &&
                        i.proto.SignatureObject.encode(
                          e.metadataSignature,
                          t.uint32(18).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SignatureFile();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.fileSignature = i.proto.SignatureObject.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        case 2:
                          n.metadataSignature = i.proto.SignatureObject.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SignatureFile"
                    );
                  }),
                  e
                );
              })()),
              (e.SignatureObject = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.type = 0),
                  (e.prototype.length = 0),
                  (e.prototype.checksum = 0),
                  (e.prototype.signature = l.newBuffer([])),
                  (e.prototype.hashObject = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.type &&
                        Object.hasOwnProperty.call(e, "type") &&
                        t.uint32(8).int32(e.type),
                      null != e.length &&
                        Object.hasOwnProperty.call(e, "length") &&
                        t.uint32(16).int32(e.length),
                      null != e.checksum &&
                        Object.hasOwnProperty.call(e, "checksum") &&
                        t.uint32(24).int32(e.checksum),
                      null != e.signature &&
                        Object.hasOwnProperty.call(e, "signature") &&
                        t.uint32(34).bytes(e.signature),
                      null != e.hashObject &&
                        Object.hasOwnProperty.call(e, "hashObject") &&
                        i.proto.HashObject.encode(
                          e.hashObject,
                          t.uint32(42).fork(),
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    var o = void 0 === t ? e.len : e.pos + t,
                      n = new i.proto.SignatureObject();
                    while (e.pos < o) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.type = e.int32();
                          break;
                        case 2:
                          n.length = e.int32();
                          break;
                        case 3:
                          n.checksum = e.int32();
                          break;
                        case 4:
                          n.signature = e.bytes();
                          break;
                        case 5:
                          n.hashObject = i.proto.HashObject.decode(
                            e,
                            e.uint32(),
                          );
                          break;
                        default:
                          e.skipType(7 & r);
                          break;
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/proto.SignatureObject"
                    );
                  }),
                  e
                );
              })()),
              (e.SignatureType = (function () {
                const e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "SIGNATURE_TYPE_UNKNOWN")] = 0),
                  (t[(e[1] = "SHA_384_WITH_RSA")] = 1),
                  t
                );
              })()),
              e
            );
          })()),
        (t.google = i.google =
          (() => {
            const e = {};
            return (
              (e.protobuf = (function () {
                const e = {};
                return (
                  (e.DoubleValue = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = 0),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(9).double(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.DoubleValue();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.double();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.DoubleValue"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.FloatValue = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = 0),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(13).float(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.FloatValue();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.float();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.FloatValue"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.Int64Value = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = l.Long
                        ? l.Long.fromBits(0, 0, !1)
                        : 0),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(8).int64(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.Int64Value();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.int64();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.Int64Value"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.UInt64Value = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = l.Long
                        ? l.Long.fromBits(0, 0, !0)
                        : 0),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(8).uint64(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.UInt64Value();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.uint64();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.UInt64Value"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.Int32Value = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = 0),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(8).int32(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.Int32Value();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.int32();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.Int32Value"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.UInt32Value = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = 0),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(8).uint32(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.UInt32Value();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.uint32();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.UInt32Value"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.BoolValue = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = !1),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(8).bool(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.BoolValue();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.bool();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.BoolValue"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.StringValue = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = ""),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(10).string(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.StringValue();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.string();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.StringValue"
                        );
                      }),
                      e
                    );
                  })()),
                  (e.BytesValue = (function () {
                    function e(e) {
                      if (e)
                        for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                          null != e[t[o]] && (this[t[o]] = e[t[o]]);
                    }
                    return (
                      (e.prototype.value = l.newBuffer([])),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        return (
                          t || (t = a.create()),
                          null != e.value &&
                            Object.hasOwnProperty.call(e, "value") &&
                            t.uint32(10).bytes(e.value),
                          t
                        );
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        var o = void 0 === t ? e.len : e.pos + t,
                          n = new i.google.protobuf.BytesValue();
                        while (e.pos < o) {
                          var r = e.uint32();
                          switch (r >>> 3) {
                            case 1:
                              n.value = e.bytes();
                              break;
                            default:
                              e.skipType(7 & r);
                              break;
                          }
                        }
                        return n;
                      }),
                      (e.getTypeUrl = function (e) {
                        return (
                          void 0 === e && (e = "type.googleapis.com"),
                          e + "/google.protobuf.BytesValue"
                        );
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              e
            );
          })()));
    },
  },
]);
