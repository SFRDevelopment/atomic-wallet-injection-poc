(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [109],
  {
    114: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1663);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let u = s["default"],
        h = null;
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
      const f = a();
      var l, m;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(l || (r.LogLevel = l = {})),
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
        })(m || (r.ErrorCode = m = {})));
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
            u > s[e] || console.log.apply(console, r));
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
            } catch (u) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case m.NUMERIC_FAULT: {
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
            case m.CALL_EXCEPTION:
            case m.INSUFFICIENT_FUNDS:
            case m.MISSING_NEW:
            case m.NONCE_EXPIRED:
            case m.REPLACEMENT_UNDERPRICED:
            case m.TRANSACTION_REPLACED:
            case m.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const u = new Error(t);
          return (
            (u.reason = n),
            (u.code = r),
            Object.keys(e).forEach(function (t) {
              u[t] = e[t];
            }),
            u
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
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f },
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
          return (h || (h = new Logger(i.version)), h);
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
            ? (u = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = m), (Logger.levels = l));
    },
    1660: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.keccak256 = v),
        (r.pack = p),
        (r.sha256 = b));
      var i = e(577),
        n = e(95),
        o = e(1666),
        s = e(1667),
        u = e(1670),
        h = e(114),
        a = e(1679);
      const f = new RegExp("^bytes([0-9]+)$"),
        l = new RegExp("^(u?int)([0-9]*)$"),
        m = new RegExp("^(.*)\\[([0-9]*)\\]$"),
        c = "0000000000000000000000000000000000000000000000000000000000000000",
        d = new h.Logger(a.version);
      function g(t, r, e) {
        switch (t) {
          case "address":
            return e ? (0, n.zeroPad)(r, 32) : (0, n.arrayify)(r);
          case "string":
            return (0, u.toUtf8Bytes)(r);
          case "bytes":
            return (0, n.arrayify)(r);
          case "bool":
            return (
              (r = r ? "0x01" : "0x00"),
              e ? (0, n.zeroPad)(r, 32) : (0, n.arrayify)(r)
            );
        }
        let o = t.match(l);
        if (o) {
          let s = parseInt(o[2] || "256");
          return (
            ((o[2] && String(s) !== o[2]) ||
              s % 8 !== 0 ||
              0 === s ||
              s > 256) &&
              d.throwArgumentError("invalid number type", "type", t),
            e && (s = 256),
            (r = i.BigNumber.from(r).toTwos(s)),
            (0, n.zeroPad)(r, s / 8)
          );
        }
        if (((o = t.match(f)), o)) {
          const i = parseInt(o[1]);
          return (
            (String(i) !== o[1] || 0 === i || i > 32) &&
              d.throwArgumentError("invalid bytes type", "type", t),
            (0, n.arrayify)(r).byteLength !== i &&
              d.throwArgumentError("invalid value for " + t, "value", r),
            e ? (0, n.arrayify)((r + c).substring(0, 66)) : r
          );
        }
        if (((o = t.match(m)), o && Array.isArray(r))) {
          const e = o[1],
            i = parseInt(o[2] || String(r.length));
          i != r.length &&
            d.throwArgumentError("invalid array length for " + t, "value", r);
          const s = [];
          return (
            r.forEach(function (t) {
              s.push(g(e, t, !0));
            }),
            (0, n.concat)(s)
          );
        }
        return d.throwArgumentError("invalid type", "type", t);
      }
      function p(t, r) {
        t.length != r.length &&
          d.throwArgumentError(
            "wrong number of values; expected ${ types.length }",
            "values",
            r,
          );
        const e = [];
        return (
          t.forEach(function (t, i) {
            e.push(g(t, r[i]));
          }),
          (0, n.hexlify)((0, n.concat)(e))
        );
      }
      function v(t, r) {
        return (0, o.keccak256)(p(t, r));
      }
      function b(t, r) {
        return (0, s.sha256)(p(t, r));
      }
    },
    1661: function (t, r, e) {
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
                : e(1662).Buffer;
          } catch (S) {}
          function u(t, r) {
            var e = t.charCodeAt(r);
            return e >= 48 && e <= 57
              ? e - 48
              : e >= 65 && e <= 70
                ? e - 55
                : e >= 97 && e <= 102
                  ? e - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function h(t, r, e) {
            var i = u(t, e);
            return (e - 1 >= r && (i |= u(t, e - 1) << 4), i);
          }
          function a(t, r, e, n) {
            for (
              var o = 0, s = 0, u = Math.min(t.length, e), h = r;
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
          function f(t, r) {
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
                u = 0;
              if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
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
                  ((n = h(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var u = t.length - r;
                for (i = u % 2 === 0 ? r + 1 : r; i < t.length; i += 2)
                  ((n = h(t, r, i) << o),
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
                  u = Math.min(o, o - s) + e,
                  h = 0,
                  f = e;
                f < u;
                f += i
              )
                ((h = a(t, f, f + i, r)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var l = 1;
                for (h = a(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                (this.imuln(l),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
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
              f(t, this);
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
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
            } catch (S) {
              o.prototype.inspect = l;
            }
          else o.prototype.inspect = l;
          function l() {
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
          ((o.prototype.toString = function (t, r) {
            var e;
            if (((t = t || 10), (r = 0 | r || 1), 16 === t || "hex" === t)) {
              e = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var u = this.words[s],
                  h = (16777215 & ((u << n) | o)).toString(16);
                ((o = (u >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (e =
                    0 !== o || s !== this.length - 1
                      ? m[6 - h.length] + h + e
                      : h + e));
              }
              0 !== o && (e = o.toString(16) + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = c[t],
                f = d[t];
              e = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var g = l.modrn(f).toString(t);
                ((l = l.idivn(f)),
                  (e = l.isZero() ? g + e : m[a - g.length] + g + e));
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
          var g = function (t, r) {
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
              u = 67108863 & s,
              h = (s / 67108864) | 0;
            e.words[0] = u;
            for (var a = 1; a < i; a++) {
              for (
                var f = h >>> 26,
                  l = 67108863 & h,
                  m = Math.min(a, r.length - 1),
                  c = Math.max(0, a - t.length + 1);
                c <= m;
                c++
              ) {
                var d = (a - c) | 0;
                ((n = 0 | t.words[d]),
                  (o = 0 | r.words[c]),
                  (s = n * o + l),
                  (f += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((e.words[a] = 0 | l), (h = 0 | f));
            }
            return (0 !== h ? (e.words[a] = 0 | h) : e.length--, e._strip());
          }
          ((o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = g(t, o),
              u = "le" === r ? "LE" : "BE";
            return (this["_toArrayLike" + u](s, n), s);
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
          var b = function (t, r, e) {
            var i,
              n,
              o,
              s = t.words,
              u = r.words,
              h = e.words,
              a = 0,
              f = 0 | s[0],
              l = 8191 & f,
              m = f >>> 13,
              c = 0 | s[1],
              d = 8191 & c,
              g = c >>> 13,
              p = 0 | s[2],
              v = 8191 & p,
              b = p >>> 13,
              y = 0 | s[3],
              w = 8191 & y,
              M = y >>> 13,
              E = 0 | s[4],
              _ = 8191 & E,
              N = E >>> 13,
              B = 0 | s[5],
              F = 8191 & B,
              x = B >>> 13,
              A = 0 | s[6],
              O = 8191 & A,
              S = A >>> 13,
              U = 0 | s[7],
              P = 8191 & U,
              R = U >>> 13,
              C = 0 | s[8],
              I = 8191 & C,
              T = C >>> 13,
              L = 0 | s[9],
              D = 8191 & L,
              j = L >>> 13,
              k = 0 | u[0],
              G = 8191 & k,
              Z = k >>> 13,
              z = 0 | u[1],
              H = 8191 & z,
              V = z >>> 13,
              q = 0 | u[2],
              X = 8191 & q,
              K = q >>> 13,
              $ = 0 | u[3],
              W = 8191 & $,
              J = $ >>> 13,
              Q = 0 | u[4],
              Y = 8191 & Q,
              tt = Q >>> 13,
              rt = 0 | u[5],
              et = 8191 & rt,
              it = rt >>> 13,
              nt = 0 | u[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ut = 0 | u[7],
              ht = 8191 & ut,
              at = ut >>> 13,
              ft = 0 | u[8],
              lt = 8191 & ft,
              mt = ft >>> 13,
              ct = 0 | u[9],
              dt = 8191 & ct,
              gt = ct >>> 13;
            ((e.negative = t.negative ^ r.negative),
              (e.length = 19),
              (i = Math.imul(l, G)),
              (n = Math.imul(l, Z)),
              (n = (n + Math.imul(m, G)) | 0),
              (o = Math.imul(m, Z)));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(d, G)),
              (n = Math.imul(d, Z)),
              (n = (n + Math.imul(g, G)) | 0),
              (o = Math.imul(g, Z)),
              (i = (i + Math.imul(l, H)) | 0),
              (n = (n + Math.imul(l, V)) | 0),
              (n = (n + Math.imul(m, H)) | 0),
              (o = (o + Math.imul(m, V)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, G)),
              (n = Math.imul(v, Z)),
              (n = (n + Math.imul(b, G)) | 0),
              (o = Math.imul(b, Z)),
              (i = (i + Math.imul(d, H)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(g, H)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(l, X)) | 0),
              (n = (n + Math.imul(l, K)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (o = (o + Math.imul(m, K)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(w, G)),
              (n = Math.imul(w, Z)),
              (n = (n + Math.imul(M, G)) | 0),
              (o = Math.imul(M, Z)),
              (i = (i + Math.imul(v, H)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(b, H)) | 0),
              (o = (o + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(d, X)) | 0),
              (n = (n + Math.imul(d, K)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (o = (o + Math.imul(g, K)) | 0),
              (i = (i + Math.imul(l, W)) | 0),
              (n = (n + Math.imul(l, J)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (o = (o + Math.imul(m, J)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(_, G)),
              (n = Math.imul(_, Z)),
              (n = (n + Math.imul(N, G)) | 0),
              (o = Math.imul(N, Z)),
              (i = (i + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(w, V)) | 0),
              (n = (n + Math.imul(M, H)) | 0),
              (o = (o + Math.imul(M, V)) | 0),
              (i = (i + Math.imul(v, X)) | 0),
              (n = (n + Math.imul(v, K)) | 0),
              (n = (n + Math.imul(b, X)) | 0),
              (o = (o + Math.imul(b, K)) | 0),
              (i = (i + Math.imul(d, W)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (n = (n + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (i = (i + Math.imul(l, Y)) | 0),
              (n = (n + Math.imul(l, tt)) | 0),
              (n = (n + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, tt)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(F, G)),
              (n = Math.imul(F, Z)),
              (n = (n + Math.imul(x, G)) | 0),
              (o = Math.imul(x, Z)),
              (i = (i + Math.imul(_, H)) | 0),
              (n = (n + Math.imul(_, V)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (o = (o + Math.imul(N, V)) | 0),
              (i = (i + Math.imul(w, X)) | 0),
              (n = (n + Math.imul(w, K)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (o = (o + Math.imul(M, K)) | 0),
              (i = (i + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(l, et)) | 0),
              (n = (n + Math.imul(l, it)) | 0),
              (n = (n + Math.imul(m, et)) | 0),
              (o = (o + Math.imul(m, it)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(O, G)),
              (n = Math.imul(O, Z)),
              (n = (n + Math.imul(S, G)) | 0),
              (o = Math.imul(S, Z)),
              (i = (i + Math.imul(F, H)) | 0),
              (n = (n + Math.imul(F, V)) | 0),
              (n = (n + Math.imul(x, H)) | 0),
              (o = (o + Math.imul(x, V)) | 0),
              (i = (i + Math.imul(_, X)) | 0),
              (n = (n + Math.imul(_, K)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (o = (o + Math.imul(N, K)) | 0),
              (i = (i + Math.imul(w, W)) | 0),
              (n = (n + Math.imul(w, J)) | 0),
              (n = (n + Math.imul(M, W)) | 0),
              (o = (o + Math.imul(M, J)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(d, et)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(g, et)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(l, ot)) | 0),
              (n = (n + Math.imul(l, st)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(P, G)),
              (n = Math.imul(P, Z)),
              (n = (n + Math.imul(R, G)) | 0),
              (o = Math.imul(R, Z)),
              (i = (i + Math.imul(O, H)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (n = (n + Math.imul(S, H)) | 0),
              (o = (o + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(F, X)) | 0),
              (n = (n + Math.imul(F, K)) | 0),
              (n = (n + Math.imul(x, X)) | 0),
              (o = (o + Math.imul(x, K)) | 0),
              (i = (i + Math.imul(_, W)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (n = (n + Math.imul(N, W)) | 0),
              (o = (o + Math.imul(N, J)) | 0),
              (i = (i + Math.imul(w, Y)) | 0),
              (n = (n + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(M, Y)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (i = (i + Math.imul(v, et)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(b, et)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (n = (n + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(l, ht)) | 0),
              (n = (n + Math.imul(l, at)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (o = (o + Math.imul(m, at)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(I, G)),
              (n = Math.imul(I, Z)),
              (n = (n + Math.imul(T, G)) | 0),
              (o = Math.imul(T, Z)),
              (i = (i + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(R, H)) | 0),
              (o = (o + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(O, X)) | 0),
              (n = (n + Math.imul(O, K)) | 0),
              (n = (n + Math.imul(S, X)) | 0),
              (o = (o + Math.imul(S, K)) | 0),
              (i = (i + Math.imul(F, W)) | 0),
              (n = (n + Math.imul(F, J)) | 0),
              (n = (n + Math.imul(x, W)) | 0),
              (o = (o + Math.imul(x, J)) | 0),
              (i = (i + Math.imul(_, Y)) | 0),
              (n = (n + Math.imul(_, tt)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(w, et)) | 0),
              (n = (n + Math.imul(w, it)) | 0),
              (n = (n + Math.imul(M, et)) | 0),
              (o = (o + Math.imul(M, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (i = (i + Math.imul(d, ht)) | 0),
              (n = (n + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(g, ht)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(l, lt)) | 0),
              (n = (n + Math.imul(l, mt)) | 0),
              (n = (n + Math.imul(m, lt)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(D, G)),
              (n = Math.imul(D, Z)),
              (n = (n + Math.imul(j, G)) | 0),
              (o = Math.imul(j, Z)),
              (i = (i + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(T, H)) | 0),
              (o = (o + Math.imul(T, V)) | 0),
              (i = (i + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(P, K)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (o = (o + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(O, W)) | 0),
              (n = (n + Math.imul(O, J)) | 0),
              (n = (n + Math.imul(S, W)) | 0),
              (o = (o + Math.imul(S, J)) | 0),
              (i = (i + Math.imul(F, Y)) | 0),
              (n = (n + Math.imul(F, tt)) | 0),
              (n = (n + Math.imul(x, Y)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (i = (i + Math.imul(_, et)) | 0),
              (n = (n + Math.imul(_, it)) | 0),
              (n = (n + Math.imul(N, et)) | 0),
              (o = (o + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(w, ot)) | 0),
              (n = (n + Math.imul(w, st)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (i = (i + Math.imul(v, ht)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(b, ht)) | 0),
              (o = (o + Math.imul(b, at)) | 0),
              (i = (i + Math.imul(d, lt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(g, lt)) | 0),
              (o = (o + Math.imul(g, mt)) | 0),
              (i = (i + Math.imul(l, dt)) | 0),
              (n = (n + Math.imul(l, gt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (o = (o + Math.imul(m, gt)) | 0));
            var Bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (i = Math.imul(D, H)),
              (n = Math.imul(D, V)),
              (n = (n + Math.imul(j, H)) | 0),
              (o = Math.imul(j, V)),
              (i = (i + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(I, K)) | 0),
              (n = (n + Math.imul(T, X)) | 0),
              (o = (o + Math.imul(T, K)) | 0),
              (i = (i + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(R, W)) | 0),
              (o = (o + Math.imul(R, J)) | 0),
              (i = (i + Math.imul(O, Y)) | 0),
              (n = (n + Math.imul(O, tt)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(F, et)) | 0),
              (n = (n + Math.imul(F, it)) | 0),
              (n = (n + Math.imul(x, et)) | 0),
              (o = (o + Math.imul(x, it)) | 0),
              (i = (i + Math.imul(_, ot)) | 0),
              (n = (n + Math.imul(_, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (i = (i + Math.imul(w, ht)) | 0),
              (n = (n + Math.imul(w, at)) | 0),
              (n = (n + Math.imul(M, ht)) | 0),
              (o = (o + Math.imul(M, at)) | 0),
              (i = (i + Math.imul(v, lt)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(b, lt)) | 0),
              (o = (o + Math.imul(b, mt)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, gt)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (o = (o + Math.imul(g, gt)) | 0));
            var Ft = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (i = Math.imul(D, X)),
              (n = Math.imul(D, K)),
              (n = (n + Math.imul(j, X)) | 0),
              (o = Math.imul(j, K)),
              (i = (i + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(T, W)) | 0),
              (o = (o + Math.imul(T, J)) | 0),
              (i = (i + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(R, Y)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(O, et)) | 0),
              (n = (n + Math.imul(O, it)) | 0),
              (n = (n + Math.imul(S, et)) | 0),
              (o = (o + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(F, ot)) | 0),
              (n = (n + Math.imul(F, st)) | 0),
              (n = (n + Math.imul(x, ot)) | 0),
              (o = (o + Math.imul(x, st)) | 0),
              (i = (i + Math.imul(_, ht)) | 0),
              (n = (n + Math.imul(_, at)) | 0),
              (n = (n + Math.imul(N, ht)) | 0),
              (o = (o + Math.imul(N, at)) | 0),
              (i = (i + Math.imul(w, lt)) | 0),
              (n = (n + Math.imul(w, mt)) | 0),
              (n = (n + Math.imul(M, lt)) | 0),
              (o = (o + Math.imul(M, mt)) | 0),
              (i = (i + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(v, gt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (o = (o + Math.imul(b, gt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(D, W)),
              (n = Math.imul(D, J)),
              (n = (n + Math.imul(j, W)) | 0),
              (o = Math.imul(j, J)),
              (i = (i + Math.imul(I, Y)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (i = (i + Math.imul(P, et)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(R, et)) | 0),
              (o = (o + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(O, ot)) | 0),
              (n = (n + Math.imul(O, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (i = (i + Math.imul(F, ht)) | 0),
              (n = (n + Math.imul(F, at)) | 0),
              (n = (n + Math.imul(x, ht)) | 0),
              (o = (o + Math.imul(x, at)) | 0),
              (i = (i + Math.imul(_, lt)) | 0),
              (n = (n + Math.imul(_, mt)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (o = (o + Math.imul(N, mt)) | 0),
              (i = (i + Math.imul(w, dt)) | 0),
              (n = (n + Math.imul(w, gt)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (o = (o + Math.imul(M, gt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(D, Y)),
              (n = Math.imul(D, tt)),
              (n = (n + Math.imul(j, Y)) | 0),
              (o = Math.imul(j, tt)),
              (i = (i + Math.imul(I, et)) | 0),
              (n = (n + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(T, et)) | 0),
              (o = (o + Math.imul(T, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(O, ht)) | 0),
              (n = (n + Math.imul(O, at)) | 0),
              (n = (n + Math.imul(S, ht)) | 0),
              (o = (o + Math.imul(S, at)) | 0),
              (i = (i + Math.imul(F, lt)) | 0),
              (n = (n + Math.imul(F, mt)) | 0),
              (n = (n + Math.imul(x, lt)) | 0),
              (o = (o + Math.imul(x, mt)) | 0),
              (i = (i + Math.imul(_, dt)) | 0),
              (n = (n + Math.imul(_, gt)) | 0),
              (n = (n + Math.imul(N, dt)) | 0),
              (o = (o + Math.imul(N, gt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(D, et)),
              (n = Math.imul(D, it)),
              (n = (n + Math.imul(j, et)) | 0),
              (o = Math.imul(j, it)),
              (i = (i + Math.imul(I, ot)) | 0),
              (n = (n + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (i = (i + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(R, ht)) | 0),
              (o = (o + Math.imul(R, at)) | 0),
              (i = (i + Math.imul(O, lt)) | 0),
              (n = (n + Math.imul(O, mt)) | 0),
              (n = (n + Math.imul(S, lt)) | 0),
              (o = (o + Math.imul(S, mt)) | 0),
              (i = (i + Math.imul(F, dt)) | 0),
              (n = (n + Math.imul(F, gt)) | 0),
              (n = (n + Math.imul(x, dt)) | 0),
              (o = (o + Math.imul(x, gt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(D, ot)),
              (n = Math.imul(D, st)),
              (n = (n + Math.imul(j, ot)) | 0),
              (o = Math.imul(j, st)),
              (i = (i + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, at)) | 0),
              (i = (i + Math.imul(P, lt)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(R, lt)) | 0),
              (o = (o + Math.imul(R, mt)) | 0),
              (i = (i + Math.imul(O, dt)) | 0),
              (n = (n + Math.imul(O, gt)) | 0),
              (n = (n + Math.imul(S, dt)) | 0),
              (o = (o + Math.imul(S, gt)) | 0));
            var Ut = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (i = Math.imul(D, ht)),
              (n = Math.imul(D, at)),
              (n = (n + Math.imul(j, ht)) | 0),
              (o = Math.imul(j, at)),
              (i = (i + Math.imul(I, lt)) | 0),
              (n = (n + Math.imul(I, mt)) | 0),
              (n = (n + Math.imul(T, lt)) | 0),
              (o = (o + Math.imul(T, mt)) | 0),
              (i = (i + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(P, gt)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (o = (o + Math.imul(R, gt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(D, lt)),
              (n = Math.imul(D, mt)),
              (n = (n + Math.imul(j, lt)) | 0),
              (o = Math.imul(j, mt)),
              (i = (i + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(I, gt)) | 0),
              (n = (n + Math.imul(T, dt)) | 0),
              (o = (o + Math.imul(T, gt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(D, dt)),
              (n = Math.imul(D, gt)),
              (n = (n + Math.imul(j, dt)) | 0),
              (o = Math.imul(j, gt)));
            var Ct = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (h[0] = pt),
              (h[1] = vt),
              (h[2] = bt),
              (h[3] = yt),
              (h[4] = wt),
              (h[5] = Mt),
              (h[6] = Et),
              (h[7] = _t),
              (h[8] = Nt),
              (h[9] = Bt),
              (h[10] = Ft),
              (h[11] = xt),
              (h[12] = At),
              (h[13] = Ot),
              (h[14] = St),
              (h[15] = Ut),
              (h[16] = Pt),
              (h[17] = Rt),
              (h[18] = Ct),
              0 !== a && ((h[19] = a), e.length++),
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
                var u = 67108863 & i,
                  h = Math.min(o, r.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= h;
                a++
              ) {
                var f = o - a,
                  l = 0 | t.words[f],
                  m = 0 | r.words[a],
                  c = l * m,
                  d = 67108863 & c;
                ((s = (s + ((c / 67108864) | 0)) | 0),
                  (d = (d + u) | 0),
                  (u = 67108863 & d),
                  (s = (s + (d >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((e.words[o] = u), (i = s), (s = n));
            }
            return (0 !== i ? (e.words[o] = i) : e.length--, e._strip());
          }
          function w(t, r, e) {
            return y(t, r, e);
          }
          function M(t, r) {
            ((this.x = t), (this.y = r));
          }
          (Math.imul || (b = v),
            (o.prototype.mulTo = function (t, r) {
              var e,
                i = this.length + t.length;
              return (
                (e =
                  10 === this.length && 10 === t.length
                    ? b(this, t, r)
                    : i < 63
                      ? v(this, t, r)
                      : i < 1024
                        ? y(this, t, r)
                        : w(this, t, r)),
                e
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                r[i] = this.revBin(i, e, t);
              return r;
            }),
            (M.prototype.revBin = function (t, r, e) {
              if (0 === t || t === e - 1) return t;
              for (var i = 0, n = 0; n < r; n++)
                ((i |= (1 & t) << (r - n - 1)), (t >>= 1));
              return i;
            }),
            (M.prototype.permute = function (t, r, e, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = r[t[s]]), (n[s] = e[t[s]]));
            }),
            (M.prototype.transform = function (t, r, e, i, n, o) {
              this.permute(o, t, r, e, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var u = s << 1,
                    h = Math.cos((2 * Math.PI) / u),
                    a = Math.sin((2 * Math.PI) / u),
                    f = 0;
                  f < n;
                  f += u
                )
                  for (var l = h, m = a, c = 0; c < s; c++) {
                    var d = e[f + c],
                      g = i[f + c],
                      p = e[f + c + s],
                      v = i[f + c + s],
                      b = l * p - m * v;
                    ((v = l * v + m * p),
                      (p = b),
                      (e[f + c] = d + p),
                      (i[f + c] = g + v),
                      (e[f + c + s] = d - p),
                      (i[f + c + s] = g - v),
                      c !== u &&
                        ((b = h * l - a * m), (m = h * m + a * l), (l = b)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, r) {
              var e = 1 | Math.max(r, t),
                i = 1 & e,
                n = 0;
              for (e = (e / 2) | 0; e; e >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (M.prototype.conjugate = function (t, r, e) {
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
            (M.prototype.normalize13b = function (t, r) {
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
            (M.prototype.convert13b = function (t, r, e, n) {
              for (var o = 0, s = 0; s < r; s++)
                ((o += 0 | t[s]),
                  (e[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (e[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * r; s < n; ++s) e[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (t) {
              for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
              return r;
            }),
            (M.prototype.mulp = function (t, r, e) {
              var i = 2 * this.guessLen13b(t.length, r.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                u = new Array(i),
                h = new Array(i),
                a = new Array(i),
                f = new Array(i),
                l = new Array(i),
                m = e.words;
              ((m.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(r.words, r.length, a, i),
                this.transform(s, o, u, h, i, n),
                this.transform(a, o, f, l, i, n));
              for (var c = 0; c < i; c++) {
                var d = u[c] * f[c] - h[c] * l[c];
                ((h[c] = u[c] * l[c] + h[c] * f[c]), (u[c] = d));
              }
              return (
                this.conjugate(u, h, i),
                this.transform(u, h, m, o, i, n),
                this.conjugate(m, o, i),
                this.normalize13b(m, i),
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
                w(this, t, r)
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
                  var u = this.words[r] & o,
                    h = ((0 | this.words[r]) - u) << e;
                  ((this.words[r] = h | s), (s = u >>> (26 - e)));
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
                u = 67108863 ^ ((67108863 >>> o) << o),
                h = e;
              if (((n -= s), (n = Math.max(0, n)), h)) {
                for (var a = 0; a < s; a++) h.words[a] = this.words[a];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var f = 0;
              for (a = this.length - 1; a >= 0 && (0 !== f || a >= n); a--) {
                var l = 0 | this.words[a];
                ((this.words[a] = (f << (26 - o)) | (l >>> o)), (f = l & u));
              }
              return (
                h && 0 !== f && (h.words[h.length++] = f),
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
              var u = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + e]) + u;
                var h = (0 | t.words[n]) * r;
                ((o -= 67108863 & h),
                  (u = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + e] = 67108863 & o));
              }
              for (; n < this.length - e; n++)
                ((o = (0 | this.words[n + e]) + u),
                  (u = o >> 26),
                  (this.words[n + e] = 67108863 & o));
              if (0 === u) return this._strip();
              for (i(-1 === u), u = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + u),
                  (u = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, r) {
              var e = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                u = this._countBits(s);
              ((e = 26 - u),
                0 !== e &&
                  ((n = n.ushln(e)),
                  i.iushln(e),
                  (s = 0 | n.words[n.length - 1])));
              var h,
                a = i.length - n.length;
              if ("mod" !== r) {
                ((h = new o(null)),
                  (h.length = a + 1),
                  (h.words = new Array(h.length)));
                for (var f = 0; f < h.length; f++) h.words[f] = 0;
              }
              var l = i.clone()._ishlnsubmul(n, 1, a);
              0 === l.negative && ((i = l), h && (h.words[a] = 1));
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
                "div" !== r && 0 !== e && i.iushrn(e),
                { div: h || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, r, e) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((u = this.neg().divmod(t, r)),
                      "mod" !== r && (n = u.div.neg()),
                      "div" !== r &&
                        ((s = u.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((u = this.divmod(t.neg(), r)),
                        "mod" !== r && (n = u.div.neg()),
                        { div: n, mod: u.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((u = this.neg().divmod(t.neg(), r)),
                          "div" !== r &&
                            ((s = u.mod.neg()),
                            e && 0 !== s.negative && s.isub(t)),
                          { div: u.div, mod: s })
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
                u = new o(0),
                h = new o(1),
                a = 0;
              while (r.isEven() && e.isEven()) (r.iushrn(1), e.iushrn(1), ++a);
              var f = e.clone(),
                l = r.clone();
              while (!r.isZero()) {
                for (
                  var m = 0, c = 1;
                  0 === (r.words[0] & c) && m < 26;
                  ++m, c <<= 1
                );
                if (m > 0) {
                  r.iushrn(m);
                  while (m-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(f), s.isub(l)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var d = 0, g = 1;
                  0 === (e.words[0] & g) && d < 26;
                  ++d, g <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((u.isOdd() || h.isOdd()) && (u.iadd(f), h.isub(l)),
                      u.iushrn(1),
                      h.iushrn(1));
                }
                r.cmp(e) >= 0
                  ? (r.isub(e), n.isub(u), s.isub(h))
                  : (e.isub(r), u.isub(n), h.isub(s));
              }
              return { a: u, b: h, gcd: e.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n,
                s = new o(1),
                u = new o(0),
                h = e.clone();
              while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                for (
                  var a = 0, f = 1;
                  0 === (r.words[0] & f) && a < 26;
                  ++a, f <<= 1
                );
                if (a > 0) {
                  r.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var l = 0, m = 1;
                  0 === (e.words[0] & m) && l < 26;
                  ++l, m <<= 1
                );
                if (l > 0) {
                  e.iushrn(l);
                  while (l-- > 0) (u.isOdd() && u.iadd(h), u.iushrn(1));
                }
                r.cmp(e) >= 0 ? (r.isub(e), s.isub(u)) : (e.isub(r), u.isub(s));
              }
              return (
                (n = 0 === r.cmpn(1) ? s : u),
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
              return new A(t);
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
          function _(t, r) {
            ((this.name = t),
              (this.p = new o(r, 16)),
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
          function F() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function x() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function A(t) {
            if ("string" === typeof t) {
              var r = o._prime(t);
              ((this.m = r.p), (this.prime = r));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function O(t) {
            (A.call(this, t),
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
            (_.prototype.split = function (t, r) {
              t.iushrn(this.n, 0, r);
            }),
            (_.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(N, _),
            (N.prototype.split = function (t, r) {
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
            (N.prototype.imulK = function (t) {
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
            n(B, _),
            n(F, _),
            n(x, _),
            (x.prototype.imulK = function (t) {
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 19 * (0 | t.words[e]) + r,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[e] = n), (r = i));
              }
              return (0 !== r && (t.words[t.length++] = r), t);
            }),
            (o._prime = function (t) {
              if (E[t]) return E[t];
              var r;
              if ("k256" === t) r = new N();
              else if ("p224" === t) r = new B();
              else if ("p192" === t) r = new F();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                r = new x();
              }
              return ((E[t] = r), r);
            }),
            (A.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (A.prototype._verify2 = function (t, r) {
              (i(
                0 === (t.negative | r.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === r.red, "red works only with red numbers"));
            }),
            (A.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (f(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (A.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (A.prototype.add = function (t, r) {
              this._verify2(t, r);
              var e = t.add(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this));
            }),
            (A.prototype.iadd = function (t, r) {
              this._verify2(t, r);
              var e = t.iadd(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e);
            }),
            (A.prototype.sub = function (t, r) {
              this._verify2(t, r);
              var e = t.sub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this));
            }),
            (A.prototype.isub = function (t, r) {
              this._verify2(t, r);
              var e = t.isub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e);
            }),
            (A.prototype.shl = function (t, r) {
              return (this._verify1(t), this.imod(t.ushln(r)));
            }),
            (A.prototype.imul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.imul(r)));
            }),
            (A.prototype.mul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.mul(r)));
            }),
            (A.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (A.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (A.prototype.sqrt = function (t) {
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
              var u = new o(1).toRed(this),
                h = u.redNeg(),
                a = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
              f = new o(2 * f * f).toRed(this);
              while (0 !== this.pow(f, a).cmp(h)) f.redIAdd(h);
              var l = this.pow(f, n),
                m = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                d = s;
              while (0 !== c.cmp(u)) {
                for (var g = c, p = 0; 0 !== g.cmp(u); p++) g = g.redSqr();
                i(p < d);
                var v = this.pow(l, new o(1).iushln(d - p - 1));
                ((m = m.redMul(v)),
                  (l = v.redSqr()),
                  (c = c.redMul(l)),
                  (d = p));
              }
              return m;
            }),
            (A.prototype.invm = function (t) {
              var r = t._invmp(this.m);
              return 0 !== r.negative
                ? ((r.negative = 0), this.imod(r).redNeg())
                : this.imod(r);
            }),
            (A.prototype.pow = function (t, r) {
              if (r.isZero()) return new o(1).toRed(this);
              if (0 === r.cmpn(1)) return t.clone();
              var e = 4,
                i = new Array(1 << e);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                u = 0,
                h = 0,
                a = r.bitLength() % 26;
              for (0 === a && (a = 26), n = r.length - 1; n >= 0; n--) {
                for (var f = r.words[n], l = a - 1; l >= 0; l--) {
                  var m = (f >> l) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== m || 0 !== u
                      ? ((u <<= 1),
                        (u |= m),
                        h++,
                        (h === e || (0 === n && 0 === l)) &&
                          ((s = this.mul(s, i[u])), (h = 0), (u = 0)))
                      : (h = 0));
                }
                a = 26;
              }
              return s;
            }),
            (A.prototype.convertTo = function (t) {
              var r = t.umod(this.m);
              return r === t ? r.clone() : r;
            }),
            (A.prototype.convertFrom = function (t) {
              var r = t.clone();
              return ((r.red = null), r);
            }),
            (o.mont = function (t) {
              return new O(t);
            }),
            n(O, A),
            (O.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (O.prototype.convertFrom = function (t) {
              var r = this.imod(t.mul(this.rinv));
              return ((r.red = null), r);
            }),
            (O.prototype.imul = function (t, r) {
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
            (O.prototype.mul = function (t, r) {
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
            (O.prototype.invm = function (t) {
              var r = this.imod(t._invmp(this.m).mul(this.r2));
              return r._forceRed(this);
            }));
        })(t, this);
      }).call(this, e(20)(t));
    },
    1663: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1664: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1665: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FixedNumber = r.FixedFormat = void 0),
        (r.formatFixed = d),
        (r.parseFixed = g));
      var i = e(95),
        n = e(114),
        o = e(579),
        s = e(578);
      const u = new n.Logger(o.version),
        h = {},
        a = s.BigNumber.from(0),
        f = s.BigNumber.from(-1);
      function l(t, r, e, i) {
        const o = { fault: r, operation: e };
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
          } catch (r) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + m.substring(0, t)
          : u.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function d(t, r) {
        null == r && (r = 0);
        const e = c(r);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(f));
        let n = t.mod(e).toString();
        while (n.length < e.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(e).toString();
        return ((t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function g(t, r) {
        null == r && (r = 0);
        const e = c(r);
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
        (h.length > e.length - 1 &&
          l("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === h && (h = "0"));
        while (h.length < e.length - 1) h += "0";
        const a = s.BigNumber.from(o),
          m = s.BigNumber.from(h);
        let d = a.mul(e).add(m);
        return (i && (d = d.mul(f)), d);
      }
      class FixedFormat {
        constructor(t, r, e, i) {
          (t !== h &&
            u.throwError(
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
              (n || u.throwArgumentError("invalid fixed format", "format", t),
                (r = "u" !== n[1]),
                (e = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    u.throwArgumentError(
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
              u.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e,
              ),
            i > 80 &&
              u.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(h, r, e, i)
          );
        }
      }
      r.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, r, e, i) {
          (t !== h &&
            u.throwError(
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
            u.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.add(e),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.sub(e),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
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
              u.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          const e = FixedNumber.from("1" + m.substring(0, t), this.format),
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
          t % 8 && u.throwArgumentError("invalid byte width", "width", t);
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
            FixedNumber.fromString(d(t, r), FixedFormat.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r),
            n = g(t, e.decimals);
          !e.signed &&
            n.lt(a) &&
            l("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          e.signed
            ? (o = n.toTwos(e.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, e.width / 8)));
          const s = d(n, e.decimals);
          return new FixedNumber(h, o, s, e);
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r);
          if ((0, i.arrayify)(t).length > e.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          e.signed && (n = n.fromTwos(e.width));
          const o = n.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
            u = d(n, e.decimals);
          return new FixedNumber(h, o, u, e);
        }
        static from(t, r) {
          if ("string" === typeof t) return FixedNumber.fromString(t, r);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, r);
          try {
            return FixedNumber.fromValue(t, 0, r);
          } catch (e) {
            if (e.code !== n.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return u.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      r.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        v = FixedNumber.from("0.5");
    },
    1666: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.keccak256 = s));
      var n = i(e(53)),
        o = e(95);
      function s(t) {
        return "0x" + n.default.keccak_256((0, o.arrayify)(t));
      }
    },
    1667: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "SupportedAlgorithm", {
          enumerable: !0,
          get: function () {
            return n.SupportedAlgorithm;
          },
        }),
        Object.defineProperty(r, "computeHmac", {
          enumerable: !0,
          get: function () {
            return i.computeHmac;
          },
        }),
        Object.defineProperty(r, "ripemd160", {
          enumerable: !0,
          get: function () {
            return i.ripemd160;
          },
        }),
        Object.defineProperty(r, "sha256", {
          enumerable: !0,
          get: function () {
            return i.sha256;
          },
        }),
        Object.defineProperty(r, "sha512", {
          enumerable: !0,
          get: function () {
            return i.sha512;
          },
        }));
      var i = e(1668),
        n = e(580);
    },
    1668: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.computeHmac = c),
        (r.ripemd160 = f),
        (r.sha256 = l),
        (r.sha512 = m));
      var n = i(e(43)),
        o = e(95),
        s = e(580),
        u = e(114),
        h = e(1669);
      const a = new u.Logger(h.version);
      function f(t) {
        return (
          "0x" +
          n.default
            .ripemd160()
            .update((0, o.arrayify)(t))
            .digest("hex")
        );
      }
      function l(t) {
        return (
          "0x" +
          n.default
            .sha256()
            .update((0, o.arrayify)(t))
            .digest("hex")
        );
      }
      function m(t) {
        return (
          "0x" +
          n.default
            .sha512()
            .update((0, o.arrayify)(t))
            .digest("hex")
        );
      }
      function c(t, r, e) {
        return (
          s.SupportedAlgorithm[t] ||
            a.throwError(
              "unsupported algorithm " + t,
              u.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: t },
            ),
          "0x" +
            n.default
              .hmac(n.default[t], (0, o.arrayify)(r))
              .update((0, o.arrayify)(e))
              .digest("hex")
        );
      }
    },
    1669: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "sha2/5.8.0";
    },
    1670: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return o.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(r, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(r, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(r, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return o._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(r, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return i.formatBytes32String;
          },
        }),
        Object.defineProperty(r, "nameprep", {
          enumerable: !0,
          get: function () {
            return n.nameprep;
          },
        }),
        Object.defineProperty(r, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return i.parseBytes32String;
          },
        }),
        Object.defineProperty(r, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return o.toUtf8Bytes;
          },
        }),
        Object.defineProperty(r, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return o.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(r, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return o.toUtf8String;
          },
        }));
      var i = e(1671),
        n = e(1678),
        o = e(288);
    },
    1671: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.formatBytes32String = s),
        (r.parseBytes32String = u));
      var i = e(1672),
        n = e(95),
        o = e(288);
      function s(t) {
        const r = (0, o.toUtf8Bytes)(t);
        if (r.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, n.hexlify)((0, n.concat)([r, i.HashZero]).slice(0, 32));
      }
      function u(t) {
        const r = (0, n.arrayify)(t);
        if (32 !== r.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== r[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let e = 31;
        while (0 === r[e - 1]) e--;
        return (0, o.toUtf8String)(r.slice(0, e));
      }
    },
    1672: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "AddressZero", {
          enumerable: !0,
          get: function () {
            return i.AddressZero;
          },
        }),
        Object.defineProperty(r, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return s.EtherSymbol;
          },
        }),
        Object.defineProperty(r, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(r, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return n.MaxInt256;
          },
        }),
        Object.defineProperty(r, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return n.MaxUint256;
          },
        }),
        Object.defineProperty(r, "MinInt256", {
          enumerable: !0,
          get: function () {
            return n.MinInt256;
          },
        }),
        Object.defineProperty(r, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return n.NegativeOne;
          },
        }),
        Object.defineProperty(r, "One", {
          enumerable: !0,
          get: function () {
            return n.One;
          },
        }),
        Object.defineProperty(r, "Two", {
          enumerable: !0,
          get: function () {
            return n.Two;
          },
        }),
        Object.defineProperty(r, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return n.WeiPerEther;
          },
        }),
        Object.defineProperty(r, "Zero", {
          enumerable: !0,
          get: function () {
            return n.Zero;
          },
        }));
      var i = e(1673),
        n = e(1674),
        o = e(1675),
        s = e(1676);
    },
    1673: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AddressZero = void 0));
      r.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1674: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Zero =
          r.WeiPerEther =
          r.Two =
          r.One =
          r.NegativeOne =
          r.MinInt256 =
          r.MaxUint256 =
          r.MaxInt256 =
            void 0));
      var i = e(577);
      ((r.NegativeOne = i.BigNumber.from(-1)),
        (r.Zero = i.BigNumber.from(0)),
        (r.One = i.BigNumber.from(1)),
        (r.Two = i.BigNumber.from(2)),
        (r.WeiPerEther = i.BigNumber.from("1000000000000000000")),
        (r.MaxUint256 = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (r.MinInt256 = i.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (r.MaxInt256 = i.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1675: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.HashZero = void 0));
      r.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1676: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EtherSymbol = void 0));
      r.EtherSymbol = "Ξ";
    },
    1677: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "strings/5.8.0";
    },
    1678: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r._nameprepTableA1 = p),
        (r._nameprepTableB2 = v),
        (r._nameprepTableC = b),
        (r.nameprep = y));
      var i = e(288);
      function n(t) {
        if (t.length % 4 !== 0) throw new Error("bad data");
        let r = [];
        for (let e = 0; e < t.length; e += 4)
          r.push(parseInt(t.substring(e, e + 4), 16));
        return r;
      }
      function o(t, r) {
        r ||
          (r = function (t) {
            return [parseInt(t, 16)];
          });
        let e = 0,
          i = {};
        return (
          t.split(",").forEach((t) => {
            let n = t.split(":");
            ((e += parseInt(n[0], 16)), (i[e] = r(n[1])));
          }),
          i
        );
      }
      function s(t) {
        let r = 0;
        return t.split(",").map((t) => {
          let e = t.split("-");
          1 === e.length ? (e[1] = "0") : "" === e[1] && (e[1] = "1");
          let i = r + parseInt(e[0], 16);
          return ((r = parseInt(e[1], 16)), { l: i, h: r });
        });
      }
      function u(t, r) {
        let e = 0;
        for (let i = 0; i < r.length; i++) {
          let n = r[i];
          if (
            ((e += n.l), t >= e && t <= e + n.h && (t - e) % (n.d || 1) === 0)
          ) {
            if (n.e && -1 !== n.e.indexOf(t - e)) continue;
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
        f = [
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
        l = o(
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
          (t, r) => (
            r.forEach((r) => {
              t.push(r);
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
        let r = u(t, f);
        if (r) return [t + r.s];
        let e = l[t];
        if (e) return e;
        let i = m[t];
        if (i) return [t + i[0]];
        let n = c[t];
        return n || null;
      }
      function b(t) {
        return !!u(t, d);
      }
      function y(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let r = (0, i.toUtf8CodePoints)(t);
        ((r = g(
          r.map((t) => {
            if (a.indexOf(t) >= 0) return [];
            if (t >= 65024 && t <= 65039) return [];
            let r = v(t);
            return r || [t];
          }),
        )),
          (r = (0, i.toUtf8CodePoints)(
            (0, i._toUtf8String)(r),
            i.UnicodeNormalizationForm.NFKC,
          )),
          r.forEach((t) => {
            if (b(t)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          r.forEach((t) => {
            if (p(t)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          }));
        let e = (0, i._toUtf8String)(r);
        if (
          "-" === e.substring(0, 1) ||
          "--" === e.substring(2, 4) ||
          "-" === e.substring(e.length - 1)
        )
          throw new Error("invalid hyphen");
        return e;
      }
    },
    1679: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "solidity/5.7.0";
    },
    1706: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return o.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(r, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(r, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(r, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return o._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(r, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return i.formatBytes32String;
          },
        }),
        Object.defineProperty(r, "nameprep", {
          enumerable: !0,
          get: function () {
            return n.nameprep;
          },
        }),
        Object.defineProperty(r, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return i.parseBytes32String;
          },
        }),
        Object.defineProperty(r, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return o.toUtf8Bytes;
          },
        }),
        Object.defineProperty(r, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return o.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(r, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return o.toUtf8String;
          },
        }));
      var i = e(1707),
        n = e(1720),
        o = e(290);
    },
    1707: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.formatBytes32String = s),
        (r.parseBytes32String = u));
      var i = e(1708),
        n = e(177),
        o = e(290);
      function s(t) {
        const r = (0, o.toUtf8Bytes)(t);
        if (r.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, n.hexlify)((0, n.concat)([r, i.HashZero]).slice(0, 32));
      }
      function u(t) {
        const r = (0, n.arrayify)(t);
        if (32 !== r.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== r[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let e = 31;
        while (0 === r[e - 1]) e--;
        return (0, o.toUtf8String)(r.slice(0, e));
      }
    },
    1719: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "strings/5.7.0";
    },
    1720: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r._nameprepTableA1 = p),
        (r._nameprepTableB2 = v),
        (r._nameprepTableC = b),
        (r.nameprep = y));
      var i = e(290);
      function n(t) {
        if (t.length % 4 !== 0) throw new Error("bad data");
        let r = [];
        for (let e = 0; e < t.length; e += 4)
          r.push(parseInt(t.substring(e, e + 4), 16));
        return r;
      }
      function o(t, r) {
        r ||
          (r = function (t) {
            return [parseInt(t, 16)];
          });
        let e = 0,
          i = {};
        return (
          t.split(",").forEach((t) => {
            let n = t.split(":");
            ((e += parseInt(n[0], 16)), (i[e] = r(n[1])));
          }),
          i
        );
      }
      function s(t) {
        let r = 0;
        return t.split(",").map((t) => {
          let e = t.split("-");
          1 === e.length ? (e[1] = "0") : "" === e[1] && (e[1] = "1");
          let i = r + parseInt(e[0], 16);
          return ((r = parseInt(e[1], 16)), { l: i, h: r });
        });
      }
      function u(t, r) {
        let e = 0;
        for (let i = 0; i < r.length; i++) {
          let n = r[i];
          if (
            ((e += n.l), t >= e && t <= e + n.h && (t - e) % (n.d || 1) === 0)
          ) {
            if (n.e && -1 !== n.e.indexOf(t - e)) continue;
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
        f = [
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
        l = o(
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
          (t, r) => (
            r.forEach((r) => {
              t.push(r);
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
        let r = u(t, f);
        if (r) return [t + r.s];
        let e = l[t];
        if (e) return e;
        let i = m[t];
        if (i) return [t + i[0]];
        let n = c[t];
        return n || null;
      }
      function b(t) {
        return !!u(t, d);
      }
      function y(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let r = (0, i.toUtf8CodePoints)(t);
        ((r = g(
          r.map((t) => {
            if (a.indexOf(t) >= 0) return [];
            if (t >= 65024 && t <= 65039) return [];
            let r = v(t);
            return r || [t];
          }),
        )),
          (r = (0, i.toUtf8CodePoints)(
            (0, i._toUtf8String)(r),
            i.UnicodeNormalizationForm.NFKC,
          )),
          r.forEach((t) => {
            if (b(t)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          r.forEach((t) => {
            if (p(t)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          }));
        let e = (0, i._toUtf8String)(r);
        if (
          "-" === e.substring(0, 1) ||
          "--" === e.substring(2, 4) ||
          "-" === e.substring(e.length - 1)
        )
          throw new Error("invalid hyphen");
        return e;
      }
    },
    288: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Utf8ErrorReason =
          r.Utf8ErrorFuncs =
          r.UnicodeNormalizationForm =
            void 0),
        (r._toEscapedUtf8String = p),
        (r._toUtf8String = v),
        (r.toUtf8Bytes = d),
        (r.toUtf8CodePoints = y),
        (r.toUtf8String = b));
      var i = e(95),
        n = e(114),
        o = e(1677);
      const s = new n.Logger(o.version);
      var u, h;
      function a(t, r, e, i, n) {
        return s.throwArgumentError(
          `invalid codepoint at offset ${r}; ${t}`,
          "bytes",
          e,
        );
      }
      function f(t, r, e, i, n) {
        if (t === h.BAD_PREFIX || t === h.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let i = r + 1; i < e.length; i++) {
            if (e[i] >> 6 !== 2) break;
            t++;
          }
          return t;
        }
        return t === h.OVERRUN ? e.length - r - 1 : 0;
      }
      function l(t, r, e, i, n) {
        return t === h.OVERLONG
          ? (i.push(n), 0)
          : (i.push(65533), f(t, r, e, i, n));
      }
      ((function (t) {
        ((t["current"] = ""),
          (t["NFC"] = "NFC"),
          (t["NFD"] = "NFD"),
          (t["NFKC"] = "NFKC"),
          (t["NFKD"] = "NFKD"));
      })(u || (r.UnicodeNormalizationForm = u = {})),
        (function (t) {
          ((t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte"),
            (t["BAD_PREFIX"] = "bad codepoint prefix"),
            (t["OVERRUN"] = "string overrun"),
            (t["MISSING_CONTINUE"] = "missing continuation byte"),
            (t["OUT_OF_RANGE"] = "out of UTF-8 range"),
            (t["UTF16_SURROGATE"] = "UTF-16 surrogate"),
            (t["OVERLONG"] = "overlong representation"));
        })(h || (r.Utf8ErrorReason = h = {})));
      const m = (r.Utf8ErrorFuncs = Object.freeze({
        error: a,
        ignore: f,
        replace: l,
      }));
      function c(t, r) {
        (null == r && (r = m.error), (t = (0, i.arrayify)(t)));
        const e = [];
        let n = 0;
        while (n < t.length) {
          const i = t[n++];
          if (i >> 7 === 0) {
            e.push(i);
            continue;
          }
          let o = null,
            s = null;
          if (192 === (224 & i)) ((o = 1), (s = 127));
          else if (224 === (240 & i)) ((o = 2), (s = 2047));
          else {
            if (240 !== (248 & i)) {
              n += r(
                128 === (192 & i) ? h.UNEXPECTED_CONTINUE : h.BAD_PREFIX,
                n - 1,
                t,
                e,
              );
              continue;
            }
            ((o = 3), (s = 65535));
          }
          if (n - 1 + o >= t.length) {
            n += r(h.OVERRUN, n - 1, t, e);
            continue;
          }
          let u = i & ((1 << (8 - o - 1)) - 1);
          for (let a = 0; a < o; a++) {
            let i = t[n];
            if (128 != (192 & i)) {
              ((n += r(h.MISSING_CONTINUE, n, t, e)), (u = null));
              break;
            }
            ((u = (u << 6) | (63 & i)), n++);
          }
          null !== u &&
            (u > 1114111
              ? (n += r(h.OUT_OF_RANGE, n - 1 - o, t, e, u))
              : u >= 55296 && u <= 57343
                ? (n += r(h.UTF16_SURROGATE, n - 1 - o, t, e, u))
                : u <= s
                  ? (n += r(h.OVERLONG, n - 1 - o, t, e, u))
                  : e.push(u));
        }
        return e;
      }
      function d(t, r) {
        (void 0 === r && (r = u.current),
          r != u.current && (s.checkNormalize(), (t = t.normalize(r))));
        let e = [];
        for (let i = 0; i < t.length; i++) {
          const r = t.charCodeAt(i);
          if (r < 128) e.push(r);
          else if (r < 2048) (e.push((r >> 6) | 192), e.push((63 & r) | 128));
          else if (55296 == (64512 & r)) {
            i++;
            const n = t.charCodeAt(i);
            if (i >= t.length || 56320 !== (64512 & n))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & r) << 10) + (1023 & n);
            (e.push((o >> 18) | 240),
              e.push(((o >> 12) & 63) | 128),
              e.push(((o >> 6) & 63) | 128),
              e.push((63 & o) | 128));
          } else
            (e.push((r >> 12) | 224),
              e.push(((r >> 6) & 63) | 128),
              e.push((63 & r) | 128));
        }
        return (0, i.arrayify)(e);
      }
      function g(t) {
        const r = "0000" + t.toString(16);
        return "\\u" + r.substring(r.length - 4);
      }
      function p(t, r) {
        return (
          '"' +
          c(t, r)
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
      function b(t, r) {
        return v(c(t, r));
      }
      function y(t, r) {
        return (void 0 === r && (r = u.current), c(d(t, r)));
      }
    },
    290: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Utf8ErrorReason =
          r.Utf8ErrorFuncs =
          r.UnicodeNormalizationForm =
            void 0),
        (r._toEscapedUtf8String = p),
        (r._toUtf8String = v),
        (r.toUtf8Bytes = d),
        (r.toUtf8CodePoints = y),
        (r.toUtf8String = b));
      var i = e(177),
        n = e(178),
        o = e(1719);
      const s = new n.Logger(o.version);
      var u, h;
      function a(t, r, e, i, n) {
        return s.throwArgumentError(
          `invalid codepoint at offset ${r}; ${t}`,
          "bytes",
          e,
        );
      }
      function f(t, r, e, i, n) {
        if (t === h.BAD_PREFIX || t === h.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let i = r + 1; i < e.length; i++) {
            if (e[i] >> 6 !== 2) break;
            t++;
          }
          return t;
        }
        return t === h.OVERRUN ? e.length - r - 1 : 0;
      }
      function l(t, r, e, i, n) {
        return t === h.OVERLONG
          ? (i.push(n), 0)
          : (i.push(65533), f(t, r, e, i, n));
      }
      ((function (t) {
        ((t["current"] = ""),
          (t["NFC"] = "NFC"),
          (t["NFD"] = "NFD"),
          (t["NFKC"] = "NFKC"),
          (t["NFKD"] = "NFKD"));
      })(u || (r.UnicodeNormalizationForm = u = {})),
        (function (t) {
          ((t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte"),
            (t["BAD_PREFIX"] = "bad codepoint prefix"),
            (t["OVERRUN"] = "string overrun"),
            (t["MISSING_CONTINUE"] = "missing continuation byte"),
            (t["OUT_OF_RANGE"] = "out of UTF-8 range"),
            (t["UTF16_SURROGATE"] = "UTF-16 surrogate"),
            (t["OVERLONG"] = "overlong representation"));
        })(h || (r.Utf8ErrorReason = h = {})));
      const m = (r.Utf8ErrorFuncs = Object.freeze({
        error: a,
        ignore: f,
        replace: l,
      }));
      function c(t, r) {
        (null == r && (r = m.error), (t = (0, i.arrayify)(t)));
        const e = [];
        let n = 0;
        while (n < t.length) {
          const i = t[n++];
          if (i >> 7 === 0) {
            e.push(i);
            continue;
          }
          let o = null,
            s = null;
          if (192 === (224 & i)) ((o = 1), (s = 127));
          else if (224 === (240 & i)) ((o = 2), (s = 2047));
          else {
            if (240 !== (248 & i)) {
              n += r(
                128 === (192 & i) ? h.UNEXPECTED_CONTINUE : h.BAD_PREFIX,
                n - 1,
                t,
                e,
              );
              continue;
            }
            ((o = 3), (s = 65535));
          }
          if (n - 1 + o >= t.length) {
            n += r(h.OVERRUN, n - 1, t, e);
            continue;
          }
          let u = i & ((1 << (8 - o - 1)) - 1);
          for (let a = 0; a < o; a++) {
            let i = t[n];
            if (128 != (192 & i)) {
              ((n += r(h.MISSING_CONTINUE, n, t, e)), (u = null));
              break;
            }
            ((u = (u << 6) | (63 & i)), n++);
          }
          null !== u &&
            (u > 1114111
              ? (n += r(h.OUT_OF_RANGE, n - 1 - o, t, e, u))
              : u >= 55296 && u <= 57343
                ? (n += r(h.UTF16_SURROGATE, n - 1 - o, t, e, u))
                : u <= s
                  ? (n += r(h.OVERLONG, n - 1 - o, t, e, u))
                  : e.push(u));
        }
        return e;
      }
      function d(t, r) {
        (void 0 === r && (r = u.current),
          r != u.current && (s.checkNormalize(), (t = t.normalize(r))));
        let e = [];
        for (let i = 0; i < t.length; i++) {
          const r = t.charCodeAt(i);
          if (r < 128) e.push(r);
          else if (r < 2048) (e.push((r >> 6) | 192), e.push((63 & r) | 128));
          else if (55296 == (64512 & r)) {
            i++;
            const n = t.charCodeAt(i);
            if (i >= t.length || 56320 !== (64512 & n))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & r) << 10) + (1023 & n);
            (e.push((o >> 18) | 240),
              e.push(((o >> 12) & 63) | 128),
              e.push(((o >> 6) & 63) | 128),
              e.push((63 & o) | 128));
          } else
            (e.push((r >> 12) | 224),
              e.push(((r >> 6) & 63) | 128),
              e.push((63 & r) | 128));
        }
        return (0, i.arrayify)(e);
      }
      function g(t) {
        const r = "0000" + t.toString(16);
        return "\\u" + r.substring(r.length - 4);
      }
      function p(t, r) {
        return (
          '"' +
          c(t, r)
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
      function b(t, r) {
        return v(c(t, r));
      }
      function y(t, r) {
        return (void 0 === r && (r = u.current), c(d(t, r)));
      }
    },
    577: function (t, r, e) {
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
      var i = e(578),
        n = e(1665);
    },
    578: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BigNumber = void 0),
        (r._base16To36 = y),
        (r._base36To16 = b),
        (r.isBigNumberish = m));
      var n = i(e(1661)),
        o = e(95),
        s = e(114),
        u = e(579),
        h = n.default.BN;
      const a = new s.Logger(u.version),
        f = {},
        l = 9007199254740991;
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
        constructor(t, r) {
          (t !== f &&
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
          const r = BigNumber.from(t);
          return (
            r.isZero() && v("division-by-zero", "div"),
            g(p(this).div(p(t)))
          );
        }
        mul(t) {
          return g(p(this).mul(p(t)));
        }
        mod(t) {
          const r = p(t);
          return (
            r.isNeg() && v("division-by-zero", "mod"),
            g(p(this).umod(r))
          );
        }
        pow(t) {
          const r = p(t);
          return (r.isNeg() && v("negative-power", "pow"), g(p(this).pow(r)));
        }
        and(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "and"),
            g(p(this).and(r))
          );
        }
        or(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "or"),
            g(p(this).or(r))
          );
        }
        xor(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "xor"),
            g(p(this).xor(r))
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
              ? new BigNumber(f, d(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(f, d(new h(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && v("underflow", "BigNumber.from", t),
              (t >= l || t <= -l) && v("overflow", "BigNumber.from", t),
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
        const r = BigNumber.from(t).toHexString();
        return "-" === r[0]
          ? new h("-" + r.substring(3), 16)
          : new h(r.substring(2), 16);
      }
      function v(t, r, e) {
        const i = { fault: t, operation: r };
        return (
          null != e && (i.value = e),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function b(t) {
        return new h(t, 36).toString(16);
      }
      function y(t) {
        return new h(t, 16).toString(36);
      }
      r.BigNumber = BigNumber;
    },
    579: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bignumber/5.8.0";
    },
    580: function (t, r, e) {
      "use strict";
      var i;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.SupportedAlgorithm = void 0),
        (function (t) {
          ((t["sha256"] = "sha256"), (t["sha512"] = "sha512"));
        })(i || (r.SupportedAlgorithm = i = {})));
    },
    95: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = l),
        (r.concat = m),
        (r.hexConcat = w),
        (r.hexDataLength = b),
        (r.hexDataSlice = y),
        (r.hexStripZeros = E),
        (r.hexValue = M),
        (r.hexZeroPad = _),
        (r.hexlify = v),
        (r.isBytes = f),
        (r.isBytesLike = h),
        (r.isHexString = g),
        (r.joinSignature = B),
        (r.splitSignature = N),
        (r.stripZeros = c),
        (r.zeroPad = d));
      var i = e(114),
        n = e(1664);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function u(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return u(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function h(t) {
        return (g(t) && !(t.length % 2)) || f(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function f(t) {
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
      function l(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), u(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          g(t))
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
          return u(new Uint8Array(i));
        }
        return f(t)
          ? u(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function m(t) {
        const r = t.map((t) => l(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), u(i));
      }
      function c(t) {
        let r = l(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function d(t, r) {
        ((t = l(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), u(e));
      }
      function g(t, r) {
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
        if (g(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (f(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += p[(240 & i) >> 4] + p[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function b(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!g(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!g(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function w(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += v(t).substring(2);
          }),
          r
        );
      }
      function M(t) {
        const r = E(v(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function E(t) {
        ("string" !== typeof t && (t = v(t)),
          g(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function _(t, r) {
        ("string" !== typeof t
          ? (t = v(t))
          : g(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function N(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let e = l(t);
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
            const e = d(l(r._vs), 32);
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
          (null != r.r && g(r.r)
            ? (r.r = _(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && g(r.s)
              ? (r.s = _(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = l(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = v(e);
          (r._vs &&
            (g(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = _(r._vs, 32))),
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
      function B(t) {
        return (
          (t = N(t)),
          v(m([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
  },
]);
