(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [215],
  {
    11373: function (e, t) {},
    11402: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ContractFactory = t.Contract = t.BaseContract = void 0));
      var n = r(3645),
        i = r(4590),
        s = r(4874),
        o = r(2976),
        a = r(2829),
        c = r(2776),
        l = r(2808),
        u = r(3271),
        d = r(2773),
        h = r(11405),
        f = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, s) {
            function o(e) {
              try {
                c(n.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(n["throw"](e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : i(e.value).then(o, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const p = new d.Logger(h.version),
        g = {
          chainId: !0,
          data: !0,
          from: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          value: !0,
          type: !0,
          accessList: !0,
          maxFeePerGas: !0,
          maxPriorityFeePerGas: !0,
          customData: !0,
          ccipReadEnabled: !0,
        };
      function m(e, t) {
        return f(this, void 0, void 0, function* () {
          const r = yield t;
          "string" !== typeof r &&
            p.throwArgumentError("invalid address or ENS name", "name", r);
          try {
            return (0, o.getAddress)(r);
          } catch (i) {}
          e ||
            p.throwError(
              "a provider or signer is needed to resolve ENS names",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "resolveName" },
            );
          const n = yield e.resolveName(r);
          return (
            null == n &&
              p.throwArgumentError(
                "resolver or addr is not configured for ENS name",
                "name",
                r,
              ),
            n
          );
        });
      }
      function y(e, t, r) {
        return f(this, void 0, void 0, function* () {
          return Array.isArray(r)
            ? yield Promise.all(
                r.map((r, n) => y(e, Array.isArray(t) ? t[n] : t[r.name], r)),
              )
            : "address" === r.type
              ? yield m(e, t)
              : "tuple" === r.type
                ? yield y(e, t, r.components)
                : "array" === r.baseType
                  ? Array.isArray(t)
                    ? yield Promise.all(t.map((t) => y(e, t, r.arrayChildren)))
                    : Promise.reject(
                        p.makeError(
                          "invalid value for array",
                          d.Logger.errors.INVALID_ARGUMENT,
                          { argument: "value", value: t },
                        ),
                      )
                  : t;
        });
      }
      function v(e, t, r) {
        return f(this, void 0, void 0, function* () {
          let n = {};
          (r.length === t.inputs.length + 1 &&
            "object" === typeof r[r.length - 1] &&
            (n = (0, l.shallowCopy)(r.pop())),
            p.checkArgumentCount(
              r.length,
              t.inputs.length,
              "passed to contract",
            ),
            e.signer
              ? n.from
                ? (n.from = (0, l.resolveProperties)({
                    override: m(e.signer, n.from),
                    signer: e.signer.getAddress(),
                  }).then((e) =>
                    f(this, void 0, void 0, function* () {
                      return (
                        (0, o.getAddress)(e.signer) !== e.override &&
                          p.throwError(
                            "Contract with a Signer cannot override from",
                            d.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "overrides.from" },
                          ),
                        e.override
                      );
                    }),
                  ))
                : (n.from = e.signer.getAddress())
              : n.from && (n.from = m(e.provider, n.from)));
          const i = yield (0, l.resolveProperties)({
              args: y(e.signer || e.provider, r, t.inputs),
              address: e.resolvedAddress,
              overrides: (0, l.resolveProperties)(n) || {},
            }),
            s = e.interface.encodeFunctionData(t, i.args),
            h = { data: s, to: i.address },
            g = i.overrides;
          if (
            (null != g.nonce &&
              (h.nonce = a.BigNumber.from(g.nonce).toNumber()),
            null != g.gasLimit && (h.gasLimit = a.BigNumber.from(g.gasLimit)),
            null != g.gasPrice && (h.gasPrice = a.BigNumber.from(g.gasPrice)),
            null != g.maxFeePerGas &&
              (h.maxFeePerGas = a.BigNumber.from(g.maxFeePerGas)),
            null != g.maxPriorityFeePerGas &&
              (h.maxPriorityFeePerGas = a.BigNumber.from(
                g.maxPriorityFeePerGas,
              )),
            null != g.from && (h.from = g.from),
            null != g.type && (h.type = g.type),
            null != g.accessList &&
              (h.accessList = (0, u.accessListify)(g.accessList)),
            null == h.gasLimit && null != t.gas)
          ) {
            let e = 21e3;
            const r = (0, c.arrayify)(s);
            for (let t = 0; t < r.length; t++) ((e += 4), r[t] && (e += 64));
            h.gasLimit = a.BigNumber.from(t.gas).add(e);
          }
          if (g.value) {
            const e = a.BigNumber.from(g.value);
            (e.isZero() ||
              t.payable ||
              p.throwError(
                "non-payable method cannot override value",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: n.value },
              ),
              (h.value = e));
          }
          (g.customData && (h.customData = (0, l.shallowCopy)(g.customData)),
            g.ccipReadEnabled && (h.ccipReadEnabled = !!g.ccipReadEnabled),
            delete n.nonce,
            delete n.gasLimit,
            delete n.gasPrice,
            delete n.from,
            delete n.value,
            delete n.type,
            delete n.accessList,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas,
            delete n.customData,
            delete n.ccipReadEnabled);
          const v = Object.keys(n).filter((e) => null != n[e]);
          return (
            v.length &&
              p.throwError(
                "cannot override " + v.map((e) => JSON.stringify(e)).join(","),
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides", overrides: v },
              ),
            h
          );
        });
      }
      function b(e, t) {
        return function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return v(e, t, n);
        };
      }
      function w(e, t) {
        const r = e.signer || e.provider;
        return function () {
          for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
            i[s] = arguments[s];
          return f(this, void 0, void 0, function* () {
            r ||
              p.throwError(
                "estimate require a provider or signer",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "estimateGas" },
              );
            const n = yield v(e, t, i);
            return yield r.estimateGas(n);
          });
        };
      }
      function E(e, t) {
        const r = t.wait.bind(t);
        t.wait = (t) =>
          r(t).then(
            (t) => (
              (t.events = t.logs.map((r) => {
                let n = (0, l.deepCopy)(r),
                  i = null;
                try {
                  i = e.interface.parseLog(r);
                } catch (s) {}
                return (
                  i &&
                    ((n.args = i.args),
                    (n.decode = (t, r) =>
                      e.interface.decodeEventLog(i.eventFragment, t, r)),
                    (n.event = i.name),
                    (n.eventSignature = i.signature)),
                  (n.removeListener = () => e.provider),
                  (n.getBlock = () => e.provider.getBlock(t.blockHash)),
                  (n.getTransaction = () =>
                    e.provider.getTransaction(t.transactionHash)),
                  (n.getTransactionReceipt = () => Promise.resolve(t)),
                  n
                );
              })),
              t
            ),
          );
      }
      function P(e, t, r) {
        const n = e.signer || e.provider;
        return function () {
          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
          return f(this, void 0, void 0, function* () {
            let i = void 0;
            if (
              s.length === t.inputs.length + 1 &&
              "object" === typeof s[s.length - 1]
            ) {
              const e = (0, l.shallowCopy)(s.pop());
              (null != e.blockTag && (i = yield e.blockTag),
                delete e.blockTag,
                s.push(e));
            }
            null != e.deployTransaction && (yield e._deployed(i));
            const o = yield v(e, t, s),
              a = yield n.call(o, i);
            try {
              let n = e.interface.decodeFunctionResult(t, a);
              return (r && 1 === t.outputs.length && (n = n[0]), n);
            } catch (c) {
              throw (
                c.code === d.Logger.errors.CALL_EXCEPTION &&
                  ((c.address = e.address), (c.args = s), (c.transaction = o)),
                c
              );
            }
          });
        };
      }
      function _(e, t) {
        return function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return f(this, void 0, void 0, function* () {
            (e.signer ||
              p.throwError(
                "sending a transaction requires a signer",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "sendTransaction" },
              ),
              null != e.deployTransaction && (yield e._deployed()));
            const r = yield v(e, t, n),
              i = yield e.signer.sendTransaction(r);
            return (E(e, i), i);
          });
        };
      }
      function O(e, t, r) {
        return t.constant ? P(e, t, r) : _(e, t);
      }
      function A(e) {
        return !e.address || (null != e.topics && 0 !== e.topics.length)
          ? (e.address || "*") +
              "@" +
              (e.topics
                ? e.topics
                    .map((e) => (Array.isArray(e) ? e.join("|") : e))
                    .join(":")
                : "")
          : "*";
      }
      class RunningEvent {
        constructor(e, t) {
          ((0, l.defineReadOnly)(this, "tag", e),
            (0, l.defineReadOnly)(this, "filter", t),
            (this._listeners = []));
        }
        addListener(e, t) {
          this._listeners.push({ listener: e, once: t });
        }
        removeListener(e) {
          let t = !1;
          this._listeners = this._listeners.filter(
            (r) => !(!t && r.listener === e) || ((t = !0), !1),
          );
        }
        removeAllListeners() {
          this._listeners = [];
        }
        listeners() {
          return this._listeners.map((e) => e.listener);
        }
        listenerCount() {
          return this._listeners.length;
        }
        run(e) {
          const t = this.listenerCount();
          return (
            (this._listeners = this._listeners.filter((t) => {
              const r = e.slice();
              return (
                setTimeout(() => {
                  t.listener.apply(this, r);
                }, 0),
                !t.once
              );
            })),
            t
          );
        }
        prepareEvent(e) {}
        getEmit(e) {
          return [e];
        }
      }
      class ErrorRunningEvent extends RunningEvent {
        constructor() {
          super("error", null);
        }
      }
      class FragmentRunningEvent extends RunningEvent {
        constructor(e, t, r, n) {
          const i = { address: e };
          let s = t.getEventTopic(r);
          (n
            ? (s !== n[0] &&
                p.throwArgumentError("topic mismatch", "topics", n),
              (i.topics = n.slice()))
            : (i.topics = [s]),
            super(A(i), i),
            (0, l.defineReadOnly)(this, "address", e),
            (0, l.defineReadOnly)(this, "interface", t),
            (0, l.defineReadOnly)(this, "fragment", r));
        }
        prepareEvent(e) {
          (super.prepareEvent(e),
            (e.event = this.fragment.name),
            (e.eventSignature = this.fragment.format()),
            (e.decode = (e, t) =>
              this.interface.decodeEventLog(this.fragment, e, t)));
          try {
            e.args = this.interface.decodeEventLog(
              this.fragment,
              e.data,
              e.topics,
            );
          } catch (t) {
            ((e.args = null), (e.decodeError = t));
          }
        }
        getEmit(e) {
          const t = (0, n.checkResultErrors)(e.args);
          if (t.length) throw t[0].error;
          const r = (e.args || []).slice();
          return (r.push(e), r);
        }
      }
      class WildcardRunningEvent extends RunningEvent {
        constructor(e, t) {
          (super("*", { address: e }),
            (0, l.defineReadOnly)(this, "address", e),
            (0, l.defineReadOnly)(this, "interface", t));
        }
        prepareEvent(e) {
          super.prepareEvent(e);
          try {
            const t = this.interface.parseLog(e);
            ((e.event = t.name),
              (e.eventSignature = t.signature),
              (e.decode = (e, r) =>
                this.interface.decodeEventLog(t.eventFragment, e, r)),
              (e.args = t.args));
          } catch (t) {}
        }
      }
      class BaseContract {
        constructor(e, t, r) {
          var n = this;
          ((0, l.defineReadOnly)(
            this,
            "interface",
            (0, l.getStatic)(new.target, "getInterface")(t),
          ),
            null == r
              ? ((0, l.defineReadOnly)(this, "provider", null),
                (0, l.defineReadOnly)(this, "signer", null))
              : s.Signer.isSigner(r)
                ? ((0, l.defineReadOnly)(this, "provider", r.provider || null),
                  (0, l.defineReadOnly)(this, "signer", r))
                : i.Provider.isProvider(r)
                  ? ((0, l.defineReadOnly)(this, "provider", r),
                    (0, l.defineReadOnly)(this, "signer", null))
                  : p.throwArgumentError(
                      "invalid signer or provider",
                      "signerOrProvider",
                      r,
                    ),
            (0, l.defineReadOnly)(this, "callStatic", {}),
            (0, l.defineReadOnly)(this, "estimateGas", {}),
            (0, l.defineReadOnly)(this, "functions", {}),
            (0, l.defineReadOnly)(this, "populateTransaction", {}),
            (0, l.defineReadOnly)(this, "filters", {}));
          {
            const e = {};
            (Object.keys(this.interface.events).forEach((t) => {
              const r = this.interface.events[t];
              ((0, l.defineReadOnly)(this.filters, t, function () {
                for (
                  var e = arguments.length, t = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  t[i] = arguments[i];
                return {
                  address: n.address,
                  topics: n.interface.encodeFilterTopics(r, t),
                };
              }),
                e[r.name] || (e[r.name] = []),
                e[r.name].push(t));
            }),
              Object.keys(e).forEach((t) => {
                const r = e[t];
                1 === r.length
                  ? (0, l.defineReadOnly)(this.filters, t, this.filters[r[0]])
                  : p.warn(`Duplicate definition of ${t} (${r.join(", ")})`);
              }));
          }
          if (
            ((0, l.defineReadOnly)(this, "_runningEvents", {}),
            (0, l.defineReadOnly)(this, "_wrappedEmits", {}),
            null == e &&
              p.throwArgumentError(
                "invalid contract address or ENS name",
                "addressOrName",
                e,
              ),
            (0, l.defineReadOnly)(this, "address", e),
            this.provider)
          )
            (0, l.defineReadOnly)(this, "resolvedAddress", m(this.provider, e));
          else
            try {
              (0, l.defineReadOnly)(
                this,
                "resolvedAddress",
                Promise.resolve((0, o.getAddress)(e)),
              );
            } catch (u) {
              p.throwError(
                "provider is required to use ENS name as contract address",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "new Contract" },
              );
            }
          this.resolvedAddress.catch((e) => {});
          const a = {},
            c = {};
          (Object.keys(this.interface.functions).forEach((e) => {
            const t = this.interface.functions[e];
            if (c[e]) p.warn("Duplicate ABI entry for " + JSON.stringify(e));
            else {
              c[e] = !0;
              {
                const r = t.name;
                (a["%" + r] || (a["%" + r] = []), a["%" + r].push(e));
              }
              (null == this[e] &&
                (0, l.defineReadOnly)(this, e, O(this, t, !0)),
                null == this.functions[e] &&
                  (0, l.defineReadOnly)(this.functions, e, O(this, t, !1)),
                null == this.callStatic[e] &&
                  (0, l.defineReadOnly)(this.callStatic, e, P(this, t, !0)),
                null == this.populateTransaction[e] &&
                  (0, l.defineReadOnly)(
                    this.populateTransaction,
                    e,
                    b(this, t),
                  ),
                null == this.estimateGas[e] &&
                  (0, l.defineReadOnly)(this.estimateGas, e, w(this, t)));
            }
          }),
            Object.keys(a).forEach((e) => {
              const t = a[e];
              if (t.length > 1) return;
              e = e.substring(1);
              const r = t[0];
              try {
                null == this[e] && (0, l.defineReadOnly)(this, e, this[r]);
              } catch (n) {}
              (null == this.functions[e] &&
                (0, l.defineReadOnly)(this.functions, e, this.functions[r]),
                null == this.callStatic[e] &&
                  (0, l.defineReadOnly)(this.callStatic, e, this.callStatic[r]),
                null == this.populateTransaction[e] &&
                  (0, l.defineReadOnly)(
                    this.populateTransaction,
                    e,
                    this.populateTransaction[r],
                  ),
                null == this.estimateGas[e] &&
                  (0, l.defineReadOnly)(
                    this.estimateGas,
                    e,
                    this.estimateGas[r],
                  ));
            }));
        }
        static getContractAddress(e) {
          return (0, o.getContractAddress)(e);
        }
        static getInterface(e) {
          return n.Interface.isInterface(e) ? e : new n.Interface(e);
        }
        deployed() {
          return this._deployed();
        }
        _deployed(e) {
          return (
            this._deployedPromise ||
              (this.deployTransaction
                ? (this._deployedPromise = this.deployTransaction
                    .wait()
                    .then(() => this))
                : (this._deployedPromise = this.provider
                    .getCode(this.address, e)
                    .then(
                      (e) => (
                        "0x" === e &&
                          p.throwError(
                            "contract not deployed",
                            d.Logger.errors.UNSUPPORTED_OPERATION,
                            {
                              contractAddress: this.address,
                              operation: "getDeployed",
                            },
                          ),
                        this
                      ),
                    ))),
            this._deployedPromise
          );
        }
        fallback(e) {
          this.signer ||
            p.throwError(
              "sending a transactions require a signer",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "sendTransaction(fallback)" },
            );
          const t = (0, l.shallowCopy)(e || {});
          return (
            ["from", "to"].forEach(function (e) {
              null != t[e] &&
                p.throwError(
                  "cannot override " + e,
                  d.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: e },
                );
            }),
            (t.to = this.resolvedAddress),
            this.deployed().then(() => this.signer.sendTransaction(t))
          );
        }
        connect(e) {
          "string" === typeof e && (e = new s.VoidSigner(e, this.provider));
          const t = new this.constructor(this.address, this.interface, e);
          return (
            this.deployTransaction &&
              (0, l.defineReadOnly)(
                t,
                "deployTransaction",
                this.deployTransaction,
              ),
            t
          );
        }
        attach(e) {
          return new this.constructor(
            e,
            this.interface,
            this.signer || this.provider,
          );
        }
        static isIndexed(e) {
          return n.Indexed.isIndexed(e);
        }
        _normalizeRunningEvent(e) {
          return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
        }
        _getRunningEvent(e) {
          if ("string" === typeof e) {
            if ("error" === e)
              return this._normalizeRunningEvent(new ErrorRunningEvent());
            if ("event" === e)
              return this._normalizeRunningEvent(
                new RunningEvent("event", null),
              );
            if ("*" === e)
              return this._normalizeRunningEvent(
                new WildcardRunningEvent(this.address, this.interface),
              );
            const t = this.interface.getEvent(e);
            return this._normalizeRunningEvent(
              new FragmentRunningEvent(this.address, this.interface, t),
            );
          }
          if (e.topics && e.topics.length > 0) {
            try {
              const t = e.topics[0];
              if ("string" !== typeof t) throw new Error("invalid topic");
              const r = this.interface.getEvent(t);
              return this._normalizeRunningEvent(
                new FragmentRunningEvent(
                  this.address,
                  this.interface,
                  r,
                  e.topics,
                ),
              );
            } catch (t) {}
            const r = { address: this.address, topics: e.topics };
            return this._normalizeRunningEvent(new RunningEvent(A(r), r));
          }
          return this._normalizeRunningEvent(
            new WildcardRunningEvent(this.address, this.interface),
          );
        }
        _checkRunningEvents(e) {
          if (0 === e.listenerCount()) {
            delete this._runningEvents[e.tag];
            const t = this._wrappedEmits[e.tag];
            t &&
              e.filter &&
              (this.provider.off(e.filter, t),
              delete this._wrappedEmits[e.tag]);
          }
        }
        _wrapEvent(e, t, r) {
          const n = (0, l.deepCopy)(t);
          return (
            (n.removeListener = () => {
              r && (e.removeListener(r), this._checkRunningEvents(e));
            }),
            (n.getBlock = () => this.provider.getBlock(t.blockHash)),
            (n.getTransaction = () =>
              this.provider.getTransaction(t.transactionHash)),
            (n.getTransactionReceipt = () =>
              this.provider.getTransactionReceipt(t.transactionHash)),
            e.prepareEvent(n),
            n
          );
        }
        _addEventListener(e, t, r) {
          if (
            (this.provider ||
              p.throwError(
                "events require a provider or a signer with a provider",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "once" },
              ),
            e.addListener(t, r),
            (this._runningEvents[e.tag] = e),
            !this._wrappedEmits[e.tag])
          ) {
            const r = (r) => {
              let n = this._wrapEvent(e, r, t);
              if (null == n.decodeError)
                try {
                  const t = e.getEmit(n);
                  this.emit(e.filter, ...t);
                } catch (i) {
                  n.decodeError = i.error;
                }
              (null != e.filter && this.emit("event", n),
                null != n.decodeError && this.emit("error", n.decodeError, n));
            };
            ((this._wrappedEmits[e.tag] = r),
              null != e.filter && this.provider.on(e.filter, r));
          }
        }
        queryFilter(e, t, r) {
          const n = this._getRunningEvent(e),
            i = (0, l.shallowCopy)(n.filter);
          return (
            "string" === typeof t && (0, c.isHexString)(t, 32)
              ? (null != r &&
                  p.throwArgumentError(
                    "cannot specify toBlock with blockhash",
                    "toBlock",
                    r,
                  ),
                (i.blockHash = t))
              : ((i.fromBlock = null != t ? t : 0),
                (i.toBlock = null != r ? r : "latest")),
            this.provider
              .getLogs(i)
              .then((e) => e.map((e) => this._wrapEvent(n, e, null)))
          );
        }
        on(e, t) {
          return (
            this._addEventListener(this._getRunningEvent(e), t, !1),
            this
          );
        }
        once(e, t) {
          return (
            this._addEventListener(this._getRunningEvent(e), t, !0),
            this
          );
        }
        emit(e) {
          if (!this.provider) return !1;
          const t = this._getRunningEvent(e);
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          const s = t.run(n) > 0;
          return (this._checkRunningEvents(t), s);
        }
        listenerCount(e) {
          return this.provider
            ? null == e
              ? Object.keys(this._runningEvents).reduce(
                  (e, t) => e + this._runningEvents[t].listenerCount(),
                  0,
                )
              : this._getRunningEvent(e).listenerCount()
            : 0;
        }
        listeners(e) {
          if (!this.provider) return [];
          if (null == e) {
            const e = [];
            for (let t in this._runningEvents)
              this._runningEvents[t].listeners().forEach((t) => {
                e.push(t);
              });
            return e;
          }
          return this._getRunningEvent(e).listeners();
        }
        removeAllListeners(e) {
          if (!this.provider) return this;
          if (null == e) {
            for (const e in this._runningEvents) {
              const t = this._runningEvents[e];
              (t.removeAllListeners(), this._checkRunningEvents(t));
            }
            return this;
          }
          const t = this._getRunningEvent(e);
          return (t.removeAllListeners(), this._checkRunningEvents(t), this);
        }
        off(e, t) {
          if (!this.provider) return this;
          const r = this._getRunningEvent(e);
          return (r.removeListener(t), this._checkRunningEvents(r), this);
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
      }
      t.BaseContract = BaseContract;
      class Contract extends BaseContract {}
      t.Contract = Contract;
      class ContractFactory {
        constructor(e, t, r) {
          let n = null;
          ((n =
            "string" === typeof t
              ? t
              : (0, c.isBytes)(t)
                ? (0, c.hexlify)(t)
                : t && "string" === typeof t.object
                  ? t.object
                  : "!"),
            "0x" !== n.substring(0, 2) && (n = "0x" + n),
            (!(0, c.isHexString)(n) || n.length % 2) &&
              p.throwArgumentError("invalid bytecode", "bytecode", t),
            r &&
              !s.Signer.isSigner(r) &&
              p.throwArgumentError("invalid signer", "signer", r),
            (0, l.defineReadOnly)(this, "bytecode", n),
            (0, l.defineReadOnly)(
              this,
              "interface",
              (0, l.getStatic)(new.target, "getInterface")(e),
            ),
            (0, l.defineReadOnly)(this, "signer", r || null));
        }
        getDeployTransaction() {
          let e = {};
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          if (
            r.length === this.interface.deploy.inputs.length + 1 &&
            "object" === typeof r[r.length - 1]
          ) {
            e = (0, l.shallowCopy)(r.pop());
            for (const t in e)
              if (!g[t]) throw new Error("unknown transaction override " + t);
          }
          if (
            (["data", "from", "to"].forEach((t) => {
              null != e[t] &&
                p.throwError(
                  "cannot override " + t,
                  d.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: t },
                );
            }),
            e.value)
          ) {
            const t = a.BigNumber.from(e.value);
            t.isZero() ||
              this.interface.deploy.payable ||
              p.throwError(
                "non-payable constructor cannot override value",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: e.value },
              );
          }
          return (
            p.checkArgumentCount(
              r.length,
              this.interface.deploy.inputs.length,
              " in Contract constructor",
            ),
            (e.data = (0, c.hexlify)(
              (0, c.concat)([this.bytecode, this.interface.encodeDeploy(r)]),
            )),
            e
          );
        }
        deploy() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return f(this, void 0, void 0, function* () {
            let e = {};
            (t.length === this.interface.deploy.inputs.length + 1 &&
              (e = t.pop()),
              p.checkArgumentCount(
                t.length,
                this.interface.deploy.inputs.length,
                " in Contract constructor",
              ));
            const r = yield y(this.signer, t, this.interface.deploy.inputs);
            r.push(e);
            const n = this.getDeployTransaction(...r),
              i = yield this.signer.sendTransaction(n),
              s = (0, l.getStatic)(this.constructor, "getContractAddress")(i),
              o = (0, l.getStatic)(this.constructor, "getContract")(
                s,
                this.interface,
                this.signer,
              );
            return (
              E(o, i),
              (0, l.defineReadOnly)(o, "deployTransaction", i),
              o
            );
          });
        }
        attach(e) {
          return this.constructor.getContract(e, this.interface, this.signer);
        }
        connect(e) {
          return new this.constructor(this.interface, this.bytecode, e);
        }
        static fromSolidity(e, t) {
          (null == e &&
            p.throwError(
              "missing compiler output",
              d.Logger.errors.MISSING_ARGUMENT,
              { argument: "compilerOutput" },
            ),
            "string" === typeof e && (e = JSON.parse(e)));
          const r = e.abi;
          let n = null;
          return (
            e.bytecode
              ? (n = e.bytecode)
              : e.evm && e.evm.bytecode && (n = e.evm.bytecode),
            new this(r, n, t)
          );
        }
        static getInterface(e) {
          return Contract.getInterface(e);
        }
        static getContractAddress(e) {
          return (0, o.getContractAddress)(e);
        }
        static getContract(e, t, r) {
          return new Contract(e, t, r);
        }
      }
      t.ContractFactory = ContractFactory;
    },
    11403: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abstract-provider/5.8.0";
    },
    11404: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abstract-signer/5.8.0";
    },
    11405: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "contracts/5.8.0";
    },
    11406: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.pbkdf2 = s));
      var n = r(2776),
        i = r(4591);
      function s(e, t, r, s, o) {
        let a;
        ((e = (0, n.arrayify)(e)), (t = (0, n.arrayify)(t)));
        let c = 1;
        const l = new Uint8Array(s),
          u = new Uint8Array(t.length + 4);
        let d, h;
        u.set(t);
        for (let f = 1; f <= c; f++) {
          ((u[t.length] = (f >> 24) & 255),
            (u[t.length + 1] = (f >> 16) & 255),
            (u[t.length + 2] = (f >> 8) & 255),
            (u[t.length + 3] = 255 & f));
          let p = (0, n.arrayify)((0, i.computeHmac)(o, e, u));
          (a ||
            ((a = p.length),
            (h = new Uint8Array(a)),
            (c = Math.ceil(s / a)),
            (d = s - (c - 1) * a)),
            h.set(p));
          for (let t = 1; t < r; t++) {
            p = (0, n.arrayify)((0, i.computeHmac)(o, e, p));
            for (let e = 0; e < a; e++) h[e] ^= p[e];
          }
          const g = (f - 1) * a,
            m = f === c ? d : a;
          l.set((0, n.arrayify)(h).slice(0, m), g);
        }
        return (0, n.hexlify)(l);
      }
    },
    11412: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "hdnode/5.8.0";
    },
    11416: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CrowdsaleAccount = void 0),
        (t.decrypt = g));
      var i = n(r(161)),
        s = r(2976),
        o = r(2776),
        a = r(3049),
        c = r(5714),
        l = r(3016),
        u = r(2808),
        d = r(2773),
        h = r(6921),
        f = r(6922);
      const p = new d.Logger(h.version);
      class CrowdsaleAccount extends u.Description {
        isCrowdsaleAccount(e) {
          return !(!e || !e._isCrowdsaleAccount);
        }
      }
      function g(e, t) {
        const r = JSON.parse(e);
        t = (0, f.getPassword)(t);
        const n = (0, s.getAddress)((0, f.searchPath)(r, "ethaddr")),
          u = (0, f.looseArrayify)((0, f.searchPath)(r, "encseed"));
        (u && u.length % 16 === 0) ||
          p.throwArgumentError("invalid encseed", "json", e);
        const d = (0, o.arrayify)((0, c.pbkdf2)(t, t, 2e3, 32, "sha256")).slice(
            0,
            16,
          ),
          h = u.slice(0, 16),
          g = u.slice(16),
          m = new i.default.ModeOfOperation.cbc(d, h),
          y = i.default.padding.pkcs7.strip((0, o.arrayify)(m.decrypt(g)));
        let v = "";
        for (let i = 0; i < y.length; i++) v += String.fromCharCode(y[i]);
        const b = (0, l.toUtf8Bytes)(v),
          w = (0, a.keccak256)(b);
        return new CrowdsaleAccount({
          _isCrowdsaleAccount: !0,
          address: n,
          privateKey: w,
        });
      }
      t.CrowdsaleAccount = CrowdsaleAccount;
    },
    11417: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getJsonWalletAddress = o),
        (t.isCrowdsaleWallet = i),
        (t.isKeystoreWallet = s));
      var n = r(2976);
      function i(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (r) {
          return !1;
        }
        return t.encseed && t.ethaddr;
      }
      function s(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (r) {
          return !1;
        }
        return !(
          !t.version ||
          parseInt(t.version) !== t.version ||
          3 !== parseInt(t.version)
        );
      }
      function o(e) {
        if (i(e))
          try {
            return (0, n.getAddress)(JSON.parse(e).ethaddr);
          } catch (t) {
            return null;
          }
        if (s(e))
          try {
            return (0, n.getAddress)(JSON.parse(e).address);
          } catch (t) {
            return null;
          }
        return null;
      }
    },
    11418: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.KeystoreAccount = void 0),
        (t.decrypt = x),
        (t.decryptSync = A),
        (t.encrypt = C));
      var i = n(r(161)),
        s = n(r(381)),
        o = r(2976),
        a = r(2776),
        c = r(5712),
        l = r(3049),
        u = r(5714),
        d = r(4875),
        h = r(2808),
        f = r(3271),
        p = r(6922),
        g = r(2773),
        m = r(6921),
        y = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, s) {
            function o(e) {
              try {
                c(n.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(n["throw"](e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : i(e.value).then(o, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const v = new g.Logger(m.version);
      function b(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class KeystoreAccount extends h.Description {
        isKeystoreAccount(e) {
          return !(!e || !e._isKeystoreAccount);
        }
      }
      function w(e, t, r) {
        const n = (0, p.searchPath)(e, "crypto/cipher");
        if ("aes-128-ctr" === n) {
          const n = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "crypto/cipherparams/iv"),
            ),
            s = new i.default.Counter(n),
            o = new i.default.ModeOfOperation.ctr(t, s);
          return (0, a.arrayify)(o.decrypt(r));
        }
        return null;
      }
      function E(e, t) {
        const r = (0, p.looseArrayify)(
            (0, p.searchPath)(e, "crypto/ciphertext"),
          ),
          n = (0, a.hexlify)(
            (0, l.keccak256)((0, a.concat)([t.slice(16, 32), r])),
          ).substring(2);
        if (n !== (0, p.searchPath)(e, "crypto/mac").toLowerCase())
          throw new Error("invalid password");
        const s = w(e, t.slice(0, 16), r);
        s ||
          v.throwError(
            "unsupported cipher",
            g.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "decrypt" },
          );
        const u = t.slice(32, 64),
          d = (0, f.computeAddress)(s);
        if (e.address) {
          let t = e.address.toLowerCase();
          if (
            ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            (0, o.getAddress)(t) !== d)
          )
            throw new Error("address mismatch");
        }
        const h = {
          _isKeystoreAccount: !0,
          address: d,
          privateKey: (0, a.hexlify)(s),
        };
        if ("0.1" === (0, p.searchPath)(e, "x-ethers/version")) {
          const t = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "x-ethers/mnemonicCiphertext"),
            ),
            r = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "x-ethers/mnemonicCounter"),
            ),
            n = new i.default.Counter(r),
            s = new i.default.ModeOfOperation.ctr(u, n),
            o = (0, p.searchPath)(e, "x-ethers/path") || c.defaultPath,
            l = (0, p.searchPath)(e, "x-ethers/locale") || "en",
            d = (0, a.arrayify)(s.decrypt(t));
          try {
            const e = (0, c.entropyToMnemonic)(d, l),
              t = c.HDNode.fromMnemonic(e, null, l).derivePath(o);
            if (t.privateKey != h.privateKey)
              throw new Error("mnemonic mismatch");
            h.mnemonic = t.mnemonic;
          } catch (m) {
            if (
              m.code !== g.Logger.errors.INVALID_ARGUMENT ||
              "wordlist" !== m.argument
            )
              throw m;
          }
        }
        return new KeystoreAccount(h);
      }
      function P(e, t, r, n, i) {
        return (0, a.arrayify)((0, u.pbkdf2)(e, t, r, n, i));
      }
      function _(e, t, r, n, i) {
        return Promise.resolve(P(e, t, r, n, i));
      }
      function O(e, t, r, n, i) {
        const s = (0, p.getPassword)(t),
          o = (0, p.searchPath)(e, "crypto/kdf");
        if (o && "string" === typeof o) {
          const t = function (e, t) {
            return v.throwArgumentError(
              "invalid key-derivation function parameters",
              e,
              t,
            );
          };
          if ("scrypt" === o.toLowerCase()) {
            const r = (0, p.looseArrayify)(
                (0, p.searchPath)(e, "crypto/kdfparams/salt"),
              ),
              a = parseInt((0, p.searchPath)(e, "crypto/kdfparams/n")),
              c = parseInt((0, p.searchPath)(e, "crypto/kdfparams/r")),
              l = parseInt((0, p.searchPath)(e, "crypto/kdfparams/p"));
            ((a && c && l) || t("kdf", o), 0 !== (a & (a - 1)) && t("N", a));
            const u = parseInt((0, p.searchPath)(e, "crypto/kdfparams/dklen"));
            return (32 !== u && t("dklen", u), n(s, r, a, c, l, 64, i));
          }
          if ("pbkdf2" === o.toLowerCase()) {
            const n = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "crypto/kdfparams/salt"),
            );
            let i = null;
            const o = (0, p.searchPath)(e, "crypto/kdfparams/prf");
            "hmac-sha256" === o
              ? (i = "sha256")
              : "hmac-sha512" === o
                ? (i = "sha512")
                : t("prf", o);
            const a = parseInt((0, p.searchPath)(e, "crypto/kdfparams/c")),
              c = parseInt((0, p.searchPath)(e, "crypto/kdfparams/dklen"));
            return (32 !== c && t("dklen", c), r(s, n, a, c, i));
          }
        }
        return v.throwArgumentError(
          "unsupported key-derivation function",
          "kdf",
          o,
        );
      }
      function A(e, t) {
        const r = JSON.parse(e),
          n = O(r, t, P, s.default.syncScrypt);
        return E(r, n);
      }
      function x(e, t, r) {
        return y(this, void 0, void 0, function* () {
          const n = JSON.parse(e),
            i = yield O(n, t, _, s.default.scrypt, r);
          return E(n, i);
        });
      }
      function C(e, t, r, n) {
        try {
          if (
            (0, o.getAddress)(e.address) !== (0, f.computeAddress)(e.privateKey)
          )
            throw new Error("address/privateKey mismatch");
          if (b(e)) {
            const t = e.mnemonic,
              r = c.HDNode.fromMnemonic(t.phrase, null, t.locale).derivePath(
                t.path || c.defaultPath,
              );
            if (r.privateKey != e.privateKey)
              throw new Error("mnemonic mismatch");
          }
        } catch (x) {
          return Promise.reject(x);
        }
        ("function" !== typeof r || n || ((n = r), (r = {})), r || (r = {}));
        const u = (0, a.arrayify)(e.privateKey),
          h = (0, p.getPassword)(t);
        let g = null,
          m = null,
          y = null;
        if (b(e)) {
          const t = e.mnemonic;
          ((g = (0, a.arrayify)(
            (0, c.mnemonicToEntropy)(t.phrase, t.locale || "en"),
          )),
            (m = t.path || c.defaultPath),
            (y = t.locale || "en"));
        }
        let v = r.client;
        v || (v = "ethers.js");
        let w = null;
        w = r.salt ? (0, a.arrayify)(r.salt) : (0, d.randomBytes)(32);
        let E = null;
        if (r.iv) {
          if (((E = (0, a.arrayify)(r.iv)), 16 !== E.length))
            throw new Error("invalid iv");
        } else E = (0, d.randomBytes)(16);
        let P = null;
        if (r.uuid) {
          if (((P = (0, a.arrayify)(r.uuid)), 16 !== P.length))
            throw new Error("invalid uuid");
        } else P = (0, d.randomBytes)(16);
        let _ = 1 << 17,
          O = 8,
          A = 1;
        return (
          r.scrypt &&
            (r.scrypt.N && (_ = r.scrypt.N),
            r.scrypt.r && (O = r.scrypt.r),
            r.scrypt.p && (A = r.scrypt.p)),
          s.default.scrypt(h, w, _, O, A, 64, n).then((t) => {
            t = (0, a.arrayify)(t);
            const r = t.slice(0, 16),
              n = t.slice(16, 32),
              s = t.slice(32, 64),
              o = new i.default.Counter(E),
              c = new i.default.ModeOfOperation.ctr(r, o),
              h = (0, a.arrayify)(c.encrypt(u)),
              f = (0, l.keccak256)((0, a.concat)([n, h])),
              b = {
                address: e.address.substring(2).toLowerCase(),
                id: (0, p.uuidV4)(P),
                version: 3,
                crypto: {
                  cipher: "aes-128-ctr",
                  cipherparams: { iv: (0, a.hexlify)(E).substring(2) },
                  ciphertext: (0, a.hexlify)(h).substring(2),
                  kdf: "scrypt",
                  kdfparams: {
                    salt: (0, a.hexlify)(w).substring(2),
                    n: _,
                    dklen: 32,
                    p: A,
                    r: O,
                  },
                  mac: f.substring(2),
                },
              };
            if (g) {
              const e = (0, d.randomBytes)(16),
                t = new i.default.Counter(e),
                r = new i.default.ModeOfOperation.ctr(s, t),
                n = (0, a.arrayify)(r.encrypt(g)),
                o = new Date(),
                c =
                  o.getUTCFullYear() +
                  "-" +
                  (0, p.zpad)(o.getUTCMonth() + 1, 2) +
                  "-" +
                  (0, p.zpad)(o.getUTCDate(), 2) +
                  "T" +
                  (0, p.zpad)(o.getUTCHours(), 2) +
                  "-" +
                  (0, p.zpad)(o.getUTCMinutes(), 2) +
                  "-" +
                  (0, p.zpad)(o.getUTCSeconds(), 2) +
                  ".0Z";
              b["x-ethers"] = {
                client: v,
                gethFilename: "UTC--" + c + "--" + b.address,
                mnemonicCounter: (0, a.hexlify)(e).substring(2),
                mnemonicCiphertext: (0, a.hexlify)(n).substring(2),
                path: m,
                locale: y,
                version: "0.1",
              };
            }
            return JSON.stringify(b);
          })
        );
      }
      t.KeystoreAccount = KeystoreAccount;
    },
    11421: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "networks/5.8.0";
    },
    2847: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Writer = t.Reader = t.Coder = void 0),
        (t.checkResultErrors = l));
      var n = r(2776),
        i = r(2829),
        s = r(2808),
        o = r(2773),
        a = r(3052);
      const c = new o.Logger(a.version);
      function l(e) {
        const t = [],
          r = function (e, n) {
            if (Array.isArray(n))
              for (let s in n) {
                const o = e.slice();
                o.push(s);
                try {
                  r(o, n[s]);
                } catch (i) {
                  t.push({ path: o, error: i });
                }
              }
          };
        return (r([], e), t);
      }
      class Coder {
        constructor(e, t, r, n) {
          ((this.name = e),
            (this.type = t),
            (this.localName = r),
            (this.dynamic = n));
        }
        _throwError(e, t) {
          c.throwArgumentError(e, this.localName, t);
        }
      }
      t.Coder = Coder;
      class Writer {
        constructor(e) {
          ((0, s.defineReadOnly)(this, "wordSize", e || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(e)));
        }
        get data() {
          return (0, n.hexConcat)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(e) {
          return (this._data.push(e), (this._dataLength += e.length), e.length);
        }
        appendWriter(e) {
          return this._writeData((0, n.concat)(e._data));
        }
        writeBytes(e) {
          let t = (0, n.arrayify)(e);
          const r = t.length % this.wordSize;
          return (
            r && (t = (0, n.concat)([t, this._padding.slice(r)])),
            this._writeData(t)
          );
        }
        _getValue(e) {
          let t = (0, n.arrayify)(i.BigNumber.from(e));
          return (
            t.length > this.wordSize &&
              c.throwError(
                "value out-of-bounds",
                o.Logger.errors.BUFFER_OVERRUN,
                { length: this.wordSize, offset: t.length },
              ),
            t.length % this.wordSize &&
              (t = (0, n.concat)([
                this._padding.slice(t.length % this.wordSize),
                t,
              ])),
            t
          );
        }
        writeValue(e) {
          return this._writeData(this._getValue(e));
        }
        writeUpdatableValue() {
          const e = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (t) => {
              this._data[e] = this._getValue(t);
            }
          );
        }
      }
      t.Writer = Writer;
      class Reader {
        constructor(e, t, r, i) {
          ((0, s.defineReadOnly)(this, "_data", (0, n.arrayify)(e)),
            (0, s.defineReadOnly)(this, "wordSize", t || 32),
            (0, s.defineReadOnly)(this, "_coerceFunc", r),
            (0, s.defineReadOnly)(this, "allowLoose", i),
            (this._offset = 0));
        }
        get data() {
          return (0, n.hexlify)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(e, t) {
          let r = e.match("^u?int([0-9]+)$");
          return (r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t);
        }
        coerce(e, t) {
          return this._coerceFunc
            ? this._coerceFunc(e, t)
            : Reader.coerce(e, t);
        }
        _peekBytes(e, t, r) {
          let n = Math.ceil(t / this.wordSize) * this.wordSize;
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && r && this._offset + t <= this._data.length
                ? (n = t)
                : c.throwError(
                    "data out-of-bounds",
                    o.Logger.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + n },
                  )),
            this._data.slice(this._offset, this._offset + n)
          );
        }
        subReader(e) {
          return new Reader(
            this._data.slice(this._offset + e),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose,
          );
        }
        readBytes(e, t) {
          let r = this._peekBytes(0, e, !!t);
          return ((this._offset += r.length), r.slice(0, e));
        }
        readValue() {
          return i.BigNumber.from(this.readBytes(this.wordSize));
        }
      }
      t.Reader = Reader;
    },
    3052: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abi/5.8.0";
    },
    3283: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ParamType =
          t.FunctionFragment =
          t.Fragment =
          t.FormatTypes =
          t.EventFragment =
          t.ErrorFragment =
          t.ConstructorFragment =
            void 0));
      var n = r(2829),
        i = r(2808),
        s = r(2773),
        o = r(3052);
      const a = new s.Logger(o.version),
        c = {};
      let l = { calldata: !0, memory: !0, storage: !0 },
        u = { calldata: !0, memory: !0 };
      function d(e, t) {
        if ("bytes" === e || "string" === e) {
          if (l[t]) return !0;
        } else if ("address" === e) {
          if ("payable" === t) return !0;
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && u[t]) return !0;
        return (
          (l[t] || "payable" === t) &&
            a.throwArgumentError("invalid modifier", "name", t),
          !1
        );
      }
      function h(e, t) {
        let r = e;
        function n(t) {
          a.throwArgumentError(
            "unexpected character at position " + t,
            "param",
            e,
          );
        }
        function i(e) {
          let r = { type: "", name: "", parent: e, state: { allowType: !0 } };
          return (t && (r.indexed = !1), r);
        }
        e = e.replace(/\s/g, " ");
        let s = { type: "", name: "", state: { allowType: !0 } },
          o = s;
        for (let a = 0; a < e.length; a++) {
          let r = e[a];
          switch (r) {
            case "(":
              (o.state.allowType && "" === o.type
                ? (o.type = "tuple")
                : o.state.allowParams || n(a),
                (o.state.allowType = !1),
                (o.type = E(o.type)),
                (o.components = [i(o)]),
                (o = o.components[0]));
              break;
            case ")":
              (delete o.state,
                "indexed" === o.name &&
                  (t || n(a), (o.indexed = !0), (o.name = "")),
                d(o.type, o.name) && (o.name = ""),
                (o.type = E(o.type)));
              let e = o;
              ((o = o.parent),
                o || n(a),
                delete e.parent,
                (o.state.allowParams = !1),
                (o.state.allowName = !0),
                (o.state.allowArray = !0));
              break;
            case ",":
              (delete o.state,
                "indexed" === o.name &&
                  (t || n(a), (o.indexed = !0), (o.name = "")),
                d(o.type, o.name) && (o.name = ""),
                (o.type = E(o.type)));
              let s = i(o.parent);
              (o.parent.components.push(s), delete o.parent, (o = s));
              break;
            case " ":
              (o.state.allowType &&
                "" !== o.type &&
                ((o.type = E(o.type)),
                delete o.state.allowType,
                (o.state.allowName = !0),
                (o.state.allowParams = !0)),
                o.state.allowName &&
                  "" !== o.name &&
                  ("indexed" === o.name
                    ? (t || n(a),
                      o.indexed && n(a),
                      (o.indexed = !0),
                      (o.name = ""))
                    : d(o.type, o.name)
                      ? (o.name = "")
                      : (o.state.allowName = !1)));
              break;
            case "[":
              (o.state.allowArray || n(a),
                (o.type += r),
                (o.state.allowArray = !1),
                (o.state.allowName = !1),
                (o.state.readArray = !0));
              break;
            case "]":
              (o.state.readArray || n(a),
                (o.type += r),
                (o.state.readArray = !1),
                (o.state.allowArray = !0),
                (o.state.allowName = !0));
              break;
            default:
              o.state.allowType
                ? ((o.type += r),
                  (o.state.allowParams = !0),
                  (o.state.allowArray = !0))
                : o.state.allowName
                  ? ((o.name += r), delete o.state.allowArray)
                  : o.state.readArray
                    ? (o.type += r)
                    : n(a);
          }
        }
        return (
          o.parent && a.throwArgumentError("unexpected eof", "param", e),
          delete s.state,
          "indexed" === o.name
            ? (t || n(r.length - 7),
              o.indexed && n(r.length - 7),
              (o.indexed = !0),
              (o.name = ""))
            : d(o.type, o.name) && (o.name = ""),
          (s.type = E(s.type)),
          s
        );
      }
      function f(e, t) {
        for (let r in t) (0, i.defineReadOnly)(e, r, t[r]);
      }
      const p = (t.FormatTypes = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        })),
        g = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class ParamType {
        constructor(e, t) {
          (e !== c &&
            a.throwError(
              "use fromString",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new ParamType()" },
            ),
            f(this, t));
          let r = this.type.match(g);
          (f(
            this,
            r
              ? {
                  arrayLength: parseInt(r[2] || "-1"),
                  arrayChildren: ParamType.fromObject({
                    type: r[1],
                    components: this.components,
                  }),
                  baseType: "array",
                }
              : {
                  arrayLength: null,
                  arrayChildren: null,
                  baseType: null != this.components ? "tuple" : this.type,
                },
          ),
            (this._isParamType = !0),
            Object.freeze(this));
        }
        format(e) {
          if (
            (e || (e = p.sighash),
            p[e] || a.throwArgumentError("invalid format type", "format", e),
            e === p.json)
          ) {
            let t = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" === typeof this.indexed && (t.indexed = this.indexed),
              this.components &&
                (t.components = this.components.map((t) =>
                  JSON.parse(t.format(e)),
                )),
              JSON.stringify(t)
            );
          }
          let t = "";
          return (
            "array" === this.baseType
              ? ((t += this.arrayChildren.format(e)),
                (t +=
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]"))
              : "tuple" === this.baseType
                ? (e !== p.sighash && (t += this.type),
                  (t +=
                    "(" +
                    this.components
                      .map((t) => t.format(e))
                      .join(e === p.full ? ", " : ",") +
                    ")"))
                : (t += this.type),
            e !== p.sighash &&
              (!0 === this.indexed && (t += " indexed"),
              e === p.full && this.name && (t += " " + this.name)),
            t
          );
        }
        static from(e, t) {
          return "string" === typeof e
            ? ParamType.fromString(e, t)
            : ParamType.fromObject(e);
        }
        static fromObject(e) {
          return ParamType.isParamType(e)
            ? e
            : new ParamType(c, {
                name: e.name || null,
                type: E(e.type),
                indexed: null == e.indexed ? null : !!e.indexed,
                components: e.components
                  ? e.components.map(ParamType.fromObject)
                  : null,
              });
        }
        static fromString(e, t) {
          function r(e) {
            return ParamType.fromObject({
              name: e.name,
              type: e.type,
              indexed: e.indexed,
              components: e.components,
            });
          }
          return r(h(e, !!t));
        }
        static isParamType(e) {
          return !(null == e || !e._isParamType);
        }
      }
      function m(e, t) {
        return A(e).map((e) => ParamType.fromString(e, t));
      }
      t.ParamType = ParamType;
      class Fragment {
        constructor(e, t) {
          (e !== c &&
            a.throwError(
              "use a static from method",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" },
            ),
            f(this, t),
            (this._isFragment = !0),
            Object.freeze(this));
        }
        static from(e) {
          return Fragment.isFragment(e)
            ? e
            : "string" === typeof e
              ? Fragment.fromString(e)
              : Fragment.fromObject(e);
        }
        static fromObject(e) {
          if (Fragment.isFragment(e)) return e;
          switch (e.type) {
            case "function":
              return FunctionFragment.fromObject(e);
            case "event":
              return EventFragment.fromObject(e);
            case "constructor":
              return ConstructorFragment.fromObject(e);
            case "error":
              return ErrorFragment.fromObject(e);
            case "fallback":
            case "receive":
              return null;
          }
          return a.throwArgumentError("invalid fragment object", "value", e);
        }
        static fromString(e) {
          return (
            (e = e.replace(/\s/g, " ")),
            (e = e
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")),
            (e = e.trim()),
            "event" === e.split(" ")[0]
              ? EventFragment.fromString(e.substring(5).trim())
              : "function" === e.split(" ")[0]
                ? FunctionFragment.fromString(e.substring(8).trim())
                : "constructor" === e.split("(")[0].trim()
                  ? ConstructorFragment.fromString(e.trim())
                  : "error" === e.split(" ")[0]
                    ? ErrorFragment.fromString(e.substring(5).trim())
                    : a.throwArgumentError("unsupported fragment", "value", e)
          );
        }
        static isFragment(e) {
          return !(!e || !e._isFragment);
        }
      }
      t.Fragment = Fragment;
      class EventFragment extends Fragment {
        format(e) {
          if (
            (e || (e = p.sighash),
            p[e] || a.throwArgumentError("invalid format type", "format", e),
            e === p.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== p.sighash && (t += "event "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === p.full ? ", " : ",") +
              ") "),
            e !== p.sighash && this.anonymous && (t += "anonymous "),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e
            ? EventFragment.fromString(e)
            : EventFragment.fromObject(e);
        }
        static fromObject(e) {
          if (EventFragment.isEventFragment(e)) return e;
          "event" !== e.type &&
            a.throwArgumentError("invalid event object", "value", e);
          const t = {
            name: _(e.name),
            anonymous: e.anonymous,
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
            type: "event",
          };
          return new EventFragment(c, t);
        }
        static fromString(e) {
          let t = e.match(O);
          t || a.throwArgumentError("invalid event string", "value", e);
          let r = !1;
          return (
            t[3].split(" ").forEach((e) => {
              switch (e.trim()) {
                case "anonymous":
                  r = !0;
                  break;
                case "":
                  break;
                default:
                  a.warn("unknown modifier: " + e);
              }
            }),
            EventFragment.fromObject({
              name: t[1].trim(),
              anonymous: r,
              inputs: m(t[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(e) {
          return e && e._isFragment && "event" === e.type;
        }
      }
      function y(e, t) {
        t.gas = null;
        let r = e.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              a.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                e,
              ),
            r[1].match(/^[0-9]+$/) ||
              a.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                e,
              ),
            (t.gas = n.BigNumber.from(r[1])),
            r[0])
          : e;
      }
      function v(e, t) {
        ((t.constant = !1),
          (t.payable = !1),
          (t.stateMutability = "nonpayable"),
          e.split(" ").forEach((e) => {
            switch (e.trim()) {
              case "constant":
                t.constant = !0;
                break;
              case "payable":
                ((t.payable = !0), (t.stateMutability = "payable"));
                break;
              case "nonpayable":
                ((t.payable = !1), (t.stateMutability = "nonpayable"));
                break;
              case "pure":
                ((t.constant = !0), (t.stateMutability = "pure"));
                break;
              case "view":
                ((t.constant = !0), (t.stateMutability = "view"));
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + e);
            }
          }));
      }
      function b(e) {
        let t = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != e.stateMutability
            ? ((t.stateMutability = e.stateMutability),
              (t.constant =
                "view" === t.stateMutability || "pure" === t.stateMutability),
              null != e.constant &&
                !!e.constant !== t.constant &&
                a.throwArgumentError(
                  "cannot have constant function with mutability " +
                    t.stateMutability,
                  "value",
                  e,
                ),
              (t.payable = "payable" === t.stateMutability),
              null != e.payable &&
                !!e.payable !== t.payable &&
                a.throwArgumentError(
                  "cannot have payable function with mutability " +
                    t.stateMutability,
                  "value",
                  e,
                ))
            : null != e.payable
              ? ((t.payable = !!e.payable),
                null != e.constant ||
                  t.payable ||
                  "constructor" === e.type ||
                  a.throwArgumentError(
                    "unable to determine stateMutability",
                    "value",
                    e,
                  ),
                (t.constant = !!e.constant),
                t.constant
                  ? (t.stateMutability = "view")
                  : (t.stateMutability = t.payable ? "payable" : "nonpayable"),
                t.payable &&
                  t.constant &&
                  a.throwArgumentError(
                    "cannot have constant payable function",
                    "value",
                    e,
                  ))
              : null != e.constant
                ? ((t.constant = !!e.constant),
                  (t.payable = !t.constant),
                  (t.stateMutability = t.constant ? "view" : "payable"))
                : "constructor" !== e.type &&
                  a.throwArgumentError(
                    "unable to determine stateMutability",
                    "value",
                    e,
                  ),
          t
        );
      }
      t.EventFragment = EventFragment;
      class ConstructorFragment extends Fragment {
        format(e) {
          if (
            (e || (e = p.sighash),
            p[e] || a.throwArgumentError("invalid format type", "format", e),
            e === p.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          e === p.sighash &&
            a.throwError(
              "cannot format a constructor for sighash",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" },
            );
          let t =
            "constructor(" +
            this.inputs
              .map((t) => t.format(e))
              .join(e === p.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (t += this.stateMutability + " "),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e
            ? ConstructorFragment.fromString(e)
            : ConstructorFragment.fromObject(e);
        }
        static fromObject(e) {
          if (ConstructorFragment.isConstructorFragment(e)) return e;
          "constructor" !== e.type &&
            a.throwArgumentError("invalid constructor object", "value", e);
          let t = b(e);
          t.constant &&
            a.throwArgumentError("constructor cannot be constant", "value", e);
          const r = {
            name: null,
            type: e.type,
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? n.BigNumber.from(e.gas) : null,
          };
          return new ConstructorFragment(c, r);
        }
        static fromString(e) {
          let t = { type: "constructor" };
          e = y(e, t);
          let r = e.match(O);
          return (
            (r && "constructor" === r[1].trim()) ||
              a.throwArgumentError("invalid constructor string", "value", e),
            (t.inputs = m(r[2].trim(), !1)),
            v(r[3].trim(), t),
            ConstructorFragment.fromObject(t)
          );
        }
        static isConstructorFragment(e) {
          return e && e._isFragment && "constructor" === e.type;
        }
      }
      t.ConstructorFragment = ConstructorFragment;
      class FunctionFragment extends ConstructorFragment {
        format(e) {
          if (
            (e || (e = p.sighash),
            p[e] || a.throwArgumentError("invalid format type", "format", e),
            e === p.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
              outputs: this.outputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== p.sighash && (t += "function "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === p.full ? ", " : ",") +
              ") "),
            e !== p.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (t += this.stateMutability + " ")
                : this.constant && (t += "view "),
              this.outputs &&
                this.outputs.length &&
                (t +=
                  "returns (" +
                  this.outputs.map((t) => t.format(e)).join(", ") +
                  ") "),
              null != this.gas && (t += "@" + this.gas.toString() + " ")),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e
            ? FunctionFragment.fromString(e)
            : FunctionFragment.fromObject(e);
        }
        static fromObject(e) {
          if (FunctionFragment.isFunctionFragment(e)) return e;
          "function" !== e.type &&
            a.throwArgumentError("invalid function object", "value", e);
          let t = b(e);
          const r = {
            type: e.type,
            name: _(e.name),
            constant: t.constant,
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
            outputs: e.outputs ? e.outputs.map(ParamType.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? n.BigNumber.from(e.gas) : null,
          };
          return new FunctionFragment(c, r);
        }
        static fromString(e) {
          let t = { type: "function" };
          e = y(e, t);
          let r = e.split(" returns ");
          r.length > 2 &&
            a.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(O);
          if (
            (n ||
              a.throwArgumentError("invalid function signature", "value", e),
            (t.name = n[1].trim()),
            t.name && _(t.name),
            (t.inputs = m(n[2], !1)),
            v(n[3].trim(), t),
            r.length > 1)
          ) {
            let n = r[1].match(O);
            (("" == n[1].trim() && "" == n[3].trim()) ||
              a.throwArgumentError("unexpected tokens", "value", e),
              (t.outputs = m(n[2], !1)));
          } else t.outputs = [];
          return FunctionFragment.fromObject(t);
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type;
        }
      }
      function w(e) {
        const t = e.format();
        return (
          ("Error(string)" !== t && "Panic(uint256)" !== t) ||
            a.throwArgumentError(
              `cannot specify user defined ${t} error`,
              "fragment",
              e,
            ),
          e
        );
      }
      t.FunctionFragment = FunctionFragment;
      class ErrorFragment extends Fragment {
        format(e) {
          if (
            (e || (e = p.sighash),
            p[e] || a.throwArgumentError("invalid format type", "format", e),
            e === p.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== p.sighash && (t += "error "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === p.full ? ", " : ",") +
              ") "),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e
            ? ErrorFragment.fromString(e)
            : ErrorFragment.fromObject(e);
        }
        static fromObject(e) {
          if (ErrorFragment.isErrorFragment(e)) return e;
          "error" !== e.type &&
            a.throwArgumentError("invalid error object", "value", e);
          const t = {
            type: e.type,
            name: _(e.name),
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
          };
          return w(new ErrorFragment(c, t));
        }
        static fromString(e) {
          let t = { type: "error" },
            r = e.match(O);
          return (
            r || a.throwArgumentError("invalid error signature", "value", e),
            (t.name = r[1].trim()),
            t.name && _(t.name),
            (t.inputs = m(r[2], !1)),
            w(ErrorFragment.fromObject(t))
          );
        }
        static isErrorFragment(e) {
          return e && e._isFragment && "error" === e.type;
        }
      }
      function E(e) {
        return (
          e.match(/^uint($|[^1-9])/)
            ? (e = "uint256" + e.substring(4))
            : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
          e
        );
      }
      t.ErrorFragment = ErrorFragment;
      const P = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function _(e) {
        return (
          (e && e.match(P)) ||
            a.throwArgumentError(`invalid identifier "${e}"`, "value", e),
          e
        );
      }
      const O = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
      function A(e) {
        e = e.trim();
        let t = [],
          r = "",
          n = 0;
        for (let i = 0; i < e.length; i++) {
          let s = e[i];
          "," === s && 0 === n
            ? (t.push(r), (r = ""))
            : ((r += s),
              "(" === s
                ? n++
                : ")" === s &&
                  (n--,
                  -1 === n &&
                    a.throwArgumentError(
                      "unbalanced parenthesis",
                      "value",
                      e,
                    )));
        }
        return (r && t.push(r), t);
      }
    },
    3546: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultAbiCoder = t.AbiCoder = void 0));
      var n = r(2776),
        i = r(2808),
        s = r(2773),
        o = r(3052),
        a = r(2847),
        c = r(4264),
        l = r(3547),
        u = r(4266),
        d = r(3548),
        h = r(4267),
        f = r(4268),
        p = r(4269),
        g = r(4270),
        m = r(4271),
        y = r(3283);
      const v = new s.Logger(o.version),
        b = new RegExp(/^bytes([0-9]*)$/),
        w = new RegExp(/^(u?int)([0-9]*)$/);
      class AbiCoder {
        constructor(e) {
          (0, i.defineReadOnly)(this, "coerceFunc", e || null);
        }
        _getCoder(e) {
          switch (e.baseType) {
            case "address":
              return new c.AddressCoder(e.name);
            case "bool":
              return new u.BooleanCoder(e.name);
            case "string":
              return new g.StringCoder(e.name);
            case "bytes":
              return new d.BytesCoder(e.name);
            case "array":
              return new l.ArrayCoder(
                this._getCoder(e.arrayChildren),
                e.arrayLength,
                e.name,
              );
            case "tuple":
              return new m.TupleCoder(
                (e.components || []).map((e) => this._getCoder(e)),
                e.name,
              );
            case "":
              return new f.NullCoder(e.name);
          }
          let t = e.type.match(w);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 !== 0) &&
                v.throwArgumentError(
                  "invalid " + t[1] + " bit length",
                  "param",
                  e,
                ),
              new p.NumberCoder(r / 8, "int" === t[1], e.name)
            );
          }
          if (((t = e.type.match(b)), t)) {
            let r = parseInt(t[1]);
            return (
              (0 === r || r > 32) &&
                v.throwArgumentError("invalid bytes length", "param", e),
              new h.FixedBytesCoder(r, e.name)
            );
          }
          return v.throwArgumentError("invalid type", "type", e.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(e, t) {
          return new a.Reader(e, this._getWordSize(), this.coerceFunc, t);
        }
        _getWriter() {
          return new a.Writer(this._getWordSize());
        }
        getDefaultValue(e) {
          const t = e.map((e) => this._getCoder(y.ParamType.from(e))),
            r = new m.TupleCoder(t, "_");
          return r.defaultValue();
        }
        encode(e, t) {
          e.length !== t.length &&
            v.throwError(
              "types/values length mismatch",
              s.Logger.errors.INVALID_ARGUMENT,
              {
                count: { types: e.length, values: t.length },
                value: { types: e, values: t },
              },
            );
          const r = e.map((e) => this._getCoder(y.ParamType.from(e))),
            n = new m.TupleCoder(r, "_"),
            i = this._getWriter();
          return (n.encode(i, t), i.data);
        }
        decode(e, t, r) {
          const i = e.map((e) => this._getCoder(y.ParamType.from(e))),
            s = new m.TupleCoder(i, "_");
          return s.decode(this._getReader((0, n.arrayify)(t), r));
        }
      }
      t.AbiCoder = AbiCoder;
      t.defaultAbiCoder = new AbiCoder();
    },
    3547: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ArrayCoder = void 0),
        (t.pack = c),
        (t.unpack = l));
      var n = r(2773),
        i = r(3052),
        s = r(2847),
        o = r(4265);
      const a = new n.Logger(i.version);
      function c(e, t, r) {
        let i = null;
        if (Array.isArray(r)) i = r;
        else if (r && "object" === typeof r) {
          let e = {};
          i = t.map((t) => {
            const i = t.localName;
            return (
              i ||
                a.throwError(
                  "cannot encode object for signature with missing names",
                  n.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r },
                ),
              e[i] &&
                a.throwError(
                  "cannot encode object for signature with duplicate names",
                  n.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r },
                ),
              (e[i] = !0),
              r[i]
            );
          });
        } else a.throwArgumentError("invalid tuple value", "tuple", r);
        t.length !== i.length &&
          a.throwArgumentError("types/value length mismatch", "tuple", r);
        let o = new s.Writer(e.wordSize),
          c = new s.Writer(e.wordSize),
          l = [];
        (t.forEach((e, t) => {
          let r = i[t];
          if (e.dynamic) {
            let t = c.length;
            e.encode(c, r);
            let n = o.writeUpdatableValue();
            l.push((e) => {
              n(e + t);
            });
          } else e.encode(o, r);
        }),
          l.forEach((e) => {
            e(o.length);
          }));
        let u = e.appendWriter(o);
        return ((u += e.appendWriter(c)), u);
      }
      function l(e, t) {
        let r = [],
          i = e.subReader(0);
        t.forEach((t) => {
          let s = null;
          if (t.dynamic) {
            let r = e.readValue(),
              a = i.subReader(r.toNumber());
            try {
              s = t.decode(a);
            } catch (o) {
              if (o.code === n.Logger.errors.BUFFER_OVERRUN) throw o;
              ((s = o),
                (s.baseType = t.name),
                (s.name = t.localName),
                (s.type = t.type));
            }
          } else
            try {
              s = t.decode(e);
            } catch (o) {
              if (o.code === n.Logger.errors.BUFFER_OVERRUN) throw o;
              ((s = o),
                (s.baseType = t.name),
                (s.name = t.localName),
                (s.type = t.type));
            }
          void 0 != s && r.push(s);
        });
        const s = t.reduce((e, t) => {
          const r = t.localName;
          return (r && (e[r] || (e[r] = 0), e[r]++), e);
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (!n || 1 !== s[n]) return;
          if (("length" === n && (n = "_length"), null != r[n])) return;
          const i = r[t];
          i instanceof Error
            ? Object.defineProperty(r, n, {
                enumerable: !0,
                get: () => {
                  throw i;
                },
              })
            : (r[n] = i);
        });
        for (let n = 0; n < r.length; n++) {
          const e = r[n];
          e instanceof Error &&
            Object.defineProperty(r, n, {
              enumerable: !0,
              get: () => {
                throw e;
              },
            });
        }
        return Object.freeze(r);
      }
      class ArrayCoder extends s.Coder {
        constructor(e, t, r) {
          const n = e.type + "[" + (t >= 0 ? t : "") + "]",
            i = -1 === t || e.dynamic;
          (super("array", n, r, i), (this.coder = e), (this.length = t));
        }
        defaultValue() {
          const e = this.coder.defaultValue(),
            t = [];
          for (let r = 0; r < this.length; r++) t.push(e);
          return t;
        }
        encode(e, t) {
          Array.isArray(t) || this._throwError("expected array value", t);
          let r = this.length;
          (-1 === r && ((r = t.length), e.writeValue(t.length)),
            a.checkArgumentCount(
              t.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : ""),
            ));
          let n = [];
          for (let i = 0; i < t.length; i++) n.push(this.coder);
          return c(e, n, t);
        }
        decode(e) {
          let t = this.length;
          -1 === t &&
            ((t = e.readValue().toNumber()),
            32 * t > e._data.length &&
              a.throwError(
                "insufficient data length",
                n.Logger.errors.BUFFER_OVERRUN,
                { length: e._data.length, count: t },
              ));
          let r = [];
          for (let n = 0; n < t; n++) r.push(new o.AnonymousCoder(this.coder));
          return e.coerce(this.name, l(e, r));
        }
      }
      t.ArrayCoder = ArrayCoder;
    },
    3548: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicBytesCoder = t.BytesCoder = void 0));
      var n = r(2776),
        i = r(2847);
      class DynamicBytesCoder extends i.Coder {
        constructor(e, t) {
          super(e, e, t, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(e, t) {
          t = (0, n.arrayify)(t);
          let r = e.writeValue(t.length);
          return ((r += e.writeBytes(t)), r);
        }
        decode(e) {
          return e.readBytes(e.readValue().toNumber(), !0);
        }
      }
      t.DynamicBytesCoder = DynamicBytesCoder;
      class BytesCoder extends DynamicBytesCoder {
        constructor(e) {
          super("bytes", e);
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(super.decode(e)));
        }
      }
      t.BytesCoder = BytesCoder;
    },
    3645: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AbiCoder", {
          enumerable: !0,
          get: function () {
            return i.AbiCoder;
          },
        }),
        Object.defineProperty(t, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return n.ConstructorFragment;
          },
        }),
        Object.defineProperty(t, "ErrorFragment", {
          enumerable: !0,
          get: function () {
            return n.ErrorFragment;
          },
        }),
        Object.defineProperty(t, "EventFragment", {
          enumerable: !0,
          get: function () {
            return n.EventFragment;
          },
        }),
        Object.defineProperty(t, "FormatTypes", {
          enumerable: !0,
          get: function () {
            return n.FormatTypes;
          },
        }),
        Object.defineProperty(t, "Fragment", {
          enumerable: !0,
          get: function () {
            return n.Fragment;
          },
        }),
        Object.defineProperty(t, "FunctionFragment", {
          enumerable: !0,
          get: function () {
            return n.FunctionFragment;
          },
        }),
        Object.defineProperty(t, "Indexed", {
          enumerable: !0,
          get: function () {
            return s.Indexed;
          },
        }),
        Object.defineProperty(t, "Interface", {
          enumerable: !0,
          get: function () {
            return s.Interface;
          },
        }),
        Object.defineProperty(t, "LogDescription", {
          enumerable: !0,
          get: function () {
            return s.LogDescription;
          },
        }),
        Object.defineProperty(t, "ParamType", {
          enumerable: !0,
          get: function () {
            return n.ParamType;
          },
        }),
        Object.defineProperty(t, "TransactionDescription", {
          enumerable: !0,
          get: function () {
            return s.TransactionDescription;
          },
        }),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return s.checkResultErrors;
          },
        }),
        Object.defineProperty(t, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return i.defaultAbiCoder;
          },
        }));
      var n = r(3283),
        i = r(3546),
        s = r(4272);
    },
    4264: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressCoder = void 0));
      var n = r(2976),
        i = r(2776),
        s = r(2847);
      class AddressCoder extends s.Coder {
        constructor(e) {
          super("address", "address", e, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(e, t) {
          try {
            t = (0, n.getAddress)(t);
          } catch (r) {
            this._throwError(r.message, t);
          }
          return e.writeValue(t);
        }
        decode(e) {
          return (0, n.getAddress)(
            (0, i.hexZeroPad)(e.readValue().toHexString(), 20),
          );
        }
      }
      t.AddressCoder = AddressCoder;
    },
    4265: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnonymousCoder = void 0));
      var n = r(2847);
      class AnonymousCoder extends n.Coder {
        constructor(e) {
          (super(e.name, e.type, void 0, e.dynamic), (this.coder = e));
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(e, t) {
          return this.coder.encode(e, t);
        }
        decode(e) {
          return this.coder.decode(e);
        }
      }
      t.AnonymousCoder = AnonymousCoder;
    },
    4266: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BooleanCoder = void 0));
      var n = r(2847);
      class BooleanCoder extends n.Coder {
        constructor(e) {
          super("bool", "bool", e, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(e, t) {
          return e.writeValue(t ? 1 : 0);
        }
        decode(e) {
          return e.coerce(this.type, !e.readValue().isZero());
        }
      }
      t.BooleanCoder = BooleanCoder;
    },
    4267: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FixedBytesCoder = void 0));
      var n = r(2776),
        i = r(2847);
      class FixedBytesCoder extends i.Coder {
        constructor(e, t) {
          let r = "bytes" + String(e);
          (super(r, r, t, !1), (this.size = e));
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size,
          );
        }
        encode(e, t) {
          let r = (0, n.arrayify)(t);
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", t),
            e.writeBytes(r)
          );
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(e.readBytes(this.size)));
        }
      }
      t.FixedBytesCoder = FixedBytesCoder;
    },
    4268: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NullCoder = void 0));
      var n = r(2847);
      class NullCoder extends n.Coder {
        constructor(e) {
          super("null", "", e, !1);
        }
        defaultValue() {
          return null;
        }
        encode(e, t) {
          return (
            null != t && this._throwError("not null", t),
            e.writeBytes([])
          );
        }
        decode(e) {
          return (e.readBytes(0), e.coerce(this.name, null));
        }
      }
      t.NullCoder = NullCoder;
    },
    4269: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NumberCoder = void 0));
      var n = r(2829),
        i = r(3272),
        s = r(2847);
      class NumberCoder extends s.Coder {
        constructor(e, t, r) {
          const n = (t ? "int" : "uint") + 8 * e;
          (super(n, n, r, !1), (this.size = e), (this.signed = t));
        }
        defaultValue() {
          return 0;
        }
        encode(e, t) {
          let r = n.BigNumber.from(t),
            s = i.MaxUint256.mask(8 * e.wordSize);
          if (this.signed) {
            let e = s.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(i.One).mul(i.NegativeOne))) &&
              this._throwError("value out-of-bounds", t);
          } else
            (r.lt(i.Zero) || r.gt(s.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", t);
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)),
            e.writeValue(r)
          );
        }
        decode(e) {
          let t = e.readValue().mask(8 * this.size);
          return (
            this.signed && (t = t.fromTwos(8 * this.size)),
            e.coerce(this.name, t)
          );
        }
      }
      t.NumberCoder = NumberCoder;
    },
    4270: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StringCoder = void 0));
      var n = r(3016),
        i = r(3548);
      class StringCoder extends i.DynamicBytesCoder {
        constructor(e) {
          super("string", e);
        }
        defaultValue() {
          return "";
        }
        encode(e, t) {
          return super.encode(e, (0, n.toUtf8Bytes)(t));
        }
        decode(e) {
          return (0, n.toUtf8String)(super.decode(e));
        }
      }
      t.StringCoder = StringCoder;
    },
    4271: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TupleCoder = void 0));
      var n = r(2847),
        i = r(3547);
      class TupleCoder extends n.Coder {
        constructor(e, t) {
          let r = !1;
          const n = [];
          e.forEach((e) => {
            (e.dynamic && (r = !0), n.push(e.type));
          });
          const i = "tuple(" + n.join(",") + ")";
          (super("tuple", i, t, r), (this.coders = e));
        }
        defaultValue() {
          const e = [];
          this.coders.forEach((t) => {
            e.push(t.defaultValue());
          });
          const t = this.coders.reduce((e, t) => {
            const r = t.localName;
            return (r && (e[r] || (e[r] = 0), e[r]++), e);
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let i = r.localName;
              i &&
                1 === t[i] &&
                ("length" === i && (i = "_length"),
                null == e[i] && (e[i] = e[n]));
            }),
            Object.freeze(e)
          );
        }
        encode(e, t) {
          return (0, i.pack)(e, this.coders, t);
        }
        decode(e) {
          return e.coerce(this.name, (0, i.unpack)(e, this.coders));
        }
      }
      t.TupleCoder = TupleCoder;
    },
    4272: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionDescription =
          t.LogDescription =
          t.Interface =
          t.Indexed =
          t.ErrorDescription =
            void 0),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return u.checkResultErrors;
          },
        }));
      var n = r(2976),
        i = r(2829),
        s = r(2776),
        o = r(3274),
        a = r(3049),
        c = r(2808),
        l = r(3546),
        u = r(2847),
        d = r(3283),
        h = r(2773),
        f = r(3052);
      const p = new h.Logger(f.version);
      class LogDescription extends c.Description {}
      t.LogDescription = LogDescription;
      class TransactionDescription extends c.Description {}
      t.TransactionDescription = TransactionDescription;
      class ErrorDescription extends c.Description {}
      t.ErrorDescription = ErrorDescription;
      class Indexed extends c.Description {
        static isIndexed(e) {
          return !(!e || !e._isIndexed);
        }
      }
      t.Indexed = Indexed;
      const g = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function m(e, t) {
        const r = new Error(
          "deferred error during ABI decoding triggered accessing " + e,
        );
        return ((r.error = t), r);
      }
      class Interface {
        constructor(e) {
          let t = [];
          ((t = "string" === typeof e ? JSON.parse(e) : e),
            (0, c.defineReadOnly)(
              this,
              "fragments",
              t.map((e) => d.Fragment.from(e)).filter((e) => null != e),
            ),
            (0, c.defineReadOnly)(
              this,
              "_abiCoder",
              (0, c.getStatic)(new.target, "getAbiCoder")(),
            ),
            (0, c.defineReadOnly)(this, "functions", {}),
            (0, c.defineReadOnly)(this, "errors", {}),
            (0, c.defineReadOnly)(this, "events", {}),
            (0, c.defineReadOnly)(this, "structs", {}),
            this.fragments.forEach((e) => {
              let t = null;
              switch (e.type) {
                case "constructor":
                  return this.deploy
                    ? void p.warn("duplicate definition - constructor")
                    : void (0, c.defineReadOnly)(this, "deploy", e);
                case "function":
                  t = this.functions;
                  break;
                case "event":
                  t = this.events;
                  break;
                case "error":
                  t = this.errors;
                  break;
                default:
                  return;
              }
              let r = e.format();
              t[r] ? p.warn("duplicate definition - " + r) : (t[r] = e);
            }),
            this.deploy ||
              (0, c.defineReadOnly)(
                this,
                "deploy",
                d.ConstructorFragment.from({
                  payable: !1,
                  type: "constructor",
                }),
              ),
            (0, c.defineReadOnly)(this, "_isInterface", !0));
        }
        format(e) {
          (e || (e = d.FormatTypes.full),
            e === d.FormatTypes.sighash &&
              p.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                e,
              ));
          const t = this.fragments.map((t) => t.format(e));
          return e === d.FormatTypes.json
            ? JSON.stringify(t.map((e) => JSON.parse(e)))
            : t;
        }
        static getAbiCoder() {
          return l.defaultAbiCoder;
        }
        static getAddress(e) {
          return (0, n.getAddress)(e);
        }
        static getSighash(e) {
          return (0, s.hexDataSlice)((0, o.id)(e.format()), 0, 4);
        }
        static getEventTopic(e) {
          return (0, o.id)(e.format());
        }
        getFunction(e) {
          if ((0, s.isHexString)(e)) {
            for (const t in this.functions)
              if (e === this.getSighash(t)) return this.functions[t];
            p.throwArgumentError("no matching function", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.functions).filter(
                (e) => e.split("(")[0] === t,
              );
            return (
              0 === r.length
                ? p.throwArgumentError("no matching function", "name", t)
                : r.length > 1 &&
                  p.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    t,
                  ),
              this.functions[r[0]]
            );
          }
          const t = this.functions[d.FunctionFragment.fromString(e).format()];
          return (
            t || p.throwArgumentError("no matching function", "signature", e),
            t
          );
        }
        getEvent(e) {
          if ((0, s.isHexString)(e)) {
            const t = e.toLowerCase();
            for (const e in this.events)
              if (t === this.getEventTopic(e)) return this.events[e];
            p.throwArgumentError("no matching event", "topichash", t);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.events).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? p.throwArgumentError("no matching event", "name", t)
                : r.length > 1 &&
                  p.throwArgumentError("multiple matching events", "name", t),
              this.events[r[0]]
            );
          }
          const t = this.events[d.EventFragment.fromString(e).format()];
          return (
            t || p.throwArgumentError("no matching event", "signature", e),
            t
          );
        }
        getError(e) {
          if ((0, s.isHexString)(e)) {
            const t = (0, c.getStatic)(this.constructor, "getSighash");
            for (const r in this.errors) {
              const n = this.errors[r];
              if (e === t(n)) return this.errors[r];
            }
            p.throwArgumentError("no matching error", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.errors).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? p.throwArgumentError("no matching error", "name", t)
                : r.length > 1 &&
                  p.throwArgumentError("multiple matching errors", "name", t),
              this.errors[r[0]]
            );
          }
          const t = this.errors[d.FunctionFragment.fromString(e).format()];
          return (
            t || p.throwArgumentError("no matching error", "signature", e),
            t
          );
        }
        getSighash(e) {
          if ("string" === typeof e)
            try {
              e = this.getFunction(e);
            } catch (t) {
              try {
                e = this.getError(e);
              } catch (r) {
                throw t;
              }
            }
          return (0, c.getStatic)(this.constructor, "getSighash")(e);
        }
        getEventTopic(e) {
          return (
            "string" === typeof e && (e = this.getEvent(e)),
            (0, c.getStatic)(this.constructor, "getEventTopic")(e)
          );
        }
        _decodeParams(e, t) {
          return this._abiCoder.decode(e, t);
        }
        _encodeParams(e, t) {
          return this._abiCoder.encode(e, t);
        }
        encodeDeploy(e) {
          return this._encodeParams(this.deploy.inputs, e || []);
        }
        decodeErrorResult(e, t) {
          "string" === typeof e && (e = this.getError(e));
          const r = (0, s.arrayify)(t);
          return (
            (0, s.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              p.throwArgumentError(
                `data signature does not match error ${e.name}.`,
                "data",
                (0, s.hexlify)(r),
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeErrorResult(e, t) {
          return (
            "string" === typeof e && (e = this.getError(e)),
            (0, s.hexlify)(
              (0, s.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ]),
            )
          );
        }
        decodeFunctionData(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          const r = (0, s.arrayify)(t);
          return (
            (0, s.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              p.throwArgumentError(
                `data signature does not match function ${e.name}.`,
                "data",
                (0, s.hexlify)(r),
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeFunctionData(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, s.hexlify)(
              (0, s.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ]),
            )
          );
        }
        decodeFunctionResult(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          let r = (0, s.arrayify)(t),
            n = null,
            i = "",
            o = null,
            a = null,
            c = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r);
              } catch (l) {}
              break;
            case 4: {
              const e = (0, s.hexlify)(r.slice(0, 4)),
                t = g[e];
              if (t)
                ((o = this._abiCoder.decode(t.inputs, r.slice(4))),
                  (a = t.name),
                  (c = t.signature),
                  t.reason && (n = o[0]),
                  "Error" === a
                    ? (i =
                        "; VM Exception while processing transaction: reverted with reason string " +
                        JSON.stringify(o[0]))
                    : "Panic" === a &&
                      (i =
                        "; VM Exception while processing transaction: reverted with panic code " +
                        o[0]));
              else
                try {
                  const t = this.getError(e);
                  ((o = this._abiCoder.decode(t.inputs, r.slice(4))),
                    (a = t.name),
                    (c = t.format()));
                } catch (l) {}
              break;
            }
          }
          return p.throwError(
            "call revert exception" + i,
            h.Logger.errors.CALL_EXCEPTION,
            {
              method: e.format(),
              data: (0, s.hexlify)(t),
              errorArgs: o,
              errorName: a,
              errorSignature: c,
              reason: n,
            },
          );
        }
        encodeFunctionResult(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, s.hexlify)(this._abiCoder.encode(e.outputs, t || []))
          );
        }
        encodeFilterTopics(e, t) {
          ("string" === typeof e && (e = this.getEvent(e)),
            t.length > e.inputs.length &&
              p.throwError(
                "too many arguments for " + e.format(),
                h.Logger.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: t },
              ));
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          const n = (e, t) =>
            "string" === e.type
              ? (0, o.id)(t)
              : "bytes" === e.type
                ? (0, a.keccak256)((0, s.hexlify)(t))
                : ("bool" === e.type &&
                    "boolean" === typeof t &&
                    (t = t ? "0x01" : "0x00"),
                  e.type.match(/^u?int/) &&
                    (t = i.BigNumber.from(t).toHexString()),
                  "address" === e.type &&
                    this._abiCoder.encode(["address"], [t]),
                  (0, s.hexZeroPad)((0, s.hexlify)(t), 32));
          t.forEach((t, i) => {
            let s = e.inputs[i];
            s.indexed
              ? null == t
                ? r.push(null)
                : "array" === s.baseType || "tuple" === s.baseType
                  ? p.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + s.name,
                      t,
                    )
                  : Array.isArray(t)
                    ? r.push(t.map((e) => n(s, e)))
                    : r.push(n(s, t))
              : null != t &&
                p.throwArgumentError(
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + s.name,
                  t,
                );
          });
          while (r.length && null === r[r.length - 1]) r.pop();
          return r;
        }
        encodeEventLog(e, t) {
          "string" === typeof e && (e = this.getEvent(e));
          const r = [],
            n = [],
            i = [];
          return (
            e.anonymous || r.push(this.getEventTopic(e)),
            t.length !== e.inputs.length &&
              p.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                t,
              ),
            e.inputs.forEach((e, s) => {
              const c = t[s];
              if (e.indexed)
                if ("string" === e.type) r.push((0, o.id)(c));
                else if ("bytes" === e.type) r.push((0, a.keccak256)(c));
                else {
                  if ("tuple" === e.baseType || "array" === e.baseType)
                    throw new Error("not implemented");
                  r.push(this._abiCoder.encode([e.type], [c]));
                }
              else (n.push(e), i.push(c));
            }),
            { data: this._abiCoder.encode(n, i), topics: r }
          );
        }
        decodeEventLog(e, t, r) {
          if (
            ("string" === typeof e && (e = this.getEvent(e)),
            null != r && !e.anonymous)
          ) {
            let t = this.getEventTopic(e);
            (((0, s.isHexString)(r[0], 32) && r[0].toLowerCase() === t) ||
              p.throwError(
                "fragment/topic mismatch",
                h.Logger.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: t, value: r[0] },
              ),
              (r = r.slice(1)));
          }
          let n = [],
            i = [],
            o = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (n.push(
                    d.ParamType.fromObject({ type: "bytes32", name: e.name }),
                  ),
                  o.push(!0))
                : (n.push(e), o.push(!1))
              : (i.push(e), o.push(!1));
          });
          let a = null != r ? this._abiCoder.decode(n, (0, s.concat)(r)) : null,
            c = this._abiCoder.decode(i, t, !0),
            l = [],
            u = 0,
            f = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed)
              if (null == a) l[t] = new Indexed({ _isIndexed: !0, hash: null });
              else if (o[t])
                l[t] = new Indexed({ _isIndexed: !0, hash: a[f++] });
              else
                try {
                  l[t] = a[f++];
                } catch (r) {
                  l[t] = r;
                }
            else
              try {
                l[t] = c[u++];
              } catch (r) {
                l[t] = r;
              }
            if (e.name && null == l[e.name]) {
              const r = l[t];
              r instanceof Error
                ? Object.defineProperty(l, e.name, {
                    enumerable: !0,
                    get: () => {
                      throw m("property " + JSON.stringify(e.name), r);
                    },
                  })
                : (l[e.name] = r);
            }
          });
          for (let s = 0; s < l.length; s++) {
            const e = l[s];
            e instanceof Error &&
              Object.defineProperty(l, s, {
                enumerable: !0,
                get: () => {
                  throw m("index " + s, e);
                },
              });
          }
          return Object.freeze(l);
        }
        parseTransaction(e) {
          let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
          return t
            ? new TransactionDescription({
                args: this._abiCoder.decode(
                  t.inputs,
                  "0x" + e.data.substring(10),
                ),
                functionFragment: t,
                name: t.name,
                signature: t.format(),
                sighash: this.getSighash(t),
                value: i.BigNumber.from(e.value || "0"),
              })
            : null;
        }
        parseLog(e) {
          let t = this.getEvent(e.topics[0]);
          return !t || t.anonymous
            ? null
            : new LogDescription({
                eventFragment: t,
                name: t.name,
                signature: t.format(),
                topic: this.getEventTopic(t),
                args: this.decodeEventLog(t, e.data, e.topics),
              });
        }
        parseError(e) {
          const t = (0, s.hexlify)(e);
          let r = this.getError(t.substring(0, 10).toLowerCase());
          return r
            ? new ErrorDescription({
                args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null;
        }
        static isInterface(e) {
          return !(!e || !e._isInterface);
        }
      }
      t.Interface = Interface;
    },
    4590: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionOrderForkEvent =
          t.TransactionForkEvent =
          t.Provider =
          t.ForkEvent =
          t.BlockForkEvent =
            void 0));
      var n = r(2829),
        i = r(2776),
        s = r(2808),
        o = r(2773),
        a = r(11403),
        c = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, s) {
            function o(e) {
              try {
                c(n.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(n["throw"](e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : i(e.value).then(o, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const l = new o.Logger(a.version);
      class ForkEvent extends s.Description {
        static isForkEvent(e) {
          return !(!e || !e._isForkEvent);
        }
      }
      t.ForkEvent = ForkEvent;
      class BlockForkEvent extends ForkEvent {
        constructor(e, t) {
          ((0, i.isHexString)(e, 32) ||
            l.throwArgumentError("invalid blockHash", "blockHash", e),
            super({
              _isForkEvent: !0,
              _isBlockForkEvent: !0,
              expiry: t || 0,
              blockHash: e,
            }));
        }
      }
      t.BlockForkEvent = BlockForkEvent;
      class TransactionForkEvent extends ForkEvent {
        constructor(e, t) {
          ((0, i.isHexString)(e, 32) ||
            l.throwArgumentError("invalid transaction hash", "hash", e),
            super({
              _isForkEvent: !0,
              _isTransactionForkEvent: !0,
              expiry: t || 0,
              hash: e,
            }));
        }
      }
      t.TransactionForkEvent = TransactionForkEvent;
      class TransactionOrderForkEvent extends ForkEvent {
        constructor(e, t, r) {
          ((0, i.isHexString)(e, 32) ||
            l.throwArgumentError("invalid transaction hash", "beforeHash", e),
            (0, i.isHexString)(t, 32) ||
              l.throwArgumentError("invalid transaction hash", "afterHash", t),
            super({
              _isForkEvent: !0,
              _isTransactionOrderForkEvent: !0,
              expiry: r || 0,
              beforeHash: e,
              afterHash: t,
            }));
        }
      }
      t.TransactionOrderForkEvent = TransactionOrderForkEvent;
      class Provider {
        constructor() {
          (l.checkAbstract(new.target, Provider),
            (0, s.defineReadOnly)(this, "_isProvider", !0));
        }
        getFeeData() {
          return c(this, void 0, void 0, function* () {
            const { block: e, gasPrice: t } = yield (0, s.resolveProperties)({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((e) => null),
            });
            let r = null,
              i = null,
              o = null;
            return (
              e &&
                e.baseFeePerGas &&
                ((r = e.baseFeePerGas),
                (o = n.BigNumber.from("1500000000")),
                (i = e.baseFeePerGas.mul(2).add(o))),
              {
                lastBaseFeePerGas: r,
                maxFeePerGas: i,
                maxPriorityFeePerGas: o,
                gasPrice: t,
              }
            );
          });
        }
        addListener(e, t) {
          return this.on(e, t);
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
        static isProvider(e) {
          return !(!e || !e._isProvider);
        }
      }
      t.Provider = Provider;
    },
    4874: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoidSigner = t.Signer = void 0));
      var n = r(2808),
        i = r(2773),
        s = r(11404),
        o = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, s) {
            function o(e) {
              try {
                c(n.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(n["throw"](e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : i(e.value).then(o, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const a = new i.Logger(s.version),
        c = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        l = [
          i.Logger.errors.INSUFFICIENT_FUNDS,
          i.Logger.errors.NONCE_EXPIRED,
          i.Logger.errors.REPLACEMENT_UNDERPRICED,
        ];
      class Signer {
        constructor() {
          (a.checkAbstract(new.target, Signer),
            (0, n.defineReadOnly)(this, "_isSigner", !0));
        }
        getBalance(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), e)
            );
          });
        }
        getTransactionCount(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), e)
            );
          });
        }
        estimateGas(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.estimateGas(t);
          });
        }
        call(e, t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const r = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.call(r, t);
          });
        }
        sendTransaction(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const t = yield this.populateTransaction(e),
              r = yield this.signTransaction(t);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            const e = yield this.provider.getNetwork();
            return e.chainId;
          });
        }
        getGasPrice() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(e)
            );
          });
        }
        checkTransaction(e) {
          for (const r in e)
            -1 === c.indexOf(r) &&
              a.throwArgumentError(
                "invalid transaction key: " + r,
                "transaction",
                e,
              );
          const t = (0, n.shallowCopy)(e);
          return (
            null == t.from
              ? (t.from = this.getAddress())
              : (t.from = Promise.all([
                  Promise.resolve(t.from),
                  this.getAddress(),
                ]).then(
                  (t) => (
                    t[0].toLowerCase() !== t[1].toLowerCase() &&
                      a.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        e,
                      ),
                    t[0]
                  ),
                )),
            t
          );
        }
        populateTransaction(e) {
          return o(this, void 0, void 0, function* () {
            const t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            null != t.to &&
              ((t.to = Promise.resolve(t.to).then((e) =>
                o(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  const t = yield this.resolveName(e);
                  return (
                    null == t &&
                      a.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e,
                      ),
                    t
                  );
                }),
              )),
              t.to.catch((e) => {}));
            const r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
            if (
              (null == t.gasPrice || (2 !== t.type && !r)
                ? (0 !== t.type && 1 !== t.type) ||
                  !r ||
                  a.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    e,
                  )
                : a.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    e,
                  ),
              (2 !== t.type && null != t.type) ||
                null == t.maxFeePerGas ||
                null == t.maxPriorityFeePerGas)
            )
              if (0 === t.type || 1 === t.type)
                null == t.gasPrice && (t.gasPrice = this.getGasPrice());
              else {
                const e = yield this.getFeeData();
                if (null == t.type)
                  if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                    if (((t.type = 2), null != t.gasPrice)) {
                      const e = t.gasPrice;
                      (delete t.gasPrice,
                        (t.maxFeePerGas = e),
                        (t.maxPriorityFeePerGas = e));
                    } else
                      (null == t.maxFeePerGas &&
                        (t.maxFeePerGas = e.maxFeePerGas),
                        null == t.maxPriorityFeePerGas &&
                          (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
                  else
                    null != e.gasPrice
                      ? (r &&
                          a.throwError(
                            "network does not support EIP-1559",
                            i.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "populateTransaction" },
                          ),
                        null == t.gasPrice && (t.gasPrice = e.gasPrice),
                        (t.type = 0))
                      : a.throwError(
                          "failed to get consistent fee data",
                          i.Logger.errors.UNSUPPORTED_OPERATION,
                          { operation: "signer.getFeeData" },
                        );
                else
                  2 === t.type &&
                    (null == t.maxFeePerGas &&
                      (t.maxFeePerGas = e.maxFeePerGas),
                    null == t.maxPriorityFeePerGas &&
                      (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
              }
            else t.type = 2;
            return (
              null == t.nonce &&
                (t.nonce = this.getTransactionCount("pending")),
              null == t.gasLimit &&
                (t.gasLimit = this.estimateGas(t).catch((e) => {
                  if (l.indexOf(e.code) >= 0) throw e;
                  return a.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: e, tx: t },
                  );
                })),
              null == t.chainId
                ? (t.chainId = this.getChainId())
                : (t.chainId = Promise.all([
                    Promise.resolve(t.chainId),
                    this.getChainId(),
                  ]).then(
                    (t) => (
                      0 !== t[1] &&
                        t[0] !== t[1] &&
                        a.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          e,
                        ),
                      t[0]
                    ),
                  )),
              yield (0, n.resolveProperties)(t)
            );
          });
        }
        _checkProvider(e) {
          this.provider ||
            a.throwError(
              "missing provider",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: e || "_checkProvider" },
            );
        }
        static isSigner(e) {
          return !(!e || !e._isSigner);
        }
      }
      t.Signer = Signer;
      class VoidSigner extends Signer {
        constructor(e, t) {
          (super(),
            (0, n.defineReadOnly)(this, "address", e),
            (0, n.defineReadOnly)(this, "provider", t || null));
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(e, t) {
          return Promise.resolve().then(() => {
            a.throwError(e, i.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: t,
            });
          });
        }
        signMessage(e) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(e) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction",
          );
        }
        _signTypedData(e, t, r) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData",
          );
        }
        connect(e) {
          return new VoidSigner(this.address, e);
        }
      }
      t.VoidSigner = VoidSigner;
    },
    5712: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultPath = t.HDNode = void 0),
        (t.entropyToMnemonic = C),
        (t.getAccountPath = k),
        (t.isValidMnemonic = F),
        (t.mnemonicToEntropy = x),
        (t.mnemonicToSeed = A));
      var n = r(5713),
        i = r(2776),
        s = r(2829),
        o = r(3016),
        a = r(5714),
        c = r(2808),
        l = r(4623),
        u = r(4591),
        d = r(3271),
        h = r(6918),
        f = r(2773),
        p = r(11412);
      const g = new f.Logger(p.version),
        m = s.BigNumber.from(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
        ),
        y = (0, o.toUtf8Bytes)("Bitcoin seed"),
        v = 2147483648;
      function b(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function w(e) {
        return (1 << e) - 1;
      }
      function E(e) {
        return (0, i.hexZeroPad)((0, i.hexlify)(e), 32);
      }
      function P(e) {
        return n.Base58.encode(
          (0, i.concat)([
            e,
            (0, i.hexDataSlice)((0, u.sha256)((0, u.sha256)(e)), 0, 4),
          ]),
        );
      }
      function _(e) {
        if (null == e) return h.wordlists["en"];
        if ("string" === typeof e) {
          const t = h.wordlists[e];
          return (
            null == t && g.throwArgumentError("unknown locale", "wordlist", e),
            t
          );
        }
        return e;
      }
      const O = {};
      t.defaultPath = "m/44'/60'/0'/0/0";
      class HDNode {
        constructor(e, t, r, n, s, o, a, h) {
          if (e !== O)
            throw new Error("HDNode constructor cannot be called directly");
          if (t) {
            const e = new l.SigningKey(t);
            ((0, c.defineReadOnly)(this, "privateKey", e.privateKey),
              (0, c.defineReadOnly)(this, "publicKey", e.compressedPublicKey));
          } else
            ((0, c.defineReadOnly)(this, "privateKey", null),
              (0, c.defineReadOnly)(this, "publicKey", (0, i.hexlify)(r)));
          ((0, c.defineReadOnly)(this, "parentFingerprint", n),
            (0, c.defineReadOnly)(
              this,
              "fingerprint",
              (0, i.hexDataSlice)(
                (0, u.ripemd160)((0, u.sha256)(this.publicKey)),
                0,
                4,
              ),
            ),
            (0, c.defineReadOnly)(
              this,
              "address",
              (0, d.computeAddress)(this.publicKey),
            ),
            (0, c.defineReadOnly)(this, "chainCode", s),
            (0, c.defineReadOnly)(this, "index", o),
            (0, c.defineReadOnly)(this, "depth", a),
            null == h
              ? ((0, c.defineReadOnly)(this, "mnemonic", null),
                (0, c.defineReadOnly)(this, "path", null))
              : "string" === typeof h
                ? ((0, c.defineReadOnly)(this, "mnemonic", null),
                  (0, c.defineReadOnly)(this, "path", h))
                : ((0, c.defineReadOnly)(this, "mnemonic", h),
                  (0, c.defineReadOnly)(this, "path", h.path)));
        }
        get extendedKey() {
          if (this.depth >= 256) throw new Error("Depth too large!");
          return P(
            (0, i.concat)([
              null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
              (0, i.hexlify)(this.depth),
              this.parentFingerprint,
              (0, i.hexZeroPad)((0, i.hexlify)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? (0, i.concat)(["0x00", this.privateKey])
                : this.publicKey,
            ]),
          );
        }
        neuter() {
          return new HDNode(
            O,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path,
          );
        }
        _derive(e) {
          if (e > 4294967295) throw new Error("invalid index - " + String(e));
          let t = this.path;
          t && (t += "/" + (e & ~v));
          const r = new Uint8Array(37);
          if (e & v) {
            if (!this.privateKey)
              throw new Error("cannot derive child of neutered node");
            (r.set((0, i.arrayify)(this.privateKey), 1), t && (t += "'"));
          } else r.set((0, i.arrayify)(this.publicKey));
          for (let i = 24; i >= 0; i -= 8)
            r[33 + (i >> 3)] = (e >> (24 - i)) & 255;
          const n = (0, i.arrayify)(
              (0, u.computeHmac)(
                u.SupportedAlgorithm.sha512,
                this.chainCode,
                r,
              ),
            ),
            o = n.slice(0, 32),
            a = n.slice(32);
          let c = null,
            d = null;
          if (this.privateKey)
            c = E(s.BigNumber.from(o).add(this.privateKey).mod(m));
          else {
            const e = new l.SigningKey((0, i.hexlify)(o));
            d = e._addPoint(this.publicKey);
          }
          let h = t;
          const f = this.mnemonic;
          return (
            f &&
              (h = Object.freeze({
                phrase: f.phrase,
                path: t,
                locale: f.locale || "en",
              })),
            new HDNode(O, c, d, this.fingerprint, E(a), e, this.depth + 1, h)
          );
        }
        derivePath(e) {
          const t = e.split("/");
          if (0 === t.length || ("m" === t[0] && 0 !== this.depth))
            throw new Error("invalid path - " + e);
          "m" === t[0] && t.shift();
          let r = this;
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (e.match(/^[0-9]+'$/)) {
              const t = parseInt(e.substring(0, e.length - 1));
              if (t >= v) throw new Error("invalid path index - " + e);
              r = r._derive(v + t);
            } else {
              if (!e.match(/^[0-9]+$/))
                throw new Error("invalid path component - " + e);
              {
                const t = parseInt(e);
                if (t >= v) throw new Error("invalid path index - " + e);
                r = r._derive(t);
              }
            }
          }
          return r;
        }
        static _fromSeed(e, t) {
          const r = (0, i.arrayify)(e);
          if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
          const n = (0, i.arrayify)(
            (0, u.computeHmac)(u.SupportedAlgorithm.sha512, y, r),
          );
          return new HDNode(
            O,
            E(n.slice(0, 32)),
            null,
            "0x00000000",
            E(n.slice(32)),
            0,
            0,
            t,
          );
        }
        static fromMnemonic(e, t, r) {
          return (
            (r = _(r)),
            (e = C(x(e, r), r)),
            HDNode._fromSeed(A(e, t), {
              phrase: e,
              path: "m",
              locale: r.locale,
            })
          );
        }
        static fromSeed(e) {
          return HDNode._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          const t = n.Base58.decode(e);
          (82 === t.length && P(t.slice(0, 78)) === e) ||
            g.throwArgumentError(
              "invalid extended key",
              "extendedKey",
              "[REDACTED]",
            );
          const r = t[4],
            s = (0, i.hexlify)(t.slice(5, 9)),
            o = parseInt((0, i.hexlify)(t.slice(9, 13)).substring(2), 16),
            a = (0, i.hexlify)(t.slice(13, 45)),
            c = t.slice(45, 78);
          switch ((0, i.hexlify)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new HDNode(O, null, (0, i.hexlify)(c), s, a, o, r, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== c[0]) break;
              return new HDNode(
                O,
                (0, i.hexlify)(c.slice(1)),
                null,
                s,
                a,
                o,
                r,
                null,
              );
          }
          return g.throwArgumentError(
            "invalid extended key",
            "extendedKey",
            "[REDACTED]",
          );
        }
      }
      function A(e, t) {
        t || (t = "");
        const r = (0, o.toUtf8Bytes)(
          "mnemonic" + t,
          o.UnicodeNormalizationForm.NFKD,
        );
        return (0, a.pbkdf2)(
          (0, o.toUtf8Bytes)(e, o.UnicodeNormalizationForm.NFKD),
          r,
          2048,
          64,
          "sha512",
        );
      }
      function x(e, t) {
        ((t = _(t)), g.checkNormalize());
        const r = t.split(e);
        if (r.length % 3 !== 0) throw new Error("invalid mnemonic");
        const n = (0, i.arrayify)(
          new Uint8Array(Math.ceil((11 * r.length) / 8)),
        );
        let s = 0;
        for (let i = 0; i < r.length; i++) {
          let e = t.getWordIndex(r[i].normalize("NFKD"));
          if (-1 === e) throw new Error("invalid mnemonic");
          for (let t = 0; t < 11; t++)
            (e & (1 << (10 - t)) && (n[s >> 3] |= 1 << (7 - (s % 8))), s++);
        }
        const o = (32 * r.length) / 3,
          a = r.length / 3,
          c = b(a),
          l = (0, i.arrayify)((0, u.sha256)(n.slice(0, o / 8)))[0] & c;
        if (l !== (n[n.length - 1] & c)) throw new Error("invalid checksum");
        return (0, i.hexlify)(n.slice(0, o / 8));
      }
      function C(e, t) {
        if (
          ((t = _(t)),
          (e = (0, i.arrayify)(e)),
          e.length % 4 !== 0 || e.length < 16 || e.length > 32)
        )
          throw new Error("invalid entropy");
        const r = [0];
        let n = 11;
        for (let i = 0; i < e.length; i++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[i]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[i] >> (8 - n)),
              r.push(e[i] & w(8 - n)),
              (n += 3));
        const s = e.length / 4,
          o = (0, i.arrayify)((0, u.sha256)(e))[0] & b(s);
        return (
          (r[r.length - 1] <<= s),
          (r[r.length - 1] |= o >> (8 - s)),
          t.join(r.map((e) => t.getWord(e)))
        );
      }
      function F(e, t) {
        try {
          return (x(e, t), !0);
        } catch (r) {}
        return !1;
      }
      function k(e) {
        return (
          ("number" !== typeof e || e < 0 || e >= v || e % 1) &&
            g.throwArgumentError("invalid account index", "index", e),
          `m/44'/60'/${e}'/0/0`
        );
      }
      t.HDNode = HDNode;
    },
    5713: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BaseX = t.Base58 = t.Base32 = void 0));
      var n = r(2776),
        i = r(2808);
      class BaseX {
        constructor(e) {
          ((0, i.defineReadOnly)(this, "alphabet", e),
            (0, i.defineReadOnly)(this, "base", e.length),
            (0, i.defineReadOnly)(this, "_alphabetMap", {}),
            (0, i.defineReadOnly)(this, "_leader", e.charAt(0)));
          for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t;
        }
        encode(e) {
          let t = (0, n.arrayify)(e);
          if (0 === t.length) return "";
          let r = [0];
          for (let n = 0; n < t.length; ++n) {
            let e = t[n];
            for (let t = 0; t < r.length; ++t)
              ((e += r[t] << 8),
                (r[t] = e % this.base),
                (e = (e / this.base) | 0));
            while (e > 0) (r.push(e % this.base), (e = (e / this.base) | 0));
          }
          let i = "";
          for (let n = 0; 0 === t[n] && n < t.length - 1; ++n)
            i += this._leader;
          for (let n = r.length - 1; n >= 0; --n) i += this.alphabet[r[n]];
          return i;
        }
        decode(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          let t = [];
          if (0 === e.length) return new Uint8Array(t);
          t.push(0);
          for (let r = 0; r < e.length; r++) {
            let n = this._alphabetMap[e[r]];
            if (void 0 === n)
              throw new Error("Non-base" + this.base + " character");
            let i = n;
            for (let e = 0; e < t.length; ++e)
              ((i += t[e] * this.base), (t[e] = 255 & i), (i >>= 8));
            while (i > 0) (t.push(255 & i), (i >>= 8));
          }
          for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
            t.push(0);
          return (0, n.arrayify)(new Uint8Array(t.reverse()));
        }
      }
      t.BaseX = BaseX;
      ((t.Base32 = new BaseX("abcdefghijklmnopqrstuvwxyz234567")),
        (t.Base58 = new BaseX(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        )));
    },
    5714: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pbkdf2", {
          enumerable: !0,
          get: function () {
            return n.pbkdf2;
          },
        }));
      var n = r(11406);
    },
    6920: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "decryptCrowdsale", {
          enumerable: !0,
          get: function () {
            return n.decrypt;
          },
        }),
        (t.decryptJsonWallet = o),
        (t.decryptJsonWalletSync = a),
        Object.defineProperty(t, "decryptKeystore", {
          enumerable: !0,
          get: function () {
            return s.decrypt;
          },
        }),
        Object.defineProperty(t, "decryptKeystoreSync", {
          enumerable: !0,
          get: function () {
            return s.decryptSync;
          },
        }),
        Object.defineProperty(t, "encryptKeystore", {
          enumerable: !0,
          get: function () {
            return s.encrypt;
          },
        }),
        Object.defineProperty(t, "getJsonWalletAddress", {
          enumerable: !0,
          get: function () {
            return i.getJsonWalletAddress;
          },
        }),
        Object.defineProperty(t, "isCrowdsaleWallet", {
          enumerable: !0,
          get: function () {
            return i.isCrowdsaleWallet;
          },
        }),
        Object.defineProperty(t, "isKeystoreWallet", {
          enumerable: !0,
          get: function () {
            return i.isKeystoreWallet;
          },
        }));
      var n = r(11416),
        i = r(11417),
        s = r(11418);
      function o(e, t, r) {
        if ((0, i.isCrowdsaleWallet)(e)) {
          r && r(0);
          const i = (0, n.decrypt)(e, t);
          return (r && r(1), Promise.resolve(i));
        }
        return (0, i.isKeystoreWallet)(e)
          ? (0, s.decrypt)(e, t, r)
          : Promise.reject(new Error("invalid JSON wallet"));
      }
      function a(e, t) {
        if ((0, i.isCrowdsaleWallet)(e)) return (0, n.decrypt)(e, t);
        if ((0, i.isKeystoreWallet)(e)) return (0, s.decryptSync)(e, t);
        throw new Error("invalid JSON wallet");
      }
    },
    6921: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "json-wallets/5.8.0";
    },
    6922: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPassword = a),
        (t.looseArrayify = s),
        (t.searchPath = c),
        (t.uuidV4 = l),
        (t.zpad = o));
      var n = r(2776),
        i = r(3016);
      function s(e) {
        return (
          "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
          (0, n.arrayify)(e)
        );
      }
      function o(e, t) {
        e = String(e);
        while (e.length < t) e = "0" + e;
        return e;
      }
      function a(e) {
        return "string" === typeof e
          ? (0, i.toUtf8Bytes)(e, i.UnicodeNormalizationForm.NFKC)
          : (0, n.arrayify)(e);
      }
      function c(e, t) {
        let r = e;
        const n = t.toLowerCase().split("/");
        for (let i = 0; i < n.length; i++) {
          let e = null;
          for (const t in r)
            if (t.toLowerCase() === n[i]) {
              e = r[t];
              break;
            }
          if (null === e) return null;
          r = e;
        }
        return r;
      }
      function l(e) {
        const t = (0, n.arrayify)(e);
        ((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128));
        const r = (0, n.hexlify)(t);
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join("-");
      }
    },
    6923: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getNetwork = f));
      var n = r(2773),
        i = r(11421);
      const s = new n.Logger(i.version);
      function o(e) {
        return e && "function" === typeof e.renetwork;
      }
      function a(e) {
        const t = function (t, r) {
          null == r && (r = {});
          const n = [];
          if (t.InfuraProvider && "-" !== r.infura)
            try {
              n.push(new t.InfuraProvider(e, r.infura));
            } catch (i) {}
          if (t.EtherscanProvider && "-" !== r.etherscan)
            try {
              n.push(new t.EtherscanProvider(e, r.etherscan));
            } catch (i) {}
          if (t.AlchemyProvider && "-" !== r.alchemy)
            try {
              n.push(new t.AlchemyProvider(e, r.alchemy));
            } catch (i) {}
          if (t.PocketProvider && "-" !== r.pocket) {
            const s = ["goerli", "ropsten", "rinkeby", "sepolia"];
            try {
              const i = new t.PocketProvider(e, r.pocket);
              i.network && -1 === s.indexOf(i.network.name) && n.push(i);
            } catch (i) {}
          }
          if (t.CloudflareProvider && "-" !== r.cloudflare)
            try {
              n.push(new t.CloudflareProvider(e));
            } catch (i) {}
          if (t.AnkrProvider && "-" !== r.ankr)
            try {
              const i = ["ropsten"],
                s = new t.AnkrProvider(e, r.ankr);
              s.network && -1 === i.indexOf(s.network.name) && n.push(s);
            } catch (i) {}
          if (t.QuickNodeProvider && "-" !== r.quicknode)
            try {
              n.push(new t.QuickNodeProvider(e, r.quicknode));
            } catch (i) {}
          if (0 === n.length) return null;
          if (t.FallbackProvider) {
            let i = 1;
            return (
              null != r.quorum ? (i = r.quorum) : "homestead" === e && (i = 2),
              new t.FallbackProvider(n, i)
            );
          }
          return n[0];
        };
        return (
          (t.renetwork = function (e) {
            return a(e);
          }),
          t
        );
      }
      function c(e, t) {
        const r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null;
        };
        return (
          (r.renetwork = function (t) {
            return c(e, t);
          }),
          r
        );
      }
      const l = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: a("homestead"),
        },
        u = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: a("ropsten"),
        },
        d = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: c(
            "https://www.ethercluster.com/mordor",
            "classicMordor",
          ),
        },
        h = {
          unspecified: { chainId: 0, name: "unspecified" },
          homestead: l,
          mainnet: l,
          morden: { chainId: 2, name: "morden" },
          ropsten: u,
          testnet: u,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: a("rinkeby"),
          },
          kovan: { chainId: 42, name: "kovan", _defaultProvider: a("kovan") },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: a("goerli"),
          },
          kintsugi: { chainId: 1337702, name: "kintsugi" },
          sepolia: {
            chainId: 11155111,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "sepolia",
            _defaultProvider: a("sepolia"),
          },
          holesky: {
            chainId: 17e3,
            name: "holesky",
            _defaultProvider: a("holesky"),
          },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: c("https://www.ethercluster.com/etc", "classic"),
          },
          classicMorden: { chainId: 62, name: "classicMorden" },
          classicMordor: d,
          classicTestnet: d,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: c(
              "https://www.ethercluster.com/kotti",
              "classicKotti",
            ),
          },
          xdai: { chainId: 100, name: "xdai" },
          matic: { chainId: 137, name: "matic", _defaultProvider: a("matic") },
          maticmum: {
            chainId: 80001,
            name: "maticmum",
            _defaultProvider: a("maticmum"),
          },
          optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: a("optimism"),
          },
          "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
          "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
          "optimism-sepolia": { chainId: 11155420, name: "optimism-sepolia" },
          arbitrum: { chainId: 42161, name: "arbitrum" },
          "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
          "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
          "arbitrum-sepolia": { chainId: 421614, name: "arbitrum-sepolia" },
          bnb: { chainId: 56, name: "bnb" },
          bnbt: { chainId: 97, name: "bnbt" },
        };
      function f(e) {
        if (null == e) return null;
        if ("number" === typeof e) {
          for (const t in h) {
            const r = h[t];
            if (r.chainId === e)
              return {
                name: r.name,
                chainId: r.chainId,
                ensAddress: r.ensAddress || null,
                _defaultProvider: r._defaultProvider || null,
              };
          }
          return { chainId: e, name: "unknown" };
        }
        if ("string" === typeof e) {
          const t = h[e];
          return null == t
            ? null
            : {
                name: t.name,
                chainId: t.chainId,
                ensAddress: t.ensAddress,
                _defaultProvider: t._defaultProvider || null,
              };
        }
        const t = h[e.name];
        if (!t)
          return (
            "number" !== typeof e.chainId &&
              s.throwArgumentError("invalid network chainId", "network", e),
            e
          );
        0 !== e.chainId &&
          e.chainId !== t.chainId &&
          s.throwArgumentError("network chainId mismatch", "network", e);
        let r = e._defaultProvider || null;
        return (
          null == r &&
            t._defaultProvider &&
            (r = o(t._defaultProvider)
              ? t._defaultProvider.renetwork(e)
              : t._defaultProvider),
          {
            name: e.name,
            chainId: t.chainId,
            ensAddress: e.ensAddress || t.ensAddress || null,
            _defaultProvider: r,
          }
        );
      }
    },
  },
]);
