(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [162],
  {
    2956: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.longify =
          t.createProtobufRpcClient =
          t.createPagination =
          t.toAccAddress =
            void 0));
      const s = n(2762),
        o = n(2796),
        i = r(n(2754));
      function a(e) {
        return s.Bech32.decode(e).data;
      }
      function c(e) {
        return e
          ? {
              key: e,
              offset: i.default.fromNumber(0, !0),
              limit: i.default.fromNumber(0, !0),
              countTotal: !1,
            }
          : void 0;
      }
      function u(e) {
        return {
          request: (t, n, r) => {
            const s = `/${t}/${n}`;
            return e.queryUnverified(s, r);
          },
        };
      }
      function d(e) {
        const t = o.Uint64.fromString(e.toString());
        return i.default.fromBytesBE([...t.toBytesBigEndian()], !0);
      }
      ((t.toAccAddress = a),
        (t.createPagination = c),
        (t.createProtobufRpcClient = u),
        (t.longify = d));
    },
    3154: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ValueAndUpdates =
          t.toListPromise =
          t.fromListPromise =
          t.firstEvent =
          t.dropDuplicates =
          t.concat =
          t.DefaultValueProducer =
            void 0));
      var o = n(4415);
      Object.defineProperty(t, "DefaultValueProducer", {
        enumerable: !0,
        get: function () {
          return o.DefaultValueProducer;
        },
      });
      var i = n(4416);
      Object.defineProperty(t, "concat", {
        enumerable: !0,
        get: function () {
          return i.concat;
        },
      });
      var a = n(4421);
      Object.defineProperty(t, "dropDuplicates", {
        enumerable: !0,
        get: function () {
          return a.dropDuplicates;
        },
      });
      var c = n(4422);
      (Object.defineProperty(t, "firstEvent", {
        enumerable: !0,
        get: function () {
          return c.firstEvent;
        },
      }),
        Object.defineProperty(t, "fromListPromise", {
          enumerable: !0,
          get: function () {
            return c.fromListPromise;
          },
        }),
        Object.defineProperty(t, "toListPromise", {
          enumerable: !0,
          get: function () {
            return c.toListPromise;
          },
        }),
        s(n(4423), t));
      var u = n(4424);
      Object.defineProperty(t, "ValueAndUpdates", {
        enumerable: !0,
        get: function () {
          return u.ValueAndUpdates;
        },
      });
    },
    3155: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createJsonRpcRequest = void 0));
      const r = "123456789";
      function s() {
        return r[Math.floor(Math.random() * r.length)];
      }
      function o() {
        return parseInt(
          Array.from({ length: 12 })
            .map(() => s())
            .join(""),
          10,
        );
      }
      function i(e, t) {
        const n = t ? Object.assign({}, t) : {};
        return { jsonrpc: "2.0", id: o(), method: e, params: n };
      }
      t.createJsonRpcRequest = i;
    },
    3327: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DateTime =
          t.toSeconds =
          t.fromSeconds =
          t.toRfc3339WithNanoseconds =
          t.fromRfc3339WithNanoseconds =
            void 0));
      const r = n(2762),
        s = n(2796);
      function o(e) {
        const t = r.fromRfc3339(e),
          n = e.match(/\.(\d+)Z$/),
          s = n ? n[1].slice(3) : "";
        return ((t.nanoseconds = parseInt(s.padEnd(6, "0"), 10)), t);
      }
      function i(e) {
        var t, n;
        const r = e.toISOString(),
          s =
            null !==
              (n =
                null === (t = e.nanoseconds) || void 0 === t
                  ? void 0
                  : t.toString()) && void 0 !== n
              ? n
              : "";
        return `${r.slice(0, -1)}${s.padStart(6, "0")}Z`;
      }
      function a(e, t) {
        void 0 === t && (t = 0);
        const n = new s.Uint32(t).toNumber();
        if (n > 999999999)
          throw new Error("Nano seconds must not exceed 999999999");
        const r = new Date(1e3 * e + Math.floor(n / 1e6));
        return ((r.nanoseconds = n % 1e6), r);
      }
      function c(e) {
        var t;
        return {
          seconds: Math.floor(e.getTime() / 1e3),
          nanos:
            (e.getTime() % 1e3) * 1e6 +
            (null !== (t = e.nanoseconds) && void 0 !== t ? t : 0),
        };
      }
      ((t.fromRfc3339WithNanoseconds = o),
        (t.toRfc3339WithNanoseconds = i),
        (t.fromSeconds = a),
        (t.toSeconds = c));
      class DateTime {
        static decode(e) {
          return o(e);
        }
        static encode(e) {
          return i(e);
        }
      }
      t.DateTime = DateTime;
    },
    3328: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebsocketClient =
          t.HttpClient =
          t.instanceOfRpcStreamingClient =
            void 0));
      var r = n(3329);
      Object.defineProperty(t, "instanceOfRpcStreamingClient", {
        enumerable: !0,
        get: function () {
          return r.instanceOfRpcStreamingClient;
        },
      });
      var s = n(4447);
      Object.defineProperty(t, "HttpClient", {
        enumerable: !0,
        get: function () {
          return s.HttpClient;
        },
      });
      var o = n(4452);
      Object.defineProperty(t, "WebsocketClient", {
        enumerable: !0,
        get: function () {
          return o.WebsocketClient;
        },
      });
    },
    3329: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" === typeof e.listen;
      }
      function s(e) {
        return -1 !== e.search("://");
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasProtocol = t.instanceOfRpcStreamingClient = void 0),
        (t.instanceOfRpcStreamingClient = r),
        (t.hasProtocol = s));
    },
    3330: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BlockIdFlag = void 0),
        (function (e) {
          ((e[(e["Unknown"] = 0)] = "Unknown"),
            (e[(e["Absent"] = 1)] = "Absent"),
            (e[(e["Commit"] = 2)] = "Commit"),
            (e[(e["Nil"] = 3)] = "Nil"),
            (e[(e["Unrecognized"] = -1)] = "Unrecognized"));
        })(t.BlockIdFlag || (t.BlockIdFlag = {})));
    },
    3331: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encodeBlockId =
          t.encodeVersion =
          t.encodeBytes =
          t.encodeTime =
          t.encodeInt =
          t.encodeString =
          t.Integer =
          t.dictionaryToStringMap =
          t.may =
          t.optional =
          t.assertNotEmpty =
          t.assertObject =
          t.assertArray =
          t.assertNumber =
          t.assertString =
          t.assertBoolean =
          t.assertSet =
            void 0));
      const r = n(2762),
        s = n(2796);
      function o(e) {
        if (void 0 === e) throw new Error("Value must not be undefined");
        if (null === e) throw new Error("Value must not be null");
        return e;
      }
      function i(e) {
        if ((o(e), "boolean" !== typeof e))
          throw new Error("Value must be a boolean");
        return e;
      }
      function a(e) {
        if ((o(e), "string" !== typeof e))
          throw new Error("Value must be a string");
        return e;
      }
      function c(e) {
        if ((o(e), "number" !== typeof e))
          throw new Error("Value must be a number");
        return e;
      }
      function u(e) {
        if ((o(e), !Array.isArray(e)))
          throw new Error("Value must be a an array");
        return e;
      }
      function d(e) {
        if ((o(e), "object" !== typeof e))
          throw new Error("Value must be an object");
        if ("[object Object]" !== Object.prototype.toString.call(e))
          throw new Error("Value must be a simple object");
        return e;
      }
      function l(e) {
        if ((o(e), "number" === typeof e && 0 === e))
          throw new Error("must provide a non-zero value");
        if (0 === e.length) throw new Error("must provide a non-empty value");
        return e;
      }
      function m(e, t) {
        return void 0 === e || null === e ? t : e;
      }
      function p(e, t) {
        return void 0 === t || null === t ? void 0 : e(t);
      }
      function h(e) {
        const t = new Map();
        for (const n of Object.keys(e)) {
          const r = e[n];
          if ("string" !== typeof r)
            throw new Error("Found dictionary value of type other than string");
          t.set(n, r);
        }
        return t;
      }
      ((t.assertSet = o),
        (t.assertBoolean = i),
        (t.assertString = a),
        (t.assertNumber = c),
        (t.assertArray = u),
        (t.assertObject = d),
        (t.assertNotEmpty = l),
        (t.optional = m),
        (t.may = p),
        (t.dictionaryToStringMap = h));
      class Integer {
        static parse(e) {
          const t =
            "number" === typeof e ? new s.Int53(e) : s.Int53.fromString(e);
          return t.toNumber();
        }
        static encode(e) {
          return new s.Int53(e).toString();
        }
      }
      function g(e) {
        const t = r.toUtf8(e);
        return Uint8Array.from([t.length, ...t]);
      }
      function f(e) {
        return e >= 128
          ? Uint8Array.from([(255 & e) | 128, ...f(e >> 7)])
          : Uint8Array.from([255 & e]);
      }
      function y(e) {
        const t = e.getTime(),
          n = Math.floor(t / 1e3),
          r = n ? [8, ...f(n)] : new Uint8Array(),
          s = (e.nanoseconds || 0) + (t % 1e3) * 1e6,
          o = s ? [16, ...f(s)] : new Uint8Array();
        return Uint8Array.from([...r, ...o]);
      }
      function b(e) {
        if (e.length >= 128)
          throw new Error(
            "Not implemented for byte arrays of length 128 or more",
          );
        return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
      }
      function v(e) {
        const t = e.block
            ? Uint8Array.from([8, ...f(e.block)])
            : new Uint8Array(),
          n = e.app ? Uint8Array.from([16, ...f(e.app)]) : new Uint8Array();
        return Uint8Array.from([...t, ...n]);
      }
      function w(e) {
        return Uint8Array.from([
          10,
          e.hash.length,
          ...e.hash,
          18,
          e.parts.hash.length + 4,
          8,
          e.parts.total,
          18,
          e.parts.hash.length,
          ...e.parts.hash,
        ]);
      }
      ((t.Integer = Integer),
        (t.encodeString = g),
        (t.encodeInt = f),
        (t.encodeTime = y),
        (t.encodeBytes = b),
        (t.encodeVersion = v),
        (t.encodeBlockId = w));
    },
    3332: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = e.tags ? e.tags : [],
          n = t.map((e) => `${e.key}='${e.value}'`),
          r = e.raw ? [e.raw] : [];
        return [...n, ...r].join(" AND ");
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildQuery = t.SubscriptionEventType = t.Method = void 0),
        (function (e) {
          ((e["AbciInfo"] = "abci_info"),
            (e["AbciQuery"] = "abci_query"),
            (e["Block"] = "block"),
            (e["Blockchain"] = "blockchain"),
            (e["BlockResults"] = "block_results"),
            (e["BroadcastTxAsync"] = "broadcast_tx_async"),
            (e["BroadcastTxSync"] = "broadcast_tx_sync"),
            (e["BroadcastTxCommit"] = "broadcast_tx_commit"),
            (e["Commit"] = "commit"),
            (e["Genesis"] = "genesis"),
            (e["Health"] = "health"),
            (e["Status"] = "status"),
            (e["Subscribe"] = "subscribe"),
            (e["Tx"] = "tx"),
            (e["TxSearch"] = "tx_search"),
            (e["Validators"] = "validators"),
            (e["Unsubscribe"] = "unsubscribe"));
        })(t.Method || (t.Method = {})),
        (function (e) {
          ((e["NewBlock"] = "NewBlock"),
            (e["NewBlockHeader"] = "NewBlockHeader"),
            (e["Tx"] = "Tx"));
        })(t.SubscriptionEventType || (t.SubscriptionEventType = {})),
        (t.buildQuery = r));
    },
    3333: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encodeBlockId =
          t.encodeVersion =
          t.encodeBytes =
          t.encodeTime =
          t.encodeInt =
          t.encodeString =
          t.Integer =
          t.dictionaryToStringMap =
          t.may =
          t.optional =
          t.assertNotEmpty =
          t.assertObject =
          t.assertArray =
          t.assertNumber =
          t.assertString =
          t.assertBoolean =
          t.assertSet =
            void 0));
      const r = n(2762),
        s = n(2796);
      function o(e) {
        if (void 0 === e) throw new Error("Value must not be undefined");
        if (null === e) throw new Error("Value must not be null");
        return e;
      }
      function i(e) {
        if ((o(e), "boolean" !== typeof e))
          throw new Error("Value must be a boolean");
        return e;
      }
      function a(e) {
        if ((o(e), "string" !== typeof e))
          throw new Error("Value must be a string");
        return e;
      }
      function c(e) {
        if ((o(e), "number" !== typeof e))
          throw new Error("Value must be a number");
        return e;
      }
      function u(e) {
        if ((o(e), !Array.isArray(e)))
          throw new Error("Value must be a an array");
        return e;
      }
      function d(e) {
        if ((o(e), "object" !== typeof e))
          throw new Error("Value must be an object");
        if ("[object Object]" !== Object.prototype.toString.call(e))
          throw new Error("Value must be a simple object");
        return e;
      }
      function l(e) {
        if ((o(e), "number" === typeof e && 0 === e))
          throw new Error("must provide a non-zero value");
        if (0 === e.length) throw new Error("must provide a non-empty value");
        return e;
      }
      function m(e, t) {
        return void 0 === e || null === e ? t : e;
      }
      function p(e, t) {
        return void 0 === t || null === t ? void 0 : e(t);
      }
      function h(e) {
        const t = new Map();
        for (const n of Object.keys(e)) {
          const r = e[n];
          if ("string" !== typeof r)
            throw new Error("Found dictionary value of type other than string");
          t.set(n, r);
        }
        return t;
      }
      ((t.assertSet = o),
        (t.assertBoolean = i),
        (t.assertString = a),
        (t.assertNumber = c),
        (t.assertArray = u),
        (t.assertObject = d),
        (t.assertNotEmpty = l),
        (t.optional = m),
        (t.may = p),
        (t.dictionaryToStringMap = h));
      class Integer {
        static parse(e) {
          const t =
            "number" === typeof e ? new s.Int53(e) : s.Int53.fromString(e);
          return t.toNumber();
        }
        static encode(e) {
          return new s.Int53(e).toString();
        }
      }
      function g(e) {
        const t = r.toUtf8(e);
        return Uint8Array.from([t.length, ...t]);
      }
      function f(e) {
        return e >= 128
          ? Uint8Array.from([(255 & e) | 128, ...f(e >> 7)])
          : Uint8Array.from([255 & e]);
      }
      function y(e) {
        const t = e.getTime(),
          n = Math.floor(t / 1e3),
          r = n ? [8, ...f(n)] : new Uint8Array(),
          s = (e.nanoseconds || 0) + (t % 1e3) * 1e6,
          o = s ? [16, ...f(s)] : new Uint8Array();
        return Uint8Array.from([...r, ...o]);
      }
      function b(e) {
        if (e.length >= 128)
          throw new Error(
            "Not implemented for byte arrays of length 128 or more",
          );
        return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
      }
      function v(e) {
        const t = e.block
            ? Uint8Array.from([8, ...f(e.block)])
            : new Uint8Array(),
          n = e.app ? Uint8Array.from([16, ...f(e.app)]) : new Uint8Array();
        return Uint8Array.from([...t, ...n]);
      }
      function w(e) {
        return Uint8Array.from([
          10,
          e.hash.length,
          ...e.hash,
          18,
          e.parts.hash.length + 4,
          8,
          e.parts.total,
          18,
          e.parts.hash.length,
          ...e.parts.hash,
        ]);
      }
      ((t.Integer = Integer),
        (t.encodeString = g),
        (t.encodeInt = f),
        (t.encodeTime = y),
        (t.encodeBytes = b),
        (t.encodeVersion = v),
        (t.encodeBlockId = w));
    },
    3334: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = e.tags ? e.tags : [],
          n = t.map((e) => `${e.key}='${e.value}'`),
          r = e.raw ? [e.raw] : [];
        return [...n, ...r].join(" AND ");
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildQuery = t.SubscriptionEventType = t.Method = void 0),
        (function (e) {
          ((e["AbciInfo"] = "abci_info"),
            (e["AbciQuery"] = "abci_query"),
            (e["Block"] = "block"),
            (e["Blockchain"] = "blockchain"),
            (e["BlockResults"] = "block_results"),
            (e["BlockSearch"] = "block_search"),
            (e["BroadcastTxAsync"] = "broadcast_tx_async"),
            (e["BroadcastTxSync"] = "broadcast_tx_sync"),
            (e["BroadcastTxCommit"] = "broadcast_tx_commit"),
            (e["Commit"] = "commit"),
            (e["Genesis"] = "genesis"),
            (e["Health"] = "health"),
            (e["Status"] = "status"),
            (e["Subscribe"] = "subscribe"),
            (e["Tx"] = "tx"),
            (e["TxSearch"] = "tx_search"),
            (e["Validators"] = "validators"),
            (e["Unsubscribe"] = "unsubscribe"));
        })(t.Method || (t.Method = {})),
        (function (e) {
          ((e["NewBlock"] = "NewBlock"),
            (e["NewBlockHeader"] = "NewBlockHeader"),
            (e["Tx"] = "Tx"));
        })(t.SubscriptionEventType || (t.SubscriptionEventType = {})),
        (t.buildQuery = r));
    },
    3561: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.accountFromAny = void 0));
      const r = n(2796),
        s = n(2968),
        o = n(2815),
        i = n(3323),
        a = n(4403);
      function c(e) {
        return r.Uint64.fromString(e.toString());
      }
      function u(e) {
        const { address: t, pubKey: n, accountNumber: r, sequence: o } = e,
          i = s.decodePubkey(n);
        return {
          address: t,
          pubkey: i,
          accountNumber: c(r).toNumber(),
          sequence: c(o).toNumber(),
        };
      }
      function d(e) {
        var t, n, r, s, c, d, l;
        const { typeUrl: m, value: p } = e;
        switch (m) {
          case "/cosmos.auth.v1beta1.BaseAccount":
            return u(i.BaseAccount.decode(p));
          case "/cosmos.auth.v1beta1.ModuleAccount": {
            const e = i.ModuleAccount.decode(p).baseAccount;
            return (o.assert(e), u(e));
          }
          case "/cosmos.vesting.v1beta1.BaseVestingAccount": {
            const e =
              null === (t = a.BaseVestingAccount.decode(p)) || void 0 === t
                ? void 0
                : t.baseAccount;
            return (o.assert(e), u(e));
          }
          case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
            const e =
              null ===
                (r =
                  null === (n = a.ContinuousVestingAccount.decode(p)) ||
                  void 0 === n
                    ? void 0
                    : n.baseVestingAccount) || void 0 === r
                ? void 0
                : r.baseAccount;
            return (o.assert(e), u(e));
          }
          case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
            const e =
              null ===
                (c =
                  null === (s = a.DelayedVestingAccount.decode(p)) ||
                  void 0 === s
                    ? void 0
                    : s.baseVestingAccount) || void 0 === c
                ? void 0
                : c.baseAccount;
            return (o.assert(e), u(e));
          }
          case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
            const e =
              null ===
                (l =
                  null === (d = a.PeriodicVestingAccount.decode(p)) ||
                  void 0 === d
                    ? void 0
                    : d.baseVestingAccount) || void 0 === l
                ? void 0
                : l.baseAccount;
            return (o.assert(e), u(e));
          }
          default:
            throw new Error(`Unsupported type: '${m}'`);
        }
      }
      t.accountFromAny = d;
    },
    3562: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AminoTypes = void 0));
      const s = n(2910),
        o = n(2762),
        i = n(2815),
        a = n(3324),
        c = n(2781),
        u = r(n(2754));
      function d(e) {
        if ("string" === typeof e) return "" === e ? void 0 : e;
        if ("number" === typeof e) return 0 === e ? void 0 : e;
        if (u.default.isLong(e)) return e.isZero() ? void 0 : e;
        throw new Error(`Got unsupported type '${typeof e}'`);
      }
      function l(e) {
        return {
          "/cosmos.bank.v1beta1.MsgSend": {
            aminoType: "cosmos-sdk/MsgSend",
            toAmino: (e) => {
              let { fromAddress: t, toAddress: n, amount: r } = e;
              return { from_address: t, to_address: n, amount: [...r] };
            },
            fromAmino: (e) => {
              let { from_address: t, to_address: n, amount: r } = e;
              return { fromAddress: t, toAddress: n, amount: [...r] };
            },
          },
          "/cosmos.bank.v1beta1.MsgMultiSend": {
            aminoType: "cosmos-sdk/MsgMultiSend",
            toAmino: (e) => {
              let { inputs: t, outputs: n } = e;
              return {
                inputs: t.map((e) => ({
                  address: e.address,
                  coins: [...e.coins],
                })),
                outputs: n.map((e) => ({
                  address: e.address,
                  coins: [...e.coins],
                })),
              };
            },
            fromAmino: (e) => {
              let { inputs: t, outputs: n } = e;
              return {
                inputs: t.map((e) => ({
                  address: e.address,
                  coins: [...e.coins],
                })),
                outputs: n.map((e) => ({
                  address: e.address,
                  coins: [...e.coins],
                })),
              };
            },
          },
          "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
            aminoType: "cosmos-sdk/MsgFundCommunityPool",
            toAmino: (e) => {
              let { amount: t, depositor: n } = e;
              return { amount: [...t], depositor: n };
            },
            fromAmino: (e) => {
              let { amount: t, depositor: n } = e;
              return { amount: [...t], depositor: n };
            },
          },
          "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
            aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
            toAmino: (e) => {
              let { delegatorAddress: t, withdrawAddress: n } = e;
              return { delegator_address: t, withdraw_address: n };
            },
            fromAmino: (e) => {
              let { delegator_address: t, withdraw_address: n } = e;
              return { delegatorAddress: t, withdrawAddress: n };
            },
          },
          "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
            aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
            toAmino: (e) => {
              let { delegatorAddress: t, validatorAddress: n } = e;
              return { delegator_address: t, validator_address: n };
            },
            fromAmino: (e) => {
              let { delegator_address: t, validator_address: n } = e;
              return { delegatorAddress: t, validatorAddress: n };
            },
          },
          "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
            aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
            toAmino: (e) => {
              let { validatorAddress: t } = e;
              return { validator_address: t };
            },
            fromAmino: (e) => {
              let { validator_address: t } = e;
              return { validatorAddress: t };
            },
          },
          "/cosmos.gov.v1beta1.MsgDeposit": {
            aminoType: "cosmos-sdk/MsgDeposit",
            toAmino: (e) => {
              let { amount: t, depositor: n, proposalId: r } = e;
              return { amount: t, depositor: n, proposal_id: r.toString() };
            },
            fromAmino: (e) => {
              let { amount: t, depositor: n, proposal_id: r } = e;
              return {
                amount: Array.from(t),
                depositor: n,
                proposalId: u.default.fromString(r),
              };
            },
          },
          "/cosmos.gov.v1beta1.MsgVote": {
            aminoType: "cosmos-sdk/MsgVote",
            toAmino: (e) => {
              let { option: t, proposalId: n, voter: r } = e;
              return { option: t, proposal_id: n.toString(), voter: r };
            },
            fromAmino: (e) => {
              let { option: t, proposal_id: n, voter: r } = e;
              return {
                option: a.voteOptionFromJSON(t),
                proposalId: u.default.fromString(n),
                voter: r,
              };
            },
          },
          "/cosmos.gov.v1beta1.MsgSubmitProposal": {
            aminoType: "cosmos-sdk/MsgSubmitProposal",
            toAmino: (e) => {
              let t,
                { initialDeposit: n, proposer: r, content: s } = e;
              switch ((i.assertDefinedAndNotNull(s), s.typeUrl)) {
                case "/cosmos.gov.v1beta1.TextProposal": {
                  const e = a.TextProposal.decode(s.value);
                  t = {
                    type: "cosmos-sdk/TextProposal",
                    value: { description: e.description, title: e.title },
                  };
                  break;
                }
                default:
                  throw new Error(`Unsupported proposal type: '${s.typeUrl}'`);
              }
              return { initial_deposit: n, proposer: r, content: t };
            },
            fromAmino: (e) => {
              let t,
                { initial_deposit: n, proposer: r, content: s } = e;
              switch (s.type) {
                case "cosmos-sdk/TextProposal": {
                  const { value: e } = s;
                  i.assert(i.isNonNullObject(e));
                  const { title: n, description: r } = e;
                  (i.assert("string" === typeof n),
                    i.assert("string" === typeof r),
                    (t = c.Any.fromPartial({
                      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                      value: a.TextProposal.encode(
                        a.TextProposal.fromPartial({
                          title: n,
                          description: r,
                        }),
                      ).finish(),
                    })));
                  break;
                }
                default:
                  throw new Error(`Unsupported proposal type: '${s.type}'`);
              }
              return { initialDeposit: Array.from(n), proposer: r, content: t };
            },
          },
          "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
            aminoType: "cosmos-sdk/MsgBeginRedelegate",
            toAmino: (e) => {
              let {
                delegatorAddress: t,
                validatorSrcAddress: n,
                validatorDstAddress: r,
                amount: s,
              } = e;
              return (
                i.assertDefinedAndNotNull(s, "missing amount"),
                {
                  delegator_address: t,
                  validator_src_address: n,
                  validator_dst_address: r,
                  amount: s,
                }
              );
            },
            fromAmino: (e) => {
              let {
                delegator_address: t,
                validator_src_address: n,
                validator_dst_address: r,
                amount: s,
              } = e;
              return {
                delegatorAddress: t,
                validatorSrcAddress: n,
                validatorDstAddress: r,
                amount: s,
              };
            },
          },
          "/cosmos.staking.v1beta1.MsgCreateValidator": {
            aminoType: "cosmos-sdk/MsgCreateValidator",
            toAmino: (t) => {
              let {
                description: n,
                commission: r,
                minSelfDelegation: a,
                delegatorAddress: c,
                validatorAddress: u,
                pubkey: d,
                value: l,
              } = t;
              return (
                i.assertDefinedAndNotNull(n, "missing description"),
                i.assertDefinedAndNotNull(r, "missing commission"),
                i.assertDefinedAndNotNull(d, "missing pubkey"),
                i.assertDefinedAndNotNull(l, "missing value"),
                {
                  description: {
                    moniker: n.moniker,
                    identity: n.identity,
                    website: n.website,
                    security_contact: n.securityContact,
                    details: n.details,
                  },
                  commission: {
                    rate: r.rate,
                    max_rate: r.maxRate,
                    max_change_rate: r.maxChangeRate,
                  },
                  min_self_delegation: a,
                  delegator_address: c,
                  validator_address: u,
                  pubkey: s.encodeBech32Pubkey(
                    {
                      type: "tendermint/PubKeySecp256k1",
                      value: o.toBase64(d.value),
                    },
                    e,
                  ),
                  value: l,
                }
              );
            },
            fromAmino: (e) => {
              let {
                description: t,
                commission: n,
                min_self_delegation: r,
                delegator_address: i,
                validator_address: a,
                pubkey: c,
                value: u,
              } = e;
              const d = s.decodeBech32Pubkey(c);
              if ("tendermint/PubKeySecp256k1" !== d.type)
                throw new Error("Only Secp256k1 public keys are supported");
              return {
                description: {
                  moniker: t.moniker,
                  identity: t.identity,
                  website: t.website,
                  securityContact: t.security_contact,
                  details: t.details,
                },
                commission: {
                  rate: n.rate,
                  maxRate: n.max_rate,
                  maxChangeRate: n.max_change_rate,
                },
                minSelfDelegation: r,
                delegatorAddress: i,
                validatorAddress: a,
                pubkey: {
                  typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                  value: o.fromBase64(d.value),
                },
                value: u,
              };
            },
          },
          "/cosmos.staking.v1beta1.MsgDelegate": {
            aminoType: "cosmos-sdk/MsgDelegate",
            toAmino: (e) => {
              let { delegatorAddress: t, validatorAddress: n, amount: r } = e;
              return (
                i.assertDefinedAndNotNull(r, "missing amount"),
                { delegator_address: t, validator_address: n, amount: r }
              );
            },
            fromAmino: (e) => {
              let { delegator_address: t, validator_address: n, amount: r } = e;
              return { delegatorAddress: t, validatorAddress: n, amount: r };
            },
          },
          "/cosmos.staking.v1beta1.MsgEditValidator": {
            aminoType: "cosmos-sdk/MsgEditValidator",
            toAmino: (e) => {
              let {
                description: t,
                commissionRate: n,
                minSelfDelegation: r,
                validatorAddress: s,
              } = e;
              return (
                i.assertDefinedAndNotNull(t, "missing description"),
                {
                  description: {
                    moniker: t.moniker,
                    identity: t.identity,
                    website: t.website,
                    security_contact: t.securityContact,
                    details: t.details,
                  },
                  commission_rate: n,
                  min_self_delegation: r,
                  validator_address: s,
                }
              );
            },
            fromAmino: (e) => {
              let {
                description: t,
                commission_rate: n,
                min_self_delegation: r,
                validator_address: s,
              } = e;
              return {
                description: {
                  moniker: t.moniker,
                  identity: t.identity,
                  website: t.website,
                  securityContact: t.security_contact,
                  details: t.details,
                },
                commissionRate: n,
                minSelfDelegation: r,
                validatorAddress: s,
              };
            },
          },
          "/cosmos.staking.v1beta1.MsgUndelegate": {
            aminoType: "cosmos-sdk/MsgUndelegate",
            toAmino: (e) => {
              let { delegatorAddress: t, validatorAddress: n, amount: r } = e;
              return (
                i.assertDefinedAndNotNull(r, "missing amount"),
                { delegator_address: t, validator_address: n, amount: r }
              );
            },
            fromAmino: (e) => {
              let { delegator_address: t, validator_address: n, amount: r } = e;
              return { delegatorAddress: t, validatorAddress: n, amount: r };
            },
          },
          "/ibc.applications.transfer.v1.MsgTransfer": {
            aminoType: "cosmos-sdk/MsgTransfer",
            toAmino: (e) => {
              let {
                sourcePort: t,
                sourceChannel: n,
                token: r,
                sender: s,
                receiver: o,
                timeoutHeight: i,
                timeoutTimestamp: a,
              } = e;
              var c, u, l;
              return {
                source_port: t,
                source_channel: n,
                token: r,
                sender: s,
                receiver: o,
                timeout_height: i
                  ? {
                      revision_height:
                        null === (c = d(i.revisionHeight)) || void 0 === c
                          ? void 0
                          : c.toString(),
                      revision_number:
                        null === (u = d(i.revisionNumber)) || void 0 === u
                          ? void 0
                          : u.toString(),
                    }
                  : {},
                timeout_timestamp:
                  null === (l = d(a)) || void 0 === l ? void 0 : l.toString(),
              };
            },
            fromAmino: (e) => {
              let {
                source_port: t,
                source_channel: n,
                token: r,
                sender: s,
                receiver: o,
                timeout_height: i,
                timeout_timestamp: a,
              } = e;
              return {
                sourcePort: t,
                sourceChannel: n,
                token: r,
                sender: s,
                receiver: o,
                timeoutHeight: i
                  ? {
                      revisionHeight: u.default.fromString(
                        i.revision_height || "0",
                        !0,
                      ),
                      revisionNumber: u.default.fromString(
                        i.revision_number || "0",
                        !0,
                      ),
                    }
                  : void 0,
                timeoutTimestamp: u.default.fromString(a || "0", !0),
              };
            },
          },
        };
      }
      class AminoTypes {
        constructor(e) {
          let { additions: t = {}, prefix: n = "cosmos" } =
            void 0 === e ? {} : e;
          const r = Object.values(t),
            s = Object.entries(l(n)).reduce((e, t) => {
              let [n, s] = t;
              return r.find((e) => {
                let { aminoType: t } = e;
                return s.aminoType === t;
              })
                ? e
                : Object.assign(Object.assign({}, e), { [n]: s });
            }, {});
          this.register = Object.assign(Object.assign({}, s), t);
        }
        toAmino(e) {
          let { typeUrl: t, value: n } = e;
          const r = this.register[t];
          if (!r)
            throw new Error(
              "Type URL does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.",
            );
          return { type: r.aminoType, value: r.toAmino(n) };
        }
        fromAmino(e) {
          let { type: t, value: n } = e;
          const r = Object.entries(this.register).find((e) => {
            let [n, { aminoType: r }] = e;
            return r === t;
          });
          if (!r)
            throw new Error(
              "Type does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.",
            );
          const [s, o] = r;
          return { typeUrl: s, value: o.fromAmino(n) };
        }
      }
      t.AminoTypes = AminoTypes;
    },
    3563: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createProtobufRpcClient =
          t.createPagination =
          t.setupStakingExtension =
          t.setupIbcExtension =
          t.setupGovExtension =
          t.setupDistributionExtension =
          t.setupBankExtension =
          t.setupAuthExtension =
          t.QueryClient =
            void 0));
      var r = n(4409);
      Object.defineProperty(t, "QueryClient", {
        enumerable: !0,
        get: function () {
          return r.QueryClient;
        },
      });
      var s = n(4425);
      Object.defineProperty(t, "setupAuthExtension", {
        enumerable: !0,
        get: function () {
          return s.setupAuthExtension;
        },
      });
      var o = n(4427);
      Object.defineProperty(t, "setupBankExtension", {
        enumerable: !0,
        get: function () {
          return o.setupBankExtension;
        },
      });
      var i = n(4429);
      Object.defineProperty(t, "setupDistributionExtension", {
        enumerable: !0,
        get: function () {
          return i.setupDistributionExtension;
        },
      });
      var a = n(4432);
      Object.defineProperty(t, "setupGovExtension", {
        enumerable: !0,
        get: function () {
          return a.setupGovExtension;
        },
      });
      var c = n(4434);
      Object.defineProperty(t, "setupIbcExtension", {
        enumerable: !0,
        get: function () {
          return c.setupIbcExtension;
        },
      });
      var u = n(4444);
      Object.defineProperty(t, "setupStakingExtension", {
        enumerable: !0,
        get: function () {
          return u.setupStakingExtension;
        },
      });
      var d = n(2956);
      (Object.defineProperty(t, "createPagination", {
        enumerable: !0,
        get: function () {
          return d.createPagination;
        },
      }),
        Object.defineProperty(t, "createProtobufRpcClient", {
          enumerable: !0,
          get: function () {
            return d.createProtobufRpcClient;
          },
        }));
    },
    3575: function (e, t, n) {
      "use strict";
      function r(e) {
        return void 0 !== e.height;
      }
      function s(e) {
        return void 0 !== e.sentFromOrTo;
      }
      function o(e) {
        return void 0 !== e.tags;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSearchByTagsQuery =
          t.isSearchBySentFromOrToQuery =
          t.isSearchByHeightQuery =
            void 0),
        (t.isSearchByHeightQuery = r),
        (t.isSearchBySentFromOrToQuery = s),
        (t.isSearchByTagsQuery = o));
    },
    3576: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StargateClient =
          t.assertIsBroadcastTxSuccess =
          t.isBroadcastTxSuccess =
          t.isBroadcastTxFailure =
          t.TimeoutError =
            void 0));
      const r = n(2762),
        s = n(2796),
        o = n(3577),
        i = n(2815),
        a = n(3561),
        c = n(3563),
        u = n(3575);
      class TimeoutError extends Error {
        constructor(e, t) {
          (super(e), (this.txId = t));
        }
      }
      function d(e) {
        return !!e.code;
      }
      function l(e) {
        return !d(e);
      }
      function m(e) {
        if (d(e))
          throw new Error(
            `Error when broadcasting tx ${e.transactionHash} at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`,
          );
      }
      ((t.TimeoutError = TimeoutError),
        (t.isBroadcastTxFailure = d),
        (t.isBroadcastTxSuccess = l),
        (t.assertIsBroadcastTxSuccess = m));
      class StargateClient {
        constructor(e) {
          e &&
            ((this.tmClient = e),
            (this.queryClient = c.QueryClient.withExtensions(
              e,
              c.setupAuthExtension,
              c.setupBankExtension,
              c.setupStakingExtension,
            )));
        }
        static async connect(e) {
          const t = await o.Tendermint34Client.connect(e);
          return new StargateClient(t);
        }
        getTmClient() {
          return this.tmClient;
        }
        forceGetTmClient() {
          if (!this.tmClient)
            throw new Error(
              "Tendermint client not available. You cannot use online functionality in offline mode.",
            );
          return this.tmClient;
        }
        getQueryClient() {
          return this.queryClient;
        }
        forceGetQueryClient() {
          if (!this.queryClient)
            throw new Error(
              "Query client not available. You cannot use online functionality in offline mode.",
            );
          return this.queryClient;
        }
        async getChainId() {
          if (!this.chainId) {
            const e = await this.forceGetTmClient().status(),
              t = e.nodeInfo.network;
            if (!t) throw new Error("Chain ID must not be empty");
            this.chainId = t;
          }
          return this.chainId;
        }
        async getHeight() {
          const e = await this.forceGetTmClient().status();
          return e.syncInfo.latestBlockHeight;
        }
        async getAccount(e) {
          try {
            const t = await this.forceGetQueryClient().auth.account(e);
            return t ? a.accountFromAny(t) : null;
          } catch (t) {
            if (/rpc error: code = NotFound/i.test(t)) return null;
            throw t;
          }
        }
        async getAccountVerified(e) {
          const t = await this.forceGetQueryClient().auth.verified.account(e);
          return t ? a.accountFromAny(t) : null;
        }
        async getSequence(e) {
          const t = await this.getAccount(e);
          if (!t)
            throw new Error(
              "Account does not exist on chain. Send some tokens there before trying to query sequence.",
            );
          return { accountNumber: t.accountNumber, sequence: t.sequence };
        }
        async getBlock(e) {
          const t = await this.forceGetTmClient().block(e);
          return {
            id: r.toHex(t.blockId.hash).toUpperCase(),
            header: {
              version: {
                block: new s.Uint53(t.block.header.version.block).toString(),
                app: new s.Uint53(t.block.header.version.app).toString(),
              },
              height: t.block.header.height,
              chainId: t.block.header.chainId,
              time: o.toRfc3339WithNanoseconds(t.block.header.time),
            },
            txs: t.block.txs,
          };
        }
        async getBalance(e, t) {
          return this.forceGetQueryClient().bank.balance(e, t);
        }
        async getAllBalances(e) {
          return this.forceGetQueryClient().bank.allBalances(e);
        }
        async getDelegation(e, t) {
          var n;
          let r;
          try {
            r =
              null ===
                (n = (await this.forceGetQueryClient().staking.delegation(e, t))
                  .delegationResponse) || void 0 === n
                ? void 0
                : n.balance;
          } catch (s) {
            if (!s.toString().includes("key not found")) throw s;
          }
          return r || null;
        }
        async getTx(e) {
          var t;
          const n = await this.txsQuery(`tx.hash='${e}'`);
          return null !== (t = n[0]) && void 0 !== t ? t : null;
        }
        async searchTx(e, t) {
          void 0 === t && (t = {});
          const n = t.minHeight || 0,
            r = t.maxHeight || Number.MAX_SAFE_INTEGER;
          if (r < n) return [];
          function s(e) {
            return `${e} AND tx.height>=${n} AND tx.height<=${r}`;
          }
          let o;
          if (u.isSearchByHeightQuery(e))
            o =
              e.height >= n && e.height <= r
                ? await this.txsQuery("tx.height=" + e.height)
                : [];
          else if (u.isSearchBySentFromOrToQuery(e)) {
            const t = s(
                `message.module='bank' AND transfer.sender='${e.sentFromOrTo}'`,
              ),
              n = s(
                `message.module='bank' AND transfer.recipient='${e.sentFromOrTo}'`,
              ),
              [r, i] = await Promise.all([t, n].map((e) => this.txsQuery(e))),
              a = r.map((e) => e.hash);
            o = [...r, ...i.filter((e) => !a.includes(e.hash))];
          } else {
            if (!u.isSearchByTagsQuery(e))
              throw new Error("Unknown query type");
            {
              const t = s(
                e.tags.map((e) => `${e.key}='${e.value}'`).join(" AND "),
              );
              o = await this.txsQuery(t);
            }
          }
          const i = o.filter((e) => e.height >= n && e.height <= r);
          return i;
        }
        disconnect() {
          this.tmClient && this.tmClient.disconnect();
        }
        async broadcastTx(e, t, n) {
          (void 0 === t && (t = 6e4), void 0 === n && (n = 3e3));
          let s = !1;
          const o = setTimeout(() => {
              s = !0;
            }, t),
            a = async (e) => {
              if (s)
                throw new TimeoutError(
                  `Transaction with ID ${e} was submitted but was not yet found on the chain. You might want to check later.`,
                  e,
                );
              await i.sleep(n);
              const t = await this.getTx(e);
              return t
                ? {
                    code: t.code,
                    height: t.height,
                    rawLog: t.rawLog,
                    transactionHash: e,
                    gasUsed: t.gasUsed,
                    gasWanted: t.gasWanted,
                  }
                : a(e);
            },
            c = await this.forceGetTmClient().broadcastTxSync({ tx: e });
          if (c.code)
            throw new Error(
              `Broadcasting transaction failed with code ${c.code} (codespace: ${c.codeSpace}). Log: ${c.log}`,
            );
          const u = r.toHex(c.hash).toUpperCase();
          return new Promise((e, t) =>
            a(u).then(
              (t) => {
                (clearTimeout(o), e(t));
              },
              (e) => {
                (clearTimeout(o), t(e));
              },
            ),
          );
        }
        async txsQuery(e) {
          const t = await this.forceGetTmClient().txSearchAll({ query: e });
          return t.txs.map((e) => ({
            height: e.height,
            hash: r.toHex(e.hash).toUpperCase(),
            code: e.result.code,
            rawLog: e.result.log || "",
            tx: e.tx,
            gasUsed: e.result.gasUsed,
            gasWanted: e.result.gasWanted,
          }));
        }
      }
      t.StargateClient = StargateClient;
    },
    3577: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (s(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Tendermint34Client =
          t.tendermint34 =
          t.SubscriptionEventType =
          t.Method =
          t.VoteType =
          t.broadcastTxSyncSuccess =
          t.broadcastTxCommitSuccess =
          t.Tendermint33Client =
          t.tendermint33 =
          t.BlockIdFlag =
          t.WebsocketClient =
          t.HttpClient =
          t.toSeconds =
          t.toRfc3339WithNanoseconds =
          t.fromSeconds =
          t.fromRfc3339WithNanoseconds =
          t.DateTime =
          t.rawSecp256k1PubkeyToRawAddress =
          t.rawEd25519PubkeyToRawAddress =
          t.pubkeyToRawAddress =
          t.pubkeyToAddress =
            void 0));
      var i = n(4446);
      (Object.defineProperty(t, "pubkeyToAddress", {
        enumerable: !0,
        get: function () {
          return i.pubkeyToAddress;
        },
      }),
        Object.defineProperty(t, "pubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return i.pubkeyToRawAddress;
          },
        }),
        Object.defineProperty(t, "rawEd25519PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return i.rawEd25519PubkeyToRawAddress;
          },
        }),
        Object.defineProperty(t, "rawSecp256k1PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return i.rawSecp256k1PubkeyToRawAddress;
          },
        }));
      var a = n(3327);
      (Object.defineProperty(t, "DateTime", {
        enumerable: !0,
        get: function () {
          return a.DateTime;
        },
      }),
        Object.defineProperty(t, "fromRfc3339WithNanoseconds", {
          enumerable: !0,
          get: function () {
            return a.fromRfc3339WithNanoseconds;
          },
        }),
        Object.defineProperty(t, "fromSeconds", {
          enumerable: !0,
          get: function () {
            return a.fromSeconds;
          },
        }),
        Object.defineProperty(t, "toRfc3339WithNanoseconds", {
          enumerable: !0,
          get: function () {
            return a.toRfc3339WithNanoseconds;
          },
        }),
        Object.defineProperty(t, "toSeconds", {
          enumerable: !0,
          get: function () {
            return a.toSeconds;
          },
        }));
      var c = n(3328);
      (Object.defineProperty(t, "HttpClient", {
        enumerable: !0,
        get: function () {
          return c.HttpClient;
        },
      }),
        Object.defineProperty(t, "WebsocketClient", {
          enumerable: !0,
          get: function () {
            return c.WebsocketClient;
          },
        }));
      var u = n(3330);
      (Object.defineProperty(t, "BlockIdFlag", {
        enumerable: !0,
        get: function () {
          return u.BlockIdFlag;
        },
      }),
        (t.tendermint33 = o(n(3583))));
      var d = n(3583);
      (Object.defineProperty(t, "Tendermint33Client", {
        enumerable: !0,
        get: function () {
          return d.Tendermint33Client;
        },
      }),
        Object.defineProperty(t, "broadcastTxCommitSuccess", {
          enumerable: !0,
          get: function () {
            return d.broadcastTxCommitSuccess;
          },
        }),
        Object.defineProperty(t, "broadcastTxSyncSuccess", {
          enumerable: !0,
          get: function () {
            return d.broadcastTxSyncSuccess;
          },
        }),
        Object.defineProperty(t, "VoteType", {
          enumerable: !0,
          get: function () {
            return d.VoteType;
          },
        }),
        Object.defineProperty(t, "Method", {
          enumerable: !0,
          get: function () {
            return d.Method;
          },
        }),
        Object.defineProperty(t, "SubscriptionEventType", {
          enumerable: !0,
          get: function () {
            return d.SubscriptionEventType;
          },
        }),
        (t.tendermint34 = o(n(3585))));
      var l = n(3585);
      Object.defineProperty(t, "Tendermint34Client", {
        enumerable: !0,
        get: function () {
          return l.Tendermint34Client;
        },
      });
    },
    3580: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QueueingStreamingSocket = t.ConnectionStatus = void 0));
      const r = n(3154),
        s = n(2955),
        o = n(3581);
      var i;
      (function (e) {
        ((e[(e["Unconnected"] = 0)] = "Unconnected"),
          (e[(e["Connecting"] = 1)] = "Connecting"),
          (e[(e["Connected"] = 2)] = "Connected"),
          (e[(e["Disconnected"] = 3)] = "Disconnected"));
      })((i = t.ConnectionStatus || (t.ConnectionStatus = {})));
      class QueueingStreamingSocket {
        constructor(e, t, n) {
          (void 0 === t && (t = 1e4),
            (this.queue = []),
            (this.isProcessingQueue = !1),
            (this.url = e),
            (this.timeout = t),
            (this.reconnectedHandler = n));
          const a = {
            start: (e) => (this.eventProducerListener = e),
            stop: () => (this.eventProducerListener = void 0),
          };
          ((this.events = s.Stream.create(a)),
            (this.connectionStatusProducer = new r.DefaultValueProducer(
              i.Unconnected,
            )),
            (this.connectionStatus = new r.ValueAndUpdates(
              this.connectionStatusProducer,
            )),
            (this.socket = new o.StreamingSocket(this.url, this.timeout)),
            this.socket.events.subscribe({
              next: (e) => {
                if (!this.eventProducerListener)
                  throw new Error("No event producer listener set");
                this.eventProducerListener.next(e);
              },
              error: () => this.connectionStatusProducer.update(i.Disconnected),
            }));
        }
        connect() {
          (this.connectionStatusProducer.update(i.Connecting),
            this.socket.connected.then(
              async () => (
                this.connectionStatusProducer.update(i.Connected),
                this.processQueue()
              ),
              () => this.connectionStatusProducer.update(i.Disconnected),
            ),
            this.socket.connect());
        }
        disconnect() {
          (this.connectionStatusProducer.update(i.Disconnected),
            this.socket.disconnect());
        }
        reconnect() {
          ((this.socket = new o.StreamingSocket(this.url, this.timeout)),
            this.socket.events.subscribe({
              next: (e) => {
                if (!this.eventProducerListener)
                  throw new Error("No event producer listener set");
                this.eventProducerListener.next(e);
              },
              error: () => this.connectionStatusProducer.update(i.Disconnected),
            }),
            this.socket.connected.then(() => {
              this.reconnectedHandler && this.reconnectedHandler();
            }),
            this.connect());
        }
        getQueueLength() {
          return this.queue.length;
        }
        queueRequest(e) {
          (this.queue.push(e), this.processQueue());
        }
        async processQueue() {
          if (
            this.isProcessingQueue ||
            this.connectionStatus.value !== i.Connected
          )
            return;
          let e;
          this.isProcessingQueue = !0;
          while ((e = this.queue.shift()))
            try {
              (await this.socket.send(e), (this.isProcessingQueue = !1));
            } catch (t) {
              return (
                this.queue.unshift(e),
                void (this.isProcessingQueue = !1)
              );
            }
        }
      }
      t.QueueingStreamingSocket = QueueingStreamingSocket;
    },
    3581: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StreamingSocket = void 0));
      const r = n(2955),
        s = n(3582);
      class StreamingSocket {
        constructor(e, t) {
          (void 0 === t && (t = 1e4),
            (this.socket = new s.SocketWrapper(
              e,
              (e) => {
                this.eventProducerListener &&
                  this.eventProducerListener.next(e);
              },
              (e) => {
                this.eventProducerListener &&
                  this.eventProducerListener.error(e);
              },
              () => {},
              (e) => {
                this.eventProducerListener &&
                  (e.wasClean
                    ? this.eventProducerListener.complete()
                    : this.eventProducerListener.error(
                        "Socket was closed unclean",
                      ));
              },
              t,
            )),
            (this.connected = this.socket.connected));
          const n = {
            start: (e) => (this.eventProducerListener = e),
            stop: () => (this.eventProducerListener = void 0),
          };
          this.events = r.Stream.create(n);
        }
        connect() {
          this.socket.connect();
        }
        disconnect() {
          this.socket.disconnect();
        }
        async send(e) {
          return this.socket.send(e);
        }
      }
      t.StreamingSocket = StreamingSocket;
    },
    3582: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SocketWrapper = void 0));
        const s = r(n(4454));
        function o() {
          return (
            "undefined" !== typeof e &&
            "undefined" !== typeof e.versions &&
            "undefined" !== typeof e.versions.node
          );
        }
        class SocketWrapper {
          constructor(e, t, n, r, s, o) {
            (void 0 === o && (o = 1e4),
              (this.closed = !1),
              (this.connected = new Promise((e, t) => {
                ((this.connectedResolver = e), (this.connectedRejecter = t));
              })),
              (this.url = e),
              (this.messageHandler = t),
              (this.errorHandler = n),
              (this.openHandler = r),
              (this.closeHandler = s),
              (this.timeout = o));
          }
          connect() {
            const e = new s.default(this.url);
            ((e.onerror = (e) => {
              (this.clearTimeout(), this.errorHandler && this.errorHandler(e));
            }),
              (e.onmessage = (e) => {
                this.messageHandler({ type: e.type, data: e.data });
              }),
              (e.onopen = (e) => {
                (this.clearTimeout(),
                  this.connectedResolver(),
                  this.openHandler && this.openHandler());
              }),
              (e.onclose = (e) => {
                ((this.closed = !0), this.closeHandler && this.closeHandler(e));
              }));
            const t = Date.now();
            ((this.timeoutId = setTimeout(() => {
              ((e.onmessage = () => 0),
                (e.onerror = () => 0),
                (e.onopen = () => 0),
                (e.onclose = () => 0),
                e.close(),
                (this.socket = void 0));
              const n = Math.floor(Date.now() - t);
              this.connectedRejecter(
                `Connection attempt timed out after ${n} ms`,
              );
            }, this.timeout)),
              (this.socket = e));
          }
          disconnect() {
            if (!this.socket)
              throw new Error(
                "Socket undefined. This must be called after connecting.",
              );
            switch ((this.clearTimeout(), this.socket.readyState)) {
              case s.default.OPEN:
                this.socket.close(1e3);
                break;
              case s.default.CLOSED:
                break;
              case s.default.CONNECTING:
                ((this.socket.onopen = () => 0),
                  (this.socket.onclose = () => 0),
                  (this.socket.onerror = () => 0),
                  (this.socket.onmessage = () => 0),
                  (this.socket = void 0),
                  this.closeHandler &&
                    this.closeHandler({ wasClean: !1, code: 4001 }));
                break;
              case s.default.CLOSING:
                break;
              default:
                throw new Error(
                  "Unknown readyState: " + this.socket.readyState,
                );
            }
          }
          async send(e) {
            return new Promise((t, n) => {
              if (!this.socket)
                throw new Error(
                  "Socket undefined. This must be called after connecting.",
                );
              if (this.closed)
                throw new Error(
                  "Socket was closed, so no data can be sent anymore.",
                );
              if (this.socket.readyState !== s.default.OPEN)
                throw new Error("Websocket is not open");
              o()
                ? this.socket.send(e, (e) => (e ? n(e) : t()))
                : (this.socket.send(e), t());
            });
          }
          clearTimeout() {
            if (!this.timeoutId)
              throw new Error(
                "Timeout ID not set. This should not happen and usually means connect() was not called.",
              );
            clearTimeout(this.timeoutId);
          }
        }
        t.SocketWrapper = SocketWrapper;
      }).call(this, n(18));
    },
    3583: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoteType =
          t.broadcastTxSyncSuccess =
          t.broadcastTxCommitSuccess =
          t.SubscriptionEventType =
          t.Method =
          t.Tendermint33Client =
            void 0));
      var r = n(4456);
      Object.defineProperty(t, "Tendermint33Client", {
        enumerable: !0,
        get: function () {
          return r.Tendermint33Client;
        },
      });
      var s = n(3332);
      (Object.defineProperty(t, "Method", {
        enumerable: !0,
        get: function () {
          return s.Method;
        },
      }),
        Object.defineProperty(t, "SubscriptionEventType", {
          enumerable: !0,
          get: function () {
            return s.SubscriptionEventType;
          },
        }));
      var o = n(4460);
      (Object.defineProperty(t, "broadcastTxCommitSuccess", {
        enumerable: !0,
        get: function () {
          return o.broadcastTxCommitSuccess;
        },
      }),
        Object.defineProperty(t, "broadcastTxSyncSuccess", {
          enumerable: !0,
          get: function () {
            return o.broadcastTxSyncSuccess;
          },
        }),
        Object.defineProperty(t, "VoteType", {
          enumerable: !0,
          get: function () {
            return o.VoteType;
          },
        }));
    },
    3584: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashBlock = t.hashTx = void 0));
      const r = n(2800),
        s = n(3331);
      function o(e) {
        return r.sha256(e);
      }
      function i(e) {
        if (e < 1) throw new Error("Cannot split an empty tree");
        const t = 2 ** Math.floor(Math.log2(e));
        return t < e ? t : t / 2;
      }
      function a(e) {
        const t = new r.Sha256(Uint8Array.from([0]));
        return (t.update(e), t.digest());
      }
      function c(e, t) {
        const n = new r.Sha256(Uint8Array.from([1]));
        return (n.update(e), n.update(t), n.digest());
      }
      function u(e) {
        switch (e.length) {
          case 0:
            throw new Error("Cannot hash empty tree");
          case 1:
            return a(e[0]);
          default: {
            const t = i(e.length),
              n = u(e.slice(0, t)),
              r = u(e.slice(t));
            return c(n, r);
          }
        }
      }
      function d(e) {
        const t = [
          s.encodeVersion(e.version),
          s.encodeString(e.chainId),
          s.encodeInt(e.height),
          s.encodeTime(e.time),
          s.encodeBlockId(e.lastBlockId),
          s.encodeBytes(e.lastCommitHash),
          s.encodeBytes(e.dataHash),
          s.encodeBytes(e.validatorsHash),
          s.encodeBytes(e.nextValidatorsHash),
          s.encodeBytes(e.consensusHash),
          s.encodeBytes(e.appHash),
          s.encodeBytes(e.lastResultsHash),
          s.encodeBytes(e.evidenceHash),
          s.encodeBytes(e.proposerAddress),
        ];
        return u(t);
      }
      ((t.hashTx = o), (t.hashBlock = d));
    },
    3585: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoteType =
          t.broadcastTxSyncSuccess =
          t.broadcastTxCommitSuccess =
          t.SubscriptionEventType =
          t.Method =
          t.Tendermint34Client =
            void 0));
      var r = n(4461);
      Object.defineProperty(t, "Tendermint34Client", {
        enumerable: !0,
        get: function () {
          return r.Tendermint34Client;
        },
      });
      var s = n(3334);
      (Object.defineProperty(t, "Method", {
        enumerable: !0,
        get: function () {
          return s.Method;
        },
      }),
        Object.defineProperty(t, "SubscriptionEventType", {
          enumerable: !0,
          get: function () {
            return s.SubscriptionEventType;
          },
        }));
      var o = n(4465);
      (Object.defineProperty(t, "broadcastTxCommitSuccess", {
        enumerable: !0,
        get: function () {
          return o.broadcastTxCommitSuccess;
        },
      }),
        Object.defineProperty(t, "broadcastTxSyncSuccess", {
          enumerable: !0,
          get: function () {
            return o.broadcastTxSyncSuccess;
          },
        }),
        Object.defineProperty(t, "VoteType", {
          enumerable: !0,
          get: function () {
            return o.VoteType;
          },
        }));
    },
    3586: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashBlock = t.hashTx = void 0));
      const r = n(2800),
        s = n(3333);
      function o(e) {
        return r.sha256(e);
      }
      function i(e) {
        if (e < 1) throw new Error("Cannot split an empty tree");
        const t = 2 ** Math.floor(Math.log2(e));
        return t < e ? t : t / 2;
      }
      function a(e) {
        const t = new r.Sha256(Uint8Array.from([0]));
        return (t.update(e), t.digest());
      }
      function c(e, t) {
        const n = new r.Sha256(Uint8Array.from([1]));
        return (n.update(e), n.update(t), n.digest());
      }
      function u(e) {
        switch (e.length) {
          case 0:
            throw new Error("Cannot hash empty tree");
          case 1:
            return a(e[0]);
          default: {
            const t = i(e.length),
              n = u(e.slice(0, t)),
              r = u(e.slice(t));
            return c(n, r);
          }
        }
      }
      function d(e) {
        if (!e.lastBlockId)
          throw new Error(
            "Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.",
          );
        const t = [
          s.encodeVersion(e.version),
          s.encodeString(e.chainId),
          s.encodeInt(e.height),
          s.encodeTime(e.time),
          s.encodeBlockId(e.lastBlockId),
          s.encodeBytes(e.lastCommitHash),
          s.encodeBytes(e.dataHash),
          s.encodeBytes(e.validatorsHash),
          s.encodeBytes(e.nextValidatorsHash),
          s.encodeBytes(e.consensusHash),
          s.encodeBytes(e.appHash),
          s.encodeBytes(e.lastResultsHash),
          s.encodeBytes(e.evidenceHash),
          s.encodeBytes(e.proposerAddress),
        ];
        return u(t);
      }
      ((t.hashTx = o), (t.hashBlock = d));
    },
    3914: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (s(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBroadcastTxSuccess =
          t.isBroadcastTxFailure =
          t.assertIsBroadcastTxSuccess =
          t.isSearchByTagsQuery =
          t.isSearchBySentFromOrToQuery =
          t.isSearchByHeightQuery =
          t.setupStakingExtension =
          t.setupIbcExtension =
          t.setupGovExtension =
          t.setupDistributionExtension =
          t.setupBankExtension =
          t.setupAuthExtension =
          t.QueryClient =
          t.createProtobufRpcClient =
          t.createPagination =
          t.makeMultisignedTx =
          t.logs =
          t.GasPrice =
          t.calculateFee =
          t.isMsgWithdrawDelegatorRewardEncodeObject =
          t.isMsgVoteEncodeObject =
          t.isMsgUndelegateEncodeObject =
          t.isMsgTransferEncodeObject =
          t.isMsgSubmitProposalEncodeObject =
          t.isMsgSendEncodeObject =
          t.isMsgDepositEncodeObject =
          t.isMsgDelegateEncodeObject =
          t.AminoTypes =
          t.isAminoMsgWithdrawValidatorCommission =
          t.isAminoMsgWithdrawDelegatorReward =
          t.isAminoMsgVote =
          t.isAminoMsgVerifyInvariant =
          t.isAminoMsgUnjail =
          t.isAminoMsgUndelegate =
          t.isAminoMsgSubmitProposal =
          t.isAminoMsgSubmitEvidence =
          t.isAminoMsgSetWithdrawAddress =
          t.isAminoMsgSend =
          t.isAminoMsgMultiSend =
          t.isAminoMsgFundCommunityPool =
          t.isAminoMsgEditValidator =
          t.isAminoMsgDeposit =
          t.isAminoMsgDelegate =
          t.isAminoMsgCreateValidator =
          t.isAminoMsgBeginRedelegate =
          t.accountFromAny =
          t.parseCoins =
          t.makeCosmoshubPath =
          t.coins =
          t.coin =
            void 0),
        (t.SigningStargateClient =
          t.defaultRegistryTypes =
          t.TimeoutError =
          t.StargateClient =
            void 0));
      var i = n(2968);
      (Object.defineProperty(t, "coin", {
        enumerable: !0,
        get: function () {
          return i.coin;
        },
      }),
        Object.defineProperty(t, "coins", {
          enumerable: !0,
          get: function () {
            return i.coins;
          },
        }),
        Object.defineProperty(t, "makeCosmoshubPath", {
          enumerable: !0,
          get: function () {
            return i.makeCosmoshubPath;
          },
        }),
        Object.defineProperty(t, "parseCoins", {
          enumerable: !0,
          get: function () {
            return i.parseCoins;
          },
        }));
      var a = n(3561);
      Object.defineProperty(t, "accountFromAny", {
        enumerable: !0,
        get: function () {
          return a.accountFromAny;
        },
      });
      var c = n(4404);
      (Object.defineProperty(t, "isAminoMsgBeginRedelegate", {
        enumerable: !0,
        get: function () {
          return c.isAminoMsgBeginRedelegate;
        },
      }),
        Object.defineProperty(t, "isAminoMsgCreateValidator", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgCreateValidator;
          },
        }),
        Object.defineProperty(t, "isAminoMsgDelegate", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgDelegate;
          },
        }),
        Object.defineProperty(t, "isAminoMsgDeposit", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgDeposit;
          },
        }),
        Object.defineProperty(t, "isAminoMsgEditValidator", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgEditValidator;
          },
        }),
        Object.defineProperty(t, "isAminoMsgFundCommunityPool", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgFundCommunityPool;
          },
        }),
        Object.defineProperty(t, "isAminoMsgMultiSend", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgMultiSend;
          },
        }),
        Object.defineProperty(t, "isAminoMsgSend", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgSend;
          },
        }),
        Object.defineProperty(t, "isAminoMsgSetWithdrawAddress", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgSetWithdrawAddress;
          },
        }),
        Object.defineProperty(t, "isAminoMsgSubmitEvidence", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgSubmitEvidence;
          },
        }),
        Object.defineProperty(t, "isAminoMsgSubmitProposal", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgSubmitProposal;
          },
        }),
        Object.defineProperty(t, "isAminoMsgUndelegate", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgUndelegate;
          },
        }),
        Object.defineProperty(t, "isAminoMsgUnjail", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgUnjail;
          },
        }),
        Object.defineProperty(t, "isAminoMsgVerifyInvariant", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgVerifyInvariant;
          },
        }),
        Object.defineProperty(t, "isAminoMsgVote", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgVote;
          },
        }),
        Object.defineProperty(t, "isAminoMsgWithdrawDelegatorReward", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgWithdrawDelegatorReward;
          },
        }),
        Object.defineProperty(t, "isAminoMsgWithdrawValidatorCommission", {
          enumerable: !0,
          get: function () {
            return c.isAminoMsgWithdrawValidatorCommission;
          },
        }));
      var u = n(3562);
      Object.defineProperty(t, "AminoTypes", {
        enumerable: !0,
        get: function () {
          return u.AminoTypes;
        },
      });
      var d = n(4405);
      (Object.defineProperty(t, "isMsgDelegateEncodeObject", {
        enumerable: !0,
        get: function () {
          return d.isMsgDelegateEncodeObject;
        },
      }),
        Object.defineProperty(t, "isMsgDepositEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgDepositEncodeObject;
          },
        }),
        Object.defineProperty(t, "isMsgSendEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgSendEncodeObject;
          },
        }),
        Object.defineProperty(t, "isMsgSubmitProposalEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgSubmitProposalEncodeObject;
          },
        }),
        Object.defineProperty(t, "isMsgTransferEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgTransferEncodeObject;
          },
        }),
        Object.defineProperty(t, "isMsgUndelegateEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgUndelegateEncodeObject;
          },
        }),
        Object.defineProperty(t, "isMsgVoteEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgVoteEncodeObject;
          },
        }),
        Object.defineProperty(t, "isMsgWithdrawDelegatorRewardEncodeObject", {
          enumerable: !0,
          get: function () {
            return d.isMsgWithdrawDelegatorRewardEncodeObject;
          },
        }));
      var l = n(4406);
      (Object.defineProperty(t, "calculateFee", {
        enumerable: !0,
        get: function () {
          return l.calculateFee;
        },
      }),
        Object.defineProperty(t, "GasPrice", {
          enumerable: !0,
          get: function () {
            return l.GasPrice;
          },
        }),
        (t.logs = o(n(4407))));
      var m = n(4408);
      Object.defineProperty(t, "makeMultisignedTx", {
        enumerable: !0,
        get: function () {
          return m.makeMultisignedTx;
        },
      });
      var p = n(3563);
      (Object.defineProperty(t, "createPagination", {
        enumerable: !0,
        get: function () {
          return p.createPagination;
        },
      }),
        Object.defineProperty(t, "createProtobufRpcClient", {
          enumerable: !0,
          get: function () {
            return p.createProtobufRpcClient;
          },
        }),
        Object.defineProperty(t, "QueryClient", {
          enumerable: !0,
          get: function () {
            return p.QueryClient;
          },
        }),
        Object.defineProperty(t, "setupAuthExtension", {
          enumerable: !0,
          get: function () {
            return p.setupAuthExtension;
          },
        }),
        Object.defineProperty(t, "setupBankExtension", {
          enumerable: !0,
          get: function () {
            return p.setupBankExtension;
          },
        }),
        Object.defineProperty(t, "setupDistributionExtension", {
          enumerable: !0,
          get: function () {
            return p.setupDistributionExtension;
          },
        }),
        Object.defineProperty(t, "setupGovExtension", {
          enumerable: !0,
          get: function () {
            return p.setupGovExtension;
          },
        }),
        Object.defineProperty(t, "setupIbcExtension", {
          enumerable: !0,
          get: function () {
            return p.setupIbcExtension;
          },
        }),
        Object.defineProperty(t, "setupStakingExtension", {
          enumerable: !0,
          get: function () {
            return p.setupStakingExtension;
          },
        }));
      var h = n(3575);
      (Object.defineProperty(t, "isSearchByHeightQuery", {
        enumerable: !0,
        get: function () {
          return h.isSearchByHeightQuery;
        },
      }),
        Object.defineProperty(t, "isSearchBySentFromOrToQuery", {
          enumerable: !0,
          get: function () {
            return h.isSearchBySentFromOrToQuery;
          },
        }),
        Object.defineProperty(t, "isSearchByTagsQuery", {
          enumerable: !0,
          get: function () {
            return h.isSearchByTagsQuery;
          },
        }));
      var g = n(3576);
      (Object.defineProperty(t, "assertIsBroadcastTxSuccess", {
        enumerable: !0,
        get: function () {
          return g.assertIsBroadcastTxSuccess;
        },
      }),
        Object.defineProperty(t, "isBroadcastTxFailure", {
          enumerable: !0,
          get: function () {
            return g.isBroadcastTxFailure;
          },
        }),
        Object.defineProperty(t, "isBroadcastTxSuccess", {
          enumerable: !0,
          get: function () {
            return g.isBroadcastTxSuccess;
          },
        }),
        Object.defineProperty(t, "StargateClient", {
          enumerable: !0,
          get: function () {
            return g.StargateClient;
          },
        }),
        Object.defineProperty(t, "TimeoutError", {
          enumerable: !0,
          get: function () {
            return g.TimeoutError;
          },
        }));
      var f = n(4466);
      (Object.defineProperty(t, "defaultRegistryTypes", {
        enumerable: !0,
        get: function () {
          return f.defaultRegistryTypes;
        },
      }),
        Object.defineProperty(t, "SigningStargateClient", {
          enumerable: !0,
          get: function () {
            return f.SigningStargateClient;
          },
        }));
    },
    4404: function (e, t, n) {
      "use strict";
      function r(e) {
        return "cosmos-sdk/MsgSend" === e.type;
      }
      function s(e) {
        return "cosmos-sdk/MsgMultiSend" === e.type;
      }
      function o(e) {
        return "cosmos-sdk/MsgVerifyInvariant" === e.type;
      }
      function i(e) {
        return "cosmos-sdk/MsgModifyWithdrawAddress" === e.type;
      }
      function a(e) {
        return "cosmos-sdk/MsgWithdrawDelegationReward" === e.type;
      }
      function c(e) {
        return "cosmos-sdk/MsgWithdrawValidatorCommission" === e.type;
      }
      function u(e) {
        return "cosmos-sdk/MsgFundCommunityPool" === e.type;
      }
      function d(e) {
        return "cosmos-sdk/MsgSubmitEvidence" === e.type;
      }
      function l(e) {
        return "cosmos-sdk/MsgSubmitProposal" === e.type;
      }
      function m(e) {
        return "cosmos-sdk/MsgVote" === e.type;
      }
      function p(e) {
        return "cosmos-sdk/MsgDeposit" === e.type;
      }
      function h(e) {
        return "cosmos-sdk/MsgUnjail" === e.type;
      }
      function g(e) {
        return "cosmos-sdk/MsgCreateValidator" === e.type;
      }
      function f(e) {
        return "cosmos-sdk/MsgEditValidator" === e.type;
      }
      function y(e) {
        return "cosmos-sdk/MsgDelegate" === e.type;
      }
      function b(e) {
        return "cosmos-sdk/MsgBeginRedelegate" === e.type;
      }
      function v(e) {
        return "cosmos-sdk/MsgUndelegate" === e.type;
      }
      function w(e) {
        return "cosmos-sdk/MsgTransfer" === e.type;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAminoMsgTransfer =
          t.isAminoMsgUndelegate =
          t.isAminoMsgBeginRedelegate =
          t.isAminoMsgDelegate =
          t.isAminoMsgEditValidator =
          t.isAminoMsgCreateValidator =
          t.isAminoMsgUnjail =
          t.isAminoMsgDeposit =
          t.isAminoMsgVote =
          t.isAminoMsgSubmitProposal =
          t.isAminoMsgSubmitEvidence =
          t.isAminoMsgFundCommunityPool =
          t.isAminoMsgWithdrawValidatorCommission =
          t.isAminoMsgWithdrawDelegatorReward =
          t.isAminoMsgSetWithdrawAddress =
          t.isAminoMsgVerifyInvariant =
          t.isAminoMsgMultiSend =
          t.isAminoMsgSend =
            void 0),
        (t.isAminoMsgSend = r),
        (t.isAminoMsgMultiSend = s),
        (t.isAminoMsgVerifyInvariant = o),
        (t.isAminoMsgSetWithdrawAddress = i),
        (t.isAminoMsgWithdrawDelegatorReward = a),
        (t.isAminoMsgWithdrawValidatorCommission = c),
        (t.isAminoMsgFundCommunityPool = u),
        (t.isAminoMsgSubmitEvidence = d),
        (t.isAminoMsgSubmitProposal = l),
        (t.isAminoMsgVote = m),
        (t.isAminoMsgDeposit = p),
        (t.isAminoMsgUnjail = h),
        (t.isAminoMsgCreateValidator = g),
        (t.isAminoMsgEditValidator = f),
        (t.isAminoMsgDelegate = y),
        (t.isAminoMsgBeginRedelegate = b),
        (t.isAminoMsgUndelegate = v),
        (t.isAminoMsgTransfer = w));
    },
    4405: function (e, t, n) {
      "use strict";
      function r(e) {
        return "/cosmos.bank.v1beta1.MsgSend" === e.typeUrl;
      }
      function s(e) {
        return "/cosmos.staking.v1beta1.MsgDelegate" === e.typeUrl;
      }
      function o(e) {
        return "/cosmos.staking.v1beta1.MsgUndelegate" === e.typeUrl;
      }
      function i(e) {
        return (
          "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" ===
          e.typeUrl
        );
      }
      function a(e) {
        return "/ibc.applications.transfer.v1.MsgTransfer" === e.typeUrl;
      }
      function c(e) {
        return "/cosmos.gov.v1beta1.MsgDeposit" === e.typeUrl;
      }
      function u(e) {
        return "/cosmos.gov.v1beta1.MsgSubmitProposal" === e.typeUrl;
      }
      function d(e) {
        return "/cosmos.gov.v1beta1.MsgVote" === e.typeUrl;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isMsgVoteEncodeObject =
          t.isMsgSubmitProposalEncodeObject =
          t.isMsgDepositEncodeObject =
          t.isMsgTransferEncodeObject =
          t.isMsgWithdrawDelegatorRewardEncodeObject =
          t.isMsgUndelegateEncodeObject =
          t.isMsgDelegateEncodeObject =
          t.isMsgSendEncodeObject =
            void 0),
        (t.isMsgSendEncodeObject = r),
        (t.isMsgDelegateEncodeObject = s),
        (t.isMsgUndelegateEncodeObject = o),
        (t.isMsgWithdrawDelegatorRewardEncodeObject = i),
        (t.isMsgTransferEncodeObject = a),
        (t.isMsgDepositEncodeObject = c),
        (t.isMsgSubmitProposalEncodeObject = u),
        (t.isMsgVoteEncodeObject = d));
    },
    4406: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.calculateFee = t.GasPrice = void 0));
      const r = n(2796),
        s = n(2968);
      function o(e) {
        if (e.length < 3 || e.length > 128)
          throw new Error("Denom must be between 3 and 128 characters");
      }
      class GasPrice {
        constructor(e, t) {
          ((this.amount = e), (this.denom = t));
        }
        static fromString(e) {
          const t = e.match(/^([0-9.]+)([a-z][a-z0-9]*)$/i);
          if (!t) throw new Error("Invalid gas price string");
          const [n, s, i] = t;
          o(i);
          const a = 18,
            c = r.Decimal.fromUserInput(s, a);
          return new GasPrice(c, i);
        }
      }
      function i(e, t) {
        const n = "string" === typeof t ? GasPrice.fromString(t) : t,
          { denom: o, amount: i } = n,
          a = Math.ceil(i.multiply(new r.Uint53(e)).toFloatApproximation());
        return { amount: s.coins(a, o), gas: e.toString() };
      }
      ((t.GasPrice = GasPrice), (t.calculateFee = i));
    },
    4407: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findAttribute =
          t.parseRawLog =
          t.parseLogs =
          t.parseLog =
          t.parseEvent =
          t.parseAttribute =
            void 0));
      const r = n(2815);
      function s(e) {
        if (!r.isNonNullObject(e))
          throw new Error("Attribute must be a non-null object");
        const { key: t, value: n } = e;
        if ("string" !== typeof t || !t)
          throw new Error("Attribute's key must be a non-empty string");
        if ("string" !== typeof n && "undefined" !== typeof n)
          throw new Error("Attribute's value must be a string or unset");
        return { key: t, value: n || "" };
      }
      function o(e) {
        if (!r.isNonNullObject(e))
          throw new Error("Event must be a non-null object");
        const { type: t, attributes: n } = e;
        if ("string" !== typeof t || "" === t)
          throw new Error("Event type must be a non-empty string");
        if (!Array.isArray(n))
          throw new Error("Event's attributes must be an array");
        return { type: t, attributes: n.map(s) };
      }
      function i(e) {
        if (!r.isNonNullObject(e))
          throw new Error("Log must be a non-null object");
        const { msg_index: t, log: n, events: s } = e;
        if ("number" !== typeof t)
          throw new Error("Log's msg_index must be a number");
        if ("string" !== typeof n)
          throw new Error("Log's log must be a string");
        if (!Array.isArray(s)) throw new Error("Log's events must be an array");
        return { msg_index: t, log: n, events: s.map(o) };
      }
      function a(e) {
        if (!Array.isArray(e)) throw new Error("Logs must be an array");
        return e.map(i);
      }
      function c(e) {
        void 0 === e && (e = "[]");
        const t = JSON.parse(e).map((e, t) => {
          let { events: n } = e;
          return { msg_index: t, events: n, log: "" };
        });
        return a(t);
      }
      function u(e, t, n) {
        var r;
        const s = e.find(() => !0),
          o =
            null ===
              (r =
                null === s || void 0 === s
                  ? void 0
                  : s.events.find((e) => e.type === t)) || void 0 === r
              ? void 0
              : r.attributes.find((e) => e.key === n);
        if (!o)
          throw new Error(
            `Could not find attribute '${n}' in first event of type '${t}' in first log.`,
          );
        return o;
      }
      ((t.parseAttribute = s),
        (t.parseEvent = o),
        (t.parseLog = i),
        (t.parseLogs = a),
        (t.parseRawLog = c),
        (t.findAttribute = u));
    },
    4408: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeMultisignedTx = t.makeCompactBitArray = void 0));
      const s = n(2910),
        o = n(2762),
        i = n(2968),
        a = n(3152),
        c = n(3063),
        u = n(2937),
        d = n(2937),
        l = r(n(2754));
      function m(e) {
        const t = Math.ceil(e.length / 8),
          n = e.length - 8 * Math.floor(e.length / 8),
          r = new Uint8Array(t);
        return (
          e.forEach((e, t) => {
            const n = Math.floor(t / 8),
              s = t % 8;
            e && (r[n] |= 1 << (7 - s));
          }),
          a.CompactBitArray.fromPartial({ elems: r, extraBitsStored: n })
        );
      }
      function p(e, t, n, r, p) {
        const h = Array.from(p.keys()),
          g = o.Bech32.decode(h[0]).prefix,
          f = Array(e.value.pubkeys.length).fill(!1),
          y = new Array();
        for (let o = 0; o < e.value.pubkeys.length; o++) {
          const t = s.pubkeyToAddress(e.value.pubkeys[o], g),
            n = p.get(t);
          n && ((f[o] = !0), y.push(n));
        }
        const b = {
            publicKey: i.encodePubkey(e),
            modeInfo: {
              multi: {
                bitarray: m(f),
                modeInfos: y.map((e) => ({
                  single: { mode: c.SignMode.SIGN_MODE_LEGACY_AMINO_JSON },
                })),
              },
            },
            sequence: l.default.fromNumber(t),
          },
          v = u.AuthInfo.fromPartial({
            signerInfos: [b],
            fee: {
              amount: [...n.amount],
              gasLimit: l.default.fromString(n.gas),
            },
          }),
          w = u.AuthInfo.encode(v).finish(),
          k = d.TxRaw.fromPartial({
            bodyBytes: r,
            authInfoBytes: w,
            signatures: [
              a.MultiSignature.encode(
                a.MultiSignature.fromPartial({ signatures: y }),
              ).finish(),
            ],
          });
        return k;
      }
      ((t.makeCompactBitArray = m), (t.makeMultisignedTx = p));
    },
    4409: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QueryClient = void 0));
      const r = n(4410),
        s = n(2762),
        o = n(3154),
        i = n(2815);
      function a(e, t, n) {
        if (e.type !== t)
          throw new Error(`Op expected to be ${t}, got "${e.type}`);
        if (!i.arrayContentEquals(n, e.key))
          throw new Error(
            `Proven key different than queried key.\nQuery: ${s.toHex(n)}\nProven: ${s.toHex(e.key)}`,
          );
        return r.ics23.CommitmentProof.decode(e.data);
      }
      class QueryClient {
        constructor(e) {
          this.tmClient = e;
        }
        static withExtensions(e) {
          const t = new QueryClient(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
            s < n;
            s++
          )
            r[s - 1] = arguments[s];
          const o = r.map((e) => e(t));
          for (const a of o) {
            i.assert(
              i.isNonNullObject(a),
              "Extension must be a non-null object",
            );
            for (const [e, n] of Object.entries(a)) {
              i.assert(
                i.isNonNullObject(n),
                `Module must be a non-null object. Found type ${typeof n} for module "${e}".`,
              );
              const r = t[e] || {};
              t[e] = Object.assign(Object.assign({}, r), n);
            }
          }
          return t;
        }
        async queryVerified(e, t, n) {
          const {
              height: o,
              proof: c,
              value: u,
            } = await this.queryRawProof(e, t, n),
            d = a(c.ops[0], "ics23:iavl", t),
            l = a(c.ops[1], "ics23:simple", s.toAscii(e));
          (i.assert(l.exist),
            i.assert(l.exist.value),
            u && 0 !== u.length
              ? (i.assert(d.exist),
                i.assert(d.exist.value),
                r.verifyExistence(d.exist, r.iavlSpec, l.exist.value, t, u))
              : (i.assert(d.nonexist),
                r.verifyNonExistence(
                  d.nonexist,
                  r.iavlSpec,
                  l.exist.value,
                  t,
                )));
          const m = await this.getNextHeader(o);
          return (
            r.verifyExistence(
              l.exist,
              r.tendermintSpec,
              m.appHash,
              s.toAscii(e),
              l.exist.value,
            ),
            u
          );
        }
        async queryRawProof(e, t, n) {
          var r;
          const {
            key: o,
            value: c,
            height: u,
            proof: d,
            code: l,
            log: m,
          } = await this.tmClient.abciQuery({
            path: `/store/${e}/key`,
            data: t,
            prove: !0,
            height: n,
          });
          if (l) throw new Error(`Query failed with (${l}): ${m}`);
          if (!i.arrayContentEquals(t, o))
            throw new Error(
              `Response key ${s.toHex(o)} doesn't match query key ${s.toHex(t)}`,
            );
          if (!u) throw new Error("No query height returned");
          if (!d || 2 !== d.ops.length)
            throw new Error(
              `Expected 2 proof ops, got ${null !== (r = null === d || void 0 === d ? void 0 : d.ops.length) && void 0 !== r ? r : 0}. Are you using stargate?`,
            );
          return (
            a(d.ops[0], "ics23:iavl", o),
            a(d.ops[1], "ics23:simple", s.toAscii(e)),
            { key: o, value: c, height: u, proof: { ops: [...d.ops] } }
          );
        }
        async queryUnverified(e, t) {
          const n = await this.tmClient.abciQuery({
            path: e,
            data: t,
            prove: !1,
          });
          if (n.code)
            throw new Error(`Query failed with (${n.code}): ${n.log}`);
          return n.value;
        }
        async getNextHeader(e) {
          if ((i.assertDefined(e), 0 === e))
            throw new Error("Query returned height 0, cannot prove it");
          const t = e + 1;
          let n, r;
          try {
            r = this.tmClient.subscribeNewBlockHeader();
          } catch (s) {}
          if (r) {
            const e = await o.firstEvent(r);
            e.height === t && (n = e);
          }
          while (!n) {
            const r = (await this.tmClient.blockchain(e, t)).blockMetas
              .map((e) => e.header)
              .find((e) => e.height === t);
            r ? (n = r) : await i.sleep(1e3);
          }
          return (
            i.assert(
              n.height === t,
              "Got wrong header. This is a bug in the logic above.",
            ),
            n
          );
        }
      }
      t.QueryClient = QueryClient;
    },
    4415: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DefaultValueProducer = void 0));
      class DefaultValueProducer {
        constructor(e, t) {
          ((this.callbacks = t), (this.internalValue = e));
        }
        get value() {
          return this.internalValue;
        }
        update(e) {
          ((this.internalValue = e), this.listener && this.listener.next(e));
        }
        error(e) {
          this.listener && this.listener.error(e);
        }
        start(e) {
          ((this.listener = e),
            e.next(this.internalValue),
            this.callbacks && this.callbacks.onStarted());
        }
        stop() {
          (this.callbacks && this.callbacks.onStop(), (this.listener = void 0));
        }
      }
      t.DefaultValueProducer = DefaultValueProducer;
    },
    4416: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.concat = void 0));
      const r = n(2955);
      function s() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const s = new Array(),
          o = new Array(),
          i = new Set();
        let a = 0;
        function c() {
          while (s.length > 0) {
            const e = s.shift();
            e.unsubscribe();
          }
          ((o.length = 0), i.clear(), (a = 0));
        }
        const u = {
          start: (e) => {
            function n(t) {
              while (1) {
                const n = o[t].shift();
                if (void 0 === n) return;
                e.next(n);
              }
            }
            function r() {
              return a >= t.length;
            }
            (t.forEach((e) => o.push([])),
              r()
                ? e.complete()
                : t.forEach((t, u) => {
                    s.push(
                      t.subscribe({
                        next: (t) => {
                          u === a ? e.next(t) : o[u].push(t);
                        },
                        complete: () => {
                          i.add(u);
                          while (i.has(a)) (n(a), a++);
                          r() ? e.complete() : n(a);
                        },
                        error: (t) => {
                          (e.error(t), c());
                        },
                      }),
                    );
                  }));
          },
          stop: () => {
            c();
          },
        };
        return r.Stream.create(u);
      }
      t.concat = s;
    },
    4421: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = (t) => {
          const n = new Set(),
            r = t.filter((t) => !n.has(e(t))).debug((t) => n.add(e(t)));
          return r;
        };
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dropDuplicates = void 0),
        (t.dropDuplicates = r));
    },
    4422: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.firstEvent = t.toListPromise = t.fromListPromise = void 0));
      const r = n(2955);
      function s(e) {
        const t = {
          start: (t) => {
            e.then((e) => {
              for (const n of e) t.next(n);
              t.complete();
            }).catch((e) => t.error(e));
          },
          stop: () => {},
        };
        return r.Stream.create(t);
      }
      async function o(e, t) {
        return new Promise((n, r) => {
          if (0 === t) return void n([]);
          const s = new Array();
          e.take(t).subscribe({
            next: (e) => {
              (s.push(e), s.length === t && n(s));
            },
            complete: () => {
              r(
                `Stream completed before all events could be collected. Collected ${s.length}, expected ${t}`,
              );
            },
            error: (e) => r(e),
          });
        });
      }
      async function i(e) {
        return (await o(e, 1))[0];
      }
      ((t.fromListPromise = s), (t.toListPromise = o), (t.firstEvent = i));
    },
    4423: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lastValue = t.asArray = t.countStream = t.Reducer = void 0));
      class Reducer {
        constructor(e, t, n) {
          ((this.stream = e),
            (this.reducer = t),
            (this.state = n),
            (this.completed = new Promise((e, t) => {
              const n = this.stream.subscribe({
                next: (e) => {
                  this.state = this.reducer(this.state, e);
                },
                complete: () => {
                  (e(), n.unsubscribe());
                },
                error: (e) => {
                  (t(e), n.unsubscribe());
                },
              });
            })));
        }
        value() {
          return this.state;
        }
        async finished() {
          return this.completed;
        }
      }
      function r(e, t) {
        return e + 1;
      }
      function s(e) {
        return new Reducer(e, r, 0);
      }
      function o(e, t) {
        return [...e, t];
      }
      function i(e) {
        return new Reducer(e, o, []);
      }
      function a(e, t) {
        return t;
      }
      function c(e) {
        return new Reducer(e, a, void 0);
      }
      ((t.Reducer = Reducer),
        (t.countStream = s),
        (t.asArray = i),
        (t.lastValue = c));
    },
    4424: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ValueAndUpdates = void 0));
      const r = n(2955);
      class ValueAndUpdates {
        constructor(e) {
          ((this.producer = e),
            (this.updates = r.MemoryStream.createWithMemory(this.producer)));
        }
        get value() {
          return this.producer.value;
        }
        async waitFor(e) {
          const t = "function" === typeof e ? e : (t) => t === e;
          return new Promise((e, n) => {
            const r = this.updates.subscribe({
              next: (n) => {
                t(n) && (e(n), setTimeout(() => r.unsubscribe(), 0));
              },
              complete: () => {
                (r.unsubscribe(),
                  n("Update stream completed without expected value"));
              },
              error: (e) => {
                n(e);
              },
            });
          });
        }
      }
      t.ValueAndUpdates = ValueAndUpdates;
    },
    4425: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupAuthExtension = void 0));
      const r = n(4426),
        s = n(2781),
        o = n(2956);
      function i(e) {
        const t = o.createProtobufRpcClient(e),
          n = new r.QueryClientImpl(t);
        return {
          auth: {
            account: async (e) => {
              const { account: t } = await n.Account({ address: e });
              return null !== t && void 0 !== t ? t : null;
            },
            verified: {
              account: async (t) => {
                const n = Uint8Array.from([1, ...o.toAccAddress(t)]),
                  r = await e.queryVerified("acc", n);
                return 0 === r.length ? null : s.Any.decode(r);
              },
            },
          },
        };
      }
      t.setupAuthExtension = i;
    },
    4427: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupBankExtension = void 0));
      const r = n(2762),
        s = n(2815),
        o = n(4428),
        i = n(2801),
        a = n(2956);
      function c(e) {
        const t = a.createProtobufRpcClient(e),
          n = new o.QueryClientImpl(t);
        return {
          bank: {
            balance: async (e, t) => {
              const { balance: r } = await n.Balance({ address: e, denom: t });
              return (s.assert(r), r);
            },
            allBalances: async (e) => {
              const { balances: t } = await n.AllBalances({ address: e });
              return t;
            },
            totalSupply: async () => {
              const { supply: e } = await n.TotalSupply({});
              return e;
            },
            supplyOf: async (e) => {
              const { amount: t } = await n.SupplyOf({ denom: e });
              return (s.assert(t), t);
            },
            verified: {
              balance: async (t, n) => {
                const s = Uint8Array.from([
                    ...r.toAscii("balances"),
                    ...a.toAccAddress(t),
                    ...r.toAscii(n),
                  ]),
                  o = await e.queryVerified("bank", s);
                return o.length ? i.Coin.decode(o) : null;
              },
            },
          },
        };
      }
      t.setupBankExtension = c;
    },
    4429: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupDistributionExtension = void 0));
      const s = n(4430),
        o = r(n(2754)),
        i = n(2956);
      function a(e) {
        const t = i.createProtobufRpcClient(e),
          n = new s.QueryClientImpl(t);
        return {
          distribution: {
            communityPool: async () => {
              const e = await n.CommunityPool({});
              return e;
            },
            delegationRewards: async (e, t) => {
              const r = await n.DelegationRewards({
                delegatorAddress: e,
                validatorAddress: t,
              });
              return r;
            },
            delegationTotalRewards: async (e) => {
              const t = await n.DelegationTotalRewards({ delegatorAddress: e });
              return t;
            },
            delegatorValidators: async (e) => {
              const t = await n.DelegatorValidators({ delegatorAddress: e });
              return t;
            },
            delegatorWithdrawAddress: async (e) => {
              const t = await n.DelegatorWithdrawAddress({
                delegatorAddress: e,
              });
              return t;
            },
            params: async () => {
              const e = await n.Params({});
              return e;
            },
            validatorCommission: async (e) => {
              const t = await n.ValidatorCommission({ validatorAddress: e });
              return t;
            },
            validatorOutstandingRewards: async (e) => {
              const t = await n.ValidatorOutstandingRewards({
                validatorAddress: e,
              });
              return t;
            },
            validatorSlashes: async (e, t, r, s) => {
              const a = await n.ValidatorSlashes({
                validatorAddress: e,
                startingHeight: o.default.fromNumber(t, !0),
                endingHeight: o.default.fromNumber(r, !0),
                pagination: i.createPagination(s),
              });
              return a;
            },
          },
        };
      }
      t.setupDistributionExtension = a;
    },
    4432: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupGovExtension = void 0));
      const r = n(4433),
        s = n(2956);
      function o(e) {
        const t = s.createProtobufRpcClient(e),
          n = new r.QueryClientImpl(t);
        return {
          gov: {
            params: async (e) => {
              const t = await n.Params({ paramsType: e });
              return t;
            },
            proposals: async (e, t, r, o) => {
              const i = await n.Proposals({
                proposalStatus: e,
                depositor: t,
                voter: r,
                pagination: s.createPagination(o),
              });
              return i;
            },
            proposal: async (e) => {
              const t = await n.Proposal({ proposalId: s.longify(e) });
              return t;
            },
            deposits: async (e, t) => {
              const r = await n.Deposits({
                proposalId: s.longify(e),
                pagination: s.createPagination(t),
              });
              return r;
            },
            deposit: async (e, t) => {
              const r = await n.Deposit({
                proposalId: s.longify(e),
                depositor: t,
              });
              return r;
            },
            tally: async (e) => {
              const t = await n.TallyResult({ proposalId: s.longify(e) });
              return t;
            },
            votes: async (e, t) => {
              const r = await n.Votes({
                proposalId: s.longify(e),
                pagination: s.createPagination(t),
              });
              return r;
            },
            vote: async (e, t) => {
              const r = await n.Vote({ proposalId: s.longify(e), voter: t });
              return r;
            },
          },
        };
      }
      t.setupGovExtension = o;
    },
    4434: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupIbcExtension = void 0));
      const s = n(2762),
        o = n(2796),
        i = n(4435),
        a = n(3326),
        c = n(4437),
        u = n(4438),
        d = n(4439),
        l = n(4440),
        m = r(n(2754)),
        p = n(2956);
      function h(e) {
        if (
          "/ibc.lightclients.tendermint.v1.ClientState" !==
          (null === e || void 0 === e ? void 0 : e.typeUrl)
        )
          throw new Error(
            "Unexpected client state type: " +
              (null === e || void 0 === e ? void 0 : e.typeUrl),
          );
        return l.ClientState.decode(e.value);
      }
      function g(e) {
        if (
          "/ibc.lightclients.tendermint.v1.ConsensusState" !==
          (null === e || void 0 === e ? void 0 : e.typeUrl)
        )
          throw new Error(
            "Unexpected client state type: " +
              (null === e || void 0 === e ? void 0 : e.typeUrl),
          );
        return l.ConsensusState.decode(e.value);
      }
      function f(e) {
        const t = p.createProtobufRpcClient(e),
          n = new c.QueryClientImpl(t),
          r = new u.QueryClientImpl(t),
          l = new d.QueryClientImpl(t),
          f = new i.QueryClientImpl(t);
        return {
          ibc: {
            channel: {
              channel: async (e, t) => n.Channel({ portId: e, channelId: t }),
              channels: async (e) =>
                n.Channels({ pagination: p.createPagination(e) }),
              allChannels: async () => {
                var e;
                const t = [];
                let r, s;
                do {
                  ((r = await n.Channels({
                    pagination: p.createPagination(s),
                  })),
                    t.push(...r.channels),
                    (s =
                      null === (e = r.pagination) || void 0 === e
                        ? void 0
                        : e.nextKey));
                } while (s && s.length);
                return { channels: t, height: r.height };
              },
              connectionChannels: async (e, t) =>
                n.ConnectionChannels({
                  connection: e,
                  pagination: p.createPagination(t),
                }),
              allConnectionChannels: async (e) => {
                var t;
                const r = [];
                let s, o;
                do {
                  ((s = await n.ConnectionChannels({
                    connection: e,
                    pagination: p.createPagination(o),
                  })),
                    r.push(...s.channels),
                    (o =
                      null === (t = s.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (o && o.length);
                return { channels: r, height: s.height };
              },
              clientState: async (e, t) =>
                n.ChannelClientState({ portId: e, channelId: t }),
              consensusState: async (e, t, r, s) =>
                n.ChannelConsensusState({
                  portId: e,
                  channelId: t,
                  revisionNumber: m.default.fromNumber(r, !0),
                  revisionHeight: m.default.fromNumber(s, !0),
                }),
              packetCommitment: async (e, t, r) =>
                n.PacketCommitment({ portId: e, channelId: t, sequence: r }),
              packetCommitments: async (e, t, r) =>
                n.PacketCommitments({
                  channelId: t,
                  portId: e,
                  pagination: p.createPagination(r),
                }),
              allPacketCommitments: async (e, t) => {
                var r;
                const s = [];
                let o, i;
                do {
                  ((o = await n.PacketCommitments({
                    channelId: t,
                    portId: e,
                    pagination: p.createPagination(i),
                  })),
                    s.push(...o.commitments),
                    (i =
                      null === (r = o.pagination) || void 0 === r
                        ? void 0
                        : r.nextKey));
                } while (i && i.length);
                return { commitments: s, height: o.height };
              },
              packetReceipt: async (e, t, r) =>
                n.PacketReceipt({
                  portId: e,
                  channelId: t,
                  sequence: m.default.fromNumber(r, !0),
                }),
              packetAcknowledgement: async (e, t, r) =>
                n.PacketAcknowledgement({
                  portId: e,
                  channelId: t,
                  sequence: m.default.fromNumber(r, !0),
                }),
              packetAcknowledgements: async (e, t, r) =>
                n.PacketAcknowledgements({
                  portId: e,
                  channelId: t,
                  pagination: p.createPagination(r),
                }),
              allPacketAcknowledgements: async (e, t) => {
                var r;
                const s = [];
                let o, i;
                do {
                  ((o = await n.PacketAcknowledgements({
                    channelId: t,
                    portId: e,
                    pagination: p.createPagination(i),
                  })),
                    s.push(...o.acknowledgements),
                    (i =
                      null === (r = o.pagination) || void 0 === r
                        ? void 0
                        : r.nextKey));
                } while (i && i.length);
                return { acknowledgements: s, height: o.height };
              },
              unreceivedPackets: async (e, t, r) =>
                n.UnreceivedPackets({
                  portId: e,
                  channelId: t,
                  packetCommitmentSequences: r.map((e) =>
                    m.default.fromNumber(e, !0),
                  ),
                }),
              unreceivedAcks: async (e, t, r) =>
                n.UnreceivedAcks({
                  portId: e,
                  channelId: t,
                  packetAckSequences: r.map((e) => m.default.fromNumber(e, !0)),
                }),
              nextSequenceReceive: async (e, t) =>
                n.NextSequenceReceive({ portId: e, channelId: t }),
            },
            client: {
              state: async (e) => r.ClientState({ clientId: e }),
              states: async (e) =>
                r.ClientStates({ pagination: p.createPagination(e) }),
              allStates: async () => {
                var e;
                const t = [];
                let n, s;
                do {
                  ((n = await r.ClientStates({
                    pagination: p.createPagination(s),
                  })),
                    t.push(...n.clientStates),
                    (s =
                      null === (e = n.pagination) || void 0 === e
                        ? void 0
                        : e.nextKey));
                } while (s && s.length);
                return { clientStates: t };
              },
              consensusState: async (e, t) =>
                r.ConsensusState(
                  u.QueryConsensusStateRequest.fromPartial({
                    clientId: e,
                    revisionHeight:
                      void 0 !== t ? m.default.fromNumber(t, !0) : void 0,
                    latestHeight: void 0 === t,
                  }),
                ),
              consensusStates: async (e, t) =>
                r.ConsensusStates({
                  clientId: e,
                  pagination: p.createPagination(t),
                }),
              allConsensusStates: async (e) => {
                var t;
                const n = [];
                let s, o;
                do {
                  ((s = await r.ConsensusStates({
                    clientId: e,
                    pagination: p.createPagination(o),
                  })),
                    n.push(...s.consensusStates),
                    (o =
                      null === (t = s.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (o && o.length);
                return { consensusStates: n };
              },
              params: async () => r.ClientParams({}),
              stateTm: async (e) => {
                const t = await r.ClientState({ clientId: e });
                return h(t.clientState);
              },
              statesTm: async (e) => {
                const { clientStates: t } = await r.ClientStates({
                  pagination: p.createPagination(e),
                });
                return t.map((e) => {
                  let { clientState: t } = e;
                  return h(t);
                });
              },
              allStatesTm: async () => {
                var e;
                const t = [];
                let n, s;
                do {
                  ((n = await r.ClientStates({
                    pagination: p.createPagination(s),
                  })),
                    t.push(...n.clientStates),
                    (s =
                      null === (e = n.pagination) || void 0 === e
                        ? void 0
                        : e.nextKey));
                } while (s && s.length);
                return t.map((e) => {
                  let { clientState: t } = e;
                  return h(t);
                });
              },
              consensusStateTm: async (e, t) => {
                const n = await r.ConsensusState(
                  u.QueryConsensusStateRequest.fromPartial({
                    clientId: e,
                    revisionHeight:
                      null === t || void 0 === t ? void 0 : t.revisionHeight,
                    revisionNumber:
                      null === t || void 0 === t ? void 0 : t.revisionNumber,
                    latestHeight: void 0 === t,
                  }),
                );
                return g(n.consensusState);
              },
            },
            connection: {
              connection: async (e) => l.Connection({ connectionId: e }),
              connections: async (e) =>
                l.Connections({ pagination: p.createPagination(e) }),
              allConnections: async () => {
                var e;
                const t = [];
                let n, r;
                do {
                  ((n = await l.Connections({
                    pagination: p.createPagination(r),
                  })),
                    t.push(...n.connections),
                    (r =
                      null === (e = n.pagination) || void 0 === e
                        ? void 0
                        : e.nextKey));
                } while (r && r.length);
                return { connections: t, height: n.height };
              },
              clientConnections: async (e) =>
                l.ClientConnections({ clientId: e }),
              clientState: async (e) =>
                l.ConnectionClientState({ connectionId: e }),
              consensusState: async (e, t) =>
                l.ConnectionConsensusState(
                  d.QueryConnectionConsensusStateRequest.fromPartial({
                    connectionId: e,
                    revisionHeight: m.default.fromNumber(t, !0),
                  }),
                ),
            },
            transfer: {
              denomTrace: async (e) => f.DenomTrace({ hash: e }),
              denomTraces: async (e) =>
                f.DenomTraces({ pagination: p.createPagination(e) }),
              allDenomTraces: async () => {
                var e;
                const t = [];
                let n, r;
                do {
                  ((n = await f.DenomTraces({
                    pagination: p.createPagination(r),
                  })),
                    t.push(...n.denomTraces),
                    (r =
                      null === (e = n.pagination) || void 0 === e
                        ? void 0
                        : e.nextKey));
                } while (r && r.length);
                return { denomTraces: t };
              },
              params: async () => f.Params({}),
            },
            verified: {
              channel: {
                channel: async (t, n) => {
                  const r = s.toAscii(`channelEnds/ports/${t}/channels/${n}`),
                    o = await e.queryVerified("ibc", r);
                  return o.length ? a.Channel.decode(o) : null;
                },
                packetCommitment: async (t, n, r) => {
                  const o = s.toAscii(
                      `commitments/ports/${t}/channels/${n}/packets/${r}`,
                    ),
                    i = await e.queryVerified("ibc", o);
                  return i;
                },
                packetAcknowledgement: async (t, n, r) => {
                  const o = s.toAscii(
                      `acks/ports/${t}/channels/${n}/acknowledgements/${r}`,
                    ),
                    i = await e.queryVerified("ibc", o);
                  return i;
                },
                nextSequenceReceive: async (t, n) => {
                  const r = s.toAscii(
                      `seqAcks/ports/${t}/channels/${n}/nextSequenceAck`,
                    ),
                    i = await e.queryVerified("ibc", r);
                  return i.length ? o.Uint64.fromBytes(i).toNumber() : null;
                },
              },
            },
          },
        };
      }
      t.setupIbcExtension = f;
    },
    4444: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupStakingExtension = void 0));
      const s = n(4445),
        o = r(n(2754)),
        i = n(2956);
      function a(e) {
        const t = i.createProtobufRpcClient(e),
          n = new s.QueryClientImpl(t);
        return {
          staking: {
            delegation: async (e, t) => {
              const r = await n.Delegation({
                delegatorAddr: e,
                validatorAddr: t,
              });
              return r;
            },
            delegatorDelegations: async (e, t) => {
              const r = await n.DelegatorDelegations({
                delegatorAddr: e,
                pagination: i.createPagination(t),
              });
              return r;
            },
            delegatorUnbondingDelegations: async (e, t) => {
              const r = await n.DelegatorUnbondingDelegations({
                delegatorAddr: e,
                pagination: i.createPagination(t),
              });
              return r;
            },
            delegatorValidator: async (e, t) => {
              const r = await n.DelegatorValidator({
                delegatorAddr: e,
                validatorAddr: t,
              });
              return r;
            },
            delegatorValidators: async (e, t) => {
              const r = await n.DelegatorValidators({
                delegatorAddr: e,
                pagination: i.createPagination(t),
              });
              return r;
            },
            historicalInfo: async (e) => {
              const t = await n.HistoricalInfo({
                height: o.default.fromNumber(e, !0),
              });
              return t;
            },
            params: async () => {
              const e = await n.Params({});
              return e;
            },
            pool: async () => {
              const e = await n.Pool({});
              return e;
            },
            redelegations: async (e, t, r, s) => {
              const o = await n.Redelegations({
                delegatorAddr: e,
                srcValidatorAddr: t,
                dstValidatorAddr: r,
                pagination: i.createPagination(s),
              });
              return o;
            },
            unbondingDelegation: async (e, t) => {
              const r = await n.UnbondingDelegation({
                delegatorAddr: e,
                validatorAddr: t,
              });
              return r;
            },
            validator: async (e) => {
              const t = await n.Validator({ validatorAddr: e });
              return t;
            },
            validatorDelegations: async (e, t) => {
              const r = await n.ValidatorDelegations({
                validatorAddr: e,
                pagination: i.createPagination(t),
              });
              return r;
            },
            validators: async (e, t) => {
              const r = await n.Validators({
                status: e,
                pagination: i.createPagination(t),
              });
              return r;
            },
            validatorUnbondingDelegations: async (e, t) => {
              const r = await n.ValidatorUnbondingDelegations({
                validatorAddr: e,
                pagination: i.createPagination(t),
              });
              return r;
            },
          },
        };
      }
      t.setupStakingExtension = a;
    },
    4446: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pubkeyToAddress =
          t.pubkeyToRawAddress =
          t.rawSecp256k1PubkeyToRawAddress =
          t.rawEd25519PubkeyToRawAddress =
            void 0));
      const r = n(2800),
        s = n(2762);
      function o(e) {
        if (32 !== e.length)
          throw new Error("Invalid Ed25519 pubkey length: " + e.length);
        return r.sha256(e).slice(0, 20);
      }
      function i(e) {
        if (33 !== e.length)
          throw new Error(
            "Invalid Secp256k1 pubkey length (compressed): " + e.length,
          );
        return r.ripemd160(r.sha256(e));
      }
      function a(e, t) {
        switch (e) {
          case "ed25519":
            return o(t);
          case "secp256k1":
            return i(t);
          default:
            throw new Error(`Pubkey type ${e} not supported`);
        }
      }
      function c(e, t) {
        return s.toHex(a(e, t)).toUpperCase();
      }
      ((t.rawEd25519PubkeyToRawAddress = o),
        (t.rawSecp256k1PubkeyToRawAddress = i),
        (t.pubkeyToRawAddress = a),
        (t.pubkeyToAddress = c));
    },
    4447: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HttpClient = void 0));
      const s = n(3578),
        o = r(n(14)),
        i = n(3329);
      function a(e) {
        if (e.status >= 400)
          throw new Error("Bad status on response: " + e.status);
        return e;
      }
      async function c(e, t, n) {
        if ("undefined" !== typeof fetch) {
          const r = n ? JSON.stringify(n) : void 0;
          return fetch(t, { method: e, body: r })
            .then(a)
            .then((e) => e.json());
        }
        return o.default
          .request({ url: t, method: e, data: n })
          .then((e) => e.data);
      }
      class HttpClient {
        constructor(e) {
          (void 0 === e && (e = "http://localhost:46657"),
            (this.url = i.hasProtocol(e) ? e : "http://" + e));
        }
        disconnect() {}
        async execute(e) {
          const t = s.parseJsonRpcResponse(await c("POST", this.url, e));
          if (s.isJsonRpcErrorResponse(t))
            throw new Error(JSON.stringify(t.error));
          return t;
        }
      }
      t.HttpClient = HttpClient;
    },
    4452: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebsocketClient = void 0));
      const r = n(3578),
        s = n(4453),
        o = n(3154),
        i = n(2955),
        a = n(3329);
      function c(e) {
        throw e;
      }
      function u(e) {
        if ("message" !== e.type)
          throw new Error("Unexcepted message type on websocket: " + e.type);
        const t = r.parseJsonRpcResponse(JSON.parse(e.data));
        return t;
      }
      class RpcEventProducer {
        constructor(e, t) {
          ((this.running = !1),
            (this.subscriptions = []),
            (this.request = e),
            (this.socket = t));
        }
        start(e) {
          if (this.running)
            throw Error(
              "Already started. Please stop first before restarting.",
            );
          ((this.running = !0),
            this.connectToClient(e),
            this.socket.queueRequest(JSON.stringify(this.request)));
        }
        stop() {
          this.running = !1;
          const e = Object.assign(Object.assign({}, this.request), {
            method: "unsubscribe",
          });
          try {
            this.socket.queueRequest(JSON.stringify(e));
          } catch (t) {
            if (
              !(
                t instanceof Error &&
                t.message.match(/socket has disconnected/i)
              )
            )
              throw t;
          }
        }
        connectToClient(e) {
          const t = this.socket.events.map(u),
            n = t
              .filter((e) => e.id === this.request.id)
              .subscribe({
                next: (t) => {
                  (r.isJsonRpcErrorResponse(t) &&
                    (this.closeSubscriptions(),
                    e.error(JSON.stringify(t.error))),
                    n.unsubscribe());
                },
              }),
            s = t
              .filter((e) => e.id === this.request.id)
              .subscribe({
                next: (t) => {
                  r.isJsonRpcErrorResponse(t)
                    ? (this.closeSubscriptions(),
                      e.error(JSON.stringify(t.error)))
                    : e.next(t.result);
                },
              }),
            o = t.subscribe({
              error: (t) => {
                (this.closeSubscriptions(), e.error(t));
              },
              complete: () => {
                (this.closeSubscriptions(), e.complete());
              },
            });
          this.subscriptions.push(n, s, o);
        }
        closeSubscriptions() {
          for (const e of this.subscriptions) e.unsubscribe();
          this.subscriptions = [];
        }
      }
      class WebsocketClient {
        constructor(e, t) {
          (void 0 === e && (e = "ws://localhost:46657"),
            void 0 === t && (t = c),
            (this.subscriptionStreams = new Map()));
          const n = e.endsWith("/") ? "websocket" : "/websocket",
            r = a.hasProtocol(e) ? e : "ws://" + e;
          ((this.url = r + n),
            (this.socket = new s.ReconnectingSocket(this.url)));
          const o = this.socket.events.subscribe({
            error: (e) => {
              (t(e), o.unsubscribe());
            },
          });
          ((this.jsonRpcResponseStream = this.socket.events.map(u)),
            this.socket.connect());
        }
        async execute(e) {
          const t = this.responseForRequestId(e.id);
          this.socket.queueRequest(JSON.stringify(e));
          const n = await t;
          if (r.isJsonRpcErrorResponse(n))
            throw new Error(JSON.stringify(n.error));
          return n;
        }
        listen(e) {
          if ("subscribe" !== e.method)
            throw new Error(
              'Request method must be "subscribe" to start event listening',
            );
          const t = e.params.query;
          if ("string" !== typeof t)
            throw new Error("request.params.query must be a string");
          if (!this.subscriptionStreams.has(t)) {
            const n = new RpcEventProducer(e, this.socket),
              r = i.Stream.create(n);
            this.subscriptionStreams.set(t, r);
          }
          return this.subscriptionStreams
            .get(t)
            .filter((e) => void 0 !== e.query);
        }
        async connected() {
          await this.socket.connectionStatus.waitFor(
            s.ConnectionStatus.Connected,
          );
        }
        disconnect() {
          this.socket.disconnect();
        }
        async responseForRequestId(e) {
          return o.firstEvent(
            this.jsonRpcResponseStream.filter((t) => t.id === e),
          );
        }
      }
      t.WebsocketClient = WebsocketClient;
    },
    4453: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StreamingSocket =
          t.SocketWrapper =
          t.ReconnectingSocket =
          t.QueueingStreamingSocket =
          t.ConnectionStatus =
            void 0));
      var r = n(3580);
      (Object.defineProperty(t, "ConnectionStatus", {
        enumerable: !0,
        get: function () {
          return r.ConnectionStatus;
        },
      }),
        Object.defineProperty(t, "QueueingStreamingSocket", {
          enumerable: !0,
          get: function () {
            return r.QueueingStreamingSocket;
          },
        }));
      var s = n(4455);
      Object.defineProperty(t, "ReconnectingSocket", {
        enumerable: !0,
        get: function () {
          return s.ReconnectingSocket;
        },
      });
      var o = n(3582);
      Object.defineProperty(t, "SocketWrapper", {
        enumerable: !0,
        get: function () {
          return o.SocketWrapper;
        },
      });
      var i = n(3581);
      Object.defineProperty(t, "StreamingSocket", {
        enumerable: !0,
        get: function () {
          return i.StreamingSocket;
        },
      });
    },
    4455: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ReconnectingSocket = void 0));
      const r = n(2955),
        s = n(3580);
      class ReconnectingSocket {
        constructor(e, t, n) {
          (void 0 === t && (t = 1e4),
            (this.unconnected = !0),
            (this.disconnected = !1),
            (this.timeoutIndex = 0),
            (this.reconnectTimeout = null));
          const o = {
            start: (e) => (this.eventProducerListener = e),
            stop: () => (this.eventProducerListener = void 0),
          };
          ((this.events = r.Stream.create(o)),
            (this.socket = new s.QueueingStreamingSocket(e, t, n)),
            this.socket.events.subscribe({
              next: (e) => {
                this.eventProducerListener &&
                  this.eventProducerListener.next(e);
              },
              error: (e) => {
                this.eventProducerListener &&
                  this.eventProducerListener.error(e);
              },
            }),
            (this.connectionStatus = this.socket.connectionStatus),
            this.connectionStatus.updates.subscribe({
              next: (e) => {
                (e === s.ConnectionStatus.Connected && (this.timeoutIndex = 0),
                  e === s.ConnectionStatus.Disconnected &&
                    (this.reconnectTimeout &&
                      (clearTimeout(this.reconnectTimeout),
                      (this.reconnectTimeout = null)),
                    (this.reconnectTimeout = setTimeout(
                      () => this.socket.reconnect(),
                      ReconnectingSocket.calculateTimeout(this.timeoutIndex++),
                    ))));
              },
            }));
        }
        static calculateTimeout(e) {
          return Math.min(2 ** e * 100, 5e3);
        }
        connect() {
          if (!this.unconnected)
            throw new Error("Cannot connect: socket has already connected");
          (this.socket.connect(), (this.unconnected = !1));
        }
        disconnect() {
          if (this.unconnected)
            throw new Error("Cannot disconnect: socket has not yet connected");
          (this.socket.disconnect(),
            this.eventProducerListener && this.eventProducerListener.complete(),
            (this.disconnected = !0));
        }
        queueRequest(e) {
          if (this.disconnected)
            throw new Error("Cannot queue request: socket has disconnected");
          this.socket.queueRequest(e);
        }
      }
      t.ReconnectingSocket = ReconnectingSocket;
    },
    4456: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (s(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Tendermint33Client = void 0));
      const i = n(3155),
        a = n(3328),
        c = n(4457),
        u = o(n(3332));
      class Tendermint33Client {
        constructor(e) {
          ((this.client = e),
            (this.p = c.adaptor33.params),
            (this.r = c.adaptor33.responses));
        }
        static async connect(e) {
          const t = e.startsWith("http://") || e.startsWith("https://"),
            n = t ? new a.HttpClient(e) : new a.WebsocketClient(e);
          return Tendermint33Client.create(n);
        }
        static async create(e) {
          await this.detectVersion(e);
          return new Tendermint33Client(e);
        }
        static async detectVersion(e) {
          const t = i.createJsonRpcRequest(u.Method.Status),
            n = await e.execute(t),
            r = n.result;
          if (!r || !r.node_info)
            throw new Error("Unrecognized format for status response");
          const s = r.node_info.version;
          if ("string" !== typeof s)
            throw new Error("Unrecognized version format: must be string");
          return s;
        }
        disconnect() {
          this.client.disconnect();
        }
        async abciInfo() {
          const e = { method: u.Method.AbciInfo };
          return this.doCall(e, this.p.encodeAbciInfo, this.r.decodeAbciInfo);
        }
        async abciQuery(e) {
          const t = { params: e, method: u.Method.AbciQuery };
          return this.doCall(t, this.p.encodeAbciQuery, this.r.decodeAbciQuery);
        }
        async block(e) {
          const t = { method: u.Method.Block, params: { height: e } };
          return this.doCall(t, this.p.encodeBlock, this.r.decodeBlock);
        }
        async blockResults(e) {
          const t = { method: u.Method.BlockResults, params: { height: e } };
          return this.doCall(
            t,
            this.p.encodeBlockResults,
            this.r.decodeBlockResults,
          );
        }
        async blockchain(e, t) {
          const n = {
            method: u.Method.Blockchain,
            params: { minHeight: e, maxHeight: t },
          };
          return this.doCall(
            n,
            this.p.encodeBlockchain,
            this.r.decodeBlockchain,
          );
        }
        async broadcastTxSync(e) {
          const t = { params: e, method: u.Method.BroadcastTxSync };
          return this.doCall(
            t,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxSync,
          );
        }
        async broadcastTxAsync(e) {
          const t = { params: e, method: u.Method.BroadcastTxAsync };
          return this.doCall(
            t,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxAsync,
          );
        }
        async broadcastTxCommit(e) {
          const t = { params: e, method: u.Method.BroadcastTxCommit };
          return this.doCall(
            t,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxCommit,
          );
        }
        async commit(e) {
          const t = { method: u.Method.Commit, params: { height: e } };
          return this.doCall(t, this.p.encodeCommit, this.r.decodeCommit);
        }
        async genesis() {
          const e = { method: u.Method.Genesis };
          return this.doCall(e, this.p.encodeGenesis, this.r.decodeGenesis);
        }
        async health() {
          const e = { method: u.Method.Health };
          return this.doCall(e, this.p.encodeHealth, this.r.decodeHealth);
        }
        async status() {
          const e = { method: u.Method.Status };
          return this.doCall(e, this.p.encodeStatus, this.r.decodeStatus);
        }
        subscribeNewBlock() {
          const e = {
            method: u.Method.Subscribe,
            query: { type: u.SubscriptionEventType.NewBlock },
          };
          return this.subscribe(e, this.r.decodeNewBlockEvent);
        }
        subscribeNewBlockHeader() {
          const e = {
            method: u.Method.Subscribe,
            query: { type: u.SubscriptionEventType.NewBlockHeader },
          };
          return this.subscribe(e, this.r.decodeNewBlockHeaderEvent);
        }
        subscribeTx(e) {
          const t = {
            method: u.Method.Subscribe,
            query: { type: u.SubscriptionEventType.Tx, raw: e },
          };
          return this.subscribe(t, this.r.decodeTxEvent);
        }
        async tx(e) {
          const t = { params: e, method: u.Method.Tx };
          return this.doCall(t, this.p.encodeTx, this.r.decodeTx);
        }
        async txSearch(e) {
          const t = { params: e, method: u.Method.TxSearch };
          return this.doCall(t, this.p.encodeTxSearch, this.r.decodeTxSearch);
        }
        async txSearchAll(e) {
          let t = e.page || 1;
          const n = [];
          let r = !1;
          while (!r) {
            const s = await this.txSearch(
              Object.assign(Object.assign({}, e), { page: t }),
            );
            (n.push(...s.txs), n.length < s.totalCount ? t++ : (r = !0));
          }
          return { totalCount: n.length, txs: n };
        }
        async validators(e) {
          const t = { method: u.Method.Validators, params: e };
          return this.doCall(
            t,
            this.p.encodeValidators,
            this.r.decodeValidators,
          );
        }
        async validatorsAll(e) {
          const t = [];
          let n = 1,
            r = !1,
            s = e;
          while (!r) {
            const e = await this.validators({
              per_page: 50,
              height: s,
              page: n,
            });
            (t.push(...e.validators),
              (s = s || e.blockHeight),
              t.length < e.total ? n++ : (r = !0));
          }
          return {
            blockHeight: null !== s && void 0 !== s ? s : 0,
            count: t.length,
            total: t.length,
            validators: t,
          };
        }
        async doCall(e, t, n) {
          const r = t(e),
            s = await this.client.execute(r);
          return n(s);
        }
        subscribe(e, t) {
          if (!a.instanceOfRpcStreamingClient(this.client))
            throw new Error("This RPC client type cannot subscribe to events");
          const n = this.p.encodeSubscribe(e),
            r = this.client.listen(n);
          return r.map((e) => t(e));
        }
      }
      t.Tendermint33Client = Tendermint33Client;
    },
    4457: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.adaptor33 = void 0));
      const r = n(3584),
        s = n(4458),
        o = n(4459);
      t.adaptor33 = {
        params: s.Params,
        responses: o.Responses,
        hashTx: r.hashTx,
        hashBlock: r.hashBlock,
      };
    },
    4458: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (s(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params = void 0));
      const i = n(2762),
        a = n(3155),
        c = n(3331),
        u = o(n(3332));
      function d(e) {
        return { height: c.may(c.Integer.encode, e.height) };
      }
      function l(e) {
        return {
          minHeight: c.may(c.Integer.encode, e.minHeight),
          maxHeight: c.may(c.Integer.encode, e.maxHeight),
        };
      }
      function m(e) {
        return {
          path: c.assertNotEmpty(e.path),
          data: i.toHex(e.data),
          height: c.may(c.Integer.encode, e.height),
          prove: e.prove,
        };
      }
      function p(e) {
        return { tx: i.toBase64(c.assertNotEmpty(e.tx)) };
      }
      function h(e) {
        return { hash: i.toBase64(c.assertNotEmpty(e.hash)), prove: e.prove };
      }
      function g(e) {
        return {
          query: e.query,
          prove: e.prove,
          page: c.may(c.Integer.encode, e.page),
          per_page: c.may(c.Integer.encode, e.per_page),
          order_by: e.order_by,
        };
      }
      function f(e) {
        return {
          height: c.may(c.Integer.encode, e.height),
          page: c.may(c.Integer.encode, e.page),
          per_page: c.may(c.Integer.encode, e.per_page),
        };
      }
      class Params {
        static encodeAbciInfo(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeAbciQuery(e) {
          return a.createJsonRpcRequest(e.method, m(e.params));
        }
        static encodeBlock(e) {
          return a.createJsonRpcRequest(e.method, d(e.params));
        }
        static encodeBlockchain(e) {
          return a.createJsonRpcRequest(e.method, l(e.params));
        }
        static encodeBlockResults(e) {
          return a.createJsonRpcRequest(e.method, d(e.params));
        }
        static encodeBroadcastTx(e) {
          return a.createJsonRpcRequest(e.method, p(e.params));
        }
        static encodeCommit(e) {
          return a.createJsonRpcRequest(e.method, d(e.params));
        }
        static encodeGenesis(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeHealth(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeStatus(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeSubscribe(e) {
          const t = { key: "tm.event", value: e.query.type },
            n = u.buildQuery({ tags: [t], raw: e.query.raw });
          return a.createJsonRpcRequest("subscribe", { query: n });
        }
        static encodeTx(e) {
          return a.createJsonRpcRequest(e.method, h(e.params));
        }
        static encodeTxSearch(e) {
          return a.createJsonRpcRequest(e.method, g(e.params));
        }
        static encodeValidators(e) {
          return a.createJsonRpcRequest(e.method, f(e.params));
        }
      }
      t.Params = Params;
    },
    4459: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Responses = void 0));
      const r = n(2762),
        s = n(2815),
        o = n(3327),
        i = n(3330),
        a = n(3331),
        c = n(3584);
      function u(e) {
        return {
          data: e.data,
          lastBlockHeight: a.may(a.Integer.parse, e.last_block_height),
          lastBlockAppHash: a.may(r.fromBase64, e.last_block_app_hash),
        };
      }
      function d(e) {
        return {
          ops: e.ops.map((e) => ({
            type: e.type,
            key: r.fromBase64(e.key),
            data: r.fromBase64(e.data),
          })),
        };
      }
      function l(e) {
        return {
          key: r.fromBase64(a.optional(e.key, "")),
          value: r.fromBase64(a.optional(e.value, "")),
          proof: a.may(d, e.proofOps),
          height: a.may(a.Integer.parse, e.height),
          code: a.may(a.Integer.parse, e.code),
          index: a.may(a.Integer.parse, e.index),
          log: e.log,
        };
      }
      function m(e) {
        return {
          key: r.fromBase64(a.assertNotEmpty(e.key)),
          value: r.fromBase64(a.optional(e.value, "")),
        };
      }
      function p(e) {
        return a.assertArray(e).map(m);
      }
      function h(e) {
        return { type: e.type, attributes: p(e.attributes) };
      }
      function g(e) {
        return a.assertArray(e).map(h);
      }
      function f(e) {
        return {
          data: a.may(r.fromBase64, e.data),
          log: e.log,
          code: a.Integer.parse(a.assertNumber(a.optional(e.code, 0))),
          events: g(e.events),
        };
      }
      function y(e) {
        switch (e.type) {
          case "tendermint/PubKeyEd25519":
            return {
              algorithm: "ed25519",
              data: r.fromBase64(a.assertNotEmpty(e.value)),
            };
          case "tendermint/PubKeySecp256k1":
            return {
              algorithm: "secp256k1",
              data: r.fromBase64(a.assertNotEmpty(e.value)),
            };
          default:
            throw new Error("unknown pubkey type: " + e.type);
        }
      }
      function b(e) {
        return {
          pubkey: y(a.assertObject(e.pub_key)),
          votingPower: a.Integer.parse(a.assertNotEmpty(e.voting_power)),
          address: r.fromHex(a.assertNotEmpty(e.address)),
          proposerPriority: a.Integer.parse(e.proposer_priority),
        };
      }
      function v(e) {
        return {
          maxBytes: a.Integer.parse(a.assertNotEmpty(e.max_bytes)),
          maxGas: a.Integer.parse(a.assertNotEmpty(e.max_gas)),
        };
      }
      function w(e) {
        return {
          maxAgeNumBlocks: a.Integer.parse(
            a.assertNotEmpty(e.max_age_num_blocks),
          ),
          maxAgeDuration: a.Integer.parse(a.assertNotEmpty(e.max_age_duration)),
        };
      }
      function k(e) {
        return {
          block: v(a.assertObject(e.block)),
          evidence: w(a.assertObject(e.evidence)),
        };
      }
      function S(e) {
        return {
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          results: (e.txs_results || []).map(f),
          validatorUpdates: (e.validator_updates || []).map(b),
          consensusUpdates: a.may(k, e.consensus_param_updates),
          beginBlockEvents: g(e.begin_block_events || []),
          endBlockEvents: g(e.end_block_events || []),
        };
      }
      function A(e) {
        return {
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
          parts: {
            total: a.Integer.parse(a.assertNotEmpty(e.parts.total)),
            hash: r.fromHex(a.assertNotEmpty(e.parts.hash)),
          },
        };
      }
      function _(e) {
        var t;
        return {
          block: a.Integer.parse(e.block),
          app: a.Integer.parse(null !== (t = e.app) && void 0 !== t ? t : 0),
        };
      }
      function x(e) {
        return {
          version: _(e.version),
          chainId: a.assertNotEmpty(e.chain_id),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          time: o.fromRfc3339WithNanoseconds(a.assertNotEmpty(e.time)),
          lastBlockId: A(e.last_block_id),
          lastCommitHash: r.fromHex(a.assertNotEmpty(e.last_commit_hash)),
          dataHash: r.fromHex(a.assertSet(e.data_hash)),
          validatorsHash: r.fromHex(a.assertNotEmpty(e.validators_hash)),
          nextValidatorsHash: r.fromHex(
            a.assertNotEmpty(e.next_validators_hash),
          ),
          consensusHash: r.fromHex(a.assertNotEmpty(e.consensus_hash)),
          appHash: r.fromHex(a.assertNotEmpty(e.app_hash)),
          lastResultsHash: r.fromHex(a.assertSet(e.last_results_hash)),
          evidenceHash: r.fromHex(a.assertSet(e.evidence_hash)),
          proposerAddress: r.fromHex(a.assertNotEmpty(e.proposer_address)),
        };
      }
      function P(e) {
        return { blockId: A(e.block_id), header: x(e.header) };
      }
      function M(e) {
        return {
          lastHeight: a.Integer.parse(a.assertNotEmpty(e.last_height)),
          blockMetas: a.assertArray(e.block_metas).map(P),
        };
      }
      function E(e) {
        return Object.assign(Object.assign({}, f(e)), {
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
        });
      }
      function T(e) {
        return {
          height: a.Integer.parse(e.height),
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
          checkTx: f(a.assertObject(e.check_tx)),
          deliverTx: a.may(f, e.deliver_tx),
        };
      }
      function C(e) {
        return (s.assert(e in i.BlockIdFlag), e);
      }
      function O(e) {
        return {
          blockIdFlag: C(e.block_id_flag),
          validatorAddress: r.fromHex(e.validator_address),
          timestamp: o.fromRfc3339WithNanoseconds(
            a.assertNotEmpty(e.timestamp),
          ),
          signature: r.fromBase64(a.assertNotEmpty(e.signature)),
        };
      }
      function j(e) {
        return {
          blockId: A(a.assertObject(e.block_id)),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          round: a.Integer.parse(e.round),
          signatures: a.assertArray(e.signatures).map(O),
        };
      }
      function B(e) {
        return {
          canonical: a.assertBoolean(e.canonical),
          header: x(e.signed_header.header),
          commit: j(e.signed_header.commit),
        };
      }
      function I(e) {
        return {
          address: r.fromHex(a.assertNotEmpty(e.address)),
          pubkey: y(a.assertObject(e.pub_key)),
          votingPower: a.Integer.parse(a.assertNotEmpty(e.power)),
        };
      }
      function N(e) {
        return {
          genesisTime: o.fromRfc3339WithNanoseconds(
            a.assertNotEmpty(e.genesis_time),
          ),
          chainId: a.assertNotEmpty(e.chain_id),
          consensusParams: k(e.consensus_params),
          validators: e.validators ? a.assertArray(e.validators).map(I) : [],
          appHash: r.fromHex(a.assertSet(e.app_hash)),
          appState: e.app_state,
        };
      }
      function R(e) {
        return {
          pubkey: y(a.assertObject(e.pub_key)),
          votingPower: a.Integer.parse(a.assertNotEmpty(e.voting_power)),
          address: r.fromHex(a.assertNotEmpty(e.address)),
        };
      }
      function H(e) {
        return {
          id: r.fromHex(a.assertNotEmpty(e.id)),
          listenAddr: a.assertNotEmpty(e.listen_addr),
          network: a.assertNotEmpty(e.network),
          version: a.assertString(e.version),
          channels: a.assertNotEmpty(e.channels),
          moniker: a.assertNotEmpty(e.moniker),
          other: a.dictionaryToStringMap(e.other),
          protocolVersion: {
            app: a.Integer.parse(a.assertNotEmpty(e.protocol_version.app)),
            block: a.Integer.parse(a.assertNotEmpty(e.protocol_version.block)),
            p2p: a.Integer.parse(a.assertNotEmpty(e.protocol_version.p2p)),
          },
        };
      }
      function D(e) {
        return {
          latestBlockHash: r.fromHex(a.assertNotEmpty(e.latest_block_hash)),
          latestAppHash: r.fromHex(a.assertNotEmpty(e.latest_app_hash)),
          latestBlockTime: o.fromRfc3339WithNanoseconds(
            a.assertNotEmpty(e.latest_block_time),
          ),
          latestBlockHeight: a.Integer.parse(
            a.assertNotEmpty(e.latest_block_height),
          ),
          catchingUp: a.assertBoolean(e.catching_up),
        };
      }
      function V(e) {
        return {
          nodeInfo: H(e.node_info),
          syncInfo: D(e.sync_info),
          validatorInfo: R(e.validator_info),
        };
      }
      function U(e) {
        return {
          data: r.fromBase64(a.assertNotEmpty(e.data)),
          rootHash: r.fromHex(a.assertNotEmpty(e.root_hash)),
          proof: {
            total: a.Integer.parse(a.assertNotEmpty(e.proof.total)),
            index: a.Integer.parse(a.assertNotEmpty(e.proof.index)),
            leafHash: r.fromBase64(a.assertNotEmpty(e.proof.leaf_hash)),
            aunts: a.assertArray(e.proof.aunts).map(r.fromBase64),
          },
        };
      }
      function q(e) {
        return {
          tx: r.fromBase64(a.assertNotEmpty(e.tx)),
          result: f(a.assertObject(e.tx_result)),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          index: a.Integer.parse(a.assertNumber(e.index)),
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
          proof: a.may(U, e.proof),
        };
      }
      function Q(e) {
        return {
          totalCount: a.Integer.parse(a.assertNotEmpty(e.total_count)),
          txs: a.assertArray(e.txs).map(q),
        };
      }
      function W(e) {
        const t = r.fromBase64(a.assertNotEmpty(e.tx));
        return {
          tx: t,
          hash: c.hashTx(t),
          result: f(e.result),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          index: a.may(a.Integer.parse, e.index),
        };
      }
      function $(e) {
        return {
          blockHeight: a.Integer.parse(a.assertNotEmpty(e.block_height)),
          validators: a.assertArray(e.validators).map(b),
          count: a.Integer.parse(a.assertNotEmpty(e.count)),
          total: a.Integer.parse(a.assertNotEmpty(e.total)),
        };
      }
      function F(e) {
        return {
          type: a.assertNotEmpty(e.type),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          time: a.Integer.parse(a.assertNotEmpty(e.time)),
          totalVotingPower: a.Integer.parse(
            a.assertNotEmpty(e.totalVotingPower),
          ),
          validator: b(e.validator),
        };
      }
      function L(e) {
        return a.assertArray(e).map(F);
      }
      function J(e) {
        return {
          header: x(a.assertObject(e.header)),
          lastCommit: j(a.assertObject(e.last_commit)),
          txs: e.data.txs ? a.assertArray(e.data.txs).map(r.fromBase64) : [],
          evidence: e.evidence && a.may(L, e.evidence.evidence),
        };
      }
      function G(e) {
        return { blockId: A(e.block_id), block: J(e.block) };
      }
      class Responses {
        static decodeAbciInfo(e) {
          return u(a.assertObject(e.result.response));
        }
        static decodeAbciQuery(e) {
          return l(a.assertObject(e.result.response));
        }
        static decodeBlock(e) {
          return G(e.result);
        }
        static decodeBlockResults(e) {
          return S(e.result);
        }
        static decodeBlockchain(e) {
          return M(e.result);
        }
        static decodeBroadcastTxSync(e) {
          return E(e.result);
        }
        static decodeBroadcastTxAsync(e) {
          return this.decodeBroadcastTxSync(e);
        }
        static decodeBroadcastTxCommit(e) {
          return T(e.result);
        }
        static decodeCommit(e) {
          return B(e.result);
        }
        static decodeGenesis(e) {
          return N(a.assertObject(e.result.genesis));
        }
        static decodeHealth() {
          return null;
        }
        static decodeStatus(e) {
          return V(e.result);
        }
        static decodeNewBlockEvent(e) {
          return J(e.data.value.block);
        }
        static decodeNewBlockHeaderEvent(e) {
          return x(e.data.value.header);
        }
        static decodeTxEvent(e) {
          return W(e.data.value.TxResult);
        }
        static decodeTx(e) {
          return q(e.result);
        }
        static decodeTxSearch(e) {
          return Q(e.result);
        }
        static decodeValidators(e) {
          return $(e.result);
        }
      }
      t.Responses = Responses;
    },
    4460: function (e, t, n) {
      "use strict";
      function r(e) {
        return 0 === e.code;
      }
      function s(e) {
        return 0 === e.checkTx.code && !!e.deliverTx && 0 === e.deliverTx.code;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoteType =
          t.broadcastTxCommitSuccess =
          t.broadcastTxSyncSuccess =
            void 0),
        (t.broadcastTxSyncSuccess = r),
        (t.broadcastTxCommitSuccess = s),
        (function (e) {
          ((e[(e["PreVote"] = 1)] = "PreVote"),
            (e[(e["PreCommit"] = 2)] = "PreCommit"));
        })(t.VoteType || (t.VoteType = {})));
    },
    4461: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (s(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Tendermint34Client = void 0));
      const i = n(3155),
        a = n(3328),
        c = n(4462),
        u = o(n(3334));
      class Tendermint34Client {
        constructor(e) {
          ((this.client = e),
            (this.p = c.adaptor34.params),
            (this.r = c.adaptor34.responses));
        }
        static async connect(e) {
          const t = e.startsWith("http://") || e.startsWith("https://"),
            n = t ? new a.HttpClient(e) : new a.WebsocketClient(e);
          return Tendermint34Client.create(n);
        }
        static async create(e) {
          await this.detectVersion(e);
          return new Tendermint34Client(e);
        }
        static async detectVersion(e) {
          const t = i.createJsonRpcRequest(u.Method.Status),
            n = await e.execute(t),
            r = n.result;
          if (!r || !r.node_info)
            throw new Error("Unrecognized format for status response");
          const s = r.node_info.version;
          if ("string" !== typeof s)
            throw new Error("Unrecognized version format: must be string");
          return s;
        }
        disconnect() {
          this.client.disconnect();
        }
        async abciInfo() {
          const e = { method: u.Method.AbciInfo };
          return this.doCall(e, this.p.encodeAbciInfo, this.r.decodeAbciInfo);
        }
        async abciQuery(e) {
          const t = { params: e, method: u.Method.AbciQuery };
          return this.doCall(t, this.p.encodeAbciQuery, this.r.decodeAbciQuery);
        }
        async block(e) {
          const t = { method: u.Method.Block, params: { height: e } };
          return this.doCall(t, this.p.encodeBlock, this.r.decodeBlock);
        }
        async blockResults(e) {
          const t = { method: u.Method.BlockResults, params: { height: e } };
          return this.doCall(
            t,
            this.p.encodeBlockResults,
            this.r.decodeBlockResults,
          );
        }
        async blockSearch(e) {
          const t = { params: e, method: u.Method.BlockSearch },
            n = await this.doCall(
              t,
              this.p.encodeBlockSearch,
              this.r.decodeBlockSearch,
            );
          return Object.assign(Object.assign({}, n), {
            blocks: [...n.blocks].sort(
              (e, t) => e.block.header.height - t.block.header.height,
            ),
          });
        }
        async blockSearchAll(e) {
          let t = e.page || 1;
          const n = [];
          let r = !1;
          while (!r) {
            const s = await this.blockSearch(
              Object.assign(Object.assign({}, e), { page: t }),
            );
            (n.push(...s.blocks), n.length < s.totalCount ? t++ : (r = !0));
          }
          return (
            n.sort((e, t) => e.block.header.height - t.block.header.height),
            { totalCount: n.length, blocks: n }
          );
        }
        async blockchain(e, t) {
          const n = {
            method: u.Method.Blockchain,
            params: { minHeight: e, maxHeight: t },
          };
          return this.doCall(
            n,
            this.p.encodeBlockchain,
            this.r.decodeBlockchain,
          );
        }
        async broadcastTxSync(e) {
          const t = { params: e, method: u.Method.BroadcastTxSync };
          return this.doCall(
            t,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxSync,
          );
        }
        async broadcastTxAsync(e) {
          const t = { params: e, method: u.Method.BroadcastTxAsync };
          return this.doCall(
            t,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxAsync,
          );
        }
        async broadcastTxCommit(e) {
          const t = { params: e, method: u.Method.BroadcastTxCommit };
          return this.doCall(
            t,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxCommit,
          );
        }
        async commit(e) {
          const t = { method: u.Method.Commit, params: { height: e } };
          return this.doCall(t, this.p.encodeCommit, this.r.decodeCommit);
        }
        async genesis() {
          const e = { method: u.Method.Genesis };
          return this.doCall(e, this.p.encodeGenesis, this.r.decodeGenesis);
        }
        async health() {
          const e = { method: u.Method.Health };
          return this.doCall(e, this.p.encodeHealth, this.r.decodeHealth);
        }
        async status() {
          const e = { method: u.Method.Status };
          return this.doCall(e, this.p.encodeStatus, this.r.decodeStatus);
        }
        subscribeNewBlock() {
          const e = {
            method: u.Method.Subscribe,
            query: { type: u.SubscriptionEventType.NewBlock },
          };
          return this.subscribe(e, this.r.decodeNewBlockEvent);
        }
        subscribeNewBlockHeader() {
          const e = {
            method: u.Method.Subscribe,
            query: { type: u.SubscriptionEventType.NewBlockHeader },
          };
          return this.subscribe(e, this.r.decodeNewBlockHeaderEvent);
        }
        subscribeTx(e) {
          const t = {
            method: u.Method.Subscribe,
            query: { type: u.SubscriptionEventType.Tx, raw: e },
          };
          return this.subscribe(t, this.r.decodeTxEvent);
        }
        async tx(e) {
          const t = { params: e, method: u.Method.Tx };
          return this.doCall(t, this.p.encodeTx, this.r.decodeTx);
        }
        async txSearch(e) {
          const t = { params: e, method: u.Method.TxSearch };
          return this.doCall(t, this.p.encodeTxSearch, this.r.decodeTxSearch);
        }
        async txSearchAll(e) {
          let t = e.page || 1;
          const n = [];
          let r = !1;
          while (!r) {
            const s = await this.txSearch(
              Object.assign(Object.assign({}, e), { page: t }),
            );
            (n.push(...s.txs), n.length < s.totalCount ? t++ : (r = !0));
          }
          return { totalCount: n.length, txs: n };
        }
        async validators(e) {
          const t = { method: u.Method.Validators, params: e };
          return this.doCall(
            t,
            this.p.encodeValidators,
            this.r.decodeValidators,
          );
        }
        async validatorsAll(e) {
          const t = [];
          let n = 1,
            r = !1,
            s = e;
          while (!r) {
            const e = await this.validators({
              per_page: 50,
              height: s,
              page: n,
            });
            (t.push(...e.validators),
              (s = s || e.blockHeight),
              t.length < e.total ? n++ : (r = !0));
          }
          return {
            blockHeight: null !== s && void 0 !== s ? s : 0,
            count: t.length,
            total: t.length,
            validators: t,
          };
        }
        async doCall(e, t, n) {
          const r = t(e),
            s = await this.client.execute(r);
          return n(s);
        }
        subscribe(e, t) {
          if (!a.instanceOfRpcStreamingClient(this.client))
            throw new Error("This RPC client type cannot subscribe to events");
          const n = this.p.encodeSubscribe(e),
            r = this.client.listen(n);
          return r.map((e) => t(e));
        }
      }
      t.Tendermint34Client = Tendermint34Client;
    },
    4462: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.adaptor34 = void 0));
      const r = n(3586),
        s = n(4463),
        o = n(4464);
      t.adaptor34 = {
        params: s.Params,
        responses: o.Responses,
        hashTx: r.hashTx,
        hashBlock: r.hashBlock,
      };
    },
    4463: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (s(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params = void 0));
      const i = n(2762),
        a = n(3155),
        c = n(3333),
        u = o(n(3334));
      function d(e) {
        return { height: c.may(c.Integer.encode, e.height) };
      }
      function l(e) {
        return {
          minHeight: c.may(c.Integer.encode, e.minHeight),
          maxHeight: c.may(c.Integer.encode, e.maxHeight),
        };
      }
      function m(e) {
        return {
          query: e.query,
          page: c.may(c.Integer.encode, e.page),
          per_page: c.may(c.Integer.encode, e.per_page),
          order_by: e.order_by,
        };
      }
      function p(e) {
        return {
          path: c.assertNotEmpty(e.path),
          data: i.toHex(e.data),
          height: c.may(c.Integer.encode, e.height),
          prove: e.prove,
        };
      }
      function h(e) {
        return { tx: i.toBase64(c.assertNotEmpty(e.tx)) };
      }
      function g(e) {
        return { hash: i.toBase64(c.assertNotEmpty(e.hash)), prove: e.prove };
      }
      function f(e) {
        return {
          query: e.query,
          prove: e.prove,
          page: c.may(c.Integer.encode, e.page),
          per_page: c.may(c.Integer.encode, e.per_page),
          order_by: e.order_by,
        };
      }
      function y(e) {
        return {
          height: c.may(c.Integer.encode, e.height),
          page: c.may(c.Integer.encode, e.page),
          per_page: c.may(c.Integer.encode, e.per_page),
        };
      }
      class Params {
        static encodeAbciInfo(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeAbciQuery(e) {
          return a.createJsonRpcRequest(e.method, p(e.params));
        }
        static encodeBlock(e) {
          return a.createJsonRpcRequest(e.method, d(e.params));
        }
        static encodeBlockchain(e) {
          return a.createJsonRpcRequest(e.method, l(e.params));
        }
        static encodeBlockResults(e) {
          return a.createJsonRpcRequest(e.method, d(e.params));
        }
        static encodeBlockSearch(e) {
          return a.createJsonRpcRequest(e.method, m(e.params));
        }
        static encodeBroadcastTx(e) {
          return a.createJsonRpcRequest(e.method, h(e.params));
        }
        static encodeCommit(e) {
          return a.createJsonRpcRequest(e.method, d(e.params));
        }
        static encodeGenesis(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeHealth(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeStatus(e) {
          return a.createJsonRpcRequest(e.method);
        }
        static encodeSubscribe(e) {
          const t = { key: "tm.event", value: e.query.type },
            n = u.buildQuery({ tags: [t], raw: e.query.raw });
          return a.createJsonRpcRequest("subscribe", { query: n });
        }
        static encodeTx(e) {
          return a.createJsonRpcRequest(e.method, g(e.params));
        }
        static encodeTxSearch(e) {
          return a.createJsonRpcRequest(e.method, f(e.params));
        }
        static encodeValidators(e) {
          return a.createJsonRpcRequest(e.method, y(e.params));
        }
      }
      t.Params = Params;
    },
    4464: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Responses = void 0));
      const r = n(2762),
        s = n(2815),
        o = n(3327),
        i = n(3330),
        a = n(3333),
        c = n(3586);
      function u(e) {
        return {
          data: e.data,
          lastBlockHeight: a.may(a.Integer.parse, e.last_block_height),
          lastBlockAppHash: a.may(r.fromBase64, e.last_block_app_hash),
        };
      }
      function d(e) {
        return {
          ops: e.ops.map((e) => ({
            type: e.type,
            key: r.fromBase64(e.key),
            data: r.fromBase64(e.data),
          })),
        };
      }
      function l(e) {
        return {
          key: r.fromBase64(a.optional(e.key, "")),
          value: r.fromBase64(a.optional(e.value, "")),
          proof: a.may(d, e.proofOps),
          height: a.may(a.Integer.parse, e.height),
          code: a.may(a.Integer.parse, e.code),
          index: a.may(a.Integer.parse, e.index),
          log: e.log,
        };
      }
      function m(e) {
        return {
          key: r.fromBase64(a.assertNotEmpty(e.key)),
          value: r.fromBase64(a.optional(e.value, "")),
        };
      }
      function p(e) {
        return a.assertArray(e).map(m);
      }
      function h(e) {
        return { type: e.type, attributes: p(e.attributes) };
      }
      function g(e) {
        return a.assertArray(e).map(h);
      }
      function f(e) {
        return {
          code: a.Integer.parse(a.assertNumber(a.optional(e.code, 0))),
          codeSpace: e.codespace,
          log: e.log,
          data: a.may(r.fromBase64, e.data),
          events: e.events ? g(e.events) : [],
          gasWanted: a.Integer.parse(a.optional(e.gas_wanted, "0")),
          gasUsed: a.Integer.parse(a.optional(e.gas_used, "0")),
        };
      }
      function y(e) {
        switch (e.type) {
          case "tendermint/PubKeyEd25519":
            return {
              algorithm: "ed25519",
              data: r.fromBase64(a.assertNotEmpty(e.value)),
            };
          case "tendermint/PubKeySecp256k1":
            return {
              algorithm: "secp256k1",
              data: r.fromBase64(a.assertNotEmpty(e.value)),
            };
          default:
            throw new Error("unknown pubkey type: " + e.type);
        }
      }
      function b(e) {
        return {
          pubkey: y(a.assertObject(e.pub_key)),
          votingPower: a.Integer.parse(a.assertNotEmpty(e.voting_power)),
          address: r.fromHex(a.assertNotEmpty(e.address)),
          proposerPriority: a.Integer.parse(e.proposer_priority),
        };
      }
      function v(e) {
        return {
          maxBytes: a.Integer.parse(a.assertNotEmpty(e.max_bytes)),
          maxGas: a.Integer.parse(a.assertNotEmpty(e.max_gas)),
        };
      }
      function w(e) {
        return {
          maxAgeNumBlocks: a.Integer.parse(
            a.assertNotEmpty(e.max_age_num_blocks),
          ),
          maxAgeDuration: a.Integer.parse(a.assertNotEmpty(e.max_age_duration)),
        };
      }
      function k(e) {
        return {
          block: v(a.assertObject(e.block)),
          evidence: w(a.assertObject(e.evidence)),
        };
      }
      function S(e) {
        return {
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          results: (e.txs_results || []).map(f),
          validatorUpdates: (e.validator_updates || []).map(b),
          consensusUpdates: a.may(k, e.consensus_param_updates),
          beginBlockEvents: g(e.begin_block_events || []),
          endBlockEvents: g(e.end_block_events || []),
        };
      }
      function A(e) {
        return {
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
          parts: {
            total: a.assertNotEmpty(e.parts.total),
            hash: r.fromHex(a.assertNotEmpty(e.parts.hash)),
          },
        };
      }
      function _(e) {
        var t;
        return {
          block: a.Integer.parse(e.block),
          app: a.Integer.parse(null !== (t = e.app) && void 0 !== t ? t : 0),
        };
      }
      function x(e) {
        return {
          version: _(e.version),
          chainId: a.assertNotEmpty(e.chain_id),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          time: o.fromRfc3339WithNanoseconds(a.assertNotEmpty(e.time)),
          lastBlockId: e.last_block_id.hash ? A(e.last_block_id) : null,
          lastCommitHash: r.fromHex(a.assertSet(e.last_commit_hash)),
          dataHash: r.fromHex(a.assertSet(e.data_hash)),
          validatorsHash: r.fromHex(a.assertSet(e.validators_hash)),
          nextValidatorsHash: r.fromHex(a.assertSet(e.next_validators_hash)),
          consensusHash: r.fromHex(a.assertSet(e.consensus_hash)),
          appHash: r.fromHex(a.assertSet(e.app_hash)),
          lastResultsHash: r.fromHex(a.assertSet(e.last_results_hash)),
          evidenceHash: r.fromHex(a.assertSet(e.evidence_hash)),
          proposerAddress: r.fromHex(a.assertNotEmpty(e.proposer_address)),
        };
      }
      function P(e) {
        return {
          blockId: A(e.block_id),
          blockSize: a.Integer.parse(a.assertNotEmpty(e.block_size)),
          header: x(e.header),
          numTxs: a.Integer.parse(a.assertNotEmpty(e.num_txs)),
        };
      }
      function M(e) {
        return {
          lastHeight: a.Integer.parse(a.assertNotEmpty(e.last_height)),
          blockMetas: a.assertArray(e.block_metas).map(P),
        };
      }
      function E(e) {
        return Object.assign(Object.assign({}, f(e)), {
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
        });
      }
      function T(e) {
        return {
          height: a.Integer.parse(e.height),
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
          checkTx: f(a.assertObject(e.check_tx)),
          deliverTx: a.may(f, e.deliver_tx),
        };
      }
      function C(e) {
        return (s.assert(e in i.BlockIdFlag), e);
      }
      function O(e) {
        const t = e && !e.startsWith("0001-01-01");
        return t ? o.fromRfc3339WithNanoseconds(e) : void 0;
      }
      function j(e) {
        return {
          blockIdFlag: C(e.block_id_flag),
          validatorAddress: e.validator_address
            ? r.fromHex(e.validator_address)
            : void 0,
          timestamp: O(e.timestamp),
          signature: e.signature ? r.fromBase64(e.signature) : void 0,
        };
      }
      function B(e) {
        return {
          blockId: A(a.assertObject(e.block_id)),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          round: a.Integer.parse(e.round),
          signatures: a.assertArray(e.signatures).map(j),
        };
      }
      function I(e) {
        return {
          canonical: a.assertBoolean(e.canonical),
          header: x(e.signed_header.header),
          commit: B(e.signed_header.commit),
        };
      }
      function N(e) {
        return {
          address: r.fromHex(a.assertNotEmpty(e.address)),
          pubkey: y(a.assertObject(e.pub_key)),
          votingPower: a.Integer.parse(a.assertNotEmpty(e.power)),
        };
      }
      function R(e) {
        return {
          genesisTime: o.fromRfc3339WithNanoseconds(
            a.assertNotEmpty(e.genesis_time),
          ),
          chainId: a.assertNotEmpty(e.chain_id),
          consensusParams: k(e.consensus_params),
          validators: e.validators ? a.assertArray(e.validators).map(N) : [],
          appHash: r.fromHex(a.assertSet(e.app_hash)),
          appState: e.app_state,
        };
      }
      function H(e) {
        return {
          pubkey: y(a.assertObject(e.pub_key)),
          votingPower: a.Integer.parse(a.assertNotEmpty(e.voting_power)),
          address: r.fromHex(a.assertNotEmpty(e.address)),
        };
      }
      function D(e) {
        return {
          id: r.fromHex(a.assertNotEmpty(e.id)),
          listenAddr: a.assertNotEmpty(e.listen_addr),
          network: a.assertNotEmpty(e.network),
          version: a.assertString(e.version),
          channels: a.assertNotEmpty(e.channels),
          moniker: a.assertNotEmpty(e.moniker),
          other: a.dictionaryToStringMap(e.other),
          protocolVersion: {
            app: a.Integer.parse(a.assertNotEmpty(e.protocol_version.app)),
            block: a.Integer.parse(a.assertNotEmpty(e.protocol_version.block)),
            p2p: a.Integer.parse(a.assertNotEmpty(e.protocol_version.p2p)),
          },
        };
      }
      function V(e) {
        return {
          latestBlockHash: r.fromHex(a.assertNotEmpty(e.latest_block_hash)),
          latestAppHash: r.fromHex(a.assertNotEmpty(e.latest_app_hash)),
          latestBlockTime: o.fromRfc3339WithNanoseconds(
            a.assertNotEmpty(e.latest_block_time),
          ),
          latestBlockHeight: a.Integer.parse(
            a.assertNotEmpty(e.latest_block_height),
          ),
          catchingUp: a.assertBoolean(e.catching_up),
        };
      }
      function U(e) {
        return {
          nodeInfo: D(e.node_info),
          syncInfo: V(e.sync_info),
          validatorInfo: H(e.validator_info),
        };
      }
      function q(e) {
        return {
          data: r.fromBase64(a.assertNotEmpty(e.data)),
          rootHash: r.fromHex(a.assertNotEmpty(e.root_hash)),
          proof: {
            total: a.Integer.parse(a.assertNotEmpty(e.proof.total)),
            index: a.Integer.parse(a.assertNotEmpty(e.proof.index)),
            leafHash: r.fromBase64(a.assertNotEmpty(e.proof.leaf_hash)),
            aunts: a.assertArray(e.proof.aunts).map(r.fromBase64),
          },
        };
      }
      function Q(e) {
        return {
          tx: r.fromBase64(a.assertNotEmpty(e.tx)),
          result: f(a.assertObject(e.tx_result)),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          index: a.Integer.parse(a.assertNumber(e.index)),
          hash: r.fromHex(a.assertNotEmpty(e.hash)),
          proof: a.may(q, e.proof),
        };
      }
      function W(e) {
        return {
          totalCount: a.Integer.parse(a.assertNotEmpty(e.total_count)),
          txs: a.assertArray(e.txs).map(Q),
        };
      }
      function $(e) {
        const t = r.fromBase64(a.assertNotEmpty(e.tx));
        return {
          tx: t,
          hash: c.hashTx(t),
          result: f(e.result),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          index: a.may(a.Integer.parse, e.index),
        };
      }
      function F(e) {
        return {
          blockHeight: a.Integer.parse(a.assertNotEmpty(e.block_height)),
          validators: a.assertArray(e.validators).map(b),
          count: a.Integer.parse(a.assertNotEmpty(e.count)),
          total: a.Integer.parse(a.assertNotEmpty(e.total)),
        };
      }
      function L(e) {
        return {
          type: a.assertNotEmpty(e.type),
          height: a.Integer.parse(a.assertNotEmpty(e.height)),
          time: a.Integer.parse(a.assertNotEmpty(e.time)),
          totalVotingPower: a.Integer.parse(
            a.assertNotEmpty(e.totalVotingPower),
          ),
          validator: b(e.validator),
        };
      }
      function J(e) {
        return a.assertArray(e).map(L);
      }
      function G(e) {
        return {
          header: x(a.assertObject(e.header)),
          lastCommit: e.last_commit.block_id.hash
            ? B(a.assertObject(e.last_commit))
            : null,
          txs: e.data.txs ? a.assertArray(e.data.txs).map(r.fromBase64) : [],
          evidence: e.evidence && a.may(J, e.evidence.evidence),
        };
      }
      function K(e) {
        return { blockId: A(e.block_id), block: G(e.block) };
      }
      function z(e) {
        return {
          totalCount: a.Integer.parse(a.assertNotEmpty(e.total_count)),
          blocks: a.assertArray(e.blocks).map(K),
        };
      }
      class Responses {
        static decodeAbciInfo(e) {
          return u(a.assertObject(e.result.response));
        }
        static decodeAbciQuery(e) {
          return l(a.assertObject(e.result.response));
        }
        static decodeBlock(e) {
          return K(e.result);
        }
        static decodeBlockResults(e) {
          return S(e.result);
        }
        static decodeBlockSearch(e) {
          return z(e.result);
        }
        static decodeBlockchain(e) {
          return M(e.result);
        }
        static decodeBroadcastTxSync(e) {
          return E(e.result);
        }
        static decodeBroadcastTxAsync(e) {
          return this.decodeBroadcastTxSync(e);
        }
        static decodeBroadcastTxCommit(e) {
          return T(e.result);
        }
        static decodeCommit(e) {
          return I(e.result);
        }
        static decodeGenesis(e) {
          return R(a.assertObject(e.result.genesis));
        }
        static decodeHealth() {
          return null;
        }
        static decodeStatus(e) {
          return U(e.result);
        }
        static decodeNewBlockEvent(e) {
          return G(e.data.value.block);
        }
        static decodeNewBlockHeaderEvent(e) {
          return x(e.data.value.header);
        }
        static decodeTxEvent(e) {
          return $(e.data.value.TxResult);
        }
        static decodeTx(e) {
          return Q(e.result);
        }
        static decodeTxSearch(e) {
          return W(e.result);
        }
        static decodeValidators(e) {
          return F(e.result);
        }
      }
      t.Responses = Responses;
    },
    4465: function (e, t, n) {
      "use strict";
      function r(e) {
        return 0 === e.code;
      }
      function s(e) {
        return 0 === e.checkTx.code && !!e.deliverTx && 0 === e.deliverTx.code;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoteType =
          t.broadcastTxCommitSuccess =
          t.broadcastTxSyncSuccess =
            void 0),
        (t.broadcastTxSyncSuccess = r),
        (t.broadcastTxCommitSuccess = s),
        (function (e) {
          ((e[(e["PreVote"] = 1)] = "PreVote"),
            (e[(e["PreCommit"] = 2)] = "PreCommit"));
        })(t.VoteType || (t.VoteType = {})));
    },
    4466: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SigningStargateClient = t.defaultRegistryTypes = void 0));
      const s = n(2910),
        o = n(2762),
        i = n(2796),
        a = n(2968),
        c = n(3577),
        u = n(2815),
        d = n(3378),
        l = n(4467),
        m = n(4468),
        p = n(4469),
        h = n(3063),
        g = n(2937),
        f = n(4470),
        y = n(4471),
        b = n(4472),
        v = n(4473),
        w = r(n(2754)),
        k = n(3562),
        S = n(3576);
      function A() {
        return new a.Registry(t.defaultRegistryTypes);
      }
      t.defaultRegistryTypes = [
        ["/cosmos.bank.v1beta1.MsgMultiSend", d.MsgMultiSend],
        [
          "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
          l.MsgFundCommunityPool,
        ],
        [
          "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
          l.MsgSetWithdrawAddress,
        ],
        [
          "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
          l.MsgWithdrawDelegatorReward,
        ],
        [
          "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
          l.MsgWithdrawValidatorCommission,
        ],
        ["/cosmos.gov.v1beta1.MsgDeposit", m.MsgDeposit],
        ["/cosmos.gov.v1beta1.MsgSubmitProposal", m.MsgSubmitProposal],
        ["/cosmos.gov.v1beta1.MsgVote", m.MsgVote],
        ["/cosmos.staking.v1beta1.MsgBeginRedelegate", p.MsgBeginRedelegate],
        ["/cosmos.staking.v1beta1.MsgCreateValidator", p.MsgCreateValidator],
        ["/cosmos.staking.v1beta1.MsgDelegate", p.MsgDelegate],
        ["/cosmos.staking.v1beta1.MsgEditValidator", p.MsgEditValidator],
        ["/cosmos.staking.v1beta1.MsgUndelegate", p.MsgUndelegate],
        ["/ibc.core.channel.v1.MsgChannelOpenInit", y.MsgChannelOpenInit],
        ["/ibc.core.channel.v1.MsgChannelOpenTry", y.MsgChannelOpenTry],
        ["/ibc.core.channel.v1.MsgChannelOpenAck", y.MsgChannelOpenAck],
        ["/ibc.core.channel.v1.MsgChannelOpenConfirm", y.MsgChannelOpenConfirm],
        ["/ibc.core.channel.v1.MsgChannelCloseInit", y.MsgChannelCloseInit],
        [
          "/ibc.core.channel.v1.MsgChannelCloseConfirm",
          y.MsgChannelCloseConfirm,
        ],
        ["/ibc.core.channel.v1.MsgRecvPacket", y.MsgRecvPacket],
        ["/ibc.core.channel.v1.MsgTimeout ", y.MsgTimeout],
        ["/ibc.core.channel.v1.MsgTimeoutOnClose", y.MsgTimeoutOnClose],
        ["/ibc.core.channel.v1.MsgAcknowledgement", y.MsgAcknowledgement],
        ["/ibc.core.client.v1.MsgCreateClient", b.MsgCreateClient],
        ["/ibc.core.client.v1.MsgUpdateClient", b.MsgUpdateClient],
        ["/ibc.core.client.v1.MsgUpgradeClient", b.MsgUpgradeClient],
        ["/ibc.core.client.v1.MsgSubmitMisbehaviour", b.MsgSubmitMisbehaviour],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenInit",
          v.MsgConnectionOpenInit,
        ],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenTry",
          v.MsgConnectionOpenTry,
        ],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenAck",
          v.MsgConnectionOpenAck,
        ],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
          v.MsgConnectionOpenConfirm,
        ],
        ["/ibc.applications.transfer.v1.MsgTransfer", f.MsgTransfer],
      ];
      class SigningStargateClient extends S.StargateClient {
        constructor(e, t, n) {
          super(e);
          const {
            registry: r = A(),
            aminoTypes: s = new k.AminoTypes({ prefix: n.prefix }),
          } = n;
          ((this.registry = r),
            (this.aminoTypes = s),
            (this.signer = t),
            (this.broadcastTimeoutMs = n.broadcastTimeoutMs),
            (this.broadcastPollIntervalMs = n.broadcastPollIntervalMs));
        }
        static async connectWithSigner(e, t, n) {
          void 0 === n && (n = {});
          const r = await c.Tendermint34Client.connect(e);
          return new SigningStargateClient(r, t, n);
        }
        static async offline(e, t) {
          return (
            void 0 === t && (t = {}),
            new SigningStargateClient(void 0, e, t)
          );
        }
        async sendTokens(e, t, n, r, s) {
          void 0 === s && (s = "");
          const o = {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: { fromAddress: e, toAddress: t, amount: [...n] },
          };
          return this.signAndBroadcast(e, [o], r, s);
        }
        async delegateTokens(e, t, n, r, s) {
          void 0 === s && (s = "");
          const o = {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: p.MsgDelegate.fromPartial({
              delegatorAddress: e,
              validatorAddress: t,
              amount: n,
            }),
          };
          return this.signAndBroadcast(e, [o], r, s);
        }
        async undelegateTokens(e, t, n, r, s) {
          void 0 === s && (s = "");
          const o = {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: p.MsgUndelegate.fromPartial({
              delegatorAddress: e,
              validatorAddress: t,
              amount: n,
            }),
          };
          return this.signAndBroadcast(e, [o], r, s);
        }
        async withdrawRewards(e, t, n, r) {
          void 0 === r && (r = "");
          const s = {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: l.MsgWithdrawDelegatorReward.fromPartial({
              delegatorAddress: e,
              validatorAddress: t,
            }),
          };
          return this.signAndBroadcast(e, [s], n, r);
        }
        async sendIbcTokens(e, t, n, r, s, o, i, a, c) {
          void 0 === c && (c = "");
          const u = i ? w.default.fromNumber(i).multiply(1e9) : void 0,
            d = {
              typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
              value: f.MsgTransfer.fromPartial({
                sourcePort: r,
                sourceChannel: s,
                sender: e,
                receiver: t,
                token: n,
                timeoutHeight: o,
                timeoutTimestamp: u,
              }),
            };
          return this.signAndBroadcast(e, [d], a, c);
        }
        async signAndBroadcast(e, t, n, r) {
          void 0 === r && (r = "");
          const s = await this.sign(e, t, n, r),
            o = g.TxRaw.encode(s).finish();
          return this.broadcastTx(
            o,
            this.broadcastTimeoutMs,
            this.broadcastPollIntervalMs,
          );
        }
        async sign(e, t, n, r, s) {
          let o;
          if (s) o = s;
          else {
            const { accountNumber: t, sequence: n } = await this.getSequence(e),
              r = await this.getChainId();
            o = { accountNumber: t, sequence: n, chainId: r };
          }
          return a.isOfflineDirectSigner(this.signer)
            ? this.signDirect(e, t, n, r, o)
            : this.signAmino(e, t, n, r, o);
        }
        async signAmino(e, t, n, r, c) {
          let { accountNumber: d, sequence: l, chainId: m } = c;
          u.assert(!a.isOfflineDirectSigner(this.signer));
          const p = (await this.signer.getAccounts()).find(
            (t) => t.address === e,
          );
          if (!p) throw new Error("Failed to retrieve account from signer");
          const f = a.encodePubkey(s.encodeSecp256k1Pubkey(p.pubkey)),
            y = h.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
            b = t.map((e) => this.aminoTypes.toAmino(e)),
            v = s.makeSignDoc(b, n, m, r, d, l),
            { signature: w, signed: k } = await this.signer.signAmino(e, v),
            S = {
              messages: k.msgs.map((e) => this.aminoTypes.fromAmino(e)),
              memo: k.memo,
            },
            A = { typeUrl: "/cosmos.tx.v1beta1.TxBody", value: S },
            _ = this.registry.encode(A),
            x = i.Int53.fromString(k.fee.gas).toNumber(),
            P = i.Int53.fromString(k.sequence).toNumber(),
            M = a.makeAuthInfoBytes(
              [{ pubkey: f, sequence: P }],
              k.fee.amount,
              x,
              y,
            );
          return g.TxRaw.fromPartial({
            bodyBytes: _,
            authInfoBytes: M,
            signatures: [o.fromBase64(w.signature)],
          });
        }
        async signDirect(e, t, n, r, c) {
          let { accountNumber: d, sequence: l, chainId: m } = c;
          u.assert(a.isOfflineDirectSigner(this.signer));
          const p = (await this.signer.getAccounts()).find(
            (t) => t.address === e,
          );
          if (!p) throw new Error("Failed to retrieve account from signer");
          const h = a.encodePubkey(s.encodeSecp256k1Pubkey(p.pubkey)),
            f = {
              typeUrl: "/cosmos.tx.v1beta1.TxBody",
              value: { messages: t, memo: r },
            },
            y = this.registry.encode(f),
            b = i.Int53.fromString(n.gas).toNumber(),
            v = a.makeAuthInfoBytes([{ pubkey: h, sequence: l }], n.amount, b),
            w = a.makeSignDoc(y, v, m, d),
            { signature: k, signed: S } = await this.signer.signDirect(e, w);
          return g.TxRaw.fromPartial({
            bodyBytes: S.bodyBytes,
            authInfoBytes: S.authInfoBytes,
            signatures: [o.fromBase64(k.signature)],
          });
        }
      }
      t.SigningStargateClient = SigningStargateClient;
    },
  },
]);
