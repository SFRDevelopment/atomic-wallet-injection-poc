(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [79],
  {
    121: function (t, e, n) {
      "use strict";
      function r(t, e) {
        ((t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e));
      }
      var i = {};
      function o(t, e, n) {
        function o(t, n, r) {
          return "string" === typeof e ? e : e(t, n, r);
        }
        n || (n = Error);
        var s = (function (t) {
          function e(e, n, r) {
            return t.call(this, o(e, n, r)) || this;
          }
          return (r(e, t), e);
        })(n);
        ((s.prototype.name = n.name), (s.prototype.code = t), (i[t] = s));
      }
      function s(t, e) {
        if (Array.isArray(t)) {
          var n = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            n > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1]
              : 2 === n
                ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      function a(t, e, n) {
        return t.substr(!n || n < 0 ? 0 : +n, e.length) === e;
      }
      function h(t, e, n) {
        return (
          (void 0 === n || n > t.length) && (n = t.length),
          t.substring(n - e.length, n) === e
        );
      }
      function u(t, e, n) {
        return (
          "number" !== typeof n && (n = 0),
          !(n + e.length > t.length) && -1 !== t.indexOf(e, n)
        );
      }
      (o(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError,
      ),
        o(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, n) {
            var r, i;
            if (
              ("string" === typeof e && a(e, "not ")
                ? ((r = "must not be"), (e = e.replace(/^not /, "")))
                : (r = "must be"),
              h(t, " argument"))
            )
              i = "The ".concat(t, " ").concat(r, " ").concat(s(e, "type"));
            else {
              var o = u(t, ".") ? "property" : "argument";
              i = 'The "'
                .concat(t, '" ')
                .concat(o, " ")
                .concat(r, " ")
                .concat(s(e, "type"));
            }
            return ((i += ". Received type ".concat(typeof n)), i);
          },
          TypeError,
        ),
        o("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        o("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        o("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        o("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        o("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        o("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        o("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        o(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError,
        ),
        o(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError,
        ),
        o(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event",
        ),
        (t.exports.codes = i));
    },
    122: function (t, e, n) {
      "use strict";
      (function (e) {
        var r =
          Object.keys ||
          function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e;
          };
        t.exports = u;
        var i = n(663),
          o = n(667);
        n(16)(u, i);
        for (var s = r(o.prototype), a = 0; a < s.length; a++) {
          var h = s[a];
          u.prototype[h] || (u.prototype[h] = o.prototype[h]);
        }
        function u(t) {
          if (!(this instanceof u)) return new u(t);
          (i.call(this, t),
            o.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", c))));
        }
        function c() {
          this._writableState.ended || e.nextTick(l, this);
        }
        function l(t) {
          t.end();
        }
        (Object.defineProperty(u.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(u.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(u.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(u.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          }));
      }).call(this, n(18));
    },
    123: function (t, e, n) {
      var r = n(46).Buffer;
      function i(t, e) {
        ((this._block = r.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0));
      }
      ((i.prototype.update = function (t, e) {
        "string" === typeof t && ((e = e || "utf8"), (t = r.from(t, e)));
        for (
          var n = this._block,
            i = this._blockSize,
            o = t.length,
            s = this._len,
            a = 0;
          a < o;
        ) {
          for (var h = s % i, u = Math.min(o - a, i - h), c = 0; c < u; c++)
            n[h + c] = t[a + c];
          ((s += u), (a += u), s % i === 0 && this._update(n));
        }
        return ((this._len += o), this);
      }),
        (i.prototype.digest = function (t) {
          var e = this._len % this._blockSize;
          ((this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0)));
          var n = 8 * this._len;
          if (n <= 4294967295)
            this._block.writeUInt32BE(n, this._blockSize - 4);
          else {
            var r = (4294967295 & n) >>> 0,
              i = (n - r) / 4294967296;
            (this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(r, this._blockSize - 4));
          }
          this._update(this._block);
          var o = this._hash();
          return t ? o.toString(t) : o;
        }),
        (i.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }),
        (t.exports = i));
    },
    1244: function (t, e, n) {
      var r = n(463),
        i = n(169)("socket.io-client:url");
      function o(t, e) {
        var n = t;
        ((e = e || ("undefined" !== typeof location && location)),
          null == t && (t = e.protocol + "//" + e.host),
          "string" === typeof t &&
            ("/" === t.charAt(0) &&
              (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
            /^(https?|wss?):\/\//.test(t) ||
              (i("protocol-less url %s", t),
              (t =
                "undefined" !== typeof e
                  ? e.protocol + "//" + t
                  : "https://" + t)),
            i("parse %s", t),
            (n = r(t))),
          n.port ||
            (/^(http|ws)$/.test(n.protocol)
              ? (n.port = "80")
              : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
          (n.path = n.path || "/"));
        var o = -1 !== n.host.indexOf(":"),
          s = o ? "[" + n.host + "]" : n.host;
        return (
          (n.id = n.protocol + "://" + s + ":" + n.port),
          (n.href =
            n.protocol +
            "://" +
            s +
            (e && e.port === n.port ? "" : ":" + n.port)),
          n
        );
      }
      t.exports = o;
    },
    1245: function (t, e, n) {
      function r(t) {
        var n,
          r = 0;
        for (n in t) ((r = (r << 5) - r + t.charCodeAt(n)), (r |= 0));
        return e.colors[Math.abs(r) % e.colors.length];
      }
      function i(t) {
        var n;
        function i() {
          if (i.enabled) {
            var t = i,
              r = +new Date(),
              o = r - (n || r);
            ((t.diff = o), (t.prev = n), (t.curr = r), (n = r));
            for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
              s[a] = arguments[a];
            ((s[0] = e.coerce(s[0])),
              "string" !== typeof s[0] && s.unshift("%O"));
            var h = 0;
            ((s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
              if ("%%" === n) return n;
              h++;
              var i = e.formatters[r];
              if ("function" === typeof i) {
                var o = s[h];
                ((n = i.call(t, o)), s.splice(h, 1), h--);
              }
              return n;
            })),
              e.formatArgs.call(t, s));
            var u = i.log || e.log || console.log.bind(console);
            u.apply(t, s);
          }
        }
        return (
          (i.namespace = t),
          (i.enabled = e.enabled(t)),
          (i.useColors = e.useColors()),
          (i.color = r(t)),
          (i.destroy = o),
          "function" === typeof e.init && e.init(i),
          e.instances.push(i),
          i
        );
      }
      function o() {
        var t = e.instances.indexOf(this);
        return -1 !== t && (e.instances.splice(t, 1), !0);
      }
      function s(t) {
        var n;
        (e.save(t), (e.names = []), (e.skips = []));
        var r = ("string" === typeof t ? t : "").split(/[\s,]+/),
          i = r.length;
        for (n = 0; n < i; n++)
          r[n] &&
            ((t = r[n].replace(/\*/g, ".*?")),
            "-" === t[0]
              ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
              : e.names.push(new RegExp("^" + t + "$")));
        for (n = 0; n < e.instances.length; n++) {
          var o = e.instances[n];
          o.enabled = e.enabled(o.namespace);
        }
      }
      function a() {
        e.enable("");
      }
      function h(t) {
        if ("*" === t[t.length - 1]) return !0;
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++)
          if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++)
          if (e.names[n].test(t)) return !0;
        return !1;
      }
      function u(t) {
        return t instanceof Error ? t.stack || t.message : t;
      }
      ((e = t.exports = i.debug = i["default"] = i),
        (e.coerce = u),
        (e.disable = a),
        (e.enable = s),
        (e.enabled = h),
        (e.humanize = n(1246)),
        (e.instances = []),
        (e.names = []),
        (e.skips = []),
        (e.formatters = {}));
    },
    1246: function (t, e) {
      var n = 1e3,
        r = 60 * n,
        i = 60 * r,
        o = 24 * i,
        s = 365.25 * o;
      function a(t) {
        if (((t = String(t)), !(t.length > 100))) {
          var e =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              t,
            );
          if (e) {
            var a = parseFloat(e[1]),
              h = (e[2] || "ms").toLowerCase();
            switch (h) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return a * s;
              case "days":
              case "day":
              case "d":
                return a * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return a * i;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return a * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return a * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return a;
              default:
                return;
            }
          }
        }
      }
      function h(t) {
        return t >= o
          ? Math.round(t / o) + "d"
          : t >= i
            ? Math.round(t / i) + "h"
            : t >= r
              ? Math.round(t / r) + "m"
              : t >= n
                ? Math.round(t / n) + "s"
                : t + "ms";
      }
      function u(t) {
        return (
          c(t, o, "day") ||
          c(t, i, "hour") ||
          c(t, r, "minute") ||
          c(t, n, "second") ||
          t + " ms"
        );
      }
      function c(t, e, n) {
        if (!(t < e))
          return t < 1.5 * e
            ? Math.floor(t / e) + " " + n
            : Math.ceil(t / e) + " " + n + "s";
      }
      t.exports = function (t, e) {
        e = e || {};
        var n = typeof t;
        if ("string" === n && t.length > 0) return a(t);
        if ("number" === n && !1 === isNaN(t)) return e.long ? u(t) : h(t);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(t),
        );
      };
    },
    1247: function (t, e, n) {
      (function (r) {
        function i() {
          return (
            !(
              "undefined" === typeof window ||
              !window.process ||
              "renderer" !== window.process.type
            ) ||
            (("undefined" === typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)) &&
              (("undefined" !== typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("undefined" !== typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ("undefined" !== typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ("undefined" !== typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }
        function o(t) {
          var n = this.useColors;
          if (
            ((t[0] =
              (n ? "%c" : "") +
              this.namespace +
              (n ? " %c" : " ") +
              t[0] +
              (n ? "%c " : " ") +
              "+" +
              e.humanize(this.diff)),
            n)
          ) {
            var r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            var i = 0,
              o = 0;
            (t[0].replace(/%[a-zA-Z%]/g, function (t) {
              "%%" !== t && (i++, "%c" === t && (o = i));
            }),
              t.splice(o, 0, r));
          }
        }
        function s() {
          return (
            "object" === typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }
        function a(t) {
          try {
            null == t ? e.storage.removeItem("debug") : (e.storage.debug = t);
          } catch (n) {}
        }
        function h() {
          var t;
          try {
            t = e.storage.debug;
          } catch (n) {}
          return (
            !t && "undefined" !== typeof r && "env" in r && (t = r.env.DEBUG),
            t
          );
        }
        function u() {
          try {
            return window.localStorage;
          } catch (t) {}
        }
        ((e = t.exports = n(1248)),
          (e.log = s),
          (e.formatArgs = o),
          (e.save = a),
          (e.load = h),
          (e.useColors = i),
          (e.storage =
            "undefined" != typeof chrome && "undefined" != typeof chrome.storage
              ? chrome.storage.local
              : u()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (e.formatters.j = function (t) {
            try {
              return JSON.stringify(t);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          }),
          e.enable(h()));
      }).call(this, n(18));
    },
    1248: function (t, e, n) {
      function r(t) {
        var n,
          r = 0;
        for (n in t) ((r = (r << 5) - r + t.charCodeAt(n)), (r |= 0));
        return e.colors[Math.abs(r) % e.colors.length];
      }
      function i(t) {
        var n;
        function i() {
          if (i.enabled) {
            var t = i,
              r = +new Date(),
              o = r - (n || r);
            ((t.diff = o), (t.prev = n), (t.curr = r), (n = r));
            for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
              s[a] = arguments[a];
            ((s[0] = e.coerce(s[0])),
              "string" !== typeof s[0] && s.unshift("%O"));
            var h = 0;
            ((s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
              if ("%%" === n) return n;
              h++;
              var i = e.formatters[r];
              if ("function" === typeof i) {
                var o = s[h];
                ((n = i.call(t, o)), s.splice(h, 1), h--);
              }
              return n;
            })),
              e.formatArgs.call(t, s));
            var u = i.log || e.log || console.log.bind(console);
            u.apply(t, s);
          }
        }
        return (
          (i.namespace = t),
          (i.enabled = e.enabled(t)),
          (i.useColors = e.useColors()),
          (i.color = r(t)),
          (i.destroy = o),
          "function" === typeof e.init && e.init(i),
          e.instances.push(i),
          i
        );
      }
      function o() {
        var t = e.instances.indexOf(this);
        return -1 !== t && (e.instances.splice(t, 1), !0);
      }
      function s(t) {
        var n;
        (e.save(t), (e.names = []), (e.skips = []));
        var r = ("string" === typeof t ? t : "").split(/[\s,]+/),
          i = r.length;
        for (n = 0; n < i; n++)
          r[n] &&
            ((t = r[n].replace(/\*/g, ".*?")),
            "-" === t[0]
              ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
              : e.names.push(new RegExp("^" + t + "$")));
        for (n = 0; n < e.instances.length; n++) {
          var o = e.instances[n];
          o.enabled = e.enabled(o.namespace);
        }
      }
      function a() {
        e.enable("");
      }
      function h(t) {
        if ("*" === t[t.length - 1]) return !0;
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++)
          if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++)
          if (e.names[n].test(t)) return !0;
        return !1;
      }
      function u(t) {
        return t instanceof Error ? t.stack || t.message : t;
      }
      ((e = t.exports = i.debug = i["default"] = i),
        (e.coerce = u),
        (e.disable = a),
        (e.enable = s),
        (e.enabled = h),
        (e.humanize = n(1249)),
        (e.instances = []),
        (e.names = []),
        (e.skips = []),
        (e.formatters = {}));
    },
    1249: function (t, e) {
      var n = 1e3,
        r = 60 * n,
        i = 60 * r,
        o = 24 * i,
        s = 365.25 * o;
      function a(t) {
        if (((t = String(t)), !(t.length > 100))) {
          var e =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              t,
            );
          if (e) {
            var a = parseFloat(e[1]),
              h = (e[2] || "ms").toLowerCase();
            switch (h) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return a * s;
              case "days":
              case "day":
              case "d":
                return a * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return a * i;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return a * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return a * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return a;
              default:
                return;
            }
          }
        }
      }
      function h(t) {
        return t >= o
          ? Math.round(t / o) + "d"
          : t >= i
            ? Math.round(t / i) + "h"
            : t >= r
              ? Math.round(t / r) + "m"
              : t >= n
                ? Math.round(t / n) + "s"
                : t + "ms";
      }
      function u(t) {
        return (
          c(t, o, "day") ||
          c(t, i, "hour") ||
          c(t, r, "minute") ||
          c(t, n, "second") ||
          t + " ms"
        );
      }
      function c(t, e, n) {
        if (!(t < e))
          return t < 1.5 * e
            ? Math.floor(t / e) + " " + n
            : Math.ceil(t / e) + " " + n + "s";
      }
      t.exports = function (t, e) {
        e = e || {};
        var n = typeof t;
        if ("string" === n && t.length > 0) return a(t);
        if ("number" === n && !1 === isNaN(t)) return e.long ? u(t) : h(t);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(t),
        );
      };
    },
    1251: function (t, e, n) {
      var r = n(464),
        i = n(465),
        o = Object.prototype.toString,
        s =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" === o.call(Blob)),
        a =
          "function" === typeof File ||
          ("undefined" !== typeof File &&
            "[object FileConstructor]" === o.call(File));
      function h(t, e) {
        if (!t) return t;
        if (i(t)) {
          var n = { _placeholder: !0, num: e.length };
          return (e.push(t), n);
        }
        if (r(t)) {
          for (var o = new Array(t.length), s = 0; s < t.length; s++)
            o[s] = h(t[s], e);
          return o;
        }
        if ("object" === typeof t && !(t instanceof Date)) {
          o = {};
          for (var a in t) o[a] = h(t[a], e);
          return o;
        }
        return t;
      }
      function u(t, e) {
        if (!t) return t;
        if (t && !0 === t._placeholder) {
          var n = "number" === typeof t.num && t.num >= 0 && t.num < e.length;
          if (n) return e[t.num];
          throw new Error("illegal attachments");
        }
        if (r(t)) for (var i = 0; i < t.length; i++) t[i] = u(t[i], e);
        else if ("object" === typeof t) for (var o in t) t[o] = u(t[o], e);
        return t;
      }
      ((e.deconstructPacket = function (t) {
        var e = [],
          n = t.data,
          r = t;
        return (
          (r.data = h(n, e)),
          (r.attachments = e.length),
          { packet: r, buffers: e }
        );
      }),
        (e.reconstructPacket = function (t, e) {
          return ((t.data = u(t.data, e)), (t.attachments = void 0), t);
        }),
        (e.removeBlobs = function (t, e) {
          function n(t, u, c) {
            if (!t) return t;
            if ((s && t instanceof Blob) || (a && t instanceof File)) {
              o++;
              var l = new FileReader();
              ((l.onload = function () {
                (c ? (c[u] = this.result) : (h = this.result), --o || e(h));
              }),
                l.readAsArrayBuffer(t));
            } else if (r(t)) for (var f = 0; f < t.length; f++) n(t[f], f, t);
            else if ("object" === typeof t && !i(t))
              for (var d in t) n(t[d], d, t);
          }
          var o = 0,
            h = t;
          (n(h), o || e(h));
        }));
    },
    1268: function (t, e) {
      function n(t, e) {
        var n = [];
        e = e || 0;
        for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
        return n;
      }
      t.exports = n;
    },
    169: function (t, e, n) {
      (function (r) {
        function i() {
          return (
            !(
              "undefined" === typeof window ||
              !window.process ||
              "renderer" !== window.process.type
            ) ||
            (("undefined" === typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)) &&
              (("undefined" !== typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("undefined" !== typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ("undefined" !== typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ("undefined" !== typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }
        function o(t) {
          var n = this.useColors;
          if (
            ((t[0] =
              (n ? "%c" : "") +
              this.namespace +
              (n ? " %c" : " ") +
              t[0] +
              (n ? "%c " : " ") +
              "+" +
              e.humanize(this.diff)),
            n)
          ) {
            var r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            var i = 0,
              o = 0;
            (t[0].replace(/%[a-zA-Z%]/g, function (t) {
              "%%" !== t && (i++, "%c" === t && (o = i));
            }),
              t.splice(o, 0, r));
          }
        }
        function s() {
          return (
            "object" === typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }
        function a(t) {
          try {
            null == t ? e.storage.removeItem("debug") : (e.storage.debug = t);
          } catch (n) {}
        }
        function h() {
          var t;
          try {
            t = e.storage.debug;
          } catch (n) {}
          return (
            !t && "undefined" !== typeof r && "env" in r && (t = r.env.DEBUG),
            t
          );
        }
        function u() {
          try {
            return window.localStorage;
          } catch (t) {}
        }
        ((e = t.exports = n(1245)),
          (e.log = s),
          (e.formatArgs = o),
          (e.save = a),
          (e.load = h),
          (e.useColors = i),
          (e.storage =
            "undefined" != typeof chrome && "undefined" != typeof chrome.storage
              ? chrome.storage.local
              : u()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (e.formatters.j = function (t) {
            try {
              return JSON.stringify(t);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          }),
          e.enable(h()));
      }).call(this, n(18));
    },
    1785: function (t, e, n) {
      "use strict";
      var r = n(128);
      Object.defineProperty(e, "__esModule", { value: !0 });
      const i = n(600);
      class WebSocketBrowserImpl extends i.EventEmitter {
        constructor(t, e, n) {
          (super(),
            r(this, "socket", void 0),
            (this.socket = new window.WebSocket(t, n)),
            (this.socket.onopen = () => this.emit("open")),
            (this.socket.onmessage = (t) => this.emit("message", t.data)),
            (this.socket.onerror = (t) => this.emit("error", t)),
            (this.socket.onclose = (t) => {
              this.emit("close", t.code, t.reason);
            }));
        }
        send(t, e, n) {
          const r = n || e;
          try {
            (this.socket.send(t), r());
          } catch (i) {
            r(i);
          }
        }
        close(t, e) {
          this.socket.close(t, e);
        }
        addEventListener(t, e, n) {
          this.socket.addEventListener(t, e, n);
        }
      }
      function o(t, e) {
        return new WebSocketBrowserImpl(t, e);
      }
      e.default = o;
    },
    1787: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(128);
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = n(600),
          o = n(1788);
        class CommonClient extends i.EventEmitter {
          constructor(t, e, n, i, s) {
            void 0 === e && (e = "ws://localhost:8080");
            let {
              autoconnect: a = !0,
              reconnect: h = !0,
              reconnect_interval: u = 1e3,
              max_reconnects: c = 5,
              ...l
            } = void 0 === n ? {} : n;
            (super(),
              r(this, "address", void 0),
              r(this, "rpc_id", void 0),
              r(this, "queue", void 0),
              r(this, "options", void 0),
              r(this, "autoconnect", void 0),
              r(this, "ready", void 0),
              r(this, "reconnect", void 0),
              r(this, "reconnect_timer_id", void 0),
              r(this, "reconnect_interval", void 0),
              r(this, "max_reconnects", void 0),
              r(this, "rest_options", void 0),
              r(this, "current_reconnects", void 0),
              r(this, "generate_request_id", void 0),
              r(this, "socket", void 0),
              r(this, "webSocketFactory", void 0),
              r(this, "dataPack", void 0),
              (this.webSocketFactory = t),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = e),
              (this.autoconnect = a),
              (this.ready = !1),
              (this.reconnect = h),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = u),
              (this.max_reconnects = c),
              (this.rest_options = l),
              (this.current_reconnects = 0),
              (this.generate_request_id = i || (() => ++this.rpc_id)),
              (this.dataPack = s || new o.DefaultDataPack()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                }));
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(t, e, n, r) {
            return (
              r || "object" !== typeof n || ((r = n), (n = null)),
              new Promise((i, o) => {
                if (!this.ready) return o(new Error("socket not ready"));
                const s = this.generate_request_id(t, e),
                  a = { jsonrpc: "2.0", method: t, params: e || void 0, id: s };
                this.socket.send(this.dataPack.encode(a), r, (t) => {
                  if (t) return o(t);
                  ((this.queue[s] = { promise: [i, o] }),
                    n &&
                      (this.queue[s].timeout = setTimeout(() => {
                        (delete this.queue[s], o(new Error("reply timeout")));
                      }, n)));
                });
              })
            );
          }
          async login(t) {
            const e = await this.call("rpc.login", t);
            if (!e) throw new Error("authentication failed");
            return e;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(t, e) {
            return new Promise((n, r) => {
              if (!this.ready) return r(new Error("socket not ready"));
              const i = { jsonrpc: "2.0", method: t, params: e };
              this.socket.send(this.dataPack.encode(i), (t) => {
                if (t) return r(t);
                n();
              });
            });
          }
          async subscribe(t) {
            "string" === typeof t && (t = [t]);
            const e = await this.call("rpc.on", t);
            if ("string" === typeof t && "ok" !== e[t])
              throw new Error(
                "Failed subscribing to an event '" + t + "' with: " + e[t],
              );
            return e;
          }
          async unsubscribe(t) {
            "string" === typeof t && (t = [t]);
            const e = await this.call("rpc.off", t);
            if ("string" === typeof t && "ok" !== e[t])
              throw new Error("Failed unsubscribing from an event with: " + e);
            return e;
          }
          close(t, e) {
            this.socket.close(t || 1e3, e);
          }
          setAutoReconnect(t) {
            this.reconnect = t;
          }
          setReconnectInterval(t) {
            this.reconnect_interval = t;
          }
          setMaxReconnects(t) {
            this.max_reconnects = t;
          }
          _connect(e, n) {
            (clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(e, n)),
              this.socket.addEventListener("open", () => {
                ((this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0));
              }),
              this.socket.addEventListener("message", (e) => {
                let { data: n } = e;
                n instanceof ArrayBuffer && (n = t.from(n).toString());
                try {
                  n = this.dataPack.decode(n);
                } catch (r) {
                  return;
                }
                if (n.notification && this.listeners(n.notification).length) {
                  if (!Object.keys(n.params).length)
                    return this.emit(n.notification);
                  const t = [n.notification];
                  if (n.params.constructor === Object) t.push(n.params);
                  else
                    for (let e = 0; e < n.params.length; e++)
                      t.push(n.params[e]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, t);
                  });
                }
                if (!this.queue[n.id])
                  return n.method
                    ? Promise.resolve().then(() => {
                        var t;
                        this.emit(
                          n.method,
                          null === (t = n) || void 0 === t ? void 0 : t.params,
                        );
                      })
                    : void 0;
                ("error" in n === "result" in n &&
                  this.queue[n.id].promise[1](
                    new Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.',
                    ),
                  ),
                  this.queue[n.id].timeout &&
                    clearTimeout(this.queue[n.id].timeout),
                  n.error
                    ? this.queue[n.id].promise[1](n.error)
                    : this.queue[n.id].promise[0](n.result),
                  delete this.queue[n.id]);
              }),
              this.socket.addEventListener("error", (t) =>
                this.emit("error", t),
              ),
              this.socket.addEventListener("close", (t) => {
                let { code: r, reason: i } = t;
                (this.ready && setTimeout(() => this.emit("close", r, i), 0),
                  (this.ready = !1),
                  (this.socket = void 0),
                  1e3 !== r &&
                    (this.current_reconnects++,
                    this.reconnect &&
                      (this.max_reconnects > this.current_reconnects ||
                        0 === this.max_reconnects) &&
                      (this.reconnect_timer_id = setTimeout(
                        () => this._connect(e, n),
                        this.reconnect_interval,
                      ))));
              }));
          }
        }
        e.default = CommonClient;
      }).call(this, n(2).Buffer);
    },
    1788: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createError = e.DefaultDataPack = void 0));
      const r = new Map([
        [-32e3, "Event not provided"],
        [-32600, "Invalid Request"],
        [-32601, "Method not found"],
        [-32602, "Invalid params"],
        [-32603, "Internal error"],
        [-32604, "Params not found"],
        [-32605, "Method forbidden"],
        [-32606, "Event forbidden"],
        [-32700, "Parse error"],
      ]);
      class DefaultDataPack {
        encode(t) {
          return JSON.stringify(t);
        }
        decode(t) {
          return JSON.parse(t);
        }
      }
      function i(t, e) {
        const n = { code: t, message: r.get(t) || "Internal Server Error" };
        return (e && (n["data"] = e), n);
      }
      ((e.DefaultDataPack = DefaultDataPack), (e.createError = i));
    },
    1881: function (t, e, n) {
      var r = n(1882);
      t.exports = function (t) {
        return "string" !== typeof t ? t : r(t) ? t.slice(2) : t;
      };
    },
    1886: function (t, e, n) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var n = function () {};
            ((n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t));
          }
          function o(t, e, n) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || "be")));
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
                : n(1887).Buffer;
          } catch (O) {}
          function a(t, e) {
            var n = t.charCodeAt(e);
            return n >= 48 && n <= 57
              ? n - 48
              : n >= 65 && n <= 70
                ? n - 55
                : n >= 97 && n <= 102
                  ? n - 87
                  : void r(!1, "Invalid character in " + t);
          }
          function h(t, e, n) {
            var r = a(t, n);
            return (n - 1 >= e && (r |= a(t, n - 1) << 4), r);
          }
          function u(t, e, n, i) {
            for (
              var o = 0, s = 0, a = Math.min(t.length, n), h = e;
              h < a;
              h++
            ) {
              var u = t.charCodeAt(h) - 48;
              ((o *= i),
                (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
                r(u >= 0 && s < i, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function c(t, e) {
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
            (o.prototype._init = function (t, e, n) {
              if ("number" === typeof t) return this._initNumber(t, e, n);
              if ("object" === typeof t) return this._initArray(t, e, n);
              ("hex" === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === t[0] && (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, n)
                    : (this._parseBase(t, e, i),
                      "le" === n && this._initArray(this.toArray(), e, n))));
            }),
            (o.prototype._initNumber = function (t, e, n) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (r(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === n && this._initArray(this.toArray(), e, n));
            }),
            (o.prototype._initArray = function (t, e, n) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                s,
                a = 0;
              if ("be" === n)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  ((s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), o++));
              else if ("le" === n)
                for (i = 0, o = 0; i < t.length; i += 3)
                  ((s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, n) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === n)
                for (r = t.length - 1; r >= e; r -= 2)
                  ((i = h(t, e, r) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              else {
                var a = t.length - e;
                for (r = a % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  ((i = h(t, e, r) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, n) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
              (r--, (i = (i / e) | 0));
              for (
                var o = t.length - n,
                  s = o % r,
                  a = Math.min(o, o - s) + n,
                  h = 0,
                  c = n;
                c < a;
                c += r
              )
                ((h = u(t, c, c + r, e)),
                  this.imuln(i),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var l = 1;
                for (h = u(t, c, t.length, e), c = 0; c < s; c++) l *= e;
                (this.imuln(l),
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
              c(t, this);
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
            } catch (O) {
              o.prototype.inspect = l;
            }
          else o.prototype.inspect = l;
          function l() {
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
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var n;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              n = "";
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  h = (16777215 & ((a << i) | o)).toString(16);
                ((o = (a >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), s--),
                  (n =
                    0 !== o || s !== this.length - 1
                      ? f[6 - h.length] + h + n
                      : h + n));
              }
              0 !== o && (n = o.toString(16) + n);
              while (n.length % e !== 0) n = "0" + n;
              return (0 !== this.negative && (n = "-" + n), n);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var u = d[t],
                c = p[t];
              n = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var m = l.modrn(c).toString(t);
                ((l = l.idivn(c)),
                  (n = l.isZero() ? m + n : f[u - m.length] + m + n));
              }
              this.isZero() && (n = "0" + n);
              while (n.length % e !== 0) n = "0" + n;
              return (0 !== this.negative && (n = "-" + n), n);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      r(!1, "Number can only safely store up to 53 bits"),
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
          var m = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function y(t) {
            for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
              var r = (n / 26) | 0,
                i = n % 26;
              e[n] = (t.words[r] >>> i) & 1;
            }
            return e;
          }
          function v(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            ((n.length = r), (r = (r - 1) | 0));
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              a = 67108863 & s,
              h = (s / 67108864) | 0;
            n.words[0] = a;
            for (var u = 1; u < r; u++) {
              for (
                var c = h >>> 26,
                  l = 67108863 & h,
                  f = Math.min(u, e.length - 1),
                  d = Math.max(0, u - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (u - d) | 0;
                ((i = 0 | t.words[p]),
                  (o = 0 | e.words[d]),
                  (s = i * o + l),
                  (c += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((n.words[u] = 0 | l), (h = 0 | c));
            }
            return (0 !== h ? (n.words[u] = 0 | h) : n.length--, n._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, n) {
            this._strip();
            var i = this.byteLength(),
              o = n || Math.max(1, i);
            (r(i <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0"));
            var s = m(t, o),
              a = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + a](s, i), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | r;
                ((t[n++] = 255 & s),
                  n < t.length && (t[n++] = (s >> 8) & 255),
                  n < t.length && (t[n++] = (s >> 16) & 255),
                  6 === o
                    ? (n < t.length && (t[n++] = (s >> 24) & 255),
                      (r = 0),
                      (o = 0))
                    : ((r = s >>> 24), (o += 2)));
              }
              if (n < t.length) {
                t[n++] = r;
                while (n < t.length) t[n++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var n = t.length - 1, r = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | r;
                ((t[n--] = 255 & s),
                  n >= 0 && (t[n--] = (s >> 8) & 255),
                  n >= 0 && (t[n--] = (s >> 16) & 255),
                  6 === o
                    ? (n >= 0 && (t[n--] = (s >> 24) & 255), (r = 0), (o = 0))
                    : ((r = s >>> 24), (o += 2)));
              }
              if (n >= 0) {
                t[n--] = r;
                while (n >= 0) t[n--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    n = 0;
                  return (
                    e >= 4096 && ((n += 13), (e >>>= 13)),
                    e >= 64 && ((n += 7), (e >>>= 7)),
                    e >= 8 && ((n += 4), (e >>>= 4)),
                    e >= 2 && ((n += 2), (e >>>= 2)),
                    n + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                n = 0;
              return (
                0 === (8191 & e) && ((n += 13), (e >>>= 13)),
                0 === (127 & e) && ((n += 7), (e >>>= 7)),
                0 === (15 & e) && ((n += 4), (e >>>= 4)),
                0 === (3 & e) && ((n += 2), (e >>>= 2)),
                0 === (1 & e) && n++,
                n
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
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
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
              return (r(0 === (this.negative | t.negative)), this.iuor(t));
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
              for (var n = 0; n < e.length; n++)
                this.words[n] = this.words[n] & t.words[n];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuand(t));
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
              var e, n;
              this.length > t.length
                ? ((e = this), (n = t))
                : ((e = t), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuxor(t));
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
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                n = t % 26;
              (this._expand(e), n > 0 && e--);
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                n > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - n))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var n = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = e
                  ? this.words[n] | (1 << i)
                  : this.words[n] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, n, r;
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
                ? ((n = this), (r = t))
                : ((n = t), (r = this));
              for (var i = 0, o = 0; o < r.length; o++)
                ((e = (0 | n.words[o]) + (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26));
              for (; 0 !== i && o < n.length; o++)
                ((e = (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26));
              if (((this.length = n.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (n !== this)
                for (; o < n.length; o++) this.words[o] = n.words[o];
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
              var n,
                r,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
              for (var o = 0, s = 0; s < r.length; s++)
                ((e = (0 | n.words[s]) - (0 | r.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== o && s < n.length; s++)
                ((e = (0 | n.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === o && s < n.length && n !== this)
                for (; s < n.length; s++) this.words[s] = n.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                n !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var g = function (t, e, n) {
            var r,
              i,
              o,
              s = t.words,
              a = e.words,
              h = n.words,
              u = 0,
              c = 0 | s[0],
              l = 8191 & c,
              f = c >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              m = d >>> 13,
              y = 0 | s[2],
              v = 8191 & y,
              g = y >>> 13,
              b = 0 | s[3],
              w = 8191 & b,
              _ = b >>> 13,
              M = 0 | s[4],
              k = 8191 & M,
              C = M >>> 13,
              E = 0 | s[5],
              S = 8191 & E,
              A = E >>> 13,
              x = 0 | s[6],
              R = 8191 & x,
              O = x >>> 13,
              T = 0 | s[7],
              B = 8191 & T,
              F = T >>> 13,
              N = 0 | s[8],
              L = 8191 & N,
              j = N >>> 13,
              I = 0 | s[9],
              P = 8191 & I,
              D = I >>> 13,
              q = 0 | a[0],
              U = 8191 & q,
              z = q >>> 13,
              H = 0 | a[1],
              W = 8191 & H,
              V = H >>> 13,
              Z = 0 | a[2],
              K = 8191 & Z,
              Y = Z >>> 13,
              $ = 0 | a[3],
              G = 8191 & $,
              J = $ >>> 13,
              X = 0 | a[4],
              Q = 8191 & X,
              tt = X >>> 13,
              et = 0 | a[5],
              nt = 8191 & et,
              rt = et >>> 13,
              it = 0 | a[6],
              ot = 8191 & it,
              st = it >>> 13,
              at = 0 | a[7],
              ht = 8191 & at,
              ut = at >>> 13,
              ct = 0 | a[8],
              lt = 8191 & ct,
              ft = ct >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              mt = dt >>> 13;
            ((n.negative = t.negative ^ e.negative),
              (n.length = 19),
              (r = Math.imul(l, U)),
              (i = Math.imul(l, z)),
              (i = (i + Math.imul(f, U)) | 0),
              (o = Math.imul(f, z)));
            var yt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(p, U)),
              (i = Math.imul(p, z)),
              (i = (i + Math.imul(m, U)) | 0),
              (o = Math.imul(m, z)),
              (r = (r + Math.imul(l, W)) | 0),
              (i = (i + Math.imul(l, V)) | 0),
              (i = (i + Math.imul(f, W)) | 0),
              (o = (o + Math.imul(f, V)) | 0));
            var vt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(v, U)),
              (i = Math.imul(v, z)),
              (i = (i + Math.imul(g, U)) | 0),
              (o = Math.imul(g, z)),
              (r = (r + Math.imul(p, W)) | 0),
              (i = (i + Math.imul(p, V)) | 0),
              (i = (i + Math.imul(m, W)) | 0),
              (o = (o + Math.imul(m, V)) | 0),
              (r = (r + Math.imul(l, K)) | 0),
              (i = (i + Math.imul(l, Y)) | 0),
              (i = (i + Math.imul(f, K)) | 0),
              (o = (o + Math.imul(f, Y)) | 0));
            var gt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(w, U)),
              (i = Math.imul(w, z)),
              (i = (i + Math.imul(_, U)) | 0),
              (o = Math.imul(_, z)),
              (r = (r + Math.imul(v, W)) | 0),
              (i = (i + Math.imul(v, V)) | 0),
              (i = (i + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (r = (r + Math.imul(p, K)) | 0),
              (i = (i + Math.imul(p, Y)) | 0),
              (i = (i + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, Y)) | 0),
              (r = (r + Math.imul(l, G)) | 0),
              (i = (i + Math.imul(l, J)) | 0),
              (i = (i + Math.imul(f, G)) | 0),
              (o = (o + Math.imul(f, J)) | 0));
            var bt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (r = Math.imul(k, U)),
              (i = Math.imul(k, z)),
              (i = (i + Math.imul(C, U)) | 0),
              (o = Math.imul(C, z)),
              (r = (r + Math.imul(w, W)) | 0),
              (i = (i + Math.imul(w, V)) | 0),
              (i = (i + Math.imul(_, W)) | 0),
              (o = (o + Math.imul(_, V)) | 0),
              (r = (r + Math.imul(v, K)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (i = (i + Math.imul(g, K)) | 0),
              (o = (o + Math.imul(g, Y)) | 0),
              (r = (r + Math.imul(p, G)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (i = (i + Math.imul(m, G)) | 0),
              (o = (o + Math.imul(m, J)) | 0),
              (r = (r + Math.imul(l, Q)) | 0),
              (i = (i + Math.imul(l, tt)) | 0),
              (i = (i + Math.imul(f, Q)) | 0),
              (o = (o + Math.imul(f, tt)) | 0));
            var wt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(S, U)),
              (i = Math.imul(S, z)),
              (i = (i + Math.imul(A, U)) | 0),
              (o = Math.imul(A, z)),
              (r = (r + Math.imul(k, W)) | 0),
              (i = (i + Math.imul(k, V)) | 0),
              (i = (i + Math.imul(C, W)) | 0),
              (o = (o + Math.imul(C, V)) | 0),
              (r = (r + Math.imul(w, K)) | 0),
              (i = (i + Math.imul(w, Y)) | 0),
              (i = (i + Math.imul(_, K)) | 0),
              (o = (o + Math.imul(_, Y)) | 0),
              (r = (r + Math.imul(v, G)) | 0),
              (i = (i + Math.imul(v, J)) | 0),
              (i = (i + Math.imul(g, G)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (r = (r + Math.imul(p, Q)) | 0),
              (i = (i + Math.imul(p, tt)) | 0),
              (i = (i + Math.imul(m, Q)) | 0),
              (o = (o + Math.imul(m, tt)) | 0),
              (r = (r + Math.imul(l, nt)) | 0),
              (i = (i + Math.imul(l, rt)) | 0),
              (i = (i + Math.imul(f, nt)) | 0),
              (o = (o + Math.imul(f, rt)) | 0));
            var _t = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(R, U)),
              (i = Math.imul(R, z)),
              (i = (i + Math.imul(O, U)) | 0),
              (o = Math.imul(O, z)),
              (r = (r + Math.imul(S, W)) | 0),
              (i = (i + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(A, W)) | 0),
              (o = (o + Math.imul(A, V)) | 0),
              (r = (r + Math.imul(k, K)) | 0),
              (i = (i + Math.imul(k, Y)) | 0),
              (i = (i + Math.imul(C, K)) | 0),
              (o = (o + Math.imul(C, Y)) | 0),
              (r = (r + Math.imul(w, G)) | 0),
              (i = (i + Math.imul(w, J)) | 0),
              (i = (i + Math.imul(_, G)) | 0),
              (o = (o + Math.imul(_, J)) | 0),
              (r = (r + Math.imul(v, Q)) | 0),
              (i = (i + Math.imul(v, tt)) | 0),
              (i = (i + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (r = (r + Math.imul(p, nt)) | 0),
              (i = (i + Math.imul(p, rt)) | 0),
              (i = (i + Math.imul(m, nt)) | 0),
              (o = (o + Math.imul(m, rt)) | 0),
              (r = (r + Math.imul(l, ot)) | 0),
              (i = (i + Math.imul(l, st)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (o = (o + Math.imul(f, st)) | 0));
            var Mt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(B, U)),
              (i = Math.imul(B, z)),
              (i = (i + Math.imul(F, U)) | 0),
              (o = Math.imul(F, z)),
              (r = (r + Math.imul(R, W)) | 0),
              (i = (i + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(O, W)) | 0),
              (o = (o + Math.imul(O, V)) | 0),
              (r = (r + Math.imul(S, K)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (i = (i + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, Y)) | 0),
              (r = (r + Math.imul(k, G)) | 0),
              (i = (i + Math.imul(k, J)) | 0),
              (i = (i + Math.imul(C, G)) | 0),
              (o = (o + Math.imul(C, J)) | 0),
              (r = (r + Math.imul(w, Q)) | 0),
              (i = (i + Math.imul(w, tt)) | 0),
              (i = (i + Math.imul(_, Q)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (r = (r + Math.imul(v, nt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (i = (i + Math.imul(g, nt)) | 0),
              (o = (o + Math.imul(g, rt)) | 0),
              (r = (r + Math.imul(p, ot)) | 0),
              (i = (i + Math.imul(p, st)) | 0),
              (i = (i + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0),
              (r = (r + Math.imul(l, ht)) | 0),
              (i = (i + Math.imul(l, ut)) | 0),
              (i = (i + Math.imul(f, ht)) | 0),
              (o = (o + Math.imul(f, ut)) | 0));
            var kt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(L, U)),
              (i = Math.imul(L, z)),
              (i = (i + Math.imul(j, U)) | 0),
              (o = Math.imul(j, z)),
              (r = (r + Math.imul(B, W)) | 0),
              (i = (i + Math.imul(B, V)) | 0),
              (i = (i + Math.imul(F, W)) | 0),
              (o = (o + Math.imul(F, V)) | 0),
              (r = (r + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(R, Y)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (o = (o + Math.imul(O, Y)) | 0),
              (r = (r + Math.imul(S, G)) | 0),
              (i = (i + Math.imul(S, J)) | 0),
              (i = (i + Math.imul(A, G)) | 0),
              (o = (o + Math.imul(A, J)) | 0),
              (r = (r + Math.imul(k, Q)) | 0),
              (i = (i + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(C, Q)) | 0),
              (o = (o + Math.imul(C, tt)) | 0),
              (r = (r + Math.imul(w, nt)) | 0),
              (i = (i + Math.imul(w, rt)) | 0),
              (i = (i + Math.imul(_, nt)) | 0),
              (o = (o + Math.imul(_, rt)) | 0),
              (r = (r + Math.imul(v, ot)) | 0),
              (i = (i + Math.imul(v, st)) | 0),
              (i = (i + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (r = (r + Math.imul(p, ht)) | 0),
              (i = (i + Math.imul(p, ut)) | 0),
              (i = (i + Math.imul(m, ht)) | 0),
              (o = (o + Math.imul(m, ut)) | 0),
              (r = (r + Math.imul(l, lt)) | 0),
              (i = (i + Math.imul(l, ft)) | 0),
              (i = (i + Math.imul(f, lt)) | 0),
              (o = (o + Math.imul(f, ft)) | 0));
            var Ct = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (r = Math.imul(P, U)),
              (i = Math.imul(P, z)),
              (i = (i + Math.imul(D, U)) | 0),
              (o = Math.imul(D, z)),
              (r = (r + Math.imul(L, W)) | 0),
              (i = (i + Math.imul(L, V)) | 0),
              (i = (i + Math.imul(j, W)) | 0),
              (o = (o + Math.imul(j, V)) | 0),
              (r = (r + Math.imul(B, K)) | 0),
              (i = (i + Math.imul(B, Y)) | 0),
              (i = (i + Math.imul(F, K)) | 0),
              (o = (o + Math.imul(F, Y)) | 0),
              (r = (r + Math.imul(R, G)) | 0),
              (i = (i + Math.imul(R, J)) | 0),
              (i = (i + Math.imul(O, G)) | 0),
              (o = (o + Math.imul(O, J)) | 0),
              (r = (r + Math.imul(S, Q)) | 0),
              (i = (i + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (r = (r + Math.imul(k, nt)) | 0),
              (i = (i + Math.imul(k, rt)) | 0),
              (i = (i + Math.imul(C, nt)) | 0),
              (o = (o + Math.imul(C, rt)) | 0),
              (r = (r + Math.imul(w, ot)) | 0),
              (i = (i + Math.imul(w, st)) | 0),
              (i = (i + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (r = (r + Math.imul(v, ht)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (i = (i + Math.imul(g, ht)) | 0),
              (o = (o + Math.imul(g, ut)) | 0),
              (r = (r + Math.imul(p, lt)) | 0),
              (i = (i + Math.imul(p, ft)) | 0),
              (i = (i + Math.imul(m, lt)) | 0),
              (o = (o + Math.imul(m, ft)) | 0),
              (r = (r + Math.imul(l, pt)) | 0),
              (i = (i + Math.imul(l, mt)) | 0),
              (i = (i + Math.imul(f, pt)) | 0),
              (o = (o + Math.imul(f, mt)) | 0));
            var Et = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(P, W)),
              (i = Math.imul(P, V)),
              (i = (i + Math.imul(D, W)) | 0),
              (o = Math.imul(D, V)),
              (r = (r + Math.imul(L, K)) | 0),
              (i = (i + Math.imul(L, Y)) | 0),
              (i = (i + Math.imul(j, K)) | 0),
              (o = (o + Math.imul(j, Y)) | 0),
              (r = (r + Math.imul(B, G)) | 0),
              (i = (i + Math.imul(B, J)) | 0),
              (i = (i + Math.imul(F, G)) | 0),
              (o = (o + Math.imul(F, J)) | 0),
              (r = (r + Math.imul(R, Q)) | 0),
              (i = (i + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(O, Q)) | 0),
              (o = (o + Math.imul(O, tt)) | 0),
              (r = (r + Math.imul(S, nt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (i = (i + Math.imul(A, nt)) | 0),
              (o = (o + Math.imul(A, rt)) | 0),
              (r = (r + Math.imul(k, ot)) | 0),
              (i = (i + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(C, ot)) | 0),
              (o = (o + Math.imul(C, st)) | 0),
              (r = (r + Math.imul(w, ht)) | 0),
              (i = (i + Math.imul(w, ut)) | 0),
              (i = (i + Math.imul(_, ht)) | 0),
              (o = (o + Math.imul(_, ut)) | 0),
              (r = (r + Math.imul(v, lt)) | 0),
              (i = (i + Math.imul(v, ft)) | 0),
              (i = (i + Math.imul(g, lt)) | 0),
              (o = (o + Math.imul(g, ft)) | 0),
              (r = (r + Math.imul(p, pt)) | 0),
              (i = (i + Math.imul(p, mt)) | 0),
              (i = (i + Math.imul(m, pt)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var St = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(P, K)),
              (i = Math.imul(P, Y)),
              (i = (i + Math.imul(D, K)) | 0),
              (o = Math.imul(D, Y)),
              (r = (r + Math.imul(L, G)) | 0),
              (i = (i + Math.imul(L, J)) | 0),
              (i = (i + Math.imul(j, G)) | 0),
              (o = (o + Math.imul(j, J)) | 0),
              (r = (r + Math.imul(B, Q)) | 0),
              (i = (i + Math.imul(B, tt)) | 0),
              (i = (i + Math.imul(F, Q)) | 0),
              (o = (o + Math.imul(F, tt)) | 0),
              (r = (r + Math.imul(R, nt)) | 0),
              (i = (i + Math.imul(R, rt)) | 0),
              (i = (i + Math.imul(O, nt)) | 0),
              (o = (o + Math.imul(O, rt)) | 0),
              (r = (r + Math.imul(S, ot)) | 0),
              (i = (i + Math.imul(S, st)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (r = (r + Math.imul(k, ht)) | 0),
              (i = (i + Math.imul(k, ut)) | 0),
              (i = (i + Math.imul(C, ht)) | 0),
              (o = (o + Math.imul(C, ut)) | 0),
              (r = (r + Math.imul(w, lt)) | 0),
              (i = (i + Math.imul(w, ft)) | 0),
              (i = (i + Math.imul(_, lt)) | 0),
              (o = (o + Math.imul(_, ft)) | 0),
              (r = (r + Math.imul(v, pt)) | 0),
              (i = (i + Math.imul(v, mt)) | 0),
              (i = (i + Math.imul(g, pt)) | 0),
              (o = (o + Math.imul(g, mt)) | 0));
            var At = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(P, G)),
              (i = Math.imul(P, J)),
              (i = (i + Math.imul(D, G)) | 0),
              (o = Math.imul(D, J)),
              (r = (r + Math.imul(L, Q)) | 0),
              (i = (i + Math.imul(L, tt)) | 0),
              (i = (i + Math.imul(j, Q)) | 0),
              (o = (o + Math.imul(j, tt)) | 0),
              (r = (r + Math.imul(B, nt)) | 0),
              (i = (i + Math.imul(B, rt)) | 0),
              (i = (i + Math.imul(F, nt)) | 0),
              (o = (o + Math.imul(F, rt)) | 0),
              (r = (r + Math.imul(R, ot)) | 0),
              (i = (i + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(O, ot)) | 0),
              (o = (o + Math.imul(O, st)) | 0),
              (r = (r + Math.imul(S, ht)) | 0),
              (i = (i + Math.imul(S, ut)) | 0),
              (i = (i + Math.imul(A, ht)) | 0),
              (o = (o + Math.imul(A, ut)) | 0),
              (r = (r + Math.imul(k, lt)) | 0),
              (i = (i + Math.imul(k, ft)) | 0),
              (i = (i + Math.imul(C, lt)) | 0),
              (o = (o + Math.imul(C, ft)) | 0),
              (r = (r + Math.imul(w, pt)) | 0),
              (i = (i + Math.imul(w, mt)) | 0),
              (i = (i + Math.imul(_, pt)) | 0),
              (o = (o + Math.imul(_, mt)) | 0));
            var xt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (r = Math.imul(P, Q)),
              (i = Math.imul(P, tt)),
              (i = (i + Math.imul(D, Q)) | 0),
              (o = Math.imul(D, tt)),
              (r = (r + Math.imul(L, nt)) | 0),
              (i = (i + Math.imul(L, rt)) | 0),
              (i = (i + Math.imul(j, nt)) | 0),
              (o = (o + Math.imul(j, rt)) | 0),
              (r = (r + Math.imul(B, ot)) | 0),
              (i = (i + Math.imul(B, st)) | 0),
              (i = (i + Math.imul(F, ot)) | 0),
              (o = (o + Math.imul(F, st)) | 0),
              (r = (r + Math.imul(R, ht)) | 0),
              (i = (i + Math.imul(R, ut)) | 0),
              (i = (i + Math.imul(O, ht)) | 0),
              (o = (o + Math.imul(O, ut)) | 0),
              (r = (r + Math.imul(S, lt)) | 0),
              (i = (i + Math.imul(S, ft)) | 0),
              (i = (i + Math.imul(A, lt)) | 0),
              (o = (o + Math.imul(A, ft)) | 0),
              (r = (r + Math.imul(k, pt)) | 0),
              (i = (i + Math.imul(k, mt)) | 0),
              (i = (i + Math.imul(C, pt)) | 0),
              (o = (o + Math.imul(C, mt)) | 0));
            var Rt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(P, nt)),
              (i = Math.imul(P, rt)),
              (i = (i + Math.imul(D, nt)) | 0),
              (o = Math.imul(D, rt)),
              (r = (r + Math.imul(L, ot)) | 0),
              (i = (i + Math.imul(L, st)) | 0),
              (i = (i + Math.imul(j, ot)) | 0),
              (o = (o + Math.imul(j, st)) | 0),
              (r = (r + Math.imul(B, ht)) | 0),
              (i = (i + Math.imul(B, ut)) | 0),
              (i = (i + Math.imul(F, ht)) | 0),
              (o = (o + Math.imul(F, ut)) | 0),
              (r = (r + Math.imul(R, lt)) | 0),
              (i = (i + Math.imul(R, ft)) | 0),
              (i = (i + Math.imul(O, lt)) | 0),
              (o = (o + Math.imul(O, ft)) | 0),
              (r = (r + Math.imul(S, pt)) | 0),
              (i = (i + Math.imul(S, mt)) | 0),
              (i = (i + Math.imul(A, pt)) | 0),
              (o = (o + Math.imul(A, mt)) | 0));
            var Ot = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (r = Math.imul(P, ot)),
              (i = Math.imul(P, st)),
              (i = (i + Math.imul(D, ot)) | 0),
              (o = Math.imul(D, st)),
              (r = (r + Math.imul(L, ht)) | 0),
              (i = (i + Math.imul(L, ut)) | 0),
              (i = (i + Math.imul(j, ht)) | 0),
              (o = (o + Math.imul(j, ut)) | 0),
              (r = (r + Math.imul(B, lt)) | 0),
              (i = (i + Math.imul(B, ft)) | 0),
              (i = (i + Math.imul(F, lt)) | 0),
              (o = (o + Math.imul(F, ft)) | 0),
              (r = (r + Math.imul(R, pt)) | 0),
              (i = (i + Math.imul(R, mt)) | 0),
              (i = (i + Math.imul(O, pt)) | 0),
              (o = (o + Math.imul(O, mt)) | 0));
            var Tt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (r = Math.imul(P, ht)),
              (i = Math.imul(P, ut)),
              (i = (i + Math.imul(D, ht)) | 0),
              (o = Math.imul(D, ut)),
              (r = (r + Math.imul(L, lt)) | 0),
              (i = (i + Math.imul(L, ft)) | 0),
              (i = (i + Math.imul(j, lt)) | 0),
              (o = (o + Math.imul(j, ft)) | 0),
              (r = (r + Math.imul(B, pt)) | 0),
              (i = (i + Math.imul(B, mt)) | 0),
              (i = (i + Math.imul(F, pt)) | 0),
              (o = (o + Math.imul(F, mt)) | 0));
            var Bt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (r = Math.imul(P, lt)),
              (i = Math.imul(P, ft)),
              (i = (i + Math.imul(D, lt)) | 0),
              (o = Math.imul(D, ft)),
              (r = (r + Math.imul(L, pt)) | 0),
              (i = (i + Math.imul(L, mt)) | 0),
              (i = (i + Math.imul(j, pt)) | 0),
              (o = (o + Math.imul(j, mt)) | 0));
            var Ft = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            ((u = (((o + (i >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (r = Math.imul(P, pt)),
              (i = Math.imul(P, mt)),
              (i = (i + Math.imul(D, pt)) | 0),
              (o = Math.imul(D, mt)));
            var Nt = (((u + r) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (u = (((o + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (h[0] = yt),
              (h[1] = vt),
              (h[2] = gt),
              (h[3] = bt),
              (h[4] = wt),
              (h[5] = _t),
              (h[6] = Mt),
              (h[7] = kt),
              (h[8] = Ct),
              (h[9] = Et),
              (h[10] = St),
              (h[11] = At),
              (h[12] = xt),
              (h[13] = Rt),
              (h[14] = Ot),
              (h[15] = Tt),
              (h[16] = Bt),
              (h[17] = Ft),
              (h[18] = Nt),
              0 !== u && ((h[19] = u), n.length++),
              n
            );
          };
          function b(t, e, n) {
            ((n.negative = e.negative ^ t.negative),
              (n.length = t.length + e.length));
            for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var a = 67108863 & r,
                  h = Math.min(o, e.length - 1),
                  u = Math.max(0, o - t.length + 1);
                u <= h;
                u++
              ) {
                var c = o - u,
                  l = 0 | t.words[c],
                  f = 0 | e.words[u],
                  d = l * f,
                  p = 67108863 & d;
                ((s = (s + ((d / 67108864) | 0)) | 0),
                  (p = (p + a) | 0),
                  (a = 67108863 & p),
                  (s = (s + (p >>> 26)) | 0),
                  (i += s >>> 26),
                  (s &= 67108863));
              }
              ((n.words[o] = a), (r = s), (s = i));
            }
            return (0 !== r ? (n.words[o] = r) : n.length--, n._strip());
          }
          function w(t, e, n) {
            return b(t, e, n);
          }
          function _(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (g = v),
            (o.prototype.mulTo = function (t, e) {
              var n,
                r = this.length + t.length;
              return (
                (n =
                  10 === this.length && 10 === t.length
                    ? g(this, t, e)
                    : r < 63
                      ? v(this, t, e)
                      : r < 1024
                        ? b(this, t, e)
                        : w(this, t, e)),
                n
              );
            }),
            (_.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), n = o.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, n, t);
              return e;
            }),
            (_.prototype.revBin = function (t, e, n) {
              if (0 === t || t === n - 1) return t;
              for (var r = 0, i = 0; i < e; i++)
                ((r |= (1 & t) << (e - i - 1)), (t >>= 1));
              return r;
            }),
            (_.prototype.permute = function (t, e, n, r, i, o) {
              for (var s = 0; s < o; s++) ((r[s] = e[t[s]]), (i[s] = n[t[s]]));
            }),
            (_.prototype.transform = function (t, e, n, r, i, o) {
              this.permute(o, t, e, n, r, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1,
                    h = Math.cos((2 * Math.PI) / a),
                    u = Math.sin((2 * Math.PI) / a),
                    c = 0;
                  c < i;
                  c += a
                )
                  for (var l = h, f = u, d = 0; d < s; d++) {
                    var p = n[c + d],
                      m = r[c + d],
                      y = n[c + d + s],
                      v = r[c + d + s],
                      g = l * y - f * v;
                    ((v = l * v + f * y),
                      (y = g),
                      (n[c + d] = p + y),
                      (r[c + d] = m + v),
                      (n[c + d + s] = p - y),
                      (r[c + d + s] = m - v),
                      d !== a &&
                        ((g = h * l - u * f), (f = h * f + u * l), (l = g)));
                  }
            }),
            (_.prototype.guessLen13b = function (t, e) {
              var n = 1 | Math.max(e, t),
                r = 1 & n,
                i = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) i++;
              return 1 << (i + 1 + r);
            }),
            (_.prototype.conjugate = function (t, e, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var i = t[r];
                  ((t[r] = t[n - r - 1]),
                    (t[n - r - 1] = i),
                    (i = e[r]),
                    (e[r] = -e[n - r - 1]),
                    (e[n - r - 1] = -i));
                }
            }),
            (_.prototype.normalize13b = function (t, e) {
              for (var n = 0, r = 0; r < e / 2; r++) {
                var i =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  n;
                ((t[r] = 67108863 & i),
                  (n = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return t;
            }),
            (_.prototype.convert13b = function (t, e, n, i) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (n[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (n[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < i; ++s) n[s] = 0;
              (r(0 === o), r(0 === (-8192 & o)));
            }),
            (_.prototype.stub = function (t) {
              for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
              return e;
            }),
            (_.prototype.mulp = function (t, e, n) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(r),
                o = this.stub(r),
                s = new Array(r),
                a = new Array(r),
                h = new Array(r),
                u = new Array(r),
                c = new Array(r),
                l = new Array(r),
                f = n.words;
              ((f.length = r),
                this.convert13b(t.words, t.length, s, r),
                this.convert13b(e.words, e.length, u, r),
                this.transform(s, o, a, h, r, i),
                this.transform(u, o, c, l, r, i));
              for (var d = 0; d < r; d++) {
                var p = a[d] * c[d] - h[d] * l[d];
                ((h[d] = a[d] * l[d] + h[d] * c[d]), (a[d] = p));
              }
              return (
                this.conjugate(a, h, r),
                this.transform(a, h, f, o, r, i),
                this.conjugate(f, o, r),
                this.normalize13b(f, r),
                (n.negative = t.negative ^ e.negative),
                (n.length = t.length + e.length),
                n._strip()
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
                w(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), r("number" === typeof t), r(t < 67108864));
              for (var n = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & n);
                ((n >>= 26),
                  (n += (o / 67108864) | 0),
                  (n += s >>> 26),
                  (this.words[i] = 67108863 & s));
              }
              return (
                0 !== n && ((this.words[i] = n), this.length++),
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
              var e = y(t);
              if (0 === e.length) return new o(1);
              for (var n = this, r = 0; r < e.length; r++, n = n.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var i = n.sqr(); r < e.length; r++, i = i.sqr())
                  0 !== e[r] && (n = n.mul(i));
              return n;
            }),
            (o.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                n = t % 26,
                i = (t - n) / 26,
                o = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    h = ((0 | this.words[e]) - a) << n;
                  ((this.words[e] = h | s), (s = a >>> (26 - n)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (r(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, n) {
              var i;
              (r("number" === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                h = n;
              if (((i -= s), (i = Math.max(0, i)), h)) {
                for (var u = 0; u < s; u++) h.words[u] = this.words[u];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + s];
              else ((this.words[0] = 0), (this.length = 1));
              var c = 0;
              for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                var l = 0 | this.words[u];
                ((this.words[u] = (c << (26 - o)) | (l >>> o)), (c = l & a));
              }
              return (
                h && 0 !== c && (h.words[h.length++] = c),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, n) {
              return (r(0 === this.negative), this.iushrn(t, e, n));
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
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              if (this.length <= n) return !1;
              var o = this.words[n];
              return !!(o & i);
            }),
            (o.prototype.imaskn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== e && n++,
                (this.length = Math.min(n, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
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
              if ((r("number" === typeof t), r(t < 67108864), t < 0))
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
            (o.prototype._ishlnsubmul = function (t, e, n) {
              var i,
                o,
                s = t.length + n;
              this._expand(s);
              var a = 0;
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + n]) + a;
                var h = (0 | t.words[i]) * e;
                ((o -= 67108863 & h),
                  (a = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[i + n] = 67108863 & o));
              }
              for (; i < this.length - n; i++)
                ((o = (0 | this.words[i + n]) + a),
                  (a = o >> 26),
                  (this.words[i + n] = 67108863 & o));
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, i = 0; i < this.length; i++)
                ((o = -(0 | this.words[i]) + a),
                  (a = o >> 26),
                  (this.words[i] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var n = this.length - t.length,
                r = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1],
                a = this._countBits(s);
              ((n = 26 - a),
                0 !== n &&
                  ((i = i.ushln(n)),
                  r.iushln(n),
                  (s = 0 | i.words[i.length - 1])));
              var h,
                u = r.length - i.length;
              if ("mod" !== e) {
                ((h = new o(null)),
                  (h.length = u + 1),
                  (h.words = new Array(h.length)));
                for (var c = 0; c < h.length; c++) h.words[c] = 0;
              }
              var l = r.clone()._ishlnsubmul(i, 1, u);
              0 === l.negative && ((r = l), h && (h.words[u] = 1));
              for (var f = u - 1; f >= 0; f--) {
                var d =
                  67108864 * (0 | r.words[i.length + f]) +
                  (0 | r.words[i.length + f - 1]);
                ((d = Math.min((d / s) | 0, 67108863)),
                  r._ishlnsubmul(i, d, f));
                while (0 !== r.negative)
                  (d--,
                    (r.negative = 0),
                    r._ishlnsubmul(i, 1, f),
                    r.isZero() || (r.negative ^= 1));
                h && (h.words[f] = d);
              }
              return (
                h && h._strip(),
                r._strip(),
                "div" !== e && 0 !== n && r.iushrn(n),
                { div: h || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((a = this.neg().divmod(t, e)),
                      "mod" !== e && (i = a.div.neg()),
                      "div" !== e &&
                        ((s = a.mod.neg()), n && 0 !== s.negative && s.iadd(t)),
                      { div: i, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((a = this.divmod(t.neg(), e)),
                        "mod" !== e && (i = a.div.neg()),
                        { div: i, mod: a.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((a = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = a.mod.neg()),
                            n && 0 !== s.negative && s.isub(t)),
                          { div: a.div, mod: s })
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
              var i, s, a;
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
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                i = t.andln(1),
                o = n.cmp(r);
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (
                var n = (1 << 26) % t, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (n * i + (0 | this.words[o])) % t;
              return e ? -i : i;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (var n = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * n;
                ((this.words[i] = (o / t) | 0), (n = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i = new o(1),
                s = new o(0),
                a = new o(0),
                h = new o(1),
                u = 0;
              while (e.isEven() && n.isEven()) (e.iushrn(1), n.iushrn(1), ++u);
              var c = n.clone(),
                l = e.clone();
              while (!e.isZero()) {
                for (
                  var f = 0, d = 1;
                  0 === (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0) {
                  e.iushrn(f);
                  while (f-- > 0)
                    ((i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(l)),
                      i.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var p = 0, m = 1;
                  0 === (n.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0) {
                  n.iushrn(p);
                  while (p-- > 0)
                    ((a.isOdd() || h.isOdd()) && (a.iadd(c), h.isub(l)),
                      a.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(n) >= 0
                  ? (e.isub(n), i.isub(a), s.isub(h))
                  : (n.isub(e), a.isub(i), h.isub(s));
              }
              return { a: a, b: h, gcd: n.iushln(u) };
            }),
            (o.prototype._invmp = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i,
                s = new o(1),
                a = new o(0),
                h = n.clone();
              while (e.cmpn(1) > 0 && n.cmpn(1) > 0) {
                for (
                  var u = 0, c = 1;
                  0 === (e.words[0] & c) && u < 26;
                  ++u, c <<= 1
                );
                if (u > 0) {
                  e.iushrn(u);
                  while (u-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var l = 0, f = 1;
                  0 === (n.words[0] & f) && l < 26;
                  ++l, f <<= 1
                );
                if (l > 0) {
                  n.iushrn(l);
                  while (l-- > 0) (a.isOdd() && a.iadd(h), a.iushrn(1));
                }
                e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
              }
              return (
                (i = 0 === e.cmpn(1) ? s : a),
                i.cmpn(0) < 0 && i.iadd(t),
                i
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              ((e.negative = 0), (n.negative = 0));
              for (var r = 0; e.isEven() && n.isEven(); r++)
                (e.iushrn(1), n.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (n.isEven()) n.iushrn(1);
                var i = e.cmp(n);
                if (i < 0) {
                  var o = e;
                  ((e = n), (n = o));
                } else if (0 === i || 0 === n.cmpn(1)) break;
                e.isub(n);
              } while (1);
              return n.iushln(r);
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
              r("number" === typeof t);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              if (this.length <= n)
                return (this._expand(n + 1), (this.words[n] |= i), this);
              for (var o = i, s = n; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s];
                ((a += o),
                  (o = a >>> 26),
                  (a &= 67108863),
                  (this.words[s] = a));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                n = t < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (n && (t = -t), r(t <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
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
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  i = 0 | t.words[n];
                if (r !== i) {
                  r < i ? (e = -1) : r > i && (e = 1);
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
              return new x(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
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
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var M = { k256: null, p224: null, p192: null, p25519: null };
          function k(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function C() {
            k.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function E() {
            k.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function S() {
            k.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function A() {
            k.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function x(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function R(t) {
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
          ((k.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (k.prototype.ireduce = function (t) {
              var e,
                n = t;
              do {
                (this.split(n, this.tmp),
                  (n = this.imulK(n)),
                  (n = n.iadd(this.tmp)),
                  (e = n.bitLength()));
              } while (e > this.n);
              var r = e < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                    ? n.isub(this.p)
                    : void 0 !== n.strip
                      ? n.strip()
                      : n._strip(),
                n
              );
            }),
            (k.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (k.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(C, k),
            (C.prototype.split = function (t, e) {
              for (
                var n = 4194303, r = Math.min(t.length, 9), i = 0;
                i < r;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = r), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & n, i = 10; i < t.length; i++) {
                var s = 0 | t.words[i];
                ((t.words[i - 10] = ((s & n) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[i - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (C.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                ((e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(E, k),
            i(S, k),
            i(A, k),
            (A.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  i = 67108863 & r;
                ((r >>>= 26), (t.words[n] = i), (e = r));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (M[t]) return M[t];
              var e;
              if ("k256" === t) e = new C();
              else if ("p224" === t) e = new E();
              else if ("p192" === t) e = new S();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new A();
              }
              return ((M[t] = e), e);
            }),
            (x.prototype._verify1 = function (t) {
              (r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers"));
            }),
            (x.prototype._verify2 = function (t, e) {
              (r(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                r(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (x.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (c(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (x.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (x.prototype.add = function (t, e) {
              this._verify2(t, e);
              var n = t.add(e);
              return (n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this));
            }),
            (x.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var n = t.iadd(e);
              return (n.cmp(this.m) >= 0 && n.isub(this.m), n);
            }),
            (x.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var n = t.sub(e);
              return (n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this));
            }),
            (x.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var n = t.isub(e);
              return (n.cmpn(0) < 0 && n.iadd(this.m), n);
            }),
            (x.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (x.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (x.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (x.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (x.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (x.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var n = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, n);
              }
              var i = this.m.subn(1),
                s = 0;
              while (!i.isZero() && 0 === i.andln(1)) (s++, i.iushrn(1));
              r(!i.isZero());
              var a = new o(1).toRed(this),
                h = a.redNeg(),
                u = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();
              c = new o(2 * c * c).toRed(this);
              while (0 !== this.pow(c, u).cmp(h)) c.redIAdd(h);
              var l = this.pow(c, i),
                f = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              while (0 !== d.cmp(a)) {
                for (var m = d, y = 0; 0 !== m.cmp(a); y++) m = m.redSqr();
                r(y < p);
                var v = this.pow(l, new o(1).iushln(p - y - 1));
                ((f = f.redMul(v)),
                  (l = v.redSqr()),
                  (d = d.redMul(l)),
                  (p = y));
              }
              return f;
            }),
            (x.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (x.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = 4,
                r = new Array(1 << n);
              ((r[0] = new o(1).toRed(this)), (r[1] = t));
              for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
              var s = r[0],
                a = 0,
                h = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), i = e.length - 1; i >= 0; i--) {
                for (var c = e.words[i], l = u - 1; l >= 0; l--) {
                  var f = (c >> l) & 1;
                  (s !== r[0] && (s = this.sqr(s)),
                    0 !== f || 0 !== a
                      ? ((a <<= 1),
                        (a |= f),
                        h++,
                        (h === n || (0 === i && 0 === l)) &&
                          ((s = this.mul(s, r[a])), (h = 0), (a = 0)))
                      : (h = 0));
                }
                u = 26;
              }
              return s;
            }),
            (x.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (x.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new R(t);
            }),
            i(R, x),
            (R.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (R.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (R.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var n = t.imul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (R.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var n = t.mul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (R.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, n(20)(t));
    },
    1952: function (t, e, n) {
      "use strict";
      var r = n(46).Buffer,
        i = n(1953).Transform,
        o = n(16);
      function s(t, e) {
        if (!r.isBuffer(t) && "string" !== typeof t)
          throw new TypeError(e + " must be a string or a buffer");
      }
      function a(t) {
        (i.call(this),
          (this._block = r.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1));
      }
      (o(a, i),
        (a.prototype._transform = function (t, e, n) {
          var r = null;
          try {
            this.update(t, e);
          } catch (i) {
            r = i;
          }
          n(r);
        }),
        (a.prototype._flush = function (t) {
          var e = null;
          try {
            this.push(this.digest());
          } catch (n) {
            e = n;
          }
          t(e);
        }),
        (a.prototype.update = function (t, e) {
          if ((s(t, "Data"), this._finalized))
            throw new Error("Digest already called");
          r.isBuffer(t) || (t = r.from(t, e));
          var n = this._block,
            i = 0;
          while (this._blockOffset + t.length - i >= this._blockSize) {
            for (var o = this._blockOffset; o < this._blockSize; )
              n[o++] = t[i++];
            (this._update(), (this._blockOffset = 0));
          }
          while (i < t.length) n[this._blockOffset++] = t[i++];
          for (var a = 0, h = 8 * t.length; h > 0; ++a)
            ((this._length[a] += h),
              (h = (this._length[a] / 4294967296) | 0),
              h > 0 && (this._length[a] -= 4294967296 * h));
          return this;
        }),
        (a.prototype._update = function () {
          throw new Error("_update is not implemented");
        }),
        (a.prototype.digest = function (t) {
          if (this._finalized) throw new Error("Digest already called");
          this._finalized = !0;
          var e = this._digest();
          (void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            (this._blockOffset = 0));
          for (var n = 0; n < 4; ++n) this._length[n] = 0;
          return e;
        }),
        (a.prototype._digest = function () {
          throw new Error("_digest is not implemented");
        }),
        (t.exports = a));
    },
    1953: function (t, e, n) {
      ((e = t.exports = n(663)),
        (e.Stream = e),
        (e.Readable = e),
        (e.Writable = n(667)),
        (e.Duplex = n(122)),
        (e.Transform = n(668)),
        (e.PassThrough = n(1959)),
        (e.finished = n(326)),
        (e.pipeline = n(1960)));
    },
    1955: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                o(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function o(t, e, n) {
        return (
          (e = u(e)),
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, u(r.key), r));
        }
      }
      function h(t, e, n) {
        return (
          e && a(t.prototype, e),
          n && a(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function u(t) {
        var e = c(t, "string");
        return "symbol" === typeof e ? e : String(e);
      }
      function c(t, e) {
        if ("object" !== typeof t || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, e || "default");
          if ("object" !== typeof r) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }
      var l = n(2),
        f = l.Buffer,
        d = n(1956),
        p = d.inspect,
        m = (p && p.custom) || "inspect";
      function y(t, e, n) {
        f.prototype.copy.call(t, e, n);
      }
      t.exports = (function () {
        function t() {
          (s(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0));
        }
        return (
          h(t, [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                (this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length);
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                (0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length);
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                ((this.head = this.tail = null), (this.length = 0));
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                var e = this.head,
                  n = "" + e.data;
                while ((e = e.next)) n += t + e.data;
                return n;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return f.alloc(0);
                var e = f.allocUnsafe(t >>> 0),
                  n = this.head,
                  r = 0;
                while (n) (y(n.data, e, r), (r += n.data.length), (n = n.next));
                return e;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var n;
                return (
                  t < this.head.data.length
                    ? ((n = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (n =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                            ? this._getString(t)
                            : this._getBuffer(t)),
                  n
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  n = 1,
                  r = e.data;
                t -= r.length;
                while ((e = e.next)) {
                  var i = e.data,
                    o = t > i.length ? i.length : t;
                  if (
                    (o === i.length ? (r += i) : (r += i.slice(0, t)),
                    (t -= o),
                    0 === t)
                  ) {
                    o === i.length
                      ? (++n,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return ((this.length -= n), r);
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = f.allocUnsafe(t),
                  n = this.head,
                  r = 1;
                (n.data.copy(e), (t -= n.data.length));
                while ((n = n.next)) {
                  var i = n.data,
                    o = t > i.length ? i.length : t;
                  if ((i.copy(e, e.length - t, 0, o), (t -= o), 0 === t)) {
                    o === i.length
                      ? (++r,
                        n.next
                          ? (this.head = n.next)
                          : (this.head = this.tail = null))
                      : ((this.head = n), (n.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return ((this.length -= r), e);
              },
            },
            {
              key: m,
              value: function (t, e) {
                return p(
                  this,
                  i(i({}, e), {}, { depth: 0, customInspect: !1 }),
                );
              },
            },
          ]),
          t
        );
      })();
    },
    1957: function (t, e, n) {
      "use strict";
      (function (e) {
        var r;
        function i(t, e, n) {
          return (
            (e = o(e)),
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function o(t) {
          var e = s(t, "string");
          return "symbol" === typeof e ? e : String(e);
        }
        function s(t, e) {
          if ("object" !== typeof t || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        }
        var a = n(326),
          h = Symbol("lastResolve"),
          u = Symbol("lastReject"),
          c = Symbol("error"),
          l = Symbol("ended"),
          f = Symbol("lastPromise"),
          d = Symbol("handlePromise"),
          p = Symbol("stream");
        function m(t, e) {
          return { value: t, done: e };
        }
        function y(t) {
          var e = t[h];
          if (null !== e) {
            var n = t[p].read();
            null !== n &&
              ((t[f] = null), (t[h] = null), (t[u] = null), e(m(n, !1)));
          }
        }
        function v(t) {
          e.nextTick(y, t);
        }
        function g(t, e) {
          return function (n, r) {
            t.then(function () {
              e[l] ? n(m(void 0, !0)) : e[d](n, r);
            }, r);
          };
        }
        var b = Object.getPrototypeOf(function () {}),
          w = Object.setPrototypeOf(
            ((r = {
              get stream() {
                return this[p];
              },
              next: function () {
                var t = this,
                  n = this[c];
                if (null !== n) return Promise.reject(n);
                if (this[l]) return Promise.resolve(m(void 0, !0));
                if (this[p].destroyed)
                  return new Promise(function (n, r) {
                    e.nextTick(function () {
                      t[c] ? r(t[c]) : n(m(void 0, !0));
                    });
                  });
                var r,
                  i = this[f];
                if (i) r = new Promise(g(i, this));
                else {
                  var o = this[p].read();
                  if (null !== o) return Promise.resolve(m(o, !1));
                  r = new Promise(this[d]);
                }
                return ((this[f] = r), r);
              },
            }),
            i(r, Symbol.asyncIterator, function () {
              return this;
            }),
            i(r, "return", function () {
              var t = this;
              return new Promise(function (e, n) {
                t[p].destroy(null, function (t) {
                  t ? n(t) : e(m(void 0, !0));
                });
              });
            }),
            r),
            b,
          ),
          _ = function (t) {
            var e,
              n = Object.create(
                w,
                ((e = {}),
                i(e, p, { value: t, writable: !0 }),
                i(e, h, { value: null, writable: !0 }),
                i(e, u, { value: null, writable: !0 }),
                i(e, c, { value: null, writable: !0 }),
                i(e, l, { value: t._readableState.endEmitted, writable: !0 }),
                i(e, d, {
                  value: function (t, e) {
                    var r = n[p].read();
                    r
                      ? ((n[f] = null),
                        (n[h] = null),
                        (n[u] = null),
                        t(m(r, !1)))
                      : ((n[h] = t), (n[u] = e));
                  },
                  writable: !0,
                }),
                e),
              );
            return (
              (n[f] = null),
              a(t, function (t) {
                if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                  var e = n[u];
                  return (
                    null !== e &&
                      ((n[f] = null), (n[h] = null), (n[u] = null), e(t)),
                    void (n[c] = t)
                  );
                }
                var r = n[h];
                (null !== r &&
                  ((n[f] = null),
                  (n[h] = null),
                  (n[u] = null),
                  r(m(void 0, !0))),
                  (n[l] = !0));
              }),
              t.on("readable", v.bind(null, n)),
              n
            );
          };
        t.exports = _;
      }).call(this, n(18));
    },
    1958: function (t, e) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    1959: function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n(668);
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        r.call(this, t);
      }
      (n(16)(i, r),
        (i.prototype._transform = function (t, e, n) {
          n(null, t);
        }));
    },
    1960: function (t, e, n) {
      "use strict";
      var r;
      function i(t) {
        var e = !1;
        return function () {
          e || ((e = !0), t.apply(void 0, arguments));
        };
      }
      var o = n(121).codes,
        s = o.ERR_MISSING_ARGS,
        a = o.ERR_STREAM_DESTROYED;
      function h(t) {
        if (t) throw t;
      }
      function u(t) {
        return t.setHeader && "function" === typeof t.abort;
      }
      function c(t, e, o, s) {
        s = i(s);
        var h = !1;
        (t.on("close", function () {
          h = !0;
        }),
          void 0 === r && (r = n(326)),
          r(t, { readable: e, writable: o }, function (t) {
            if (t) return s(t);
            ((h = !0), s());
          }));
        var c = !1;
        return function (e) {
          if (!h && !c)
            return (
              (c = !0),
              u(t)
                ? t.abort()
                : "function" === typeof t.destroy
                  ? t.destroy()
                  : void s(e || new a("pipe"))
            );
        };
      }
      function l(t) {
        t();
      }
      function f(t, e) {
        return t.pipe(e);
      }
      function d(t) {
        return t.length
          ? "function" !== typeof t[t.length - 1]
            ? h
            : t.pop()
          : h;
      }
      function p() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        var r,
          i = d(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new s("streams");
        var o = e.map(function (t, n) {
          var s = n < e.length - 1,
            a = n > 0;
          return c(t, s, a, function (t) {
            (r || (r = t), t && o.forEach(l), s || (o.forEach(l), i(r)));
          });
        });
        return e.reduce(f);
      }
      t.exports = p;
    },
    1961: function (t, e, n) {
      var r = n(16),
        i = n(123),
        o = n(46).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function h() {
        (this.init(), (this._w = a), i.call(this, 64, 56));
      }
      function u(t) {
        return (t << 5) | (t >>> 27);
      }
      function c(t) {
        return (t << 30) | (t >>> 2);
      }
      function l(t, e, n, r) {
        return 0 === t
          ? (e & n) | (~e & r)
          : 2 === t
            ? (e & n) | (e & r) | (n & r)
            : e ^ n ^ r;
      }
      (r(h, i),
        (h.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (h.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              a = 0 | this._e,
              h = 0;
            h < 16;
            ++h
          )
            e[h] = t.readInt32BE(4 * h);
          for (; h < 80; ++h)
            e[h] = e[h - 3] ^ e[h - 8] ^ e[h - 14] ^ e[h - 16];
          for (var f = 0; f < 80; ++f) {
            var d = ~~(f / 20),
              p = (u(n) + l(d, r, i, o) + a + e[f] + s[d]) | 0;
            ((a = o), (o = i), (i = c(r)), (r = n), (n = p));
          }
          ((this._a = (n + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (a + this._e) | 0));
        }),
        (h.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = h));
    },
    1962: function (t, e, n) {
      var r = n(16),
        i = n(123),
        o = n(46).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function h() {
        (this.init(), (this._w = a), i.call(this, 64, 56));
      }
      function u(t) {
        return (t << 1) | (t >>> 31);
      }
      function c(t) {
        return (t << 5) | (t >>> 27);
      }
      function l(t) {
        return (t << 30) | (t >>> 2);
      }
      function f(t, e, n, r) {
        return 0 === t
          ? (e & n) | (~e & r)
          : 2 === t
            ? (e & n) | (e & r) | (n & r)
            : e ^ n ^ r;
      }
      (r(h, i),
        (h.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (h.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              a = 0 | this._e,
              h = 0;
            h < 16;
            ++h
          )
            e[h] = t.readInt32BE(4 * h);
          for (; h < 80; ++h)
            e[h] = u(e[h - 3] ^ e[h - 8] ^ e[h - 14] ^ e[h - 16]);
          for (var d = 0; d < 80; ++d) {
            var p = ~~(d / 20),
              m = (c(n) + f(p, r, i, o) + a + e[d] + s[p]) | 0;
            ((a = o), (o = i), (i = l(r)), (r = n), (n = m));
          }
          ((this._a = (n + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (a + this._e) | 0));
        }),
        (h.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = h));
    },
    1963: function (t, e, n) {
      var r = n(16),
        i = n(669),
        o = n(123),
        s = n(46).Buffer,
        a = new Array(64);
      function h() {
        (this.init(), (this._w = a), o.call(this, 64, 56));
      }
      (r(h, i),
        (h.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (h.prototype._hash = function () {
          var t = s.allocUnsafe(28);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          );
        }),
        (t.exports = h));
    },
    1964: function (t, e, n) {
      var r = n(16),
        i = n(670),
        o = n(123),
        s = n(46).Buffer,
        a = new Array(160);
      function h() {
        (this.init(), (this._w = a), o.call(this, 128, 112));
      }
      (r(h, i),
        (h.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (h.prototype._hash = function () {
          var t = s.allocUnsafe(48);
          function e(e, n, r) {
            (t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4));
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          );
        }),
        (t.exports = h));
    },
    1973: function (t, e, n) {
      (function (e, r, i) {
        var o = n(671),
          s = n(16),
          a = n(672),
          h = n(131),
          u = n(1974),
          c = a.IncomingMessage,
          l = a.readyStates;
        function f(t, e) {
          return o.fetch && e
            ? "fetch"
            : o.mozchunkedarraybuffer
              ? "moz-chunked-arraybuffer"
              : o.msstream
                ? "ms-stream"
                : o.arraybuffer && t
                  ? "arraybuffer"
                  : o.vbArray && t
                    ? "text:vbarray"
                    : "text";
        }
        var d = (t.exports = function (t) {
          var n,
            r = this;
          (h.Writable.call(r),
            (r._opts = t),
            (r._body = []),
            (r._headers = {}),
            t.auth &&
              r.setHeader(
                "Authorization",
                "Basic " + new e(t.auth).toString("base64"),
              ),
            Object.keys(t.headers).forEach(function (e) {
              r.setHeader(e, t.headers[e]);
            }));
          var i = !0;
          if (
            "disable-fetch" === t.mode ||
            ("requestTimeout" in t && !o.abortController)
          )
            ((i = !1), (n = !0));
          else if ("prefer-streaming" === t.mode) n = !1;
          else if ("allow-wrong-content-type" === t.mode)
            n = !o.overrideMimeType;
          else {
            if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode)
              throw new Error("Invalid value for opts.mode");
            n = !0;
          }
          ((r._mode = f(n, i)),
            (r._fetchTimer = null),
            r.on("finish", function () {
              r._onFinish();
            }));
        });
        function p(t) {
          try {
            var e = t.status;
            return null !== e && 0 !== e;
          } catch (n) {
            return !1;
          }
        }
        (s(d, h.Writable),
          (d.prototype.setHeader = function (t, e) {
            var n = this,
              r = t.toLowerCase();
            -1 === m.indexOf(r) && (n._headers[r] = { name: t, value: e });
          }),
          (d.prototype.getHeader = function (t) {
            var e = this._headers[t.toLowerCase()];
            return e ? e.value : null;
          }),
          (d.prototype.removeHeader = function (t) {
            var e = this;
            delete e._headers[t.toLowerCase()];
          }),
          (d.prototype._onFinish = function () {
            var t = this;
            if (!t._destroyed) {
              var n = t._opts,
                s = t._headers,
                a = null;
              "GET" !== n.method &&
                "HEAD" !== n.method &&
                (a = o.arraybuffer
                  ? u(e.concat(t._body))
                  : o.blobConstructor
                    ? new r.Blob(
                        t._body.map(function (t) {
                          return u(t);
                        }),
                        { type: (s["content-type"] || {}).value || "" },
                      )
                    : e.concat(t._body).toString());
              var h = [];
              if (
                (Object.keys(s).forEach(function (t) {
                  var e = s[t].name,
                    n = s[t].value;
                  Array.isArray(n)
                    ? n.forEach(function (t) {
                        h.push([e, t]);
                      })
                    : h.push([e, n]);
                }),
                "fetch" === t._mode)
              ) {
                var c = null;
                if (o.abortController) {
                  var f = new AbortController();
                  ((c = f.signal),
                    (t._fetchAbortController = f),
                    "requestTimeout" in n &&
                      0 !== n.requestTimeout &&
                      (t._fetchTimer = r.setTimeout(function () {
                        (t.emit("requestTimeout"),
                          t._fetchAbortController &&
                            t._fetchAbortController.abort());
                      }, n.requestTimeout)));
                }
                r.fetch(t._opts.url, {
                  method: t._opts.method,
                  headers: h,
                  body: a || void 0,
                  mode: "cors",
                  credentials: n.withCredentials ? "include" : "same-origin",
                  signal: c,
                }).then(
                  function (e) {
                    ((t._fetchResponse = e), t._connect());
                  },
                  function (e) {
                    (r.clearTimeout(t._fetchTimer),
                      t._destroyed || t.emit("error", e));
                  },
                );
              } else {
                var d = (t._xhr = new r.XMLHttpRequest());
                try {
                  d.open(t._opts.method, t._opts.url, !0);
                } catch (p) {
                  return void i.nextTick(function () {
                    t.emit("error", p);
                  });
                }
                ("responseType" in d &&
                  (d.responseType = t._mode.split(":")[0]),
                  "withCredentials" in d &&
                    (d.withCredentials = !!n.withCredentials),
                  "text" === t._mode &&
                    "overrideMimeType" in d &&
                    d.overrideMimeType("text/plain; charset=x-user-defined"),
                  "requestTimeout" in n &&
                    ((d.timeout = n.requestTimeout),
                    (d.ontimeout = function () {
                      t.emit("requestTimeout");
                    })),
                  h.forEach(function (t) {
                    d.setRequestHeader(t[0], t[1]);
                  }),
                  (t._response = null),
                  (d.onreadystatechange = function () {
                    switch (d.readyState) {
                      case l.LOADING:
                      case l.DONE:
                        t._onXHRProgress();
                        break;
                    }
                  }),
                  "moz-chunked-arraybuffer" === t._mode &&
                    (d.onprogress = function () {
                      t._onXHRProgress();
                    }),
                  (d.onerror = function () {
                    t._destroyed || t.emit("error", new Error("XHR error"));
                  }));
                try {
                  d.send(a);
                } catch (p) {
                  return void i.nextTick(function () {
                    t.emit("error", p);
                  });
                }
              }
            }
          }),
          (d.prototype._onXHRProgress = function () {
            var t = this;
            p(t._xhr) &&
              !t._destroyed &&
              (t._response || t._connect(), t._response._onXHRProgress());
          }),
          (d.prototype._connect = function () {
            var t = this;
            t._destroyed ||
              ((t._response = new c(
                t._xhr,
                t._fetchResponse,
                t._mode,
                t._fetchTimer,
              )),
              t._response.on("error", function (e) {
                t.emit("error", e);
              }),
              t.emit("response", t._response));
          }),
          (d.prototype._write = function (t, e, n) {
            var r = this;
            (r._body.push(t), n());
          }),
          (d.prototype.abort = d.prototype.destroy =
            function () {
              var t = this;
              ((t._destroyed = !0),
                r.clearTimeout(t._fetchTimer),
                t._response && (t._response._destroyed = !0),
                t._xhr
                  ? t._xhr.abort()
                  : t._fetchAbortController && t._fetchAbortController.abort());
            }),
          (d.prototype.end = function (t, e, n) {
            var r = this;
            ("function" === typeof t && ((n = t), (t = void 0)),
              h.Writable.prototype.end.call(r, t, e, n));
          }),
          (d.prototype.flushHeaders = function () {}),
          (d.prototype.setTimeout = function () {}),
          (d.prototype.setNoDelay = function () {}),
          (d.prototype.setSocketKeepAlive = function () {}));
        var m = [
          "accept-charset",
          "accept-encoding",
          "access-control-request-headers",
          "access-control-request-method",
          "connection",
          "content-length",
          "cookie",
          "cookie2",
          "date",
          "dnt",
          "expect",
          "host",
          "keep-alive",
          "origin",
          "referer",
          "te",
          "trailer",
          "transfer-encoding",
          "upgrade",
          "via",
        ];
      }).call(this, n(2).Buffer, n(13), n(18));
    },
    1974: function (t, e, n) {
      var r = n(2).Buffer;
      t.exports = function (t) {
        if (t instanceof Uint8Array) {
          if (0 === t.byteOffset && t.byteLength === t.buffer.byteLength)
            return t.buffer;
          if ("function" === typeof t.buffer.slice)
            return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
        }
        if (r.isBuffer(t)) {
          for (
            var e = new Uint8Array(t.length), n = t.length, i = 0;
            i < n;
            i++
          )
            e[i] = t[i];
          return e.buffer;
        }
        throw new Error("Argument must be a Buffer");
      };
    },
    1978: function (t, e, n) {
      "use strict";
      var r = n(104),
        i = n(191),
        o = n(1980),
        s = n(673),
        a = n(1981),
        h = a || s || o;
      t.exports = function () {
        var t,
          e = {
            assert: function (t) {
              if (!e.has(t))
                throw new r("Side channel does not contain " + i(t));
            },
            delete: function (e) {
              return !!t && t["delete"](e);
            },
            get: function (e) {
              return t && t.get(e);
            },
            has: function (e) {
              return !!t && t.has(e);
            },
            set: function (e, n) {
              (t || (t = h()), t.set(e, n));
            },
          };
        return e;
      };
    },
    1980: function (t, e, n) {
      "use strict";
      var r = n(191),
        i = n(104),
        o = function (t, e, n) {
          for (var r, i = t; null != (r = i.next); i = r)
            if (r.key === e)
              return (
                (i.next = r.next),
                n || ((r.next = t.next), (t.next = r)),
                r
              );
        },
        s = function (t, e) {
          if (t) {
            var n = o(t, e);
            return n && n.value;
          }
        },
        a = function (t, e, n) {
          var r = o(t, e);
          r ? (r.value = n) : (t.next = { key: e, next: t.next, value: n });
        },
        h = function (t, e) {
          return !!t && !!o(t, e);
        },
        u = function (t, e) {
          if (t) return o(t, e, !0);
        };
      t.exports = function () {
        var t,
          e = {
            assert: function (t) {
              if (!e.has(t))
                throw new i("Side channel does not contain " + r(t));
            },
            delete: function (e) {
              var n = t && t.next,
                r = u(t, e);
              return (r && n && n === r && (t = void 0), !!r);
            },
            get: function (e) {
              return s(t, e);
            },
            has: function (e) {
              return h(t, e);
            },
            set: function (e, n) {
              (t || (t = { next: void 0 }), a(t, e, n));
            },
          };
        return e;
      };
    },
    1981: function (t, e, n) {
      "use strict";
      var r = n(243),
        i = n(242),
        o = n(191),
        s = n(673),
        a = n(104),
        h = r("%WeakMap%", !0),
        u = i("WeakMap.prototype.get", !0),
        c = i("WeakMap.prototype.set", !0),
        l = i("WeakMap.prototype.has", !0),
        f = i("WeakMap.prototype.delete", !0);
      t.exports = h
        ? function () {
            var t,
              e,
              n = {
                assert: function (t) {
                  if (!n.has(t))
                    throw new a("Side channel does not contain " + o(t));
                },
                delete: function (n) {
                  if (
                    h &&
                    n &&
                    ("object" === typeof n || "function" === typeof n)
                  ) {
                    if (t) return f(t, n);
                  } else if (s && e) return e["delete"](n);
                  return !1;
                },
                get: function (n) {
                  return h &&
                    n &&
                    ("object" === typeof n || "function" === typeof n) &&
                    t
                    ? u(t, n)
                    : e && e.get(n);
                },
                has: function (n) {
                  return h &&
                    n &&
                    ("object" === typeof n || "function" === typeof n) &&
                    t
                    ? l(t, n)
                    : !!e && e.has(n);
                },
                set: function (n, r) {
                  h && n && ("object" === typeof n || "function" === typeof n)
                    ? (t || (t = new h()), c(t, n, r))
                    : s && (e || (e = s()), e.set(n, r));
                },
              };
            return n;
          }
        : s;
    },
    231: function (t, e, n) {
      "use strict";
      var r = n(828);
      function i() {
        ((this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.host = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.query = null),
          (this.pathname = null),
          (this.path = null),
          (this.href = null));
      }
      var o = /^([a-z0-9.+-]+:)/i,
        s = /:[0-9]*$/,
        a = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
        h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        u = ["{", "}", "|", "\\", "^", "`"].concat(h),
        c = ["'"].concat(u),
        l = ["%", "/", "?", ";", "#"].concat(c),
        f = ["/", "?", "#"],
        d = 255,
        p = /^[+a-z0-9A-Z_-]{0,63}$/,
        m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        y = { javascript: !0, "javascript:": !0 },
        v = { javascript: !0, "javascript:": !0 },
        g = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0,
        },
        b = n(1976);
      function w(t, e, n) {
        if (t && "object" === typeof t && t instanceof i) return t;
        var r = new i();
        return (r.parse(t, e, n), r);
      }
      function _(t) {
        return (
          "string" === typeof t && (t = w(t)),
          t instanceof i ? t.format() : i.prototype.format.call(t)
        );
      }
      function M(t, e) {
        return w(t, !1, !0).resolve(e);
      }
      function k(t, e) {
        return t ? w(t, !1, !0).resolveObject(e) : e;
      }
      ((i.prototype.parse = function (t, e, n) {
        if ("string" !== typeof t)
          throw new TypeError(
            "Parameter 'url' must be a string, not " + typeof t,
          );
        var i = t.indexOf("?"),
          s = -1 !== i && i < t.indexOf("#") ? "?" : "#",
          h = t.split(s),
          u = /\\/g;
        ((h[0] = h[0].replace(u, "/")), (t = h.join(s)));
        var w = t;
        if (((w = w.trim()), !n && 1 === t.split("#").length)) {
          var _ = a.exec(w);
          if (_)
            return (
              (this.path = w),
              (this.href = w),
              (this.pathname = _[1]),
              _[2]
                ? ((this.search = _[2]),
                  (this.query = e
                    ? b.parse(this.search.substr(1))
                    : this.search.substr(1)))
                : e && ((this.search = ""), (this.query = {})),
              this
            );
        }
        var M = o.exec(w);
        if (M) {
          M = M[0];
          var k = M.toLowerCase();
          ((this.protocol = k), (w = w.substr(M.length)));
        }
        if (n || M || w.match(/^\/\/[^@/]+@[^@/]+/)) {
          var C = "//" === w.substr(0, 2);
          !C || (M && v[M]) || ((w = w.substr(2)), (this.slashes = !0));
        }
        if (!v[M] && (C || (M && !g[M]))) {
          for (var E, S, A = -1, x = 0; x < f.length; x++) {
            var R = w.indexOf(f[x]);
            -1 !== R && (-1 === A || R < A) && (A = R);
          }
          ((S = -1 === A ? w.lastIndexOf("@") : w.lastIndexOf("@", A)),
            -1 !== S &&
              ((E = w.slice(0, S)),
              (w = w.slice(S + 1)),
              (this.auth = decodeURIComponent(E))),
            (A = -1));
          for (x = 0; x < l.length; x++) {
            R = w.indexOf(l[x]);
            -1 !== R && (-1 === A || R < A) && (A = R);
          }
          (-1 === A && (A = w.length),
            (this.host = w.slice(0, A)),
            (w = w.slice(A)),
            this.parseHost(),
            (this.hostname = this.hostname || ""));
          var O =
            "[" === this.hostname[0] &&
            "]" === this.hostname[this.hostname.length - 1];
          if (!O)
            for (
              var T = this.hostname.split(/\./), B = ((x = 0), T.length);
              x < B;
              x++
            ) {
              var F = T[x];
              if (F && !F.match(p)) {
                for (var N = "", L = 0, j = F.length; L < j; L++)
                  F.charCodeAt(L) > 127 ? (N += "x") : (N += F[L]);
                if (!N.match(p)) {
                  var I = T.slice(0, x),
                    P = T.slice(x + 1),
                    D = F.match(m);
                  (D && (I.push(D[1]), P.unshift(D[2])),
                    P.length && (w = "/" + P.join(".") + w),
                    (this.hostname = I.join(".")));
                  break;
                }
              }
            }
          (this.hostname.length > d
            ? (this.hostname = "")
            : (this.hostname = this.hostname.toLowerCase()),
            O || (this.hostname = r.toASCII(this.hostname)));
          var q = this.port ? ":" + this.port : "",
            U = this.hostname || "";
          ((this.host = U + q),
            (this.href += this.host),
            O &&
              ((this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2,
              )),
              "/" !== w[0] && (w = "/" + w)));
        }
        if (!y[k])
          for (x = 0, B = c.length; x < B; x++) {
            var z = c[x];
            if (-1 !== w.indexOf(z)) {
              var H = encodeURIComponent(z);
              (H === z && (H = escape(z)), (w = w.split(z).join(H)));
            }
          }
        var W = w.indexOf("#");
        -1 !== W && ((this.hash = w.substr(W)), (w = w.slice(0, W)));
        var V = w.indexOf("?");
        if (
          (-1 !== V
            ? ((this.search = w.substr(V)),
              (this.query = w.substr(V + 1)),
              e && (this.query = b.parse(this.query)),
              (w = w.slice(0, V)))
            : e && ((this.search = ""), (this.query = {})),
          w && (this.pathname = w),
          g[k] && this.hostname && !this.pathname && (this.pathname = "/"),
          this.pathname || this.search)
        ) {
          q = this.pathname || "";
          var Z = this.search || "";
          this.path = q + Z;
        }
        return ((this.href = this.format()), this);
      }),
        (i.prototype.format = function () {
          var t = this.auth || "";
          t &&
            ((t = encodeURIComponent(t)),
            (t = t.replace(/%3A/i, ":")),
            (t += "@"));
          var e = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            i = !1,
            o = "";
          (this.host
            ? (i = t + this.host)
            : this.hostname &&
              ((i =
                t +
                (-1 === this.hostname.indexOf(":")
                  ? this.hostname
                  : "[" + this.hostname + "]")),
              this.port && (i += ":" + this.port)),
            this.query &&
              "object" === typeof this.query &&
              Object.keys(this.query).length &&
              (o = b.stringify(this.query, {
                arrayFormat: "repeat",
                addQueryPrefix: !1,
              })));
          var s = this.search || (o && "?" + o) || "";
          return (
            e && ":" !== e.substr(-1) && (e += ":"),
            this.slashes || ((!e || g[e]) && !1 !== i)
              ? ((i = "//" + (i || "")),
                n && "/" !== n.charAt(0) && (n = "/" + n))
              : i || (i = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            s && "?" !== s.charAt(0) && (s = "?" + s),
            (n = n.replace(/[?#]/g, function (t) {
              return encodeURIComponent(t);
            })),
            (s = s.replace("#", "%23")),
            e + i + n + s + r
          );
        }),
        (i.prototype.resolve = function (t) {
          return this.resolveObject(w(t, !1, !0)).format();
        }),
        (i.prototype.resolveObject = function (t) {
          if ("string" === typeof t) {
            var e = new i();
            (e.parse(t, !1, !0), (t = e));
          }
          for (
            var n = new i(), r = Object.keys(this), o = 0;
            o < r.length;
            o++
          ) {
            var s = r[o];
            n[s] = this[s];
          }
          if (((n.hash = t.hash), "" === t.href))
            return ((n.href = n.format()), n);
          if (t.slashes && !t.protocol) {
            for (var a = Object.keys(t), h = 0; h < a.length; h++) {
              var u = a[h];
              "protocol" !== u && (n[u] = t[u]);
            }
            return (
              g[n.protocol] &&
                n.hostname &&
                !n.pathname &&
                ((n.pathname = "/"), (n.path = n.pathname)),
              (n.href = n.format()),
              n
            );
          }
          if (t.protocol && t.protocol !== n.protocol) {
            if (!g[t.protocol]) {
              for (var c = Object.keys(t), l = 0; l < c.length; l++) {
                var f = c[l];
                n[f] = t[f];
              }
              return ((n.href = n.format()), n);
            }
            if (((n.protocol = t.protocol), t.host || v[t.protocol]))
              n.pathname = t.pathname;
            else {
              var d = (t.pathname || "").split("/");
              while (d.length && !(t.host = d.shift()));
              (t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== d[0] && d.unshift(""),
                d.length < 2 && d.unshift(""),
                (n.pathname = d.join("/")));
            }
            if (
              ((n.search = t.search),
              (n.query = t.query),
              (n.host = t.host || ""),
              (n.auth = t.auth),
              (n.hostname = t.hostname || t.host),
              (n.port = t.port),
              n.pathname || n.search)
            ) {
              var p = n.pathname || "",
                m = n.search || "";
              n.path = p + m;
            }
            return (
              (n.slashes = n.slashes || t.slashes),
              (n.href = n.format()),
              n
            );
          }
          var y = n.pathname && "/" === n.pathname.charAt(0),
            b = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
            w = b || y || (n.host && t.pathname),
            _ = w,
            M = (n.pathname && n.pathname.split("/")) || [],
            k =
              ((d = (t.pathname && t.pathname.split("/")) || []),
              n.protocol && !g[n.protocol]);
          if (
            (k &&
              ((n.hostname = ""),
              (n.port = null),
              n.host && ("" === M[0] ? (M[0] = n.host) : M.unshift(n.host)),
              (n.host = ""),
              t.protocol &&
                ((t.hostname = null),
                (t.port = null),
                t.host && ("" === d[0] ? (d[0] = t.host) : d.unshift(t.host)),
                (t.host = null)),
              (w = w && ("" === d[0] || "" === M[0]))),
            b)
          )
            ((n.host = t.host || "" === t.host ? t.host : n.host),
              (n.hostname =
                t.hostname || "" === t.hostname ? t.hostname : n.hostname),
              (n.search = t.search),
              (n.query = t.query),
              (M = d));
          else if (d.length)
            (M || (M = []),
              M.pop(),
              (M = M.concat(d)),
              (n.search = t.search),
              (n.query = t.query));
          else if (null != t.search) {
            if (k) {
              ((n.host = M.shift()), (n.hostname = n.host));
              var C =
                !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
              C &&
                ((n.auth = C.shift()),
                (n.hostname = C.shift()),
                (n.host = n.hostname));
            }
            return (
              (n.search = t.search),
              (n.query = t.query),
              (null === n.pathname && null === n.search) ||
                (n.path =
                  (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
              (n.href = n.format()),
              n
            );
          }
          if (!M.length)
            return (
              (n.pathname = null),
              n.search ? (n.path = "/" + n.search) : (n.path = null),
              (n.href = n.format()),
              n
            );
          for (
            var E = M.slice(-1)[0],
              S =
                ((n.host || t.host || M.length > 1) &&
                  ("." === E || ".." === E)) ||
                "" === E,
              A = 0,
              x = M.length;
            x >= 0;
            x--
          )
            ((E = M[x]),
              "." === E
                ? M.splice(x, 1)
                : ".." === E
                  ? (M.splice(x, 1), A++)
                  : A && (M.splice(x, 1), A--));
          if (!w && !_) for (; A--; A) M.unshift("..");
          (!w ||
            "" === M[0] ||
            (M[0] && "/" === M[0].charAt(0)) ||
            M.unshift(""),
            S && "/" !== M.join("/").substr(-1) && M.push(""));
          var R = "" === M[0] || (M[0] && "/" === M[0].charAt(0));
          if (k) {
            ((n.hostname = R ? "" : M.length ? M.shift() : ""),
              (n.host = n.hostname));
            C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            C &&
              ((n.auth = C.shift()),
              (n.hostname = C.shift()),
              (n.host = n.hostname));
          }
          return (
            (w = w || (n.host && M.length)),
            w && !R && M.unshift(""),
            M.length > 0
              ? (n.pathname = M.join("/"))
              : ((n.pathname = null), (n.path = null)),
            (null === n.pathname && null === n.search) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.auth = t.auth || n.auth),
            (n.slashes = n.slashes || t.slashes),
            (n.href = n.format()),
            n
          );
        }),
        (i.prototype.parseHost = function () {
          var t = this.host,
            e = s.exec(t);
          (e &&
            ((e = e[0]),
            ":" !== e && (this.port = e.substr(1)),
            (t = t.substr(0, t.length - e.length))),
            t && (this.hostname = t));
        }),
        (e.parse = w),
        (e.resolve = M),
        (e.resolveObject = k),
        (e.format = _),
        (e.Url = i));
    },
    235: function (t, e, n) {
      t.exports = o;
      var r = n(52).EventEmitter,
        i = n(16);
      function o() {
        r.call(this);
      }
      (i(o, r),
        (o.Readable = n(131)),
        (o.Writable = n(1936)),
        (o.Duplex = n(1937)),
        (o.Transform = n(1938)),
        (o.PassThrough = n(1939)),
        (o.Stream = o),
        (o.prototype.pipe = function (t, e) {
          var n = this;
          function i(e) {
            t.writable && !1 === t.write(e) && n.pause && n.pause();
          }
          function o() {
            n.readable && n.resume && n.resume();
          }
          (n.on("data", i),
            t.on("drain", o),
            t._isStdio ||
              (e && !1 === e.end) ||
              (n.on("end", a), n.on("close", h)));
          var s = !1;
          function a() {
            s || ((s = !0), t.end());
          }
          function h() {
            s || ((s = !0), "function" === typeof t.destroy && t.destroy());
          }
          function u(t) {
            if ((c(), 0 === r.listenerCount(this, "error"))) throw t;
          }
          function c() {
            (n.removeListener("data", i),
              t.removeListener("drain", o),
              n.removeListener("end", a),
              n.removeListener("close", h),
              n.removeListener("error", u),
              t.removeListener("error", u),
              n.removeListener("end", c),
              n.removeListener("close", c),
              t.removeListener("close", c));
          }
          return (
            n.on("error", u),
            t.on("error", u),
            n.on("end", c),
            n.on("close", c),
            t.on("close", c),
            t.emit("pipe", n),
            t
          );
        }));
    },
    236: function (t, e, n) {
      (function (t) {
        var r = n(1973),
          i = n(672),
          o = n(839),
          s = n(1975),
          a = n(231),
          h = e;
        ((h.request = function (e, n) {
          e = "string" === typeof e ? a.parse(e) : o(e);
          var i = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
            s = e.protocol || i,
            h = e.hostname || e.host,
            u = e.port,
            c = e.path || "/";
          (h && -1 !== h.indexOf(":") && (h = "[" + h + "]"),
            (e.url = (h ? s + "//" + h : "") + (u ? ":" + u : "") + c),
            (e.method = (e.method || "GET").toUpperCase()),
            (e.headers = e.headers || {}));
          var l = new r(e);
          return (n && l.on("response", n), l);
        }),
          (h.get = function (t, e) {
            var n = h.request(t, e);
            return (n.end(), n);
          }),
          (h.ClientRequest = r),
          (h.IncomingMessage = i.IncomingMessage),
          (h.Agent = function () {}),
          (h.Agent.defaultMaxSockets = 4),
          (h.globalAgent = new h.Agent()),
          (h.STATUS_CODES = s),
          (h.METHODS = [
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "REPORT",
            "SEARCH",
            "SUBSCRIBE",
            "TRACE",
            "UNLOCK",
            "UNSUBSCRIBE",
          ]));
      }).call(this, n(13));
    },
    259: function (t, e, n) {
      var r = n(1247)("socket.io-parser"),
        i = n(1250),
        o = n(1251),
        s = n(464),
        a = n(465);
      function h() {}
      ((e.protocol = 4),
        (e.types = [
          "CONNECT",
          "DISCONNECT",
          "EVENT",
          "ACK",
          "ERROR",
          "BINARY_EVENT",
          "BINARY_ACK",
        ]),
        (e.CONNECT = 0),
        (e.DISCONNECT = 1),
        (e.EVENT = 2),
        (e.ACK = 3),
        (e.ERROR = 4),
        (e.BINARY_EVENT = 5),
        (e.BINARY_ACK = 6),
        (e.Encoder = h),
        (e.Decoder = d));
      var u = e.ERROR + '"encode error"';
      function c(t) {
        var n = "" + t.type;
        if (
          ((e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type) ||
            (n += t.attachments + "-"),
          t.nsp && "/" !== t.nsp && (n += t.nsp + ","),
          null != t.id && (n += t.id),
          null != t.data)
        ) {
          var i = l(t.data);
          if (!1 === i) return u;
          n += i;
        }
        return (r("encoded %j as %s", t, n), n);
      }
      function l(t) {
        try {
          return JSON.stringify(t);
        } catch (e) {
          return !1;
        }
      }
      function f(t, e) {
        function n(t) {
          var n = o.deconstructPacket(t),
            r = c(n.packet),
            i = n.buffers;
          (i.unshift(r), e(i));
        }
        o.removeBlobs(t, n);
      }
      function d() {
        this.reconstructor = null;
      }
      function p(t, e) {
        switch (t) {
          case 0:
            return "object" === typeof e;
          case 1:
            return void 0 === e;
          case 4:
            return "string" === typeof e || "object" === typeof e;
          case 2:
          case 5:
            return (
              s(e) && ("string" === typeof e[0] || "number" === typeof e[0])
            );
          case 3:
          case 6:
            return s(e);
        }
      }
      function m(t) {
        var n = 0,
          i = { type: Number(t.charAt(0)) };
        if (null == e.types[i.type]) return g("unknown packet type " + i.type);
        if (e.BINARY_EVENT === i.type || e.BINARY_ACK === i.type) {
          var o = n + 1;
          while ("-" !== t.charAt(++n) && n != t.length);
          var s = t.substring(o, n);
          if (s != Number(s) || "-" !== t.charAt(n))
            throw new Error("Illegal attachments");
          i.attachments = Number(s);
        }
        if ("/" === t.charAt(n + 1)) {
          o = n + 1;
          while (++n) {
            var a = t.charAt(n);
            if ("," === a) break;
            if (n === t.length) break;
          }
          i.nsp = t.substring(o, n);
        } else i.nsp = "/";
        var h = t.charAt(n + 1);
        if ("" !== h && Number(h) == h) {
          o = n + 1;
          while (++n) {
            a = t.charAt(n);
            if (null == a || Number(a) != a) {
              --n;
              break;
            }
            if (n === t.length) break;
          }
          i.id = Number(t.substring(o, n + 1));
        }
        if (t.charAt(++n)) {
          var u = y(t.substr(n));
          if (!p(i.type, u)) throw new Error("invalid payload");
          i.data = u;
        }
        return (r("decoded %s as %j", t, i), i);
      }
      function y(t) {
        try {
          return JSON.parse(t);
        } catch (e) {
          return !1;
        }
      }
      function v(t) {
        ((this.reconPack = t), (this.buffers = []));
      }
      function g(t) {
        return { type: e.ERROR, data: "parser error: " + t };
      }
      ((h.prototype.encode = function (t, n) {
        if (
          (r("encoding packet %j", t),
          e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type)
        )
          f(t, n);
        else {
          var i = c(t);
          n([i]);
        }
      }),
        i(d.prototype),
        (d.prototype.add = function (t) {
          var n;
          if ("string" === typeof t) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet",
              );
            ((n = m(t)),
              e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type
                ? ((this.reconstructor = new v(n)),
                  0 === this.reconstructor.reconPack.attachments &&
                    this.emit("decoded", n))
                : this.emit("decoded", n));
          } else {
            if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet",
              );
            ((n = this.reconstructor.takeBinaryData(t)),
              n && ((this.reconstructor = null), this.emit("decoded", n)));
          }
        }),
        (d.prototype.destroy = function () {
          this.reconstructor && this.reconstructor.finishedReconstruction();
        }),
        (v.prototype.takeBinaryData = function (t) {
          if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
          ) {
            var e = o.reconstructPacket(this.reconPack, this.buffers);
            return (this.finishedReconstruction(), e);
          }
          return null;
        }),
        (v.prototype.finishedReconstruction = function () {
          ((this.reconPack = null), (this.buffers = []));
        }));
    },
    326: function (t, e, n) {
      "use strict";
      var r = n(121).codes.ERR_STREAM_PREMATURE_CLOSE;
      function i(t) {
        var e = !1;
        return function () {
          if (!e) {
            e = !0;
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            t.apply(this, r);
          }
        };
      }
      function o() {}
      function s(t) {
        return t.setHeader && "function" === typeof t.abort;
      }
      function a(t, e, n) {
        if ("function" === typeof e) return a(t, null, e);
        (e || (e = {}), (n = i(n || o)));
        var h = e.readable || (!1 !== e.readable && t.readable),
          u = e.writable || (!1 !== e.writable && t.writable),
          c = function () {
            t.writable || f();
          },
          l = t._writableState && t._writableState.finished,
          f = function () {
            ((u = !1), (l = !0), h || n.call(t));
          },
          d = t._readableState && t._readableState.endEmitted,
          p = function () {
            ((h = !1), (d = !0), u || n.call(t));
          },
          m = function (e) {
            n.call(t, e);
          },
          y = function () {
            var e;
            return h && !d
              ? ((t._readableState && t._readableState.ended) || (e = new r()),
                n.call(t, e))
              : u && !l
                ? ((t._writableState && t._writableState.ended) ||
                    (e = new r()),
                  n.call(t, e))
                : void 0;
          },
          v = function () {
            t.req.on("finish", f);
          };
        return (
          s(t)
            ? (t.on("complete", f),
              t.on("abort", y),
              t.req ? v() : t.on("request", v))
            : u && !t._writableState && (t.on("end", c), t.on("close", c)),
          t.on("end", p),
          t.on("finish", f),
          !1 !== e.error && t.on("error", m),
          t.on("close", y),
          function () {
            (t.removeListener("complete", f),
              t.removeListener("abort", y),
              t.removeListener("request", v),
              t.req && t.req.removeListener("finish", f),
              t.removeListener("end", c),
              t.removeListener("close", c),
              t.removeListener("finish", f),
              t.removeListener("end", p),
              t.removeListener("error", m),
              t.removeListener("close", y));
          }
        );
      }
      t.exports = a;
    },
    336: function (t, e, n) {
      (function (e) {
        t.exports = e();
      })(function (t) {
        "use strict";
        var e = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        function n(t, e) {
          var n = t[0],
            r = t[1],
            i = t[2],
            o = t[3];
          ((n += (((r & i) | (~r & o)) + e[0] - 680876936) | 0),
            (n = (((n << 7) | (n >>> 25)) + r) | 0),
            (o += (((n & r) | (~n & i)) + e[1] - 389564586) | 0),
            (o = (((o << 12) | (o >>> 20)) + n) | 0),
            (i += (((o & n) | (~o & r)) + e[2] + 606105819) | 0),
            (i = (((i << 17) | (i >>> 15)) + o) | 0),
            (r += (((i & o) | (~i & n)) + e[3] - 1044525330) | 0),
            (r = (((r << 22) | (r >>> 10)) + i) | 0),
            (n += (((r & i) | (~r & o)) + e[4] - 176418897) | 0),
            (n = (((n << 7) | (n >>> 25)) + r) | 0),
            (o += (((n & r) | (~n & i)) + e[5] + 1200080426) | 0),
            (o = (((o << 12) | (o >>> 20)) + n) | 0),
            (i += (((o & n) | (~o & r)) + e[6] - 1473231341) | 0),
            (i = (((i << 17) | (i >>> 15)) + o) | 0),
            (r += (((i & o) | (~i & n)) + e[7] - 45705983) | 0),
            (r = (((r << 22) | (r >>> 10)) + i) | 0),
            (n += (((r & i) | (~r & o)) + e[8] + 1770035416) | 0),
            (n = (((n << 7) | (n >>> 25)) + r) | 0),
            (o += (((n & r) | (~n & i)) + e[9] - 1958414417) | 0),
            (o = (((o << 12) | (o >>> 20)) + n) | 0),
            (i += (((o & n) | (~o & r)) + e[10] - 42063) | 0),
            (i = (((i << 17) | (i >>> 15)) + o) | 0),
            (r += (((i & o) | (~i & n)) + e[11] - 1990404162) | 0),
            (r = (((r << 22) | (r >>> 10)) + i) | 0),
            (n += (((r & i) | (~r & o)) + e[12] + 1804603682) | 0),
            (n = (((n << 7) | (n >>> 25)) + r) | 0),
            (o += (((n & r) | (~n & i)) + e[13] - 40341101) | 0),
            (o = (((o << 12) | (o >>> 20)) + n) | 0),
            (i += (((o & n) | (~o & r)) + e[14] - 1502002290) | 0),
            (i = (((i << 17) | (i >>> 15)) + o) | 0),
            (r += (((i & o) | (~i & n)) + e[15] + 1236535329) | 0),
            (r = (((r << 22) | (r >>> 10)) + i) | 0),
            (n += (((r & o) | (i & ~o)) + e[1] - 165796510) | 0),
            (n = (((n << 5) | (n >>> 27)) + r) | 0),
            (o += (((n & i) | (r & ~i)) + e[6] - 1069501632) | 0),
            (o = (((o << 9) | (o >>> 23)) + n) | 0),
            (i += (((o & r) | (n & ~r)) + e[11] + 643717713) | 0),
            (i = (((i << 14) | (i >>> 18)) + o) | 0),
            (r += (((i & n) | (o & ~n)) + e[0] - 373897302) | 0),
            (r = (((r << 20) | (r >>> 12)) + i) | 0),
            (n += (((r & o) | (i & ~o)) + e[5] - 701558691) | 0),
            (n = (((n << 5) | (n >>> 27)) + r) | 0),
            (o += (((n & i) | (r & ~i)) + e[10] + 38016083) | 0),
            (o = (((o << 9) | (o >>> 23)) + n) | 0),
            (i += (((o & r) | (n & ~r)) + e[15] - 660478335) | 0),
            (i = (((i << 14) | (i >>> 18)) + o) | 0),
            (r += (((i & n) | (o & ~n)) + e[4] - 405537848) | 0),
            (r = (((r << 20) | (r >>> 12)) + i) | 0),
            (n += (((r & o) | (i & ~o)) + e[9] + 568446438) | 0),
            (n = (((n << 5) | (n >>> 27)) + r) | 0),
            (o += (((n & i) | (r & ~i)) + e[14] - 1019803690) | 0),
            (o = (((o << 9) | (o >>> 23)) + n) | 0),
            (i += (((o & r) | (n & ~r)) + e[3] - 187363961) | 0),
            (i = (((i << 14) | (i >>> 18)) + o) | 0),
            (r += (((i & n) | (o & ~n)) + e[8] + 1163531501) | 0),
            (r = (((r << 20) | (r >>> 12)) + i) | 0),
            (n += (((r & o) | (i & ~o)) + e[13] - 1444681467) | 0),
            (n = (((n << 5) | (n >>> 27)) + r) | 0),
            (o += (((n & i) | (r & ~i)) + e[2] - 51403784) | 0),
            (o = (((o << 9) | (o >>> 23)) + n) | 0),
            (i += (((o & r) | (n & ~r)) + e[7] + 1735328473) | 0),
            (i = (((i << 14) | (i >>> 18)) + o) | 0),
            (r += (((i & n) | (o & ~n)) + e[12] - 1926607734) | 0),
            (r = (((r << 20) | (r >>> 12)) + i) | 0),
            (n += ((r ^ i ^ o) + e[5] - 378558) | 0),
            (n = (((n << 4) | (n >>> 28)) + r) | 0),
            (o += ((n ^ r ^ i) + e[8] - 2022574463) | 0),
            (o = (((o << 11) | (o >>> 21)) + n) | 0),
            (i += ((o ^ n ^ r) + e[11] + 1839030562) | 0),
            (i = (((i << 16) | (i >>> 16)) + o) | 0),
            (r += ((i ^ o ^ n) + e[14] - 35309556) | 0),
            (r = (((r << 23) | (r >>> 9)) + i) | 0),
            (n += ((r ^ i ^ o) + e[1] - 1530992060) | 0),
            (n = (((n << 4) | (n >>> 28)) + r) | 0),
            (o += ((n ^ r ^ i) + e[4] + 1272893353) | 0),
            (o = (((o << 11) | (o >>> 21)) + n) | 0),
            (i += ((o ^ n ^ r) + e[7] - 155497632) | 0),
            (i = (((i << 16) | (i >>> 16)) + o) | 0),
            (r += ((i ^ o ^ n) + e[10] - 1094730640) | 0),
            (r = (((r << 23) | (r >>> 9)) + i) | 0),
            (n += ((r ^ i ^ o) + e[13] + 681279174) | 0),
            (n = (((n << 4) | (n >>> 28)) + r) | 0),
            (o += ((n ^ r ^ i) + e[0] - 358537222) | 0),
            (o = (((o << 11) | (o >>> 21)) + n) | 0),
            (i += ((o ^ n ^ r) + e[3] - 722521979) | 0),
            (i = (((i << 16) | (i >>> 16)) + o) | 0),
            (r += ((i ^ o ^ n) + e[6] + 76029189) | 0),
            (r = (((r << 23) | (r >>> 9)) + i) | 0),
            (n += ((r ^ i ^ o) + e[9] - 640364487) | 0),
            (n = (((n << 4) | (n >>> 28)) + r) | 0),
            (o += ((n ^ r ^ i) + e[12] - 421815835) | 0),
            (o = (((o << 11) | (o >>> 21)) + n) | 0),
            (i += ((o ^ n ^ r) + e[15] + 530742520) | 0),
            (i = (((i << 16) | (i >>> 16)) + o) | 0),
            (r += ((i ^ o ^ n) + e[2] - 995338651) | 0),
            (r = (((r << 23) | (r >>> 9)) + i) | 0),
            (n += ((i ^ (r | ~o)) + e[0] - 198630844) | 0),
            (n = (((n << 6) | (n >>> 26)) + r) | 0),
            (o += ((r ^ (n | ~i)) + e[7] + 1126891415) | 0),
            (o = (((o << 10) | (o >>> 22)) + n) | 0),
            (i += ((n ^ (o | ~r)) + e[14] - 1416354905) | 0),
            (i = (((i << 15) | (i >>> 17)) + o) | 0),
            (r += ((o ^ (i | ~n)) + e[5] - 57434055) | 0),
            (r = (((r << 21) | (r >>> 11)) + i) | 0),
            (n += ((i ^ (r | ~o)) + e[12] + 1700485571) | 0),
            (n = (((n << 6) | (n >>> 26)) + r) | 0),
            (o += ((r ^ (n | ~i)) + e[3] - 1894986606) | 0),
            (o = (((o << 10) | (o >>> 22)) + n) | 0),
            (i += ((n ^ (o | ~r)) + e[10] - 1051523) | 0),
            (i = (((i << 15) | (i >>> 17)) + o) | 0),
            (r += ((o ^ (i | ~n)) + e[1] - 2054922799) | 0),
            (r = (((r << 21) | (r >>> 11)) + i) | 0),
            (n += ((i ^ (r | ~o)) + e[8] + 1873313359) | 0),
            (n = (((n << 6) | (n >>> 26)) + r) | 0),
            (o += ((r ^ (n | ~i)) + e[15] - 30611744) | 0),
            (o = (((o << 10) | (o >>> 22)) + n) | 0),
            (i += ((n ^ (o | ~r)) + e[6] - 1560198380) | 0),
            (i = (((i << 15) | (i >>> 17)) + o) | 0),
            (r += ((o ^ (i | ~n)) + e[13] + 1309151649) | 0),
            (r = (((r << 21) | (r >>> 11)) + i) | 0),
            (n += ((i ^ (r | ~o)) + e[4] - 145523070) | 0),
            (n = (((n << 6) | (n >>> 26)) + r) | 0),
            (o += ((r ^ (n | ~i)) + e[11] - 1120210379) | 0),
            (o = (((o << 10) | (o >>> 22)) + n) | 0),
            (i += ((n ^ (o | ~r)) + e[2] + 718787259) | 0),
            (i = (((i << 15) | (i >>> 17)) + o) | 0),
            (r += ((o ^ (i | ~n)) + e[9] - 343485551) | 0),
            (r = (((r << 21) | (r >>> 11)) + i) | 0),
            (t[0] = (n + t[0]) | 0),
            (t[1] = (r + t[1]) | 0),
            (t[2] = (i + t[2]) | 0),
            (t[3] = (o + t[3]) | 0));
        }
        function r(t) {
          var e,
            n = [];
          for (e = 0; e < 64; e += 4)
            n[e >> 2] =
              t.charCodeAt(e) +
              (t.charCodeAt(e + 1) << 8) +
              (t.charCodeAt(e + 2) << 16) +
              (t.charCodeAt(e + 3) << 24);
          return n;
        }
        function i(t) {
          var e,
            n = [];
          for (e = 0; e < 64; e += 4)
            n[e >> 2] =
              t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
          return n;
        }
        function o(t) {
          var e,
            i,
            o,
            s,
            a,
            h,
            u = t.length,
            c = [1732584193, -271733879, -1732584194, 271733878];
          for (e = 64; e <= u; e += 64) n(c, r(t.substring(e - 64, e)));
          for (
            t = t.substring(e - 64),
              i = t.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              e = 0;
            e < i;
            e += 1
          )
            o[e >> 2] |= t.charCodeAt(e) << ((e % 4) << 3);
          if (((o[e >> 2] |= 128 << ((e % 4) << 3)), e > 55))
            for (n(c, o), e = 0; e < 16; e += 1) o[e] = 0;
          return (
            (s = 8 * u),
            (s = s.toString(16).match(/(.*?)(.{0,8})$/)),
            (a = parseInt(s[2], 16)),
            (h = parseInt(s[1], 16) || 0),
            (o[14] = a),
            (o[15] = h),
            n(c, o),
            c
          );
        }
        function s(t) {
          var e,
            r,
            o,
            s,
            a,
            h,
            u = t.length,
            c = [1732584193, -271733879, -1732584194, 271733878];
          for (e = 64; e <= u; e += 64) n(c, i(t.subarray(e - 64, e)));
          for (
            t = e - 64 < u ? t.subarray(e - 64) : new Uint8Array(0),
              r = t.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              e = 0;
            e < r;
            e += 1
          )
            o[e >> 2] |= t[e] << ((e % 4) << 3);
          if (((o[e >> 2] |= 128 << ((e % 4) << 3)), e > 55))
            for (n(c, o), e = 0; e < 16; e += 1) o[e] = 0;
          return (
            (s = 8 * u),
            (s = s.toString(16).match(/(.*?)(.{0,8})$/)),
            (a = parseInt(s[2], 16)),
            (h = parseInt(s[1], 16) || 0),
            (o[14] = a),
            (o[15] = h),
            n(c, o),
            c
          );
        }
        function a(t) {
          var n,
            r = "";
          for (n = 0; n < 4; n += 1)
            r += e[(t >> (8 * n + 4)) & 15] + e[(t >> (8 * n)) & 15];
          return r;
        }
        function h(t) {
          var e;
          for (e = 0; e < t.length; e += 1) t[e] = a(t[e]);
          return t.join("");
        }
        function u(t) {
          return (
            /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))),
            t
          );
        }
        function c(t, e) {
          var n,
            r = t.length,
            i = new ArrayBuffer(r),
            o = new Uint8Array(i);
          for (n = 0; n < r; n += 1) o[n] = t.charCodeAt(n);
          return e ? o : i;
        }
        function l(t) {
          return String.fromCharCode.apply(null, new Uint8Array(t));
        }
        function f(t, e, n) {
          var r = new Uint8Array(t.byteLength + e.byteLength);
          return (
            r.set(new Uint8Array(t)),
            r.set(new Uint8Array(e), t.byteLength),
            n ? r : r.buffer
          );
        }
        function d(t) {
          var e,
            n = [],
            r = t.length;
          for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
          return String.fromCharCode.apply(String, n);
        }
        function p() {
          this.reset();
        }
        return (
          "5d41402abc4b2a76b9719d911017c592" !== h(o("hello")) &&
            function (t, e) {
              var n = (65535 & t) + (65535 & e),
                r = (t >> 16) + (e >> 16) + (n >> 16);
              return (r << 16) | (65535 & n);
            },
          "undefined" === typeof ArrayBuffer ||
            ArrayBuffer.prototype.slice ||
            (function () {
              function e(t, e) {
                return (
                  (t = 0 | t || 0),
                  t < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                );
              }
              ArrayBuffer.prototype.slice = function (n, r) {
                var i,
                  o,
                  s,
                  a,
                  h = this.byteLength,
                  u = e(n, h),
                  c = h;
                return (
                  r !== t && (c = e(r, h)),
                  u > c
                    ? new ArrayBuffer(0)
                    : ((i = c - u),
                      (o = new ArrayBuffer(i)),
                      (s = new Uint8Array(o)),
                      (a = new Uint8Array(this, u, i)),
                      s.set(a),
                      o)
                );
              };
            })(),
          (p.prototype.append = function (t) {
            return (this.appendBinary(u(t)), this);
          }),
          (p.prototype.appendBinary = function (t) {
            ((this._buff += t), (this._length += t.length));
            var e,
              i = this._buff.length;
            for (e = 64; e <= i; e += 64)
              n(this._hash, r(this._buff.substring(e - 64, e)));
            return ((this._buff = this._buff.substring(e - 64)), this);
          }),
          (p.prototype.end = function (t) {
            var e,
              n,
              r = this._buff,
              i = r.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < i; e += 1)
              o[e >> 2] |= r.charCodeAt(e) << ((e % 4) << 3);
            return (
              this._finish(o, i),
              (n = h(this._hash)),
              t && (n = d(n)),
              this.reset(),
              n
            );
          }),
          (p.prototype.reset = function () {
            return (
              (this._buff = ""),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (p.prototype.getState = function () {
            return {
              buff: this._buff,
              length: this._length,
              hash: this._hash.slice(),
            };
          }),
          (p.prototype.setState = function (t) {
            return (
              (this._buff = t.buff),
              (this._length = t.length),
              (this._hash = t.hash),
              this
            );
          }),
          (p.prototype.destroy = function () {
            (delete this._hash, delete this._buff, delete this._length);
          }),
          (p.prototype._finish = function (t, e) {
            var r,
              i,
              o,
              s = e;
            if (((t[s >> 2] |= 128 << ((s % 4) << 3)), s > 55))
              for (n(this._hash, t), s = 0; s < 16; s += 1) t[s] = 0;
            ((r = 8 * this._length),
              (r = r.toString(16).match(/(.*?)(.{0,8})$/)),
              (i = parseInt(r[2], 16)),
              (o = parseInt(r[1], 16) || 0),
              (t[14] = i),
              (t[15] = o),
              n(this._hash, t));
          }),
          (p.hash = function (t, e) {
            return p.hashBinary(u(t), e);
          }),
          (p.hashBinary = function (t, e) {
            var n = o(t),
              r = h(n);
            return e ? d(r) : r;
          }),
          (p.ArrayBuffer = function () {
            this.reset();
          }),
          (p.ArrayBuffer.prototype.append = function (t) {
            var e,
              r = f(this._buff.buffer, t, !0),
              o = r.length;
            for (this._length += t.byteLength, e = 64; e <= o; e += 64)
              n(this._hash, i(r.subarray(e - 64, e)));
            return (
              (this._buff =
                e - 64 < o
                  ? new Uint8Array(r.buffer.slice(e - 64))
                  : new Uint8Array(0)),
              this
            );
          }),
          (p.ArrayBuffer.prototype.end = function (t) {
            var e,
              n,
              r = this._buff,
              i = r.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < i; e += 1) o[e >> 2] |= r[e] << ((e % 4) << 3);
            return (
              this._finish(o, i),
              (n = h(this._hash)),
              t && (n = d(n)),
              this.reset(),
              n
            );
          }),
          (p.ArrayBuffer.prototype.reset = function () {
            return (
              (this._buff = new Uint8Array(0)),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (p.ArrayBuffer.prototype.getState = function () {
            var t = p.prototype.getState.call(this);
            return ((t.buff = l(t.buff)), t);
          }),
          (p.ArrayBuffer.prototype.setState = function (t) {
            return (
              (t.buff = c(t.buff, !0)),
              p.prototype.setState.call(this, t)
            );
          }),
          (p.ArrayBuffer.prototype.destroy = p.prototype.destroy),
          (p.ArrayBuffer.prototype._finish = p.prototype._finish),
          (p.ArrayBuffer.hash = function (t, e) {
            var n = s(new Uint8Array(t)),
              r = h(n);
            return e ? d(r) : r;
          }),
          p
        );
      });
    },
    381: function (t, e, n) {
      "use strict";
      (function (e) {
        const n = 2147483647;
        function r(t) {
          const e = new Uint32Array([
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]);
          let n = 1779033703,
            r = 3144134277,
            i = 1013904242,
            o = 2773480762,
            s = 1359893119,
            a = 2600822924,
            h = 528734635,
            u = 1541459225;
          const c = new Uint32Array(64);
          function l(t) {
            let l = 0,
              f = t.length;
            while (f >= 64) {
              let d,
                p,
                m,
                y,
                v,
                g = n,
                b = r,
                w = i,
                _ = o,
                M = s,
                k = a,
                C = h,
                E = u;
              for (p = 0; p < 16; p++)
                ((m = l + 4 * p),
                  (c[p] =
                    ((255 & t[m]) << 24) |
                    ((255 & t[m + 1]) << 16) |
                    ((255 & t[m + 2]) << 8) |
                    (255 & t[m + 3])));
              for (p = 16; p < 64; p++)
                ((d = c[p - 2]),
                  (y =
                    ((d >>> 17) | (d << 15)) ^
                    ((d >>> 19) | (d << 13)) ^
                    (d >>> 10)),
                  (d = c[p - 15]),
                  (v =
                    ((d >>> 7) | (d << 25)) ^
                    ((d >>> 18) | (d << 14)) ^
                    (d >>> 3)),
                  (c[p] = (((y + c[p - 7]) | 0) + ((v + c[p - 16]) | 0)) | 0));
              for (p = 0; p < 64; p++)
                ((y =
                  ((((((M >>> 6) | (M << 26)) ^
                    ((M >>> 11) | (M << 21)) ^
                    ((M >>> 25) | (M << 7))) +
                    ((M & k) ^ (~M & C))) |
                    0) +
                    ((E + ((e[p] + c[p]) | 0)) | 0)) |
                  0),
                  (v =
                    ((((g >>> 2) | (g << 30)) ^
                      ((g >>> 13) | (g << 19)) ^
                      ((g >>> 22) | (g << 10))) +
                      ((g & b) ^ (g & w) ^ (b & w))) |
                    0),
                  (E = C),
                  (C = k),
                  (k = M),
                  (M = (_ + y) | 0),
                  (_ = w),
                  (w = b),
                  (b = g),
                  (g = (y + v) | 0));
              ((n = (n + g) | 0),
                (r = (r + b) | 0),
                (i = (i + w) | 0),
                (o = (o + _) | 0),
                (s = (s + M) | 0),
                (a = (a + k) | 0),
                (h = (h + C) | 0),
                (u = (u + E) | 0),
                (l += 64),
                (f -= 64));
            }
          }
          l(t);
          let f,
            d = t.length % 64,
            p = (t.length / 536870912) | 0,
            m = t.length << 3,
            y = d < 56 ? 56 : 120,
            v = t.slice(t.length - d, t.length);
          for (v.push(128), f = d + 1; f < y; f++) v.push(0);
          return (
            v.push((p >>> 24) & 255),
            v.push((p >>> 16) & 255),
            v.push((p >>> 8) & 255),
            v.push((p >>> 0) & 255),
            v.push((m >>> 24) & 255),
            v.push((m >>> 16) & 255),
            v.push((m >>> 8) & 255),
            v.push((m >>> 0) & 255),
            l(v),
            [
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
              (o >>> 24) & 255,
              (o >>> 16) & 255,
              (o >>> 8) & 255,
              (o >>> 0) & 255,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              (s >>> 0) & 255,
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              (a >>> 0) & 255,
              (h >>> 24) & 255,
              (h >>> 16) & 255,
              (h >>> 8) & 255,
              (h >>> 0) & 255,
              (u >>> 24) & 255,
              (u >>> 16) & 255,
              (u >>> 8) & 255,
              (u >>> 0) & 255,
            ]
          );
        }
        function i(t, e, n) {
          t = t.length <= 64 ? t : r(t);
          const i = 64 + e.length + 4,
            o = new Array(i),
            s = new Array(64);
          let a,
            h = [];
          for (a = 0; a < 64; a++) o[a] = 54;
          for (a = 0; a < t.length; a++) o[a] ^= t[a];
          for (a = 0; a < e.length; a++) o[64 + a] = e[a];
          for (a = i - 4; a < i; a++) o[a] = 0;
          for (a = 0; a < 64; a++) s[a] = 92;
          for (a = 0; a < t.length; a++) s[a] ^= t[a];
          function u() {
            for (let t = i - 1; t >= i - 4; t--) {
              if ((o[t]++, o[t] <= 255)) return;
              o[t] = 0;
            }
          }
          while (n >= 32) (u(), (h = h.concat(r(s.concat(r(o))))), (n -= 32));
          return (
            n > 0 && (u(), (h = h.concat(r(s.concat(r(o))).slice(0, n)))),
            h
          );
        }
        function o(t, e, n, r, i) {
          let o;
          for (u(t, 16 * (2 * n - 1), i, 0, 16), o = 0; o < 2 * n; o++)
            (h(t, 16 * o, i, 16), a(i, r), u(i, 0, t, e + 16 * o, 16));
          for (o = 0; o < n; o++) u(t, e + 2 * o * 16, t, 16 * o, 16);
          for (o = 0; o < n; o++)
            u(t, e + 16 * (2 * o + 1), t, 16 * (o + n), 16);
        }
        function s(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function a(t, e) {
          u(t, 0, e, 0, 16);
          for (let n = 8; n > 0; n -= 2)
            ((e[4] ^= s(e[0] + e[12], 7)),
              (e[8] ^= s(e[4] + e[0], 9)),
              (e[12] ^= s(e[8] + e[4], 13)),
              (e[0] ^= s(e[12] + e[8], 18)),
              (e[9] ^= s(e[5] + e[1], 7)),
              (e[13] ^= s(e[9] + e[5], 9)),
              (e[1] ^= s(e[13] + e[9], 13)),
              (e[5] ^= s(e[1] + e[13], 18)),
              (e[14] ^= s(e[10] + e[6], 7)),
              (e[2] ^= s(e[14] + e[10], 9)),
              (e[6] ^= s(e[2] + e[14], 13)),
              (e[10] ^= s(e[6] + e[2], 18)),
              (e[3] ^= s(e[15] + e[11], 7)),
              (e[7] ^= s(e[3] + e[15], 9)),
              (e[11] ^= s(e[7] + e[3], 13)),
              (e[15] ^= s(e[11] + e[7], 18)),
              (e[1] ^= s(e[0] + e[3], 7)),
              (e[2] ^= s(e[1] + e[0], 9)),
              (e[3] ^= s(e[2] + e[1], 13)),
              (e[0] ^= s(e[3] + e[2], 18)),
              (e[6] ^= s(e[5] + e[4], 7)),
              (e[7] ^= s(e[6] + e[5], 9)),
              (e[4] ^= s(e[7] + e[6], 13)),
              (e[5] ^= s(e[4] + e[7], 18)),
              (e[11] ^= s(e[10] + e[9], 7)),
              (e[8] ^= s(e[11] + e[10], 9)),
              (e[9] ^= s(e[8] + e[11], 13)),
              (e[10] ^= s(e[9] + e[8], 18)),
              (e[12] ^= s(e[15] + e[14], 7)),
              (e[13] ^= s(e[12] + e[15], 9)),
              (e[14] ^= s(e[13] + e[12], 13)),
              (e[15] ^= s(e[14] + e[13], 18)));
          for (let n = 0; n < 16; ++n) t[n] += e[n];
        }
        function h(t, e, n, r) {
          for (let i = 0; i < r; i++) n[i] ^= t[e + i];
        }
        function u(t, e, n, r, i) {
          while (i--) n[r++] = t[e++];
        }
        function c(t) {
          if (!t || "number" !== typeof t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if ("number" !== typeof n || n % 1 || n < 0 || n >= 256) return !1;
          }
          return !0;
        }
        function l(t, e) {
          if ("number" !== typeof t || t % 1) throw new Error("invalid " + e);
          return t;
        }
        function f(t, e, r, s, a, f, d) {
          if (
            ((r = l(r, "N")),
            (s = l(s, "r")),
            (a = l(a, "p")),
            (f = l(f, "dkLen")),
            0 === r || 0 !== (r & (r - 1)))
          )
            throw new Error("N must be power of 2");
          if (r > n / 128 / s) throw new Error("N too large");
          if (s > n / 128 / a) throw new Error("r too large");
          if (!c(t)) throw new Error("password must be an array or buffer");
          if (((t = Array.prototype.slice.call(t)), !c(e)))
            throw new Error("salt must be an array or buffer");
          e = Array.prototype.slice.call(e);
          let p = i(t, e, 128 * a * s);
          const m = new Uint32Array(32 * a * s);
          for (let n = 0; n < m.length; n++) {
            const t = 4 * n;
            m[n] =
              ((255 & p[t + 3]) << 24) |
              ((255 & p[t + 2]) << 16) |
              ((255 & p[t + 1]) << 8) |
              ((255 & p[t + 0]) << 0);
          }
          const y = new Uint32Array(64 * s),
            v = new Uint32Array(32 * s * r),
            g = 32 * s,
            b = new Uint32Array(16),
            w = new Uint32Array(16),
            _ = a * r * 2;
          let M,
            k,
            C = 0,
            E = null,
            S = !1,
            A = 0,
            x = 0;
          const R = d ? parseInt(1e3 / s) : 4294967295,
            O = "undefined" !== typeof setImmediate ? setImmediate : setTimeout,
            T = function () {
              if (S) return d(new Error("cancelled"), C / _);
              let e;
              switch (A) {
                case 0:
                  ((k = 32 * x * s), u(m, k, y, 0, g), (A = 1), (M = 0));
                case 1:
                  ((e = r - M), e > R && (e = R));
                  for (let t = 0; t < e; t++)
                    (u(y, 0, v, (M + t) * g, g), o(y, g, s, b, w));
                  if (((M += e), (C += e), d)) {
                    const t = parseInt((1e3 * C) / _);
                    if (t !== E) {
                      if (((S = d(null, C / _)), S)) break;
                      E = t;
                    }
                  }
                  if (M < r) break;
                  ((M = 0), (A = 2));
                case 2:
                  ((e = r - M), e > R && (e = R));
                  for (let t = 0; t < e; t++) {
                    const t = 16 * (2 * s - 1),
                      e = y[t] & (r - 1);
                    (h(v, e * g, y, g), o(y, g, s, b, w));
                  }
                  if (((M += e), (C += e), d)) {
                    const t = parseInt((1e3 * C) / _);
                    if (t !== E) {
                      if (((S = d(null, C / _)), S)) break;
                      E = t;
                    }
                  }
                  if (M < r) break;
                  if ((u(y, 0, m, k, g), x++, x < a)) {
                    A = 0;
                    break;
                  }
                  p = [];
                  for (let t = 0; t < m.length; t++)
                    (p.push((m[t] >> 0) & 255),
                      p.push((m[t] >> 8) & 255),
                      p.push((m[t] >> 16) & 255),
                      p.push((m[t] >> 24) & 255));
                  const n = i(t, p, f);
                  return (d && d(null, 1, n), n);
              }
              d && O(T);
            };
          if (!d)
            while (1) {
              const t = T();
              if (void 0 != t) return t;
            }
          T();
        }
        const d = {
          scrypt: function (t, e, n, r, i, o, s) {
            return new Promise(function (a, h) {
              let u = 0;
              (s && s(0),
                f(t, e, n, r, i, o, function (t, e, n) {
                  if (t) h(t);
                  else if (n) (s && 1 !== u && s(1), a(new Uint8Array(n)));
                  else if (s && e !== u) return ((u = e), s(e));
                }));
            });
          },
          syncScrypt: function (t, e, n, r, i, o) {
            return new Uint8Array(f(t, e, n, r, i, o));
          },
        };
        t.exports = d;
      })();
    },
    405: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Client = void 0));
      const i = r(n(1785)),
        o = r(n(1787));
      class Client extends o.default {
        constructor(t, e, n) {
          void 0 === t && (t = "ws://localhost:8080");
          let {
            autoconnect: r = !0,
            reconnect: o = !0,
            reconnect_interval: s = 1e3,
            max_reconnects: a = 5,
          } = void 0 === e ? {} : e;
          super(
            i.default,
            t,
            {
              autoconnect: r,
              reconnect: o,
              reconnect_interval: s,
              max_reconnects: a,
            },
            n,
          );
        }
      }
      e.Client = Client;
    },
    46: function (t, e, n) {
      var r = n(2),
        i = r.Buffer;
      function o(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function s(t, e, n) {
        return i(t, e, n);
      }
      (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = r)
        : (o(r, e), (e.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (t, e, n) {
          if ("number" === typeof t)
            throw new TypeError("Argument must not be a number");
          return i(t, e, n);
        }),
        (s.alloc = function (t, e, n) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          var r = i(t);
          return (
            void 0 !== e
              ? "string" === typeof n
                ? r.fill(e, n)
                : r.fill(e)
              : r.fill(0),
            r
          );
        }),
        (s.allocUnsafe = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return i(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return r.SlowBuffer(t);
        }));
    },
    462: function (t, e, n) {
      var r = n(1244),
        i = n(259),
        o = n(466),
        s = n(169)("socket.io-client");
      t.exports = e = h;
      var a = (e.managers = {});
      function h(t, e) {
        ("object" === typeof t && ((e = t), (t = void 0)), (e = e || {}));
        var n,
          i = r(t),
          h = i.source,
          u = i.id,
          c = i.path,
          l = a[u] && c in a[u].nsps,
          f =
            e.forceNew || e["force new connection"] || !1 === e.multiplex || l;
        return (
          f
            ? (s("ignoring socket cache for %s", h), (n = o(h, e)))
            : (a[u] || (s("new io instance for %s", h), (a[u] = o(h, e))),
              (n = a[u])),
          i.query && !e.query && (e.query = i.query),
          n.socket(i.path, e)
        );
      }
      ((e.protocol = i.protocol),
        (e.connect = h),
        (e.Manager = n(466)),
        (e.Socket = n(472)));
    },
    464: function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    465: function (t, e, n) {
      (function (e) {
        t.exports = o;
        var n = "function" === typeof e && "function" === typeof e.isBuffer,
          r = "function" === typeof ArrayBuffer,
          i = function (t) {
            return "function" === typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t.buffer instanceof ArrayBuffer;
          };
        function o(t) {
          return (
            (n && e.isBuffer(t)) || (r && (t instanceof ArrayBuffer || i(t)))
          );
        }
      }).call(this, n(2).Buffer);
    },
    466: function (t, e, n) {
      var r = n(1252),
        i = n(472),
        o = n(473),
        s = n(259),
        a = n(474),
        h = n(475),
        u = n(169)("socket.io-client:manager"),
        c = n(471),
        l = n(1269),
        f = Object.prototype.hasOwnProperty;
      function d(t, e) {
        if (!(this instanceof d)) return new d(t, e);
        (t && "object" === typeof t && ((e = t), (t = void 0)),
          (e = e || {}),
          (e.path = e.path || "/socket.io"),
          (this.nsps = {}),
          (this.subs = []),
          (this.opts = e),
          this.reconnection(!1 !== e.reconnection),
          this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
          this.reconnectionDelay(e.reconnectionDelay || 1e3),
          this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
          this.randomizationFactor(e.randomizationFactor || 0.5),
          (this.backoff = new l({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
          })),
          this.timeout(null == e.timeout ? 2e4 : e.timeout),
          (this.readyState = "closed"),
          (this.uri = t),
          (this.connecting = []),
          (this.lastPing = null),
          (this.encoding = !1),
          (this.packetBuffer = []));
        var n = e.parser || s;
        ((this.encoder = new n.Encoder()),
          (this.decoder = new n.Decoder()),
          (this.autoConnect = !1 !== e.autoConnect),
          this.autoConnect && this.open());
      }
      ((t.exports = d),
        (d.prototype.emitAll = function () {
          for (var t in (this.emit.apply(this, arguments), this.nsps))
            f.call(this.nsps, t) &&
              this.nsps[t].emit.apply(this.nsps[t], arguments);
        }),
        (d.prototype.updateSocketIds = function () {
          for (var t in this.nsps)
            f.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
        }),
        (d.prototype.generateId = function (t) {
          return ("/" === t ? "" : t + "#") + this.engine.id;
        }),
        o(d.prototype),
        (d.prototype.reconnection = function (t) {
          return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
        }),
        (d.prototype.reconnectionAttempts = function (t) {
          return arguments.length
            ? ((this._reconnectionAttempts = t), this)
            : this._reconnectionAttempts;
        }),
        (d.prototype.reconnectionDelay = function (t) {
          return arguments.length
            ? ((this._reconnectionDelay = t),
              this.backoff && this.backoff.setMin(t),
              this)
            : this._reconnectionDelay;
        }),
        (d.prototype.randomizationFactor = function (t) {
          return arguments.length
            ? ((this._randomizationFactor = t),
              this.backoff && this.backoff.setJitter(t),
              this)
            : this._randomizationFactor;
        }),
        (d.prototype.reconnectionDelayMax = function (t) {
          return arguments.length
            ? ((this._reconnectionDelayMax = t),
              this.backoff && this.backoff.setMax(t),
              this)
            : this._reconnectionDelayMax;
        }),
        (d.prototype.timeout = function (t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout;
        }),
        (d.prototype.maybeReconnectOnOpen = function () {
          !this.reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }),
        (d.prototype.open = d.prototype.connect =
          function (t, e) {
            if (
              (u("readyState %s", this.readyState),
              ~this.readyState.indexOf("open"))
            )
              return this;
            (u("opening %s", this.uri), (this.engine = r(this.uri, this.opts)));
            var n = this.engine,
              i = this;
            ((this.readyState = "opening"), (this.skipReconnect = !1));
            var o = a(n, "open", function () {
                (i.onopen(), t && t());
              }),
              s = a(n, "error", function (e) {
                if (
                  (u("connect_error"),
                  i.cleanup(),
                  (i.readyState = "closed"),
                  i.emitAll("connect_error", e),
                  t)
                ) {
                  var n = new Error("Connection error");
                  ((n.data = e), t(n));
                } else i.maybeReconnectOnOpen();
              });
            if (!1 !== this._timeout) {
              var h = this._timeout;
              u("connect attempt will timeout after %d", h);
              var c = setTimeout(function () {
                (u("connect attempt timed out after %d", h),
                  o.destroy(),
                  n.close(),
                  n.emit("error", "timeout"),
                  i.emitAll("connect_timeout", h));
              }, h);
              this.subs.push({
                destroy: function () {
                  clearTimeout(c);
                },
              });
            }
            return (this.subs.push(o), this.subs.push(s), this);
          }),
        (d.prototype.onopen = function () {
          (u("open"),
            this.cleanup(),
            (this.readyState = "open"),
            this.emit("open"));
          var t = this.engine;
          (this.subs.push(a(t, "data", h(this, "ondata"))),
            this.subs.push(a(t, "ping", h(this, "onping"))),
            this.subs.push(a(t, "pong", h(this, "onpong"))),
            this.subs.push(a(t, "error", h(this, "onerror"))),
            this.subs.push(a(t, "close", h(this, "onclose"))),
            this.subs.push(a(this.decoder, "decoded", h(this, "ondecoded"))));
        }),
        (d.prototype.onping = function () {
          ((this.lastPing = new Date()), this.emitAll("ping"));
        }),
        (d.prototype.onpong = function () {
          this.emitAll("pong", new Date() - this.lastPing);
        }),
        (d.prototype.ondata = function (t) {
          this.decoder.add(t);
        }),
        (d.prototype.ondecoded = function (t) {
          this.emit("packet", t);
        }),
        (d.prototype.onerror = function (t) {
          (u("error", t), this.emitAll("error", t));
        }),
        (d.prototype.socket = function (t, e) {
          var n = this.nsps[t];
          if (!n) {
            ((n = new i(this, t, e)), (this.nsps[t] = n));
            var r = this;
            (n.on("connecting", o),
              n.on("connect", function () {
                n.id = r.generateId(t);
              }),
              this.autoConnect && o());
          }
          function o() {
            ~c(r.connecting, n) || r.connecting.push(n);
          }
          return n;
        }),
        (d.prototype.destroy = function (t) {
          var e = c(this.connecting, t);
          (~e && this.connecting.splice(e, 1),
            this.connecting.length || this.close());
        }),
        (d.prototype.packet = function (t) {
          u("writing packet %j", t);
          var e = this;
          (t.query && 0 === t.type && (t.nsp += "?" + t.query),
            e.encoding
              ? e.packetBuffer.push(t)
              : ((e.encoding = !0),
                this.encoder.encode(t, function (n) {
                  for (var r = 0; r < n.length; r++)
                    e.engine.write(n[r], t.options);
                  ((e.encoding = !1), e.processPacketQueue());
                })));
        }),
        (d.prototype.processPacketQueue = function () {
          if (this.packetBuffer.length > 0 && !this.encoding) {
            var t = this.packetBuffer.shift();
            this.packet(t);
          }
        }),
        (d.prototype.cleanup = function () {
          u("cleanup");
          for (var t = this.subs.length, e = 0; e < t; e++) {
            var n = this.subs.shift();
            n.destroy();
          }
          ((this.packetBuffer = []),
            (this.encoding = !1),
            (this.lastPing = null),
            this.decoder.destroy());
        }),
        (d.prototype.close = d.prototype.disconnect =
          function () {
            (u("disconnect"),
              (this.skipReconnect = !0),
              (this.reconnecting = !1),
              "opening" === this.readyState && this.cleanup(),
              this.backoff.reset(),
              (this.readyState = "closed"),
              this.engine && this.engine.close());
          }),
        (d.prototype.onclose = function (t) {
          (u("onclose"),
            this.cleanup(),
            this.backoff.reset(),
            (this.readyState = "closed"),
            this.emit("close", t),
            this._reconnection && !this.skipReconnect && this.reconnect());
        }),
        (d.prototype.reconnect = function () {
          if (this.reconnecting || this.skipReconnect) return this;
          var t = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            (u("reconnect failed"),
              this.backoff.reset(),
              this.emitAll("reconnect_failed"),
              (this.reconnecting = !1));
          else {
            var e = this.backoff.duration();
            (u("will wait %dms before reconnect attempt", e),
              (this.reconnecting = !0));
            var n = setTimeout(function () {
              t.skipReconnect ||
                (u("attempting reconnect"),
                t.emitAll("reconnect_attempt", t.backoff.attempts),
                t.emitAll("reconnecting", t.backoff.attempts),
                t.skipReconnect ||
                  t.open(function (e) {
                    e
                      ? (u("reconnect attempt error"),
                        (t.reconnecting = !1),
                        t.reconnect(),
                        t.emitAll("reconnect_error", e.data))
                      : (u("reconnect success"), t.onreconnect());
                  }));
            }, e);
            this.subs.push({
              destroy: function () {
                clearTimeout(n);
              },
            });
          }
        }),
        (d.prototype.onreconnect = function () {
          var t = this.backoff.attempts;
          ((this.reconnecting = !1),
            this.backoff.reset(),
            this.updateSocketIds(),
            this.emitAll("reconnect", t));
        }));
    },
    472: function (t, e, n) {
      var r = n(259),
        i = n(473),
        o = n(1268),
        s = n(474),
        a = n(475),
        h = n(169)("socket.io-client:socket"),
        u = n(170),
        c = n(469);
      t.exports = d;
      var l = {
          connect: 1,
          connect_error: 1,
          connect_timeout: 1,
          connecting: 1,
          disconnect: 1,
          error: 1,
          reconnect: 1,
          reconnect_attempt: 1,
          reconnect_failed: 1,
          reconnect_error: 1,
          reconnecting: 1,
          ping: 1,
          pong: 1,
        },
        f = i.prototype.emit;
      function d(t, e, n) {
        ((this.io = t),
          (this.nsp = e),
          (this.json = this),
          (this.ids = 0),
          (this.acks = {}),
          (this.receiveBuffer = []),
          (this.sendBuffer = []),
          (this.connected = !1),
          (this.disconnected = !0),
          (this.flags = {}),
          n && n.query && (this.query = n.query),
          this.io.autoConnect && this.open());
      }
      (i(d.prototype),
        (d.prototype.subEvents = function () {
          if (!this.subs) {
            var t = this.io;
            this.subs = [
              s(t, "open", a(this, "onopen")),
              s(t, "packet", a(this, "onpacket")),
              s(t, "close", a(this, "onclose")),
            ];
          }
        }),
        (d.prototype.open = d.prototype.connect =
          function () {
            return (
              this.connected ||
                (this.subEvents(),
                this.io.open(),
                "open" === this.io.readyState && this.onopen(),
                this.emit("connecting")),
              this
            );
          }),
        (d.prototype.send = function () {
          var t = o(arguments);
          return (t.unshift("message"), this.emit.apply(this, t), this);
        }),
        (d.prototype.emit = function (t) {
          if (l.hasOwnProperty(t)) return (f.apply(this, arguments), this);
          var e = o(arguments),
            n = {
              type: (void 0 !== this.flags.binary ? this.flags.binary : c(e))
                ? r.BINARY_EVENT
                : r.EVENT,
              data: e,
              options: {},
            };
          return (
            (n.options.compress = !this.flags || !1 !== this.flags.compress),
            "function" === typeof e[e.length - 1] &&
              (h("emitting packet with ack id %d", this.ids),
              (this.acks[this.ids] = e.pop()),
              (n.id = this.ids++)),
            this.connected ? this.packet(n) : this.sendBuffer.push(n),
            (this.flags = {}),
            this
          );
        }),
        (d.prototype.packet = function (t) {
          ((t.nsp = this.nsp), this.io.packet(t));
        }),
        (d.prototype.onopen = function () {
          if ((h("transport is open - connecting"), "/" !== this.nsp))
            if (this.query) {
              var t =
                "object" === typeof this.query
                  ? u.encode(this.query)
                  : this.query;
              (h("sending connect packet with query %s", t),
                this.packet({ type: r.CONNECT, query: t }));
            } else this.packet({ type: r.CONNECT });
        }),
        (d.prototype.onclose = function (t) {
          (h("close (%s)", t),
            (this.connected = !1),
            (this.disconnected = !0),
            delete this.id,
            this.emit("disconnect", t));
        }),
        (d.prototype.onpacket = function (t) {
          var e = t.nsp === this.nsp,
            n = t.type === r.ERROR && "/" === t.nsp;
          if (e || n)
            switch (t.type) {
              case r.CONNECT:
                this.onconnect();
                break;
              case r.EVENT:
                this.onevent(t);
                break;
              case r.BINARY_EVENT:
                this.onevent(t);
                break;
              case r.ACK:
                this.onack(t);
                break;
              case r.BINARY_ACK:
                this.onack(t);
                break;
              case r.DISCONNECT:
                this.ondisconnect();
                break;
              case r.ERROR:
                this.emit("error", t.data);
                break;
            }
        }),
        (d.prototype.onevent = function (t) {
          var e = t.data || [];
          (h("emitting event %j", e),
            null != t.id &&
              (h("attaching ack callback to event"), e.push(this.ack(t.id))),
            this.connected ? f.apply(this, e) : this.receiveBuffer.push(e));
        }),
        (d.prototype.ack = function (t) {
          var e = this,
            n = !1;
          return function () {
            if (!n) {
              n = !0;
              var i = o(arguments);
              (h("sending ack %j", i),
                e.packet({
                  type: c(i) ? r.BINARY_ACK : r.ACK,
                  id: t,
                  data: i,
                }));
            }
          };
        }),
        (d.prototype.onack = function (t) {
          var e = this.acks[t.id];
          "function" === typeof e
            ? (h("calling ack %s with %j", t.id, t.data),
              e.apply(this, t.data),
              delete this.acks[t.id])
            : h("bad ack %s", t.id);
        }),
        (d.prototype.onconnect = function () {
          ((this.connected = !0),
            (this.disconnected = !1),
            this.emit("connect"),
            this.emitBuffered());
        }),
        (d.prototype.emitBuffered = function () {
          var t;
          for (t = 0; t < this.receiveBuffer.length; t++)
            f.apply(this, this.receiveBuffer[t]);
          for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++)
            this.packet(this.sendBuffer[t]);
          this.sendBuffer = [];
        }),
        (d.prototype.ondisconnect = function () {
          (h("server disconnect (%s)", this.nsp),
            this.destroy(),
            this.onclose("io server disconnect"));
        }),
        (d.prototype.destroy = function () {
          if (this.subs) {
            for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
            this.subs = null;
          }
          this.io.destroy(this);
        }),
        (d.prototype.close = d.prototype.disconnect =
          function () {
            return (
              this.connected &&
                (h("performing disconnect (%s)", this.nsp),
                this.packet({ type: r.DISCONNECT })),
              this.destroy(),
              this.connected && this.onclose("io client disconnect"),
              this
            );
          }),
        (d.prototype.compress = function (t) {
          return ((this.flags.compress = t), this);
        }),
        (d.prototype.binary = function (t) {
          return ((this.flags.binary = t), this);
        }));
    },
    473: function (t, e, n) {
      function r(t) {
        if (t) return i(t);
      }
      function i(t) {
        for (var e in r.prototype) t[e] = r.prototype[e];
        return t;
      }
      ((t.exports = r),
        (r.prototype.on = r.prototype.addEventListener =
          function (t, e) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(
                e,
              ),
              this
            );
          }),
        (r.prototype.once = function (t, e) {
          function n() {
            (this.off(t, n), e.apply(this, arguments));
          }
          return ((n.fn = e), this.on(t, n), this);
        }),
        (r.prototype.off =
          r.prototype.removeListener =
          r.prototype.removeAllListeners =
          r.prototype.removeEventListener =
            function (t, e) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return ((this._callbacks = {}), this);
              var n,
                r = this._callbacks["$" + t];
              if (!r) return this;
              if (1 == arguments.length)
                return (delete this._callbacks["$" + t], this);
              for (var i = 0; i < r.length; i++)
                if (((n = r[i]), n === e || n.fn === e)) {
                  r.splice(i, 1);
                  break;
                }
              return this;
            }),
        (r.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          var e = [].slice.call(arguments, 1),
            n = this._callbacks["$" + t];
          if (n) {
            n = n.slice(0);
            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e);
          }
          return this;
        }),
        (r.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + t] || []
          );
        }),
        (r.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        }));
    },
    474: function (t, e) {
      function n(t, e, n) {
        return (
          t.on(e, n),
          {
            destroy: function () {
              t.removeListener(e, n);
            },
          }
        );
      }
      t.exports = n;
    },
    599: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StructError = e.Struct = void 0),
        (e.any = E),
        (e.array = S),
        (e.assert = l),
        (e.assign = y),
        (e.boolean = A),
        (e.coerce = $),
        (e.create = f),
        (e.date = x),
        (e.defaulted = G),
        (e.define = v),
        (e.deprecated = g),
        (e.dynamic = b),
        (e.empty = X),
        (e.enums = R),
        (e.func = O),
        (e.instance = T),
        (e.integer = B),
        (e.intersection = F),
        (e.is = p),
        (e.lazy = w),
        (e.literal = N),
        (e.map = L),
        (e.mask = d),
        (e.max = Q),
        (e.min = tt),
        (e.never = j),
        (e.nullable = I),
        (e.number = P),
        (e.object = D),
        (e.omit = _),
        (e.optional = q),
        (e.partial = M),
        (e.pattern = et),
        (e.pick = k),
        (e.record = U),
        (e.refine = rt),
        (e.regexp = z),
        (e.set = H),
        (e.size = nt),
        (e.string = W),
        (e.struct = C),
        (e.trimmed = J),
        (e.tuple = V),
        (e.type = Z),
        (e.union = K),
        (e.unknown = Y),
        (e.validate = m));
      class StructError extends TypeError {
        constructor(t, e) {
          let n;
          const { message: r, ...i } = t,
            { path: o } = t,
            s = 0 === o.length ? r : "At path: " + o.join(".") + " -- " + r;
          (super(s),
            Object.assign(this, i),
            (this.name = this.constructor.name),
            (this.failures = () => {
              var r;
              return null != (r = n) ? r : (n = [t, ...e()]);
            }));
        }
      }
      function r(t) {
        return i(t) && "function" === typeof t[Symbol.iterator];
      }
      function i(t) {
        return "object" === typeof t && null != t;
      }
      function o(t) {
        if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
        const e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype;
      }
      function s(t) {
        return "string" === typeof t ? JSON.stringify(t) : "" + t;
      }
      function a(t) {
        const { done: e, value: n } = t.next();
        return e ? void 0 : n;
      }
      function h(t, e, n, r) {
        if (!0 === t) return;
        !1 === t ? (t = {}) : "string" === typeof t && (t = { message: t });
        const { path: i, branch: o } = e,
          { type: a } = n,
          {
            refinement: h,
            message: u = "Expected a value of type `" +
              a +
              "`" +
              (h ? " with refinement `" + h + "`" : "") +
              ", but received: `" +
              s(r) +
              "`",
          } = t;
        return {
          value: r,
          type: a,
          refinement: h,
          key: i[i.length - 1],
          path: i,
          branch: o,
          ...t,
          message: u,
        };
      }
      function* u(t, e, n, i) {
        r(t) || (t = [t]);
        for (const r of t) {
          const t = h(r, e, n, i);
          t && (yield t);
        }
      }
      function c(t, e, n) {
        return (
          void 0 === n && (n = {}),
          (function* () {
            const {
                path: r = [],
                branch: o = [t],
                coerce: s = !1,
                mask: a = !1,
              } = n,
              h = { path: r, branch: o };
            if (
              s &&
              ((t = e.coercer(t, h)),
              a &&
                "type" !== e.type &&
                i(e.schema) &&
                i(t) &&
                !Array.isArray(t))
            )
              for (const n in t) void 0 === e.schema[n] && delete t[n];
            let u = !0;
            for (const n of e.validator(t, h)) ((u = !1), yield [n, void 0]);
            for (let [n, l, f] of e.entries(t, h)) {
              const e = c(l, f, {
                path: void 0 === n ? r : [...r, n],
                branch: void 0 === n ? o : [...o, l],
                coerce: s,
                mask: a,
              });
              for (const r of e)
                r[0]
                  ? ((u = !1), yield [r[0], void 0])
                  : s &&
                    ((l = r[1]),
                    void 0 === n
                      ? (t = l)
                      : t instanceof Map
                        ? t.set(n, l)
                        : t instanceof Set
                          ? t.add(l)
                          : i(t) && (t[n] = l));
            }
            if (u)
              for (const n of e.refiner(t, h)) ((u = !1), yield [n, void 0]);
            u && (yield [void 0, t]);
          })()
        );
      }
      e.StructError = StructError;
      class Struct {
        constructor(t) {
          const {
            type: e,
            schema: n,
            validator: r,
            refiner: i,
            coercer: o = (t) => t,
            entries: s = function* () {},
          } = t;
          ((this.type = e),
            (this.schema = n),
            (this.entries = s),
            (this.coercer = o),
            (this.validator = r
              ? (t, e) => {
                  const n = r(t, e);
                  return u(n, e, this, t);
                }
              : () => []),
            (this.refiner = i
              ? (t, e) => {
                  const n = i(t, e);
                  return u(n, e, this, t);
                }
              : () => []));
        }
        assert(t) {
          return l(t, this);
        }
        create(t) {
          return f(t, this);
        }
        is(t) {
          return p(t, this);
        }
        mask(t) {
          return d(t, this);
        }
        validate(t, e) {
          return (void 0 === e && (e = {}), m(t, this, e));
        }
      }
      function l(t, e) {
        const n = m(t, e);
        if (n[0]) throw n[0];
      }
      function f(t, e) {
        const n = m(t, e, { coerce: !0 });
        if (n[0]) throw n[0];
        return n[1];
      }
      function d(t, e) {
        const n = m(t, e, { coerce: !0, mask: !0 });
        if (n[0]) throw n[0];
        return n[1];
      }
      function p(t, e) {
        const n = m(t, e);
        return !n[0];
      }
      function m(t, e, n) {
        void 0 === n && (n = {});
        const r = c(t, e, n),
          i = a(r);
        if (i[0]) {
          const t = new StructError(i[0], function* () {
            for (const t of r) t[0] && (yield t[0]);
          });
          return [t, void 0];
        }
        {
          const t = i[1];
          return [void 0, t];
        }
      }
      function y() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        const r = e.map((t) => t.schema),
          i = Object.assign({}, ...r);
        return D(i);
      }
      function v(t, e) {
        return new Struct({ type: t, schema: null, validator: e });
      }
      function g(t, e) {
        return new Struct({
          ...t,
          refiner: (e, n) => void 0 === e || t.refiner(e, n),
          validator(n, r) {
            return void 0 === n || (e(n, r), t.validator(n, r));
          },
        });
      }
      function b(t) {
        return new Struct({
          type: "dynamic",
          schema: null,
          *entries(e, n) {
            const r = t(e, n);
            yield* r.entries(e, n);
          },
          validator(e, n) {
            const r = t(e, n);
            return r.validator(e, n);
          },
          coercer(e, n) {
            const r = t(e, n);
            return r.coercer(e, n);
          },
        });
      }
      function w(t) {
        let e;
        return new Struct({
          type: "lazy",
          schema: null,
          *entries(n, r) {
            (null != e || (e = t()), yield* e.entries(n, r));
          },
          validator(n, r) {
            return (null != e || (e = t()), e.validator(n, r));
          },
          coercer(n, r) {
            return (null != e || (e = t()), e.coercer(n, r));
          },
        });
      }
      function _(t, e) {
        const { schema: n } = t,
          r = { ...n };
        for (const i of e) delete r[i];
        return D(r);
      }
      function M(t) {
        const e = t instanceof Struct ? { ...t.schema } : { ...t };
        for (const n in e) e[n] = q(e[n]);
        return D(e);
      }
      function k(t, e) {
        const { schema: n } = t,
          r = {};
        for (const i of e) r[i] = n[i];
        return D(r);
      }
      function C(t, e) {
        return (
          console.warn(
            "superstruct@0.11 - The `struct` helper has been renamed to `define`.",
          ),
          v(t, e)
        );
      }
      function E() {
        return v("any", () => !0);
      }
      function S(t) {
        return new Struct({
          type: "array",
          schema: t,
          *entries(e) {
            if (t && Array.isArray(e))
              for (const [n, r] of e.entries()) yield [n, r, t];
          },
          coercer(t) {
            return Array.isArray(t) ? t.slice() : t;
          },
          validator(t) {
            return (
              Array.isArray(t) ||
              "Expected an array value, but received: " + s(t)
            );
          },
        });
      }
      function A() {
        return v("boolean", (t) => "boolean" === typeof t);
      }
      function x() {
        return v(
          "date",
          (t) =>
            (t instanceof Date && !isNaN(t.getTime())) ||
            "Expected a valid `Date` object, but received: " + s(t),
        );
      }
      function R(t) {
        const e = {},
          n = t.map((t) => s(t)).join();
        for (const r of t) e[r] = r;
        return new Struct({
          type: "enums",
          schema: e,
          validator(e) {
            return (
              t.includes(e) ||
              "Expected one of `" + n + "`, but received: " + s(e)
            );
          },
        });
      }
      function O() {
        return v(
          "func",
          (t) =>
            "function" === typeof t ||
            "Expected a function, but received: " + s(t),
        );
      }
      function T(t) {
        return v(
          "instance",
          (e) =>
            e instanceof t ||
            "Expected a `" + t.name + "` instance, but received: " + s(e),
        );
      }
      function B() {
        return v(
          "integer",
          (t) =>
            ("number" === typeof t && !isNaN(t) && Number.isInteger(t)) ||
            "Expected an integer, but received: " + s(t),
        );
      }
      function F(t) {
        return new Struct({
          type: "intersection",
          schema: null,
          *entries(e, n) {
            for (const r of t) yield* r.entries(e, n);
          },
          *validator(e, n) {
            for (const r of t) yield* r.validator(e, n);
          },
          *refiner(e, n) {
            for (const r of t) yield* r.refiner(e, n);
          },
        });
      }
      function N(t) {
        const e = s(t),
          n = typeof t;
        return new Struct({
          type: "literal",
          schema:
            "string" === n || "number" === n || "boolean" === n ? t : null,
          validator(n) {
            return (
              n === t ||
              "Expected the literal `" + e + "`, but received: " + s(n)
            );
          },
        });
      }
      function L(t, e) {
        return new Struct({
          type: "map",
          schema: null,
          *entries(n) {
            if (t && e && n instanceof Map)
              for (const [r, i] of n.entries())
                (yield [r, r, t], yield [r, i, e]);
          },
          coercer(t) {
            return t instanceof Map ? new Map(t) : t;
          },
          validator(t) {
            return (
              t instanceof Map ||
              "Expected a `Map` object, but received: " + s(t)
            );
          },
        });
      }
      function j() {
        return v("never", () => !1);
      }
      function I(t) {
        return new Struct({
          ...t,
          validator: (e, n) => null === e || t.validator(e, n),
          refiner: (e, n) => null === e || t.refiner(e, n),
        });
      }
      function P() {
        return v(
          "number",
          (t) =>
            ("number" === typeof t && !isNaN(t)) ||
            "Expected a number, but received: " + s(t),
        );
      }
      function D(t) {
        const e = t ? Object.keys(t) : [],
          n = j();
        return new Struct({
          type: "object",
          schema: t || null,
          *entries(r) {
            if (t && i(r)) {
              const i = new Set(Object.keys(r));
              for (const n of e) (i.delete(n), yield [n, r[n], t[n]]);
              for (const t of i) yield [t, r[t], n];
            }
          },
          validator(t) {
            return i(t) || "Expected an object, but received: " + s(t);
          },
          coercer(t) {
            return i(t) ? { ...t } : t;
          },
        });
      }
      function q(t) {
        return new Struct({
          ...t,
          validator: (e, n) => void 0 === e || t.validator(e, n),
          refiner: (e, n) => void 0 === e || t.refiner(e, n),
        });
      }
      function U(t, e) {
        return new Struct({
          type: "record",
          schema: null,
          *entries(n) {
            if (i(n))
              for (const r in n) {
                const i = n[r];
                (yield [r, r, t], yield [r, i, e]);
              }
          },
          validator(t) {
            return i(t) || "Expected an object, but received: " + s(t);
          },
        });
      }
      function z() {
        return v("regexp", (t) => t instanceof RegExp);
      }
      function H(t) {
        return new Struct({
          type: "set",
          schema: null,
          *entries(e) {
            if (t && e instanceof Set) for (const n of e) yield [n, n, t];
          },
          coercer(t) {
            return t instanceof Set ? new Set(t) : t;
          },
          validator(t) {
            return (
              t instanceof Set ||
              "Expected a `Set` object, but received: " + s(t)
            );
          },
        });
      }
      function W() {
        return v(
          "string",
          (t) =>
            "string" === typeof t || "Expected a string, but received: " + s(t),
        );
      }
      function V(t) {
        const e = j();
        return new Struct({
          type: "tuple",
          schema: null,
          *entries(n) {
            if (Array.isArray(n)) {
              const r = Math.max(t.length, n.length);
              for (let i = 0; i < r; i++) yield [i, n[i], t[i] || e];
            }
          },
          validator(t) {
            return (
              Array.isArray(t) || "Expected an array, but received: " + s(t)
            );
          },
        });
      }
      function Z(t) {
        const e = Object.keys(t);
        return new Struct({
          type: "type",
          schema: t,
          *entries(n) {
            if (i(n)) for (const r of e) yield [r, n[r], t[r]];
          },
          validator(t) {
            return i(t) || "Expected an object, but received: " + s(t);
          },
        });
      }
      function K(t) {
        const e = t.map((t) => t.type).join(" | ");
        return new Struct({
          type: "union",
          schema: null,
          validator(n, r) {
            const i = [];
            for (const e of t) {
              const [...t] = c(n, e, r),
                [o] = t;
              if (!o[0]) return [];
              for (const [e] of t) e && i.push(e);
            }
            return [
              "Expected the value to satisfy a union of `" +
                e +
                "`, but received: " +
                s(n),
              ...i,
            ];
          },
        });
      }
      function Y() {
        return v("unknown", () => !0);
      }
      function $(t, e, n) {
        return new Struct({
          ...t,
          coercer: (r, i) =>
            p(r, e) ? t.coercer(n(r, i), i) : t.coercer(r, i),
        });
      }
      function G(t, e, n) {
        return (
          void 0 === n && (n = {}),
          $(t, Y(), (t) => {
            const r = "function" === typeof e ? e() : e;
            if (void 0 === t) return r;
            if (!n.strict && o(t) && o(r)) {
              const e = { ...t };
              let n = !1;
              for (const t in r) void 0 === e[t] && ((e[t] = r[t]), (n = !0));
              if (n) return e;
            }
            return t;
          })
        );
      }
      function J(t) {
        return $(t, W(), (t) => t.trim());
      }
      function X(t) {
        const e = "Expected an empty " + t.type;
        return rt(t, "empty", (t) => {
          if (t instanceof Map || t instanceof Set) {
            const { size: n } = t;
            return (
              0 === n || e + " but received one with a size of `" + n + "`"
            );
          }
          {
            const { length: n } = t;
            return (
              0 === n || e + " but received one with a length of `" + n + "`"
            );
          }
        });
      }
      function Q(t, e, n) {
        void 0 === n && (n = {});
        const { exclusive: r } = n;
        return rt(t, "max", (n) =>
          r
            ? n < e
            : n <= e ||
              "Expected a " +
                t.type +
                " greater than " +
                (r ? "" : "or equal to ") +
                e +
                " but received `" +
                n +
                "`",
        );
      }
      function tt(t, e, n) {
        void 0 === n && (n = {});
        const { exclusive: r } = n;
        return rt(t, "min", (n) =>
          r
            ? n > e
            : n >= e ||
              "Expected a " +
                t.type +
                " greater than " +
                (r ? "" : "or equal to ") +
                e +
                " but received `" +
                n +
                "`",
        );
      }
      function et(t, e) {
        return rt(
          t,
          "pattern",
          (n) =>
            e.test(n) ||
            "Expected a " +
              t.type +
              " matching `/" +
              e.source +
              '/` but received "' +
              n +
              '"',
        );
      }
      function nt(t, e, n) {
        void 0 === n && (n = e);
        const r = "Expected a " + t.type,
          i =
            e === n ? "of `" + e + "`" : "between `" + e + "` and `" + n + "`";
        return rt(t, "size", (t) => {
          if ("number" === typeof t || t instanceof Date)
            return (
              (e <= t && t <= n) || r + " " + i + " but received `" + t + "`"
            );
          if (t instanceof Map || t instanceof Set) {
            const { size: o } = t;
            return (
              (e <= o && o <= n) ||
              r +
                " with a size " +
                i +
                " but received one with a size of `" +
                o +
                "`"
            );
          }
          {
            const { length: o } = t;
            return (
              (e <= o && o <= n) ||
              r +
                " with a length " +
                i +
                " but received one with a length of `" +
                o +
                "`"
            );
          }
        });
      }
      function rt(t, e, n) {
        return new Struct({
          ...t,
          *refiner(r, i) {
            yield* t.refiner(r, i);
            const o = n(r, i),
              s = u(o, i, t, r);
            for (const t of s) yield { ...t, refinement: e };
          },
        });
      }
      e.Struct = Struct;
    },
    600: function (t, e, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        i = "~";
      function o() {}
      function s(t, e, n) {
        ((this.fn = t), (this.context = e), (this.once = n || !1));
      }
      function a(t, e, n, r, o) {
        if ("function" !== typeof n)
          throw new TypeError("The listener must be a function");
        var a = new s(n, r || t, o),
          h = i ? i + e : e;
        return (
          t._events[h]
            ? t._events[h].fn
              ? (t._events[h] = [t._events[h], a])
              : t._events[h].push(a)
            : ((t._events[h] = a), t._eventsCount++),
          t
        );
      }
      function h(t, e) {
        0 === --t._eventsCount ? (t._events = new o()) : delete t._events[e];
      }
      function u() {
        ((this._events = new o()), (this._eventsCount = 0));
      }
      (Object.create &&
        ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
        (u.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(i ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (u.prototype.listeners = function (t) {
          var e = i ? i + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, o = n.length, s = new Array(o); r < o; r++)
            s[r] = n[r].fn;
          return s;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = i ? i + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, r, o, s) {
          var a = i ? i + t : t;
          if (!this._events[a]) return !1;
          var h,
            u,
            c = this._events[a],
            l = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, e), !0);
              case 3:
                return (c.fn.call(c.context, e, n), !0);
              case 4:
                return (c.fn.call(c.context, e, n, r), !0);
              case 5:
                return (c.fn.call(c.context, e, n, r, o), !0);
              case 6:
                return (c.fn.call(c.context, e, n, r, o, s), !0);
            }
            for (u = 1, h = new Array(l - 1); u < l; u++)
              h[u - 1] = arguments[u];
            c.fn.apply(c.context, h);
          } else {
            var f,
              d = c.length;
            for (u = 0; u < d; u++)
              switch (
                (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), l)
              ) {
                case 1:
                  c[u].fn.call(c[u].context);
                  break;
                case 2:
                  c[u].fn.call(c[u].context, e);
                  break;
                case 3:
                  c[u].fn.call(c[u].context, e, n);
                  break;
                case 4:
                  c[u].fn.call(c[u].context, e, n, r);
                  break;
                default:
                  if (!h)
                    for (f = 1, h = new Array(l - 1); f < l; f++)
                      h[f - 1] = arguments[f];
                  c[u].fn.apply(c[u].context, h);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, n) {
          return a(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return a(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, r) {
          var o = i ? i + t : t;
          if (!this._events[o]) return this;
          if (!e) return (h(this, o), this);
          var s = this._events[o];
          if (s.fn)
            s.fn !== e ||
              (r && !s.once) ||
              (n && s.context !== n) ||
              h(this, o);
          else {
            for (var a = 0, u = [], c = s.length; a < c; a++)
              (s[a].fn !== e ||
                (r && !s[a].once) ||
                (n && s[a].context !== n)) &&
                u.push(s[a]);
            u.length
              ? (this._events[o] = 1 === u.length ? u[0] : u)
              : h(this, o);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = i ? i + t : t), this._events[e] && h(this, e))
              : ((this._events = new o()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = i),
        (u.EventEmitter = u),
        (t.exports = u));
    },
    663: function (t, e, n) {
      "use strict";
      (function (e, r) {
        var i;
        ((t.exports = R), (R.ReadableState = x));
        n(52).EventEmitter;
        var o = function (t, e) {
            return t.listeners(e).length;
          },
          s = n(664),
          a = n(2).Buffer,
          h =
            ("undefined" !== typeof e
              ? e
              : "undefined" !== typeof window
                ? window
                : "undefined" !== typeof self
                  ? self
                  : {}
            ).Uint8Array || function () {};
        function u(t) {
          return a.from(t);
        }
        function c(t) {
          return a.isBuffer(t) || t instanceof h;
        }
        var l,
          f = n(1954);
        l = f && f.debuglog ? f.debuglog("stream") : function () {};
        var d,
          p,
          m,
          y = n(1955),
          v = n(665),
          g = n(666),
          b = g.getHighWaterMark,
          w = n(121).codes,
          _ = w.ERR_INVALID_ARG_TYPE,
          M = w.ERR_STREAM_PUSH_AFTER_EOF,
          k = w.ERR_METHOD_NOT_IMPLEMENTED,
          C = w.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n(16)(R, s);
        var E = v.errorOrDestroy,
          S = ["error", "close", "destroy", "pause", "resume"];
        function A(t, e, n) {
          if ("function" === typeof t.prependListener)
            return t.prependListener(e, n);
          t._events && t._events[e]
            ? Array.isArray(t._events[e])
              ? t._events[e].unshift(n)
              : (t._events[e] = [n, t._events[e]])
            : t.on(e, n);
        }
        function x(t, e, r) {
          ((i = i || n(122)),
            (t = t || {}),
            "boolean" !== typeof r && (r = e instanceof i),
            (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = b(this, t, "readableHighWaterMark", r)),
            (this.buffer = new y()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (d || (d = n(82).StringDecoder),
              (this.decoder = new d(t.encoding)),
              (this.encoding = t.encoding)));
        }
        function R(t) {
          if (((i = i || n(122)), !(this instanceof R))) return new R(t);
          var e = this instanceof i;
          ((this._readableState = new x(t, this, e)),
            (this.readable = !0),
            t &&
              ("function" === typeof t.read && (this._read = t.read),
              "function" === typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this));
        }
        function O(t, e, n, r, i) {
          l("readableAddChunk", e);
          var o,
            s = t._readableState;
          if (null === e) ((s.reading = !1), j(t, s));
          else if ((i || (o = B(s, e)), o)) E(t, o);
          else if (s.objectMode || (e && e.length > 0))
            if (
              ("string" === typeof e ||
                s.objectMode ||
                Object.getPrototypeOf(e) === a.prototype ||
                (e = u(e)),
              r)
            )
              s.endEmitted ? E(t, new C()) : T(t, s, e, !0);
            else if (s.ended) E(t, new M());
            else {
              if (s.destroyed) return !1;
              ((s.reading = !1),
                s.decoder && !n
                  ? ((e = s.decoder.write(e)),
                    s.objectMode || 0 !== e.length ? T(t, s, e, !1) : D(t, s))
                  : T(t, s, e, !1));
            }
          else r || ((s.reading = !1), D(t, s));
          return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
        }
        function T(t, e, n, r) {
          (e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit("data", n))
            : ((e.length += e.objectMode ? 1 : n.length),
              r ? e.buffer.unshift(n) : e.buffer.push(n),
              e.needReadable && I(t)),
            D(t, e));
        }
        function B(t, e) {
          var n;
          return (
            c(e) ||
              "string" === typeof e ||
              void 0 === e ||
              t.objectMode ||
              (n = new _("chunk", ["string", "Buffer", "Uint8Array"], e)),
            n
          );
        }
        (Object.defineProperty(R.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (R.prototype.destroy = v.destroy),
          (R.prototype._undestroy = v.undestroy),
          (R.prototype._destroy = function (t, e) {
            e(t);
          }),
          (R.prototype.push = function (t, e) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : "string" === typeof t &&
                  ((e = e || r.defaultEncoding),
                  e !== r.encoding && ((t = a.from(t, e)), (e = "")),
                  (n = !0)),
              O(this, t, e, !1, n)
            );
          }),
          (R.prototype.unshift = function (t) {
            return O(this, t, null, !0, !1);
          }),
          (R.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (R.prototype.setEncoding = function (t) {
            d || (d = n(82).StringDecoder);
            var e = new d(t);
            ((this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding));
            var r = this._readableState.buffer.head,
              i = "";
            while (null !== r) ((i += e.write(r.data)), (r = r.next));
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          }));
        var F = 1073741824;
        function N(t) {
          return (
            t >= F
              ? (t = F)
              : (t--,
                (t |= t >>> 1),
                (t |= t >>> 2),
                (t |= t >>> 4),
                (t |= t >>> 8),
                (t |= t >>> 16),
                t++),
            t
          );
        }
        function L(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
              ? 1
              : t !== t
                ? e.flowing && e.length
                  ? e.buffer.head.data.length
                  : e.length
                : (t > e.highWaterMark && (e.highWaterMark = N(t)),
                  t <= e.length
                    ? t
                    : e.ended
                      ? e.length
                      : ((e.needReadable = !0), 0));
        }
        function j(t, e) {
          if ((l("onEofChunk"), !e.ended)) {
            if (e.decoder) {
              var n = e.decoder.end();
              n &&
                n.length &&
                (e.buffer.push(n), (e.length += e.objectMode ? 1 : n.length));
            }
            ((e.ended = !0),
              e.sync
                ? I(t)
                : ((e.needReadable = !1),
                  e.emittedReadable || ((e.emittedReadable = !0), P(t))));
          }
        }
        function I(t) {
          var e = t._readableState;
          (l("emitReadable", e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (l("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              r.nextTick(P, t)));
        }
        function P(t) {
          var e = t._readableState;
          (l("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit("readable"), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            Z(t));
        }
        function D(t, e) {
          e.readingMore || ((e.readingMore = !0), r.nextTick(q, t, e));
        }
        function q(t, e) {
          while (
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length))
          ) {
            var n = e.length;
            if ((l("maybeReadMore read 0"), t.read(0), n === e.length)) break;
          }
          e.readingMore = !1;
        }
        function U(t) {
          return function () {
            var e = t._readableState;
            (l("pipeOnDrain", e.awaitDrain),
              e.awaitDrain && e.awaitDrain--,
              0 === e.awaitDrain && o(t, "data") && ((e.flowing = !0), Z(t)));
          };
        }
        function z(t) {
          var e = t._readableState;
          ((e.readableListening = t.listenerCount("readable") > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount("data") > 0 && t.resume());
        }
        function H(t) {
          (l("readable nexttick read 0"), t.read(0));
        }
        function W(t, e) {
          e.resumeScheduled || ((e.resumeScheduled = !0), r.nextTick(V, t, e));
        }
        function V(t, e) {
          (l("resume", e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit("resume"),
            Z(t),
            e.flowing && !e.reading && t.read(0));
        }
        function Z(t) {
          var e = t._readableState;
          l("flow", e.flowing);
          while (e.flowing && null !== t.read());
        }
        function K(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (n = e.buffer.shift())
                : !t || t >= e.length
                  ? ((n = e.decoder
                      ? e.buffer.join("")
                      : 1 === e.buffer.length
                        ? e.buffer.first()
                        : e.buffer.concat(e.length)),
                    e.buffer.clear())
                  : (n = e.buffer.consume(t, e.decoder)),
              n);
          var n;
        }
        function Y(t) {
          var e = t._readableState;
          (l("endReadable", e.endEmitted),
            e.endEmitted || ((e.ended = !0), r.nextTick($, e, t)));
        }
        function $(t, e) {
          if (
            (l("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit("end"),
              t.autoDestroy))
          ) {
            var n = e._writableState;
            (!n || (n.autoDestroy && n.finished)) && e.destroy();
          }
        }
        function G(t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        ((R.prototype.read = function (t) {
          (l("read", t), (t = parseInt(t, 10)));
          var e = this._readableState,
            n = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              l("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? Y(this) : I(this),
              null
            );
          if (((t = L(t, e)), 0 === t && e.ended))
            return (0 === e.length && Y(this), null);
          var r,
            i = e.needReadable;
          return (
            l("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              ((i = !0), l("length less than watermark", i)),
            e.ended || e.reading
              ? ((i = !1), l("reading or ended", i))
              : i &&
                (l("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = L(n, e))),
            (r = t > 0 ? K(t, e) : null),
            null === r
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), n !== t && e.ended && Y(this)),
            null !== r && this.emit("data", r),
            r
          );
        }),
          (R.prototype._read = function (t) {
            E(this, new k("_read()"));
          }),
          (R.prototype.pipe = function (t, e) {
            var n = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = t;
                break;
              case 1:
                i.pipes = [i.pipes, t];
                break;
              default:
                i.pipes.push(t);
                break;
            }
            ((i.pipesCount += 1), l("pipe count=%d opts=%j", i.pipesCount, e));
            var s = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr,
              a = s ? u : g;
            function h(t, e) {
              (l("onunpipe"),
                t === n &&
                  e &&
                  !1 === e.hasUnpiped &&
                  ((e.hasUnpiped = !0), d()));
            }
            function u() {
              (l("onend"), t.end());
            }
            (i.endEmitted ? r.nextTick(a) : n.once("end", a),
              t.on("unpipe", h));
            var c = U(n);
            t.on("drain", c);
            var f = !1;
            function d() {
              (l("cleanup"),
                t.removeListener("close", y),
                t.removeListener("finish", v),
                t.removeListener("drain", c),
                t.removeListener("error", m),
                t.removeListener("unpipe", h),
                n.removeListener("end", u),
                n.removeListener("end", g),
                n.removeListener("data", p),
                (f = !0),
                !i.awaitDrain ||
                  (t._writableState && !t._writableState.needDrain) ||
                  c());
            }
            function p(e) {
              l("ondata");
              var r = t.write(e);
              (l("dest.write", r),
                !1 === r &&
                  (((1 === i.pipesCount && i.pipes === t) ||
                    (i.pipesCount > 1 && -1 !== G(i.pipes, t))) &&
                    !f &&
                    (l("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                  n.pause()));
            }
            function m(e) {
              (l("onerror", e),
                g(),
                t.removeListener("error", m),
                0 === o(t, "error") && E(t, e));
            }
            function y() {
              (t.removeListener("finish", v), g());
            }
            function v() {
              (l("onfinish"), t.removeListener("close", y), g());
            }
            function g() {
              (l("unpipe"), n.unpipe(t));
            }
            return (
              n.on("data", p),
              A(t, "error", m),
              t.once("close", y),
              t.once("finish", v),
              t.emit("pipe", n),
              i.flowing || (l("pipe resume"), n.resume()),
              t
            );
          }),
          (R.prototype.unpipe = function (t) {
            var e = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, n)),
                this
              );
            if (!t) {
              var r = e.pipes,
                i = e.pipesCount;
              ((e.pipes = null), (e.pipesCount = 0), (e.flowing = !1));
              for (var o = 0; o < i; o++)
                r[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var s = G(e.pipes, t);
            return (
              -1 === s ||
                (e.pipes.splice(s, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, n)),
              this
            );
          }),
          (R.prototype.on = function (t, e) {
            var n = s.prototype.on.call(this, t, e),
              i = this._readableState;
            return (
              "data" === t
                ? ((i.readableListening = this.listenerCount("readable") > 0),
                  !1 !== i.flowing && this.resume())
                : "readable" === t &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    l("on readable", i.length, i.reading),
                    i.length ? I(this) : i.reading || r.nextTick(H, this))),
              n
            );
          }),
          (R.prototype.addListener = R.prototype.on),
          (R.prototype.removeListener = function (t, e) {
            var n = s.prototype.removeListener.call(this, t, e);
            return ("readable" === t && r.nextTick(z, this), n);
          }),
          (R.prototype.removeAllListeners = function (t) {
            var e = s.prototype.removeAllListeners.apply(this, arguments);
            return (
              ("readable" !== t && void 0 !== t) || r.nextTick(z, this),
              e
            );
          }),
          (R.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (l("resume"), (t.flowing = !t.readableListening), W(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (R.prototype.pause = function () {
            return (
              l("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (l("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (R.prototype.wrap = function (t) {
            var e = this,
              n = this._readableState,
              r = !1;
            for (var i in (t.on("end", function () {
              if ((l("wrapped end"), n.decoder && !n.ended)) {
                var t = n.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (i) {
              if (
                (l("wrapped data"),
                n.decoder && (i = n.decoder.write(i)),
                (!n.objectMode || (null !== i && void 0 !== i)) &&
                  (n.objectMode || (i && i.length)))
              ) {
                var o = e.push(i);
                o || ((r = !0), t.pause());
              }
            }),
            t))
              void 0 === this[i] &&
                "function" === typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var o = 0; o < S.length; o++)
              t.on(S[o], this.emit.bind(this, S[o]));
            return (
              (this._read = function (e) {
                (l("wrapped _read", e), r && ((r = !1), t.resume()));
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (R.prototype[Symbol.asyncIterator] = function () {
              return (void 0 === p && (p = n(1957)), p(this));
            }),
          Object.defineProperty(R.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(R.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(R.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (R._fromList = K),
          Object.defineProperty(R.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" === typeof Symbol &&
            (R.from = function (t, e) {
              return (void 0 === m && (m = n(1958)), m(R, t, e));
            }));
      }).call(this, n(13), n(18));
    },
    664: function (t, e, n) {
      t.exports = n(52).EventEmitter;
    },
    665: function (t, e, n) {
      "use strict";
      (function (e) {
        function n(t, n) {
          var o = this,
            a = this._readableState && this._readableState.destroyed,
            h = this._writableState && this._writableState.destroyed;
          return a || h
            ? (n
                ? n(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      e.nextTick(s, this, t))
                    : e.nextTick(s, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !n && t
                  ? o._writableState
                    ? o._writableState.errorEmitted
                      ? e.nextTick(i, o)
                      : ((o._writableState.errorEmitted = !0),
                        e.nextTick(r, o, t))
                    : e.nextTick(r, o, t)
                  : n
                    ? (e.nextTick(i, o), n(t))
                    : e.nextTick(i, o);
              }),
              this);
        }
        function r(t, e) {
          (s(t, e), i(t));
        }
        function i(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit("close");
        }
        function o() {
          (this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1)));
        }
        function s(t, e) {
          t.emit("error", e);
        }
        function a(t, e) {
          var n = t._readableState,
            r = t._writableState;
          (n && n.autoDestroy) || (r && r.autoDestroy)
            ? t.destroy(e)
            : t.emit("error", e);
        }
        t.exports = { destroy: n, undestroy: o, errorOrDestroy: a };
      }).call(this, n(18));
    },
    666: function (t, e, n) {
      "use strict";
      var r = n(121).codes.ERR_INVALID_OPT_VALUE;
      function i(t, e, n) {
        return null != t.highWaterMark ? t.highWaterMark : e ? t[n] : null;
      }
      function o(t, e, n, o) {
        var s = i(e, o, n);
        if (null != s) {
          if (!isFinite(s) || Math.floor(s) !== s || s < 0) {
            var a = o ? n : "highWaterMark";
            throw new r(a, s);
          }
          return Math.floor(s);
        }
        return t.objectMode ? 16 : 16384;
      }
      t.exports = { getHighWaterMark: o };
    },
    667: function (t, e, n) {
      "use strict";
      (function (e, r) {
        function i(t) {
          var e = this;
          ((this.next = null),
            (this.entry = null),
            (this.finish = function () {
              V(e, t);
            }));
        }
        var o;
        ((t.exports = x), (x.WritableState = A));
        var s = { deprecate: n(238) },
          a = n(664),
          h = n(2).Buffer,
          u =
            ("undefined" !== typeof e
              ? e
              : "undefined" !== typeof window
                ? window
                : "undefined" !== typeof self
                  ? self
                  : {}
            ).Uint8Array || function () {};
        function c(t) {
          return h.from(t);
        }
        function l(t) {
          return h.isBuffer(t) || t instanceof u;
        }
        var f,
          d = n(665),
          p = n(666),
          m = p.getHighWaterMark,
          y = n(121).codes,
          v = y.ERR_INVALID_ARG_TYPE,
          g = y.ERR_METHOD_NOT_IMPLEMENTED,
          b = y.ERR_MULTIPLE_CALLBACK,
          w = y.ERR_STREAM_CANNOT_PIPE,
          _ = y.ERR_STREAM_DESTROYED,
          M = y.ERR_STREAM_NULL_VALUES,
          k = y.ERR_STREAM_WRITE_AFTER_END,
          C = y.ERR_UNKNOWN_ENCODING,
          E = d.errorOrDestroy;
        function S() {}
        function A(t, e, r) {
          ((o = o || n(122)),
            (t = t || {}),
            "boolean" !== typeof r && (r = e instanceof o),
            (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = m(this, t, "writableHighWaterMark", r)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1));
          var s = !1 === t.decodeStrings;
          ((this.decodeStrings = !s),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              j(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this)));
        }
        function x(t) {
          o = o || n(122);
          var e = this instanceof o;
          if (!e && !f.call(x, this)) return new x(t);
          ((this._writableState = new A(t, this, e)),
            (this.writable = !0),
            t &&
              ("function" === typeof t.write && (this._write = t.write),
              "function" === typeof t.writev && (this._writev = t.writev),
              "function" === typeof t.destroy && (this._destroy = t.destroy),
              "function" === typeof t.final && (this._final = t.final)),
            a.call(this));
        }
        function R(t, e) {
          var n = new k();
          (E(t, n), r.nextTick(e, n));
        }
        function O(t, e, n, i) {
          var o;
          return (
            null === n
              ? (o = new M())
              : "string" === typeof n ||
                e.objectMode ||
                (o = new v("chunk", ["string", "Buffer"], n)),
            !o || (E(t, o), r.nextTick(i, o), !1)
          );
        }
        function T(t, e, n) {
          return (
            t.objectMode ||
              !1 === t.decodeStrings ||
              "string" !== typeof e ||
              (e = h.from(e, n)),
            e
          );
        }
        function B(t, e, n, r, i, o) {
          if (!n) {
            var s = T(e, r, i);
            r !== s && ((n = !0), (i = "buffer"), (r = s));
          }
          var a = e.objectMode ? 1 : r.length;
          e.length += a;
          var h = e.length < e.highWaterMark;
          if ((h || (e.needDrain = !0), e.writing || e.corked)) {
            var u = e.lastBufferedRequest;
            ((e.lastBufferedRequest = {
              chunk: r,
              encoding: i,
              isBuf: n,
              callback: o,
              next: null,
            }),
              u
                ? (u.next = e.lastBufferedRequest)
                : (e.bufferedRequest = e.lastBufferedRequest),
              (e.bufferedRequestCount += 1));
          } else F(t, e, !1, a, r, i, o);
          return h;
        }
        function F(t, e, n, r, i, o, s) {
          ((e.writelen = r),
            (e.writecb = s),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new _("write"))
              : n
                ? t._writev(i, e.onwrite)
                : t._write(i, o, e.onwrite),
            (e.sync = !1));
        }
        function N(t, e, n, i, o) {
          (--e.pendingcb,
            n
              ? (r.nextTick(o, i),
                r.nextTick(H, t, e),
                (t._writableState.errorEmitted = !0),
                E(t, i))
              : (o(i), (t._writableState.errorEmitted = !0), E(t, i), H(t, e)));
        }
        function L(t) {
          ((t.writing = !1),
            (t.writecb = null),
            (t.length -= t.writelen),
            (t.writelen = 0));
        }
        function j(t, e) {
          var n = t._writableState,
            i = n.sync,
            o = n.writecb;
          if ("function" !== typeof o) throw new b();
          if ((L(n), e)) N(t, n, i, e, o);
          else {
            var s = q(n) || t.destroyed;
            (s ||
              n.corked ||
              n.bufferProcessing ||
              !n.bufferedRequest ||
              D(t, n),
              i ? r.nextTick(I, t, n, s, o) : I(t, n, s, o));
          }
        }
        function I(t, e, n, r) {
          (n || P(t, e), e.pendingcb--, r(), H(t, e));
        }
        function P(t, e) {
          0 === e.length &&
            e.needDrain &&
            ((e.needDrain = !1), t.emit("drain"));
        }
        function D(t, e) {
          e.bufferProcessing = !0;
          var n = e.bufferedRequest;
          if (t._writev && n && n.next) {
            var r = e.bufferedRequestCount,
              o = new Array(r),
              s = e.corkedRequestsFree;
            s.entry = n;
            var a = 0,
              h = !0;
            while (n) ((o[a] = n), n.isBuf || (h = !1), (n = n.next), (a += 1));
            ((o.allBuffers = h),
              F(t, e, !0, e.length, o, "", s.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              s.next
                ? ((e.corkedRequestsFree = s.next), (s.next = null))
                : (e.corkedRequestsFree = new i(e)),
              (e.bufferedRequestCount = 0));
          } else {
            while (n) {
              var u = n.chunk,
                c = n.encoding,
                l = n.callback,
                f = e.objectMode ? 1 : u.length;
              if (
                (F(t, e, !1, f, u, c, l),
                (n = n.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === n && (e.lastBufferedRequest = null);
          }
          ((e.bufferedRequest = n), (e.bufferProcessing = !1));
        }
        function q(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function U(t, e) {
          t._final(function (n) {
            (e.pendingcb--,
              n && E(t, n),
              (e.prefinished = !0),
              t.emit("prefinish"),
              H(t, e));
          });
        }
        function z(t, e) {
          e.prefinished ||
            e.finalCalled ||
            ("function" !== typeof t._final || e.destroyed
              ? ((e.prefinished = !0), t.emit("prefinish"))
              : (e.pendingcb++, (e.finalCalled = !0), r.nextTick(U, t, e)));
        }
        function H(t, e) {
          var n = q(e);
          if (
            n &&
            (z(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit("finish"), e.autoDestroy))
          ) {
            var r = t._readableState;
            (!r || (r.autoDestroy && r.endEmitted)) && t.destroy();
          }
          return n;
        }
        function W(t, e, n) {
          ((e.ending = !0),
            H(t, e),
            n && (e.finished ? r.nextTick(n) : t.once("finish", n)),
            (e.ended = !0),
            (t.writable = !1));
        }
        function V(t, e, n) {
          var r = t.entry;
          t.entry = null;
          while (r) {
            var i = r.callback;
            (e.pendingcb--, i(n), (r = r.next));
          }
          e.corkedRequestsFree.next = t;
        }
        (n(16)(x, a),
          (A.prototype.getBuffer = function () {
            var t = this.bufferedRequest,
              e = [];
            while (t) (e.push(t), (t = t.next));
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(A.prototype, "buffer", {
                get: s.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003",
                ),
              });
            } catch (t) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((f = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(x, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!f.call(this, t) ||
                    (this === x && t && t._writableState instanceof A)
                  );
                },
              }))
            : (f = function (t) {
                return t instanceof this;
              }),
          (x.prototype.pipe = function () {
            E(this, new w());
          }),
          (x.prototype.write = function (t, e, n) {
            var r = this._writableState,
              i = !1,
              o = !r.objectMode && l(t);
            return (
              o && !h.isBuffer(t) && (t = c(t)),
              "function" === typeof e && ((n = e), (e = null)),
              o ? (e = "buffer") : e || (e = r.defaultEncoding),
              "function" !== typeof n && (n = S),
              r.ending
                ? R(this, n)
                : (o || O(this, r, t, n)) &&
                  (r.pendingcb++, (i = B(this, r, o, t, e, n))),
              i
            );
          }),
          (x.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (x.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                D(this, t));
          }),
          (x.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" === typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new C(t);
            return ((this._writableState.defaultEncoding = t), this);
          }),
          Object.defineProperty(x.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(x.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (x.prototype._write = function (t, e, n) {
            n(new g("_write()"));
          }),
          (x.prototype._writev = null),
          (x.prototype.end = function (t, e, n) {
            var r = this._writableState;
            return (
              "function" === typeof t
                ? ((n = t), (t = null), (e = null))
                : "function" === typeof e && ((n = e), (e = null)),
              null !== t && void 0 !== t && this.write(t, e),
              r.corked && ((r.corked = 1), this.uncork()),
              r.ending || W(this, r, n),
              this
            );
          }),
          Object.defineProperty(x.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(x.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (x.prototype.destroy = d.destroy),
          (x.prototype._undestroy = d.undestroy),
          (x.prototype._destroy = function (t, e) {
            e(t);
          }));
      }).call(this, n(13), n(18));
    },
    668: function (t, e, n) {
      "use strict";
      t.exports = c;
      var r = n(121).codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        s = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = r.ERR_TRANSFORM_WITH_LENGTH_0,
        h = n(122);
      function u(t, e) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new o());
        ((n.writechunk = null),
          (n.writecb = null),
          null != e && this.push(e),
          r(t));
        var i = this._readableState;
        ((i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark));
      }
      function c(t) {
        if (!(this instanceof c)) return new c(t);
        (h.call(this, t),
          (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" === typeof t.transform &&
              (this._transform = t.transform),
            "function" === typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", l));
      }
      function l() {
        var t = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? f(this, null, null)
          : this._flush(function (e, n) {
              f(t, e, n);
            });
      }
      function f(t, e, n) {
        if (e) return t.emit("error", e);
        if ((null != n && t.push(n), t._writableState.length)) throw new a();
        if (t._transformState.transforming) throw new s();
        return t.push(null);
      }
      (n(16)(c, h),
        (c.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            h.prototype.push.call(this, t, e)
          );
        }),
        (c.prototype._transform = function (t, e, n) {
          n(new i("_transform()"));
        }),
        (c.prototype._write = function (t, e, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = t),
            (r.writeencoding = e),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (c.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (c.prototype._destroy = function (t, e) {
          h.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        }));
    },
    669: function (t, e, n) {
      var r = n(16),
        i = n(123),
        o = n(46).Buffer,
        s = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        a = new Array(64);
      function h() {
        (this.init(), (this._w = a), i.call(this, 64, 56));
      }
      function u(t, e, n) {
        return n ^ (t & (e ^ n));
      }
      function c(t, e, n) {
        return (t & e) | (n & (t | e));
      }
      function l(t) {
        return (
          ((t >>> 2) | (t << 30)) ^
          ((t >>> 13) | (t << 19)) ^
          ((t >>> 22) | (t << 10))
        );
      }
      function f(t) {
        return (
          ((t >>> 6) | (t << 26)) ^
          ((t >>> 11) | (t << 21)) ^
          ((t >>> 25) | (t << 7))
        );
      }
      function d(t) {
        return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
      }
      function p(t) {
        return ((t >>> 17) | (t << 15)) ^ ((t >>> 19) | (t << 13)) ^ (t >>> 10);
      }
      (r(h, i),
        (h.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (h.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              a = 0 | this._e,
              h = 0 | this._f,
              m = 0 | this._g,
              y = 0 | this._h,
              v = 0;
            v < 16;
            ++v
          )
            e[v] = t.readInt32BE(4 * v);
          for (; v < 64; ++v)
            e[v] = (p(e[v - 2]) + e[v - 7] + d(e[v - 15]) + e[v - 16]) | 0;
          for (var g = 0; g < 64; ++g) {
            var b = (y + f(a) + u(a, h, m) + s[g] + e[g]) | 0,
              w = (l(n) + c(n, r, i)) | 0;
            ((y = m),
              (m = h),
              (h = a),
              (a = (o + b) | 0),
              (o = i),
              (i = r),
              (r = n),
              (n = (b + w) | 0));
          }
          ((this._a = (n + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (a + this._e) | 0),
            (this._f = (h + this._f) | 0),
            (this._g = (m + this._g) | 0),
            (this._h = (y + this._h) | 0));
        }),
        (h.prototype._hash = function () {
          var t = o.allocUnsafe(32);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          );
        }),
        (t.exports = h));
    },
    670: function (t, e, n) {
      var r = n(16),
        i = n(123),
        o = n(46).Buffer,
        s = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        a = new Array(160);
      function h() {
        (this.init(), (this._w = a), i.call(this, 128, 112));
      }
      function u(t, e, n) {
        return n ^ (t & (e ^ n));
      }
      function c(t, e, n) {
        return (t & e) | (n & (t | e));
      }
      function l(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function f(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        );
      }
      function d(t, e) {
        return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7);
      }
      function p(t, e) {
        return (
          ((t >>> 1) | (e << 31)) ^
          ((t >>> 8) | (e << 24)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function m(t, e) {
        return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6);
      }
      function y(t, e) {
        return (
          ((t >>> 19) | (e << 13)) ^
          ((e >>> 29) | (t << 3)) ^
          ((t >>> 6) | (e << 26))
        );
      }
      function v(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0;
      }
      (r(h, i),
        (h.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (h.prototype._update = function (t) {
          for (
            var e = this._w,
              n = 0 | this._ah,
              r = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              a = 0 | this._eh,
              h = 0 | this._fh,
              g = 0 | this._gh,
              b = 0 | this._hh,
              w = 0 | this._al,
              _ = 0 | this._bl,
              M = 0 | this._cl,
              k = 0 | this._dl,
              C = 0 | this._el,
              E = 0 | this._fl,
              S = 0 | this._gl,
              A = 0 | this._hl,
              x = 0;
            x < 32;
            x += 2
          )
            ((e[x] = t.readInt32BE(4 * x)),
              (e[x + 1] = t.readInt32BE(4 * x + 4)));
          for (; x < 160; x += 2) {
            var R = e[x - 30],
              O = e[x - 30 + 1],
              T = d(R, O),
              B = p(O, R);
            ((R = e[x - 4]), (O = e[x - 4 + 1]));
            var F = m(R, O),
              N = y(O, R),
              L = e[x - 14],
              j = e[x - 14 + 1],
              I = e[x - 32],
              P = e[x - 32 + 1],
              D = (B + j) | 0,
              q = (T + L + v(D, B)) | 0;
            ((D = (D + N) | 0),
              (q = (q + F + v(D, N)) | 0),
              (D = (D + P) | 0),
              (q = (q + I + v(D, P)) | 0),
              (e[x] = q),
              (e[x + 1] = D));
          }
          for (var U = 0; U < 160; U += 2) {
            ((q = e[U]), (D = e[U + 1]));
            var z = c(n, r, i),
              H = c(w, _, M),
              W = l(n, w),
              V = l(w, n),
              Z = f(a, C),
              K = f(C, a),
              Y = s[U],
              $ = s[U + 1],
              G = u(a, h, g),
              J = u(C, E, S),
              X = (A + K) | 0,
              Q = (b + Z + v(X, A)) | 0;
            ((X = (X + J) | 0),
              (Q = (Q + G + v(X, J)) | 0),
              (X = (X + $) | 0),
              (Q = (Q + Y + v(X, $)) | 0),
              (X = (X + D) | 0),
              (Q = (Q + q + v(X, D)) | 0));
            var tt = (V + H) | 0,
              et = (W + z + v(tt, V)) | 0;
            ((b = g),
              (A = S),
              (g = h),
              (S = E),
              (h = a),
              (E = C),
              (C = (k + X) | 0),
              (a = (o + Q + v(C, k)) | 0),
              (o = i),
              (k = M),
              (i = r),
              (M = _),
              (r = n),
              (_ = w),
              (w = (X + tt) | 0),
              (n = (Q + et + v(w, X)) | 0));
          }
          ((this._al = (this._al + w) | 0),
            (this._bl = (this._bl + _) | 0),
            (this._cl = (this._cl + M) | 0),
            (this._dl = (this._dl + k) | 0),
            (this._el = (this._el + C) | 0),
            (this._fl = (this._fl + E) | 0),
            (this._gl = (this._gl + S) | 0),
            (this._hl = (this._hl + A) | 0),
            (this._ah = (this._ah + n + v(this._al, w)) | 0),
            (this._bh = (this._bh + r + v(this._bl, _)) | 0),
            (this._ch = (this._ch + i + v(this._cl, M)) | 0),
            (this._dh = (this._dh + o + v(this._dl, k)) | 0),
            (this._eh = (this._eh + a + v(this._el, C)) | 0),
            (this._fh = (this._fh + h + v(this._fl, E)) | 0),
            (this._gh = (this._gh + g + v(this._gl, S)) | 0),
            (this._hh = (this._hh + b + v(this._hl, A)) | 0));
        }),
        (h.prototype._hash = function () {
          var t = o.allocUnsafe(64);
          function e(e, n, r) {
            (t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4));
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          );
        }),
        (t.exports = h));
    },
    671: function (t, e, n) {
      (function (t) {
        ((e.fetch = a(t.fetch) && a(t.ReadableStream)),
          (e.writableStream = a(t.WritableStream)),
          (e.abortController = a(t.AbortController)),
          (e.blobConstructor = !1));
        try {
          (new Blob([new ArrayBuffer(1)]), (e.blobConstructor = !0));
        } catch (h) {}
        var n;
        function r() {
          if (void 0 !== n) return n;
          if (t.XMLHttpRequest) {
            n = new t.XMLHttpRequest();
            try {
              n.open("GET", t.XDomainRequest ? "/" : "https://example.com");
            } catch (h) {
              n = null;
            }
          } else n = null;
          return n;
        }
        function i(t) {
          var e = r();
          if (!e) return !1;
          try {
            return ((e.responseType = t), e.responseType === t);
          } catch (h) {}
          return !1;
        }
        var o = "undefined" !== typeof t.ArrayBuffer,
          s = o && a(t.ArrayBuffer.prototype.slice);
        function a(t) {
          return "function" === typeof t;
        }
        ((e.arraybuffer = e.fetch || (o && i("arraybuffer"))),
          (e.msstream = !e.fetch && s && i("ms-stream")),
          (e.mozchunkedarraybuffer =
            !e.fetch && o && i("moz-chunked-arraybuffer")),
          (e.overrideMimeType = e.fetch || (!!r() && a(r().overrideMimeType))),
          (e.vbArray = a(t.VBArray)),
          (n = null));
      }).call(this, n(13));
    },
    672: function (t, e, n) {
      (function (t, r, i) {
        var o = n(671),
          s = n(16),
          a = n(131),
          h = (e.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          }),
          u = (e.IncomingMessage = function (e, n, s, h) {
            var u = this;
            if (
              (a.Readable.call(u),
              (u._mode = s),
              (u.headers = {}),
              (u.rawHeaders = []),
              (u.trailers = {}),
              (u.rawTrailers = []),
              u.on("end", function () {
                t.nextTick(function () {
                  u.emit("close");
                });
              }),
              "fetch" === s)
            ) {
              if (
                ((u._fetchResponse = n),
                (u.url = n.url),
                (u.statusCode = n.status),
                (u.statusMessage = n.statusText),
                n.headers.forEach(function (t, e) {
                  ((u.headers[e.toLowerCase()] = t), u.rawHeaders.push(e, t));
                }),
                o.writableStream)
              ) {
                var c = new WritableStream({
                  write: function (t) {
                    return new Promise(function (e, n) {
                      u._destroyed
                        ? n()
                        : u.push(new r(t))
                          ? e()
                          : (u._resumeFetch = e);
                    });
                  },
                  close: function () {
                    (i.clearTimeout(h), u._destroyed || u.push(null));
                  },
                  abort: function (t) {
                    u._destroyed || u.emit("error", t);
                  },
                });
                try {
                  return void n.body.pipeTo(c).catch(function (t) {
                    (i.clearTimeout(h), u._destroyed || u.emit("error", t));
                  });
                } catch (y) {}
              }
              var l = n.body.getReader();
              function f() {
                l.read()
                  .then(function (t) {
                    if (!u._destroyed) {
                      if (t.done) return (i.clearTimeout(h), void u.push(null));
                      (u.push(new r(t.value)), f());
                    }
                  })
                  .catch(function (t) {
                    (i.clearTimeout(h), u._destroyed || u.emit("error", t));
                  });
              }
              f();
            } else {
              ((u._xhr = e),
                (u._pos = 0),
                (u.url = e.responseURL),
                (u.statusCode = e.status),
                (u.statusMessage = e.statusText));
              var d = e.getAllResponseHeaders().split(/\r?\n/);
              if (
                (d.forEach(function (t) {
                  var e = t.match(/^([^:]+):\s*(.*)/);
                  if (e) {
                    var n = e[1].toLowerCase();
                    ("set-cookie" === n
                      ? (void 0 === u.headers[n] && (u.headers[n] = []),
                        u.headers[n].push(e[2]))
                      : void 0 !== u.headers[n]
                        ? (u.headers[n] += ", " + e[2])
                        : (u.headers[n] = e[2]),
                      u.rawHeaders.push(e[1], e[2]));
                  }
                }),
                (u._charset = "x-user-defined"),
                !o.overrideMimeType)
              ) {
                var p = u.rawHeaders["mime-type"];
                if (p) {
                  var m = p.match(/;\s*charset=([^;])(;|$)/);
                  m && (u._charset = m[1].toLowerCase());
                }
                u._charset || (u._charset = "utf-8");
              }
            }
          });
        (s(u, a.Readable),
          (u.prototype._read = function () {
            var t = this,
              e = t._resumeFetch;
            e && ((t._resumeFetch = null), e());
          }),
          (u.prototype._onXHRProgress = function () {
            var t = this,
              e = t._xhr,
              n = null;
            switch (t._mode) {
              case "text:vbarray":
                if (e.readyState !== h.DONE) break;
                try {
                  n = new i.VBArray(e.responseBody).toArray();
                } catch (c) {}
                if (null !== n) {
                  t.push(new r(n));
                  break;
                }
              case "text":
                try {
                  n = e.responseText;
                } catch (c) {
                  t._mode = "text:vbarray";
                  break;
                }
                if (n.length > t._pos) {
                  var o = n.substr(t._pos);
                  if ("x-user-defined" === t._charset) {
                    for (var s = new r(o.length), a = 0; a < o.length; a++)
                      s[a] = 255 & o.charCodeAt(a);
                    t.push(s);
                  } else t.push(o, t._charset);
                  t._pos = n.length;
                }
                break;
              case "arraybuffer":
                if (e.readyState !== h.DONE || !e.response) break;
                ((n = e.response), t.push(new r(new Uint8Array(n))));
                break;
              case "moz-chunked-arraybuffer":
                if (((n = e.response), e.readyState !== h.LOADING || !n)) break;
                t.push(new r(new Uint8Array(n)));
                break;
              case "ms-stream":
                if (((n = e.response), e.readyState !== h.LOADING)) break;
                var u = new i.MSStreamReader();
                ((u.onprogress = function () {
                  u.result.byteLength > t._pos &&
                    (t.push(new r(new Uint8Array(u.result.slice(t._pos)))),
                    (t._pos = u.result.byteLength));
                }),
                  (u.onload = function () {
                    t.push(null);
                  }),
                  u.readAsArrayBuffer(n));
                break;
            }
            t._xhr.readyState === h.DONE &&
              "ms-stream" !== t._mode &&
              t.push(null);
          }));
      }).call(this, n(18), n(2).Buffer, n(13));
    },
    673: function (t, e, n) {
      "use strict";
      var r = n(243),
        i = n(242),
        o = n(191),
        s = n(104),
        a = r("%Map%", !0),
        h = i("Map.prototype.get", !0),
        u = i("Map.prototype.set", !0),
        c = i("Map.prototype.has", !0),
        l = i("Map.prototype.delete", !0),
        f = i("Map.prototype.size", !0);
      t.exports =
        !!a &&
        function () {
          var t,
            e = {
              assert: function (t) {
                if (!e.has(t))
                  throw new s("Side channel does not contain " + o(t));
              },
              delete: function (e) {
                if (t) {
                  var n = l(t, e);
                  return (0 === f(t) && (t = void 0), n);
                }
                return !1;
              },
              get: function (e) {
                if (t) return h(t, e);
              },
              has: function (e) {
                return !!t && c(t, e);
              },
              set: function (e, n) {
                (t || (t = new a()), u(t, e, n));
              },
            };
          return e;
        };
    },
    814: function (t, e, n) {
      e = t.exports = function (t) {
        t = t.toLowerCase();
        var n = e[t];
        if (!n)
          throw new Error(t + " is not supported (we accept pull requests)");
        return new n();
      };
      ((e.sha = n(1961)),
        (e.sha1 = n(1962)),
        (e.sha224 = n(1963)),
        (e.sha256 = n(669)),
        (e.sha384 = n(1964)),
        (e.sha512 = n(670)));
    },
    819: function (t, e, n) {
      "use strict";
      var r = n(2).Buffer,
        i = n(16),
        o = n(1952),
        s = new Array(16),
        a = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        h = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        u = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        c = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ],
        l = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        f = [1352829926, 1548603684, 1836072691, 2053994217, 0];
      function d() {
        (o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520));
      }
      function p(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function m(t, e, n, r, i, o, s, a) {
        return (p((t + (e ^ n ^ r) + o + s) | 0, a) + i) | 0;
      }
      function y(t, e, n, r, i, o, s, a) {
        return (p((t + ((e & n) | (~e & r)) + o + s) | 0, a) + i) | 0;
      }
      function v(t, e, n, r, i, o, s, a) {
        return (p((t + ((e | ~n) ^ r) + o + s) | 0, a) + i) | 0;
      }
      function g(t, e, n, r, i, o, s, a) {
        return (p((t + ((e & r) | (n & ~r)) + o + s) | 0, a) + i) | 0;
      }
      function b(t, e, n, r, i, o, s, a) {
        return (p((t + (e ^ (n | ~r)) + o + s) | 0, a) + i) | 0;
      }
      (i(d, o),
        (d.prototype._update = function () {
          for (var t = s, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          for (
            var n = 0 | this._a,
              r = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              d = 0 | this._e,
              w = 0 | this._a,
              _ = 0 | this._b,
              M = 0 | this._c,
              k = 0 | this._d,
              C = 0 | this._e,
              E = 0;
            E < 80;
            E += 1
          ) {
            var S, A;
            (E < 16
              ? ((S = m(n, r, i, o, d, t[a[E]], l[0], u[E])),
                (A = b(w, _, M, k, C, t[h[E]], f[0], c[E])))
              : E < 32
                ? ((S = y(n, r, i, o, d, t[a[E]], l[1], u[E])),
                  (A = g(w, _, M, k, C, t[h[E]], f[1], c[E])))
                : E < 48
                  ? ((S = v(n, r, i, o, d, t[a[E]], l[2], u[E])),
                    (A = v(w, _, M, k, C, t[h[E]], f[2], c[E])))
                  : E < 64
                    ? ((S = g(n, r, i, o, d, t[a[E]], l[3], u[E])),
                      (A = y(w, _, M, k, C, t[h[E]], f[3], c[E])))
                    : ((S = b(n, r, i, o, d, t[a[E]], l[4], u[E])),
                      (A = m(w, _, M, k, C, t[h[E]], f[4], c[E]))),
              (n = d),
              (d = o),
              (o = p(i, 10)),
              (i = r),
              (r = S),
              (w = C),
              (C = k),
              (k = p(M, 10)),
              (M = _),
              (_ = A));
          }
          var x = (this._b + i + k) | 0;
          ((this._b = (this._c + o + C) | 0),
            (this._c = (this._d + d + w) | 0),
            (this._d = (this._e + n + _) | 0),
            (this._e = (this._a + r + M) | 0),
            (this._a = x));
        }),
        (d.prototype._digest = function () {
          ((this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update());
          var t = r.alloc ? r.alloc(20) : new r(20);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
          );
        }),
        (t.exports = d));
    },
    82: function (t, e, n) {
      "use strict";
      var r = n(46).Buffer,
        i =
          r.isEncoding ||
          function (t) {
            switch (((t = "" + t), t && t.toLowerCase())) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        if (!t) return "utf8";
        var e;
        while (1)
          switch (t) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return t;
            default:
              if (e) return;
              ((t = ("" + t).toLowerCase()), (e = !0));
          }
      }
      function s(t) {
        var e = o(t);
        if ("string" !== typeof e && (r.isEncoding === i || !i(t)))
          throw new Error("Unknown encoding: " + t);
        return e || t;
      }
      function a(t) {
        var e;
        switch (((this.encoding = s(t)), this.encoding)) {
          case "utf16le":
            ((this.text = p), (this.end = m), (e = 4));
            break;
          case "utf8":
            ((this.fillLast = l), (e = 4));
            break;
          case "base64":
            ((this.text = y), (this.end = v), (e = 3));
            break;
          default:
            return ((this.write = g), void (this.end = b));
        }
        ((this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = r.allocUnsafe(e)));
      }
      function h(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
            ? 2
            : t >> 4 === 14
              ? 3
              : t >> 3 === 30
                ? 4
                : t >> 6 === 2
                  ? -1
                  : -2;
      }
      function u(t, e, n) {
        var r = e.length - 1;
        if (r < n) return 0;
        var i = h(e[r]);
        return i >= 0
          ? (i > 0 && (t.lastNeed = i - 1), i)
          : --r < n || -2 === i
            ? 0
            : ((i = h(e[r])),
              i >= 0
                ? (i > 0 && (t.lastNeed = i - 2), i)
                : --r < n || -2 === i
                  ? 0
                  : ((i = h(e[r])),
                    i >= 0
                      ? (i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i)
                      : 0));
      }
      function c(t, e, n) {
        if (128 !== (192 & e[0])) return ((t.lastNeed = 0), "�");
        if (t.lastNeed > 1 && e.length > 1) {
          if (128 !== (192 & e[1])) return ((t.lastNeed = 1), "�");
          if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
            return ((t.lastNeed = 2), "�");
        }
      }
      function l(t) {
        var e = this.lastTotal - this.lastNeed,
          n = c(this, t, e);
        return void 0 !== n
          ? n
          : this.lastNeed <= t.length
            ? (t.copy(this.lastChar, e, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (t.copy(this.lastChar, e, 0, t.length),
              void (this.lastNeed -= t.length));
      }
      function f(t, e) {
        var n = u(this, t, e);
        if (!this.lastNeed) return t.toString("utf8", e);
        this.lastTotal = n;
        var r = t.length - (n - this.lastNeed);
        return (t.copy(this.lastChar, 0, r), t.toString("utf8", e, r));
      }
      function d(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + "�" : e;
      }
      function p(t, e) {
        if ((t.length - e) % 2 === 0) {
          var n = t.toString("utf16le", e);
          if (n) {
            var r = n.charCodeAt(n.length - 1);
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                n.slice(0, -1)
              );
          }
          return n;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function m(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, n);
        }
        return e;
      }
      function y(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - n));
      }
      function v(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function g(t) {
        return t.toString(this.encoding);
      }
      function b(t) {
        return t && t.length ? this.write(t) : "";
      }
      ((e.StringDecoder = a),
        (a.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, n;
          if (this.lastNeed) {
            if (((e = this.fillLast(t)), void 0 === e)) return "";
            ((n = this.lastNeed), (this.lastNeed = 0));
          } else n = 0;
          return n < t.length
            ? e
              ? e + this.text(t, n)
              : this.text(t, n)
            : e || "";
        }),
        (a.prototype.end = d),
        (a.prototype.text = f),
        (a.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed,
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          (t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length));
        }));
    },
    843: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return e <= t && t <= n;
      }
      function i(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError("Could not convert argument to dictionary");
      }
      function o(t) {
        var e = String(t),
          n = e.length,
          r = 0,
          i = [];
        while (r < n) {
          var o = e.charCodeAt(r);
          if (o < 55296 || o > 57343) i.push(o);
          else if (56320 <= o && o <= 57343) i.push(65533);
          else if (55296 <= o && o <= 56319)
            if (r === n - 1) i.push(65533);
            else {
              var s = t.charCodeAt(r + 1);
              if (56320 <= s && s <= 57343) {
                var a = 1023 & o,
                  h = 1023 & s;
                (i.push(65536 + (a << 10) + h), (r += 1));
              } else i.push(65533);
            }
          r += 1;
        }
        return i;
      }
      function s(t) {
        for (var e = "", n = 0; n < t.length; ++n) {
          var r = t[n];
          r <= 65535
            ? (e += String.fromCharCode(r))
            : ((r -= 65536),
              (e += String.fromCharCode(
                55296 + (r >> 10),
                56320 + (1023 & r),
              )));
        }
        return e;
      }
      var a = -1;
      function h(t) {
        this.tokens = [].slice.call(t);
      }
      h.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : a;
        },
        prepend: function (t) {
          if (Array.isArray(t)) {
            var e = t;
            while (e.length) this.tokens.unshift(e.pop());
          } else this.tokens.unshift(t);
        },
        push: function (t) {
          if (Array.isArray(t)) {
            var e = t;
            while (e.length) this.tokens.push(e.shift());
          } else this.tokens.push(t);
        },
      };
      var u = -1;
      function c(t, e) {
        if (t) throw TypeError("Decoder error");
        return e || 65533;
      }
      var l = "utf-8";
      function f(t, e) {
        if (!(this instanceof f)) return new f(t, e);
        if (((t = void 0 !== t ? String(t).toLowerCase() : l), t !== l))
          throw new Error("Encoding not supported. Only utf-8 is supported");
        ((e = i(e)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = Boolean(e["fatal"])),
          (this._ignoreBOM = Boolean(e["ignoreBOM"])),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM }));
      }
      function d(t, e) {
        if (!(this instanceof d)) return new d(t, e);
        if (((t = void 0 !== t ? String(t).toLowerCase() : l), t !== l))
          throw new Error("Encoding not supported. Only utf-8 is supported");
        ((e = i(e)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: Boolean(e["fatal"]) }),
          Object.defineProperty(this, "encoding", { value: "utf-8" }));
      }
      function p(t) {
        var e = t.fatal,
          n = 0,
          i = 0,
          o = 0,
          s = 128,
          h = 191;
        this.handler = function (t, l) {
          if (l === a && 0 !== o) return ((o = 0), c(e));
          if (l === a) return u;
          if (0 === o) {
            if (r(l, 0, 127)) return l;
            if (r(l, 194, 223)) ((o = 1), (n = l - 192));
            else if (r(l, 224, 239))
              (224 === l && (s = 160),
                237 === l && (h = 159),
                (o = 2),
                (n = l - 224));
            else {
              if (!r(l, 240, 244)) return c(e);
              (240 === l && (s = 144),
                244 === l && (h = 143),
                (o = 3),
                (n = l - 240));
            }
            return ((n <<= 6 * o), null);
          }
          if (!r(l, s, h))
            return ((n = o = i = 0), (s = 128), (h = 191), t.prepend(l), c(e));
          if (
            ((s = 128),
            (h = 191),
            (i += 1),
            (n += (l - 128) << (6 * (o - i))),
            i !== o)
          )
            return null;
          var f = n;
          return ((n = o = i = 0), f);
        };
      }
      function m(t) {
        t.fatal;
        this.handler = function (t, e) {
          if (e === a) return u;
          if (r(e, 0, 127)) return e;
          var n, i;
          r(e, 128, 2047)
            ? ((n = 1), (i = 192))
            : r(e, 2048, 65535)
              ? ((n = 2), (i = 224))
              : r(e, 65536, 1114111) && ((n = 3), (i = 240));
          var o = [(e >> (6 * n)) + i];
          while (n > 0) {
            var s = e >> (6 * (n - 1));
            (o.push(128 | (63 & s)), (n -= 1));
          }
          return o;
        };
      }
      ((f.prototype = {
        decode: function (t, e) {
          var n;
          ((n =
            "object" === typeof t && t instanceof ArrayBuffer
              ? new Uint8Array(t)
              : "object" === typeof t &&
                  "buffer" in t &&
                  t.buffer instanceof ArrayBuffer
                ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                : new Uint8Array(0)),
            (e = i(e)),
            this._streaming ||
              ((this._decoder = new p({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = Boolean(e["stream"])));
          var r,
            o = new h(n),
            a = [];
          while (!o.endOfStream()) {
            if (((r = this._decoder.handler(o, o.read())), r === u)) break;
            null !== r && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));
          }
          if (!this._streaming) {
            do {
              if (((r = this._decoder.handler(o, o.read())), r === u)) break;
              null !== r && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));
            } while (!o.endOfStream());
            this._decoder = null;
          }
          return (
            a.length &&
              (-1 === ["utf-8"].indexOf(this.encoding) ||
                this._ignoreBOM ||
                this._BOMseen ||
                (65279 === a[0]
                  ? ((this._BOMseen = !0), a.shift())
                  : (this._BOMseen = !0))),
            s(a)
          );
        },
      }),
        (d.prototype = {
          encode: function (t, e) {
            ((t = t ? String(t) : ""),
              (e = i(e)),
              this._streaming || (this._encoder = new m(this._options)),
              (this._streaming = Boolean(e["stream"])));
            var n,
              r = [],
              s = new h(o(t));
            while (!s.endOfStream()) {
              if (((n = this._encoder.handler(s, s.read())), n === u)) break;
              Array.isArray(n) ? r.push.apply(r, n) : r.push(n);
            }
            if (!this._streaming) {
              while (1) {
                if (((n = this._encoder.handler(s, s.read())), n === u)) break;
                Array.isArray(n) ? r.push.apply(r, n) : r.push(n);
              }
              this._encoder = null;
            }
            return new Uint8Array(r);
          },
        }),
        (e.TextEncoder = d),
        (e.TextDecoder = f));
    },
    844: function (t, e, n) {
      (function (t) {
        var e,
          n,
          r,
          i = String.fromCharCode;
        function o(t) {
          var e,
            n,
            r = [],
            i = 0,
            o = t.length;
          while (i < o)
            ((e = t.charCodeAt(i++)),
              e >= 55296 && e <= 56319 && i < o
                ? ((n = t.charCodeAt(i++)),
                  56320 == (64512 & n)
                    ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                    : (r.push(e), i--))
                : r.push(e));
          return r;
        }
        function s(t) {
          var e,
            n = t.length,
            r = -1,
            o = "";
          while (++r < n)
            ((e = t[r]),
              e > 65535 &&
                ((e -= 65536),
                (o += i(((e >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (o += i(e)));
          return o;
        }
        function a(t) {
          if (t >= 55296 && t <= 57343)
            throw Error(
              "Lone surrogate U+" +
                t.toString(16).toUpperCase() +
                " is not a scalar value",
            );
        }
        function h(t, e) {
          return i(((t >> e) & 63) | 128);
        }
        function u(t) {
          if (0 == (4294967168 & t)) return i(t);
          var e = "";
          return (
            0 == (4294965248 & t)
              ? (e = i(((t >> 6) & 31) | 192))
              : 0 == (4294901760 & t)
                ? (a(t), (e = i(((t >> 12) & 15) | 224)), (e += h(t, 6)))
                : 0 == (4292870144 & t) &&
                  ((e = i(((t >> 18) & 7) | 240)),
                  (e += h(t, 12)),
                  (e += h(t, 6))),
            (e += i((63 & t) | 128)),
            e
          );
        }
        function c(t) {
          var e,
            n = o(t),
            r = n.length,
            i = -1,
            s = "";
          while (++i < r) ((e = n[i]), (s += u(e)));
          return s;
        }
        function l() {
          if (r >= n) throw Error("Invalid byte index");
          var t = 255 & e[r];
          if ((r++, 128 == (192 & t))) return 63 & t;
          throw Error("Invalid continuation byte");
        }
        function f() {
          var t, i, o, s, h;
          if (r > n) throw Error("Invalid byte index");
          if (r == n) return !1;
          if (((t = 255 & e[r]), r++, 0 == (128 & t))) return t;
          if (192 == (224 & t)) {
            if (((i = l()), (h = ((31 & t) << 6) | i), h >= 128)) return h;
            throw Error("Invalid continuation byte");
          }
          if (224 == (240 & t)) {
            if (
              ((i = l()),
              (o = l()),
              (h = ((15 & t) << 12) | (i << 6) | o),
              h >= 2048)
            )
              return (a(h), h);
            throw Error("Invalid continuation byte");
          }
          if (
            240 == (248 & t) &&
            ((i = l()),
            (o = l()),
            (s = l()),
            (h = ((7 & t) << 18) | (i << 12) | (o << 6) | s),
            h >= 65536 && h <= 1114111)
          )
            return h;
          throw Error("Invalid UTF-8 detected");
        }
        function d(t) {
          ((e = o(t)), (n = e.length), (r = 0));
          var i,
            a = [];
          while (!1 !== (i = f())) a.push(i);
          return s(a);
        }
        ((t.version = "3.0.0"), (t.encode = c), (t.decode = d));
      })(e);
    },
    878: function (t, e, n) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getLength = e.decode = e.encode = void 0));
        var i = r(n(1886));
        function o(e) {
          if (Array.isArray(e)) {
            for (var n = [], r = 0; r < e.length; r++) n.push(o(e[r]));
            var i = t.concat(n);
            return t.concat([a(i.length, 192), i]);
          }
          var s = y(e);
          return 1 === s.length && s[0] < 128
            ? s
            : t.concat([a(s.length, 128), s]);
        }
        function s(t, e) {
          if ("0" === t[0] && "0" === t[1])
            throw new Error("invalid RLP: extra zeros");
          return parseInt(t, e);
        }
        function a(e, n) {
          if (e < 56) return t.from([e + n]);
          var r = d(e),
            i = r.length / 2,
            o = d(n + 55 + i);
          return t.from(o + r, "hex");
        }
        function h(e, n) {
          if ((void 0 === n && (n = !1), !e || 0 === e.length))
            return t.from([]);
          var r = y(e),
            i = c(r);
          if (n) return i;
          if (0 !== i.remainder.length) throw new Error("invalid remainder");
          return i.data;
        }
        function u(e) {
          if (!e || 0 === e.length) return t.from([]);
          var n = y(e),
            r = n[0];
          if (r <= 127) return n.length;
          if (r <= 183) return r - 127;
          if (r <= 191) return r - 182;
          if (r <= 247) return r - 191;
          var i = r - 246,
            o = s(n.slice(1, i).toString("hex"), 16);
          return i + o;
        }
        function c(e) {
          var n,
            r,
            i,
            o,
            a,
            h = [],
            u = e[0];
          if (u <= 127) return { data: e.slice(0, 1), remainder: e.slice(1) };
          if (u <= 183) {
            if (
              ((n = u - 127),
              (i = 128 === u ? t.from([]) : e.slice(1, n)),
              2 === n && i[0] < 128)
            )
              throw new Error("invalid rlp encoding: byte must be less 0x80");
            return { data: i, remainder: e.slice(n) };
          }
          if (u <= 191) {
            if (((r = u - 182), e.length - 1 < r))
              throw new Error(
                "invalid RLP: not enough bytes for string length",
              );
            if (((n = s(e.slice(1, r).toString("hex"), 16)), n <= 55))
              throw new Error(
                "invalid RLP: expected string length to be greater than 55",
              );
            if (((i = e.slice(r, n + r)), i.length < n))
              throw new Error("invalid RLP: not enough bytes for string");
            return { data: i, remainder: e.slice(n + r) };
          }
          if (u <= 247) {
            ((n = u - 191), (o = e.slice(1, n)));
            while (o.length) ((a = c(o)), h.push(a.data), (o = a.remainder));
            return { data: h, remainder: e.slice(n) };
          }
          ((r = u - 246), (n = s(e.slice(1, r).toString("hex"), 16)));
          var l = r + n;
          if (l > e.length)
            throw new Error(
              "invalid rlp: total length is larger than the data",
            );
          if (((o = e.slice(r, l)), 0 === o.length))
            throw new Error("invalid rlp, List has a invalid length");
          while (o.length) ((a = c(o)), h.push(a.data), (o = a.remainder));
          return { data: h, remainder: e.slice(l) };
        }
        function l(t) {
          return "0x" === t.slice(0, 2);
        }
        function f(t) {
          return "string" !== typeof t ? t : l(t) ? t.slice(2) : t;
        }
        function d(t) {
          if (t < 0)
            throw new Error("Invalid integer as argument, must be unsigned!");
          var e = t.toString(16);
          return e.length % 2 ? "0" + e : e;
        }
        function p(t) {
          return t.length % 2 ? "0" + t : t;
        }
        function m(e) {
          var n = d(e);
          return t.from(n, "hex");
        }
        function y(e) {
          if (!t.isBuffer(e)) {
            if ("string" === typeof e)
              return l(e) ? t.from(p(f(e)), "hex") : t.from(e);
            if ("number" === typeof e || "bigint" === typeof e)
              return e ? m(e) : t.from([]);
            if (null === e || void 0 === e) return t.from([]);
            if (e instanceof Uint8Array) return t.from(e);
            if (i.default.isBN(e)) return t.from(e.toArray());
            throw new Error("invalid type");
          }
          return e;
        }
        ((e.encode = o), (e.decode = h), (e.getLength = u));
      }).call(this, n(2).Buffer);
    },
  },
]);
