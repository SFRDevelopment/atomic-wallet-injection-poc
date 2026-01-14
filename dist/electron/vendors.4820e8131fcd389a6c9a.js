(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [257, 258],
  {
    3181: function (e, a, r) {
      "use strict";
      function t(e, a) {
        ((e.prototype = Object.create(a.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = a));
      }
      var o = {};
      function i(e, a, r) {
        function i(e, r, t) {
          return "string" === typeof a ? a : a(e, r, t);
        }
        r || (r = Error);
        var n = (function (e) {
          function a(a, r, t) {
            return e.call(this, i(a, r, t)) || this;
          }
          return (t(a, e), a);
        })(r);
        ((n.prototype.name = r.name), (n.prototype.code = e), (o[e] = n));
      }
      function n(e, a) {
        if (Array.isArray(e)) {
          var r = e.length;
          return (
            (e = e.map(function (e) {
              return String(e);
            })),
            r > 2
              ? "one of "
                  .concat(a, " ")
                  .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
              : 2 === r
                ? "one of ".concat(a, " ").concat(e[0], " or ").concat(e[1])
                : "of ".concat(a, " ").concat(e[0])
          );
        }
        return "of ".concat(a, " ").concat(String(e));
      }
      function l(e, a, r) {
        return e.substr(!r || r < 0 ? 0 : +r, a.length) === a;
      }
      function s(e, a, r) {
        return (
          (void 0 === r || r > e.length) && (r = e.length),
          e.substring(r - a.length, r) === a
        );
      }
      function u(e, a, r) {
        return (
          "number" !== typeof r && (r = 0),
          !(r + a.length > e.length) && -1 !== e.indexOf(a, r)
        );
      }
      (i(
        "ERR_INVALID_OPT_VALUE",
        function (e, a) {
          return 'The value "' + a + '" is invalid for option "' + e + '"';
        },
        TypeError,
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (e, a, r) {
            var t, o;
            if (
              ("string" === typeof a && l(a, "not ")
                ? ((t = "must not be"), (a = a.replace(/^not /, "")))
                : (t = "must be"),
              s(e, " argument"))
            )
              o = "The ".concat(e, " ").concat(t, " ").concat(n(a, "type"));
            else {
              var i = u(e, ".") ? "property" : "argument";
              o = 'The "'
                .concat(e, '" ')
                .concat(i, " ")
                .concat(t, " ")
                .concat(n(a, "type"));
            }
            return ((o += ". Received type ".concat(typeof r)), o);
          },
          TypeError,
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
          return "The " + e + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (e) {
          return "Cannot call " + e + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError,
        ),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (e) {
            return "Unknown encoding: " + e;
          },
          TypeError,
        ),
        i(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event",
        ),
        (e.exports.codes = o));
    },
    3182: function (e, a, r) {
      "use strict";
      (function (a) {
        var t =
          Object.keys ||
          function (e) {
            var a = [];
            for (var r in e) a.push(r);
            return a;
          };
        e.exports = u;
        var o = r(4376),
          i = r(4380);
        r(16)(u, o);
        for (var n = t(i.prototype), l = 0; l < n.length; l++) {
          var s = n[l];
          u.prototype[s] || (u.prototype[s] = i.prototype[s]);
        }
        function u(e) {
          if (!(this instanceof u)) return new u(e);
          (o.call(this, e),
            i.call(this, e),
            (this.allowHalfOpen = !0),
            e &&
              (!1 === e.readable && (this.readable = !1),
              !1 === e.writable && (this.writable = !1),
              !1 === e.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", c))));
        }
        function c() {
          this._writableState.ended || a.nextTick(d, this);
        }
        function d(e) {
          e.end();
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
            set: function (e) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = e),
                (this._writableState.destroyed = e));
            },
          }));
      }).call(this, r(18));
    },
    3689: function (e, a, r) {
      "use strict";
      var t = r(3181).codes.ERR_STREAM_PREMATURE_CLOSE;
      function o(e) {
        var a = !1;
        return function () {
          if (!a) {
            a = !0;
            for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
              t[o] = arguments[o];
            e.apply(this, t);
          }
        };
      }
      function i() {}
      function n(e) {
        return e.setHeader && "function" === typeof e.abort;
      }
      function l(e, a, r) {
        if ("function" === typeof a) return l(e, null, a);
        (a || (a = {}), (r = o(r || i)));
        var s = a.readable || (!1 !== a.readable && e.readable),
          u = a.writable || (!1 !== a.writable && e.writable),
          c = function () {
            e.writable || p();
          },
          d = e._writableState && e._writableState.finished,
          p = function () {
            ((u = !1), (d = !0), s || r.call(e));
          },
          f = e._readableState && e._readableState.endEmitted,
          h = function () {
            ((s = !1), (f = !0), u || r.call(e));
          },
          m = function (a) {
            r.call(e, a);
          },
          b = function () {
            var a;
            return s && !f
              ? ((e._readableState && e._readableState.ended) || (a = new t()),
                r.call(e, a))
              : u && !d
                ? ((e._writableState && e._writableState.ended) ||
                    (a = new t()),
                  r.call(e, a))
                : void 0;
          },
          g = function () {
            e.req.on("finish", p);
          };
        return (
          n(e)
            ? (e.on("complete", p),
              e.on("abort", b),
              e.req ? g() : e.on("request", g))
            : u && !e._writableState && (e.on("end", c), e.on("close", c)),
          e.on("end", h),
          e.on("finish", p),
          !1 !== a.error && e.on("error", m),
          e.on("close", b),
          function () {
            (e.removeListener("complete", p),
              e.removeListener("abort", b),
              e.removeListener("request", g),
              e.req && e.req.removeListener("finish", p),
              e.removeListener("end", c),
              e.removeListener("close", c),
              e.removeListener("finish", p),
              e.removeListener("end", h),
              e.removeListener("error", m),
              e.removeListener("close", b));
          }
        );
      }
      e.exports = l;
    },
    4376: function (e, a, r) {
      "use strict";
      (function (a, t) {
        var o;
        ((e.exports = A), (A.ReadableState = k));
        r(52).EventEmitter;
        var i = function (e, a) {
            return e.listeners(a).length;
          },
          n = r(4377),
          l = r(2).Buffer,
          s =
            ("undefined" !== typeof a
              ? a
              : "undefined" !== typeof window
                ? window
                : "undefined" !== typeof self
                  ? self
                  : {}
            ).Uint8Array || function () {};
        function u(e) {
          return l.from(e);
        }
        function c(e) {
          return l.isBuffer(e) || e instanceof s;
        }
        var d,
          p = r(5233);
        d = p && p.debuglog ? p.debuglog("stream") : function () {};
        var f,
          h,
          m,
          b = r(5234),
          g = r(4378),
          v = r(4379),
          y = v.getHighWaterMark,
          w = r(3181).codes,
          _ = w.ERR_INVALID_ARG_TYPE,
          E = w.ERR_STREAM_PUSH_AFTER_EOF,
          S = w.ERR_METHOD_NOT_IMPLEMENTED,
          j = w.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(16)(A, n);
        var x = g.errorOrDestroy,
          R = ["error", "close", "destroy", "pause", "resume"];
        function z(e, a, r) {
          if ("function" === typeof e.prependListener)
            return e.prependListener(a, r);
          e._events && e._events[a]
            ? Array.isArray(e._events[a])
              ? e._events[a].unshift(r)
              : (e._events[a] = [r, e._events[a]])
            : e.on(a, r);
        }
        function k(e, a, t) {
          ((o = o || r(3182)),
            (e = e || {}),
            "boolean" !== typeof t && (t = a instanceof o),
            (this.objectMode = !!e.objectMode),
            t && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            (this.highWaterMark = y(this, e, "readableHighWaterMark", t)),
            (this.buffer = new b()),
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
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (f || (f = r(82).StringDecoder),
              (this.decoder = new f(e.encoding)),
              (this.encoding = e.encoding)));
        }
        function A(e) {
          if (((o = o || r(3182)), !(this instanceof A))) return new A(e);
          var a = this instanceof o;
          ((this._readableState = new k(e, this, a)),
            (this.readable = !0),
            e &&
              ("function" === typeof e.read && (this._read = e.read),
              "function" === typeof e.destroy && (this._destroy = e.destroy)),
            n.call(this));
        }
        function T(e, a, r, t, o) {
          d("readableAddChunk", a);
          var i,
            n = e._readableState;
          if (null === a) ((n.reading = !1), I(e, n));
          else if ((o || (i = P(n, a)), i)) x(e, i);
          else if (n.objectMode || (a && a.length > 0))
            if (
              ("string" === typeof a ||
                n.objectMode ||
                Object.getPrototypeOf(a) === l.prototype ||
                (a = u(a)),
              t)
            )
              n.endEmitted ? x(e, new j()) : M(e, n, a, !0);
            else if (n.ended) x(e, new E());
            else {
              if (n.destroyed) return !1;
              ((n.reading = !1),
                n.decoder && !r
                  ? ((a = n.decoder.write(a)),
                    n.objectMode || 0 !== a.length ? M(e, n, a, !1) : D(e, n))
                  : M(e, n, a, !1));
            }
          else t || ((n.reading = !1), D(e, n));
          return !n.ended && (n.length < n.highWaterMark || 0 === n.length);
        }
        function M(e, a, r, t) {
          (a.flowing && 0 === a.length && !a.sync
            ? ((a.awaitDrain = 0), e.emit("data", r))
            : ((a.length += a.objectMode ? 1 : r.length),
              t ? a.buffer.unshift(r) : a.buffer.push(r),
              a.needReadable && C(e)),
            D(e, a));
        }
        function P(e, a) {
          var r;
          return (
            c(a) ||
              "string" === typeof a ||
              void 0 === a ||
              e.objectMode ||
              (r = new _("chunk", ["string", "Buffer", "Uint8Array"], a)),
            r
          );
        }
        (Object.defineProperty(A.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (e) {
            this._readableState && (this._readableState.destroyed = e);
          },
        }),
          (A.prototype.destroy = g.destroy),
          (A.prototype._undestroy = g.undestroy),
          (A.prototype._destroy = function (e, a) {
            a(e);
          }),
          (A.prototype.push = function (e, a) {
            var r,
              t = this._readableState;
            return (
              t.objectMode
                ? (r = !0)
                : "string" === typeof e &&
                  ((a = a || t.defaultEncoding),
                  a !== t.encoding && ((e = l.from(e, a)), (a = "")),
                  (r = !0)),
              T(this, e, a, !1, r)
            );
          }),
          (A.prototype.unshift = function (e) {
            return T(this, e, null, !0, !1);
          }),
          (A.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (A.prototype.setEncoding = function (e) {
            f || (f = r(82).StringDecoder);
            var a = new f(e);
            ((this._readableState.decoder = a),
              (this._readableState.encoding =
                this._readableState.decoder.encoding));
            var t = this._readableState.buffer.head,
              o = "";
            while (null !== t) ((o += a.write(t.data)), (t = t.next));
            return (
              this._readableState.buffer.clear(),
              "" !== o && this._readableState.buffer.push(o),
              (this._readableState.length = o.length),
              this
            );
          }));
        var q = 1073741824;
        function O(e) {
          return (
            e >= q
              ? (e = q)
              : (e--,
                (e |= e >>> 1),
                (e |= e >>> 2),
                (e |= e >>> 4),
                (e |= e >>> 8),
                (e |= e >>> 16),
                e++),
            e
          );
        }
        function L(e, a) {
          return e <= 0 || (0 === a.length && a.ended)
            ? 0
            : a.objectMode
              ? 1
              : e !== e
                ? a.flowing && a.length
                  ? a.buffer.head.data.length
                  : a.length
                : (e > a.highWaterMark && (a.highWaterMark = O(e)),
                  e <= a.length
                    ? e
                    : a.ended
                      ? a.length
                      : ((a.needReadable = !0), 0));
        }
        function I(e, a) {
          if ((d("onEofChunk"), !a.ended)) {
            if (a.decoder) {
              var r = a.decoder.end();
              r &&
                r.length &&
                (a.buffer.push(r), (a.length += a.objectMode ? 1 : r.length));
            }
            ((a.ended = !0),
              a.sync
                ? C(e)
                : ((a.needReadable = !1),
                  a.emittedReadable || ((a.emittedReadable = !0), N(e))));
          }
        }
        function C(e) {
          var a = e._readableState;
          (d("emitReadable", a.needReadable, a.emittedReadable),
            (a.needReadable = !1),
            a.emittedReadable ||
              (d("emitReadable", a.flowing),
              (a.emittedReadable = !0),
              t.nextTick(N, e)));
        }
        function N(e) {
          var a = e._readableState;
          (d("emitReadable_", a.destroyed, a.length, a.ended),
            a.destroyed ||
              (!a.length && !a.ended) ||
              (e.emit("readable"), (a.emittedReadable = !1)),
            (a.needReadable =
              !a.flowing && !a.ended && a.length <= a.highWaterMark),
            Y(e));
        }
        function D(e, a) {
          a.readingMore || ((a.readingMore = !0), t.nextTick(U, e, a));
        }
        function U(e, a) {
          while (
            !a.reading &&
            !a.ended &&
            (a.length < a.highWaterMark || (a.flowing && 0 === a.length))
          ) {
            var r = a.length;
            if ((d("maybeReadMore read 0"), e.read(0), r === a.length)) break;
          }
          a.readingMore = !1;
        }
        function K(e) {
          return function () {
            var a = e._readableState;
            (d("pipeOnDrain", a.awaitDrain),
              a.awaitDrain && a.awaitDrain--,
              0 === a.awaitDrain && i(e, "data") && ((a.flowing = !0), Y(e)));
          };
        }
        function B(e) {
          var a = e._readableState;
          ((a.readableListening = e.listenerCount("readable") > 0),
            a.resumeScheduled && !a.paused
              ? (a.flowing = !0)
              : e.listenerCount("data") > 0 && e.resume());
        }
        function W(e) {
          (d("readable nexttick read 0"), e.read(0));
        }
        function F(e, a) {
          a.resumeScheduled || ((a.resumeScheduled = !0), t.nextTick(H, e, a));
        }
        function H(e, a) {
          (d("resume", a.reading),
            a.reading || e.read(0),
            (a.resumeScheduled = !1),
            e.emit("resume"),
            Y(e),
            a.flowing && !a.reading && e.read(0));
        }
        function Y(e) {
          var a = e._readableState;
          d("flow", a.flowing);
          while (a.flowing && null !== e.read());
        }
        function V(e, a) {
          return 0 === a.length
            ? null
            : (a.objectMode
                ? (r = a.buffer.shift())
                : !e || e >= a.length
                  ? ((r = a.decoder
                      ? a.buffer.join("")
                      : 1 === a.buffer.length
                        ? a.buffer.first()
                        : a.buffer.concat(a.length)),
                    a.buffer.clear())
                  : (r = a.buffer.consume(e, a.decoder)),
              r);
          var r;
        }
        function Z(e) {
          var a = e._readableState;
          (d("endReadable", a.endEmitted),
            a.endEmitted || ((a.ended = !0), t.nextTick(G, a, e)));
        }
        function G(e, a) {
          if (
            (d("endReadableNT", e.endEmitted, e.length),
            !e.endEmitted &&
              0 === e.length &&
              ((e.endEmitted = !0),
              (a.readable = !1),
              a.emit("end"),
              e.autoDestroy))
          ) {
            var r = a._writableState;
            (!r || (r.autoDestroy && r.finished)) && a.destroy();
          }
        }
        function J(e, a) {
          for (var r = 0, t = e.length; r < t; r++) if (e[r] === a) return r;
          return -1;
        }
        ((A.prototype.read = function (e) {
          (d("read", e), (e = parseInt(e, 10)));
          var a = this._readableState,
            r = e;
          if (
            (0 !== e && (a.emittedReadable = !1),
            0 === e &&
              a.needReadable &&
              ((0 !== a.highWaterMark
                ? a.length >= a.highWaterMark
                : a.length > 0) ||
                a.ended))
          )
            return (
              d("read: emitReadable", a.length, a.ended),
              0 === a.length && a.ended ? Z(this) : C(this),
              null
            );
          if (((e = L(e, a)), 0 === e && a.ended))
            return (0 === a.length && Z(this), null);
          var t,
            o = a.needReadable;
          return (
            d("need readable", o),
            (0 === a.length || a.length - e < a.highWaterMark) &&
              ((o = !0), d("length less than watermark", o)),
            a.ended || a.reading
              ? ((o = !1), d("reading or ended", o))
              : o &&
                (d("do read"),
                (a.reading = !0),
                (a.sync = !0),
                0 === a.length && (a.needReadable = !0),
                this._read(a.highWaterMark),
                (a.sync = !1),
                a.reading || (e = L(r, a))),
            (t = e > 0 ? V(e, a) : null),
            null === t
              ? ((a.needReadable = a.length <= a.highWaterMark), (e = 0))
              : ((a.length -= e), (a.awaitDrain = 0)),
            0 === a.length &&
              (a.ended || (a.needReadable = !0), r !== e && a.ended && Z(this)),
            null !== t && this.emit("data", t),
            t
          );
        }),
          (A.prototype._read = function (e) {
            x(this, new S("_read()"));
          }),
          (A.prototype.pipe = function (e, a) {
            var r = this,
              o = this._readableState;
            switch (o.pipesCount) {
              case 0:
                o.pipes = e;
                break;
              case 1:
                o.pipes = [o.pipes, e];
                break;
              default:
                o.pipes.push(e);
                break;
            }
            ((o.pipesCount += 1), d("pipe count=%d opts=%j", o.pipesCount, a));
            var n = (!a || !1 !== a.end) && e !== t.stdout && e !== t.stderr,
              l = n ? u : v;
            function s(e, a) {
              (d("onunpipe"),
                e === r &&
                  a &&
                  !1 === a.hasUnpiped &&
                  ((a.hasUnpiped = !0), f()));
            }
            function u() {
              (d("onend"), e.end());
            }
            (o.endEmitted ? t.nextTick(l) : r.once("end", l),
              e.on("unpipe", s));
            var c = K(r);
            e.on("drain", c);
            var p = !1;
            function f() {
              (d("cleanup"),
                e.removeListener("close", b),
                e.removeListener("finish", g),
                e.removeListener("drain", c),
                e.removeListener("error", m),
                e.removeListener("unpipe", s),
                r.removeListener("end", u),
                r.removeListener("end", v),
                r.removeListener("data", h),
                (p = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  c());
            }
            function h(a) {
              d("ondata");
              var t = e.write(a);
              (d("dest.write", t),
                !1 === t &&
                  (((1 === o.pipesCount && o.pipes === e) ||
                    (o.pipesCount > 1 && -1 !== J(o.pipes, e))) &&
                    !p &&
                    (d("false write response, pause", o.awaitDrain),
                    o.awaitDrain++),
                  r.pause()));
            }
            function m(a) {
              (d("onerror", a),
                v(),
                e.removeListener("error", m),
                0 === i(e, "error") && x(e, a));
            }
            function b() {
              (e.removeListener("finish", g), v());
            }
            function g() {
              (d("onfinish"), e.removeListener("close", b), v());
            }
            function v() {
              (d("unpipe"), r.unpipe(e));
            }
            return (
              r.on("data", h),
              z(e, "error", m),
              e.once("close", b),
              e.once("finish", g),
              e.emit("pipe", r),
              o.flowing || (d("pipe resume"), r.resume()),
              e
            );
          }),
          (A.prototype.unpipe = function (e) {
            var a = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === a.pipesCount) return this;
            if (1 === a.pipesCount)
              return (
                (e && e !== a.pipes) ||
                  (e || (e = a.pipes),
                  (a.pipes = null),
                  (a.pipesCount = 0),
                  (a.flowing = !1),
                  e && e.emit("unpipe", this, r)),
                this
              );
            if (!e) {
              var t = a.pipes,
                o = a.pipesCount;
              ((a.pipes = null), (a.pipesCount = 0), (a.flowing = !1));
              for (var i = 0; i < o; i++)
                t[i].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var n = J(a.pipes, e);
            return (
              -1 === n ||
                (a.pipes.splice(n, 1),
                (a.pipesCount -= 1),
                1 === a.pipesCount && (a.pipes = a.pipes[0]),
                e.emit("unpipe", this, r)),
              this
            );
          }),
          (A.prototype.on = function (e, a) {
            var r = n.prototype.on.call(this, e, a),
              o = this._readableState;
            return (
              "data" === e
                ? ((o.readableListening = this.listenerCount("readable") > 0),
                  !1 !== o.flowing && this.resume())
                : "readable" === e &&
                  (o.endEmitted ||
                    o.readableListening ||
                    ((o.readableListening = o.needReadable = !0),
                    (o.flowing = !1),
                    (o.emittedReadable = !1),
                    d("on readable", o.length, o.reading),
                    o.length ? C(this) : o.reading || t.nextTick(W, this))),
              r
            );
          }),
          (A.prototype.addListener = A.prototype.on),
          (A.prototype.removeListener = function (e, a) {
            var r = n.prototype.removeListener.call(this, e, a);
            return ("readable" === e && t.nextTick(B, this), r);
          }),
          (A.prototype.removeAllListeners = function (e) {
            var a = n.prototype.removeAllListeners.apply(this, arguments);
            return (
              ("readable" !== e && void 0 !== e) || t.nextTick(B, this),
              a
            );
          }),
          (A.prototype.resume = function () {
            var e = this._readableState;
            return (
              e.flowing ||
                (d("resume"), (e.flowing = !e.readableListening), F(this, e)),
              (e.paused = !1),
              this
            );
          }),
          (A.prototype.pause = function () {
            return (
              d("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (d("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (A.prototype.wrap = function (e) {
            var a = this,
              r = this._readableState,
              t = !1;
            for (var o in (e.on("end", function () {
              if ((d("wrapped end"), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && a.push(e);
              }
              a.push(null);
            }),
            e.on("data", function (o) {
              if (
                (d("wrapped data"),
                r.decoder && (o = r.decoder.write(o)),
                (!r.objectMode || (null !== o && void 0 !== o)) &&
                  (r.objectMode || (o && o.length)))
              ) {
                var i = a.push(o);
                i || ((t = !0), e.pause());
              }
            }),
            e))
              void 0 === this[o] &&
                "function" === typeof e[o] &&
                (this[o] = (function (a) {
                  return function () {
                    return e[a].apply(e, arguments);
                  };
                })(o));
            for (var i = 0; i < R.length; i++)
              e.on(R[i], this.emit.bind(this, R[i]));
            return (
              (this._read = function (a) {
                (d("wrapped _read", a), t && ((t = !1), e.resume()));
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (A.prototype[Symbol.asyncIterator] = function () {
              return (void 0 === h && (h = r(5236)), h(this));
            }),
          Object.defineProperty(A.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(A.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(A.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (e) {
              this._readableState && (this._readableState.flowing = e);
            },
          }),
          (A._fromList = V),
          Object.defineProperty(A.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" === typeof Symbol &&
            (A.from = function (e, a) {
              return (void 0 === m && (m = r(5237)), m(A, e, a));
            }));
      }).call(this, r(13), r(18));
    },
    4377: function (e, a, r) {
      e.exports = r(52).EventEmitter;
    },
    4378: function (e, a, r) {
      "use strict";
      (function (a) {
        function r(e, r) {
          var i = this,
            l = this._readableState && this._readableState.destroyed,
            s = this._writableState && this._writableState.destroyed;
          return l || s
            ? (r
                ? r(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      a.nextTick(n, this, e))
                    : a.nextTick(n, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !r && e
                  ? i._writableState
                    ? i._writableState.errorEmitted
                      ? a.nextTick(o, i)
                      : ((i._writableState.errorEmitted = !0),
                        a.nextTick(t, i, e))
                    : a.nextTick(t, i, e)
                  : r
                    ? (a.nextTick(o, i), r(e))
                    : a.nextTick(o, i);
              }),
              this);
        }
        function t(e, a) {
          (n(e, a), o(e));
        }
        function o(e) {
          (e._writableState && !e._writableState.emitClose) ||
            (e._readableState && !e._readableState.emitClose) ||
            e.emit("close");
        }
        function i() {
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
        function n(e, a) {
          e.emit("error", a);
        }
        function l(e, a) {
          var r = e._readableState,
            t = e._writableState;
          (r && r.autoDestroy) || (t && t.autoDestroy)
            ? e.destroy(a)
            : e.emit("error", a);
        }
        e.exports = { destroy: r, undestroy: i, errorOrDestroy: l };
      }).call(this, r(18));
    },
    4379: function (e, a, r) {
      "use strict";
      var t = r(3181).codes.ERR_INVALID_OPT_VALUE;
      function o(e, a, r) {
        return null != e.highWaterMark ? e.highWaterMark : a ? e[r] : null;
      }
      function i(e, a, r, i) {
        var n = o(a, i, r);
        if (null != n) {
          if (!isFinite(n) || Math.floor(n) !== n || n < 0) {
            var l = i ? r : "highWaterMark";
            throw new t(l, n);
          }
          return Math.floor(n);
        }
        return e.objectMode ? 16 : 16384;
      }
      e.exports = { getHighWaterMark: i };
    },
    4380: function (e, a, r) {
      "use strict";
      (function (a, t) {
        function o(e) {
          var a = this;
          ((this.next = null),
            (this.entry = null),
            (this.finish = function () {
              H(a, e);
            }));
        }
        var i;
        ((e.exports = k), (k.WritableState = z));
        var n = { deprecate: r(238) },
          l = r(4377),
          s = r(2).Buffer,
          u =
            ("undefined" !== typeof a
              ? a
              : "undefined" !== typeof window
                ? window
                : "undefined" !== typeof self
                  ? self
                  : {}
            ).Uint8Array || function () {};
        function c(e) {
          return s.from(e);
        }
        function d(e) {
          return s.isBuffer(e) || e instanceof u;
        }
        var p,
          f = r(4378),
          h = r(4379),
          m = h.getHighWaterMark,
          b = r(3181).codes,
          g = b.ERR_INVALID_ARG_TYPE,
          v = b.ERR_METHOD_NOT_IMPLEMENTED,
          y = b.ERR_MULTIPLE_CALLBACK,
          w = b.ERR_STREAM_CANNOT_PIPE,
          _ = b.ERR_STREAM_DESTROYED,
          E = b.ERR_STREAM_NULL_VALUES,
          S = b.ERR_STREAM_WRITE_AFTER_END,
          j = b.ERR_UNKNOWN_ENCODING,
          x = f.errorOrDestroy;
        function R() {}
        function z(e, a, t) {
          ((i = i || r(3182)),
            (e = e || {}),
            "boolean" !== typeof t && (t = a instanceof i),
            (this.objectMode = !!e.objectMode),
            t && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            (this.highWaterMark = m(this, e, "writableHighWaterMark", t)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1));
          var n = !1 === e.decodeStrings;
          ((this.decodeStrings = !n),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (e) {
              I(a, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new o(this)));
        }
        function k(e) {
          i = i || r(3182);
          var a = this instanceof i;
          if (!a && !p.call(k, this)) return new k(e);
          ((this._writableState = new z(e, this, a)),
            (this.writable = !0),
            e &&
              ("function" === typeof e.write && (this._write = e.write),
              "function" === typeof e.writev && (this._writev = e.writev),
              "function" === typeof e.destroy && (this._destroy = e.destroy),
              "function" === typeof e.final && (this._final = e.final)),
            l.call(this));
        }
        function A(e, a) {
          var r = new S();
          (x(e, r), t.nextTick(a, r));
        }
        function T(e, a, r, o) {
          var i;
          return (
            null === r
              ? (i = new E())
              : "string" === typeof r ||
                a.objectMode ||
                (i = new g("chunk", ["string", "Buffer"], r)),
            !i || (x(e, i), t.nextTick(o, i), !1)
          );
        }
        function M(e, a, r) {
          return (
            e.objectMode ||
              !1 === e.decodeStrings ||
              "string" !== typeof a ||
              (a = s.from(a, r)),
            a
          );
        }
        function P(e, a, r, t, o, i) {
          if (!r) {
            var n = M(a, t, o);
            t !== n && ((r = !0), (o = "buffer"), (t = n));
          }
          var l = a.objectMode ? 1 : t.length;
          a.length += l;
          var s = a.length < a.highWaterMark;
          if ((s || (a.needDrain = !0), a.writing || a.corked)) {
            var u = a.lastBufferedRequest;
            ((a.lastBufferedRequest = {
              chunk: t,
              encoding: o,
              isBuf: r,
              callback: i,
              next: null,
            }),
              u
                ? (u.next = a.lastBufferedRequest)
                : (a.bufferedRequest = a.lastBufferedRequest),
              (a.bufferedRequestCount += 1));
          } else q(e, a, !1, l, t, o, i);
          return s;
        }
        function q(e, a, r, t, o, i, n) {
          ((a.writelen = t),
            (a.writecb = n),
            (a.writing = !0),
            (a.sync = !0),
            a.destroyed
              ? a.onwrite(new _("write"))
              : r
                ? e._writev(o, a.onwrite)
                : e._write(o, i, a.onwrite),
            (a.sync = !1));
        }
        function O(e, a, r, o, i) {
          (--a.pendingcb,
            r
              ? (t.nextTick(i, o),
                t.nextTick(W, e, a),
                (e._writableState.errorEmitted = !0),
                x(e, o))
              : (i(o), (e._writableState.errorEmitted = !0), x(e, o), W(e, a)));
        }
        function L(e) {
          ((e.writing = !1),
            (e.writecb = null),
            (e.length -= e.writelen),
            (e.writelen = 0));
        }
        function I(e, a) {
          var r = e._writableState,
            o = r.sync,
            i = r.writecb;
          if ("function" !== typeof i) throw new y();
          if ((L(r), a)) O(e, r, o, a, i);
          else {
            var n = U(r) || e.destroyed;
            (n ||
              r.corked ||
              r.bufferProcessing ||
              !r.bufferedRequest ||
              D(e, r),
              o ? t.nextTick(C, e, r, n, i) : C(e, r, n, i));
          }
        }
        function C(e, a, r, t) {
          (r || N(e, a), a.pendingcb--, t(), W(e, a));
        }
        function N(e, a) {
          0 === a.length &&
            a.needDrain &&
            ((a.needDrain = !1), e.emit("drain"));
        }
        function D(e, a) {
          a.bufferProcessing = !0;
          var r = a.bufferedRequest;
          if (e._writev && r && r.next) {
            var t = a.bufferedRequestCount,
              i = new Array(t),
              n = a.corkedRequestsFree;
            n.entry = r;
            var l = 0,
              s = !0;
            while (r) ((i[l] = r), r.isBuf || (s = !1), (r = r.next), (l += 1));
            ((i.allBuffers = s),
              q(e, a, !0, a.length, i, "", n.finish),
              a.pendingcb++,
              (a.lastBufferedRequest = null),
              n.next
                ? ((a.corkedRequestsFree = n.next), (n.next = null))
                : (a.corkedRequestsFree = new o(a)),
              (a.bufferedRequestCount = 0));
          } else {
            while (r) {
              var u = r.chunk,
                c = r.encoding,
                d = r.callback,
                p = a.objectMode ? 1 : u.length;
              if (
                (q(e, a, !1, p, u, c, d),
                (r = r.next),
                a.bufferedRequestCount--,
                a.writing)
              )
                break;
            }
            null === r && (a.lastBufferedRequest = null);
          }
          ((a.bufferedRequest = r), (a.bufferProcessing = !1));
        }
        function U(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function K(e, a) {
          e._final(function (r) {
            (a.pendingcb--,
              r && x(e, r),
              (a.prefinished = !0),
              e.emit("prefinish"),
              W(e, a));
          });
        }
        function B(e, a) {
          a.prefinished ||
            a.finalCalled ||
            ("function" !== typeof e._final || a.destroyed
              ? ((a.prefinished = !0), e.emit("prefinish"))
              : (a.pendingcb++, (a.finalCalled = !0), t.nextTick(K, e, a)));
        }
        function W(e, a) {
          var r = U(a);
          if (
            r &&
            (B(e, a),
            0 === a.pendingcb &&
              ((a.finished = !0), e.emit("finish"), a.autoDestroy))
          ) {
            var t = e._readableState;
            (!t || (t.autoDestroy && t.endEmitted)) && e.destroy();
          }
          return r;
        }
        function F(e, a, r) {
          ((a.ending = !0),
            W(e, a),
            r && (a.finished ? t.nextTick(r) : e.once("finish", r)),
            (a.ended = !0),
            (e.writable = !1));
        }
        function H(e, a, r) {
          var t = e.entry;
          e.entry = null;
          while (t) {
            var o = t.callback;
            (a.pendingcb--, o(r), (t = t.next));
          }
          a.corkedRequestsFree.next = e;
        }
        (r(16)(k, l),
          (z.prototype.getBuffer = function () {
            var e = this.bufferedRequest,
              a = [];
            while (e) (a.push(e), (e = e.next));
            return a;
          }),
          (function () {
            try {
              Object.defineProperty(z.prototype, "buffer", {
                get: n.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003",
                ),
              });
            } catch (e) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((p = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(k, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!p.call(this, e) ||
                    (this === k && e && e._writableState instanceof z)
                  );
                },
              }))
            : (p = function (e) {
                return e instanceof this;
              }),
          (k.prototype.pipe = function () {
            x(this, new w());
          }),
          (k.prototype.write = function (e, a, r) {
            var t = this._writableState,
              o = !1,
              i = !t.objectMode && d(e);
            return (
              i && !s.isBuffer(e) && (e = c(e)),
              "function" === typeof a && ((r = a), (a = null)),
              i ? (a = "buffer") : a || (a = t.defaultEncoding),
              "function" !== typeof r && (r = R),
              t.ending
                ? A(this, r)
                : (i || T(this, t, e, r)) &&
                  (t.pendingcb++, (o = P(this, t, i, e, a, r))),
              o
            );
          }),
          (k.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (k.prototype.uncork = function () {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                D(this, e));
          }),
          (k.prototype.setDefaultEncoding = function (e) {
            if (
              ("string" === typeof e && (e = e.toLowerCase()),
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
                ].indexOf((e + "").toLowerCase()) > -1
              ))
            )
              throw new j(e);
            return ((this._writableState.defaultEncoding = e), this);
          }),
          Object.defineProperty(k.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(k.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (k.prototype._write = function (e, a, r) {
            r(new v("_write()"));
          }),
          (k.prototype._writev = null),
          (k.prototype.end = function (e, a, r) {
            var t = this._writableState;
            return (
              "function" === typeof e
                ? ((r = e), (e = null), (a = null))
                : "function" === typeof a && ((r = a), (a = null)),
              null !== e && void 0 !== e && this.write(e, a),
              t.corked && ((t.corked = 1), this.uncork()),
              t.ending || F(this, t, r),
              this
            );
          }),
          Object.defineProperty(k.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(k.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (e) {
              this._writableState && (this._writableState.destroyed = e);
            },
          }),
          (k.prototype.destroy = f.destroy),
          (k.prototype._undestroy = f.undestroy),
          (k.prototype._destroy = function (e, a) {
            a(e);
          }));
      }).call(this, r(13), r(18));
    },
    4381: function (e, a, r) {
      "use strict";
      e.exports = c;
      var t = r(3181).codes,
        o = t.ERR_METHOD_NOT_IMPLEMENTED,
        i = t.ERR_MULTIPLE_CALLBACK,
        n = t.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        l = t.ERR_TRANSFORM_WITH_LENGTH_0,
        s = r(3182);
      function u(e, a) {
        var r = this._transformState;
        r.transforming = !1;
        var t = r.writecb;
        if (null === t) return this.emit("error", new i());
        ((r.writechunk = null),
          (r.writecb = null),
          null != a && this.push(a),
          t(e));
        var o = this._readableState;
        ((o.reading = !1),
          (o.needReadable || o.length < o.highWaterMark) &&
            this._read(o.highWaterMark));
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        (s.call(this, e),
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
          e &&
            ("function" === typeof e.transform &&
              (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", d));
      }
      function d() {
        var e = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? p(this, null, null)
          : this._flush(function (a, r) {
              p(e, a, r);
            });
      }
      function p(e, a, r) {
        if (a) return e.emit("error", a);
        if ((null != r && e.push(r), e._writableState.length)) throw new l();
        if (e._transformState.transforming) throw new n();
        return e.push(null);
      }
      (r(16)(c, s),
        (c.prototype.push = function (e, a) {
          return (
            (this._transformState.needTransform = !1),
            s.prototype.push.call(this, e, a)
          );
        }),
        (c.prototype._transform = function (e, a, r) {
          r(new o("_transform()"));
        }),
        (c.prototype._write = function (e, a, r) {
          var t = this._transformState;
          if (
            ((t.writecb = r),
            (t.writechunk = e),
            (t.writeencoding = a),
            !t.transforming)
          ) {
            var o = this._readableState;
            (t.needTransform || o.needReadable || o.length < o.highWaterMark) &&
              this._read(o.highWaterMark);
          }
        }),
        (c.prototype._read = function (e) {
          var a = this._transformState;
          null === a.writechunk || a.transforming
            ? (a.needTransform = !0)
            : ((a.transforming = !0),
              this._transform(a.writechunk, a.writeencoding, a.afterTransform));
        }),
        (c.prototype._destroy = function (e, a) {
          s.prototype._destroy.call(this, e, function (e) {
            a(e);
          });
        }));
    },
    5161: function (e) {
      e.exports = JSON.parse(
        '["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]',
      );
    },
    5164: function (e) {
      e.exports = JSON.parse(
        '["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]',
      );
    },
    5165: function (e) {
      e.exports = JSON.parse(
        '["あいこくしん","あいさつ","あいだ","あおぞら","あかちゃん","あきる","あけがた","あける","あこがれる","あさい","あさひ","あしあと","あじわう","あずかる","あずき","あそぶ","あたえる","あたためる","あたりまえ","あたる","あつい","あつかう","あっしゅく","あつまり","あつめる","あてな","あてはまる","あひる","あぶら","あぶる","あふれる","あまい","あまど","あまやかす","あまり","あみもの","あめりか","あやまる","あゆむ","あらいぐま","あらし","あらすじ","あらためる","あらゆる","あらわす","ありがとう","あわせる","あわてる","あんい","あんがい","あんこ","あんぜん","あんてい","あんない","あんまり","いいだす","いおん","いがい","いがく","いきおい","いきなり","いきもの","いきる","いくじ","いくぶん","いけばな","いけん","いこう","いこく","いこつ","いさましい","いさん","いしき","いじゅう","いじょう","いじわる","いずみ","いずれ","いせい","いせえび","いせかい","いせき","いぜん","いそうろう","いそがしい","いだい","いだく","いたずら","いたみ","いたりあ","いちおう","いちじ","いちど","いちば","いちぶ","いちりゅう","いつか","いっしゅん","いっせい","いっそう","いったん","いっち","いってい","いっぽう","いてざ","いてん","いどう","いとこ","いない","いなか","いねむり","いのち","いのる","いはつ","いばる","いはん","いびき","いひん","いふく","いへん","いほう","いみん","いもうと","いもたれ","いもり","いやがる","いやす","いよかん","いよく","いらい","いらすと","いりぐち","いりょう","いれい","いれもの","いれる","いろえんぴつ","いわい","いわう","いわかん","いわば","いわゆる","いんげんまめ","いんさつ","いんしょう","いんよう","うえき","うえる","うおざ","うがい","うかぶ","うかべる","うきわ","うくらいな","うくれれ","うけたまわる","うけつけ","うけとる","うけもつ","うける","うごかす","うごく","うこん","うさぎ","うしなう","うしろがみ","うすい","うすぎ","うすぐらい","うすめる","うせつ","うちあわせ","うちがわ","うちき","うちゅう","うっかり","うつくしい","うったえる","うつる","うどん","うなぎ","うなじ","うなずく","うなる","うねる","うのう","うぶげ","うぶごえ","うまれる","うめる","うもう","うやまう","うよく","うらがえす","うらぐち","うらない","うりあげ","うりきれ","うるさい","うれしい","うれゆき","うれる","うろこ","うわき","うわさ","うんこう","うんちん","うんてん","うんどう","えいえん","えいが","えいきょう","えいご","えいせい","えいぶん","えいよう","えいわ","えおり","えがお","えがく","えきたい","えくせる","えしゃく","えすて","えつらん","えのぐ","えほうまき","えほん","えまき","えもじ","えもの","えらい","えらぶ","えりあ","えんえん","えんかい","えんぎ","えんげき","えんしゅう","えんぜつ","えんそく","えんちょう","えんとつ","おいかける","おいこす","おいしい","おいつく","おうえん","おうさま","おうじ","おうせつ","おうたい","おうふく","おうべい","おうよう","おえる","おおい","おおう","おおどおり","おおや","おおよそ","おかえり","おかず","おがむ","おかわり","おぎなう","おきる","おくさま","おくじょう","おくりがな","おくる","おくれる","おこす","おこなう","おこる","おさえる","おさない","おさめる","おしいれ","おしえる","おじぎ","おじさん","おしゃれ","おそらく","おそわる","おたがい","おたく","おだやか","おちつく","おっと","おつり","おでかけ","おとしもの","おとなしい","おどり","おどろかす","おばさん","おまいり","おめでとう","おもいで","おもう","おもたい","おもちゃ","おやつ","おやゆび","およぼす","おらんだ","おろす","おんがく","おんけい","おんしゃ","おんせん","おんだん","おんちゅう","おんどけい","かあつ","かいが","がいき","がいけん","がいこう","かいさつ","かいしゃ","かいすいよく","かいぜん","かいぞうど","かいつう","かいてん","かいとう","かいふく","がいへき","かいほう","かいよう","がいらい","かいわ","かえる","かおり","かかえる","かがく","かがし","かがみ","かくご","かくとく","かざる","がぞう","かたい","かたち","がちょう","がっきゅう","がっこう","がっさん","がっしょう","かなざわし","かのう","がはく","かぶか","かほう","かほご","かまう","かまぼこ","かめれおん","かゆい","かようび","からい","かるい","かろう","かわく","かわら","がんか","かんけい","かんこう","かんしゃ","かんそう","かんたん","かんち","がんばる","きあい","きあつ","きいろ","ぎいん","きうい","きうん","きえる","きおう","きおく","きおち","きおん","きかい","きかく","きかんしゃ","ききて","きくばり","きくらげ","きけんせい","きこう","きこえる","きこく","きさい","きさく","きさま","きさらぎ","ぎじかがく","ぎしき","ぎじたいけん","ぎじにってい","ぎじゅつしゃ","きすう","きせい","きせき","きせつ","きそう","きぞく","きぞん","きたえる","きちょう","きつえん","ぎっちり","きつつき","きつね","きてい","きどう","きどく","きない","きなが","きなこ","きぬごし","きねん","きのう","きのした","きはく","きびしい","きひん","きふく","きぶん","きぼう","きほん","きまる","きみつ","きむずかしい","きめる","きもだめし","きもち","きもの","きゃく","きやく","ぎゅうにく","きよう","きょうりゅう","きらい","きらく","きりん","きれい","きれつ","きろく","ぎろん","きわめる","ぎんいろ","きんかくじ","きんじょ","きんようび","ぐあい","くいず","くうかん","くうき","くうぐん","くうこう","ぐうせい","くうそう","ぐうたら","くうふく","くうぼ","くかん","くきょう","くげん","ぐこう","くさい","くさき","くさばな","くさる","くしゃみ","くしょう","くすのき","くすりゆび","くせげ","くせん","ぐたいてき","くださる","くたびれる","くちこみ","くちさき","くつした","ぐっすり","くつろぐ","くとうてん","くどく","くなん","くねくね","くのう","くふう","くみあわせ","くみたてる","くめる","くやくしょ","くらす","くらべる","くるま","くれる","くろう","くわしい","ぐんかん","ぐんしょく","ぐんたい","ぐんて","けあな","けいかく","けいけん","けいこ","けいさつ","げいじゅつ","けいたい","げいのうじん","けいれき","けいろ","けおとす","けおりもの","げきか","げきげん","げきだん","げきちん","げきとつ","げきは","げきやく","げこう","げこくじょう","げざい","けさき","げざん","けしき","けしごむ","けしょう","げすと","けたば","けちゃっぷ","けちらす","けつあつ","けつい","けつえき","けっこん","けつじょ","けっせき","けってい","けつまつ","げつようび","げつれい","けつろん","げどく","けとばす","けとる","けなげ","けなす","けなみ","けぬき","げねつ","けねん","けはい","げひん","けぶかい","げぼく","けまり","けみかる","けむし","けむり","けもの","けらい","けろけろ","けわしい","けんい","けんえつ","けんお","けんか","げんき","けんげん","けんこう","けんさく","けんしゅう","けんすう","げんそう","けんちく","けんてい","けんとう","けんない","けんにん","げんぶつ","けんま","けんみん","けんめい","けんらん","けんり","こあくま","こいぬ","こいびと","ごうい","こうえん","こうおん","こうかん","ごうきゅう","ごうけい","こうこう","こうさい","こうじ","こうすい","ごうせい","こうそく","こうたい","こうちゃ","こうつう","こうてい","こうどう","こうない","こうはい","ごうほう","ごうまん","こうもく","こうりつ","こえる","こおり","ごかい","ごがつ","ごかん","こくご","こくさい","こくとう","こくない","こくはく","こぐま","こけい","こける","ここのか","こころ","こさめ","こしつ","こすう","こせい","こせき","こぜん","こそだて","こたい","こたえる","こたつ","こちょう","こっか","こつこつ","こつばん","こつぶ","こてい","こてん","ことがら","ことし","ことば","ことり","こなごな","こねこね","このまま","このみ","このよ","ごはん","こひつじ","こふう","こふん","こぼれる","ごまあぶら","こまかい","ごますり","こまつな","こまる","こむぎこ","こもじ","こもち","こもの","こもん","こやく","こやま","こゆう","こゆび","こよい","こよう","こりる","これくしょん","ころっけ","こわもて","こわれる","こんいん","こんかい","こんき","こんしゅう","こんすい","こんだて","こんとん","こんなん","こんびに","こんぽん","こんまけ","こんや","こんれい","こんわく","ざいえき","さいかい","さいきん","ざいげん","ざいこ","さいしょ","さいせい","ざいたく","ざいちゅう","さいてき","ざいりょう","さうな","さかいし","さがす","さかな","さかみち","さがる","さぎょう","さくし","さくひん","さくら","さこく","さこつ","さずかる","ざせき","さたん","さつえい","ざつおん","ざっか","ざつがく","さっきょく","ざっし","さつじん","ざっそう","さつたば","さつまいも","さてい","さといも","さとう","さとおや","さとし","さとる","さのう","さばく","さびしい","さべつ","さほう","さほど","さます","さみしい","さみだれ","さむけ","さめる","さやえんどう","さゆう","さよう","さよく","さらだ","ざるそば","さわやか","さわる","さんいん","さんか","さんきゃく","さんこう","さんさい","ざんしょ","さんすう","さんせい","さんそ","さんち","さんま","さんみ","さんらん","しあい","しあげ","しあさって","しあわせ","しいく","しいん","しうち","しえい","しおけ","しかい","しかく","じかん","しごと","しすう","じだい","したうけ","したぎ","したて","したみ","しちょう","しちりん","しっかり","しつじ","しつもん","してい","してき","してつ","じてん","じどう","しなぎれ","しなもの","しなん","しねま","しねん","しのぐ","しのぶ","しはい","しばかり","しはつ","しはらい","しはん","しひょう","しふく","じぶん","しへい","しほう","しほん","しまう","しまる","しみん","しむける","じむしょ","しめい","しめる","しもん","しゃいん","しゃうん","しゃおん","じゃがいも","しやくしょ","しゃくほう","しゃけん","しゃこ","しゃざい","しゃしん","しゃせん","しゃそう","しゃたい","しゃちょう","しゃっきん","じゃま","しゃりん","しゃれい","じゆう","じゅうしょ","しゅくはく","じゅしん","しゅっせき","しゅみ","しゅらば","じゅんばん","しょうかい","しょくたく","しょっけん","しょどう","しょもつ","しらせる","しらべる","しんか","しんこう","じんじゃ","しんせいじ","しんちく","しんりん","すあげ","すあし","すあな","ずあん","すいえい","すいか","すいとう","ずいぶん","すいようび","すうがく","すうじつ","すうせん","すおどり","すきま","すくう","すくない","すける","すごい","すこし","ずさん","すずしい","すすむ","すすめる","すっかり","ずっしり","ずっと","すてき","すてる","すねる","すのこ","すはだ","すばらしい","ずひょう","ずぶぬれ","すぶり","すふれ","すべて","すべる","ずほう","すぼん","すまい","すめし","すもう","すやき","すらすら","するめ","すれちがう","すろっと","すわる","すんぜん","すんぽう","せあぶら","せいかつ","せいげん","せいじ","せいよう","せおう","せかいかん","せきにん","せきむ","せきゆ","せきらんうん","せけん","せこう","せすじ","せたい","せたけ","せっかく","せっきゃく","ぜっく","せっけん","せっこつ","せっさたくま","せつぞく","せつだん","せつでん","せっぱん","せつび","せつぶん","せつめい","せつりつ","せなか","せのび","せはば","せびろ","せぼね","せまい","せまる","せめる","せもたれ","せりふ","ぜんあく","せんい","せんえい","せんか","せんきょ","せんく","せんげん","ぜんご","せんさい","せんしゅ","せんすい","せんせい","せんぞ","せんたく","せんちょう","せんてい","せんとう","せんぬき","せんねん","せんぱい","ぜんぶ","ぜんぽう","せんむ","せんめんじょ","せんもん","せんやく","せんゆう","せんよう","ぜんら","ぜんりゃく","せんれい","せんろ","そあく","そいとげる","そいね","そうがんきょう","そうき","そうご","そうしん","そうだん","そうなん","そうび","そうめん","そうり","そえもの","そえん","そがい","そげき","そこう","そこそこ","そざい","そしな","そせい","そせん","そそぐ","そだてる","そつう","そつえん","そっかん","そつぎょう","そっけつ","そっこう","そっせん","そっと","そとがわ","そとづら","そなえる","そなた","そふぼ","そぼく","そぼろ","そまつ","そまる","そむく","そむりえ","そめる","そもそも","そよかぜ","そらまめ","そろう","そんかい","そんけい","そんざい","そんしつ","そんぞく","そんちょう","ぞんび","ぞんぶん","そんみん","たあい","たいいん","たいうん","たいえき","たいおう","だいがく","たいき","たいぐう","たいけん","たいこ","たいざい","だいじょうぶ","だいすき","たいせつ","たいそう","だいたい","たいちょう","たいてい","だいどころ","たいない","たいねつ","たいのう","たいはん","だいひょう","たいふう","たいへん","たいほ","たいまつばな","たいみんぐ","たいむ","たいめん","たいやき","たいよう","たいら","たいりょく","たいる","たいわん","たうえ","たえる","たおす","たおる","たおれる","たかい","たかね","たきび","たくさん","たこく","たこやき","たさい","たしざん","だじゃれ","たすける","たずさわる","たそがれ","たたかう","たたく","ただしい","たたみ","たちばな","だっかい","だっきゃく","だっこ","だっしゅつ","だったい","たてる","たとえる","たなばた","たにん","たぬき","たのしみ","たはつ","たぶん","たべる","たぼう","たまご","たまる","だむる","ためいき","ためす","ためる","たもつ","たやすい","たよる","たらす","たりきほんがん","たりょう","たりる","たると","たれる","たれんと","たろっと","たわむれる","だんあつ","たんい","たんおん","たんか","たんき","たんけん","たんご","たんさん","たんじょうび","だんせい","たんそく","たんたい","だんち","たんてい","たんとう","だんな","たんにん","だんねつ","たんのう","たんぴん","だんぼう","たんまつ","たんめい","だんれつ","だんろ","だんわ","ちあい","ちあん","ちいき","ちいさい","ちえん","ちかい","ちから","ちきゅう","ちきん","ちけいず","ちけん","ちこく","ちさい","ちしき","ちしりょう","ちせい","ちそう","ちたい","ちたん","ちちおや","ちつじょ","ちてき","ちてん","ちぬき","ちぬり","ちのう","ちひょう","ちへいせん","ちほう","ちまた","ちみつ","ちみどろ","ちめいど","ちゃんこなべ","ちゅうい","ちゆりょく","ちょうし","ちょさくけん","ちらし","ちらみ","ちりがみ","ちりょう","ちるど","ちわわ","ちんたい","ちんもく","ついか","ついたち","つうか","つうじょう","つうはん","つうわ","つかう","つかれる","つくね","つくる","つけね","つける","つごう","つたえる","つづく","つつじ","つつむ","つとめる","つながる","つなみ","つねづね","つのる","つぶす","つまらない","つまる","つみき","つめたい","つもり","つもる","つよい","つるぼ","つるみく","つわもの","つわり","てあし","てあて","てあみ","ていおん","ていか","ていき","ていけい","ていこく","ていさつ","ていし","ていせい","ていたい","ていど","ていねい","ていひょう","ていへん","ていぼう","てうち","ておくれ","てきとう","てくび","でこぼこ","てさぎょう","てさげ","てすり","てそう","てちがい","てちょう","てつがく","てつづき","でっぱ","てつぼう","てつや","でぬかえ","てぬき","てぬぐい","てのひら","てはい","てぶくろ","てふだ","てほどき","てほん","てまえ","てまきずし","てみじか","てみやげ","てらす","てれび","てわけ","てわたし","でんあつ","てんいん","てんかい","てんき","てんぐ","てんけん","てんごく","てんさい","てんし","てんすう","でんち","てんてき","てんとう","てんない","てんぷら","てんぼうだい","てんめつ","てんらんかい","でんりょく","でんわ","どあい","といれ","どうかん","とうきゅう","どうぐ","とうし","とうむぎ","とおい","とおか","とおく","とおす","とおる","とかい","とかす","ときおり","ときどき","とくい","とくしゅう","とくてん","とくに","とくべつ","とけい","とける","とこや","とさか","としょかん","とそう","とたん","とちゅう","とっきゅう","とっくん","とつぜん","とつにゅう","とどける","ととのえる","とない","となえる","となり","とのさま","とばす","どぶがわ","とほう","とまる","とめる","ともだち","ともる","どようび","とらえる","とんかつ","どんぶり","ないかく","ないこう","ないしょ","ないす","ないせん","ないそう","なおす","ながい","なくす","なげる","なこうど","なさけ","なたでここ","なっとう","なつやすみ","ななおし","なにごと","なにもの","なにわ","なのか","なふだ","なまいき","なまえ","なまみ","なみだ","なめらか","なめる","なやむ","ならう","ならび","ならぶ","なれる","なわとび","なわばり","にあう","にいがた","にうけ","におい","にかい","にがて","にきび","にくしみ","にくまん","にげる","にさんかたんそ","にしき","にせもの","にちじょう","にちようび","にっか","にっき","にっけい","にっこう","にっさん","にっしょく","にっすう","にっせき","にってい","になう","にほん","にまめ","にもつ","にやり","にゅういん","にりんしゃ","にわとり","にんい","にんか","にんき","にんげん","にんしき","にんずう","にんそう","にんたい","にんち","にんてい","にんにく","にんぷ","にんまり","にんむ","にんめい","にんよう","ぬいくぎ","ぬかす","ぬぐいとる","ぬぐう","ぬくもり","ぬすむ","ぬまえび","ぬめり","ぬらす","ぬんちゃく","ねあげ","ねいき","ねいる","ねいろ","ねぐせ","ねくたい","ねくら","ねこぜ","ねこむ","ねさげ","ねすごす","ねそべる","ねだん","ねつい","ねっしん","ねつぞう","ねったいぎょ","ねぶそく","ねふだ","ねぼう","ねほりはほり","ねまき","ねまわし","ねみみ","ねむい","ねむたい","ねもと","ねらう","ねわざ","ねんいり","ねんおし","ねんかん","ねんきん","ねんぐ","ねんざ","ねんし","ねんちゃく","ねんど","ねんぴ","ねんぶつ","ねんまつ","ねんりょう","ねんれい","のいず","のおづま","のがす","のきなみ","のこぎり","のこす","のこる","のせる","のぞく","のぞむ","のたまう","のちほど","のっく","のばす","のはら","のべる","のぼる","のみもの","のやま","のらいぬ","のらねこ","のりもの","のりゆき","のれん","のんき","ばあい","はあく","ばあさん","ばいか","ばいく","はいけん","はいご","はいしん","はいすい","はいせん","はいそう","はいち","ばいばい","はいれつ","はえる","はおる","はかい","ばかり","はかる","はくしゅ","はけん","はこぶ","はさみ","はさん","はしご","ばしょ","はしる","はせる","ぱそこん","はそん","はたん","はちみつ","はつおん","はっかく","はづき","はっきり","はっくつ","はっけん","はっこう","はっさん","はっしん","はったつ","はっちゅう","はってん","はっぴょう","はっぽう","はなす","はなび","はにかむ","はぶらし","はみがき","はむかう","はめつ","はやい","はやし","はらう","はろうぃん","はわい","はんい","はんえい","はんおん","はんかく","はんきょう","ばんぐみ","はんこ","はんしゃ","はんすう","はんだん","ぱんち","ぱんつ","はんてい","はんとし","はんのう","はんぱ","はんぶん","はんぺん","はんぼうき","はんめい","はんらん","はんろん","ひいき","ひうん","ひえる","ひかく","ひかり","ひかる","ひかん","ひくい","ひけつ","ひこうき","ひこく","ひさい","ひさしぶり","ひさん","びじゅつかん","ひしょ","ひそか","ひそむ","ひたむき","ひだり","ひたる","ひつぎ","ひっこし","ひっし","ひつじゅひん","ひっす","ひつぜん","ぴったり","ぴっちり","ひつよう","ひてい","ひとごみ","ひなまつり","ひなん","ひねる","ひはん","ひびく","ひひょう","ひほう","ひまわり","ひまん","ひみつ","ひめい","ひめじし","ひやけ","ひやす","ひよう","びょうき","ひらがな","ひらく","ひりつ","ひりょう","ひるま","ひるやすみ","ひれい","ひろい","ひろう","ひろき","ひろゆき","ひんかく","ひんけつ","ひんこん","ひんしゅ","ひんそう","ぴんち","ひんぱん","びんぼう","ふあん","ふいうち","ふうけい","ふうせん","ぷうたろう","ふうとう","ふうふ","ふえる","ふおん","ふかい","ふきん","ふくざつ","ふくぶくろ","ふこう","ふさい","ふしぎ","ふじみ","ふすま","ふせい","ふせぐ","ふそく","ぶたにく","ふたん","ふちょう","ふつう","ふつか","ふっかつ","ふっき","ふっこく","ぶどう","ふとる","ふとん","ふのう","ふはい","ふひょう","ふへん","ふまん","ふみん","ふめつ","ふめん","ふよう","ふりこ","ふりる","ふるい","ふんいき","ぶんがく","ぶんぐ","ふんしつ","ぶんせき","ふんそう","ぶんぽう","へいあん","へいおん","へいがい","へいき","へいげん","へいこう","へいさ","へいしゃ","へいせつ","へいそ","へいたく","へいてん","へいねつ","へいわ","へきが","へこむ","べにいろ","べにしょうが","へらす","へんかん","べんきょう","べんごし","へんさい","へんたい","べんり","ほあん","ほいく","ぼうぎょ","ほうこく","ほうそう","ほうほう","ほうもん","ほうりつ","ほえる","ほおん","ほかん","ほきょう","ぼきん","ほくろ","ほけつ","ほけん","ほこう","ほこる","ほしい","ほしつ","ほしゅ","ほしょう","ほせい","ほそい","ほそく","ほたて","ほたる","ぽちぶくろ","ほっきょく","ほっさ","ほったん","ほとんど","ほめる","ほんい","ほんき","ほんけ","ほんしつ","ほんやく","まいにち","まかい","まかせる","まがる","まける","まこと","まさつ","まじめ","ますく","まぜる","まつり","まとめ","まなぶ","まぬけ","まねく","まほう","まもる","まゆげ","まよう","まろやか","まわす","まわり","まわる","まんが","まんきつ","まんぞく","まんなか","みいら","みうち","みえる","みがく","みかた","みかん","みけん","みこん","みじかい","みすい","みすえる","みせる","みっか","みつかる","みつける","みてい","みとめる","みなと","みなみかさい","みねらる","みのう","みのがす","みほん","みもと","みやげ","みらい","みりょく","みわく","みんか","みんぞく","むいか","むえき","むえん","むかい","むかう","むかえ","むかし","むぎちゃ","むける","むげん","むさぼる","むしあつい","むしば","むじゅん","むしろ","むすう","むすこ","むすぶ","むすめ","むせる","むせん","むちゅう","むなしい","むのう","むやみ","むよう","むらさき","むりょう","むろん","めいあん","めいうん","めいえん","めいかく","めいきょく","めいさい","めいし","めいそう","めいぶつ","めいれい","めいわく","めぐまれる","めざす","めした","めずらしい","めだつ","めまい","めやす","めんきょ","めんせき","めんどう","もうしあげる","もうどうけん","もえる","もくし","もくてき","もくようび","もちろん","もどる","もらう","もんく","もんだい","やおや","やける","やさい","やさしい","やすい","やすたろう","やすみ","やせる","やそう","やたい","やちん","やっと","やっぱり","やぶる","やめる","ややこしい","やよい","やわらかい","ゆうき","ゆうびんきょく","ゆうべ","ゆうめい","ゆけつ","ゆしゅつ","ゆせん","ゆそう","ゆたか","ゆちゃく","ゆでる","ゆにゅう","ゆびわ","ゆらい","ゆれる","ようい","ようか","ようきゅう","ようじ","ようす","ようちえん","よかぜ","よかん","よきん","よくせい","よくぼう","よけい","よごれる","よさん","よしゅう","よそう","よそく","よっか","よてい","よどがわく","よねつ","よやく","よゆう","よろこぶ","よろしい","らいう","らくがき","らくご","らくさつ","らくだ","らしんばん","らせん","らぞく","らたい","らっか","られつ","りえき","りかい","りきさく","りきせつ","りくぐん","りくつ","りけん","りこう","りせい","りそう","りそく","りてん","りねん","りゆう","りゅうがく","りよう","りょうり","りょかん","りょくちゃ","りょこう","りりく","りれき","りろん","りんご","るいけい","るいさい","るいじ","るいせき","るすばん","るりがわら","れいかん","れいぎ","れいせい","れいぞうこ","れいとう","れいぼう","れきし","れきだい","れんあい","れんけい","れんこん","れんさい","れんしゅう","れんぞく","れんらく","ろうか","ろうご","ろうじん","ろうそく","ろくが","ろこつ","ろじうら","ろしゅつ","ろせん","ろてん","ろめん","ろれつ","ろんぎ","ろんぱ","ろんぶん","ろんり","わかす","わかめ","わかやま","わかれる","わしつ","わじまし","わすれもの","わらう","われる"]',
      );
    },
    5166: function (e) {
      e.exports = JSON.parse(
        '["abacate","abaixo","abalar","abater","abduzir","abelha","aberto","abismo","abotoar","abranger","abreviar","abrigar","abrupto","absinto","absoluto","absurdo","abutre","acabado","acalmar","acampar","acanhar","acaso","aceitar","acelerar","acenar","acervo","acessar","acetona","achatar","acidez","acima","acionado","acirrar","aclamar","aclive","acolhida","acomodar","acoplar","acordar","acumular","acusador","adaptar","adega","adentro","adepto","adequar","aderente","adesivo","adeus","adiante","aditivo","adjetivo","adjunto","admirar","adorar","adquirir","adubo","adverso","advogado","aeronave","afastar","aferir","afetivo","afinador","afivelar","aflito","afluente","afrontar","agachar","agarrar","agasalho","agenciar","agilizar","agiota","agitado","agora","agradar","agreste","agrupar","aguardar","agulha","ajoelhar","ajudar","ajustar","alameda","alarme","alastrar","alavanca","albergue","albino","alcatra","aldeia","alecrim","alegria","alertar","alface","alfinete","algum","alheio","aliar","alicate","alienar","alinhar","aliviar","almofada","alocar","alpiste","alterar","altitude","alucinar","alugar","aluno","alusivo","alvo","amaciar","amador","amarelo","amassar","ambas","ambiente","ameixa","amenizar","amido","amistoso","amizade","amolador","amontoar","amoroso","amostra","amparar","ampliar","ampola","anagrama","analisar","anarquia","anatomia","andaime","anel","anexo","angular","animar","anjo","anomalia","anotado","ansioso","anterior","anuidade","anunciar","anzol","apagador","apalpar","apanhado","apego","apelido","apertada","apesar","apetite","apito","aplauso","aplicada","apoio","apontar","aposta","aprendiz","aprovar","aquecer","arame","aranha","arara","arcada","ardente","areia","arejar","arenito","aresta","argiloso","argola","arma","arquivo","arraial","arrebate","arriscar","arroba","arrumar","arsenal","arterial","artigo","arvoredo","asfaltar","asilado","aspirar","assador","assinar","assoalho","assunto","astral","atacado","atadura","atalho","atarefar","atear","atender","aterro","ateu","atingir","atirador","ativo","atoleiro","atracar","atrevido","atriz","atual","atum","auditor","aumentar","aura","aurora","autismo","autoria","autuar","avaliar","avante","avaria","avental","avesso","aviador","avisar","avulso","axila","azarar","azedo","azeite","azulejo","babar","babosa","bacalhau","bacharel","bacia","bagagem","baiano","bailar","baioneta","bairro","baixista","bajular","baleia","baliza","balsa","banal","bandeira","banho","banir","banquete","barato","barbado","baronesa","barraca","barulho","baseado","bastante","batata","batedor","batida","batom","batucar","baunilha","beber","beijo","beirada","beisebol","beldade","beleza","belga","beliscar","bendito","bengala","benzer","berimbau","berlinda","berro","besouro","bexiga","bezerro","bico","bicudo","bienal","bifocal","bifurcar","bigorna","bilhete","bimestre","bimotor","biologia","biombo","biosfera","bipolar","birrento","biscoito","bisneto","bispo","bissexto","bitola","bizarro","blindado","bloco","bloquear","boato","bobagem","bocado","bocejo","bochecha","boicotar","bolada","boletim","bolha","bolo","bombeiro","bonde","boneco","bonita","borbulha","borda","boreal","borracha","bovino","boxeador","branco","brasa","braveza","breu","briga","brilho","brincar","broa","brochura","bronzear","broto","bruxo","bucha","budismo","bufar","bule","buraco","busca","busto","buzina","cabana","cabelo","cabide","cabo","cabrito","cacau","cacetada","cachorro","cacique","cadastro","cadeado","cafezal","caiaque","caipira","caixote","cajado","caju","calafrio","calcular","caldeira","calibrar","calmante","calota","camada","cambista","camisa","camomila","campanha","camuflar","canavial","cancelar","caneta","canguru","canhoto","canivete","canoa","cansado","cantar","canudo","capacho","capela","capinar","capotar","capricho","captador","capuz","caracol","carbono","cardeal","careca","carimbar","carneiro","carpete","carreira","cartaz","carvalho","casaco","casca","casebre","castelo","casulo","catarata","cativar","caule","causador","cautelar","cavalo","caverna","cebola","cedilha","cegonha","celebrar","celular","cenoura","censo","centeio","cercar","cerrado","certeiro","cerveja","cetim","cevada","chacota","chaleira","chamado","chapada","charme","chatice","chave","chefe","chegada","cheiro","cheque","chicote","chifre","chinelo","chocalho","chover","chumbo","chutar","chuva","cicatriz","ciclone","cidade","cidreira","ciente","cigana","cimento","cinto","cinza","ciranda","circuito","cirurgia","citar","clareza","clero","clicar","clone","clube","coado","coagir","cobaia","cobertor","cobrar","cocada","coelho","coentro","coeso","cogumelo","coibir","coifa","coiote","colar","coleira","colher","colidir","colmeia","colono","coluna","comando","combinar","comentar","comitiva","comover","complexo","comum","concha","condor","conectar","confuso","congelar","conhecer","conjugar","consumir","contrato","convite","cooperar","copeiro","copiador","copo","coquetel","coragem","cordial","corneta","coronha","corporal","correio","cortejo","coruja","corvo","cosseno","costela","cotonete","couro","couve","covil","cozinha","cratera","cravo","creche","credor","creme","crer","crespo","criada","criminal","crioulo","crise","criticar","crosta","crua","cruzeiro","cubano","cueca","cuidado","cujo","culatra","culminar","culpar","cultura","cumprir","cunhado","cupido","curativo","curral","cursar","curto","cuspir","custear","cutelo","damasco","datar","debater","debitar","deboche","debulhar","decalque","decimal","declive","decote","decretar","dedal","dedicado","deduzir","defesa","defumar","degelo","degrau","degustar","deitado","deixar","delator","delegado","delinear","delonga","demanda","demitir","demolido","dentista","depenado","depilar","depois","depressa","depurar","deriva","derramar","desafio","desbotar","descanso","desenho","desfiado","desgaste","desigual","deslize","desmamar","desova","despesa","destaque","desviar","detalhar","detentor","detonar","detrito","deusa","dever","devido","devotado","dezena","diagrama","dialeto","didata","difuso","digitar","dilatado","diluente","diminuir","dinastia","dinheiro","diocese","direto","discreta","disfarce","disparo","disquete","dissipar","distante","ditador","diurno","diverso","divisor","divulgar","dizer","dobrador","dolorido","domador","dominado","donativo","donzela","dormente","dorsal","dosagem","dourado","doutor","drenagem","drible","drogaria","duelar","duende","dueto","duplo","duquesa","durante","duvidoso","eclodir","ecoar","ecologia","edificar","edital","educado","efeito","efetivar","ejetar","elaborar","eleger","eleitor","elenco","elevador","eliminar","elogiar","embargo","embolado","embrulho","embutido","emenda","emergir","emissor","empatia","empenho","empinado","empolgar","emprego","empurrar","emulador","encaixe","encenado","enchente","encontro","endeusar","endossar","enfaixar","enfeite","enfim","engajado","engenho","englobar","engomado","engraxar","enguia","enjoar","enlatar","enquanto","enraizar","enrolado","enrugar","ensaio","enseada","ensino","ensopado","entanto","enteado","entidade","entortar","entrada","entulho","envergar","enviado","envolver","enxame","enxerto","enxofre","enxuto","epiderme","equipar","ereto","erguido","errata","erva","ervilha","esbanjar","esbelto","escama","escola","escrita","escuta","esfinge","esfolar","esfregar","esfumado","esgrima","esmalte","espanto","espelho","espiga","esponja","espreita","espumar","esquerda","estaca","esteira","esticar","estofado","estrela","estudo","esvaziar","etanol","etiqueta","euforia","europeu","evacuar","evaporar","evasivo","eventual","evidente","evoluir","exagero","exalar","examinar","exato","exausto","excesso","excitar","exclamar","executar","exemplo","exibir","exigente","exonerar","expandir","expelir","expirar","explanar","exposto","expresso","expulsar","externo","extinto","extrato","fabricar","fabuloso","faceta","facial","fada","fadiga","faixa","falar","falta","familiar","fandango","fanfarra","fantoche","fardado","farelo","farinha","farofa","farpa","fartura","fatia","fator","favorita","faxina","fazenda","fechado","feijoada","feirante","felino","feminino","fenda","feno","fera","feriado","ferrugem","ferver","festejar","fetal","feudal","fiapo","fibrose","ficar","ficheiro","figurado","fileira","filho","filme","filtrar","firmeza","fisgada","fissura","fita","fivela","fixador","fixo","flacidez","flamingo","flanela","flechada","flora","flutuar","fluxo","focal","focinho","fofocar","fogo","foguete","foice","folgado","folheto","forjar","formiga","forno","forte","fosco","fossa","fragata","fralda","frango","frasco","fraterno","freira","frente","fretar","frieza","friso","fritura","fronha","frustrar","fruteira","fugir","fulano","fuligem","fundar","fungo","funil","furador","furioso","futebol","gabarito","gabinete","gado","gaiato","gaiola","gaivota","galega","galho","galinha","galocha","ganhar","garagem","garfo","gargalo","garimpo","garoupa","garrafa","gasoduto","gasto","gata","gatilho","gaveta","gazela","gelado","geleia","gelo","gemada","gemer","gemido","generoso","gengiva","genial","genoma","genro","geologia","gerador","germinar","gesso","gestor","ginasta","gincana","gingado","girafa","girino","glacial","glicose","global","glorioso","goela","goiaba","golfe","golpear","gordura","gorjeta","gorro","gostoso","goteira","governar","gracejo","gradual","grafite","gralha","grampo","granada","gratuito","graveto","graxa","grego","grelhar","greve","grilo","grisalho","gritaria","grosso","grotesco","grudado","grunhido","gruta","guache","guarani","guaxinim","guerrear","guiar","guincho","guisado","gula","guloso","guru","habitar","harmonia","haste","haver","hectare","herdar","heresia","hesitar","hiato","hibernar","hidratar","hiena","hino","hipismo","hipnose","hipoteca","hoje","holofote","homem","honesto","honrado","hormonal","hospedar","humorado","iate","ideia","idoso","ignorado","igreja","iguana","ileso","ilha","iludido","iluminar","ilustrar","imagem","imediato","imenso","imersivo","iminente","imitador","imortal","impacto","impedir","implante","impor","imprensa","impune","imunizar","inalador","inapto","inativo","incenso","inchar","incidir","incluir","incolor","indeciso","indireto","indutor","ineficaz","inerente","infantil","infestar","infinito","inflamar","informal","infrator","ingerir","inibido","inicial","inimigo","injetar","inocente","inodoro","inovador","inox","inquieto","inscrito","inseto","insistir","inspetor","instalar","insulto","intacto","integral","intimar","intocado","intriga","invasor","inverno","invicto","invocar","iogurte","iraniano","ironizar","irreal","irritado","isca","isento","isolado","isqueiro","italiano","janeiro","jangada","janta","jararaca","jardim","jarro","jasmim","jato","javali","jazida","jejum","joaninha","joelhada","jogador","joia","jornal","jorrar","jovem","juba","judeu","judoca","juiz","julgador","julho","jurado","jurista","juro","justa","labareda","laboral","lacre","lactante","ladrilho","lagarta","lagoa","laje","lamber","lamentar","laminar","lampejo","lanche","lapidar","lapso","laranja","lareira","largura","lasanha","lastro","lateral","latido","lavanda","lavoura","lavrador","laxante","lazer","lealdade","lebre","legado","legendar","legista","leigo","leiloar","leitura","lembrete","leme","lenhador","lentilha","leoa","lesma","leste","letivo","letreiro","levar","leveza","levitar","liberal","libido","liderar","ligar","ligeiro","limitar","limoeiro","limpador","linda","linear","linhagem","liquidez","listagem","lisura","litoral","livro","lixa","lixeira","locador","locutor","lojista","lombo","lona","longe","lontra","lorde","lotado","loteria","loucura","lousa","louvar","luar","lucidez","lucro","luneta","lustre","lutador","luva","macaco","macete","machado","macio","madeira","madrinha","magnata","magreza","maior","mais","malandro","malha","malote","maluco","mamilo","mamoeiro","mamute","manada","mancha","mandato","manequim","manhoso","manivela","manobrar","mansa","manter","manusear","mapeado","maquinar","marcador","maresia","marfim","margem","marinho","marmita","maroto","marquise","marreco","martelo","marujo","mascote","masmorra","massagem","mastigar","matagal","materno","matinal","matutar","maxilar","medalha","medida","medusa","megafone","meiga","melancia","melhor","membro","memorial","menino","menos","mensagem","mental","merecer","mergulho","mesada","mesclar","mesmo","mesquita","mestre","metade","meteoro","metragem","mexer","mexicano","micro","migalha","migrar","milagre","milenar","milhar","mimado","minerar","minhoca","ministro","minoria","miolo","mirante","mirtilo","misturar","mocidade","moderno","modular","moeda","moer","moinho","moita","moldura","moleza","molho","molinete","molusco","montanha","moqueca","morango","morcego","mordomo","morena","mosaico","mosquete","mostarda","motel","motim","moto","motriz","muda","muito","mulata","mulher","multar","mundial","munido","muralha","murcho","muscular","museu","musical","nacional","nadador","naja","namoro","narina","narrado","nascer","nativa","natureza","navalha","navegar","navio","neblina","nebuloso","negativa","negociar","negrito","nervoso","neta","neural","nevasca","nevoeiro","ninar","ninho","nitidez","nivelar","nobreza","noite","noiva","nomear","nominal","nordeste","nortear","notar","noticiar","noturno","novelo","novilho","novo","nublado","nudez","numeral","nupcial","nutrir","nuvem","obcecado","obedecer","objetivo","obrigado","obscuro","obstetra","obter","obturar","ocidente","ocioso","ocorrer","oculista","ocupado","ofegante","ofensiva","oferenda","oficina","ofuscado","ogiva","olaria","oleoso","olhar","oliveira","ombro","omelete","omisso","omitir","ondulado","oneroso","ontem","opcional","operador","oponente","oportuno","oposto","orar","orbitar","ordem","ordinal","orfanato","orgasmo","orgulho","oriental","origem","oriundo","orla","ortodoxo","orvalho","oscilar","ossada","osso","ostentar","otimismo","ousadia","outono","outubro","ouvido","ovelha","ovular","oxidar","oxigenar","pacato","paciente","pacote","pactuar","padaria","padrinho","pagar","pagode","painel","pairar","paisagem","palavra","palestra","palheta","palito","palmada","palpitar","pancada","panela","panfleto","panqueca","pantanal","papagaio","papelada","papiro","parafina","parcial","pardal","parede","partida","pasmo","passado","pastel","patamar","patente","patinar","patrono","paulada","pausar","peculiar","pedalar","pedestre","pediatra","pedra","pegada","peitoral","peixe","pele","pelicano","penca","pendurar","peneira","penhasco","pensador","pente","perceber","perfeito","pergunta","perito","permitir","perna","perplexo","persiana","pertence","peruca","pescado","pesquisa","pessoa","petiscar","piada","picado","piedade","pigmento","pilastra","pilhado","pilotar","pimenta","pincel","pinguim","pinha","pinote","pintar","pioneiro","pipoca","piquete","piranha","pires","pirueta","piscar","pistola","pitanga","pivete","planta","plaqueta","platina","plebeu","plumagem","pluvial","pneu","poda","poeira","poetisa","polegada","policiar","poluente","polvilho","pomar","pomba","ponderar","pontaria","populoso","porta","possuir","postal","pote","poupar","pouso","povoar","praia","prancha","prato","praxe","prece","predador","prefeito","premiar","prensar","preparar","presilha","pretexto","prevenir","prezar","primata","princesa","prisma","privado","processo","produto","profeta","proibido","projeto","prometer","propagar","prosa","protetor","provador","publicar","pudim","pular","pulmonar","pulseira","punhal","punir","pupilo","pureza","puxador","quadra","quantia","quarto","quase","quebrar","queda","queijo","quente","querido","quimono","quina","quiosque","rabanada","rabisco","rachar","racionar","radial","raiar","rainha","raio","raiva","rajada","ralado","ramal","ranger","ranhura","rapadura","rapel","rapidez","raposa","raquete","raridade","rasante","rascunho","rasgar","raspador","rasteira","rasurar","ratazana","ratoeira","realeza","reanimar","reaver","rebaixar","rebelde","rebolar","recado","recente","recheio","recibo","recordar","recrutar","recuar","rede","redimir","redonda","reduzida","reenvio","refinar","refletir","refogar","refresco","refugiar","regalia","regime","regra","reinado","reitor","rejeitar","relativo","remador","remendo","remorso","renovado","reparo","repelir","repleto","repolho","represa","repudiar","requerer","resenha","resfriar","resgatar","residir","resolver","respeito","ressaca","restante","resumir","retalho","reter","retirar","retomada","retratar","revelar","revisor","revolta","riacho","rica","rigidez","rigoroso","rimar","ringue","risada","risco","risonho","robalo","rochedo","rodada","rodeio","rodovia","roedor","roleta","romano","roncar","rosado","roseira","rosto","rota","roteiro","rotina","rotular","rouco","roupa","roxo","rubro","rugido","rugoso","ruivo","rumo","rupestre","russo","sabor","saciar","sacola","sacudir","sadio","safira","saga","sagrada","saibro","salada","saleiro","salgado","saliva","salpicar","salsicha","saltar","salvador","sambar","samurai","sanar","sanfona","sangue","sanidade","sapato","sarda","sargento","sarjeta","saturar","saudade","saxofone","sazonal","secar","secular","seda","sedento","sediado","sedoso","sedutor","segmento","segredo","segundo","seiva","seleto","selvagem","semanal","semente","senador","senhor","sensual","sentado","separado","sereia","seringa","serra","servo","setembro","setor","sigilo","silhueta","silicone","simetria","simpatia","simular","sinal","sincero","singular","sinopse","sintonia","sirene","siri","situado","soberano","sobra","socorro","sogro","soja","solda","soletrar","solteiro","sombrio","sonata","sondar","sonegar","sonhador","sono","soprano","soquete","sorrir","sorteio","sossego","sotaque","soterrar","sovado","sozinho","suavizar","subida","submerso","subsolo","subtrair","sucata","sucesso","suco","sudeste","sufixo","sugador","sugerir","sujeito","sulfato","sumir","suor","superior","suplicar","suposto","suprimir","surdina","surfista","surpresa","surreal","surtir","suspiro","sustento","tabela","tablete","tabuada","tacho","tagarela","talher","talo","talvez","tamanho","tamborim","tampa","tangente","tanto","tapar","tapioca","tardio","tarefa","tarja","tarraxa","tatuagem","taurino","taxativo","taxista","teatral","tecer","tecido","teclado","tedioso","teia","teimar","telefone","telhado","tempero","tenente","tensor","tentar","termal","terno","terreno","tese","tesoura","testado","teto","textura","texugo","tiara","tigela","tijolo","timbrar","timidez","tingido","tinteiro","tiragem","titular","toalha","tocha","tolerar","tolice","tomada","tomilho","tonel","tontura","topete","tora","torcido","torneio","torque","torrada","torto","tostar","touca","toupeira","toxina","trabalho","tracejar","tradutor","trafegar","trajeto","trama","trancar","trapo","traseiro","tratador","travar","treino","tremer","trepidar","trevo","triagem","tribo","triciclo","tridente","trilogia","trindade","triplo","triturar","triunfal","trocar","trombeta","trova","trunfo","truque","tubular","tucano","tudo","tulipa","tupi","turbo","turma","turquesa","tutelar","tutorial","uivar","umbigo","unha","unidade","uniforme","urologia","urso","urtiga","urubu","usado","usina","usufruir","vacina","vadiar","vagaroso","vaidoso","vala","valente","validade","valores","vantagem","vaqueiro","varanda","vareta","varrer","vascular","vasilha","vassoura","vazar","vazio","veado","vedar","vegetar","veicular","veleiro","velhice","veludo","vencedor","vendaval","venerar","ventre","verbal","verdade","vereador","vergonha","vermelho","verniz","versar","vertente","vespa","vestido","vetorial","viaduto","viagem","viajar","viatura","vibrador","videira","vidraria","viela","viga","vigente","vigiar","vigorar","vilarejo","vinco","vinheta","vinil","violeta","virada","virtude","visitar","visto","vitral","viveiro","vizinho","voador","voar","vogal","volante","voleibol","voltagem","volumoso","vontade","vulto","vuvuzela","xadrez","xarope","xeque","xeretar","xerife","xingar","zangado","zarpar","zebu","zelador","zombar","zoologia","zumbido"]',
      );
    },
    5168: function (e, a, r) {
      e.exports = r(5169)(r(5170));
    },
    5169: function (e, a) {
      const r = {
        IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
        TWEAK_ADD:
          "The tweak was out of range or the resulted private key is invalid",
        TWEAK_MUL: "The tweak was out of range or equal to zero",
        CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
        SECKEY_INVALID: "Private Key is invalid",
        PUBKEY_PARSE: "Public Key could not be parsed",
        PUBKEY_SERIALIZE: "Public Key serialization error",
        PUBKEY_COMBINE: "The sum of the public keys is not valid",
        SIG_PARSE: "Signature could not be parsed",
        SIGN: "The nonce generation function failed, or the private key was invalid",
        RECOVER: "Public key could not be recover",
        ECDH: "Scalar was invalid (zero or overflow)",
      };
      function t(e, a) {
        if (!e) throw new Error(a);
      }
      function o(e, a, r) {
        if (
          (t(a instanceof Uint8Array, `Expected ${e} to be an Uint8Array`),
          void 0 !== r)
        )
          if (Array.isArray(r)) {
            const o = r.join(", "),
              i = `Expected ${e} to be an Uint8Array with length [${o}]`;
            t(r.includes(a.length), i);
          } else {
            const o = `Expected ${e} to be an Uint8Array with length ${r}`;
            t(a.length === r, o);
          }
      }
      function i(e) {
        t("Boolean" === l(e), "Expected compressed to be a Boolean");
      }
      function n(e, a) {
        return (
          void 0 === e && (e = (e) => new Uint8Array(e)),
          "function" === typeof e && (e = e(a)),
          o("output", e, a),
          e
        );
      }
      function l(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      e.exports = (e) => ({
        contextRandomize(a) {
          switch (
            (t(
              null === a || a instanceof Uint8Array,
              "Expected seed to be an Uint8Array or null",
            ),
            null !== a && o("seed", a, 32),
            e.contextRandomize(a))
          ) {
            case 1:
              throw new Error(r.CONTEXT_RANDOMIZE_UNKNOW);
          }
        },
        privateKeyVerify(a) {
          return (o("private key", a, 32), 0 === e.privateKeyVerify(a));
        },
        privateKeyNegate(a) {
          switch ((o("private key", a, 32), e.privateKeyNegate(a))) {
            case 0:
              return a;
            case 1:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        privateKeyTweakAdd(a, t) {
          switch (
            (o("private key", a, 32),
            o("tweak", t, 32),
            e.privateKeyTweakAdd(a, t))
          ) {
            case 0:
              return a;
            case 1:
              throw new Error(r.TWEAK_ADD);
          }
        },
        privateKeyTweakMul(a, t) {
          switch (
            (o("private key", a, 32),
            o("tweak", t, 32),
            e.privateKeyTweakMul(a, t))
          ) {
            case 0:
              return a;
            case 1:
              throw new Error(r.TWEAK_MUL);
          }
        },
        publicKeyVerify(a) {
          return (o("public key", a, [33, 65]), 0 === e.publicKeyVerify(a));
        },
        publicKeyCreate(a, t, l) {
          switch (
            (void 0 === t && (t = !0),
            o("private key", a, 32),
            i(t),
            (l = n(l, t ? 33 : 65)),
            e.publicKeyCreate(l, a))
          ) {
            case 0:
              return l;
            case 1:
              throw new Error(r.SECKEY_INVALID);
            case 2:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyConvert(a, t, l) {
          switch (
            (void 0 === t && (t = !0),
            o("public key", a, [33, 65]),
            i(t),
            (l = n(l, t ? 33 : 65)),
            e.publicKeyConvert(l, a))
          ) {
            case 0:
              return l;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyNegate(a, t, l) {
          switch (
            (void 0 === t && (t = !0),
            o("public key", a, [33, 65]),
            i(t),
            (l = n(l, t ? 33 : 65)),
            e.publicKeyNegate(l, a))
          ) {
            case 0:
              return l;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
            case 3:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyCombine(a, l, s) {
          (void 0 === l && (l = !0),
            t(Array.isArray(a), "Expected public keys to be an Array"),
            t(
              a.length > 0,
              "Expected public keys array will have more than zero items",
            ));
          for (const e of a) o("public key", e, [33, 65]);
          switch ((i(l), (s = n(s, l ? 33 : 65)), e.publicKeyCombine(s, a))) {
            case 0:
              return s;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.PUBKEY_COMBINE);
            case 3:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyTweakAdd(a, t, l, s) {
          switch (
            (void 0 === l && (l = !0),
            o("public key", a, [33, 65]),
            o("tweak", t, 32),
            i(l),
            (s = n(s, l ? 33 : 65)),
            e.publicKeyTweakAdd(s, a, t))
          ) {
            case 0:
              return s;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.TWEAK_ADD);
          }
        },
        publicKeyTweakMul(a, t, l, s) {
          switch (
            (void 0 === l && (l = !0),
            o("public key", a, [33, 65]),
            o("tweak", t, 32),
            i(l),
            (s = n(s, l ? 33 : 65)),
            e.publicKeyTweakMul(s, a, t))
          ) {
            case 0:
              return s;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.TWEAK_MUL);
          }
        },
        signatureNormalize(a) {
          switch ((o("signature", a, 64), e.signatureNormalize(a))) {
            case 0:
              return a;
            case 1:
              throw new Error(r.SIG_PARSE);
          }
        },
        signatureExport(a, t) {
          (o("signature", a, 64), (t = n(t, 72)));
          const i = { output: t, outputlen: 72 };
          switch (e.signatureExport(i, a)) {
            case 0:
              return t.slice(0, i.outputlen);
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        signatureImport(a, t) {
          switch (
            (o("signature", a), (t = n(t, 64)), e.signatureImport(t, a))
          ) {
            case 0:
              return t;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdsaSign(a, i, s, u) {
          (void 0 === s && (s = {}),
            o("message", a, 32),
            o("private key", i, 32),
            t("Object" === l(s), "Expected options to be an Object"),
            void 0 !== s.data && o("options.data", s.data),
            void 0 !== s.noncefn &&
              t(
                "Function" === l(s.noncefn),
                "Expected options.noncefn to be a Function",
              ),
            (u = n(u, 64)));
          const c = { signature: u, recid: null };
          switch (e.ecdsaSign(c, a, i, s.data, s.noncefn)) {
            case 0:
              return c;
            case 1:
              throw new Error(r.SIGN);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdsaVerify(a, t, i) {
          switch (
            (o("signature", a, 64),
            o("message", t, 32),
            o("public key", i, [33, 65]),
            e.ecdsaVerify(a, t, i))
          ) {
            case 0:
              return !0;
            case 3:
              return !1;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.PUBKEY_PARSE);
          }
        },
        ecdsaRecover(a, s, u, c, d) {
          switch (
            (void 0 === c && (c = !0),
            o("signature", a, 64),
            t(
              "Number" === l(s) && s >= 0 && s <= 3,
              "Expected recovery id to be a Number within interval [0, 3]",
            ),
            o("message", u, 32),
            i(c),
            (d = n(d, c ? 33 : 65)),
            e.ecdsaRecover(d, a, s, u))
          ) {
            case 0:
              return d;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.RECOVER);
            case 3:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdh(a, i, s, u) {
          switch (
            (void 0 === s && (s = {}),
            o("public key", a, [33, 65]),
            o("private key", i, 32),
            t("Object" === l(s), "Expected options to be an Object"),
            void 0 !== s.data && o("options.data", s.data),
            void 0 !== s.hashfn
              ? (t(
                  "Function" === l(s.hashfn),
                  "Expected options.hashfn to be a Function",
                ),
                void 0 !== s.xbuf && o("options.xbuf", s.xbuf, 32),
                void 0 !== s.ybuf && o("options.ybuf", s.ybuf, 32),
                o("output", u))
              : (u = n(u, 32)),
            e.ecdh(u, a, i, s.data, s.hashfn, s.xbuf, s.ybuf))
          ) {
            case 0:
              return u;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.ECDH);
          }
        },
      });
    },
    5170: function (e, a, r) {
      const t = r(795).ec,
        o = new t("secp256k1"),
        i = o.curve,
        n = i.n.constructor;
      function l(e, a) {
        let r = new n(a);
        if (r.cmp(i.p) >= 0) return null;
        r = r.toRed(i.red);
        let t = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
        (3 === e) !== t.isOdd() && (t = t.redNeg());
        const l = r.redSqr().redIMul(r);
        return t.redSqr().redISub(l.redIAdd(i.b)).isZero()
          ? o.keyPair({ pub: { x: r, y: t } })
          : null;
      }
      function s(e, a, r) {
        let t = new n(a),
          l = new n(r);
        if (t.cmp(i.p) >= 0 || l.cmp(i.p) >= 0) return null;
        if (
          ((t = t.toRed(i.red)),
          (l = l.toRed(i.red)),
          (6 === e || 7 === e) && l.isOdd() !== (7 === e))
        )
          return null;
        const s = t.redSqr().redIMul(t);
        return l.redSqr().redISub(s.redIAdd(i.b)).isZero()
          ? o.keyPair({ pub: { x: t, y: l } })
          : null;
      }
      function u(e) {
        const a = e[0];
        switch (a) {
          case 2:
          case 3:
            return 33 !== e.length ? null : l(a, e.subarray(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : s(a, e.subarray(1, 33), e.subarray(33, 65));
          default:
            return null;
        }
      }
      function c(e, a) {
        const r = a.encode(null, 33 === e.length);
        for (let t = 0; t < e.length; ++t) e[t] = r[t];
      }
      e.exports = {
        contextRandomize() {
          return 0;
        },
        privateKeyVerify(e) {
          const a = new n(e);
          return a.cmp(i.n) < 0 && !a.isZero() ? 0 : 1;
        },
        privateKeyNegate(e) {
          const a = new n(e),
            r = i.n.sub(a).umod(i.n).toArrayLike(Uint8Array, "be", 32);
          return (e.set(r), 0);
        },
        privateKeyTweakAdd(e, a) {
          const r = new n(a);
          if (r.cmp(i.n) >= 0) return 1;
          if ((r.iadd(new n(e)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()))
            return 1;
          const t = r.toArrayLike(Uint8Array, "be", 32);
          return (e.set(t), 0);
        },
        privateKeyTweakMul(e, a) {
          let r = new n(a);
          if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
          (r.imul(new n(e)), r.cmp(i.n) >= 0 && (r = r.umod(i.n)));
          const t = r.toArrayLike(Uint8Array, "be", 32);
          return (e.set(t), 0);
        },
        publicKeyVerify(e) {
          const a = u(e);
          return null === a ? 1 : 0;
        },
        publicKeyCreate(e, a) {
          const r = new n(a);
          if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
          const t = o.keyFromPrivate(a).getPublic();
          return (c(e, t), 0);
        },
        publicKeyConvert(e, a) {
          const r = u(a);
          if (null === r) return 1;
          const t = r.getPublic();
          return (c(e, t), 0);
        },
        publicKeyNegate(e, a) {
          const r = u(a);
          if (null === r) return 1;
          const t = r.getPublic();
          return ((t.y = t.y.redNeg()), c(e, t), 0);
        },
        publicKeyCombine(e, a) {
          const r = new Array(a.length);
          for (let o = 0; o < a.length; ++o)
            if (((r[o] = u(a[o])), null === r[o])) return 1;
          let t = r[0].getPublic();
          for (let o = 1; o < r.length; ++o) t = t.add(r[o].pub);
          return t.isInfinity() ? 2 : (c(e, t), 0);
        },
        publicKeyTweakAdd(e, a, r) {
          const t = u(a);
          if (null === t) return 1;
          if (((r = new n(r)), r.cmp(i.n) >= 0)) return 2;
          const o = t.getPublic().add(i.g.mul(r));
          return o.isInfinity() ? 2 : (c(e, o), 0);
        },
        publicKeyTweakMul(e, a, r) {
          const t = u(a);
          if (null === t) return 1;
          if (((r = new n(r)), r.cmp(i.n) >= 0 || r.isZero())) return 2;
          const o = t.getPublic().mul(r);
          return (c(e, o), 0);
        },
        signatureNormalize(e) {
          const a = new n(e.subarray(0, 32)),
            r = new n(e.subarray(32, 64));
          return a.cmp(i.n) >= 0 || r.cmp(i.n) >= 0
            ? 1
            : (1 === r.cmp(o.nh) &&
                e.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
              0);
        },
        signatureExport(e, a) {
          const r = a.subarray(0, 32),
            t = a.subarray(32, 64);
          if (new n(r).cmp(i.n) >= 0) return 1;
          if (new n(t).cmp(i.n) >= 0) return 1;
          const { output: o } = e;
          let l = o.subarray(4, 37);
          ((l[0] = 0), l.set(r, 1));
          let s = 33,
            u = 0;
          for (; s > 1 && 0 === l[u] && !(128 & l[u + 1]); --s, ++u);
          if (((l = l.subarray(u)), 128 & l[0])) return 1;
          if (s > 1 && 0 === l[0] && !(128 & l[1])) return 1;
          let c = o.subarray(39, 72);
          ((c[0] = 0), c.set(t, 1));
          let d = 33,
            p = 0;
          for (; d > 1 && 0 === c[p] && !(128 & c[p + 1]); --d, ++p);
          return (
            (c = c.subarray(p)),
            128 & c[0] || (d > 1 && 0 === c[0] && !(128 & c[1]))
              ? 1
              : ((e.outputlen = 6 + s + d),
                (o[0] = 48),
                (o[1] = e.outputlen - 2),
                (o[2] = 2),
                (o[3] = l.length),
                o.set(l, 4),
                (o[4 + s] = 2),
                (o[5 + s] = c.length),
                o.set(c, 6 + s),
                0)
          );
        },
        signatureImport(e, a) {
          if (a.length < 8) return 1;
          if (a.length > 72) return 1;
          if (48 !== a[0]) return 1;
          if (a[1] !== a.length - 2) return 1;
          if (2 !== a[2]) return 1;
          const r = a[3];
          if (0 === r) return 1;
          if (5 + r >= a.length) return 1;
          if (2 !== a[4 + r]) return 1;
          const t = a[5 + r];
          if (0 === t) return 1;
          if (6 + r + t !== a.length) return 1;
          if (128 & a[4]) return 1;
          if (r > 1 && 0 === a[4] && !(128 & a[5])) return 1;
          if (128 & a[r + 6]) return 1;
          if (t > 1 && 0 === a[r + 6] && !(128 & a[r + 7])) return 1;
          let o = a.subarray(4, 4 + r);
          if (
            (33 === o.length && 0 === o[0] && (o = o.subarray(1)),
            o.length > 32)
          )
            return 1;
          let l = a.subarray(6 + r);
          if (
            (33 === l.length && 0 === l[0] && (l = l.slice(1)), l.length > 32)
          )
            throw new Error("S length is too long");
          let s = new n(o);
          s.cmp(i.n) >= 0 && (s = new n(0));
          let u = new n(a.subarray(6 + r));
          return (
            u.cmp(i.n) >= 0 && (u = new n(0)),
            e.set(s.toArrayLike(Uint8Array, "be", 32), 0),
            e.set(u.toArrayLike(Uint8Array, "be", 32), 32),
            0
          );
        },
        ecdsaSign(e, a, r, t, l) {
          if (l) {
            const e = l;
            l = (o) => {
              const i = e(a, r, null, t, o),
                l = i instanceof Uint8Array && 32 === i.length;
              if (!l) throw new Error("This is the way");
              return new n(i);
            };
          }
          const s = new n(r);
          if (s.cmp(i.n) >= 0 || s.isZero()) return 1;
          let u;
          try {
            u = o.sign(a, r, { canonical: !0, k: l, pers: t });
          } catch (c) {
            return 1;
          }
          return (
            e.signature.set(u.r.toArrayLike(Uint8Array, "be", 32), 0),
            e.signature.set(u.s.toArrayLike(Uint8Array, "be", 32), 32),
            (e.recid = u.recoveryParam),
            0
          );
        },
        ecdsaVerify(e, a, r) {
          const t = { r: e.subarray(0, 32), s: e.subarray(32, 64) },
            l = new n(t.r),
            s = new n(t.s);
          if (l.cmp(i.n) >= 0 || s.cmp(i.n) >= 0) return 1;
          if (1 === s.cmp(o.nh) || l.isZero() || s.isZero()) return 3;
          const c = u(r);
          if (null === c) return 2;
          const d = c.getPublic(),
            p = o.verify(a, t, d);
          return p ? 0 : 3;
        },
        ecdsaRecover(e, a, r, t) {
          const l = { r: a.slice(0, 32), s: a.slice(32, 64) },
            s = new n(l.r),
            u = new n(l.s);
          if (s.cmp(i.n) >= 0 || u.cmp(i.n) >= 0) return 1;
          if (s.isZero() || u.isZero()) return 2;
          let d;
          try {
            d = o.recoverPubKey(t, l, r);
          } catch (p) {
            return 2;
          }
          return (c(e, d), 0);
        },
        ecdh(e, a, r, t, l, s, c) {
          const d = u(a);
          if (null === d) return 1;
          const p = new n(r);
          if (p.cmp(i.n) >= 0 || p.isZero()) return 2;
          const f = d.getPublic().mul(p);
          if (void 0 === l) {
            const a = f.encode(null, !0),
              r = o.hash().update(a).digest();
            for (let t = 0; t < 32; ++t) e[t] = r[t];
          } else {
            s || (s = new Uint8Array(32));
            const a = f.getX().toArray("be", 32);
            for (let e = 0; e < 32; ++e) s[e] = a[e];
            c || (c = new Uint8Array(32));
            const r = f.getY().toArray("be", 32);
            for (let e = 0; e < 32; ++e) c[e] = r[e];
            const o = l(s, c, t),
              i = o instanceof Uint8Array && o.length === e.length;
            if (!i) return 2;
            e.set(o);
          }
          return 0;
        },
      };
    },
    5232: function (e, a, r) {
      ((a = e.exports = r(4376)),
        (a.Stream = a),
        (a.Readable = a),
        (a.Writable = r(4380)),
        (a.Duplex = r(3182)),
        (a.Transform = r(4381)),
        (a.PassThrough = r(5238)),
        (a.finished = r(3689)),
        (a.pipeline = r(5239)));
    },
    5234: function (e, a, r) {
      "use strict";
      function t(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          (a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            r.push.apply(r, t));
        }
        return r;
      }
      function o(e) {
        for (var a = 1; a < arguments.length; a++) {
          var r = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? t(Object(r), !0).forEach(function (a) {
                i(e, a, r[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : t(Object(r)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(r, a),
                  );
                });
        }
        return e;
      }
      function i(e, a, r) {
        return (
          (a = u(a)),
          a in e
            ? Object.defineProperty(e, a, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = r),
          e
        );
      }
      function n(e, a) {
        if (!(e instanceof a))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, a) {
        for (var r = 0; r < a.length; r++) {
          var t = a[r];
          ((t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(e, u(t.key), t));
        }
      }
      function s(e, a, r) {
        return (
          a && l(e.prototype, a),
          r && l(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function u(e) {
        var a = c(e, "string");
        return "symbol" === typeof a ? a : String(a);
      }
      function c(e, a) {
        if ("object" !== typeof e || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var t = r.call(e, a || "default");
          if ("object" !== typeof t) return t;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === a ? String : Number)(e);
      }
      var d = r(2),
        p = d.Buffer,
        f = r(5235),
        h = f.inspect,
        m = (h && h.custom) || "inspect";
      function b(e, a, r) {
        p.prototype.copy.call(e, a, r);
      }
      e.exports = (function () {
        function e() {
          (n(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0));
        }
        return (
          s(e, [
            {
              key: "push",
              value: function (e) {
                var a = { data: e, next: null };
                (this.length > 0 ? (this.tail.next = a) : (this.head = a),
                  (this.tail = a),
                  ++this.length);
              },
            },
            {
              key: "unshift",
              value: function (e) {
                var a = { data: e, next: this.head };
                (0 === this.length && (this.tail = a),
                  (this.head = a),
                  ++this.length);
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
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
              value: function (e) {
                if (0 === this.length) return "";
                var a = this.head,
                  r = "" + a.data;
                while ((a = a.next)) r += e + a.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (e) {
                if (0 === this.length) return p.alloc(0);
                var a = p.allocUnsafe(e >>> 0),
                  r = this.head,
                  t = 0;
                while (r) (b(r.data, a, t), (t += r.data.length), (r = r.next));
                return a;
              },
            },
            {
              key: "consume",
              value: function (e, a) {
                var r;
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data = this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : a
                            ? this._getString(e)
                            : this._getBuffer(e)),
                  r
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
              value: function (e) {
                var a = this.head,
                  r = 1,
                  t = a.data;
                e -= t.length;
                while ((a = a.next)) {
                  var o = a.data,
                    i = e > o.length ? o.length : e;
                  if (
                    (i === o.length ? (t += o) : (t += o.slice(0, e)),
                    (e -= i),
                    0 === e)
                  ) {
                    i === o.length
                      ? (++r,
                        a.next
                          ? (this.head = a.next)
                          : (this.head = this.tail = null))
                      : ((this.head = a), (a.data = o.slice(i)));
                    break;
                  }
                  ++r;
                }
                return ((this.length -= r), t);
              },
            },
            {
              key: "_getBuffer",
              value: function (e) {
                var a = p.allocUnsafe(e),
                  r = this.head,
                  t = 1;
                (r.data.copy(a), (e -= r.data.length));
                while ((r = r.next)) {
                  var o = r.data,
                    i = e > o.length ? o.length : e;
                  if ((o.copy(a, a.length - e, 0, i), (e -= i), 0 === e)) {
                    i === o.length
                      ? (++t,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = o.slice(i)));
                    break;
                  }
                  ++t;
                }
                return ((this.length -= t), a);
              },
            },
            {
              key: m,
              value: function (e, a) {
                return h(
                  this,
                  o(o({}, a), {}, { depth: 0, customInspect: !1 }),
                );
              },
            },
          ]),
          e
        );
      })();
    },
    5236: function (e, a, r) {
      "use strict";
      (function (a) {
        var t;
        function o(e, a, r) {
          return (
            (a = i(a)),
            a in e
              ? Object.defineProperty(e, a, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[a] = r),
            e
          );
        }
        function i(e) {
          var a = n(e, "string");
          return "symbol" === typeof a ? a : String(a);
        }
        function n(e, a) {
          if ("object" !== typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var t = r.call(e, a || "default");
            if ("object" !== typeof t) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === a ? String : Number)(e);
        }
        var l = r(3689),
          s = Symbol("lastResolve"),
          u = Symbol("lastReject"),
          c = Symbol("error"),
          d = Symbol("ended"),
          p = Symbol("lastPromise"),
          f = Symbol("handlePromise"),
          h = Symbol("stream");
        function m(e, a) {
          return { value: e, done: a };
        }
        function b(e) {
          var a = e[s];
          if (null !== a) {
            var r = e[h].read();
            null !== r &&
              ((e[p] = null), (e[s] = null), (e[u] = null), a(m(r, !1)));
          }
        }
        function g(e) {
          a.nextTick(b, e);
        }
        function v(e, a) {
          return function (r, t) {
            e.then(function () {
              a[d] ? r(m(void 0, !0)) : a[f](r, t);
            }, t);
          };
        }
        var y = Object.getPrototypeOf(function () {}),
          w = Object.setPrototypeOf(
            ((t = {
              get stream() {
                return this[h];
              },
              next: function () {
                var e = this,
                  r = this[c];
                if (null !== r) return Promise.reject(r);
                if (this[d]) return Promise.resolve(m(void 0, !0));
                if (this[h].destroyed)
                  return new Promise(function (r, t) {
                    a.nextTick(function () {
                      e[c] ? t(e[c]) : r(m(void 0, !0));
                    });
                  });
                var t,
                  o = this[p];
                if (o) t = new Promise(v(o, this));
                else {
                  var i = this[h].read();
                  if (null !== i) return Promise.resolve(m(i, !1));
                  t = new Promise(this[f]);
                }
                return ((this[p] = t), t);
              },
            }),
            o(t, Symbol.asyncIterator, function () {
              return this;
            }),
            o(t, "return", function () {
              var e = this;
              return new Promise(function (a, r) {
                e[h].destroy(null, function (e) {
                  e ? r(e) : a(m(void 0, !0));
                });
              });
            }),
            t),
            y,
          ),
          _ = function (e) {
            var a,
              r = Object.create(
                w,
                ((a = {}),
                o(a, h, { value: e, writable: !0 }),
                o(a, s, { value: null, writable: !0 }),
                o(a, u, { value: null, writable: !0 }),
                o(a, c, { value: null, writable: !0 }),
                o(a, d, { value: e._readableState.endEmitted, writable: !0 }),
                o(a, f, {
                  value: function (e, a) {
                    var t = r[h].read();
                    t
                      ? ((r[p] = null),
                        (r[s] = null),
                        (r[u] = null),
                        e(m(t, !1)))
                      : ((r[s] = e), (r[u] = a));
                  },
                  writable: !0,
                }),
                a),
              );
            return (
              (r[p] = null),
              l(e, function (e) {
                if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                  var a = r[u];
                  return (
                    null !== a &&
                      ((r[p] = null), (r[s] = null), (r[u] = null), a(e)),
                    void (r[c] = e)
                  );
                }
                var t = r[s];
                (null !== t &&
                  ((r[p] = null),
                  (r[s] = null),
                  (r[u] = null),
                  t(m(void 0, !0))),
                  (r[d] = !0));
              }),
              e.on("readable", g.bind(null, r)),
              r
            );
          };
        e.exports = _;
      }).call(this, r(18));
    },
    5237: function (e, a) {
      e.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    5238: function (e, a, r) {
      "use strict";
      e.exports = o;
      var t = r(4381);
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        t.call(this, e);
      }
      (r(16)(o, t),
        (o.prototype._transform = function (e, a, r) {
          r(null, e);
        }));
    },
    5239: function (e, a, r) {
      "use strict";
      var t;
      function o(e) {
        var a = !1;
        return function () {
          a || ((a = !0), e.apply(void 0, arguments));
        };
      }
      var i = r(3181).codes,
        n = i.ERR_MISSING_ARGS,
        l = i.ERR_STREAM_DESTROYED;
      function s(e) {
        if (e) throw e;
      }
      function u(e) {
        return e.setHeader && "function" === typeof e.abort;
      }
      function c(e, a, i, n) {
        n = o(n);
        var s = !1;
        (e.on("close", function () {
          s = !0;
        }),
          void 0 === t && (t = r(3689)),
          t(e, { readable: a, writable: i }, function (e) {
            if (e) return n(e);
            ((s = !0), n());
          }));
        var c = !1;
        return function (a) {
          if (!s && !c)
            return (
              (c = !0),
              u(e)
                ? e.abort()
                : "function" === typeof e.destroy
                  ? e.destroy()
                  : void n(a || new l("pipe"))
            );
        };
      }
      function d(e) {
        e();
      }
      function p(e, a) {
        return e.pipe(a);
      }
      function f(e) {
        return e.length
          ? "function" !== typeof e[e.length - 1]
            ? s
            : e.pop()
          : s;
      }
      function h() {
        for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
          a[r] = arguments[r];
        var t,
          o = f(a);
        if ((Array.isArray(a[0]) && (a = a[0]), a.length < 2))
          throw new n("streams");
        var i = a.map(function (e, r) {
          var n = r < a.length - 1,
            l = r > 0;
          return c(e, n, l, function (e) {
            (t || (t = e), e && i.forEach(d), n || (i.forEach(d), o(t)));
          });
        });
        return a.reduce(p);
      }
      e.exports = h;
    },
  },
]);
