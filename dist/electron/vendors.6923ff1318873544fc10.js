(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [11, 25, 160],
  {
    2654: function (e, t, r) {
      "use strict";
      var n = r(4108).version,
        o = r(2947),
        a = r(4122),
        s = r(3142),
        i = r(3539),
        c = r(4239),
        u = r(4240),
        l = r(376),
        p = function () {
          var e = this;
          (o.packageInit(this, arguments),
            (this.version = n),
            (this.utils = l),
            (this.eth = new a(this)),
            (this.shh = new c(this)),
            (this.bzz = new u(this)));
          var t = this.setProvider;
          this.setProvider = function (r, n) {
            return (
              t.apply(e, arguments),
              e.eth.setRequestManager(e._requestManager),
              e.shh.setRequestManager(e._requestManager),
              e.bzz.setProvider(r),
              !0
            );
          };
        };
      ((p.version = n),
        (p.utils = l),
        (p.modules = { Eth: a, Net: s, Personal: i, Shh: c, Bzz: u }),
        o.addProviders(p),
        (e.exports = p));
    },
    2846: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Writer = t.Reader = t.Coder = void 0),
        (t.checkResultErrors = u));
      var n = r(2776),
        o = r(2829),
        a = r(2808),
        s = r(2773),
        i = r(3050);
      const c = new s.Logger(i.version);
      function u(e) {
        const t = [],
          r = function (e, n) {
            if (Array.isArray(n))
              for (let a in n) {
                const s = e.slice();
                s.push(a);
                try {
                  r(s, n[a]);
                } catch (o) {
                  t.push({ path: s, error: o });
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
          ((0, a.defineReadOnly)(this, "wordSize", e || 32),
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
          let t = (0, n.arrayify)(o.BigNumber.from(e));
          return (
            t.length > this.wordSize &&
              c.throwError(
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
        constructor(e, t, r, o) {
          ((0, a.defineReadOnly)(this, "_data", (0, n.arrayify)(e)),
            (0, a.defineReadOnly)(this, "wordSize", t || 32),
            (0, a.defineReadOnly)(this, "_coerceFunc", r),
            (0, a.defineReadOnly)(this, "allowLoose", o),
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
          return o.BigNumber.from(this.readBytes(this.wordSize));
        }
      }
      t.Reader = Reader;
    },
    2947: function (e, t, r) {
      const n = r(4109),
        o = r(4120),
        a = (e, t) => {
          if (((t = Array.prototype.slice.call(t)), !e))
            throw new Error('You need to instantiate using the "new" keyword.');
          (Object.defineProperty(e, "currentProvider", {
            get: () => e._provider,
            set: (t) => e.setProvider(t),
            enumerable: !0,
            configurable: !0,
          }),
            t[0] && t[0]._requestManager
              ? (e._requestManager = t[0]._requestManager)
              : (e._requestManager = new n.Manager(t[0], t[1])),
            (e.givenProvider = n.Manager.givenProvider),
            (e.providers = n.Manager.providers),
            (e._provider = e._requestManager.provider),
            e.setProvider ||
              (e.setProvider = (t, r) => (
                e._requestManager.setProvider(t, r),
                (e._provider = e._requestManager.provider),
                !0
              )),
            (e.setRequestManager = (t) => {
              ((e._requestManager = t), (e._provider = t.provider));
            }),
            (e.BatchRequest = n.BatchManager.bind(null, e._requestManager)),
            (e.extend = o(e)));
        },
        s = (e) => {
          ((e.givenProvider = n.Manager.givenProvider),
            (e.providers = n.Manager.providers));
        };
      e.exports = { packageInit: a, addProviders: s };
    },
    2948: function (e, t, r) {
      "use strict";
      var n = r(796).errors,
        o = r(796).formatters,
        a = r(376),
        s = r(3140),
        i = r(3141).subscriptions,
        c = r(3271),
        u = function (e) {
          if (!e.call || !e.name)
            throw new Error(
              'When creating a method you need to provide at least the "name" and "call" property.',
            );
          ((this.name = e.name),
            (this.call = e.call),
            (this.params = e.params || 0),
            (this.inputFormatter = e.inputFormatter),
            (this.outputFormatter = e.outputFormatter),
            (this.transformPayload = e.transformPayload),
            (this.extraFormatters = e.extraFormatters),
            (this.abiCoder = e.abiCoder),
            (this.requestManager = e.requestManager),
            (this.accounts = e.accounts),
            (this.defaultBlock = e.defaultBlock || "latest"),
            (this.defaultAccount = e.defaultAccount || null),
            (this.transactionBlockTimeout = e.transactionBlockTimeout || 50),
            (this.transactionConfirmationBlocks =
              e.transactionConfirmationBlocks || 24),
            (this.transactionPollingTimeout =
              e.transactionPollingTimeout || 750),
            (this.defaultCommon = e.defaultCommon),
            (this.defaultChain = e.defaultChain),
            (this.defaultHardfork = e.defaultHardfork),
            (this.handleRevert = e.handleRevert));
        };
      ((u.prototype.setRequestManager = function (e, t) {
        ((this.requestManager = e), t && (this.accounts = t));
      }),
        (u.prototype.createFunction = function (e, t) {
          var r = this.buildCall();
          return (
            (r.call = this.call),
            this.setRequestManager(
              e || this.requestManager,
              t || this.accounts,
            ),
            r
          );
        }),
        (u.prototype.attachToObject = function (e) {
          var t = this.buildCall();
          t.call = this.call;
          var r = this.name.split(".");
          r.length > 1
            ? ((e[r[0]] = e[r[0]] || {}), (e[r[0]][r[1]] = t))
            : (e[r[0]] = t);
        }),
        (u.prototype.getCall = function (e) {
          return "function" === typeof this.call ? this.call(e) : this.call;
        }),
        (u.prototype.extractCallback = function (e) {
          if ("function" === typeof e[e.length - 1]) return e.pop();
        }),
        (u.prototype.validateArgs = function (e) {
          if (e.length !== this.params)
            throw n.InvalidNumberOfParams(e.length, this.params, this.name);
        }),
        (u.prototype.formatInput = function (e) {
          var t = this;
          return this.inputFormatter
            ? this.inputFormatter.map(function (r, n) {
                return r ? r.call(t, e[n]) : e[n];
              })
            : e;
        }),
        (u.prototype.formatOutput = function (e) {
          var t = this;
          return Array.isArray(e)
            ? e.map(function (e) {
                return t.outputFormatter && e ? t.outputFormatter(e) : e;
              })
            : this.outputFormatter && e
              ? this.outputFormatter(e)
              : e;
        }),
        (u.prototype.toPayload = function (e) {
          var t = this.getCall(e),
            r = this.extractCallback(e),
            n = this.formatInput(e);
          this.validateArgs(n);
          var o = { method: t, params: n, callback: r };
          return (this.transformPayload && (o = this.transformPayload(o)), o);
        }),
        (u.prototype._confirmTransaction = function (e, t, r) {
          var l = this,
            p = !1,
            d = !0,
            h = 0,
            m = 0,
            f = null,
            y = null,
            g =
              r.params[0] && "object" === typeof r.params[0] && r.params[0].gas
                ? r.params[0].gas
                : null,
            b =
              !!r.params[0] &&
              "object" === typeof r.params[0] &&
              r.params[0].data &&
              r.params[0].from &&
              !r.params[0].to,
            v = b && r.params[0].data.length > 2,
            w = [
              new u({
                name: "getBlockByNumber",
                call: "eth_getBlockByNumber",
                params: 2,
                inputFormatter: [
                  o.inputBlockNumberFormatter,
                  function (e) {
                    return !!e;
                  },
                ],
                outputFormatter: o.outputBlockFormatter,
              }),
              new u({
                name: "getTransactionReceipt",
                call: "eth_getTransactionReceipt",
                params: 1,
                inputFormatter: [null],
                outputFormatter: o.outputTransactionReceiptFormatter,
              }),
              new u({
                name: "getCode",
                call: "eth_getCode",
                params: 2,
                inputFormatter: [
                  o.inputAddressFormatter,
                  o.inputDefaultBlockNumberFormatter,
                ],
              }),
              new u({
                name: "getTransactionByHash",
                call: "eth_getTransactionByHash",
                params: 1,
                inputFormatter: [null],
                outputFormatter: o.outputTransactionFormatter,
              }),
              new i({
                name: "subscribe",
                type: "eth",
                subscriptions: {
                  newBlockHeaders: {
                    subscriptionName: "newHeads",
                    params: 0,
                    outputFormatter: o.outputBlockFormatter,
                  },
                },
              }),
            ],
            _ = {};
          w.forEach((e) => {
            (e.attachToObject(_), (e.requestManager = l.requestManager));
          });
          var k = function (i, u, w, k, C) {
              if (!w)
                return (
                  C ||
                    (C = {
                      unsubscribe: function () {
                        clearInterval(f);
                      },
                    }),
                  (i ? s.resolve(i) : _.getTransactionReceipt(t))
                    .catch(function (t) {
                      (C.unsubscribe(),
                        (p = !0),
                        a._fireError(
                          {
                            message: "Failed to check for transaction receipt:",
                            data: t,
                          },
                          e.eventEmitter,
                          e.reject,
                        ));
                    })
                    .then(async function (t) {
                      if (!t || !t.blockHash)
                        throw new Error("Receipt missing or blockHash null");
                      if (
                        (l.extraFormatters &&
                          l.extraFormatters.receiptFormatter &&
                          (t = l.extraFormatters.receiptFormatter(t)),
                        e.eventEmitter.listeners("confirmation").length > 0)
                      ) {
                        var r;
                        if (void 0 === i || 0 !== m) {
                          var n = await _.getBlockByNumber("latest"),
                            o = n ? n.hash : null;
                          u
                            ? y
                              ? ((r = await _.getBlockByNumber(y.number + 1)),
                                r &&
                                  ((y = r),
                                  e.eventEmitter.emit("confirmation", m, t, o)))
                              : ((r = await _.getBlockByNumber(t.blockNumber)),
                                (y = r),
                                e.eventEmitter.emit("confirmation", m, t, o))
                            : e.eventEmitter.emit("confirmation", m, t, o);
                        }
                        (((u && r) || !u) && m++,
                          (d = !1),
                          m === l.transactionConfirmationBlocks + 1 &&
                            (C.unsubscribe(),
                            e.eventEmitter.removeAllListeners()));
                      }
                      return t;
                    })
                    .then(async function (t) {
                      if (b && !p) {
                        if (!t.contractAddress)
                          return (
                            d && (C.unsubscribe(), (p = !0)),
                            void a._fireError(
                              n.NoContractAddressFoundError(t),
                              e.eventEmitter,
                              e.reject,
                              null,
                              t,
                            )
                          );
                        var r;
                        try {
                          r = await _.getCode(t.contractAddress);
                        } catch (w) {}
                        if (!r) return;
                        var o = !0 === t.status && v;
                        (o || r.length > 2
                          ? (e.eventEmitter.emit("receipt", t),
                            l.extraFormatters &&
                            l.extraFormatters.contractDeployFormatter
                              ? e.resolve(
                                  l.extraFormatters.contractDeployFormatter(t),
                                )
                              : e.resolve(t),
                            d && e.eventEmitter.removeAllListeners())
                          : a._fireError(
                              n.ContractCodeNotStoredError(t),
                              e.eventEmitter,
                              e.reject,
                              null,
                              t,
                            ),
                          d && C.unsubscribe(),
                          (p = !0));
                      }
                      return t;
                    })
                    .then(async function (t) {
                      if (!b && !p) {
                        if (
                          t.outOfGas ||
                          (g && g === t.gasUsed) ||
                          (!0 !== t.status &&
                            "0x1" !== t.status &&
                            "undefined" !== typeof t.status)
                        )
                          if (
                            (JSON.stringify(t, null, 2),
                            !1 === t.status || "0x0" === t.status)
                          )
                            try {
                              var s = null;
                              if (
                                !l.handleRevert ||
                                ("eth_sendTransaction" !== l.call &&
                                  "eth_sendRawTransaction" !== l.call)
                              )
                                throw !1;
                              var i = r.params[0];
                              if ("eth_sendRawTransaction" === l.call) {
                                var u = r.params[0],
                                  h = c.parse(u);
                                i = o.inputTransactionFormatter({
                                  data: h.data,
                                  to: h.to,
                                  from: h.from,
                                  gas: h.gasLimit.toHexString(),
                                  gasPrice: h.gasPrice.toHexString(),
                                  value: h.value.toHexString(),
                                });
                              }
                              if (
                                ((s = await l.getRevertReason(
                                  i,
                                  t.blockNumber,
                                )),
                                !s)
                              )
                                throw !1;
                              a._fireError(
                                n.TransactionRevertInstructionError(
                                  s.reason,
                                  s.signature,
                                  t,
                                ),
                                e.eventEmitter,
                                e.reject,
                                null,
                                t,
                              );
                            } catch (m) {
                              a._fireError(
                                n.TransactionRevertedWithoutReasonError(t),
                                e.eventEmitter,
                                e.reject,
                                null,
                                t,
                              );
                            }
                          else
                            a._fireError(
                              n.TransactionOutOfGasError(t),
                              e.eventEmitter,
                              e.reject,
                              null,
                              t,
                            );
                        else
                          (e.eventEmitter.emit("receipt", t),
                            e.resolve(t),
                            d && e.eventEmitter.removeAllListeners());
                        (d && C.unsubscribe(), (p = !0));
                      }
                    })
                    .catch(function () {
                      (h++,
                        u
                          ? h - 1 >= l.transactionPollingTimeout &&
                            (C.unsubscribe(),
                            (p = !0),
                            a._fireError(
                              n.TransactionError(
                                "Transaction was not mined within " +
                                  l.transactionPollingTimeout +
                                  " seconds, please make sure your transaction was properly sent. Be aware that it might still be mined!",
                              ),
                              e.eventEmitter,
                              e.reject,
                            ))
                          : h - 1 >= l.transactionBlockTimeout &&
                            (C.unsubscribe(),
                            (p = !0),
                            a._fireError(
                              n.TransactionError(
                                "Transaction was not mined within " +
                                  l.transactionBlockTimeout +
                                  " blocks, please make sure your transaction was properly sent. Be aware that it might still be mined!",
                              ),
                              e.eventEmitter,
                              e.reject,
                            )));
                    })
                );
              (C.unsubscribe(),
                (p = !0),
                a._fireError(
                  {
                    message:
                      "Failed to subscribe to new newBlockHeaders to confirm the transaction receipts.",
                    data: w,
                  },
                  e.eventEmitter,
                  e.reject,
                ));
            },
            C = function (e) {
              const t = () => {
                f = setInterval(k.bind(null, e, !0), 1e3);
              };
              this.requestManager.provider.on
                ? _.subscribe("newBlockHeaders", function (r, n, o) {
                    r || !n ? t() : k(e, !1, r, n, o);
                  })
                : t();
            }.bind(this);
          _.getTransactionReceipt(t)
            .then(function (t) {
              t && t.blockHash
                ? (e.eventEmitter.listeners("confirmation").length > 0 && C(t),
                  k(t, !1))
                : p || C();
            })
            .catch(function () {
              p || C();
            });
        }));
      var l = function (e, t) {
        var r = null;
        return (
          (r =
            "number" === typeof e
              ? t.wallet[e]
              : e && "object" === typeof e && e.address && e.privateKey
                ? e
                : t.wallet[e.toLowerCase()]),
          r
        );
      };
      function p(e, t) {
        return new Promise((r, n) => {
          try {
            var o = new u({
                name: "getBlockByNumber",
                call: "eth_getBlockByNumber",
                params: 2,
                inputFormatter: [
                  function (e) {
                    return e ? a.toHex(e) : "latest";
                  },
                  function () {
                    return !1;
                  },
                ],
              }).createFunction(e.requestManager),
              s = new u({
                name: "getGasPrice",
                call: "eth_gasPrice",
                params: 0,
              }).createFunction(e.requestManager);
            Promise.all([o(), s()]).then((e) => {
              const [n, o] = e;
              if (
                ("0x2" === t.type || void 0 === t.type) &&
                n &&
                n.baseFeePerGas
              ) {
                let e, o;
                (t.gasPrice
                  ? ((e = t.gasPrice), (o = t.gasPrice), delete t.gasPrice)
                  : ((e = t.maxPriorityFeePerGas || "0x9502F900"),
                    (o =
                      t.maxFeePerGas ||
                      a.toHex(
                        a.toBN(n.baseFeePerGas).mul(a.toBN(2)).add(a.toBN(e)),
                      ))),
                  r({ maxFeePerGas: o, maxPriorityFeePerGas: e }));
              } else {
                if (t.maxPriorityFeePerGas || t.maxFeePerGas)
                  throw Error("Network doesn't support eip-1559");
                r({ gasPrice: o });
              }
            });
          } catch (i) {
            n(i);
          }
        });
      }
      ((u.prototype.buildCall = function () {
        var e = this,
          t =
            "eth_sendTransaction" === e.call ||
            "eth_sendRawTransaction" === e.call,
          r = "eth_call" === e.call,
          o = function () {
            var o = s(!t),
              i = e.toPayload(Array.prototype.slice.call(arguments)),
              c = function (s, c) {
                var u;
                if (
                  e.handleRevert &&
                  r &&
                  e.abiCoder &&
                  (!s && e.isRevertReasonString(c)
                    ? (u = c.substring(10))
                    : s && s.data && (u = s.data.substring(10)),
                  u)
                ) {
                  var l = e.abiCoder.decodeParameter("string", "0x" + u),
                    p = "Error(String)";
                  return void a._fireError(
                    n.RevertInstructionError(l, p),
                    o.eventEmitter,
                    o.reject,
                    i.callback,
                    { reason: l, signature: p },
                  );
                }
                try {
                  c = e.formatOutput(c);
                } catch (d) {
                  s = d;
                }
                if ((c instanceof Error && (s = c), s))
                  return (
                    s.error && (s = s.error),
                    a._fireError(s, o.eventEmitter, o.reject, i.callback)
                  );
                (i.callback && i.callback(null, c),
                  t
                    ? (o.eventEmitter.emit("transactionHash", c),
                      e._confirmTransaction(o, c, i))
                    : s || o.resolve(c));
              },
              u = function (t) {
                var r = {
                  ...i,
                  method: "eth_sendRawTransaction",
                  params: [t.rawTransaction],
                };
                e.requestManager.send(r, c);
              },
              d = function (e, t) {
                var r;
                if (
                  t &&
                  t.accounts &&
                  t.accounts.wallet &&
                  t.accounts.wallet.length
                )
                  if ("eth_sendTransaction" === e.method) {
                    var n = e.params[0];
                    if (
                      ((r = l(
                        n && "object" === typeof n ? n.from : null,
                        t.accounts,
                      )),
                      r && r.privateKey)
                    ) {
                      n = JSON.parse(JSON.stringify(n));
                      return (
                        delete n.from,
                        t.defaultChain &&
                          !n.chain &&
                          (n.chain = t.defaultChain),
                        t.defaultHardfork &&
                          !n.hardfork &&
                          (n.hardfork = t.defaultHardfork),
                        t.defaultCommon &&
                          !n.common &&
                          (n.common = t.defaultCommon),
                        void t.accounts
                          .signTransaction(n, r.privateKey)
                          .then(u)
                          .catch(function (e) {
                            if (
                              "function" === typeof o.eventEmitter.listeners &&
                              o.eventEmitter.listeners("error").length
                            ) {
                              try {
                                o.eventEmitter.emit("error", e);
                              } catch (e) {}
                              (o.eventEmitter.removeAllListeners(),
                                o.eventEmitter.catch(function () {}));
                            }
                            o.reject(e);
                          })
                      );
                    }
                  } else if ("eth_sign" === e.method) {
                    var a = e.params[1];
                    if (((r = l(e.params[0], t.accounts)), r && r.privateKey)) {
                      var s = t.accounts.sign(a, r.privateKey);
                      return (
                        e.callback && e.callback(null, s.signature),
                        void o.resolve(s.signature)
                      );
                    }
                  }
                return t.requestManager.send(e, c);
              };
            return (
              t &&
              i.params[0] &&
              "object" === typeof i.params[0] &&
              "undefined" === typeof i.params[0].gasPrice &&
              ("undefined" === typeof i.params[0].maxPriorityFeePerGas ||
                "undefined" === typeof i.params[0].maxFeePerGas)
                ? p(e, i.params[0]).then((r) => {
                    (void 0 !== r.gasPrice
                      ? (i.params[0].gasPrice = r.gasPrice)
                      : void 0 !== r.maxPriorityFeePerGas &&
                        void 0 !== r.maxFeePerGas &&
                        ((i.params[0].maxPriorityFeePerGas =
                          r.maxPriorityFeePerGas),
                        (i.params[0].maxFeePerGas = r.maxFeePerGas)),
                      t &&
                        setTimeout(() => {
                          o.eventEmitter.emit("sending", i);
                        }, 0),
                      d(i, e));
                  })
                : (t &&
                    setTimeout(() => {
                      o.eventEmitter.emit("sending", i);
                    }, 0),
                  d(i, e)),
              t &&
                setTimeout(() => {
                  o.eventEmitter.emit("sent", i);
                }, 0),
              o.eventEmitter
            );
          };
        return ((o.method = e), (o.request = this.request.bind(this)), o);
      }),
        (u.prototype.getRevertReason = function (e, t) {
          var r = this;
          return new Promise(function (n, o) {
            new u({
              name: "call",
              call: "eth_call",
              params: 2,
              abiCoder: r.abiCoder,
              handleRevert: !0,
            })
              .createFunction(r.requestManager)(e, a.numberToHex(t))
              .then(function () {
                n(!1);
              })
              .catch(function (e) {
                e.reason
                  ? n({ reason: e.reason, signature: e.signature })
                  : o(e);
              });
          });
        }),
        (u.prototype.isRevertReasonString = function (e) {
          return (
            "string" === typeof e &&
            ((e.length - 2) / 2) % 32 === 4 &&
            "0x08c379a0" === e.substring(0, 10)
          );
        }),
        (u.prototype.request = function () {
          var e = this.toPayload(Array.prototype.slice.call(arguments));
          return ((e.format = this.formatOutput.bind(this)), e);
        }),
        (e.exports = u));
    },
    2991: function (e, t, r) {
      e.exports = { encode: r(3640), decode: r(3641), encodingLength: r(3642) };
    },
    3050: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "abi/5.0.7";
    },
    3140: function (e, t, r) {
      "use strict";
      var n = r(3270),
        o = function (e) {
          var t,
            r,
            o = new Promise(function () {
              ((t = arguments[0]), (r = arguments[1]));
            });
          if (e) return { resolve: t, reject: r, eventEmitter: o };
          var a = new n();
          return (
            (o._events = a._events),
            (o.emit = a.emit),
            (o.on = a.on),
            (o.once = a.once),
            (o.off = a.off),
            (o.listeners = a.listeners),
            (o.addListener = a.addListener),
            (o.removeListener = a.removeListener),
            (o.removeAllListeners = a.removeAllListeners),
            { resolve: t, reject: r, eventEmitter: o }
          );
        };
      ((o.resolve = function (e) {
        var t = o(!0);
        return (t.resolve(e), t.eventEmitter);
      }),
        (e.exports = o));
    },
    3141: function (e, t, r) {
      "use strict";
      var n = r(4121),
        o = function (e) {
          ((this.name = e.name),
            (this.type = e.type),
            (this.subscriptions = e.subscriptions || {}),
            (this.requestManager = null));
        };
      ((o.prototype.setRequestManager = function (e) {
        this.requestManager = e;
      }),
        (o.prototype.attachToObject = function (e) {
          var t = this.buildCall(),
            r = this.name.split(".");
          r.length > 1
            ? ((e[r[0]] = e[r[0]] || {}), (e[r[0]][r[1]] = t))
            : (e[r[0]] = t);
        }),
        (o.prototype.buildCall = function () {
          var e = this;
          return function () {
            e.subscriptions[arguments[0]] ||
              console.warn(
                "Subscription " +
                  JSON.stringify(arguments[0]) +
                  " doesn't exist. Subscribing anyway.",
              );
            var t = new n({
              subscription: e.subscriptions[arguments[0]] || {},
              requestManager: e.requestManager,
              type: e.type,
            });
            return t.subscribe.apply(t, arguments);
          };
        }),
        (e.exports = { subscriptions: o, subscription: n }));
    },
    3142: function (e, t, r) {
      "use strict";
      var n = r(2947),
        o = r(2948),
        a = r(376),
        s = function () {
          var e = this;
          (n.packageInit(this, arguments),
            [
              new o({
                name: "getId",
                call: "net_version",
                params: 0,
                outputFormatter: parseInt,
              }),
              new o({ name: "isListening", call: "net_listening", params: 0 }),
              new o({
                name: "getPeerCount",
                call: "net_peerCount",
                params: 0,
                outputFormatter: a.hexToNumber,
              }),
            ].forEach(function (t) {
              (t.attachToObject(e), t.setRequestManager(e._requestManager));
            }));
        };
      (n.addProviders(s), (e.exports = s));
    },
    3273: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ParamType =
          t.FunctionFragment =
          t.Fragment =
          t.FormatTypes =
          t.EventFragment =
          t.ConstructorFragment =
            void 0));
      var n = r(2829),
        o = r(2808),
        a = r(2773),
        s = r(3050);
      const i = new a.Logger(s.version),
        c = {};
      let u = { calldata: !0, memory: !0, storage: !0 },
        l = { calldata: !0, memory: !0 };
      function p(e, t) {
        if ("bytes" === e || "string" === e) {
          if (u[t]) return !0;
        } else if ("address" === e) {
          if ("payable" === t) return !0;
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && l[t]) return !0;
        return (
          (u[t] || "payable" === t) &&
            i.throwArgumentError("invalid modifier", "name", t),
          !1
        );
      }
      function d(e, t) {
        let r = e;
        function n(t) {
          i.throwArgumentError(
            "unexpected character at position " + t,
            "param",
            e,
          );
        }
        function o(e) {
          let r = { type: "", name: "", parent: e, state: { allowType: !0 } };
          return (t && (r.indexed = !1), r);
        }
        e = e.replace(/\s/g, " ");
        let a = { type: "", name: "", state: { allowType: !0 } },
          s = a;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          switch (r) {
            case "(":
              (s.state.allowType && "" === s.type
                ? (s.type = "tuple")
                : s.state.allowParams || n(i),
                (s.state.allowType = !1),
                (s.type = w(s.type)),
                (s.components = [o(s)]),
                (s = s.components[0]));
              break;
            case ")":
              (delete s.state,
                "indexed" === s.name &&
                  (t || n(i), (s.indexed = !0), (s.name = "")),
                p(s.type, s.name) && (s.name = ""),
                (s.type = w(s.type)));
              let e = s;
              ((s = s.parent),
                s || n(i),
                delete e.parent,
                (s.state.allowParams = !1),
                (s.state.allowName = !0),
                (s.state.allowArray = !0));
              break;
            case ",":
              (delete s.state,
                "indexed" === s.name &&
                  (t || n(i), (s.indexed = !0), (s.name = "")),
                p(s.type, s.name) && (s.name = ""),
                (s.type = w(s.type)));
              let a = o(s.parent);
              (s.parent.components.push(a), delete s.parent, (s = a));
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
                    ? (t || n(i),
                      s.indexed && n(i),
                      (s.indexed = !0),
                      (s.name = ""))
                    : p(s.type, s.name)
                      ? (s.name = "")
                      : (s.state.allowName = !1)));
              break;
            case "[":
              (s.state.allowArray || n(i),
                (s.type += r),
                (s.state.allowArray = !1),
                (s.state.allowName = !1),
                (s.state.readArray = !0));
              break;
            case "]":
              (s.state.readArray || n(i),
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
                    : n(i);
          }
        }
        return (
          s.parent && i.throwArgumentError("unexpected eof", "param", e),
          delete a.state,
          "indexed" === s.name
            ? (t || n(r.length - 7),
              s.indexed && n(r.length - 7),
              (s.indexed = !0),
              (s.name = ""))
            : p(s.type, s.name) && (s.name = ""),
          (a.type = w(a.type)),
          a
        );
      }
      function h(e, t) {
        for (let r in t) (0, o.defineReadOnly)(e, r, t[r]);
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
          (e !== c &&
            i.throwError(
              "use fromString",
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new ParamType()" },
            ),
            h(this, t));
          let r = this.type.match(f);
          (h(
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
            m[e] || i.throwArgumentError("invalid format type", "format", e),
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
            : new ParamType(c, {
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
          return r(d(e, !!t));
        }
        static isParamType(e) {
          return !(null == e || !e._isParamType);
        }
      }
      function y(e, t) {
        return E(e).map((e) => ParamType.fromString(e, t));
      }
      t.ParamType = ParamType;
      class Fragment {
        constructor(e, t) {
          (e !== c &&
            i.throwError(
              "use a static from method",
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" },
            ),
            h(this, t),
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
            case "fallback":
            case "receive":
              return null;
          }
          return i.throwArgumentError("invalid fragment object", "value", e);
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
                  : i.throwArgumentError("unsupported fragment", "value", e)
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
            m[e] || i.throwArgumentError("invalid format type", "format", e),
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
            i.throwArgumentError("invalid event object", "value", e);
          const t = {
            name: k(e.name),
            anonymous: e.anonymous,
            inputs: e.inputs ? e.inputs.map(ParamType.fromObject) : [],
            type: "event",
          };
          return new EventFragment(c, t);
        }
        static fromString(e) {
          let t = e.match(C);
          t || i.throwArgumentError("invalid event string", "value", e);
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
                  i.warn("unknown modifier: " + e);
              }
            }),
            EventFragment.fromObject({
              name: t[1].trim(),
              anonymous: r,
              inputs: y(t[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(e) {
          return e && e._isFragment && "event" === e.type;
        }
      }
      function g(e, t) {
        t.gas = null;
        let r = e.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              i.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                e,
              ),
            r[1].match(/^[0-9]+$/) ||
              i.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                e,
              ),
            (t.gas = n.BigNumber.from(r[1])),
            r[0])
          : e;
      }
      function b(e, t) {
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
      function v(e) {
        let t = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != e.stateMutability
            ? ((t.stateMutability = e.stateMutability),
              (t.constant =
                "view" === t.stateMutability || "pure" === t.stateMutability),
              null != e.constant &&
                !!e.constant !== t.constant &&
                i.throwArgumentError(
                  "cannot have constant function with mutability " +
                    t.stateMutability,
                  "value",
                  e,
                ),
              (t.payable = "payable" === t.stateMutability),
              null != e.payable &&
                !!e.payable !== t.payable &&
                i.throwArgumentError(
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
                  i.throwArgumentError(
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
                  i.throwArgumentError(
                    "cannot have constant payable function",
                    "value",
                    e,
                  ))
              : null != e.constant
                ? ((t.constant = !!e.constant),
                  (t.payable = !t.constant),
                  (t.stateMutability = t.constant ? "view" : "payable"))
                : "constructor" !== e.type &&
                  i.throwArgumentError(
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
            m[e] || i.throwArgumentError("invalid format type", "format", e),
            e === m.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payble: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          e === m.sighash &&
            i.throwError(
              "cannot format a constructor for sighash",
              a.Logger.errors.UNSUPPORTED_OPERATION,
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
            i.throwArgumentError("invalid constructor object", "value", e);
          let t = v(e);
          t.constant &&
            i.throwArgumentError("constructor cannot be constant", "value", e);
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
          e = g(e, t);
          let r = e.match(C);
          return (
            (r && "constructor" === r[1].trim()) ||
              i.throwArgumentError("invalid constructor string", "value", e),
            (t.inputs = y(r[2].trim(), !1)),
            b(r[3].trim(), t),
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
            m[e] || i.throwArgumentError("invalid format type", "format", e),
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
              payble: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
              ouputs: this.outputs.map((t) => JSON.parse(t.format(e))),
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
            i.throwArgumentError("invalid function object", "value", e);
          let t = v(e);
          const r = {
            type: e.type,
            name: k(e.name),
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
          e = g(e, t);
          let r = e.split(" returns ");
          r.length > 2 &&
            i.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(C);
          if (
            (n ||
              i.throwArgumentError("invalid function signature", "value", e),
            (t.name = n[1].trim()),
            t.name && k(t.name),
            (t.inputs = y(n[2], !1)),
            b(n[3].trim(), t),
            r.length > 1)
          ) {
            let n = r[1].match(C);
            (("" == n[1].trim() && "" == n[3].trim()) ||
              i.throwArgumentError("unexpected tokens", "value", e),
              (t.outputs = y(n[2], !1)));
          } else t.outputs = [];
          return FunctionFragment.fromObject(t);
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type;
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
      t.FunctionFragment = FunctionFragment;
      const _ = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");
      function k(e) {
        return (
          (e && e.match(_)) ||
            i.throwArgumentError(`invalid identifier "${e}"`, "value", e),
          e
        );
      }
      const C = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
      function E(e) {
        e = e.trim();
        let t = [],
          r = "",
          n = 0;
        for (let o = 0; o < e.length; o++) {
          let a = e[o];
          "," === a && 0 === n
            ? (t.push(r), (r = ""))
            : ((r += a),
              "(" === a
                ? n++
                : ")" === a &&
                  (n--,
                  -1 === n &&
                    i.throwArgumentError(
                      "unbalanced parenthesis",
                      "value",
                      e,
                    )));
        }
        return (r && t.push(r), t);
      }
    },
    3527: function (e, t, r) {
      "use strict";
      var n = {
        messageId: 0,
        toPayload: function (e, t) {
          if (!e)
            throw new Error(
              'JSONRPC method should be specified for params: "' +
                JSON.stringify(t) +
                '"!',
            );
          return (
            n.messageId++,
            { jsonrpc: "2.0", id: n.messageId, method: e, params: t || [] }
          );
        },
        isValidResponse: function (e) {
          return Array.isArray(e) ? e.every(t) : t(e);
          function t(e) {
            return (
              !!e &&
              !e.error &&
              "2.0" === e.jsonrpc &&
              ("number" === typeof e.id || "string" === typeof e.id) &&
              void 0 !== e.result
            );
          }
        },
        toBatchPayload: function (e) {
          return e.map(function (e) {
            return n.toPayload(e.method, e.params);
          });
        },
      };
      e.exports = n;
    },
    3528: function (e, t, r) {
      "use strict";
      var n = {
        addresses: {
          main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          ropsten: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          rinkeby: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        },
        interfaceIds: {
          addr: "0x3b3b57de",
          setAddr: "0x3b3b57de",
          pubkey: "0xc8690233",
          setPubkey: "0xc8690233",
          contenthash: "0xbc1c58d1",
          setContenthash: "0xbc1c58d1",
          content: "0xd8389dc5",
          setContent: "0xd8389dc5",
        },
      };
      e.exports = n;
    },
    3529: function (e, t, r) {
      "use strict";
      var n = r(2947),
        o = r(2948),
        a = r(376),
        s = r(3141).subscription,
        i = r(796).formatters,
        c = r(796).errors,
        u = r(3140),
        l = r(3530),
        p = function e(t, r, o) {
          var s = this,
            u = Array.prototype.slice.call(arguments);
          if (!(this instanceof e))
            throw new Error(
              'Please use the "new" keyword to instantiate a web3.eth.Contract() object!',
            );
          if (
            ((this.setProvider = function () {
              (n.packageInit(s, arguments),
                (s.clearSubscriptions = s._requestManager.clearSubscriptions));
            }),
            n.packageInit(this, [this.constructor]),
            (this.clearSubscriptions = this._requestManager.clearSubscriptions),
            !t || !Array.isArray(t))
          )
            throw c.ContractMissingABIError();
          this.options = {};
          var p = u[u.length - 1];
          (p &&
            "object" === typeof p &&
            !Array.isArray(p) &&
            ((o = p),
            (this.options = {
              ...this.options,
              ...this._getOrSetDefaultOptions(o),
            }),
            r && "object" === typeof r && (r = null)),
            Object.defineProperty(this.options, "address", {
              set: function (e) {
                e &&
                  (s._address = a.toChecksumAddress(
                    i.inputAddressFormatter(e),
                  ));
              },
              get: function () {
                return s._address;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this.options, "jsonInterface", {
              set: function (e) {
                return (
                  (s.methods = {}),
                  (s.events = {}),
                  (s._jsonInterface = e.map(function (e) {
                    var t, r;
                    if (
                      ((e.constant =
                        "view" === e.stateMutability ||
                        "pure" === e.stateMutability ||
                        e.constant),
                      (e.payable =
                        "payable" === e.stateMutability || e.payable),
                      e.name && (r = a._jsonInterfaceMethodToString(e)),
                      "function" === e.type)
                    ) {
                      if (
                        ((e.signature = l.encodeFunctionSignature(r)),
                        (t = s._createTxObject.bind({ method: e, parent: s })),
                        s.methods[e.name])
                      ) {
                        var n = s._createTxObject.bind({
                          method: e,
                          parent: s,
                          nextMethod: s.methods[e.name],
                        });
                        s.methods[e.name] = n;
                      } else s.methods[e.name] = t;
                      ((s.methods[e.signature] = t), (s.methods[r] = t));
                    } else if ("event" === e.type) {
                      e.signature = l.encodeEventSignature(r);
                      var o = s._on.bind(s, e.signature);
                      ((s.events[e.name] &&
                        "bound " !== s.events[e.name].name) ||
                        (s.events[e.name] = o),
                        (s.events[e.signature] = o),
                        (s.events[r] = o));
                    }
                    return e;
                  })),
                  (s.events.allEvents = s._on.bind(s, "allevents")),
                  s._jsonInterface
                );
              },
              get: function () {
                return s._jsonInterface;
              },
              enumerable: !0,
            }));
          var d = this.constructor.defaultAccount,
            h = this.constructor.defaultBlock || "latest";
          (Object.defineProperty(this, "handleRevert", {
            get: function () {
              return !1 === s.options.handleRevert ||
                !0 === s.options.handleRevert
                ? s.options.handleRevert
                : this.constructor.handleRevert;
            },
            set: function (e) {
              s.options.handleRevert = e;
            },
            enumerable: !0,
          }),
            Object.defineProperty(this, "defaultCommon", {
              get: function () {
                return s.options.common || this.constructor.defaultCommon;
              },
              set: function (e) {
                s.options.common = e;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultHardfork", {
              get: function () {
                return s.options.hardfork || this.constructor.defaultHardfork;
              },
              set: function (e) {
                s.options.hardfork = e;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultChain", {
              get: function () {
                return s.options.chain || this.constructor.defaultChain;
              },
              set: function (e) {
                s.options.chain = e;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "transactionPollingTimeout", {
              get: function () {
                return 0 === s.options.transactionPollingTimeout
                  ? s.options.transactionPollingTimeout
                  : s.options.transactionPollingTimeout ||
                      this.constructor.transactionPollingTimeout;
              },
              set: function (e) {
                s.options.transactionPollingTimeout = e;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "transactionConfirmationBlocks", {
              get: function () {
                return 0 === s.options.transactionConfirmationBlocks
                  ? s.options.transactionConfirmationBlocks
                  : s.options.transactionConfirmationBlocks ||
                      this.constructor.transactionConfirmationBlocks;
              },
              set: function (e) {
                s.options.transactionConfirmationBlocks = e;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "transactionBlockTimeout", {
              get: function () {
                return 0 === s.options.transactionBlockTimeout
                  ? s.options.transactionBlockTimeout
                  : s.options.transactionBlockTimeout ||
                      this.constructor.transactionBlockTimeout;
              },
              set: function (e) {
                s.options.transactionBlockTimeout = e;
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultAccount", {
              get: function () {
                return d;
              },
              set: function (e) {
                return (
                  e && (d = a.toChecksumAddress(i.inputAddressFormatter(e))),
                  e
                );
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultBlock", {
              get: function () {
                return h;
              },
              set: function (e) {
                return ((h = e), e);
              },
              enumerable: !0,
            }),
            (this.methods = {}),
            (this.events = {}),
            (this._address = null),
            (this._jsonInterface = []),
            (this.options.address = r),
            (this.options.jsonInterface = t));
        };
      ((p.setProvider = function (e, t) {
        (n.packageInit(this, [e]), (this._ethAccounts = t));
      }),
        (p.prototype._getCallback = function (e) {
          if (e && e[e.length - 1] && "function" === typeof e[e.length - 1])
            return e.pop();
        }),
        (p.prototype._checkListener = function (e, t) {
          if (t === e) throw c.ContractReservedEventError(e);
        }),
        (p.prototype._getOrSetDefaultOptions = function (e) {
          var t = e.gasPrice ? String(e.gasPrice) : null,
            r = e.from
              ? a.toChecksumAddress(i.inputAddressFormatter(e.from))
              : null;
          return (
            (e.data = e.data || this.options.data),
            (e.from = r || this.options.from),
            (e.gasPrice = t || this.options.gasPrice),
            (e.gas = e.gas || e.gasLimit || this.options.gas),
            delete e.gasLimit,
            e
          );
        }),
        (p.prototype._encodeEventABI = function (e, t) {
          t = t || {};
          var r = t.filter || {},
            n = {};
          if (
            (["fromBlock", "toBlock"]
              .filter(function (e) {
                return void 0 !== t[e];
              })
              .forEach(function (e) {
                n[e] = i.inputBlockNumberFormatter(t[e]);
              }),
            Array.isArray(t.topics))
          )
            n.topics = t.topics;
          else {
            if (
              ((n.topics = []),
              e &&
                !e.anonymous &&
                "ALLEVENTS" !== e.name &&
                n.topics.push(e.signature),
              "ALLEVENTS" !== e.name)
            ) {
              var o = e.inputs
                .filter(function (e) {
                  return !0 === e.indexed;
                })
                .map(function (e) {
                  var t = r[e.name];
                  return t
                    ? Array.isArray(t)
                      ? t.map(function (t) {
                          return l.encodeParameter(e.type, t);
                        })
                      : l.encodeParameter(e.type, t)
                    : null;
                });
              n.topics = n.topics.concat(o);
            }
            n.topics.length || delete n.topics;
          }
          return (
            this.options.address &&
              (n.address = this.options.address.toLowerCase()),
            n
          );
        }),
        (p.prototype._decodeEventABI = function (e) {
          var t = this;
          ((e.data = e.data || ""), (e.topics = e.topics || []));
          var r = i.outputLogFormatter(e);
          if (
            ("ALLEVENTS" === t.name &&
              (t = t.jsonInterface.find(function (t) {
                return t.signature === e.topics[0];
              }) || { anonymous: !0 }),
            (t.inputs = t.inputs || []),
            !t.anonymous)
          ) {
            let r = 0;
            (t.inputs.forEach((e) => (e.indexed ? r++ : null)),
              r > 0 &&
                e.topics.length !== r + 1 &&
                (t = { anonymous: !0, inputs: [] }));
          }
          var n = t.anonymous ? e.topics : e.topics.slice(1);
          return (
            (r.returnValues = l.decodeLog(t.inputs, e.data, n)),
            delete r.returnValues.__length__,
            (r.event = t.name),
            (r.signature = t.anonymous || !e.topics[0] ? null : e.topics[0]),
            (r.raw = { data: r.data, topics: r.topics }),
            delete r.data,
            delete r.topics,
            r
          );
        }),
        (p.prototype._encodeMethodABI = function () {
          var e = this._method.signature,
            t = this.arguments || [],
            r = !1,
            n =
              this._parent.options.jsonInterface
                .filter(function (t) {
                  return (
                    ("constructor" === e && t.type === e) ||
                    ((t.signature === e ||
                      t.signature === e.replace("0x", "") ||
                      t.name === e) &&
                      "function" === t.type)
                  );
                })
                .map(function (e) {
                  var n = Array.isArray(e.inputs) ? e.inputs.length : 0;
                  if (n !== t.length)
                    throw new Error(
                      "The number of arguments is not matching the methods required number. You need to pass " +
                        n +
                        " arguments.",
                    );
                  return (
                    "function" === e.type && (r = e.signature),
                    Array.isArray(e.inputs) ? e.inputs : []
                  );
                })
                .map(function (e) {
                  return l.encodeParameters(e, t).replace("0x", "");
                })[0] || "";
          if ("constructor" === e) {
            if (!this._deployData)
              throw new Error(
                "The contract has no contract data option set. This is necessary to append the constructor parameters.",
              );
            return (
              this._deployData.startsWith("0x") ||
                (this._deployData = "0x" + this._deployData),
              this._deployData + n
            );
          }
          var o = r ? r + n : n;
          if (!o)
            throw new Error(
              "Couldn't find a matching contract method named \"" +
                this._method.name +
                '".',
            );
          return o;
        }),
        (p.prototype._decodeMethodReturn = function (e, t) {
          if (!t) return null;
          t = t.length >= 2 ? t.slice(2) : t;
          var r = l.decodeParameters(e, t);
          return 1 === r.__length__ ? r[0] : (delete r.__length__, r);
        }),
        (p.prototype.deploy = function (e, t) {
          if (
            ((e = e || {}),
            (e.arguments = e.arguments || []),
            (e = this._getOrSetDefaultOptions(e)),
            !e.data)
          ) {
            if ("function" === typeof t)
              return t(c.ContractMissingDeployDataError());
            throw c.ContractMissingDeployDataError();
          }
          var r =
            this.options.jsonInterface.find((e) => "constructor" === e.type) ||
            {};
          return (
            (r.signature = "constructor"),
            this._createTxObject.apply(
              {
                method: r,
                parent: this,
                deployData: e.data,
                _ethAccounts: this.constructor._ethAccounts,
              },
              e.arguments,
            )
          );
        }),
        (p.prototype._generateEventOptions = function () {
          var e = Array.prototype.slice.call(arguments),
            t = this._getCallback(e),
            r =
              "object" === (!!e[e.length - 1] && typeof e[e.length - 1])
                ? e.pop()
                : {},
            n = "string" === typeof e[0] ? e[0] : "allevents",
            o =
              "allevents" === n.toLowerCase()
                ? {
                    name: "ALLEVENTS",
                    jsonInterface: this.options.jsonInterface,
                  }
                : this.options.jsonInterface.find(function (e) {
                    return (
                      "event" === e.type &&
                      (e.name === n ||
                        e.signature === "0x" + n.replace("0x", ""))
                    );
                  });
          if (!o) throw c.ContractEventDoesNotExistError(n);
          if (!a.isAddress(this.options.address))
            throw c.ContractNoAddressDefinedError();
          return { params: this._encodeEventABI(o, r), event: o, callback: t };
        }),
        (p.prototype.clone = function () {
          return new this.constructor(
            this.options.jsonInterface,
            this.options.address,
            this.options,
          );
        }),
        (p.prototype.once = function (e, t, r) {
          var n = Array.prototype.slice.call(arguments);
          if (((r = this._getCallback(n)), !r))
            throw c.ContractOnceRequiresCallbackError();
          (t && delete t.fromBlock,
            this._on(e, t, function (e, t, n) {
              (n.unsubscribe(), "function" === typeof r && r(e, t, n));
            }));
        }),
        (p.prototype._on = function () {
          var e = this._generateEventOptions.apply(this, arguments);
          (e.params &&
            e.params.toBlock &&
            (delete e.params.toBlock,
            console.warn(
              "Invalid option: toBlock. Use getPastEvents for specific range.",
            )),
            this._checkListener("newListener", e.event.name),
            this._checkListener("removeListener", e.event.name));
          var t = new s({
            subscription: {
              params: 1,
              inputFormatter: [i.inputLogFormatter],
              outputFormatter: this._decodeEventABI.bind(e.event),
              subscriptionHandler: function (e) {
                (e.removed ? this.emit("changed", e) : this.emit("data", e),
                  "function" === typeof this.callback &&
                    this.callback(null, e, this));
              },
            },
            type: "eth",
            requestManager: this._requestManager,
          });
          return (
            t.subscribe("logs", e.params, e.callback || function () {}),
            t
          );
        }),
        (p.prototype.getPastEvents = function () {
          var e = this._generateEventOptions.apply(this, arguments),
            t = new o({
              name: "getPastLogs",
              call: "eth_getLogs",
              params: 1,
              inputFormatter: [i.inputLogFormatter],
              outputFormatter: this._decodeEventABI.bind(e.event),
            });
          t.setRequestManager(this._requestManager);
          var r = t.buildCall();
          return ((t = null), r(e.params, e.callback));
        }),
        (p.prototype._createTxObject = function () {
          var e = Array.prototype.slice.call(arguments),
            t = {};
          if (
            ("function" === this.method.type &&
              ((t.call = this.parent._executeMethod.bind(t, "call")),
              (t.call.request = this.parent._executeMethod.bind(
                t,
                "call",
                !0,
              ))),
            (t.send = this.parent._executeMethod.bind(t, "send")),
            (t.send.request = this.parent._executeMethod.bind(t, "send", !0)),
            (t.encodeABI = this.parent._encodeMethodABI.bind(t)),
            (t.estimateGas = this.parent._executeMethod.bind(t, "estimate")),
            e && this.method.inputs && e.length !== this.method.inputs.length)
          ) {
            if (this.nextMethod) return this.nextMethod.apply(null, e);
            throw c.InvalidNumberOfParams(
              e.length,
              this.method.inputs.length,
              this.method.name,
            );
          }
          return (
            (t.arguments = e || []),
            (t._method = this.method),
            (t._parent = this.parent),
            (t._ethAccounts =
              this.parent.constructor._ethAccounts || this._ethAccounts),
            this.deployData && (t._deployData = this.deployData),
            t
          );
        }),
        (p.prototype._processExecuteArguments = function (e, t) {
          var r = {};
          if (
            ((r.type = e.shift()),
            (r.callback = this._parent._getCallback(e)),
            "call" !== r.type ||
              !0 === e[e.length - 1] ||
              ("string" !== typeof e[e.length - 1] &&
                !isFinite(e[e.length - 1])) ||
              (r.defaultBlock = e.pop()),
            (r.options =
              "object" === (!!e[e.length - 1] && typeof e[e.length - 1])
                ? e.pop()
                : {}),
            (r.generateRequest = !0 === e[e.length - 1] && e.pop()),
            (r.options = this._parent._getOrSetDefaultOptions(r.options)),
            (r.options.data = this.encodeABI()),
            !this._deployData && !a.isAddress(this._parent.options.address))
          )
            throw c.ContractNoAddressDefinedError();
          return (
            this._deployData || (r.options.to = this._parent.options.address),
            r.options.data
              ? r
              : a._fireError(
                  new Error(
                    "Couldn't find a matching contract method, or the number of parameters is wrong.",
                  ),
                  t.eventEmitter,
                  t.reject,
                  r.callback,
                )
          );
        }),
        (p.prototype._executeMethod = function () {
          var e = this,
            t = this._parent._processExecuteArguments.call(
              this,
              Array.prototype.slice.call(arguments),
              r,
            ),
            r = u("send" !== t.type),
            n = e.constructor._ethAccounts || e._ethAccounts;
          if (t.generateRequest) {
            var s = {
              params: [i.inputCallFormatter.call(this._parent, t.options)],
              callback: t.callback,
            };
            return (
              "call" === t.type
                ? (s.params.push(
                    i.inputDefaultBlockNumberFormatter.call(
                      this._parent,
                      t.defaultBlock,
                    ),
                  ),
                  (s.method = "eth_call"),
                  (s.format = this._parent._decodeMethodReturn.bind(
                    null,
                    this._method.outputs,
                  )))
                : (s.method = "eth_sendTransaction"),
              s
            );
          }
          switch (t.type) {
            case "estimate":
              var p = new o({
                name: "estimateGas",
                call: "eth_estimateGas",
                params: 1,
                inputFormatter: [i.inputCallFormatter],
                outputFormatter: a.hexToNumber,
                requestManager: e._parent._requestManager,
                accounts: n,
                defaultAccount: e._parent.defaultAccount,
                defaultBlock: e._parent.defaultBlock,
              }).createFunction();
              return p(t.options, t.callback);
            case "call":
              var d = new o({
                name: "call",
                call: "eth_call",
                params: 2,
                inputFormatter: [
                  i.inputCallFormatter,
                  i.inputDefaultBlockNumberFormatter,
                ],
                outputFormatter: function (t) {
                  return e._parent._decodeMethodReturn(e._method.outputs, t);
                },
                requestManager: e._parent._requestManager,
                accounts: n,
                defaultAccount: e._parent.defaultAccount,
                defaultBlock: e._parent.defaultBlock,
                handleRevert: e._parent.handleRevert,
                abiCoder: l,
              }).createFunction();
              return d(t.options, t.defaultBlock, t.callback);
            case "send":
              if (!a.isAddress(t.options.from))
                return a._fireError(
                  c.ContractNoFromAddressDefinedError(),
                  r.eventEmitter,
                  r.reject,
                  t.callback,
                );
              if (
                "boolean" === typeof this._method.payable &&
                !this._method.payable &&
                t.options.value &&
                t.options.value > 0
              )
                return a._fireError(
                  new Error(
                    "Can not send value to non-payable contract method or constructor",
                  ),
                  r.eventEmitter,
                  r.reject,
                  t.callback,
                );
              var h = {
                  receiptFormatter: function (t) {
                    if (Array.isArray(t.logs)) {
                      var r = t.logs.map((t) =>
                        e._parent._decodeEventABI.call(
                          {
                            name: "ALLEVENTS",
                            jsonInterface: e._parent.options.jsonInterface,
                          },
                          t,
                        ),
                      );
                      t.events = {};
                      var n = 0;
                      (r.forEach(function (e) {
                        e.event
                          ? t.events[e.event]
                            ? Array.isArray(t.events[e.event])
                              ? t.events[e.event].push(e)
                              : (t.events[e.event] = [t.events[e.event], e])
                            : (t.events[e.event] = e)
                          : ((t.events[n] = e), n++);
                      }),
                        delete t.logs);
                    }
                    return t;
                  },
                  contractDeployFormatter: function (t) {
                    var r = e._parent.clone();
                    return ((r.options.address = t.contractAddress), r);
                  },
                },
                m = new o({
                  name: "sendTransaction",
                  call: "eth_sendTransaction",
                  params: 1,
                  inputFormatter: [i.inputTransactionFormatter],
                  requestManager: e._parent._requestManager,
                  accounts: e.constructor._ethAccounts || e._ethAccounts,
                  defaultAccount: e._parent.defaultAccount,
                  defaultBlock: e._parent.defaultBlock,
                  transactionBlockTimeout: e._parent.transactionBlockTimeout,
                  transactionConfirmationBlocks:
                    e._parent.transactionConfirmationBlocks,
                  transactionPollingTimeout:
                    e._parent.transactionPollingTimeout,
                  defaultCommon: e._parent.defaultCommon,
                  defaultChain: e._parent.defaultChain,
                  defaultHardfork: e._parent.defaultHardfork,
                  handleRevert: e._parent.handleRevert,
                  extraFormatters: h,
                  abiCoder: l,
                }).createFunction();
              return m(t.options, t.callback);
            default:
              throw new Error('Method "' + t.type + '" not implemented.');
          }
        }),
        (e.exports = p));
    },
    3530: function (e, t, r) {
      var n = r(2).Buffer,
        o = r(376),
        a = r(3531).AbiCoder,
        s = r(3531).ParamType,
        i = new a(function (e, t) {
          return !e.match(/^u?int/) ||
            Array.isArray(t) ||
            (t && "object" === typeof t && "BN" === t.constructor.name)
            ? t
            : t.toString();
        });
      function c() {}
      var u = function () {};
      ((u.prototype.encodeFunctionSignature = function (e) {
        return (
          ("function" === typeof e || ("object" === typeof e && e)) &&
            (e = o._jsonInterfaceMethodToString(e)),
          o.sha3(e).slice(0, 10)
        );
      }),
        (u.prototype.encodeEventSignature = function (e) {
          return (
            ("function" === typeof e || ("object" === typeof e && e)) &&
              (e = o._jsonInterfaceMethodToString(e)),
            o.sha3(e)
          );
        }),
        (u.prototype.encodeParameter = function (e, t) {
          return this.encodeParameters([e], [t]);
        }),
        (u.prototype.encodeParameters = function (e, t) {
          var r = this;
          return (
            (e = r.mapTypes(e)),
            (t = t.map(function (t, n) {
              let o = e[n];
              if (
                ("object" === typeof o && o.type && (o = o.type),
                (t = r.formatParam(o, t)),
                "string" === typeof o && o.includes("tuple"))
              ) {
                const e = i._getCoder(s.from(o)),
                  n = (e, t) => {
                    if ("array" === e.name)
                      return t.map((t) =>
                        n(i._getCoder(s.from(e.type.replace("[]", ""))), t),
                      );
                    e.coders.forEach((e, o) => {
                      "tuple" === e.name
                        ? n(e, t[o])
                        : (t[o] = r.formatParam(e.name, t[o]));
                    });
                  };
                n(e, t);
              }
              return t;
            })),
            i.encode(e, t)
          );
        }),
        (u.prototype.mapTypes = function (e) {
          var t = this,
            r = [];
          return (
            e.forEach(function (e) {
              if (
                ("object" === typeof e &&
                  "function" === e.type &&
                  (e = Object.assign({}, e, { type: "bytes24" })),
                t.isSimplifiedStructFormat(e))
              ) {
                var n = Object.keys(e)[0];
                r.push(
                  Object.assign(t.mapStructNameAndType(n), {
                    components: t.mapStructToCoderFormat(e[n]),
                  }),
                );
              } else r.push(e);
            }),
            r
          );
        }),
        (u.prototype.isSimplifiedStructFormat = function (e) {
          return (
            "object" === typeof e &&
            "undefined" === typeof e.components &&
            "undefined" === typeof e.name
          );
        }),
        (u.prototype.mapStructNameAndType = function (e) {
          var t = "tuple";
          return (
            e.indexOf("[]") > -1 && ((t = "tuple[]"), (e = e.slice(0, -2))),
            { type: t, name: e }
          );
        }),
        (u.prototype.mapStructToCoderFormat = function (e) {
          var t = this,
            r = [];
          return (
            Object.keys(e).forEach(function (n) {
              "object" !== typeof e[n]
                ? r.push({ name: n, type: e[n] })
                : r.push(
                    Object.assign(t.mapStructNameAndType(n), {
                      components: t.mapStructToCoderFormat(e[n]),
                    }),
                  );
            }),
            r
          );
        }),
        (u.prototype.formatParam = function (e, t) {
          const r = new RegExp(/^bytes([0-9]*)$/),
            a = new RegExp(/^bytes([0-9]*)\[\]$/),
            s = new RegExp(/^(u?int)([0-9]*)$/),
            i = new RegExp(/^(u?int)([0-9]*)\[\]$/);
          if (o.isBN(t) || o.isBigNumber(t)) return t.toString(10);
          if (e.match(a) || e.match(i))
            return t.map((t) => this.formatParam(e.replace("[]", ""), t));
          let c = e.match(s);
          if (c) {
            let e = parseInt(c[2] || "256");
            e / 8 < t.length && (t = o.leftPad(t, e));
          }
          if (((c = e.match(r)), c)) {
            n.isBuffer(t) && (t = o.toHex(t));
            let e = parseInt(c[1]);
            if (e) {
              let r = 2 * e;
              ("0x" === t.substring(0, 2) && (r += 2),
                t.length < r && (t = o.rightPad(t, 2 * e)));
            }
            t.length % 2 === 1 && (t = "0x0" + t.substring(2));
          }
          return t;
        }),
        (u.prototype.encodeFunctionCall = function (e, t) {
          return (
            this.encodeFunctionSignature(e) +
            this.encodeParameters(e.inputs, t).replace("0x", "")
          );
        }),
        (u.prototype.decodeParameter = function (e, t) {
          return this.decodeParameters([e], t)[0];
        }),
        (u.prototype.decodeParameters = function (e, t) {
          return this.decodeParametersWith(e, t, !1);
        }),
        (u.prototype.decodeParametersWith = function (e, t, r) {
          if (e.length > 0 && (!t || "0x" === t || "0X" === t))
            throw new Error(
              "Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.",
            );
          var n = i.decode(this.mapTypes(e), "0x" + t.replace(/0x/i, ""), r),
            o = new c();
          return (
            (o.__length__ = 0),
            e.forEach(function (e, t) {
              var r = n[o.__length__];
              ((r = "0x" === r ? null : r),
                (o[t] = r),
                ("function" === typeof e || (e && "object" === typeof e)) &&
                  e.name &&
                  (o[e.name] = r),
                o.__length__++);
            }),
            o
          );
        }),
        (u.prototype.decodeLog = function (e, t, r) {
          var n = this;
          ((r = Array.isArray(r) ? r : [r]), (t = t || ""));
          var o = [],
            a = [],
            s = 0;
          e.forEach(function (e, t) {
            e.indexed
              ? ((a[t] = [
                  "bool",
                  "int",
                  "uint",
                  "address",
                  "fixed",
                  "ufixed",
                ].find(function (t) {
                  return -1 !== e.type.indexOf(t);
                })
                  ? n.decodeParameter(e.type, r[s])
                  : r[s]),
                s++)
              : (o[t] = e);
          });
          var i = t,
            u = i ? this.decodeParametersWith(o, i, !0) : [],
            l = new c();
          return (
            (l.__length__ = 0),
            e.forEach(function (e, t) {
              ((l[t] = "string" === e.type ? "" : null),
                "undefined" !== typeof u[t] && (l[t] = u[t]),
                "undefined" !== typeof a[t] && (l[t] = a[t]),
                e.name && (l[e.name] = l[t]),
                l.__length__++);
            }),
            l
          );
        }));
      var l = new u();
      e.exports = l;
    },
    3531: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AbiCoder", {
          enumerable: !0,
          get: function () {
            return o.AbiCoder;
          },
        }),
        Object.defineProperty(t, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return n.ConstructorFragment;
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
            return a.Indexed;
          },
        }),
        Object.defineProperty(t, "Interface", {
          enumerable: !0,
          get: function () {
            return a.Interface;
          },
        }),
        Object.defineProperty(t, "LogDescription", {
          enumerable: !0,
          get: function () {
            return a.LogDescription;
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
            return a.TransactionDescription;
          },
        }),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return a.checkResultErrors;
          },
        }),
        Object.defineProperty(t, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return o.defaultAbiCoder;
          },
        }));
      var n = r(3273),
        o = r(3532),
        a = r(4134);
    },
    3532: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultAbiCoder = t.AbiCoder = void 0));
      var n = r(2776),
        o = r(2808),
        a = r(2773),
        s = r(3050),
        i = r(2846),
        c = r(4126),
        u = r(3533),
        l = r(4128),
        p = r(3534),
        d = r(4129),
        h = r(4130),
        m = r(4131),
        f = r(4132),
        y = r(4133),
        g = r(3273);
      const b = new a.Logger(s.version),
        v = new RegExp(/^bytes([0-9]*)$/),
        w = new RegExp(/^(u?int)([0-9]*)$/);
      class AbiCoder {
        constructor(e) {
          (b.checkNew(new.target, AbiCoder),
            (0, o.defineReadOnly)(this, "coerceFunc", e || null));
        }
        _getCoder(e) {
          switch (e.baseType) {
            case "address":
              return new c.AddressCoder(e.name);
            case "bool":
              return new l.BooleanCoder(e.name);
            case "string":
              return new f.StringCoder(e.name);
            case "bytes":
              return new p.BytesCoder(e.name);
            case "array":
              return new u.ArrayCoder(
                this._getCoder(e.arrayChildren),
                e.arrayLength,
                e.name,
              );
            case "tuple":
              return new y.TupleCoder(
                (e.components || []).map((e) => this._getCoder(e)),
                e.name,
              );
            case "":
              return new h.NullCoder(e.name);
          }
          let t = e.type.match(w);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 !== 0) &&
                b.throwArgumentError(
                  "invalid " + t[1] + " bit length",
                  "param",
                  e,
                ),
              new m.NumberCoder(r / 8, "int" === t[1], e.name)
            );
          }
          if (((t = e.type.match(v)), t)) {
            let r = parseInt(t[1]);
            return (
              (0 === r || r > 32) &&
                b.throwArgumentError("invalid bytes length", "param", e),
              new d.FixedBytesCoder(r, e.name)
            );
          }
          return b.throwArgumentError("invalid type", "type", e.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(e, t) {
          return new i.Reader(e, this._getWordSize(), this.coerceFunc, t);
        }
        _getWriter() {
          return new i.Writer(this._getWordSize());
        }
        encode(e, t) {
          e.length !== t.length &&
            b.throwError(
              "types/values length mismatch",
              a.Logger.errors.INVALID_ARGUMENT,
              {
                count: { types: e.length, values: t.length },
                value: { types: e, values: t },
              },
            );
          const r = e.map((e) => this._getCoder(g.ParamType.from(e))),
            n = new y.TupleCoder(r, "_"),
            o = this._getWriter();
          return (n.encode(o, t), o.data);
        }
        decode(e, t, r) {
          const o = e.map((e) => this._getCoder(g.ParamType.from(e))),
            a = new y.TupleCoder(o, "_");
          return a.decode(this._getReader((0, n.arrayify)(t), r));
        }
      }
      t.AbiCoder = AbiCoder;
      t.defaultAbiCoder = new AbiCoder();
    },
    3533: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ArrayCoder = void 0),
        (t.pack = c),
        (t.unpack = u));
      var n = r(2773),
        o = r(3050),
        a = r(2846),
        s = r(4127);
      const i = new n.Logger(o.version);
      function c(e, t, r) {
        let o = null;
        if (Array.isArray(r)) o = r;
        else if (r && "object" === typeof r) {
          let e = {};
          o = t.map((t) => {
            const o = t.localName;
            return (
              o ||
                i.throwError(
                  "cannot encode object for signature with missing names",
                  n.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r },
                ),
              e[o] &&
                i.throwError(
                  "cannot encode object for signature with duplicate names",
                  n.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r },
                ),
              (e[o] = !0),
              r[o]
            );
          });
        } else i.throwArgumentError("invalid tuple value", "tuple", r);
        t.length !== o.length &&
          i.throwArgumentError("types/value length mismatch", "tuple", r);
        let s = new a.Writer(e.wordSize),
          c = new a.Writer(e.wordSize),
          u = [];
        (t.forEach((e, t) => {
          let r = o[t];
          if (e.dynamic) {
            let t = c.length;
            e.encode(c, r);
            let n = s.writeUpdatableValue();
            u.push((e) => {
              n(e + t);
            });
          } else e.encode(s, r);
        }),
          u.forEach((e) => {
            e(s.length);
          }));
        let l = e.appendWriter(s);
        return ((l += e.appendWriter(c)), l);
      }
      function u(e, t) {
        let r = [],
          o = e.subReader(0);
        t.forEach((t) => {
          let a = null;
          if (t.dynamic) {
            let r = e.readValue(),
              i = o.subReader(r.toNumber());
            try {
              a = t.decode(i);
            } catch (s) {
              if (s.code === n.Logger.errors.BUFFER_OVERRUN) throw s;
              ((a = s),
                (a.baseType = t.name),
                (a.name = t.localName),
                (a.type = t.type));
            }
          } else
            try {
              a = t.decode(e);
            } catch (s) {
              if (s.code === n.Logger.errors.BUFFER_OVERRUN) throw s;
              ((a = s),
                (a.baseType = t.name),
                (a.name = t.localName),
                (a.type = t.type));
            }
          void 0 != a && r.push(a);
        });
        const a = t.reduce((e, t) => {
          const r = t.localName;
          return (r && (e[r] || (e[r] = 0), e[r]++), e);
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (!n || 1 !== a[n]) return;
          if (("length" === n && (n = "_length"), null != r[n])) return;
          const o = r[t];
          o instanceof Error
            ? Object.defineProperty(r, n, {
                get: () => {
                  throw o;
                },
              })
            : (r[n] = o);
        });
        for (let n = 0; n < r.length; n++) {
          const e = r[n];
          e instanceof Error &&
            Object.defineProperty(r, n, {
              get: () => {
                throw e;
              },
            });
        }
        return Object.freeze(r);
      }
      class ArrayCoder extends a.Coder {
        constructor(e, t, r) {
          const n = e.type + "[" + (t >= 0 ? t : "") + "]",
            o = -1 === t || e.dynamic;
          (super("array", n, r, o), (this.coder = e), (this.length = t));
        }
        encode(e, t) {
          Array.isArray(t) || this._throwError("expected array value", t);
          let r = this.length;
          (-1 === r && ((r = t.length), e.writeValue(t.length)),
            i.checkArgumentCount(
              t.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : ""),
            ));
          let n = [];
          for (let o = 0; o < t.length; o++) n.push(this.coder);
          return c(e, n, t);
        }
        decode(e) {
          let t = this.length;
          -1 === t && (t = e.readValue().toNumber());
          let r = [];
          for (let n = 0; n < t; n++) r.push(new s.AnonymousCoder(this.coder));
          return e.coerce(this.name, u(e, r));
        }
      }
      t.ArrayCoder = ArrayCoder;
    },
    3534: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicBytesCoder = t.BytesCoder = void 0));
      var n = r(2776),
        o = r(2846);
      class DynamicBytesCoder extends o.Coder {
        constructor(e, t) {
          super(e, e, t, !0);
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
    3539: function (e, t, r) {
      "use strict";
      var n = r(2947),
        o = r(2948),
        a = r(376),
        s = r(3142),
        i = r(796).formatters,
        c = function () {
          var e = this;
          (n.packageInit(this, arguments), (this.net = new s(this)));
          var t = null,
            r = "latest";
          (Object.defineProperty(this, "defaultAccount", {
            get: function () {
              return t;
            },
            set: function (e) {
              return (
                e && (t = a.toChecksumAddress(i.inputAddressFormatter(e))),
                c.forEach(function (e) {
                  e.defaultAccount = t;
                }),
                e
              );
            },
            enumerable: !0,
          }),
            Object.defineProperty(this, "defaultBlock", {
              get: function () {
                return r;
              },
              set: function (e) {
                return (
                  (r = e),
                  c.forEach(function (e) {
                    e.defaultBlock = r;
                  }),
                  e
                );
              },
              enumerable: !0,
            }));
          var c = [
            new o({
              name: "getAccounts",
              call: "personal_listAccounts",
              params: 0,
              outputFormatter: a.toChecksumAddress,
            }),
            new o({
              name: "newAccount",
              call: "personal_newAccount",
              params: 1,
              inputFormatter: [null],
              outputFormatter: a.toChecksumAddress,
            }),
            new o({
              name: "unlockAccount",
              call: "personal_unlockAccount",
              params: 3,
              inputFormatter: [i.inputAddressFormatter, null, null],
            }),
            new o({
              name: "lockAccount",
              call: "personal_lockAccount",
              params: 1,
              inputFormatter: [i.inputAddressFormatter],
            }),
            new o({
              name: "importRawKey",
              call: "personal_importRawKey",
              params: 2,
            }),
            new o({
              name: "sendTransaction",
              call: "personal_sendTransaction",
              params: 2,
              inputFormatter: [i.inputTransactionFormatter, null],
            }),
            new o({
              name: "signTransaction",
              call: "personal_signTransaction",
              params: 2,
              inputFormatter: [i.inputTransactionFormatter, null],
            }),
            new o({
              name: "sign",
              call: "personal_sign",
              params: 3,
              inputFormatter: [
                i.inputSignFormatter,
                i.inputAddressFormatter,
                null,
              ],
            }),
            new o({
              name: "ecRecover",
              call: "personal_ecRecover",
              params: 2,
              inputFormatter: [i.inputSignFormatter, null],
            }),
          ];
          c.forEach(function (t) {
            (t.attachToObject(e),
              t.setRequestManager(e._requestManager),
              (t.defaultBlock = e.defaultBlock),
              (t.defaultAccount = e.defaultAccount));
          });
        };
      (n.addProviders(c), (e.exports = c));
    },
    3541: function (e, t) {
      var r =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (r) {
        var n = new Uint8Array(16);
        e.exports = function () {
          return (r(n), n);
        };
      } else {
        var o = new Array(16);
        e.exports = function () {
          for (var e, t = 0; t < 16; t++)
            (0 === (3 & t) && (e = 4294967296 * Math.random()),
              (o[t] = (e >>> ((3 & t) << 3)) & 255));
          return o;
        };
      }
    },
    3542: function (e, t) {
      for (var r = [], n = 0; n < 256; ++n)
        r[n] = (n + 256).toString(16).substr(1);
      function o(e, t) {
        var n = t || 0,
          o = r;
        return [
          o[e[n++]],
          o[e[n++]],
          o[e[n++]],
          o[e[n++]],
          "-",
          o[e[n++]],
          o[e[n++]],
          "-",
          o[e[n++]],
          o[e[n++]],
          "-",
          o[e[n++]],
          o[e[n++]],
          "-",
          o[e[n++]],
          o[e[n++]],
          o[e[n++]],
          o[e[n++]],
          o[e[n++]],
          o[e[n++]],
        ].join("");
      }
      e.exports = o;
    },
    3640: function (e, t) {
      e.exports = s;
      var r = 128,
        n = 127,
        o = ~n,
        a = Math.pow(2, 31);
      function s(e, t, n) {
        ((t = t || []), (n = n || 0));
        var i = n;
        while (e >= a) ((t[n++] = (255 & e) | r), (e /= 128));
        while (e & o) ((t[n++] = (255 & e) | r), (e >>>= 7));
        return ((t[n] = 0 | e), (s.bytes = n - i + 1), t);
      }
    },
    3641: function (e, t) {
      e.exports = o;
      var r = 128,
        n = 127;
      function o(e, t) {
        var a,
          s = 0,
          i = ((t = t || 0), 0),
          c = t,
          u = e.length;
        do {
          if (c >= u)
            throw ((o.bytes = 0), new RangeError("Could not decode varint"));
          ((a = e[c++]),
            (s += i < 28 ? (a & n) << i : (a & n) * Math.pow(2, i)),
            (i += 7));
        } while (a >= r);
        return ((o.bytes = c - t), s);
      }
    },
    3642: function (e, t) {
      var r = Math.pow(2, 7),
        n = Math.pow(2, 14),
        o = Math.pow(2, 21),
        a = Math.pow(2, 28),
        s = Math.pow(2, 35),
        i = Math.pow(2, 42),
        c = Math.pow(2, 49),
        u = Math.pow(2, 56),
        l = Math.pow(2, 63);
      e.exports = function (e) {
        return e < r
          ? 1
          : e < n
            ? 2
            : e < o
              ? 3
              : e < a
                ? 4
                : e < s
                  ? 5
                  : e < i
                    ? 6
                    : e < c
                      ? 7
                      : e < u
                        ? 8
                        : e < l
                          ? 9
                          : 10;
      };
    },
    4108: function (e) {
      e.exports = JSON.parse(
        '{"name":"web3","version":"1.6.0","description":"Ethereum JavaScript API","repository":"https://github.com/ethereum/web3.js","license":"LGPL-3.0","engines":{"node":">=8.0.0"},"main":"lib/index.js","bugs":{"url":"https://github.com/ethereum/web3.js/issues"},"keywords":["Ethereum","JavaScript","API"],"author":"ethereum.org","types":"types/index.d.ts","scripts":{"compile":"tsc -b tsconfig.json","dtslint":"dtslint --localTs ../../node_modules/typescript/lib types","postinstall":"echo \\"WARNING: the web3-shh and web3-bzz api will be deprecated in the next version\\""},"authors":[{"name":"Fabian Vogelsteller","email":"fabian@ethereum.org","homepage":"http://frozeman.de"},{"name":"Marek Kotewicz","email":"marek@parity.io","url":"https://github.com/debris"},{"name":"Marian Oancea","url":"https://github.com/cubedro"},{"name":"Gav Wood","email":"g@parity.io","homepage":"http://gavwood.com"},{"name":"Jeffery Wilcke","email":"jeffrey.wilcke@ethereum.org","url":"https://github.com/obscuren"}],"dependencies":{"web3-bzz":"1.6.0","web3-core":"1.6.0","web3-eth":"1.6.0","web3-eth-personal":"1.6.0","web3-net":"1.6.0","web3-shh":"1.6.0","web3-utils":"1.6.0"},"devDependencies":{"@types/node":"^12.12.6","dtslint":"^3.4.1","typescript":"^3.9.5","web3-core-helpers":"1.6.0"},"gitHead":"a34afae56647615d7cbdfa227af8a1389476e2d6"}',
      );
    },
    4109: function (e, t, r) {
      "use strict";
      const { callbackify: n } = r(799);
      var o = r(796).errors,
        a = r(3527),
        s = r(4110),
        i = r(4111),
        c = function e(t, r) {
          ((this.provider = null),
            (this.providers = e.providers),
            this.setProvider(t, r),
            (this.subscriptions = new Map()));
        };
      ((c.givenProvider = i),
        (c.providers = {
          WebsocketProvider: r(4112),
          HttpProvider: r(398),
          IpcProvider: r(4118),
        }),
        (c.prototype.setProvider = function (e, t) {
          var r = this;
          if (e && "string" === typeof e && this.providers)
            if (/^http(s)?:\/\//i.test(e))
              e = new this.providers.HttpProvider(e);
            else if (/^ws(s)?:\/\//i.test(e))
              e = new this.providers.WebsocketProvider(e);
            else if (
              e &&
              "object" === typeof t &&
              "function" === typeof t.connect
            )
              e = new this.providers.IpcProvider(e, t);
            else if (e)
              throw new Error("Can't autodetect provider for \"" + e + '"');
          if (
            (this.provider &&
              this.provider.connected &&
              this.clearSubscriptions(),
            (this.provider = e || null),
            this.provider && this.provider.on)
          ) {
            ("function" === typeof e.request
              ? this.provider.on("message", function (e) {
                  if (e && "eth_subscription" === e.type && e.data) {
                    const t = e.data;
                    t.subscription &&
                      r.subscriptions.has(t.subscription) &&
                      r.subscriptions
                        .get(t.subscription)
                        .callback(null, t.result);
                  }
                })
              : this.provider.on("data", function (e, t) {
                  ((e = e || t),
                    e.method &&
                      e.params &&
                      e.params.subscription &&
                      r.subscriptions.has(e.params.subscription) &&
                      r.subscriptions
                        .get(e.params.subscription)
                        .callback(null, e.params.result));
                }),
              this.provider.on("connect", function () {
                r.subscriptions.forEach(function (e) {
                  e.subscription.resubscribe();
                });
              }),
              this.provider.on("error", function (e) {
                r.subscriptions.forEach(function (t) {
                  t.callback(e);
                });
              }));
            const t = function (e) {
              ((r._isCleanCloseEvent(e) && !r._isIpcCloseError(e)) ||
                (r.subscriptions.forEach(function (t) {
                  (t.callback(o.ConnectionCloseError(e)),
                    r.subscriptions.delete(t.subscription.id));
                }),
                r.provider &&
                  r.provider.emit &&
                  r.provider.emit("error", o.ConnectionCloseError(e))),
                r.provider && r.provider.emit && r.provider.emit("end", e));
            };
            (this.provider.on("close", t), this.provider.on("disconnect", t));
          }
        }),
        (c.prototype.send = function (e, t) {
          if (((t = t || function () {}), !this.provider))
            return t(o.InvalidProvider());
          const { method: r, params: s } = e,
            i = a.toPayload(r, s),
            c = this._jsonrpcResultCallback(t, i);
          if (this.provider.request) {
            const e = n(this.provider.request.bind(this.provider)),
              o = { method: r, params: s };
            e(o, t);
          } else if (this.provider.sendAsync) this.provider.sendAsync(i, c);
          else {
            if (!this.provider.send)
              throw new Error(
                "Provider does not have a request or send method to use.",
              );
            this.provider.send(i, c);
          }
        }),
        (c.prototype.sendBatch = function (e, t) {
          if (!this.provider) return t(o.InvalidProvider());
          var r = a.toBatchPayload(e);
          this.provider[this.provider.sendAsync ? "sendAsync" : "send"](
            r,
            function (e, r) {
              return e
                ? t(e)
                : Array.isArray(r)
                  ? void t(null, r)
                  : t(o.InvalidResponse(r));
            },
          );
        }),
        (c.prototype.addSubscription = function (e, t) {
          if (!this.provider.on)
            throw new Error(
              "The provider doesn't support subscriptions: " +
                this.provider.constructor.name,
            );
          this.subscriptions.set(e.id, { callback: t, subscription: e });
        }),
        (c.prototype.removeSubscription = function (e, t) {
          if (this.subscriptions.has(e)) {
            var r = this.subscriptions.get(e).subscription.options.type;
            return (
              this.subscriptions.delete(e),
              void this.send({ method: r + "_unsubscribe", params: [e] }, t)
            );
          }
          "function" === typeof t && t(null);
        }),
        (c.prototype.clearSubscriptions = function (e) {
          try {
            var t = this;
            return (
              this.subscriptions.size > 0 &&
                this.subscriptions.forEach(function (r, n) {
                  (e && "syncing" === r.name) || t.removeSubscription(n);
                }),
              this.provider.reset && this.provider.reset(),
              !0
            );
          } catch (r) {
            throw new Error("Error while clearing subscriptions: " + r);
          }
        }),
        (c.prototype._isCleanCloseEvent = function (e) {
          return (
            "object" === typeof e &&
            ([1e3].includes(e.code) || !0 === e.wasClean)
          );
        }),
        (c.prototype._isIpcCloseError = function (e) {
          return "boolean" === typeof e && e;
        }),
        (c.prototype._jsonrpcResultCallback = function (e, t) {
          return function (r, n) {
            return n && n.id && t.id !== n.id
              ? e(
                  new Error(
                    `Wrong response id ${n.id} (expected: ${t.id}) in ${JSON.stringify(t)}`,
                  ),
                )
              : r
                ? e(r)
                : n && n.error
                  ? e(o.ErrorResponse(n))
                  : a.isValidResponse(n)
                    ? void e(null, n.result)
                    : e(o.InvalidResponse(n));
          };
        }),
        (e.exports = { Manager: c, BatchManager: s }));
    },
    4110: function (e, t, r) {
      "use strict";
      var n = r(3527),
        o = r(796).errors,
        a = function (e) {
          ((this.requestManager = e), (this.requests = []));
        };
      ((a.prototype.add = function (e) {
        this.requests.push(e);
      }),
        (a.prototype.execute = function () {
          var e = this.requests;
          this.requestManager.sendBatch(e, function (t, r) {
            ((r = r || []),
              e
                .map(function (e, t) {
                  return r[t] || {};
                })
                .forEach(function (r, a) {
                  if (e[a].callback) {
                    if (r && r.error) return e[a].callback(o.ErrorResponse(r));
                    if (!n.isValidResponse(r))
                      return e[a].callback(o.InvalidResponse(r));
                    try {
                      e[a].callback(
                        null,
                        e[a].format ? e[a].format(r.result) : r.result,
                      );
                    } catch (t) {
                      e[a].callback(t);
                    }
                  }
                }));
          });
        }),
        (e.exports = a));
    },
    4111: function (e, t, r) {
      "use strict";
      var n,
        o = null;
      try {
        n = Function("return this")();
      } catch (a) {
        n = window;
      }
      ("undefined" !== typeof n.ethereum
        ? (o = n.ethereum)
        : "undefined" !== typeof n.web3 &&
          n.web3.currentProvider &&
          (n.web3.currentProvider.sendAsync &&
            ((n.web3.currentProvider.send = n.web3.currentProvider.sendAsync),
            delete n.web3.currentProvider.sendAsync),
          !n.web3.currentProvider.on &&
            n.web3.currentProvider.connection &&
            "ipcProviderWrapper" ===
              n.web3.currentProvider.connection.constructor.name &&
            (n.web3.currentProvider.on = function (e, t) {
              if ("function" !== typeof t)
                throw new Error(
                  "The second parameter callback must be a function.",
                );
              switch (e) {
                case "data":
                  this.connection.on("data", function (e) {
                    var r = "";
                    e = e.toString();
                    try {
                      r = JSON.parse(e);
                    } catch (a) {
                      return t(new Error("Couldn't parse response data" + e));
                    }
                    r.id ||
                      -1 === r.method.indexOf("_subscription") ||
                      t(null, r);
                  });
                  break;
                default:
                  this.connection.on(e, t);
                  break;
              }
            }),
          (o = n.web3.currentProvider)),
        (e.exports = o));
    },
    4112: function (e, t, r) {
      "use strict";
      var n = r(3270),
        o = r(4113),
        a = r(796).errors,
        s = r(4114).w3cwebsocket,
        i = function (e, t) {
          (n.call(this),
            (t = t || {}),
            (this.url = e),
            (this._customTimeout = t.timeout || 15e3),
            (this.headers = t.headers || {}),
            (this.protocol = t.protocol || void 0),
            (this.reconnectOptions = Object.assign(
              { auto: !1, delay: 5e3, maxAttempts: !1, onTimeout: !1 },
              t.reconnect,
            )),
            (this.clientConfig = t.clientConfig || void 0),
            (this.requestOptions = t.requestOptions || void 0),
            (this.DATA = "data"),
            (this.CLOSE = "close"),
            (this.ERROR = "error"),
            (this.CONNECT = "connect"),
            (this.RECONNECT = "reconnect"),
            (this.connection = null),
            (this.requestQueue = new Map()),
            (this.responseQueue = new Map()),
            (this.reconnectAttempts = 0),
            (this.reconnecting = !1));
          var r = o.parseURL(e);
          (r.username &&
            r.password &&
            (this.headers.authorization =
              "Basic " + o.btoa(r.username + ":" + r.password)),
            r.auth && (this.headers.authorization = "Basic " + o.btoa(r.auth)),
            Object.defineProperty(this, "connected", {
              get: function () {
                return (
                  this.connection &&
                  this.connection.readyState === this.connection.OPEN
                );
              },
              enumerable: !0,
            }),
            this.connect());
        };
      ((i.prototype = Object.create(n.prototype)),
        (i.prototype.constructor = i),
        (i.prototype.connect = function () {
          ((this.connection = new s(
            this.url,
            this.protocol,
            void 0,
            this.headers,
            this.requestOptions,
            this.clientConfig,
          )),
            this._addSocketListeners());
        }),
        (i.prototype._onMessage = function (e) {
          var t = this;
          this._parseResponse("string" === typeof e.data ? e.data : "").forEach(
            function (e) {
              if (e.method && -1 !== e.method.indexOf("_subscription"))
                t.emit(t.DATA, e);
              else {
                var r = e.id;
                (Array.isArray(e) && (r = e[0].id),
                  t.responseQueue.has(r) &&
                    (void 0 !== t.responseQueue.get(r).callback &&
                      t.responseQueue.get(r).callback(!1, e),
                    t.responseQueue.delete(r)));
              }
            },
          );
        }),
        (i.prototype._onConnect = function () {
          if (
            (this.emit(this.CONNECT),
            (this.reconnectAttempts = 0),
            (this.reconnecting = !1),
            this.requestQueue.size > 0)
          ) {
            var e = this;
            this.requestQueue.forEach(function (t, r) {
              (e.send(t.payload, t.callback), e.requestQueue.delete(r));
            });
          }
        }),
        (i.prototype._onClose = function (e) {
          var t = this;
          !this.reconnectOptions.auto ||
          ([1e3, 1001].includes(e.code) && !1 !== e.wasClean)
            ? (this.emit(this.CLOSE, e),
              this.requestQueue.size > 0 &&
                this.requestQueue.forEach(function (r, n) {
                  (r.callback(a.ConnectionNotOpenError(e)),
                    t.requestQueue.delete(n));
                }),
              this.responseQueue.size > 0 &&
                this.responseQueue.forEach(function (r, n) {
                  (r.callback(a.InvalidConnection("on WS", e)),
                    t.responseQueue.delete(n));
                }),
              this._removeSocketListeners(),
              this.removeAllListeners())
            : this.reconnect();
        }),
        (i.prototype._addSocketListeners = function () {
          (this.connection.addEventListener(
            "message",
            this._onMessage.bind(this),
          ),
            this.connection.addEventListener(
              "open",
              this._onConnect.bind(this),
            ),
            this.connection.addEventListener(
              "close",
              this._onClose.bind(this),
            ));
        }),
        (i.prototype._removeSocketListeners = function () {
          (this.connection.removeEventListener("message", this._onMessage),
            this.connection.removeEventListener("open", this._onConnect),
            this.connection.removeEventListener("close", this._onClose));
        }),
        (i.prototype._parseResponse = function (e) {
          var t = this,
            r = [],
            n = e
              .replace(/\}[\n\r]?\{/g, "}|--|{")
              .replace(/\}\][\n\r]?\[\{/g, "}]|--|[{")
              .replace(/\}[\n\r]?\[\{/g, "}|--|[{")
              .replace(/\}\][\n\r]?\{/g, "}]|--|{")
              .split("|--|");
          return (
            n.forEach(function (e) {
              t.lastChunk && (e = t.lastChunk + e);
              var n = null;
              try {
                n = JSON.parse(e);
              } catch (o) {
                return (
                  (t.lastChunk = e),
                  clearTimeout(t.lastChunkTimeout),
                  void (t.lastChunkTimeout = setTimeout(function () {
                    t.reconnectOptions.auto && t.reconnectOptions.onTimeout
                      ? t.reconnect()
                      : (t.emit(t.ERROR, a.ConnectionTimeout(t._customTimeout)),
                        t.requestQueue.size > 0 &&
                          t.requestQueue.forEach(function (e, r) {
                            (e.callback(a.ConnectionTimeout(t._customTimeout)),
                              t.requestQueue.delete(r));
                          }));
                  }, t._customTimeout))
                );
              }
              (clearTimeout(t.lastChunkTimeout),
                (t.lastChunk = null),
                n && r.push(n));
            }),
            r
          );
        }),
        (i.prototype.send = function (e, t) {
          var r = this,
            n = e.id,
            o = { payload: e, callback: t };
          if (
            (Array.isArray(e) && (n = e[0].id),
            this.connection.readyState === this.connection.CONNECTING ||
              this.reconnecting)
          )
            this.requestQueue.set(n, o);
          else {
            if (this.connection.readyState !== this.connection.OPEN)
              return (
                this.requestQueue.delete(n),
                this.emit(this.ERROR, a.ConnectionNotOpenError()),
                void o.callback(a.ConnectionNotOpenError())
              );
            (this.responseQueue.set(n, o), this.requestQueue.delete(n));
            try {
              this.connection.send(JSON.stringify(o.payload));
            } catch (s) {
              (o.callback(s), r.responseQueue.delete(n));
            }
          }
        }),
        (i.prototype.reset = function () {
          (this.responseQueue.clear(),
            this.requestQueue.clear(),
            this.removeAllListeners(),
            this._removeSocketListeners(),
            this._addSocketListeners());
        }),
        (i.prototype.disconnect = function (e, t) {
          (this._removeSocketListeners(), this.connection.close(e || 1e3, t));
        }),
        (i.prototype.supportsSubscriptions = function () {
          return !0;
        }),
        (i.prototype.reconnect = function () {
          var e = this;
          ((this.reconnecting = !0),
            this.responseQueue.size > 0 &&
              this.responseQueue.forEach(function (t, r) {
                (t.callback(a.PendingRequestsOnReconnectingError()),
                  e.responseQueue.delete(r));
              }),
            !this.reconnectOptions.maxAttempts ||
            this.reconnectAttempts < this.reconnectOptions.maxAttempts
              ? setTimeout(function () {
                  (e.reconnectAttempts++,
                    e._removeSocketListeners(),
                    e.emit(e.RECONNECT, e.reconnectAttempts),
                    e.connect());
                }, this.reconnectOptions.delay)
              : (this.emit(
                  this.ERROR,
                  a.MaxAttemptsReachedOnReconnectingError(),
                ),
                (this.reconnecting = !1),
                this.requestQueue.size > 0 &&
                  this.requestQueue.forEach(function (t, r) {
                    (t.callback(a.MaxAttemptsReachedOnReconnectingError()),
                      e.requestQueue.delete(r));
                  })));
        }),
        (e.exports = i));
    },
    4113: function (e, t, r) {
      (function (t, n) {
        var o =
            "[object process]" ===
            Object.prototype.toString.call("undefined" !== typeof t ? t : 0),
          a =
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product,
          s = null,
          i = null;
        if (o || a) {
          s = function (e) {
            return n.from(e).toString("base64");
          };
          var c = r(231);
          if (c.URL) {
            var u = c.URL;
            i = function (e) {
              return new u(e);
            };
          } else i = r(231).parse;
        } else
          ((s = btoa.bind(window)),
            (i = function (e) {
              return new URL(e);
            }));
        e.exports = { parseURL: i, btoa: s };
      }).call(this, r(18), r(2).Buffer);
    },
    4114: function (e, t, r) {
      var n;
      if ("object" === typeof globalThis) n = globalThis;
      else
        try {
          n = r(4115);
        } catch (i) {
        } finally {
          if ((n || "undefined" === typeof window || (n = window), !n))
            throw new Error("Could not determine global this");
        }
      var o = n.WebSocket || n.MozWebSocket,
        a = r(4116);
      function s(e, t) {
        var r;
        return ((r = t ? new o(e, t) : new o(e)), r);
      }
      (o &&
        ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
          Object.defineProperty(s, e, {
            get: function () {
              return o[e];
            },
          });
        }),
        (e.exports = { w3cwebsocket: o ? s : null, version: a }));
    },
    4116: function (e, t, r) {
      e.exports = r(4117).version;
    },
    4117: function (e) {
      e.exports = JSON.parse(
        '{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.35","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.63","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}',
      );
    },
    4118: function (e, t, r) {
      "use strict";
      var n = r(796).errors,
        o = r(4119),
        a = function (e, t) {
          var r = this;
          ((this.responseCallbacks = {}),
            (this.notificationCallbacks = []),
            (this.path = e),
            (this.connected = !1),
            (this.connection = t.connect({ path: this.path })),
            this.addDefaultEvents());
          var n = function (e) {
            var t = null;
            (Array.isArray(e)
              ? e.forEach(function (e) {
                  r.responseCallbacks[e.id] && (t = e.id);
                })
              : (t = e.id),
              t || -1 === e.method.indexOf("_subscription")
                ? r.responseCallbacks[t] &&
                  (r.responseCallbacks[t](null, e),
                  delete r.responseCallbacks[t])
                : r.notificationCallbacks.forEach(function (t) {
                    "function" === typeof t && t(e);
                  }));
          };
          "Socket" === t.constructor.name
            ? o(this.connection).done(n)
            : this.connection.on("data", function (e) {
                r._parseResponse(e.toString()).forEach(n);
              });
        };
      ((a.prototype.addDefaultEvents = function () {
        var e = this;
        (this.connection.on("connect", function () {
          e.connected = !0;
        }),
          this.connection.on("close", function () {
            e.connected = !1;
          }),
          this.connection.on("error", function () {
            e._timeout();
          }),
          this.connection.on("end", function () {
            e._timeout();
          }),
          this.connection.on("timeout", function () {
            e._timeout();
          }));
      }),
        (a.prototype._parseResponse = function (e) {
          var t = this,
            r = [],
            o = e
              .replace(/\}[\n\r]?\{/g, "}|--|{")
              .replace(/\}\][\n\r]?\[\{/g, "}]|--|[{")
              .replace(/\}[\n\r]?\[\{/g, "}|--|[{")
              .replace(/\}\][\n\r]?\{/g, "}]|--|{")
              .split("|--|");
          return (
            o.forEach(function (e) {
              t.lastChunk && (e = t.lastChunk + e);
              var o = null;
              try {
                o = JSON.parse(e);
              } catch (a) {
                return (
                  (t.lastChunk = e),
                  clearTimeout(t.lastChunkTimeout),
                  void (t.lastChunkTimeout = setTimeout(function () {
                    throw (t._timeout(), n.InvalidResponse(e));
                  }, 15e3))
                );
              }
              (clearTimeout(t.lastChunkTimeout),
                (t.lastChunk = null),
                o && r.push(o));
            }),
            r
          );
        }),
        (a.prototype._addResponseCallback = function (e, t) {
          var r = e.id || e[0].id,
            n = e.method || e[0].method;
          ((this.responseCallbacks[r] = t),
            (this.responseCallbacks[r].method = n));
        }),
        (a.prototype._timeout = function () {
          for (var e in this.responseCallbacks)
            this.responseCallbacks.hasOwnProperty(e) &&
              (this.responseCallbacks[e](n.InvalidConnection("on IPC")),
              delete this.responseCallbacks[e]);
        }),
        (a.prototype.reconnect = function () {
          this.connection.connect({ path: this.path });
        }),
        (a.prototype.send = function (e, t) {
          (this.connection.writable ||
            this.connection.connect({ path: this.path }),
            this.connection.write(JSON.stringify(e)),
            this._addResponseCallback(e, t));
        }),
        (a.prototype.on = function (e, t) {
          if ("function" !== typeof t)
            throw new Error(
              "The second parameter callback must be a function.",
            );
          switch (e) {
            case "data":
              this.notificationCallbacks.push(t);
              break;
            default:
              this.connection.on(e, t);
              break;
          }
        }),
        (a.prototype.once = function (e, t) {
          if ("function" !== typeof t)
            throw new Error(
              "The second parameter callback must be a function.",
            );
          this.connection.once(e, t);
        }),
        (a.prototype.removeListener = function (e, t) {
          var r = this;
          switch (e) {
            case "data":
              this.notificationCallbacks.forEach(function (e, n) {
                e === t && r.notificationCallbacks.splice(n, 1);
              });
              break;
            default:
              this.connection.removeListener(e, t);
              break;
          }
        }),
        (a.prototype.removeAllListeners = function (e) {
          switch (e) {
            case "data":
              this.notificationCallbacks = [];
              break;
            default:
              this.connection.removeAllListeners(e);
              break;
          }
        }),
        (a.prototype.reset = function () {
          (this._timeout(),
            (this.notificationCallbacks = []),
            this.connection.removeAllListeners("error"),
            this.connection.removeAllListeners("end"),
            this.connection.removeAllListeners("timeout"),
            this.addDefaultEvents());
        }),
        (a.prototype.supportsSubscriptions = function () {
          return !0;
        }),
        (e.exports = a));
    },
    4120: function (e, t, r) {
      "use strict";
      var n = r(796).formatters,
        o = r(2948),
        a = r(376),
        s = function (e) {
          var t = function (t) {
            var r;
            return (
              t.property
                ? (e[t.property] || (e[t.property] = {}), (r = e[t.property]))
                : (r = e),
              t.methods &&
                t.methods.forEach(function (t) {
                  (t instanceof o || (t = new o(t)),
                    t.attachToObject(r),
                    t.setRequestManager(e._requestManager));
                }),
              e
            );
          };
          return ((t.formatters = n), (t.utils = a), (t.Method = o), t);
        };
      e.exports = s;
    },
    4121: function (e, t, r) {
      "use strict";
      var n = r(796).errors,
        o = r(3270),
        a = r(796).formatters;
      function s(e) {
        return e;
      }
      function i(e) {
        (o.call(this),
          (this.id = null),
          (this.callback = s),
          (this.arguments = null),
          (this.lastBlock = null),
          (this.options = {
            subscription: e.subscription,
            type: e.type,
            requestManager: e.requestManager,
          }));
      }
      ((i.prototype = Object.create(o.prototype)),
        (i.prototype.constructor = i),
        (i.prototype._extractCallback = function (e) {
          if ("function" === typeof e[e.length - 1]) return e.pop();
        }),
        (i.prototype._validateArgs = function (e) {
          var t = this.options.subscription;
          if (
            (t || (t = {}), t.params || (t.params = 0), e.length !== t.params)
          )
            throw n.InvalidNumberOfParams(
              e.length,
              t.params,
              t.subscriptionName,
            );
        }),
        (i.prototype._formatInput = function (e) {
          var t = this.options.subscription;
          if (!t) return e;
          if (!t.inputFormatter) return e;
          var r = t.inputFormatter.map(function (t, r) {
            return t ? t(e[r]) : e[r];
          });
          return r;
        }),
        (i.prototype._formatOutput = function (e) {
          var t = this.options.subscription;
          return t && t.outputFormatter && e ? t.outputFormatter(e) : e;
        }),
        (i.prototype._toPayload = function (e) {
          var t = [];
          if (
            ((this.callback = this._extractCallback(e) || s),
            this.subscriptionMethod ||
              ((this.subscriptionMethod = e.shift()),
              this.options.subscription.subscriptionName &&
                (this.subscriptionMethod =
                  this.options.subscription.subscriptionName)),
            this.arguments ||
              ((this.arguments = this._formatInput(e)),
              this._validateArgs(this.arguments),
              (e = [])),
            t.push(this.subscriptionMethod),
            (t = t.concat(this.arguments)),
            e.length)
          )
            throw new Error(
              "Only a callback is allowed as parameter on an already instantiated subscription.",
            );
          return { method: this.options.type + "_subscribe", params: t };
        }),
        (i.prototype.unsubscribe = function (e) {
          (this.options.requestManager.removeSubscription(this.id, e),
            (this.id = null),
            (this.lastBlock = null),
            this.removeAllListeners());
        }),
        (i.prototype.subscribe = function () {
          var e = this,
            t = Array.prototype.slice.call(arguments),
            r = this._toPayload(t);
          if (!r) return this;
          if (!this.options.requestManager.provider)
            return (
              setTimeout(function () {
                var t = new Error("No provider set.");
                (e.callback(t, null, e), e.emit("error", t));
              }, 0),
              this
            );
          if (!this.options.requestManager.provider.on)
            return (
              setTimeout(function () {
                var t = new Error(
                  "The current provider doesn't support subscriptions: " +
                    e.options.requestManager.provider.constructor.name,
                );
                (e.callback(t, null, e), e.emit("error", t));
              }, 0),
              this
            );
          if (
            (this.lastBlock &&
              this.options.params &&
              "object" === typeof this.options.params &&
              ((r.params[1] = this.options.params),
              (r.params[1].fromBlock = a.inputBlockNumberFormatter(
                this.lastBlock + 1,
              ))),
            this.id && this.unsubscribe(),
            (this.options.params = r.params[1]),
            "logs" === r.params[0] &&
              r.params[1] &&
              "object" === typeof r.params[1] &&
              r.params[1].hasOwnProperty("fromBlock") &&
              isFinite(r.params[1].fromBlock))
          ) {
            var n = Object.assign({}, r.params[1]);
            this.options.requestManager.send(
              { method: "eth_getLogs", params: [n] },
              function (t, r) {
                t
                  ? setTimeout(function () {
                      (e.callback(t, null, e), e.emit("error", t));
                    }, 0)
                  : r.forEach(function (t) {
                      var r = e._formatOutput(t);
                      (e.callback(null, r, e), e.emit("data", r));
                    });
              },
            );
          }
          return (
            "object" === typeof r.params[1] && delete r.params[1].fromBlock,
            this.options.requestManager.send(r, function (t, n) {
              !t && n
                ? ((e.id = n),
                  (e.method = r.params[0]),
                  e.emit("connected", n),
                  e.options.requestManager.addSubscription(e, function (t, r) {
                    t
                      ? (e.callback(t, !1, e), e.emit("error", t))
                      : (Array.isArray(r) || (r = [r]),
                        r.forEach(function (t) {
                          var r = e._formatOutput(t);
                          if (
                            ((e.lastBlock =
                              r && "object" === typeof r
                                ? r.blockNumber
                                : null),
                            "function" ===
                              typeof e.options.subscription.subscriptionHandler)
                          )
                            return e.options.subscription.subscriptionHandler.call(
                              e,
                              r,
                            );
                          (e.emit("data", r), e.callback(null, r, e));
                        }));
                  }))
                : setTimeout(function () {
                    (e.callback(t, !1, e), e.emit("error", t));
                  }, 0);
            }),
            this
          );
        }),
        (i.prototype.resubscribe = function () {
          (this.options.requestManager.removeSubscription(this.id),
            (this.id = null),
            this.subscribe(this.callback));
        }),
        (e.exports = i));
    },
    4122: function (e, t, r) {
      "use strict";
      var n = r(2947),
        o = r(796),
        a = r(3141).subscriptions,
        s = r(2948),
        i = r(376),
        c = r(3142),
        u = r(4123),
        l = r(3539),
        p = r(3529),
        d = r(845),
        h = r(4170),
        m = r(3530),
        f = r(4238),
        y = o.formatters,
        g = function (e) {
          return "string" === typeof e[0] && 0 === e[0].indexOf("0x")
            ? "eth_getBlockByHash"
            : "eth_getBlockByNumber";
        },
        b = function (e) {
          return "string" === typeof e[0] && 0 === e[0].indexOf("0x")
            ? "eth_getTransactionByBlockHashAndIndex"
            : "eth_getTransactionByBlockNumberAndIndex";
        },
        v = function (e) {
          return "string" === typeof e[0] && 0 === e[0].indexOf("0x")
            ? "eth_getUncleByBlockHashAndIndex"
            : "eth_getUncleByBlockNumberAndIndex";
        },
        w = function (e) {
          return "string" === typeof e[0] && 0 === e[0].indexOf("0x")
            ? "eth_getBlockTransactionCountByHash"
            : "eth_getBlockTransactionCountByNumber";
        },
        _ = function (e) {
          return "string" === typeof e[0] && 0 === e[0].indexOf("0x")
            ? "eth_getUncleCountByBlockHash"
            : "eth_getUncleCountByBlockNumber";
        },
        k = function () {
          var e = this;
          n.packageInit(this, arguments);
          var t = this.setRequestManager;
          this.setRequestManager = function (r) {
            return (
              t(r),
              e.net.setRequestManager(r),
              e.personal.setRequestManager(r),
              e.accounts.setRequestManager(r),
              (e.Contract._requestManager = e._requestManager),
              (e.Contract.currentProvider = e._provider),
              !0
            );
          };
          var r = this.setProvider;
          this.setProvider = function () {
            (r.apply(e, arguments),
              e.setRequestManager(e._requestManager),
              (e.ens._detectedAddress = null),
              (e.ens._lastSyncCheck = null));
          };
          var o,
            k,
            C,
            E = !1,
            x = null,
            F = "latest",
            A = 50,
            P = 24,
            T = 750,
            O = 100;
          (Object.defineProperty(this, "handleRevert", {
            get: function () {
              return E;
            },
            set: function (t) {
              ((E = t),
                (e.Contract.handleRevert = E),
                B.forEach(function (e) {
                  e.handleRevert = E;
                }));
            },
            enumerable: !0,
          }),
            Object.defineProperty(this, "defaultCommon", {
              get: function () {
                return C;
              },
              set: function (t) {
                ((C = t),
                  (e.Contract.defaultCommon = C),
                  B.forEach(function (e) {
                    e.defaultCommon = C;
                  }));
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultHardfork", {
              get: function () {
                return k;
              },
              set: function (t) {
                ((k = t),
                  (e.Contract.defaultHardfork = k),
                  B.forEach(function (e) {
                    e.defaultHardfork = k;
                  }));
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultChain", {
              get: function () {
                return o;
              },
              set: function (t) {
                ((o = t),
                  (e.Contract.defaultChain = o),
                  B.forEach(function (e) {
                    e.defaultChain = o;
                  }));
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "transactionPollingTimeout", {
              get: function () {
                return T;
              },
              set: function (t) {
                ((T = t),
                  (e.Contract.transactionPollingTimeout = T),
                  B.forEach(function (e) {
                    e.transactionPollingTimeout = T;
                  }));
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "transactionConfirmationBlocks", {
              get: function () {
                return P;
              },
              set: function (t) {
                ((P = t),
                  (e.Contract.transactionConfirmationBlocks = P),
                  B.forEach(function (e) {
                    e.transactionConfirmationBlocks = P;
                  }));
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "transactionBlockTimeout", {
              get: function () {
                return A;
              },
              set: function (t) {
                ((A = t),
                  (e.Contract.transactionBlockTimeout = A),
                  B.forEach(function (e) {
                    e.transactionBlockTimeout = A;
                  }));
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultAccount", {
              get: function () {
                return x;
              },
              set: function (t) {
                return (
                  t && (x = i.toChecksumAddress(y.inputAddressFormatter(t))),
                  (e.Contract.defaultAccount = x),
                  (e.personal.defaultAccount = x),
                  B.forEach(function (e) {
                    e.defaultAccount = x;
                  }),
                  t
                );
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "defaultBlock", {
              get: function () {
                return F;
              },
              set: function (t) {
                return (
                  (F = t),
                  (e.Contract.defaultBlock = F),
                  (e.personal.defaultBlock = F),
                  B.forEach(function (e) {
                    e.defaultBlock = F;
                  }),
                  t
                );
              },
              enumerable: !0,
            }),
            Object.defineProperty(this, "maxListenersWarningThreshold", {
              get: function () {
                return O;
              },
              set: function (t) {
                e.currentProvider &&
                  e.currentProvider.setMaxListeners &&
                  ((O = t), e.currentProvider.setMaxListeners(t));
              },
              enumerable: !0,
            }),
            (this.clearSubscriptions =
              e._requestManager.clearSubscriptions.bind(e._requestManager)),
            (this.removeSubscriptionById =
              e._requestManager.removeSubscription.bind(e._requestManager)),
            (this.net = new c(this)),
            (this.net.getNetworkType = f.bind(this)),
            (this.accounts = new h(this)),
            (this.personal = new l(this)),
            (this.personal.defaultAccount = this.defaultAccount),
            (this.maxListenersWarningThreshold = O));
          var S = this,
            M = function () {
              p.apply(this, arguments);
              var e = this,
                t = S.setProvider;
              S.setProvider = function () {
                (t.apply(S, arguments), n.packageInit(e, [S]));
              };
            };
          ((M.setProvider = function () {
            p.setProvider.apply(this, arguments);
          }),
            (M.prototype = Object.create(p.prototype)),
            (M.prototype.constructor = M),
            (this.Contract = M),
            (this.Contract.defaultAccount = this.defaultAccount),
            (this.Contract.defaultBlock = this.defaultBlock),
            (this.Contract.transactionBlockTimeout =
              this.transactionBlockTimeout),
            (this.Contract.transactionConfirmationBlocks =
              this.transactionConfirmationBlocks),
            (this.Contract.transactionPollingTimeout =
              this.transactionPollingTimeout),
            (this.Contract.handleRevert = this.handleRevert),
            (this.Contract._requestManager = this._requestManager),
            (this.Contract._ethAccounts = this.accounts),
            (this.Contract.currentProvider = this._requestManager.provider),
            (this.Iban = d),
            (this.abi = m),
            (this.ens = new u(this)));
          var B = [
            new s({ name: "getNodeInfo", call: "web3_clientVersion" }),
            new s({
              name: "getProtocolVersion",
              call: "eth_protocolVersion",
              params: 0,
            }),
            new s({ name: "getCoinbase", call: "eth_coinbase", params: 0 }),
            new s({ name: "isMining", call: "eth_mining", params: 0 }),
            new s({
              name: "getHashrate",
              call: "eth_hashrate",
              params: 0,
              outputFormatter: i.hexToNumber,
            }),
            new s({
              name: "isSyncing",
              call: "eth_syncing",
              params: 0,
              outputFormatter: y.outputSyncingFormatter,
            }),
            new s({
              name: "getGasPrice",
              call: "eth_gasPrice",
              params: 0,
              outputFormatter: y.outputBigNumberFormatter,
            }),
            new s({
              name: "getFeeHistory",
              call: "eth_feeHistory",
              params: 3,
              inputFormatter: [i.toNumber, y.inputBlockNumberFormatter, null],
            }),
            new s({
              name: "getAccounts",
              call: "eth_accounts",
              params: 0,
              outputFormatter: i.toChecksumAddress,
            }),
            new s({
              name: "getBlockNumber",
              call: "eth_blockNumber",
              params: 0,
              outputFormatter: i.hexToNumber,
            }),
            new s({
              name: "getBalance",
              call: "eth_getBalance",
              params: 2,
              inputFormatter: [
                y.inputAddressFormatter,
                y.inputDefaultBlockNumberFormatter,
              ],
              outputFormatter: y.outputBigNumberFormatter,
            }),
            new s({
              name: "getStorageAt",
              call: "eth_getStorageAt",
              params: 3,
              inputFormatter: [
                y.inputAddressFormatter,
                i.numberToHex,
                y.inputDefaultBlockNumberFormatter,
              ],
            }),
            new s({
              name: "getCode",
              call: "eth_getCode",
              params: 2,
              inputFormatter: [
                y.inputAddressFormatter,
                y.inputDefaultBlockNumberFormatter,
              ],
            }),
            new s({
              name: "getBlock",
              call: g,
              params: 2,
              inputFormatter: [
                y.inputBlockNumberFormatter,
                function (e) {
                  return !!e;
                },
              ],
              outputFormatter: y.outputBlockFormatter,
            }),
            new s({
              name: "getUncle",
              call: v,
              params: 2,
              inputFormatter: [y.inputBlockNumberFormatter, i.numberToHex],
              outputFormatter: y.outputBlockFormatter,
            }),
            new s({
              name: "getBlockTransactionCount",
              call: w,
              params: 1,
              inputFormatter: [y.inputBlockNumberFormatter],
              outputFormatter: i.hexToNumber,
            }),
            new s({
              name: "getBlockUncleCount",
              call: _,
              params: 1,
              inputFormatter: [y.inputBlockNumberFormatter],
              outputFormatter: i.hexToNumber,
            }),
            new s({
              name: "getTransaction",
              call: "eth_getTransactionByHash",
              params: 1,
              inputFormatter: [null],
              outputFormatter: y.outputTransactionFormatter,
            }),
            new s({
              name: "getTransactionFromBlock",
              call: b,
              params: 2,
              inputFormatter: [y.inputBlockNumberFormatter, i.numberToHex],
              outputFormatter: y.outputTransactionFormatter,
            }),
            new s({
              name: "getTransactionReceipt",
              call: "eth_getTransactionReceipt",
              params: 1,
              inputFormatter: [null],
              outputFormatter: y.outputTransactionReceiptFormatter,
            }),
            new s({
              name: "getTransactionCount",
              call: "eth_getTransactionCount",
              params: 2,
              inputFormatter: [
                y.inputAddressFormatter,
                y.inputDefaultBlockNumberFormatter,
              ],
              outputFormatter: i.hexToNumber,
            }),
            new s({
              name: "sendSignedTransaction",
              call: "eth_sendRawTransaction",
              params: 1,
              inputFormatter: [null],
              abiCoder: m,
            }),
            new s({
              name: "signTransaction",
              call: "eth_signTransaction",
              params: 1,
              inputFormatter: [y.inputTransactionFormatter],
            }),
            new s({
              name: "sendTransaction",
              call: "eth_sendTransaction",
              params: 1,
              inputFormatter: [y.inputTransactionFormatter],
              abiCoder: m,
            }),
            new s({
              name: "sign",
              call: "eth_sign",
              params: 2,
              inputFormatter: [y.inputSignFormatter, y.inputAddressFormatter],
              transformPayload: function (e) {
                return (e.params.reverse(), e);
              },
            }),
            new s({
              name: "call",
              call: "eth_call",
              params: 2,
              inputFormatter: [
                y.inputCallFormatter,
                y.inputDefaultBlockNumberFormatter,
              ],
              abiCoder: m,
            }),
            new s({
              name: "estimateGas",
              call: "eth_estimateGas",
              params: 1,
              inputFormatter: [y.inputCallFormatter],
              outputFormatter: i.hexToNumber,
            }),
            new s({ name: "submitWork", call: "eth_submitWork", params: 3 }),
            new s({ name: "getWork", call: "eth_getWork", params: 0 }),
            new s({
              name: "getPastLogs",
              call: "eth_getLogs",
              params: 1,
              inputFormatter: [y.inputLogFormatter],
              outputFormatter: y.outputLogFormatter,
            }),
            new s({
              name: "getChainId",
              call: "eth_chainId",
              params: 0,
              outputFormatter: i.hexToNumber,
            }),
            new s({
              name: "requestAccounts",
              call: "eth_requestAccounts",
              params: 0,
              outputFormatter: i.toChecksumAddress,
            }),
            new s({
              name: "getProof",
              call: "eth_getProof",
              params: 3,
              inputFormatter: [
                y.inputAddressFormatter,
                y.inputStorageKeysFormatter,
                y.inputDefaultBlockNumberFormatter,
              ],
              outputFormatter: y.outputProofFormatter,
            }),
            new s({
              name: "getPendingTransactions",
              call: "eth_pendingTransactions",
              params: 0,
              outputFormatter: y.outputTransactionFormatter,
            }),
            new a({
              name: "subscribe",
              type: "eth",
              subscriptions: {
                newBlockHeaders: {
                  subscriptionName: "newHeads",
                  params: 0,
                  outputFormatter: y.outputBlockFormatter,
                },
                pendingTransactions: {
                  subscriptionName: "newPendingTransactions",
                  params: 0,
                },
                logs: {
                  params: 1,
                  inputFormatter: [y.inputLogFormatter],
                  outputFormatter: y.outputLogFormatter,
                  subscriptionHandler: function (e) {
                    (e.removed ? this.emit("changed", e) : this.emit("data", e),
                      "function" === typeof this.callback &&
                        this.callback(null, e, this));
                  },
                },
                syncing: {
                  params: 0,
                  outputFormatter: y.outputSyncingFormatter,
                  subscriptionHandler: function (e) {
                    var t = this;
                    !0 !== this._isSyncing
                      ? ((this._isSyncing = !0),
                        this.emit("changed", t._isSyncing),
                        "function" === typeof this.callback &&
                          this.callback(null, t._isSyncing, this),
                        setTimeout(function () {
                          (t.emit("data", e),
                            "function" === typeof t.callback &&
                              t.callback(null, e, t));
                        }, 0))
                      : (this.emit("data", e),
                        "function" === typeof t.callback &&
                          this.callback(null, e, this),
                        clearTimeout(this._isSyncingTimeout),
                        (this._isSyncingTimeout = setTimeout(function () {
                          e.currentBlock > e.highestBlock - 200 &&
                            ((t._isSyncing = !1),
                            t.emit("changed", t._isSyncing),
                            "function" === typeof t.callback &&
                              t.callback(null, t._isSyncing, t));
                        }, 500)));
                  },
                },
              },
            }),
          ];
          B.forEach(function (t) {
            (t.attachToObject(e),
              t.setRequestManager(e._requestManager, e.accounts),
              (t.defaultBlock = e.defaultBlock),
              (t.defaultAccount = e.defaultAccount),
              (t.transactionBlockTimeout = e.transactionBlockTimeout),
              (t.transactionConfirmationBlocks =
                e.transactionConfirmationBlocks),
              (t.transactionPollingTimeout = e.transactionPollingTimeout),
              (t.handleRevert = e.handleRevert));
          });
        };
      (n.addProviders(k), (e.exports = k));
    },
    4123: function (e, t, r) {
      "use strict";
      var n = r(4124);
      e.exports = n;
    },
    4124: function (e, t, r) {
      "use strict";
      var n = r(3528),
        o = r(796).formatters,
        a = r(376),
        s = r(4125),
        i = r(4140),
        c = r(4141);
      function u(e) {
        this.eth = e;
        var t = null;
        ((this._detectedAddress = null),
          (this._lastSyncCheck = null),
          Object.defineProperty(this, "registry", {
            get: function () {
              return new s(this);
            },
            enumerable: !0,
          }),
          Object.defineProperty(this, "resolverMethodHandler", {
            get: function () {
              return new i(this.registry);
            },
            enumerable: !0,
          }),
          Object.defineProperty(this, "registryAddress", {
            get: function () {
              return t;
            },
            set: function (e) {
              t = null !== e ? o.inputAddressFormatter(e) : e;
            },
            enumerable: !0,
          }));
      }
      ((u.prototype.supportsInterface = function (e, t, r) {
        return this.getResolver(e)
          .then(function (e) {
            return (
              a.isHexStrict(t) || (t = a.sha3(t).slice(0, 10)),
              e.methods.supportsInterface(t).call(r)
            );
          })
          .catch(function (e) {
            if ("function" !== typeof r) throw e;
            r(e, null);
          });
      }),
        (u.prototype.resolver = function (e, t) {
          return this.registry.resolver(e, t);
        }),
        (u.prototype.getResolver = function (e, t) {
          return this.registry.getResolver(e, t);
        }),
        (u.prototype.setResolver = function (e, t, r, n) {
          return this.registry.setResolver(e, t, r, n);
        }),
        (u.prototype.setRecord = function (e, t, r, n, o, a) {
          return this.registry.setRecord(e, t, r, n, o, a);
        }),
        (u.prototype.setSubnodeRecord = function (e, t, r, n, o, a, s) {
          return this.registry.setSubnodeRecord(e, t, r, n, o, a, s);
        }),
        (u.prototype.setApprovalForAll = function (e, t, r, n) {
          return this.registry.setApprovalForAll(e, t, r, n);
        }),
        (u.prototype.isApprovedForAll = function (e, t, r) {
          return this.registry.isApprovedForAll(e, t, r);
        }),
        (u.prototype.recordExists = function (e, t) {
          return this.registry.recordExists(e, t);
        }),
        (u.prototype.setSubnodeOwner = function (e, t, r, n, o) {
          return this.registry.setSubnodeOwner(e, t, r, n, o);
        }),
        (u.prototype.getTTL = function (e, t) {
          return this.registry.getTTL(e, t);
        }),
        (u.prototype.setTTL = function (e, t, r, n) {
          return this.registry.setTTL(e, t, r, n);
        }),
        (u.prototype.getOwner = function (e, t) {
          return this.registry.getOwner(e, t);
        }),
        (u.prototype.setOwner = function (e, t, r, n) {
          return this.registry.setOwner(e, t, r, n);
        }),
        (u.prototype.getAddress = function (e, t) {
          return this.resolverMethodHandler.method(e, "addr", []).call(t);
        }),
        (u.prototype.setAddress = function (e, t, r, n) {
          return this.resolverMethodHandler
            .method(e, "setAddr", [t])
            .send(r, n);
        }),
        (u.prototype.getPubkey = function (e, t) {
          return this.resolverMethodHandler
            .method(e, "pubkey", [], null, t)
            .call(t);
        }),
        (u.prototype.setPubkey = function (e, t, r, n, o) {
          return this.resolverMethodHandler
            .method(e, "setPubkey", [t, r])
            .send(n, o);
        }),
        (u.prototype.getContent = function (e, t) {
          return this.resolverMethodHandler.method(e, "content", []).call(t);
        }),
        (u.prototype.setContent = function (e, t, r, n) {
          return this.resolverMethodHandler
            .method(e, "setContent", [t])
            .send(r, n);
        }),
        (u.prototype.getContenthash = function (e, t) {
          return this.resolverMethodHandler
            .method(e, "contenthash", [], c.decode)
            .call(t);
        }),
        (u.prototype.setContenthash = function (e, t, r, n) {
          var o;
          try {
            o = c.encode(t);
          } catch (s) {
            var a = new Error(
              "Could not encode " +
                t +
                ". See docs for supported hash protocols.",
            );
            if ("function" === typeof n) return void n(a, null);
            throw a;
          }
          return this.resolverMethodHandler
            .method(e, "setContenthash", [o])
            .send(r, n);
        }),
        (u.prototype.getMultihash = function (e, t) {
          return this.resolverMethodHandler.method(e, "multihash", []).call(t);
        }),
        (u.prototype.setMultihash = function (e, t, r, n) {
          return this.resolverMethodHandler
            .method(e, "multihash", [t])
            .send(r, n);
        }),
        (u.prototype.checkNetwork = async function () {
          var e = new Date() / 1e3;
          if (!this._lastSyncCheck || e - this._lastSyncCheck > 3600) {
            var t = await this.eth.getBlock("latest"),
              r = e - t.timestamp;
            if (r > 3600)
              throw new Error(
                "Network not synced; last block was " + r + " seconds ago",
              );
            this._lastSyncCheck = e;
          }
          if (this.registryAddress) return this.registryAddress;
          if (!this._detectedAddress) {
            var o = await this.eth.net.getNetworkType(),
              a = n.addresses[o];
            if ("undefined" === typeof a)
              throw new Error("ENS is not supported on network " + o);
            return ((this._detectedAddress = a), this._detectedAddress);
          }
          return this._detectedAddress;
        }),
        (e.exports = u));
    },
    4125: function (e, t, r) {
      "use strict";
      var n = r(3529),
        o = r(3535),
        a = r(3140),
        s = r(796).formatters,
        i = r(376),
        c = r(4138),
        u = r(4139);
      function l(e) {
        var t = this;
        ((this.ens = e),
          (this.contract = e.checkNetwork().then(function (e) {
            var r = new n(c, e);
            return (r.setProvider(t.ens.eth.currentProvider), r);
          })));
      }
      ((l.prototype.owner = function (e, t) {
        return (
          console.warn(
            'Deprecated: Please use the "getOwner" method instead of "owner".',
          ),
          this.getOwner(e, t)
        );
      }),
        (l.prototype.getOwner = function (e, t) {
          var r = new a(!0);
          return (
            this.contract
              .then(function (t) {
                return t.methods.owner(o.hash(e)).call();
              })
              .then(function (e) {
                "function" !== typeof t ? r.resolve(e) : t(e, e);
              })
              .catch(function (e) {
                "function" !== typeof t ? r.reject(e) : t(e, null);
              }),
            r.eventEmitter
          );
        }),
        (l.prototype.setOwner = function (e, t, r, n) {
          var i = new a(!0);
          return (
            this.contract
              .then(function (n) {
                return n.methods
                  .setOwner(o.hash(e), s.inputAddressFormatter(t))
                  .send(r);
              })
              .then(function (e) {
                "function" !== typeof n ? i.resolve(e) : n(e, e);
              })
              .catch(function (e) {
                "function" !== typeof n ? i.reject(e) : n(e, null);
              }),
            i.eventEmitter
          );
        }),
        (l.prototype.getTTL = function (e, t) {
          var r = new a(!0);
          return (
            this.contract
              .then(function (t) {
                return t.methods.ttl(o.hash(e)).call();
              })
              .then(function (e) {
                "function" !== typeof t ? r.resolve(e) : t(e, e);
              })
              .catch(function (e) {
                "function" !== typeof t ? r.reject(e) : t(e, null);
              }),
            r.eventEmitter
          );
        }),
        (l.prototype.setTTL = function (e, t, r, n) {
          var s = new a(!0);
          return (
            this.contract
              .then(function (n) {
                return n.methods.setTTL(o.hash(e), t).send(r);
              })
              .then(function (e) {
                "function" !== typeof n ? s.resolve(e) : n(e, e);
              })
              .catch(function (e) {
                "function" !== typeof n ? s.reject(e) : n(e, null);
              }),
            s.eventEmitter
          );
        }),
        (l.prototype.setSubnodeOwner = function (e, t, r, n, c) {
          var u = new a(!0);
          return (
            i.isHexStrict(t) || (t = i.sha3(t)),
            this.contract
              .then(function (a) {
                return a.methods
                  .setSubnodeOwner(o.hash(e), t, s.inputAddressFormatter(r))
                  .send(n);
              })
              .then(function (e) {
                "function" !== typeof c ? u.resolve(e) : c(e, e);
              })
              .catch(function (e) {
                "function" !== typeof c ? u.reject(e) : c(e, null);
              }),
            u.eventEmitter
          );
        }),
        (l.prototype.setRecord = function (e, t, r, n, i, c) {
          var u = new a(!0);
          return (
            this.contract
              .then(function (a) {
                return a.methods
                  .setRecord(
                    o.hash(e),
                    s.inputAddressFormatter(t),
                    s.inputAddressFormatter(r),
                    n,
                  )
                  .send(i);
              })
              .then(function (e) {
                "function" !== typeof c ? u.resolve(e) : c(e, e);
              })
              .catch(function (e) {
                "function" !== typeof c ? u.reject(e) : c(e, null);
              }),
            u.eventEmitter
          );
        }),
        (l.prototype.setSubnodeRecord = function (e, t, r, n, c, u, l) {
          var p = new a(!0);
          return (
            i.isHexStrict(t) || (t = i.sha3(t)),
            this.contract
              .then(function (a) {
                return a.methods
                  .setSubnodeRecord(
                    o.hash(e),
                    t,
                    s.inputAddressFormatter(r),
                    s.inputAddressFormatter(n),
                    c,
                  )
                  .send(u);
              })
              .then(function (e) {
                "function" !== typeof l ? p.resolve(e) : l(e, e);
              })
              .catch(function (e) {
                "function" !== typeof l ? p.reject(e) : l(e, null);
              }),
            p.eventEmitter
          );
        }),
        (l.prototype.setApprovalForAll = function (e, t, r, n) {
          var o = new a(!0);
          return (
            this.contract
              .then(function (n) {
                return n.methods
                  .setApprovalForAll(s.inputAddressFormatter(e), t)
                  .send(r);
              })
              .then(function (e) {
                "function" !== typeof n ? o.resolve(e) : n(e, e);
              })
              .catch(function (e) {
                "function" !== typeof n ? o.reject(e) : n(e, null);
              }),
            o.eventEmitter
          );
        }),
        (l.prototype.isApprovedForAll = function (e, t, r) {
          var n = new a(!0);
          return (
            this.contract
              .then(function (r) {
                return r.methods
                  .isApprovedForAll(
                    s.inputAddressFormatter(e),
                    s.inputAddressFormatter(t),
                  )
                  .call();
              })
              .then(function (e) {
                "function" !== typeof r ? n.resolve(e) : r(e, e);
              })
              .catch(function (e) {
                "function" !== typeof r ? n.reject(e) : r(e, null);
              }),
            n.eventEmitter
          );
        }),
        (l.prototype.recordExists = function (e, t) {
          var r = new a(!0);
          return (
            this.contract
              .then(function (t) {
                return t.methods.recordExists(o.hash(e)).call();
              })
              .then(function (e) {
                "function" !== typeof t ? r.resolve(e) : t(e, e);
              })
              .catch(function (e) {
                "function" !== typeof t ? r.reject(e) : t(e, null);
              }),
            r.eventEmitter
          );
        }),
        (l.prototype.resolver = function (e, t) {
          return (
            console.warn(
              'Deprecated: Please use the "getResolver" method instead of "resolver".',
            ),
            this.getResolver(e, t)
          );
        }),
        (l.prototype.getResolver = function (e, t) {
          var r = this;
          return this.contract
            .then(function (t) {
              return t.methods.resolver(o.hash(e)).call();
            })
            .then(function (e) {
              var o = new n(u, e);
              if (
                (o.setProvider(r.ens.eth.currentProvider),
                "function" !== typeof t)
              )
                return o;
              t(o, o);
            })
            .catch(function (e) {
              if ("function" !== typeof t) throw e;
              t(e, null);
            });
        }),
        (l.prototype.setResolver = function (e, t, r, n) {
          var i = new a(!0);
          return (
            this.contract
              .then(function (n) {
                return n.methods
                  .setResolver(o.hash(e), s.inputAddressFormatter(t))
                  .send(r);
              })
              .then(function (e) {
                "function" !== typeof n ? i.resolve(e) : n(e, e);
              })
              .catch(function (e) {
                "function" !== typeof n ? i.reject(e) : n(e, null);
              }),
            i.eventEmitter
          );
        }),
        (e.exports = l));
    },
    4126: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressCoder = void 0));
      var n = r(2976),
        o = r(2776),
        a = r(2846);
      class AddressCoder extends a.Coder {
        constructor(e) {
          super("address", "address", e, !1);
        }
        encode(e, t) {
          try {
            (0, n.getAddress)(t);
          } catch (r) {
            this._throwError(r.message, t);
          }
          return e.writeValue(t);
        }
        decode(e) {
          return (0, n.getAddress)(
            (0, o.hexZeroPad)(e.readValue().toHexString(), 20),
          );
        }
      }
      t.AddressCoder = AddressCoder;
    },
    4127: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnonymousCoder = void 0));
      var n = r(2846);
      class AnonymousCoder extends n.Coder {
        constructor(e) {
          (super(e.name, e.type, void 0, e.dynamic), (this.coder = e));
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
    4128: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BooleanCoder = void 0));
      var n = r(2846);
      class BooleanCoder extends n.Coder {
        constructor(e) {
          super("bool", "bool", e, !1);
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
    4129: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FixedBytesCoder = void 0));
      var n = r(2776),
        o = r(2846);
      class FixedBytesCoder extends o.Coder {
        constructor(e, t) {
          let r = "bytes" + String(e);
          (super(r, r, t, !1), (this.size = e));
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
    4130: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NullCoder = void 0));
      var n = r(2846);
      class NullCoder extends n.Coder {
        constructor(e) {
          super("null", "", e, !1);
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
    4131: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NumberCoder = void 0));
      var n = r(2829),
        o = r(3272),
        a = r(2846);
      class NumberCoder extends a.Coder {
        constructor(e, t, r) {
          const n = (t ? "int" : "uint") + 8 * e;
          (super(n, n, r, !1), (this.size = e), (this.signed = t));
        }
        encode(e, t) {
          let r = n.BigNumber.from(t),
            a = o.MaxUint256.mask(8 * e.wordSize);
          if (this.signed) {
            let e = a.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(o.One).mul(o.NegativeOne))) &&
              this._throwError("value out-of-bounds", t);
          } else
            (r.lt(o.Zero) || r.gt(a.mask(8 * this.size))) &&
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
    4132: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StringCoder = void 0));
      var n = r(3016),
        o = r(3534);
      class StringCoder extends o.DynamicBytesCoder {
        constructor(e) {
          super("string", e);
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
    4133: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TupleCoder = void 0));
      var n = r(2846),
        o = r(3533);
      class TupleCoder extends n.Coder {
        constructor(e, t) {
          let r = !1;
          const n = [];
          e.forEach((e) => {
            (e.dynamic && (r = !0), n.push(e.type));
          });
          const o = "tuple(" + n.join(",") + ")";
          (super("tuple", o, t, r), (this.coders = e));
        }
        encode(e, t) {
          return (0, o.pack)(e, this.coders, t);
        }
        decode(e) {
          return e.coerce(this.name, (0, o.unpack)(e, this.coders));
        }
      }
      t.TupleCoder = TupleCoder;
    },
    4134: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionDescription =
          t.LogDescription =
          t.Interface =
          t.Indexed =
            void 0),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return l.checkResultErrors;
          },
        }));
      var n = r(2976),
        o = r(2829),
        a = r(2776),
        s = r(3274),
        i = r(3049),
        c = r(2808),
        u = r(3532),
        l = r(2846),
        p = r(3273),
        d = r(2773),
        h = r(3050);
      const m = new d.Logger(h.version);
      class LogDescription extends c.Description {}
      t.LogDescription = LogDescription;
      class TransactionDescription extends c.Description {}
      t.TransactionDescription = TransactionDescription;
      class Indexed extends c.Description {
        static isIndexed(e) {
          return !(!e || !e._isIndexed);
        }
      }
      function f(e, t) {
        const r = new Error(
          "deferred error during ABI decoding triggered accessing " + e,
        );
        return ((r.error = t), r);
      }
      t.Indexed = Indexed;
      class Interface {
        constructor(e) {
          m.checkNew(new.target, Interface);
          let t = [];
          ((t = "string" === typeof e ? JSON.parse(e) : e),
            (0, c.defineReadOnly)(
              this,
              "fragments",
              t.map((e) => p.Fragment.from(e)).filter((e) => null != e),
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
                    ? void m.warn("duplicate definition - constructor")
                    : void (0, c.defineReadOnly)(this, "deploy", e);
                case "function":
                  t = this.functions;
                  break;
                case "event":
                  t = this.events;
                  break;
                default:
                  return;
              }
              let r = e.format();
              t[r] ? m.warn("duplicate definition - " + r) : (t[r] = e);
            }),
            this.deploy ||
              (0, c.defineReadOnly)(
                this,
                "deploy",
                p.ConstructorFragment.from({
                  payable: !1,
                  type: "constructor",
                }),
              ),
            (0, c.defineReadOnly)(this, "_isInterface", !0));
        }
        format(e) {
          (e || (e = p.FormatTypes.full),
            e === p.FormatTypes.sighash &&
              m.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                e,
              ));
          const t = this.fragments.map((t) => t.format(e));
          return e === p.FormatTypes.json
            ? JSON.stringify(t.map((e) => JSON.parse(e)))
            : t;
        }
        static getAbiCoder() {
          return u.defaultAbiCoder;
        }
        static getAddress(e) {
          return (0, n.getAddress)(e);
        }
        static getSighash(e) {
          return (0, a.hexDataSlice)((0, s.id)(e.format()), 0, 4);
        }
        static getEventTopic(e) {
          return (0, s.id)(e.format());
        }
        getFunction(e) {
          if ((0, a.isHexString)(e)) {
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
          const t = this.functions[p.FunctionFragment.fromString(e).format()];
          return (
            t || m.throwArgumentError("no matching function", "signature", e),
            t
          );
        }
        getEvent(e) {
          if ((0, a.isHexString)(e)) {
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
          const t = this.events[p.EventFragment.fromString(e).format()];
          return (
            t || m.throwArgumentError("no matching event", "signature", e),
            t
          );
        }
        getSighash(e) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, c.getStatic)(this.constructor, "getSighash")(e)
          );
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
        decodeFunctionData(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          const r = (0, a.arrayify)(t);
          return (
            (0, a.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              m.throwArgumentError(
                `data signature does not match function ${e.name}.`,
                "data",
                (0, a.hexlify)(r),
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeFunctionData(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, a.hexlify)(
              (0, a.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ]),
            )
          );
        }
        decodeFunctionResult(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          let r = (0, a.arrayify)(t),
            n = null,
            o = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r);
              } catch (s) {}
              break;
            case 4:
              "0x08c379a0" === (0, a.hexlify)(r.slice(0, 4)) &&
                ((o = "Error(string)"),
                (n = this._abiCoder.decode(["string"], r.slice(4))[0]));
              break;
          }
          return m.throwError(
            "call revert exception",
            d.Logger.errors.CALL_EXCEPTION,
            {
              method: e.format(),
              errorSignature: o,
              errorArgs: [n],
              reason: n,
            },
          );
        }
        encodeFunctionResult(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, a.hexlify)(this._abiCoder.encode(e.outputs, t || []))
          );
        }
        encodeFilterTopics(e, t) {
          ("string" === typeof e && (e = this.getEvent(e)),
            t.length > e.inputs.length &&
              m.throwError(
                "too many arguments for " + e.format(),
                d.Logger.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: t },
              ));
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          const n = (e, t) =>
            "string" === e.type
              ? (0, s.id)(t)
              : "bytes" === e.type
                ? (0, i.keccak256)((0, a.hexlify)(t))
                : ("address" === e.type &&
                    this._abiCoder.encode(["address"], [t]),
                  (0, a.hexZeroPad)((0, a.hexlify)(t), 32));
          t.forEach((t, o) => {
            let a = e.inputs[o];
            a.indexed
              ? null == t
                ? r.push(null)
                : "array" === a.baseType || "tuple" === a.baseType
                  ? m.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + a.name,
                      t,
                    )
                  : Array.isArray(t)
                    ? r.push(t.map((e) => n(a, e)))
                    : r.push(n(a, t))
              : null != t &&
                m.throwArgumentError(
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + a.name,
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
            o = [];
          return (
            e.anonymous || r.push(this.getEventTopic(e)),
            t.length !== e.inputs.length &&
              m.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                t,
              ),
            e.inputs.forEach((e, a) => {
              const c = t[a];
              if (e.indexed)
                if ("string" === e.type) r.push((0, s.id)(c));
                else if ("bytes" === e.type) r.push((0, i.keccak256)(c));
                else {
                  if ("tuple" === e.baseType || "array" === e.baseType)
                    throw new Error("not implemented");
                  r.push(this._abiCoder.encode([e.type], [c]));
                }
              else (n.push(e), o.push(c));
            }),
            { data: this._abiCoder.encode(n, o), topics: r }
          );
        }
        decodeEventLog(e, t, r) {
          if (
            ("string" === typeof e && (e = this.getEvent(e)),
            null != r && !e.anonymous)
          ) {
            let t = this.getEventTopic(e);
            (((0, a.isHexString)(r[0], 32) && r[0].toLowerCase() === t) ||
              m.throwError(
                "fragment/topic mismatch",
                d.Logger.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: t, value: r[0] },
              ),
              (r = r.slice(1)));
          }
          let n = [],
            o = [],
            s = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (n.push(
                    p.ParamType.fromObject({ type: "bytes32", name: e.name }),
                  ),
                  s.push(!0))
                : (n.push(e), s.push(!1))
              : (o.push(e), s.push(!1));
          });
          let i = null != r ? this._abiCoder.decode(n, (0, a.concat)(r)) : null,
            c = this._abiCoder.decode(o, t, !0),
            u = [],
            l = 0,
            h = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed)
              if (null == i) u[t] = new Indexed({ _isIndexed: !0, hash: null });
              else if (s[t])
                u[t] = new Indexed({ _isIndexed: !0, hash: i[h++] });
              else
                try {
                  u[t] = i[h++];
                } catch (r) {
                  u[t] = r;
                }
            else
              try {
                u[t] = c[l++];
              } catch (r) {
                u[t] = r;
              }
            if (e.name && null == u[e.name]) {
              const r = u[t];
              r instanceof Error
                ? Object.defineProperty(u, e.name, {
                    get: () => {
                      throw f("property " + JSON.stringify(e.name), r);
                    },
                  })
                : (u[e.name] = r);
            }
          });
          for (let a = 0; a < u.length; a++) {
            const e = u[a];
            e instanceof Error &&
              Object.defineProperty(u, a, {
                get: () => {
                  throw f("index " + a, e);
                },
              });
          }
          return Object.freeze(u);
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
                value: o.BigNumber.from(e.value || "0"),
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
        static isInterface(e) {
          return !(!e || !e._isInterface);
        }
      }
      t.Interface = Interface;
    },
    4138: function (e, t, r) {
      "use strict";
      var n = [
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "resolver",
          outputs: [{ name: "", type: "address" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "owner",
          outputs: [{ name: "", type: "address" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "label", type: "bytes32" },
            { name: "owner", type: "address" },
          ],
          name: "setSubnodeOwner",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "ttl", type: "uint64" },
          ],
          name: "setTTL",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "ttl",
          outputs: [{ name: "", type: "uint64" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "resolver", type: "address" },
          ],
          name: "setResolver",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "owner", type: "address" },
          ],
          name: "setOwner",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "owner", type: "address" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !0, name: "label", type: "bytes32" },
            { indexed: !1, name: "owner", type: "address" },
          ],
          name: "NewOwner",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "resolver", type: "address" },
          ],
          name: "NewResolver",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "ttl", type: "uint64" },
          ],
          name: "NewTTL",
          type: "event",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "resolver", type: "address" },
            { internalType: "uint64", name: "ttl", type: "uint64" },
          ],
          name: "setRecord",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "recordExists",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes32", name: "label", type: "bytes32" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "resolver", type: "address" },
            { internalType: "uint64", name: "ttl", type: "uint64" },
          ],
          name: "setSubnodeRecord",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      e.exports = n;
    },
    4139: function (e, t, r) {
      "use strict";
      var n = [
        {
          constant: !0,
          inputs: [{ name: "interfaceID", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "contentTypes", type: "uint256" },
          ],
          name: "ABI",
          outputs: [
            { name: "contentType", type: "uint256" },
            { name: "data", type: "bytes" },
          ],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "hash", type: "bytes" },
          ],
          name: "setMultihash",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "multihash",
          outputs: [{ name: "", type: "bytes" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "x", type: "bytes32" },
            { name: "y", type: "bytes32" },
          ],
          name: "setPubkey",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "content",
          outputs: [{ name: "ret", type: "bytes32" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "addr",
          outputs: [{ name: "ret", type: "address" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "contentType", type: "uint256" },
            { name: "data", type: "bytes" },
          ],
          name: "setABI",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "name",
          outputs: [{ name: "ret", type: "string" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "name", type: "string" },
          ],
          name: "setName",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "hash", type: "bytes32" },
          ],
          name: "setContent",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "pubkey",
          outputs: [
            { name: "x", type: "bytes32" },
            { name: "y", type: "bytes32" },
          ],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "addr", type: "address" },
          ],
          name: "setAddr",
          outputs: [],
          payable: !1,
          type: "function",
        },
        {
          inputs: [{ name: "ensAddr", type: "address" }],
          payable: !1,
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "a", type: "address" },
          ],
          name: "AddrChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "hash", type: "bytes32" },
          ],
          name: "ContentChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "name", type: "string" },
          ],
          name: "NameChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !0, name: "contentType", type: "uint256" },
          ],
          name: "ABIChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "x", type: "bytes32" },
            { indexed: !1, name: "y", type: "bytes32" },
          ],
          name: "PubkeyChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "node", type: "bytes32" },
            { indexed: !1, name: "hash", type: "bytes" },
          ],
          name: "ContenthashChanged",
          type: "event",
        },
        {
          constant: !0,
          inputs: [{ name: "node", type: "bytes32" }],
          name: "contenthash",
          outputs: [{ name: "", type: "bytes" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "node", type: "bytes32" },
            { name: "hash", type: "bytes" },
          ],
          name: "setContenthash",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      e.exports = n;
    },
    4140: function (e, t, r) {
      "use strict";
      var n = r(3140),
        o = r(3535),
        a = r(796).errors,
        s = r(3528).interfaceIds;
      function i(e) {
        this.registry = e;
      }
      ((i.prototype.method = function (e, t, r, n, o) {
        return {
          call: this.call.bind({
            ensName: e,
            methodName: t,
            methodArguments: r,
            callback: o,
            parent: this,
            outputFormatter: n,
          }),
          send: this.send.bind({
            ensName: e,
            methodName: t,
            methodArguments: r,
            callback: o,
            parent: this,
          }),
        };
      }),
        (i.prototype.call = function (e) {
          var t = this,
            r = new n(),
            o = this.parent.prepareArguments(
              this.ensName,
              this.methodArguments,
            ),
            a = this.outputFormatter || null;
          return (
            this.parent.registry
              .getResolver(this.ensName)
              .then(async function (n) {
                (await t.parent.checkInterfaceSupport(n, t.methodName),
                  t.parent.handleCall(r, n.methods[t.methodName], o, a, e));
              })
              .catch(function (t) {
                "function" !== typeof e ? r.reject(t) : e(t, null);
              }),
            r.eventEmitter
          );
        }),
        (i.prototype.send = function (e, t) {
          var r = this,
            o = new n(),
            a = this.parent.prepareArguments(
              this.ensName,
              this.methodArguments,
            );
          return (
            this.parent.registry
              .getResolver(this.ensName)
              .then(async function (n) {
                (await r.parent.checkInterfaceSupport(n, r.methodName),
                  r.parent.handleSend(o, n.methods[r.methodName], a, e, t));
              })
              .catch(function (e) {
                "function" !== typeof t ? o.reject(e) : t(e, null);
              }),
            o.eventEmitter
          );
        }),
        (i.prototype.handleCall = function (e, t, r, n, o) {
          return (
            t
              .apply(this, r)
              .call()
              .then(function (t) {
                (n && (t = n(t)),
                  "function" !== typeof o ? e.resolve(t) : o(t, t));
              })
              .catch(function (t) {
                "function" !== typeof o ? e.reject(t) : o(t, null);
              }),
            e
          );
        }),
        (i.prototype.handleSend = function (e, t, r, n, o) {
          return (
            t
              .apply(this, r)
              .send(n)
              .on("sending", function () {
                e.eventEmitter.emit("sending");
              })
              .on("sent", function () {
                e.eventEmitter.emit("sent");
              })
              .on("transactionHash", function (t) {
                e.eventEmitter.emit("transactionHash", t);
              })
              .on("confirmation", function (t, r) {
                e.eventEmitter.emit("confirmation", t, r);
              })
              .on("receipt", function (t) {
                (e.eventEmitter.emit("receipt", t),
                  e.resolve(t),
                  "function" === typeof o && o(t, t));
              })
              .on("error", function (t) {
                (e.eventEmitter.emit("error", t),
                  "function" !== typeof o ? e.reject(t) : o(t, null));
              }),
            e
          );
        }),
        (i.prototype.prepareArguments = function (e, t) {
          var r = o.hash(e);
          return t.length > 0 ? (t.unshift(r), t) : [r];
        }),
        (i.prototype.checkInterfaceSupport = async function (e, t) {
          if (s[t]) {
            var r = !1;
            try {
              r = await e.methods.supportsInterface(s[t]).call();
            } catch (n) {
              console.warn(
                'Could not verify interface of resolver contract at "' +
                  e.options.address +
                  '". ',
              );
            }
            if (!r) throw a.ResolverMethodMissingError(e.options.address, t);
          }
        }),
        (e.exports = i));
    },
    4141: function (e, t, r) {
      var n = r(4142);
      function o(e) {
        var t = null,
          r = null,
          o = null;
        if (e && e.error) return { protocolType: null, decoded: e.error };
        if (e)
          try {
            t = n.decode(e);
            var a = n.getCodec(e);
            "ipfs-ns" === a
              ? (r = "ipfs")
              : "swarm-ns" === a
                ? (r = "bzz")
                : "onion" === a
                  ? (r = "onion")
                  : "onion3" === a
                    ? (r = "onion3")
                    : (t = e);
          } catch (s) {
            o = s.message;
          }
        return { protocolType: r, decoded: t, error: o };
      }
      function a(e) {
        var t,
          r,
          o = !1;
        if (e) {
          var a =
            e.match(/^(ipfs|bzz|onion|onion3):\/\/(.*)/) ||
            e.match(/\/(ipfs)\/(.*)/);
          a && ((r = a[1]), (t = a[2]));
          try {
            if ("ipfs" === r) t.length >= 4 && (o = "0x" + n.fromIpfs(t));
            else if ("bzz" === r) t.length >= 4 && (o = "0x" + n.fromSwarm(t));
            else if ("onion" === r)
              16 === t.length && (o = "0x" + n.encode("onion", t));
            else {
              if ("onion3" !== r)
                throw new Error(
                  "Could not encode content hash: unsupported content type",
                );
              56 === t.length && (o = "0x" + n.encode("onion3", t));
            }
          } catch (s) {
            throw s;
          }
        }
        return o;
      }
      e.exports = { decode: o, encode: a };
    },
    4170: function (e, t, r) {
      "use strict";
      (function (t, n) {
        var o = r(2947),
          a = r(2948),
          s = r(4171),
          i = r("undefined" === typeof t ? 3643 : 2764),
          c = r(381),
          u = r(4176),
          l = r(376),
          p = r(796),
          { TransactionFactory: d } = r(3543),
          h = r(3277).default,
          m = r(3277).Hardfork,
          f = r(801),
          y = function (e) {
            return "undefined" === typeof e || null === e;
          },
          g = function () {
            var e = this;
            (o.packageInit(this, arguments),
              delete this.BatchRequest,
              delete this.extend);
            var t = [
              new a({
                name: "getNetworkId",
                call: "net_version",
                params: 0,
                outputFormatter: parseInt,
              }),
              new a({
                name: "getChainId",
                call: "eth_chainId",
                params: 0,
                outputFormatter: l.hexToNumber,
              }),
              new a({ name: "getGasPrice", call: "eth_gasPrice", params: 0 }),
              new a({
                name: "getTransactionCount",
                call: "eth_getTransactionCount",
                params: 2,
                inputFormatter: [
                  function (e) {
                    if (l.isAddress(e)) return e;
                    throw new Error(
                      "Address " +
                        e +
                        ' is not a valid address to get the "transactionCount".',
                    );
                  },
                  function () {
                    return "latest";
                  },
                ],
              }),
              new a({
                name: "getBlockByNumber",
                call: "eth_getBlockByNumber",
                params: 2,
                inputFormatter: [
                  function (e) {
                    return e ? l.toHex(e) : "latest";
                  },
                  function () {
                    return !1;
                  },
                ],
              }),
            ];
            ((this._ethereumCall = {}),
              t.forEach((t) => {
                (t.attachToObject(e._ethereumCall),
                  t.setRequestManager(e._requestManager));
              }),
              (this.wallet = new _(this)));
          };
        function b(e) {
          if (e.common && e.chain && e.hardfork)
            return new Error(
              "Please provide the @ethereumjs/common object or the chain and hardfork property but not all together.",
            );
          if ((e.chain && !e.hardfork) || (e.hardfork && !e.chain))
            return new Error(
              'When specifying chain and hardfork, both values must be defined. Received "chain": ' +
                e.chain +
                ', "hardfork": ' +
                e.hardfork,
            );
          if (
            !e.gas &&
            !e.gasLimit &&
            !e.maxPriorityFeePerGas &&
            !e.maxFeePerGas
          )
            return new Error('"gas" is missing');
          if (e.gas && e.gasPrice) {
            if (e.gas < 0 || e.gasPrice < 0)
              return new Error("Gas or gasPrice is lower than 0");
          } else if (e.maxPriorityFeePerGas < 0 || e.maxFeePerGas < 0)
            return new Error(
              "maxPriorityFeePerGas or maxFeePerGas is lower than 0",
            );
          return e.nonce < 0 || e.chainId < 0
            ? new Error("Nonce or chainId is lower than 0")
            : void 0;
        }
        function v(e) {
          const t =
            void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas;
          let r;
          if (
            (void 0 !== e.type
              ? (r = l.toHex(e.type))
              : void 0 === e.type && t && (r = "0x2"),
            void 0 !== e.gasPrice && ("0x2" === r || t))
          )
            throw Error("eip-1559 transactions don't support gasPrice");
          if (("0x1" === r || "0x0" === r) && t)
            throw Error(
              "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas",
            );
          return (
            t ||
            (e.common &&
              e.common.hardfork &&
              e.common.hardfork.toLowerCase() === m.London) ||
            (e.hardfork && e.hardfork.toLowerCase() === m.London)
              ? (r = "0x2")
              : (e.accessList ||
                  (e.common &&
                    e.common.hardfork &&
                    e.common.hardfork.toLowerCase() === m.Berlin) ||
                  (e.hardfork && e.hardfork.toLowerCase() === m.Berlin)) &&
                (r = "0x1"),
            r
          );
        }
        function w(e, t) {
          return new Promise((r, n) => {
            try {
              (void 0 === t.type || t.type < "0x2") && void 0 !== t.gasPrice
                ? r({ gasPrice: t.gasPrice })
                : Promise.all([
                    e._ethereumCall.getBlockByNumber(),
                    e._ethereumCall.getGasPrice(),
                  ]).then((e) => {
                    const [n, o] = e;
                    if ("0x2" === t.type && n && n.baseFeePerGas) {
                      let e, o;
                      (t.gasPrice
                        ? ((e = t.gasPrice),
                          (o = t.gasPrice),
                          delete t.gasPrice)
                        : ((e = t.maxPriorityFeePerGas || "0x9502F900"),
                          (o =
                            t.maxFeePerGas ||
                            l.toHex(
                              l
                                .toBN(n.baseFeePerGas)
                                .mul(l.toBN(2))
                                .add(l.toBN(e)),
                            ))),
                        r({ maxFeePerGas: o, maxPriorityFeePerGas: e }));
                    } else {
                      if (t.maxPriorityFeePerGas || t.maxFeePerGas)
                        throw Error("Network doesn't support eip-1559");
                      r({ gasPrice: o });
                    }
                  });
            } catch (o) {
              n(o);
            }
          });
        }
        function _(e) {
          ((this._accounts = e),
            (this.length = 0),
            (this.defaultKeyName = "web3js_wallet"));
        }
        function k(e) {
          var t;
          try {
            t = window[e];
            var r = "__storage_test__";
            return (t.setItem(r, r), t.removeItem(r), !0);
          } catch (n) {
            return (
              n &&
              (22 === n.code ||
                1014 === n.code ||
                "QuotaExceededError" === n.name ||
                "NS_ERROR_DOM_QUOTA_REACHED" === n.name) &&
              t &&
              0 !== t.length
            );
          }
        }
        ((g.prototype._addAccountFunctions = function (e) {
          var t = this;
          return (
            (e.signTransaction = function (r, n) {
              return t.signTransaction(r, e.privateKey, n);
            }),
            (e.sign = function (r) {
              return t.sign(r, e.privateKey);
            }),
            (e.encrypt = function (r, n) {
              return t.encrypt(e.privateKey, r, n);
            }),
            e
          );
        }),
          (g.prototype.create = function (e) {
            return this._addAccountFunctions(s.create(e || l.randomHex(32)));
          }),
          (g.prototype.privateKeyToAccount = function (e, t) {
            if ((e.startsWith("0x") || (e = "0x" + e), !t && 66 !== e.length))
              throw new Error("Private key must be 32 bytes long");
            return this._addAccountFunctions(s.fromPrivate(e));
          }),
          (g.prototype.signTransaction = function (e, t, r) {
            var o = this,
              a = !1,
              s = {},
              i = !(!e || !((e.chain && e.hardfork) || e.common));
            if (((r = r || function () {}), !e))
              return (
                (a = new Error("No transaction object given!")),
                r(a),
                Promise.reject(a)
              );
            function c(e) {
              const o = b(e);
              if (o) return (r(o), Promise.reject(o));
              try {
                var a = p.formatters.inputCallFormatter(Object.assign({}, e));
                ((a.data = a.data || "0x"),
                  (a.value = a.value || "0x"),
                  (a.gasLimit = a.gasLimit || a.gas),
                  "0x1" === a.type &&
                    void 0 === a.accessList &&
                    (a.accessList = []),
                  i
                    ? (a.common &&
                        ((s.common = h.forCustomChain(
                          a.common.baseChain || "mainnet",
                          {
                            name: a.common.customChain.name || "custom-network",
                            networkId: a.common.customChain.networkId,
                            chainId: a.common.customChain.chainId,
                          },
                          a.common.hardfork || m.London,
                        )),
                        delete a.common),
                      a.chain && ((s.chain = a.chain), delete a.chain),
                      a.hardfork &&
                        ((s.hardfork = a.hardfork), delete a.hardfork))
                    : ((s.common = h.forCustomChain(
                        "mainnet",
                        {
                          name: "custom-network",
                          networkId: a.networkId,
                          chainId: a.chainId,
                        },
                        a.hardfork || m.London,
                      )),
                      delete a.networkId),
                  t.startsWith("0x") && (t = t.substring(2)));
                var c = d.fromTxData(a, s),
                  u = c.sign(n.from(t, "hex")),
                  f = u.validate(!0);
                if (f.length > 0) {
                  let e = "Signer Error: ";
                  for (const t of f) e += `${e} ${t}.`;
                  throw new Error(e);
                }
                var y = u.serialize().toString("hex"),
                  g = "0x" + y,
                  v = l.keccak256(g),
                  w = {
                    messageHash:
                      "0x" + n.from(u.getMessageToSign(!0)).toString("hex"),
                    v: "0x" + u.v.toString("hex"),
                    r: "0x" + u.r.toString("hex"),
                    s: "0x" + u.s.toString("hex"),
                    rawTransaction: g,
                    transactionHash: v,
                  };
                return (r(null, w), w);
              } catch (_) {
                return (r(_), Promise.reject(_));
              }
            }
            return (
              (e.type = v(e)),
              void 0 !== e.nonce &&
              void 0 !== e.chainId &&
              (void 0 !== e.gasPrice ||
                (void 0 !== e.maxFeePerGas &&
                  void 0 !== e.maxPriorityFeePerGas)) &&
              i
                ? Promise.resolve(c(e))
                : Promise.all([
                    y(e.chainId) ? o._ethereumCall.getChainId() : e.chainId,
                    y(e.nonce)
                      ? o._ethereumCall.getTransactionCount(
                          o.privateKeyToAccount(t).address,
                        )
                      : e.nonce,
                    y(i) ? o._ethereumCall.getNetworkId() : 1,
                    w(o, e),
                  ]).then(function (t) {
                    if (y(t[0]) || y(t[1]) || y(t[2]) || y(t[3]))
                      throw new Error(
                        'One of the values "chainId", "networkId", "gasPrice", or "nonce" couldn\'t be fetched: ' +
                          JSON.stringify(t),
                      );
                    return c({
                      ...e,
                      chainId: t[0],
                      nonce: t[1],
                      networkId: t[2],
                      ...t[3],
                    });
                  })
            );
          }),
          (g.prototype.recoverTransaction = function (e, t) {
            void 0 === t && (t = {});
            const r = n.from(e.slice(2), "hex"),
              o = d.fromSerializedData(r);
            return l.toChecksumAddress(o.getSenderAddress().toString("hex"));
          }),
          (g.prototype.hashMessage = function (e) {
            var t = l.isHexStrict(e) ? e : l.utf8ToHex(e),
              r = l.hexToBytes(t),
              o = n.from(r),
              a = "Ethereum Signed Message:\n" + r.length,
              s = n.from(a),
              i = n.concat([s, o]);
            return f.bufferToHex(f.keccak256(i));
          }),
          (g.prototype.sign = function (e, t) {
            if ((t.startsWith("0x") || (t = "0x" + t), 66 !== t.length))
              throw new Error("Private key must be 32 bytes long");
            var r = this.hashMessage(e),
              n = s.sign(r, t),
              o = s.decodeSignature(n);
            return {
              message: e,
              messageHash: r,
              v: o[0],
              r: o[1],
              s: o[2],
              signature: n,
            };
          }),
          (g.prototype.recover = function (e, t, r) {
            var n = [].slice.apply(arguments);
            return e && "object" === typeof e
              ? this.recover(
                  e.messageHash,
                  s.encodeSignature([e.v, e.r, e.s]),
                  !0,
                )
              : (r || (e = this.hashMessage(e)),
                n.length >= 4
                  ? ((r = n.slice(-1)[0]),
                    (r = "boolean" === typeof r && !!r),
                    this.recover(e, s.encodeSignature(n.slice(1, 4)), r))
                  : s.recover(e, t));
          }),
          (g.prototype.decrypt = function (e, t, r) {
            if ("string" !== typeof t) throw new Error("No password given.");
            var o,
              a,
              s =
                e && "object" === typeof e
                  ? e
                  : JSON.parse(r ? e.toLowerCase() : e);
            if (3 !== s.version) throw new Error("Not a valid V3 wallet");
            if ("scrypt" === s.crypto.kdf)
              ((a = s.crypto.kdfparams),
                (o = c.syncScrypt(
                  n.from(t),
                  n.from(a.salt, "hex"),
                  a.n,
                  a.r,
                  a.p,
                  a.dklen,
                )));
            else {
              if ("pbkdf2" !== s.crypto.kdf)
                throw new Error("Unsupported key derivation scheme");
              if (((a = s.crypto.kdfparams), "hmac-sha256" !== a.prf))
                throw new Error("Unsupported parameters to PBKDF2");
              o = i.pbkdf2Sync(
                n.from(t),
                n.from(a.salt, "hex"),
                a.c,
                a.dklen,
                "sha256",
              );
            }
            var u = n.from(s.crypto.ciphertext, "hex"),
              p = l.sha3(n.from([...o.slice(16, 32), ...u])).replace("0x", "");
            if (p !== s.crypto.mac)
              throw new Error(
                "Key derivation failed - possibly wrong password",
              );
            var d = i.createDecipheriv(
                s.crypto.cipher,
                o.slice(0, 16),
                n.from(s.crypto.cipherparams.iv, "hex"),
              ),
              h = "0x" + n.from([...d.update(u), ...d.final()]).toString("hex");
            return this.privateKeyToAccount(h, !0);
          }),
          (g.prototype.encrypt = function (e, t, r) {
            var o = this.privateKeyToAccount(e, !0);
            r = r || {};
            var a,
              s = r.salt || i.randomBytes(32),
              p = r.iv || i.randomBytes(16),
              d = r.kdf || "scrypt",
              h = { dklen: r.dklen || 32, salt: s.toString("hex") };
            if ("pbkdf2" === d)
              ((h.c = r.c || 262144),
                (h.prf = "hmac-sha256"),
                (a = i.pbkdf2Sync(
                  n.from(t),
                  n.from(h.salt, "hex"),
                  h.c,
                  h.dklen,
                  "sha256",
                )));
            else {
              if ("scrypt" !== d) throw new Error("Unsupported kdf");
              ((h.n = r.n || 8192),
                (h.r = r.r || 8),
                (h.p = r.p || 1),
                (a = c.syncScrypt(
                  n.from(t),
                  n.from(h.salt, "hex"),
                  h.n,
                  h.r,
                  h.p,
                  h.dklen,
                )));
            }
            var m = i.createCipheriv(
              r.cipher || "aes-128-ctr",
              a.slice(0, 16),
              p,
            );
            if (!m) throw new Error("Unsupported cipher");
            var f = n.from([
                ...m.update(n.from(o.privateKey.replace("0x", ""), "hex")),
                ...m.final(),
              ]),
              y = l.sha3(n.from([...a.slice(16, 32), ...f])).replace("0x", "");
            return {
              version: 3,
              id: u.v4({ random: r.uuid || i.randomBytes(16) }),
              address: o.address.toLowerCase().replace("0x", ""),
              crypto: {
                ciphertext: f.toString("hex"),
                cipherparams: { iv: p.toString("hex") },
                cipher: r.cipher || "aes-128-ctr",
                kdf: d,
                kdfparams: h,
                mac: y.toString("hex"),
              },
            };
          }),
          (_.prototype._findSafeIndex = function (e) {
            return (
              (e = e || 0),
              this.hasOwnProperty(e) ? this._findSafeIndex(e + 1) : e
            );
          }),
          (_.prototype._currentIndexes = function () {
            var e = Object.keys(this),
              t = e
                .map(function (e) {
                  return parseInt(e);
                })
                .filter(function (e) {
                  return e < 9e20;
                });
            return t;
          }),
          (_.prototype.create = function (e, t) {
            for (var r = 0; r < e; ++r)
              this.add(this._accounts.create(t).privateKey);
            return this;
          }),
          (_.prototype.add = function (e) {
            return (
              "string" === typeof e &&
                (e = this._accounts.privateKeyToAccount(e)),
              this[e.address]
                ? this[e.address]
                : ((e = this._accounts.privateKeyToAccount(e.privateKey)),
                  (e.index = this._findSafeIndex()),
                  (this[e.index] = e),
                  (this[e.address] = e),
                  (this[e.address.toLowerCase()] = e),
                  this.length++,
                  e)
            );
          }),
          (_.prototype.remove = function (e) {
            var t = this[e];
            return (
              !(!t || !t.address) &&
              ((this[t.address].privateKey = null),
              delete this[t.address],
              (this[t.address.toLowerCase()].privateKey = null),
              delete this[t.address.toLowerCase()],
              (this[t.index].privateKey = null),
              delete this[t.index],
              this.length--,
              !0)
            );
          }),
          (_.prototype.clear = function () {
            var e = this,
              t = this._currentIndexes();
            return (
              t.forEach(function (t) {
                e.remove(t);
              }),
              this
            );
          }),
          (_.prototype.encrypt = function (e, t) {
            var r = this,
              n = this._currentIndexes(),
              o = n.map(function (n) {
                return r[n].encrypt(e, t);
              });
            return o;
          }),
          (_.prototype.decrypt = function (e, t) {
            var r = this;
            return (
              e.forEach(function (e) {
                var n = r._accounts.decrypt(e, t);
                if (!n)
                  throw new Error("Couldn't decrypt accounts. Password wrong?");
                r.add(n);
              }),
              this
            );
          }),
          (_.prototype.save = function (e, t) {
            return (
              localStorage.setItem(
                t || this.defaultKeyName,
                JSON.stringify(this.encrypt(e)),
              ),
              !0
            );
          }),
          (_.prototype.load = function (e, t) {
            var r = localStorage.getItem(t || this.defaultKeyName);
            if (r)
              try {
                r = JSON.parse(r);
              } catch (n) {}
            return this.decrypt(r || [], e);
          }),
          k("localStorage") ||
            (delete _.prototype.save, delete _.prototype.load),
          (e.exports = g));
      }).call(this, r(13), r(2).Buffer);
    },
    4176: function (e, t, r) {
      var n = r(4177),
        o = r(4178),
        a = o;
      ((a.v1 = n), (a.v4 = o), (e.exports = a));
    },
    4177: function (e, t, r) {
      var n,
        o,
        a = r(3541),
        s = r(3542),
        i = 0,
        c = 0;
      function u(e, t, r) {
        var u = (t && r) || 0,
          l = t || [];
        e = e || {};
        var p = e.node || n,
          d = void 0 !== e.clockseq ? e.clockseq : o;
        if (null == p || null == d) {
          var h = a();
          (null == p && (p = n = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
            null == d && (d = o = 16383 & ((h[6] << 8) | h[7])));
        }
        var m = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          f = void 0 !== e.nsecs ? e.nsecs : c + 1,
          y = m - i + (f - c) / 1e4;
        if (
          (y < 0 && void 0 === e.clockseq && (d = (d + 1) & 16383),
          (y < 0 || m > i) && void 0 === e.nsecs && (f = 0),
          f >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        ((i = m), (c = f), (o = d), (m += 122192928e5));
        var g = (1e4 * (268435455 & m) + f) % 4294967296;
        ((l[u++] = (g >>> 24) & 255),
          (l[u++] = (g >>> 16) & 255),
          (l[u++] = (g >>> 8) & 255),
          (l[u++] = 255 & g));
        var b = ((m / 4294967296) * 1e4) & 268435455;
        ((l[u++] = (b >>> 8) & 255),
          (l[u++] = 255 & b),
          (l[u++] = ((b >>> 24) & 15) | 16),
          (l[u++] = (b >>> 16) & 255),
          (l[u++] = (d >>> 8) | 128),
          (l[u++] = 255 & d));
        for (var v = 0; v < 6; ++v) l[u + v] = p[v];
        return t || s(l);
      }
      e.exports = u;
    },
    4178: function (e, t, r) {
      var n = r(3541),
        o = r(3542);
      function a(e, t, r) {
        var a = (t && r) || 0;
        ("string" == typeof e &&
          ((t = "binary" === e ? new Array(16) : null), (e = null)),
          (e = e || {}));
        var s = e.random || (e.rng || n)();
        if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
          for (var i = 0; i < 16; ++i) t[a + i] = s[i];
        return t || o(s);
      }
      e.exports = a;
    },
    4238: function (e, t, r) {
      "use strict";
      var n = function (e) {
        var t,
          r = this;
        return this.net
          .getId()
          .then(function (e) {
            return ((t = e), r.getBlock(0));
          })
          .then(function (r) {
            var n = "private";
            return (
              "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3" ===
                r.hash &&
                1 === t &&
                (n = "main"),
              "0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303" ===
                r.hash &&
                2 === t &&
                (n = "morden"),
              "0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d" ===
                r.hash &&
                3 === t &&
                (n = "ropsten"),
              "0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177" ===
                r.hash &&
                4 === t &&
                (n = "rinkeby"),
              "0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a" ===
                r.hash &&
                5 === t &&
                (n = "goerli"),
              "0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9" ===
                r.hash &&
                42 === t &&
                (n = "kovan"),
              "function" === typeof e && e(null, n),
              n
            );
          })
          .catch(function (t) {
            if ("function" !== typeof e) throw t;
            e(t);
          });
      };
      e.exports = n;
    },
    4239: function (e, t, r) {
      "use strict";
      var n = r(2947),
        o = r(3141).subscriptions,
        a = r(2948),
        s = r(3142),
        i = function () {
          var e = this;
          n.packageInit(this, arguments);
          var t = this.setRequestManager;
          this.setRequestManager = function (r) {
            return (t(r), e.net.setRequestManager(r), !0);
          };
          var r = this.setProvider;
          ((this.setProvider = function () {
            (r.apply(e, arguments), e.setRequestManager(e._requestManager));
          }),
            (this.net = new s(this)),
            [
              new o({
                name: "subscribe",
                type: "shh",
                subscriptions: { messages: { params: 1 } },
              }),
              new a({ name: "getVersion", call: "shh_version", params: 0 }),
              new a({ name: "getInfo", call: "shh_info", params: 0 }),
              new a({
                name: "setMaxMessageSize",
                call: "shh_setMaxMessageSize",
                params: 1,
              }),
              new a({ name: "setMinPoW", call: "shh_setMinPoW", params: 1 }),
              new a({
                name: "markTrustedPeer",
                call: "shh_markTrustedPeer",
                params: 1,
              }),
              new a({ name: "newKeyPair", call: "shh_newKeyPair", params: 0 }),
              new a({
                name: "addPrivateKey",
                call: "shh_addPrivateKey",
                params: 1,
              }),
              new a({
                name: "deleteKeyPair",
                call: "shh_deleteKeyPair",
                params: 1,
              }),
              new a({ name: "hasKeyPair", call: "shh_hasKeyPair", params: 1 }),
              new a({
                name: "getPublicKey",
                call: "shh_getPublicKey",
                params: 1,
              }),
              new a({
                name: "getPrivateKey",
                call: "shh_getPrivateKey",
                params: 1,
              }),
              new a({ name: "newSymKey", call: "shh_newSymKey", params: 0 }),
              new a({ name: "addSymKey", call: "shh_addSymKey", params: 1 }),
              new a({
                name: "generateSymKeyFromPassword",
                call: "shh_generateSymKeyFromPassword",
                params: 1,
              }),
              new a({ name: "hasSymKey", call: "shh_hasSymKey", params: 1 }),
              new a({ name: "getSymKey", call: "shh_getSymKey", params: 1 }),
              new a({
                name: "deleteSymKey",
                call: "shh_deleteSymKey",
                params: 1,
              }),
              new a({
                name: "newMessageFilter",
                call: "shh_newMessageFilter",
                params: 1,
              }),
              new a({
                name: "getFilterMessages",
                call: "shh_getFilterMessages",
                params: 1,
              }),
              new a({
                name: "deleteMessageFilter",
                call: "shh_deleteMessageFilter",
                params: 1,
              }),
              new a({
                name: "post",
                call: "shh_post",
                params: 1,
                inputFormatter: [null],
              }),
              new a({
                name: "unsubscribe",
                call: "shh_unsubscribe",
                params: 1,
              }),
            ].forEach(function (t) {
              (t.attachToObject(e), t.setRequestManager(e._requestManager));
            }));
        };
      ((i.prototype.clearSubscriptions = function () {
        this._requestManager.clearSubscriptions();
      }),
        n.addProviders(i),
        (e.exports = i));
    },
    4240: function (e, t, r) {
      "use strict";
      var n = r(4241),
        o = function e(t) {
          ((this.givenProvider = e.givenProvider),
            t && t._requestManager && (t = t.currentProvider),
            "undefined" !== typeof document && (this.pick = n.pick),
            this.setProvider(t));
        };
      ((o.givenProvider = null),
        "undefined" !== typeof ethereum &&
          ethereum.bzz &&
          (o.givenProvider = ethereum.bzz),
        (o.prototype.setProvider = function (e) {
          if (
            (e &&
              "object" === typeof e &&
              "string" === typeof e.bzz &&
              (e = e.bzz),
            "string" !== typeof e)
          ) {
            this.currentProvider = null;
            var t = new Error(
              "No provider set, please set one using bzz.setProvider().",
            );
            return (
              (this.download =
                this.upload =
                this.isAvailable =
                  function () {
                    throw t;
                  }),
              !1
            );
          }
          return (
            (this.currentProvider = e),
            (this.download = n.at(e).download),
            (this.upload = n.at(e).upload),
            (this.isAvailable = n.at(e).isAvailable),
            !0
          );
        }),
        (e.exports = o));
    },
    4242: function (e, t, r) {
      var n = r(4243),
        o = r(4246),
        a = r(3544),
        s = r(4247),
        i = r(4248),
        c = "application/json",
        u = function () {};
      function l(e, t, r) {
        if (!e || "string" !== typeof e)
          throw new TypeError("must specify a URL");
        if (
          ("function" === typeof t && ((r = t), (t = {})),
          r && "function" !== typeof r)
        )
          throw new TypeError("expected cb to be undefined or a function");
        ((r = r || u), (t = t || {}));
        var l = t.json ? "json" : "text";
        t = a({ responseType: l }, t);
        var p = t.headers || {},
          d = (t.method || "GET").toUpperCase(),
          h = t.query;
        return (
          h && ("string" !== typeof h && (h = n.stringify(h)), (e = o(e, h))),
          "json" === t.responseType && s(p, "Accept", c),
          t.json &&
            "GET" !== d &&
            "HEAD" !== d &&
            (s(p, "Content-Type", c), (t.body = JSON.stringify(t.body))),
          (t.method = d),
          (t.url = e),
          (t.headers = p),
          delete t.query,
          delete t.json,
          i(t, r)
        );
      }
      e.exports = l;
    },
    4247: function (e, t) {
      function r(e, t, r) {
        var n = t.toLowerCase();
        e[t] || e[n] || (e[t] = r);
      }
      e.exports = r;
    },
    4248: function (e, t, r) {
      var n = r(4249),
        o = r(4253),
        a = function () {};
      function s(e, t) {
        delete e.uri;
        var r = !1;
        "json" === e.responseType && ((e.responseType = "text"), (r = !0));
        var s = n(e, function (n, s, i) {
            if (r && !n)
              try {
                var c = s.rawRequest.responseText;
                i = JSON.parse(c);
              } catch (u) {
                n = u;
              }
            ((s = o(e, s)), t(n, n ? null : i, s), (t = a));
          }),
          i = s.onabort;
        return (
          (s.onabort = function () {
            var e = i.apply(s, Array.prototype.slice.call(arguments));
            return (t(new Error("XHR Aborted")), (t = a), e);
          }),
          s
        );
      }
      e.exports = s;
    },
    4249: function (e, t, r) {
      "use strict";
      var n = r(4250),
        o = r(4251),
        a = r(4252),
        s = r(839);
      function i(e, t) {
        for (var r = 0; r < e.length; r++) t(e[r]);
      }
      function c(e) {
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
      }
      function u(e, t, r) {
        var n = e;
        return (
          o(t)
            ? ((r = t), "string" === typeof e && (n = { uri: e }))
            : (n = s(t, { uri: e })),
          (n.callback = r),
          n
        );
      }
      function l(e, t, r) {
        return ((t = u(e, t, r)), p(t));
      }
      function p(e) {
        if ("undefined" === typeof e.callback)
          throw new Error("callback argument missing");
        var t = !1,
          r = function (r, n, o) {
            t || ((t = !0), e.callback(r, n, o));
          };
        function n() {
          4 === h.readyState && setTimeout(i, 0);
        }
        function o() {
          var e = void 0;
          if (((e = h.response ? h.response : h.responseText || d(h)), w))
            try {
              e = JSON.parse(e);
            } catch (t) {}
          return e;
        }
        function s(e) {
          return (
            clearTimeout(m),
            e instanceof Error ||
              (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
            (e.statusCode = 0),
            r(e, _)
          );
        }
        function i() {
          if (!p) {
            var t;
            (clearTimeout(m),
              (t =
                e.useXDR && void 0 === h.status
                  ? 200
                  : 1223 === h.status
                    ? 204
                    : h.status));
            var n = _,
              s = null;
            return (
              0 !== t
                ? ((n = {
                    body: o(),
                    statusCode: t,
                    method: y,
                    headers: {},
                    url: f,
                    rawRequest: h,
                  }),
                  h.getAllResponseHeaders &&
                    (n.headers = a(h.getAllResponseHeaders())))
                : (s = new Error("Internal XMLHttpRequest Error")),
              r(s, n, n.body)
            );
          }
        }
        var u,
          p,
          h = e.xhr || null;
        h ||
          (h =
            e.cors || e.useXDR
              ? new l.XDomainRequest()
              : new l.XMLHttpRequest());
        var m,
          f = (h.url = e.uri || e.url),
          y = (h.method = e.method || "GET"),
          g = e.body || e.data,
          b = (h.headers = e.headers || {}),
          v = !!e.sync,
          w = !1,
          _ = {
            body: void 0,
            headers: {},
            statusCode: 0,
            method: y,
            url: f,
            rawRequest: h,
          };
        if (
          ("json" in e &&
            !1 !== e.json &&
            ((w = !0),
            b["accept"] || b["Accept"] || (b["Accept"] = "application/json"),
            "GET" !== y &&
              "HEAD" !== y &&
              (b["content-type"] ||
                b["Content-Type"] ||
                (b["Content-Type"] = "application/json"),
              (g = JSON.stringify(!0 === e.json ? g : e.json)))),
          (h.onreadystatechange = n),
          (h.onload = i),
          (h.onerror = s),
          (h.onprogress = function () {}),
          (h.onabort = function () {
            p = !0;
          }),
          (h.ontimeout = s),
          h.open(y, f, !v, e.username, e.password),
          v || (h.withCredentials = !!e.withCredentials),
          !v &&
            e.timeout > 0 &&
            (m = setTimeout(function () {
              if (!p) {
                ((p = !0), h.abort("timeout"));
                var e = new Error("XMLHttpRequest timeout");
                ((e.code = "ETIMEDOUT"), s(e));
              }
            }, e.timeout)),
          h.setRequestHeader)
        )
          for (u in b) b.hasOwnProperty(u) && h.setRequestHeader(u, b[u]);
        else if (e.headers && !c(e.headers))
          throw new Error("Headers cannot be set on an XDomainRequest object");
        return (
          "responseType" in e && (h.responseType = e.responseType),
          "beforeSend" in e &&
            "function" === typeof e.beforeSend &&
            e.beforeSend(h),
          h.send(g || null),
          h
        );
      }
      function d(e) {
        try {
          if ("document" === e.responseType) return e.responseXML;
          var t =
            e.responseXML &&
            "parsererror" === e.responseXML.documentElement.nodeName;
          if ("" === e.responseType && !t) return e.responseXML;
        } catch (r) {}
        return null;
      }
      function h() {}
      ((e.exports = l),
        (e.exports.default = l),
        (l.XMLHttpRequest = n.XMLHttpRequest || h),
        (l.XDomainRequest =
          "withCredentials" in new l.XMLHttpRequest()
            ? l.XMLHttpRequest
            : n.XDomainRequest),
        i(["get", "put", "post", "patch", "head", "delete"], function (e) {
          l["delete" === e ? "del" : e] = function (t, r, n) {
            return ((r = u(t, r, n)), (r.method = e.toUpperCase()), p(r));
          };
        }));
    },
    4253: function (e, t) {
      function r(e, t) {
        return t
          ? {
              statusCode: t.statusCode,
              headers: t.headers,
              method: e.method,
              url: e.url,
              rawRequest: t.rawRequest ? t.rawRequest : t,
            }
          : null;
      }
      e.exports = r;
    },
  },
]);
