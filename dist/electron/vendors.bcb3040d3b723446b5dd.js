(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [75],
  {
    1337: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.VoidSigner = r.Signer = void 0));
      var i = e(1338),
        n = e(491),
        o = e(1341),
        s = function (t, r, e, i) {
          function n(t) {
            return t instanceof e
              ? t
              : new e(function (r) {
                  r(t);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function s(t) {
              try {
                u(i.next(t));
              } catch (r) {
                o(r);
              }
            }
            function h(t) {
              try {
                u(i["throw"](t));
              } catch (r) {
                o(r);
              }
            }
            function u(t) {
              t.done ? e(t.value) : n(t.value).then(s, h);
            }
            u((i = i.apply(t, r || [])).next());
          });
        };
      const h = new n.Logger(o.version),
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
        a = [
          n.Logger.errors.INSUFFICIENT_FUNDS,
          n.Logger.errors.NONCE_EXPIRED,
          n.Logger.errors.REPLACEMENT_UNDERPRICED,
        ];
      class Signer {
        constructor() {
          (h.checkAbstract(new.target, Signer),
            (0, i.defineReadOnly)(this, "_isSigner", !0));
        }
        getBalance(t) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), t)
            );
          });
        }
        getTransactionCount(t) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), t)
            );
          });
        }
        estimateGas(t) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const r = yield (0, i.resolveProperties)(this.checkTransaction(t));
            return yield this.provider.estimateGas(r);
          });
        }
        call(t, r) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const e = yield (0, i.resolveProperties)(this.checkTransaction(t));
            return yield this.provider.call(e, r);
          });
        }
        sendTransaction(t) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const r = yield this.populateTransaction(t),
              e = yield this.signTransaction(r);
            return yield this.provider.sendTransaction(e);
          });
        }
        getChainId() {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            const t = yield this.provider.getNetwork();
            return t.chainId;
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
        resolveName(t) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(t)
            );
          });
        }
        checkTransaction(t) {
          for (const e in t)
            -1 === u.indexOf(e) &&
              h.throwArgumentError(
                "invalid transaction key: " + e,
                "transaction",
                t,
              );
          const r = (0, i.shallowCopy)(t);
          return (
            null == r.from
              ? (r.from = this.getAddress())
              : (r.from = Promise.all([
                  Promise.resolve(r.from),
                  this.getAddress(),
                ]).then(
                  (r) => (
                    r[0].toLowerCase() !== r[1].toLowerCase() &&
                      h.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        t,
                      ),
                    r[0]
                  ),
                )),
            r
          );
        }
        populateTransaction(t) {
          return s(this, void 0, void 0, function* () {
            const r = yield (0, i.resolveProperties)(this.checkTransaction(t));
            null != r.to &&
              ((r.to = Promise.resolve(r.to).then((t) =>
                s(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  const r = yield this.resolveName(t);
                  return (
                    null == r &&
                      h.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        t,
                      ),
                    r
                  );
                }),
              )),
              r.to.catch((t) => {}));
            const e = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
            if (
              (null == r.gasPrice || (2 !== r.type && !e)
                ? (0 !== r.type && 1 !== r.type) ||
                  !e ||
                  h.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    t,
                  )
                : h.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    t,
                  ),
              (2 !== r.type && null != r.type) ||
                null == r.maxFeePerGas ||
                null == r.maxPriorityFeePerGas)
            )
              if (0 === r.type || 1 === r.type)
                null == r.gasPrice && (r.gasPrice = this.getGasPrice());
              else {
                const t = yield this.getFeeData();
                if (null == r.type)
                  if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                    if (((r.type = 2), null != r.gasPrice)) {
                      const t = r.gasPrice;
                      (delete r.gasPrice,
                        (r.maxFeePerGas = t),
                        (r.maxPriorityFeePerGas = t));
                    } else
                      (null == r.maxFeePerGas &&
                        (r.maxFeePerGas = t.maxFeePerGas),
                        null == r.maxPriorityFeePerGas &&
                          (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
                  else
                    null != t.gasPrice
                      ? (e &&
                          h.throwError(
                            "network does not support EIP-1559",
                            n.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "populateTransaction" },
                          ),
                        null == r.gasPrice && (r.gasPrice = t.gasPrice),
                        (r.type = 0))
                      : h.throwError(
                          "failed to get consistent fee data",
                          n.Logger.errors.UNSUPPORTED_OPERATION,
                          { operation: "signer.getFeeData" },
                        );
                else
                  2 === r.type &&
                    (null == r.maxFeePerGas &&
                      (r.maxFeePerGas = t.maxFeePerGas),
                    null == r.maxPriorityFeePerGas &&
                      (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
              }
            else r.type = 2;
            return (
              null == r.nonce &&
                (r.nonce = this.getTransactionCount("pending")),
              null == r.gasLimit &&
                (r.gasLimit = this.estimateGas(r).catch((t) => {
                  if (a.indexOf(t.code) >= 0) throw t;
                  return h.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    n.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: t, tx: r },
                  );
                })),
              null == r.chainId
                ? (r.chainId = this.getChainId())
                : (r.chainId = Promise.all([
                    Promise.resolve(r.chainId),
                    this.getChainId(),
                  ]).then(
                    (r) => (
                      0 !== r[1] &&
                        r[0] !== r[1] &&
                        h.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          t,
                        ),
                      r[0]
                    ),
                  )),
              yield (0, i.resolveProperties)(r)
            );
          });
        }
        _checkProvider(t) {
          this.provider ||
            h.throwError(
              "missing provider",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: t || "_checkProvider" },
            );
        }
        static isSigner(t) {
          return !(!t || !t._isSigner);
        }
      }
      r.Signer = Signer;
      class VoidSigner extends Signer {
        constructor(t, r) {
          (super(),
            (0, i.defineReadOnly)(this, "address", t),
            (0, i.defineReadOnly)(this, "provider", r || null));
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(t, r) {
          return Promise.resolve().then(() => {
            h.throwError(t, n.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: r,
            });
          });
        }
        signMessage(t) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(t) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction",
          );
        }
        _signTypedData(t, r, e) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData",
          );
        }
        connect(t) {
          return new VoidSigner(this.address, t);
        }
      }
      r.VoidSigner = VoidSigner;
    },
    1338: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Description = void 0),
        (r.checkProperties = l),
        (r.deepCopy = d),
        (r.defineReadOnly = h),
        (r.getStatic = u),
        (r.resolveProperties = a),
        (r.shallowCopy = m));
      var i = e(491),
        n = e(1340),
        o = function (t, r, e, i) {
          function n(t) {
            return t instanceof e
              ? t
              : new e(function (r) {
                  r(t);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function s(t) {
              try {
                u(i.next(t));
              } catch (r) {
                o(r);
              }
            }
            function h(t) {
              try {
                u(i["throw"](t));
              } catch (r) {
                o(r);
              }
            }
            function u(t) {
              t.done ? e(t.value) : n(t.value).then(s, h);
            }
            u((i = i.apply(t, r || [])).next());
          });
        };
      const s = new i.Logger(n.version);
      function h(t, r, e) {
        Object.defineProperty(t, r, { enumerable: !0, value: e, writable: !1 });
      }
      function u(t, r) {
        for (let e = 0; e < 32; e++) {
          if (t[r]) return t[r];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function a(t) {
        return o(this, void 0, void 0, function* () {
          const r = Object.keys(t).map((r) => {
              const e = t[r];
              return Promise.resolve(e).then((t) => ({ key: r, value: t }));
            }),
            e = yield Promise.all(r);
          return e.reduce((t, r) => ((t[r.key] = r.value), t), {});
        });
      }
      function l(t, r) {
        ((t && "object" === typeof t) ||
          s.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((e) => {
            r[e] ||
              s.throwArgumentError(
                "invalid object key - " + e,
                "transaction:" + e,
                t,
              );
          }));
      }
      function m(t) {
        const r = {};
        for (const e in t) r[e] = t[e];
        return r;
      }
      const f = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function c(t) {
        if (void 0 === t || null === t || f[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const e = Object.keys(t);
          for (let i = 0; i < e.length; i++) {
            let n = null;
            try {
              n = t[e[i]];
            } catch (r) {
              continue;
            }
            if (!c(n)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function g(t) {
        if (c(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => d(t)));
        if ("object" === typeof t) {
          const r = {};
          for (const e in t) {
            const i = t[e];
            void 0 !== i && h(r, e, d(i));
          }
          return r;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function d(t) {
        return g(t);
      }
      class Description {
        constructor(t) {
          for (const r in t) this[r] = d(t[r]);
        }
      }
      r.Description = Description;
    },
    1339: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1340: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "properties/5.8.0";
    },
    1341: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "abstract-signer/5.7.0";
    },
    145: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = m),
        (r.concat = f),
        (r.hexConcat = M),
        (r.hexDataLength = w),
        (r.hexDataSlice = y),
        (r.hexStripZeros = b),
        (r.hexValue = E),
        (r.hexZeroPad = N),
        (r.hexlify = v),
        (r.isBytes = l),
        (r.isBytesLike = u),
        (r.isHexString = d),
        (r.joinSignature = A),
        (r.splitSignature = _),
        (r.stripZeros = c),
        (r.zeroPad = g));
      var i = e(146),
        n = e(1516);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function h(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return h(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function u(t) {
        return (d(t) && !(t.length % 2)) || l(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function l(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          const e = t[r];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function m(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), h(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          d(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
                ? (e += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return h(new Uint8Array(i));
        }
        return l(t)
          ? h(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function f(t) {
        const r = t.map((t) => m(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), h(i));
      }
      function c(t) {
        let r = m(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function g(t, r) {
        ((t = m(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), h(e));
      }
      function d(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const p = "0123456789abcdef";
      function v(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = p[15 & t] + r), (t = Math.floor(t / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += p[(240 & i) >> 4] + p[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function w(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!d(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function M(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += v(t).substring(2);
          }),
          r
        );
      }
      function E(t) {
        const r = b(v(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function b(t) {
        ("string" !== typeof t && (t = v(t)),
          d(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function N(t, r) {
        ("string" !== typeof t
          ? (t = v(t))
          : d(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function _(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (u(t)) {
          let e = m(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = v(e.slice(0, 32))),
              (r.s = v(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = v(e.slice(0, 32))),
                (r.s = v(e.slice(32, 64))),
                (r.v = e[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (e[32] |= 128),
            (r._vs = v(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = g(m(r._vs), 32);
            r._vs = v(e);
            const i = e[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (e[0] &= 127));
            const n = v(e);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== e &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != r.r && d(r.r)
            ? (r.r = N(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && d(r.s)
              ? (r.s = N(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = m(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = v(e);
          (r._vs &&
            (d(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = N(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function A(t) {
        return (
          (t = _(t)),
          v(f([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    146: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1515);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let h = s["default"],
        u = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const l = a();
      var m, f;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(m || (r.LogLevel = m = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(f || (r.ErrorCode = f = {})));
      const c = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            h > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += c[r[t] >> 4]), (e += c[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (h) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case f.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
                  break;
              }
              break;
            }
            case f.CALL_EXCEPTION:
            case f.INSUFFICIENT_FUNDS:
            case f.MISSING_NEW:
            case f.NONCE_EXPIRED:
            case f.REPLACEMENT_UNDERPRICED:
            case f.TRANSACTION_REPLACED:
            case f.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const h = new Error(t);
          return (
            (h.reason = n),
            (h.code = r),
            Object.keys(e).forEach(function (t) {
              h[t] = e[t];
            }),
            h
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (u || (u = new Logger(i.version)), u);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (h = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = f), (Logger.levels = m));
    },
    1514: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getAddress = p),
        (r.getContractAddress = y),
        (r.getCreate2Address = M),
        (r.getIcapAddress = w),
        (r.isAddress = v));
      var i = e(145),
        n = e(1517),
        o = e(1521),
        s = e(1522),
        h = e(146),
        u = e(1524);
      const a = new h.Logger(u.version);
      function l(t) {
        ((0, i.isHexString)(t, 20) ||
          a.throwArgumentError("invalid address", "address", t),
          (t = t.toLowerCase()));
        const r = t.substring(2).split(""),
          e = new Uint8Array(40);
        for (let i = 0; i < 40; i++) e[i] = r[i].charCodeAt(0);
        const n = (0, i.arrayify)((0, o.keccak256)(e));
        for (let i = 0; i < 40; i += 2)
          (n[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()),
            (15 & n[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase()));
        return "0x" + r.join("");
      }
      const m = 9007199254740991;
      function f(t) {
        return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
      }
      const c = {};
      for (let E = 0; E < 10; E++) c[String(E)] = String(E);
      for (let E = 0; E < 26; E++)
        c[String.fromCharCode(65 + E)] = String(10 + E);
      const g = Math.floor(f(m));
      function d(t) {
        ((t = t.toUpperCase()),
          (t = t.substring(4) + t.substring(0, 2) + "00"));
        let r = t
          .split("")
          .map((t) => c[t])
          .join("");
        while (r.length >= g) {
          let t = r.substring(0, g);
          r = (parseInt(t, 10) % 97) + r.substring(t.length);
        }
        let e = String(98 - (parseInt(r, 10) % 97));
        while (e.length < 2) e = "0" + e;
        return e;
      }
      function p(t) {
        let r = null;
        if (
          ("string" !== typeof t &&
            a.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            (r = l(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              r !== t &&
              a.throwArgumentError("bad address checksum", "address", t));
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (t.substring(2, 4) !== d(t) &&
            a.throwArgumentError("bad icap checksum", "address", t),
            (r = (0, n._base36To16)(t.substring(4))));
          while (r.length < 40) r = "0" + r;
          r = l("0x" + r);
        } else a.throwArgumentError("invalid address", "address", t);
        return r;
      }
      function v(t) {
        try {
          return (p(t), !0);
        } catch (r) {}
        return !1;
      }
      function w(t) {
        let r = (0, n._base16To36)(p(t).substring(2)).toUpperCase();
        while (r.length < 30) r = "0" + r;
        return "XE" + d("XE00" + r) + r;
      }
      function y(t) {
        let r = null;
        try {
          r = p(t.from);
        } catch (h) {
          a.throwArgumentError("missing from address", "transaction", t);
        }
        const e = (0, i.stripZeros)(
          (0, i.arrayify)(n.BigNumber.from(t.nonce).toHexString()),
        );
        return p(
          (0, i.hexDataSlice)((0, o.keccak256)((0, s.encode)([r, e])), 12),
        );
      }
      function M(t, r, e) {
        return (
          32 !== (0, i.hexDataLength)(r) &&
            a.throwArgumentError("salt must be 32 bytes", "salt", r),
          32 !== (0, i.hexDataLength)(e) &&
            a.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              e,
            ),
          p(
            (0, i.hexDataSlice)(
              (0, o.keccak256)((0, i.concat)(["0xff", p(t), r, e])),
              12,
            ),
          )
        );
      }
    },
    1515: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1516: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1517: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BigNumber", {
          enumerable: !0,
          get: function () {
            return i.BigNumber;
          },
        }),
        Object.defineProperty(r, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return n.FixedFormat;
          },
        }),
        Object.defineProperty(r, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return n.FixedNumber;
          },
        }),
        Object.defineProperty(r, "_base16To36", {
          enumerable: !0,
          get: function () {
            return i._base16To36;
          },
        }),
        Object.defineProperty(r, "_base36To16", {
          enumerable: !0,
          get: function () {
            return i._base36To16;
          },
        }),
        Object.defineProperty(r, "formatFixed", {
          enumerable: !0,
          get: function () {
            return n.formatFixed;
          },
        }),
        Object.defineProperty(r, "parseFixed", {
          enumerable: !0,
          get: function () {
            return n.parseFixed;
          },
        }));
      var i = e(538),
        n = e(1520);
    },
    1518: function (t, r, e) {
      (function (t) {
        (function (t, r) {
          "use strict";
          function i(t, r) {
            if (!t) throw new Error(r || "Assertion failed");
          }
          function n(t, r) {
            t.super_ = r;
            var e = function () {};
            ((e.prototype = r.prototype),
              (t.prototype = new e()),
              (t.prototype.constructor = t));
          }
          function o(t, r, e) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== r && "be" !== r) || ((e = r), (r = 10)),
                this._init(t || 0, r || 10, e || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (r.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : e(1519).Buffer;
          } catch (I) {}
          function h(t, r) {
            var e = t.charCodeAt(r);
            return e >= 48 && e <= 57
              ? e - 48
              : e >= 65 && e <= 70
                ? e - 55
                : e >= 97 && e <= 102
                  ? e - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function u(t, r, e) {
            var i = h(t, e);
            return (e - 1 >= r && (i |= h(t, e - 1) << 4), i);
          }
          function a(t, r, e, n) {
            for (
              var o = 0, s = 0, h = Math.min(t.length, e), u = r;
              u < h;
              u++
            ) {
              var a = t.charCodeAt(u) - 48;
              ((o *= n),
                (s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                i(a >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, r) {
            ((t.words = r.words),
              (t.length = r.length),
              (t.negative = r.negative),
              (t.red = r.red));
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, r) {
              return t.cmp(r) > 0 ? t : r;
            }),
            (o.min = function (t, r) {
              return t.cmp(r) < 0 ? t : r;
            }),
            (o.prototype._init = function (t, r, e) {
              if ("number" === typeof t) return this._initNumber(t, r, e);
              if ("object" === typeof t) return this._initArray(t, r, e);
              ("hex" === r && (r = 16),
                i(r === (0 | r) && r >= 2 && r <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === r
                    ? this._parseHex(t, n, e)
                    : (this._parseBase(t, r, n),
                      "le" === e && this._initArray(this.toArray(), r, e))));
            }),
            (o.prototype._initNumber = function (t, r, e) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (i(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === e && this._initArray(this.toArray(), r, e));
            }),
            (o.prototype._initArray = function (t, r, e) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                h = 0;
              if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, r, e) {
              ((this.length = Math.ceil((t.length - r) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === e)
                for (i = t.length - 1; i >= r; i -= 2)
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var h = t.length - r;
                for (i = h % 2 === 0 ? r + 1 : r; i < t.length; i += 2)
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, r, e) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
              (i--, (n = (n / r) | 0));
              for (
                var o = t.length - e,
                  s = o % i,
                  h = Math.min(o, o - s) + e,
                  u = 0,
                  l = e;
                l < h;
                l += i
              )
                ((u = a(t, l, l + i, r)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var m = 1;
                for (u = a(t, l, t.length, r), l = 0; l < s; l++) m *= r;
                (this.imuln(m),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = m;
            } catch (I) {
              o.prototype.inspect = m;
            }
          else o.prototype.inspect = m;
          function m() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var f = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            c = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            g = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, r) {
            var e;
            if (((t = t || 10), (r = 0 | r || 1), 16 === t || "hex" === t)) {
              e = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var h = this.words[s],
                  u = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (e =
                    0 !== o || s !== this.length - 1
                      ? f[6 - u.length] + u + e
                      : u + e));
              }
              0 !== o && (e = o.toString(16) + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = c[t],
                l = g[t];
              e = "";
              var m = this.clone();
              m.negative = 0;
              while (!m.isZero()) {
                var d = m.modrn(l).toString(t);
                ((m = m.idivn(l)),
                  (e = m.isZero() ? d + e : f[a - d.length] + d + e));
              }
              this.isZero() && (e = "0" + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            i(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      i(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, r) {
                return this.toArrayLike(s, t, r);
              }),
            (o.prototype.toArray = function (t, r) {
              return this.toArrayLike(Array, t, r);
            }));
          var d = function (t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
          };
          function p(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
              var i = (e / 26) | 0,
                n = e % 26;
              r[e] = (t.words[i] >>> n) & 1;
            }
            return r;
          }
          function v(t, r, e) {
            e.negative = r.negative ^ t.negative;
            var i = (t.length + r.length) | 0;
            ((e.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | r.words[0],
              s = n * o,
              h = 67108863 & s,
              u = (s / 67108864) | 0;
            e.words[0] = h;
            for (var a = 1; a < i; a++) {
              for (
                var l = u >>> 26,
                  m = 67108863 & u,
                  f = Math.min(a, r.length - 1),
                  c = Math.max(0, a - t.length + 1);
                c <= f;
                c++
              ) {
                var g = (a - c) | 0;
                ((n = 0 | t.words[g]),
                  (o = 0 | r.words[c]),
                  (s = n * o + m),
                  (l += (s / 67108864) | 0),
                  (m = 67108863 & s));
              }
              ((e.words[a] = 0 | m), (u = 0 | l));
            }
            return (0 !== u ? (e.words[a] = 0 | u) : e.length--, e._strip());
          }
          ((o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = d(t, o),
              h = "le" === r ? "LE" : "BE";
            return (this["_toArrayLike" + h](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, r) {
              for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[e++] = 255 & s),
                  e < t.length && (t[e++] = (s >> 8) & 255),
                  e < t.length && (t[e++] = (s >> 16) & 255),
                  6 === o
                    ? (e < t.length && (t[e++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e < t.length) {
                t[e++] = i;
                while (e < t.length) t[e++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, r) {
              for (
                var e = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[e--] = 255 & s),
                  e >= 0 && (t[e--] = (s >> 8) & 255),
                  e >= 0 && (t[e--] = (s >> 16) & 255),
                  6 === o
                    ? (e >= 0 && (t[e--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e >= 0) {
                t[e--] = i;
                while (e >= 0) t[e--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var r = t,
                    e = 0;
                  return (
                    r >= 4096 && ((e += 13), (r >>>= 13)),
                    r >= 64 && ((e += 7), (r >>>= 7)),
                    r >= 8 && ((e += 4), (r >>>= 4)),
                    r >= 2 && ((e += 2), (r >>>= 2)),
                    e + r
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var r = t,
                e = 0;
              return (
                0 === (8191 & r) && ((e += 13), (r >>>= 13)),
                0 === (127 & r) && ((e += 7), (r >>>= 7)),
                0 === (15 & r) && ((e += 4), (r >>>= 4)),
                0 === (3 & r) && ((e += 2), (r >>>= 2)),
                0 === (1 & r) && e++,
                e
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                r = this._countBits(t);
              return 26 * (this.length - 1) + r;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, r = 0; r < this.length; r++) {
                var e = this._zeroBits(this.words[r]);
                if (((t += e), 26 !== e)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] | t.words[r];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var r;
              r = this.length > t.length ? t : this;
              for (var e = 0; e < r.length; e++)
                this.words[e] = this.words[e] & t.words[e];
              return ((this.length = r.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var r, e;
              this.length > t.length
                ? ((r = this), (e = t))
                : ((r = t), (e = this));
              for (var i = 0; i < e.length; i++)
                this.words[i] = r.words[i] ^ e.words[i];
              if (this !== r)
                for (; i < r.length; i++) this.words[i] = r.words[i];
              return ((this.length = r.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = 0 | Math.ceil(t / 26),
                e = t % 26;
              (this._expand(r), e > 0 && r--);
              for (var n = 0; n < r; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                e > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - e))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, r) {
              i("number" === typeof t && t >= 0);
              var e = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(e + 1),
                (this.words[e] = r
                  ? this.words[e] | (1 << n)
                  : this.words[e] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var r, e, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (r = this.isub(t)),
                  (t.negative = 1),
                  r._normSign()
                );
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              for (; 0 !== n && o < e.length; o++)
                ((r = (0 | e.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              if (((this.length = e.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (e !== this)
                for (; o < e.length; o++) this.words[o] = e.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var r;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (r = t.sub(this)),
                    (this.negative = 1),
                    r)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var r = this.iadd(t);
                return ((t.negative = 1), r._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var e,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((e = this), (i = t)) : ((e = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((r = (0 | e.words[s]) - (0 | i.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              for (; 0 !== o && s < e.length; s++)
                ((r = (0 | e.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              if (0 === o && s < e.length && e !== this)
                for (; s < e.length; s++) this.words[s] = e.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                e !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var w = function (t, r, e) {
            var i,
              n,
              o,
              s = t.words,
              h = r.words,
              u = e.words,
              a = 0,
              l = 0 | s[0],
              m = 8191 & l,
              f = l >>> 13,
              c = 0 | s[1],
              g = 8191 & c,
              d = c >>> 13,
              p = 0 | s[2],
              v = 8191 & p,
              w = p >>> 13,
              y = 0 | s[3],
              M = 8191 & y,
              E = y >>> 13,
              b = 0 | s[4],
              N = 8191 & b,
              _ = b >>> 13,
              A = 0 | s[5],
              R = 8191 & A,
              P = A >>> 13,
              x = 0 | s[6],
              S = 8191 & x,
              I = x >>> 13,
              O = 0 | s[7],
              L = 8191 & O,
              T = O >>> 13,
              U = 0 | s[8],
              F = 8191 & U,
              C = U >>> 13,
              k = 0 | s[9],
              D = 8191 & k,
              B = k >>> 13,
              G = 0 | h[0],
              j = 8191 & G,
              V = G >>> 13,
              z = 0 | h[1],
              Z = 8191 & z,
              q = z >>> 13,
              W = 0 | h[2],
              H = 8191 & W,
              X = W >>> 13,
              K = 0 | h[3],
              J = 8191 & K,
              $ = K >>> 13,
              Q = 0 | h[4],
              Y = 8191 & Q,
              tt = Q >>> 13,
              rt = 0 | h[5],
              et = 8191 & rt,
              it = rt >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              ut = 8191 & ht,
              at = ht >>> 13,
              lt = 0 | h[8],
              mt = 8191 & lt,
              ft = lt >>> 13,
              ct = 0 | h[9],
              gt = 8191 & ct,
              dt = ct >>> 13;
            ((e.negative = t.negative ^ r.negative),
              (e.length = 19),
              (i = Math.imul(m, j)),
              (n = Math.imul(m, V)),
              (n = (n + Math.imul(f, j)) | 0),
              (o = Math.imul(f, V)));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(g, j)),
              (n = Math.imul(g, V)),
              (n = (n + Math.imul(d, j)) | 0),
              (o = Math.imul(d, V)),
              (i = (i + Math.imul(m, Z)) | 0),
              (n = (n + Math.imul(m, q)) | 0),
              (n = (n + Math.imul(f, Z)) | 0),
              (o = (o + Math.imul(f, q)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, j)),
              (n = Math.imul(v, V)),
              (n = (n + Math.imul(w, j)) | 0),
              (o = Math.imul(w, V)),
              (i = (i + Math.imul(g, Z)) | 0),
              (n = (n + Math.imul(g, q)) | 0),
              (n = (n + Math.imul(d, Z)) | 0),
              (o = (o + Math.imul(d, q)) | 0),
              (i = (i + Math.imul(m, H)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (n = (n + Math.imul(f, H)) | 0),
              (o = (o + Math.imul(f, X)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(M, j)),
              (n = Math.imul(M, V)),
              (n = (n + Math.imul(E, j)) | 0),
              (o = Math.imul(E, V)),
              (i = (i + Math.imul(v, Z)) | 0),
              (n = (n + Math.imul(v, q)) | 0),
              (n = (n + Math.imul(w, Z)) | 0),
              (o = (o + Math.imul(w, q)) | 0),
              (i = (i + Math.imul(g, H)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (n = (n + Math.imul(d, H)) | 0),
              (o = (o + Math.imul(d, X)) | 0),
              (i = (i + Math.imul(m, J)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (n = (n + Math.imul(f, J)) | 0),
              (o = (o + Math.imul(f, $)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(N, j)),
              (n = Math.imul(N, V)),
              (n = (n + Math.imul(_, j)) | 0),
              (o = Math.imul(_, V)),
              (i = (i + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(E, Z)) | 0),
              (o = (o + Math.imul(E, q)) | 0),
              (i = (i + Math.imul(v, H)) | 0),
              (n = (n + Math.imul(v, X)) | 0),
              (n = (n + Math.imul(w, H)) | 0),
              (o = (o + Math.imul(w, X)) | 0),
              (i = (i + Math.imul(g, J)) | 0),
              (n = (n + Math.imul(g, $)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (o = (o + Math.imul(d, $)) | 0),
              (i = (i + Math.imul(m, Y)) | 0),
              (n = (n + Math.imul(m, tt)) | 0),
              (n = (n + Math.imul(f, Y)) | 0),
              (o = (o + Math.imul(f, tt)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(R, j)),
              (n = Math.imul(R, V)),
              (n = (n + Math.imul(P, j)) | 0),
              (o = Math.imul(P, V)),
              (i = (i + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(N, q)) | 0),
              (n = (n + Math.imul(_, Z)) | 0),
              (o = (o + Math.imul(_, q)) | 0),
              (i = (i + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(E, H)) | 0),
              (o = (o + Math.imul(E, X)) | 0),
              (i = (i + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(v, $)) | 0),
              (n = (n + Math.imul(w, J)) | 0),
              (o = (o + Math.imul(w, $)) | 0),
              (i = (i + Math.imul(g, Y)) | 0),
              (n = (n + Math.imul(g, tt)) | 0),
              (n = (n + Math.imul(d, Y)) | 0),
              (o = (o + Math.imul(d, tt)) | 0),
              (i = (i + Math.imul(m, et)) | 0),
              (n = (n + Math.imul(m, it)) | 0),
              (n = (n + Math.imul(f, et)) | 0),
              (o = (o + Math.imul(f, it)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(S, j)),
              (n = Math.imul(S, V)),
              (n = (n + Math.imul(I, j)) | 0),
              (o = Math.imul(I, V)),
              (i = (i + Math.imul(R, Z)) | 0),
              (n = (n + Math.imul(R, q)) | 0),
              (n = (n + Math.imul(P, Z)) | 0),
              (o = (o + Math.imul(P, q)) | 0),
              (i = (i + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (n = (n + Math.imul(_, H)) | 0),
              (o = (o + Math.imul(_, X)) | 0),
              (i = (i + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (o = (o + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (o = (o + Math.imul(w, tt)) | 0),
              (i = (i + Math.imul(g, et)) | 0),
              (n = (n + Math.imul(g, it)) | 0),
              (n = (n + Math.imul(d, et)) | 0),
              (o = (o + Math.imul(d, it)) | 0),
              (i = (i + Math.imul(m, ot)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (n = (n + Math.imul(f, ot)) | 0),
              (o = (o + Math.imul(f, st)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(L, j)),
              (n = Math.imul(L, V)),
              (n = (n + Math.imul(T, j)) | 0),
              (o = Math.imul(T, V)),
              (i = (i + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(S, q)) | 0),
              (n = (n + Math.imul(I, Z)) | 0),
              (o = (o + Math.imul(I, q)) | 0),
              (i = (i + Math.imul(R, H)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(P, H)) | 0),
              (o = (o + Math.imul(P, X)) | 0),
              (i = (i + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (o = (o + Math.imul(_, $)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (o = (o + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(v, et)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(w, et)) | 0),
              (o = (o + Math.imul(w, it)) | 0),
              (i = (i + Math.imul(g, ot)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0),
              (i = (i + Math.imul(m, ut)) | 0),
              (n = (n + Math.imul(m, at)) | 0),
              (n = (n + Math.imul(f, ut)) | 0),
              (o = (o + Math.imul(f, at)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(F, j)),
              (n = Math.imul(F, V)),
              (n = (n + Math.imul(C, j)) | 0),
              (o = Math.imul(C, V)),
              (i = (i + Math.imul(L, Z)) | 0),
              (n = (n + Math.imul(L, q)) | 0),
              (n = (n + Math.imul(T, Z)) | 0),
              (o = (o + Math.imul(T, q)) | 0),
              (i = (i + Math.imul(S, H)) | 0),
              (n = (n + Math.imul(S, X)) | 0),
              (n = (n + Math.imul(I, H)) | 0),
              (o = (o + Math.imul(I, X)) | 0),
              (i = (i + Math.imul(R, J)) | 0),
              (n = (n + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (o = (o + Math.imul(P, $)) | 0),
              (i = (i + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(_, Y)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (i = (i + Math.imul(M, et)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(E, et)) | 0),
              (o = (o + Math.imul(E, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(w, ot)) | 0),
              (o = (o + Math.imul(w, st)) | 0),
              (i = (i + Math.imul(g, ut)) | 0),
              (n = (n + Math.imul(g, at)) | 0),
              (n = (n + Math.imul(d, ut)) | 0),
              (o = (o + Math.imul(d, at)) | 0),
              (i = (i + Math.imul(m, mt)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (n = (n + Math.imul(f, mt)) | 0),
              (o = (o + Math.imul(f, ft)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(D, j)),
              (n = Math.imul(D, V)),
              (n = (n + Math.imul(B, j)) | 0),
              (o = Math.imul(B, V)),
              (i = (i + Math.imul(F, Z)) | 0),
              (n = (n + Math.imul(F, q)) | 0),
              (n = (n + Math.imul(C, Z)) | 0),
              (o = (o + Math.imul(C, q)) | 0),
              (i = (i + Math.imul(L, H)) | 0),
              (n = (n + Math.imul(L, X)) | 0),
              (n = (n + Math.imul(T, H)) | 0),
              (o = (o + Math.imul(T, X)) | 0),
              (i = (i + Math.imul(S, J)) | 0),
              (n = (n + Math.imul(S, $)) | 0),
              (n = (n + Math.imul(I, J)) | 0),
              (o = (o + Math.imul(I, $)) | 0),
              (i = (i + Math.imul(R, Y)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (i = (i + Math.imul(N, et)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(_, et)) | 0),
              (o = (o + Math.imul(_, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (o = (o + Math.imul(E, st)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(w, ut)) | 0),
              (o = (o + Math.imul(w, at)) | 0),
              (i = (i + Math.imul(g, mt)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (o = (o + Math.imul(d, ft)) | 0),
              (i = (i + Math.imul(m, gt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (n = (n + Math.imul(f, gt)) | 0),
              (o = (o + Math.imul(f, dt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(D, Z)),
              (n = Math.imul(D, q)),
              (n = (n + Math.imul(B, Z)) | 0),
              (o = Math.imul(B, q)),
              (i = (i + Math.imul(F, H)) | 0),
              (n = (n + Math.imul(F, X)) | 0),
              (n = (n + Math.imul(C, H)) | 0),
              (o = (o + Math.imul(C, X)) | 0),
              (i = (i + Math.imul(L, J)) | 0),
              (n = (n + Math.imul(L, $)) | 0),
              (n = (n + Math.imul(T, J)) | 0),
              (o = (o + Math.imul(T, $)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (n = (n + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, tt)) | 0),
              (i = (i + Math.imul(R, et)) | 0),
              (n = (n + Math.imul(R, it)) | 0),
              (n = (n + Math.imul(P, et)) | 0),
              (o = (o + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (i = (i + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (o = (o + Math.imul(E, at)) | 0),
              (i = (i + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(w, mt)) | 0),
              (o = (o + Math.imul(w, ft)) | 0),
              (i = (i + Math.imul(g, gt)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (n = (n + Math.imul(d, gt)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(D, H)),
              (n = Math.imul(D, X)),
              (n = (n + Math.imul(B, H)) | 0),
              (o = Math.imul(B, X)),
              (i = (i + Math.imul(F, J)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (n = (n + Math.imul(C, J)) | 0),
              (o = (o + Math.imul(C, $)) | 0),
              (i = (i + Math.imul(L, Y)) | 0),
              (n = (n + Math.imul(L, tt)) | 0),
              (n = (n + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (i = (i + Math.imul(S, et)) | 0),
              (n = (n + Math.imul(S, it)) | 0),
              (n = (n + Math.imul(I, et)) | 0),
              (o = (o + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(R, ot)) | 0),
              (n = (n + Math.imul(R, st)) | 0),
              (n = (n + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (i = (i + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(_, ut)) | 0),
              (o = (o + Math.imul(_, at)) | 0),
              (i = (i + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (o = (o + Math.imul(E, ft)) | 0),
              (i = (i + Math.imul(v, gt)) | 0),
              (n = (n + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(w, gt)) | 0),
              (o = (o + Math.imul(w, dt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(D, J)),
              (n = Math.imul(D, $)),
              (n = (n + Math.imul(B, J)) | 0),
              (o = Math.imul(B, $)),
              (i = (i + Math.imul(F, Y)) | 0),
              (n = (n + Math.imul(F, tt)) | 0),
              (n = (n + Math.imul(C, Y)) | 0),
              (o = (o + Math.imul(C, tt)) | 0),
              (i = (i + Math.imul(L, et)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (n = (n + Math.imul(T, et)) | 0),
              (o = (o + Math.imul(T, it)) | 0),
              (i = (i + Math.imul(S, ot)) | 0),
              (n = (n + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (o = (o + Math.imul(I, st)) | 0),
              (i = (i + Math.imul(R, ut)) | 0),
              (n = (n + Math.imul(R, at)) | 0),
              (n = (n + Math.imul(P, ut)) | 0),
              (o = (o + Math.imul(P, at)) | 0),
              (i = (i + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(_, mt)) | 0),
              (o = (o + Math.imul(_, ft)) | 0),
              (i = (i + Math.imul(M, gt)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(E, gt)) | 0),
              (o = (o + Math.imul(E, dt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(D, Y)),
              (n = Math.imul(D, tt)),
              (n = (n + Math.imul(B, Y)) | 0),
              (o = Math.imul(B, tt)),
              (i = (i + Math.imul(F, et)) | 0),
              (n = (n + Math.imul(F, it)) | 0),
              (n = (n + Math.imul(C, et)) | 0),
              (o = (o + Math.imul(C, it)) | 0),
              (i = (i + Math.imul(L, ot)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (i = (i + Math.imul(S, ut)) | 0),
              (n = (n + Math.imul(S, at)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (o = (o + Math.imul(I, at)) | 0),
              (i = (i + Math.imul(R, mt)) | 0),
              (n = (n + Math.imul(R, ft)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (o = (o + Math.imul(P, ft)) | 0),
              (i = (i + Math.imul(N, gt)) | 0),
              (n = (n + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(_, gt)) | 0),
              (o = (o + Math.imul(_, dt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(D, et)),
              (n = Math.imul(D, it)),
              (n = (n + Math.imul(B, et)) | 0),
              (o = Math.imul(B, it)),
              (i = (i + Math.imul(F, ot)) | 0),
              (n = (n + Math.imul(F, st)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (o = (o + Math.imul(C, st)) | 0),
              (i = (i + Math.imul(L, ut)) | 0),
              (n = (n + Math.imul(L, at)) | 0),
              (n = (n + Math.imul(T, ut)) | 0),
              (o = (o + Math.imul(T, at)) | 0),
              (i = (i + Math.imul(S, mt)) | 0),
              (n = (n + Math.imul(S, ft)) | 0),
              (n = (n + Math.imul(I, mt)) | 0),
              (o = (o + Math.imul(I, ft)) | 0),
              (i = (i + Math.imul(R, gt)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (n = (n + Math.imul(P, gt)) | 0),
              (o = (o + Math.imul(P, dt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(D, ot)),
              (n = Math.imul(D, st)),
              (n = (n + Math.imul(B, ot)) | 0),
              (o = Math.imul(B, st)),
              (i = (i + Math.imul(F, ut)) | 0),
              (n = (n + Math.imul(F, at)) | 0),
              (n = (n + Math.imul(C, ut)) | 0),
              (o = (o + Math.imul(C, at)) | 0),
              (i = (i + Math.imul(L, mt)) | 0),
              (n = (n + Math.imul(L, ft)) | 0),
              (n = (n + Math.imul(T, mt)) | 0),
              (o = (o + Math.imul(T, ft)) | 0),
              (i = (i + Math.imul(S, gt)) | 0),
              (n = (n + Math.imul(S, dt)) | 0),
              (n = (n + Math.imul(I, gt)) | 0),
              (o = (o + Math.imul(I, dt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(D, ut)),
              (n = Math.imul(D, at)),
              (n = (n + Math.imul(B, ut)) | 0),
              (o = Math.imul(B, at)),
              (i = (i + Math.imul(F, mt)) | 0),
              (n = (n + Math.imul(F, ft)) | 0),
              (n = (n + Math.imul(C, mt)) | 0),
              (o = (o + Math.imul(C, ft)) | 0),
              (i = (i + Math.imul(L, gt)) | 0),
              (n = (n + Math.imul(L, dt)) | 0),
              (n = (n + Math.imul(T, gt)) | 0),
              (o = (o + Math.imul(T, dt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(D, mt)),
              (n = Math.imul(D, ft)),
              (n = (n + Math.imul(B, mt)) | 0),
              (o = Math.imul(B, ft)),
              (i = (i + Math.imul(F, gt)) | 0),
              (n = (n + Math.imul(F, dt)) | 0),
              (n = (n + Math.imul(C, gt)) | 0),
              (o = (o + Math.imul(C, dt)) | 0));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (i = Math.imul(D, gt)),
              (n = Math.imul(D, dt)),
              (n = (n + Math.imul(B, gt)) | 0),
              (o = Math.imul(B, dt)));
            var Ut = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (u[0] = pt),
              (u[1] = vt),
              (u[2] = wt),
              (u[3] = yt),
              (u[4] = Mt),
              (u[5] = Et),
              (u[6] = bt),
              (u[7] = Nt),
              (u[8] = _t),
              (u[9] = At),
              (u[10] = Rt),
              (u[11] = Pt),
              (u[12] = xt),
              (u[13] = St),
              (u[14] = It),
              (u[15] = Ot),
              (u[16] = Lt),
              (u[17] = Tt),
              (u[18] = Ut),
              0 !== a && ((u[19] = a), e.length++),
              e
            );
          };
          function y(t, r, e) {
            ((e.negative = r.negative ^ t.negative),
              (e.length = t.length + r.length));
            for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var h = 67108863 & i,
                  u = Math.min(o, r.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var l = o - a,
                  m = 0 | t.words[l],
                  f = 0 | r.words[a],
                  c = m * f,
                  g = 67108863 & c;
                ((s = (s + ((c / 67108864) | 0)) | 0),
                  (g = (g + h) | 0),
                  (h = 67108863 & g),
                  (s = (s + (g >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((e.words[o] = h), (i = s), (s = n));
            }
            return (0 !== i ? (e.words[o] = i) : e.length--, e._strip());
          }
          function M(t, r, e) {
            return y(t, r, e);
          }
          function E(t, r) {
            ((this.x = t), (this.y = r));
          }
          (Math.imul || (w = v),
            (o.prototype.mulTo = function (t, r) {
              var e,
                i = this.length + t.length;
              return (
                (e =
                  10 === this.length && 10 === t.length
                    ? w(this, t, r)
                    : i < 63
                      ? v(this, t, r)
                      : i < 1024
                        ? y(this, t, r)
                        : M(this, t, r)),
                e
              );
            }),
            (E.prototype.makeRBT = function (t) {
              for (
                var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                r[i] = this.revBin(i, e, t);
              return r;
            }),
            (E.prototype.revBin = function (t, r, e) {
              if (0 === t || t === e - 1) return t;
              for (var i = 0, n = 0; n < r; n++)
                ((i |= (1 & t) << (r - n - 1)), (t >>= 1));
              return i;
            }),
            (E.prototype.permute = function (t, r, e, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = r[t[s]]), (n[s] = e[t[s]]));
            }),
            (E.prototype.transform = function (t, r, e, i, n, o) {
              this.permute(o, t, r, e, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var h = s << 1,
                    u = Math.cos((2 * Math.PI) / h),
                    a = Math.sin((2 * Math.PI) / h),
                    l = 0;
                  l < n;
                  l += h
                )
                  for (var m = u, f = a, c = 0; c < s; c++) {
                    var g = e[l + c],
                      d = i[l + c],
                      p = e[l + c + s],
                      v = i[l + c + s],
                      w = m * p - f * v;
                    ((v = m * v + f * p),
                      (p = w),
                      (e[l + c] = g + p),
                      (i[l + c] = d + v),
                      (e[l + c + s] = g - p),
                      (i[l + c + s] = d - v),
                      c !== h &&
                        ((w = u * m - a * f), (f = u * f + a * m), (m = w)));
                  }
            }),
            (E.prototype.guessLen13b = function (t, r) {
              var e = 1 | Math.max(r, t),
                i = 1 & e,
                n = 0;
              for (e = (e / 2) | 0; e; e >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (E.prototype.conjugate = function (t, r, e) {
              if (!(e <= 1))
                for (var i = 0; i < e / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[e - i - 1]),
                    (t[e - i - 1] = n),
                    (n = r[i]),
                    (r[i] = -r[e - i - 1]),
                    (r[e - i - 1] = -n));
                }
            }),
            (E.prototype.normalize13b = function (t, r) {
              for (var e = 0, i = 0; i < r / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / r) +
                  Math.round(t[2 * i] / r) +
                  e;
                ((t[i] = 67108863 & n),
                  (e = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (E.prototype.convert13b = function (t, r, e, n) {
              for (var o = 0, s = 0; s < r; s++)
                ((o += 0 | t[s]),
                  (e[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (e[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * r; s < n; ++s) e[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (E.prototype.stub = function (t) {
              for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
              return r;
            }),
            (E.prototype.mulp = function (t, r, e) {
              var i = 2 * this.guessLen13b(t.length, r.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                l = new Array(i),
                m = new Array(i),
                f = e.words;
              ((f.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(r.words, r.length, a, i),
                this.transform(s, o, h, u, i, n),
                this.transform(a, o, l, m, i, n));
              for (var c = 0; c < i; c++) {
                var g = h[c] * l[c] - u[c] * m[c];
                ((u[c] = h[c] * m[c] + u[c] * l[c]), (h[c] = g));
              }
              return (
                this.conjugate(h, u, i),
                this.transform(h, u, f, o, i, n),
                this.conjugate(f, o, i),
                this.normalize13b(f, i),
                (e.negative = t.negative ^ r.negative),
                (e.length = t.length + r.length),
                e._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                this.mulTo(t, r)
              );
            }),
            (o.prototype.mulf = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                M(this, t, r)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var r = t < 0;
              (r && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var e = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & e);
                ((e >>= 26),
                  (e += (o / 67108864) | 0),
                  (e += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== e && ((this.words[n] = e), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                r ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var r = p(t);
              if (0 === r.length) return new o(1);
              for (var e = this, i = 0; i < r.length; i++, e = e.sqr())
                if (0 !== r[i]) break;
              if (++i < r.length)
                for (var n = e.sqr(); i < r.length; i++, n = n.sqr())
                  0 !== r[i] && (e = e.mul(n));
              return e;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var r,
                e = t % 26,
                n = (t - e) / 26,
                o = (67108863 >>> (26 - e)) << (26 - e);
              if (0 !== e) {
                var s = 0;
                for (r = 0; r < this.length; r++) {
                  var h = this.words[r] & o,
                    u = ((0 | this.words[r]) - h) << e;
                  ((this.words[r] = u | s), (s = h >>> (26 - e)));
                }
                s && ((this.words[r] = s), this.length++);
              }
              if (0 !== n) {
                for (r = this.length - 1; r >= 0; r--)
                  this.words[r + n] = this.words[r];
                for (r = 0; r < n; r++) this.words[r] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, r, e) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = r ? (r - (r % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                h = 67108863 ^ ((67108863 >>> o) << o),
                u = e;
              if (((n -= s), (n = Math.max(0, n)), u)) {
                for (var a = 0; a < s; a++) u.words[a] = this.words[a];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                var m = 0 | this.words[a];
                ((this.words[a] = (l << (26 - o)) | (m >>> o)), (l = m & h));
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, r, e) {
              return (i(0 === this.negative), this.iushrn(t, r, e));
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e) return !1;
              var o = this.words[e];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = t % 26,
                e = (t - r) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= e)
              )
                return this;
              if (
                (0 !== r && e++,
                (this.length = Math.min(e, this.length)),
                0 !== r)
              ) {
                var n = 67108863 ^ ((67108863 >>> r) << r);
                this.words[this.length - 1] &= n;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                i("number" === typeof t),
                i(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
                ((this.words[r] -= 67108864),
                  r === this.length - 1
                    ? (this.words[r + 1] = 1)
                    : this.words[r + 1]++);
              return ((this.length = Math.max(this.length, r + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
              if ((i("number" === typeof t), i(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var r = 0; r < this.length && this.words[r] < 0; r++)
                  ((this.words[r] += 67108864), (this.words[r + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, r, e) {
              var n,
                o,
                s = t.length + e;
              this._expand(s);
              var h = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + e]) + h;
                var u = (0 | t.words[n]) * r;
                ((o -= 67108863 & u),
                  (h = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + e] = 67108863 & o));
              }
              for (; n < this.length - e; n++)
                ((o = (0 | this.words[n + e]) + h),
                  (h = o >> 26),
                  (this.words[n + e] = 67108863 & o));
              if (0 === h) return this._strip();
              for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + h),
                  (h = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, r) {
              var e = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                h = this._countBits(s);
              ((e = 26 - h),
                0 !== e &&
                  ((n = n.ushln(e)),
                  i.iushln(e),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                a = i.length - n.length;
              if ("mod" !== r) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var m = i.clone()._ishlnsubmul(n, 1, a);
              0 === m.negative && ((i = m), u && (u.words[a] = 1));
              for (var f = a - 1; f >= 0; f--) {
                var c =
                  67108864 * (0 | i.words[n.length + f]) +
                  (0 | i.words[n.length + f - 1]);
                ((c = Math.min((c / s) | 0, 67108863)),
                  i._ishlnsubmul(n, c, f));
                while (0 !== i.negative)
                  (c--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, f),
                    i.isZero() || (i.negative ^= 1));
                u && (u.words[f] = c);
              }
              return (
                u && u._strip(),
                i._strip(),
                "div" !== r && 0 !== e && i.iushrn(e),
                { div: u || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, r, e) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((h = this.neg().divmod(t, r)),
                      "mod" !== r && (n = h.div.neg()),
                      "div" !== r &&
                        ((s = h.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((h = this.divmod(t.neg(), r)),
                        "mod" !== r && (n = h.div.neg()),
                        { div: n, mod: h.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((h = this.neg().divmod(t.neg(), r)),
                          "div" !== r &&
                            ((s = h.mod.neg()),
                            e && 0 !== s.negative && s.isub(t)),
                          { div: h.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === r
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === r
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, r)
              );
              var n, s, h;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var r = this.divmod(t);
              if (r.mod.isZero()) return r.div;
              var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = e.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? r.div
                : 0 !== r.div.negative
                  ? r.div.isubn(1)
                  : r.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (
                var e = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (e * n + (0 | this.words[o])) % t;
              return r ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * e;
                ((this.words[n] = (o / t) | 0), (e = o % t));
              }
              return (this._strip(), r ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n = new o(1),
                s = new o(0),
                h = new o(0),
                u = new o(1),
                a = 0;
              while (r.isEven() && e.isEven()) (r.iushrn(1), e.iushrn(1), ++a);
              var l = e.clone(),
                m = r.clone();
              while (!r.isZero()) {
                for (
                  var f = 0, c = 1;
                  0 === (r.words[0] & c) && f < 26;
                  ++f, c <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(m)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var g = 0, d = 1;
                  0 === (e.words[0] & d) && g < 26;
                  ++g, d <<= 1
                );
                if (g > 0) {
                  e.iushrn(g);
                  while (g-- > 0)
                    ((h.isOdd() || u.isOdd()) && (h.iadd(l), u.isub(m)),
                      h.iushrn(1),
                      u.iushrn(1));
                }
                r.cmp(e) >= 0
                  ? (r.isub(e), n.isub(h), s.isub(u))
                  : (e.isub(r), h.isub(n), u.isub(s));
              }
              return { a: h, b: u, gcd: e.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n,
                s = new o(1),
                h = new o(0),
                u = e.clone();
              while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (r.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  r.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var m = 0, f = 1;
                  0 === (e.words[0] & f) && m < 26;
                  ++m, f <<= 1
                );
                if (m > 0) {
                  e.iushrn(m);
                  while (m-- > 0) (h.isOdd() && h.iadd(u), h.iushrn(1));
                }
                r.cmp(e) >= 0 ? (r.isub(e), s.isub(h)) : (e.isub(r), h.isub(s));
              }
              return (
                (n = 0 === r.cmpn(1) ? s : h),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var r = this.clone(),
                e = t.clone();
              ((r.negative = 0), (e.negative = 0));
              for (var i = 0; r.isEven() && e.isEven(); i++)
                (r.iushrn(1), e.iushrn(1));
              do {
                while (r.isEven()) r.iushrn(1);
                while (e.isEven()) e.iushrn(1);
                var n = r.cmp(e);
                if (n < 0) {
                  var o = r;
                  ((r = e), (e = o));
                } else if (0 === n || 0 === e.cmpn(1)) break;
                r.isub(e);
              } while (1);
              return e.iushln(i);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              i("number" === typeof t);
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e)
                return (this._expand(e + 1), (this.words[e] |= n), this);
              for (var o = n, s = e; 0 !== o && s < this.length; s++) {
                var h = 0 | this.words[s];
                ((h += o),
                  (o = h >>> 26),
                  (h &= 67108863),
                  (this.words[s] = h));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var r,
                e = t < 0;
              if (0 !== this.negative && !e) return -1;
              if (0 === this.negative && e) return 1;
              if ((this._strip(), this.length > 1)) r = 1;
              else {
                (e && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                r = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var r = this.ucmp(t);
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var r = 0, e = this.length - 1; e >= 0; e--) {
                var i = 0 | this.words[e],
                  n = 0 | t.words[e];
                if (i !== n) {
                  i < n ? (r = -1) : i > n && (r = 1);
                  break;
                }
              }
              return r;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new x(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                i(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (o.prototype.forceRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                i(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var b = { k256: null, p224: null, p192: null, p25519: null };
          function N(t, r) {
            ((this.name = t),
              (this.p = new o(r, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function _() {
            N.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function A() {
            N.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function R() {
            N.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function P() {
            N.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function x(t) {
            if ("string" === typeof t) {
              var r = o._prime(t);
              ((this.m = r.p), (this.prime = r));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function S(t) {
            (x.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((N.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (N.prototype.ireduce = function (t) {
              var r,
                e = t;
              do {
                (this.split(e, this.tmp),
                  (e = this.imulK(e)),
                  (e = e.iadd(this.tmp)),
                  (r = e.bitLength()));
              } while (r > this.n);
              var i = r < this.n ? -1 : e.ucmp(this.p);
              return (
                0 === i
                  ? ((e.words[0] = 0), (e.length = 1))
                  : i > 0
                    ? e.isub(this.p)
                    : void 0 !== e.strip
                      ? e.strip()
                      : e._strip(),
                e
              );
            }),
            (N.prototype.split = function (t, r) {
              t.iushrn(this.n, 0, r);
            }),
            (N.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(_, N),
            (_.prototype.split = function (t, r) {
              for (
                var e = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                r.words[n] = t.words[n];
              if (((r.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (r.words[r.length++] = o & e, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & e) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (_.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 0 | t.words[e];
                ((r += 977 * i),
                  (t.words[e] = 67108863 & r),
                  (r = 64 * i + ((r / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(A, N),
            n(R, N),
            n(P, N),
            (P.prototype.imulK = function (t) {
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 19 * (0 | t.words[e]) + r,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[e] = n), (r = i));
              }
              return (0 !== r && (t.words[t.length++] = r), t);
            }),
            (o._prime = function (t) {
              if (b[t]) return b[t];
              var r;
              if ("k256" === t) r = new _();
              else if ("p224" === t) r = new A();
              else if ("p192" === t) r = new R();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                r = new P();
              }
              return ((b[t] = r), r);
            }),
            (x.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (x.prototype._verify2 = function (t, r) {
              (i(
                0 === (t.negative | r.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === r.red, "red works only with red numbers"));
            }),
            (x.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (x.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (x.prototype.add = function (t, r) {
              this._verify2(t, r);
              var e = t.add(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this));
            }),
            (x.prototype.iadd = function (t, r) {
              this._verify2(t, r);
              var e = t.iadd(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e);
            }),
            (x.prototype.sub = function (t, r) {
              this._verify2(t, r);
              var e = t.sub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this));
            }),
            (x.prototype.isub = function (t, r) {
              this._verify2(t, r);
              var e = t.isub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e);
            }),
            (x.prototype.shl = function (t, r) {
              return (this._verify1(t), this.imod(t.ushln(r)));
            }),
            (x.prototype.imul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.imul(r)));
            }),
            (x.prototype.mul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.mul(r)));
            }),
            (x.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (x.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (x.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var r = this.m.andln(3);
              if ((i(r % 2 === 1), 3 === r)) {
                var e = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, e);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var h = new o(1).toRed(this),
                u = h.redNeg(),
                a = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, a).cmp(u)) l.redIAdd(u);
              var m = this.pow(l, n),
                f = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                g = s;
              while (0 !== c.cmp(h)) {
                for (var d = c, p = 0; 0 !== d.cmp(h); p++) d = d.redSqr();
                i(p < g);
                var v = this.pow(m, new o(1).iushln(g - p - 1));
                ((f = f.redMul(v)),
                  (m = v.redSqr()),
                  (c = c.redMul(m)),
                  (g = p));
              }
              return f;
            }),
            (x.prototype.invm = function (t) {
              var r = t._invmp(this.m);
              return 0 !== r.negative
                ? ((r.negative = 0), this.imod(r).redNeg())
                : this.imod(r);
            }),
            (x.prototype.pow = function (t, r) {
              if (r.isZero()) return new o(1).toRed(this);
              if (0 === r.cmpn(1)) return t.clone();
              var e = 4,
                i = new Array(1 << e);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                h = 0,
                u = 0,
                a = r.bitLength() % 26;
              for (0 === a && (a = 26), n = r.length - 1; n >= 0; n--) {
                for (var l = r.words[n], m = a - 1; m >= 0; m--) {
                  var f = (l >> m) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== f || 0 !== h
                      ? ((h <<= 1),
                        (h |= f),
                        u++,
                        (u === e || (0 === n && 0 === m)) &&
                          ((s = this.mul(s, i[h])), (u = 0), (h = 0)))
                      : (u = 0));
                }
                a = 26;
              }
              return s;
            }),
            (x.prototype.convertTo = function (t) {
              var r = t.umod(this.m);
              return r === t ? r.clone() : r;
            }),
            (x.prototype.convertFrom = function (t) {
              var r = t.clone();
              return ((r.red = null), r);
            }),
            (o.mont = function (t) {
              return new S(t);
            }),
            n(S, x),
            (S.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (S.prototype.convertFrom = function (t) {
              var r = this.imod(t.mul(this.rinv));
              return ((r.red = null), r);
            }),
            (S.prototype.imul = function (t, r) {
              if (t.isZero() || r.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var e = t.imul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (S.prototype.mul = function (t, r) {
              if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
              var e = t.mul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (S.prototype.invm = function (t) {
              var r = this.imod(t._invmp(this.m).mul(this.r2));
              return r._forceRed(this);
            }));
        })(t, this);
      }).call(this, e(20)(t));
    },
    1520: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FixedNumber = r.FixedFormat = void 0),
        (r.formatFixed = g),
        (r.parseFixed = d));
      var i = e(145),
        n = e(146),
        o = e(539),
        s = e(538);
      const h = new n.Logger(o.version),
        u = {},
        a = s.BigNumber.from(0),
        l = s.BigNumber.from(-1);
      function m(t, r, e, i) {
        const o = { fault: r, operation: e };
        return (
          void 0 !== i && (o.value = i),
          h.throwError(t, n.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let f = "0";
      while (f.length < 256) f += f;
      function c(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (r) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + f.substring(0, t)
          : h.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function g(t, r) {
        null == r && (r = 0);
        const e = c(r);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(l));
        let n = t.mod(e).toString();
        while (n.length < e.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(e).toString();
        return ((t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function d(t, r) {
        null == r && (r = 0);
        const e = c(r);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          h.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        (i && (t = t.substring(1)),
          "." === t && h.throwArgumentError("missing value", "value", t));
        const n = t.split(".");
        n.length > 2 &&
          h.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          u = n[1];
        (o || (o = "0"), u || (u = "0"));
        while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
        (u.length > e.length - 1 &&
          m("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < e.length - 1) u += "0";
        const a = s.BigNumber.from(o),
          f = s.BigNumber.from(u);
        let g = a.mul(e).add(f);
        return (i && (g = g.mul(l)), g);
      }
      class FixedFormat {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = r),
            (this.width = e),
            (this.decimals = i),
            (this.name =
              (r ? "" : "u") + "fixed" + String(e) + "x" + String(i)),
            (this._multiplier = c(i)),
            Object.freeze(this));
        }
        static from(t) {
          if (t instanceof FixedFormat) return t;
          "number" === typeof t && (t = "fixed128x" + t);
          let r = !0,
            e = 128,
            i = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) r = !1;
            else {
              const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (n || h.throwArgumentError("invalid fixed format", "format", t),
                (r = "u" !== n[1]),
                (e = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    h.throwArgumentError(
                      "invalid fixed format (" + r + " not " + e + ")",
                      "format." + r,
                      t[r],
                    ),
                  t[r]);
            ((r = n("signed", "boolean", r)),
              (e = n("width", "number", e)),
              (i = n("decimals", "number", i)));
          }
          return (
            e % 8 &&
              h.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e,
              ),
            i > 80 &&
              h.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(u, r, e, i)
          );
        }
      }
      r.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = i),
            (this._hex = r),
            (this._value = e),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            h.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.add(e),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.sub(e),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(this.format._multiplier).div(e),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && e && (r = r.subUnsafe(p.toFormat(r.format))),
            r
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && e && (r = r.addUnsafe(p.toFormat(r.format))),
            r
          );
        }
        round(t) {
          null == t && (t = 0);
          const r = this.toString().split(".");
          if (
            (1 === r.length && r.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              h.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          const e = FixedNumber.from("1" + f.substring(0, t), this.format),
            i = v.toFormat(this.format);
          return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e);
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
        toHexString(t) {
          if (null == t) return this._hex;
          t % 8 && h.throwArgumentError("invalid byte width", "width", t);
          const r = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return (0, i.hexZeroPad)(r, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return FixedNumber.fromString(this._value, t);
        }
        static fromValue(t, r, e) {
          return (
            null != e ||
              null == r ||
              (0, s.isBigNumberish)(r) ||
              ((e = r), (r = null)),
            null == r && (r = 0),
            null == e && (e = "fixed"),
            FixedNumber.fromString(g(t, r), FixedFormat.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r),
            n = d(t, e.decimals);
          !e.signed &&
            n.lt(a) &&
            m("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          e.signed
            ? (o = n.toTwos(e.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, e.width / 8)));
          const s = g(n, e.decimals);
          return new FixedNumber(u, o, s, e);
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r);
          if ((0, i.arrayify)(t).length > e.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          e.signed && (n = n.fromTwos(e.width));
          const o = n.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
            h = g(n, e.decimals);
          return new FixedNumber(u, o, h, e);
        }
        static from(t, r) {
          if ("string" === typeof t) return FixedNumber.fromString(t, r);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, r);
          try {
            return FixedNumber.fromValue(t, 0, r);
          } catch (e) {
            if (e.code !== n.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return h.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      r.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        v = FixedNumber.from("0.5");
    },
    1521: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.keccak256 = s));
      var n = i(e(53)),
        o = e(145);
      function s(t) {
        return "0x" + n.default.keccak_256((0, o.arrayify)(t));
      }
    },
    1522: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = c),
        (r.encode = l));
      var i = e(145),
        n = e(146),
        o = e(1523);
      const s = new n.Logger(o.version);
      function h(t) {
        const r = [];
        while (t) (r.unshift(255 & t), (t >>= 8));
        return r;
      }
      function u(t, r, e) {
        let i = 0;
        for (let n = 0; n < e; n++) i = 256 * i + t[r + n];
        return i;
      }
      function a(t) {
        if (Array.isArray(t)) {
          let r = [];
          if (
            (t.forEach(function (t) {
              r = r.concat(a(t));
            }),
            r.length <= 55)
          )
            return (r.unshift(192 + r.length), r);
          const e = h(r.length);
          return (e.unshift(247 + e.length), e.concat(r));
        }
        (0, i.isBytesLike)(t) ||
          s.throwArgumentError("RLP object must be BytesLike", "object", t);
        const r = Array.prototype.slice.call((0, i.arrayify)(t));
        if (1 === r.length && r[0] <= 127) return r;
        if (r.length <= 55) return (r.unshift(128 + r.length), r);
        const e = h(r.length);
        return (e.unshift(183 + e.length), e.concat(r));
      }
      function l(t) {
        return (0, i.hexlify)(a(t));
      }
      function m(t, r, e, i) {
        const o = [];
        while (e < r + 1 + i) {
          const h = f(t, e);
          (o.push(h.result),
            (e += h.consumed),
            e > r + 1 + i &&
              s.throwError(
                "child data too short",
                n.Logger.errors.BUFFER_OVERRUN,
                {},
              ));
        }
        return { consumed: 1 + i, result: o };
      }
      function f(t, r) {
        if (
          (0 === t.length &&
            s.throwError("data too short", n.Logger.errors.BUFFER_OVERRUN, {}),
          t[r] >= 248)
        ) {
          const e = t[r] - 247;
          r + 1 + e > t.length &&
            s.throwError(
              "data short segment too short",
              n.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const i = u(t, r + 1, e);
          return (
            r + 1 + e + i > t.length &&
              s.throwError(
                "data long segment too short",
                n.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            m(t, r, r + 1 + e, e + i)
          );
        }
        if (t[r] >= 192) {
          const e = t[r] - 192;
          return (
            r + 1 + e > t.length &&
              s.throwError(
                "data array too short",
                n.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            m(t, r, r + 1, e)
          );
        }
        if (t[r] >= 184) {
          const e = t[r] - 183;
          r + 1 + e > t.length &&
            s.throwError(
              "data array too short",
              n.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const o = u(t, r + 1, e);
          r + 1 + e + o > t.length &&
            s.throwError(
              "data array too short",
              n.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const h = (0, i.hexlify)(t.slice(r + 1 + e, r + 1 + e + o));
          return { consumed: 1 + e + o, result: h };
        }
        if (t[r] >= 128) {
          const e = t[r] - 128;
          r + 1 + e > t.length &&
            s.throwError("data too short", n.Logger.errors.BUFFER_OVERRUN, {});
          const o = (0, i.hexlify)(t.slice(r + 1, r + 1 + e));
          return { consumed: 1 + e, result: o };
        }
        return { consumed: 1, result: (0, i.hexlify)(t[r]) };
      }
      function c(t) {
        const r = (0, i.arrayify)(t),
          e = f(r, 0);
        return (
          e.consumed !== r.length &&
            s.throwArgumentError("invalid rlp data", "data", t),
          e.result
        );
      }
    },
    1523: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "rlp/5.8.0";
    },
    1524: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "address/5.7.0";
    },
    491: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1339);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let h = s["default"],
        u = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const l = a();
      var m, f;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(m || (r.LogLevel = m = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(f || (r.ErrorCode = f = {})));
      const c = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            h > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += c[r[t] >> 4]), (e += c[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (h) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case f.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
                  break;
              }
              break;
            }
            case f.CALL_EXCEPTION:
            case f.INSUFFICIENT_FUNDS:
            case f.MISSING_NEW:
            case f.NONCE_EXPIRED:
            case f.REPLACEMENT_UNDERPRICED:
            case f.TRANSACTION_REPLACED:
            case f.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const h = new Error(t);
          return (
            (h.reason = n),
            (h.code = r),
            Object.keys(e).forEach(function (t) {
              h[t] = e[t];
            }),
            h
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (u || (u = new Logger(i.version)), u);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (h = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = f), (Logger.levels = m));
    },
    538: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BigNumber = void 0),
        (r._base16To36 = y),
        (r._base36To16 = w),
        (r.isBigNumberish = f));
      var n = i(e(1518)),
        o = e(145),
        s = e(146),
        h = e(539),
        u = n.default.BN;
      const a = new s.Logger(h.version),
        l = {},
        m = 9007199254740991;
      function f(t) {
        return (
          null != t &&
          (BigNumber.isBigNumber(t) ||
            ("number" === typeof t && t % 1 === 0) ||
            ("string" === typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(t) ||
            "bigint" === typeof t ||
            (0, o.isBytes)(t))
        );
      }
      let c = !1;
      class BigNumber {
        constructor(t, r) {
          (t !== l &&
            a.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = r),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return d(p(this).fromTwos(t));
        }
        toTwos(t) {
          return d(p(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return d(p(this).add(p(t)));
        }
        sub(t) {
          return d(p(this).sub(p(t)));
        }
        div(t) {
          const r = BigNumber.from(t);
          return (
            r.isZero() && v("division-by-zero", "div"),
            d(p(this).div(p(t)))
          );
        }
        mul(t) {
          return d(p(this).mul(p(t)));
        }
        mod(t) {
          const r = p(t);
          return (
            r.isNeg() && v("division-by-zero", "mod"),
            d(p(this).umod(r))
          );
        }
        pow(t) {
          const r = p(t);
          return (r.isNeg() && v("negative-power", "pow"), d(p(this).pow(r)));
        }
        and(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "and"),
            d(p(this).and(r))
          );
        }
        or(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "or"),
            d(p(this).or(r))
          );
        }
        xor(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "xor"),
            d(p(this).xor(r))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "mask"),
            d(p(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shl"),
            d(p(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shr"),
            d(p(this).shrn(t))
          );
        }
        eq(t) {
          return p(this).eq(p(t));
        }
        lt(t) {
          return p(this).lt(p(t));
        }
        lte(t) {
          return p(this).lte(p(t));
        }
        gt(t) {
          return p(this).gt(p(t));
        }
        gte(t) {
          return p(this).gte(p(t));
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
          } catch (t) {
            v("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return a.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() },
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? c ||
                  ((c = !0),
                  a.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? a.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : a.throwError(
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
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof BigNumber) return t;
          if ("string" === typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new BigNumber(l, g(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(l, g(new u(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && v("underflow", "BigNumber.from", t),
              (t >= m || t <= -m) && v("overflow", "BigNumber.from", t),
              BigNumber.from(String(t))
            );
          const r = t;
          if ("bigint" === typeof r) return BigNumber.from(r.toString());
          if ((0, o.isBytes)(r)) return BigNumber.from((0, o.hexlify)(r));
          if (r)
            if (r.toHexString) {
              const t = r.toHexString();
              if ("string" === typeof t) return BigNumber.from(t);
            } else {
              let t = r._hex;
              if (
                (null == t && "BigNumber" === r.type && (t = r.hex),
                "string" === typeof t &&
                  ((0, o.isHexString)(t) ||
                    ("-" === t[0] && (0, o.isHexString)(t.substring(1)))))
              )
                return BigNumber.from(t);
            }
          return a.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function g(t) {
        if ("string" !== typeof t) return g(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = g(t)),
            "0x00" === t ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        t.length % 2 && (t = "0x0" + t.substring(2));
        while (t.length > 4 && "0x00" === t.substring(0, 4))
          t = "0x" + t.substring(4);
        return t;
      }
      function d(t) {
        return BigNumber.from(g(t));
      }
      function p(t) {
        const r = BigNumber.from(t).toHexString();
        return "-" === r[0]
          ? new u("-" + r.substring(3), 16)
          : new u(r.substring(2), 16);
      }
      function v(t, r, e) {
        const i = { fault: t, operation: r };
        return (
          null != e && (i.value = e),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function w(t) {
        return new u(t, 36).toString(16);
      }
      function y(t) {
        return new u(t, 16).toString(36);
      }
      r.BigNumber = BigNumber;
    },
    539: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bignumber/5.8.0";
    },
  },
]);
