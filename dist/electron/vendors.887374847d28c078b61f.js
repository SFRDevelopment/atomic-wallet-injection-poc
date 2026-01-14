(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [209],
  {
    2755: function (t, n, i) {
      "use strict";
      t.exports = i(3094);
    },
    2791: function (t, n, i) {
      "use strict";
      (function (t) {
        var r = n;
        function o(t, n, i) {
          for (var r = Object.keys(n), o = 0; o < r.length; ++o)
            (void 0 !== t[r[o]] && i) || (t[r[o]] = n[r[o]]);
          return t;
        }
        function s(t) {
          function n(t, i) {
            if (!(this instanceof n)) return new n(t, i);
            (Object.defineProperty(this, "message", {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, n)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              i && o(this, i));
          }
          return (
            ((n.prototype = Object.create(Error.prototype)).constructor = n),
            Object.defineProperty(n.prototype, "name", {
              get: function () {
                return t;
              },
            }),
            (n.prototype.toString = function () {
              return this.name + ": " + this.message;
            }),
            n
          );
        }
        ((r.asPromise = i(3021)),
          (r.base64 = i(3022)),
          (r.EventEmitter = i(3023)),
          (r.float = i(3024)),
          (r.inquire = i(3025)),
          (r.utf8 = i(3026)),
          (r.pool = i(3027)),
          (r.LongBits = i(3095)),
          (r.isNode = Boolean(
            "undefined" !== typeof t &&
            t &&
            t.process &&
            t.process.versions &&
            t.process.versions.node,
          )),
          (r.global =
            (r.isNode && t) ||
            ("undefined" !== typeof window && window) ||
            ("undefined" !== typeof self && self) ||
            this),
          (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (r.isInteger =
            Number.isInteger ||
            function (t) {
              return (
                "number" === typeof t && isFinite(t) && Math.floor(t) === t
              );
            }),
          (r.isString = function (t) {
            return "string" === typeof t || t instanceof String;
          }),
          (r.isObject = function (t) {
            return t && "object" === typeof t;
          }),
          (r.isset = r.isSet =
            function (t, n) {
              var i = t[n];
              return (
                !(null == i || !t.hasOwnProperty(n)) &&
                ("object" !== typeof i ||
                  (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
              );
            }),
          (r.Buffer = (function () {
            try {
              var t = r.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (n) {
              return null;
            }
          })()),
          (r._Buffer_from = null),
          (r._Buffer_allocUnsafe = null),
          (r.newBuffer = function (t) {
            return "number" === typeof t
              ? r.Buffer
                ? r._Buffer_allocUnsafe(t)
                : new r.Array(t)
              : r.Buffer
                ? r._Buffer_from(t)
                : "undefined" === typeof Uint8Array
                  ? t
                  : new Uint8Array(t);
          }),
          (r.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array),
          (r.Long =
            (r.global.dcodeIO && r.global.dcodeIO.Long) ||
            r.global.Long ||
            r.inquire("long")),
          (r.key2Re = /^true|false|0|1$/),
          (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (r.longToHash = function (t) {
            return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash;
          }),
          (r.longFromHash = function (t, n) {
            var i = r.LongBits.fromHash(t);
            return r.Long
              ? r.Long.fromBits(i.lo, i.hi, n)
              : i.toNumber(Boolean(n));
          }),
          (r.merge = o),
          (r.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (r.newError = s),
          (r.ProtocolError = s("ProtocolError")),
          (r.oneOfGetter = function (t) {
            for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
            return function () {
              for (var t = Object.keys(this), i = t.length - 1; i > -1; --i)
                if (
                  1 === n[t[i]] &&
                  void 0 !== this[t[i]] &&
                  null !== this[t[i]]
                )
                  return t[i];
            };
          }),
          (r.oneOfSetter = function (t) {
            return function (n) {
              for (var i = 0; i < t.length; ++i)
                t[i] !== n && delete this[t[i]];
            };
          }),
          (r.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (r._configure = function () {
            var t = r.Buffer;
            t
              ? ((r._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (n, i) {
                    return new t(n, i);
                  }),
                (r._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (n) {
                    return new t(n);
                  }))
              : (r._Buffer_from = r._Buffer_allocUnsafe = null);
          }));
      }).call(this, i(13));
    },
    2951: function (t, n, i) {
      "use strict";
      t.exports = g;
      var r,
        o = i(2791),
        s = o.LongBits,
        a = o.base64,
        A = o.utf8;
      function h(t, n, i) {
        ((this.fn = t), (this.len = n), (this.next = void 0), (this.val = i));
      }
      function u() {}
      function f(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function g() {
        ((this.len = 0),
          (this.head = new h(u, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var I = function () {
        return o.Buffer
          ? function () {
              return (g.create = function () {
                return new r();
              })();
            }
          : function () {
              return new g();
            };
      };
      function c(t, n, i) {
        n[i] = 255 & t;
      }
      function l(t, n, i) {
        while (t > 127) ((n[i++] = (127 & t) | 128), (t >>>= 7));
        n[i] = t;
      }
      function C(t, n) {
        ((this.len = t), (this.next = void 0), (this.val = n));
      }
      function d(t, n, i) {
        while (t.hi)
          ((n[i++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((n[i++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        n[i++] = t.lo;
      }
      function y(t, n, i) {
        ((n[i] = 255 & t),
          (n[i + 1] = (t >>> 8) & 255),
          (n[i + 2] = (t >>> 16) & 255),
          (n[i + 3] = t >>> 24));
      }
      ((g.create = I()),
        (g.alloc = function (t) {
          return new o.Array(t);
        }),
        o.Array !== Array &&
          (g.alloc = o.pool(g.alloc, o.Array.prototype.subarray)),
        (g.prototype._push = function (t, n, i) {
          return (
            (this.tail = this.tail.next = new h(t, n, i)),
            (this.len += n),
            this
          );
        }),
        (C.prototype = Object.create(h.prototype)),
        (C.prototype.fn = l),
        (g.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new C(
                (t >>>= 0) < 128
                  ? 1
                  : t < 16384
                    ? 2
                    : t < 2097152
                      ? 3
                      : t < 268435456
                        ? 4
                        : 5,
                t,
              )).len),
            this
          );
        }),
        (g.prototype.int32 = function (t) {
          return t < 0 ? this._push(d, 10, s.fromNumber(t)) : this.uint32(t);
        }),
        (g.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (g.prototype.uint64 = function (t) {
          var n = s.from(t);
          return this._push(d, n.length(), n);
        }),
        (g.prototype.int64 = g.prototype.uint64),
        (g.prototype.sint64 = function (t) {
          var n = s.from(t).zzEncode();
          return this._push(d, n.length(), n);
        }),
        (g.prototype.bool = function (t) {
          return this._push(c, 1, t ? 1 : 0);
        }),
        (g.prototype.fixed32 = function (t) {
          return this._push(y, 4, t >>> 0);
        }),
        (g.prototype.sfixed32 = g.prototype.fixed32),
        (g.prototype.fixed64 = function (t) {
          var n = s.from(t);
          return this._push(y, 4, n.lo)._push(y, 4, n.hi);
        }),
        (g.prototype.sfixed64 = g.prototype.fixed64),
        (g.prototype.float = function (t) {
          return this._push(o.float.writeFloatLE, 4, t);
        }),
        (g.prototype.double = function (t) {
          return this._push(o.float.writeDoubleLE, 8, t);
        }));
      var E = o.Array.prototype.set
        ? function (t, n, i) {
            n.set(t, i);
          }
        : function (t, n, i) {
            for (var r = 0; r < t.length; ++r) n[i + r] = t[r];
          };
      ((g.prototype.bytes = function (t) {
        var n = t.length >>> 0;
        if (!n) return this._push(c, 1, 0);
        if (o.isString(t)) {
          var i = g.alloc((n = a.length(t)));
          (a.decode(t, i, 0), (t = i));
        }
        return this.uint32(n)._push(E, n, t);
      }),
        (g.prototype.string = function (t) {
          var n = A.length(t);
          return n ? this.uint32(n)._push(A.write, n, t) : this._push(c, 1, 0);
        }),
        (g.prototype.fork = function () {
          return (
            (this.states = new f(this)),
            (this.head = this.tail = new h(u, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (g.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new h(u, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (g.prototype.ldelim = function () {
          var t = this.head,
            n = this.tail,
            i = this.len;
          return (
            this.reset().uint32(i),
            i && ((this.tail.next = t.next), (this.tail = n), (this.len += i)),
            this
          );
        }),
        (g.prototype.finish = function () {
          var t = this.head.next,
            n = this.constructor.alloc(this.len),
            i = 0;
          while (t) (t.fn(t.val, n, i), (i += t.len), (t = t.next));
          return n;
        }),
        (g._configure = function (t) {
          ((r = t), (g.create = I()), r._configure());
        }));
    },
    2952: function (t, n, i) {
      "use strict";
      t.exports = h;
      var r,
        o = i(2791),
        s = o.LongBits,
        a = o.utf8;
      function A(t, n) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (n || 1) + " > " + t.len,
        );
      }
      function h(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var u =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new h(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new h(t);
                throw Error("illegal buffer");
              },
        f = function () {
          return o.Buffer
            ? function (t) {
                return (h.create = function (t) {
                  return o.Buffer.isBuffer(t) ? new r(t) : u(t);
                })(t);
              }
            : u;
        };
      function g() {
        var t = new s(0, 0),
          n = 0;
        if (!(this.len - this.pos > 4)) {
          for (; n < 3; ++n) {
            if (this.pos >= this.len) throw A(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * n))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * n))) >>> 0),
            t
          );
        }
        for (; n < 4; ++n)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * n))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((n = 0), this.len - this.pos > 4)) {
          for (; n < 5; ++n)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * n + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; n < 5; ++n) {
            if (this.pos >= this.len) throw A(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * n + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function I(t, n) {
        return (
          (t[n - 4] | (t[n - 3] << 8) | (t[n - 2] << 16) | (t[n - 1] << 24)) >>>
          0
        );
      }
      function c() {
        if (this.pos + 8 > this.len) throw A(this, 8);
        return new s(
          I(this.buf, (this.pos += 4)),
          I(this.buf, (this.pos += 4)),
        );
      }
      ((h.create = f()),
        (h.prototype._slice =
          o.Array.prototype.subarray || o.Array.prototype.slice),
        (h.prototype.uint32 = (function () {
          var t = 4294967295;
          return function () {
            if (
              ((t = (127 & this.buf[this.pos]) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 7)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 14)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 21)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((15 & this.buf[this.pos]) << 28)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if ((this.pos += 5) > this.len)
              throw ((this.pos = this.len), A(this, 10));
            return t;
          };
        })()),
        (h.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (h.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (h.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (h.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw A(this, 4);
          return I(this.buf, (this.pos += 4));
        }),
        (h.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw A(this, 4);
          return 0 | I(this.buf, (this.pos += 4));
        }),
        (h.prototype.float = function () {
          if (this.pos + 4 > this.len) throw A(this, 4);
          var t = o.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (h.prototype.double = function () {
          if (this.pos + 8 > this.len) throw A(this, 4);
          var t = o.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (h.prototype.bytes = function () {
          var t = this.uint32(),
            n = this.pos,
            i = this.pos + t;
          if (i > this.len) throw A(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(n, i)
              : n === i
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, n, i)
          );
        }),
        (h.prototype.string = function () {
          var t = this.bytes();
          return a.read(t, 0, t.length);
        }),
        (h.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw A(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw A(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (h.prototype.skipType = function (t) {
          switch (t) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              while (4 !== (t = 7 & this.uint32())) this.skipType(t);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + t + " at offset " + this.pos);
          }
          return this;
        }),
        (h._configure = function (t) {
          ((r = t), (h.create = f()), r._configure());
          var n = o.Long ? "toLong" : "toNumber";
          o.merge(h.prototype, {
            int64: function () {
              return g.call(this)[n](!1);
            },
            uint64: function () {
              return g.call(this)[n](!0);
            },
            sint64: function () {
              return g.call(this).zzDecode()[n](!1);
            },
            fixed64: function () {
              return c.call(this)[n](!0);
            },
            sfixed64: function () {
              return c.call(this)[n](!1);
            },
          });
        }));
    },
    3021: function (t, n, i) {
      "use strict";
      function r(t, n) {
        var i = new Array(arguments.length - 1),
          r = 0,
          o = 2,
          s = !0;
        while (o < arguments.length) i[r++] = arguments[o++];
        return new Promise(function (o, a) {
          i[r] = function (t) {
            if (s)
              if (((s = !1), t)) a(t);
              else {
                var n = new Array(arguments.length - 1),
                  i = 0;
                while (i < n.length) n[i++] = arguments[i];
                o.apply(null, n);
              }
          };
          try {
            t.apply(n || null, i);
          } catch (A) {
            s && ((s = !1), a(A));
          }
        });
      }
      t.exports = r;
    },
    3022: function (t, n, i) {
      "use strict";
      var r = n;
      r.length = function (t) {
        var n = t.length;
        if (!n) return 0;
        var i = 0;
        while (--n % 4 > 1 && "=" === t.charAt(n)) ++i;
        return Math.ceil(3 * t.length) / 4 - i;
      };
      for (var o = new Array(64), s = new Array(123), a = 0; a < 64; )
        s[
          (o[a] =
            a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : (a - 59) | 43)
        ] = a++;
      r.encode = function (t, n, i) {
        var r,
          s = null,
          a = [],
          A = 0,
          h = 0;
        while (n < i) {
          var u = t[n++];
          switch (h) {
            case 0:
              ((a[A++] = o[u >> 2]), (r = (3 & u) << 4), (h = 1));
              break;
            case 1:
              ((a[A++] = o[r | (u >> 4)]), (r = (15 & u) << 2), (h = 2));
              break;
            case 2:
              ((a[A++] = o[r | (u >> 6)]), (a[A++] = o[63 & u]), (h = 0));
              break;
          }
          A > 8191 &&
            ((s || (s = [])).push(String.fromCharCode.apply(String, a)),
            (A = 0));
        }
        return (
          h && ((a[A++] = o[r]), (a[A++] = 61), 1 === h && (a[A++] = 61)),
          s
            ? (A && s.push(String.fromCharCode.apply(String, a.slice(0, A))),
              s.join(""))
            : String.fromCharCode.apply(String, a.slice(0, A))
        );
      };
      var A = "invalid encoding";
      ((r.decode = function (t, n, i) {
        for (var r, o = i, a = 0, h = 0; h < t.length; ) {
          var u = t.charCodeAt(h++);
          if (61 === u && a > 1) break;
          if (void 0 === (u = s[u])) throw Error(A);
          switch (a) {
            case 0:
              ((r = u), (a = 1));
              break;
            case 1:
              ((n[i++] = (r << 2) | ((48 & u) >> 4)), (r = u), (a = 2));
              break;
            case 2:
              ((n[i++] = ((15 & r) << 4) | ((60 & u) >> 2)), (r = u), (a = 3));
              break;
            case 3:
              ((n[i++] = ((3 & r) << 6) | u), (a = 0));
              break;
          }
        }
        if (1 === a) throw Error(A);
        return i - o;
      }),
        (r.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, n, i) {
      "use strict";
      function r() {
        this._listeners = {};
      }
      ((t.exports = r),
        (r.prototype.on = function (t, n, i) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: n,
              ctx: i || this,
            }),
            this
          );
        }),
        (r.prototype.off = function (t, n) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === n) this._listeners[t] = [];
          else
            for (var i = this._listeners[t], r = 0; r < i.length; )
              i[r].fn === n ? i.splice(r, 1) : ++r;
          return this;
        }),
        (r.prototype.emit = function (t) {
          var n = this._listeners[t];
          if (n) {
            for (var i = [], r = 1; r < arguments.length; )
              i.push(arguments[r++]);
            for (r = 0; r < n.length; ) n[r].fn.apply(n[r++].ctx, i);
          }
          return this;
        }));
    },
    3024: function (t, n, i) {
      "use strict";
      function r(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var n = new Float32Array([-0]),
                  i = new Uint8Array(n.buffer),
                  r = 128 === i[3];
                function o(t, r, o) {
                  ((n[0] = t),
                    (r[o] = i[0]),
                    (r[o + 1] = i[1]),
                    (r[o + 2] = i[2]),
                    (r[o + 3] = i[3]));
                }
                function s(t, r, o) {
                  ((n[0] = t),
                    (r[o] = i[3]),
                    (r[o + 1] = i[2]),
                    (r[o + 2] = i[1]),
                    (r[o + 3] = i[0]));
                }
                function a(t, r) {
                  return (
                    (i[0] = t[r]),
                    (i[1] = t[r + 1]),
                    (i[2] = t[r + 2]),
                    (i[3] = t[r + 3]),
                    n[0]
                  );
                }
                function A(t, r) {
                  return (
                    (i[3] = t[r]),
                    (i[2] = t[r + 1]),
                    (i[1] = t[r + 2]),
                    (i[0] = t[r + 3]),
                    n[0]
                  );
                }
                ((t.writeFloatLE = r ? o : s),
                  (t.writeFloatBE = r ? s : o),
                  (t.readFloatLE = r ? a : A),
                  (t.readFloatBE = r ? A : a));
              })()
            : (function () {
                function n(t, n, i, r) {
                  var o = n < 0 ? 1 : 0;
                  if ((o && (n = -n), 0 === n))
                    t(1 / n > 0 ? 0 : 2147483648, i, r);
                  else if (isNaN(n)) t(2143289344, i, r);
                  else if (n > 34028234663852886e22)
                    t(((o << 31) | 2139095040) >>> 0, i, r);
                  else if (n < 11754943508222875e-54)
                    t(
                      ((o << 31) | Math.round(n / 1401298464324817e-60)) >>> 0,
                      i,
                      r,
                    );
                  else {
                    var s = Math.floor(Math.log(n) / Math.LN2),
                      a = 8388607 & Math.round(n * Math.pow(2, -s) * 8388608);
                    t(((o << 31) | ((s + 127) << 23) | a) >>> 0, i, r);
                  }
                }
                function i(t, n, i) {
                  var r = t(n, i),
                    o = 2 * (r >> 31) + 1,
                    s = (r >>> 23) & 255,
                    a = 8388607 & r;
                  return 255 === s
                    ? a
                      ? NaN
                      : o * (1 / 0)
                    : 0 === s
                      ? 1401298464324817e-60 * o * a
                      : o * Math.pow(2, s - 150) * (a + 8388608);
                }
                ((t.writeFloatLE = n.bind(null, o)),
                  (t.writeFloatBE = n.bind(null, s)),
                  (t.readFloatLE = i.bind(null, a)),
                  (t.readFloatBE = i.bind(null, A)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var n = new Float64Array([-0]),
                  i = new Uint8Array(n.buffer),
                  r = 128 === i[7];
                function o(t, r, o) {
                  ((n[0] = t),
                    (r[o] = i[0]),
                    (r[o + 1] = i[1]),
                    (r[o + 2] = i[2]),
                    (r[o + 3] = i[3]),
                    (r[o + 4] = i[4]),
                    (r[o + 5] = i[5]),
                    (r[o + 6] = i[6]),
                    (r[o + 7] = i[7]));
                }
                function s(t, r, o) {
                  ((n[0] = t),
                    (r[o] = i[7]),
                    (r[o + 1] = i[6]),
                    (r[o + 2] = i[5]),
                    (r[o + 3] = i[4]),
                    (r[o + 4] = i[3]),
                    (r[o + 5] = i[2]),
                    (r[o + 6] = i[1]),
                    (r[o + 7] = i[0]));
                }
                function a(t, r) {
                  return (
                    (i[0] = t[r]),
                    (i[1] = t[r + 1]),
                    (i[2] = t[r + 2]),
                    (i[3] = t[r + 3]),
                    (i[4] = t[r + 4]),
                    (i[5] = t[r + 5]),
                    (i[6] = t[r + 6]),
                    (i[7] = t[r + 7]),
                    n[0]
                  );
                }
                function A(t, r) {
                  return (
                    (i[7] = t[r]),
                    (i[6] = t[r + 1]),
                    (i[5] = t[r + 2]),
                    (i[4] = t[r + 3]),
                    (i[3] = t[r + 4]),
                    (i[2] = t[r + 5]),
                    (i[1] = t[r + 6]),
                    (i[0] = t[r + 7]),
                    n[0]
                  );
                }
                ((t.writeDoubleLE = r ? o : s),
                  (t.writeDoubleBE = r ? s : o),
                  (t.readDoubleLE = r ? a : A),
                  (t.readDoubleBE = r ? A : a));
              })()
            : (function () {
                function n(t, n, i, r, o, s) {
                  var a = r < 0 ? 1 : 0;
                  if ((a && (r = -r), 0 === r))
                    (t(0, o, s + n), t(1 / r > 0 ? 0 : 2147483648, o, s + i));
                  else if (isNaN(r)) (t(0, o, s + n), t(2146959360, o, s + i));
                  else if (r > 17976931348623157e292)
                    (t(0, o, s + n),
                      t(((a << 31) | 2146435072) >>> 0, o, s + i));
                  else {
                    var A;
                    if (r < 22250738585072014e-324)
                      ((A = r / 5e-324),
                        t(A >>> 0, o, s + n),
                        t(((a << 31) | (A / 4294967296)) >>> 0, o, s + i));
                    else {
                      var h = Math.floor(Math.log(r) / Math.LN2);
                      (1024 === h && (h = 1023),
                        (A = r * Math.pow(2, -h)),
                        t((4503599627370496 * A) >>> 0, o, s + n),
                        t(
                          ((a << 31) |
                            ((h + 1023) << 20) |
                            ((1048576 * A) & 1048575)) >>>
                            0,
                          o,
                          s + i,
                        ));
                    }
                  }
                }
                function i(t, n, i, r, o) {
                  var s = t(r, o + n),
                    a = t(r, o + i),
                    A = 2 * (a >> 31) + 1,
                    h = (a >>> 20) & 2047,
                    u = 4294967296 * (1048575 & a) + s;
                  return 2047 === h
                    ? u
                      ? NaN
                      : A * (1 / 0)
                    : 0 === h
                      ? 5e-324 * A * u
                      : A * Math.pow(2, h - 1075) * (u + 4503599627370496);
                }
                ((t.writeDoubleLE = n.bind(null, o, 0, 4)),
                  (t.writeDoubleBE = n.bind(null, s, 4, 0)),
                  (t.readDoubleLE = i.bind(null, a, 0, 4)),
                  (t.readDoubleBE = i.bind(null, A, 4, 0)));
              })(),
          t
        );
      }
      function o(t, n, i) {
        ((n[i] = 255 & t),
          (n[i + 1] = (t >>> 8) & 255),
          (n[i + 2] = (t >>> 16) & 255),
          (n[i + 3] = t >>> 24));
      }
      function s(t, n, i) {
        ((n[i] = t >>> 24),
          (n[i + 1] = (t >>> 16) & 255),
          (n[i + 2] = (t >>> 8) & 255),
          (n[i + 3] = 255 & t));
      }
      function a(t, n) {
        return (
          (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16) | (t[n + 3] << 24)) >>> 0
        );
      }
      function A(t, n) {
        return (
          ((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3]) >>> 0
        );
      }
      t.exports = r(r);
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
    3026: function (t, n, i) {
      "use strict";
      var r = n;
      ((r.length = function (t) {
        for (var n = 0, i = 0, r = 0; r < t.length; ++r)
          ((i = t.charCodeAt(r)),
            i < 128
              ? (n += 1)
              : i < 2048
                ? (n += 2)
                : 55296 === (64512 & i) &&
                    56320 === (64512 & t.charCodeAt(r + 1))
                  ? (++r, (n += 4))
                  : (n += 3));
        return n;
      }),
        (r.read = function (t, n, i) {
          var r = i - n;
          if (r < 1) return "";
          var o,
            s = null,
            a = [],
            A = 0;
          while (n < i)
            ((o = t[n++]),
              o < 128
                ? (a[A++] = o)
                : o > 191 && o < 224
                  ? (a[A++] = ((31 & o) << 6) | (63 & t[n++]))
                  : o > 239 && o < 365
                    ? ((o =
                        (((7 & o) << 18) |
                          ((63 & t[n++]) << 12) |
                          ((63 & t[n++]) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (a[A++] = 55296 + (o >> 10)),
                      (a[A++] = 56320 + (1023 & o)))
                    : (a[A++] =
                        ((15 & o) << 12) |
                        ((63 & t[n++]) << 6) |
                        (63 & t[n++])),
              A > 8191 &&
                ((s || (s = [])).push(String.fromCharCode.apply(String, a)),
                (A = 0)));
          return s
            ? (A && s.push(String.fromCharCode.apply(String, a.slice(0, A))),
              s.join(""))
            : String.fromCharCode.apply(String, a.slice(0, A));
        }),
        (r.write = function (t, n, i) {
          for (var r, o, s = i, a = 0; a < t.length; ++a)
            ((r = t.charCodeAt(a)),
              r < 128
                ? (n[i++] = r)
                : r < 2048
                  ? ((n[i++] = (r >> 6) | 192), (n[i++] = (63 & r) | 128))
                  : 55296 === (64512 & r) &&
                      56320 === (64512 & (o = t.charCodeAt(a + 1)))
                    ? ((r = 65536 + ((1023 & r) << 10) + (1023 & o)),
                      ++a,
                      (n[i++] = (r >> 18) | 240),
                      (n[i++] = ((r >> 12) & 63) | 128),
                      (n[i++] = ((r >> 6) & 63) | 128),
                      (n[i++] = (63 & r) | 128))
                    : ((n[i++] = (r >> 12) | 224),
                      (n[i++] = ((r >> 6) & 63) | 128),
                      (n[i++] = (63 & r) | 128)));
          return i - s;
        }));
    },
    3027: function (t, n, i) {
      "use strict";
      function r(t, n, i) {
        var r = i || 8192,
          o = r >>> 1,
          s = null,
          a = r;
        return function (i) {
          if (i < 1 || i > o) return t(i);
          a + i > r && ((s = t(r)), (a = 0));
          var A = n.call(s, a, (a += i));
          return (7 & a && (a = 1 + (7 | a)), A);
        };
      }
      t.exports = r;
    },
    3094: function (t, n, i) {
      "use strict";
      var r = n;
      function o() {
        (r.util._configure(),
          r.Writer._configure(r.BufferWriter),
          r.Reader._configure(r.BufferReader));
      }
      ((r.build = "minimal"),
        (r.Writer = i(2951)),
        (r.BufferWriter = i(3096)),
        (r.Reader = i(2952)),
        (r.BufferReader = i(3097)),
        (r.util = i(2791)),
        (r.rpc = i(3098)),
        (r.roots = i(3100)),
        (r.configure = o),
        o());
    },
    3095: function (t, n, i) {
      "use strict";
      t.exports = o;
      var r = i(2791);
      function o(t, n) {
        ((this.lo = t >>> 0), (this.hi = n >>> 0));
      }
      var s = (o.zero = new o(0, 0));
      ((s.toNumber = function () {
        return 0;
      }),
        (s.zzEncode = s.zzDecode =
          function () {
            return this;
          }),
        (s.length = function () {
          return 1;
        }));
      var a = (o.zeroHash = "\0\0\0\0\0\0\0\0");
      ((o.fromNumber = function (t) {
        if (0 === t) return s;
        var n = t < 0;
        n && (t = -t);
        var i = t >>> 0,
          r = ((t - i) / 4294967296) >>> 0;
        return (
          n &&
            ((r = ~r >>> 0),
            (i = ~i >>> 0),
            ++i > 4294967295 && ((i = 0), ++r > 4294967295 && (r = 0))),
          new o(i, r)
        );
      }),
        (o.from = function (t) {
          if ("number" === typeof t) return o.fromNumber(t);
          if (r.isString(t)) {
            if (!r.Long) return o.fromNumber(parseInt(t, 10));
            t = r.Long.fromString(t);
          }
          return t.low || t.high ? new o(t.low >>> 0, t.high >>> 0) : s;
        }),
        (o.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var n = (1 + ~this.lo) >>> 0,
              i = ~this.hi >>> 0;
            return (n || (i = (i + 1) >>> 0), -(n + 4294967296 * i));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (o.prototype.toLong = function (t) {
          return r.Long
            ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var A = String.prototype.charCodeAt;
      ((o.fromHash = function (t) {
        return t === a
          ? s
          : new o(
              (A.call(t, 0) |
                (A.call(t, 1) << 8) |
                (A.call(t, 2) << 16) |
                (A.call(t, 3) << 24)) >>>
                0,
              (A.call(t, 4) |
                (A.call(t, 5) << 8) |
                (A.call(t, 6) << 16) |
                (A.call(t, 7) << 24)) >>>
                0,
            );
      }),
        (o.prototype.toHash = function () {
          return String.fromCharCode(
            255 & this.lo,
            (this.lo >>> 8) & 255,
            (this.lo >>> 16) & 255,
            this.lo >>> 24,
            255 & this.hi,
            (this.hi >>> 8) & 255,
            (this.hi >>> 16) & 255,
            this.hi >>> 24,
          );
        }),
        (o.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (o.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (o.prototype.length = function () {
          var t = this.lo,
            n = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            i = this.hi >>> 24;
          return 0 === i
            ? 0 === n
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                  ? 3
                  : 4
              : n < 16384
                ? n < 128
                  ? 5
                  : 6
                : n < 2097152
                  ? 7
                  : 8
            : i < 128
              ? 9
              : 10;
        }));
    },
    3096: function (t, n, i) {
      "use strict";
      t.exports = s;
      var r = i(2951);
      (s.prototype = Object.create(r.prototype)).constructor = s;
      var o = i(2791);
      function s() {
        r.call(this);
      }
      function a(t, n, i) {
        t.length < 40
          ? o.utf8.write(t, n, i)
          : n.utf8Write
            ? n.utf8Write(t, i)
            : n.write(t, i);
      }
      ((s._configure = function () {
        ((s.alloc = o._Buffer_allocUnsafe),
          (s.writeBytesBuffer =
            o.Buffer &&
            o.Buffer.prototype instanceof Uint8Array &&
            "set" === o.Buffer.prototype.set.name
              ? function (t, n, i) {
                  n.set(t, i);
                }
              : function (t, n, i) {
                  if (t.copy) t.copy(n, i, 0, t.length);
                  else for (var r = 0; r < t.length; ) n[i++] = t[r++];
                }));
      }),
        (s.prototype.bytes = function (t) {
          o.isString(t) && (t = o._Buffer_from(t, "base64"));
          var n = t.length >>> 0;
          return (
            this.uint32(n),
            n && this._push(s.writeBytesBuffer, n, t),
            this
          );
        }),
        (s.prototype.string = function (t) {
          var n = o.Buffer.byteLength(t);
          return (this.uint32(n), n && this._push(a, n, t), this);
        }),
        s._configure());
    },
    3097: function (t, n, i) {
      "use strict";
      t.exports = s;
      var r = i(2952);
      (s.prototype = Object.create(r.prototype)).constructor = s;
      var o = i(2791);
      function s(t) {
        r.call(this, t);
      }
      ((s._configure = function () {
        o.Buffer && (s.prototype._slice = o.Buffer.prototype.slice);
      }),
        (s.prototype.string = function () {
          var t = this.uint32();
          return this.buf.utf8Slice
            ? this.buf.utf8Slice(
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len)),
              )
            : this.buf.toString(
                "utf-8",
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len)),
              );
        }),
        s._configure());
    },
    3098: function (t, n, i) {
      "use strict";
      var r = n;
      r.Service = i(3099);
    },
    3099: function (t, n, i) {
      "use strict";
      t.exports = o;
      var r = i(2791);
      function o(t, n, i) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (r.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(n)),
          (this.responseDelimited = Boolean(i)));
      }
      (((o.prototype = Object.create(r.EventEmitter.prototype)).constructor =
        o),
        (o.prototype.rpcCall = function t(n, i, o, s, a) {
          if (!s) throw TypeError("request must be specified");
          var A = this;
          if (!a) return r.asPromise(t, A, n, i, o, s);
          if (A.rpcImpl)
            try {
              return A.rpcImpl(
                n,
                i[A.requestDelimited ? "encodeDelimited" : "encode"](
                  s,
                ).finish(),
                function (t, i) {
                  if (t) return (A.emit("error", t, n), a(t));
                  if (null !== i) {
                    if (!(i instanceof o))
                      try {
                        i =
                          o[A.responseDelimited ? "decodeDelimited" : "decode"](
                            i,
                          );
                      } catch (t) {
                        return (A.emit("error", t, n), a(t));
                      }
                    return (A.emit("data", i, n), a(null, i));
                  }
                  A.end(!0);
                },
              );
            } catch (h) {
              return (
                A.emit("error", h, n),
                void setTimeout(function () {
                  a(h);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              a(Error("already ended"));
            }, 0);
        }),
        (o.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    3100: function (t, n, i) {
      "use strict";
      t.exports = {};
    },
    3160: function (t, n, i) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, i, r) {
                (void 0 === r && (r = i),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return n[i];
                    },
                  }));
              }
            : function (t, n, i, r) {
                (void 0 === r && (r = i), (t[r] = n[i]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        s =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var i in t)
                "default" !== i &&
                  Object.prototype.hasOwnProperty.call(t, i) &&
                  r(n, t, i);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isEmpty =
          n.guardEmpty =
          n.guardNotEmpty =
          n.guardLength =
          n.guardSameLength =
          n.guardValueIsSetWithMessage =
          n.guardValueIsSet =
          n.guardTrue =
            void 0));
      const a = s(i(2854));
      function A(t, n) {
        if (!t) throw new a.ErrInvariantFailed(`[<${n}>] isn't true`);
      }
      function h(t, n) {
        u(t + " isn't set (null or undefined)", n);
      }
      function u(t, n) {
        if (null == n || void 0 === n) throw new a.ErrInvariantFailed(t);
      }
      function f(t, n) {
        if (((t = t || []), (n = n || []), t.length != n.length))
          throw new a.ErrInvariantFailed("arrays do not have the same length");
      }
      function g(t, n) {
        let i = t.length || 0;
        if (i != n)
          throw new a.ErrInvariantFailed(
            `wrong length, expected: ${n}, actual: ${i}`,
          );
      }
      function I(t, n) {
        if (l(t)) throw new a.ErrInvariantFailed(n + " is empty");
      }
      function c(t, n) {
        if (!l(t)) throw new a.ErrInvariantFailed(n + " is not empty");
      }
      function l(t) {
        return t.isEmpty ? t.isEmpty() : 0 === t.length;
      }
      ((n.guardTrue = A),
        (n.guardValueIsSet = h),
        (n.guardValueIsSetWithMessage = u),
        (n.guardSameLength = f),
        (n.guardLength = g),
        (n.guardNotEmpty = I),
        (n.guardEmpty = c),
        (n.isEmpty = l));
    },
    3350: function (t, n) {
      t.exports = i;
      class AssertionError extends Error {}
      function i(t, n) {
        if (!t) {
          var r = new AssertionError(n);
          throw (Error.captureStackTrace && Error.captureStackTrace(r, i), r);
        }
      }
      AssertionError.prototype.name = "AssertionError";
    },
    3445: function (t, n, i) {
      const r = i(3446),
        o = i(3447),
        s = i(3448),
        a = i(3449),
        A = i(3450),
        h = 255 === new Uint8Array(Uint16Array.of(255).buffer)[0];
      function u(t) {
        switch (t) {
          case "ascii":
            return r;
          case "base64":
            return o;
          case "hex":
            return s;
          case "utf8":
          case "utf-8":
          case void 0:
          case null:
            return a;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return A;
          default:
            throw new Error("Unknown encoding: " + t);
        }
      }
      function f(t) {
        return t instanceof Uint8Array;
      }
      function g(t) {
        try {
          return (u(t), !0);
        } catch {
          return !1;
        }
      }
      function I(t, i, r) {
        const o = new Uint8Array(t);
        return (void 0 !== i && n.fill(o, i, 0, o.byteLength, r), o);
      }
      function c(t) {
        return new Uint8Array(t);
      }
      function l(t) {
        return new Uint8Array(t);
      }
      function C(t, n) {
        return u(n).byteLength(t);
      }
      function d(t, n) {
        if (t === n) return 0;
        const i = Math.min(t.byteLength, n.byteLength);
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (n = new DataView(n.buffer, n.byteOffset, n.byteLength)));
        let r = 0;
        for (let o = i - (i % 4); r < o; r += 4) {
          const i = t.getUint32(r, h),
            o = n.getUint32(r, h);
          if (i !== o) break;
        }
        for (; r < i; r++) {
          const i = t.getUint8(r),
            o = n.getUint8(r);
          if (i < o) return -1;
          if (i > o) return 1;
        }
        return t.byteLength > n.byteLength
          ? 1
          : t.byteLength < n.byteLength
            ? -1
            : 0;
      }
      function y(t, n) {
        void 0 === n && (n = t.reduce((t, n) => t + n.byteLength, 0));
        const i = new Uint8Array(n);
        let r = 0;
        for (const o of t) {
          if (r + o.byteLength > i.byteLength) {
            const t = o.subarray(0, i.byteLength - r);
            return (i.set(t, r), i);
          }
          (i.set(o, r), (r += o.byteLength));
        }
        return i;
      }
      function E(t, n, i, r, o) {
        if (
          (void 0 === i && (i = 0),
          void 0 === r && (r = 0),
          void 0 === o && (o = t.byteLength),
          o > 0 && o < r)
        )
          return 0;
        if (o === r) return 0;
        if (0 === t.byteLength || 0 === n.byteLength) return 0;
        if (i < 0) throw new RangeError("targetStart is out of range");
        if (r < 0 || r >= t.byteLength)
          throw new RangeError("sourceStart is out of range");
        if (o < 0) throw new RangeError("sourceEnd is out of range");
        (i >= n.byteLength && (i = n.byteLength),
          o > t.byteLength && (o = t.byteLength),
          n.byteLength - i < o - r && (o = n.length - i + r));
        const s = o - r;
        return (
          t === n ? n.copyWithin(i, r, o) : n.set(t.subarray(r, o), i),
          s
        );
      }
      function p(t, n) {
        if (t === n) return !0;
        if (t.byteLength !== n.byteLength) return !1;
        const i = t.byteLength;
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (n = new DataView(n.buffer, n.byteOffset, n.byteLength)));
        let r = 0;
        for (let o = i - (i % 4); r < o; r += 4)
          if (t.getUint32(r, h) !== n.getUint32(r, h)) return !1;
        for (; r < i; r++) if (t.getUint8(r) !== n.getUint8(r)) return !1;
        return !0;
      }
      function w(t, n, i, r, o) {
        if (
          ("string" === typeof n
            ? "string" === typeof i
              ? ((o = i), (i = 0), (r = t.byteLength))
              : "string" === typeof r && ((o = r), (r = t.byteLength))
            : "number" === typeof n
              ? (n &= 255)
              : "boolean" === typeof n && (n = +n),
          i < 0 || t.byteLength < i || t.byteLength < r)
        )
          throw new RangeError("Out of range index");
        if (
          (void 0 === i && (i = 0), void 0 === r && (r = t.byteLength), r <= i)
        )
          return t;
        if ((n || (n = 0), "number" === typeof n))
          for (let s = i; s < r; ++s) t[s] = n;
        else {
          n = f(n) ? n : B(n, o);
          const s = n.byteLength;
          for (let o = 0; o < r - i; ++o) t[o + i] = n[o % s];
        }
        return t;
      }
      function B(t, n, i) {
        return "string" === typeof t
          ? Q(t, n)
          : Array.isArray(t)
            ? b(t)
            : ArrayBuffer.isView(t)
              ? m(t)
              : v(t, n, i);
      }
      function Q(t, n) {
        const i = u(n),
          r = new Uint8Array(i.byteLength(t));
        return (i.write(r, t, 0, r.byteLength), r);
      }
      function b(t) {
        const n = new Uint8Array(t.length);
        return (n.set(t), n);
      }
      function m(t) {
        const n = new Uint8Array(t.byteLength);
        return (n.set(t), n);
      }
      function v(t, n, i) {
        return new Uint8Array(t, n, i);
      }
      function D(t, n, i, r) {
        return -1 !== F(t, n, i, r);
      }
      function S(t, n, i, r, o) {
        if (0 === t.byteLength) return -1;
        if (
          ("string" === typeof i
            ? ((r = i), (i = 0))
            : void 0 === i
              ? (i = o ? 0 : t.length - 1)
              : i < 0 && (i += t.byteLength),
          i >= t.byteLength)
        ) {
          if (o) return -1;
          i = t.byteLength - 1;
        } else if (i < 0) {
          if (!o) return -1;
          i = 0;
        }
        if ("string" === typeof n) n = B(n, r);
        else if ("number" === typeof n)
          return ((n &= 255), o ? t.indexOf(n, i) : t.lastIndexOf(n, i));
        if (0 === n.byteLength) return -1;
        if (o) {
          let r = -1;
          for (let o = i; o < t.byteLength; o++)
            if (t[o] === n[-1 === r ? 0 : o - r]) {
              if ((-1 === r && (r = o), o - r + 1 === n.byteLength)) return r;
            } else (-1 !== r && (o -= o - r), (r = -1));
        } else {
          i + n.byteLength > t.byteLength && (i = t.byteLength - n.byteLength);
          for (let r = i; r >= 0; r--) {
            let i = !0;
            for (let o = 0; o < n.byteLength; o++)
              if (t[r + o] !== n[o]) {
                i = !1;
                break;
              }
            if (i) return r;
          }
        }
        return -1;
      }
      function F(t, n, i, r) {
        return S(t, n, i, r, !0);
      }
      function U(t, n, i, r) {
        return S(t, n, i, r, !1);
      }
      function T(t, n, i) {
        const r = t[n];
        ((t[n] = t[i]), (t[i] = r));
      }
      function x(t) {
        const n = t.byteLength;
        if (n % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let i = 0; i < n; i += 2) T(t, i, i + 1);
        return t;
      }
      function L(t) {
        const n = t.byteLength;
        if (n % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let i = 0; i < n; i += 4) (T(t, i, i + 3), T(t, i + 1, i + 2));
        return t;
      }
      function K(t) {
        const n = t.byteLength;
        if (n % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let i = 0; i < n; i += 8)
          (T(t, i, i + 7),
            T(t, i + 1, i + 6),
            T(t, i + 2, i + 5),
            T(t, i + 3, i + 4));
        return t;
      }
      function P(t) {
        return t;
      }
      function M(t, n, i, r) {
        (void 0 === i && (i = 0), void 0 === r && (r = t.byteLength));
        const o = t.byteLength;
        return i >= o || r <= i
          ? ""
          : (i < 0 && (i = 0),
            r > o && (r = o),
            (0 !== i || r < o) && (t = t.subarray(i, r)),
            u(n).toString(t));
      }
      function H(t, n, i, r, o) {
        return (
          void 0 === i
            ? (o = "utf8")
            : void 0 === r && "string" === typeof i
              ? ((o = i), (i = void 0))
              : void 0 === o &&
                "string" === typeof r &&
                ((o = r), (r = void 0)),
          u(o).write(t, n, i, r)
        );
      }
      function O(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(i, n, !0), i + 8);
      }
      function V(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(i, n, !0), i + 4);
      }
      function N(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setUint32(i, n, !0), i + 4);
      }
      function _(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setInt32(i, n, !0), i + 4);
      }
      function Y(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getFloat64(n, !0);
      }
      function k(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getFloat32(n, !0);
      }
      function G(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getUint32(n, !0);
      }
      function j(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getInt32(n, !0);
      }
      function J(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(i, n, !1), i + 8);
      }
      function R(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(i, n, !1), i + 4);
      }
      function W(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setUint32(i, n, !1), i + 4);
      }
      function z(t, n, i) {
        void 0 === i && (i = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setInt32(i, n, !1), i + 4);
      }
      function X(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getFloat64(n, !1);
      }
      function q(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getFloat32(n, !1);
      }
      function Z(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getUint32(n, !1);
      }
      function $(t, n) {
        void 0 === n && (n = 0);
        const i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return i.getInt32(n, !1);
      }
      t.exports = n = {
        isBuffer: f,
        isEncoding: g,
        alloc: I,
        allocUnsafe: c,
        allocUnsafeSlow: l,
        byteLength: C,
        compare: d,
        concat: y,
        copy: E,
        equals: p,
        fill: w,
        from: B,
        includes: D,
        indexOf: F,
        lastIndexOf: U,
        swap16: x,
        swap32: L,
        swap64: K,
        toBuffer: P,
        toString: M,
        write: H,
        writeDoubleLE: O,
        writeFloatLE: V,
        writeUInt32LE: N,
        writeInt32LE: _,
        readDoubleLE: Y,
        readFloatLE: k,
        readUInt32LE: G,
        readInt32LE: j,
        writeDoubleBE: J,
        writeFloatBE: R,
        writeUInt32BE: W,
        writeInt32BE: z,
        readDoubleBE: X,
        readFloatBE: q,
        readUInt32BE: Z,
        readInt32BE: $,
      };
    },
    3446: function (t, n) {
      function i(t) {
        return t.length;
      }
      function r(t) {
        const n = t.byteLength;
        let i = "";
        for (let r = 0; r < n; r++) i += String.fromCharCode(t[r]);
        return i;
      }
      function o(t, n, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = i(n)));
        const s = Math.min(o, t.byteLength - r);
        for (let i = 0; i < s; i++) t[r + i] = n.charCodeAt(i);
        return s;
      }
      t.exports = { byteLength: i, toString: r, write: o };
    },
    3447: function (t, n) {
      const i =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = new Uint8Array(256);
      for (let A = 0; A < i.length; A++) r[i.charCodeAt(A)] = A;
      function o(t) {
        let n = t.length;
        return (
          61 === t.charCodeAt(n - 1) && n--,
          n > 1 && 61 === t.charCodeAt(n - 1) && n--,
          (3 * n) >>> 2
        );
      }
      function s(t) {
        const n = t.byteLength;
        let r = "";
        for (let o = 0; o < n; o += 3)
          r +=
            i[t[o] >> 2] +
            i[((3 & t[o]) << 4) | (t[o + 1] >> 4)] +
            i[((15 & t[o + 1]) << 2) | (t[o + 2] >> 6)] +
            i[63 & t[o + 2]];
        return (
          n % 3 === 2
            ? (r = r.substring(0, r.length - 1) + "=")
            : n % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
          r
        );
      }
      function a(t, n, i, s) {
        (void 0 === i && (i = 0), void 0 === s && (s = o(n)));
        const a = Math.min(s, t.byteLength - i);
        for (let o = 0, A = 0; A < a; o += 4) {
          const i = r[n.charCodeAt(o)],
            s = r[n.charCodeAt(o + 1)],
            a = r[n.charCodeAt(o + 2)],
            h = r[n.charCodeAt(o + 3)];
          ((t[A++] = (i << 2) | (s >> 4)),
            (t[A++] = ((15 & s) << 4) | (a >> 2)),
            (t[A++] = ((3 & a) << 6) | (63 & h)));
        }
        return a;
      }
      ((r[45] = 62),
        (r[95] = 63),
        (t.exports = { byteLength: o, toString: s, write: a }));
    },
    3448: function (t, n) {
      function i(t) {
        return t.length >>> 1;
      }
      function r(t) {
        const n = t.byteLength;
        t = new DataView(t.buffer, t.byteOffset, n);
        let i = "",
          r = 0;
        for (let o = n - (n % 4); r < o; r += 4)
          i += t.getUint32(r).toString(16).padStart(8, "0");
        for (; r < n; r++) i += t.getUint8(r).toString(16).padStart(2, "0");
        return i;
      }
      function o(t, n, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = i(n)));
        const a = Math.min(o, t.byteLength - r);
        for (let i = 0; i < a; i++) {
          const o = s(n.charCodeAt(2 * i)),
            a = s(n.charCodeAt(2 * i + 1));
          if (void 0 === o || void 0 === a) return t.subarray(0, i);
          t[r + i] = (o << 4) | a;
        }
        return a;
      }
      function s(t) {
        return t >= 48 && t <= 57
          ? t - 48
          : t >= 65 && t <= 70
            ? t - 65 + 10
            : t >= 97 && t <= 102
              ? t - 97 + 10
              : void 0;
      }
      t.exports = { byteLength: i, toString: r, write: o };
    },
    3449: function (t, n) {
      function i(t) {
        let n = 0;
        for (let i = 0, r = t.length; i < r; i++) {
          const o = t.charCodeAt(i);
          if (o >= 55296 && o <= 56319 && i + 1 < r) {
            const r = t.charCodeAt(i + 1);
            if (r >= 56320 && r <= 57343) {
              ((n += 4), i++);
              continue;
            }
          }
          n += o <= 127 ? 1 : o <= 2047 ? 2 : 3;
        }
        return n;
      }
      let r, o;
      if ("undefined" !== typeof TextDecoder) {
        const t = new TextDecoder();
        r = function (n) {
          return t.decode(n);
        };
      } else
        r = function (t) {
          const n = t.byteLength;
          let i = "",
            r = 0;
          while (r < n) {
            let o = t[r];
            if (o <= 127) {
              ((i += String.fromCharCode(o)), r++);
              continue;
            }
            let s = 0,
              a = 0;
            if (
              (o <= 223
                ? ((s = 1), (a = 31 & o))
                : o <= 239
                  ? ((s = 2), (a = 15 & o))
                  : o <= 244 && ((s = 3), (a = 7 & o)),
              n - r - s > 0)
            ) {
              let n = 0;
              while (n < s)
                ((o = t[r + n + 1]), (a = (a << 6) | (63 & o)), (n += 1));
            } else ((a = 65533), (s = n - r));
            ((i += String.fromCodePoint(a)), (r += s + 1));
          }
          return i;
        };
      if ("undefined" !== typeof TextEncoder) {
        const t = new TextEncoder();
        o = function (n, r, o, s) {
          (void 0 === o && (o = 0), void 0 === s && (s = i(r)));
          const a = Math.min(s, n.byteLength - o);
          return (t.encodeInto(r, n.subarray(o, o + a)), a);
        };
      } else
        o = function (t, n, r, o) {
          (void 0 === r && (r = 0), void 0 === o && (o = i(n)));
          const s = Math.min(o, t.byteLength - r);
          t = t.subarray(r, r + s);
          let a = 0,
            A = 0;
          while (a < n.length) {
            const i = n.codePointAt(a);
            if (i <= 127) {
              ((t[A++] = i), a++);
              continue;
            }
            let r = 0,
              o = 0;
            (i <= 2047
              ? ((r = 6), (o = 192))
              : i <= 65535
                ? ((r = 12), (o = 224))
                : i <= 2097151 && ((r = 18), (o = 240)),
              (t[A++] = o | (i >> r)),
              (r -= 6));
            while (r >= 0) ((t[A++] = 128 | ((i >> r) & 63)), (r -= 6));
            a += i >= 65536 ? 2 : 1;
          }
          return s;
        };
      t.exports = { byteLength: i, toString: r, write: o };
    },
    3450: function (t, n) {
      function i(t) {
        return 2 * t.length;
      }
      function r(t) {
        const n = t.byteLength;
        let i = "";
        for (let r = 0; r < n - 1; r += 2)
          i += String.fromCharCode(t[r] + 256 * t[r + 1]);
        return i;
      }
      function o(t, n, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = i(n)));
        const s = Math.min(o, t.byteLength - r);
        let a = s;
        for (let i = 0; i < n.length; ++i) {
          if ((a -= 2) < 0) break;
          const o = n.charCodeAt(i),
            s = o >> 8,
            A = o % 256;
          ((t[r + 2 * i] = A), (t[r + 2 * i + 1] = s));
        }
        return s;
      }
      t.exports = { byteLength: i, toString: r, write: o };
    },
    3806: function (t, n, i) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.TransactionPayload = void 0));
        const r = i(5413);
        class TransactionPayload {
          constructor(n) {
            this.data = t.from(n || []);
          }
          static fromEncoded(n) {
            if (!n) return new TransactionPayload("");
            let i = t.from(n, "base64").toString();
            return new TransactionPayload(i);
          }
          isEmpty() {
            return 0 == this.data.length;
          }
          encoded() {
            return this.data.toString("base64");
          }
          valueOf() {
            return this.data;
          }
          toString() {
            return this.data.toString();
          }
          getEncodedArguments() {
            return this.toString().split("@");
          }
          getRawArguments() {
            return this.getEncodedArguments().map((n) => t.from(n, "hex"));
          }
          length() {
            return t.from(this.data).length;
          }
          static contractDeploy() {
            return new r.ContractDeployPayloadBuilder();
          }
          static contractUpgrade() {
            return new r.ContractUpgradePayloadBuilder();
          }
          static contractCall() {
            return new r.ContractCallPayloadBuilder();
          }
        }
        n.TransactionPayload = TransactionPayload;
      }).call(this, i(2).Buffer);
    },
    3807: function (t, n, i) {
      var r = i(3350),
        o = i(3808);
      function s(t, n, i) {
        var r = t[n] + t[i],
          o = t[n + 1] + t[i + 1];
        (r >= 4294967296 && o++, (t[n] = r), (t[n + 1] = o));
      }
      function a(t, n, i, r) {
        var o = t[n] + i;
        i < 0 && (o += 4294967296);
        var s = t[n + 1] + r;
        (o >= 4294967296 && s++, (t[n] = o), (t[n + 1] = s));
      }
      function A(t, n) {
        return t[n] ^ (t[n + 1] << 8) ^ (t[n + 2] << 16) ^ (t[n + 3] << 24);
      }
      function h(t, n, i, r, o, A) {
        var h = c[o],
          u = c[o + 1],
          f = c[A],
          g = c[A + 1];
        (s(I, t, n), a(I, t, h, u));
        var l = I[r] ^ I[t],
          C = I[r + 1] ^ I[t + 1];
        ((I[r] = C),
          (I[r + 1] = l),
          s(I, i, r),
          (l = I[n] ^ I[i]),
          (C = I[n + 1] ^ I[i + 1]),
          (I[n] = (l >>> 24) ^ (C << 8)),
          (I[n + 1] = (C >>> 24) ^ (l << 8)),
          s(I, t, n),
          a(I, t, f, g),
          (l = I[r] ^ I[t]),
          (C = I[r + 1] ^ I[t + 1]),
          (I[r] = (l >>> 16) ^ (C << 16)),
          (I[r + 1] = (C >>> 16) ^ (l << 16)),
          s(I, i, r),
          (l = I[n] ^ I[i]),
          (C = I[n + 1] ^ I[i + 1]),
          (I[n] = (C >>> 31) ^ (l << 1)),
          (I[n + 1] = (l >>> 31) ^ (C << 1)));
      }
      var u = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        f = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6,
          7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0,
          2, 11, 7, 5, 3,
        ],
        g = new Uint8Array(
          f.map(function (t) {
            return 2 * t;
          }),
        ),
        I = new Uint32Array(32),
        c = new Uint32Array(32);
      function l(t, n) {
        var i = 0;
        for (i = 0; i < 16; i++) ((I[i] = t.h[i]), (I[i + 16] = u[i]));
        for (
          I[24] = I[24] ^ t.t,
            I[25] = I[25] ^ (t.t / 4294967296),
            n && ((I[28] = ~I[28]), (I[29] = ~I[29])),
            i = 0;
          i < 32;
          i++
        )
          c[i] = A(t.b, 4 * i);
        for (i = 0; i < 12; i++)
          (h(0, 8, 16, 24, g[16 * i + 0], g[16 * i + 1]),
            h(2, 10, 18, 26, g[16 * i + 2], g[16 * i + 3]),
            h(4, 12, 20, 28, g[16 * i + 4], g[16 * i + 5]),
            h(6, 14, 22, 30, g[16 * i + 6], g[16 * i + 7]),
            h(0, 10, 20, 30, g[16 * i + 8], g[16 * i + 9]),
            h(2, 12, 22, 24, g[16 * i + 10], g[16 * i + 11]),
            h(4, 14, 16, 26, g[16 * i + 12], g[16 * i + 13]),
            h(6, 8, 18, 28, g[16 * i + 14], g[16 * i + 15]));
        for (i = 0; i < 16; i++) t.h[i] = t.h[i] ^ I[i] ^ I[i + 16];
      }
      var C = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
      function d(t, n, i, r) {
        (C.fill(0),
          (this.b = new Uint8Array(128)),
          (this.h = new Uint32Array(16)),
          (this.t = 0),
          (this.c = 0),
          (this.outlen = t),
          (C[0] = t),
          n && (C[1] = n.length),
          (C[2] = 1),
          (C[3] = 1),
          i && C.set(i, 32),
          r && C.set(r, 48));
        for (var o = 0; o < 16; o++) this.h[o] = u[o] ^ A(C, 4 * o);
        n && (y(this, n), (this.c = 128));
      }
      function y(t, n) {
        for (var i = 0; i < n.length; i++)
          (128 === t.c && ((t.t += t.c), l(t, !1), (t.c = 0)),
            (t.b[t.c++] = n[i]));
      }
      function E(t, n) {
        t.t += t.c;
        while (t.c < 128) t.b[t.c++] = 0;
        l(t, !0);
        for (var i = 0; i < t.outlen; i++) n[i] = t.h[i >> 2] >> (8 * (3 & i));
        return n;
      }
      function p(t) {
        for (var n = "", i = 0; i < t.length; i++) n += w(t[i]);
        return n;
      }
      function w(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      ((d.prototype.update = function (t) {
        return (
          r(t instanceof Uint8Array, "input must be Uint8Array or Buffer"),
          y(this, t),
          this
        );
      }),
        (d.prototype.digest = function (t) {
          var n =
            t && "binary" !== t && "hex" !== t
              ? t
              : new Uint8Array(this.outlen);
          return (
            r(
              n instanceof Uint8Array,
              'out must be "binary", "hex", Uint8Array, or Buffer',
            ),
            r(
              n.length >= this.outlen,
              "out must have at least outlen bytes of space",
            ),
            E(this, n),
            "hex" === t ? p(n) : n
          );
        }),
        (d.prototype.final = d.prototype.digest),
        (d.ready = function (t) {
          o.ready(function () {
            t();
          });
        }));
      var B = d;
      ((t.exports = function (t, n, i, o, s) {
        return (
          !0 !== s &&
            (r(t >= Q, "outlen must be at least " + Q + ", was given " + t),
            r(t <= b, "outlen must be at most " + b + ", was given " + t),
            null != n &&
              (r(n instanceof Uint8Array, "key must be Uint8Array or Buffer"),
              r(
                n.length >= m,
                "key must be at least " + m + ", was given " + n.length,
              ),
              r(
                n.length <= v,
                "key must be at most " + v + ", was given " + n.length,
              )),
            null != i &&
              (r(i instanceof Uint8Array, "salt must be Uint8Array or Buffer"),
              r(
                i.length === D,
                "salt must be exactly " + D + ", was given " + i.length,
              )),
            null != o &&
              (r(
                o instanceof Uint8Array,
                "personal must be Uint8Array or Buffer",
              ),
              r(
                o.length === S,
                "personal must be exactly " + S + ", was given " + o.length,
              ))),
          new B(t, n, i, o)
        );
      }),
        (t.exports.ready = function (t) {
          o.ready(function () {
            t();
          });
        }),
        (t.exports.WASM_SUPPORTED = o.SUPPORTED),
        (t.exports.WASM_LOADED = !1));
      var Q = (t.exports.BYTES_MIN = 16),
        b = (t.exports.BYTES_MAX = 64),
        m = ((t.exports.BYTES = 32), (t.exports.KEYBYTES_MIN = 16)),
        v = (t.exports.KEYBYTES_MAX = 64),
        D = ((t.exports.KEYBYTES = 32), (t.exports.SALTBYTES = 16)),
        S = (t.exports.PERSONALBYTES = 16);
      o.ready(function (n) {
        n || ((t.exports.WASM_LOADED = !0), (t.exports = o));
      });
    },
    3808: function (t, n, i) {
      var r = i(3350),
        o = i(3445),
        s = null,
        a =
          "undefined" !== typeof WebAssembly &&
          i(3809)().then((t) => {
            s = t;
          }),
        A = 64,
        h = [];
      t.exports = C;
      var u = (t.exports.BYTES_MIN = 16),
        f = (t.exports.BYTES_MAX = 64),
        g = ((t.exports.BYTES = 32), (t.exports.KEYBYTES_MIN = 16)),
        I = (t.exports.KEYBYTES_MAX = 64),
        c = ((t.exports.KEYBYTES = 32), (t.exports.SALTBYTES = 16)),
        l = (t.exports.PERSONALBYTES = 16);
      function C(t, n, i, o, a) {
        if (!(this instanceof C)) return new C(t, n, i, o, a);
        if (!s) throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
        (t || (t = 32),
          !0 !== a &&
            (r(
              t >= u,
              "digestLength must be at least " + u + ", was given " + t,
            ),
            r(t <= f, "digestLength must be at most " + f + ", was given " + t),
            null != n &&
              (r(n instanceof Uint8Array, "key must be Uint8Array or Buffer"),
              r(
                n.length >= g,
                "key must be at least " + g + ", was given " + n.length,
              ),
              r(
                n.length <= I,
                "key must be at least " + I + ", was given " + n.length,
              )),
            null != i &&
              (r(i instanceof Uint8Array, "salt must be Uint8Array or Buffer"),
              r(
                i.length === c,
                "salt must be exactly " + c + ", was given " + i.length,
              )),
            null != o &&
              (r(
                o instanceof Uint8Array,
                "personal must be Uint8Array or Buffer",
              ),
              r(
                o.length === l,
                "personal must be exactly " + l + ", was given " + o.length,
              ))),
          h.length || (h.push(A), (A += 216)),
          (this.digestLength = t),
          (this.finalized = !1),
          (this.pointer = h.pop()),
          (this._memory = new Uint8Array(s.memory.buffer)),
          this._memory.fill(0, 0, 64),
          (this._memory[0] = this.digestLength),
          (this._memory[1] = n ? n.length : 0),
          (this._memory[2] = 1),
          (this._memory[3] = 1),
          i && this._memory.set(i, 32),
          o && this._memory.set(o, 48),
          this.pointer + 216 > this._memory.length &&
            this._realloc(this.pointer + 216),
          s.blake2b_init(this.pointer, this.digestLength),
          n &&
            (this.update(n),
            this._memory.fill(0, A, A + n.length),
            (this._memory[this.pointer + 200] = 128)));
      }
      function d() {}
      ((C.prototype._realloc = function (t) {
        (s.memory.grow(
          Math.max(0, Math.ceil(Math.abs(t - this._memory.length) / 65536)),
        ),
          (this._memory = new Uint8Array(s.memory.buffer)));
      }),
        (C.prototype.update = function (t) {
          return (
            r(!1 === this.finalized, "Hash instance finalized"),
            r(t instanceof Uint8Array, "input must be Uint8Array or Buffer"),
            A + t.length > this._memory.length && this._realloc(A + t.length),
            this._memory.set(t, A),
            s.blake2b_update(this.pointer, A, A + t.length),
            this
          );
        }),
        (C.prototype.digest = function (t) {
          if (
            (r(!1 === this.finalized, "Hash instance finalized"),
            (this.finalized = !0),
            h.push(this.pointer),
            s.blake2b_final(this.pointer),
            !t || "binary" === t)
          )
            return this._memory.slice(
              this.pointer + 128,
              this.pointer + 128 + this.digestLength,
            );
          if ("string" === typeof t)
            return o.toString(
              this._memory,
              t,
              this.pointer + 128,
              this.pointer + 128 + this.digestLength,
            );
          r(
            t instanceof Uint8Array && t.length >= this.digestLength,
            "input must be Uint8Array or Buffer",
          );
          for (var n = 0; n < this.digestLength; n++)
            t[n] = this._memory[this.pointer + 128 + n];
          return t;
        }),
        (C.prototype.final = C.prototype.digest),
        (C.WASM = s),
        (C.SUPPORTED = "undefined" !== typeof WebAssembly),
        (C.ready = function (t) {
          return (
            t || (t = d),
            a ? a.then(() => t(), t) : t(new Error("WebAssembly not supported"))
          );
        }),
        (C.prototype.ready = C.ready),
        (C.prototype.getPartialHash = function () {
          return this._memory.slice(this.pointer, this.pointer + 216);
        }),
        (C.prototype.setPartialHash = function (t) {
          this._memory.set(t, this.pointer);
        }));
    },
    3809: function (t, n) {
      var i = (t, n) =>
          function () {
            return (
              n || (0, t[Object.keys(t)[0]])((n = { exports: {} }).exports, n),
              n.exports
            );
          },
        r = (() => {
          for (var t = new Uint8Array(128), n = 0; n < 64; n++)
            t[
              n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : 4 * n - 205
            ] = n;
          return (n) => {
            for (
              var i = n.length,
                r = new Uint8Array(
                  ((3 * (i - ("=" == n[i - 1]) - ("=" == n[i - 2]))) / 4) | 0,
                ),
                o = 0,
                s = 0;
              o < i;
            ) {
              var a = t[n.charCodeAt(o++)],
                A = t[n.charCodeAt(o++)],
                h = t[n.charCodeAt(o++)],
                u = t[n.charCodeAt(o++)];
              ((r[s++] = (a << 2) | (A >> 4)),
                (r[s++] = (A << 4) | (h >> 2)),
                (r[s++] = (h << 6) | u));
            }
            return r;
          };
        })(),
        o = i({
          "wasm-binary:./blake2b.wat"(t, n) {
            n.exports = r(
              "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",
            );
          },
        }),
        s = o(),
        a = WebAssembly.compile(s);
      t.exports = async (t) => {
        const n = await WebAssembly.instantiate(await a, t);
        return n.exports;
      };
    },
    4513: function (t, n, i) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, n, i, r) {
                  (void 0 === r && (r = i),
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return n[i];
                      },
                    }));
                }
              : function (t, n, i, r) {
                  (void 0 === r && (r = i), (t[r] = n[i]));
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, n) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: n,
                  });
                }
              : function (t, n) {
                  t["default"] = n;
                }),
          s =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var n = {};
              if (null != t)
                for (var i in t)
                  "default" !== i &&
                    Object.prototype.hasOwnProperty.call(t, i) &&
                    r(n, t, i);
              return (o(n, t), n);
            };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.TransactionHash = n.Transaction = void 0));
        const a = i(3219),
          A = i(3121),
          h = i(6370),
          u = i(4742),
          f = i(3160),
          g = i(3806),
          I = s(i(2854)),
          c = i(8973),
          l = i(8976),
          C = i(4741),
          d = i(3807),
          y = 32;
        class Transaction {
          constructor(t) {
            let {
              nonce: n,
              value: i,
              receiver: r,
              sender: o,
              gasPrice: s,
              gasLimit: a,
              data: A,
              chainID: f,
              version: I,
              options: c,
            } = t;
            ((this.nonce = n || 0),
              (this.value = i || 0),
              (this.sender = o),
              (this.receiver = r),
              (this.gasPrice = s || C.TRANSACTION_MIN_GAS_PRICE),
              (this.gasLimit = a),
              (this.data = A || new g.TransactionPayload()),
              (this.chainID = f),
              (this.version = I || h.TransactionVersion.withDefaultVersion()),
              (this.options = c || h.TransactionOptions.withDefaultOptions()),
              (this.signature = u.Signature.empty()),
              (this.hash = TransactionHash.empty()));
          }
          getNonce() {
            return this.nonce;
          }
          setNonce(t) {
            this.nonce = t;
          }
          getValue() {
            return this.value;
          }
          setValue(t) {
            this.value = t;
          }
          getSender() {
            return this.sender;
          }
          getReceiver() {
            return this.receiver;
          }
          getGasPrice() {
            return this.gasPrice;
          }
          setGasPrice(t) {
            this.gasPrice = t;
          }
          getGasLimit() {
            return this.gasLimit;
          }
          setGasLimit(t) {
            this.gasLimit = t;
          }
          getData() {
            return this.data;
          }
          getChainID() {
            return this.chainID;
          }
          setChainID(t) {
            this.chainID = t;
          }
          getVersion() {
            return this.version;
          }
          getOptions() {
            return this.options;
          }
          getSignature() {
            return this.signature;
          }
          getHash() {
            return (f.guardNotEmpty(this.hash, "hash"), this.hash);
          }
          serializeForSigning(n) {
            let i = this.toPlainObject(n);
            i.signature && delete i.signature;
            let r = JSON.stringify(i);
            return t.from(r);
          }
          toPlainObject(t) {
            return {
              nonce: this.nonce.valueOf(),
              value: this.value.toString(),
              receiver: this.receiver.bech32(),
              sender: t ? t.bech32() : this.sender.bech32(),
              gasPrice: this.gasPrice.valueOf(),
              gasLimit: this.gasLimit.valueOf(),
              data: 0 == this.data.length() ? void 0 : this.data.encoded(),
              chainID: this.chainID.valueOf(),
              version: this.version.valueOf(),
              options:
                0 == this.options.valueOf() ? void 0 : this.options.valueOf(),
              signature: this.signature.hex() ? this.signature.hex() : void 0,
            };
          }
          static fromPlainObject(n) {
            const i = new Transaction({
              nonce: Number(n.nonce),
              value: new a.BigNumber(n.value),
              receiver: A.Address.fromString(n.receiver),
              sender: A.Address.fromString(n.sender),
              gasPrice: Number(n.gasPrice),
              gasLimit: Number(n.gasLimit),
              data: new g.TransactionPayload(t.from(n.data || "", "base64")),
              chainID: String(n.chainID),
              version: new h.TransactionVersion(n.version),
            });
            return (
              n.signature &&
                i.applySignature(
                  new u.Signature(n.signature),
                  A.Address.fromString(n.sender),
                ),
              i
            );
          }
          applySignature(t, n) {
            ((this.signature = t),
              (this.sender = n),
              (this.hash = TransactionHash.compute(this)));
          }
          toSendable() {
            return this.toPlainObject();
          }
          computeFee(t) {
            let n =
              t.MinGasLimit.valueOf() +
              this.data.length() * t.GasPerDataByte.valueOf();
            if (n > this.gasLimit.valueOf())
              throw new I.ErrNotEnoughGas(this.gasLimit.valueOf());
            let i = new a.BigNumber(this.gasPrice.valueOf()),
              r = new a.BigNumber(n).multipliedBy(i);
            if (n === this.gasLimit.valueOf()) return r;
            let o = new a.BigNumber(this.gasLimit.valueOf() - n),
              s = i.multipliedBy(new a.BigNumber(t.GasPriceModifier.valueOf())),
              A = o.multipliedBy(s);
            return r.plus(A);
          }
        }
        n.Transaction = Transaction;
        class TransactionHash extends l.Hash {
          constructor(t) {
            super(t);
          }
          static compute(t) {
            let n = new c.ProtoSerializer(),
              i = n.serializeTransaction(t),
              r = d(y).update(i).digest("hex");
            return new TransactionHash(r);
          }
        }
        n.TransactionHash = TransactionHash;
      }).call(this, i(2).Buffer);
    },
    6376: function (t, n, i) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.zeroPadStringIfOddLength =
            n.isPaddedHex =
            n.numberToPaddedHex =
              void 0));
        const o = r(i(3219));
        function s(t) {
          let n = new o.default(t).toString(16);
          return A(n);
        }
        function a(n) {
          n = n || "";
          let i = t.from(n, "hex").toString("hex");
          return n.toUpperCase() == i.toUpperCase();
        }
        function A(t) {
          return ((t = t || ""), t.length % 2 == 1 ? "0" + t : t);
        }
        ((n.numberToPaddedHex = s),
          (n.isPaddedHex = a),
          (n.zeroPadStringIfOddLength = A));
      }).call(this, i(2).Buffer);
    },
    6379: function (t, n, i) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MultiESDTNFTTransferPayloadBuilder =
          n.ESDTNFTTransferPayloadBuilder =
          n.ESDTTransferPayloadBuilder =
            void 0));
      const r = i(3121),
        o = i(4514),
        s = i(3002),
        a = i(6380),
        A = i(3806);
      class ESDTTransferPayloadBuilder {
        constructor() {
          this.payment = a.TokenPayment.fungibleFromAmount("", "0", 0);
        }
        setPayment(t) {
          return ((this.payment = t), this);
        }
        build() {
          let t = [
              s.BytesValue.fromUTF8(this.payment.tokenIdentifier),
              new s.BigUIntValue(this.payment.valueOf()),
            ],
            { argumentsString: n } = new o.ArgSerializer().valuesToString(t),
            i = "ESDTTransfer@" + n;
          return new A.TransactionPayload(i);
        }
      }
      n.ESDTTransferPayloadBuilder = ESDTTransferPayloadBuilder;
      class ESDTNFTTransferPayloadBuilder {
        constructor() {
          ((this.payment = a.TokenPayment.nonFungible("", 0)),
            (this.destination = new r.Address("")));
        }
        setPayment(t) {
          return ((this.payment = t), this);
        }
        setDestination(t) {
          return ((this.destination = t), this);
        }
        build() {
          let t = [
              s.BytesValue.fromUTF8(this.payment.tokenIdentifier),
              new s.U64Value(this.payment.nonce),
              new s.BigUIntValue(this.payment.valueOf()),
              new s.AddressValue(this.destination),
            ],
            { argumentsString: n } = new o.ArgSerializer().valuesToString(t),
            i = "ESDTNFTTransfer@" + n;
          return new A.TransactionPayload(i);
        }
      }
      n.ESDTNFTTransferPayloadBuilder = ESDTNFTTransferPayloadBuilder;
      class MultiESDTNFTTransferPayloadBuilder {
        constructor() {
          ((this.payments = []), (this.destination = new r.Address("")));
        }
        setPayments(t) {
          return ((this.payments = t), this);
        }
        setDestination(t) {
          return ((this.destination = t), this);
        }
        build() {
          let t = [
            new s.AddressValue(this.destination),
            new s.U16Value(this.payments.length),
          ];
          for (const r of this.payments)
            t.push(
              s.BytesValue.fromUTF8(r.tokenIdentifier),
              new s.U64Value(r.nonce),
              new s.BigUIntValue(r.valueOf()),
            );
          let { argumentsString: n } = new o.ArgSerializer().valuesToString(t),
            i = "MultiESDTNFTTransfer@" + n;
          return new A.TransactionPayload(i);
        }
      }
      n.MultiESDTNFTTransferPayloadBuilder = MultiESDTNFTTransferPayloadBuilder;
    },
    6380: function (t, n, i) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TokenPayment = void 0));
      const o = r(i(3219)),
        s = i(2854),
        a = "EGLD",
        A = 18;
      o.default.set({ ROUNDING_MODE: 1 });
      class TokenPayment {
        constructor(t, n, i, r) {
          let a = new o.default(i);
          if (!a.isInteger() || a.isNegative())
            throw new s.ErrInvalidArgument("bad amountAsBigInteger: " + i);
          ((this.tokenIdentifier = t),
            (this.nonce = n),
            (this.amountAsBigInteger = a),
            (this.numDecimals = r));
        }
        static egldFromAmount(t) {
          let n = new o.default(t).shiftedBy(A).decimalPlaces(0);
          return this.egldFromBigInteger(n);
        }
        static egldFromBigInteger(t) {
          return new TokenPayment(a, 0, t, A);
        }
        static fungibleFromAmount(t, n, i) {
          let r = new o.default(n).shiftedBy(i).decimalPlaces(0);
          return this.fungibleFromBigInteger(t, r, i);
        }
        static fungibleFromBigInteger(t, n, i) {
          return (void 0 === i && (i = 0), new TokenPayment(t, 0, n, i));
        }
        static nonFungible(t, n) {
          return new TokenPayment(t, n, 1, 0);
        }
        static semiFungible(t, n, i) {
          return new TokenPayment(t, n, i, 0);
        }
        static metaEsdtFromAmount(t, n, i, r) {
          let s = new o.default(i).shiftedBy(r).decimalPlaces(0);
          return this.metaEsdtFromBigInteger(t, n, s, r);
        }
        static metaEsdtFromBigInteger(t, n, i, r) {
          return (void 0 === r && (r = 0), new TokenPayment(t, n, i, r));
        }
        toString() {
          return this.amountAsBigInteger.toFixed(0);
        }
        valueOf() {
          return this.amountAsBigInteger;
        }
        toPrettyString() {
          return `${this.toRationalNumber()} ${this.tokenIdentifier}`;
        }
        toRationalNumber() {
          return this.amountAsBigInteger
            .shiftedBy(-this.numDecimals)
            .toFixed(this.numDecimals);
        }
        isEgld() {
          return this.tokenIdentifier == a;
        }
        isFungible() {
          return 0 == this.nonce;
        }
      }
      n.TokenPayment = TokenPayment;
    },
    8954: function (t, n, i) {
      var r = i(8955);
      function o(t, n) {
        var i;
        if (((n = n || !1), "string" !== typeof t))
          i = "Input must be a string";
        else
          try {
            h(t, 0, n, !1);
          } catch (r) {
            i = r.message;
          }
        return i;
      }
      function s(t, n) {
        if ("string" !== typeof t) throw new Error("Input must be a string");
        n = n || !1;
        var i = h(t, 0, n, !0);
        return i.value;
      }
      function a(t, n) {
        for (var i, r, o = t.length, s = n, a = n; a < o; a++) {
          var A = t[a];
          if ("," === A) {
            i = a;
            break;
          }
          if ("]" === A || "}" === A) {
            i = a - 1;
            break;
          }
          if (!y(A)) throw w(t, a, "expecting end of expression or separator");
        }
        return (
          void 0 === i ? ((i = o), (r = t[i])) : ((r = t[i]), i++),
          { start: s, end: i, value: r }
        );
      }
      function A(t, n) {
        for (var i, r = t.length, o = n, s = n; s < r; s++) {
          var a = t[s];
          if (":" === a) {
            i = s;
            break;
          }
          if (!y(a)) throw w(t, s, "expecting ':'");
        }
        if (void 0 === i) throw w(t, s, "expecting ':'");
        return (i++, { start: o, end: i });
      }
      function h(t, n, i, o) {
        for (
          var s,
            a,
            A,
            h = t.length,
            u = !1,
            d = !1,
            E = !1,
            B = !1,
            Q = !1,
            b = !1,
            m = n;
          m < h;
          m++
        ) {
          var v = t[m];
          if (void 0 === s) {
            if (!y(v)) {
              if ("[" === v) u = !0;
              else if ("{" === v) d = !0;
              else if ('"' === v) E = !0;
              else {
                if (c(t, m)) {
                  ((s = m), (m += 3), (a = m), (A = !0));
                  break;
                }
                if (l(t, m)) {
                  ((s = m), (m += 4), (a = m), (A = !1));
                  break;
                }
                if (C(t, m)) {
                  ((s = m), (m += 3), (a = m), (A = null));
                  break;
                }
                if (p(v)) B = !0;
                else {
                  if ("-" !== v) throw w(t, m, "");
                  B = !0;
                }
              }
              s = m;
            }
          } else {
            if (u) {
              var D = I(t, m, i, o);
              ((a = D.end), (A = D.value));
              break;
            }
            if (d) {
              var S = f(t, m, i, o);
              ((a = S.end), (A = S.value));
              break;
            }
            if (E && '"' === v && g(t, m - 1)) {
              ((a = m), (A = r(t.substring(s + 1, a))));
              break;
            }
            if (B)
              if (y(v)) b = !0;
              else {
                if ("," === v || "]" === v || "}" === v) {
                  ((A = parseFloat(t.substring(s, a), 10)), (a = m - 1));
                  break;
                }
                if (p(v) && !b) continue;
                if ("." !== v || Q || b) throw w(t, m, "expecting number");
                Q = !0;
              }
          }
        }
        if (void 0 === a) {
          if (!B) throw w(t, m, "unclosed statement");
          ((A = parseFloat(t.substring(s, m), 10)), (a = m - 1));
        }
        return (a++, { value: A, start: s, end: a });
      }
      function u(t, n) {
        for (var i, o, s = t.length, a = n; a < s; a++) {
          var A = t[a];
          if (void 0 === i) {
            if (!y(A)) {
              if ('"' !== A) throw w(t, a, "expecting String");
              i = a;
            }
          } else if ('"' === A && g(t, a - 1)) {
            o = a;
            break;
          }
        }
        if (void 0 === o) throw w(t, s, "expecting String");
        var h = r(t.substring(i + 1, o));
        if ("" === h) throw w(t, i, "empty string");
        return (o++, { start: i, end: o, value: h });
      }
      function f(t, n, i, r) {
        var o = n,
          s = ",",
          f = {},
          g = [],
          I = [],
          c = n;
        while (y(t[c])) c++;
        if ("}" === t[c]) return { start: n, end: c, value: f };
        while ("," === s) {
          var l = u(t, o),
            C = A(t, l.end),
            d = h(t, C.end, i, r),
            E = a(t, d.end);
          (i || (-1 !== g.indexOf(l.value) && (l.value = l.value + "1")),
            g.push(l.value),
            I.push(d.value),
            (o = E.end),
            (s = E.value));
        }
        if (r) {
          var p = 0;
          for (p = 0; p < g.length; p++) f[g[p]] = I[p];
        }
        return { start: n, end: o, value: f };
      }
      function g(t, n) {
        var i = n,
          r = 0;
        while (i > -1 && "\\" === t[i]) (r++, i--);
        return r % 2 === 0;
      }
      function I(t, n, i, r) {
        var o = n,
          s = ",",
          A = [],
          u = n;
        while (y(t[u])) u++;
        if ("]" === t[u]) return { start: n, end: u, value: A };
        while ("," === s) {
          var f = h(t, o, i, r),
            g = a(t, f.end);
          (r && A.push(f.value), (o = g.end), (s = g.value));
        }
        return { start: n, end: o, value: A };
      }
      function c(t, n) {
        return "true" === t.substr(n, 4);
      }
      function l(t, n) {
        return "false" === t.substr(n, 5);
      }
      function C(t, n) {
        return "null" === t.substr(n, 4);
      }
      t.exports = { validate: o, parse: s };
      var d = new RegExp(/^\s$/);
      function y(t) {
        return d.test(t);
      }
      var E = new RegExp(/^\d$/);
      function p(t) {
        return E.test(t);
      }
      function w(t, n, i) {
        var r,
          o,
          s = 10;
        return (
          (r =
            t.length < n + s
              ? t.substr(B(t.length - s), t.length)
              : n - s / 2 < 0
                ? t.substr(0, s)
                : t.substr(B(n - s / 2), s)),
          (o = i
            ? "Syntax error: " + i + " near " + r
            : "Syntax error near " + r),
          new Error(o)
        );
      }
      function B(t) {
        return t < 0 ? 0 : t;
      }
    },
    8955: function (t, n, i) {
      "use strict";
      var r = i(828);
      function o(t, n) {
        ((this.__proto__ = new Error(n)),
          (this.__proto__.name = "BackslashError"),
          (this.offset = t));
      }
      function s(t) {
        return t >= "0" && t <= "7";
      }
      function a(t) {
        return (
          (t >= "0" && t <= "9") ||
          (t >= "a" && t <= "f") ||
          (t >= "A" && t <= "F")
        );
      }
      function A(t) {
        return ((t = parseInt(t, 16)), r.ucs2.encode([t]));
      }
      function h(t, n, i) {
        var h = !1,
          u = [];
        function f(n) {
          var i = t[n];
          if (!a(i)) throw new o(n, "Unexpected token ILLEGAL");
          return i;
        }
        while (n < t.length) {
          var g = t[n];
          if ((n++, h)) {
            switch (((h = !1), g)) {
              case "n":
                u.push("\n");
                continue;
              case "r":
                u.push("\r");
                continue;
              case "f":
                u.push("\f");
                continue;
              case "b":
                u.push("\b");
                continue;
              case "t":
                u.push("\t");
                continue;
              case "v":
                u.push("\v");
                continue;
              case "\\":
                u.push("\\");
                continue;
            }
            if ("x" === g) {
              (u.push(A(f(n) + f(n + 1))), (n += 2));
              continue;
            }
            if ("u" === g) {
              (u.push(A(f(n) + f(n + 1) + f(n + 2) + f(n + 3))), (n += 4));
              continue;
            }
            if (s(g)) {
              var I;
              (s((I = t[n])) &&
                (n++,
                (g += I),
                s((I = t[n])) && g[0] <= "3" && (n++, (g += I))),
                u.push(r.ucs2.encode([parseInt(g, 8)])));
              continue;
            }
            u.push(g);
          } else if ("\\" === g) h = !0;
          else {
            if (g === i) {
              n--;
              break;
            }
            u.push(g);
          }
        }
        return 3 === arguments.length
          ? { end: n, value: u.join("") }
          : u.join("");
      }
      ((t.exports = function (t) {
        return h(t, 0);
      }),
        (t.exports.parseUntil = function (t, n, i) {
          return h(t, n, i);
        }));
    },
    8977: function (t, n, i) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TransactionFactory = void 0));
      const r = i(6379),
        o = i(4513),
        s = i(3121);
      class TransactionFactory {
        constructor(t) {
          this.gasEstimator = t;
        }
        createEGLDTransfer(t) {
          var n;
          const i =
              (null === (n = t.data) || void 0 === n ? void 0 : n.length()) ||
              0,
            r = this.gasEstimator.forEGLDTransfer(i);
          return new o.Transaction({
            nonce: t.nonce,
            value: t.value,
            receiver: t.receiver,
            sender: t.sender || s.Address.Zero(),
            gasPrice: t.gasPrice,
            gasLimit: t.gasLimit || r,
            data: t.data,
            chainID: t.chainID,
          });
        }
        createESDTTransfer(t) {
          const n = new r.ESDTTransferPayloadBuilder()
              .setPayment(t.payment)
              .build(),
            i = n.length() || 0,
            a = this.gasEstimator.forESDTTransfer(i);
          return new o.Transaction({
            nonce: t.nonce,
            receiver: t.receiver,
            sender: t.sender || s.Address.Zero(),
            gasPrice: t.gasPrice,
            gasLimit: t.gasLimit || a,
            data: n,
            chainID: t.chainID,
          });
        }
        createESDTNFTTransfer(t) {
          const n = new r.ESDTNFTTransferPayloadBuilder()
              .setPayment(t.payment)
              .setDestination(t.destination)
              .build(),
            i = n.length() || 0,
            s = this.gasEstimator.forESDTNFTTransfer(i);
          return new o.Transaction({
            nonce: t.nonce,
            receiver: t.sender,
            sender: t.sender,
            gasPrice: t.gasPrice,
            gasLimit: t.gasLimit || s,
            data: n,
            chainID: t.chainID,
          });
        }
        createMultiESDTNFTTransfer(t) {
          const n = new r.MultiESDTNFTTransferPayloadBuilder()
              .setPayments(t.payments)
              .setDestination(t.destination)
              .build(),
            i = n.length() || 0,
            s = this.gasEstimator.forMultiESDTNFTTransfer(i, t.payments.length);
          return new o.Transaction({
            nonce: t.nonce,
            receiver: t.sender,
            sender: t.sender,
            gasPrice: t.gasPrice,
            gasLimit: t.gasLimit || s,
            data: n,
            chainID: t.chainID,
          });
        }
      }
      n.TransactionFactory = TransactionFactory;
    },
    8978: function (t, n, i) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (t, n, i, r) {
          function o(t) {
            return t instanceof i
              ? t
              : new i(function (n) {
                  n(t);
                });
          }
          return new (i || (i = Promise))(function (i, s) {
            function a(t) {
              try {
                h(r.next(t));
              } catch (n) {
                s(n);
              }
            }
            function A(t) {
              try {
                h(r["throw"](t));
              } catch (n) {
                s(n);
              }
            }
            function h(t) {
              t.done ? i(t.value) : o(t.value).then(a, A);
            }
            h((r = r.apply(t, n || [])).next());
          });
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TransactionWatcher = void 0));
      const o = i(6369),
        s = i(4740),
        a = i(2854);
      class TransactionWatcher {
        constructor(t, n, i) {
          (void 0 === n && (n = TransactionWatcher.DefaultPollingInterval),
            void 0 === i && (i = TransactionWatcher.DefaultTimeout),
            (this.fetcher = new TransactionFetcherWithTracing(t)),
            (this.pollingInterval = n),
            (this.timeout = i));
        }
        awaitPending(t) {
          return r(this, void 0, void 0, function* () {
            const n = (t) => t.status.isPending(),
              i = () =>
                r(this, void 0, void 0, function* () {
                  return yield this.fetcher.getTransaction(t.getHash().hex());
                }),
              o = () => new a.ErrExpectedTransactionStatusNotReached();
            return this.awaitConditionally(n, i, o);
          });
        }
        awaitCompleted(t) {
          return r(this, void 0, void 0, function* () {
            const n = (t) => t.isCompleted,
              i = () =>
                r(this, void 0, void 0, function* () {
                  return yield this.fetcher.getTransaction(t.getHash().hex());
                }),
              o = () => new a.ErrExpectedTransactionStatusNotReached();
            return this.awaitConditionally(n, i, o);
          });
        }
        awaitAllEvents(t, n) {
          return r(this, void 0, void 0, function* () {
            const i = (t) => {
                const i = this.getAllTransactionEvents(t).map(
                    (t) => t.identifier,
                  ),
                  r = n.every((t) => i.includes(t));
                return r;
              },
              o = () =>
                r(this, void 0, void 0, function* () {
                  return yield this.fetcher.getTransaction(t.getHash().hex());
                }),
              s = () => new a.ErrExpectedTransactionEventsNotFound();
            return this.awaitConditionally(i, o, s);
          });
        }
        awaitAnyEvent(t, n) {
          return r(this, void 0, void 0, function* () {
            const i = (t) => {
                const i = this.getAllTransactionEvents(t).map(
                    (t) => t.identifier,
                  ),
                  r = void 0 != n.find((t) => i.includes(t));
                return r;
              },
              o = () =>
                r(this, void 0, void 0, function* () {
                  return yield this.fetcher.getTransaction(t.getHash().hex());
                }),
              s = () => new a.ErrExpectedTransactionEventsNotFound();
            return this.awaitConditionally(i, o, s);
          });
        }
        awaitOnCondition(t, n) {
          return r(this, void 0, void 0, function* () {
            const i = () =>
                r(this, void 0, void 0, function* () {
                  return yield this.fetcher.getTransaction(t.getHash().hex());
                }),
              o = () => new a.ErrExpectedTransactionStatusNotReached();
            return this.awaitConditionally(n, i, o);
          });
        }
        awaitConditionally(t, n, i) {
          return r(this, void 0, void 0, function* () {
            const r = new o.AsyncTimer("watcher:periodic"),
              A = new o.AsyncTimer("watcher:timeout");
            let h = !1,
              u = void 0,
              f = !1;
            A.start(this.timeout).finally(() => {
              (A.stop(), (h = !0));
            });
            while (!h) {
              yield r.start(this.pollingInterval);
              try {
                if (((u = yield n()), (f = t(u)), f || h)) break;
              } catch (g) {
                if (
                  (s.Logger.debug(
                    "TransactionWatcher.awaitConditionally(): cannot (yet) fetch data.",
                  ),
                  !(g instanceof a.Err))
                )
                  throw g;
              }
            }
            if ((A.isStopped() || A.stop(), !u || !f)) throw i();
            return u;
          });
        }
        getAllTransactionEvents(t) {
          const n = [...t.logs.events];
          for (const i of t.contractResults.items) n.push(...i.logs.events);
          return n;
        }
      }
      ((n.TransactionWatcher = TransactionWatcher),
        (TransactionWatcher.DefaultPollingInterval = 6e3),
        (TransactionWatcher.DefaultTimeout =
          15 * TransactionWatcher.DefaultPollingInterval),
        (TransactionWatcher.NoopOnStatusReceived = (t) => {}));
      class TransactionFetcherWithTracing {
        constructor(t) {
          this.fetcher = t;
        }
        getTransaction(t) {
          return r(this, void 0, void 0, function* () {
            return (
              s.Logger.debug(`transactionWatcher, getTransaction(${t})`),
              yield this.fetcher.getTransaction(t)
            );
          });
        }
      }
    },
    8985: function (t, n, i) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.TokenTransferProperties =
            n.TransactionMetadataTransfer =
            n.TransactionMetadata =
            n.TransactionToDecode =
            n.TransactionDecoder =
              void 0));
        const r = i(8986);
        class TransactionDecoder {
          getTransactionMetadata(t) {
            const n = this.getNormalTransactionMetadata(t),
              i = this.getEsdtTransactionMetadata(n);
            if (i) return i;
            const r = this.getNftTransferMetadata(n);
            if (r) return r;
            const o = this.getMultiTransferMetadata(n);
            return o || n;
          }
          getNormalTransactionMetadata(t) {
            const n = new TransactionMetadata();
            if (
              ((n.sender = t.sender),
              (n.receiver = t.receiver),
              (n.value = BigInt(t.value)),
              t.data)
            ) {
              const r = this.base64Decode(t.data),
                o = r.split("@"),
                s = o.slice(1);
              if (
                (s.every((t) => this.isSmartContractArgument(t)) &&
                  ((n.functionName = o[0]), (n.functionArgs = s)),
                "relayedTx" === n.functionName && 1 === n.functionArgs.length)
              )
                try {
                  const t = JSON.parse(this.hexToString(n.functionArgs[0]));
                  return (
                    (t.value = t.value.toString()),
                    (t.sender = this.bech32Encode(this.base64ToHex(t.sender))),
                    (t.receiver = this.bech32Encode(
                      this.base64ToHex(t.receiver),
                    )),
                    this.getNormalTransactionMetadata(t)
                  );
                } catch (i) {}
              if (
                "relayedTxV2" === n.functionName &&
                4 === n.functionArgs.length
              )
                try {
                  const i = new TransactionToDecode();
                  return (
                    (i.sender = t.receiver),
                    (i.receiver = this.bech32Encode(n.functionArgs[0])),
                    (i.data = this.base64Encode(
                      this.hexToString(n.functionArgs[2]),
                    )),
                    (i.value = "0"),
                    this.getNormalTransactionMetadata(i)
                  );
                } catch (i) {}
            }
            try {
              "SmartContractResult" === t.type &&
                ("MultiESDTNFTTransfer" === n.functionName &&
                  n.functionArgs.length > 0 &&
                  this.bech32Encode(n.functionArgs[0]) === n.receiver &&
                  (n.receiver = n.sender),
                "ESDTNFTTransfer" === n.functionName &&
                  n.functionArgs.length > 3 &&
                  this.bech32Encode(n.functionArgs[3]) === n.receiver &&
                  (n.receiver = n.sender));
            } catch (i) {}
            return n;
          }
          getMultiTransferMetadata(t) {
            if (t.sender !== t.receiver) return;
            if ("MultiESDTNFTTransfer" !== t.functionName) return;
            const n = t.functionArgs;
            if (n.length < 3) return;
            if (!this.isAddressValid(n[0])) return;
            const i = this.bech32Encode(n[0]),
              r = this.hexToNumber(n[1]),
              o = new TransactionMetadata();
            o.transfers || (o.transfers = []);
            let s = 2;
            for (let a = 0; a < r; a++) {
              const t = this.hexToString(n[s++]),
                i = n[s++],
                r = this.hexToBigInt(n[s++]);
              i
                ? o.transfers.push({
                    value: r,
                    properties: { collection: t, identifier: `${t}-${i}` },
                  })
                : o.transfers.push({ value: r, properties: { token: t } });
            }
            return (
              (o.sender = t.sender),
              (o.receiver = i),
              n.length > s &&
                ((o.functionName = this.hexToString(n[s++])),
                (o.functionArgs = n.slice(s++))),
              o
            );
          }
          getNftTransferMetadata(t) {
            if (t.sender !== t.receiver) return;
            if ("ESDTNFTTransfer" !== t.functionName) return;
            const n = t.functionArgs;
            if (n.length < 4) return;
            if (!this.isAddressValid(n[3])) return;
            const i = this.hexToString(n[0]),
              r = n[1],
              o = this.hexToBigInt(n[2]),
              s = this.bech32Encode(n[3]),
              a = new TransactionMetadata();
            return (
              (a.sender = t.sender),
              (a.receiver = s),
              (a.value = o),
              n.length > 4 &&
                ((a.functionName = this.hexToString(n[4])),
                (a.functionArgs = n.slice(5))),
              (a.transfers = [
                {
                  value: o,
                  properties: { collection: i, identifier: `${i}-${r}` },
                },
              ]),
              a
            );
          }
          base64Encode(n) {
            return t.from(n).toString("base64");
          }
          base64Decode(n) {
            return t.from(n, "base64").toString("binary");
          }
          hexToNumber(t) {
            return parseInt(t, 16);
          }
          getEsdtTransactionMetadata(t) {
            if ("ESDTTransfer" !== t.functionName) return;
            const n = t.functionArgs;
            if (n.length < 2) return;
            const i = this.hexToString(n[0]),
              r = this.hexToBigInt(n[1]),
              o = new TransactionMetadata();
            return (
              (o.sender = t.sender),
              (o.receiver = t.receiver),
              n.length > 2 &&
                ((o.functionName = this.hexToString(n[2])),
                (o.functionArgs = n.slice(3))),
              (o.transfers = [{ value: r, properties: { identifier: i } }]),
              (o.value = t.value),
              o
            );
          }
          bech32Encode(n) {
            const i = t.from(n, "hex");
            let o = r.bech32.toWords(i);
            return r.bech32.encode("erd", o);
          }
          isAddressValid(n) {
            return 32 == t.from(n, "hex").length;
          }
          isSmartContractArgument(t) {
            return !!this.isHex(t) && t.length % 2 === 0;
          }
          isHex(t) {
            return !1 === new RegExp(/[^a-f0-9]/gi).test(t);
          }
          base64ToHex(n) {
            return t.from(n, "base64").toString("hex");
          }
          hexToString(n) {
            return t.from(n, "hex").toString("ascii");
          }
          hexToBigInt(t) {
            return t ? BigInt("0x" + t) : BigInt(0);
          }
        }
        n.TransactionDecoder = TransactionDecoder;
        class TransactionToDecode {
          constructor() {
            ((this.sender = ""),
              (this.receiver = ""),
              (this.data = ""),
              (this.value = "0"),
              (this.type = ""));
          }
        }
        n.TransactionToDecode = TransactionToDecode;
        class TransactionMetadata {
          constructor() {
            ((this.sender = ""),
              (this.receiver = ""),
              (this.value = BigInt(0)),
              (this.functionArgs = []));
          }
        }
        n.TransactionMetadata = TransactionMetadata;
        class TransactionMetadataTransfer {
          constructor() {
            this.value = BigInt(0);
          }
        }
        n.TransactionMetadataTransfer = TransactionMetadataTransfer;
        class TokenTransferProperties {}
        n.TokenTransferProperties = TokenTransferProperties;
      }).call(this, i(2).Buffer);
    },
    8986: function (t, n, i) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.bech32m = n.bech32 = void 0));
      const r = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
        o = {};
      for (let I = 0; I < r.length; I++) {
        const t = r.charAt(I);
        o[t] = I;
      }
      function s(t) {
        const n = t >> 25;
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((n >> 0) & 1)) ^
          (642813549 & -((n >> 1) & 1)) ^
          (513874426 & -((n >> 2) & 1)) ^
          (1027748829 & -((n >> 3) & 1)) ^
          (705979059 & -((n >> 4) & 1))
        );
      }
      function a(t) {
        let n = 1;
        for (let i = 0; i < t.length; ++i) {
          const r = t.charCodeAt(i);
          if (r < 33 || r > 126) return "Invalid prefix (" + t + ")";
          n = s(n) ^ (r >> 5);
        }
        n = s(n);
        for (let i = 0; i < t.length; ++i) {
          const r = t.charCodeAt(i);
          n = s(n) ^ (31 & r);
        }
        return n;
      }
      function A(t, n, i, r) {
        let o = 0,
          s = 0;
        const a = (1 << i) - 1,
          A = [];
        for (let h = 0; h < t.length; ++h) {
          ((o = (o << n) | t[h]), (s += n));
          while (s >= i) ((s -= i), A.push((o >> s) & a));
        }
        if (r) s > 0 && A.push((o << (i - s)) & a);
        else {
          if (s >= n) return "Excess padding";
          if ((o << (i - s)) & a) return "Non-zero padding";
        }
        return A;
      }
      function h(t) {
        return A(t, 8, 5, !0);
      }
      function u(t) {
        const n = A(t, 5, 8, !1);
        if (Array.isArray(n)) return n;
      }
      function f(t) {
        const n = A(t, 5, 8, !1);
        if (Array.isArray(n)) return n;
        throw new Error(n);
      }
      function g(t) {
        let n;
        function i(t, i, o) {
          if (((o = o || 90), t.length + 7 + i.length > o))
            throw new TypeError("Exceeds length limit");
          t = t.toLowerCase();
          let A = a(t);
          if ("string" === typeof A) throw new Error(A);
          let h = t + "1";
          for (let n = 0; n < i.length; ++n) {
            const t = i[n];
            if (t >> 5 !== 0) throw new Error("Non 5-bit word");
            ((A = s(A) ^ t), (h += r.charAt(t)));
          }
          for (let n = 0; n < 6; ++n) A = s(A);
          A ^= n;
          for (let n = 0; n < 6; ++n) {
            const t = (A >> (5 * (5 - n))) & 31;
            h += r.charAt(t);
          }
          return h;
        }
        function A(t, i) {
          if (((i = i || 90), t.length < 8)) return t + " too short";
          if (t.length > i) return "Exceeds length limit";
          const r = t.toLowerCase(),
            A = t.toUpperCase();
          if (t !== r && t !== A) return "Mixed-case string " + t;
          t = r;
          const h = t.lastIndexOf("1");
          if (-1 === h) return "No separator character for " + t;
          if (0 === h) return "Missing prefix for " + t;
          const u = t.slice(0, h),
            f = t.slice(h + 1);
          if (f.length < 6) return "Data too short";
          let g = a(u);
          if ("string" === typeof g) return g;
          const I = [];
          for (let n = 0; n < f.length; ++n) {
            const t = f.charAt(n),
              i = o[t];
            if (void 0 === i) return "Unknown character " + t;
            ((g = s(g) ^ i), n + 6 >= f.length || I.push(i));
          }
          return g !== n
            ? "Invalid checksum for " + t
            : { prefix: u, words: I };
        }
        function g(t, n) {
          const i = A(t, n);
          if ("object" === typeof i) return i;
        }
        function I(t, n) {
          const i = A(t, n);
          if ("object" === typeof i) return i;
          throw new Error(i);
        }
        return (
          (n = "bech32" === t ? 1 : 734539939),
          {
            decodeUnsafe: g,
            decode: I,
            encode: i,
            toWords: h,
            fromWordsUnsafe: u,
            fromWords: f,
          }
        );
      }
      ((n.bech32 = g("bech32")), (n.bech32m = g("bech32m")));
    },
  },
]);
