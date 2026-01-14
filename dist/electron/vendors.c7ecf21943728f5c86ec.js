(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [91],
  {
    115: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Logger = e.LogLevel = e.ErrorCode = void 0));
      var i = r(1750);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let u = s["default"],
        h = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
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
      var f, m;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(f || (e.LogLevel = f = {})),
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
        })(m || (e.ErrorCode = m = {})));
      const c = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          (null == s[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            u > s[r] || console.log.apply(console, e));
        }
        debug() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.DEBUG, e);
        }
        info() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.INFO, e);
        }
        warn() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.WARNING, e);
        }
        makeError(t, e, r) {
          if (o) return this.makeError("censored error", e, {});
          (e || (e = Logger.errors.UNKNOWN_ERROR), r || (r = {}));
          const i = [];
          (Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  ((r += c[e[t] >> 4]), (r += c[15 & e[t]]));
                i.push(t + "=Uint8Array(0x" + r + ")");
              } else i.push(t + "=" + JSON.stringify(e));
            } catch (u) {
              i.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            i.push("code=" + e),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (e) {
            case m.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
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
            case m.CALL_EXCEPTION:
            case m.INSUFFICIENT_FUNDS:
            case m.MISSING_NEW:
            case m.NONCE_EXPIRED:
            case m.REPLACEMENT_UNDERPRICED:
            case m.TRANSACTION_REPLACED:
            case m.UNPREDICTABLE_GAS_LIMIT:
              s = e;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const u = new Error(t);
          return (
            (u.reason = n),
            (u.code = e),
            Object.keys(r).forEach(function (t) {
              u[t] = r[t];
            }),
            u
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, i) {
          t || this.throwError(e, r, i);
        }
        assertArgument(t, e, r, i) {
          t || this.throwArgumentError(e, r, i);
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
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          ((r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e },
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e },
              ));
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(i.version)), h);
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
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
          ((o = !!t), (n = !!e));
        }
        static setLogLevel(t) {
          const e = s[t.toLowerCase()];
          null != e
            ? (u = e)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((e.Logger = Logger), (Logger.errors = m), (Logger.levels = f));
    },
    1747: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._fetchData = g),
        (e.fetchJson = p),
        (e.poll = v));
      var i = r(1748),
        n = r(97),
        o = r(1752),
        s = r(1754),
        u = r(115),
        h = r(1767),
        a = r(1768),
        l = function (t, e, r, i) {
          function n(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(i.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                h(i["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : n(t.value).then(s, u);
            }
            h((i = i.apply(t, e || [])).next());
          });
        };
      const f = new u.Logger(h.version);
      function m(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function c(t, e) {
        if (null == t) return null;
        if ("string" === typeof t) return t;
        if ((0, n.isBytesLike)(t)) {
          if (
            e &&
            ("text" === e.split("/")[0] ||
              "application/json" === e.split(";")[0].trim())
          )
            try {
              return (0, s.toUtf8String)(t);
            } catch (r) {}
          return (0, n.hexlify)(t);
        }
        return t;
      }
      function d(t) {
        return (0, s.toUtf8Bytes)(
          t.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
            String.fromCharCode(parseInt(e, 16)),
          ),
        );
      }
      function g(t, e, r) {
        const n =
          "object" === typeof t && null != t.throttleLimit
            ? t.throttleLimit
            : 12;
        f.assertArgument(
          n > 0 && n % 1 === 0,
          "invalid connection throttle limit",
          "connection.throttleLimit",
          n,
        );
        const h = "object" === typeof t ? t.throttleCallback : null,
          g =
            "object" === typeof t && "number" === typeof t.throttleSlotInterval
              ? t.throttleSlotInterval
              : 100;
        f.assertArgument(
          g > 0 && g % 1 === 0,
          "invalid connection throttle slot interval",
          "connection.throttleSlotInterval",
          g,
        );
        const p = "object" === typeof t && !!t.errorPassThrough,
          v = {};
        let y = null;
        const w = { method: "GET" };
        let b = !1,
          M = 12e4;
        if ("string" === typeof t) y = t;
        else if ("object" === typeof t) {
          if (
            ((null != t && null != t.url) ||
              f.throwArgumentError("missing URL", "connection.url", t),
            (y = t.url),
            "number" === typeof t.timeout && t.timeout > 0 && (M = t.timeout),
            t.headers)
          )
            for (const e in t.headers)
              ((v[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
                ["if-none-match", "if-modified-since"].indexOf(
                  e.toLowerCase(),
                ) >= 0 && (b = !0));
          if (
            ((w.allowGzip = !!t.allowGzip),
            null != t.user && null != t.password)
          ) {
            "https:" !== y.substring(0, 6) &&
              !0 !== t.allowInsecureAuthentication &&
              f.throwError(
                "basic authentication requires a secure https url",
                u.Logger.errors.INVALID_ARGUMENT,
                {
                  argument: "url",
                  url: y,
                  user: t.user,
                  password: "[REDACTED]",
                },
              );
            const e = t.user + ":" + t.password;
            v["authorization"] = {
              key: "Authorization",
              value: "Basic " + (0, i.encode)((0, s.toUtf8Bytes)(e)),
            };
          }
          (null != t.skipFetchSetup && (w.skipFetchSetup = !!t.skipFetchSetup),
            null != t.fetchOptions &&
              (w.fetchOptions = (0, o.shallowCopy)(t.fetchOptions)));
        }
        const E = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
          _ = y ? y.match(E) : null;
        if (_)
          try {
            const t = {
              statusCode: 200,
              statusMessage: "OK",
              headers: { "content-type": _[1] || "text/plain" },
              body: _[2] ? (0, i.decode)(_[3]) : d(_[3]),
            };
            let e = t.body;
            return (r && (e = r(t.body, t)), Promise.resolve(e));
          } catch (A) {
            f.throwError(
              "processing response error",
              u.Logger.errors.SERVER_ERROR,
              {
                body: c(_[1], _[2]),
                error: A,
                requestBody: null,
                requestMethod: "GET",
                url: y,
              },
            );
          }
        e &&
          ((w.method = "POST"),
          (w.body = e),
          null == v["content-type"] &&
            (v["content-type"] = {
              key: "Content-Type",
              value: "application/octet-stream",
            }),
          null == v["content-length"] &&
            (v["content-length"] = {
              key: "Content-Length",
              value: String(e.length),
            }));
        const N = {};
        (Object.keys(v).forEach((t) => {
          const e = v[t];
          N[e.key] = e.value;
        }),
          (w.headers = N));
        const B = (function () {
            let t = null;
            const e = new Promise(function (e, r) {
                M &&
                  (t = setTimeout(() => {
                    null != t &&
                      ((t = null),
                      r(
                        f.makeError("timeout", u.Logger.errors.TIMEOUT, {
                          requestBody: c(w.body, N["content-type"]),
                          requestMethod: w.method,
                          timeout: M,
                          url: y,
                        }),
                      ));
                  }, M));
              }),
              r = function () {
                null != t && (clearTimeout(t), (t = null));
              };
            return { promise: e, cancel: r };
          })(),
          x = (function () {
            return l(this, void 0, void 0, function* () {
              for (let t = 0; t < n; t++) {
                let e = null;
                try {
                  if (((e = yield (0, a.getUrl)(y, w)), t < n))
                    if (301 === e.statusCode || 302 === e.statusCode) {
                      const t = e.headers.location || "";
                      if ("GET" === w.method && t.match(/^https:/)) {
                        y = e.headers.location;
                        continue;
                      }
                    } else if (429 === e.statusCode) {
                      let r = !0;
                      if ((h && (r = yield h(t, y)), r)) {
                        let r = 0;
                        const i = e.headers["retry-after"];
                        ((r =
                          "string" === typeof i && i.match(/^[1-9][0-9]*$/)
                            ? 1e3 * parseInt(i)
                            : g *
                              parseInt(String(Math.random() * Math.pow(2, t)))),
                          yield m(r));
                        continue;
                      }
                    }
                } catch (A) {
                  ((e = A.response),
                    null == e &&
                      (B.cancel(),
                      f.throwError(
                        "missing response",
                        u.Logger.errors.SERVER_ERROR,
                        {
                          requestBody: c(w.body, N["content-type"]),
                          requestMethod: w.method,
                          serverError: A,
                          url: y,
                        },
                      )));
                }
                let i = e.body;
                if (
                  (b && 304 === e.statusCode
                    ? (i = null)
                    : !p &&
                      (e.statusCode < 200 || e.statusCode >= 300) &&
                      (B.cancel(),
                      f.throwError(
                        "bad response",
                        u.Logger.errors.SERVER_ERROR,
                        {
                          status: e.statusCode,
                          headers: e.headers,
                          body: c(
                            i,
                            e.headers ? e.headers["content-type"] : null,
                          ),
                          requestBody: c(w.body, N["content-type"]),
                          requestMethod: w.method,
                          url: y,
                        },
                      )),
                  r)
                )
                  try {
                    const t = yield r(i, e);
                    return (B.cancel(), t);
                  } catch (A) {
                    if (A.throttleRetry && t < n) {
                      let e = !0;
                      if ((h && (e = yield h(t, y)), e)) {
                        const e =
                          g * parseInt(String(Math.random() * Math.pow(2, t)));
                        yield m(e);
                        continue;
                      }
                    }
                    (B.cancel(),
                      f.throwError(
                        "processing response error",
                        u.Logger.errors.SERVER_ERROR,
                        {
                          body: c(
                            i,
                            e.headers ? e.headers["content-type"] : null,
                          ),
                          error: A,
                          requestBody: c(w.body, N["content-type"]),
                          requestMethod: w.method,
                          url: y,
                        },
                      ));
                  }
                return (B.cancel(), i);
              }
              return f.throwError(
                "failed response",
                u.Logger.errors.SERVER_ERROR,
                {
                  requestBody: c(w.body, N["content-type"]),
                  requestMethod: w.method,
                  url: y,
                },
              );
            });
          })();
        return Promise.race([B.promise, x]);
      }
      function p(t, e, r) {
        let i = (t, e) => {
            let i = null;
            if (null != t)
              try {
                i = JSON.parse((0, s.toUtf8String)(t));
              } catch (n) {
                f.throwError("invalid JSON", u.Logger.errors.SERVER_ERROR, {
                  body: t,
                  error: n,
                });
              }
            return (r && (i = r(i, e)), i);
          },
          n = null;
        if (null != e) {
          n = (0, s.toUtf8Bytes)(e);
          const r = "string" === typeof t ? { url: t } : (0, o.shallowCopy)(t);
          if (r.headers) {
            const t =
              0 !==
              Object.keys(r.headers).filter(
                (t) => "content-type" === t.toLowerCase(),
              ).length;
            t ||
              ((r.headers = (0, o.shallowCopy)(r.headers)),
              (r.headers["content-type"] = "application/json"));
          } else r.headers = { "content-type": "application/json" };
          t = r;
        }
        return g(t, n, i);
      }
      function v(t, e) {
        return (
          e || (e = {}),
          (e = (0, o.shallowCopy)(e)),
          null == e.floor && (e.floor = 0),
          null == e.ceiling && (e.ceiling = 1e4),
          null == e.interval && (e.interval = 250),
          new Promise(function (r, i) {
            let n = null,
              o = !1;
            const s = () => !o && ((o = !0), n && clearTimeout(n), !0);
            e.timeout &&
              (n = setTimeout(() => {
                s() && i(new Error("timeout"));
              }, e.timeout));
            const u = e.retryLimit;
            let h = 0;
            function a() {
              return t().then(
                function (t) {
                  if (void 0 !== t) s() && r(t);
                  else if (e.oncePoll) e.oncePoll.once("poll", a);
                  else if (e.onceBlock) e.onceBlock.once("block", a);
                  else if (!o) {
                    if ((h++, h > u))
                      return void (s() && i(new Error("retry limit reached")));
                    let t =
                      e.interval *
                      parseInt(String(Math.random() * Math.pow(2, h)));
                    (t < e.floor && (t = e.floor),
                      t > e.ceiling && (t = e.ceiling),
                      setTimeout(a, t));
                  }
                  return null;
                },
                function (t) {
                  s() && i(t);
                },
              );
            }
            a();
          })
        );
      }
    },
    1748: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "decode", {
          enumerable: !0,
          get: function () {
            return i.decode;
          },
        }),
        Object.defineProperty(e, "encode", {
          enumerable: !0,
          get: function () {
            return i.encode;
          },
        }));
      var i = r(1749);
    },
    1749: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode = n),
        (e.encode = o));
      var i = r(97);
      function n(t) {
        t = atob(t);
        const e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, i.arrayify)(e);
      }
      function o(t) {
        t = (0, i.arrayify)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
    },
    1750: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "logger/5.8.0";
    },
    1751: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "bytes/5.8.0";
    },
    1752: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Description = void 0),
        (e.checkProperties = l),
        (e.deepCopy = g),
        (e.defineReadOnly = u),
        (e.getStatic = h),
        (e.resolveProperties = a),
        (e.shallowCopy = f));
      var i = r(115),
        n = r(1753),
        o = function (t, e, r, i) {
          function n(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(i.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                h(i["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : n(t.value).then(s, u);
            }
            h((i = i.apply(t, e || [])).next());
          });
        };
      const s = new i.Logger(n.version);
      function u(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function h(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function a(t) {
        return o(this, void 0, void 0, function* () {
          const e = Object.keys(t).map((e) => {
              const r = t[e];
              return Promise.resolve(r).then((t) => ({ key: e, value: t }));
            }),
            r = yield Promise.all(e);
          return r.reduce((t, e) => ((t[e.key] = e.value), t), {});
        });
      }
      function l(t, e) {
        ((t && "object" === typeof t) ||
          s.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((r) => {
            e[r] ||
              s.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                t,
              );
          }));
      }
      function f(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const m = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function c(t) {
        if (void 0 === t || null === t || m[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let i = 0; i < r.length; i++) {
            let n = null;
            try {
              n = t[r[i]];
            } catch (e) {
              continue;
            }
            if (!c(n)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function d(t) {
        if (c(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => g(t)));
        if ("object" === typeof t) {
          const e = {};
          for (const r in t) {
            const i = t[r];
            void 0 !== i && u(e, r, g(i));
          }
          return e;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function g(t) {
        return d(t);
      }
      class Description {
        constructor(t) {
          for (const e in t) this[e] = g(t[e]);
        }
      }
      e.Description = Description;
    },
    1753: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "properties/5.8.0";
    },
    1754: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return o.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(e, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(e, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(e, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return o._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(e, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return i.formatBytes32String;
          },
        }),
        Object.defineProperty(e, "nameprep", {
          enumerable: !0,
          get: function () {
            return n.nameprep;
          },
        }),
        Object.defineProperty(e, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return i.parseBytes32String;
          },
        }),
        Object.defineProperty(e, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return o.toUtf8Bytes;
          },
        }),
        Object.defineProperty(e, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return o.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(e, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return o.toUtf8String;
          },
        }));
      var i = r(1755),
        n = r(1766),
        o = r(292);
    },
    1755: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.formatBytes32String = s),
        (e.parseBytes32String = u));
      var i = r(1756),
        n = r(97),
        o = r(292);
      function s(t) {
        const e = (0, o.toUtf8Bytes)(t);
        if (e.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, n.hexlify)((0, n.concat)([e, i.HashZero]).slice(0, 32));
      }
      function u(t) {
        const e = (0, n.arrayify)(t);
        if (32 !== e.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== e[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let r = 31;
        while (0 === e[r - 1]) r--;
        return (0, o.toUtf8String)(e.slice(0, r));
      }
    },
    1756: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AddressZero", {
          enumerable: !0,
          get: function () {
            return i.AddressZero;
          },
        }),
        Object.defineProperty(e, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return s.EtherSymbol;
          },
        }),
        Object.defineProperty(e, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(e, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return n.MaxInt256;
          },
        }),
        Object.defineProperty(e, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return n.MaxUint256;
          },
        }),
        Object.defineProperty(e, "MinInt256", {
          enumerable: !0,
          get: function () {
            return n.MinInt256;
          },
        }),
        Object.defineProperty(e, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return n.NegativeOne;
          },
        }),
        Object.defineProperty(e, "One", {
          enumerable: !0,
          get: function () {
            return n.One;
          },
        }),
        Object.defineProperty(e, "Two", {
          enumerable: !0,
          get: function () {
            return n.Two;
          },
        }),
        Object.defineProperty(e, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return n.WeiPerEther;
          },
        }),
        Object.defineProperty(e, "Zero", {
          enumerable: !0,
          get: function () {
            return n.Zero;
          },
        }));
      var i = r(1757),
        n = r(1758),
        o = r(1763),
        s = r(1764);
    },
    1757: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AddressZero = void 0));
      e.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1758: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Zero =
          e.WeiPerEther =
          e.Two =
          e.One =
          e.NegativeOne =
          e.MinInt256 =
          e.MaxUint256 =
          e.MaxInt256 =
            void 0));
      var i = r(1759);
      ((e.NegativeOne = i.BigNumber.from(-1)),
        (e.Zero = i.BigNumber.from(0)),
        (e.One = i.BigNumber.from(1)),
        (e.Two = i.BigNumber.from(2)),
        (e.WeiPerEther = i.BigNumber.from("1000000000000000000")),
        (e.MaxUint256 = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (e.MinInt256 = i.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (e.MaxInt256 = i.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1759: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BigNumber", {
          enumerable: !0,
          get: function () {
            return i.BigNumber;
          },
        }),
        Object.defineProperty(e, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return n.FixedFormat;
          },
        }),
        Object.defineProperty(e, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return n.FixedNumber;
          },
        }),
        Object.defineProperty(e, "_base16To36", {
          enumerable: !0,
          get: function () {
            return i._base16To36;
          },
        }),
        Object.defineProperty(e, "_base36To16", {
          enumerable: !0,
          get: function () {
            return i._base36To16;
          },
        }),
        Object.defineProperty(e, "formatFixed", {
          enumerable: !0,
          get: function () {
            return n.formatFixed;
          },
        }),
        Object.defineProperty(e, "parseFixed", {
          enumerable: !0,
          get: function () {
            return n.parseFixed;
          },
        }));
      var i = r(594),
        n = r(1762);
    },
    1760: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function i(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(1761).Buffer;
          } catch (F) {}
          function u(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function h(t, e, r) {
            var i = u(t, r);
            return (r - 1 >= e && (i |= u(t, r - 1) << 4), i);
          }
          function a(t, e, r, n) {
            for (
              var o = 0, s = 0, u = Math.min(t.length, r), h = e;
              h < u;
              h++
            ) {
              var a = t.charCodeAt(h) - 48;
              ((o *= n),
                (s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                i(a >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
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
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, r) {
              if ("number" === typeof t) return this._initNumber(t, e, r);
              if ("object" === typeof t) return this._initArray(t, e, r);
              ("hex" === e && (e = 16),
                i(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === e
                    ? this._parseHex(t, n, r)
                    : (this._parseBase(t, e, n),
                      "le" === r && this._initArray(this.toArray(), e, r))));
            }),
            (o.prototype._initNumber = function (t, e, r) {
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
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                u = 0;
              if ("be" === r)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              else if ("le" === r)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, r) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === r)
                for (i = t.length - 1; i >= e; i -= 2)
                  ((n = h(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var u = t.length - e;
                for (i = u % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                  ((n = h(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              (i--, (n = (n / e) | 0));
              for (
                var o = t.length - r,
                  s = o % i,
                  u = Math.min(o, o - s) + r,
                  h = 0,
                  l = r;
                l < u;
                l += i
              )
                ((h = a(t, l, l + i, e)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var f = 1;
                for (h = a(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                (this.imuln(f),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
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
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f;
            } catch (F) {
              o.prototype.inspect = f;
            }
          else o.prototype.inspect = f;
          function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var m = [
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
            d = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var u = this.words[s],
                  h = (16777215 & ((u << n) | o)).toString(16);
                ((o = (u >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? m[6 - h.length] + h + r
                      : h + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = c[t],
                l = d[t];
              r = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var g = f.modrn(l).toString(t);
                ((f = f.idivn(l)),
                  (r = f.isZero() ? g + r : m[a - g.length] + g + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
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
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var g = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function p(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] >>> n) & 1;
            }
            return e;
          }
          function v(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              u = 67108863 & s,
              h = (s / 67108864) | 0;
            r.words[0] = u;
            for (var a = 1; a < i; a++) {
              for (
                var l = h >>> 26,
                  f = 67108863 & h,
                  m = Math.min(a, e.length - 1),
                  c = Math.max(0, a - t.length + 1);
                c <= m;
                c++
              ) {
                var d = (a - c) | 0;
                ((n = 0 | t.words[d]),
                  (o = 0 | e.words[c]),
                  (s = n * o + f),
                  (l += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((r.words[a] = 0 | f), (h = 0 | l));
            }
            return (0 !== h ? (r.words[a] = 0 | h) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = g(t, o),
              u = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + u](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < t.length && (t[r++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (r < t.length) {
                t[r++] = i;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (t[r--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (r >= 0) {
                t[r--] = i;
                while (r >= 0) t[r--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                0 === (127 & e) && ((r += 7), (e >>>= 7)),
                0 === (15 & e) && ((r += 4), (e >>>= 4)),
                0 === (3 & e) && ((r += 2), (e >>>= 2)),
                0 === (1 & e) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
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
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
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
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
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
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = e.words[i] ^ r.words[i];
              if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
              return ((this.length = e.length), this._strip());
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
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              i("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (i = t))
                : ((r = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && o < r.length; o++)
                ((e = (0 | r.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((e = (0 | r.words[s]) - (0 | i.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== o && s < r.length; s++)
                ((e = (0 | r.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === o && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, e, r) {
            var i,
              n,
              o,
              s = t.words,
              u = e.words,
              h = r.words,
              a = 0,
              l = 0 | s[0],
              f = 8191 & l,
              m = l >>> 13,
              c = 0 | s[1],
              d = 8191 & c,
              g = c >>> 13,
              p = 0 | s[2],
              v = 8191 & p,
              y = p >>> 13,
              w = 0 | s[3],
              b = 8191 & w,
              M = w >>> 13,
              E = 0 | s[4],
              _ = 8191 & E,
              N = E >>> 13,
              B = 0 | s[5],
              x = 8191 & B,
              A = B >>> 13,
              S = 0 | s[6],
              O = 8191 & S,
              F = S >>> 13,
              R = 0 | s[7],
              P = 8191 & R,
              U = R >>> 13,
              C = 0 | s[8],
              I = 8191 & C,
              T = C >>> 13,
              L = 0 | s[9],
              k = 8191 & L,
              j = L >>> 13,
              D = 0 | u[0],
              G = 8191 & D,
              Z = D >>> 13,
              z = 0 | u[1],
              q = 8191 & z,
              V = z >>> 13,
              H = 0 | u[2],
              K = 8191 & H,
              W = H >>> 13,
              X = 0 | u[3],
              $ = 8191 & X,
              J = X >>> 13,
              Q = 0 | u[4],
              Y = 8191 & Q,
              tt = Q >>> 13,
              et = 0 | u[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | u[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ut = 0 | u[7],
              ht = 8191 & ut,
              at = ut >>> 13,
              lt = 0 | u[8],
              ft = 8191 & lt,
              mt = lt >>> 13,
              ct = 0 | u[9],
              dt = 8191 & ct,
              gt = ct >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(f, G)),
              (n = Math.imul(f, Z)),
              (n = (n + Math.imul(m, G)) | 0),
              (o = Math.imul(m, Z)));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(d, G)),
              (n = Math.imul(d, Z)),
              (n = (n + Math.imul(g, G)) | 0),
              (o = Math.imul(g, Z)),
              (i = (i + Math.imul(f, q)) | 0),
              (n = (n + Math.imul(f, V)) | 0),
              (n = (n + Math.imul(m, q)) | 0),
              (o = (o + Math.imul(m, V)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, G)),
              (n = Math.imul(v, Z)),
              (n = (n + Math.imul(y, G)) | 0),
              (o = Math.imul(y, Z)),
              (i = (i + Math.imul(d, q)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(g, q)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(f, K)) | 0),
              (n = (n + Math.imul(f, W)) | 0),
              (n = (n + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, W)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(b, G)),
              (n = Math.imul(b, Z)),
              (n = (n + Math.imul(M, G)) | 0),
              (o = Math.imul(M, Z)),
              (i = (i + Math.imul(v, q)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(y, q)) | 0),
              (o = (o + Math.imul(y, V)) | 0),
              (i = (i + Math.imul(d, K)) | 0),
              (n = (n + Math.imul(d, W)) | 0),
              (n = (n + Math.imul(g, K)) | 0),
              (o = (o + Math.imul(g, W)) | 0),
              (i = (i + Math.imul(f, $)) | 0),
              (n = (n + Math.imul(f, J)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (o = (o + Math.imul(m, J)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(_, G)),
              (n = Math.imul(_, Z)),
              (n = (n + Math.imul(N, G)) | 0),
              (o = Math.imul(N, Z)),
              (i = (i + Math.imul(b, q)) | 0),
              (n = (n + Math.imul(b, V)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (o = (o + Math.imul(M, V)) | 0),
              (i = (i + Math.imul(v, K)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(y, K)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (i = (i + Math.imul(d, $)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (n = (n + Math.imul(g, $)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (n = (n + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, tt)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(x, G)),
              (n = Math.imul(x, Z)),
              (n = (n + Math.imul(A, G)) | 0),
              (o = Math.imul(A, Z)),
              (i = (i + Math.imul(_, q)) | 0),
              (n = (n + Math.imul(_, V)) | 0),
              (n = (n + Math.imul(N, q)) | 0),
              (o = (o + Math.imul(N, V)) | 0),
              (i = (i + Math.imul(b, K)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (n = (n + Math.imul(M, K)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (i = (i + Math.imul(v, $)) | 0),
              (n = (n + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, J)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(f, rt)) | 0),
              (n = (n + Math.imul(f, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, it)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(O, G)),
              (n = Math.imul(O, Z)),
              (n = (n + Math.imul(F, G)) | 0),
              (o = Math.imul(F, Z)),
              (i = (i + Math.imul(x, q)) | 0),
              (n = (n + Math.imul(x, V)) | 0),
              (n = (n + Math.imul(A, q)) | 0),
              (o = (o + Math.imul(A, V)) | 0),
              (i = (i + Math.imul(_, K)) | 0),
              (n = (n + Math.imul(_, W)) | 0),
              (n = (n + Math.imul(N, K)) | 0),
              (o = (o + Math.imul(N, W)) | 0),
              (i = (i + Math.imul(b, $)) | 0),
              (n = (n + Math.imul(b, J)) | 0),
              (n = (n + Math.imul(M, $)) | 0),
              (o = (o + Math.imul(M, J)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (n = (n + Math.imul(f, st)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(P, G)),
              (n = Math.imul(P, Z)),
              (n = (n + Math.imul(U, G)) | 0),
              (o = Math.imul(U, Z)),
              (i = (i + Math.imul(O, q)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (n = (n + Math.imul(F, q)) | 0),
              (o = (o + Math.imul(F, V)) | 0),
              (i = (i + Math.imul(x, K)) | 0),
              (n = (n + Math.imul(x, W)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, W)) | 0),
              (i = (i + Math.imul(_, $)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (o = (o + Math.imul(N, J)) | 0),
              (i = (i + Math.imul(b, Y)) | 0),
              (n = (n + Math.imul(b, tt)) | 0),
              (n = (n + Math.imul(M, Y)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(y, rt)) | 0),
              (o = (o + Math.imul(y, it)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (n = (n + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(f, ht)) | 0),
              (n = (n + Math.imul(f, at)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (o = (o + Math.imul(m, at)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(I, G)),
              (n = Math.imul(I, Z)),
              (n = (n + Math.imul(T, G)) | 0),
              (o = Math.imul(T, Z)),
              (i = (i + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(U, q)) | 0),
              (o = (o + Math.imul(U, V)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (n = (n + Math.imul(O, W)) | 0),
              (n = (n + Math.imul(F, K)) | 0),
              (o = (o + Math.imul(F, W)) | 0),
              (i = (i + Math.imul(x, $)) | 0),
              (n = (n + Math.imul(x, J)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (o = (o + Math.imul(A, J)) | 0),
              (i = (i + Math.imul(_, Y)) | 0),
              (n = (n + Math.imul(_, tt)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(b, rt)) | 0),
              (n = (n + Math.imul(b, it)) | 0),
              (n = (n + Math.imul(M, rt)) | 0),
              (o = (o + Math.imul(M, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (i = (i + Math.imul(d, ht)) | 0),
              (n = (n + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(g, ht)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(f, ft)) | 0),
              (n = (n + Math.imul(f, mt)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(k, G)),
              (n = Math.imul(k, Z)),
              (n = (n + Math.imul(j, G)) | 0),
              (o = Math.imul(j, Z)),
              (i = (i + Math.imul(I, q)) | 0),
              (n = (n + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(T, q)) | 0),
              (o = (o + Math.imul(T, V)) | 0),
              (i = (i + Math.imul(P, K)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(U, K)) | 0),
              (o = (o + Math.imul(U, W)) | 0),
              (i = (i + Math.imul(O, $)) | 0),
              (n = (n + Math.imul(O, J)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (o = (o + Math.imul(F, J)) | 0),
              (i = (i + Math.imul(x, Y)) | 0),
              (n = (n + Math.imul(x, tt)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (i = (i + Math.imul(_, rt)) | 0),
              (n = (n + Math.imul(_, it)) | 0),
              (n = (n + Math.imul(N, rt)) | 0),
              (o = (o + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(b, ot)) | 0),
              (n = (n + Math.imul(b, st)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (i = (i + Math.imul(v, ht)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(y, ht)) | 0),
              (o = (o + Math.imul(y, at)) | 0),
              (i = (i + Math.imul(d, ft)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (o = (o + Math.imul(g, mt)) | 0),
              (i = (i + Math.imul(f, dt)) | 0),
              (n = (n + Math.imul(f, gt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (o = (o + Math.imul(m, gt)) | 0));
            var Bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (i = Math.imul(k, q)),
              (n = Math.imul(k, V)),
              (n = (n + Math.imul(j, q)) | 0),
              (o = Math.imul(j, V)),
              (i = (i + Math.imul(I, K)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, W)) | 0),
              (i = (i + Math.imul(P, $)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(U, $)) | 0),
              (o = (o + Math.imul(U, J)) | 0),
              (i = (i + Math.imul(O, Y)) | 0),
              (n = (n + Math.imul(O, tt)) | 0),
              (n = (n + Math.imul(F, Y)) | 0),
              (o = (o + Math.imul(F, tt)) | 0),
              (i = (i + Math.imul(x, rt)) | 0),
              (n = (n + Math.imul(x, it)) | 0),
              (n = (n + Math.imul(A, rt)) | 0),
              (o = (o + Math.imul(A, it)) | 0),
              (i = (i + Math.imul(_, ot)) | 0),
              (n = (n + Math.imul(_, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (i = (i + Math.imul(b, ht)) | 0),
              (n = (n + Math.imul(b, at)) | 0),
              (n = (n + Math.imul(M, ht)) | 0),
              (o = (o + Math.imul(M, at)) | 0),
              (i = (i + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(y, ft)) | 0),
              (o = (o + Math.imul(y, mt)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, gt)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (o = (o + Math.imul(g, gt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(k, K)),
              (n = Math.imul(k, W)),
              (n = (n + Math.imul(j, K)) | 0),
              (o = Math.imul(j, W)),
              (i = (i + Math.imul(I, $)) | 0),
              (n = (n + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, J)) | 0),
              (i = (i + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(U, Y)) | 0),
              (o = (o + Math.imul(U, tt)) | 0),
              (i = (i + Math.imul(O, rt)) | 0),
              (n = (n + Math.imul(O, it)) | 0),
              (n = (n + Math.imul(F, rt)) | 0),
              (o = (o + Math.imul(F, it)) | 0),
              (i = (i + Math.imul(x, ot)) | 0),
              (n = (n + Math.imul(x, st)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (i = (i + Math.imul(_, ht)) | 0),
              (n = (n + Math.imul(_, at)) | 0),
              (n = (n + Math.imul(N, ht)) | 0),
              (o = (o + Math.imul(N, at)) | 0),
              (i = (i + Math.imul(b, ft)) | 0),
              (n = (n + Math.imul(b, mt)) | 0),
              (n = (n + Math.imul(M, ft)) | 0),
              (o = (o + Math.imul(M, mt)) | 0),
              (i = (i + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(v, gt)) | 0),
              (n = (n + Math.imul(y, dt)) | 0),
              (o = (o + Math.imul(y, gt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(k, $)),
              (n = Math.imul(k, J)),
              (n = (n + Math.imul(j, $)) | 0),
              (o = Math.imul(j, J)),
              (i = (i + Math.imul(I, Y)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(U, rt)) | 0),
              (o = (o + Math.imul(U, it)) | 0),
              (i = (i + Math.imul(O, ot)) | 0),
              (n = (n + Math.imul(O, st)) | 0),
              (n = (n + Math.imul(F, ot)) | 0),
              (o = (o + Math.imul(F, st)) | 0),
              (i = (i + Math.imul(x, ht)) | 0),
              (n = (n + Math.imul(x, at)) | 0),
              (n = (n + Math.imul(A, ht)) | 0),
              (o = (o + Math.imul(A, at)) | 0),
              (i = (i + Math.imul(_, ft)) | 0),
              (n = (n + Math.imul(_, mt)) | 0),
              (n = (n + Math.imul(N, ft)) | 0),
              (o = (o + Math.imul(N, mt)) | 0),
              (i = (i + Math.imul(b, dt)) | 0),
              (n = (n + Math.imul(b, gt)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (o = (o + Math.imul(M, gt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(k, Y)),
              (n = Math.imul(k, tt)),
              (n = (n + Math.imul(j, Y)) | 0),
              (o = Math.imul(j, tt)),
              (i = (i + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(T, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(U, ot)) | 0),
              (o = (o + Math.imul(U, st)) | 0),
              (i = (i + Math.imul(O, ht)) | 0),
              (n = (n + Math.imul(O, at)) | 0),
              (n = (n + Math.imul(F, ht)) | 0),
              (o = (o + Math.imul(F, at)) | 0),
              (i = (i + Math.imul(x, ft)) | 0),
              (n = (n + Math.imul(x, mt)) | 0),
              (n = (n + Math.imul(A, ft)) | 0),
              (o = (o + Math.imul(A, mt)) | 0),
              (i = (i + Math.imul(_, dt)) | 0),
              (n = (n + Math.imul(_, gt)) | 0),
              (n = (n + Math.imul(N, dt)) | 0),
              (o = (o + Math.imul(N, gt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(k, rt)),
              (n = Math.imul(k, it)),
              (n = (n + Math.imul(j, rt)) | 0),
              (o = Math.imul(j, it)),
              (i = (i + Math.imul(I, ot)) | 0),
              (n = (n + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (i = (i + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(U, ht)) | 0),
              (o = (o + Math.imul(U, at)) | 0),
              (i = (i + Math.imul(O, ft)) | 0),
              (n = (n + Math.imul(O, mt)) | 0),
              (n = (n + Math.imul(F, ft)) | 0),
              (o = (o + Math.imul(F, mt)) | 0),
              (i = (i + Math.imul(x, dt)) | 0),
              (n = (n + Math.imul(x, gt)) | 0),
              (n = (n + Math.imul(A, dt)) | 0),
              (o = (o + Math.imul(A, gt)) | 0));
            var Ft = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (i = Math.imul(k, ot)),
              (n = Math.imul(k, st)),
              (n = (n + Math.imul(j, ot)) | 0),
              (o = Math.imul(j, st)),
              (i = (i + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, at)) | 0),
              (i = (i + Math.imul(P, ft)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(U, ft)) | 0),
              (o = (o + Math.imul(U, mt)) | 0),
              (i = (i + Math.imul(O, dt)) | 0),
              (n = (n + Math.imul(O, gt)) | 0),
              (n = (n + Math.imul(F, dt)) | 0),
              (o = (o + Math.imul(F, gt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(k, ht)),
              (n = Math.imul(k, at)),
              (n = (n + Math.imul(j, ht)) | 0),
              (o = Math.imul(j, at)),
              (i = (i + Math.imul(I, ft)) | 0),
              (n = (n + Math.imul(I, mt)) | 0),
              (n = (n + Math.imul(T, ft)) | 0),
              (o = (o + Math.imul(T, mt)) | 0),
              (i = (i + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(P, gt)) | 0),
              (n = (n + Math.imul(U, dt)) | 0),
              (o = (o + Math.imul(U, gt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(k, ft)),
              (n = Math.imul(k, mt)),
              (n = (n + Math.imul(j, ft)) | 0),
              (o = Math.imul(j, mt)),
              (i = (i + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(I, gt)) | 0),
              (n = (n + Math.imul(T, dt)) | 0),
              (o = (o + Math.imul(T, gt)) | 0));
            var Ut = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (i = Math.imul(k, dt)),
              (n = Math.imul(k, gt)),
              (n = (n + Math.imul(j, dt)) | 0),
              (o = Math.imul(j, gt)));
            var Ct = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (h[0] = pt),
              (h[1] = vt),
              (h[2] = yt),
              (h[3] = wt),
              (h[4] = bt),
              (h[5] = Mt),
              (h[6] = Et),
              (h[7] = _t),
              (h[8] = Nt),
              (h[9] = Bt),
              (h[10] = xt),
              (h[11] = At),
              (h[12] = St),
              (h[13] = Ot),
              (h[14] = Ft),
              (h[15] = Rt),
              (h[16] = Pt),
              (h[17] = Ut),
              (h[18] = Ct),
              0 !== a && ((h[19] = a), r.length++),
              r
            );
          };
          function w(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var u = 67108863 & i,
                  h = Math.min(o, e.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= h;
                a++
              ) {
                var l = o - a,
                  f = 0 | t.words[l],
                  m = 0 | e.words[a],
                  c = f * m,
                  d = 67108863 & c;
                ((s = (s + ((c / 67108864) | 0)) | 0),
                  (d = (d + u) | 0),
                  (u = 67108863 & d),
                  (s = (s + (d >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = u), (i = s), (s = n));
            }
            return (0 !== i ? (r.words[o] = i) : r.length--, r._strip());
          }
          function b(t, e, r) {
            return w(t, e, r);
          }
          function M(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (y = v),
            (o.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : i < 63
                      ? v(this, t, e)
                      : i < 1024
                        ? w(this, t, e)
                        : b(this, t, e)),
                r
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (M.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (M.prototype.permute = function (t, e, r, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
            }),
            (M.prototype.transform = function (t, e, r, i, n, o) {
              this.permute(o, t, e, r, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var u = s << 1,
                    h = Math.cos((2 * Math.PI) / u),
                    a = Math.sin((2 * Math.PI) / u),
                    l = 0;
                  l < n;
                  l += u
                )
                  for (var f = h, m = a, c = 0; c < s; c++) {
                    var d = r[l + c],
                      g = i[l + c],
                      p = r[l + c + s],
                      v = i[l + c + s],
                      y = f * p - m * v;
                    ((v = f * v + m * p),
                      (p = y),
                      (r[l + c] = d + p),
                      (i[l + c] = g + v),
                      (r[l + c + s] = d - p),
                      (i[l + c + s] = g - v),
                      c !== u &&
                        ((y = h * f - a * m), (m = h * m + a * f), (f = y)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (M.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[r - i - 1]),
                    (t[r - i - 1] = n),
                    (n = e[i]),
                    (e[i] = -e[r - i - 1]),
                    (e[r - i - 1] = -n));
                }
            }),
            (M.prototype.normalize13b = function (t, e) {
              for (var r = 0, i = 0; i < e / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / e) +
                  Math.round(t[2 * i] / e) +
                  r;
                ((t[i] = 67108863 & n),
                  (r = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (M.prototype.convert13b = function (t, e, r, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) r[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (M.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                u = new Array(i),
                h = new Array(i),
                a = new Array(i),
                l = new Array(i),
                f = new Array(i),
                m = r.words;
              ((m.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, a, i),
                this.transform(s, o, u, h, i, n),
                this.transform(a, o, l, f, i, n));
              for (var c = 0; c < i; c++) {
                var d = u[c] * l[c] - h[c] * f[c];
                ((h[c] = u[c] * f[c] + h[c] * l[c]), (u[c] = d));
              }
              return (
                this.conjugate(u, h, i),
                this.transform(u, h, m, o, i, n),
                this.conjugate(m, o, i),
                this.normalize13b(m, i),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                b(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var r = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[n] = r), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
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
              var e = p(t);
              if (0 === e.length) return new o(1);
              for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                if (0 !== e[i]) break;
              if (++i < e.length)
                for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                  0 !== e[i] && (r = r.mul(n));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                n = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var u = this.words[e] & o,
                    h = ((0 | this.words[e]) - u) << r;
                  ((this.words[e] = h | s), (s = u >>> (26 - r)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                u = 67108863 ^ ((67108863 >>> o) << o),
                h = r;
              if (((n -= s), (n = Math.max(0, n)), h)) {
                for (var a = 0; a < s; a++) h.words[a] = this.words[a];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                var f = 0 | this.words[a];
                ((this.words[a] = (l << (26 - o)) | (f >>> o)), (l = f & u));
              }
              return (
                h && 0 !== l && (h.words[h.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, r) {
              return (i(0 === this.negative), this.iushrn(t, e, r));
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
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var n = 67108863 ^ ((67108863 >>> e) << e);
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
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
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
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
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
            (o.prototype._ishlnsubmul = function (t, e, r) {
              var n,
                o,
                s = t.length + r;
              this._expand(s);
              var u = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + r]) + u;
                var h = (0 | t.words[n]) * e;
                ((o -= 67108863 & h),
                  (u = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & o));
              }
              for (; n < this.length - r; n++)
                ((o = (0 | this.words[n + r]) + u),
                  (u = o >> 26),
                  (this.words[n + r] = 67108863 & o));
              if (0 === u) return this._strip();
              for (i(-1 === u), u = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + u),
                  (u = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                u = this._countBits(s);
              ((r = 26 - u),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (s = 0 | n.words[n.length - 1])));
              var h,
                a = i.length - n.length;
              if ("mod" !== e) {
                ((h = new o(null)),
                  (h.length = a + 1),
                  (h.words = new Array(h.length)));
                for (var l = 0; l < h.length; l++) h.words[l] = 0;
              }
              var f = i.clone()._ishlnsubmul(n, 1, a);
              0 === f.negative && ((i = f), h && (h.words[a] = 1));
              for (var m = a - 1; m >= 0; m--) {
                var c =
                  67108864 * (0 | i.words[n.length + m]) +
                  (0 | i.words[n.length + m - 1]);
                ((c = Math.min((c / s) | 0, 67108863)),
                  i._ishlnsubmul(n, c, m));
                while (0 !== i.negative)
                  (c--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, m),
                    i.isZero() || (i.negative ^= 1));
                h && (h.words[m] = c);
              }
              return (
                h && h._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: h || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((u = this.neg().divmod(t, e)),
                      "mod" !== e && (n = u.div.neg()),
                      "div" !== e &&
                        ((s = u.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((u = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = u.div.neg()),
                        { div: n, mod: u.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((u = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = u.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: u.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, s, u;
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
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = r.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (
                var r = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (r * n + (0 | this.words[o])) % t;
              return e ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (var r = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * r;
                ((this.words[n] = (o / t) | 0), (r = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new o(1),
                s = new o(0),
                u = new o(0),
                h = new o(1),
                a = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++a);
              var l = r.clone(),
                f = e.clone();
              while (!e.isZero()) {
                for (
                  var m = 0, c = 1;
                  0 === (e.words[0] & c) && m < 26;
                  ++m, c <<= 1
                );
                if (m > 0) {
                  e.iushrn(m);
                  while (m-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var d = 0, g = 1;
                  0 === (r.words[0] & g) && d < 26;
                  ++d, g <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0)
                    ((u.isOdd() || h.isOdd()) && (u.iadd(l), h.isub(f)),
                      u.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(u), s.isub(h))
                  : (r.isub(e), u.isub(n), h.isub(s));
              }
              return { a: u, b: h, gcd: r.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                u = new o(0),
                h = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (e.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  e.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var f = 0, m = 1;
                  0 === (r.words[0] & m) && f < 26;
                  ++f, m <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0) (u.isOdd() && u.iadd(h), u.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(u)) : (r.isub(e), u.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : u),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var i = 0; e.isEven() && r.isEven(); i++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                  var o = e;
                  ((e = r), (r = o));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(i);
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
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var o = n, s = r; 0 !== o && s < this.length; s++) {
                var u = 0 | this.words[s];
                ((u += o),
                  (o = u >>> 26),
                  (u &= 67108863),
                  (this.words[s] = u));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                  n = 0 | t.words[r];
                if (i !== n) {
                  i < n ? (e = -1) : i > n && (e = 1);
                  break;
                }
              }
              return e;
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
              return new S(t);
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
          var E = { k256: null, p224: null, p192: null, p25519: null };
          function _(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function N() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function B() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function x() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function A() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function S(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function O(t) {
            (S.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((_.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (_.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var i = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              );
            }),
            (_.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (_.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(N, _),
            (N.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (N.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                ((e += 977 * i),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * i + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(B, _),
            n(x, _),
            n(A, _),
            (A.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (E[t]) return E[t];
              var e;
              if ("k256" === t) e = new N();
              else if ("p224" === t) e = new B();
              else if ("p192" === t) e = new x();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new A();
              }
              return ((E[t] = e), e);
            }),
            (S.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (S.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (S.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (S.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (S.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (S.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (S.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (S.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (S.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (S.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (S.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (S.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (S.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (S.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((i(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var u = new o(1).toRed(this),
                h = u.redNeg(),
                a = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, a).cmp(h)) l.redIAdd(h);
              var f = this.pow(l, n),
                m = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                d = s;
              while (0 !== c.cmp(u)) {
                for (var g = c, p = 0; 0 !== g.cmp(u); p++) g = g.redSqr();
                i(p < d);
                var v = this.pow(f, new o(1).iushln(d - p - 1));
                ((m = m.redMul(v)),
                  (f = v.redSqr()),
                  (c = c.redMul(f)),
                  (d = p));
              }
              return m;
            }),
            (S.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (S.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                u = 0,
                h = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], f = a - 1; f >= 0; f--) {
                  var m = (l >> f) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== m || 0 !== u
                      ? ((u <<= 1),
                        (u |= m),
                        h++,
                        (h === r || (0 === n && 0 === f)) &&
                          ((s = this.mul(s, i[u])), (h = 0), (u = 0)))
                      : (h = 0));
                }
                a = 26;
              }
              return s;
            }),
            (S.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (S.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new O(t);
            }),
            n(O, S),
            (O.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (O.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (O.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (O.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (O.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    1762: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FixedNumber = e.FixedFormat = void 0),
        (e.formatFixed = d),
        (e.parseFixed = g));
      var i = r(97),
        n = r(115),
        o = r(595),
        s = r(594);
      const u = new n.Logger(o.version),
        h = {},
        a = s.BigNumber.from(0),
        l = s.BigNumber.from(-1);
      function f(t, e, r, i) {
        const o = { fault: e, operation: r };
        return (
          void 0 !== i && (o.value = i),
          u.throwError(t, n.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let m = "0";
      while (m.length < 256) m += m;
      function c(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (e) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + m.substring(0, t)
          : u.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function d(t, e) {
        null == e && (e = 0);
        const r = c(e);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(l));
        let n = t.mod(r).toString();
        while (n.length < r.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(r).toString();
        return ((t = 1 === r.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function g(t, e) {
        null == e && (e = 0);
        const r = c(e);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          u.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        (i && (t = t.substring(1)),
          "." === t && u.throwArgumentError("missing value", "value", t));
        const n = t.split(".");
        n.length > 2 &&
          u.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          h = n[1];
        (o || (o = "0"), h || (h = "0"));
        while ("0" === h[h.length - 1]) h = h.substring(0, h.length - 1);
        (h.length > r.length - 1 &&
          f("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === h && (h = "0"));
        while (h.length < r.length - 1) h += "0";
        const a = s.BigNumber.from(o),
          m = s.BigNumber.from(h);
        let d = a.mul(r).add(m);
        return (i && (d = d.mul(l)), d);
      }
      class FixedFormat {
        constructor(t, e, r, i) {
          (t !== h &&
            u.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = e),
            (this.width = r),
            (this.decimals = i),
            (this.name =
              (e ? "" : "u") + "fixed" + String(r) + "x" + String(i)),
            (this._multiplier = c(i)),
            Object.freeze(this));
        }
        static from(t) {
          if (t instanceof FixedFormat) return t;
          "number" === typeof t && (t = "fixed128x" + t);
          let e = !0,
            r = 128,
            i = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) e = !1;
            else {
              const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (n || u.throwArgumentError("invalid fixed format", "format", t),
                (e = "u" !== n[1]),
                (r = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (e, r, i) =>
              null == t[e]
                ? i
                : (typeof t[e] !== r &&
                    u.throwArgumentError(
                      "invalid fixed format (" + e + " not " + r + ")",
                      "format." + e,
                      t[e],
                    ),
                  t[e]);
            ((e = n("signed", "boolean", e)),
              (r = n("width", "number", r)),
              (i = n("decimals", "number", i)));
          }
          return (
            r % 8 &&
              u.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r,
              ),
            i > 80 &&
              u.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(h, e, r, i)
          );
        }
      }
      e.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, e, r, i) {
          (t !== h &&
            u.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = i),
            (this._hex = e),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            u.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const e = g(this._value, this.format.decimals),
            r = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.add(r),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const e = g(this._value, this.format.decimals),
            r = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.sub(r),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const e = g(this._value, this.format.decimals),
            r = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const e = g(this._value, this.format.decimals),
            r = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = FixedNumber.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (e = e.subUnsafe(p.toFormat(e.format))),
            e
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = FixedNumber.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (e = e.addUnsafe(p.toFormat(e.format))),
            e
          );
        }
        round(t) {
          null == t && (t = 0);
          const e = this.toString().split(".");
          if (
            (1 === e.length && e.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              u.throwArgumentError("invalid decimal count", "decimals", t),
            e[1].length <= t)
          )
            return this;
          const r = FixedNumber.from("1" + m.substring(0, t), this.format),
            i = v.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r);
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
          t % 8 && u.throwArgumentError("invalid byte width", "width", t);
          const e = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return (0, i.hexZeroPad)(e, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return FixedNumber.fromString(this._value, t);
        }
        static fromValue(t, e, r) {
          return (
            null != r ||
              null == e ||
              (0, s.isBigNumberish)(e) ||
              ((r = e), (e = null)),
            null == e && (e = 0),
            null == r && (r = "fixed"),
            FixedNumber.fromString(d(t, e), FixedFormat.from(r))
          );
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          const r = FixedFormat.from(e),
            n = g(t, r.decimals);
          !r.signed &&
            n.lt(a) &&
            f("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          r.signed
            ? (o = n.toTwos(r.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, r.width / 8)));
          const s = d(n, r.decimals);
          return new FixedNumber(h, o, s, r);
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          const r = FixedFormat.from(e);
          if ((0, i.arrayify)(t).length > r.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          r.signed && (n = n.fromTwos(r.width));
          const o = n.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            u = d(n, r.decimals);
          return new FixedNumber(h, o, u, r);
        }
        static from(t, e) {
          if ("string" === typeof t) return FixedNumber.fromString(t, e);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, e);
          try {
            return FixedNumber.fromValue(t, 0, e);
          } catch (r) {
            if (r.code !== n.Logger.errors.INVALID_ARGUMENT) throw r;
          }
          return u.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      e.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        v = FixedNumber.from("0.5");
    },
    1763: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HashZero = void 0));
      e.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1764: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EtherSymbol = void 0));
      e.EtherSymbol = "Ξ";
    },
    1765: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "strings/5.8.0";
    },
    1766: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._nameprepTableA1 = p),
        (e._nameprepTableB2 = v),
        (e._nameprepTableC = y),
        (e.nameprep = w));
      var i = r(292);
      function n(t) {
        if (t.length % 4 !== 0) throw new Error("bad data");
        let e = [];
        for (let r = 0; r < t.length; r += 4)
          e.push(parseInt(t.substring(r, r + 4), 16));
        return e;
      }
      function o(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let r = 0,
          i = {};
        return (
          t.split(",").forEach((t) => {
            let n = t.split(":");
            ((r += parseInt(n[0], 16)), (i[r] = e(n[1])));
          }),
          i
        );
      }
      function s(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let r = t.split("-");
          1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
          let i = e + parseInt(r[0], 16);
          return ((e = parseInt(r[1], 16)), { l: i, h: e });
        });
      }
      function u(t, e) {
        let r = 0;
        for (let i = 0; i < e.length; i++) {
          let n = e[i];
          if (
            ((r += n.l), t >= r && t <= r + n.h && (t - r) % (n.d || 1) === 0)
          ) {
            if (n.e && -1 !== n.e.indexOf(t - r)) continue;
            return n;
          }
        }
        return null;
      }
      const h = s(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d",
        ),
        a = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        l = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        f = o(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3",
        ),
        m = o(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7",
        ),
        c = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          n,
        ),
        d = s(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001",
        );
      function g(t) {
        return t.reduce(
          (t, e) => (
            e.forEach((e) => {
              t.push(e);
            }),
            t
          ),
          [],
        );
      }
      function p(t) {
        return !!u(t, h);
      }
      function v(t) {
        let e = u(t, l);
        if (e) return [t + e.s];
        let r = f[t];
        if (r) return r;
        let i = m[t];
        if (i) return [t + i[0]];
        let n = c[t];
        return n || null;
      }
      function y(t) {
        return !!u(t, d);
      }
      function w(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let e = (0, i.toUtf8CodePoints)(t);
        ((e = g(
          e.map((t) => {
            if (a.indexOf(t) >= 0) return [];
            if (t >= 65024 && t <= 65039) return [];
            let e = v(t);
            return e || [t];
          }),
        )),
          (e = (0, i.toUtf8CodePoints)(
            (0, i._toUtf8String)(e),
            i.UnicodeNormalizationForm.NFKC,
          )),
          e.forEach((t) => {
            if (y(t)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          e.forEach((t) => {
            if (p(t)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          }));
        let r = (0, i._toUtf8String)(e);
        if (
          "-" === r.substring(0, 1) ||
          "--" === r.substring(2, 4) ||
          "-" === r.substring(r.length - 1)
        )
          throw new Error("invalid hyphen");
        return r;
      }
    },
    1767: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "web/5.7.1";
    },
    1768: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.getUrl = o));
      var i = r(97),
        n = function (t, e, r, i) {
          function n(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(i.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                h(i["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : n(t.value).then(s, u);
            }
            h((i = i.apply(t, e || [])).next());
          });
        };
      function o(t, e) {
        return n(this, void 0, void 0, function* () {
          null == e && (e = {});
          const r = {
            method: e.method || "GET",
            headers: e.headers || {},
            body: e.body || void 0,
          };
          if (
            (!0 !== e.skipFetchSetup &&
              ((r.mode = "cors"),
              (r.cache = "no-cache"),
              (r.credentials = "same-origin"),
              (r.redirect = "follow"),
              (r.referrer = "client")),
            null != e.fetchOptions)
          ) {
            const t = e.fetchOptions;
            (t.mode && (r.mode = t.mode),
              t.cache && (r.cache = t.cache),
              t.credentials && (r.credentials = t.credentials),
              t.redirect && (r.redirect = t.redirect),
              t.referrer && (r.referrer = t.referrer));
          }
          const n = yield fetch(t, r),
            o = yield n.arrayBuffer(),
            s = {};
          return (
            n.headers.forEach
              ? n.headers.forEach((t, e) => {
                  s[e.toLowerCase()] = t;
                })
              : n.headers.keys().forEach((t) => {
                  s[t.toLowerCase()] = n.headers.get(t);
                }),
            {
              headers: s,
              statusCode: n.status,
              statusMessage: n.statusText,
              body: (0, i.arrayify)(new Uint8Array(o)),
            }
          );
        });
      }
    },
    292: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Utf8ErrorReason =
          e.Utf8ErrorFuncs =
          e.UnicodeNormalizationForm =
            void 0),
        (e._toEscapedUtf8String = p),
        (e._toUtf8String = v),
        (e.toUtf8Bytes = d),
        (e.toUtf8CodePoints = w),
        (e.toUtf8String = y));
      var i = r(97),
        n = r(115),
        o = r(1765);
      const s = new n.Logger(o.version);
      var u, h;
      function a(t, e, r, i, n) {
        return s.throwArgumentError(
          `invalid codepoint at offset ${e}; ${t}`,
          "bytes",
          r,
        );
      }
      function l(t, e, r, i, n) {
        if (t === h.BAD_PREFIX || t === h.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let i = e + 1; i < r.length; i++) {
            if (r[i] >> 6 !== 2) break;
            t++;
          }
          return t;
        }
        return t === h.OVERRUN ? r.length - e - 1 : 0;
      }
      function f(t, e, r, i, n) {
        return t === h.OVERLONG
          ? (i.push(n), 0)
          : (i.push(65533), l(t, e, r, i, n));
      }
      ((function (t) {
        ((t["current"] = ""),
          (t["NFC"] = "NFC"),
          (t["NFD"] = "NFD"),
          (t["NFKC"] = "NFKC"),
          (t["NFKD"] = "NFKD"));
      })(u || (e.UnicodeNormalizationForm = u = {})),
        (function (t) {
          ((t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte"),
            (t["BAD_PREFIX"] = "bad codepoint prefix"),
            (t["OVERRUN"] = "string overrun"),
            (t["MISSING_CONTINUE"] = "missing continuation byte"),
            (t["OUT_OF_RANGE"] = "out of UTF-8 range"),
            (t["UTF16_SURROGATE"] = "UTF-16 surrogate"),
            (t["OVERLONG"] = "overlong representation"));
        })(h || (e.Utf8ErrorReason = h = {})));
      const m = (e.Utf8ErrorFuncs = Object.freeze({
        error: a,
        ignore: l,
        replace: f,
      }));
      function c(t, e) {
        (null == e && (e = m.error), (t = (0, i.arrayify)(t)));
        const r = [];
        let n = 0;
        while (n < t.length) {
          const i = t[n++];
          if (i >> 7 === 0) {
            r.push(i);
            continue;
          }
          let o = null,
            s = null;
          if (192 === (224 & i)) ((o = 1), (s = 127));
          else if (224 === (240 & i)) ((o = 2), (s = 2047));
          else {
            if (240 !== (248 & i)) {
              n += e(
                128 === (192 & i) ? h.UNEXPECTED_CONTINUE : h.BAD_PREFIX,
                n - 1,
                t,
                r,
              );
              continue;
            }
            ((o = 3), (s = 65535));
          }
          if (n - 1 + o >= t.length) {
            n += e(h.OVERRUN, n - 1, t, r);
            continue;
          }
          let u = i & ((1 << (8 - o - 1)) - 1);
          for (let a = 0; a < o; a++) {
            let i = t[n];
            if (128 != (192 & i)) {
              ((n += e(h.MISSING_CONTINUE, n, t, r)), (u = null));
              break;
            }
            ((u = (u << 6) | (63 & i)), n++);
          }
          null !== u &&
            (u > 1114111
              ? (n += e(h.OUT_OF_RANGE, n - 1 - o, t, r, u))
              : u >= 55296 && u <= 57343
                ? (n += e(h.UTF16_SURROGATE, n - 1 - o, t, r, u))
                : u <= s
                  ? (n += e(h.OVERLONG, n - 1 - o, t, r, u))
                  : r.push(u));
        }
        return r;
      }
      function d(t, e) {
        (void 0 === e && (e = u.current),
          e != u.current && (s.checkNormalize(), (t = t.normalize(e))));
        let r = [];
        for (let i = 0; i < t.length; i++) {
          const e = t.charCodeAt(i);
          if (e < 128) r.push(e);
          else if (e < 2048) (r.push((e >> 6) | 192), r.push((63 & e) | 128));
          else if (55296 == (64512 & e)) {
            i++;
            const n = t.charCodeAt(i);
            if (i >= t.length || 56320 !== (64512 & n))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & e) << 10) + (1023 & n);
            (r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128));
          } else
            (r.push((e >> 12) | 224),
              r.push(((e >> 6) & 63) | 128),
              r.push((63 & e) | 128));
        }
        return (0, i.arrayify)(r);
      }
      function g(t) {
        const e = "0000" + t.toString(16);
        return "\\u" + e.substring(e.length - 4);
      }
      function p(t, e) {
        return (
          '"' +
          c(t, e)
            .map((t) => {
              if (t < 256) {
                switch (t) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (t >= 32 && t < 127) return String.fromCharCode(t);
              }
              return t <= 65535
                ? g(t)
                : ((t -= 65536),
                  g(55296 + ((t >> 10) & 1023)) + g(56320 + (1023 & t)));
            })
            .join("") +
          '"'
        );
      }
      function v(t) {
        return t
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(
                  55296 + ((t >> 10) & 1023),
                  56320 + (1023 & t),
                )),
          )
          .join("");
      }
      function y(t, e) {
        return v(c(t, e));
      }
      function w(t, e) {
        return (void 0 === e && (e = u.current), c(d(t, e)));
      }
    },
    594: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BigNumber = void 0),
        (e._base16To36 = w),
        (e._base36To16 = y),
        (e.isBigNumberish = m));
      var n = i(r(1760)),
        o = r(97),
        s = r(115),
        u = r(595),
        h = n.default.BN;
      const a = new s.Logger(u.version),
        l = {},
        f = 9007199254740991;
      function m(t) {
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
        constructor(t, e) {
          (t !== l &&
            a.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return g(p(this).fromTwos(t));
        }
        toTwos(t) {
          return g(p(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return g(p(this).add(p(t)));
        }
        sub(t) {
          return g(p(this).sub(p(t)));
        }
        div(t) {
          const e = BigNumber.from(t);
          return (
            e.isZero() && v("division-by-zero", "div"),
            g(p(this).div(p(t)))
          );
        }
        mul(t) {
          return g(p(this).mul(p(t)));
        }
        mod(t) {
          const e = p(t);
          return (
            e.isNeg() && v("division-by-zero", "mod"),
            g(p(this).umod(e))
          );
        }
        pow(t) {
          const e = p(t);
          return (e.isNeg() && v("negative-power", "pow"), g(p(this).pow(e)));
        }
        and(t) {
          const e = p(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              v("unbound-bitwise-result", "and"),
            g(p(this).and(e))
          );
        }
        or(t) {
          const e = p(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              v("unbound-bitwise-result", "or"),
            g(p(this).or(e))
          );
        }
        xor(t) {
          const e = p(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              v("unbound-bitwise-result", "xor"),
            g(p(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "mask"),
            g(p(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shl"),
            g(p(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shr"),
            g(p(this).shrn(t))
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
              ? new BigNumber(l, d(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(l, d(new h(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && v("underflow", "BigNumber.from", t),
              (t >= f || t <= -f) && v("overflow", "BigNumber.from", t),
              BigNumber.from(String(t))
            );
          const e = t;
          if ("bigint" === typeof e) return BigNumber.from(e.toString());
          if ((0, o.isBytes)(e)) return BigNumber.from((0, o.hexlify)(e));
          if (e)
            if (e.toHexString) {
              const t = e.toHexString();
              if ("string" === typeof t) return BigNumber.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && "BigNumber" === e.type && (t = e.hex),
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
      function d(t) {
        if ("string" !== typeof t) return d(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = d(t)),
            "0x00" === t ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        t.length % 2 && (t = "0x0" + t.substring(2));
        while (t.length > 4 && "0x00" === t.substring(0, 4))
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return BigNumber.from(d(t));
      }
      function p(t) {
        const e = BigNumber.from(t).toHexString();
        return "-" === e[0]
          ? new h("-" + e.substring(3), 16)
          : new h(e.substring(2), 16);
      }
      function v(t, e, r) {
        const i = { fault: t, operation: e };
        return (
          null != r && (i.value = r),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function y(t) {
        return new h(t, 36).toString(16);
      }
      function w(t) {
        return new h(t, 16).toString(36);
      }
      e.BigNumber = BigNumber;
    },
    595: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "bignumber/5.8.0";
    },
    97: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.arrayify = f),
        (e.concat = m),
        (e.hexConcat = b),
        (e.hexDataLength = y),
        (e.hexDataSlice = w),
        (e.hexStripZeros = E),
        (e.hexValue = M),
        (e.hexZeroPad = _),
        (e.hexlify = v),
        (e.isBytes = l),
        (e.isBytesLike = h),
        (e.isHexString = g),
        (e.joinSignature = B),
        (e.splitSignature = N),
        (e.stripZeros = c),
        (e.zeroPad = d));
      var i = r(115),
        n = r(1751);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function u(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return u(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function h(t) {
        return (g(t) && !(t.length % 2)) || l(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function l(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function f(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          while (t) (e.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === e.length && e.push(0), u(new Uint8Array(e)));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          g(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
                ? (r += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return u(new Uint8Array(i));
        }
        return l(t)
          ? u(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function m(t) {
        const e = t.map((t) => f(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          i = new Uint8Array(r);
        return (e.reduce((t, e) => (i.set(e, t), t + e.length), 0), u(i));
      }
      function c(t) {
        let e = f(t);
        if (0 === e.length) return e;
        let r = 0;
        while (r < e.length && 0 === e[r]) r++;
        return (r && (e = e.slice(r)), e);
      }
      function d(t, e) {
        ((t = f(t)),
          t.length > e &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(e);
        return (r.set(t, e - t.length), u(r));
      }
      function g(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      const p = "0123456789abcdef";
      function v(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          while (t) ((e = p[15 & t] + e), (t = Math.floor(t / 16)));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (g(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            e += p[(240 & i) >> 4] + p[15 & i];
          }
          return e;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function y(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!g(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function w(t, e, r) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!g(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function b(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += v(t).substring(2);
          }),
          e
        );
      }
      function M(t) {
        const e = E(v(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function E(t) {
        ("string" !== typeof t && (t = v(t)),
          g(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let e = 0;
        while (e < t.length && "0" === t[e]) e++;
        return "0x" + t.substring(e);
      }
      function _(t, e) {
        ("string" !== typeof t
          ? (t = v(t))
          : g(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * e + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * e + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function N(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let r = f(t);
          (64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = v(r.slice(0, 32))),
              (e.s = v(r.slice(32, 64))))
            : 65 === r.length
              ? ((e.r = v(r.slice(0, 32))),
                (e.s = v(r.slice(32, 64))),
                (e.v = r[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = v(r.slice(32, 64))));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            const r = d(f(e._vs), 32);
            e._vs = v(r);
            const i = r[0] >= 128 ? 1 : 0;
            (null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (r[0] &= 127));
            const n = v(r);
            null == e.s
              ? (e.s = n)
              : e.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === e.v || 1 === e.v
                ? (e.recoveryParam = e.v)
                : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != e.r && g(e.r)
            ? (e.r = _(e.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != e.s && g(e.s)
              ? (e.s = _(e.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const r = f(e.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128));
          const i = v(r);
          (e._vs &&
            (g(e._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = _(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function B(t) {
        return (
          (t = N(t)),
          v(m([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
  },
]);
