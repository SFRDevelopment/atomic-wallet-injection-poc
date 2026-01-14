(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [94],
  {
    1398: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "AlchemyProvider", {
          enumerable: !0,
          get: function () {
            return i.AlchemyProvider;
          },
        }),
        Object.defineProperty(r, "AlchemyWebSocketProvider", {
          enumerable: !0,
          get: function () {
            return i.AlchemyWebSocketProvider;
          },
        }),
        Object.defineProperty(r, "AnkrProvider", {
          enumerable: !0,
          get: function () {
            return a.AnkrProvider;
          },
        }),
        Object.defineProperty(r, "BaseProvider", {
          enumerable: !0,
          get: function () {
            return s.BaseProvider;
          },
        }),
        Object.defineProperty(r, "CloudflareProvider", {
          enumerable: !0,
          get: function () {
            return l.CloudflareProvider;
          },
        }),
        Object.defineProperty(r, "EtherscanProvider", {
          enumerable: !0,
          get: function () {
            return c.EtherscanProvider;
          },
        }),
        Object.defineProperty(r, "FallbackProvider", {
          enumerable: !0,
          get: function () {
            return u.FallbackProvider;
          },
        }),
        Object.defineProperty(r, "Formatter", {
          enumerable: !0,
          get: function () {
            return y.Formatter;
          },
        }),
        Object.defineProperty(r, "InfuraProvider", {
          enumerable: !0,
          get: function () {
            return d.InfuraProvider;
          },
        }),
        Object.defineProperty(r, "InfuraWebSocketProvider", {
          enumerable: !0,
          get: function () {
            return d.InfuraWebSocketProvider;
          },
        }),
        Object.defineProperty(r, "IpcProvider", {
          enumerable: !0,
          get: function () {
            return h.IpcProvider;
          },
        }),
        Object.defineProperty(r, "JsonRpcBatchProvider", {
          enumerable: !0,
          get: function () {
            return f.JsonRpcBatchProvider;
          },
        }),
        Object.defineProperty(r, "JsonRpcProvider", {
          enumerable: !0,
          get: function () {
            return g.JsonRpcProvider;
          },
        }),
        Object.defineProperty(r, "JsonRpcSigner", {
          enumerable: !0,
          get: function () {
            return g.JsonRpcSigner;
          },
        }),
        Object.defineProperty(r, "NodesmithProvider", {
          enumerable: !0,
          get: function () {
            return m.NodesmithProvider;
          },
        }),
        Object.defineProperty(r, "PocketProvider", {
          enumerable: !0,
          get: function () {
            return p.PocketProvider;
          },
        }),
        Object.defineProperty(r, "Provider", {
          enumerable: !0,
          get: function () {
            return o.Provider;
          },
        }),
        Object.defineProperty(r, "Resolver", {
          enumerable: !0,
          get: function () {
            return s.Resolver;
          },
        }),
        Object.defineProperty(r, "StaticJsonRpcProvider", {
          enumerable: !0,
          get: function () {
            return v.StaticJsonRpcProvider;
          },
        }),
        Object.defineProperty(r, "UrlJsonRpcProvider", {
          enumerable: !0,
          get: function () {
            return v.UrlJsonRpcProvider;
          },
        }),
        Object.defineProperty(r, "Web3Provider", {
          enumerable: !0,
          get: function () {
            return E.Web3Provider;
          },
        }),
        Object.defineProperty(r, "WebSocketProvider", {
          enumerable: !0,
          get: function () {
            return b.WebSocketProvider;
          },
        }),
        (r.getDefaultProvider = _),
        Object.defineProperty(r, "getNetwork", {
          enumerable: !0,
          get: function () {
            return n.getNetwork;
          },
        }),
        Object.defineProperty(r, "isCommunityResourcable", {
          enumerable: !0,
          get: function () {
            return y.isCommunityResourcable;
          },
        }),
        Object.defineProperty(r, "isCommunityResource", {
          enumerable: !0,
          get: function () {
            return y.isCommunityResource;
          },
        }),
        Object.defineProperty(r, "showThrottleMessage", {
          enumerable: !0,
          get: function () {
            return y.showThrottleMessage;
          },
        }));
      var o = t(272),
        n = t(515),
        s = t(173),
        i = t(1431),
        a = t(1435),
        l = t(1436),
        c = t(1437),
        u = t(1438),
        h = t(1443),
        d = t(1444),
        g = t(140),
        f = t(1445),
        m = t(1446),
        p = t(1447),
        v = t(92),
        E = t(1448),
        b = t(277),
        y = t(91),
        w = t(17),
        N = t(44);
      const k = new w.Logger(N.version);
      function _(e, r) {
        if ((null == e && (e = "homestead"), "string" === typeof e)) {
          const r = e.match(/^(ws|http)s?:/i);
          if (r)
            switch (r[1].toLowerCase()) {
              case "http":
              case "https":
                return new g.JsonRpcProvider(e);
              case "ws":
              case "wss":
                return new b.WebSocketProvider(e);
              default:
                k.throwArgumentError("unsupported URL scheme", "network", e);
            }
        }
        const t = (0, n.getNetwork)(e);
        return (
          (t && t._defaultProvider) ||
            k.throwError(
              "unsupported getDefaultProvider network",
              w.Logger.errors.NETWORK_ERROR,
              { operation: "getDefaultProvider", network: e },
            ),
          t._defaultProvider(
            {
              FallbackProvider: u.FallbackProvider,
              AlchemyProvider: i.AlchemyProvider,
              AnkrProvider: a.AnkrProvider,
              CloudflareProvider: l.CloudflareProvider,
              EtherscanProvider: c.EtherscanProvider,
              InfuraProvider: d.InfuraProvider,
              JsonRpcProvider: g.JsonRpcProvider,
              NodesmithProvider: m.NodesmithProvider,
              PocketProvider: p.PocketProvider,
              Web3Provider: E.Web3Provider,
              IpcProvider: h.IpcProvider,
            },
            r,
          )
        );
      }
    },
    140: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.JsonRpcSigner = r.JsonRpcProvider = void 0));
      var o = t(1432),
        n = t(65),
        s = t(25),
        i = t(516),
        a = t(38),
        l = t(90),
        c = t(276),
        u = t(139),
        h = t(17),
        d = t(44),
        g = t(173),
        f = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const m = new h.Logger(d.version),
        p = ["call", "estimateGas"];
      function v(e, r) {
        if (null == e) return null;
        if ("string" === typeof e.message && e.message.match("reverted")) {
          const t = (0, s.isHexString)(e.data) ? e.data : null;
          if (!r || t) return { message: e.message, data: t };
        }
        if ("object" === typeof e) {
          for (const t in e) {
            const o = v(e[t], r);
            if (o) return o;
          }
          return null;
        }
        if ("string" === typeof e)
          try {
            return v(JSON.parse(e), r);
          } catch (t) {}
        return null;
      }
      function E(e, r, t) {
        const o = t.transaction || t.signedTransaction;
        if ("call" === e) {
          const e = v(r, !0);
          if (e) return e.data;
          m.throwError(
            "missing revert data in call exception; Transaction reverted without a reason string",
            h.Logger.errors.CALL_EXCEPTION,
            { data: "0x", transaction: o, error: r },
          );
        }
        if ("estimateGas" === e) {
          let t = v(r.body, !1);
          (null == t && (t = v(r, !1)),
            t &&
              m.throwError(
                "cannot estimate gas; transaction may fail or may require manual gas limit",
                h.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: t.message, method: e, transaction: o, error: r },
              ));
        }
        let n = r.message;
        throw (
          r.code === h.Logger.errors.SERVER_ERROR &&
          r.error &&
          "string" === typeof r.error.message
            ? (n = r.error.message)
            : "string" === typeof r.body
              ? (n = r.body)
              : "string" === typeof r.responseText && (n = r.responseText),
          (n = (n || "").toLowerCase()),
          n.match(
            /insufficient funds|base fee exceeds gas limit|InsufficientFunds/i,
          ) &&
            m.throwError(
              "insufficient funds for intrinsic transaction cost",
              h.Logger.errors.INSUFFICIENT_FUNDS,
              { error: r, method: e, transaction: o },
            ),
          n.match(/nonce (is )?too low/i) &&
            m.throwError(
              "nonce has already been used",
              h.Logger.errors.NONCE_EXPIRED,
              { error: r, method: e, transaction: o },
            ),
          n.match(
            /replacement transaction underpriced|transaction gas price.*too low/i,
          ) &&
            m.throwError(
              "replacement fee too low",
              h.Logger.errors.REPLACEMENT_UNDERPRICED,
              { error: r, method: e, transaction: o },
            ),
          n.match(/only replay-protected/i) &&
            m.throwError(
              "legacy pre-eip-155 transactions not supported",
              h.Logger.errors.UNSUPPORTED_OPERATION,
              { error: r, method: e, transaction: o },
            ),
          p.indexOf(e) >= 0 &&
            n.match(
              /gas required exceeds allowance|always failing transaction|execution reverted|revert/,
            ) &&
            m.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              h.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: r, method: e, transaction: o },
            ),
          r
        );
      }
      function b(e) {
        return new Promise(function (r) {
          setTimeout(r, e);
        });
      }
      function y(e) {
        if (e.error) {
          const r = new Error(e.error.message);
          throw ((r.code = e.error.code), (r.data = e.error.data), r);
        }
        return e.result;
      }
      function w(e) {
        return e ? e.toLowerCase() : e;
      }
      const N = {};
      class JsonRpcSigner extends o.Signer {
        constructor(e, r, t) {
          if ((super(), e !== N))
            throw new Error(
              "do not call the JsonRpcSigner constructor directly; use provider.getSigner",
            );
          ((0, a.defineReadOnly)(this, "provider", r),
            null == t && (t = 0),
            "string" === typeof t
              ? ((0, a.defineReadOnly)(
                  this,
                  "_address",
                  this.provider.formatter.address(t),
                ),
                (0, a.defineReadOnly)(this, "_index", null))
              : "number" === typeof t
                ? ((0, a.defineReadOnly)(this, "_index", t),
                  (0, a.defineReadOnly)(this, "_address", null))
                : m.throwArgumentError(
                    "invalid address or index",
                    "addressOrIndex",
                    t,
                  ));
        }
        connect(e) {
          return m.throwError(
            "cannot alter JSON-RPC Signer connection",
            h.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "connect" },
          );
        }
        connectUnchecked() {
          return new UncheckedJsonRpcSigner(
            N,
            this.provider,
            this._address || this._index,
          );
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (e) => (
                    e.length <= this._index &&
                      m.throwError(
                        "unknown account #" + this._index,
                        h.Logger.errors.UNSUPPORTED_OPERATION,
                        { operation: "getAddress" },
                      ),
                    this.provider.formatter.address(e[this._index])
                  ),
                );
        }
        sendUncheckedTransaction(e) {
          e = (0, a.shallowCopy)(e);
          const r = this.getAddress().then(
            (e) => (e && (e = e.toLowerCase()), e),
          );
          if (null == e.gasLimit) {
            const t = (0, a.shallowCopy)(e);
            ((t.from = r), (e.gasLimit = this.provider.estimateGas(t)));
          }
          return (
            null != e.to &&
              (e.to = Promise.resolve(e.to).then((e) =>
                f(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  const r = yield this.provider.resolveName(e);
                  return (
                    null == r &&
                      m.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e,
                      ),
                    r
                  );
                }),
              )),
            (0, a.resolveProperties)({
              tx: (0, a.resolveProperties)(e),
              sender: r,
            }).then((r) => {
              let { tx: t, sender: o } = r;
              null != t.from
                ? t.from.toLowerCase() !== o &&
                  m.throwArgumentError(
                    "from address mismatch",
                    "transaction",
                    e,
                  )
                : (t.from = o);
              const n = this.provider.constructor.hexlifyTransaction(t, {
                from: !0,
              });
              return this.provider.send("eth_sendTransaction", [n]).then(
                (e) => e,
                (e) => (
                  "string" === typeof e.message &&
                    e.message.match(/user denied/i) &&
                    m.throwError(
                      "user rejected transaction",
                      h.Logger.errors.ACTION_REJECTED,
                      { action: "sendTransaction", transaction: t },
                    ),
                  E("sendTransaction", e, n)
                ),
              );
            })
          );
        }
        signTransaction(e) {
          return m.throwError(
            "signing transactions is unsupported",
            h.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "signTransaction" },
          );
        }
        sendTransaction(e) {
          return f(this, void 0, void 0, function* () {
            const r = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval,
              ),
              t = yield this.sendUncheckedTransaction(e);
            try {
              return yield (0, u.poll)(
                () =>
                  f(this, void 0, void 0, function* () {
                    const e = yield this.provider.getTransaction(t);
                    if (null !== e)
                      return this.provider._wrapTransaction(e, t, r);
                  }),
                { oncePoll: this.provider },
              );
            } catch (o) {
              throw ((o.transactionHash = t), o);
            }
          });
        }
        signMessage(e) {
          return f(this, void 0, void 0, function* () {
            const r = "string" === typeof e ? (0, l.toUtf8Bytes)(e) : e,
              t = yield this.getAddress();
            try {
              return yield this.provider.send("personal_sign", [
                (0, s.hexlify)(r),
                t.toLowerCase(),
              ]);
            } catch (o) {
              throw (
                "string" === typeof o.message &&
                  o.message.match(/user denied/i) &&
                  m.throwError(
                    "user rejected signing",
                    h.Logger.errors.ACTION_REJECTED,
                    { action: "signMessage", from: t, messageData: e },
                  ),
                o
              );
            }
          });
        }
        _legacySignMessage(e) {
          return f(this, void 0, void 0, function* () {
            const r = "string" === typeof e ? (0, l.toUtf8Bytes)(e) : e,
              t = yield this.getAddress();
            try {
              return yield this.provider.send("eth_sign", [
                t.toLowerCase(),
                (0, s.hexlify)(r),
              ]);
            } catch (o) {
              throw (
                "string" === typeof o.message &&
                  o.message.match(/user denied/i) &&
                  m.throwError(
                    "user rejected signing",
                    h.Logger.errors.ACTION_REJECTED,
                    { action: "_legacySignMessage", from: t, messageData: e },
                  ),
                o
              );
            }
          });
        }
        _signTypedData(e, r, t) {
          return f(this, void 0, void 0, function* () {
            const o = yield i._TypedDataEncoder.resolveNames(e, r, t, (e) =>
                this.provider.resolveName(e),
              ),
              n = yield this.getAddress();
            try {
              return yield this.provider.send("eth_signTypedData_v4", [
                n.toLowerCase(),
                JSON.stringify(
                  i._TypedDataEncoder.getPayload(o.domain, r, o.value),
                ),
              ]);
            } catch (s) {
              throw (
                "string" === typeof s.message &&
                  s.message.match(/user denied/i) &&
                  m.throwError(
                    "user rejected signing",
                    h.Logger.errors.ACTION_REJECTED,
                    {
                      action: "_signTypedData",
                      from: n,
                      messageData: {
                        domain: o.domain,
                        types: r,
                        value: o.value,
                      },
                    },
                  ),
                s
              );
            }
          });
        }
        unlock(e) {
          return f(this, void 0, void 0, function* () {
            const r = this.provider,
              t = yield this.getAddress();
            return r.send("personal_unlockAccount", [t.toLowerCase(), e, null]);
          });
        }
      }
      r.JsonRpcSigner = JsonRpcSigner;
      class UncheckedJsonRpcSigner extends JsonRpcSigner {
        sendTransaction(e) {
          return this.sendUncheckedTransaction(e).then((e) => ({
            hash: e,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (r) => this.provider.waitForTransaction(e, r),
          }));
        }
      }
      const k = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class JsonRpcProvider extends g.BaseProvider {
        constructor(e, r) {
          let t = r;
          (null == t &&
            (t = new Promise((e, r) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (r) => {
                    e(r);
                  },
                  (e) => {
                    r(e);
                  },
                );
              }, 0);
            })),
            super(t),
            e || (e = (0, a.getStatic)(this.constructor, "defaultUrl")()),
            "string" === typeof e
              ? (0, a.defineReadOnly)(
                  this,
                  "connection",
                  Object.freeze({ url: e }),
                )
              : (0, a.defineReadOnly)(
                  this,
                  "connection",
                  Object.freeze((0, a.shallowCopy)(e)),
                ),
            (this._nextId = 42));
        }
        get _cache() {
          return (
            null == this._eventLoopCache && (this._eventLoopCache = {}),
            this._eventLoopCache
          );
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache["detectNetwork"] ||
              ((this._cache["detectNetwork"] = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache["detectNetwork"] = null;
              }, 0)),
            this._cache["detectNetwork"]
          );
        }
        _uncachedDetectNetwork() {
          return f(this, void 0, void 0, function* () {
            yield b(0);
            let e = null;
            try {
              e = yield this.send("eth_chainId", []);
            } catch (r) {
              try {
                e = yield this.send("net_version", []);
              } catch (r) {}
            }
            if (null != e) {
              const t = (0, a.getStatic)(this.constructor, "getNetwork");
              try {
                return t(n.BigNumber.from(e).toNumber());
              } catch (r) {
                return m.throwError(
                  "could not detect network",
                  h.Logger.errors.NETWORK_ERROR,
                  { chainId: e, event: "invalidNetwork", serverError: r },
                );
              }
            }
            return m.throwError(
              "could not detect network",
              h.Logger.errors.NETWORK_ERROR,
              { event: "noNetwork" },
            );
          });
        }
        getSigner(e) {
          return new JsonRpcSigner(N, this, e);
        }
        getUncheckedSigner(e) {
          return this.getSigner(e).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((e) =>
            e.map((e) => this.formatter.address(e)),
          );
        }
        send(e, r) {
          const t = {
            method: e,
            params: r,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          this.emit("debug", {
            action: "request",
            request: (0, a.deepCopy)(t),
            provider: this,
          });
          const o = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
          if (o && this._cache[e]) return this._cache[e];
          const n = (0, u.fetchJson)(
            this.connection,
            JSON.stringify(t),
            y,
          ).then(
            (e) => (
              this.emit("debug", {
                action: "response",
                request: t,
                response: e,
                provider: this,
              }),
              e
            ),
            (e) => {
              throw (
                this.emit("debug", {
                  action: "response",
                  error: e,
                  request: t,
                  provider: this,
                }),
                e
              );
            },
          );
          return (
            o &&
              ((this._cache[e] = n),
              setTimeout(() => {
                this._cache[e] = null;
              }, 0)),
            n
          );
        }
        prepareRequest(e, r) {
          switch (e) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [w(r.address), r.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [w(r.address), r.blockTag]];
            case "getCode":
              return ["eth_getCode", [w(r.address), r.blockTag]];
            case "getStorageAt":
              return [
                "eth_getStorageAt",
                [w(r.address), (0, s.hexZeroPad)(r.position, 32), r.blockTag],
              ];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [r.signedTransaction]];
            case "getBlock":
              return r.blockTag
                ? [
                    "eth_getBlockByNumber",
                    [r.blockTag, !!r.includeTransactions],
                  ]
                : r.blockHash
                  ? [
                      "eth_getBlockByHash",
                      [r.blockHash, !!r.includeTransactions],
                    ]
                  : null;
            case "getTransaction":
              return ["eth_getTransactionByHash", [r.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [r.transactionHash]];
            case "call": {
              const e = (0, a.getStatic)(
                this.constructor,
                "hexlifyTransaction",
              );
              return ["eth_call", [e(r.transaction, { from: !0 }), r.blockTag]];
            }
            case "estimateGas": {
              const e = (0, a.getStatic)(
                this.constructor,
                "hexlifyTransaction",
              );
              return ["eth_estimateGas", [e(r.transaction, { from: !0 })]];
            }
            case "getLogs":
              return (
                r.filter &&
                  null != r.filter.address &&
                  (r.filter.address = w(r.filter.address)),
                ["eth_getLogs", [r.filter]]
              );
            default:
              break;
          }
          return null;
        }
        perform(e, r) {
          return f(this, void 0, void 0, function* () {
            if ("call" === e || "estimateGas" === e) {
              const e = r.transaction;
              if (
                e &&
                null != e.type &&
                n.BigNumber.from(e.type).isZero() &&
                null == e.maxFeePerGas &&
                null == e.maxPriorityFeePerGas
              ) {
                const t = yield this.getFeeData();
                null == t.maxFeePerGas &&
                  null == t.maxPriorityFeePerGas &&
                  ((r = (0, a.shallowCopy)(r)),
                  (r.transaction = (0, a.shallowCopy)(e)),
                  delete r.transaction.type);
              }
            }
            const t = this.prepareRequest(e, r);
            null == t &&
              m.throwError(
                e + " not implemented",
                h.Logger.errors.NOT_IMPLEMENTED,
                { operation: e },
              );
            try {
              return yield this.send(t[0], t[1]);
            } catch (o) {
              return E(e, o, r);
            }
          });
        }
        _startEvent(e) {
          ("pending" === e.tag && this._startPending(), super._startEvent(e));
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          const e = this,
            r = this.send("eth_newPendingTransactionFilter", []);
          ((this._pendingFilter = r),
            r
              .then(function (t) {
                function o() {
                  e.send("eth_getFilterChanges", [t])
                    .then(function (t) {
                      if (e._pendingFilter != r) return null;
                      let o = Promise.resolve();
                      return (
                        t.forEach(function (r) {
                          ((e._emitted["t:" + r.toLowerCase()] = "pending"),
                            (o = o.then(function () {
                              return e.getTransaction(r).then(function (r) {
                                return (e.emit("pending", r), null);
                              });
                            })));
                        }),
                        o.then(function () {
                          return b(1e3);
                        })
                      );
                    })
                    .then(function () {
                      if (e._pendingFilter == r)
                        return (
                          setTimeout(function () {
                            o();
                          }, 0),
                          null
                        );
                      e.send("eth_uninstallFilter", [t]);
                    })
                    .catch((e) => {});
                }
                return (o(), t);
              })
              .catch((e) => {}));
        }
        _stopEvent(e) {
          ("pending" === e.tag &&
            0 === this.listenerCount("pending") &&
            (this._pendingFilter = null),
            super._stopEvent(e));
        }
        static hexlifyTransaction(e, r) {
          const t = (0, a.shallowCopy)(k);
          if (r) for (const n in r) r[n] && (t[n] = !0);
          (0, a.checkProperties)(e, t);
          const o = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (r) {
              if (null == e[r]) return;
              const t = (0, s.hexValue)(n.BigNumber.from(e[r]));
              ("gasLimit" === r && (r = "gas"), (o[r] = t));
            }),
            ["from", "to", "data"].forEach(function (r) {
              null != e[r] && (o[r] = (0, s.hexlify)(e[r]));
            }),
            e.accessList &&
              (o["accessList"] = (0, c.accessListify)(e.accessList)),
            o
          );
        }
      }
      r.JsonRpcProvider = JsonRpcProvider;
    },
    1431: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AlchemyWebSocketProvider = r.AlchemyProvider = void 0));
      var o = t(38),
        n = t(91),
        s = t(277),
        i = t(17),
        a = t(44),
        l = t(92);
      const c = new i.Logger(a.version),
        u = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class AlchemyWebSocketProvider extends s.WebSocketProvider {
        constructor(e, r) {
          const t = new AlchemyProvider(e, r),
            n = t.connection.url
              .replace(/^http/i, "ws")
              .replace(".alchemyapi.", ".ws.alchemyapi.");
          (super(n, t.network),
            (0, o.defineReadOnly)(this, "apiKey", t.apiKey));
        }
        isCommunityResource() {
          return this.apiKey === u;
        }
      }
      r.AlchemyWebSocketProvider = AlchemyWebSocketProvider;
      class AlchemyProvider extends l.UrlJsonRpcProvider {
        static getWebSocketProvider(e, r) {
          return new AlchemyWebSocketProvider(e, r);
        }
        static getApiKey(e) {
          return null == e
            ? u
            : (e &&
                "string" !== typeof e &&
                c.throwArgumentError("invalid apiKey", "apiKey", e),
              e);
        }
        static getUrl(e, r) {
          let t = null;
          switch (e.name) {
            case "homestead":
              t = "eth-mainnet.alchemyapi.io/v2/";
              break;
            case "goerli":
              t = "eth-goerli.g.alchemy.com/v2/";
              break;
            case "matic":
              t = "polygon-mainnet.g.alchemy.com/v2/";
              break;
            case "maticmum":
              t = "polygon-mumbai.g.alchemy.com/v2/";
              break;
            case "arbitrum":
              t = "arb-mainnet.g.alchemy.com/v2/";
              break;
            case "arbitrum-goerli":
              t = "arb-goerli.g.alchemy.com/v2/";
              break;
            case "optimism":
              t = "opt-mainnet.g.alchemy.com/v2/";
              break;
            case "optimism-goerli":
              t = "opt-goerli.g.alchemy.com/v2/";
              break;
            default:
              c.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return {
            allowGzip: !0,
            url: "https://" + t + r,
            throttleCallback: (e, t) => (
              r === u && (0, n.showThrottleMessage)(),
              Promise.resolve(!0)
            ),
          };
        }
        isCommunityResource() {
          return this.apiKey === u;
        }
      }
      r.AlchemyProvider = AlchemyProvider;
    },
    1434: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WebSocket = void 0));
      var o = t(17),
        n = t(44);
      let s = (r.WebSocket = null);
      try {
        if (((r.WebSocket = s = WebSocket), null == s))
          throw new Error("inject please");
      } catch (i) {
        const e = new o.Logger(n.version);
        r.WebSocket = s = function () {
          e.throwError(
            "WebSockets not supported in this environment",
            o.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "new WebSocket()" },
          );
        };
      }
    },
    1435: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AnkrProvider = void 0));
      var o = t(91),
        n = t(92),
        s = t(17),
        i = t(44);
      const a = new s.Logger(i.version),
        l = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      function c(e) {
        switch (e) {
          case "homestead":
            return "rpc.ankr.com/eth/";
          case "ropsten":
            return "rpc.ankr.com/eth_ropsten/";
          case "rinkeby":
            return "rpc.ankr.com/eth_rinkeby/";
          case "goerli":
            return "rpc.ankr.com/eth_goerli/";
          case "matic":
            return "rpc.ankr.com/polygon/";
          case "arbitrum":
            return "rpc.ankr.com/arbitrum/";
        }
        return a.throwArgumentError("unsupported network", "name", e);
      }
      class AnkrProvider extends n.UrlJsonRpcProvider {
        isCommunityResource() {
          return this.apiKey === l;
        }
        static getApiKey(e) {
          return null == e ? l : e;
        }
        static getUrl(e, r) {
          null == r && (r = l);
          const t = {
            allowGzip: !0,
            url: "https://" + c(e.name) + r,
            throttleCallback: (e, t) => (
              r.apiKey === l && (0, o.showThrottleMessage)(),
              Promise.resolve(!0)
            ),
          };
          return (
            null != r.projectSecret &&
              ((t.user = ""), (t.password = r.projectSecret)),
            t
          );
        }
      }
      r.AnkrProvider = AnkrProvider;
    },
    1436: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CloudflareProvider = void 0));
      var o = t(92),
        n = t(17),
        s = t(44),
        i = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const a = new n.Logger(s.version);
      class CloudflareProvider extends o.UrlJsonRpcProvider {
        static getApiKey(e) {
          return (
            null != e &&
              a.throwArgumentError(
                "apiKey not supported for cloudflare",
                "apiKey",
                e,
              ),
            null
          );
        }
        static getUrl(e, r) {
          let t = null;
          switch (e.name) {
            case "homestead":
              t = "https://cloudflare-eth.com/";
              break;
            default:
              a.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return t;
        }
        perform(e, r) {
          const t = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return i(this, void 0, void 0, function* () {
            if ("getBlockNumber" === e) {
              const e = yield t.perform.call(this, "getBlock", {
                blockTag: "latest",
              });
              return e.number;
            }
            return t.perform.call(this, e, r);
          });
        }
      }
      r.CloudflareProvider = CloudflareProvider;
    },
    1437: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EtherscanProvider = void 0));
      var o = t(25),
        n = t(38),
        s = t(276),
        i = t(139),
        a = t(91),
        l = t(17),
        c = t(44),
        u = t(173),
        h = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const d = new l.Logger(c.version);
      function g(e) {
        const r = {};
        for (let t in e) {
          if (null == e[t]) continue;
          let n = e[t];
          ("type" === t && 0 === n) ||
            ((n = {
              type: !0,
              gasLimit: !0,
              gasPrice: !0,
              maxFeePerGs: !0,
              maxPriorityFeePerGas: !0,
              nonce: !0,
              value: !0,
            }[t]
              ? (0, o.hexValue)((0, o.hexlify)(n))
              : "accessList" === t
                ? "[" +
                  (0, s.accessListify)(n)
                    .map(
                      (e) =>
                        `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`,
                    )
                    .join(",") +
                  "]"
                : (0, o.hexlify)(n)),
            (r[t] = n));
        }
        return r;
      }
      function f(e) {
        if (
          0 == e.status &&
          ("No records found" === e.message ||
            "No transactions found" === e.message)
        )
          return e.result;
        if (
          1 != e.status ||
          "string" !== typeof e.message ||
          !e.message.match(/^OK/)
        ) {
          const r = new Error("invalid response");
          throw (
            (r.result = JSON.stringify(e)),
            (e.result || "").toLowerCase().indexOf("rate limit") >= 0 &&
              (r.throttleRetry = !0),
            r
          );
        }
        return e.result;
      }
      function m(e) {
        if (
          e &&
          0 == e.status &&
          "NOTOK" == e.message &&
          (e.result || "").toLowerCase().indexOf("rate limit") >= 0
        ) {
          const r = new Error("throttled response");
          throw ((r.result = JSON.stringify(e)), (r.throttleRetry = !0), r);
        }
        if ("2.0" != e.jsonrpc) {
          const r = new Error("invalid response");
          throw ((r.result = JSON.stringify(e)), r);
        }
        if (e.error) {
          const r = new Error(e.error.message || "unknown error");
          throw (
            e.error.code && (r.code = e.error.code),
            e.error.data && (r.data = e.error.data),
            r
          );
        }
        return e.result;
      }
      function p(e) {
        if ("pending" === e) throw new Error("pending not supported");
        return "latest" === e ? e : parseInt(e.substring(2), 16);
      }
      function v(e, r, t) {
        if ("call" === e && r.code === l.Logger.errors.SERVER_ERROR) {
          const e = r.error;
          if (
            e &&
            (e.message.match(/reverted/i) ||
              e.message.match(/VM execution error/i))
          ) {
            let t = e.data;
            if (
              (t && (t = "0x" + t.replace(/^.*0x/i, "")), (0, o.isHexString)(t))
            )
              return t;
            d.throwError(
              "missing revert data in call exception",
              l.Logger.errors.CALL_EXCEPTION,
              { error: r, data: "0x" },
            );
          }
        }
        let n = r.message;
        throw (
          r.code === l.Logger.errors.SERVER_ERROR &&
            (r.error && "string" === typeof r.error.message
              ? (n = r.error.message)
              : "string" === typeof r.body
                ? (n = r.body)
                : "string" === typeof r.responseText && (n = r.responseText)),
          (n = (n || "").toLowerCase()),
          n.match(/insufficient funds/) &&
            d.throwError(
              "insufficient funds for intrinsic transaction cost",
              l.Logger.errors.INSUFFICIENT_FUNDS,
              { error: r, method: e, transaction: t },
            ),
          n.match(
            /same hash was already imported|transaction nonce is too low|nonce too low/,
          ) &&
            d.throwError(
              "nonce has already been used",
              l.Logger.errors.NONCE_EXPIRED,
              { error: r, method: e, transaction: t },
            ),
          n.match(/another transaction with same nonce/) &&
            d.throwError(
              "replacement fee too low",
              l.Logger.errors.REPLACEMENT_UNDERPRICED,
              { error: r, method: e, transaction: t },
            ),
          n.match(/execution failed due to an exception|execution reverted/) &&
            d.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              l.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: r, method: e, transaction: t },
            ),
          r
        );
      }
      class EtherscanProvider extends u.BaseProvider {
        constructor(e, r) {
          (super(e),
            (0, n.defineReadOnly)(this, "baseUrl", this.getBaseUrl()),
            (0, n.defineReadOnly)(this, "apiKey", r || null));
        }
        getBaseUrl() {
          switch (this.network ? this.network.name : "invalid") {
            case "homestead":
              return "https://api.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "sepolia":
              return "https://api-sepolia.etherscan.io";
            case "matic":
              return "https://api.polygonscan.com";
            case "maticmum":
              return "https://api-testnet.polygonscan.com";
            case "arbitrum":
              return "https://api.arbiscan.io";
            case "arbitrum-goerli":
              return "https://api-goerli.arbiscan.io";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
            case "optimism-goerli":
              return "https://api-goerli-optimistic.etherscan.io";
            default:
          }
          return d.throwArgumentError(
            "unsupported network",
            "network",
            this.network.name,
          );
        }
        getUrl(e, r) {
          const t = Object.keys(r).reduce((e, t) => {
              const o = r[t];
              return (null != o && (e += `&${t}=${o}`), e);
            }, ""),
            o = this.apiKey ? "&apikey=" + this.apiKey : "";
          return `${this.baseUrl}/api?module=${e}${t}${o}`;
        }
        getPostUrl() {
          return this.baseUrl + "/api";
        }
        getPostData(e, r) {
          return ((r.module = e), (r.apikey = this.apiKey), r);
        }
        fetch(e, r, t) {
          return h(this, void 0, void 0, function* () {
            const o = t ? this.getPostUrl() : this.getUrl(e, r),
              s = t ? this.getPostData(e, r) : null,
              l = "proxy" === e ? m : f;
            this.emit("debug", {
              action: "request",
              request: o,
              provider: this,
            });
            const c = {
              url: o,
              throttleSlotInterval: 1e3,
              throttleCallback: (e, r) => (
                this.isCommunityResource() && (0, a.showThrottleMessage)(),
                Promise.resolve(!0)
              ),
            };
            let u = null;
            s &&
              ((c.headers = {
                "content-type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              }),
              (u = Object.keys(s)
                .map((e) => `${e}=${s[e]}`)
                .join("&")));
            const h = yield (0, i.fetchJson)(c, u, l || m);
            return (
              this.emit("debug", {
                action: "response",
                request: o,
                response: (0, n.deepCopy)(h),
                provider: this,
              }),
              h
            );
          });
        }
        detectNetwork() {
          return h(this, void 0, void 0, function* () {
            return this.network;
          });
        }
        perform(e, r) {
          const t = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return h(this, void 0, void 0, function* () {
            switch (e) {
              case "getBlockNumber":
                return this.fetch("proxy", { action: "eth_blockNumber" });
              case "getGasPrice":
                return this.fetch("proxy", { action: "eth_gasPrice" });
              case "getBalance":
                return this.fetch("account", {
                  action: "balance",
                  address: r.address,
                  tag: r.blockTag,
                });
              case "getTransactionCount":
                return this.fetch("proxy", {
                  action: "eth_getTransactionCount",
                  address: r.address,
                  tag: r.blockTag,
                });
              case "getCode":
                return this.fetch("proxy", {
                  action: "eth_getCode",
                  address: r.address,
                  tag: r.blockTag,
                });
              case "getStorageAt":
                return this.fetch("proxy", {
                  action: "eth_getStorageAt",
                  address: r.address,
                  position: r.position,
                  tag: r.blockTag,
                });
              case "sendTransaction":
                return this.fetch(
                  "proxy",
                  {
                    action: "eth_sendRawTransaction",
                    hex: r.signedTransaction,
                  },
                  !0,
                ).catch((e) => v("sendTransaction", e, r.signedTransaction));
              case "getBlock":
                if (r.blockTag)
                  return this.fetch("proxy", {
                    action: "eth_getBlockByNumber",
                    tag: r.blockTag,
                    boolean: r.includeTransactions ? "true" : "false",
                  });
                throw new Error("getBlock by blockHash not implemented");
              case "getTransaction":
                return this.fetch("proxy", {
                  action: "eth_getTransactionByHash",
                  txhash: r.transactionHash,
                });
              case "getTransactionReceipt":
                return this.fetch("proxy", {
                  action: "eth_getTransactionReceipt",
                  txhash: r.transactionHash,
                });
              case "call": {
                if ("latest" !== r.blockTag)
                  throw new Error(
                    "EtherscanProvider does not support blockTag for call",
                  );
                const e = g(r.transaction);
                ((e.module = "proxy"), (e.action = "eth_call"));
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (o) {
                  return v("call", o, r.transaction);
                }
              }
              case "estimateGas": {
                const e = g(r.transaction);
                ((e.module = "proxy"), (e.action = "eth_estimateGas"));
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (o) {
                  return v("estimateGas", o, r.transaction);
                }
              }
              case "getLogs": {
                const e = { action: "getLogs" };
                if (
                  (r.filter.fromBlock && (e.fromBlock = p(r.filter.fromBlock)),
                  r.filter.toBlock && (e.toBlock = p(r.filter.toBlock)),
                  r.filter.address && (e.address = r.filter.address),
                  r.filter.topics &&
                    r.filter.topics.length > 0 &&
                    (r.filter.topics.length > 1 &&
                      d.throwError(
                        "unsupported topic count",
                        l.Logger.errors.UNSUPPORTED_OPERATION,
                        { topics: r.filter.topics },
                      ),
                    1 === r.filter.topics.length))
                ) {
                  const t = r.filter.topics[0];
                  (("string" === typeof t && 66 === t.length) ||
                    d.throwError(
                      "unsupported topic format",
                      l.Logger.errors.UNSUPPORTED_OPERATION,
                      { topic0: t },
                    ),
                    (e.topic0 = t));
                }
                const t = yield this.fetch("logs", e);
                let o = {};
                for (let r = 0; r < t.length; r++) {
                  const e = t[r];
                  if (null == e.blockHash) {
                    if (null == o[e.blockNumber]) {
                      const r = yield this.getBlock(e.blockNumber);
                      r && (o[e.blockNumber] = r.hash);
                    }
                    e.blockHash = o[e.blockNumber];
                  }
                }
                return t;
              }
              case "getEtherPrice":
                return "homestead" !== this.network.name
                  ? 0
                  : parseFloat(
                      (yield this.fetch("stats", { action: "ethprice" }))
                        .ethusd,
                    );
              default:
                break;
            }
            return t.perform.call(this, e, r);
          });
        }
        getHistory(e, r, t) {
          return h(this, void 0, void 0, function* () {
            const o = {
                action: "txlist",
                address: yield this.resolveName(e),
                startblock: null == r ? 0 : r,
                endblock: null == t ? 99999999 : t,
                sort: "asc",
              },
              n = yield this.fetch("account", o);
            return n.map((e) => {
              (["contractAddress", "to"].forEach(function (r) {
                "" == e[r] && delete e[r];
              }),
                null == e.creates &&
                  null != e.contractAddress &&
                  (e.creates = e.contractAddress));
              const r = this.formatter.transactionResponse(e);
              return (e.timeStamp && (r.timestamp = parseInt(e.timeStamp)), r);
            });
          });
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
      }
      r.EtherscanProvider = EtherscanProvider;
    },
    1438: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FallbackProvider = void 0));
      var o = t(272),
        n = t(65),
        s = t(25),
        i = t(38),
        a = t(1439),
        l = t(139),
        c = t(173),
        u = t(91),
        h = t(17),
        d = t(44),
        g = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const f = new h.Logger(d.version);
      function m() {
        return new Date().getTime();
      }
      function p(e) {
        let r = null;
        for (let t = 0; t < e.length; t++) {
          const o = e[t];
          if (null == o) return null;
          r
            ? (r.name === o.name &&
                r.chainId === o.chainId &&
                (r.ensAddress === o.ensAddress ||
                  (null == r.ensAddress && null == o.ensAddress))) ||
              f.throwArgumentError("provider mismatch", "networks", e)
            : (r = o);
        }
        return r;
      }
      function v(e, r) {
        e = e.slice().sort();
        const t = Math.floor(e.length / 2);
        if (e.length % 2) return e[t];
        const o = e[t - 1],
          n = e[t];
        return null != r && Math.abs(o - n) > r ? null : (o + n) / 2;
      }
      function E(e) {
        if (null === e) return "null";
        if ("number" === typeof e || "boolean" === typeof e)
          return JSON.stringify(e);
        if ("string" === typeof e) return e;
        if (n.BigNumber.isBigNumber(e)) return e.toString();
        if (Array.isArray(e)) return JSON.stringify(e.map((e) => E(e)));
        if ("object" === typeof e) {
          const r = Object.keys(e);
          return (
            r.sort(),
            "{" +
              r
                .map((r) => {
                  let t = e[r];
                  return (
                    (t = "function" === typeof t ? "[function]" : E(t)),
                    JSON.stringify(r) + ":" + t
                  );
                })
                .join(",") +
              "}"
          );
        }
        throw new Error("unknown value type: " + typeof e);
      }
      let b = 1;
      function y(e) {
        let r = null,
          t = null,
          o = new Promise((o) => {
            ((r = function () {
              (t && (clearTimeout(t), (t = null)), o());
            }),
              (t = setTimeout(r, e)));
          });
        const n = (e) => ((o = o.then(e)), o);
        function s() {
          return o;
        }
        return { cancel: r, getPromise: s, wait: n };
      }
      const w = [
          h.Logger.errors.CALL_EXCEPTION,
          h.Logger.errors.INSUFFICIENT_FUNDS,
          h.Logger.errors.NONCE_EXPIRED,
          h.Logger.errors.REPLACEMENT_UNDERPRICED,
          h.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
        ],
        N = [
          "address",
          "args",
          "errorArgs",
          "errorSignature",
          "method",
          "transaction",
        ];
      function k(e, r) {
        const t = { weight: e.weight };
        return (
          Object.defineProperty(t, "provider", { get: () => e.provider }),
          e.start && (t.start = e.start),
          r && (t.duration = r - e.start),
          e.done &&
            (e.error ? (t.error = e.error) : (t.result = e.result || null)),
          t
        );
      }
      function _(e, r) {
        return function (t) {
          const o = {};
          t.forEach((r) => {
            const t = e(r.result);
            (o[t] || (o[t] = { count: 0, result: r.result }), o[t].count++);
          });
          const n = Object.keys(o);
          for (let e = 0; e < n.length; e++) {
            const t = o[n[e]];
            if (t.count >= r) return t.result;
          }
        };
      }
      function P(e, r, t) {
        let o = E;
        switch (r) {
          case "getBlockNumber":
            return function (r) {
              const t = r.map((e) => e.result);
              let o = v(
                r.map((e) => e.result),
                2,
              );
              if (null != o)
                return (
                  (o = Math.ceil(o)),
                  t.indexOf(o + 1) >= 0 && o++,
                  o >= e._highestBlockNumber && (e._highestBlockNumber = o),
                  e._highestBlockNumber
                );
            };
          case "getGasPrice":
            return function (e) {
              const r = e.map((e) => e.result);
              return (r.sort(), r[Math.floor(r.length / 2)]);
            };
          case "getEtherPrice":
            return function (e) {
              return v(e.map((e) => e.result));
            };
          case "getBalance":
          case "getTransactionCount":
          case "getCode":
          case "getStorageAt":
          case "call":
          case "estimateGas":
          case "getLogs":
            break;
          case "getTransaction":
          case "getTransactionReceipt":
            o = function (e) {
              return null == e
                ? null
                : ((e = (0, i.shallowCopy)(e)), (e.confirmations = -1), E(e));
            };
            break;
          case "getBlock":
            o = t.includeTransactions
              ? function (e) {
                  return null == e
                    ? null
                    : ((e = (0, i.shallowCopy)(e)),
                      (e.transactions = e.transactions.map(
                        (e) => (
                          (e = (0, i.shallowCopy)(e)),
                          (e.confirmations = -1),
                          e
                        ),
                      )),
                      E(e));
                }
              : function (e) {
                  return null == e ? null : E(e);
                };
            break;
          default:
            throw new Error("unknown method: " + r);
        }
        return _(o, e.quorum);
      }
      function R(e, r) {
        return g(this, void 0, void 0, function* () {
          const t = e.provider;
          return (null != t.blockNumber && t.blockNumber >= r) || -1 === r
            ? t
            : (0, l.poll)(
                () =>
                  new Promise((o, n) => {
                    setTimeout(function () {
                      return t.blockNumber >= r
                        ? o(t)
                        : e.cancelled
                          ? o(null)
                          : o(void 0);
                    }, 0);
                  }),
                { oncePoll: t },
              );
        });
      }
      function T(e, r, t, o) {
        return g(this, void 0, void 0, function* () {
          let n = e.provider;
          switch (t) {
            case "getBlockNumber":
            case "getGasPrice":
              return n[t]();
            case "getEtherPrice":
              if (n.getEtherPrice) return n.getEtherPrice();
              break;
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
              return (
                o.blockTag &&
                  (0, s.isHexString)(o.blockTag) &&
                  (n = yield R(e, r)),
                n[t](o.address, o.blockTag || "latest")
              );
            case "getStorageAt":
              return (
                o.blockTag &&
                  (0, s.isHexString)(o.blockTag) &&
                  (n = yield R(e, r)),
                n.getStorageAt(o.address, o.position, o.blockTag || "latest")
              );
            case "getBlock":
              return (
                o.blockTag &&
                  (0, s.isHexString)(o.blockTag) &&
                  (n = yield R(e, r)),
                n[
                  o.includeTransactions
                    ? "getBlockWithTransactions"
                    : "getBlock"
                ](o.blockTag || o.blockHash)
              );
            case "call":
            case "estimateGas":
              return (
                o.blockTag &&
                  (0, s.isHexString)(o.blockTag) &&
                  (n = yield R(e, r)),
                "call" === t && o.blockTag
                  ? n[t](o.transaction, o.blockTag)
                  : n[t](o.transaction)
              );
            case "getTransaction":
            case "getTransactionReceipt":
              return n[t](o.transactionHash);
            case "getLogs": {
              let t = o.filter;
              return (
                ((t.fromBlock && (0, s.isHexString)(t.fromBlock)) ||
                  (t.toBlock && (0, s.isHexString)(t.toBlock))) &&
                  (n = yield R(e, r)),
                n.getLogs(t)
              );
            }
          }
          return f.throwError(
            "unknown method error",
            h.Logger.errors.UNKNOWN_ERROR,
            { method: t, params: o },
          );
        });
      }
      class FallbackProvider extends c.BaseProvider {
        constructor(e, r) {
          0 === e.length &&
            f.throwArgumentError("missing providers", "providers", e);
          const t = e.map((e, r) => {
              if (o.Provider.isProvider(e)) {
                const r = (0, u.isCommunityResource)(e) ? 2e3 : 750,
                  t = 1;
                return Object.freeze({
                  provider: e,
                  weight: 1,
                  stallTimeout: r,
                  priority: t,
                });
              }
              const t = (0, i.shallowCopy)(e);
              (null == t.priority && (t.priority = 1),
                null == t.stallTimeout &&
                  (t.stallTimeout = (0, u.isCommunityResource)(e) ? 2e3 : 750),
                null == t.weight && (t.weight = 1));
              const n = t.weight;
              return (
                (n % 1 || n > 512 || n < 1) &&
                  f.throwArgumentError(
                    "invalid weight; must be integer in [1, 512]",
                    `providers[${r}].weight`,
                    n,
                  ),
                Object.freeze(t)
              );
            }),
            n = t.reduce((e, r) => e + r.weight, 0);
          null == r
            ? (r = n / 2)
            : r > n &&
              f.throwArgumentError(
                "quorum will always fail; larger than total weight",
                "quorum",
                r,
              );
          let s = p(t.map((e) => e.provider.network));
          (null == s &&
            (s = new Promise((e, r) => {
              setTimeout(() => {
                this.detectNetwork().then(e, r);
              }, 0);
            })),
            super(s),
            (0, i.defineReadOnly)(this, "providerConfigs", Object.freeze(t)),
            (0, i.defineReadOnly)(this, "quorum", r),
            (this._highestBlockNumber = -1));
        }
        detectNetwork() {
          return g(this, void 0, void 0, function* () {
            const e = yield Promise.all(
              this.providerConfigs.map((e) => e.provider.getNetwork()),
            );
            return p(e);
          });
        }
        perform(e, r) {
          return g(this, void 0, void 0, function* () {
            if ("sendTransaction" === e) {
              const e = yield Promise.all(
                this.providerConfigs.map((e) =>
                  e.provider.sendTransaction(r.signedTransaction).then(
                    (e) => e.hash,
                    (e) => e,
                  ),
                ),
              );
              for (let r = 0; r < e.length; r++) {
                const t = e[r];
                if ("string" === typeof t) return t;
              }
              throw e[0];
            }
            -1 === this._highestBlockNumber &&
              "getBlockNumber" !== e &&
              (yield this.getBlockNumber());
            const t = P(this, e, r),
              o = (0, a.shuffled)(this.providerConfigs.map(i.shallowCopy));
            o.sort((e, r) => e.priority - r.priority);
            const n = this._highestBlockNumber;
            let s = 0,
              l = !0;
            while (1) {
              const a = m();
              let c = o
                .filter((e) => e.runner && a - e.start < e.stallTimeout)
                .reduce((e, r) => e + r.weight, 0);
              while (c < this.quorum && s < o.length) {
                const t = o[s++],
                  a = b++;
                ((t.start = m()),
                  (t.staller = y(t.stallTimeout)),
                  t.staller.wait(() => {
                    t.staller = null;
                  }),
                  (t.runner = T(t, n, e, r).then(
                    (o) => {
                      ((t.done = !0),
                        (t.result = o),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: a,
                            backend: k(t, m()),
                            request: { method: e, params: (0, i.deepCopy)(r) },
                            provider: this,
                          }));
                    },
                    (o) => {
                      ((t.done = !0),
                        (t.error = o),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: a,
                            backend: k(t, m()),
                            request: { method: e, params: (0, i.deepCopy)(r) },
                            provider: this,
                          }));
                    },
                  )),
                  this.listenerCount("debug") &&
                    this.emit("debug", {
                      action: "request",
                      rid: a,
                      backend: k(t, null),
                      request: { method: e, params: (0, i.deepCopy)(r) },
                      provider: this,
                    }),
                  (c += t.weight));
              }
              const u = [];
              (o.forEach((e) => {
                !e.done &&
                  e.runner &&
                  (u.push(e.runner),
                  e.staller && u.push(e.staller.getPromise()));
              }),
                u.length && (yield Promise.race(u)));
              const h = o.filter((e) => e.done && null == e.error);
              if (h.length >= this.quorum) {
                const e = t(h);
                if (void 0 !== e)
                  return (
                    o.forEach((e) => {
                      (e.staller && e.staller.cancel(), (e.cancelled = !0));
                    }),
                    e
                  );
                (l || (yield y(100).getPromise()), (l = !1));
              }
              const d = o.reduce((e, r) => {
                if (!r.done || null == r.error) return e;
                const t = r.error.code;
                return (
                  w.indexOf(t) >= 0 &&
                    (e[t] || (e[t] = { error: r.error, weight: 0 }),
                    (e[t].weight += r.weight)),
                  e
                );
              }, {});
              if (
                (Object.keys(d).forEach((e) => {
                  const r = d[e];
                  if (r.weight < this.quorum) return;
                  o.forEach((e) => {
                    (e.staller && e.staller.cancel(), (e.cancelled = !0));
                  });
                  const t = r.error,
                    n = {};
                  (N.forEach((e) => {
                    null != t[e] && (n[e] = t[e]);
                  }),
                    f.throwError(t.reason || t.message, e, n));
                }),
                0 === o.filter((e) => !e.done).length)
              )
                break;
            }
            return (
              o.forEach((e) => {
                (e.staller && e.staller.cancel(), (e.cancelled = !0));
              }),
              f.throwError(
                "failed to meet quorum",
                h.Logger.errors.SERVER_ERROR,
                {
                  method: e,
                  params: r,
                  results: o.map((e) => k(e)),
                  provider: this,
                },
              )
            );
          });
        }
      }
      r.FallbackProvider = FallbackProvider;
    },
    1443: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.IpcProvider = void 0));
      r.IpcProvider = null;
    },
    1444: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.InfuraWebSocketProvider = r.InfuraProvider = void 0));
      var o = t(38),
        n = t(277),
        s = t(91),
        i = t(17),
        a = t(44),
        l = t(92);
      const c = new i.Logger(a.version),
        u = "84842078b09946638c03157f83405213";
      class InfuraWebSocketProvider extends n.WebSocketProvider {
        constructor(e, r) {
          const t = new InfuraProvider(e, r),
            n = t.connection;
          n.password &&
            c.throwError(
              "INFURA WebSocket project secrets unsupported",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "InfuraProvider.getWebSocketProvider()" },
            );
          const s = n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
          (super(s, e),
            (0, o.defineReadOnly)(this, "apiKey", t.projectId),
            (0, o.defineReadOnly)(this, "projectId", t.projectId),
            (0, o.defineReadOnly)(this, "projectSecret", t.projectSecret));
        }
        isCommunityResource() {
          return this.projectId === u;
        }
      }
      r.InfuraWebSocketProvider = InfuraWebSocketProvider;
      class InfuraProvider extends l.UrlJsonRpcProvider {
        static getWebSocketProvider(e, r) {
          return new InfuraWebSocketProvider(e, r);
        }
        static getApiKey(e) {
          const r = { apiKey: u, projectId: u, projectSecret: null };
          return (
            null == e ||
              ("string" === typeof e
                ? (r.projectId = e)
                : null != e.projectSecret
                  ? (c.assertArgument(
                      "string" === typeof e.projectId,
                      "projectSecret requires a projectId",
                      "projectId",
                      e.projectId,
                    ),
                    c.assertArgument(
                      "string" === typeof e.projectSecret,
                      "invalid projectSecret",
                      "projectSecret",
                      "[REDACTED]",
                    ),
                    (r.projectId = e.projectId),
                    (r.projectSecret = e.projectSecret))
                  : e.projectId && (r.projectId = e.projectId),
              (r.apiKey = r.projectId)),
            r
          );
        }
        static getUrl(e, r) {
          let t = null;
          switch (e ? e.name : "unknown") {
            case "homestead":
              t = "mainnet.infura.io";
              break;
            case "goerli":
              t = "goerli.infura.io";
              break;
            case "sepolia":
              t = "sepolia.infura.io";
              break;
            case "matic":
              t = "polygon-mainnet.infura.io";
              break;
            case "maticmum":
              t = "polygon-mumbai.infura.io";
              break;
            case "optimism":
              t = "optimism-mainnet.infura.io";
              break;
            case "optimism-goerli":
              t = "optimism-goerli.infura.io";
              break;
            case "arbitrum":
              t = "arbitrum-mainnet.infura.io";
              break;
            case "arbitrum-goerli":
              t = "arbitrum-goerli.infura.io";
              break;
            default:
              c.throwError(
                "unsupported network",
                i.Logger.errors.INVALID_ARGUMENT,
                { argument: "network", value: e },
              );
          }
          const o = {
            allowGzip: !0,
            url: "https://" + t + "/v3/" + r.projectId,
            throttleCallback: (e, t) => (
              r.projectId === u && (0, s.showThrottleMessage)(),
              Promise.resolve(!0)
            ),
          };
          return (
            null != r.projectSecret &&
              ((o.user = ""), (o.password = r.projectSecret)),
            o
          );
        }
        isCommunityResource() {
          return this.projectId === u;
        }
      }
      r.InfuraProvider = InfuraProvider;
    },
    1445: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.JsonRpcBatchProvider = void 0));
      var o = t(38),
        n = t(139),
        s = t(140);
      class JsonRpcBatchProvider extends s.JsonRpcProvider {
        send(e, r) {
          const t = {
            method: e,
            params: r,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          null == this._pendingBatch && (this._pendingBatch = []);
          const s = { request: t, resolve: null, reject: null },
            i = new Promise((e, r) => {
              ((s.resolve = e), (s.reject = r));
            });
          return (
            this._pendingBatch.push(s),
            this._pendingBatchAggregator ||
              (this._pendingBatchAggregator = setTimeout(() => {
                const e = this._pendingBatch;
                ((this._pendingBatch = null),
                  (this._pendingBatchAggregator = null));
                const r = e.map((e) => e.request);
                return (
                  this.emit("debug", {
                    action: "requestBatch",
                    request: (0, o.deepCopy)(r),
                    provider: this,
                  }),
                  (0, n.fetchJson)(this.connection, JSON.stringify(r)).then(
                    (t) => {
                      (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: t,
                        provider: this,
                      }),
                        e.forEach((e, r) => {
                          const o = t[r];
                          if (o.error) {
                            const r = new Error(o.error.message);
                            ((r.code = o.error.code),
                              (r.data = o.error.data),
                              e.reject(r));
                          } else e.resolve(o.result);
                        }));
                    },
                    (t) => {
                      (this.emit("debug", {
                        action: "response",
                        error: t,
                        request: r,
                        provider: this,
                      }),
                        e.forEach((e) => {
                          e.reject(t);
                        }));
                    },
                  )
                );
              }, 10)),
            i
          );
        }
      }
      r.JsonRpcBatchProvider = JsonRpcBatchProvider;
    },
    1446: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.NodesmithProvider = void 0));
      var o = t(92),
        n = t(17),
        s = t(44);
      const i = new n.Logger(s.version),
        a = "ETHERS_JS_SHARED";
      class NodesmithProvider extends o.UrlJsonRpcProvider {
        static getApiKey(e) {
          return (
            e &&
              "string" !== typeof e &&
              i.throwArgumentError("invalid apiKey", "apiKey", e),
            e || a
          );
        }
        static getUrl(e, r) {
          i.warn(
            "NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.",
          );
          let t = null;
          switch (e.name) {
            case "homestead":
              t = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
              break;
            case "ropsten":
              t = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
              break;
            case "rinkeby":
              t = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
              break;
            case "goerli":
              t = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
              break;
            case "kovan":
              t = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
              break;
            default:
              i.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return t + "?apiKey=" + r;
        }
      }
      r.NodesmithProvider = NodesmithProvider;
    },
    1447: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.PocketProvider = void 0));
      var o = t(17),
        n = t(44),
        s = t(92);
      const i = new o.Logger(n.version),
        a = "62e1ad51b37b8e00394bda3b";
      class PocketProvider extends s.UrlJsonRpcProvider {
        static getApiKey(e) {
          const r = {
            applicationId: null,
            loadBalancer: !0,
            applicationSecretKey: null,
          };
          return (
            null == e
              ? (r.applicationId = a)
              : "string" === typeof e
                ? (r.applicationId = e)
                : null != e.applicationSecretKey
                  ? ((r.applicationId = e.applicationId),
                    (r.applicationSecretKey = e.applicationSecretKey))
                  : e.applicationId
                    ? (r.applicationId = e.applicationId)
                    : i.throwArgumentError(
                        "unsupported PocketProvider apiKey",
                        "apiKey",
                        e,
                      ),
            r
          );
        }
        static getUrl(e, r) {
          let t = null;
          switch (e ? e.name : "unknown") {
            case "goerli":
              t = "eth-goerli.gateway.pokt.network";
              break;
            case "homestead":
              t = "eth-mainnet.gateway.pokt.network";
              break;
            case "kovan":
              t = "poa-kovan.gateway.pokt.network";
              break;
            case "matic":
              t = "poly-mainnet.gateway.pokt.network";
              break;
            case "maticmum":
              t = "polygon-mumbai-rpc.gateway.pokt.network";
              break;
            case "rinkeby":
              t = "eth-rinkeby.gateway.pokt.network";
              break;
            case "ropsten":
              t = "eth-ropsten.gateway.pokt.network";
              break;
            default:
              i.throwError(
                "unsupported network",
                o.Logger.errors.INVALID_ARGUMENT,
                { argument: "network", value: e },
              );
          }
          const n = `https://${t}/v1/lb/${r.applicationId}`,
            s = { headers: {}, url: n };
          return (
            null != r.applicationSecretKey &&
              ((s.user = ""), (s.password = r.applicationSecretKey)),
            s
          );
        }
        isCommunityResource() {
          return this.applicationId === a;
        }
      }
      r.PocketProvider = PocketProvider;
    },
    1448: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Web3Provider = void 0));
      var o = t(38),
        n = t(17),
        s = t(44),
        i = t(140);
      const a = new n.Logger(s.version);
      let l = 1;
      function c(e, r) {
        const t = "Web3LegacyFetcher";
        return function (e, n) {
          const s = { method: e, params: n, id: l++, jsonrpc: "2.0" };
          return new Promise((e, n) => {
            (this.emit("debug", {
              action: "request",
              fetcher: t,
              request: (0, o.deepCopy)(s),
              provider: this,
            }),
              r(s, (r, o) => {
                if (r)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: t,
                      error: r,
                      request: s,
                      provider: this,
                    }),
                    n(r)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: t,
                    request: s,
                    response: o,
                    provider: this,
                  }),
                  o.error)
                ) {
                  const e = new Error(o.error.message);
                  return (
                    (e.code = o.error.code),
                    (e.data = o.error.data),
                    n(e)
                  );
                }
                e(o.result);
              }));
          });
        };
      }
      function u(e) {
        return function (r, t) {
          null == t && (t = []);
          const n = { method: r, params: t };
          return (
            this.emit("debug", {
              action: "request",
              fetcher: "Eip1193Fetcher",
              request: (0, o.deepCopy)(n),
              provider: this,
            }),
            e.request(n).then(
              (e) => (
                this.emit("debug", {
                  action: "response",
                  fetcher: "Eip1193Fetcher",
                  request: n,
                  response: e,
                  provider: this,
                }),
                e
              ),
              (e) => {
                throw (
                  this.emit("debug", {
                    action: "response",
                    fetcher: "Eip1193Fetcher",
                    request: n,
                    error: e,
                    provider: this,
                  }),
                  e
                );
              },
            )
          );
        };
      }
      class Web3Provider extends i.JsonRpcProvider {
        constructor(e, r) {
          null == e && a.throwArgumentError("missing provider", "provider", e);
          let t = null,
            n = null,
            s = null;
          ("function" === typeof e
            ? ((t = "unknown:"), (n = e))
            : ((t = e.host || e.path || ""),
              !t && e.isMetaMask && (t = "metamask"),
              (s = e),
              e.request
                ? ("" === t && (t = "eip-1193:"), (n = u(e)))
                : e.sendAsync
                  ? (n = c(e, e.sendAsync.bind(e)))
                  : e.send
                    ? (n = c(e, e.send.bind(e)))
                    : a.throwArgumentError(
                        "unsupported provider",
                        "provider",
                        e,
                      ),
              t || (t = "unknown:")),
            super(t, r),
            (0, o.defineReadOnly)(this, "jsonRpcFetchFunc", n),
            (0, o.defineReadOnly)(this, "provider", s));
        }
        send(e, r) {
          return this.jsonRpcFetchFunc(e, r);
        }
      }
      r.Web3Provider = Web3Provider;
    },
    1648: function (e, r, t) {
      "use strict";
      var o = t(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.keccak256 = i));
      var n = o(t(53)),
        s = t(1649);
      function i(e) {
        return "0x" + n.default.keccak_256((0, s.arrayify)(e));
      }
    },
    1649: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = h),
        (r.concat = d),
        (r.hexConcat = y),
        (r.hexDataLength = E),
        (r.hexDataSlice = b),
        (r.hexStripZeros = N),
        (r.hexValue = w),
        (r.hexZeroPad = k),
        (r.hexlify = v),
        (r.isBytes = u),
        (r.isBytesLike = l),
        (r.isHexString = m),
        (r.joinSignature = P),
        (r.splitSignature = _),
        (r.stripZeros = g),
        (r.zeroPad = f));
      var o = t(1650),
        n = t(1652);
      const s = new o.Logger(n.version);
      function i(e) {
        return !!e.toHexString;
      }
      function a(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return a(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function l(e) {
        return (m(e) && !(e.length % 2)) || u(e);
      }
      function c(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function u(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!c(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!c(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function h(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          s.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          while (e) (r.unshift(255 & e), (e = parseInt(String(e / 256))));
          return (0 === r.length && r.push(0), a(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e) && (e = e.toHexString()),
          m(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
                ? (t += "0")
                : s.throwArgumentError("hex data is odd-length", "value", e));
          const o = [];
          for (let e = 0; e < t.length; e += 2)
            o.push(parseInt(t.substring(e, e + 2), 16));
          return a(new Uint8Array(o));
        }
        return u(e)
          ? a(new Uint8Array(e))
          : s.throwArgumentError("invalid arrayify value", "value", e);
      }
      function d(e) {
        const r = e.map((e) => h(e)),
          t = r.reduce((e, r) => e + r.length, 0),
          o = new Uint8Array(t);
        return (r.reduce((e, r) => (o.set(r, e), e + r.length), 0), a(o));
      }
      function g(e) {
        let r = h(e);
        if (0 === r.length) return r;
        let t = 0;
        while (t < r.length && 0 === r[t]) t++;
        return (t && (r = r.slice(t)), r);
      }
      function f(e, r) {
        ((e = h(e)),
          e.length > r &&
            s.throwArgumentError("value out of range", "value", arguments[0]));
        const t = new Uint8Array(r);
        return (t.set(e, r - e.length), a(t));
      }
      function m(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const p = "0123456789abcdef";
      function v(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          s.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          while (e) ((r = p[15 & e] + r), (e = Math.floor(e / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return ((e = e.toString(16)), e.length % 2 ? "0x0" + e : "0x" + e);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e))
        )
          return e.toHexString();
        if (m(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                  ? (e += "0")
                  : s.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (u(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let o = e[t];
            r += p[(240 & o) >> 4] + p[15 & o];
          }
          return r;
        }
        return s.throwArgumentError("invalid hexlify value", "value", e);
      }
      function E(e) {
        if ("string" !== typeof e) e = v(e);
        else if (!m(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function b(e, r, t) {
        return (
          "string" !== typeof e
            ? (e = v(e))
            : (!m(e) || e.length % 2) &&
              s.throwArgumentError("invalid hexData", "value", e),
          (r = 2 + 2 * r),
          null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
        );
      }
      function y(e) {
        let r = "0x";
        return (
          e.forEach((e) => {
            r += v(e).substring(2);
          }),
          r
        );
      }
      function w(e) {
        const r = N(v(e, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function N(e) {
        ("string" !== typeof e && (e = v(e)),
          m(e) || s.throwArgumentError("invalid hex string", "value", e),
          (e = e.substring(2)));
        let r = 0;
        while (r < e.length && "0" === e[r]) r++;
        return "0x" + e.substring(r);
      }
      function k(e, r) {
        ("string" !== typeof e
          ? (e = v(e))
          : m(e) || s.throwArgumentError("invalid hex string", "value", e),
          e.length > 2 * r + 2 &&
            s.throwArgumentError("value out of range", "value", arguments[1]));
        while (e.length < 2 * r + 2) e = "0x0" + e.substring(2);
        return e;
      }
      function _(e) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (l(e)) {
          let t = h(e);
          (64 === t.length
            ? ((r.v = 27 + (t[32] >> 7)),
              (t[32] &= 127),
              (r.r = v(t.slice(0, 32))),
              (r.s = v(t.slice(32, 64))))
            : 65 === t.length
              ? ((r.r = v(t.slice(0, 32))),
                (r.s = v(t.slice(32, 64))),
                (r.v = t[64]))
              : s.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  e,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : s.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (t[32] |= 128),
            (r._vs = v(t.slice(32, 64))));
        } else {
          if (
            ((r.r = e.r),
            (r.s = e.s),
            (r.v = e.v),
            (r.recoveryParam = e.recoveryParam),
            (r._vs = e._vs),
            null != r._vs)
          ) {
            const t = f(h(r._vs), 32);
            r._vs = v(t);
            const o = t[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = o)
              : r.recoveryParam !== o &&
                s.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e,
                ),
              (t[0] &= 127));
            const n = v(t);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                s.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? s.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const t = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== t &&
              s.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e,
              );
          }
          (null != r.r && m(r.r)
            ? (r.r = k(r.r, 32))
            : s.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e,
              ),
            null != r.s && m(r.s)
              ? (r.s = k(r.s, 32))
              : s.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e,
                ));
          const t = h(r.s);
          (t[0] >= 128 &&
            s.throwArgumentError("signature s out of range", "signature", e),
            r.recoveryParam && (t[0] |= 128));
          const o = v(t);
          (r._vs &&
            (m(r._vs) ||
              s.throwArgumentError("signature invalid _vs", "signature", e),
            (r._vs = k(r._vs, 32))),
            null == r._vs
              ? (r._vs = o)
              : r._vs !== o &&
                s.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function P(e) {
        return (
          (e = _(e)),
          v(d([e.r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    1650: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var o = t(1651);
      let n = !1,
        s = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = i["default"],
        l = null;
      function c() {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      }
      const u = c();
      var h, d;
      ((function (e) {
        ((e["DEBUG"] = "DEBUG"),
          (e["INFO"] = "INFO"),
          (e["WARNING"] = "WARNING"),
          (e["ERROR"] = "ERROR"),
          (e["OFF"] = "OFF"));
      })(h || (r.LogLevel = h = {})),
        (function (e) {
          ((e["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (e["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (e["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (e["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (e["SERVER_ERROR"] = "SERVER_ERROR"),
            (e["TIMEOUT"] = "TIMEOUT"),
            (e["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (e["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (e["MISSING_NEW"] = "MISSING_NEW"),
            (e["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (e["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (e["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (e["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (e["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (e["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (e["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (e["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (e["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (e["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(d || (r.ErrorCode = d = {})));
      const g = "0123456789abcdef";
      class Logger {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          (null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            a > i[t] || console.log.apply(console, r));
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (s) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), t || (t = {}));
          const o = [];
          (Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  ((t += g[r[e] >> 4]), (t += g[15 & r[e]]));
                o.push(e + "=Uint8Array(0x" + t + ")");
              } else o.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              o.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            o.push("code=" + r),
            o.push("version=" + this.version));
          const n = e;
          let i = "";
          switch (r) {
            case d.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  i += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  i += "-unbound-result";
                  break;
              }
              break;
            }
            case d.CALL_EXCEPTION:
            case d.INSUFFICIENT_FUNDS:
            case d.MISSING_NEW:
            case d.NONCE_EXPIRED:
            case d.REPLACEMENT_UNDERPRICED:
            case d.TRANSACTION_REPLACED:
            case d.UNPREDICTABLE_GAS_LIMIT:
              i = r;
              break;
          }
          (i && (e += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            o.length && (e += " (" + o.join(", ") + ")"));
          const a = new Error(e);
          return (
            (a.reason = n),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, o) {
          e || this.throwError(r, t, o);
        }
        assertArgument(e, r, t, o) {
          e || this.throwArgumentError(r, t, o);
        }
        checkNormalize(e) {
          (null == e && (e = "platform missing String.prototype.normalize"),
            u &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: u },
              ));
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          ((t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                Logger.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r },
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r },
              ));
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" },
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (l || (l = new Logger(o.version)), l);
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((s = !!e), (n = !!r));
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (a = r)
            : Logger.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new Logger(e);
        }
      }
      ((r.Logger = Logger), (Logger.errors = d), (Logger.levels = h));
    },
    1651: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1652: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1653: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.7.0";
    },
    1687: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Description = void 0),
        (r.checkProperties = u),
        (r.deepCopy = m),
        (r.defineReadOnly = a),
        (r.getStatic = l),
        (r.resolveProperties = c),
        (r.shallowCopy = h));
      var o = t(1688),
        n = t(1690),
        s = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const i = new o.Logger(n.version);
      function a(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      function l(e, r) {
        for (let t = 0; t < 32; t++) {
          if (e[r]) return e[r];
          if (!e.prototype || "object" !== typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function c(e) {
        return s(this, void 0, void 0, function* () {
          const r = Object.keys(e).map((r) => {
              const t = e[r];
              return Promise.resolve(t).then((e) => ({ key: r, value: e }));
            }),
            t = yield Promise.all(r);
          return t.reduce((e, r) => ((e[r.key] = r.value), e), {});
        });
      }
      function u(e, r) {
        ((e && "object" === typeof e) ||
          i.throwArgumentError("invalid object", "object", e),
          Object.keys(e).forEach((t) => {
            r[t] ||
              i.throwArgumentError(
                "invalid object key - " + t,
                "transaction:" + t,
                e,
              );
          }));
      }
      function h(e) {
        const r = {};
        for (const t in e) r[t] = e[t];
        return r;
      }
      const d = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function g(e) {
        if (void 0 === e || null === e || d[typeof e]) return !0;
        if (Array.isArray(e) || "object" === typeof e) {
          if (!Object.isFrozen(e)) return !1;
          const t = Object.keys(e);
          for (let o = 0; o < t.length; o++) {
            let n = null;
            try {
              n = e[t[o]];
            } catch (r) {
              continue;
            }
            if (!g(n)) return !1;
          }
          return !0;
        }
        return i.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function f(e) {
        if (g(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => m(e)));
        if ("object" === typeof e) {
          const r = {};
          for (const t in e) {
            const o = e[t];
            void 0 !== o && a(r, t, m(o));
          }
          return r;
        }
        return i.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function m(e) {
        return f(e);
      }
      class Description {
        constructor(e) {
          for (const r in e) this[r] = m(e[r]);
        }
      }
      r.Description = Description;
    },
    1688: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var o = t(1689);
      let n = !1,
        s = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = i["default"],
        l = null;
      function c() {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      }
      const u = c();
      var h, d;
      ((function (e) {
        ((e["DEBUG"] = "DEBUG"),
          (e["INFO"] = "INFO"),
          (e["WARNING"] = "WARNING"),
          (e["ERROR"] = "ERROR"),
          (e["OFF"] = "OFF"));
      })(h || (r.LogLevel = h = {})),
        (function (e) {
          ((e["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (e["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (e["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (e["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (e["SERVER_ERROR"] = "SERVER_ERROR"),
            (e["TIMEOUT"] = "TIMEOUT"),
            (e["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (e["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (e["MISSING_NEW"] = "MISSING_NEW"),
            (e["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (e["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (e["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (e["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (e["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (e["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (e["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (e["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (e["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (e["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(d || (r.ErrorCode = d = {})));
      const g = "0123456789abcdef";
      class Logger {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          (null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            a > i[t] || console.log.apply(console, r));
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (s) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), t || (t = {}));
          const o = [];
          (Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  ((t += g[r[e] >> 4]), (t += g[15 & r[e]]));
                o.push(e + "=Uint8Array(0x" + t + ")");
              } else o.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              o.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            o.push("code=" + r),
            o.push("version=" + this.version));
          const n = e;
          let i = "";
          switch (r) {
            case d.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  i += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  i += "-unbound-result";
                  break;
              }
              break;
            }
            case d.CALL_EXCEPTION:
            case d.INSUFFICIENT_FUNDS:
            case d.MISSING_NEW:
            case d.NONCE_EXPIRED:
            case d.REPLACEMENT_UNDERPRICED:
            case d.TRANSACTION_REPLACED:
            case d.UNPREDICTABLE_GAS_LIMIT:
              i = r;
              break;
          }
          (i && (e += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            o.length && (e += " (" + o.join(", ") + ")"));
          const a = new Error(e);
          return (
            (a.reason = n),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, o) {
          e || this.throwError(r, t, o);
        }
        assertArgument(e, r, t, o) {
          e || this.throwArgumentError(r, t, o);
        }
        checkNormalize(e) {
          (null == e && (e = "platform missing String.prototype.normalize"),
            u &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: u },
              ));
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          ((t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                Logger.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r },
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r },
              ));
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" },
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (l || (l = new Logger(o.version)), l);
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((s = !!e), (n = !!r));
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (a = r)
            : Logger.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new Logger(e);
        }
      }
      ((r.Logger = Logger), (Logger.errors = d), (Logger.levels = h));
    },
    1689: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1690: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "properties/5.7.0";
    },
    173: function (e, r, t) {
      "use strict";
      var o = t(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Resolver = r.Event = r.BaseProvider = void 0));
      var n = t(272),
        s = t(273),
        i = t(1407),
        a = t(65),
        l = t(25),
        c = t(174),
        u = t(516),
        h = t(515),
        d = t(38),
        g = t(1422),
        f = t(90),
        m = t(139),
        p = o(t(803)),
        v = t(17),
        E = t(44),
        b = t(91),
        y = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const w = new v.Logger(E.version),
        N = 10;
      function k(e) {
        return null == e
          ? "null"
          : (32 !== (0, l.hexDataLength)(e) &&
              w.throwArgumentError("invalid topic", "topic", e),
            e.toLowerCase());
      }
      function _(e) {
        e = e.slice();
        while (e.length > 0 && null == e[e.length - 1]) e.pop();
        return e
          .map((e) => {
            if (Array.isArray(e)) {
              const r = {};
              e.forEach((e) => {
                r[k(e)] = !0;
              });
              const t = Object.keys(r);
              return (t.sort(), t.join("|"));
            }
            return k(e);
          })
          .join("&");
      }
      function P(e) {
        return "" === e
          ? []
          : e.split(/&/g).map((e) => {
              if ("" === e) return [];
              const r = e.split("|").map((e) => ("null" === e ? null : e));
              return 1 === r.length ? r[0] : r;
            });
      }
      function R(e) {
        if ("string" === typeof e) {
          if (((e = e.toLowerCase()), 32 === (0, l.hexDataLength)(e)))
            return "tx:" + e;
          if (-1 === e.indexOf(":")) return e;
        } else {
          if (Array.isArray(e)) return "filter:*:" + _(e);
          if (n.ForkEvent.isForkEvent(e))
            throw (w.warn("not implemented"), new Error("not implemented"));
          if (e && "object" === typeof e)
            return "filter:" + (e.address || "*") + ":" + _(e.topics || []);
        }
        throw new Error("invalid event - " + e);
      }
      function T() {
        return new Date().getTime();
      }
      function O(e) {
        return new Promise((r) => {
          setTimeout(r, e);
        });
      }
      const I = ["block", "network", "pending", "poll"];
      class Event {
        constructor(e, r, t) {
          ((0, d.defineReadOnly)(this, "tag", e),
            (0, d.defineReadOnly)(this, "listener", r),
            (0, d.defineReadOnly)(this, "once", t),
            (this._lastBlockNumber = -2),
            (this._inflight = !1));
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          const e = this.tag.split(":");
          return "tx" !== e[0] ? null : e[1];
        }
        get filter() {
          const e = this.tag.split(":");
          if ("filter" !== e[0]) return null;
          const r = e[1],
            t = P(e[2]),
            o = {};
          return (
            t.length > 0 && (o.topics = t),
            r && "*" !== r && (o.address = r),
            o
          );
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || I.indexOf(this.tag) >= 0;
        }
      }
      r.Event = Event;
      const L = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function A(e) {
        return (0, l.hexZeroPad)(a.BigNumber.from(e).toHexString(), 32);
      }
      function S(e) {
        return i.Base58.encode(
          (0, l.concat)([
            e,
            (0, l.hexDataSlice)((0, g.sha256)((0, g.sha256)(e)), 0, 4),
          ]),
        );
      }
      const C = new RegExp("^(ipfs)://(.*)$", "i"),
        x = [
          new RegExp("^(https)://(.*)$", "i"),
          new RegExp("^(data):(.*)$", "i"),
          C,
          new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function U(e, r) {
        try {
          return (0, f.toUtf8String)(B(e, r));
        } catch (t) {}
        return null;
      }
      function B(e, r) {
        if ("0x" === e) return null;
        const t = a.BigNumber.from(
            (0, l.hexDataSlice)(e, r, r + 32),
          ).toNumber(),
          o = a.BigNumber.from((0, l.hexDataSlice)(e, t, t + 32)).toNumber();
        return (0, l.hexDataSlice)(e, t + 32, t + 32 + o);
      }
      function F(e) {
        return (
          e.match(/^ipfs:\/\/ipfs\//i)
            ? (e = e.substring(12))
            : e.match(/^ipfs:\/\//i)
              ? (e = e.substring(7))
              : w.throwArgumentError("unsupported IPFS format", "link", e),
          "https://gateway.ipfs.io/ipfs/" + e
        );
      }
      function D(e) {
        const r = (0, l.arrayify)(e);
        if (r.length > 32) throw new Error("internal; should not happen");
        const t = new Uint8Array(32);
        return (t.set(r, 32 - r.length), t);
      }
      function j(e) {
        if (e.length % 32 === 0) return e;
        const r = new Uint8Array(32 * Math.ceil(e.length / 32));
        return (r.set(e), r);
      }
      function M(e) {
        const r = [];
        let t = 0;
        for (let o = 0; o < e.length; o++) (r.push(null), (t += 32));
        for (let o = 0; o < e.length; o++) {
          const n = (0, l.arrayify)(e[o]);
          ((r[o] = D(t)),
            r.push(D(n.length)),
            r.push(j(n)),
            (t += 32 + 32 * Math.ceil(n.length / 32)));
        }
        return (0, l.hexConcat)(r);
      }
      class Resolver {
        constructor(e, r, t, o) {
          ((0, d.defineReadOnly)(this, "provider", e),
            (0, d.defineReadOnly)(this, "name", t),
            (0, d.defineReadOnly)(this, "address", e.formatter.address(r)),
            (0, d.defineReadOnly)(this, "_resolvedAddress", o));
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((e) => a.BigNumber.from(e).eq(1))
                .catch((e) => {
                  if (e.code === v.Logger.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), e);
                })),
            this._supportsEip2544
          );
        }
        _fetch(e, r) {
          return y(this, void 0, void 0, function* () {
            const t = {
              to: this.address,
              ccipReadEnabled: !0,
              data: (0, l.hexConcat)([
                e,
                (0, u.namehash)(this.name),
                r || "0x",
              ]),
            };
            let o = !1;
            (yield this.supportsWildcard()) &&
              ((o = !0),
              (t.data = (0, l.hexConcat)([
                "0x9061b923",
                M([(0, u.dnsEncode)(this.name), t.data]),
              ])));
            try {
              let e = yield this.provider.call(t);
              return (
                (0, l.arrayify)(e).length % 32 === 4 &&
                  w.throwError(
                    "resolver threw error",
                    v.Logger.errors.CALL_EXCEPTION,
                    { transaction: t, data: e },
                  ),
                o && (e = B(e, 0)),
                e
              );
            } catch (n) {
              if (n.code === v.Logger.errors.CALL_EXCEPTION) return null;
              throw n;
            }
          });
        }
        _fetchBytes(e, r) {
          return y(this, void 0, void 0, function* () {
            const t = yield this._fetch(e, r);
            return null != t ? B(t, 0) : null;
          });
        }
        _getAddress(e, r) {
          const t = L[String(e)];
          if (
            (null == t &&
              w.throwError(
                "unsupported coin type: " + e,
                v.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${e})` },
              ),
            "eth" === t.ilk)
          )
            return this.provider.formatter.address(r);
          const o = (0, l.arrayify)(r);
          if (null != t.p2pkh) {
            const e = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (e) {
              const r = parseInt(e[1], 16);
              if (e[2].length === 2 * r && r >= 1 && r <= 75)
                return S((0, l.concat)([[t.p2pkh], "0x" + e[2]]));
            }
          }
          if (null != t.p2sh) {
            const e = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (e) {
              const r = parseInt(e[1], 16);
              if (e[2].length === 2 * r && r >= 1 && r <= 75)
                return S((0, l.concat)([[t.p2sh], "0x" + e[2]]));
            }
          }
          if (null != t.prefix) {
            const e = o[1];
            let r = o[0];
            if (
              (0 === r ? 20 !== e && 32 !== e && (r = -1) : (r = -1),
              r >= 0 && o.length === 2 + e && e >= 1 && e <= 75)
            ) {
              const e = p.default.toWords(o.slice(2));
              return (e.unshift(r), p.default.encode(t.prefix, e));
            }
          }
          return null;
        }
        getAddress(e) {
          return y(this, void 0, void 0, function* () {
            if ((null == e && (e = 60), 60 === e))
              try {
                const e = yield this._fetch("0x3b3b57de");
                return "0x" === e || e === c.HashZero
                  ? null
                  : this.provider.formatter.callAddress(e);
              } catch (o) {
                if (o.code === v.Logger.errors.CALL_EXCEPTION) return null;
                throw o;
              }
            const r = yield this._fetchBytes("0xf1cb7e06", A(e));
            if (null == r || "0x" === r) return null;
            const t = this._getAddress(e, r);
            return (
              null == t &&
                w.throwError(
                  "invalid or unsupported coin data",
                  v.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${e})`, coinType: e, data: r },
                ),
              t
            );
          });
        }
        getAvatar() {
          return y(this, void 0, void 0, function* () {
            const e = [{ type: "name", content: this.name }];
            try {
              const r = yield this.getText("avatar");
              if (null == r) return null;
              for (let t = 0; t < x.length; t++) {
                const o = r.match(x[t]);
                if (null == o) continue;
                const n = o[1].toLowerCase();
                switch (n) {
                  case "https":
                    return (
                      e.push({ type: "url", content: r }),
                      { linkage: e, url: r }
                    );
                  case "data":
                    return (
                      e.push({ type: "data", content: r }),
                      { linkage: e, url: r }
                    );
                  case "ipfs":
                    return (
                      e.push({ type: "ipfs", content: r }),
                      { linkage: e, url: F(r) }
                    );
                  case "erc721":
                  case "erc1155": {
                    const t = "erc721" === n ? "0xc87b56dd" : "0x0e89341c";
                    e.push({ type: n, content: r });
                    const s =
                        this._resolvedAddress || (yield this.getAddress()),
                      i = (o[2] || "").split("/");
                    if (2 !== i.length) return null;
                    const c = yield this.provider.formatter.address(i[0]),
                      u = (0, l.hexZeroPad)(
                        a.BigNumber.from(i[1]).toHexString(),
                        32,
                      );
                    if ("erc721" === n) {
                      const r = this.provider.formatter.callAddress(
                        yield this.provider.call({
                          to: c,
                          data: (0, l.hexConcat)(["0x6352211e", u]),
                        }),
                      );
                      if (s !== r) return null;
                      e.push({ type: "owner", content: r });
                    } else if ("erc1155" === n) {
                      const r = a.BigNumber.from(
                        yield this.provider.call({
                          to: c,
                          data: (0, l.hexConcat)([
                            "0x00fdd58e",
                            (0, l.hexZeroPad)(s, 32),
                            u,
                          ]),
                        }),
                      );
                      if (r.isZero()) return null;
                      e.push({ type: "balance", content: r.toString() });
                    }
                    const h = {
                      to: this.provider.formatter.address(i[0]),
                      data: (0, l.hexConcat)([t, u]),
                    };
                    let d = U(yield this.provider.call(h), 0);
                    if (null == d) return null;
                    (e.push({ type: "metadata-url-base", content: d }),
                      "erc1155" === n &&
                        ((d = d.replace("{id}", u.substring(2))),
                        e.push({ type: "metadata-url-expanded", content: d })),
                      d.match(/^ipfs:/i) && (d = F(d)),
                      e.push({ type: "metadata-url", content: d }));
                    const g = yield (0, m.fetchJson)(d);
                    if (!g) return null;
                    e.push({ type: "metadata", content: JSON.stringify(g) });
                    let f = g.image;
                    if ("string" !== typeof f) return null;
                    if (f.match(/^(https:\/\/|data:)/i));
                    else {
                      const r = f.match(C);
                      if (null == r) return null;
                      (e.push({ type: "url-ipfs", content: f }), (f = F(f)));
                    }
                    return (
                      e.push({ type: "url", content: f }),
                      { linkage: e, url: f }
                    );
                  }
                }
              }
            } catch (r) {}
            return null;
          });
        }
        getContentHash() {
          return y(this, void 0, void 0, function* () {
            const e = yield this._fetchBytes("0xbc1c58d1");
            if (null == e || "0x" === e) return null;
            const r = e.match(
              /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
            );
            if (r) {
              const e = parseInt(r[3], 16);
              if (r[4].length === 2 * e)
                return "ipfs://" + i.Base58.encode("0x" + r[1]);
            }
            const t = e.match(
              /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
            );
            if (t) {
              const e = parseInt(t[3], 16);
              if (t[4].length === 2 * e)
                return "ipns://" + i.Base58.encode("0x" + t[1]);
            }
            const o = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (o && 64 === o[1].length) return "bzz://" + o[1];
            const n = e.match(/^0x90b2c605([0-9a-f]*)$/);
            if (n && 68 === n[1].length) {
              const e = { "=": "", "+": "-", "/": "_" },
                r = (0, s.encode)("0x" + n[1]).replace(/[=+\/]/g, (r) => e[r]);
              return "sia://" + r;
            }
            return w.throwError(
              "invalid or unsupported content hash data",
              v.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "getContentHash()", data: e },
            );
          });
        }
        getText(e) {
          return y(this, void 0, void 0, function* () {
            let r = (0, f.toUtf8Bytes)(e);
            ((r = (0, l.concat)([A(64), A(r.length), r])),
              r.length % 32 !== 0 &&
                (r = (0, l.concat)([
                  r,
                  (0, l.hexZeroPad)("0x", 32 - (e.length % 32)),
                ])));
            const t = yield this._fetchBytes("0x59d1d43c", (0, l.hexlify)(r));
            return null == t || "0x" === t ? null : (0, f.toUtf8String)(t);
          });
        }
      }
      r.Resolver = Resolver;
      let G = null,
        W = 1;
      class BaseProvider extends n.Provider {
        constructor(e) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            (0, d.defineReadOnly)(this, "anyNetwork", "any" === e),
            this.anyNetwork && (e = this.detectNetwork()),
            e instanceof Promise)
          )
            ((this._networkPromise = e),
              e.catch((e) => {}),
              this._ready().catch((e) => {}));
          else {
            const r = (0, d.getStatic)(new.target, "getNetwork")(e);
            r
              ? ((0, d.defineReadOnly)(this, "_network", r),
                this.emit("network", r, null))
              : w.throwArgumentError("invalid network", "network", e);
          }
          ((this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0));
        }
        _ready() {
          return y(this, void 0, void 0, function* () {
            if (null == this._network) {
              let r = null;
              if (this._networkPromise)
                try {
                  r = yield this._networkPromise;
                } catch (e) {}
              (null == r && (r = yield this.detectNetwork()),
                r ||
                  w.throwError(
                    "no network detected",
                    v.Logger.errors.UNKNOWN_ERROR,
                    {},
                  ),
                null == this._network &&
                  (this.anyNetwork
                    ? (this._network = r)
                    : (0, d.defineReadOnly)(this, "_network", r),
                  this.emit("network", r, null)));
            }
            return this._network;
          });
        }
        get ready() {
          return (0, m.poll)(() =>
            this._ready().then(
              (e) => e,
              (e) => {
                if (
                  e.code !== v.Logger.errors.NETWORK_ERROR ||
                  "noNetwork" !== e.event
                )
                  throw e;
              },
            ),
          );
        }
        static getFormatter() {
          return (null == G && (G = new b.Formatter()), G);
        }
        static getNetwork(e) {
          return (0, h.getNetwork)(null == e ? "homestead" : e);
        }
        ccipReadFetch(e, r, t) {
          return y(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === t.length) return null;
            const o = e.to.toLowerCase(),
              n = r.toLowerCase(),
              s = [];
            for (let e = 0; e < t.length; e++) {
              const r = t[e],
                i = r.replace("{sender}", o).replace("{data}", n),
                a =
                  r.indexOf("{data}") >= 0
                    ? null
                    : JSON.stringify({ data: n, sender: o }),
                l = yield (0, m.fetchJson)(
                  { url: i, errorPassThrough: !0 },
                  a,
                  (e, r) => ((e.status = r.statusCode), e),
                );
              if (l.data) return l.data;
              const c = l.message || "unknown error";
              if (l.status >= 400 && l.status < 500)
                return w.throwError(
                  "response not found during CCIP fetch: " + c,
                  v.Logger.errors.SERVER_ERROR,
                  { url: r, errorMessage: c },
                );
              s.push(c);
            }
            return w.throwError(
              "error encountered during CCIP fetch: " +
                s.map((e) => JSON.stringify(e)).join(", "),
              v.Logger.errors.SERVER_ERROR,
              { urls: t, errorMessages: s },
            );
          });
        }
        _getInternalBlockNumber(e) {
          return y(this, void 0, void 0, function* () {
            if ((yield this._ready(), e > 0))
              while (this._internalBlockNumber) {
                const r = this._internalBlockNumber;
                try {
                  const t = yield r;
                  if (T() - t.respTime <= e) return t.blockNumber;
                  break;
                } catch (o) {
                  if (this._internalBlockNumber === r) break;
                }
              }
            const r = T(),
              t = (0, d.resolveProperties)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (e) => null,
                  (e) => e,
                ),
              }).then((e) => {
                let { blockNumber: o, networkError: n } = e;
                if (n)
                  throw (
                    this._internalBlockNumber === t &&
                      (this._internalBlockNumber = null),
                    n
                  );
                const s = T();
                return (
                  (o = a.BigNumber.from(o).toNumber()),
                  o < this._maxInternalBlockNumber &&
                    (o = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = o),
                  this._setFastBlockNumber(o),
                  { blockNumber: o, reqTime: r, respTime: s }
                );
              });
            return (
              (this._internalBlockNumber = t),
              t.catch((e) => {
                this._internalBlockNumber === t &&
                  (this._internalBlockNumber = null);
              }),
              (yield t).blockNumber
            );
          });
        }
        poll() {
          return y(this, void 0, void 0, function* () {
            const e = W++,
              r = [];
            let t = null;
            try {
              t = yield this._getInternalBlockNumber(
                100 + this.pollingInterval / 2,
              );
            } catch (o) {
              return void this.emit("error", o);
            }
            if (
              (this._setFastBlockNumber(t),
              this.emit("poll", e, t),
              t !== this._lastBlockNumber)
            ) {
              if (
                (-2 === this._emitted.block && (this._emitted.block = t - 1),
                Math.abs(this._emitted.block - t) > 1e3)
              )
                (w.warn(
                  `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${t})`,
                ),
                  this.emit(
                    "error",
                    w.makeError(
                      "network block skew detected",
                      v.Logger.errors.NETWORK_ERROR,
                      {
                        blockNumber: t,
                        event: "blockSkew",
                        previousBlockNumber: this._emitted.block,
                      },
                    ),
                  ),
                  this.emit("block", t));
              else
                for (let e = this._emitted.block + 1; e <= t; e++)
                  this.emit("block", e);
              (this._emitted.block !== t &&
                ((this._emitted.block = t),
                Object.keys(this._emitted).forEach((e) => {
                  if ("block" === e) return;
                  const r = this._emitted[e];
                  "pending" !== r && t - r > 12 && delete this._emitted[e];
                })),
                -2 === this._lastBlockNumber && (this._lastBlockNumber = t - 1),
                this._events.forEach((e) => {
                  switch (e.type) {
                    case "tx": {
                      const t = e.hash;
                      let o = this.getTransactionReceipt(t)
                        .then((e) =>
                          e && null != e.blockNumber
                            ? ((this._emitted["t:" + t] = e.blockNumber),
                              this.emit(t, e),
                              null)
                            : null,
                        )
                        .catch((e) => {
                          this.emit("error", e);
                        });
                      r.push(o);
                      break;
                    }
                    case "filter":
                      if (!e._inflight) {
                        ((e._inflight = !0),
                          -2 === e._lastBlockNumber &&
                            (e._lastBlockNumber = t - 1));
                        const o = e.filter;
                        ((o.fromBlock = e._lastBlockNumber + 1),
                          (o.toBlock = t));
                        const n = o.toBlock - this._maxFilterBlockRange;
                        (n > o.fromBlock && (o.fromBlock = n),
                          o.fromBlock < 0 && (o.fromBlock = 0));
                        const s = this.getLogs(o)
                          .then((r) => {
                            ((e._inflight = !1),
                              0 !== r.length &&
                                r.forEach((r) => {
                                  (r.blockNumber > e._lastBlockNumber &&
                                    (e._lastBlockNumber = r.blockNumber),
                                    (this._emitted["b:" + r.blockHash] =
                                      r.blockNumber),
                                    (this._emitted["t:" + r.transactionHash] =
                                      r.blockNumber),
                                    this.emit(o, r));
                                }));
                          })
                          .catch((r) => {
                            (this.emit("error", r), (e._inflight = !1));
                          });
                        r.push(s);
                      }
                      break;
                  }
                }),
                (this._lastBlockNumber = t),
                Promise.all(r)
                  .then(() => {
                    this.emit("didPoll", e);
                  })
                  .catch((e) => {
                    this.emit("error", e);
                  }));
            } else this.emit("didPoll", e);
          });
        }
        resetEventsBlock(e) {
          ((this._lastBlockNumber = e - 1), this.polling && this.poll());
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return y(this, void 0, void 0, function* () {
            return w.throwError(
              "provider does not support network detection",
              v.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "provider.detectNetwork" },
            );
          });
        }
        getNetwork() {
          return y(this, void 0, void 0, function* () {
            const e = yield this._ready(),
              r = yield this.detectNetwork();
            if (e.chainId !== r.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = r),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", r, e),
                  yield O(0),
                  this._network
                );
              const t = w.makeError(
                "underlying network changed",
                v.Logger.errors.NETWORK_ERROR,
                { event: "changed", network: e, detectedNetwork: r },
              );
              throw (this.emit("error", t), t);
            }
            return e;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (e) => {
                this._setFastBlockNumber(e);
              },
              (e) => {},
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(e) {
          e && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  (this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      (this._poller || this.poll(),
                        (this._bootstrapPoll = null));
                    }, this.pollingInterval)));
                }, 0)))
            : !e &&
              this._poller &&
              (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(e) {
          if ("number" !== typeof e || e <= 0 || parseInt(String(e)) != e)
            throw new Error("invalid polling interval");
          ((this._pollingInterval = e),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval))));
        }
        _getFastBlockNumber() {
          const e = T();
          return (
            e - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = e),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (e) => (
                  (null == this._fastBlockNumber ||
                    e > this._fastBlockNumber) &&
                    (this._fastBlockNumber = e),
                  this._fastBlockNumber
                ),
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(e) {
          (null != this._fastBlockNumber && e < this._fastBlockNumber) ||
            ((this._fastQueryDate = T()),
            (null == this._fastBlockNumber || e > this._fastBlockNumber) &&
              ((this._fastBlockNumber = e),
              (this._fastBlockNumberPromise = Promise.resolve(e))));
        }
        waitForTransaction(e, r, t) {
          return y(this, void 0, void 0, function* () {
            return this._waitForTransaction(e, null == r ? 1 : r, t || 0, null);
          });
        }
        _waitForTransaction(e, r, t, o) {
          return y(this, void 0, void 0, function* () {
            const n = yield this.getTransactionReceipt(e);
            return (n ? n.confirmations : 0) >= r
              ? n
              : new Promise((n, s) => {
                  const i = [];
                  let a = !1;
                  const l = function () {
                      return (
                        !!a ||
                        ((a = !0),
                        i.forEach((e) => {
                          e();
                        }),
                        !1)
                      );
                    },
                    c = (e) => {
                      e.confirmations < r || l() || n(e);
                    };
                  if (
                    (this.on(e, c),
                    i.push(() => {
                      this.removeListener(e, c);
                    }),
                    o)
                  ) {
                    let t = o.startBlock,
                      n = null;
                    const c = (i) =>
                      y(this, void 0, void 0, function* () {
                        a ||
                          (yield O(1e3),
                          this.getTransactionCount(o.from).then(
                            (u) =>
                              y(this, void 0, void 0, function* () {
                                if (!a) {
                                  if (u <= o.nonce) t = i;
                                  else {
                                    {
                                      const r = yield this.getTransaction(e);
                                      if (r && null != r.blockNumber) return;
                                    }
                                    null == n &&
                                      ((n = t - 3),
                                      n < o.startBlock && (n = o.startBlock));
                                    while (n <= i) {
                                      if (a) return;
                                      const t =
                                        yield this.getBlockWithTransactions(n);
                                      for (
                                        let n = 0;
                                        n < t.transactions.length;
                                        n++
                                      ) {
                                        const i = t.transactions[n];
                                        if (i.hash === e) return;
                                        if (
                                          i.from === o.from &&
                                          i.nonce === o.nonce
                                        ) {
                                          if (a) return;
                                          const t =
                                            yield this.waitForTransaction(
                                              i.hash,
                                              r,
                                            );
                                          if (l()) return;
                                          let n = "replaced";
                                          return (
                                            i.data === o.data &&
                                            i.to === o.to &&
                                            i.value.eq(o.value)
                                              ? (n = "repriced")
                                              : "0x" === i.data &&
                                                i.from === i.to &&
                                                i.value.isZero() &&
                                                (n = "cancelled"),
                                            void s(
                                              w.makeError(
                                                "transaction was replaced",
                                                v.Logger.errors
                                                  .TRANSACTION_REPLACED,
                                                {
                                                  cancelled:
                                                    "replaced" === n ||
                                                    "cancelled" === n,
                                                  reason: n,
                                                  replacement:
                                                    this._wrapTransaction(i),
                                                  hash: e,
                                                  receipt: t,
                                                },
                                              ),
                                            )
                                          );
                                        }
                                      }
                                      n++;
                                    }
                                  }
                                  a || this.once("block", c);
                                }
                              }),
                            (e) => {
                              a || this.once("block", c);
                            },
                          ));
                      });
                    if (a) return;
                    (this.once("block", c),
                      i.push(() => {
                        this.removeListener("block", c);
                      }));
                  }
                  if ("number" === typeof t && t > 0) {
                    const e = setTimeout(() => {
                      l() ||
                        s(
                          w.makeError(
                            "timeout exceeded",
                            v.Logger.errors.TIMEOUT,
                            { timeout: t },
                          ),
                        );
                    }, t);
                    (e.unref && e.unref(),
                      i.push(() => {
                        clearTimeout(e);
                      }));
                  }
                });
          });
        }
        getBlockNumber() {
          return y(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield this.perform("getGasPrice", {});
            try {
              return a.BigNumber.from(e);
            } catch (r) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                { method: "getGasPrice", result: e, error: r },
              );
            }
          });
        }
        getBalance(e, r) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield (0, d.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
              }),
              o = yield this.perform("getBalance", t);
            try {
              return a.BigNumber.from(o);
            } catch (n) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                { method: "getBalance", params: t, result: o, error: n },
              );
            }
          });
        }
        getTransactionCount(e, r) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield (0, d.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
              }),
              o = yield this.perform("getTransactionCount", t);
            try {
              return a.BigNumber.from(o).toNumber();
            } catch (n) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                {
                  method: "getTransactionCount",
                  params: t,
                  result: o,
                  error: n,
                },
              );
            }
          });
        }
        getCode(e, r) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield (0, d.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
              }),
              o = yield this.perform("getCode", t);
            try {
              return (0, l.hexlify)(o);
            } catch (n) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                { method: "getCode", params: t, result: o, error: n },
              );
            }
          });
        }
        getStorageAt(e, r, t) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const o = yield (0, d.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
                position: Promise.resolve(r).then((e) => (0, l.hexValue)(e)),
              }),
              n = yield this.perform("getStorageAt", o);
            try {
              return (0, l.hexlify)(n);
            } catch (s) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                { method: "getStorageAt", params: o, result: n, error: s },
              );
            }
          });
        }
        _wrapTransaction(e, r, t) {
          if (null != r && 32 !== (0, l.hexDataLength)(r))
            throw new Error("invalid response - sendTransaction");
          const o = e;
          return (
            null != r &&
              e.hash !== r &&
              w.throwError(
                "Transaction hash mismatch from Provider.sendTransaction.",
                v.Logger.errors.UNKNOWN_ERROR,
                { expectedHash: e.hash, returnedHash: r },
              ),
            (o.wait = (r, o) =>
              y(this, void 0, void 0, function* () {
                (null == r && (r = 1), null == o && (o = 0));
                let n = void 0;
                0 !== r &&
                  null != t &&
                  (n = {
                    data: e.data,
                    from: e.from,
                    nonce: e.nonce,
                    to: e.to,
                    value: e.value,
                    startBlock: t,
                  });
                const s = yield this._waitForTransaction(e.hash, r, o, n);
                return null == s && 0 === r
                  ? null
                  : ((this._emitted["t:" + e.hash] = s.blockNumber),
                    0 === s.status &&
                      w.throwError(
                        "transaction failed",
                        v.Logger.errors.CALL_EXCEPTION,
                        { transactionHash: e.hash, transaction: e, receipt: s },
                      ),
                    s);
              })),
            o
          );
        }
        sendTransaction(e) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield Promise.resolve(e).then((e) => (0, l.hexlify)(e)),
              t = this.formatter.transaction(e);
            null == t.confirmations && (t.confirmations = 0);
            const o = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval,
            );
            try {
              const e = yield this.perform("sendTransaction", {
                signedTransaction: r,
              });
              return this._wrapTransaction(t, e, o);
            } catch (n) {
              throw ((n.transaction = t), (n.transactionHash = t.hash), n);
            }
          });
        }
        _getTransactionRequest(e) {
          return y(this, void 0, void 0, function* () {
            const r = yield e,
              t = {};
            return (
              ["from", "to"].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    e ? this._getAddress(e) : null,
                  ));
              }),
              [
                "gasLimit",
                "gasPrice",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "value",
              ].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    e ? a.BigNumber.from(e) : null,
                  ));
              }),
              ["type"].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    null != e ? e : null,
                  ));
              }),
              r.accessList &&
                (t.accessList = this.formatter.accessList(r.accessList)),
              ["data"].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    e ? (0, l.hexlify)(e) : null,
                  ));
              }),
              this.formatter.transactionRequest(
                yield (0, d.resolveProperties)(t),
              )
            );
          });
        }
        _getFilter(e) {
          return y(this, void 0, void 0, function* () {
            e = yield e;
            const r = {};
            return (
              null != e.address && (r.address = this._getAddress(e.address)),
              ["blockHash", "topics"].forEach((t) => {
                null != e[t] && (r[t] = e[t]);
              }),
              ["fromBlock", "toBlock"].forEach((t) => {
                null != e[t] && (r[t] = this._getBlockTag(e[t]));
              }),
              this.formatter.filter(yield (0, d.resolveProperties)(r))
            );
          });
        }
        _call(e, r, t) {
          return y(this, void 0, void 0, function* () {
            t >= N &&
              w.throwError(
                "CCIP read exceeded maximum redirections",
                v.Logger.errors.SERVER_ERROR,
                { redirects: t, transaction: e },
              );
            const o = e.to,
              n = yield this.perform("call", { transaction: e, blockTag: r });
            if (
              t >= 0 &&
              "latest" === r &&
              null != o &&
              "0x556f1830" === n.substring(0, 10) &&
              (0, l.hexDataLength)(n) % 32 === 4
            )
              try {
                const s = (0, l.hexDataSlice)(n, 4),
                  i = (0, l.hexDataSlice)(s, 0, 32);
                a.BigNumber.from(i).eq(o) ||
                  w.throwError(
                    "CCIP Read sender did not match",
                    v.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: n,
                    },
                  );
                const c = [],
                  u = a.BigNumber.from(
                    (0, l.hexDataSlice)(s, 32, 64),
                  ).toNumber(),
                  h = a.BigNumber.from(
                    (0, l.hexDataSlice)(s, u, u + 32),
                  ).toNumber(),
                  d = (0, l.hexDataSlice)(s, u + 32);
                for (let r = 0; r < h; r++) {
                  const t = U(d, 32 * r);
                  (null == t &&
                    w.throwError(
                      "CCIP Read contained corrupt URL string",
                      v.Logger.errors.CALL_EXCEPTION,
                      {
                        name: "OffchainLookup",
                        signature:
                          "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: e,
                        data: n,
                      },
                    ),
                    c.push(t));
                }
                const g = B(s, 64);
                a.BigNumber.from((0, l.hexDataSlice)(s, 100, 128)).isZero() ||
                  w.throwError(
                    "CCIP Read callback selector included junk",
                    v.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: n,
                    },
                  );
                const f = (0, l.hexDataSlice)(s, 96, 100),
                  m = B(s, 128),
                  p = yield this.ccipReadFetch(e, g, c);
                null == p &&
                  w.throwError(
                    "CCIP Read disabled or provided no URLs",
                    v.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: n,
                    },
                  );
                const E = { to: o, data: (0, l.hexConcat)([f, M([p, m])]) };
                return this._call(E, r, t + 1);
              } catch (s) {
                if (s.code === v.Logger.errors.SERVER_ERROR) throw s;
              }
            try {
              return (0, l.hexlify)(n);
            } catch (s) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                {
                  method: "call",
                  params: { transaction: e, blockTag: r },
                  result: n,
                  error: s,
                },
              );
            }
          });
        }
        call(e, r) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield (0, d.resolveProperties)({
              transaction: this._getTransactionRequest(e),
              blockTag: this._getBlockTag(r),
              ccipReadEnabled: Promise.resolve(e.ccipReadEnabled),
            });
            return this._call(
              t.transaction,
              t.blockTag,
              t.ccipReadEnabled ? 0 : -1,
            );
          });
        }
        estimateGas(e) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, d.resolveProperties)({
                transaction: this._getTransactionRequest(e),
              }),
              t = yield this.perform("estimateGas", r);
            try {
              return a.BigNumber.from(t);
            } catch (o) {
              return w.throwError(
                "bad result from backend",
                v.Logger.errors.SERVER_ERROR,
                { method: "estimateGas", params: r, result: t, error: o },
              );
            }
          });
        }
        _getAddress(e) {
          return y(this, void 0, void 0, function* () {
            ((e = yield e),
              "string" !== typeof e &&
                w.throwArgumentError("invalid address or ENS name", "name", e));
            const r = yield this.resolveName(e);
            return (
              null == r &&
                w.throwError(
                  "ENS name not configured",
                  v.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: `resolveName(${JSON.stringify(e)})` },
                ),
              r
            );
          });
        }
        _getBlock(e, r) {
          return y(this, void 0, void 0, function* () {
            (yield this.getNetwork(), (e = yield e));
            let t = -128;
            const o = { includeTransactions: !!r };
            if ((0, l.isHexString)(e, 32)) o.blockHash = e;
            else
              try {
                ((o.blockTag = yield this._getBlockTag(e)),
                  (0, l.isHexString)(o.blockTag) &&
                    (t = parseInt(o.blockTag.substring(2), 16)));
              } catch (n) {
                w.throwArgumentError(
                  "invalid block hash or block tag",
                  "blockHashOrBlockTag",
                  e,
                );
              }
            return (0, m.poll)(
              () =>
                y(this, void 0, void 0, function* () {
                  const e = yield this.perform("getBlock", o);
                  if (null == e)
                    return (null != o.blockHash &&
                      null == this._emitted["b:" + o.blockHash]) ||
                      (null != o.blockTag && t > this._emitted.block)
                      ? null
                      : void 0;
                  if (r) {
                    let r = null;
                    for (let o = 0; o < e.transactions.length; o++) {
                      const t = e.transactions[o];
                      if (null == t.blockNumber) t.confirmations = 0;
                      else if (null == t.confirmations) {
                        null == r &&
                          (r = yield this._getInternalBlockNumber(
                            100 + 2 * this.pollingInterval,
                          ));
                        let e = r - t.blockNumber + 1;
                        (e <= 0 && (e = 1), (t.confirmations = e));
                      }
                    }
                    const t = this.formatter.blockWithTransactions(e);
                    return (
                      (t.transactions = t.transactions.map((e) =>
                        this._wrapTransaction(e),
                      )),
                      t
                    );
                  }
                  return this.formatter.block(e);
                }),
              { oncePoll: this },
            );
          });
        }
        getBlock(e) {
          return this._getBlock(e, !1);
        }
        getBlockWithTransactions(e) {
          return this._getBlock(e, !0);
        }
        getTransaction(e) {
          return y(this, void 0, void 0, function* () {
            (yield this.getNetwork(), (e = yield e));
            const r = { transactionHash: this.formatter.hash(e, !0) };
            return (0, m.poll)(
              () =>
                y(this, void 0, void 0, function* () {
                  const t = yield this.perform("getTransaction", r);
                  if (null == t)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  const o = this.formatter.transactionResponse(t);
                  if (null == o.blockNumber) o.confirmations = 0;
                  else if (null == o.confirmations) {
                    const e = yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval,
                    );
                    let r = e - o.blockNumber + 1;
                    (r <= 0 && (r = 1), (o.confirmations = r));
                  }
                  return this._wrapTransaction(o);
                }),
              { oncePoll: this },
            );
          });
        }
        getTransactionReceipt(e) {
          return y(this, void 0, void 0, function* () {
            (yield this.getNetwork(), (e = yield e));
            const r = { transactionHash: this.formatter.hash(e, !0) };
            return (0, m.poll)(
              () =>
                y(this, void 0, void 0, function* () {
                  const t = yield this.perform("getTransactionReceipt", r);
                  if (null == t)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  if (null == t.blockHash) return;
                  const o = this.formatter.receipt(t);
                  if (null == o.blockNumber) o.confirmations = 0;
                  else if (null == o.confirmations) {
                    const e = yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval,
                    );
                    let r = e - o.blockNumber + 1;
                    (r <= 0 && (r = 1), (o.confirmations = r));
                  }
                  return o;
                }),
              { oncePoll: this },
            );
          });
        }
        getLogs(e) {
          return y(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, d.resolveProperties)({
                filter: this._getFilter(e),
              }),
              t = yield this.perform("getLogs", r);
            return (
              t.forEach((e) => {
                null == e.removed && (e.removed = !1);
              }),
              b.Formatter.arrayOf(
                this.formatter.filterLog.bind(this.formatter),
              )(t)
            );
          });
        }
        getEtherPrice() {
          return y(this, void 0, void 0, function* () {
            return (yield this.getNetwork(), this.perform("getEtherPrice", {}));
          });
        }
        _getBlockTag(e) {
          return y(this, void 0, void 0, function* () {
            if (((e = yield e), "number" === typeof e && e < 0)) {
              e % 1 && w.throwArgumentError("invalid BlockTag", "blockTag", e);
              let r = yield this._getInternalBlockNumber(
                100 + 2 * this.pollingInterval,
              );
              return ((r += e), r < 0 && (r = 0), this.formatter.blockTag(r));
            }
            return this.formatter.blockTag(e);
          });
        }
        getResolver(e) {
          return y(this, void 0, void 0, function* () {
            let r = e;
            while (1) {
              if ("" === r || "." === r) return null;
              if ("eth" !== e && "eth" === r) return null;
              const t = yield this._getResolver(r, "getResolver");
              if (null != t) {
                const o = new Resolver(this, t, e);
                return r === e || (yield o.supportsWildcard()) ? o : null;
              }
              r = r.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(e, r) {
          return y(this, void 0, void 0, function* () {
            null == r && (r = "ENS");
            const t = yield this.getNetwork();
            t.ensAddress ||
              w.throwError(
                "network does not support ENS",
                v.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: r, network: t.name },
              );
            try {
              const r = yield this.call({
                to: t.ensAddress,
                data: "0x0178b8bf" + (0, u.namehash)(e).substring(2),
              });
              return this.formatter.callAddress(r);
            } catch (o) {}
            return null;
          });
        }
        resolveName(e) {
          return y(this, void 0, void 0, function* () {
            e = yield e;
            try {
              return Promise.resolve(this.formatter.address(e));
            } catch (t) {
              if ((0, l.isHexString)(e)) throw t;
            }
            "string" !== typeof e &&
              w.throwArgumentError("invalid ENS name", "name", e);
            const r = yield this.getResolver(e);
            return r ? yield r.getAddress() : null;
          });
        }
        lookupAddress(e) {
          return y(this, void 0, void 0, function* () {
            ((e = yield e), (e = this.formatter.address(e)));
            const r = e.substring(2).toLowerCase() + ".addr.reverse",
              t = yield this._getResolver(r, "lookupAddress");
            if (null == t) return null;
            const o = U(
                yield this.call({
                  to: t,
                  data: "0x691f3431" + (0, u.namehash)(r).substring(2),
                }),
                0,
              ),
              n = yield this.resolveName(o);
            return n != e ? null : o;
          });
        }
        getAvatar(e) {
          return y(this, void 0, void 0, function* () {
            let r = null;
            if ((0, l.isHexString)(e)) {
              const t = this.formatter.address(e),
                n = t.substring(2).toLowerCase() + ".addr.reverse",
                s = yield this._getResolver(n, "getAvatar");
              if (!s) return null;
              r = new Resolver(this, s, n);
              try {
                const e = yield r.getAvatar();
                if (e) return e.url;
              } catch (o) {
                if (o.code !== v.Logger.errors.CALL_EXCEPTION) throw o;
              }
              try {
                const e = U(
                  yield this.call({
                    to: s,
                    data: "0x691f3431" + (0, u.namehash)(n).substring(2),
                  }),
                  0,
                );
                r = yield this.getResolver(e);
              } catch (o) {
                if (o.code !== v.Logger.errors.CALL_EXCEPTION) throw o;
                return null;
              }
            } else if (((r = yield this.getResolver(e)), !r)) return null;
            const t = yield r.getAvatar();
            return null == t ? null : t.url;
          });
        }
        perform(e, r) {
          return w.throwError(
            e + " not implemented",
            v.Logger.errors.NOT_IMPLEMENTED,
            { operation: e },
          );
        }
        _startEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _stopEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _addEventListener(e, r, t) {
          const o = new Event(R(e), r, t);
          return (this._events.push(o), this._startEvent(o), this);
        }
        on(e, r) {
          return this._addEventListener(e, r, !1);
        }
        once(e, r) {
          return this._addEventListener(e, r, !0);
        }
        emit(e) {
          for (
            var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            t[o - 1] = arguments[o];
          let n = !1,
            s = [],
            i = R(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== i ||
                (setTimeout(() => {
                  e.listener.apply(this, t);
                }, 0),
                (n = !0),
                !e.once || (s.push(e), !1)),
            )),
            s.forEach((e) => {
              this._stopEvent(e);
            }),
            n
          );
        }
        listenerCount(e) {
          if (!e) return this._events.length;
          let r = R(e);
          return this._events.filter((e) => e.tag === r).length;
        }
        listeners(e) {
          if (null == e) return this._events.map((e) => e.listener);
          let r = R(e);
          return this._events.filter((e) => e.tag === r).map((e) => e.listener);
        }
        off(e, r) {
          if (null == r) return this.removeAllListeners(e);
          const t = [];
          let o = !1,
            n = R(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== n ||
                e.listener != r ||
                !!o ||
                ((o = !0), t.push(e), !1),
            )),
            t.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
        removeAllListeners(e) {
          let r = [];
          if (null == e) ((r = this._events), (this._events = []));
          else {
            const t = R(e);
            this._events = this._events.filter(
              (e) => e.tag !== t || (r.push(e), !1),
            );
          }
          return (
            r.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
      }
      r.BaseProvider = BaseProvider;
    },
    277: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WebSocketProvider = void 0));
      var o = t(65),
        n = t(38),
        s = t(140),
        i = t(1434),
        a = t(17),
        l = t(44),
        c = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const u = new a.Logger(l.version);
      let h = 1;
      class WebSocketProvider extends s.JsonRpcProvider {
        constructor(e, r) {
          ("any" === r &&
            u.throwError(
              "WebSocketProvider does not support 'any' network yet",
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "network:any" },
            ),
            super("string" === typeof e ? e : "_websocket", r),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            "string" === typeof e
              ? (0, n.defineReadOnly)(
                  this,
                  "_websocket",
                  new i.WebSocket(this.connection.url),
                )
              : (0, n.defineReadOnly)(this, "_websocket", e),
            (0, n.defineReadOnly)(this, "_requests", {}),
            (0, n.defineReadOnly)(this, "_subs", {}),
            (0, n.defineReadOnly)(this, "_subIds", {}),
            (0, n.defineReadOnly)(
              this,
              "_detectNetwork",
              super.detectNetwork(),
            ),
            (this.websocket.onopen = () => {
              ((this._wsReady = !0),
                Object.keys(this._requests).forEach((e) => {
                  this.websocket.send(this._requests[e].payload);
                }));
            }),
            (this.websocket.onmessage = (e) => {
              const r = e.data,
                t = JSON.parse(r);
              if (null != t.id) {
                const e = String(t.id),
                  o = this._requests[e];
                if ((delete this._requests[e], void 0 !== t.result))
                  (o.callback(null, t.result),
                    this.emit("debug", {
                      action: "response",
                      request: JSON.parse(o.payload),
                      response: t.result,
                      provider: this,
                    }));
                else {
                  let e = null;
                  (t.error
                    ? ((e = new Error(t.error.message || "unknown error")),
                      (0, n.defineReadOnly)(e, "code", t.error.code || null),
                      (0, n.defineReadOnly)(e, "response", r))
                    : (e = new Error("unknown error")),
                    o.callback(e, void 0),
                    this.emit("debug", {
                      action: "response",
                      error: e,
                      request: JSON.parse(o.payload),
                      provider: this,
                    }));
                }
              } else if ("eth_subscription" === t.method) {
                const e = this._subs[t.params.subscription];
                e && e.processFunc(t.params.result);
              } else console.warn("this should not happen");
            }));
          const t = setInterval(() => {
            this.emit("poll");
          }, 1e3);
          t.unref && t.unref();
        }
        get websocket() {
          return this._websocket;
        }
        detectNetwork() {
          return this._detectNetwork;
        }
        get pollingInterval() {
          return 0;
        }
        resetEventsBlock(e) {
          u.throwError(
            "cannot reset events block on WebSocketProvider",
            a.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "resetEventBlock" },
          );
        }
        set pollingInterval(e) {
          u.throwError(
            "cannot set polling interval on WebSocketProvider",
            a.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "setPollingInterval" },
          );
        }
        poll() {
          return c(this, void 0, void 0, function* () {
            return null;
          });
        }
        set polling(e) {
          e &&
            u.throwError(
              "cannot set polling on WebSocketProvider",
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setPolling" },
            );
        }
        send(e, r) {
          const t = h++;
          return new Promise((o, n) => {
            function s(e, r) {
              return e ? n(e) : o(r);
            }
            const i = JSON.stringify({
              method: e,
              params: r,
              id: t,
              jsonrpc: "2.0",
            });
            (this.emit("debug", {
              action: "request",
              request: JSON.parse(i),
              provider: this,
            }),
              (this._requests[String(t)] = { callback: s, payload: i }),
              this._wsReady && this.websocket.send(i));
          });
        }
        static defaultUrl() {
          return "ws://localhost:8546";
        }
        _subscribe(e, r, t) {
          return c(this, void 0, void 0, function* () {
            let o = this._subIds[e];
            null == o &&
              ((o = Promise.all(r).then((e) => this.send("eth_subscribe", e))),
              (this._subIds[e] = o));
            const n = yield o;
            this._subs[n] = { tag: e, processFunc: t };
          });
        }
        _startEvent(e) {
          switch (e.type) {
            case "block":
              this._subscribe("block", ["newHeads"], (e) => {
                const r = o.BigNumber.from(e.number).toNumber();
                ((this._emitted.block = r), this.emit("block", r));
              });
              break;
            case "pending":
              this._subscribe("pending", ["newPendingTransactions"], (e) => {
                this.emit("pending", e);
              });
              break;
            case "filter":
              this._subscribe(
                e.tag,
                ["logs", this._getFilter(e.filter)],
                (r) => {
                  (null == r.removed && (r.removed = !1),
                    this.emit(e.filter, this.formatter.filterLog(r)));
                },
              );
              break;
            case "tx": {
              const r = (e) => {
                const r = e.hash;
                this.getTransactionReceipt(r).then((e) => {
                  e && this.emit(r, e);
                });
              };
              (r(e),
                this._subscribe("tx", ["newHeads"], (e) => {
                  this._events.filter((e) => "tx" === e.type).forEach(r);
                }));
              break;
            }
            case "debug":
            case "poll":
            case "willPoll":
            case "didPoll":
            case "error":
              break;
            default:
              console.log("unhandled:", e);
              break;
          }
        }
        _stopEvent(e) {
          let r = e.tag;
          if ("tx" === e.type) {
            if (this._events.filter((e) => "tx" === e.type).length) return;
            r = "tx";
          } else if (this.listenerCount(e.event)) return;
          const t = this._subIds[r];
          t &&
            (delete this._subIds[r],
            t.then((e) => {
              this._subs[e] &&
                (delete this._subs[e], this.send("eth_unsubscribe", [e]));
            }));
        }
        destroy() {
          return c(this, void 0, void 0, function* () {
            (this.websocket.readyState === i.WebSocket.CONNECTING &&
              (yield new Promise((e) => {
                ((this.websocket.onopen = function () {
                  e(!0);
                }),
                  (this.websocket.onerror = function () {
                    e(!1);
                  }));
              })),
              this.websocket.close(1e3));
          });
        }
      }
      r.WebSocketProvider = WebSocketProvider;
    },
    44: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "providers/5.7.2";
    },
    574: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var o = t(1653);
      let n = !1,
        s = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = i["default"],
        l = null;
      function c() {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      }
      const u = c();
      var h, d;
      ((function (e) {
        ((e["DEBUG"] = "DEBUG"),
          (e["INFO"] = "INFO"),
          (e["WARNING"] = "WARNING"),
          (e["ERROR"] = "ERROR"),
          (e["OFF"] = "OFF"));
      })(h || (r.LogLevel = h = {})),
        (function (e) {
          ((e["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (e["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (e["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (e["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (e["SERVER_ERROR"] = "SERVER_ERROR"),
            (e["TIMEOUT"] = "TIMEOUT"),
            (e["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (e["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (e["MISSING_NEW"] = "MISSING_NEW"),
            (e["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (e["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (e["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (e["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (e["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (e["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (e["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (e["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (e["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (e["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(d || (r.ErrorCode = d = {})));
      const g = "0123456789abcdef";
      class Logger {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          (null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            a > i[t] || console.log.apply(console, r));
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (s) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), t || (t = {}));
          const o = [];
          (Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  ((t += g[r[e] >> 4]), (t += g[15 & r[e]]));
                o.push(e + "=Uint8Array(0x" + t + ")");
              } else o.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              o.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            o.push("code=" + r),
            o.push("version=" + this.version));
          const n = e;
          let i = "";
          switch (r) {
            case d.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  i += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  i += "-unbound-result";
                  break;
              }
              break;
            }
            case d.CALL_EXCEPTION:
            case d.INSUFFICIENT_FUNDS:
            case d.MISSING_NEW:
            case d.NONCE_EXPIRED:
            case d.REPLACEMENT_UNDERPRICED:
            case d.TRANSACTION_REPLACED:
            case d.UNPREDICTABLE_GAS_LIMIT:
              i = r;
              break;
          }
          (i && (e += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            o.length && (e += " (" + o.join(", ") + ")"));
          const a = new Error(e);
          return (
            (a.reason = n),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, o) {
          e || this.throwError(r, t, o);
        }
        assertArgument(e, r, t, o) {
          e || this.throwArgumentError(r, t, o);
        }
        checkNormalize(e) {
          (null == e && (e = "platform missing String.prototype.normalize"),
            u &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: u },
              ));
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          ((t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                Logger.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r },
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r },
              ));
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" },
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (l || (l = new Logger(o.version)), l);
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((s = !!e), (n = !!r));
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (a = r)
            : Logger.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new Logger(e);
        }
      }
      ((r.Logger = Logger), (Logger.errors = d), (Logger.levels = h));
    },
    91: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Formatter = void 0),
        (r.isCommunityResourcable = d),
        (r.isCommunityResource = g),
        (r.showThrottleMessage = m));
      var o = t(275),
        n = t(65),
        s = t(25),
        i = t(174),
        a = t(38),
        l = t(276),
        c = t(17),
        u = t(44);
      const h = new c.Logger(u.version);
      class Formatter {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          const e = {},
            r = this.address.bind(this),
            t = this.bigNumber.bind(this),
            o = this.blockTag.bind(this),
            n = this.data.bind(this),
            s = this.hash.bind(this),
            i = this.hex.bind(this),
            l = this.number.bind(this),
            c = this.type.bind(this),
            u = (e) => this.data(e, !0);
          return (
            (e.transaction = {
              hash: s,
              type: c,
              accessList: Formatter.allowNull(this.accessList.bind(this), null),
              blockHash: Formatter.allowNull(s, null),
              blockNumber: Formatter.allowNull(l, null),
              transactionIndex: Formatter.allowNull(l, null),
              confirmations: Formatter.allowNull(l, null),
              from: r,
              gasPrice: Formatter.allowNull(t),
              maxPriorityFeePerGas: Formatter.allowNull(t),
              maxFeePerGas: Formatter.allowNull(t),
              gasLimit: t,
              to: Formatter.allowNull(r, null),
              value: t,
              nonce: l,
              data: n,
              r: Formatter.allowNull(this.uint256),
              s: Formatter.allowNull(this.uint256),
              v: Formatter.allowNull(l),
              creates: Formatter.allowNull(r, null),
              raw: Formatter.allowNull(n),
            }),
            (e.transactionRequest = {
              from: Formatter.allowNull(r),
              nonce: Formatter.allowNull(l),
              gasLimit: Formatter.allowNull(t),
              gasPrice: Formatter.allowNull(t),
              maxPriorityFeePerGas: Formatter.allowNull(t),
              maxFeePerGas: Formatter.allowNull(t),
              to: Formatter.allowNull(r),
              value: Formatter.allowNull(t),
              data: Formatter.allowNull(u),
              type: Formatter.allowNull(l),
              accessList: Formatter.allowNull(this.accessList.bind(this), null),
            }),
            (e.receiptLog = {
              transactionIndex: l,
              blockNumber: l,
              transactionHash: s,
              address: r,
              topics: Formatter.arrayOf(s),
              data: n,
              logIndex: l,
              blockHash: s,
            }),
            (e.receipt = {
              to: Formatter.allowNull(this.address, null),
              from: Formatter.allowNull(this.address, null),
              contractAddress: Formatter.allowNull(r, null),
              transactionIndex: l,
              root: Formatter.allowNull(i),
              gasUsed: t,
              logsBloom: Formatter.allowNull(n),
              blockHash: s,
              transactionHash: s,
              logs: Formatter.arrayOf(this.receiptLog.bind(this)),
              blockNumber: l,
              confirmations: Formatter.allowNull(l, null),
              cumulativeGasUsed: t,
              effectiveGasPrice: Formatter.allowNull(t),
              status: Formatter.allowNull(l),
              type: c,
            }),
            (e.block = {
              hash: Formatter.allowNull(s),
              parentHash: s,
              number: l,
              timestamp: l,
              nonce: Formatter.allowNull(i),
              difficulty: this.difficulty.bind(this),
              gasLimit: t,
              gasUsed: t,
              miner: Formatter.allowNull(r),
              extraData: n,
              transactions: Formatter.allowNull(Formatter.arrayOf(s)),
              baseFeePerGas: Formatter.allowNull(t),
            }),
            (e.blockWithTransactions = (0, a.shallowCopy)(e.block)),
            (e.blockWithTransactions.transactions = Formatter.allowNull(
              Formatter.arrayOf(this.transactionResponse.bind(this)),
            )),
            (e.filter = {
              fromBlock: Formatter.allowNull(o, void 0),
              toBlock: Formatter.allowNull(o, void 0),
              blockHash: Formatter.allowNull(s, void 0),
              address: Formatter.allowNull(r, void 0),
              topics: Formatter.allowNull(this.topics.bind(this), void 0),
            }),
            (e.filterLog = {
              blockNumber: Formatter.allowNull(l),
              blockHash: Formatter.allowNull(s),
              transactionIndex: l,
              removed: Formatter.allowNull(this.boolean.bind(this)),
              address: r,
              data: Formatter.allowFalsish(n, "0x"),
              topics: Formatter.arrayOf(s),
              transactionHash: s,
              logIndex: l,
            }),
            e
          );
        }
        accessList(e) {
          return (0, l.accessListify)(e || []);
        }
        number(e) {
          return "0x" === e ? 0 : n.BigNumber.from(e).toNumber();
        }
        type(e) {
          return "0x" === e || null == e ? 0 : n.BigNumber.from(e).toNumber();
        }
        bigNumber(e) {
          return n.BigNumber.from(e);
        }
        boolean(e) {
          if ("boolean" === typeof e) return e;
          if ("string" === typeof e) {
            if (((e = e.toLowerCase()), "true" === e)) return !0;
            if ("false" === e) return !1;
          }
          throw new Error("invalid boolean - " + e);
        }
        hex(e, r) {
          return "string" === typeof e &&
            (r || "0x" === e.substring(0, 2) || (e = "0x" + e),
            (0, s.isHexString)(e))
            ? e.toLowerCase()
            : h.throwArgumentError("invalid hash", "value", e);
        }
        data(e, r) {
          const t = this.hex(e, r);
          if (t.length % 2 !== 0)
            throw new Error("invalid data; odd-length - " + e);
          return t;
        }
        address(e) {
          return (0, o.getAddress)(e);
        }
        callAddress(e) {
          if (!(0, s.isHexString)(e, 32)) return null;
          const r = (0, o.getAddress)((0, s.hexDataSlice)(e, 12));
          return r === i.AddressZero ? null : r;
        }
        contractAddress(e) {
          return (0, o.getContractAddress)(e);
        }
        blockTag(e) {
          if (null == e) return "latest";
          if ("earliest" === e) return "0x0";
          switch (e) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return e;
          }
          if ("number" === typeof e || (0, s.isHexString)(e))
            return (0, s.hexValue)(e);
          throw new Error("invalid blockTag");
        }
        hash(e, r) {
          const t = this.hex(e, r);
          return 32 !== (0, s.hexDataLength)(t)
            ? h.throwArgumentError("invalid hash", "value", e)
            : t;
        }
        difficulty(e) {
          if (null == e) return null;
          const r = n.BigNumber.from(e);
          try {
            return r.toNumber();
          } catch (t) {}
          return null;
        }
        uint256(e) {
          if (!(0, s.isHexString)(e)) throw new Error("invalid uint256");
          return (0, s.hexZeroPad)(e, 32);
        }
        _block(e, r) {
          null != e.author && null == e.miner && (e.miner = e.author);
          const t = null != e._difficulty ? e._difficulty : e.difficulty,
            o = Formatter.check(r, e);
          return ((o._difficulty = null == t ? null : n.BigNumber.from(t)), o);
        }
        block(e) {
          return this._block(e, this.formats.block);
        }
        blockWithTransactions(e) {
          return this._block(e, this.formats.blockWithTransactions);
        }
        transactionRequest(e) {
          return Formatter.check(this.formats.transactionRequest, e);
        }
        transactionResponse(e) {
          (null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas),
            e.to &&
              n.BigNumber.from(e.to).isZero() &&
              (e.to = "0x0000000000000000000000000000000000000000"),
            null != e.input && null == e.data && (e.data = e.input),
            null == e.to &&
              null == e.creates &&
              (e.creates = this.contractAddress(e)),
            (1 !== e.type && 2 !== e.type) ||
              null != e.accessList ||
              (e.accessList = []));
          const r = Formatter.check(this.formats.transaction, e);
          if (null != e.chainId) {
            let t = e.chainId;
            ((0, s.isHexString)(t) && (t = n.BigNumber.from(t).toNumber()),
              (r.chainId = t));
          } else {
            let t = e.networkId;
            (null == t && null == r.v && (t = e.chainId),
              (0, s.isHexString)(t) && (t = n.BigNumber.from(t).toNumber()),
              "number" !== typeof t &&
                null != r.v &&
                ((t = (r.v - 35) / 2), t < 0 && (t = 0), (t = parseInt(t))),
              "number" !== typeof t && (t = 0),
              (r.chainId = t));
          }
          return (
            r.blockHash &&
              "x" === r.blockHash.replace(/0/g, "") &&
              (r.blockHash = null),
            r
          );
        }
        transaction(e) {
          return (0, l.parse)(e);
        }
        receiptLog(e) {
          return Formatter.check(this.formats.receiptLog, e);
        }
        receipt(e) {
          const r = Formatter.check(this.formats.receipt, e);
          if (null != r.root)
            if (r.root.length <= 4) {
              const e = n.BigNumber.from(r.root).toNumber();
              0 === e || 1 === e
                ? (null != r.status &&
                    r.status !== e &&
                    h.throwArgumentError(
                      "alt-root-status/status mismatch",
                      "value",
                      { root: r.root, status: r.status },
                    ),
                  (r.status = e),
                  delete r.root)
                : h.throwArgumentError(
                    "invalid alt-root-status",
                    "value.root",
                    r.root,
                  );
            } else
              66 !== r.root.length &&
                h.throwArgumentError("invalid root hash", "value.root", r.root);
          return (null != r.status && (r.byzantium = !0), r);
        }
        topics(e) {
          return Array.isArray(e)
            ? e.map((e) => this.topics(e))
            : null != e
              ? this.hash(e, !0)
              : null;
        }
        filter(e) {
          return Formatter.check(this.formats.filter, e);
        }
        filterLog(e) {
          return Formatter.check(this.formats.filterLog, e);
        }
        static check(e, r) {
          const t = {};
          for (const n in e)
            try {
              const o = e[n](r[n]);
              void 0 !== o && (t[n] = o);
            } catch (o) {
              throw ((o.checkKey = n), (o.checkValue = r[n]), o);
            }
          return t;
        }
        static allowNull(e, r) {
          return function (t) {
            return null == t ? r : e(t);
          };
        }
        static allowFalsish(e, r) {
          return function (t) {
            return t ? e(t) : r;
          };
        }
        static arrayOf(e) {
          return function (r) {
            if (!Array.isArray(r)) throw new Error("not an array");
            const t = [];
            return (
              r.forEach(function (r) {
                t.push(e(r));
              }),
              t
            );
          };
        }
      }
      function d(e) {
        return e && "function" === typeof e.isCommunityResource;
      }
      function g(e) {
        return d(e) && e.isCommunityResource();
      }
      r.Formatter = Formatter;
      let f = !1;
      function m() {
        f ||
          ((f = !0),
          console.log("========= NOTICE ========="),
          console.log(
            "Request-Rate Exceeded  (this message will not be repeated)",
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,",
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping.",
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended",
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your",
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs.",
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.io/api-keys/"),
          console.log("=========================="));
      }
    },
    92: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.UrlJsonRpcProvider = r.StaticJsonRpcProvider = void 0));
      var o = t(38),
        n = t(17),
        s = t(44),
        i = t(140),
        a = function (e, r, t, o) {
          function n(e) {
            return e instanceof t
              ? e
              : new t(function (r) {
                  r(e);
                });
          }
          return new (t || (t = Promise))(function (t, s) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (r) {
                s(r);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (r) {
                s(r);
              }
            }
            function l(e) {
              e.done ? t(e.value) : n(e.value).then(i, a);
            }
            l((o = o.apply(e, r || [])).next());
          });
        };
      const l = new n.Logger(s.version);
      class StaticJsonRpcProvider extends i.JsonRpcProvider {
        detectNetwork() {
          const e = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork },
          });
          return a(this, void 0, void 0, function* () {
            let r = this.network;
            return (
              null == r &&
                ((r = yield e.detectNetwork.call(this)),
                r ||
                  l.throwError(
                    "no network detected",
                    n.Logger.errors.UNKNOWN_ERROR,
                    {},
                  ),
                null == this._network &&
                  ((0, o.defineReadOnly)(this, "_network", r),
                  this.emit("network", r, null))),
              r
            );
          });
        }
      }
      r.StaticJsonRpcProvider = StaticJsonRpcProvider;
      class UrlJsonRpcProvider extends StaticJsonRpcProvider {
        constructor(e, r) {
          (l.checkAbstract(new.target, UrlJsonRpcProvider),
            (e = (0, o.getStatic)(new.target, "getNetwork")(e)),
            (r = (0, o.getStatic)(new.target, "getApiKey")(r)));
          const t = (0, o.getStatic)(new.target, "getUrl")(e, r);
          (super(t, e),
            "string" === typeof r
              ? (0, o.defineReadOnly)(this, "apiKey", r)
              : null != r &&
                Object.keys(r).forEach((e) => {
                  (0, o.defineReadOnly)(this, e, r[e]);
                }));
        }
        _startPending() {
          l.warn("WARNING: API provider does not support pending filters");
        }
        isCommunityResource() {
          return !1;
        }
        getSigner(e) {
          return l.throwError(
            "API provider does not support signing",
            n.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "getSigner" },
          );
        }
        listAccounts() {
          return Promise.resolve([]);
        }
        static getApiKey(e) {
          return e;
        }
        static getUrl(e, r) {
          return l.throwError(
            "not implemented; sub-classes must override getUrl",
            n.Logger.errors.NOT_IMPLEMENTED,
            { operation: "getUrl" },
          );
        }
      }
      r.UrlJsonRpcProvider = UrlJsonRpcProvider;
    },
  },
]);
