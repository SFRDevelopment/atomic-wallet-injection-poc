(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [235, 234],
  {
    2807: function (t, n) {},
    2841: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Any = n.protobufPackage = void 0));
        const r = i(o(2754)),
          s = i(o(2755));
        n.protobufPackage = "google.protobuf";
        const a = { typeUrl: "" };
        n.Any = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.typeUrl && n.uint32(10).string(t.typeUrl),
              0 !== t.value.length && n.uint32(18).bytes(t.value),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, a);
            r.value = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.typeUrl = o.string();
                  break;
                case 2:
                  r.value = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            return (
              (n.value = new Uint8Array()),
              void 0 !== t.typeUrl && null !== t.typeUrl
                ? (n.typeUrl = String(t.typeUrl))
                : (n.typeUrl = ""),
              void 0 !== t.value && null !== t.value && (n.value = l(t.value)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.typeUrl && (n.typeUrl = t.typeUrl),
              void 0 !== t.value &&
                (n.value = f(void 0 !== t.value ? t.value : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, a);
            return (
              void 0 !== t.typeUrl && null !== t.typeUrl
                ? (n.typeUrl = t.typeUrl)
                : (n.typeUrl = ""),
              void 0 !== t.value && null !== t.value
                ? (n.value = t.value)
                : (n.value = new Uint8Array()),
              n
            );
          },
        };
        var d = (() => {
          if ("undefined" !== typeof d) return d;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const u =
          d.atob || ((t) => d.Buffer.from(t, "base64").toString("binary"));
        function l(t) {
          const n = u(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const c =
          d.btoa || ((t) => d.Buffer.from(t, "binary").toString("base64"));
        function f(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return c(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    2889: function (t, n, o) {
      !(function (n, o) {
        t.exports = o();
      })(0, function () {
        return (
          (t = {
            418: function (t, n) {
              !(function (t, n) {
                for (var o in n) t[o] = n[o];
              })(
                n,
                (function (t) {
                  var n = {};
                  function o(i) {
                    if (n[i]) return n[i].exports;
                    var r = (n[i] = { i: i, l: !1, exports: {} });
                    return (
                      t[i].call(r.exports, r, r.exports, o),
                      (r.l = !0),
                      r.exports
                    );
                  }
                  return (
                    (o.m = t),
                    (o.c = n),
                    (o.i = function (t) {
                      return t;
                    }),
                    (o.d = function (t, n, i) {
                      o.o(t, n) ||
                        Object.defineProperty(t, n, {
                          configurable: !1,
                          enumerable: !0,
                          get: i,
                        });
                    }),
                    (o.n = function (t) {
                      var n =
                        t && t.__esModule
                          ? function () {
                              return t.default;
                            }
                          : function () {
                              return t;
                            };
                      return (o.d(n, "a", n), n);
                    }),
                    (o.o = function (t, n) {
                      return Object.prototype.hasOwnProperty.call(t, n);
                    }),
                    (o.p = ""),
                    o((o.s = 1))
                  );
                })([
                  function (t, n, o) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", { value: !0 });
                    var i = o(3),
                      r = (function () {
                        function t(t, n) {
                          (void 0 === t && (t = {}),
                            void 0 === n && (n = { splitValues: !1 }));
                          var o,
                            r = this;
                          ((this.headersMap = {}),
                            t &&
                              ("undefined" != typeof Headers &&
                              t instanceof Headers
                                ? i.getHeaderKeys(t).forEach(function (o) {
                                    i.getHeaderValues(t, o).forEach(
                                      function (t) {
                                        n.splitValues
                                          ? r.append(o, i.splitHeaderValue(t))
                                          : r.append(o, t);
                                      },
                                    );
                                  })
                                : "object" == typeof (o = t) &&
                                    "object" == typeof o.headersMap &&
                                    "function" == typeof o.forEach
                                  ? t.forEach(function (t, n) {
                                      r.append(t, n);
                                    })
                                  : "undefined" != typeof Map &&
                                      t instanceof Map
                                    ? t.forEach(function (t, n) {
                                        r.append(n, t);
                                      })
                                    : "string" == typeof t
                                      ? this.appendFromString(t)
                                      : "object" == typeof t &&
                                        Object.getOwnPropertyNames(t).forEach(
                                          function (n) {
                                            var o = t[n];
                                            Array.isArray(o)
                                              ? o.forEach(function (t) {
                                                  r.append(n, t);
                                                })
                                              : r.append(n, o);
                                          },
                                        )));
                        }
                        return (
                          (t.prototype.appendFromString = function (t) {
                            for (
                              var n = t.split("\r\n"), o = 0;
                              o < n.length;
                              o++
                            ) {
                              var i = n[o],
                                r = i.indexOf(":");
                              if (r > 0) {
                                var s = i.substring(0, r).trim(),
                                  a = i.substring(r + 1).trim();
                                this.append(s, a);
                              }
                            }
                          }),
                          (t.prototype.delete = function (t, n) {
                            var o = i.normalizeName(t);
                            if (void 0 === n) delete this.headersMap[o];
                            else {
                              var r = this.headersMap[o];
                              if (r) {
                                var s = r.indexOf(n);
                                (s >= 0 && r.splice(s, 1),
                                  0 === r.length && delete this.headersMap[o]);
                              }
                            }
                          }),
                          (t.prototype.append = function (t, n) {
                            var o = this,
                              r = i.normalizeName(t);
                            (Array.isArray(this.headersMap[r]) ||
                              (this.headersMap[r] = []),
                              Array.isArray(n)
                                ? n.forEach(function (t) {
                                    o.headersMap[r].push(i.normalizeValue(t));
                                  })
                                : this.headersMap[r].push(i.normalizeValue(n)));
                          }),
                          (t.prototype.set = function (t, n) {
                            var o = i.normalizeName(t);
                            if (Array.isArray(n)) {
                              var r = [];
                              (n.forEach(function (t) {
                                r.push(i.normalizeValue(t));
                              }),
                                (this.headersMap[o] = r));
                            } else this.headersMap[o] = [i.normalizeValue(n)];
                          }),
                          (t.prototype.has = function (t, n) {
                            var o = this.headersMap[i.normalizeName(t)];
                            if (!Array.isArray(o)) return !1;
                            if (void 0 !== n) {
                              var r = i.normalizeValue(n);
                              return o.indexOf(r) >= 0;
                            }
                            return !0;
                          }),
                          (t.prototype.get = function (t) {
                            var n = this.headersMap[i.normalizeName(t)];
                            return void 0 !== n ? n.concat() : [];
                          }),
                          (t.prototype.forEach = function (t) {
                            var n = this;
                            Object.getOwnPropertyNames(this.headersMap).forEach(
                              function (o) {
                                t(o, n.headersMap[o]);
                              },
                              this,
                            );
                          }),
                          (t.prototype.toHeaders = function () {
                            if ("undefined" != typeof Headers) {
                              var t = new Headers();
                              return (
                                this.forEach(function (n, o) {
                                  o.forEach(function (o) {
                                    t.append(n, o);
                                  });
                                }),
                                t
                              );
                            }
                            throw new Error("Headers class is not defined");
                          }),
                          t
                        );
                      })();
                    n.BrowserHeaders = r;
                  },
                  function (t, n, o) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", { value: !0 });
                    var i = o(0);
                    n.BrowserHeaders = i.BrowserHeaders;
                  },
                  function (t, n, o) {
                    "use strict";
                    (Object.defineProperty(n, "__esModule", { value: !0 }),
                      (n.iterateHeaders = function (t, n) {
                        for (
                          var o = t[Symbol.iterator](), i = o.next();
                          !i.done;
                        )
                          (n(i.value[0]), (i = o.next()));
                      }),
                      (n.iterateHeadersKeys = function (t, n) {
                        for (var o = t.keys(), i = o.next(); !i.done; )
                          (n(i.value), (i = o.next()));
                      }));
                  },
                  function (t, n, o) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", { value: !0 });
                    var i = o(2);
                    ((n.normalizeName = function (t) {
                      if (
                        ("string" != typeof t && (t = String(t)),
                        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                      )
                        throw new TypeError(
                          "Invalid character in header field name",
                        );
                      return t.toLowerCase();
                    }),
                      (n.normalizeValue = function (t) {
                        return ("string" != typeof t && (t = String(t)), t);
                      }),
                      (n.getHeaderValues = function (t, n) {
                        var o = t;
                        if (o instanceof Headers && o.getAll)
                          return o.getAll(n);
                        var i = o.get(n);
                        return i && "string" == typeof i ? [i] : i;
                      }),
                      (n.getHeaderKeys = function (t) {
                        var n = t,
                          o = {},
                          r = [];
                        return (
                          n.keys
                            ? i.iterateHeadersKeys(n, function (t) {
                                o[t] || ((o[t] = !0), r.push(t));
                              })
                            : n.forEach
                              ? n.forEach(function (t, n) {
                                  o[n] || ((o[n] = !0), r.push(n));
                                })
                              : i.iterateHeaders(n, function (t) {
                                  var n = t[0];
                                  o[n] || ((o[n] = !0), r.push(n));
                                }),
                          r
                        );
                      }),
                      (n.splitHeaderValue = function (t) {
                        var n = [];
                        return (
                          t.split(", ").forEach(function (t) {
                            t.split(",").forEach(function (t) {
                              n.push(t);
                            });
                          }),
                          n
                        );
                      }));
                  },
                ]),
              );
            },
            617: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.ChunkParser =
                  n.ChunkType =
                  n.encodeASCII =
                  n.decodeASCII =
                    void 0));
              var i,
                r = o(65);
              function s(t) {
                return (
                  9 === (n = t) || 10 === n || 13 === n || (t >= 32 && t <= 126)
                );
                var n;
              }
              function a(t) {
                for (var n = 0; n !== t.length; ++n)
                  if (!s(t[n]))
                    throw new Error("Metadata is not valid (printable) ASCII");
                return String.fromCharCode.apply(
                  String,
                  Array.prototype.slice.call(t),
                );
              }
              function d(t) {
                return 128 == (128 & t.getUint8(0));
              }
              function u(t) {
                return t.getUint32(1, !1);
              }
              function l(t, n, o) {
                return t.byteLength - n >= o;
              }
              function c(t, n, o) {
                if (t.slice) return t.slice(n, o);
                var i = t.length;
                void 0 !== o && (i = o);
                for (var r = new Uint8Array(i - n), s = 0, a = n; a < i; a++)
                  r[s++] = t[a];
                return r;
              }
              ((n.decodeASCII = a),
                (n.encodeASCII = function (t) {
                  for (
                    var n = new Uint8Array(t.length), o = 0;
                    o !== t.length;
                    ++o
                  ) {
                    var i = t.charCodeAt(o);
                    if (!s(i))
                      throw new Error("Metadata contains invalid ASCII");
                    n[o] = i;
                  }
                  return n;
                }),
                (function (t) {
                  ((t[(t.MESSAGE = 1)] = "MESSAGE"),
                    (t[(t.TRAILERS = 2)] = "TRAILERS"));
                })((i = n.ChunkType || (n.ChunkType = {}))));
              var f = (function () {
                function t() {
                  ((this.buffer = null), (this.position = 0));
                }
                return (
                  (t.prototype.parse = function (t, n) {
                    if (0 === t.length && n) return [];
                    var o,
                      s = [];
                    if (null == this.buffer)
                      ((this.buffer = t), (this.position = 0));
                    else if (this.position === this.buffer.byteLength)
                      ((this.buffer = t), (this.position = 0));
                    else {
                      var f = this.buffer.byteLength - this.position,
                        p = new Uint8Array(f + t.byteLength),
                        g = c(this.buffer, this.position);
                      p.set(g, 0);
                      var m = new Uint8Array(t);
                      (p.set(m, f), (this.buffer = p), (this.position = 0));
                    }
                    for (;;) {
                      if (!l(this.buffer, this.position, 5)) return s;
                      var v = c(this.buffer, this.position, this.position + 5),
                        h = new DataView(v.buffer, v.byteOffset, v.byteLength),
                        b = u(h);
                      if (!l(this.buffer, this.position, 5 + b)) return s;
                      var O = c(
                        this.buffer,
                        this.position + 5,
                        this.position + 5 + b,
                      );
                      if (((this.position += 5 + b), d(h)))
                        return (
                          s.push({
                            chunkType: i.TRAILERS,
                            trailers: ((o = O), new r.Metadata(a(o))),
                          }),
                          s
                        );
                      s.push({ chunkType: i.MESSAGE, data: O });
                    }
                  }),
                  t
                );
              })();
              n.ChunkParser = f;
            },
            8: function (t, n) {
              "use strict";
              var o;
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.httpStatusToCode = n.Code = void 0),
                (function (t) {
                  ((t[(t.OK = 0)] = "OK"),
                    (t[(t.Canceled = 1)] = "Canceled"),
                    (t[(t.Unknown = 2)] = "Unknown"),
                    (t[(t.InvalidArgument = 3)] = "InvalidArgument"),
                    (t[(t.DeadlineExceeded = 4)] = "DeadlineExceeded"),
                    (t[(t.NotFound = 5)] = "NotFound"),
                    (t[(t.AlreadyExists = 6)] = "AlreadyExists"),
                    (t[(t.PermissionDenied = 7)] = "PermissionDenied"),
                    (t[(t.ResourceExhausted = 8)] = "ResourceExhausted"),
                    (t[(t.FailedPrecondition = 9)] = "FailedPrecondition"),
                    (t[(t.Aborted = 10)] = "Aborted"),
                    (t[(t.OutOfRange = 11)] = "OutOfRange"),
                    (t[(t.Unimplemented = 12)] = "Unimplemented"),
                    (t[(t.Internal = 13)] = "Internal"),
                    (t[(t.Unavailable = 14)] = "Unavailable"),
                    (t[(t.DataLoss = 15)] = "DataLoss"),
                    (t[(t.Unauthenticated = 16)] = "Unauthenticated"));
                })((o = n.Code || (n.Code = {}))),
                (n.httpStatusToCode = function (t) {
                  switch (t) {
                    case 0:
                      return o.Internal;
                    case 200:
                      return o.OK;
                    case 400:
                      return o.InvalidArgument;
                    case 401:
                      return o.Unauthenticated;
                    case 403:
                      return o.PermissionDenied;
                    case 404:
                      return o.NotFound;
                    case 409:
                      return o.Aborted;
                    case 412:
                      return o.FailedPrecondition;
                    case 429:
                      return o.ResourceExhausted;
                    case 499:
                      return o.Canceled;
                    case 500:
                      return o.Unknown;
                    case 501:
                      return o.Unimplemented;
                    case 503:
                      return o.Unavailable;
                    case 504:
                      return o.DeadlineExceeded;
                    default:
                      return o.Unknown;
                  }
                }));
            },
            934: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.client = void 0));
              var i = o(65),
                r = o(617),
                s = o(8),
                a = o(346),
                d = o(57),
                u = o(882);
              n.client = function (t, n) {
                return new l(t, n);
              };
              var l = (function () {
                function t(t, n) {
                  ((this.started = !1),
                    (this.sentFirstMessage = !1),
                    (this.completed = !1),
                    (this.closed = !1),
                    (this.finishedSending = !1),
                    (this.onHeadersCallbacks = []),
                    (this.onMessageCallbacks = []),
                    (this.onEndCallbacks = []),
                    (this.parser = new r.ChunkParser()),
                    (this.methodDefinition = t),
                    (this.props = n),
                    this.createTransport());
                }
                return (
                  (t.prototype.createTransport = function () {
                    var t =
                        this.props.host +
                        "/" +
                        this.methodDefinition.service.serviceName +
                        "/" +
                        this.methodDefinition.methodName,
                      n = {
                        methodDefinition: this.methodDefinition,
                        debug: this.props.debug || !1,
                        url: t,
                        onHeaders: this.onTransportHeaders.bind(this),
                        onChunk: this.onTransportChunk.bind(this),
                        onEnd: this.onTransportEnd.bind(this),
                      };
                    this.props.transport
                      ? (this.transport = this.props.transport(n))
                      : (this.transport = d.makeDefaultTransport(n));
                  }),
                  (t.prototype.onTransportHeaders = function (t, n) {
                    if (
                      (this.props.debug && a.debug("onHeaders", t, n),
                      this.closed)
                    )
                      this.props.debug &&
                        a.debug(
                          "grpc.onHeaders received after request was closed - ignoring",
                        );
                    else if (0 === n);
                    else {
                      ((this.responseHeaders = t),
                        this.props.debug &&
                          a.debug(
                            "onHeaders.responseHeaders",
                            JSON.stringify(this.responseHeaders, null, 2),
                          ));
                      var o = c(t);
                      this.props.debug && a.debug("onHeaders.gRPCStatus", o);
                      var i = o && o >= 0 ? o : s.httpStatusToCode(n);
                      this.props.debug && a.debug("onHeaders.code", i);
                      var r = t.get("grpc-message") || [];
                      if (
                        (this.props.debug &&
                          a.debug("onHeaders.gRPCMessage", r),
                        this.rawOnHeaders(t),
                        i !== s.Code.OK)
                      ) {
                        var d = this.decodeGRPCStatus(r[0]);
                        this.rawOnError(i, d, t);
                      }
                    }
                  }),
                  (t.prototype.onTransportChunk = function (t) {
                    var n = this;
                    if (this.closed)
                      this.props.debug &&
                        a.debug(
                          "grpc.onChunk received after request was closed - ignoring",
                        );
                    else {
                      var o = [];
                      try {
                        o = this.parser.parse(t);
                      } catch (t) {
                        return (
                          this.props.debug &&
                            a.debug("onChunk.parsing error", t, t.message),
                          void this.rawOnError(
                            s.Code.Internal,
                            "parsing error: " + t.message,
                          )
                        );
                      }
                      o.forEach(function (t) {
                        if (t.chunkType === r.ChunkType.MESSAGE) {
                          var o =
                            n.methodDefinition.responseType.deserializeBinary(
                              t.data,
                            );
                          n.rawOnMessage(o);
                        } else
                          t.chunkType === r.ChunkType.TRAILERS &&
                            (n.responseHeaders
                              ? ((n.responseTrailers = new i.Metadata(
                                  t.trailers,
                                )),
                                n.props.debug &&
                                  a.debug(
                                    "onChunk.trailers",
                                    n.responseTrailers,
                                  ))
                              : ((n.responseHeaders = new i.Metadata(
                                  t.trailers,
                                )),
                                n.rawOnHeaders(n.responseHeaders)));
                      });
                    }
                  }),
                  (t.prototype.onTransportEnd = function () {
                    if (
                      (this.props.debug && a.debug("grpc.onEnd"), this.closed)
                    )
                      this.props.debug &&
                        a.debug(
                          "grpc.onEnd received after request was closed - ignoring",
                        );
                    else if (void 0 !== this.responseTrailers) {
                      var t = c(this.responseTrailers);
                      if (null !== t) {
                        var n = this.responseTrailers.get("grpc-message"),
                          o = this.decodeGRPCStatus(n[0]);
                        this.rawOnEnd(t, o, this.responseTrailers);
                      } else
                        this.rawOnError(
                          s.Code.Internal,
                          "Response closed without grpc-status (Trailers provided)",
                        );
                    } else {
                      if (void 0 === this.responseHeaders)
                        return void this.rawOnError(
                          s.Code.Unknown,
                          "Response closed without headers",
                        );
                      var i = c(this.responseHeaders),
                        r = this.responseHeaders.get("grpc-message");
                      if (
                        (this.props.debug &&
                          a.debug("grpc.headers only response ", i, r),
                        null === i)
                      )
                        return void this.rawOnEnd(
                          s.Code.Unknown,
                          "Response closed without grpc-status (Headers only)",
                          this.responseHeaders,
                        );
                      var d = this.decodeGRPCStatus(r[0]);
                      this.rawOnEnd(i, d, this.responseHeaders);
                    }
                  }),
                  (t.prototype.decodeGRPCStatus = function (t) {
                    if (!t) return "";
                    try {
                      return decodeURIComponent(t);
                    } catch (n) {
                      return t;
                    }
                  }),
                  (t.prototype.rawOnEnd = function (t, n, o) {
                    var i = this;
                    (this.props.debug && a.debug("rawOnEnd", t, n, o),
                      this.completed ||
                        ((this.completed = !0),
                        this.onEndCallbacks.forEach(function (r) {
                          if (!i.closed)
                            try {
                              r(t, n, o);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              }, 0);
                            }
                        })));
                  }),
                  (t.prototype.rawOnHeaders = function (t) {
                    (this.props.debug && a.debug("rawOnHeaders", t),
                      this.completed ||
                        this.onHeadersCallbacks.forEach(function (n) {
                          try {
                            n(t);
                          } catch (t) {
                            setTimeout(function () {
                              throw t;
                            }, 0);
                          }
                        }));
                  }),
                  (t.prototype.rawOnError = function (t, n, o) {
                    var r = this;
                    (void 0 === o && (o = new i.Metadata()),
                      this.props.debug && a.debug("rawOnError", t, n),
                      this.completed ||
                        ((this.completed = !0),
                        this.onEndCallbacks.forEach(function (i) {
                          if (!r.closed)
                            try {
                              i(t, n, o);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              }, 0);
                            }
                        })));
                  }),
                  (t.prototype.rawOnMessage = function (t) {
                    var n = this;
                    (this.props.debug && a.debug("rawOnMessage", t.toObject()),
                      this.completed ||
                        this.closed ||
                        this.onMessageCallbacks.forEach(function (o) {
                          if (!n.closed)
                            try {
                              o(t);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              }, 0);
                            }
                        }));
                  }),
                  (t.prototype.onHeaders = function (t) {
                    this.onHeadersCallbacks.push(t);
                  }),
                  (t.prototype.onMessage = function (t) {
                    this.onMessageCallbacks.push(t);
                  }),
                  (t.prototype.onEnd = function (t) {
                    this.onEndCallbacks.push(t);
                  }),
                  (t.prototype.start = function (t) {
                    if (this.started)
                      throw new Error(
                        "Client already started - cannot .start()",
                      );
                    this.started = !0;
                    var n = new i.Metadata(t || {});
                    (n.set("content-type", "application/grpc-web+proto"),
                      n.set("x-grpc-web", "1"),
                      this.transport.start(n));
                  }),
                  (t.prototype.send = function (t) {
                    if (!this.started)
                      throw new Error(
                        "Client not started - .start() must be called before .send()",
                      );
                    if (this.closed)
                      throw new Error("Client already closed - cannot .send()");
                    if (this.finishedSending)
                      throw new Error(
                        "Client already finished sending - cannot .send()",
                      );
                    if (
                      !this.methodDefinition.requestStream &&
                      this.sentFirstMessage
                    )
                      throw new Error(
                        "Message already sent for non-client-streaming method - cannot .send()",
                      );
                    this.sentFirstMessage = !0;
                    var n = u.frameRequest(t);
                    this.transport.sendMessage(n);
                  }),
                  (t.prototype.finishSend = function () {
                    if (!this.started)
                      throw new Error(
                        "Client not started - .finishSend() must be called before .close()",
                      );
                    if (this.closed)
                      throw new Error("Client already closed - cannot .send()");
                    if (this.finishedSending)
                      throw new Error(
                        "Client already finished sending - cannot .finishSend()",
                      );
                    ((this.finishedSending = !0), this.transport.finishSend());
                  }),
                  (t.prototype.close = function () {
                    if (!this.started)
                      throw new Error(
                        "Client not started - .start() must be called before .close()",
                      );
                    if (this.closed)
                      throw new Error(
                        "Client already closed - cannot .close()",
                      );
                    ((this.closed = !0),
                      this.props.debug &&
                        a.debug("request.abort aborting request"),
                      this.transport.cancel());
                  }),
                  t
                );
              })();
              function c(t) {
                var n = t.get("grpc-status") || [];
                if (n.length > 0)
                  try {
                    var o = n[0];
                    return parseInt(o, 10);
                  } catch (t) {
                    return null;
                  }
                return null;
              }
            },
            346: function (t, n) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.debug = void 0),
                (n.debug = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  console.debug
                    ? console.debug.apply(null, t)
                    : console.log.apply(null, t);
                }));
            },
            607: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.grpc = void 0));
              var i,
                r = o(418),
                s = o(57),
                a = o(229),
                d = o(540),
                u = o(210),
                l = o(859),
                c = o(8),
                f = o(938),
                p = o(35),
                g = o(934);
              (((i = n.grpc || (n.grpc = {})).setDefaultTransport =
                s.setDefaultTransportFactory),
                (i.CrossBrowserHttpTransport = l.CrossBrowserHttpTransport),
                (i.FetchReadableStreamTransport =
                  a.FetchReadableStreamTransport),
                (i.XhrTransport = u.XhrTransport),
                (i.WebsocketTransport = d.WebsocketTransport),
                (i.Code = c.Code),
                (i.Metadata = r.BrowserHeaders),
                (i.client = function (t, n) {
                  return g.client(t, n);
                }),
                (i.invoke = f.invoke),
                (i.unary = p.unary));
            },
            938: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.invoke = void 0));
              var i = o(934);
              n.invoke = function (t, n) {
                if (t.requestStream)
                  throw new Error(
                    ".invoke cannot be used with client-streaming methods. Use .client instead.",
                  );
                var o = i.client(t, {
                  host: n.host,
                  transport: n.transport,
                  debug: n.debug,
                });
                return (
                  n.onHeaders && o.onHeaders(n.onHeaders),
                  n.onMessage && o.onMessage(n.onMessage),
                  n.onEnd && o.onEnd(n.onEnd),
                  o.start(n.metadata),
                  o.send(n.request),
                  o.finishSend(),
                  {
                    close: function () {
                      o.close();
                    },
                  }
                );
              };
            },
            65: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.Metadata = void 0));
              var i = o(418);
              Object.defineProperty(n, "Metadata", {
                enumerable: !0,
                get: function () {
                  return i.BrowserHeaders;
                },
              });
            },
            57: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.makeDefaultTransport = n.setDefaultTransportFactory =
                  void 0));
              var i = o(859),
                r = function (t) {
                  return i.CrossBrowserHttpTransport({ withCredentials: !1 })(
                    t,
                  );
                };
              ((n.setDefaultTransportFactory = function (t) {
                r = t;
              }),
                (n.makeDefaultTransport = function (t) {
                  return r(t);
                }));
            },
            229: function (t, n, o) {
              "use strict";
              var i =
                (this && this.__assign) ||
                function () {
                  return (i =
                    Object.assign ||
                    function (t) {
                      for (var n, o = 1, i = arguments.length; o < i; o++)
                        for (var r in (n = arguments[o]))
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (t[r] = n[r]);
                      return t;
                    }).apply(this, arguments);
                };
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.detectFetchSupport = n.FetchReadableStreamTransport =
                  void 0));
              var r = o(65),
                s = o(346);
              n.FetchReadableStreamTransport = function (t) {
                return function (n) {
                  return (function (t, n) {
                    return (t.debug && s.debug("fetchRequest", t), new a(t, n));
                  })(n, t);
                };
              };
              var a = (function () {
                function t(t, n) {
                  ((this.cancelled = !1),
                    (this.controller =
                      self.AbortController && new AbortController()),
                    (this.options = t),
                    (this.init = n));
                }
                return (
                  (t.prototype.pump = function (t, n) {
                    var o = this;
                    if (((this.reader = t), this.cancelled))
                      return (
                        this.options.debug &&
                          s.debug("Fetch.pump.cancel at first pump"),
                        void this.reader.cancel().catch(function (t) {
                          o.options.debug &&
                            s.debug("Fetch.pump.reader.cancel exception", t);
                        })
                      );
                    this.reader
                      .read()
                      .then(function (t) {
                        if (t.done) return (o.options.onEnd(), n);
                        (o.options.onChunk(t.value), o.pump(o.reader, n));
                      })
                      .catch(function (t) {
                        o.cancelled
                          ? o.options.debug &&
                            s.debug("Fetch.catch - request cancelled")
                          : ((o.cancelled = !0),
                            o.options.debug &&
                              s.debug("Fetch.catch", t.message),
                            o.options.onEnd(t));
                      });
                  }),
                  (t.prototype.send = function (t) {
                    var n = this;
                    fetch(
                      this.options.url,
                      i(i({}, this.init), {
                        headers: this.metadata.toHeaders(),
                        method: "POST",
                        body: t,
                        signal: this.controller && this.controller.signal,
                      }),
                    )
                      .then(function (t) {
                        if (
                          (n.options.debug && s.debug("Fetch.response", t),
                          n.options.onHeaders(
                            new r.Metadata(t.headers),
                            t.status,
                          ),
                          !t.body)
                        )
                          return t;
                        n.pump(t.body.getReader(), t);
                      })
                      .catch(function (t) {
                        n.cancelled
                          ? n.options.debug &&
                            s.debug("Fetch.catch - request cancelled")
                          : ((n.cancelled = !0),
                            n.options.debug &&
                              s.debug("Fetch.catch", t.message),
                            n.options.onEnd(t));
                      });
                  }),
                  (t.prototype.sendMessage = function (t) {
                    this.send(t);
                  }),
                  (t.prototype.finishSend = function () {}),
                  (t.prototype.start = function (t) {
                    this.metadata = t;
                  }),
                  (t.prototype.cancel = function () {
                    var t = this;
                    this.cancelled
                      ? this.options.debug &&
                        s.debug("Fetch.cancel already cancelled")
                      : ((this.cancelled = !0),
                        this.controller
                          ? (this.options.debug &&
                              s.debug("Fetch.cancel.controller.abort"),
                            this.controller.abort())
                          : this.options.debug &&
                            s.debug("Fetch.cancel.missing abort controller"),
                        this.reader
                          ? (this.options.debug &&
                              s.debug("Fetch.cancel.reader.cancel"),
                            this.reader.cancel().catch(function (n) {
                              t.options.debug &&
                                s.debug(
                                  "Fetch.cancel.reader.cancel exception",
                                  n,
                                );
                            }))
                          : this.options.debug &&
                            s.debug("Fetch.cancel before reader"));
                  }),
                  t
                );
              })();
              n.detectFetchSupport = function () {
                return (
                  "undefined" != typeof Response &&
                  Response.prototype.hasOwnProperty("body") &&
                  "function" == typeof Headers
                );
              };
            },
            859: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.CrossBrowserHttpTransport = void 0));
              var i = o(229),
                r = o(210);
              n.CrossBrowserHttpTransport = function (t) {
                if (i.detectFetchSupport()) {
                  var n = {
                    credentials: t.withCredentials ? "include" : "same-origin",
                  };
                  return i.FetchReadableStreamTransport(n);
                }
                return r.XhrTransport({ withCredentials: t.withCredentials });
              };
            },
            210: function (t, n, o) {
              "use strict";
              var i,
                r =
                  (this && this.__extends) ||
                  ((i = function (t, n) {
                    return (i =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, n) {
                          t.__proto__ = n;
                        }) ||
                      function (t, n) {
                        for (var o in n)
                          Object.prototype.hasOwnProperty.call(n, o) &&
                            (t[o] = n[o]);
                      })(t, n);
                  }),
                  function (t, n) {
                    function o() {
                      this.constructor = t;
                    }
                    (i(t, n),
                      (t.prototype =
                        null === n
                          ? Object.create(n)
                          : ((o.prototype = n.prototype), new o())));
                  });
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.stringToArrayBuffer =
                  n.MozChunkedArrayBufferXHR =
                  n.XHR =
                  n.XhrTransport =
                    void 0));
              var s = o(65),
                a = o(346),
                d = o(849);
              n.XhrTransport = function (t) {
                return function (n) {
                  if (d.detectMozXHRSupport()) return new l(n, t);
                  if (d.detectXHROverrideMimeTypeSupport()) return new u(n, t);
                  throw new Error(
                    "This environment's XHR implementation cannot support binary transfer.",
                  );
                };
              };
              var u = (function () {
                function t(t, n) {
                  ((this.options = t), (this.init = n));
                }
                return (
                  (t.prototype.onProgressEvent = function () {
                    this.options.debug &&
                      a.debug(
                        "XHR.onProgressEvent.length: ",
                        this.xhr.response.length,
                      );
                    var t = this.xhr.response.substr(this.index);
                    this.index = this.xhr.response.length;
                    var n = f(t);
                    this.options.onChunk(n);
                  }),
                  (t.prototype.onLoadEvent = function () {
                    (this.options.debug && a.debug("XHR.onLoadEvent"),
                      this.options.onEnd());
                  }),
                  (t.prototype.onStateChange = function () {
                    (this.options.debug &&
                      a.debug("XHR.onStateChange", this.xhr.readyState),
                      this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED &&
                        this.options.onHeaders(
                          new s.Metadata(this.xhr.getAllResponseHeaders()),
                          this.xhr.status,
                        ));
                  }),
                  (t.prototype.sendMessage = function (t) {
                    this.xhr.send(t);
                  }),
                  (t.prototype.finishSend = function () {}),
                  (t.prototype.start = function (t) {
                    var n = this;
                    this.metadata = t;
                    var o = new XMLHttpRequest();
                    ((this.xhr = o),
                      o.open("POST", this.options.url),
                      this.configureXhr(),
                      this.metadata.forEach(function (t, n) {
                        o.setRequestHeader(t, n.join(", "));
                      }),
                      (o.withCredentials = Boolean(this.init.withCredentials)),
                      o.addEventListener(
                        "readystatechange",
                        this.onStateChange.bind(this),
                      ),
                      o.addEventListener(
                        "progress",
                        this.onProgressEvent.bind(this),
                      ),
                      o.addEventListener(
                        "loadend",
                        this.onLoadEvent.bind(this),
                      ),
                      o.addEventListener("error", function (t) {
                        (n.options.debug && a.debug("XHR.error", t),
                          n.options.onEnd(t.error));
                      }));
                  }),
                  (t.prototype.configureXhr = function () {
                    ((this.xhr.responseType = "text"),
                      this.xhr.overrideMimeType(
                        "text/plain; charset=x-user-defined",
                      ));
                  }),
                  (t.prototype.cancel = function () {
                    (this.options.debug && a.debug("XHR.abort"),
                      this.xhr.abort());
                  }),
                  t
                );
              })();
              n.XHR = u;
              var l = (function (t) {
                function n() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  r(n, t),
                  (n.prototype.configureXhr = function () {
                    (this.options.debug &&
                      a.debug(
                        "MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'",
                      ),
                      (this.xhr.responseType = "moz-chunked-arraybuffer"));
                  }),
                  (n.prototype.onProgressEvent = function () {
                    var t = this.xhr.response;
                    (this.options.debug &&
                      a.debug("MozXHR.onProgressEvent: ", new Uint8Array(t)),
                      this.options.onChunk(new Uint8Array(t)));
                  }),
                  n
                );
              })(u);
              function c(t, n) {
                var o = t.charCodeAt(n);
                if (o >= 55296 && o <= 56319) {
                  var i = t.charCodeAt(n + 1);
                  i >= 56320 &&
                    i <= 57343 &&
                    (o = 65536 + ((o - 55296) << 10) + (i - 56320));
                }
                return o;
              }
              function f(t) {
                for (
                  var n = new Uint8Array(t.length), o = 0, i = 0;
                  i < t.length;
                  i++
                ) {
                  var r = String.prototype.codePointAt
                    ? t.codePointAt(i)
                    : c(t, i);
                  n[o++] = 255 & r;
                }
                return n;
              }
              ((n.MozChunkedArrayBufferXHR = l), (n.stringToArrayBuffer = f));
            },
            849: function (t, n) {
              "use strict";
              var o;
              function i() {
                if (void 0 !== o) return o;
                if (XMLHttpRequest) {
                  o = new XMLHttpRequest();
                  try {
                    o.open("GET", "https://localhost");
                  } catch (t) {}
                }
                return o;
              }
              function r(t) {
                var n = i();
                if (!n) return !1;
                try {
                  return ((n.responseType = t), n.responseType === t);
                } catch (t) {}
                return !1;
              }
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.detectXHROverrideMimeTypeSupport =
                  n.detectMozXHRSupport =
                  n.xhrSupportsResponseType =
                    void 0),
                (n.xhrSupportsResponseType = r),
                (n.detectMozXHRSupport = function () {
                  return (
                    "undefined" != typeof XMLHttpRequest &&
                    r("moz-chunked-arraybuffer")
                  );
                }),
                (n.detectXHROverrideMimeTypeSupport = function () {
                  return (
                    "undefined" != typeof XMLHttpRequest &&
                    XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")
                  );
                }));
            },
            540: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.WebsocketTransport = void 0));
              var i,
                r = o(346),
                s = o(617);
              !(function (t) {
                t[(t.FINISH_SEND = 1)] = "FINISH_SEND";
              })(i || (i = {}));
              var a = new Uint8Array([1]);
              n.WebsocketTransport = function () {
                return function (t) {
                  return (function (t) {
                    t.debug && r.debug("websocketRequest", t);
                    var n,
                      o = (function (t) {
                        if ("https://" === t.substr(0, 8))
                          return "wss://" + t.substr(8);
                        if ("http://" === t.substr(0, 7))
                          return "ws://" + t.substr(7);
                        throw new Error(
                          "Websocket transport constructed with non-https:// or http:// host.",
                        );
                      })(t.url),
                      d = [];
                    function u(t) {
                      if (t === i.FINISH_SEND) n.send(a);
                      else {
                        var o = t,
                          r = new Int8Array(o.byteLength + 1);
                        (r.set(new Uint8Array([0])), r.set(o, 1), n.send(r));
                      }
                    }
                    return {
                      sendMessage: function (t) {
                        n && n.readyState !== n.CONNECTING ? u(t) : d.push(t);
                      },
                      finishSend: function () {
                        n && n.readyState !== n.CONNECTING
                          ? u(i.FINISH_SEND)
                          : d.push(i.FINISH_SEND);
                      },
                      start: function (i) {
                        (((n = new WebSocket(o, [
                          "grpc-websockets",
                        ])).binaryType = "arraybuffer"),
                          (n.onopen = function () {
                            var o;
                            (t.debug && r.debug("websocketRequest.onopen"),
                              n.send(
                                ((o = ""),
                                i.forEach(function (t, n) {
                                  o += t + ": " + n.join(", ") + "\r\n";
                                }),
                                s.encodeASCII(o)),
                              ),
                              d.forEach(function (t) {
                                u(t);
                              }));
                          }),
                          (n.onclose = function (n) {
                            (t.debug && r.debug("websocketRequest.onclose", n),
                              t.onEnd());
                          }),
                          (n.onerror = function (n) {
                            t.debug && r.debug("websocketRequest.onerror", n);
                          }),
                          (n.onmessage = function (n) {
                            t.onChunk(new Uint8Array(n.data));
                          }));
                      },
                      cancel: function () {
                        (t.debug && r.debug("websocket.abort"), n.close());
                      },
                    };
                  })(t);
                };
              };
            },
            35: function (t, n, o) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.unary = void 0));
              var i = o(65),
                r = o(934);
              n.unary = function (t, n) {
                if (t.responseStream)
                  throw new Error(
                    ".unary cannot be used with server-streaming methods. Use .invoke or .client instead.",
                  );
                if (t.requestStream)
                  throw new Error(
                    ".unary cannot be used with client-streaming methods. Use .client instead.",
                  );
                var o = null,
                  s = null,
                  a = r.client(t, {
                    host: n.host,
                    transport: n.transport,
                    debug: n.debug,
                  });
                return (
                  a.onHeaders(function (t) {
                    o = t;
                  }),
                  a.onMessage(function (t) {
                    s = t;
                  }),
                  a.onEnd(function (t, r, a) {
                    n.onEnd({
                      status: t,
                      statusMessage: r,
                      headers: o || new i.Metadata(),
                      message: s,
                      trailers: a,
                    });
                  }),
                  a.start(n.metadata),
                  a.send(n.request),
                  a.finishSend(),
                  {
                    close: function () {
                      a.close();
                    },
                  }
                );
              };
            },
            882: function (t, n) {
              "use strict";
              (Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.frameRequest = void 0),
                (n.frameRequest = function (t) {
                  var n = t.serializeBinary(),
                    o = new ArrayBuffer(n.byteLength + 5);
                  return (
                    new DataView(o, 1, 4).setUint32(0, n.length, !1),
                    new Uint8Array(o, 5).set(n),
                    new Uint8Array(o)
                  );
                }));
            },
          }),
          (n = {}),
          (function o(i) {
            if (n[i]) return n[i].exports;
            var r = (n[i] = { exports: {} });
            return (t[i].call(r.exports, r, r.exports, o), r.exports);
          })(607)
        );
        var t, n;
      });
    },
    2966: function (t, n, o) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.pbkdf2 = d),
        (n.pbkdf2Async = u));
      const i = o(379),
        r = o(130);
      function s(t, n, o, s) {
        (0, r.ahash)(t);
        const a = (0, r.checkOpts)({ dkLen: 32, asyncTick: 10 }, s),
          { c: d, dkLen: u, asyncTick: l } = a;
        if (((0, r.anumber)(d), (0, r.anumber)(u), (0, r.anumber)(l), d < 1))
          throw new Error("iterations (c) should be >= 1");
        const c = (0, r.kdfInputToBytes)(n),
          f = (0, r.kdfInputToBytes)(o),
          p = new Uint8Array(u),
          g = i.hmac.create(t, c),
          m = g._cloneInto().update(f);
        return { c: d, dkLen: u, asyncTick: l, DK: p, PRF: g, PRFSalt: m };
      }
      function a(t, n, o, i, s) {
        return (t.destroy(), n.destroy(), i && i.destroy(), (0, r.clean)(s), o);
      }
      function d(t, n, o, i) {
        const { c: d, dkLen: u, DK: l, PRF: c, PRFSalt: f } = s(t, n, o, i);
        let p;
        const g = new Uint8Array(4),
          m = (0, r.createView)(g),
          v = new Uint8Array(c.outputLen);
        for (let r = 1, s = 0; s < u; r++, s += c.outputLen) {
          const t = l.subarray(s, s + c.outputLen);
          (m.setInt32(0, r, !1),
            (p = f._cloneInto(p)).update(g).digestInto(v),
            t.set(v.subarray(0, t.length)));
          for (let n = 1; n < d; n++) {
            c._cloneInto(p).update(v).digestInto(v);
            for (let n = 0; n < t.length; n++) t[n] ^= v[n];
          }
        }
        return a(c, f, l, p, v);
      }
      async function u(t, n, o, i) {
        const {
          c: d,
          dkLen: u,
          asyncTick: l,
          DK: c,
          PRF: f,
          PRFSalt: p,
        } = s(t, n, o, i);
        let g;
        const m = new Uint8Array(4),
          v = (0, r.createView)(m),
          h = new Uint8Array(f.outputLen);
        for (let s = 1, a = 0; a < u; s++, a += f.outputLen) {
          const t = c.subarray(a, a + f.outputLen);
          (v.setInt32(0, s, !1),
            (g = p._cloneInto(g)).update(m).digestInto(h),
            t.set(h.subarray(0, t.length)),
            await (0, r.asyncLoop)(d - 1, l, () => {
              f._cloneInto(g).update(h).digestInto(h);
              for (let n = 0; n < t.length; n++) t[n] ^= h[n];
            }));
        }
        return a(f, p, c, g, h);
      }
    },
    3021: function (t, n, o) {
      "use strict";
      function i(t, n) {
        var o = new Array(arguments.length - 1),
          i = 0,
          r = 2,
          s = !0;
        while (r < arguments.length) o[i++] = arguments[r++];
        return new Promise(function (r, a) {
          o[i] = function (t) {
            if (s)
              if (((s = !1), t)) a(t);
              else {
                var n = new Array(arguments.length - 1),
                  o = 0;
                while (o < n.length) n[o++] = arguments[o];
                r.apply(null, n);
              }
          };
          try {
            t.apply(n || null, o);
          } catch (d) {
            s && ((s = !1), a(d));
          }
        });
      }
      t.exports = i;
    },
    3022: function (t, n, o) {
      "use strict";
      var i = n;
      i.length = function (t) {
        var n = t.length;
        if (!n) return 0;
        var o = 0;
        while (--n % 4 > 1 && "=" === t.charAt(n)) ++o;
        return Math.ceil(3 * t.length) / 4 - o;
      };
      for (var r = new Array(64), s = new Array(123), a = 0; a < 64; )
        s[
          (r[a] =
            a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : (a - 59) | 43)
        ] = a++;
      i.encode = function (t, n, o) {
        var i,
          s = null,
          a = [],
          d = 0,
          u = 0;
        while (n < o) {
          var l = t[n++];
          switch (u) {
            case 0:
              ((a[d++] = r[l >> 2]), (i = (3 & l) << 4), (u = 1));
              break;
            case 1:
              ((a[d++] = r[i | (l >> 4)]), (i = (15 & l) << 2), (u = 2));
              break;
            case 2:
              ((a[d++] = r[i | (l >> 6)]), (a[d++] = r[63 & l]), (u = 0));
              break;
          }
          d > 8191 &&
            ((s || (s = [])).push(String.fromCharCode.apply(String, a)),
            (d = 0));
        }
        return (
          u && ((a[d++] = r[i]), (a[d++] = 61), 1 === u && (a[d++] = 61)),
          s
            ? (d && s.push(String.fromCharCode.apply(String, a.slice(0, d))),
              s.join(""))
            : String.fromCharCode.apply(String, a.slice(0, d))
        );
      };
      var d = "invalid encoding";
      ((i.decode = function (t, n, o) {
        for (var i, r = o, a = 0, u = 0; u < t.length; ) {
          var l = t.charCodeAt(u++);
          if (61 === l && a > 1) break;
          if (void 0 === (l = s[l])) throw Error(d);
          switch (a) {
            case 0:
              ((i = l), (a = 1));
              break;
            case 1:
              ((n[o++] = (i << 2) | ((48 & l) >> 4)), (i = l), (a = 2));
              break;
            case 2:
              ((n[o++] = ((15 & i) << 4) | ((60 & l) >> 2)), (i = l), (a = 3));
              break;
            case 3:
              ((n[o++] = ((3 & i) << 6) | l), (a = 0));
              break;
          }
        }
        if (1 === a) throw Error(d);
        return o - r;
      }),
        (i.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, n, o) {
      "use strict";
      function i() {
        this._listeners = {};
      }
      ((t.exports = i),
        (i.prototype.on = function (t, n, o) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: n,
              ctx: o || this,
            }),
            this
          );
        }),
        (i.prototype.off = function (t, n) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === n) this._listeners[t] = [];
          else
            for (var o = this._listeners[t], i = 0; i < o.length; )
              o[i].fn === n ? o.splice(i, 1) : ++i;
          return this;
        }),
        (i.prototype.emit = function (t) {
          var n = this._listeners[t];
          if (n) {
            for (var o = [], i = 1; i < arguments.length; )
              o.push(arguments[i++]);
            for (i = 0; i < n.length; ) n[i].fn.apply(n[i++].ctx, o);
          }
          return this;
        }));
    },
    3024: function (t, n, o) {
      "use strict";
      function i(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var n = new Float32Array([-0]),
                  o = new Uint8Array(n.buffer),
                  i = 128 === o[3];
                function r(t, i, r) {
                  ((n[0] = t),
                    (i[r] = o[0]),
                    (i[r + 1] = o[1]),
                    (i[r + 2] = o[2]),
                    (i[r + 3] = o[3]));
                }
                function s(t, i, r) {
                  ((n[0] = t),
                    (i[r] = o[3]),
                    (i[r + 1] = o[2]),
                    (i[r + 2] = o[1]),
                    (i[r + 3] = o[0]));
                }
                function a(t, i) {
                  return (
                    (o[0] = t[i]),
                    (o[1] = t[i + 1]),
                    (o[2] = t[i + 2]),
                    (o[3] = t[i + 3]),
                    n[0]
                  );
                }
                function d(t, i) {
                  return (
                    (o[3] = t[i]),
                    (o[2] = t[i + 1]),
                    (o[1] = t[i + 2]),
                    (o[0] = t[i + 3]),
                    n[0]
                  );
                }
                ((t.writeFloatLE = i ? r : s),
                  (t.writeFloatBE = i ? s : r),
                  (t.readFloatLE = i ? a : d),
                  (t.readFloatBE = i ? d : a));
              })()
            : (function () {
                function n(t, n, o, i) {
                  var r = n < 0 ? 1 : 0;
                  if ((r && (n = -n), 0 === n))
                    t(1 / n > 0 ? 0 : 2147483648, o, i);
                  else if (isNaN(n)) t(2143289344, o, i);
                  else if (n > 34028234663852886e22)
                    t(((r << 31) | 2139095040) >>> 0, o, i);
                  else if (n < 11754943508222875e-54)
                    t(
                      ((r << 31) | Math.round(n / 1401298464324817e-60)) >>> 0,
                      o,
                      i,
                    );
                  else {
                    var s = Math.floor(Math.log(n) / Math.LN2),
                      a = 8388607 & Math.round(n * Math.pow(2, -s) * 8388608);
                    t(((r << 31) | ((s + 127) << 23) | a) >>> 0, o, i);
                  }
                }
                function o(t, n, o) {
                  var i = t(n, o),
                    r = 2 * (i >> 31) + 1,
                    s = (i >>> 23) & 255,
                    a = 8388607 & i;
                  return 255 === s
                    ? a
                      ? NaN
                      : r * (1 / 0)
                    : 0 === s
                      ? 1401298464324817e-60 * r * a
                      : r * Math.pow(2, s - 150) * (a + 8388608);
                }
                ((t.writeFloatLE = n.bind(null, r)),
                  (t.writeFloatBE = n.bind(null, s)),
                  (t.readFloatLE = o.bind(null, a)),
                  (t.readFloatBE = o.bind(null, d)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var n = new Float64Array([-0]),
                  o = new Uint8Array(n.buffer),
                  i = 128 === o[7];
                function r(t, i, r) {
                  ((n[0] = t),
                    (i[r] = o[0]),
                    (i[r + 1] = o[1]),
                    (i[r + 2] = o[2]),
                    (i[r + 3] = o[3]),
                    (i[r + 4] = o[4]),
                    (i[r + 5] = o[5]),
                    (i[r + 6] = o[6]),
                    (i[r + 7] = o[7]));
                }
                function s(t, i, r) {
                  ((n[0] = t),
                    (i[r] = o[7]),
                    (i[r + 1] = o[6]),
                    (i[r + 2] = o[5]),
                    (i[r + 3] = o[4]),
                    (i[r + 4] = o[3]),
                    (i[r + 5] = o[2]),
                    (i[r + 6] = o[1]),
                    (i[r + 7] = o[0]));
                }
                function a(t, i) {
                  return (
                    (o[0] = t[i]),
                    (o[1] = t[i + 1]),
                    (o[2] = t[i + 2]),
                    (o[3] = t[i + 3]),
                    (o[4] = t[i + 4]),
                    (o[5] = t[i + 5]),
                    (o[6] = t[i + 6]),
                    (o[7] = t[i + 7]),
                    n[0]
                  );
                }
                function d(t, i) {
                  return (
                    (o[7] = t[i]),
                    (o[6] = t[i + 1]),
                    (o[5] = t[i + 2]),
                    (o[4] = t[i + 3]),
                    (o[3] = t[i + 4]),
                    (o[2] = t[i + 5]),
                    (o[1] = t[i + 6]),
                    (o[0] = t[i + 7]),
                    n[0]
                  );
                }
                ((t.writeDoubleLE = i ? r : s),
                  (t.writeDoubleBE = i ? s : r),
                  (t.readDoubleLE = i ? a : d),
                  (t.readDoubleBE = i ? d : a));
              })()
            : (function () {
                function n(t, n, o, i, r, s) {
                  var a = i < 0 ? 1 : 0;
                  if ((a && (i = -i), 0 === i))
                    (t(0, r, s + n), t(1 / i > 0 ? 0 : 2147483648, r, s + o));
                  else if (isNaN(i)) (t(0, r, s + n), t(2146959360, r, s + o));
                  else if (i > 17976931348623157e292)
                    (t(0, r, s + n),
                      t(((a << 31) | 2146435072) >>> 0, r, s + o));
                  else {
                    var d;
                    if (i < 22250738585072014e-324)
                      ((d = i / 5e-324),
                        t(d >>> 0, r, s + n),
                        t(((a << 31) | (d / 4294967296)) >>> 0, r, s + o));
                    else {
                      var u = Math.floor(Math.log(i) / Math.LN2);
                      (1024 === u && (u = 1023),
                        (d = i * Math.pow(2, -u)),
                        t((4503599627370496 * d) >>> 0, r, s + n),
                        t(
                          ((a << 31) |
                            ((u + 1023) << 20) |
                            ((1048576 * d) & 1048575)) >>>
                            0,
                          r,
                          s + o,
                        ));
                    }
                  }
                }
                function o(t, n, o, i, r) {
                  var s = t(i, r + n),
                    a = t(i, r + o),
                    d = 2 * (a >> 31) + 1,
                    u = (a >>> 20) & 2047,
                    l = 4294967296 * (1048575 & a) + s;
                  return 2047 === u
                    ? l
                      ? NaN
                      : d * (1 / 0)
                    : 0 === u
                      ? 5e-324 * d * l
                      : d * Math.pow(2, u - 1075) * (l + 4503599627370496);
                }
                ((t.writeDoubleLE = n.bind(null, r, 0, 4)),
                  (t.writeDoubleBE = n.bind(null, s, 4, 0)),
                  (t.readDoubleLE = o.bind(null, a, 0, 4)),
                  (t.readDoubleBE = o.bind(null, d, 4, 0)));
              })(),
          t
        );
      }
      function r(t, n, o) {
        ((n[o] = 255 & t),
          (n[o + 1] = (t >>> 8) & 255),
          (n[o + 2] = (t >>> 16) & 255),
          (n[o + 3] = t >>> 24));
      }
      function s(t, n, o) {
        ((n[o] = t >>> 24),
          (n[o + 1] = (t >>> 16) & 255),
          (n[o + 2] = (t >>> 8) & 255),
          (n[o + 3] = 255 & t));
      }
      function a(t, n) {
        return (
          (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16) | (t[n + 3] << 24)) >>> 0
        );
      }
      function d(t, n) {
        return (
          ((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3]) >>> 0
        );
      }
      t.exports = i(i);
    },
    3025: function (module, exports, __webpack_require__) {
      "use strict";
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (e) {}
        return null;
      }
      module.exports = inquire;
    },
    3026: function (t, n, o) {
      "use strict";
      var i = n;
      ((i.length = function (t) {
        for (var n = 0, o = 0, i = 0; i < t.length; ++i)
          ((o = t.charCodeAt(i)),
            o < 128
              ? (n += 1)
              : o < 2048
                ? (n += 2)
                : 55296 === (64512 & o) &&
                    56320 === (64512 & t.charCodeAt(i + 1))
                  ? (++i, (n += 4))
                  : (n += 3));
        return n;
      }),
        (i.read = function (t, n, o) {
          var i = o - n;
          if (i < 1) return "";
          var r,
            s = null,
            a = [],
            d = 0;
          while (n < o)
            ((r = t[n++]),
              r < 128
                ? (a[d++] = r)
                : r > 191 && r < 224
                  ? (a[d++] = ((31 & r) << 6) | (63 & t[n++]))
                  : r > 239 && r < 365
                    ? ((r =
                        (((7 & r) << 18) |
                          ((63 & t[n++]) << 12) |
                          ((63 & t[n++]) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (a[d++] = 55296 + (r >> 10)),
                      (a[d++] = 56320 + (1023 & r)))
                    : (a[d++] =
                        ((15 & r) << 12) |
                        ((63 & t[n++]) << 6) |
                        (63 & t[n++])),
              d > 8191 &&
                ((s || (s = [])).push(String.fromCharCode.apply(String, a)),
                (d = 0)));
          return s
            ? (d && s.push(String.fromCharCode.apply(String, a.slice(0, d))),
              s.join(""))
            : String.fromCharCode.apply(String, a.slice(0, d));
        }),
        (i.write = function (t, n, o) {
          for (var i, r, s = o, a = 0; a < t.length; ++a)
            ((i = t.charCodeAt(a)),
              i < 128
                ? (n[o++] = i)
                : i < 2048
                  ? ((n[o++] = (i >> 6) | 192), (n[o++] = (63 & i) | 128))
                  : 55296 === (64512 & i) &&
                      56320 === (64512 & (r = t.charCodeAt(a + 1)))
                    ? ((i = 65536 + ((1023 & i) << 10) + (1023 & r)),
                      ++a,
                      (n[o++] = (i >> 18) | 240),
                      (n[o++] = ((i >> 12) & 63) | 128),
                      (n[o++] = ((i >> 6) & 63) | 128),
                      (n[o++] = (63 & i) | 128))
                    : ((n[o++] = (i >> 12) | 224),
                      (n[o++] = ((i >> 6) & 63) | 128),
                      (n[o++] = (63 & i) | 128)));
          return o - s;
        }));
    },
    3027: function (t, n, o) {
      "use strict";
      function i(t, n, o) {
        var i = o || 8192,
          r = i >>> 1,
          s = null,
          a = i;
        return function (o) {
          if (o < 1 || o > r) return t(o);
          a + o > i && ((s = t(i)), (a = 0));
          var d = n.call(s, a, (a += o));
          return (7 & a && (a = 1 + (7 | a)), d);
        };
      }
      t.exports = i;
    },
    3101: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DecProto =
          n.IntProto =
          n.DecCoin =
          n.Coin =
          n.protobufPackage =
            void 0));
      const r = i(o(2754)),
        s = i(o(2755));
      n.protobufPackage = "cosmos.base.v1beta1";
      const a = { denom: "", amount: "" };
      n.Coin = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            "" !== t.amount && n.uint32(18).string(t.amount),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, a);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.denom = o.string();
                break;
              case 2:
                r.amount = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = String(t.amount))
              : (n.amount = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.amount && (n.amount = t.amount),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = t.denom)
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = t.amount)
              : (n.amount = ""),
            n
          );
        },
      };
      const d = { denom: "", amount: "" };
      n.DecCoin = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            "" !== t.amount && n.uint32(18).string(t.amount),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, d);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.denom = o.string();
                break;
              case 2:
                r.amount = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = String(t.amount))
              : (n.amount = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.amount && (n.amount = t.amount),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = t.denom)
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = t.amount)
              : (n.amount = ""),
            n
          );
        },
      };
      const u = { int: "" };
      n.IntProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.int && n.uint32(10).string(t.int),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, u);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.int = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.int && null !== t.int
              ? (n.int = String(t.int))
              : (n.int = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.int && (n.int = t.int), n);
        },
        fromPartial(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.int && null !== t.int ? (n.int = t.int) : (n.int = ""),
            n
          );
        },
      };
      const l = { dec: "" };
      ((n.DecProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.dec && n.uint32(10).string(t.dec),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, l);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.dec = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.dec && null !== t.dec
              ? (n.dec = String(t.dec))
              : (n.dec = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.dec && (n.dec = t.dec), n);
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.dec && null !== t.dec ? (n.dec = t.dec) : (n.dec = ""),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    3426: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Timestamp = n.protobufPackage = void 0));
      const r = i(o(2754)),
        s = i(o(2755));
      n.protobufPackage = "google.protobuf";
      const a = { seconds: r.default.ZERO, nanos: 0 };
      ((n.Timestamp = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            t.seconds.isZero() || n.uint32(8).int64(t.seconds),
            0 !== t.nanos && n.uint32(16).int32(t.nanos),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, a);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.seconds = o.int64();
                break;
              case 2:
                r.nanos = o.int32();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.seconds && null !== t.seconds
              ? (n.seconds = r.default.fromString(t.seconds))
              : (n.seconds = r.default.ZERO),
            void 0 !== t.nanos && null !== t.nanos
              ? (n.nanos = Number(t.nanos))
              : (n.nanos = 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.seconds &&
              (n.seconds = (t.seconds || r.default.ZERO).toString()),
            void 0 !== t.nanos && (n.nanos = t.nanos),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.seconds && null !== t.seconds
              ? (n.seconds = t.seconds)
              : (n.seconds = r.default.ZERO),
            void 0 !== t.nanos && null !== t.nanos
              ? (n.nanos = t.nanos)
              : (n.nanos = 0),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    3428: function (t, n) {},
    4317: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ModuleVersion =
          n.CancelSoftwareUpgradeProposal =
          n.SoftwareUpgradeProposal =
          n.Plan =
          n.protobufPackage =
            void 0));
      const r = i(o(2754)),
        s = i(o(2755)),
        a = o(2841),
        d = o(3426);
      n.protobufPackage = "cosmos.upgrade.v1beta1";
      const u = { name: "", height: r.default.ZERO, info: "" };
      n.Plan = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.name && n.uint32(10).string(t.name),
            void 0 !== t.time &&
              d.Timestamp.encode(p(t.time), n.uint32(18).fork()).ldelim(),
            t.height.isZero() || n.uint32(24).int64(t.height),
            "" !== t.info && n.uint32(34).string(t.info),
            void 0 !== t.upgradedClientState &&
              a.Any.encode(t.upgradedClientState, n.uint32(42).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, u);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.name = o.string();
                break;
              case 2:
                r.time = g(d.Timestamp.decode(o, o.uint32()));
                break;
              case 3:
                r.height = o.int64();
                break;
              case 4:
                r.info = o.string();
                break;
              case 5:
                r.upgradedClientState = a.Any.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.name && null !== t.name
              ? (n.name = String(t.name))
              : (n.name = ""),
            void 0 !== t.time && null !== t.time
              ? (n.time = m(t.time))
              : (n.time = void 0),
            void 0 !== t.height && null !== t.height
              ? (n.height = r.default.fromString(t.height))
              : (n.height = r.default.ZERO),
            void 0 !== t.info && null !== t.info
              ? (n.info = String(t.info))
              : (n.info = ""),
            void 0 !== t.upgradedClientState && null !== t.upgradedClientState
              ? (n.upgradedClientState = a.Any.fromJSON(t.upgradedClientState))
              : (n.upgradedClientState = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.name && (n.name = t.name),
            void 0 !== t.time && (n.time = t.time.toISOString()),
            void 0 !== t.height &&
              (n.height = (t.height || r.default.ZERO).toString()),
            void 0 !== t.info && (n.info = t.info),
            void 0 !== t.upgradedClientState &&
              (n.upgradedClientState = t.upgradedClientState
                ? a.Any.toJSON(t.upgradedClientState)
                : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.name && null !== t.name
              ? (n.name = t.name)
              : (n.name = ""),
            void 0 !== t.time && null !== t.time
              ? (n.time = t.time)
              : (n.time = void 0),
            void 0 !== t.height && null !== t.height
              ? (n.height = t.height)
              : (n.height = r.default.ZERO),
            void 0 !== t.info && null !== t.info
              ? (n.info = t.info)
              : (n.info = ""),
            void 0 !== t.upgradedClientState && null !== t.upgradedClientState
              ? (n.upgradedClientState = a.Any.fromPartial(
                  t.upgradedClientState,
                ))
              : (n.upgradedClientState = void 0),
            n
          );
        },
      };
      const l = { title: "", description: "" };
      n.SoftwareUpgradeProposal = {
        encode(t, o) {
          return (
            void 0 === o && (o = s.default.Writer.create()),
            "" !== t.title && o.uint32(10).string(t.title),
            "" !== t.description && o.uint32(18).string(t.description),
            void 0 !== t.plan &&
              n.Plan.encode(t.plan, o.uint32(26).fork()).ldelim(),
            o
          );
        },
        decode(t, o) {
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let r = void 0 === o ? i.len : i.pos + o;
          const a = Object.assign({}, l);
          while (i.pos < r) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                a.title = i.string();
                break;
              case 2:
                a.description = i.string();
                break;
              case 3:
                a.plan = n.Plan.decode(i, i.uint32());
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return a;
        },
        fromJSON(t) {
          const o = Object.assign({}, l);
          return (
            void 0 !== t.title && null !== t.title
              ? (o.title = String(t.title))
              : (o.title = ""),
            void 0 !== t.description && null !== t.description
              ? (o.description = String(t.description))
              : (o.description = ""),
            void 0 !== t.plan && null !== t.plan
              ? (o.plan = n.Plan.fromJSON(t.plan))
              : (o.plan = void 0),
            o
          );
        },
        toJSON(t) {
          const o = {};
          return (
            void 0 !== t.title && (o.title = t.title),
            void 0 !== t.description && (o.description = t.description),
            void 0 !== t.plan &&
              (o.plan = t.plan ? n.Plan.toJSON(t.plan) : void 0),
            o
          );
        },
        fromPartial(t) {
          const o = Object.assign({}, l);
          return (
            void 0 !== t.title && null !== t.title
              ? (o.title = t.title)
              : (o.title = ""),
            void 0 !== t.description && null !== t.description
              ? (o.description = t.description)
              : (o.description = ""),
            void 0 !== t.plan && null !== t.plan
              ? (o.plan = n.Plan.fromPartial(t.plan))
              : (o.plan = void 0),
            o
          );
        },
      };
      const c = { title: "", description: "" };
      n.CancelSoftwareUpgradeProposal = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.title && n.uint32(10).string(t.title),
            "" !== t.description && n.uint32(18).string(t.description),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, c);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.title = o.string();
                break;
              case 2:
                r.description = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.title && null !== t.title
              ? (n.title = String(t.title))
              : (n.title = ""),
            void 0 !== t.description && null !== t.description
              ? (n.description = String(t.description))
              : (n.description = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.title && (n.title = t.title),
            void 0 !== t.description && (n.description = t.description),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.title && null !== t.title
              ? (n.title = t.title)
              : (n.title = ""),
            void 0 !== t.description && null !== t.description
              ? (n.description = t.description)
              : (n.description = ""),
            n
          );
        },
      };
      const f = { name: "", version: r.default.UZERO };
      function p(t) {
        const n = v(t.getTime() / 1e3),
          o = (t.getTime() % 1e3) * 1e6;
        return { seconds: n, nanos: o };
      }
      function g(t) {
        let n = 1e3 * t.seconds.toNumber();
        return ((n += t.nanos / 1e6), new Date(n));
      }
      function m(t) {
        return t instanceof Date
          ? t
          : "string" === typeof t
            ? new Date(t)
            : g(d.Timestamp.fromJSON(t));
      }
      function v(t) {
        return r.default.fromNumber(t);
      }
      ((n.ModuleVersion = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.name && n.uint32(10).string(t.name),
            t.version.isZero() || n.uint32(16).uint64(t.version),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, f);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.name = o.string();
                break;
              case 2:
                r.version = o.uint64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.name && null !== t.name
              ? (n.name = String(t.name))
              : (n.name = ""),
            void 0 !== t.version && null !== t.version
              ? (n.version = r.default.fromString(t.version))
              : (n.version = r.default.UZERO),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.name && (n.name = t.name),
            void 0 !== t.version &&
              (n.version = (t.version || r.default.UZERO).toString()),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.name && null !== t.name
              ? (n.name = t.name)
              : (n.name = ""),
            void 0 !== t.version && null !== t.version
              ? (n.version = t.version)
              : (n.version = r.default.UZERO),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    4369: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Duration = n.protobufPackage = void 0));
      const r = i(o(2754)),
        s = i(o(2755));
      n.protobufPackage = "google.protobuf";
      const a = { seconds: r.default.ZERO, nanos: 0 };
      ((n.Duration = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            t.seconds.isZero() || n.uint32(8).int64(t.seconds),
            0 !== t.nanos && n.uint32(16).int32(t.nanos),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, a);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.seconds = o.int64();
                break;
              case 2:
                r.nanos = o.int32();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.seconds && null !== t.seconds
              ? (n.seconds = r.default.fromString(t.seconds))
              : (n.seconds = r.default.ZERO),
            void 0 !== t.nanos && null !== t.nanos
              ? (n.nanos = Number(t.nanos))
              : (n.nanos = 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.seconds &&
              (n.seconds = (t.seconds || r.default.ZERO).toString()),
            void 0 !== t.nanos && (n.nanos = t.nanos),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.seconds && null !== t.seconds
              ? (n.seconds = t.seconds)
              : (n.seconds = r.default.ZERO),
            void 0 !== t.nanos && null !== t.nanos
              ? (n.nanos = t.nanos)
              : (n.nanos = 0),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    4370: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.SignatureDescriptor_Data_Multi =
            n.SignatureDescriptor_Data_Single =
            n.SignatureDescriptor_Data =
            n.SignatureDescriptor =
            n.SignatureDescriptors =
            n.signModeToJSON =
            n.signModeFromJSON =
            n.SignMode =
            n.protobufPackage =
              void 0));
        const r = i(o(2754)),
          s = i(o(2755)),
          a = o(2841),
          d = o(4371);
        var u;
        function l(t) {
          switch (t) {
            case 0:
            case "SIGN_MODE_UNSPECIFIED":
              return u.SIGN_MODE_UNSPECIFIED;
            case 1:
            case "SIGN_MODE_DIRECT":
              return u.SIGN_MODE_DIRECT;
            case 2:
            case "SIGN_MODE_TEXTUAL":
              return u.SIGN_MODE_TEXTUAL;
            case 127:
            case "SIGN_MODE_LEGACY_AMINO_JSON":
              return u.SIGN_MODE_LEGACY_AMINO_JSON;
            case -1:
            case "UNRECOGNIZED":
            default:
              return u.UNRECOGNIZED;
          }
        }
        function c(t) {
          switch (t) {
            case u.SIGN_MODE_UNSPECIFIED:
              return "SIGN_MODE_UNSPECIFIED";
            case u.SIGN_MODE_DIRECT:
              return "SIGN_MODE_DIRECT";
            case u.SIGN_MODE_TEXTUAL:
              return "SIGN_MODE_TEXTUAL";
            case u.SIGN_MODE_LEGACY_AMINO_JSON:
              return "SIGN_MODE_LEGACY_AMINO_JSON";
            default:
              return "UNKNOWN";
          }
        }
        ((n.protobufPackage = "cosmos.tx.signing.v1beta1"),
          (function (t) {
            ((t[(t["SIGN_MODE_UNSPECIFIED"] = 0)] = "SIGN_MODE_UNSPECIFIED"),
              (t[(t["SIGN_MODE_DIRECT"] = 1)] = "SIGN_MODE_DIRECT"),
              (t[(t["SIGN_MODE_TEXTUAL"] = 2)] = "SIGN_MODE_TEXTUAL"),
              (t[(t["SIGN_MODE_LEGACY_AMINO_JSON"] = 127)] =
                "SIGN_MODE_LEGACY_AMINO_JSON"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((u = n.SignMode || (n.SignMode = {}))),
          (n.signModeFromJSON = l),
          (n.signModeToJSON = c));
        const f = {};
        n.SignatureDescriptors = {
          encode(t, o) {
            void 0 === o && (o = s.default.Writer.create());
            for (const i of t.signatures)
              n.SignatureDescriptor.encode(i, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, f);
            a.signatures = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.signatures.push(
                    n.SignatureDescriptor.decode(i, i.uint32()),
                  );
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, f);
            if (
              ((o.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures)
                o.signatures.push(n.SignatureDescriptor.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              t.signatures
                ? (o.signatures = t.signatures.map((t) =>
                    t ? n.SignatureDescriptor.toJSON(t) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, f);
            if (
              ((o.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures)
                o.signatures.push(n.SignatureDescriptor.fromPartial(i));
            return o;
          },
        };
        const p = { sequence: r.default.UZERO };
        n.SignatureDescriptor = {
          encode(t, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.publicKey &&
                a.Any.encode(t.publicKey, o.uint32(10).fork()).ldelim(),
              void 0 !== t.data &&
                n.SignatureDescriptor_Data.encode(
                  t.data,
                  o.uint32(18).fork(),
                ).ldelim(),
              t.sequence.isZero() || o.uint32(24).uint64(t.sequence),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const d = Object.assign({}, p);
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  d.publicKey = a.Any.decode(i, i.uint32());
                  break;
                case 2:
                  d.data = n.SignatureDescriptor_Data.decode(i, i.uint32());
                  break;
                case 3:
                  d.sequence = i.uint64();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return d;
          },
          fromJSON(t) {
            const o = Object.assign({}, p);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (o.publicKey = a.Any.fromJSON(t.publicKey))
                : (o.publicKey = void 0),
              void 0 !== t.data && null !== t.data
                ? (o.data = n.SignatureDescriptor_Data.fromJSON(t.data))
                : (o.data = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (o.sequence = r.default.fromString(t.sequence))
                : (o.sequence = r.default.UZERO),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.publicKey &&
                (o.publicKey = t.publicKey
                  ? a.Any.toJSON(t.publicKey)
                  : void 0),
              void 0 !== t.data &&
                (o.data = t.data
                  ? n.SignatureDescriptor_Data.toJSON(t.data)
                  : void 0),
              void 0 !== t.sequence &&
                (o.sequence = (t.sequence || r.default.UZERO).toString()),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, p);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (o.publicKey = a.Any.fromPartial(t.publicKey))
                : (o.publicKey = void 0),
              void 0 !== t.data && null !== t.data
                ? (o.data = n.SignatureDescriptor_Data.fromPartial(t.data))
                : (o.data = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (o.sequence = t.sequence)
                : (o.sequence = r.default.UZERO),
              o
            );
          },
        };
        const g = {};
        n.SignatureDescriptor_Data = {
          encode(t, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.single &&
                n.SignatureDescriptor_Data_Single.encode(
                  t.single,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.multi &&
                n.SignatureDescriptor_Data_Multi.encode(
                  t.multi,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, g);
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.single = n.SignatureDescriptor_Data_Single.decode(
                    i,
                    i.uint32(),
                  );
                  break;
                case 2:
                  a.multi = n.SignatureDescriptor_Data_Multi.decode(
                    i,
                    i.uint32(),
                  );
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, g);
            return (
              void 0 !== t.single && null !== t.single
                ? (o.single = n.SignatureDescriptor_Data_Single.fromJSON(
                    t.single,
                  ))
                : (o.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (o.multi = n.SignatureDescriptor_Data_Multi.fromJSON(t.multi))
                : (o.multi = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.single &&
                (o.single = t.single
                  ? n.SignatureDescriptor_Data_Single.toJSON(t.single)
                  : void 0),
              void 0 !== t.multi &&
                (o.multi = t.multi
                  ? n.SignatureDescriptor_Data_Multi.toJSON(t.multi)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, g);
            return (
              void 0 !== t.single && null !== t.single
                ? (o.single = n.SignatureDescriptor_Data_Single.fromPartial(
                    t.single,
                  ))
                : (o.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (o.multi = n.SignatureDescriptor_Data_Multi.fromPartial(
                    t.multi,
                  ))
                : (o.multi = void 0),
              o
            );
          },
        };
        const m = { mode: 0 };
        n.SignatureDescriptor_Data_Single = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.mode && n.uint32(8).int32(t.mode),
              0 !== t.signature.length && n.uint32(18).bytes(t.signature),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, m);
            r.signature = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.mode = o.int32();
                  break;
                case 2:
                  r.signature = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, m);
            return (
              (n.signature = new Uint8Array()),
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = l(t.mode))
                : (n.mode = 0),
              void 0 !== t.signature &&
                null !== t.signature &&
                (n.signature = O(t.signature)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.mode && (n.mode = c(t.mode)),
              void 0 !== t.signature &&
                (n.signature = S(
                  void 0 !== t.signature ? t.signature : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, m);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = t.mode)
                : (n.mode = 0),
              void 0 !== t.signature && null !== t.signature
                ? (n.signature = t.signature)
                : (n.signature = new Uint8Array()),
              n
            );
          },
        };
        const v = {};
        n.SignatureDescriptor_Data_Multi = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.bitarray &&
                d.CompactBitArray.encode(
                  t.bitarray,
                  o.uint32(10).fork(),
                ).ldelim());
            for (const i of t.signatures)
              n.SignatureDescriptor_Data.encode(
                i,
                o.uint32(18).fork(),
              ).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, v);
            a.signatures = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.bitarray = d.CompactBitArray.decode(i, i.uint32());
                  break;
                case 2:
                  a.signatures.push(
                    n.SignatureDescriptor_Data.decode(i, i.uint32()),
                  );
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, v);
            if (
              ((o.signatures = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (o.bitarray = d.CompactBitArray.fromJSON(t.bitarray))
                : (o.bitarray = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures)
                o.signatures.push(n.SignatureDescriptor_Data.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.bitarray &&
                (o.bitarray = t.bitarray
                  ? d.CompactBitArray.toJSON(t.bitarray)
                  : void 0),
              t.signatures
                ? (o.signatures = t.signatures.map((t) =>
                    t ? n.SignatureDescriptor_Data.toJSON(t) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, v);
            if (
              ((o.signatures = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (o.bitarray = d.CompactBitArray.fromPartial(t.bitarray))
                : (o.bitarray = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures)
                o.signatures.push(n.SignatureDescriptor_Data.fromPartial(i));
            return o;
          },
        };
        var h = (() => {
          if ("undefined" !== typeof h) return h;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const b =
          h.atob || ((t) => h.Buffer.from(t, "base64").toString("binary"));
        function O(t) {
          const n = b(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const y =
          h.btoa || ((t) => h.Buffer.from(t, "binary").toString("base64"));
        function S(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return y(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    4371: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.CompactBitArray = n.MultiSignature = n.protobufPackage = void 0));
        const r = i(o(2754)),
          s = i(o(2755));
        n.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const a = {};
        n.MultiSignature = {
          encode(t, n = s.default.Writer.create()) {
            for (const o of t.signatures) n.uint32(10).bytes(o);
            return n;
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, a);
            r.signatures = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            if (
              ((n.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures) n.signatures.push(c(o));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              t.signatures
                ? (n.signatures = t.signatures.map((t) =>
                    p(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, a);
            if (
              ((n.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures) n.signatures.push(o);
            return n;
          },
        };
        const d = { extraBitsStored: 0 };
        n.CompactBitArray = {
          encode(t, n = s.default.Writer.create()) {
            return (
              0 !== t.extraBitsStored && n.uint32(8).uint32(t.extraBitsStored),
              0 !== t.elems.length && n.uint32(18).bytes(t.elems),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, d);
            r.elems = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.extraBitsStored = o.uint32();
                  break;
                case 2:
                  r.elems = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, d);
            return (
              (n.elems = new Uint8Array()),
              void 0 !== t.extraBitsStored && null !== t.extraBitsStored
                ? (n.extraBitsStored = Number(t.extraBitsStored))
                : (n.extraBitsStored = 0),
              void 0 !== t.elems && null !== t.elems && (n.elems = c(t.elems)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.extraBitsStored &&
                (n.extraBitsStored = t.extraBitsStored),
              void 0 !== t.elems &&
                (n.elems = p(void 0 !== t.elems ? t.elems : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, d);
            return (
              void 0 !== t.extraBitsStored && null !== t.extraBitsStored
                ? (n.extraBitsStored = t.extraBitsStored)
                : (n.extraBitsStored = 0),
              void 0 !== t.elems && null !== t.elems
                ? (n.elems = t.elems)
                : (n.elems = new Uint8Array()),
              n
            );
          },
        };
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const l =
          u.atob || ((t) => u.Buffer.from(t, "base64").toString("binary"));
        function c(t) {
          const n = l(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const f =
          u.btoa || ((t) => u.Buffer.from(t, "binary").toString("base64"));
        function p(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return f(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    5041: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MsgClientImpl =
          n.MsgFundCommunityPoolResponse =
          n.MsgFundCommunityPool =
          n.MsgWithdrawValidatorCommissionResponse =
          n.MsgWithdrawValidatorCommission =
          n.MsgWithdrawDelegatorRewardResponse =
          n.MsgWithdrawDelegatorReward =
          n.MsgSetWithdrawAddressResponse =
          n.MsgSetWithdrawAddress =
          n.protobufPackage =
            void 0));
      const r = i(o(2754)),
        s = i(o(2755)),
        a = o(3101);
      n.protobufPackage = "cosmos.distribution.v1beta1";
      const d = { delegatorAddress: "", withdrawAddress: "" };
      n.MsgSetWithdrawAddress = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.delegatorAddress &&
              n.uint32(10).string(t.delegatorAddress),
            "" !== t.withdrawAddress && n.uint32(18).string(t.withdrawAddress),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, d);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.delegatorAddress = o.string();
                break;
              case 2:
                r.withdrawAddress = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.delegatorAddress && null !== t.delegatorAddress
              ? (n.delegatorAddress = String(t.delegatorAddress))
              : (n.delegatorAddress = ""),
            void 0 !== t.withdrawAddress && null !== t.withdrawAddress
              ? (n.withdrawAddress = String(t.withdrawAddress))
              : (n.withdrawAddress = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.delegatorAddress &&
              (n.delegatorAddress = t.delegatorAddress),
            void 0 !== t.withdrawAddress &&
              (n.withdrawAddress = t.withdrawAddress),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.delegatorAddress && null !== t.delegatorAddress
              ? (n.delegatorAddress = t.delegatorAddress)
              : (n.delegatorAddress = ""),
            void 0 !== t.withdrawAddress && null !== t.withdrawAddress
              ? (n.withdrawAddress = t.withdrawAddress)
              : (n.withdrawAddress = ""),
            n
          );
        },
      };
      const u = {};
      n.MsgSetWithdrawAddressResponse = {
        encode(t, n) {
          return (void 0 === n && (n = s.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, u);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, u);
          return n;
        },
      };
      const l = { delegatorAddress: "", validatorAddress: "" };
      n.MsgWithdrawDelegatorReward = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.delegatorAddress &&
              n.uint32(10).string(t.delegatorAddress),
            "" !== t.validatorAddress &&
              n.uint32(18).string(t.validatorAddress),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, l);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.delegatorAddress = o.string();
                break;
              case 2:
                r.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.delegatorAddress && null !== t.delegatorAddress
              ? (n.delegatorAddress = String(t.delegatorAddress))
              : (n.delegatorAddress = ""),
            void 0 !== t.validatorAddress && null !== t.validatorAddress
              ? (n.validatorAddress = String(t.validatorAddress))
              : (n.validatorAddress = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.delegatorAddress &&
              (n.delegatorAddress = t.delegatorAddress),
            void 0 !== t.validatorAddress &&
              (n.validatorAddress = t.validatorAddress),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.delegatorAddress && null !== t.delegatorAddress
              ? (n.delegatorAddress = t.delegatorAddress)
              : (n.delegatorAddress = ""),
            void 0 !== t.validatorAddress && null !== t.validatorAddress
              ? (n.validatorAddress = t.validatorAddress)
              : (n.validatorAddress = ""),
            n
          );
        },
      };
      const c = {};
      n.MsgWithdrawDelegatorRewardResponse = {
        encode(t, n) {
          return (void 0 === n && (n = s.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, c);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, c);
          return n;
        },
      };
      const f = { validatorAddress: "" };
      n.MsgWithdrawValidatorCommission = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.validatorAddress &&
              n.uint32(10).string(t.validatorAddress),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, f);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.validatorAddress && null !== t.validatorAddress
              ? (n.validatorAddress = String(t.validatorAddress))
              : (n.validatorAddress = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.validatorAddress &&
              (n.validatorAddress = t.validatorAddress),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.validatorAddress && null !== t.validatorAddress
              ? (n.validatorAddress = t.validatorAddress)
              : (n.validatorAddress = ""),
            n
          );
        },
      };
      const p = {};
      n.MsgWithdrawValidatorCommissionResponse = {
        encode(t, n) {
          return (void 0 === n && (n = s.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, p);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, p);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, p);
          return n;
        },
      };
      const g = { depositor: "" };
      n.MsgFundCommunityPool = {
        encode(t, n) {
          void 0 === n && (n = s.default.Writer.create());
          for (const o of t.amount)
            a.Coin.encode(o, n.uint32(10).fork()).ldelim();
          return ("" !== t.depositor && n.uint32(18).string(t.depositor), n);
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, g);
          r.amount = [];
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.amount.push(a.Coin.decode(o, o.uint32()));
                break;
              case 2:
                r.depositor = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, g);
          if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
            for (const o of t.amount) n.amount.push(a.Coin.fromJSON(o));
          return (
            void 0 !== t.depositor && null !== t.depositor
              ? (n.depositor = String(t.depositor))
              : (n.depositor = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            t.amount
              ? (n.amount = t.amount.map((t) =>
                  t ? a.Coin.toJSON(t) : void 0,
                ))
              : (n.amount = []),
            void 0 !== t.depositor && (n.depositor = t.depositor),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, g);
          if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
            for (const o of t.amount) n.amount.push(a.Coin.fromPartial(o));
          return (
            void 0 !== t.depositor && null !== t.depositor
              ? (n.depositor = t.depositor)
              : (n.depositor = ""),
            n
          );
        },
      };
      const m = {};
      n.MsgFundCommunityPoolResponse = {
        encode(t, n) {
          return (void 0 === n && (n = s.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, m);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, m);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, m);
          return n;
        },
      };
      class MsgClientImpl {
        constructor(t) {
          ((this.rpc = t),
            (this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this)),
            (this.WithdrawDelegatorReward =
              this.WithdrawDelegatorReward.bind(this)),
            (this.WithdrawValidatorCommission =
              this.WithdrawValidatorCommission.bind(this)),
            (this.FundCommunityPool = this.FundCommunityPool.bind(this)));
        }
        SetWithdrawAddress(t) {
          const o = n.MsgSetWithdrawAddress.encode(t).finish(),
            i = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "SetWithdrawAddress",
              o,
            );
          return i.then((t) =>
            n.MsgSetWithdrawAddressResponse.decode(new s.default.Reader(t)),
          );
        }
        WithdrawDelegatorReward(t) {
          const o = n.MsgWithdrawDelegatorReward.encode(t).finish(),
            i = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "WithdrawDelegatorReward",
              o,
            );
          return i.then((t) =>
            n.MsgWithdrawDelegatorRewardResponse.decode(
              new s.default.Reader(t),
            ),
          );
        }
        WithdrawValidatorCommission(t) {
          const o = n.MsgWithdrawValidatorCommission.encode(t).finish(),
            i = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "WithdrawValidatorCommission",
              o,
            );
          return i.then((t) =>
            n.MsgWithdrawValidatorCommissionResponse.decode(
              new s.default.Reader(t),
            ),
          );
        }
        FundCommunityPool(t) {
          const o = n.MsgFundCommunityPool.encode(t).finish(),
            i = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "FundCommunityPool",
              o,
            );
          return i.then((t) =>
            n.MsgFundCommunityPoolResponse.decode(new s.default.Reader(t)),
          );
        }
      }
      ((n.MsgClientImpl = MsgClientImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    5050: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ParamChange =
          n.ParameterChangeProposal =
          n.protobufPackage =
            void 0));
      const r = i(o(2754)),
        s = i(o(2755));
      n.protobufPackage = "cosmos.params.v1beta1";
      const a = { title: "", description: "" };
      n.ParameterChangeProposal = {
        encode(t, o) {
          (void 0 === o && (o = s.default.Writer.create()),
            "" !== t.title && o.uint32(10).string(t.title),
            "" !== t.description && o.uint32(18).string(t.description));
          for (const i of t.changes)
            n.ParamChange.encode(i, o.uint32(26).fork()).ldelim();
          return o;
        },
        decode(t, o) {
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let r = void 0 === o ? i.len : i.pos + o;
          const d = Object.assign({}, a);
          d.changes = [];
          while (i.pos < r) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                d.title = i.string();
                break;
              case 2:
                d.description = i.string();
                break;
              case 3:
                d.changes.push(n.ParamChange.decode(i, i.uint32()));
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return d;
        },
        fromJSON(t) {
          const o = Object.assign({}, a);
          if (
            ((o.changes = []),
            void 0 !== t.title && null !== t.title
              ? (o.title = String(t.title))
              : (o.title = ""),
            void 0 !== t.description && null !== t.description
              ? (o.description = String(t.description))
              : (o.description = ""),
            void 0 !== t.changes && null !== t.changes)
          )
            for (const i of t.changes)
              o.changes.push(n.ParamChange.fromJSON(i));
          return o;
        },
        toJSON(t) {
          const o = {};
          return (
            void 0 !== t.title && (o.title = t.title),
            void 0 !== t.description && (o.description = t.description),
            t.changes
              ? (o.changes = t.changes.map((t) =>
                  t ? n.ParamChange.toJSON(t) : void 0,
                ))
              : (o.changes = []),
            o
          );
        },
        fromPartial(t) {
          const o = Object.assign({}, a);
          if (
            ((o.changes = []),
            void 0 !== t.title && null !== t.title
              ? (o.title = t.title)
              : (o.title = ""),
            void 0 !== t.description && null !== t.description
              ? (o.description = t.description)
              : (o.description = ""),
            void 0 !== t.changes && null !== t.changes)
          )
            for (const i of t.changes)
              o.changes.push(n.ParamChange.fromPartial(i));
          return o;
        },
      };
      const d = { subspace: "", key: "", value: "" };
      ((n.ParamChange = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.subspace && n.uint32(10).string(t.subspace),
            "" !== t.key && n.uint32(18).string(t.key),
            "" !== t.value && n.uint32(26).string(t.value),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, d);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.subspace = o.string();
                break;
              case 2:
                r.key = o.string();
                break;
              case 3:
                r.value = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.subspace && null !== t.subspace
              ? (n.subspace = String(t.subspace))
              : (n.subspace = ""),
            void 0 !== t.key && null !== t.key
              ? (n.key = String(t.key))
              : (n.key = ""),
            void 0 !== t.value && null !== t.value
              ? (n.value = String(t.value))
              : (n.value = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.subspace && (n.subspace = t.subspace),
            void 0 !== t.key && (n.key = t.key),
            void 0 !== t.value && (n.value = t.value),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.subspace && null !== t.subspace
              ? (n.subspace = t.subspace)
              : (n.subspace = ""),
            void 0 !== t.key && null !== t.key ? (n.key = t.key) : (n.key = ""),
            void 0 !== t.value && null !== t.value
              ? (n.value = t.value)
              : (n.value = ""),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    5145: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.BaseVestingAccount = n.protobufPackage = void 0));
      const r = i(o(2754)),
        s = i(o(2755)),
        a = o(5146),
        d = o(3101);
      n.protobufPackage = "cosmos.vesting.v1beta1";
      const u = { endTime: r.default.ZERO };
      ((n.BaseVestingAccount = {
        encode(t, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            void 0 !== t.baseAccount &&
              a.BaseAccount.encode(
                t.baseAccount,
                n.uint32(10).fork(),
              ).ldelim());
          for (const o of t.originalVesting)
            d.Coin.encode(o, n.uint32(18).fork()).ldelim();
          for (const o of t.delegatedFree)
            d.Coin.encode(o, n.uint32(26).fork()).ldelim();
          for (const o of t.delegatedVesting)
            d.Coin.encode(o, n.uint32(34).fork()).ldelim();
          return (t.endTime.isZero() || n.uint32(40).int64(t.endTime), n);
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, u);
          ((r.originalVesting = []),
            (r.delegatedFree = []),
            (r.delegatedVesting = []));
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.baseAccount = a.BaseAccount.decode(o, o.uint32());
                break;
              case 2:
                r.originalVesting.push(d.Coin.decode(o, o.uint32()));
                break;
              case 3:
                r.delegatedFree.push(d.Coin.decode(o, o.uint32()));
                break;
              case 4:
                r.delegatedVesting.push(d.Coin.decode(o, o.uint32()));
                break;
              case 5:
                r.endTime = o.int64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          if (
            ((n.originalVesting = []),
            (n.delegatedFree = []),
            (n.delegatedVesting = []),
            void 0 !== t.baseAccount && null !== t.baseAccount
              ? (n.baseAccount = a.BaseAccount.fromJSON(t.baseAccount))
              : (n.baseAccount = void 0),
            void 0 !== t.originalVesting && null !== t.originalVesting)
          )
            for (const o of t.originalVesting)
              n.originalVesting.push(d.Coin.fromJSON(o));
          if (void 0 !== t.delegatedFree && null !== t.delegatedFree)
            for (const o of t.delegatedFree)
              n.delegatedFree.push(d.Coin.fromJSON(o));
          if (void 0 !== t.delegatedVesting && null !== t.delegatedVesting)
            for (const o of t.delegatedVesting)
              n.delegatedVesting.push(d.Coin.fromJSON(o));
          return (
            void 0 !== t.endTime && null !== t.endTime
              ? (n.endTime = r.default.fromString(t.endTime))
              : (n.endTime = r.default.ZERO),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.baseAccount &&
              (n.baseAccount = t.baseAccount
                ? a.BaseAccount.toJSON(t.baseAccount)
                : void 0),
            t.originalVesting
              ? (n.originalVesting = t.originalVesting.map((t) =>
                  t ? d.Coin.toJSON(t) : void 0,
                ))
              : (n.originalVesting = []),
            t.delegatedFree
              ? (n.delegatedFree = t.delegatedFree.map((t) =>
                  t ? d.Coin.toJSON(t) : void 0,
                ))
              : (n.delegatedFree = []),
            t.delegatedVesting
              ? (n.delegatedVesting = t.delegatedVesting.map((t) =>
                  t ? d.Coin.toJSON(t) : void 0,
                ))
              : (n.delegatedVesting = []),
            void 0 !== t.endTime &&
              (n.endTime = (t.endTime || r.default.ZERO).toString()),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, u);
          if (
            ((n.originalVesting = []),
            (n.delegatedFree = []),
            (n.delegatedVesting = []),
            void 0 !== t.baseAccount && null !== t.baseAccount
              ? (n.baseAccount = a.BaseAccount.fromPartial(t.baseAccount))
              : (n.baseAccount = void 0),
            void 0 !== t.originalVesting && null !== t.originalVesting)
          )
            for (const o of t.originalVesting)
              n.originalVesting.push(d.Coin.fromPartial(o));
          if (void 0 !== t.delegatedFree && null !== t.delegatedFree)
            for (const o of t.delegatedFree)
              n.delegatedFree.push(d.Coin.fromPartial(o));
          if (void 0 !== t.delegatedVesting && null !== t.delegatedVesting)
            for (const o of t.delegatedVesting)
              n.delegatedVesting.push(d.Coin.fromPartial(o));
          return (
            void 0 !== t.endTime && null !== t.endTime
              ? (n.endTime = t.endTime)
              : (n.endTime = r.default.ZERO),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    5146: function (t, n, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Params =
          n.ModuleAccount =
          n.BaseAccount =
          n.protobufPackage =
            void 0));
      const r = i(o(2754)),
        s = i(o(2755)),
        a = o(2841);
      n.protobufPackage = "cosmos.auth.v1beta1";
      const d = {
        address: "",
        accountNumber: r.default.UZERO,
        sequence: r.default.UZERO,
      };
      n.BaseAccount = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address),
            void 0 !== t.pubKey &&
              a.Any.encode(t.pubKey, n.uint32(18).fork()).ldelim(),
            t.accountNumber.isZero() || n.uint32(24).uint64(t.accountNumber),
            t.sequence.isZero() || n.uint32(32).uint64(t.sequence),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, d);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.address = o.string();
                break;
              case 2:
                r.pubKey = a.Any.decode(o, o.uint32());
                break;
              case 3:
                r.accountNumber = o.uint64();
                break;
              case 4:
                r.sequence = o.uint64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.pubKey && null !== t.pubKey
              ? (n.pubKey = a.Any.fromJSON(t.pubKey))
              : (n.pubKey = void 0),
            void 0 !== t.accountNumber && null !== t.accountNumber
              ? (n.accountNumber = r.default.fromString(t.accountNumber))
              : (n.accountNumber = r.default.UZERO),
            void 0 !== t.sequence && null !== t.sequence
              ? (n.sequence = r.default.fromString(t.sequence))
              : (n.sequence = r.default.UZERO),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            void 0 !== t.pubKey &&
              (n.pubKey = t.pubKey ? a.Any.toJSON(t.pubKey) : void 0),
            void 0 !== t.accountNumber &&
              (n.accountNumber = (
                t.accountNumber || r.default.UZERO
              ).toString()),
            void 0 !== t.sequence &&
              (n.sequence = (t.sequence || r.default.UZERO).toString()),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.address && null !== t.address
              ? (n.address = t.address)
              : (n.address = ""),
            void 0 !== t.pubKey && null !== t.pubKey
              ? (n.pubKey = a.Any.fromPartial(t.pubKey))
              : (n.pubKey = void 0),
            void 0 !== t.accountNumber && null !== t.accountNumber
              ? (n.accountNumber = t.accountNumber)
              : (n.accountNumber = r.default.UZERO),
            void 0 !== t.sequence && null !== t.sequence
              ? (n.sequence = t.sequence)
              : (n.sequence = r.default.UZERO),
            n
          );
        },
      };
      const u = { name: "", permissions: "" };
      n.ModuleAccount = {
        encode(t, o) {
          (void 0 === o && (o = s.default.Writer.create()),
            void 0 !== t.baseAccount &&
              n.BaseAccount.encode(t.baseAccount, o.uint32(10).fork()).ldelim(),
            "" !== t.name && o.uint32(18).string(t.name));
          for (const n of t.permissions) o.uint32(26).string(n);
          return o;
        },
        decode(t, o) {
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let r = void 0 === o ? i.len : i.pos + o;
          const a = Object.assign({}, u);
          a.permissions = [];
          while (i.pos < r) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                a.baseAccount = n.BaseAccount.decode(i, i.uint32());
                break;
              case 2:
                a.name = i.string();
                break;
              case 3:
                a.permissions.push(i.string());
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return a;
        },
        fromJSON(t) {
          const o = Object.assign({}, u);
          if (
            ((o.permissions = []),
            void 0 !== t.baseAccount && null !== t.baseAccount
              ? (o.baseAccount = n.BaseAccount.fromJSON(t.baseAccount))
              : (o.baseAccount = void 0),
            void 0 !== t.name && null !== t.name
              ? (o.name = String(t.name))
              : (o.name = ""),
            void 0 !== t.permissions && null !== t.permissions)
          )
            for (const n of t.permissions) o.permissions.push(String(n));
          return o;
        },
        toJSON(t) {
          const o = {};
          return (
            void 0 !== t.baseAccount &&
              (o.baseAccount = t.baseAccount
                ? n.BaseAccount.toJSON(t.baseAccount)
                : void 0),
            void 0 !== t.name && (o.name = t.name),
            t.permissions
              ? (o.permissions = t.permissions.map((t) => t))
              : (o.permissions = []),
            o
          );
        },
        fromPartial(t) {
          const o = Object.assign({}, u);
          if (
            ((o.permissions = []),
            void 0 !== t.baseAccount && null !== t.baseAccount
              ? (o.baseAccount = n.BaseAccount.fromPartial(t.baseAccount))
              : (o.baseAccount = void 0),
            void 0 !== t.name && null !== t.name
              ? (o.name = t.name)
              : (o.name = ""),
            void 0 !== t.permissions && null !== t.permissions)
          )
            for (const n of t.permissions) o.permissions.push(n);
          return o;
        },
      };
      const l = {
        maxMemoCharacters: r.default.UZERO,
        txSigLimit: r.default.UZERO,
        txSizeCostPerByte: r.default.UZERO,
        sigVerifyCostEd25519: r.default.UZERO,
        sigVerifyCostSecp256k1: r.default.UZERO,
      };
      ((n.Params = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            t.maxMemoCharacters.isZero() ||
              n.uint32(8).uint64(t.maxMemoCharacters),
            t.txSigLimit.isZero() || n.uint32(16).uint64(t.txSigLimit),
            t.txSizeCostPerByte.isZero() ||
              n.uint32(24).uint64(t.txSizeCostPerByte),
            t.sigVerifyCostEd25519.isZero() ||
              n.uint32(32).uint64(t.sigVerifyCostEd25519),
            t.sigVerifyCostSecp256k1.isZero() ||
              n.uint32(40).uint64(t.sigVerifyCostSecp256k1),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === n ? o.len : o.pos + n;
          const r = Object.assign({}, l);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                r.maxMemoCharacters = o.uint64();
                break;
              case 2:
                r.txSigLimit = o.uint64();
                break;
              case 3:
                r.txSizeCostPerByte = o.uint64();
                break;
              case 4:
                r.sigVerifyCostEd25519 = o.uint64();
                break;
              case 5:
                r.sigVerifyCostSecp256k1 = o.uint64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.maxMemoCharacters && null !== t.maxMemoCharacters
              ? (n.maxMemoCharacters = r.default.fromString(
                  t.maxMemoCharacters,
                ))
              : (n.maxMemoCharacters = r.default.UZERO),
            void 0 !== t.txSigLimit && null !== t.txSigLimit
              ? (n.txSigLimit = r.default.fromString(t.txSigLimit))
              : (n.txSigLimit = r.default.UZERO),
            void 0 !== t.txSizeCostPerByte && null !== t.txSizeCostPerByte
              ? (n.txSizeCostPerByte = r.default.fromString(
                  t.txSizeCostPerByte,
                ))
              : (n.txSizeCostPerByte = r.default.UZERO),
            void 0 !== t.sigVerifyCostEd25519 && null !== t.sigVerifyCostEd25519
              ? (n.sigVerifyCostEd25519 = r.default.fromString(
                  t.sigVerifyCostEd25519,
                ))
              : (n.sigVerifyCostEd25519 = r.default.UZERO),
            void 0 !== t.sigVerifyCostSecp256k1 &&
            null !== t.sigVerifyCostSecp256k1
              ? (n.sigVerifyCostSecp256k1 = r.default.fromString(
                  t.sigVerifyCostSecp256k1,
                ))
              : (n.sigVerifyCostSecp256k1 = r.default.UZERO),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.maxMemoCharacters &&
              (n.maxMemoCharacters = (
                t.maxMemoCharacters || r.default.UZERO
              ).toString()),
            void 0 !== t.txSigLimit &&
              (n.txSigLimit = (t.txSigLimit || r.default.UZERO).toString()),
            void 0 !== t.txSizeCostPerByte &&
              (n.txSizeCostPerByte = (
                t.txSizeCostPerByte || r.default.UZERO
              ).toString()),
            void 0 !== t.sigVerifyCostEd25519 &&
              (n.sigVerifyCostEd25519 = (
                t.sigVerifyCostEd25519 || r.default.UZERO
              ).toString()),
            void 0 !== t.sigVerifyCostSecp256k1 &&
              (n.sigVerifyCostSecp256k1 = (
                t.sigVerifyCostSecp256k1 || r.default.UZERO
              ).toString()),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.maxMemoCharacters && null !== t.maxMemoCharacters
              ? (n.maxMemoCharacters = t.maxMemoCharacters)
              : (n.maxMemoCharacters = r.default.UZERO),
            void 0 !== t.txSigLimit && null !== t.txSigLimit
              ? (n.txSigLimit = t.txSigLimit)
              : (n.txSigLimit = r.default.UZERO),
            void 0 !== t.txSizeCostPerByte && null !== t.txSizeCostPerByte
              ? (n.txSizeCostPerByte = t.txSizeCostPerByte)
              : (n.txSizeCostPerByte = r.default.UZERO),
            void 0 !== t.sigVerifyCostEd25519 && null !== t.sigVerifyCostEd25519
              ? (n.sigVerifyCostEd25519 = t.sigVerifyCostEd25519)
              : (n.sigVerifyCostEd25519 = r.default.UZERO),
            void 0 !== t.sigVerifyCostSecp256k1 &&
            null !== t.sigVerifyCostSecp256k1
              ? (n.sigVerifyCostSecp256k1 = t.sigVerifyCostSecp256k1)
              : (n.sigVerifyCostSecp256k1 = r.default.UZERO),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    5192: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.ServiceClientImpl =
            n.GetTxResponse =
            n.GetTxRequest =
            n.SimulateResponse =
            n.SimulateRequest =
            n.BroadcastTxResponse =
            n.BroadcastTxRequest =
            n.GetTxsEventResponse =
            n.GetTxsEventRequest =
            n.broadcastModeToJSON =
            n.broadcastModeFromJSON =
            n.BroadcastMode =
            n.orderByToJSON =
            n.orderByFromJSON =
            n.OrderBy =
            n.protobufPackage =
              void 0));
        const r = i(o(2754)),
          s = i(o(2755)),
          a = o(5193),
          d = o(5194),
          u = o(5200);
        var l, c;
        function f(t) {
          switch (t) {
            case 0:
            case "ORDER_BY_UNSPECIFIED":
              return l.ORDER_BY_UNSPECIFIED;
            case 1:
            case "ORDER_BY_ASC":
              return l.ORDER_BY_ASC;
            case 2:
            case "ORDER_BY_DESC":
              return l.ORDER_BY_DESC;
            case -1:
            case "UNRECOGNIZED":
            default:
              return l.UNRECOGNIZED;
          }
        }
        function p(t) {
          switch (t) {
            case l.ORDER_BY_UNSPECIFIED:
              return "ORDER_BY_UNSPECIFIED";
            case l.ORDER_BY_ASC:
              return "ORDER_BY_ASC";
            case l.ORDER_BY_DESC:
              return "ORDER_BY_DESC";
            default:
              return "UNKNOWN";
          }
        }
        function g(t) {
          switch (t) {
            case 0:
            case "BROADCAST_MODE_UNSPECIFIED":
              return c.BROADCAST_MODE_UNSPECIFIED;
            case 1:
            case "BROADCAST_MODE_BLOCK":
              return c.BROADCAST_MODE_BLOCK;
            case 2:
            case "BROADCAST_MODE_SYNC":
              return c.BROADCAST_MODE_SYNC;
            case 3:
            case "BROADCAST_MODE_ASYNC":
              return c.BROADCAST_MODE_ASYNC;
            case -1:
            case "UNRECOGNIZED":
            default:
              return c.UNRECOGNIZED;
          }
        }
        function m(t) {
          switch (t) {
            case c.BROADCAST_MODE_UNSPECIFIED:
              return "BROADCAST_MODE_UNSPECIFIED";
            case c.BROADCAST_MODE_BLOCK:
              return "BROADCAST_MODE_BLOCK";
            case c.BROADCAST_MODE_SYNC:
              return "BROADCAST_MODE_SYNC";
            case c.BROADCAST_MODE_ASYNC:
              return "BROADCAST_MODE_ASYNC";
            default:
              return "UNKNOWN";
          }
        }
        ((n.protobufPackage = "cosmos.tx.v1beta1"),
          (function (t) {
            ((t[(t["ORDER_BY_UNSPECIFIED"] = 0)] = "ORDER_BY_UNSPECIFIED"),
              (t[(t["ORDER_BY_ASC"] = 1)] = "ORDER_BY_ASC"),
              (t[(t["ORDER_BY_DESC"] = 2)] = "ORDER_BY_DESC"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((l = n.OrderBy || (n.OrderBy = {}))),
          (n.orderByFromJSON = f),
          (n.orderByToJSON = p),
          (function (t) {
            ((t[(t["BROADCAST_MODE_UNSPECIFIED"] = 0)] =
              "BROADCAST_MODE_UNSPECIFIED"),
              (t[(t["BROADCAST_MODE_BLOCK"] = 1)] = "BROADCAST_MODE_BLOCK"),
              (t[(t["BROADCAST_MODE_SYNC"] = 2)] = "BROADCAST_MODE_SYNC"),
              (t[(t["BROADCAST_MODE_ASYNC"] = 3)] = "BROADCAST_MODE_ASYNC"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((c = n.BroadcastMode || (n.BroadcastMode = {}))),
          (n.broadcastModeFromJSON = g),
          (n.broadcastModeToJSON = m));
        const v = { events: "", orderBy: 0 };
        n.GetTxsEventRequest = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const o of t.events) n.uint32(10).string(o);
            return (
              void 0 !== t.pagination &&
                a.PageRequest.encode(
                  t.pagination,
                  n.uint32(18).fork(),
                ).ldelim(),
              0 !== t.orderBy && n.uint32(24).int32(t.orderBy),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, v);
            r.events = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.events.push(o.string());
                  break;
                case 2:
                  r.pagination = a.PageRequest.decode(o, o.uint32());
                  break;
                case 3:
                  r.orderBy = o.int32();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, v);
            if (((n.events = []), void 0 !== t.events && null !== t.events))
              for (const o of t.events) n.events.push(String(o));
            return (
              void 0 !== t.pagination && null !== t.pagination
                ? (n.pagination = a.PageRequest.fromJSON(t.pagination))
                : (n.pagination = void 0),
              void 0 !== t.orderBy && null !== t.orderBy
                ? (n.orderBy = f(t.orderBy))
                : (n.orderBy = 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              t.events ? (n.events = t.events.map((t) => t)) : (n.events = []),
              void 0 !== t.pagination &&
                (n.pagination = t.pagination
                  ? a.PageRequest.toJSON(t.pagination)
                  : void 0),
              void 0 !== t.orderBy && (n.orderBy = p(t.orderBy)),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, v);
            if (((n.events = []), void 0 !== t.events && null !== t.events))
              for (const o of t.events) n.events.push(o);
            return (
              void 0 !== t.pagination && null !== t.pagination
                ? (n.pagination = a.PageRequest.fromPartial(t.pagination))
                : (n.pagination = void 0),
              void 0 !== t.orderBy && null !== t.orderBy
                ? (n.orderBy = t.orderBy)
                : (n.orderBy = 0),
              n
            );
          },
        };
        const h = {};
        n.GetTxsEventResponse = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const o of t.txs) u.Tx.encode(o, n.uint32(10).fork()).ldelim();
            for (const o of t.txResponses)
              d.TxResponse.encode(o, n.uint32(18).fork()).ldelim();
            return (
              void 0 !== t.pagination &&
                a.PageResponse.encode(
                  t.pagination,
                  n.uint32(26).fork(),
                ).ldelim(),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, h);
            ((r.txs = []), (r.txResponses = []));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.txs.push(u.Tx.decode(o, o.uint32()));
                  break;
                case 2:
                  r.txResponses.push(d.TxResponse.decode(o, o.uint32()));
                  break;
                case 3:
                  r.pagination = a.PageResponse.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, h);
            if (
              ((n.txs = []),
              (n.txResponses = []),
              void 0 !== t.txs && null !== t.txs)
            )
              for (const o of t.txs) n.txs.push(u.Tx.fromJSON(o));
            if (void 0 !== t.txResponses && null !== t.txResponses)
              for (const o of t.txResponses)
                n.txResponses.push(d.TxResponse.fromJSON(o));
            return (
              void 0 !== t.pagination && null !== t.pagination
                ? (n.pagination = a.PageResponse.fromJSON(t.pagination))
                : (n.pagination = void 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              t.txs
                ? (n.txs = t.txs.map((t) => (t ? u.Tx.toJSON(t) : void 0)))
                : (n.txs = []),
              t.txResponses
                ? (n.txResponses = t.txResponses.map((t) =>
                    t ? d.TxResponse.toJSON(t) : void 0,
                  ))
                : (n.txResponses = []),
              void 0 !== t.pagination &&
                (n.pagination = t.pagination
                  ? a.PageResponse.toJSON(t.pagination)
                  : void 0),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, h);
            if (
              ((n.txs = []),
              (n.txResponses = []),
              void 0 !== t.txs && null !== t.txs)
            )
              for (const o of t.txs) n.txs.push(u.Tx.fromPartial(o));
            if (void 0 !== t.txResponses && null !== t.txResponses)
              for (const o of t.txResponses)
                n.txResponses.push(d.TxResponse.fromPartial(o));
            return (
              void 0 !== t.pagination && null !== t.pagination
                ? (n.pagination = a.PageResponse.fromPartial(t.pagination))
                : (n.pagination = void 0),
              n
            );
          },
        };
        const b = { mode: 0 };
        n.BroadcastTxRequest = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.txBytes.length && n.uint32(10).bytes(t.txBytes),
              0 !== t.mode && n.uint32(16).int32(t.mode),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, b);
            r.txBytes = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.txBytes = o.bytes();
                  break;
                case 2:
                  r.mode = o.int32();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, b);
            return (
              (n.txBytes = new Uint8Array()),
              void 0 !== t.txBytes &&
                null !== t.txBytes &&
                (n.txBytes = k(t.txBytes)),
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = g(t.mode))
                : (n.mode = 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.txBytes &&
                (n.txBytes = N(
                  void 0 !== t.txBytes ? t.txBytes : new Uint8Array(),
                )),
              void 0 !== t.mode && (n.mode = m(t.mode)),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.txBytes && null !== t.txBytes
                ? (n.txBytes = t.txBytes)
                : (n.txBytes = new Uint8Array()),
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = t.mode)
                : (n.mode = 0),
              n
            );
          },
        };
        const O = {};
        n.BroadcastTxResponse = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== t.txResponse &&
                d.TxResponse.encode(t.txResponse, n.uint32(10).fork()).ldelim(),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, O);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.txResponse = d.TxResponse.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, O);
            return (
              void 0 !== t.txResponse && null !== t.txResponse
                ? (n.txResponse = d.TxResponse.fromJSON(t.txResponse))
                : (n.txResponse = void 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.txResponse &&
                (n.txResponse = t.txResponse
                  ? d.TxResponse.toJSON(t.txResponse)
                  : void 0),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, O);
            return (
              void 0 !== t.txResponse && null !== t.txResponse
                ? (n.txResponse = d.TxResponse.fromPartial(t.txResponse))
                : (n.txResponse = void 0),
              n
            );
          },
        };
        const y = {};
        n.SimulateRequest = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== t.tx &&
                u.Tx.encode(t.tx, n.uint32(10).fork()).ldelim(),
              0 !== t.txBytes.length && n.uint32(18).bytes(t.txBytes),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, y);
            r.txBytes = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.tx = u.Tx.decode(o, o.uint32());
                  break;
                case 2:
                  r.txBytes = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, y);
            return (
              (n.txBytes = new Uint8Array()),
              void 0 !== t.tx && null !== t.tx
                ? (n.tx = u.Tx.fromJSON(t.tx))
                : (n.tx = void 0),
              void 0 !== t.txBytes &&
                null !== t.txBytes &&
                (n.txBytes = k(t.txBytes)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.tx && (n.tx = t.tx ? u.Tx.toJSON(t.tx) : void 0),
              void 0 !== t.txBytes &&
                (n.txBytes = N(
                  void 0 !== t.txBytes ? t.txBytes : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, y);
            return (
              void 0 !== t.tx && null !== t.tx
                ? (n.tx = u.Tx.fromPartial(t.tx))
                : (n.tx = void 0),
              void 0 !== t.txBytes && null !== t.txBytes
                ? (n.txBytes = t.txBytes)
                : (n.txBytes = new Uint8Array()),
              n
            );
          },
        };
        const S = {};
        n.SimulateResponse = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== t.gasInfo &&
                d.GasInfo.encode(t.gasInfo, n.uint32(10).fork()).ldelim(),
              void 0 !== t.result &&
                d.Result.encode(t.result, n.uint32(18).fork()).ldelim(),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, S);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.gasInfo = d.GasInfo.decode(o, o.uint32());
                  break;
                case 2:
                  r.result = d.Result.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, S);
            return (
              void 0 !== t.gasInfo && null !== t.gasInfo
                ? (n.gasInfo = d.GasInfo.fromJSON(t.gasInfo))
                : (n.gasInfo = void 0),
              void 0 !== t.result && null !== t.result
                ? (n.result = d.Result.fromJSON(t.result))
                : (n.result = void 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.gasInfo &&
                (n.gasInfo = t.gasInfo ? d.GasInfo.toJSON(t.gasInfo) : void 0),
              void 0 !== t.result &&
                (n.result = t.result ? d.Result.toJSON(t.result) : void 0),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, S);
            return (
              void 0 !== t.gasInfo && null !== t.gasInfo
                ? (n.gasInfo = d.GasInfo.fromPartial(t.gasInfo))
                : (n.gasInfo = void 0),
              void 0 !== t.result && null !== t.result
                ? (n.result = d.Result.fromPartial(t.result))
                : (n.result = void 0),
              n
            );
          },
        };
        const R = { hash: "" };
        n.GetTxRequest = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.hash && n.uint32(10).string(t.hash),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, R);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.hash = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, R);
            return (
              void 0 !== t.hash && null !== t.hash
                ? (n.hash = String(t.hash))
                : (n.hash = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (void 0 !== t.hash && (n.hash = t.hash), n);
          },
          fromPartial(t) {
            const n = Object.assign({}, R);
            return (
              void 0 !== t.hash && null !== t.hash
                ? (n.hash = t.hash)
                : (n.hash = ""),
              n
            );
          },
        };
        const T = {};
        n.GetTxResponse = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== t.tx &&
                u.Tx.encode(t.tx, n.uint32(10).fork()).ldelim(),
              void 0 !== t.txResponse &&
                d.TxResponse.encode(t.txResponse, n.uint32(18).fork()).ldelim(),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, T);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.tx = u.Tx.decode(o, o.uint32());
                  break;
                case 2:
                  r.txResponse = d.TxResponse.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, T);
            return (
              void 0 !== t.tx && null !== t.tx
                ? (n.tx = u.Tx.fromJSON(t.tx))
                : (n.tx = void 0),
              void 0 !== t.txResponse && null !== t.txResponse
                ? (n.txResponse = d.TxResponse.fromJSON(t.txResponse))
                : (n.txResponse = void 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.tx && (n.tx = t.tx ? u.Tx.toJSON(t.tx) : void 0),
              void 0 !== t.txResponse &&
                (n.txResponse = t.txResponse
                  ? d.TxResponse.toJSON(t.txResponse)
                  : void 0),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, T);
            return (
              void 0 !== t.tx && null !== t.tx
                ? (n.tx = u.Tx.fromPartial(t.tx))
                : (n.tx = void 0),
              void 0 !== t.txResponse && null !== t.txResponse
                ? (n.txResponse = d.TxResponse.fromPartial(t.txResponse))
                : (n.txResponse = void 0),
              n
            );
          },
        };
        class ServiceClientImpl {
          constructor(t) {
            ((this.rpc = t),
              (this.Simulate = this.Simulate.bind(this)),
              (this.GetTx = this.GetTx.bind(this)),
              (this.BroadcastTx = this.BroadcastTx.bind(this)),
              (this.GetTxsEvent = this.GetTxsEvent.bind(this)));
          }
          Simulate(t) {
            const o = n.SimulateRequest.encode(t).finish(),
              i = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", o);
            return i.then((t) =>
              n.SimulateResponse.decode(new s.default.Reader(t)),
            );
          }
          GetTx(t) {
            const o = n.GetTxRequest.encode(t).finish(),
              i = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", o);
            return i.then((t) =>
              n.GetTxResponse.decode(new s.default.Reader(t)),
            );
          }
          BroadcastTx(t) {
            const o = n.BroadcastTxRequest.encode(t).finish(),
              i = this.rpc.request(
                "cosmos.tx.v1beta1.Service",
                "BroadcastTx",
                o,
              );
            return i.then((t) =>
              n.BroadcastTxResponse.decode(new s.default.Reader(t)),
            );
          }
          GetTxsEvent(t) {
            const o = n.GetTxsEventRequest.encode(t).finish(),
              i = this.rpc.request(
                "cosmos.tx.v1beta1.Service",
                "GetTxsEvent",
                o,
              );
            return i.then((t) =>
              n.GetTxsEventResponse.decode(new s.default.Reader(t)),
            );
          }
        }
        n.ServiceClientImpl = ServiceClientImpl;
        var w = (() => {
          if ("undefined" !== typeof w) return w;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const E =
          w.atob || ((t) => w.Buffer.from(t, "base64").toString("binary"));
        function k(t) {
          const n = E(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const A =
          w.btoa || ((t) => w.Buffer.from(t, "binary").toString("base64"));
        function N(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return A(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    5193: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PageResponse = n.PageRequest = n.protobufPackage = void 0));
        const r = i(o(2754)),
          s = i(o(2755));
        n.protobufPackage = "cosmos.base.query.v1beta1";
        const a = {
          offset: r.default.UZERO,
          limit: r.default.UZERO,
          countTotal: !1,
          reverse: !1,
        };
        n.PageRequest = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.key.length && n.uint32(10).bytes(t.key),
              t.offset.isZero() || n.uint32(16).uint64(t.offset),
              t.limit.isZero() || n.uint32(24).uint64(t.limit),
              !0 === t.countTotal && n.uint32(32).bool(t.countTotal),
              !0 === t.reverse && n.uint32(40).bool(t.reverse),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, a);
            r.key = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.key = o.bytes();
                  break;
                case 2:
                  r.offset = o.uint64();
                  break;
                case 3:
                  r.limit = o.uint64();
                  break;
                case 4:
                  r.countTotal = o.bool();
                  break;
                case 5:
                  r.reverse = o.bool();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            return (
              (n.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (n.key = c(t.key)),
              void 0 !== t.offset && null !== t.offset
                ? (n.offset = r.default.fromString(t.offset))
                : (n.offset = r.default.UZERO),
              void 0 !== t.limit && null !== t.limit
                ? (n.limit = r.default.fromString(t.limit))
                : (n.limit = r.default.UZERO),
              void 0 !== t.countTotal && null !== t.countTotal
                ? (n.countTotal = Boolean(t.countTotal))
                : (n.countTotal = !1),
              void 0 !== t.reverse && null !== t.reverse
                ? (n.reverse = Boolean(t.reverse))
                : (n.reverse = !1),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.key &&
                (n.key = p(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.offset &&
                (n.offset = (t.offset || r.default.UZERO).toString()),
              void 0 !== t.limit &&
                (n.limit = (t.limit || r.default.UZERO).toString()),
              void 0 !== t.countTotal && (n.countTotal = t.countTotal),
              void 0 !== t.reverse && (n.reverse = t.reverse),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, a);
            return (
              void 0 !== t.key && null !== t.key
                ? (n.key = t.key)
                : (n.key = new Uint8Array()),
              void 0 !== t.offset && null !== t.offset
                ? (n.offset = t.offset)
                : (n.offset = r.default.UZERO),
              void 0 !== t.limit && null !== t.limit
                ? (n.limit = t.limit)
                : (n.limit = r.default.UZERO),
              void 0 !== t.countTotal && null !== t.countTotal
                ? (n.countTotal = t.countTotal)
                : (n.countTotal = !1),
              void 0 !== t.reverse && null !== t.reverse
                ? (n.reverse = t.reverse)
                : (n.reverse = !1),
              n
            );
          },
        };
        const d = { total: r.default.UZERO };
        n.PageResponse = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.nextKey.length && n.uint32(10).bytes(t.nextKey),
              t.total.isZero() || n.uint32(16).uint64(t.total),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, d);
            r.nextKey = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.nextKey = o.bytes();
                  break;
                case 2:
                  r.total = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, d);
            return (
              (n.nextKey = new Uint8Array()),
              void 0 !== t.nextKey &&
                null !== t.nextKey &&
                (n.nextKey = c(t.nextKey)),
              void 0 !== t.total && null !== t.total
                ? (n.total = r.default.fromString(t.total))
                : (n.total = r.default.UZERO),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.nextKey &&
                (n.nextKey = p(
                  void 0 !== t.nextKey ? t.nextKey : new Uint8Array(),
                )),
              void 0 !== t.total &&
                (n.total = (t.total || r.default.UZERO).toString()),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, d);
            return (
              void 0 !== t.nextKey && null !== t.nextKey
                ? (n.nextKey = t.nextKey)
                : (n.nextKey = new Uint8Array()),
              void 0 !== t.total && null !== t.total
                ? (n.total = t.total)
                : (n.total = r.default.UZERO),
              n
            );
          },
        };
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const l =
          u.atob || ((t) => u.Buffer.from(t, "base64").toString("binary"));
        function c(t) {
          const n = l(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const f =
          u.btoa || ((t) => u.Buffer.from(t, "binary").toString("base64"));
        function p(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return f(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    5194: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.SearchTxsResult =
            n.TxMsgData =
            n.MsgData =
            n.SimulationResponse =
            n.Result =
            n.GasInfo =
            n.Attribute =
            n.StringEvent =
            n.ABCIMessageLog =
            n.TxResponse =
            n.protobufPackage =
              void 0));
        const r = i(o(2754)),
          s = i(o(2755)),
          a = o(2841),
          d = o(5195);
        n.protobufPackage = "cosmos.base.abci.v1beta1";
        const u = {
          height: r.default.ZERO,
          txhash: "",
          codespace: "",
          code: 0,
          data: "",
          rawLog: "",
          info: "",
          gasWanted: r.default.ZERO,
          gasUsed: r.default.ZERO,
          timestamp: "",
        };
        n.TxResponse = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              t.height.isZero() || o.uint32(8).int64(t.height),
              "" !== t.txhash && o.uint32(18).string(t.txhash),
              "" !== t.codespace && o.uint32(26).string(t.codespace),
              0 !== t.code && o.uint32(32).uint32(t.code),
              "" !== t.data && o.uint32(42).string(t.data),
              "" !== t.rawLog && o.uint32(50).string(t.rawLog));
            for (const i of t.logs)
              n.ABCIMessageLog.encode(i, o.uint32(58).fork()).ldelim();
            return (
              "" !== t.info && o.uint32(66).string(t.info),
              t.gasWanted.isZero() || o.uint32(72).int64(t.gasWanted),
              t.gasUsed.isZero() || o.uint32(80).int64(t.gasUsed),
              void 0 !== t.tx &&
                a.Any.encode(t.tx, o.uint32(90).fork()).ldelim(),
              "" !== t.timestamp && o.uint32(98).string(t.timestamp),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const d = Object.assign({}, u);
            d.logs = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  d.height = i.int64();
                  break;
                case 2:
                  d.txhash = i.string();
                  break;
                case 3:
                  d.codespace = i.string();
                  break;
                case 4:
                  d.code = i.uint32();
                  break;
                case 5:
                  d.data = i.string();
                  break;
                case 6:
                  d.rawLog = i.string();
                  break;
                case 7:
                  d.logs.push(n.ABCIMessageLog.decode(i, i.uint32()));
                  break;
                case 8:
                  d.info = i.string();
                  break;
                case 9:
                  d.gasWanted = i.int64();
                  break;
                case 10:
                  d.gasUsed = i.int64();
                  break;
                case 11:
                  d.tx = a.Any.decode(i, i.uint32());
                  break;
                case 12:
                  d.timestamp = i.string();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return d;
          },
          fromJSON(t) {
            const o = Object.assign({}, u);
            if (
              ((o.logs = []),
              void 0 !== t.height && null !== t.height
                ? (o.height = r.default.fromString(t.height))
                : (o.height = r.default.ZERO),
              void 0 !== t.txhash && null !== t.txhash
                ? (o.txhash = String(t.txhash))
                : (o.txhash = ""),
              void 0 !== t.codespace && null !== t.codespace
                ? (o.codespace = String(t.codespace))
                : (o.codespace = ""),
              void 0 !== t.code && null !== t.code
                ? (o.code = Number(t.code))
                : (o.code = 0),
              void 0 !== t.data && null !== t.data
                ? (o.data = String(t.data))
                : (o.data = ""),
              void 0 !== t.rawLog && null !== t.rawLog
                ? (o.rawLog = String(t.rawLog))
                : (o.rawLog = ""),
              void 0 !== t.logs && null !== t.logs)
            )
              for (const i of t.logs) o.logs.push(n.ABCIMessageLog.fromJSON(i));
            return (
              void 0 !== t.info && null !== t.info
                ? (o.info = String(t.info))
                : (o.info = ""),
              void 0 !== t.gasWanted && null !== t.gasWanted
                ? (o.gasWanted = r.default.fromString(t.gasWanted))
                : (o.gasWanted = r.default.ZERO),
              void 0 !== t.gasUsed && null !== t.gasUsed
                ? (o.gasUsed = r.default.fromString(t.gasUsed))
                : (o.gasUsed = r.default.ZERO),
              void 0 !== t.tx && null !== t.tx
                ? (o.tx = a.Any.fromJSON(t.tx))
                : (o.tx = void 0),
              void 0 !== t.timestamp && null !== t.timestamp
                ? (o.timestamp = String(t.timestamp))
                : (o.timestamp = ""),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.height &&
                (o.height = (t.height || r.default.ZERO).toString()),
              void 0 !== t.txhash && (o.txhash = t.txhash),
              void 0 !== t.codespace && (o.codespace = t.codespace),
              void 0 !== t.code && (o.code = t.code),
              void 0 !== t.data && (o.data = t.data),
              void 0 !== t.rawLog && (o.rawLog = t.rawLog),
              t.logs
                ? (o.logs = t.logs.map((t) =>
                    t ? n.ABCIMessageLog.toJSON(t) : void 0,
                  ))
                : (o.logs = []),
              void 0 !== t.info && (o.info = t.info),
              void 0 !== t.gasWanted &&
                (o.gasWanted = (t.gasWanted || r.default.ZERO).toString()),
              void 0 !== t.gasUsed &&
                (o.gasUsed = (t.gasUsed || r.default.ZERO).toString()),
              void 0 !== t.tx && (o.tx = t.tx ? a.Any.toJSON(t.tx) : void 0),
              void 0 !== t.timestamp && (o.timestamp = t.timestamp),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, u);
            if (
              ((o.logs = []),
              void 0 !== t.height && null !== t.height
                ? (o.height = t.height)
                : (o.height = r.default.ZERO),
              void 0 !== t.txhash && null !== t.txhash
                ? (o.txhash = t.txhash)
                : (o.txhash = ""),
              void 0 !== t.codespace && null !== t.codespace
                ? (o.codespace = t.codespace)
                : (o.codespace = ""),
              void 0 !== t.code && null !== t.code
                ? (o.code = t.code)
                : (o.code = 0),
              void 0 !== t.data && null !== t.data
                ? (o.data = t.data)
                : (o.data = ""),
              void 0 !== t.rawLog && null !== t.rawLog
                ? (o.rawLog = t.rawLog)
                : (o.rawLog = ""),
              void 0 !== t.logs && null !== t.logs)
            )
              for (const i of t.logs)
                o.logs.push(n.ABCIMessageLog.fromPartial(i));
            return (
              void 0 !== t.info && null !== t.info
                ? (o.info = t.info)
                : (o.info = ""),
              void 0 !== t.gasWanted && null !== t.gasWanted
                ? (o.gasWanted = t.gasWanted)
                : (o.gasWanted = r.default.ZERO),
              void 0 !== t.gasUsed && null !== t.gasUsed
                ? (o.gasUsed = t.gasUsed)
                : (o.gasUsed = r.default.ZERO),
              void 0 !== t.tx && null !== t.tx
                ? (o.tx = a.Any.fromPartial(t.tx))
                : (o.tx = void 0),
              void 0 !== t.timestamp && null !== t.timestamp
                ? (o.timestamp = t.timestamp)
                : (o.timestamp = ""),
              o
            );
          },
        };
        const l = { msgIndex: 0, log: "" };
        n.ABCIMessageLog = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              0 !== t.msgIndex && o.uint32(8).uint32(t.msgIndex),
              "" !== t.log && o.uint32(18).string(t.log));
            for (const i of t.events)
              n.StringEvent.encode(i, o.uint32(26).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, l);
            a.events = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.msgIndex = i.uint32();
                  break;
                case 2:
                  a.log = i.string();
                  break;
                case 3:
                  a.events.push(n.StringEvent.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, l);
            if (
              ((o.events = []),
              void 0 !== t.msgIndex && null !== t.msgIndex
                ? (o.msgIndex = Number(t.msgIndex))
                : (o.msgIndex = 0),
              void 0 !== t.log && null !== t.log
                ? (o.log = String(t.log))
                : (o.log = ""),
              void 0 !== t.events && null !== t.events)
            )
              for (const i of t.events)
                o.events.push(n.StringEvent.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.msgIndex && (o.msgIndex = t.msgIndex),
              void 0 !== t.log && (o.log = t.log),
              t.events
                ? (o.events = t.events.map((t) =>
                    t ? n.StringEvent.toJSON(t) : void 0,
                  ))
                : (o.events = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, l);
            if (
              ((o.events = []),
              void 0 !== t.msgIndex && null !== t.msgIndex
                ? (o.msgIndex = t.msgIndex)
                : (o.msgIndex = 0),
              void 0 !== t.log && null !== t.log
                ? (o.log = t.log)
                : (o.log = ""),
              void 0 !== t.events && null !== t.events)
            )
              for (const i of t.events)
                o.events.push(n.StringEvent.fromPartial(i));
            return o;
          },
        };
        const c = { type: "" };
        n.StringEvent = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              "" !== t.type && o.uint32(10).string(t.type));
            for (const i of t.attributes)
              n.Attribute.encode(i, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, c);
            a.attributes = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.type = i.string();
                  break;
                case 2:
                  a.attributes.push(n.Attribute.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, c);
            if (
              ((o.attributes = []),
              void 0 !== t.type && null !== t.type
                ? (o.type = String(t.type))
                : (o.type = ""),
              void 0 !== t.attributes && null !== t.attributes)
            )
              for (const i of t.attributes)
                o.attributes.push(n.Attribute.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.type && (o.type = t.type),
              t.attributes
                ? (o.attributes = t.attributes.map((t) =>
                    t ? n.Attribute.toJSON(t) : void 0,
                  ))
                : (o.attributes = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, c);
            if (
              ((o.attributes = []),
              void 0 !== t.type && null !== t.type
                ? (o.type = t.type)
                : (o.type = ""),
              void 0 !== t.attributes && null !== t.attributes)
            )
              for (const i of t.attributes)
                o.attributes.push(n.Attribute.fromPartial(i));
            return o;
          },
        };
        const f = { key: "", value: "" };
        n.Attribute = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.key && n.uint32(10).string(t.key),
              "" !== t.value && n.uint32(18).string(t.value),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, f);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.key = o.string();
                  break;
                case 2:
                  r.value = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, f);
            return (
              void 0 !== t.key && null !== t.key
                ? (n.key = String(t.key))
                : (n.key = ""),
              void 0 !== t.value && null !== t.value
                ? (n.value = String(t.value))
                : (n.value = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.key && (n.key = t.key),
              void 0 !== t.value && (n.value = t.value),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, f);
            return (
              void 0 !== t.key && null !== t.key
                ? (n.key = t.key)
                : (n.key = ""),
              void 0 !== t.value && null !== t.value
                ? (n.value = t.value)
                : (n.value = ""),
              n
            );
          },
        };
        const p = { gasWanted: r.default.UZERO, gasUsed: r.default.UZERO };
        n.GasInfo = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              t.gasWanted.isZero() || n.uint32(8).uint64(t.gasWanted),
              t.gasUsed.isZero() || n.uint32(16).uint64(t.gasUsed),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, p);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.gasWanted = o.uint64();
                  break;
                case 2:
                  r.gasUsed = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, p);
            return (
              void 0 !== t.gasWanted && null !== t.gasWanted
                ? (n.gasWanted = r.default.fromString(t.gasWanted))
                : (n.gasWanted = r.default.UZERO),
              void 0 !== t.gasUsed && null !== t.gasUsed
                ? (n.gasUsed = r.default.fromString(t.gasUsed))
                : (n.gasUsed = r.default.UZERO),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.gasWanted &&
                (n.gasWanted = (t.gasWanted || r.default.UZERO).toString()),
              void 0 !== t.gasUsed &&
                (n.gasUsed = (t.gasUsed || r.default.UZERO).toString()),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, p);
            return (
              void 0 !== t.gasWanted && null !== t.gasWanted
                ? (n.gasWanted = t.gasWanted)
                : (n.gasWanted = r.default.UZERO),
              void 0 !== t.gasUsed && null !== t.gasUsed
                ? (n.gasUsed = t.gasUsed)
                : (n.gasUsed = r.default.UZERO),
              n
            );
          },
        };
        const g = { log: "" };
        n.Result = {
          encode(t, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              0 !== t.data.length && n.uint32(10).bytes(t.data),
              "" !== t.log && n.uint32(18).string(t.log));
            for (const o of t.events)
              d.Event.encode(o, n.uint32(26).fork()).ldelim();
            return n;
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, g);
            ((r.events = []), (r.data = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.data = o.bytes();
                  break;
                case 2:
                  r.log = o.string();
                  break;
                case 3:
                  r.events.push(d.Event.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, g);
            if (
              ((n.events = []),
              (n.data = new Uint8Array()),
              void 0 !== t.data && null !== t.data && (n.data = S(t.data)),
              void 0 !== t.log && null !== t.log
                ? (n.log = String(t.log))
                : (n.log = ""),
              void 0 !== t.events && null !== t.events)
            )
              for (const o of t.events) n.events.push(d.Event.fromJSON(o));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.data &&
                (n.data = T(void 0 !== t.data ? t.data : new Uint8Array())),
              void 0 !== t.log && (n.log = t.log),
              t.events
                ? (n.events = t.events.map((t) =>
                    t ? d.Event.toJSON(t) : void 0,
                  ))
                : (n.events = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, g);
            if (
              ((n.events = []),
              void 0 !== t.data && null !== t.data
                ? (n.data = t.data)
                : (n.data = new Uint8Array()),
              void 0 !== t.log && null !== t.log
                ? (n.log = t.log)
                : (n.log = ""),
              void 0 !== t.events && null !== t.events)
            )
              for (const o of t.events) n.events.push(d.Event.fromPartial(o));
            return n;
          },
        };
        const m = {};
        n.SimulationResponse = {
          encode(t, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.gasInfo &&
                n.GasInfo.encode(t.gasInfo, o.uint32(10).fork()).ldelim(),
              void 0 !== t.result &&
                n.Result.encode(t.result, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, m);
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.gasInfo = n.GasInfo.decode(i, i.uint32());
                  break;
                case 2:
                  a.result = n.Result.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, m);
            return (
              void 0 !== t.gasInfo && null !== t.gasInfo
                ? (o.gasInfo = n.GasInfo.fromJSON(t.gasInfo))
                : (o.gasInfo = void 0),
              void 0 !== t.result && null !== t.result
                ? (o.result = n.Result.fromJSON(t.result))
                : (o.result = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.gasInfo &&
                (o.gasInfo = t.gasInfo ? n.GasInfo.toJSON(t.gasInfo) : void 0),
              void 0 !== t.result &&
                (o.result = t.result ? n.Result.toJSON(t.result) : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, m);
            return (
              void 0 !== t.gasInfo && null !== t.gasInfo
                ? (o.gasInfo = n.GasInfo.fromPartial(t.gasInfo))
                : (o.gasInfo = void 0),
              void 0 !== t.result && null !== t.result
                ? (o.result = n.Result.fromPartial(t.result))
                : (o.result = void 0),
              o
            );
          },
        };
        const v = { msgType: "" };
        n.MsgData = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.msgType && n.uint32(10).string(t.msgType),
              0 !== t.data.length && n.uint32(18).bytes(t.data),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, v);
            r.data = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.msgType = o.string();
                  break;
                case 2:
                  r.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, v);
            return (
              (n.data = new Uint8Array()),
              void 0 !== t.msgType && null !== t.msgType
                ? (n.msgType = String(t.msgType))
                : (n.msgType = ""),
              void 0 !== t.data && null !== t.data && (n.data = S(t.data)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.msgType && (n.msgType = t.msgType),
              void 0 !== t.data &&
                (n.data = T(void 0 !== t.data ? t.data : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, v);
            return (
              void 0 !== t.msgType && null !== t.msgType
                ? (n.msgType = t.msgType)
                : (n.msgType = ""),
              void 0 !== t.data && null !== t.data
                ? (n.data = t.data)
                : (n.data = new Uint8Array()),
              n
            );
          },
        };
        const h = {};
        n.TxMsgData = {
          encode(t, o) {
            void 0 === o && (o = s.default.Writer.create());
            for (const i of t.data)
              n.MsgData.encode(i, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, h);
            a.data = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.data.push(n.MsgData.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, h);
            if (((o.data = []), void 0 !== t.data && null !== t.data))
              for (const i of t.data) o.data.push(n.MsgData.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              t.data
                ? (o.data = t.data.map((t) =>
                    t ? n.MsgData.toJSON(t) : void 0,
                  ))
                : (o.data = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, h);
            if (((o.data = []), void 0 !== t.data && null !== t.data))
              for (const i of t.data) o.data.push(n.MsgData.fromPartial(i));
            return o;
          },
        };
        const b = {
          totalCount: r.default.UZERO,
          count: r.default.UZERO,
          pageNumber: r.default.UZERO,
          pageTotal: r.default.UZERO,
          limit: r.default.UZERO,
        };
        n.SearchTxsResult = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              t.totalCount.isZero() || o.uint32(8).uint64(t.totalCount),
              t.count.isZero() || o.uint32(16).uint64(t.count),
              t.pageNumber.isZero() || o.uint32(24).uint64(t.pageNumber),
              t.pageTotal.isZero() || o.uint32(32).uint64(t.pageTotal),
              t.limit.isZero() || o.uint32(40).uint64(t.limit));
            for (const i of t.txs)
              n.TxResponse.encode(i, o.uint32(50).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, b);
            a.txs = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.totalCount = i.uint64();
                  break;
                case 2:
                  a.count = i.uint64();
                  break;
                case 3:
                  a.pageNumber = i.uint64();
                  break;
                case 4:
                  a.pageTotal = i.uint64();
                  break;
                case 5:
                  a.limit = i.uint64();
                  break;
                case 6:
                  a.txs.push(n.TxResponse.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, b);
            if (
              ((o.txs = []),
              void 0 !== t.totalCount && null !== t.totalCount
                ? (o.totalCount = r.default.fromString(t.totalCount))
                : (o.totalCount = r.default.UZERO),
              void 0 !== t.count && null !== t.count
                ? (o.count = r.default.fromString(t.count))
                : (o.count = r.default.UZERO),
              void 0 !== t.pageNumber && null !== t.pageNumber
                ? (o.pageNumber = r.default.fromString(t.pageNumber))
                : (o.pageNumber = r.default.UZERO),
              void 0 !== t.pageTotal && null !== t.pageTotal
                ? (o.pageTotal = r.default.fromString(t.pageTotal))
                : (o.pageTotal = r.default.UZERO),
              void 0 !== t.limit && null !== t.limit
                ? (o.limit = r.default.fromString(t.limit))
                : (o.limit = r.default.UZERO),
              void 0 !== t.txs && null !== t.txs)
            )
              for (const i of t.txs) o.txs.push(n.TxResponse.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.totalCount &&
                (o.totalCount = (t.totalCount || r.default.UZERO).toString()),
              void 0 !== t.count &&
                (o.count = (t.count || r.default.UZERO).toString()),
              void 0 !== t.pageNumber &&
                (o.pageNumber = (t.pageNumber || r.default.UZERO).toString()),
              void 0 !== t.pageTotal &&
                (o.pageTotal = (t.pageTotal || r.default.UZERO).toString()),
              void 0 !== t.limit &&
                (o.limit = (t.limit || r.default.UZERO).toString()),
              t.txs
                ? (o.txs = t.txs.map((t) =>
                    t ? n.TxResponse.toJSON(t) : void 0,
                  ))
                : (o.txs = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, b);
            if (
              ((o.txs = []),
              void 0 !== t.totalCount && null !== t.totalCount
                ? (o.totalCount = t.totalCount)
                : (o.totalCount = r.default.UZERO),
              void 0 !== t.count && null !== t.count
                ? (o.count = t.count)
                : (o.count = r.default.UZERO),
              void 0 !== t.pageNumber && null !== t.pageNumber
                ? (o.pageNumber = t.pageNumber)
                : (o.pageNumber = r.default.UZERO),
              void 0 !== t.pageTotal && null !== t.pageTotal
                ? (o.pageTotal = t.pageTotal)
                : (o.pageTotal = r.default.UZERO),
              void 0 !== t.limit && null !== t.limit
                ? (o.limit = t.limit)
                : (o.limit = r.default.UZERO),
              void 0 !== t.txs && null !== t.txs)
            )
              for (const i of t.txs) o.txs.push(n.TxResponse.fromPartial(i));
            return o;
          },
        };
        var O = (() => {
          if ("undefined" !== typeof O) return O;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const y =
          O.atob || ((t) => O.Buffer.from(t, "base64").toString("binary"));
        function S(t) {
          const n = y(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const R =
          O.btoa || ((t) => O.Buffer.from(t, "binary").toString("base64"));
        function T(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return R(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    5200: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Fee =
            n.ModeInfo_Multi =
            n.ModeInfo_Single =
            n.ModeInfo =
            n.SignerInfo =
            n.AuthInfo =
            n.TxBody =
            n.SignDoc =
            n.TxRaw =
            n.Tx =
            n.protobufPackage =
              void 0));
        const r = i(o(2754)),
          s = i(o(2755)),
          a = o(2841),
          d = o(4370),
          u = o(4371),
          l = o(3101);
        n.protobufPackage = "cosmos.tx.v1beta1";
        const c = {};
        n.Tx = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.body &&
                n.TxBody.encode(t.body, o.uint32(10).fork()).ldelim(),
              void 0 !== t.authInfo &&
                n.AuthInfo.encode(t.authInfo, o.uint32(18).fork()).ldelim());
            for (const n of t.signatures) o.uint32(26).bytes(n);
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, c);
            a.signatures = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.body = n.TxBody.decode(i, i.uint32());
                  break;
                case 2:
                  a.authInfo = n.AuthInfo.decode(i, i.uint32());
                  break;
                case 3:
                  a.signatures.push(i.bytes());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, c);
            if (
              ((o.signatures = []),
              void 0 !== t.body && null !== t.body
                ? (o.body = n.TxBody.fromJSON(t.body))
                : (o.body = void 0),
              void 0 !== t.authInfo && null !== t.authInfo
                ? (o.authInfo = n.AuthInfo.fromJSON(t.authInfo))
                : (o.authInfo = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures) o.signatures.push(T(n));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.body &&
                (o.body = t.body ? n.TxBody.toJSON(t.body) : void 0),
              void 0 !== t.authInfo &&
                (o.authInfo = t.authInfo
                  ? n.AuthInfo.toJSON(t.authInfo)
                  : void 0),
              t.signatures
                ? (o.signatures = t.signatures.map((t) =>
                    E(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, c);
            if (
              ((o.signatures = []),
              void 0 !== t.body && null !== t.body
                ? (o.body = n.TxBody.fromPartial(t.body))
                : (o.body = void 0),
              void 0 !== t.authInfo && null !== t.authInfo
                ? (o.authInfo = n.AuthInfo.fromPartial(t.authInfo))
                : (o.authInfo = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures) o.signatures.push(n);
            return o;
          },
        };
        const f = {};
        n.TxRaw = {
          encode(t, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              0 !== t.bodyBytes.length && n.uint32(10).bytes(t.bodyBytes),
              0 !== t.authInfoBytes.length &&
                n.uint32(18).bytes(t.authInfoBytes));
            for (const o of t.signatures) n.uint32(26).bytes(o);
            return n;
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, f);
            ((r.signatures = []),
              (r.bodyBytes = new Uint8Array()),
              (r.authInfoBytes = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.bodyBytes = o.bytes();
                  break;
                case 2:
                  r.authInfoBytes = o.bytes();
                  break;
                case 3:
                  r.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, f);
            if (
              ((n.signatures = []),
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.bodyBytes &&
                null !== t.bodyBytes &&
                (n.bodyBytes = T(t.bodyBytes)),
              void 0 !== t.authInfoBytes &&
                null !== t.authInfoBytes &&
                (n.authInfoBytes = T(t.authInfoBytes)),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures) n.signatures.push(T(o));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.bodyBytes &&
                (n.bodyBytes = E(
                  void 0 !== t.bodyBytes ? t.bodyBytes : new Uint8Array(),
                )),
              void 0 !== t.authInfoBytes &&
                (n.authInfoBytes = E(
                  void 0 !== t.authInfoBytes
                    ? t.authInfoBytes
                    : new Uint8Array(),
                )),
              t.signatures
                ? (n.signatures = t.signatures.map((t) =>
                    E(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, f);
            if (
              ((n.signatures = []),
              void 0 !== t.bodyBytes && null !== t.bodyBytes
                ? (n.bodyBytes = t.bodyBytes)
                : (n.bodyBytes = new Uint8Array()),
              void 0 !== t.authInfoBytes && null !== t.authInfoBytes
                ? (n.authInfoBytes = t.authInfoBytes)
                : (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures) n.signatures.push(o);
            return n;
          },
        };
        const p = { chainId: "", accountNumber: r.default.UZERO };
        n.SignDoc = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.bodyBytes.length && n.uint32(10).bytes(t.bodyBytes),
              0 !== t.authInfoBytes.length &&
                n.uint32(18).bytes(t.authInfoBytes),
              "" !== t.chainId && n.uint32(26).string(t.chainId),
              t.accountNumber.isZero() || n.uint32(32).uint64(t.accountNumber),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, p);
            ((r.bodyBytes = new Uint8Array()),
              (r.authInfoBytes = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.bodyBytes = o.bytes();
                  break;
                case 2:
                  r.authInfoBytes = o.bytes();
                  break;
                case 3:
                  r.chainId = o.string();
                  break;
                case 4:
                  r.accountNumber = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, p);
            return (
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.bodyBytes &&
                null !== t.bodyBytes &&
                (n.bodyBytes = T(t.bodyBytes)),
              void 0 !== t.authInfoBytes &&
                null !== t.authInfoBytes &&
                (n.authInfoBytes = T(t.authInfoBytes)),
              void 0 !== t.chainId && null !== t.chainId
                ? (n.chainId = String(t.chainId))
                : (n.chainId = ""),
              void 0 !== t.accountNumber && null !== t.accountNumber
                ? (n.accountNumber = r.default.fromString(t.accountNumber))
                : (n.accountNumber = r.default.UZERO),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.bodyBytes &&
                (n.bodyBytes = E(
                  void 0 !== t.bodyBytes ? t.bodyBytes : new Uint8Array(),
                )),
              void 0 !== t.authInfoBytes &&
                (n.authInfoBytes = E(
                  void 0 !== t.authInfoBytes
                    ? t.authInfoBytes
                    : new Uint8Array(),
                )),
              void 0 !== t.chainId && (n.chainId = t.chainId),
              void 0 !== t.accountNumber &&
                (n.accountNumber = (
                  t.accountNumber || r.default.UZERO
                ).toString()),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, p);
            return (
              void 0 !== t.bodyBytes && null !== t.bodyBytes
                ? (n.bodyBytes = t.bodyBytes)
                : (n.bodyBytes = new Uint8Array()),
              void 0 !== t.authInfoBytes && null !== t.authInfoBytes
                ? (n.authInfoBytes = t.authInfoBytes)
                : (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.chainId && null !== t.chainId
                ? (n.chainId = t.chainId)
                : (n.chainId = ""),
              void 0 !== t.accountNumber && null !== t.accountNumber
                ? (n.accountNumber = t.accountNumber)
                : (n.accountNumber = r.default.UZERO),
              n
            );
          },
        };
        const g = { memo: "", timeoutHeight: r.default.UZERO };
        n.TxBody = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const o of t.messages)
              a.Any.encode(o, n.uint32(10).fork()).ldelim();
            ("" !== t.memo && n.uint32(18).string(t.memo),
              t.timeoutHeight.isZero() || n.uint32(24).uint64(t.timeoutHeight));
            for (const o of t.extensionOptions)
              a.Any.encode(o, n.uint32(8186).fork()).ldelim();
            for (const o of t.nonCriticalExtensionOptions)
              a.Any.encode(o, n.uint32(16378).fork()).ldelim();
            return n;
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, g);
            ((r.messages = []),
              (r.extensionOptions = []),
              (r.nonCriticalExtensionOptions = []));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.messages.push(a.Any.decode(o, o.uint32()));
                  break;
                case 2:
                  r.memo = o.string();
                  break;
                case 3:
                  r.timeoutHeight = o.uint64();
                  break;
                case 1023:
                  r.extensionOptions.push(a.Any.decode(o, o.uint32()));
                  break;
                case 2047:
                  r.nonCriticalExtensionOptions.push(
                    a.Any.decode(o, o.uint32()),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, g);
            if (
              ((n.messages = []),
              (n.extensionOptions = []),
              (n.nonCriticalExtensionOptions = []),
              void 0 !== t.messages && null !== t.messages)
            )
              for (const o of t.messages) n.messages.push(a.Any.fromJSON(o));
            if (
              (void 0 !== t.memo && null !== t.memo
                ? (n.memo = String(t.memo))
                : (n.memo = ""),
              void 0 !== t.timeoutHeight && null !== t.timeoutHeight
                ? (n.timeoutHeight = r.default.fromString(t.timeoutHeight))
                : (n.timeoutHeight = r.default.UZERO),
              void 0 !== t.extensionOptions && null !== t.extensionOptions)
            )
              for (const o of t.extensionOptions)
                n.extensionOptions.push(a.Any.fromJSON(o));
            if (
              void 0 !== t.nonCriticalExtensionOptions &&
              null !== t.nonCriticalExtensionOptions
            )
              for (const o of t.nonCriticalExtensionOptions)
                n.nonCriticalExtensionOptions.push(a.Any.fromJSON(o));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              t.messages
                ? (n.messages = t.messages.map((t) =>
                    t ? a.Any.toJSON(t) : void 0,
                  ))
                : (n.messages = []),
              void 0 !== t.memo && (n.memo = t.memo),
              void 0 !== t.timeoutHeight &&
                (n.timeoutHeight = (
                  t.timeoutHeight || r.default.UZERO
                ).toString()),
              t.extensionOptions
                ? (n.extensionOptions = t.extensionOptions.map((t) =>
                    t ? a.Any.toJSON(t) : void 0,
                  ))
                : (n.extensionOptions = []),
              t.nonCriticalExtensionOptions
                ? (n.nonCriticalExtensionOptions =
                    t.nonCriticalExtensionOptions.map((t) =>
                      t ? a.Any.toJSON(t) : void 0,
                    ))
                : (n.nonCriticalExtensionOptions = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, g);
            if (
              ((n.messages = []),
              (n.extensionOptions = []),
              (n.nonCriticalExtensionOptions = []),
              void 0 !== t.messages && null !== t.messages)
            )
              for (const o of t.messages) n.messages.push(a.Any.fromPartial(o));
            if (
              (void 0 !== t.memo && null !== t.memo
                ? (n.memo = t.memo)
                : (n.memo = ""),
              void 0 !== t.timeoutHeight && null !== t.timeoutHeight
                ? (n.timeoutHeight = t.timeoutHeight)
                : (n.timeoutHeight = r.default.UZERO),
              void 0 !== t.extensionOptions && null !== t.extensionOptions)
            )
              for (const o of t.extensionOptions)
                n.extensionOptions.push(a.Any.fromPartial(o));
            if (
              void 0 !== t.nonCriticalExtensionOptions &&
              null !== t.nonCriticalExtensionOptions
            )
              for (const o of t.nonCriticalExtensionOptions)
                n.nonCriticalExtensionOptions.push(a.Any.fromPartial(o));
            return n;
          },
        };
        const m = {};
        n.AuthInfo = {
          encode(t, o) {
            void 0 === o && (o = s.default.Writer.create());
            for (const i of t.signerInfos)
              n.SignerInfo.encode(i, o.uint32(10).fork()).ldelim();
            return (
              void 0 !== t.fee &&
                n.Fee.encode(t.fee, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, m);
            a.signerInfos = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.signerInfos.push(n.SignerInfo.decode(i, i.uint32()));
                  break;
                case 2:
                  a.fee = n.Fee.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, m);
            if (
              ((o.signerInfos = []),
              void 0 !== t.signerInfos && null !== t.signerInfos)
            )
              for (const i of t.signerInfos)
                o.signerInfos.push(n.SignerInfo.fromJSON(i));
            return (
              void 0 !== t.fee && null !== t.fee
                ? (o.fee = n.Fee.fromJSON(t.fee))
                : (o.fee = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              t.signerInfos
                ? (o.signerInfos = t.signerInfos.map((t) =>
                    t ? n.SignerInfo.toJSON(t) : void 0,
                  ))
                : (o.signerInfos = []),
              void 0 !== t.fee &&
                (o.fee = t.fee ? n.Fee.toJSON(t.fee) : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, m);
            if (
              ((o.signerInfos = []),
              void 0 !== t.signerInfos && null !== t.signerInfos)
            )
              for (const i of t.signerInfos)
                o.signerInfos.push(n.SignerInfo.fromPartial(i));
            return (
              void 0 !== t.fee && null !== t.fee
                ? (o.fee = n.Fee.fromPartial(t.fee))
                : (o.fee = void 0),
              o
            );
          },
        };
        const v = { sequence: r.default.UZERO };
        n.SignerInfo = {
          encode(t, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.publicKey &&
                a.Any.encode(t.publicKey, o.uint32(10).fork()).ldelim(),
              void 0 !== t.modeInfo &&
                n.ModeInfo.encode(t.modeInfo, o.uint32(18).fork()).ldelim(),
              t.sequence.isZero() || o.uint32(24).uint64(t.sequence),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const d = Object.assign({}, v);
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  d.publicKey = a.Any.decode(i, i.uint32());
                  break;
                case 2:
                  d.modeInfo = n.ModeInfo.decode(i, i.uint32());
                  break;
                case 3:
                  d.sequence = i.uint64();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return d;
          },
          fromJSON(t) {
            const o = Object.assign({}, v);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (o.publicKey = a.Any.fromJSON(t.publicKey))
                : (o.publicKey = void 0),
              void 0 !== t.modeInfo && null !== t.modeInfo
                ? (o.modeInfo = n.ModeInfo.fromJSON(t.modeInfo))
                : (o.modeInfo = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (o.sequence = r.default.fromString(t.sequence))
                : (o.sequence = r.default.UZERO),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.publicKey &&
                (o.publicKey = t.publicKey
                  ? a.Any.toJSON(t.publicKey)
                  : void 0),
              void 0 !== t.modeInfo &&
                (o.modeInfo = t.modeInfo
                  ? n.ModeInfo.toJSON(t.modeInfo)
                  : void 0),
              void 0 !== t.sequence &&
                (o.sequence = (t.sequence || r.default.UZERO).toString()),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, v);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (o.publicKey = a.Any.fromPartial(t.publicKey))
                : (o.publicKey = void 0),
              void 0 !== t.modeInfo && null !== t.modeInfo
                ? (o.modeInfo = n.ModeInfo.fromPartial(t.modeInfo))
                : (o.modeInfo = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (o.sequence = t.sequence)
                : (o.sequence = r.default.UZERO),
              o
            );
          },
        };
        const h = {};
        n.ModeInfo = {
          encode(t, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.single &&
                n.ModeInfo_Single.encode(
                  t.single,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.multi &&
                n.ModeInfo_Multi.encode(t.multi, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, h);
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.single = n.ModeInfo_Single.decode(i, i.uint32());
                  break;
                case 2:
                  a.multi = n.ModeInfo_Multi.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, h);
            return (
              void 0 !== t.single && null !== t.single
                ? (o.single = n.ModeInfo_Single.fromJSON(t.single))
                : (o.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (o.multi = n.ModeInfo_Multi.fromJSON(t.multi))
                : (o.multi = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.single &&
                (o.single = t.single
                  ? n.ModeInfo_Single.toJSON(t.single)
                  : void 0),
              void 0 !== t.multi &&
                (o.multi = t.multi ? n.ModeInfo_Multi.toJSON(t.multi) : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, h);
            return (
              void 0 !== t.single && null !== t.single
                ? (o.single = n.ModeInfo_Single.fromPartial(t.single))
                : (o.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (o.multi = n.ModeInfo_Multi.fromPartial(t.multi))
                : (o.multi = void 0),
              o
            );
          },
        };
        const b = { mode: 0 };
        n.ModeInfo_Single = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.mode && n.uint32(8).int32(t.mode),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, b);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.mode = o.int32();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = d.signModeFromJSON(t.mode))
                : (n.mode = 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.mode && (n.mode = d.signModeToJSON(t.mode)),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = t.mode)
                : (n.mode = 0),
              n
            );
          },
        };
        const O = {};
        n.ModeInfo_Multi = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              void 0 !== t.bitarray &&
                u.CompactBitArray.encode(
                  t.bitarray,
                  o.uint32(10).fork(),
                ).ldelim());
            for (const i of t.modeInfos)
              n.ModeInfo.encode(i, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, O);
            a.modeInfos = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.bitarray = u.CompactBitArray.decode(i, i.uint32());
                  break;
                case 2:
                  a.modeInfos.push(n.ModeInfo.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, O);
            if (
              ((o.modeInfos = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (o.bitarray = u.CompactBitArray.fromJSON(t.bitarray))
                : (o.bitarray = void 0),
              void 0 !== t.modeInfos && null !== t.modeInfos)
            )
              for (const i of t.modeInfos)
                o.modeInfos.push(n.ModeInfo.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.bitarray &&
                (o.bitarray = t.bitarray
                  ? u.CompactBitArray.toJSON(t.bitarray)
                  : void 0),
              t.modeInfos
                ? (o.modeInfos = t.modeInfos.map((t) =>
                    t ? n.ModeInfo.toJSON(t) : void 0,
                  ))
                : (o.modeInfos = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, O);
            if (
              ((o.modeInfos = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (o.bitarray = u.CompactBitArray.fromPartial(t.bitarray))
                : (o.bitarray = void 0),
              void 0 !== t.modeInfos && null !== t.modeInfos)
            )
              for (const i of t.modeInfos)
                o.modeInfos.push(n.ModeInfo.fromPartial(i));
            return o;
          },
        };
        const y = { gasLimit: r.default.UZERO, payer: "", granter: "" };
        n.Fee = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const o of t.amount)
              l.Coin.encode(o, n.uint32(10).fork()).ldelim();
            return (
              t.gasLimit.isZero() || n.uint32(16).uint64(t.gasLimit),
              "" !== t.payer && n.uint32(26).string(t.payer),
              "" !== t.granter && n.uint32(34).string(t.granter),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, y);
            r.amount = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.amount.push(l.Coin.decode(o, o.uint32()));
                  break;
                case 2:
                  r.gasLimit = o.uint64();
                  break;
                case 3:
                  r.payer = o.string();
                  break;
                case 4:
                  r.granter = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, y);
            if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
              for (const o of t.amount) n.amount.push(l.Coin.fromJSON(o));
            return (
              void 0 !== t.gasLimit && null !== t.gasLimit
                ? (n.gasLimit = r.default.fromString(t.gasLimit))
                : (n.gasLimit = r.default.UZERO),
              void 0 !== t.payer && null !== t.payer
                ? (n.payer = String(t.payer))
                : (n.payer = ""),
              void 0 !== t.granter && null !== t.granter
                ? (n.granter = String(t.granter))
                : (n.granter = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              t.amount
                ? (n.amount = t.amount.map((t) =>
                    t ? l.Coin.toJSON(t) : void 0,
                  ))
                : (n.amount = []),
              void 0 !== t.gasLimit &&
                (n.gasLimit = (t.gasLimit || r.default.UZERO).toString()),
              void 0 !== t.payer && (n.payer = t.payer),
              void 0 !== t.granter && (n.granter = t.granter),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, y);
            if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
              for (const o of t.amount) n.amount.push(l.Coin.fromPartial(o));
            return (
              void 0 !== t.gasLimit && null !== t.gasLimit
                ? (n.gasLimit = t.gasLimit)
                : (n.gasLimit = r.default.UZERO),
              void 0 !== t.payer && null !== t.payer
                ? (n.payer = t.payer)
                : (n.payer = ""),
              void 0 !== t.granter && null !== t.granter
                ? (n.granter = t.granter)
                : (n.granter = ""),
              n
            );
          },
        };
        var S = (() => {
          if ("undefined" !== typeof S) return S;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const R =
          S.atob || ((t) => S.Buffer.from(t, "base64").toString("binary"));
        function T(t) {
          const n = R(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const w =
          S.btoa || ((t) => S.Buffer.from(t, "binary").toString("base64"));
        function E(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return w(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    5206: function (t, n, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.TallyParams =
            n.VotingParams =
            n.DepositParams =
            n.Vote =
            n.TallyResult =
            n.Proposal =
            n.Deposit =
            n.TextProposal =
            n.WeightedVoteOption =
            n.proposalStatusToJSON =
            n.proposalStatusFromJSON =
            n.ProposalStatus =
            n.voteOptionToJSON =
            n.voteOptionFromJSON =
            n.VoteOption =
            n.protobufPackage =
              void 0));
        const r = i(o(2754)),
          s = i(o(2755)),
          a = o(2841),
          d = o(4369),
          u = o(3426),
          l = o(3101);
        var c, f;
        function p(t) {
          switch (t) {
            case 0:
            case "VOTE_OPTION_UNSPECIFIED":
              return c.VOTE_OPTION_UNSPECIFIED;
            case 1:
            case "VOTE_OPTION_YES":
              return c.VOTE_OPTION_YES;
            case 2:
            case "VOTE_OPTION_ABSTAIN":
              return c.VOTE_OPTION_ABSTAIN;
            case 3:
            case "VOTE_OPTION_NO":
              return c.VOTE_OPTION_NO;
            case 4:
            case "VOTE_OPTION_NO_WITH_VETO":
              return c.VOTE_OPTION_NO_WITH_VETO;
            case -1:
            case "UNRECOGNIZED":
            default:
              return c.UNRECOGNIZED;
          }
        }
        function g(t) {
          switch (t) {
            case c.VOTE_OPTION_UNSPECIFIED:
              return "VOTE_OPTION_UNSPECIFIED";
            case c.VOTE_OPTION_YES:
              return "VOTE_OPTION_YES";
            case c.VOTE_OPTION_ABSTAIN:
              return "VOTE_OPTION_ABSTAIN";
            case c.VOTE_OPTION_NO:
              return "VOTE_OPTION_NO";
            case c.VOTE_OPTION_NO_WITH_VETO:
              return "VOTE_OPTION_NO_WITH_VETO";
            default:
              return "UNKNOWN";
          }
        }
        function m(t) {
          switch (t) {
            case 0:
            case "PROPOSAL_STATUS_UNSPECIFIED":
              return f.PROPOSAL_STATUS_UNSPECIFIED;
            case 1:
            case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
              return f.PROPOSAL_STATUS_DEPOSIT_PERIOD;
            case 2:
            case "PROPOSAL_STATUS_VOTING_PERIOD":
              return f.PROPOSAL_STATUS_VOTING_PERIOD;
            case 3:
            case "PROPOSAL_STATUS_PASSED":
              return f.PROPOSAL_STATUS_PASSED;
            case 4:
            case "PROPOSAL_STATUS_REJECTED":
              return f.PROPOSAL_STATUS_REJECTED;
            case 5:
            case "PROPOSAL_STATUS_FAILED":
              return f.PROPOSAL_STATUS_FAILED;
            case -1:
            case "UNRECOGNIZED":
            default:
              return f.UNRECOGNIZED;
          }
        }
        function v(t) {
          switch (t) {
            case f.PROPOSAL_STATUS_UNSPECIFIED:
              return "PROPOSAL_STATUS_UNSPECIFIED";
            case f.PROPOSAL_STATUS_DEPOSIT_PERIOD:
              return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
            case f.PROPOSAL_STATUS_VOTING_PERIOD:
              return "PROPOSAL_STATUS_VOTING_PERIOD";
            case f.PROPOSAL_STATUS_PASSED:
              return "PROPOSAL_STATUS_PASSED";
            case f.PROPOSAL_STATUS_REJECTED:
              return "PROPOSAL_STATUS_REJECTED";
            case f.PROPOSAL_STATUS_FAILED:
              return "PROPOSAL_STATUS_FAILED";
            default:
              return "UNKNOWN";
          }
        }
        ((n.protobufPackage = "cosmos.gov.v1beta1"),
          (function (t) {
            ((t[(t["VOTE_OPTION_UNSPECIFIED"] = 0)] =
              "VOTE_OPTION_UNSPECIFIED"),
              (t[(t["VOTE_OPTION_YES"] = 1)] = "VOTE_OPTION_YES"),
              (t[(t["VOTE_OPTION_ABSTAIN"] = 2)] = "VOTE_OPTION_ABSTAIN"),
              (t[(t["VOTE_OPTION_NO"] = 3)] = "VOTE_OPTION_NO"),
              (t[(t["VOTE_OPTION_NO_WITH_VETO"] = 4)] =
                "VOTE_OPTION_NO_WITH_VETO"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((c = n.VoteOption || (n.VoteOption = {}))),
          (n.voteOptionFromJSON = p),
          (n.voteOptionToJSON = g),
          (function (t) {
            ((t[(t["PROPOSAL_STATUS_UNSPECIFIED"] = 0)] =
              "PROPOSAL_STATUS_UNSPECIFIED"),
              (t[(t["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1)] =
                "PROPOSAL_STATUS_DEPOSIT_PERIOD"),
              (t[(t["PROPOSAL_STATUS_VOTING_PERIOD"] = 2)] =
                "PROPOSAL_STATUS_VOTING_PERIOD"),
              (t[(t["PROPOSAL_STATUS_PASSED"] = 3)] = "PROPOSAL_STATUS_PASSED"),
              (t[(t["PROPOSAL_STATUS_REJECTED"] = 4)] =
                "PROPOSAL_STATUS_REJECTED"),
              (t[(t["PROPOSAL_STATUS_FAILED"] = 5)] = "PROPOSAL_STATUS_FAILED"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((f = n.ProposalStatus || (n.ProposalStatus = {}))),
          (n.proposalStatusFromJSON = m),
          (n.proposalStatusToJSON = v));
        const h = { option: 0, weight: "" };
        n.WeightedVoteOption = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.option && n.uint32(8).int32(t.option),
              "" !== t.weight && n.uint32(18).string(t.weight),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, h);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.option = o.int32();
                  break;
                case 2:
                  r.weight = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, h);
            return (
              void 0 !== t.option && null !== t.option
                ? (n.option = p(t.option))
                : (n.option = 0),
              void 0 !== t.weight && null !== t.weight
                ? (n.weight = String(t.weight))
                : (n.weight = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.option && (n.option = g(t.option)),
              void 0 !== t.weight && (n.weight = t.weight),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, h);
            return (
              void 0 !== t.option && null !== t.option
                ? (n.option = t.option)
                : (n.option = 0),
              void 0 !== t.weight && null !== t.weight
                ? (n.weight = t.weight)
                : (n.weight = ""),
              n
            );
          },
        };
        const b = { title: "", description: "" };
        n.TextProposal = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.title && n.uint32(10).string(t.title),
              "" !== t.description && n.uint32(18).string(t.description),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, b);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.title = o.string();
                  break;
                case 2:
                  r.description = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.title && null !== t.title
                ? (n.title = String(t.title))
                : (n.title = ""),
              void 0 !== t.description && null !== t.description
                ? (n.description = String(t.description))
                : (n.description = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.title && (n.title = t.title),
              void 0 !== t.description && (n.description = t.description),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.title && null !== t.title
                ? (n.title = t.title)
                : (n.title = ""),
              void 0 !== t.description && null !== t.description
                ? (n.description = t.description)
                : (n.description = ""),
              n
            );
          },
        };
        const O = { proposalId: r.default.UZERO, depositor: "" };
        n.Deposit = {
          encode(t, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              t.proposalId.isZero() || n.uint32(8).uint64(t.proposalId),
              "" !== t.depositor && n.uint32(18).string(t.depositor));
            for (const o of t.amount)
              l.Coin.encode(o, n.uint32(26).fork()).ldelim();
            return n;
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, O);
            r.amount = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.proposalId = o.uint64();
                  break;
                case 2:
                  r.depositor = o.string();
                  break;
                case 3:
                  r.amount.push(l.Coin.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, O);
            if (
              ((n.amount = []),
              void 0 !== t.proposalId && null !== t.proposalId
                ? (n.proposalId = r.default.fromString(t.proposalId))
                : (n.proposalId = r.default.UZERO),
              void 0 !== t.depositor && null !== t.depositor
                ? (n.depositor = String(t.depositor))
                : (n.depositor = ""),
              void 0 !== t.amount && null !== t.amount)
            )
              for (const o of t.amount) n.amount.push(l.Coin.fromJSON(o));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.proposalId &&
                (n.proposalId = (t.proposalId || r.default.UZERO).toString()),
              void 0 !== t.depositor && (n.depositor = t.depositor),
              t.amount
                ? (n.amount = t.amount.map((t) =>
                    t ? l.Coin.toJSON(t) : void 0,
                  ))
                : (n.amount = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, O);
            if (
              ((n.amount = []),
              void 0 !== t.proposalId && null !== t.proposalId
                ? (n.proposalId = t.proposalId)
                : (n.proposalId = r.default.UZERO),
              void 0 !== t.depositor && null !== t.depositor
                ? (n.depositor = t.depositor)
                : (n.depositor = ""),
              void 0 !== t.amount && null !== t.amount)
            )
              for (const o of t.amount) n.amount.push(l.Coin.fromPartial(o));
            return n;
          },
        };
        const y = { proposalId: r.default.UZERO, status: 0 };
        n.Proposal = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              t.proposalId.isZero() || o.uint32(8).uint64(t.proposalId),
              void 0 !== t.content &&
                a.Any.encode(t.content, o.uint32(18).fork()).ldelim(),
              0 !== t.status && o.uint32(24).int32(t.status),
              void 0 !== t.finalTallyResult &&
                n.TallyResult.encode(
                  t.finalTallyResult,
                  o.uint32(34).fork(),
                ).ldelim(),
              void 0 !== t.submitTime &&
                u.Timestamp.encode(
                  P(t.submitTime),
                  o.uint32(42).fork(),
                ).ldelim(),
              void 0 !== t.depositEndTime &&
                u.Timestamp.encode(
                  P(t.depositEndTime),
                  o.uint32(50).fork(),
                ).ldelim());
            for (const n of t.totalDeposit)
              l.Coin.encode(n, o.uint32(58).fork()).ldelim();
            return (
              void 0 !== t.votingStartTime &&
                u.Timestamp.encode(
                  P(t.votingStartTime),
                  o.uint32(66).fork(),
                ).ldelim(),
              void 0 !== t.votingEndTime &&
                u.Timestamp.encode(
                  P(t.votingEndTime),
                  o.uint32(74).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const d = Object.assign({}, y);
            d.totalDeposit = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  d.proposalId = i.uint64();
                  break;
                case 2:
                  d.content = a.Any.decode(i, i.uint32());
                  break;
                case 3:
                  d.status = i.int32();
                  break;
                case 4:
                  d.finalTallyResult = n.TallyResult.decode(i, i.uint32());
                  break;
                case 5:
                  d.submitTime = x(u.Timestamp.decode(i, i.uint32()));
                  break;
                case 6:
                  d.depositEndTime = x(u.Timestamp.decode(i, i.uint32()));
                  break;
                case 7:
                  d.totalDeposit.push(l.Coin.decode(i, i.uint32()));
                  break;
                case 8:
                  d.votingStartTime = x(u.Timestamp.decode(i, i.uint32()));
                  break;
                case 9:
                  d.votingEndTime = x(u.Timestamp.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return d;
          },
          fromJSON(t) {
            const o = Object.assign({}, y);
            if (
              ((o.totalDeposit = []),
              void 0 !== t.proposalId && null !== t.proposalId
                ? (o.proposalId = r.default.fromString(t.proposalId))
                : (o.proposalId = r.default.UZERO),
              void 0 !== t.content && null !== t.content
                ? (o.content = a.Any.fromJSON(t.content))
                : (o.content = void 0),
              void 0 !== t.status && null !== t.status
                ? (o.status = m(t.status))
                : (o.status = 0),
              void 0 !== t.finalTallyResult && null !== t.finalTallyResult
                ? (o.finalTallyResult = n.TallyResult.fromJSON(
                    t.finalTallyResult,
                  ))
                : (o.finalTallyResult = void 0),
              void 0 !== t.submitTime && null !== t.submitTime
                ? (o.submitTime = C(t.submitTime))
                : (o.submitTime = void 0),
              void 0 !== t.depositEndTime && null !== t.depositEndTime
                ? (o.depositEndTime = C(t.depositEndTime))
                : (o.depositEndTime = void 0),
              void 0 !== t.totalDeposit && null !== t.totalDeposit)
            )
              for (const n of t.totalDeposit)
                o.totalDeposit.push(l.Coin.fromJSON(n));
            return (
              void 0 !== t.votingStartTime && null !== t.votingStartTime
                ? (o.votingStartTime = C(t.votingStartTime))
                : (o.votingStartTime = void 0),
              void 0 !== t.votingEndTime && null !== t.votingEndTime
                ? (o.votingEndTime = C(t.votingEndTime))
                : (o.votingEndTime = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.proposalId &&
                (o.proposalId = (t.proposalId || r.default.UZERO).toString()),
              void 0 !== t.content &&
                (o.content = t.content ? a.Any.toJSON(t.content) : void 0),
              void 0 !== t.status && (o.status = v(t.status)),
              void 0 !== t.finalTallyResult &&
                (o.finalTallyResult = t.finalTallyResult
                  ? n.TallyResult.toJSON(t.finalTallyResult)
                  : void 0),
              void 0 !== t.submitTime &&
                (o.submitTime = t.submitTime.toISOString()),
              void 0 !== t.depositEndTime &&
                (o.depositEndTime = t.depositEndTime.toISOString()),
              t.totalDeposit
                ? (o.totalDeposit = t.totalDeposit.map((t) =>
                    t ? l.Coin.toJSON(t) : void 0,
                  ))
                : (o.totalDeposit = []),
              void 0 !== t.votingStartTime &&
                (o.votingStartTime = t.votingStartTime.toISOString()),
              void 0 !== t.votingEndTime &&
                (o.votingEndTime = t.votingEndTime.toISOString()),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, y);
            if (
              ((o.totalDeposit = []),
              void 0 !== t.proposalId && null !== t.proposalId
                ? (o.proposalId = t.proposalId)
                : (o.proposalId = r.default.UZERO),
              void 0 !== t.content && null !== t.content
                ? (o.content = a.Any.fromPartial(t.content))
                : (o.content = void 0),
              void 0 !== t.status && null !== t.status
                ? (o.status = t.status)
                : (o.status = 0),
              void 0 !== t.finalTallyResult && null !== t.finalTallyResult
                ? (o.finalTallyResult = n.TallyResult.fromPartial(
                    t.finalTallyResult,
                  ))
                : (o.finalTallyResult = void 0),
              void 0 !== t.submitTime && null !== t.submitTime
                ? (o.submitTime = t.submitTime)
                : (o.submitTime = void 0),
              void 0 !== t.depositEndTime && null !== t.depositEndTime
                ? (o.depositEndTime = t.depositEndTime)
                : (o.depositEndTime = void 0),
              void 0 !== t.totalDeposit && null !== t.totalDeposit)
            )
              for (const n of t.totalDeposit)
                o.totalDeposit.push(l.Coin.fromPartial(n));
            return (
              void 0 !== t.votingStartTime && null !== t.votingStartTime
                ? (o.votingStartTime = t.votingStartTime)
                : (o.votingStartTime = void 0),
              void 0 !== t.votingEndTime && null !== t.votingEndTime
                ? (o.votingEndTime = t.votingEndTime)
                : (o.votingEndTime = void 0),
              o
            );
          },
        };
        const S = { yes: "", abstain: "", no: "", noWithVeto: "" };
        n.TallyResult = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.yes && n.uint32(10).string(t.yes),
              "" !== t.abstain && n.uint32(18).string(t.abstain),
              "" !== t.no && n.uint32(26).string(t.no),
              "" !== t.noWithVeto && n.uint32(34).string(t.noWithVeto),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, S);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.yes = o.string();
                  break;
                case 2:
                  r.abstain = o.string();
                  break;
                case 3:
                  r.no = o.string();
                  break;
                case 4:
                  r.noWithVeto = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, S);
            return (
              void 0 !== t.yes && null !== t.yes
                ? (n.yes = String(t.yes))
                : (n.yes = ""),
              void 0 !== t.abstain && null !== t.abstain
                ? (n.abstain = String(t.abstain))
                : (n.abstain = ""),
              void 0 !== t.no && null !== t.no
                ? (n.no = String(t.no))
                : (n.no = ""),
              void 0 !== t.noWithVeto && null !== t.noWithVeto
                ? (n.noWithVeto = String(t.noWithVeto))
                : (n.noWithVeto = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.yes && (n.yes = t.yes),
              void 0 !== t.abstain && (n.abstain = t.abstain),
              void 0 !== t.no && (n.no = t.no),
              void 0 !== t.noWithVeto && (n.noWithVeto = t.noWithVeto),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, S);
            return (
              void 0 !== t.yes && null !== t.yes
                ? (n.yes = t.yes)
                : (n.yes = ""),
              void 0 !== t.abstain && null !== t.abstain
                ? (n.abstain = t.abstain)
                : (n.abstain = ""),
              void 0 !== t.no && null !== t.no ? (n.no = t.no) : (n.no = ""),
              void 0 !== t.noWithVeto && null !== t.noWithVeto
                ? (n.noWithVeto = t.noWithVeto)
                : (n.noWithVeto = ""),
              n
            );
          },
        };
        const R = { proposalId: r.default.UZERO, voter: "", option: 0 };
        n.Vote = {
          encode(t, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              t.proposalId.isZero() || o.uint32(8).uint64(t.proposalId),
              "" !== t.voter && o.uint32(18).string(t.voter),
              0 !== t.option && o.uint32(24).int32(t.option));
            for (const i of t.options)
              n.WeightedVoteOption.encode(i, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === o ? i.len : i.pos + o;
            const a = Object.assign({}, R);
            a.options = [];
            while (i.pos < r) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  a.proposalId = i.uint64();
                  break;
                case 2:
                  a.voter = i.string();
                  break;
                case 3:
                  a.option = i.int32();
                  break;
                case 4:
                  a.options.push(n.WeightedVoteOption.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const o = Object.assign({}, R);
            if (
              ((o.options = []),
              void 0 !== t.proposalId && null !== t.proposalId
                ? (o.proposalId = r.default.fromString(t.proposalId))
                : (o.proposalId = r.default.UZERO),
              void 0 !== t.voter && null !== t.voter
                ? (o.voter = String(t.voter))
                : (o.voter = ""),
              void 0 !== t.option && null !== t.option
                ? (o.option = p(t.option))
                : (o.option = 0),
              void 0 !== t.options && null !== t.options)
            )
              for (const i of t.options)
                o.options.push(n.WeightedVoteOption.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.proposalId &&
                (o.proposalId = (t.proposalId || r.default.UZERO).toString()),
              void 0 !== t.voter && (o.voter = t.voter),
              void 0 !== t.option && (o.option = g(t.option)),
              t.options
                ? (o.options = t.options.map((t) =>
                    t ? n.WeightedVoteOption.toJSON(t) : void 0,
                  ))
                : (o.options = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, R);
            if (
              ((o.options = []),
              void 0 !== t.proposalId && null !== t.proposalId
                ? (o.proposalId = t.proposalId)
                : (o.proposalId = r.default.UZERO),
              void 0 !== t.voter && null !== t.voter
                ? (o.voter = t.voter)
                : (o.voter = ""),
              void 0 !== t.option && null !== t.option
                ? (o.option = t.option)
                : (o.option = 0),
              void 0 !== t.options && null !== t.options)
            )
              for (const i of t.options)
                o.options.push(n.WeightedVoteOption.fromPartial(i));
            return o;
          },
        };
        const T = {};
        n.DepositParams = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const o of t.minDeposit)
              l.Coin.encode(o, n.uint32(10).fork()).ldelim();
            return (
              void 0 !== t.maxDepositPeriod &&
                d.Duration.encode(
                  t.maxDepositPeriod,
                  n.uint32(18).fork(),
                ).ldelim(),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, T);
            r.minDeposit = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.minDeposit.push(l.Coin.decode(o, o.uint32()));
                  break;
                case 2:
                  r.maxDepositPeriod = d.Duration.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, T);
            if (
              ((n.minDeposit = []),
              void 0 !== t.minDeposit && null !== t.minDeposit)
            )
              for (const o of t.minDeposit)
                n.minDeposit.push(l.Coin.fromJSON(o));
            return (
              void 0 !== t.maxDepositPeriod && null !== t.maxDepositPeriod
                ? (n.maxDepositPeriod = d.Duration.fromJSON(t.maxDepositPeriod))
                : (n.maxDepositPeriod = void 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              t.minDeposit
                ? (n.minDeposit = t.minDeposit.map((t) =>
                    t ? l.Coin.toJSON(t) : void 0,
                  ))
                : (n.minDeposit = []),
              void 0 !== t.maxDepositPeriod &&
                (n.maxDepositPeriod = t.maxDepositPeriod
                  ? d.Duration.toJSON(t.maxDepositPeriod)
                  : void 0),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, T);
            if (
              ((n.minDeposit = []),
              void 0 !== t.minDeposit && null !== t.minDeposit)
            )
              for (const o of t.minDeposit)
                n.minDeposit.push(l.Coin.fromPartial(o));
            return (
              void 0 !== t.maxDepositPeriod && null !== t.maxDepositPeriod
                ? (n.maxDepositPeriod = d.Duration.fromPartial(
                    t.maxDepositPeriod,
                  ))
                : (n.maxDepositPeriod = void 0),
              n
            );
          },
        };
        const w = {};
        n.VotingParams = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              void 0 !== t.votingPeriod &&
                d.Duration.encode(t.votingPeriod, n.uint32(10).fork()).ldelim(),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, w);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.votingPeriod = d.Duration.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, w);
            return (
              void 0 !== t.votingPeriod && null !== t.votingPeriod
                ? (n.votingPeriod = d.Duration.fromJSON(t.votingPeriod))
                : (n.votingPeriod = void 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.votingPeriod &&
                (n.votingPeriod = t.votingPeriod
                  ? d.Duration.toJSON(t.votingPeriod)
                  : void 0),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, w);
            return (
              void 0 !== t.votingPeriod && null !== t.votingPeriod
                ? (n.votingPeriod = d.Duration.fromPartial(t.votingPeriod))
                : (n.votingPeriod = void 0),
              n
            );
          },
        };
        const E = {};
        n.TallyParams = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.quorum.length && n.uint32(10).bytes(t.quorum),
              0 !== t.threshold.length && n.uint32(18).bytes(t.threshold),
              0 !== t.vetoThreshold.length &&
                n.uint32(26).bytes(t.vetoThreshold),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === n ? o.len : o.pos + n;
            const r = Object.assign({}, E);
            ((r.quorum = new Uint8Array()),
              (r.threshold = new Uint8Array()),
              (r.vetoThreshold = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  r.quorum = o.bytes();
                  break;
                case 2:
                  r.threshold = o.bytes();
                  break;
                case 3:
                  r.vetoThreshold = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, E);
            return (
              (n.quorum = new Uint8Array()),
              (n.threshold = new Uint8Array()),
              (n.vetoThreshold = new Uint8Array()),
              void 0 !== t.quorum &&
                null !== t.quorum &&
                (n.quorum = N(t.quorum)),
              void 0 !== t.threshold &&
                null !== t.threshold &&
                (n.threshold = N(t.threshold)),
              void 0 !== t.vetoThreshold &&
                null !== t.vetoThreshold &&
                (n.vetoThreshold = N(t.vetoThreshold)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.quorum &&
                (n.quorum = _(
                  void 0 !== t.quorum ? t.quorum : new Uint8Array(),
                )),
              void 0 !== t.threshold &&
                (n.threshold = _(
                  void 0 !== t.threshold ? t.threshold : new Uint8Array(),
                )),
              void 0 !== t.vetoThreshold &&
                (n.vetoThreshold = _(
                  void 0 !== t.vetoThreshold
                    ? t.vetoThreshold
                    : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, E);
            return (
              void 0 !== t.quorum && null !== t.quorum
                ? (n.quorum = t.quorum)
                : (n.quorum = new Uint8Array()),
              void 0 !== t.threshold && null !== t.threshold
                ? (n.threshold = t.threshold)
                : (n.threshold = new Uint8Array()),
              void 0 !== t.vetoThreshold && null !== t.vetoThreshold
                ? (n.vetoThreshold = t.vetoThreshold)
                : (n.vetoThreshold = new Uint8Array()),
              n
            );
          },
        };
        var k = (() => {
          if ("undefined" !== typeof k) return k;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const A =
          k.atob || ((t) => k.Buffer.from(t, "base64").toString("binary"));
        function N(t) {
          const n = A(t),
            o = new Uint8Array(n.length);
          for (let i = 0; i < n.length; ++i) o[i] = n.charCodeAt(i);
          return o;
        }
        const I =
          k.btoa || ((t) => k.Buffer.from(t, "binary").toString("base64"));
        function _(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return I(n.join(""));
        }
        function P(t) {
          const n = D(t.getTime() / 1e3),
            o = (t.getTime() % 1e3) * 1e6;
          return { seconds: n, nanos: o };
        }
        function x(t) {
          let n = 1e3 * t.seconds.toNumber();
          return ((n += t.nanos / 1e6), new Date(n));
        }
        function C(t) {
          return t instanceof Date
            ? t
            : "string" === typeof t
              ? new Date(t)
              : x(u.Timestamp.fromJSON(t));
        }
        function D(t) {
          return r.default.fromNumber(t);
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    5233: function (t, n) {},
    5235: function (t, n) {},
  },
]);
