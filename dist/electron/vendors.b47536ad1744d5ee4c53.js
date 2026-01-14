(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [105],
  {
    1283: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ContractFactory = t.Contract = t.BaseContract = void 0));
      var n = r(1284),
        i = r(1316),
        o = r(1318),
        s = r(136),
        a = r(62),
        u = r(32),
        c = r(63),
        l = r(1320),
        d = r(36),
        h = r(1330),
        g = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              e.done ? r(e.value) : i(e.value).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      const m = new d.Logger(h.version),
        f = {
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
      function p(e, t) {
        return g(this, void 0, void 0, function* () {
          const r = yield t;
          "string" !== typeof r &&
            m.throwArgumentError("invalid address or ENS name", "name", r);
          try {
            return (0, s.getAddress)(r);
          } catch (i) {}
          e ||
            m.throwError(
              "a provider or signer is needed to resolve ENS names",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "resolveName" },
            );
          const n = yield e.resolveName(r);
          return (
            null == n &&
              m.throwArgumentError(
                "resolver or addr is not configured for ENS name",
                "name",
                r,
              ),
            n
          );
        });
      }
      function y(e, t, r) {
        return g(this, void 0, void 0, function* () {
          return Array.isArray(r)
            ? yield Promise.all(
                r.map((r, n) => y(e, Array.isArray(t) ? t[n] : t[r.name], r)),
              )
            : "address" === r.type
              ? yield p(e, t)
              : "tuple" === r.type
                ? yield y(e, t, r.components)
                : "array" === r.baseType
                  ? Array.isArray(t)
                    ? yield Promise.all(t.map((t) => y(e, t, r.arrayChildren)))
                    : Promise.reject(
                        m.makeError(
                          "invalid value for array",
                          d.Logger.errors.INVALID_ARGUMENT,
                          { argument: "value", value: t },
                        ),
                      )
                  : t;
        });
      }
      function v(e, t, r) {
        return g(this, void 0, void 0, function* () {
          let n = {};
          (r.length === t.inputs.length + 1 &&
            "object" === typeof r[r.length - 1] &&
            (n = (0, c.shallowCopy)(r.pop())),
            m.checkArgumentCount(
              r.length,
              t.inputs.length,
              "passed to contract",
            ),
            e.signer
              ? n.from
                ? (n.from = (0, c.resolveProperties)({
                    override: p(e.signer, n.from),
                    signer: e.signer.getAddress(),
                  }).then((e) =>
                    g(this, void 0, void 0, function* () {
                      return (
                        (0, s.getAddress)(e.signer) !== e.override &&
                          m.throwError(
                            "Contract with a Signer cannot override from",
                            d.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "overrides.from" },
                          ),
                        e.override
                      );
                    }),
                  ))
                : (n.from = e.signer.getAddress())
              : n.from && (n.from = p(e.provider, n.from)));
          const i = yield (0, c.resolveProperties)({
              args: y(e.signer || e.provider, r, t.inputs),
              address: e.resolvedAddress,
              overrides: (0, c.resolveProperties)(n) || {},
            }),
            o = e.interface.encodeFunctionData(t, i.args),
            h = { data: o, to: i.address },
            f = i.overrides;
          if (
            (null != f.nonce &&
              (h.nonce = a.BigNumber.from(f.nonce).toNumber()),
            null != f.gasLimit && (h.gasLimit = a.BigNumber.from(f.gasLimit)),
            null != f.gasPrice && (h.gasPrice = a.BigNumber.from(f.gasPrice)),
            null != f.maxFeePerGas &&
              (h.maxFeePerGas = a.BigNumber.from(f.maxFeePerGas)),
            null != f.maxPriorityFeePerGas &&
              (h.maxPriorityFeePerGas = a.BigNumber.from(
                f.maxPriorityFeePerGas,
              )),
            null != f.from && (h.from = f.from),
            null != f.type && (h.type = f.type),
            null != f.accessList &&
              (h.accessList = (0, l.accessListify)(f.accessList)),
            null == h.gasLimit && null != t.gas)
          ) {
            let e = 21e3;
            const r = (0, u.arrayify)(o);
            for (let t = 0; t < r.length; t++) ((e += 4), r[t] && (e += 64));
            h.gasLimit = a.BigNumber.from(t.gas).add(e);
          }
          if (f.value) {
            const e = a.BigNumber.from(f.value);
            (e.isZero() ||
              t.payable ||
              m.throwError(
                "non-payable method cannot override value",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: n.value },
              ),
              (h.value = e));
          }
          (f.customData && (h.customData = (0, c.shallowCopy)(f.customData)),
            f.ccipReadEnabled && (h.ccipReadEnabled = !!f.ccipReadEnabled),
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
              m.throwError(
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
      function E(e, t) {
        const r = e.signer || e.provider;
        return function () {
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return g(this, void 0, void 0, function* () {
            r ||
              m.throwError(
                "estimate require a provider or signer",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "estimateGas" },
              );
            const n = yield v(e, t, i);
            return yield r.estimateGas(n);
          });
        };
      }
      function w(e, t) {
        const r = t.wait.bind(t);
        t.wait = (t) =>
          r(t).then(
            (t) => (
              (t.events = t.logs.map((r) => {
                let n = (0, c.deepCopy)(r),
                  i = null;
                try {
                  i = e.interface.parseLog(r);
                } catch (o) {}
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
      function _(e, t, r) {
        const n = e.signer || e.provider;
        return function () {
          for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
            o[s] = arguments[s];
          return g(this, void 0, void 0, function* () {
            let i = void 0;
            if (
              o.length === t.inputs.length + 1 &&
              "object" === typeof o[o.length - 1]
            ) {
              const e = (0, c.shallowCopy)(o.pop());
              (null != e.blockTag && (i = yield e.blockTag),
                delete e.blockTag,
                o.push(e));
            }
            null != e.deployTransaction && (yield e._deployed(i));
            const s = yield v(e, t, o),
              a = yield n.call(s, i);
            try {
              let n = e.interface.decodeFunctionResult(t, a);
              return (r && 1 === t.outputs.length && (n = n[0]), n);
            } catch (u) {
              throw (
                u.code === d.Logger.errors.CALL_EXCEPTION &&
                  ((u.address = e.address), (u.args = o), (u.transaction = s)),
                u
              );
            }
          });
        };
      }
      function x(e, t) {
        return function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return g(this, void 0, void 0, function* () {
            (e.signer ||
              m.throwError(
                "sending a transaction requires a signer",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "sendTransaction" },
              ),
              null != e.deployTransaction && (yield e._deployed()));
            const r = yield v(e, t, n),
              i = yield e.signer.sendTransaction(r);
            return (w(e, i), i);
          });
        };
      }
      function P(e, t, r) {
        return t.constant ? _(e, t, r) : x(e, t);
      }
      function F(e) {
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
          ((0, c.defineReadOnly)(this, "tag", e),
            (0, c.defineReadOnly)(this, "filter", t),
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
          let o = t.getEventTopic(r);
          (n
            ? (o !== n[0] &&
                m.throwArgumentError("topic mismatch", "topics", n),
              (i.topics = n.slice()))
            : (i.topics = [o]),
            super(F(i), i),
            (0, c.defineReadOnly)(this, "address", e),
            (0, c.defineReadOnly)(this, "interface", t),
            (0, c.defineReadOnly)(this, "fragment", r));
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
            (0, c.defineReadOnly)(this, "address", e),
            (0, c.defineReadOnly)(this, "interface", t));
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
          ((0, c.defineReadOnly)(
            this,
            "interface",
            (0, c.getStatic)(new.target, "getInterface")(t),
          ),
            null == r
              ? ((0, c.defineReadOnly)(this, "provider", null),
                (0, c.defineReadOnly)(this, "signer", null))
              : o.Signer.isSigner(r)
                ? ((0, c.defineReadOnly)(this, "provider", r.provider || null),
                  (0, c.defineReadOnly)(this, "signer", r))
                : i.Provider.isProvider(r)
                  ? ((0, c.defineReadOnly)(this, "provider", r),
                    (0, c.defineReadOnly)(this, "signer", null))
                  : m.throwArgumentError(
                      "invalid signer or provider",
                      "signerOrProvider",
                      r,
                    ),
            (0, c.defineReadOnly)(this, "callStatic", {}),
            (0, c.defineReadOnly)(this, "estimateGas", {}),
            (0, c.defineReadOnly)(this, "functions", {}),
            (0, c.defineReadOnly)(this, "populateTransaction", {}),
            (0, c.defineReadOnly)(this, "filters", {}));
          {
            const e = {};
            (Object.keys(this.interface.events).forEach((t) => {
              const r = this.interface.events[t];
              ((0, c.defineReadOnly)(this.filters, t, function () {
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
                  ? (0, c.defineReadOnly)(this.filters, t, this.filters[r[0]])
                  : m.warn(`Duplicate definition of ${t} (${r.join(", ")})`);
              }));
          }
          if (
            ((0, c.defineReadOnly)(this, "_runningEvents", {}),
            (0, c.defineReadOnly)(this, "_wrappedEmits", {}),
            null == e &&
              m.throwArgumentError(
                "invalid contract address or ENS name",
                "addressOrName",
                e,
              ),
            (0, c.defineReadOnly)(this, "address", e),
            this.provider)
          )
            (0, c.defineReadOnly)(this, "resolvedAddress", p(this.provider, e));
          else
            try {
              (0, c.defineReadOnly)(
                this,
                "resolvedAddress",
                Promise.resolve((0, s.getAddress)(e)),
              );
            } catch (l) {
              m.throwError(
                "provider is required to use ENS name as contract address",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "new Contract" },
              );
            }
          this.resolvedAddress.catch((e) => {});
          const a = {},
            u = {};
          (Object.keys(this.interface.functions).forEach((e) => {
            const t = this.interface.functions[e];
            if (u[e]) m.warn("Duplicate ABI entry for " + JSON.stringify(e));
            else {
              u[e] = !0;
              {
                const r = t.name;
                (a["%" + r] || (a["%" + r] = []), a["%" + r].push(e));
              }
              (null == this[e] &&
                (0, c.defineReadOnly)(this, e, P(this, t, !0)),
                null == this.functions[e] &&
                  (0, c.defineReadOnly)(this.functions, e, P(this, t, !1)),
                null == this.callStatic[e] &&
                  (0, c.defineReadOnly)(this.callStatic, e, _(this, t, !0)),
                null == this.populateTransaction[e] &&
                  (0, c.defineReadOnly)(
                    this.populateTransaction,
                    e,
                    b(this, t),
                  ),
                null == this.estimateGas[e] &&
                  (0, c.defineReadOnly)(this.estimateGas, e, E(this, t)));
            }
          }),
            Object.keys(a).forEach((e) => {
              const t = a[e];
              if (t.length > 1) return;
              e = e.substring(1);
              const r = t[0];
              try {
                null == this[e] && (0, c.defineReadOnly)(this, e, this[r]);
              } catch (n) {}
              (null == this.functions[e] &&
                (0, c.defineReadOnly)(this.functions, e, this.functions[r]),
                null == this.callStatic[e] &&
                  (0, c.defineReadOnly)(this.callStatic, e, this.callStatic[r]),
                null == this.populateTransaction[e] &&
                  (0, c.defineReadOnly)(
                    this.populateTransaction,
                    e,
                    this.populateTransaction[r],
                  ),
                null == this.estimateGas[e] &&
                  (0, c.defineReadOnly)(
                    this.estimateGas,
                    e,
                    this.estimateGas[r],
                  ));
            }));
        }
        static getContractAddress(e) {
          return (0, s.getContractAddress)(e);
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
                          m.throwError(
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
            m.throwError(
              "sending a transactions require a signer",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "sendTransaction(fallback)" },
            );
          const t = (0, c.shallowCopy)(e || {});
          return (
            ["from", "to"].forEach(function (e) {
              null != t[e] &&
                m.throwError(
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
          "string" === typeof e && (e = new o.VoidSigner(e, this.provider));
          const t = new this.constructor(this.address, this.interface, e);
          return (
            this.deployTransaction &&
              (0, c.defineReadOnly)(
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
            return this._normalizeRunningEvent(new RunningEvent(F(r), r));
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
          const n = (0, c.deepCopy)(t);
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
              m.throwError(
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
            i = (0, c.shallowCopy)(n.filter);
          return (
            "string" === typeof t && (0, u.isHexString)(t, 32)
              ? (null != r &&
                  m.throwArgumentError(
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
          const o = t.run(n) > 0;
          return (this._checkRunningEvents(t), o);
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
              : (0, u.isBytes)(t)
                ? (0, u.hexlify)(t)
                : t && "string" === typeof t.object
                  ? t.object
                  : "!"),
            "0x" !== n.substring(0, 2) && (n = "0x" + n),
            (!(0, u.isHexString)(n) || n.length % 2) &&
              m.throwArgumentError("invalid bytecode", "bytecode", t),
            r &&
              !o.Signer.isSigner(r) &&
              m.throwArgumentError("invalid signer", "signer", r),
            (0, c.defineReadOnly)(this, "bytecode", n),
            (0, c.defineReadOnly)(
              this,
              "interface",
              (0, c.getStatic)(new.target, "getInterface")(e),
            ),
            (0, c.defineReadOnly)(this, "signer", r || null));
        }
        getDeployTransaction() {
          let e = {};
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          if (
            r.length === this.interface.deploy.inputs.length + 1 &&
            "object" === typeof r[r.length - 1]
          ) {
            e = (0, c.shallowCopy)(r.pop());
            for (const t in e)
              if (!f[t]) throw new Error("unknown transaction override " + t);
          }
          if (
            (["data", "from", "to"].forEach((t) => {
              null != e[t] &&
                m.throwError(
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
              m.throwError(
                "non-payable constructor cannot override value",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: e.value },
              );
          }
          return (
            m.checkArgumentCount(
              r.length,
              this.interface.deploy.inputs.length,
              " in Contract constructor",
            ),
            (e.data = (0, u.hexlify)(
              (0, u.concat)([this.bytecode, this.interface.encodeDeploy(r)]),
            )),
            e
          );
        }
        deploy() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return g(this, void 0, void 0, function* () {
            let e = {};
            (t.length === this.interface.deploy.inputs.length + 1 &&
              (e = t.pop()),
              m.checkArgumentCount(
                t.length,
                this.interface.deploy.inputs.length,
                " in Contract constructor",
              ));
            const r = yield y(this.signer, t, this.interface.deploy.inputs);
            r.push(e);
            const n = this.getDeployTransaction(...r),
              i = yield this.signer.sendTransaction(n),
              o = (0, c.getStatic)(this.constructor, "getContractAddress")(i),
              s = (0, c.getStatic)(this.constructor, "getContract")(
                o,
                this.interface,
                this.signer,
              );
            return (
              w(s, i),
              (0, c.defineReadOnly)(s, "deployTransaction", i),
              s
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
            m.throwError(
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
          return (0, s.getContractAddress)(e);
        }
        static getContract(e, t, r) {
          return new Contract(e, t, r);
        }
      }
      t.ContractFactory = ContractFactory;
    },
    1284: function (e, t, r) {
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
            return o.Indexed;
          },
        }),
        Object.defineProperty(t, "Interface", {
          enumerable: !0,
          get: function () {
            return o.Interface;
          },
        }),
        Object.defineProperty(t, "LogDescription", {
          enumerable: !0,
          get: function () {
            return o.LogDescription;
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
            return o.TransactionDescription;
          },
        }),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return o.checkResultErrors;
          },
        }),
        Object.defineProperty(t, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return i.defaultAbiCoder;
          },
        }));
      var n = r(263),
        i = r(479),
        o = r(1307);
    },
    1287: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "bytes/5.8.0";
    },
    1288: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FixedNumber = t.FixedFormat = void 0),
        (t.formatFixed = m),
        (t.parseFixed = f));
      var n = r(32),
        i = r(36),
        o = r(478),
        s = r(476);
      const a = new i.Logger(o.version),
        u = {},
        c = s.BigNumber.from(0),
        l = s.BigNumber.from(-1);
      function d(e, t, r, n) {
        const o = { fault: t, operation: r };
        return (
          void 0 !== n && (o.value = n),
          a.throwError(e, i.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let h = "0";
      while (h.length < 256) h += h;
      function g(e) {
        if ("number" !== typeof e)
          try {
            e = s.BigNumber.from(e).toNumber();
          } catch (t) {}
        return "number" === typeof e && e >= 0 && e <= 256 && !(e % 1)
          ? "1" + h.substring(0, e)
          : a.throwArgumentError("invalid decimal size", "decimals", e);
      }
      function m(e, t) {
        null == t && (t = 0);
        const r = g(t);
        e = s.BigNumber.from(e);
        const n = e.lt(c);
        n && (e = e.mul(l));
        let i = e.mod(r).toString();
        while (i.length < r.length - 1) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = e.div(r).toString();
        return ((e = 1 === r.length ? o : o + "." + i), n && (e = "-" + e), e);
      }
      function f(e, t) {
        null == t && (t = 0);
        const r = g(t);
        ("string" === typeof e && e.match(/^-?[0-9.]+$/)) ||
          a.throwArgumentError("invalid decimal value", "value", e);
        const n = "-" === e.substring(0, 1);
        (n && (e = e.substring(1)),
          "." === e && a.throwArgumentError("missing value", "value", e));
        const i = e.split(".");
        i.length > 2 &&
          a.throwArgumentError("too many decimal points", "value", e);
        let o = i[0],
          u = i[1];
        (o || (o = "0"), u || (u = "0"));
        while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
        (u.length > r.length - 1 &&
          d("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < r.length - 1) u += "0";
        const c = s.BigNumber.from(o),
          h = s.BigNumber.from(u);
        let m = c.mul(r).add(h);
        return (n && (m = m.mul(l)), m);
      }
      class FixedFormat {
        constructor(e, t, r, n) {
          (e !== u &&
            a.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = t),
            (this.width = r),
            (this.decimals = n),
            (this.name =
              (t ? "" : "u") + "fixed" + String(r) + "x" + String(n)),
            (this._multiplier = g(n)),
            Object.freeze(this));
        }
        static from(e) {
          if (e instanceof FixedFormat) return e;
          "number" === typeof e && (e = "fixed128x" + e);
          let t = !0,
            r = 128,
            n = 18;
          if ("string" === typeof e)
            if ("fixed" === e);
            else if ("ufixed" === e) t = !1;
            else {
              const i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (i || a.throwArgumentError("invalid fixed format", "format", e),
                (t = "u" !== i[1]),
                (r = parseInt(i[2])),
                (n = parseInt(i[3])));
            }
          else if (e) {
            const i = (t, r, n) =>
              null == e[t]
                ? n
                : (typeof e[t] !== r &&
                    a.throwArgumentError(
                      "invalid fixed format (" + t + " not " + r + ")",
                      "format." + t,
                      e[t],
                    ),
                  e[t]);
            ((t = i("signed", "boolean", t)),
              (r = i("width", "number", r)),
              (n = i("decimals", "number", n)));
          }
          return (
            r % 8 &&
              a.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r,
              ),
            n > 80 &&
              a.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                n,
              ),
            new FixedFormat(u, t, r, n)
          );
        }
      }
      t.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(e, t, r, n) {
          (e !== u &&
            a.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = n),
            (this._hex = t),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(e) {
          this.format.name !== e.format.name &&
            a.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              e,
            );
        }
        addUnsafe(e) {
          this._checkFormat(e);
          const t = f(this._value, this.format.decimals),
            r = f(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.add(r),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(e) {
          this._checkFormat(e);
          const t = f(this._value, this.format.decimals),
            r = f(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.sub(r),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(e) {
          this._checkFormat(e);
          const t = f(this._value, this.format.decimals),
            r = f(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(e) {
          this._checkFormat(e);
          const t = f(this._value, this.format.decimals),
            r = f(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = FixedNumber.from(e[0], this.format);
          const r = !e[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (t = t.subUnsafe(p.toFormat(t.format))),
            t
          );
        }
        ceiling() {
          const e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = FixedNumber.from(e[0], this.format);
          const r = !e[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (t = t.addUnsafe(p.toFormat(t.format))),
            t
          );
        }
        round(e) {
          null == e && (e = 0);
          const t = this.toString().split(".");
          if (
            (1 === t.length && t.push("0"),
            (e < 0 || e > 80 || e % 1) &&
              a.throwArgumentError("invalid decimal count", "decimals", e),
            t[1].length <= e)
          )
            return this;
          const r = FixedNumber.from("1" + h.substring(0, e), this.format),
            n = y.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(e) {
          if (null == e) return this._hex;
          e % 8 && a.throwArgumentError("invalid byte width", "width", e);
          const t = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(e)
            .toHexString();
          return (0, n.hexZeroPad)(t, e / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return FixedNumber.fromString(this._value, e);
        }
        static fromValue(e, t, r) {
          return (
            null != r ||
              null == t ||
              (0, s.isBigNumberish)(t) ||
              ((r = t), (t = null)),
            null == t && (t = 0),
            null == r && (r = "fixed"),
            FixedNumber.fromString(m(e, t), FixedFormat.from(r))
          );
        }
        static fromString(e, t) {
          null == t && (t = "fixed");
          const r = FixedFormat.from(t),
            i = f(e, r.decimals);
          !r.signed &&
            i.lt(c) &&
            d("unsigned value cannot be negative", "overflow", "value", e);
          let o = null;
          r.signed
            ? (o = i.toTwos(r.width).toHexString())
            : ((o = i.toHexString()), (o = (0, n.hexZeroPad)(o, r.width / 8)));
          const s = m(i, r.decimals);
          return new FixedNumber(u, o, s, r);
        }
        static fromBytes(e, t) {
          null == t && (t = "fixed");
          const r = FixedFormat.from(t);
          if ((0, n.arrayify)(e).length > r.width / 8)
            throw new Error("overflow");
          let i = s.BigNumber.from(e);
          r.signed && (i = i.fromTwos(r.width));
          const o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            a = m(i, r.decimals);
          return new FixedNumber(u, o, a, r);
        }
        static from(e, t) {
          if ("string" === typeof e) return FixedNumber.fromString(e, t);
          if ((0, n.isBytes)(e)) return FixedNumber.fromBytes(e, t);
          try {
            return FixedNumber.fromValue(e, 0, t);
          } catch (r) {
            if (r.code !== i.Logger.errors.INVALID_ARGUMENT) throw r;
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", e);
        }
        static isFixedNumber(e) {
          return !(!e || !e._isFixedNumber);
        }
      }
      t.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        y = FixedNumber.from("0.5");
    },
    1290: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressCoder = void 0));
      var n = r(136),
        i = r(32),
        o = r(55);
      class AddressCoder extends o.Coder {
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
    1292: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "address/5.8.0";
    },
    1293: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnonymousCoder = void 0));
      var n = r(55);
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
    1294: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BooleanCoder = void 0));
      var n = r(55);
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
    1295: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FixedBytesCoder = void 0));
      var n = r(32),
        i = r(55);
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
    1296: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NullCoder = void 0));
      var n = r(55);
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
    1297: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NumberCoder = void 0));
      var n = r(62),
        i = r(264),
        o = r(55);
      class NumberCoder extends o.Coder {
        constructor(e, t, r) {
          const n = (t ? "int" : "uint") + 8 * e;
          (super(n, n, r, !1), (this.size = e), (this.signed = t));
        }
        defaultValue() {
          return 0;
        }
        encode(e, t) {
          let r = n.BigNumber.from(t),
            o = i.MaxUint256.mask(8 * e.wordSize);
          if (this.signed) {
            let e = o.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(i.One).mul(i.NegativeOne))) &&
              this._throwError("value out-of-bounds", t);
          } else
            (r.lt(i.Zero) || r.gt(o.mask(8 * this.size))) &&
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
    1302: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StringCoder = void 0));
      var n = r(137),
        i = r(482);
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
    1306: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TupleCoder = void 0));
      var n = r(55),
        i = r(481);
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
    1307: function (e, t, r) {
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
            return l.checkResultErrors;
          },
        }));
      var n = r(136),
        i = r(62),
        o = r(32),
        s = r(1308),
        a = r(88),
        u = r(63),
        c = r(479),
        l = r(55),
        d = r(263),
        h = r(36),
        g = r(135);
      const m = new h.Logger(g.version);
      class LogDescription extends u.Description {}
      t.LogDescription = LogDescription;
      class TransactionDescription extends u.Description {}
      t.TransactionDescription = TransactionDescription;
      class ErrorDescription extends u.Description {}
      t.ErrorDescription = ErrorDescription;
      class Indexed extends u.Description {
        static isIndexed(e) {
          return !(!e || !e._isIndexed);
        }
      }
      t.Indexed = Indexed;
      const f = {
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
      function p(e, t) {
        const r = new Error(
          "deferred error during ABI decoding triggered accessing " + e,
        );
        return ((r.error = t), r);
      }
      class Interface {
        constructor(e) {
          let t = [];
          ((t = "string" === typeof e ? JSON.parse(e) : e),
            (0, u.defineReadOnly)(
              this,
              "fragments",
              t.map((e) => d.Fragment.from(e)).filter((e) => null != e),
            ),
            (0, u.defineReadOnly)(
              this,
              "_abiCoder",
              (0, u.getStatic)(new.target, "getAbiCoder")(),
            ),
            (0, u.defineReadOnly)(this, "functions", {}),
            (0, u.defineReadOnly)(this, "errors", {}),
            (0, u.defineReadOnly)(this, "events", {}),
            (0, u.defineReadOnly)(this, "structs", {}),
            this.fragments.forEach((e) => {
              let t = null;
              switch (e.type) {
                case "constructor":
                  return this.deploy
                    ? void m.warn("duplicate definition - constructor")
                    : void (0, u.defineReadOnly)(this, "deploy", e);
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
              t[r] ? m.warn("duplicate definition - " + r) : (t[r] = e);
            }),
            this.deploy ||
              (0, u.defineReadOnly)(
                this,
                "deploy",
                d.ConstructorFragment.from({
                  payable: !1,
                  type: "constructor",
                }),
              ),
            (0, u.defineReadOnly)(this, "_isInterface", !0));
        }
        format(e) {
          (e || (e = d.FormatTypes.full),
            e === d.FormatTypes.sighash &&
              m.throwArgumentError(
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
          return c.defaultAbiCoder;
        }
        static getAddress(e) {
          return (0, n.getAddress)(e);
        }
        static getSighash(e) {
          return (0, o.hexDataSlice)((0, s.id)(e.format()), 0, 4);
        }
        static getEventTopic(e) {
          return (0, s.id)(e.format());
        }
        getFunction(e) {
          if ((0, o.isHexString)(e)) {
            for (const t in this.functions)
              if (e === this.getSighash(t)) return this.functions[t];
            m.throwArgumentError("no matching function", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.functions).filter(
                (e) => e.split("(")[0] === t,
              );
            return (
              0 === r.length
                ? m.throwArgumentError("no matching function", "name", t)
                : r.length > 1 &&
                  m.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    t,
                  ),
              this.functions[r[0]]
            );
          }
          const t = this.functions[d.FunctionFragment.fromString(e).format()];
          return (
            t || m.throwArgumentError("no matching function", "signature", e),
            t
          );
        }
        getEvent(e) {
          if ((0, o.isHexString)(e)) {
            const t = e.toLowerCase();
            for (const e in this.events)
              if (t === this.getEventTopic(e)) return this.events[e];
            m.throwArgumentError("no matching event", "topichash", t);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.events).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? m.throwArgumentError("no matching event", "name", t)
                : r.length > 1 &&
                  m.throwArgumentError("multiple matching events", "name", t),
              this.events[r[0]]
            );
          }
          const t = this.events[d.EventFragment.fromString(e).format()];
          return (
            t || m.throwArgumentError("no matching event", "signature", e),
            t
          );
        }
        getError(e) {
          if ((0, o.isHexString)(e)) {
            const t = (0, u.getStatic)(this.constructor, "getSighash");
            for (const r in this.errors) {
              const n = this.errors[r];
              if (e === t(n)) return this.errors[r];
            }
            m.throwArgumentError("no matching error", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.errors).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? m.throwArgumentError("no matching error", "name", t)
                : r.length > 1 &&
                  m.throwArgumentError("multiple matching errors", "name", t),
              this.errors[r[0]]
            );
          }
          const t = this.errors[d.FunctionFragment.fromString(e).format()];
          return (
            t || m.throwArgumentError("no matching error", "signature", e),
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
          return (0, u.getStatic)(this.constructor, "getSighash")(e);
        }
        getEventTopic(e) {
          return (
            "string" === typeof e && (e = this.getEvent(e)),
            (0, u.getStatic)(this.constructor, "getEventTopic")(e)
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
          const r = (0, o.arrayify)(t);
          return (
            (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              m.throwArgumentError(
                `data signature does not match error ${e.name}.`,
                "data",
                (0, o.hexlify)(r),
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeErrorResult(e, t) {
          return (
            "string" === typeof e && (e = this.getError(e)),
            (0, o.hexlify)(
              (0, o.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ]),
            )
          );
        }
        decodeFunctionData(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          const r = (0, o.arrayify)(t);
          return (
            (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              m.throwArgumentError(
                `data signature does not match function ${e.name}.`,
                "data",
                (0, o.hexlify)(r),
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeFunctionData(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, o.hexlify)(
              (0, o.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ]),
            )
          );
        }
        decodeFunctionResult(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          let r = (0, o.arrayify)(t),
            n = null,
            i = "",
            s = null,
            a = null,
            u = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r);
              } catch (c) {}
              break;
            case 4: {
              const e = (0, o.hexlify)(r.slice(0, 4)),
                t = f[e];
              if (t)
                ((s = this._abiCoder.decode(t.inputs, r.slice(4))),
                  (a = t.name),
                  (u = t.signature),
                  t.reason && (n = s[0]),
                  "Error" === a
                    ? (i =
                        "; VM Exception while processing transaction: reverted with reason string " +
                        JSON.stringify(s[0]))
                    : "Panic" === a &&
                      (i =
                        "; VM Exception while processing transaction: reverted with panic code " +
                        s[0]));
              else
                try {
                  const t = this.getError(e);
                  ((s = this._abiCoder.decode(t.inputs, r.slice(4))),
                    (a = t.name),
                    (u = t.format()));
                } catch (c) {}
              break;
            }
          }
          return m.throwError(
            "call revert exception" + i,
            h.Logger.errors.CALL_EXCEPTION,
            {
              method: e.format(),
              data: (0, o.hexlify)(t),
              errorArgs: s,
              errorName: a,
              errorSignature: u,
              reason: n,
            },
          );
        }
        encodeFunctionResult(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, o.hexlify)(this._abiCoder.encode(e.outputs, t || []))
          );
        }
        encodeFilterTopics(e, t) {
          ("string" === typeof e && (e = this.getEvent(e)),
            t.length > e.inputs.length &&
              m.throwError(
                "too many arguments for " + e.format(),
                h.Logger.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: t },
              ));
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          const n = (e, t) =>
            "string" === e.type
              ? (0, s.id)(t)
              : "bytes" === e.type
                ? (0, a.keccak256)((0, o.hexlify)(t))
                : ("bool" === e.type &&
                    "boolean" === typeof t &&
                    (t = t ? "0x01" : "0x00"),
                  e.type.match(/^u?int/) &&
                    (t = i.BigNumber.from(t).toHexString()),
                  "address" === e.type &&
                    this._abiCoder.encode(["address"], [t]),
                  (0, o.hexZeroPad)((0, o.hexlify)(t), 32));
          t.forEach((t, i) => {
            let o = e.inputs[i];
            o.indexed
              ? null == t
                ? r.push(null)
                : "array" === o.baseType || "tuple" === o.baseType
                  ? m.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + o.name,
                      t,
                    )
                  : Array.isArray(t)
                    ? r.push(t.map((e) => n(o, e)))
                    : r.push(n(o, t))
              : null != t &&
                m.throwArgumentError(
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + o.name,
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
              m.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                t,
              ),
            e.inputs.forEach((e, o) => {
              const u = t[o];
              if (e.indexed)
                if ("string" === e.type) r.push((0, s.id)(u));
                else if ("bytes" === e.type) r.push((0, a.keccak256)(u));
                else {
                  if ("tuple" === e.baseType || "array" === e.baseType)
                    throw new Error("not implemented");
                  r.push(this._abiCoder.encode([e.type], [u]));
                }
              else (n.push(e), i.push(u));
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
            (((0, o.isHexString)(r[0], 32) && r[0].toLowerCase() === t) ||
              m.throwError(
                "fragment/topic mismatch",
                h.Logger.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: t, value: r[0] },
              ),
              (r = r.slice(1)));
          }
          let n = [],
            i = [],
            s = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (n.push(
                    d.ParamType.fromObject({ type: "bytes32", name: e.name }),
                  ),
                  s.push(!0))
                : (n.push(e), s.push(!1))
              : (i.push(e), s.push(!1));
          });
          let a = null != r ? this._abiCoder.decode(n, (0, o.concat)(r)) : null,
            u = this._abiCoder.decode(i, t, !0),
            c = [],
            l = 0,
            g = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed)
              if (null == a) c[t] = new Indexed({ _isIndexed: !0, hash: null });
              else if (s[t])
                c[t] = new Indexed({ _isIndexed: !0, hash: a[g++] });
              else
                try {
                  c[t] = a[g++];
                } catch (r) {
                  c[t] = r;
                }
            else
              try {
                c[t] = u[l++];
              } catch (r) {
                c[t] = r;
              }
            if (e.name && null == c[e.name]) {
              const r = c[t];
              r instanceof Error
                ? Object.defineProperty(c, e.name, {
                    enumerable: !0,
                    get: () => {
                      throw p("property " + JSON.stringify(e.name), r);
                    },
                  })
                : (c[e.name] = r);
            }
          });
          for (let o = 0; o < c.length; o++) {
            const e = c[o];
            e instanceof Error &&
              Object.defineProperty(c, o, {
                enumerable: !0,
                get: () => {
                  throw p("index " + o, e);
                },
              });
          }
          return Object.freeze(c);
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
          const t = (0, o.hexlify)(e);
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
    1312: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "decode", {
          enumerable: !0,
          get: function () {
            return n.decode;
          },
        }),
        Object.defineProperty(t, "encode", {
          enumerable: !0,
          get: function () {
            return n.encode;
          },
        }));
      var n = r(1313);
    },
    1313: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = i),
        (t.encode = o));
      var n = r(32);
      function i(e) {
        e = atob(e);
        const t = [];
        for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
        return (0, n.arrayify)(t);
      }
      function o(e) {
        e = (0, n.arrayify)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
        return btoa(t);
      }
    },
    1316: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionOrderForkEvent =
          t.TransactionForkEvent =
          t.Provider =
          t.ForkEvent =
          t.BlockForkEvent =
            void 0));
      var n = r(62),
        i = r(32),
        o = r(63),
        s = r(36),
        a = r(1317),
        u = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              e.done ? r(e.value) : i(e.value).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      const c = new s.Logger(a.version);
      class ForkEvent extends o.Description {
        static isForkEvent(e) {
          return !(!e || !e._isForkEvent);
        }
      }
      t.ForkEvent = ForkEvent;
      class BlockForkEvent extends ForkEvent {
        constructor(e, t) {
          ((0, i.isHexString)(e, 32) ||
            c.throwArgumentError("invalid blockHash", "blockHash", e),
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
            c.throwArgumentError("invalid transaction hash", "hash", e),
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
            c.throwArgumentError("invalid transaction hash", "beforeHash", e),
            (0, i.isHexString)(t, 32) ||
              c.throwArgumentError("invalid transaction hash", "afterHash", t),
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
          (c.checkAbstract(new.target, Provider),
            (0, o.defineReadOnly)(this, "_isProvider", !0));
        }
        getFeeData() {
          return u(this, void 0, void 0, function* () {
            const { block: e, gasPrice: t } = yield (0, o.resolveProperties)({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((e) => null),
            });
            let r = null,
              i = null,
              s = null;
            return (
              e &&
                e.baseFeePerGas &&
                ((r = e.baseFeePerGas),
                (s = n.BigNumber.from("1500000000")),
                (i = e.baseFeePerGas.mul(2).add(s))),
              {
                lastBaseFeePerGas: r,
                maxFeePerGas: i,
                maxPriorityFeePerGas: s,
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
    1317: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abstract-provider/5.8.0";
    },
    1318: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VoidSigner = t.Signer = void 0));
      var n = r(63),
        i = r(36),
        o = r(1319),
        s = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              e.done ? r(e.value) : i(e.value).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      const a = new i.Logger(o.version),
        u = [
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
        c = [
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
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), e)
            );
          });
        }
        getTransactionCount(e) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), e)
            );
          });
        }
        estimateGas(e) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.estimateGas(t);
          });
        }
        call(e, t) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const r = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.call(r, t);
          });
        }
        sendTransaction(e) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const t = yield this.populateTransaction(e),
              r = yield this.signTransaction(t);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            const e = yield this.provider.getNetwork();
            return e.chainId;
          });
        }
        getGasPrice() {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(e) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(e)
            );
          });
        }
        checkTransaction(e) {
          for (const r in e)
            -1 === u.indexOf(r) &&
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
          return s(this, void 0, void 0, function* () {
            const t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            null != t.to &&
              ((t.to = Promise.resolve(t.to).then((e) =>
                s(this, void 0, void 0, function* () {
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
                  if (c.indexOf(e.code) >= 0) throw e;
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
    1319: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abstract-signer/5.8.0";
    },
    1330: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "contracts/5.7.0";
    },
    135: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abi/5.8.0";
    },
    136: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAddress = p),
        (t.getContractAddress = b),
        (t.getCreate2Address = E),
        (t.getIcapAddress = v),
        (t.isAddress = y));
      var n = r(32),
        i = r(62),
        o = r(88),
        s = r(480),
        a = r(36),
        u = r(1292);
      const c = new a.Logger(u.version);
      function l(e) {
        ((0, n.isHexString)(e, 20) ||
          c.throwArgumentError("invalid address", "address", e),
          (e = e.toLowerCase()));
        const t = e.substring(2).split(""),
          r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
        const i = (0, n.arrayify)((0, o.keccak256)(r));
        for (let n = 0; n < 40; n += 2)
          (i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase()));
        return "0x" + t.join("");
      }
      const d = 9007199254740991;
      function h(e) {
        return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
      }
      const g = {};
      for (let w = 0; w < 10; w++) g[String(w)] = String(w);
      for (let w = 0; w < 26; w++)
        g[String.fromCharCode(65 + w)] = String(10 + w);
      const m = Math.floor(h(d));
      function f(e) {
        ((e = e.toUpperCase()),
          (e = e.substring(4) + e.substring(0, 2) + "00"));
        let t = e
          .split("")
          .map((e) => g[e])
          .join("");
        while (t.length >= m) {
          let e = t.substring(0, m);
          t = (parseInt(e, 10) % 97) + t.substring(e.length);
        }
        let r = String(98 - (parseInt(t, 10) % 97));
        while (r.length < 2) r = "0" + r;
        return r;
      }
      function p(e) {
        let t = null;
        if (
          ("string" !== typeof e &&
            c.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== e.substring(0, 2) && (e = "0x" + e),
            (t = l(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== e &&
              c.throwArgumentError("bad address checksum", "address", e));
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (e.substring(2, 4) !== f(e) &&
            c.throwArgumentError("bad icap checksum", "address", e),
            (t = (0, i._base36To16)(e.substring(4))));
          while (t.length < 40) t = "0" + t;
          t = l("0x" + t);
        } else c.throwArgumentError("invalid address", "address", e);
        return t;
      }
      function y(e) {
        try {
          return (p(e), !0);
        } catch (t) {}
        return !1;
      }
      function v(e) {
        let t = (0, i._base16To36)(p(e).substring(2)).toUpperCase();
        while (t.length < 30) t = "0" + t;
        return "XE" + f("XE00" + t) + t;
      }
      function b(e) {
        let t = null;
        try {
          t = p(e.from);
        } catch (a) {
          c.throwArgumentError("missing from address", "transaction", e);
        }
        const r = (0, n.stripZeros)(
          (0, n.arrayify)(i.BigNumber.from(e.nonce).toHexString()),
        );
        return p(
          (0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([t, r])), 12),
        );
      }
      function E(e, t, r) {
        return (
          32 !== (0, n.hexDataLength)(t) &&
            c.throwArgumentError("salt must be 32 bytes", "salt", t),
          32 !== (0, n.hexDataLength)(r) &&
            c.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              r,
            ),
          p(
            (0, n.hexDataSlice)(
              (0, o.keccak256)((0, n.concat)(["0xff", p(e), t, r])),
              12,
            ),
          )
        );
      }
    },
    263: function (e, t, r) {
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
      var n = r(62),
        i = r(63),
        o = r(36),
        s = r(135);
      const a = new o.Logger(s.version),
        u = {};
      let c = { calldata: !0, memory: !0, storage: !0 },
        l = { calldata: !0, memory: !0 };
      function d(e, t) {
        if ("bytes" === e || "string" === e) {
          if (c[t]) return !0;
        } else if ("address" === e) {
          if ("payable" === t) return !0;
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && l[t]) return !0;
        return (
          (c[t] || "payable" === t) &&
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
        let o = { type: "", name: "", state: { allowType: !0 } },
          s = o;
        for (let a = 0; a < e.length; a++) {
          let r = e[a];
          switch (r) {
            case "(":
              (s.state.allowType && "" === s.type
                ? (s.type = "tuple")
                : s.state.allowParams || n(a),
                (s.state.allowType = !1),
                (s.type = w(s.type)),
                (s.components = [i(s)]),
                (s = s.components[0]));
              break;
            case ")":
              (delete s.state,
                "indexed" === s.name &&
                  (t || n(a), (s.indexed = !0), (s.name = "")),
                d(s.type, s.name) && (s.name = ""),
                (s.type = w(s.type)));
              let e = s;
              ((s = s.parent),
                s || n(a),
                delete e.parent,
                (s.state.allowParams = !1),
                (s.state.allowName = !0),
                (s.state.allowArray = !0));
              break;
            case ",":
              (delete s.state,
                "indexed" === s.name &&
                  (t || n(a), (s.indexed = !0), (s.name = "")),
                d(s.type, s.name) && (s.name = ""),
                (s.type = w(s.type)));
              let o = i(s.parent);
              (s.parent.components.push(o), delete s.parent, (s = o));
              break;
            case " ":
              (s.state.allowType &&
                "" !== s.type &&
                ((s.type = w(s.type)),
                delete s.state.allowType,
                (s.state.allowName = !0),
                (s.state.allowParams = !0)),
                s.state.allowName &&
                  "" !== s.name &&
                  ("indexed" === s.name
                    ? (t || n(a),
                      s.indexed && n(a),
                      (s.indexed = !0),
                      (s.name = ""))
                    : d(s.type, s.name)
                      ? (s.name = "")
                      : (s.state.allowName = !1)));
              break;
            case "[":
              (s.state.allowArray || n(a),
                (s.type += r),
                (s.state.allowArray = !1),
                (s.state.allowName = !1),
                (s.state.readArray = !0));
              break;
            case "]":
              (s.state.readArray || n(a),
                (s.type += r),
                (s.state.readArray = !1),
                (s.state.allowArray = !0),
                (s.state.allowName = !0));
              break;
            default:
              s.state.allowType
                ? ((s.type += r),
                  (s.state.allowParams = !0),
                  (s.state.allowArray = !0))
                : s.state.allowName
                  ? ((s.name += r), delete s.state.allowArray)
                  : s.state.readArray
                    ? (s.type += r)
                    : n(a);
          }
        }
        return (
          s.parent && a.throwArgumentError("unexpected eof", "param", e),
          delete o.state,
          "indexed" === s.name
            ? (t || n(r.length - 7),
              s.indexed && n(r.length - 7),
              (s.indexed = !0),
              (s.name = ""))
            : d(s.type, s.name) && (s.name = ""),
          (o.type = w(o.type)),
          o
        );
      }
      function g(e, t) {
        for (let r in t) (0, i.defineReadOnly)(e, r, t[r]);
      }
      const m = (t.FormatTypes = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        })),
        f = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class ParamType {
        constructor(e, t) {
          (e !== u &&
            a.throwError(
              "use fromString",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new ParamType()" },
            ),
            g(this, t));
          let r = this.type.match(f);
          (g(
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
            (e || (e = m.sighash),
            m[e] || a.throwArgumentError("invalid format type", "format", e),
            e === m.json)
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
                ? (e !== m.sighash && (t += this.type),
                  (t +=
                    "(" +
                    this.components
                      .map((t) => t.format(e))
                      .join(e === m.full ? ", " : ",") +
                    ")"))
                : (t += this.type),
            e !== m.sighash &&
              (!0 === this.indexed && (t += " indexed"),
              e === m.full && this.name && (t += " " + this.name)),
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
            : new ParamType(u, {
                name: e.name || null,
                type: w(e.type),
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
      function p(e, t) {
        return F(e).map((e) => ParamType.fromString(e, t));
      }
      t.ParamType = ParamType;
      class Fragment {
        constructor(e, t) {
          (e !== u &&
            a.throwError(
              "use a static from method",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" },
            ),
            g(this, t),
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
            (e || (e = m.sighash),
            m[e] || a.throwArgumentError("invalid format type", "format", e),
            e === m.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== m.sighash && (t += "event "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === m.full ? ", " : ",") +
              ") "),
            e !== m.sighash && this.anonymous && (t += "anonymous "),
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
            name: x(e.name),
            anonymous: e.anonymous,
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
            type: "event",
          };
          return new EventFragment(u, t);
        }
        static fromString(e) {
          let t = e.match(P);
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
              inputs: p(t[2], !0),
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
            (e || (e = m.sighash),
            m[e] || a.throwArgumentError("invalid format type", "format", e),
            e === m.json)
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
          e === m.sighash &&
            a.throwError(
              "cannot format a constructor for sighash",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" },
            );
          let t =
            "constructor(" +
            this.inputs
              .map((t) => t.format(e))
              .join(e === m.full ? ", " : ",") +
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
          return new ConstructorFragment(u, r);
        }
        static fromString(e) {
          let t = { type: "constructor" };
          e = y(e, t);
          let r = e.match(P);
          return (
            (r && "constructor" === r[1].trim()) ||
              a.throwArgumentError("invalid constructor string", "value", e),
            (t.inputs = p(r[2].trim(), !1)),
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
            (e || (e = m.sighash),
            m[e] || a.throwArgumentError("invalid format type", "format", e),
            e === m.json)
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
            e !== m.sighash && (t += "function "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === m.full ? ", " : ",") +
              ") "),
            e !== m.sighash &&
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
            name: x(e.name),
            constant: t.constant,
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
            outputs: e.outputs ? e.outputs.map(ParamType.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? n.BigNumber.from(e.gas) : null,
          };
          return new FunctionFragment(u, r);
        }
        static fromString(e) {
          let t = { type: "function" };
          e = y(e, t);
          let r = e.split(" returns ");
          r.length > 2 &&
            a.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(P);
          if (
            (n ||
              a.throwArgumentError("invalid function signature", "value", e),
            (t.name = n[1].trim()),
            t.name && x(t.name),
            (t.inputs = p(n[2], !1)),
            v(n[3].trim(), t),
            r.length > 1)
          ) {
            let n = r[1].match(P);
            (("" == n[1].trim() && "" == n[3].trim()) ||
              a.throwArgumentError("unexpected tokens", "value", e),
              (t.outputs = p(n[2], !1)));
          } else t.outputs = [];
          return FunctionFragment.fromObject(t);
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type;
        }
      }
      function E(e) {
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
            (e || (e = m.sighash),
            m[e] || a.throwArgumentError("invalid format type", "format", e),
            e === m.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== m.sighash && (t += "error "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === m.full ? ", " : ",") +
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
            name: x(e.name),
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
          };
          return E(new ErrorFragment(u, t));
        }
        static fromString(e) {
          let t = { type: "error" },
            r = e.match(P);
          return (
            r || a.throwArgumentError("invalid error signature", "value", e),
            (t.name = r[1].trim()),
            t.name && x(t.name),
            (t.inputs = p(r[2], !1)),
            E(ErrorFragment.fromObject(t))
          );
        }
        static isErrorFragment(e) {
          return e && e._isFragment && "error" === e.type;
        }
      }
      function w(e) {
        return (
          e.match(/^uint($|[^1-9])/)
            ? (e = "uint256" + e.substring(4))
            : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
          e
        );
      }
      t.ErrorFragment = ErrorFragment;
      const _ = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function x(e) {
        return (
          (e && e.match(_)) ||
            a.throwArgumentError(`invalid identifier "${e}"`, "value", e),
          e
        );
      }
      const P = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
      function F(e) {
        e = e.trim();
        let t = [],
          r = "",
          n = 0;
        for (let i = 0; i < e.length; i++) {
          let o = e[i];
          "," === o && 0 === n
            ? (t.push(r), (r = ""))
            : ((r += o),
              "(" === o
                ? n++
                : ")" === o &&
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
    32: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayify = d),
        (t.concat = h),
        (t.hexConcat = E),
        (t.hexDataLength = v),
        (t.hexDataSlice = b),
        (t.hexStripZeros = _),
        (t.hexValue = w),
        (t.hexZeroPad = x),
        (t.hexlify = y),
        (t.isBytes = l),
        (t.isBytesLike = u),
        (t.isHexString = f),
        (t.joinSignature = F),
        (t.splitSignature = P),
        (t.stripZeros = g),
        (t.zeroPad = m));
      var n = r(36),
        i = r(1287);
      const o = new n.Logger(i.version);
      function s(e) {
        return !!e.toHexString;
      }
      function a(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const t = Array.prototype.slice.call(arguments);
              return a(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function u(e) {
        return (f(e) && !(e.length % 2)) || l(e);
      }
      function c(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function l(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!c(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          if (!c(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function d(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          o.checkSafeUint53(e, "invalid arrayify value");
          const t = [];
          while (e) (t.unshift(255 & e), (e = parseInt(String(e / 256))));
          return (0 === t.length && t.push(0), a(new Uint8Array(t)));
        }
        if (
          (t.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          s(e) && (e = e.toHexString()),
          f(e))
        ) {
          let r = e.substring(2);
          r.length % 2 &&
            ("left" === t.hexPad
              ? (r = "0" + r)
              : "right" === t.hexPad
                ? (r += "0")
                : o.throwArgumentError("hex data is odd-length", "value", e));
          const n = [];
          for (let e = 0; e < r.length; e += 2)
            n.push(parseInt(r.substring(e, e + 2), 16));
          return a(new Uint8Array(n));
        }
        return l(e)
          ? a(new Uint8Array(e))
          : o.throwArgumentError("invalid arrayify value", "value", e);
      }
      function h(e) {
        const t = e.map((e) => d(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return (t.reduce((e, t) => (n.set(t, e), e + t.length), 0), a(n));
      }
      function g(e) {
        let t = d(e);
        if (0 === t.length) return t;
        let r = 0;
        while (r < t.length && 0 === t[r]) r++;
        return (r && (t = t.slice(r)), t);
      }
      function m(e, t) {
        ((e = d(e)),
          e.length > t &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(t);
        return (r.set(e, t - e.length), a(r));
      }
      function f(e, t) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      const p = "0123456789abcdef";
      function y(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          o.checkSafeUint53(e, "invalid hexlify value");
          let t = "";
          while (e) ((t = p[15 & e] + t), (e = Math.floor(e / 16)));
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
        }
        if ("bigint" === typeof e)
          return ((e = e.toString(16)), e.length % 2 ? "0x0" + e : "0x" + e);
        if (
          (t.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          s(e))
        )
          return e.toHexString();
        if (f(e))
          return (
            e.length % 2 &&
              ("left" === t.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === t.hexPad
                  ? (e += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (l(e)) {
          let t = "0x";
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t += p[(240 & n) >> 4] + p[15 & n];
          }
          return t;
        }
        return o.throwArgumentError("invalid hexlify value", "value", e);
      }
      function v(e) {
        if ("string" !== typeof e) e = y(e);
        else if (!f(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function b(e, t, r) {
        return (
          "string" !== typeof e
            ? (e = y(e))
            : (!f(e) || e.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", e),
          (t = 2 + 2 * t),
          null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
        );
      }
      function E(e) {
        let t = "0x";
        return (
          e.forEach((e) => {
            t += y(e).substring(2);
          }),
          t
        );
      }
      function w(e) {
        const t = _(y(e, { hexPad: "left" }));
        return "0x" === t ? "0x0" : t;
      }
      function _(e) {
        ("string" !== typeof e && (e = y(e)),
          f(e) || o.throwArgumentError("invalid hex string", "value", e),
          (e = e.substring(2)));
        let t = 0;
        while (t < e.length && "0" === e[t]) t++;
        return "0x" + e.substring(t);
      }
      function x(e, t) {
        ("string" !== typeof e
          ? (e = y(e))
          : f(e) || o.throwArgumentError("invalid hex string", "value", e),
          e.length > 2 * t + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (e.length < 2 * t + 2) e = "0x0" + e.substring(2);
        return e;
      }
      function P(e) {
        const t = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (u(e)) {
          let r = d(e);
          (64 === r.length
            ? ((t.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (t.r = y(r.slice(0, 32))),
              (t.s = y(r.slice(32, 64))))
            : 65 === r.length
              ? ((t.r = y(r.slice(0, 32))),
                (t.s = y(r.slice(32, 64))),
                (t.v = r[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  e,
                ),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e,
                  )),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = y(r.slice(32, 64))));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            const r = m(d(t._vs), 32);
            t._vs = y(r);
            const n = r[0] >= 128 ? 1 : 0;
            (null == t.recoveryParam
              ? (t.recoveryParam = n)
              : t.recoveryParam !== n &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e,
                ),
              (r[0] &= 127));
            const i = y(r);
            null == t.s
              ? (t.s = i)
              : t.s !== i &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e,
                );
          }
          if (null == t.recoveryParam)
            null == t.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e,
                )
              : 0 === t.v || 1 === t.v
                ? (t.recoveryParam = t.v)
                : (t.recoveryParam = 1 - (t.v % 2));
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            const r = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
            t.recoveryParam !== r &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e,
              );
          }
          (null != t.r && f(t.r)
            ? (t.r = x(t.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e,
              ),
            null != t.s && f(t.s)
              ? (t.s = x(t.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e,
                ));
          const r = d(t.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", e),
            t.recoveryParam && (r[0] |= 128));
          const n = y(r);
          (t._vs &&
            (f(t._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", e),
            (t._vs = x(t._vs, 32))),
            null == t._vs
              ? (t._vs = n)
              : t._vs !== n &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e,
                ));
        }
        return (
          (t.yParityAndS = t._vs),
          (t.compact = t.r + t.yParityAndS.substring(2)),
          t
        );
      }
      function F(e) {
        return (
          (e = P(e)),
          y(h([e.r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    476: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BigNumber = void 0),
        (t._base16To36 = b),
        (t._base36To16 = v),
        (t.isBigNumberish = h));
      var i = n(r(477)),
        o = r(32),
        s = r(36),
        a = r(478),
        u = i.default.BN;
      const c = new s.Logger(a.version),
        l = {},
        d = 9007199254740991;
      function h(e) {
        return (
          null != e &&
          (BigNumber.isBigNumber(e) ||
            ("number" === typeof e && e % 1 === 0) ||
            ("string" === typeof e && !!e.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(e) ||
            "bigint" === typeof e ||
            (0, o.isBytes)(e))
        );
      }
      let g = !1;
      class BigNumber {
        constructor(e, t) {
          (e !== l &&
            c.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(e) {
          return f(p(this).fromTwos(e));
        }
        toTwos(e) {
          return f(p(this).toTwos(e));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(e) {
          return f(p(this).add(p(e)));
        }
        sub(e) {
          return f(p(this).sub(p(e)));
        }
        div(e) {
          const t = BigNumber.from(e);
          return (
            t.isZero() && y("division-by-zero", "div"),
            f(p(this).div(p(e)))
          );
        }
        mul(e) {
          return f(p(this).mul(p(e)));
        }
        mod(e) {
          const t = p(e);
          return (
            t.isNeg() && y("division-by-zero", "mod"),
            f(p(this).umod(t))
          );
        }
        pow(e) {
          const t = p(e);
          return (t.isNeg() && y("negative-power", "pow"), f(p(this).pow(t)));
        }
        and(e) {
          const t = p(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "and"),
            f(p(this).and(t))
          );
        }
        or(e) {
          const t = p(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "or"),
            f(p(this).or(t))
          );
        }
        xor(e) {
          const t = p(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "xor"),
            f(p(this).xor(t))
          );
        }
        mask(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "mask"),
            f(p(this).maskn(e))
          );
        }
        shl(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "shl"),
            f(p(this).shln(e))
          );
        }
        shr(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "shr"),
            f(p(this).shrn(e))
          );
        }
        eq(e) {
          return p(this).eq(p(e));
        }
        lt(e) {
          return p(this).lt(p(e));
        }
        lte(e) {
          return p(this).lte(p(e));
        }
        gt(e) {
          return p(this).gt(p(e));
        }
        gte(e) {
          return p(this).gte(p(e));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return p(this).isZero();
        }
        toNumber() {
          try {
            return p(this).toNumber();
          } catch (e) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (e) {}
          return c.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() },
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? g ||
                  ((g = !0),
                  c.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? c.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : c.throwError(
                      "BigNumber.toString does not accept parameters",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )),
            p(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(e) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(e) {
          if (e instanceof BigNumber) return e;
          if ("string" === typeof e)
            return e.match(/^-?0x[0-9a-f]+$/i)
              ? new BigNumber(l, m(e))
              : e.match(/^-?[0-9]+$/)
                ? new BigNumber(l, m(new u(e)))
                : c.throwArgumentError("invalid BigNumber string", "value", e);
          if ("number" === typeof e)
            return (
              e % 1 && y("underflow", "BigNumber.from", e),
              (e >= d || e <= -d) && y("overflow", "BigNumber.from", e),
              BigNumber.from(String(e))
            );
          const t = e;
          if ("bigint" === typeof t) return BigNumber.from(t.toString());
          if ((0, o.isBytes)(t)) return BigNumber.from((0, o.hexlify)(t));
          if (t)
            if (t.toHexString) {
              const e = t.toHexString();
              if ("string" === typeof e) return BigNumber.from(e);
            } else {
              let e = t._hex;
              if (
                (null == e && "BigNumber" === t.type && (e = t.hex),
                "string" === typeof e &&
                  ((0, o.isHexString)(e) ||
                    ("-" === e[0] && (0, o.isHexString)(e.substring(1)))))
              )
                return BigNumber.from(e);
            }
          return c.throwArgumentError("invalid BigNumber value", "value", e);
        }
        static isBigNumber(e) {
          return !(!e || !e._isBigNumber);
        }
      }
      function m(e) {
        if ("string" !== typeof e) return m(e.toString(16));
        if ("-" === e[0])
          return (
            (e = e.substring(1)),
            "-" === e[0] && c.throwArgumentError("invalid hex", "value", e),
            (e = m(e)),
            "0x00" === e ? e : "-" + e
          );
        if (("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e))
          return "0x00";
        e.length % 2 && (e = "0x0" + e.substring(2));
        while (e.length > 4 && "0x00" === e.substring(0, 4))
          e = "0x" + e.substring(4);
        return e;
      }
      function f(e) {
        return BigNumber.from(m(e));
      }
      function p(e) {
        const t = BigNumber.from(e).toHexString();
        return "-" === t[0]
          ? new u("-" + t.substring(3), 16)
          : new u(t.substring(2), 16);
      }
      function y(e, t, r) {
        const n = { fault: e, operation: t };
        return (
          null != r && (n.value = r),
          c.throwError(e, s.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      function v(e) {
        return new u(e, 36).toString(16);
      }
      function b(e) {
        return new u(e, 16).toString(36);
      }
      t.BigNumber = BigNumber;
    },
    478: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "bignumber/5.8.0";
    },
    479: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultAbiCoder = t.AbiCoder = void 0));
      var n = r(32),
        i = r(63),
        o = r(36),
        s = r(135),
        a = r(55),
        u = r(1290),
        c = r(481),
        l = r(1294),
        d = r(482),
        h = r(1295),
        g = r(1296),
        m = r(1297),
        f = r(1302),
        p = r(1306),
        y = r(263);
      const v = new o.Logger(s.version),
        b = new RegExp(/^bytes([0-9]*)$/),
        E = new RegExp(/^(u?int)([0-9]*)$/);
      class AbiCoder {
        constructor(e) {
          (0, i.defineReadOnly)(this, "coerceFunc", e || null);
        }
        _getCoder(e) {
          switch (e.baseType) {
            case "address":
              return new u.AddressCoder(e.name);
            case "bool":
              return new l.BooleanCoder(e.name);
            case "string":
              return new f.StringCoder(e.name);
            case "bytes":
              return new d.BytesCoder(e.name);
            case "array":
              return new c.ArrayCoder(
                this._getCoder(e.arrayChildren),
                e.arrayLength,
                e.name,
              );
            case "tuple":
              return new p.TupleCoder(
                (e.components || []).map((e) => this._getCoder(e)),
                e.name,
              );
            case "":
              return new g.NullCoder(e.name);
          }
          let t = e.type.match(E);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 !== 0) &&
                v.throwArgumentError(
                  "invalid " + t[1] + " bit length",
                  "param",
                  e,
                ),
              new m.NumberCoder(r / 8, "int" === t[1], e.name)
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
            r = new p.TupleCoder(t, "_");
          return r.defaultValue();
        }
        encode(e, t) {
          e.length !== t.length &&
            v.throwError(
              "types/values length mismatch",
              o.Logger.errors.INVALID_ARGUMENT,
              {
                count: { types: e.length, values: t.length },
                value: { types: e, values: t },
              },
            );
          const r = e.map((e) => this._getCoder(y.ParamType.from(e))),
            n = new p.TupleCoder(r, "_"),
            i = this._getWriter();
          return (n.encode(i, t), i.data);
        }
        decode(e, t, r) {
          const i = e.map((e) => this._getCoder(y.ParamType.from(e))),
            o = new p.TupleCoder(i, "_");
          return o.decode(this._getReader((0, n.arrayify)(t), r));
        }
      }
      t.AbiCoder = AbiCoder;
      t.defaultAbiCoder = new AbiCoder();
    },
    481: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ArrayCoder = void 0),
        (t.pack = u),
        (t.unpack = c));
      var n = r(36),
        i = r(135),
        o = r(55),
        s = r(1293);
      const a = new n.Logger(i.version);
      function u(e, t, r) {
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
        let s = new o.Writer(e.wordSize),
          u = new o.Writer(e.wordSize),
          c = [];
        (t.forEach((e, t) => {
          let r = i[t];
          if (e.dynamic) {
            let t = u.length;
            e.encode(u, r);
            let n = s.writeUpdatableValue();
            c.push((e) => {
              n(e + t);
            });
          } else e.encode(s, r);
        }),
          c.forEach((e) => {
            e(s.length);
          }));
        let l = e.appendWriter(s);
        return ((l += e.appendWriter(u)), l);
      }
      function c(e, t) {
        let r = [],
          i = e.subReader(0);
        t.forEach((t) => {
          let o = null;
          if (t.dynamic) {
            let r = e.readValue(),
              a = i.subReader(r.toNumber());
            try {
              o = t.decode(a);
            } catch (s) {
              if (s.code === n.Logger.errors.BUFFER_OVERRUN) throw s;
              ((o = s),
                (o.baseType = t.name),
                (o.name = t.localName),
                (o.type = t.type));
            }
          } else
            try {
              o = t.decode(e);
            } catch (s) {
              if (s.code === n.Logger.errors.BUFFER_OVERRUN) throw s;
              ((o = s),
                (o.baseType = t.name),
                (o.name = t.localName),
                (o.type = t.type));
            }
          void 0 != o && r.push(o);
        });
        const o = t.reduce((e, t) => {
          const r = t.localName;
          return (r && (e[r] || (e[r] = 0), e[r]++), e);
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (!n || 1 !== o[n]) return;
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
      class ArrayCoder extends o.Coder {
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
          return u(e, n, t);
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
          for (let n = 0; n < t; n++) r.push(new s.AnonymousCoder(this.coder));
          return e.coerce(this.name, c(e, r));
        }
      }
      t.ArrayCoder = ArrayCoder;
    },
    482: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicBytesCoder = t.BytesCoder = void 0));
      var n = r(32),
        i = r(55);
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
    55: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Writer = t.Reader = t.Coder = void 0),
        (t.checkResultErrors = c));
      var n = r(32),
        i = r(62),
        o = r(63),
        s = r(36),
        a = r(135);
      const u = new s.Logger(a.version);
      function c(e) {
        const t = [],
          r = function (e, n) {
            if (Array.isArray(n))
              for (let o in n) {
                const s = e.slice();
                s.push(o);
                try {
                  r(s, n[o]);
                } catch (i) {
                  t.push({ path: s, error: i });
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
          u.throwArgumentError(e, this.localName, t);
        }
      }
      t.Coder = Coder;
      class Writer {
        constructor(e) {
          ((0, o.defineReadOnly)(this, "wordSize", e || 32),
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
              u.throwError(
                "value out-of-bounds",
                s.Logger.errors.BUFFER_OVERRUN,
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
          ((0, o.defineReadOnly)(this, "_data", (0, n.arrayify)(e)),
            (0, o.defineReadOnly)(this, "wordSize", t || 32),
            (0, o.defineReadOnly)(this, "_coerceFunc", r),
            (0, o.defineReadOnly)(this, "allowLoose", i),
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
                : u.throwError(
                    "data out-of-bounds",
                    s.Logger.errors.BUFFER_OVERRUN,
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
    62: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BigNumber", {
          enumerable: !0,
          get: function () {
            return n.BigNumber;
          },
        }),
        Object.defineProperty(t, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return i.FixedFormat;
          },
        }),
        Object.defineProperty(t, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return i.FixedNumber;
          },
        }),
        Object.defineProperty(t, "_base16To36", {
          enumerable: !0,
          get: function () {
            return n._base16To36;
          },
        }),
        Object.defineProperty(t, "_base36To16", {
          enumerable: !0,
          get: function () {
            return n._base36To16;
          },
        }),
        Object.defineProperty(t, "formatFixed", {
          enumerable: !0,
          get: function () {
            return i.formatFixed;
          },
        }),
        Object.defineProperty(t, "parseFixed", {
          enumerable: !0,
          get: function () {
            return i.parseFixed;
          },
        }));
      var n = r(476),
        i = r(1288);
    },
  },
]);
