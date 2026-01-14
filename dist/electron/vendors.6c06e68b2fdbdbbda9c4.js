(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [274, 330, 331],
  {
    2801: function (t, n, o) {
      "use strict";
      var s =
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
      const i = s(o(2754)),
        a = s(o(2755));
      n.protobufPackage = "cosmos.base.v1beta1";
      const r = { denom: "", amount: "" };
      n.Coin = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            "" !== t.amount && n.uint32(18).string(t.amount),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, r);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = o.string();
                break;
              case 2:
                i.amount = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, r);
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
          var n, o;
          const s = Object.assign({}, r);
          return (
            (s.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (s.amount = null !== (o = t.amount) && void 0 !== o ? o : ""),
            s
          );
        },
      };
      const d = { denom: "", amount: "" };
      n.DecCoin = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            "" !== t.amount && n.uint32(18).string(t.amount),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, d);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = o.string();
                break;
              case 2:
                i.amount = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
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
          var n, o;
          const s = Object.assign({}, d);
          return (
            (s.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (s.amount = null !== (o = t.amount) && void 0 !== o ? o : ""),
            s
          );
        },
      };
      const u = { int: "" };
      n.IntProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.int && n.uint32(10).string(t.int),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, u);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.int = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
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
          var n;
          const o = Object.assign({}, u);
          return ((o.int = null !== (n = t.int) && void 0 !== n ? n : ""), o);
        },
      };
      const c = { dec: "" };
      ((n.DecProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.dec && n.uint32(10).string(t.dec),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, c);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.dec = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
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
          var n;
          const o = Object.assign({}, c);
          return ((o.dec = null !== (n = t.dec) && void 0 !== n ? n : ""), o);
        },
      }),
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure()));
    },
    2926: function (t, n, o) {
      "use strict";
      (function (t) {
        var s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PageResponse = n.PageRequest = n.protobufPackage = void 0));
        const i = s(o(2754)),
          a = s(o(2755));
        n.protobufPackage = "cosmos.base.query.v1beta1";
        const r = {
          offset: i.default.UZERO,
          limit: i.default.UZERO,
          countTotal: !1,
        };
        n.PageRequest = {
          encode(t, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              0 !== t.key.length && n.uint32(10).bytes(t.key),
              t.offset.isZero() || n.uint32(16).uint64(t.offset),
              t.limit.isZero() || n.uint32(24).uint64(t.limit),
              !0 === t.countTotal && n.uint32(32).bool(t.countTotal),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, r);
            i.key = new Uint8Array();
            while (o.pos < s) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  i.key = o.bytes();
                  break;
                case 2:
                  i.offset = o.uint64();
                  break;
                case 3:
                  i.limit = o.uint64();
                  break;
                case 4:
                  i.countTotal = o.bool();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, r);
            return (
              (n.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (n.key = l(t.key)),
              void 0 !== t.offset && null !== t.offset
                ? (n.offset = i.default.fromString(t.offset))
                : (n.offset = i.default.UZERO),
              void 0 !== t.limit && null !== t.limit
                ? (n.limit = i.default.fromString(t.limit))
                : (n.limit = i.default.UZERO),
              void 0 !== t.countTotal && null !== t.countTotal
                ? (n.countTotal = Boolean(t.countTotal))
                : (n.countTotal = !1),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.key &&
                (n.key = p(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.offset &&
                (n.offset = (t.offset || i.default.UZERO).toString()),
              void 0 !== t.limit &&
                (n.limit = (t.limit || i.default.UZERO).toString()),
              void 0 !== t.countTotal && (n.countTotal = t.countTotal),
              n
            );
          },
          fromPartial(t) {
            var n, o;
            const s = Object.assign({}, r);
            return (
              (s.key =
                null !== (n = t.key) && void 0 !== n ? n : new Uint8Array()),
              void 0 !== t.offset && null !== t.offset
                ? (s.offset = t.offset)
                : (s.offset = i.default.UZERO),
              void 0 !== t.limit && null !== t.limit
                ? (s.limit = t.limit)
                : (s.limit = i.default.UZERO),
              (s.countTotal = null !== (o = t.countTotal) && void 0 !== o && o),
              s
            );
          },
        };
        const d = { total: i.default.UZERO };
        n.PageResponse = {
          encode(t, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              0 !== t.nextKey.length && n.uint32(10).bytes(t.nextKey),
              t.total.isZero() || n.uint32(16).uint64(t.total),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, d);
            i.nextKey = new Uint8Array();
            while (o.pos < s) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  i.nextKey = o.bytes();
                  break;
                case 2:
                  i.total = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, d);
            return (
              (n.nextKey = new Uint8Array()),
              void 0 !== t.nextKey &&
                null !== t.nextKey &&
                (n.nextKey = l(t.nextKey)),
              void 0 !== t.total && null !== t.total
                ? (n.total = i.default.fromString(t.total))
                : (n.total = i.default.UZERO),
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
                (n.total = (t.total || i.default.UZERO).toString()),
              n
            );
          },
          fromPartial(t) {
            var n;
            const o = Object.assign({}, d);
            return (
              (o.nextKey =
                null !== (n = t.nextKey) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              void 0 !== t.total && null !== t.total
                ? (o.total = t.total)
                : (o.total = i.default.UZERO),
              o
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
        const c =
          u.atob || ((t) => u.Buffer.from(t, "base64").toString("binary"));
        function l(t) {
          const n = c(t),
            o = new Uint8Array(n.length);
          for (let s = 0; s < n.length; ++s) o[s] = n.charCodeAt(s);
          return o;
        }
        const f =
          u.btoa || ((t) => u.Buffer.from(t, "binary").toString("base64"));
        function p(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return f(n.join(""));
        }
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure());
      }).call(this, o(13));
    },
    3021: function (t, n, o) {
      "use strict";
      function s(t, n) {
        var o = new Array(arguments.length - 1),
          s = 0,
          i = 2,
          a = !0;
        while (i < arguments.length) o[s++] = arguments[i++];
        return new Promise(function (i, r) {
          o[s] = function (t) {
            if (a)
              if (((a = !1), t)) r(t);
              else {
                var n = new Array(arguments.length - 1),
                  o = 0;
                while (o < n.length) n[o++] = arguments[o];
                i.apply(null, n);
              }
          };
          try {
            t.apply(n || null, o);
          } catch (d) {
            a && ((a = !1), r(d));
          }
        });
      }
      t.exports = s;
    },
    3022: function (t, n, o) {
      "use strict";
      var s = n;
      s.length = function (t) {
        var n = t.length;
        if (!n) return 0;
        var o = 0;
        while (--n % 4 > 1 && "=" === t.charAt(n)) ++o;
        return Math.ceil(3 * t.length) / 4 - o;
      };
      for (var i = new Array(64), a = new Array(123), r = 0; r < 64; )
        a[
          (i[r] =
            r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : (r - 59) | 43)
        ] = r++;
      s.encode = function (t, n, o) {
        var s,
          a = null,
          r = [],
          d = 0,
          u = 0;
        while (n < o) {
          var c = t[n++];
          switch (u) {
            case 0:
              ((r[d++] = i[c >> 2]), (s = (3 & c) << 4), (u = 1));
              break;
            case 1:
              ((r[d++] = i[s | (c >> 4)]), (s = (15 & c) << 2), (u = 2));
              break;
            case 2:
              ((r[d++] = i[s | (c >> 6)]), (r[d++] = i[63 & c]), (u = 0));
              break;
          }
          d > 8191 &&
            ((a || (a = [])).push(String.fromCharCode.apply(String, r)),
            (d = 0));
        }
        return (
          u && ((r[d++] = i[s]), (r[d++] = 61), 1 === u && (r[d++] = 61)),
          a
            ? (d && a.push(String.fromCharCode.apply(String, r.slice(0, d))),
              a.join(""))
            : String.fromCharCode.apply(String, r.slice(0, d))
        );
      };
      var d = "invalid encoding";
      ((s.decode = function (t, n, o) {
        for (var s, i = o, r = 0, u = 0; u < t.length; ) {
          var c = t.charCodeAt(u++);
          if (61 === c && r > 1) break;
          if (void 0 === (c = a[c])) throw Error(d);
          switch (r) {
            case 0:
              ((s = c), (r = 1));
              break;
            case 1:
              ((n[o++] = (s << 2) | ((48 & c) >> 4)), (s = c), (r = 2));
              break;
            case 2:
              ((n[o++] = ((15 & s) << 4) | ((60 & c) >> 2)), (s = c), (r = 3));
              break;
            case 3:
              ((n[o++] = ((3 & s) << 6) | c), (r = 0));
              break;
          }
        }
        if (1 === r) throw Error(d);
        return o - i;
      }),
        (s.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, n, o) {
      "use strict";
      function s() {
        this._listeners = {};
      }
      ((t.exports = s),
        (s.prototype.on = function (t, n, o) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: n,
              ctx: o || this,
            }),
            this
          );
        }),
        (s.prototype.off = function (t, n) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === n) this._listeners[t] = [];
          else
            for (var o = this._listeners[t], s = 0; s < o.length; )
              o[s].fn === n ? o.splice(s, 1) : ++s;
          return this;
        }),
        (s.prototype.emit = function (t) {
          var n = this._listeners[t];
          if (n) {
            for (var o = [], s = 1; s < arguments.length; )
              o.push(arguments[s++]);
            for (s = 0; s < n.length; ) n[s].fn.apply(n[s++].ctx, o);
          }
          return this;
        }));
    },
    3024: function (t, n, o) {
      "use strict";
      function s(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var n = new Float32Array([-0]),
                  o = new Uint8Array(n.buffer),
                  s = 128 === o[3];
                function i(t, s, i) {
                  ((n[0] = t),
                    (s[i] = o[0]),
                    (s[i + 1] = o[1]),
                    (s[i + 2] = o[2]),
                    (s[i + 3] = o[3]));
                }
                function a(t, s, i) {
                  ((n[0] = t),
                    (s[i] = o[3]),
                    (s[i + 1] = o[2]),
                    (s[i + 2] = o[1]),
                    (s[i + 3] = o[0]));
                }
                function r(t, s) {
                  return (
                    (o[0] = t[s]),
                    (o[1] = t[s + 1]),
                    (o[2] = t[s + 2]),
                    (o[3] = t[s + 3]),
                    n[0]
                  );
                }
                function d(t, s) {
                  return (
                    (o[3] = t[s]),
                    (o[2] = t[s + 1]),
                    (o[1] = t[s + 2]),
                    (o[0] = t[s + 3]),
                    n[0]
                  );
                }
                ((t.writeFloatLE = s ? i : a),
                  (t.writeFloatBE = s ? a : i),
                  (t.readFloatLE = s ? r : d),
                  (t.readFloatBE = s ? d : r));
              })()
            : (function () {
                function n(t, n, o, s) {
                  var i = n < 0 ? 1 : 0;
                  if ((i && (n = -n), 0 === n))
                    t(1 / n > 0 ? 0 : 2147483648, o, s);
                  else if (isNaN(n)) t(2143289344, o, s);
                  else if (n > 34028234663852886e22)
                    t(((i << 31) | 2139095040) >>> 0, o, s);
                  else if (n < 11754943508222875e-54)
                    t(
                      ((i << 31) | Math.round(n / 1401298464324817e-60)) >>> 0,
                      o,
                      s,
                    );
                  else {
                    var a = Math.floor(Math.log(n) / Math.LN2),
                      r = 8388607 & Math.round(n * Math.pow(2, -a) * 8388608);
                    t(((i << 31) | ((a + 127) << 23) | r) >>> 0, o, s);
                  }
                }
                function o(t, n, o) {
                  var s = t(n, o),
                    i = 2 * (s >> 31) + 1,
                    a = (s >>> 23) & 255,
                    r = 8388607 & s;
                  return 255 === a
                    ? r
                      ? NaN
                      : i * (1 / 0)
                    : 0 === a
                      ? 1401298464324817e-60 * i * r
                      : i * Math.pow(2, a - 150) * (r + 8388608);
                }
                ((t.writeFloatLE = n.bind(null, i)),
                  (t.writeFloatBE = n.bind(null, a)),
                  (t.readFloatLE = o.bind(null, r)),
                  (t.readFloatBE = o.bind(null, d)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var n = new Float64Array([-0]),
                  o = new Uint8Array(n.buffer),
                  s = 128 === o[7];
                function i(t, s, i) {
                  ((n[0] = t),
                    (s[i] = o[0]),
                    (s[i + 1] = o[1]),
                    (s[i + 2] = o[2]),
                    (s[i + 3] = o[3]),
                    (s[i + 4] = o[4]),
                    (s[i + 5] = o[5]),
                    (s[i + 6] = o[6]),
                    (s[i + 7] = o[7]));
                }
                function a(t, s, i) {
                  ((n[0] = t),
                    (s[i] = o[7]),
                    (s[i + 1] = o[6]),
                    (s[i + 2] = o[5]),
                    (s[i + 3] = o[4]),
                    (s[i + 4] = o[3]),
                    (s[i + 5] = o[2]),
                    (s[i + 6] = o[1]),
                    (s[i + 7] = o[0]));
                }
                function r(t, s) {
                  return (
                    (o[0] = t[s]),
                    (o[1] = t[s + 1]),
                    (o[2] = t[s + 2]),
                    (o[3] = t[s + 3]),
                    (o[4] = t[s + 4]),
                    (o[5] = t[s + 5]),
                    (o[6] = t[s + 6]),
                    (o[7] = t[s + 7]),
                    n[0]
                  );
                }
                function d(t, s) {
                  return (
                    (o[7] = t[s]),
                    (o[6] = t[s + 1]),
                    (o[5] = t[s + 2]),
                    (o[4] = t[s + 3]),
                    (o[3] = t[s + 4]),
                    (o[2] = t[s + 5]),
                    (o[1] = t[s + 6]),
                    (o[0] = t[s + 7]),
                    n[0]
                  );
                }
                ((t.writeDoubleLE = s ? i : a),
                  (t.writeDoubleBE = s ? a : i),
                  (t.readDoubleLE = s ? r : d),
                  (t.readDoubleBE = s ? d : r));
              })()
            : (function () {
                function n(t, n, o, s, i, a) {
                  var r = s < 0 ? 1 : 0;
                  if ((r && (s = -s), 0 === s))
                    (t(0, i, a + n), t(1 / s > 0 ? 0 : 2147483648, i, a + o));
                  else if (isNaN(s)) (t(0, i, a + n), t(2146959360, i, a + o));
                  else if (s > 17976931348623157e292)
                    (t(0, i, a + n),
                      t(((r << 31) | 2146435072) >>> 0, i, a + o));
                  else {
                    var d;
                    if (s < 22250738585072014e-324)
                      ((d = s / 5e-324),
                        t(d >>> 0, i, a + n),
                        t(((r << 31) | (d / 4294967296)) >>> 0, i, a + o));
                    else {
                      var u = Math.floor(Math.log(s) / Math.LN2);
                      (1024 === u && (u = 1023),
                        (d = s * Math.pow(2, -u)),
                        t((4503599627370496 * d) >>> 0, i, a + n),
                        t(
                          ((r << 31) |
                            ((u + 1023) << 20) |
                            ((1048576 * d) & 1048575)) >>>
                            0,
                          i,
                          a + o,
                        ));
                    }
                  }
                }
                function o(t, n, o, s, i) {
                  var a = t(s, i + n),
                    r = t(s, i + o),
                    d = 2 * (r >> 31) + 1,
                    u = (r >>> 20) & 2047,
                    c = 4294967296 * (1048575 & r) + a;
                  return 2047 === u
                    ? c
                      ? NaN
                      : d * (1 / 0)
                    : 0 === u
                      ? 5e-324 * d * c
                      : d * Math.pow(2, u - 1075) * (c + 4503599627370496);
                }
                ((t.writeDoubleLE = n.bind(null, i, 0, 4)),
                  (t.writeDoubleBE = n.bind(null, a, 4, 0)),
                  (t.readDoubleLE = o.bind(null, r, 0, 4)),
                  (t.readDoubleBE = o.bind(null, d, 4, 0)));
              })(),
          t
        );
      }
      function i(t, n, o) {
        ((n[o] = 255 & t),
          (n[o + 1] = (t >>> 8) & 255),
          (n[o + 2] = (t >>> 16) & 255),
          (n[o + 3] = t >>> 24));
      }
      function a(t, n, o) {
        ((n[o] = t >>> 24),
          (n[o + 1] = (t >>> 16) & 255),
          (n[o + 2] = (t >>> 8) & 255),
          (n[o + 3] = 255 & t));
      }
      function r(t, n) {
        return (
          (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16) | (t[n + 3] << 24)) >>> 0
        );
      }
      function d(t, n) {
        return (
          ((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3]) >>> 0
        );
      }
      t.exports = s(s);
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
      var s = n;
      ((s.length = function (t) {
        for (var n = 0, o = 0, s = 0; s < t.length; ++s)
          ((o = t.charCodeAt(s)),
            o < 128
              ? (n += 1)
              : o < 2048
                ? (n += 2)
                : 55296 === (64512 & o) &&
                    56320 === (64512 & t.charCodeAt(s + 1))
                  ? (++s, (n += 4))
                  : (n += 3));
        return n;
      }),
        (s.read = function (t, n, o) {
          var s = o - n;
          if (s < 1) return "";
          var i,
            a = null,
            r = [],
            d = 0;
          while (n < o)
            ((i = t[n++]),
              i < 128
                ? (r[d++] = i)
                : i > 191 && i < 224
                  ? (r[d++] = ((31 & i) << 6) | (63 & t[n++]))
                  : i > 239 && i < 365
                    ? ((i =
                        (((7 & i) << 18) |
                          ((63 & t[n++]) << 12) |
                          ((63 & t[n++]) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (r[d++] = 55296 + (i >> 10)),
                      (r[d++] = 56320 + (1023 & i)))
                    : (r[d++] =
                        ((15 & i) << 12) |
                        ((63 & t[n++]) << 6) |
                        (63 & t[n++])),
              d > 8191 &&
                ((a || (a = [])).push(String.fromCharCode.apply(String, r)),
                (d = 0)));
          return a
            ? (d && a.push(String.fromCharCode.apply(String, r.slice(0, d))),
              a.join(""))
            : String.fromCharCode.apply(String, r.slice(0, d));
        }),
        (s.write = function (t, n, o) {
          for (var s, i, a = o, r = 0; r < t.length; ++r)
            ((s = t.charCodeAt(r)),
              s < 128
                ? (n[o++] = s)
                : s < 2048
                  ? ((n[o++] = (s >> 6) | 192), (n[o++] = (63 & s) | 128))
                  : 55296 === (64512 & s) &&
                      56320 === (64512 & (i = t.charCodeAt(r + 1)))
                    ? ((s = 65536 + ((1023 & s) << 10) + (1023 & i)),
                      ++r,
                      (n[o++] = (s >> 18) | 240),
                      (n[o++] = ((s >> 12) & 63) | 128),
                      (n[o++] = ((s >> 6) & 63) | 128),
                      (n[o++] = (63 & s) | 128))
                    : ((n[o++] = (s >> 12) | 224),
                      (n[o++] = ((s >> 6) & 63) | 128),
                      (n[o++] = (63 & s) | 128)));
          return o - a;
        }));
    },
    3027: function (t, n, o) {
      "use strict";
      function s(t, n, o) {
        var s = o || 8192,
          i = s >>> 1,
          a = null,
          r = s;
        return function (o) {
          if (o < 1 || o > i) return t(o);
          r + o > s && ((a = t(s)), (r = 0));
          var d = n.call(a, r, (r += o));
          return (7 & r && (r = 1 + (7 | r)), d);
        };
      }
      t.exports = s;
    },
    3323: function (t, n, o) {
      "use strict";
      var s =
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
      const i = s(o(2754)),
        a = s(o(2755)),
        r = o(2781);
      n.protobufPackage = "cosmos.auth.v1beta1";
      const d = {
        address: "",
        accountNumber: i.default.UZERO,
        sequence: i.default.UZERO,
      };
      n.BaseAccount = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address),
            void 0 !== t.pubKey &&
              r.Any.encode(t.pubKey, n.uint32(18).fork()).ldelim(),
            t.accountNumber.isZero() || n.uint32(24).uint64(t.accountNumber),
            t.sequence.isZero() || n.uint32(32).uint64(t.sequence),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, d);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = o.string();
                break;
              case 2:
                i.pubKey = r.Any.decode(o, o.uint32());
                break;
              case 3:
                i.accountNumber = o.uint64();
                break;
              case 4:
                i.sequence = o.uint64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.pubKey && null !== t.pubKey
              ? (n.pubKey = r.Any.fromJSON(t.pubKey))
              : (n.pubKey = void 0),
            void 0 !== t.accountNumber && null !== t.accountNumber
              ? (n.accountNumber = i.default.fromString(t.accountNumber))
              : (n.accountNumber = i.default.UZERO),
            void 0 !== t.sequence && null !== t.sequence
              ? (n.sequence = i.default.fromString(t.sequence))
              : (n.sequence = i.default.UZERO),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            void 0 !== t.pubKey &&
              (n.pubKey = t.pubKey ? r.Any.toJSON(t.pubKey) : void 0),
            void 0 !== t.accountNumber &&
              (n.accountNumber = (
                t.accountNumber || i.default.UZERO
              ).toString()),
            void 0 !== t.sequence &&
              (n.sequence = (t.sequence || i.default.UZERO).toString()),
            n
          );
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, d);
          return (
            (o.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            void 0 !== t.pubKey && null !== t.pubKey
              ? (o.pubKey = r.Any.fromPartial(t.pubKey))
              : (o.pubKey = void 0),
            void 0 !== t.accountNumber && null !== t.accountNumber
              ? (o.accountNumber = t.accountNumber)
              : (o.accountNumber = i.default.UZERO),
            void 0 !== t.sequence && null !== t.sequence
              ? (o.sequence = t.sequence)
              : (o.sequence = i.default.UZERO),
            o
          );
        },
      };
      const u = { name: "", permissions: "" };
      n.ModuleAccount = {
        encode(t, o) {
          (void 0 === o && (o = a.default.Writer.create()),
            void 0 !== t.baseAccount &&
              n.BaseAccount.encode(t.baseAccount, o.uint32(10).fork()).ldelim(),
            "" !== t.name && o.uint32(18).string(t.name));
          for (const n of t.permissions) o.uint32(26).string(n);
          return o;
        },
        decode(t, o) {
          const s = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let i = void 0 === o ? s.len : s.pos + o;
          const r = Object.assign({}, u);
          r.permissions = [];
          while (s.pos < i) {
            const t = s.uint32();
            switch (t >>> 3) {
              case 1:
                r.baseAccount = n.BaseAccount.decode(s, s.uint32());
                break;
              case 2:
                r.name = s.string();
                break;
              case 3:
                r.permissions.push(s.string());
                break;
              default:
                s.skipType(7 & t);
                break;
            }
          }
          return r;
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
          var o;
          const s = Object.assign({}, u);
          if (
            (void 0 !== t.baseAccount && null !== t.baseAccount
              ? (s.baseAccount = n.BaseAccount.fromPartial(t.baseAccount))
              : (s.baseAccount = void 0),
            (s.name = null !== (o = t.name) && void 0 !== o ? o : ""),
            (s.permissions = []),
            void 0 !== t.permissions && null !== t.permissions)
          )
            for (const n of t.permissions) s.permissions.push(n);
          return s;
        },
      };
      const c = {
        maxMemoCharacters: i.default.UZERO,
        txSigLimit: i.default.UZERO,
        txSizeCostPerByte: i.default.UZERO,
        sigVerifyCostEd25519: i.default.UZERO,
        sigVerifyCostSecp256k1: i.default.UZERO,
      };
      ((n.Params = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
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
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, c);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.maxMemoCharacters = o.uint64();
                break;
              case 2:
                i.txSigLimit = o.uint64();
                break;
              case 3:
                i.txSizeCostPerByte = o.uint64();
                break;
              case 4:
                i.sigVerifyCostEd25519 = o.uint64();
                break;
              case 5:
                i.sigVerifyCostSecp256k1 = o.uint64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.maxMemoCharacters && null !== t.maxMemoCharacters
              ? (n.maxMemoCharacters = i.default.fromString(
                  t.maxMemoCharacters,
                ))
              : (n.maxMemoCharacters = i.default.UZERO),
            void 0 !== t.txSigLimit && null !== t.txSigLimit
              ? (n.txSigLimit = i.default.fromString(t.txSigLimit))
              : (n.txSigLimit = i.default.UZERO),
            void 0 !== t.txSizeCostPerByte && null !== t.txSizeCostPerByte
              ? (n.txSizeCostPerByte = i.default.fromString(
                  t.txSizeCostPerByte,
                ))
              : (n.txSizeCostPerByte = i.default.UZERO),
            void 0 !== t.sigVerifyCostEd25519 && null !== t.sigVerifyCostEd25519
              ? (n.sigVerifyCostEd25519 = i.default.fromString(
                  t.sigVerifyCostEd25519,
                ))
              : (n.sigVerifyCostEd25519 = i.default.UZERO),
            void 0 !== t.sigVerifyCostSecp256k1 &&
            null !== t.sigVerifyCostSecp256k1
              ? (n.sigVerifyCostSecp256k1 = i.default.fromString(
                  t.sigVerifyCostSecp256k1,
                ))
              : (n.sigVerifyCostSecp256k1 = i.default.UZERO),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.maxMemoCharacters &&
              (n.maxMemoCharacters = (
                t.maxMemoCharacters || i.default.UZERO
              ).toString()),
            void 0 !== t.txSigLimit &&
              (n.txSigLimit = (t.txSigLimit || i.default.UZERO).toString()),
            void 0 !== t.txSizeCostPerByte &&
              (n.txSizeCostPerByte = (
                t.txSizeCostPerByte || i.default.UZERO
              ).toString()),
            void 0 !== t.sigVerifyCostEd25519 &&
              (n.sigVerifyCostEd25519 = (
                t.sigVerifyCostEd25519 || i.default.UZERO
              ).toString()),
            void 0 !== t.sigVerifyCostSecp256k1 &&
              (n.sigVerifyCostSecp256k1 = (
                t.sigVerifyCostSecp256k1 || i.default.UZERO
              ).toString()),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.maxMemoCharacters && null !== t.maxMemoCharacters
              ? (n.maxMemoCharacters = t.maxMemoCharacters)
              : (n.maxMemoCharacters = i.default.UZERO),
            void 0 !== t.txSigLimit && null !== t.txSigLimit
              ? (n.txSigLimit = t.txSigLimit)
              : (n.txSigLimit = i.default.UZERO),
            void 0 !== t.txSizeCostPerByte && null !== t.txSizeCostPerByte
              ? (n.txSizeCostPerByte = t.txSizeCostPerByte)
              : (n.txSizeCostPerByte = i.default.UZERO),
            void 0 !== t.sigVerifyCostEd25519 && null !== t.sigVerifyCostEd25519
              ? (n.sigVerifyCostEd25519 = t.sigVerifyCostEd25519)
              : (n.sigVerifyCostEd25519 = i.default.UZERO),
            void 0 !== t.sigVerifyCostSecp256k1 &&
            null !== t.sigVerifyCostSecp256k1
              ? (n.sigVerifyCostSecp256k1 = t.sigVerifyCostSecp256k1)
              : (n.sigVerifyCostSecp256k1 = i.default.UZERO),
            n
          );
        },
      }),
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure()));
    },
    3378: function (t, n, o) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MsgClientImpl =
          n.MsgMultiSendResponse =
          n.MsgMultiSend =
          n.MsgSendResponse =
          n.MsgSend =
          n.protobufPackage =
            void 0));
      const i = s(o(2754)),
        a = s(o(2755)),
        r = o(2801),
        d = o(3379);
      n.protobufPackage = "cosmos.bank.v1beta1";
      const u = { fromAddress: "", toAddress: "" };
      n.MsgSend = {
        encode(t, n) {
          (void 0 === n && (n = a.default.Writer.create()),
            "" !== t.fromAddress && n.uint32(10).string(t.fromAddress),
            "" !== t.toAddress && n.uint32(18).string(t.toAddress));
          for (const o of t.amount)
            r.Coin.encode(o, n.uint32(26).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, u);
          i.amount = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.fromAddress = o.string();
                break;
              case 2:
                i.toAddress = o.string();
                break;
              case 3:
                i.amount.push(r.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          if (
            ((n.amount = []),
            void 0 !== t.fromAddress && null !== t.fromAddress
              ? (n.fromAddress = String(t.fromAddress))
              : (n.fromAddress = ""),
            void 0 !== t.toAddress && null !== t.toAddress
              ? (n.toAddress = String(t.toAddress))
              : (n.toAddress = ""),
            void 0 !== t.amount && null !== t.amount)
          )
            for (const o of t.amount) n.amount.push(r.Coin.fromJSON(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.fromAddress && (n.fromAddress = t.fromAddress),
            void 0 !== t.toAddress && (n.toAddress = t.toAddress),
            t.amount
              ? (n.amount = t.amount.map((t) =>
                  t ? r.Coin.toJSON(t) : void 0,
                ))
              : (n.amount = []),
            n
          );
        },
        fromPartial(t) {
          var n, o;
          const s = Object.assign({}, u);
          if (
            ((s.fromAddress =
              null !== (n = t.fromAddress) && void 0 !== n ? n : ""),
            (s.toAddress = null !== (o = t.toAddress) && void 0 !== o ? o : ""),
            (s.amount = []),
            void 0 !== t.amount && null !== t.amount)
          )
            for (const i of t.amount) s.amount.push(r.Coin.fromPartial(i));
          return s;
        },
      };
      const c = {};
      n.MsgSendResponse = {
        encode(t, n) {
          return (void 0 === n && (n = a.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, c);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
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
      const l = {};
      n.MsgMultiSend = {
        encode(t, n) {
          void 0 === n && (n = a.default.Writer.create());
          for (const o of t.inputs)
            d.Input.encode(o, n.uint32(10).fork()).ldelim();
          for (const o of t.outputs)
            d.Output.encode(o, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, l);
          ((i.inputs = []), (i.outputs = []));
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.inputs.push(d.Input.decode(o, o.uint32()));
                break;
              case 2:
                i.outputs.push(d.Output.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          if (
            ((n.inputs = []),
            (n.outputs = []),
            void 0 !== t.inputs && null !== t.inputs)
          )
            for (const o of t.inputs) n.inputs.push(d.Input.fromJSON(o));
          if (void 0 !== t.outputs && null !== t.outputs)
            for (const o of t.outputs) n.outputs.push(d.Output.fromJSON(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            t.inputs
              ? (n.inputs = t.inputs.map((t) =>
                  t ? d.Input.toJSON(t) : void 0,
                ))
              : (n.inputs = []),
            t.outputs
              ? (n.outputs = t.outputs.map((t) =>
                  t ? d.Output.toJSON(t) : void 0,
                ))
              : (n.outputs = []),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          if (((n.inputs = []), void 0 !== t.inputs && null !== t.inputs))
            for (const o of t.inputs) n.inputs.push(d.Input.fromPartial(o));
          if (((n.outputs = []), void 0 !== t.outputs && null !== t.outputs))
            for (const o of t.outputs) n.outputs.push(d.Output.fromPartial(o));
          return n;
        },
      };
      const f = {};
      n.MsgMultiSendResponse = {
        encode(t, n) {
          return (void 0 === n && (n = a.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, f);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          return n;
        },
      };
      class MsgClientImpl {
        constructor(t) {
          ((this.rpc = t),
            (this.Send = this.Send.bind(this)),
            (this.MultiSend = this.MultiSend.bind(this)));
        }
        Send(t) {
          const o = n.MsgSend.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", o);
          return s.then((t) =>
            n.MsgSendResponse.decode(new a.default.Reader(t)),
          );
        }
        MultiSend(t) {
          const o = n.MsgMultiSend.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", o);
          return s.then((t) =>
            n.MsgMultiSendResponse.decode(new a.default.Reader(t)),
          );
        }
      }
      ((n.MsgClientImpl = MsgClientImpl),
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure()));
    },
    3379: function (t, n, o) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Metadata =
          n.DenomUnit =
          n.Supply =
          n.Output =
          n.Input =
          n.SendEnabled =
          n.Params =
          n.protobufPackage =
            void 0));
      const i = s(o(2754)),
        a = s(o(2755)),
        r = o(2801);
      n.protobufPackage = "cosmos.bank.v1beta1";
      const d = { defaultSendEnabled: !1 };
      n.Params = {
        encode(t, o) {
          void 0 === o && (o = a.default.Writer.create());
          for (const s of t.sendEnabled)
            n.SendEnabled.encode(s, o.uint32(10).fork()).ldelim();
          return (
            !0 === t.defaultSendEnabled &&
              o.uint32(16).bool(t.defaultSendEnabled),
            o
          );
        },
        decode(t, o) {
          const s = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let i = void 0 === o ? s.len : s.pos + o;
          const r = Object.assign({}, d);
          r.sendEnabled = [];
          while (s.pos < i) {
            const t = s.uint32();
            switch (t >>> 3) {
              case 1:
                r.sendEnabled.push(n.SendEnabled.decode(s, s.uint32()));
                break;
              case 2:
                r.defaultSendEnabled = s.bool();
                break;
              default:
                s.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const o = Object.assign({}, d);
          if (
            ((o.sendEnabled = []),
            void 0 !== t.sendEnabled && null !== t.sendEnabled)
          )
            for (const s of t.sendEnabled)
              o.sendEnabled.push(n.SendEnabled.fromJSON(s));
          return (
            void 0 !== t.defaultSendEnabled && null !== t.defaultSendEnabled
              ? (o.defaultSendEnabled = Boolean(t.defaultSendEnabled))
              : (o.defaultSendEnabled = !1),
            o
          );
        },
        toJSON(t) {
          const o = {};
          return (
            t.sendEnabled
              ? (o.sendEnabled = t.sendEnabled.map((t) =>
                  t ? n.SendEnabled.toJSON(t) : void 0,
                ))
              : (o.sendEnabled = []),
            void 0 !== t.defaultSendEnabled &&
              (o.defaultSendEnabled = t.defaultSendEnabled),
            o
          );
        },
        fromPartial(t) {
          var o;
          const s = Object.assign({}, d);
          if (
            ((s.sendEnabled = []),
            void 0 !== t.sendEnabled && null !== t.sendEnabled)
          )
            for (const i of t.sendEnabled)
              s.sendEnabled.push(n.SendEnabled.fromPartial(i));
          return (
            (s.defaultSendEnabled =
              null !== (o = t.defaultSendEnabled) && void 0 !== o && o),
            s
          );
        },
      };
      const u = { denom: "", enabled: !1 };
      n.SendEnabled = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            !0 === t.enabled && n.uint32(16).bool(t.enabled),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, u);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = o.string();
                break;
              case 2:
                i.enabled = o.bool();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.enabled && null !== t.enabled
              ? (n.enabled = Boolean(t.enabled))
              : (n.enabled = !1),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.enabled && (n.enabled = t.enabled),
            n
          );
        },
        fromPartial(t) {
          var n, o;
          const s = Object.assign({}, u);
          return (
            (s.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (s.enabled = null !== (o = t.enabled) && void 0 !== o && o),
            s
          );
        },
      };
      const c = { address: "" };
      n.Input = {
        encode(t, n) {
          (void 0 === n && (n = a.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address));
          for (const o of t.coins)
            r.Coin.encode(o, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, c);
          i.coins = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = o.string();
                break;
              case 2:
                i.coins.push(r.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          if (
            ((n.coins = []),
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const o of t.coins) n.coins.push(r.Coin.fromJSON(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            t.coins
              ? (n.coins = t.coins.map((t) => (t ? r.Coin.toJSON(t) : void 0)))
              : (n.coins = []),
            n
          );
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, c);
          if (
            ((o.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            (o.coins = []),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const s of t.coins) o.coins.push(r.Coin.fromPartial(s));
          return o;
        },
      };
      const l = { address: "" };
      n.Output = {
        encode(t, n) {
          (void 0 === n && (n = a.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address));
          for (const o of t.coins)
            r.Coin.encode(o, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, l);
          i.coins = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = o.string();
                break;
              case 2:
                i.coins.push(r.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          if (
            ((n.coins = []),
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const o of t.coins) n.coins.push(r.Coin.fromJSON(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            t.coins
              ? (n.coins = t.coins.map((t) => (t ? r.Coin.toJSON(t) : void 0)))
              : (n.coins = []),
            n
          );
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, l);
          if (
            ((o.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            (o.coins = []),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const s of t.coins) o.coins.push(r.Coin.fromPartial(s));
          return o;
        },
      };
      const f = {};
      n.Supply = {
        encode(t, n) {
          void 0 === n && (n = a.default.Writer.create());
          for (const o of t.total)
            r.Coin.encode(o, n.uint32(10).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, f);
          i.total = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.total.push(r.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          if (((n.total = []), void 0 !== t.total && null !== t.total))
            for (const o of t.total) n.total.push(r.Coin.fromJSON(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            t.total
              ? (n.total = t.total.map((t) => (t ? r.Coin.toJSON(t) : void 0)))
              : (n.total = []),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          if (((n.total = []), void 0 !== t.total && null !== t.total))
            for (const o of t.total) n.total.push(r.Coin.fromPartial(o));
          return n;
        },
      };
      const p = { denom: "", exponent: 0, aliases: "" };
      n.DenomUnit = {
        encode(t, n) {
          (void 0 === n && (n = a.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            0 !== t.exponent && n.uint32(16).uint32(t.exponent));
          for (const o of t.aliases) n.uint32(26).string(o);
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, p);
          i.aliases = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = o.string();
                break;
              case 2:
                i.exponent = o.uint32();
                break;
              case 3:
                i.aliases.push(o.string());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, p);
          if (
            ((n.aliases = []),
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.exponent && null !== t.exponent
              ? (n.exponent = Number(t.exponent))
              : (n.exponent = 0),
            void 0 !== t.aliases && null !== t.aliases)
          )
            for (const o of t.aliases) n.aliases.push(String(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.exponent && (n.exponent = t.exponent),
            t.aliases
              ? (n.aliases = t.aliases.map((t) => t))
              : (n.aliases = []),
            n
          );
        },
        fromPartial(t) {
          var n, o;
          const s = Object.assign({}, p);
          if (
            ((s.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (s.exponent = null !== (o = t.exponent) && void 0 !== o ? o : 0),
            (s.aliases = []),
            void 0 !== t.aliases && null !== t.aliases)
          )
            for (const i of t.aliases) s.aliases.push(i);
          return s;
        },
      };
      const m = { description: "", base: "", display: "" };
      ((n.Metadata = {
        encode(t, o) {
          (void 0 === o && (o = a.default.Writer.create()),
            "" !== t.description && o.uint32(10).string(t.description));
          for (const s of t.denomUnits)
            n.DenomUnit.encode(s, o.uint32(18).fork()).ldelim();
          return (
            "" !== t.base && o.uint32(26).string(t.base),
            "" !== t.display && o.uint32(34).string(t.display),
            o
          );
        },
        decode(t, o) {
          const s = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let i = void 0 === o ? s.len : s.pos + o;
          const r = Object.assign({}, m);
          r.denomUnits = [];
          while (s.pos < i) {
            const t = s.uint32();
            switch (t >>> 3) {
              case 1:
                r.description = s.string();
                break;
              case 2:
                r.denomUnits.push(n.DenomUnit.decode(s, s.uint32()));
                break;
              case 3:
                r.base = s.string();
                break;
              case 4:
                r.display = s.string();
                break;
              default:
                s.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const o = Object.assign({}, m);
          if (
            ((o.denomUnits = []),
            void 0 !== t.description && null !== t.description
              ? (o.description = String(t.description))
              : (o.description = ""),
            void 0 !== t.denomUnits && null !== t.denomUnits)
          )
            for (const s of t.denomUnits)
              o.denomUnits.push(n.DenomUnit.fromJSON(s));
          return (
            void 0 !== t.base && null !== t.base
              ? (o.base = String(t.base))
              : (o.base = ""),
            void 0 !== t.display && null !== t.display
              ? (o.display = String(t.display))
              : (o.display = ""),
            o
          );
        },
        toJSON(t) {
          const o = {};
          return (
            void 0 !== t.description && (o.description = t.description),
            t.denomUnits
              ? (o.denomUnits = t.denomUnits.map((t) =>
                  t ? n.DenomUnit.toJSON(t) : void 0,
                ))
              : (o.denomUnits = []),
            void 0 !== t.base && (o.base = t.base),
            void 0 !== t.display && (o.display = t.display),
            o
          );
        },
        fromPartial(t) {
          var o, s, i;
          const a = Object.assign({}, m);
          if (
            ((a.description =
              null !== (o = t.description) && void 0 !== o ? o : ""),
            (a.denomUnits = []),
            void 0 !== t.denomUnits && null !== t.denomUnits)
          )
            for (const r of t.denomUnits)
              a.denomUnits.push(n.DenomUnit.fromPartial(r));
          return (
            (a.base = null !== (s = t.base) && void 0 !== s ? s : ""),
            (a.display = null !== (i = t.display) && void 0 !== i ? i : ""),
            a
          );
        },
      }),
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure()));
    },
    3571: function (t, n, o) {
      "use strict";
      (function (t) {
        var s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.CompressedNonExistenceProof =
            n.CompressedExistenceProof =
            n.CompressedBatchEntry =
            n.CompressedBatchProof =
            n.BatchEntry =
            n.BatchProof =
            n.InnerSpec =
            n.ProofSpec =
            n.InnerOp =
            n.LeafOp =
            n.CommitmentProof =
            n.NonExistenceProof =
            n.ExistenceProof =
            n.lengthOpToJSON =
            n.lengthOpFromJSON =
            n.LengthOp =
            n.hashOpToJSON =
            n.hashOpFromJSON =
            n.HashOp =
            n.protobufPackage =
              void 0));
        const i = s(o(2754)),
          a = s(o(2755));
        var r, d;
        function u(t) {
          switch (t) {
            case 0:
            case "NO_HASH":
              return r.NO_HASH;
            case 1:
            case "SHA256":
              return r.SHA256;
            case 2:
            case "SHA512":
              return r.SHA512;
            case 3:
            case "KECCAK":
              return r.KECCAK;
            case 4:
            case "RIPEMD160":
              return r.RIPEMD160;
            case 5:
            case "BITCOIN":
              return r.BITCOIN;
            case -1:
            case "UNRECOGNIZED":
            default:
              return r.UNRECOGNIZED;
          }
        }
        function c(t) {
          switch (t) {
            case r.NO_HASH:
              return "NO_HASH";
            case r.SHA256:
              return "SHA256";
            case r.SHA512:
              return "SHA512";
            case r.KECCAK:
              return "KECCAK";
            case r.RIPEMD160:
              return "RIPEMD160";
            case r.BITCOIN:
              return "BITCOIN";
            default:
              return "UNKNOWN";
          }
        }
        function l(t) {
          switch (t) {
            case 0:
            case "NO_PREFIX":
              return d.NO_PREFIX;
            case 1:
            case "VAR_PROTO":
              return d.VAR_PROTO;
            case 2:
            case "VAR_RLP":
              return d.VAR_RLP;
            case 3:
            case "FIXED32_BIG":
              return d.FIXED32_BIG;
            case 4:
            case "FIXED32_LITTLE":
              return d.FIXED32_LITTLE;
            case 5:
            case "FIXED64_BIG":
              return d.FIXED64_BIG;
            case 6:
            case "FIXED64_LITTLE":
              return d.FIXED64_LITTLE;
            case 7:
            case "REQUIRE_32_BYTES":
              return d.REQUIRE_32_BYTES;
            case 8:
            case "REQUIRE_64_BYTES":
              return d.REQUIRE_64_BYTES;
            case -1:
            case "UNRECOGNIZED":
            default:
              return d.UNRECOGNIZED;
          }
        }
        function f(t) {
          switch (t) {
            case d.NO_PREFIX:
              return "NO_PREFIX";
            case d.VAR_PROTO:
              return "VAR_PROTO";
            case d.VAR_RLP:
              return "VAR_RLP";
            case d.FIXED32_BIG:
              return "FIXED32_BIG";
            case d.FIXED32_LITTLE:
              return "FIXED32_LITTLE";
            case d.FIXED64_BIG:
              return "FIXED64_BIG";
            case d.FIXED64_LITTLE:
              return "FIXED64_LITTLE";
            case d.REQUIRE_32_BYTES:
              return "REQUIRE_32_BYTES";
            case d.REQUIRE_64_BYTES:
              return "REQUIRE_64_BYTES";
            default:
              return "UNKNOWN";
          }
        }
        ((n.protobufPackage = "ics23"),
          (function (t) {
            ((t[(t["NO_HASH"] = 0)] = "NO_HASH"),
              (t[(t["SHA256"] = 1)] = "SHA256"),
              (t[(t["SHA512"] = 2)] = "SHA512"),
              (t[(t["KECCAK"] = 3)] = "KECCAK"),
              (t[(t["RIPEMD160"] = 4)] = "RIPEMD160"),
              (t[(t["BITCOIN"] = 5)] = "BITCOIN"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((r = n.HashOp || (n.HashOp = {}))),
          (n.hashOpFromJSON = u),
          (n.hashOpToJSON = c),
          (function (t) {
            ((t[(t["NO_PREFIX"] = 0)] = "NO_PREFIX"),
              (t[(t["VAR_PROTO"] = 1)] = "VAR_PROTO"),
              (t[(t["VAR_RLP"] = 2)] = "VAR_RLP"),
              (t[(t["FIXED32_BIG"] = 3)] = "FIXED32_BIG"),
              (t[(t["FIXED32_LITTLE"] = 4)] = "FIXED32_LITTLE"),
              (t[(t["FIXED64_BIG"] = 5)] = "FIXED64_BIG"),
              (t[(t["FIXED64_LITTLE"] = 6)] = "FIXED64_LITTLE"),
              (t[(t["REQUIRE_32_BYTES"] = 7)] = "REQUIRE_32_BYTES"),
              (t[(t["REQUIRE_64_BYTES"] = 8)] = "REQUIRE_64_BYTES"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((d = n.LengthOp || (n.LengthOp = {}))),
          (n.lengthOpFromJSON = l),
          (n.lengthOpToJSON = f));
        const p = {};
        n.ExistenceProof = {
          encode(t, o) {
            (void 0 === o && (o = a.default.Writer.create()),
              0 !== t.key.length && o.uint32(10).bytes(t.key),
              0 !== t.value.length && o.uint32(18).bytes(t.value),
              void 0 !== t.leaf &&
                n.LeafOp.encode(t.leaf, o.uint32(26).fork()).ldelim());
            for (const s of t.path)
              n.InnerOp.encode(s, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, p);
            ((r.path = []),
              (r.key = new Uint8Array()),
              (r.value = new Uint8Array()));
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.key = s.bytes();
                  break;
                case 2:
                  r.value = s.bytes();
                  break;
                case 3:
                  r.leaf = n.LeafOp.decode(s, s.uint32());
                  break;
                case 4:
                  r.path.push(n.InnerOp.decode(s, s.uint32()));
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, p);
            if (
              ((o.path = []),
              (o.key = new Uint8Array()),
              (o.value = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (o.key = w(t.key)),
              void 0 !== t.value && null !== t.value && (o.value = w(t.value)),
              void 0 !== t.leaf && null !== t.leaf
                ? (o.leaf = n.LeafOp.fromJSON(t.leaf))
                : (o.leaf = void 0),
              void 0 !== t.path && null !== t.path)
            )
              for (const s of t.path) o.path.push(n.InnerOp.fromJSON(s));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.key &&
                (o.key = A(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.value &&
                (o.value = A(void 0 !== t.value ? t.value : new Uint8Array())),
              void 0 !== t.leaf &&
                (o.leaf = t.leaf ? n.LeafOp.toJSON(t.leaf) : void 0),
              t.path
                ? (o.path = t.path.map((t) =>
                    t ? n.InnerOp.toJSON(t) : void 0,
                  ))
                : (o.path = []),
              o
            );
          },
          fromPartial(t) {
            var o, s;
            const i = Object.assign({}, p);
            if (
              ((i.key =
                null !== (o = t.key) && void 0 !== o ? o : new Uint8Array()),
              (i.value =
                null !== (s = t.value) && void 0 !== s ? s : new Uint8Array()),
              void 0 !== t.leaf && null !== t.leaf
                ? (i.leaf = n.LeafOp.fromPartial(t.leaf))
                : (i.leaf = void 0),
              (i.path = []),
              void 0 !== t.path && null !== t.path)
            )
              for (const a of t.path) i.path.push(n.InnerOp.fromPartial(a));
            return i;
          },
        };
        const m = {};
        n.NonExistenceProof = {
          encode(t, o) {
            return (
              void 0 === o && (o = a.default.Writer.create()),
              0 !== t.key.length && o.uint32(10).bytes(t.key),
              void 0 !== t.left &&
                n.ExistenceProof.encode(t.left, o.uint32(18).fork()).ldelim(),
              void 0 !== t.right &&
                n.ExistenceProof.encode(t.right, o.uint32(26).fork()).ldelim(),
              o
            );
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, m);
            r.key = new Uint8Array();
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.key = s.bytes();
                  break;
                case 2:
                  r.left = n.ExistenceProof.decode(s, s.uint32());
                  break;
                case 3:
                  r.right = n.ExistenceProof.decode(s, s.uint32());
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, m);
            return (
              (o.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (o.key = w(t.key)),
              void 0 !== t.left && null !== t.left
                ? (o.left = n.ExistenceProof.fromJSON(t.left))
                : (o.left = void 0),
              void 0 !== t.right && null !== t.right
                ? (o.right = n.ExistenceProof.fromJSON(t.right))
                : (o.right = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.key &&
                (o.key = A(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.left &&
                (o.left = t.left ? n.ExistenceProof.toJSON(t.left) : void 0),
              void 0 !== t.right &&
                (o.right = t.right ? n.ExistenceProof.toJSON(t.right) : void 0),
              o
            );
          },
          fromPartial(t) {
            var o;
            const s = Object.assign({}, m);
            return (
              (s.key =
                null !== (o = t.key) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== t.left && null !== t.left
                ? (s.left = n.ExistenceProof.fromPartial(t.left))
                : (s.left = void 0),
              void 0 !== t.right && null !== t.right
                ? (s.right = n.ExistenceProof.fromPartial(t.right))
                : (s.right = void 0),
              s
            );
          },
        };
        const h = {};
        n.CommitmentProof = {
          encode(t, o) {
            return (
              void 0 === o && (o = a.default.Writer.create()),
              void 0 !== t.exist &&
                n.ExistenceProof.encode(t.exist, o.uint32(10).fork()).ldelim(),
              void 0 !== t.nonexist &&
                n.NonExistenceProof.encode(
                  t.nonexist,
                  o.uint32(18).fork(),
                ).ldelim(),
              void 0 !== t.batch &&
                n.BatchProof.encode(t.batch, o.uint32(26).fork()).ldelim(),
              void 0 !== t.compressed &&
                n.CompressedBatchProof.encode(
                  t.compressed,
                  o.uint32(34).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, h);
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.exist = n.ExistenceProof.decode(s, s.uint32());
                  break;
                case 2:
                  r.nonexist = n.NonExistenceProof.decode(s, s.uint32());
                  break;
                case 3:
                  r.batch = n.BatchProof.decode(s, s.uint32());
                  break;
                case 4:
                  r.compressed = n.CompressedBatchProof.decode(s, s.uint32());
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, h);
            return (
              void 0 !== t.exist && null !== t.exist
                ? (o.exist = n.ExistenceProof.fromJSON(t.exist))
                : (o.exist = void 0),
              void 0 !== t.nonexist && null !== t.nonexist
                ? (o.nonexist = n.NonExistenceProof.fromJSON(t.nonexist))
                : (o.nonexist = void 0),
              void 0 !== t.batch && null !== t.batch
                ? (o.batch = n.BatchProof.fromJSON(t.batch))
                : (o.batch = void 0),
              void 0 !== t.compressed && null !== t.compressed
                ? (o.compressed = n.CompressedBatchProof.fromJSON(t.compressed))
                : (o.compressed = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.exist &&
                (o.exist = t.exist ? n.ExistenceProof.toJSON(t.exist) : void 0),
              void 0 !== t.nonexist &&
                (o.nonexist = t.nonexist
                  ? n.NonExistenceProof.toJSON(t.nonexist)
                  : void 0),
              void 0 !== t.batch &&
                (o.batch = t.batch ? n.BatchProof.toJSON(t.batch) : void 0),
              void 0 !== t.compressed &&
                (o.compressed = t.compressed
                  ? n.CompressedBatchProof.toJSON(t.compressed)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, h);
            return (
              void 0 !== t.exist && null !== t.exist
                ? (o.exist = n.ExistenceProof.fromPartial(t.exist))
                : (o.exist = void 0),
              void 0 !== t.nonexist && null !== t.nonexist
                ? (o.nonexist = n.NonExistenceProof.fromPartial(t.nonexist))
                : (o.nonexist = void 0),
              void 0 !== t.batch && null !== t.batch
                ? (o.batch = n.BatchProof.fromPartial(t.batch))
                : (o.batch = void 0),
              void 0 !== t.compressed && null !== t.compressed
                ? (o.compressed = n.CompressedBatchProof.fromPartial(
                    t.compressed,
                  ))
                : (o.compressed = void 0),
              o
            );
          },
        };
        const v = { hash: 0, prehashKey: 0, prehashValue: 0, length: 0 };
        n.LeafOp = {
          encode(t, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              0 !== t.hash && n.uint32(8).int32(t.hash),
              0 !== t.prehashKey && n.uint32(16).int32(t.prehashKey),
              0 !== t.prehashValue && n.uint32(24).int32(t.prehashValue),
              0 !== t.length && n.uint32(32).int32(t.length),
              0 !== t.prefix.length && n.uint32(42).bytes(t.prefix),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, v);
            i.prefix = new Uint8Array();
            while (o.pos < s) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  i.hash = o.int32();
                  break;
                case 2:
                  i.prehashKey = o.int32();
                  break;
                case 3:
                  i.prehashValue = o.int32();
                  break;
                case 4:
                  i.length = o.int32();
                  break;
                case 5:
                  i.prefix = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, v);
            return (
              (n.prefix = new Uint8Array()),
              void 0 !== t.hash && null !== t.hash
                ? (n.hash = u(t.hash))
                : (n.hash = 0),
              void 0 !== t.prehashKey && null !== t.prehashKey
                ? (n.prehashKey = u(t.prehashKey))
                : (n.prehashKey = 0),
              void 0 !== t.prehashValue && null !== t.prehashValue
                ? (n.prehashValue = u(t.prehashValue))
                : (n.prehashValue = 0),
              void 0 !== t.length && null !== t.length
                ? (n.length = l(t.length))
                : (n.length = 0),
              void 0 !== t.prefix &&
                null !== t.prefix &&
                (n.prefix = w(t.prefix)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.hash && (n.hash = c(t.hash)),
              void 0 !== t.prehashKey && (n.prehashKey = c(t.prehashKey)),
              void 0 !== t.prehashValue && (n.prehashValue = c(t.prehashValue)),
              void 0 !== t.length && (n.length = f(t.length)),
              void 0 !== t.prefix &&
                (n.prefix = A(
                  void 0 !== t.prefix ? t.prefix : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            var n, o, s, i, a;
            const r = Object.assign({}, v);
            return (
              (r.hash = null !== (n = t.hash) && void 0 !== n ? n : 0),
              (r.prehashKey =
                null !== (o = t.prehashKey) && void 0 !== o ? o : 0),
              (r.prehashValue =
                null !== (s = t.prehashValue) && void 0 !== s ? s : 0),
              (r.length = null !== (i = t.length) && void 0 !== i ? i : 0),
              (r.prefix =
                null !== (a = t.prefix) && void 0 !== a ? a : new Uint8Array()),
              r
            );
          },
        };
        const b = { hash: 0 };
        n.InnerOp = {
          encode(t, n) {
            return (
              void 0 === n && (n = a.default.Writer.create()),
              0 !== t.hash && n.uint32(8).int32(t.hash),
              0 !== t.prefix.length && n.uint32(18).bytes(t.prefix),
              0 !== t.suffix.length && n.uint32(26).bytes(t.suffix),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, b);
            ((i.prefix = new Uint8Array()), (i.suffix = new Uint8Array()));
            while (o.pos < s) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  i.hash = o.int32();
                  break;
                case 2:
                  i.prefix = o.bytes();
                  break;
                case 3:
                  i.suffix = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, b);
            return (
              (n.prefix = new Uint8Array()),
              (n.suffix = new Uint8Array()),
              void 0 !== t.hash && null !== t.hash
                ? (n.hash = u(t.hash))
                : (n.hash = 0),
              void 0 !== t.prefix &&
                null !== t.prefix &&
                (n.prefix = w(t.prefix)),
              void 0 !== t.suffix &&
                null !== t.suffix &&
                (n.suffix = w(t.suffix)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.hash && (n.hash = c(t.hash)),
              void 0 !== t.prefix &&
                (n.prefix = A(
                  void 0 !== t.prefix ? t.prefix : new Uint8Array(),
                )),
              void 0 !== t.suffix &&
                (n.suffix = A(
                  void 0 !== t.suffix ? t.suffix : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            var n, o, s;
            const i = Object.assign({}, b);
            return (
              (i.hash = null !== (n = t.hash) && void 0 !== n ? n : 0),
              (i.prefix =
                null !== (o = t.prefix) && void 0 !== o ? o : new Uint8Array()),
              (i.suffix =
                null !== (s = t.suffix) && void 0 !== s ? s : new Uint8Array()),
              i
            );
          },
        };
        const g = { maxDepth: 0, minDepth: 0 };
        n.ProofSpec = {
          encode(t, o) {
            return (
              void 0 === o && (o = a.default.Writer.create()),
              void 0 !== t.leafSpec &&
                n.LeafOp.encode(t.leafSpec, o.uint32(10).fork()).ldelim(),
              void 0 !== t.innerSpec &&
                n.InnerSpec.encode(t.innerSpec, o.uint32(18).fork()).ldelim(),
              0 !== t.maxDepth && o.uint32(24).int32(t.maxDepth),
              0 !== t.minDepth && o.uint32(32).int32(t.minDepth),
              o
            );
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, g);
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.leafSpec = n.LeafOp.decode(s, s.uint32());
                  break;
                case 2:
                  r.innerSpec = n.InnerSpec.decode(s, s.uint32());
                  break;
                case 3:
                  r.maxDepth = s.int32();
                  break;
                case 4:
                  r.minDepth = s.int32();
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, g);
            return (
              void 0 !== t.leafSpec && null !== t.leafSpec
                ? (o.leafSpec = n.LeafOp.fromJSON(t.leafSpec))
                : (o.leafSpec = void 0),
              void 0 !== t.innerSpec && null !== t.innerSpec
                ? (o.innerSpec = n.InnerSpec.fromJSON(t.innerSpec))
                : (o.innerSpec = void 0),
              void 0 !== t.maxDepth && null !== t.maxDepth
                ? (o.maxDepth = Number(t.maxDepth))
                : (o.maxDepth = 0),
              void 0 !== t.minDepth && null !== t.minDepth
                ? (o.minDepth = Number(t.minDepth))
                : (o.minDepth = 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.leafSpec &&
                (o.leafSpec = t.leafSpec
                  ? n.LeafOp.toJSON(t.leafSpec)
                  : void 0),
              void 0 !== t.innerSpec &&
                (o.innerSpec = t.innerSpec
                  ? n.InnerSpec.toJSON(t.innerSpec)
                  : void 0),
              void 0 !== t.maxDepth && (o.maxDepth = t.maxDepth),
              void 0 !== t.minDepth && (o.minDepth = t.minDepth),
              o
            );
          },
          fromPartial(t) {
            var o, s;
            const i = Object.assign({}, g);
            return (
              void 0 !== t.leafSpec && null !== t.leafSpec
                ? (i.leafSpec = n.LeafOp.fromPartial(t.leafSpec))
                : (i.leafSpec = void 0),
              void 0 !== t.innerSpec && null !== t.innerSpec
                ? (i.innerSpec = n.InnerSpec.fromPartial(t.innerSpec))
                : (i.innerSpec = void 0),
              (i.maxDepth = null !== (o = t.maxDepth) && void 0 !== o ? o : 0),
              (i.minDepth = null !== (s = t.minDepth) && void 0 !== s ? s : 0),
              i
            );
          },
        };
        const y = {
          childOrder: 0,
          childSize: 0,
          minPrefixLength: 0,
          maxPrefixLength: 0,
          hash: 0,
        };
        n.InnerSpec = {
          encode(t, n) {
            (void 0 === n && (n = a.default.Writer.create()),
              n.uint32(10).fork());
            for (const o of t.childOrder) n.int32(o);
            return (
              n.ldelim(),
              0 !== t.childSize && n.uint32(16).int32(t.childSize),
              0 !== t.minPrefixLength && n.uint32(24).int32(t.minPrefixLength),
              0 !== t.maxPrefixLength && n.uint32(32).int32(t.maxPrefixLength),
              0 !== t.emptyChild.length && n.uint32(42).bytes(t.emptyChild),
              0 !== t.hash && n.uint32(48).int32(t.hash),
              n
            );
          },
          decode(t, n) {
            const o =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let s = void 0 === n ? o.len : o.pos + n;
            const i = Object.assign({}, y);
            ((i.childOrder = []), (i.emptyChild = new Uint8Array()));
            while (o.pos < s) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  if (2 === (7 & t)) {
                    const t = o.uint32() + o.pos;
                    while (o.pos < t) i.childOrder.push(o.int32());
                  } else i.childOrder.push(o.int32());
                  break;
                case 2:
                  i.childSize = o.int32();
                  break;
                case 3:
                  i.minPrefixLength = o.int32();
                  break;
                case 4:
                  i.maxPrefixLength = o.int32();
                  break;
                case 5:
                  i.emptyChild = o.bytes();
                  break;
                case 6:
                  i.hash = o.int32();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, y);
            if (
              ((n.childOrder = []),
              (n.emptyChild = new Uint8Array()),
              void 0 !== t.childOrder && null !== t.childOrder)
            )
              for (const o of t.childOrder) n.childOrder.push(Number(o));
            return (
              void 0 !== t.childSize && null !== t.childSize
                ? (n.childSize = Number(t.childSize))
                : (n.childSize = 0),
              void 0 !== t.minPrefixLength && null !== t.minPrefixLength
                ? (n.minPrefixLength = Number(t.minPrefixLength))
                : (n.minPrefixLength = 0),
              void 0 !== t.maxPrefixLength && null !== t.maxPrefixLength
                ? (n.maxPrefixLength = Number(t.maxPrefixLength))
                : (n.maxPrefixLength = 0),
              void 0 !== t.emptyChild &&
                null !== t.emptyChild &&
                (n.emptyChild = w(t.emptyChild)),
              void 0 !== t.hash && null !== t.hash
                ? (n.hash = u(t.hash))
                : (n.hash = 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              t.childOrder
                ? (n.childOrder = t.childOrder.map((t) => t))
                : (n.childOrder = []),
              void 0 !== t.childSize && (n.childSize = t.childSize),
              void 0 !== t.minPrefixLength &&
                (n.minPrefixLength = t.minPrefixLength),
              void 0 !== t.maxPrefixLength &&
                (n.maxPrefixLength = t.maxPrefixLength),
              void 0 !== t.emptyChild &&
                (n.emptyChild = A(
                  void 0 !== t.emptyChild ? t.emptyChild : new Uint8Array(),
                )),
              void 0 !== t.hash && (n.hash = c(t.hash)),
              n
            );
          },
          fromPartial(t) {
            var n, o, s, i, a;
            const r = Object.assign({}, y);
            if (
              ((r.childOrder = []),
              void 0 !== t.childOrder && null !== t.childOrder)
            )
              for (const d of t.childOrder) r.childOrder.push(d);
            return (
              (r.childSize =
                null !== (n = t.childSize) && void 0 !== n ? n : 0),
              (r.minPrefixLength =
                null !== (o = t.minPrefixLength) && void 0 !== o ? o : 0),
              (r.maxPrefixLength =
                null !== (s = t.maxPrefixLength) && void 0 !== s ? s : 0),
              (r.emptyChild =
                null !== (i = t.emptyChild) && void 0 !== i
                  ? i
                  : new Uint8Array()),
              (r.hash = null !== (a = t.hash) && void 0 !== a ? a : 0),
              r
            );
          },
        };
        const O = {};
        n.BatchProof = {
          encode(t, o) {
            void 0 === o && (o = a.default.Writer.create());
            for (const s of t.entries)
              n.BatchEntry.encode(s, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, O);
            r.entries = [];
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.entries.push(n.BatchEntry.decode(s, s.uint32()));
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, O);
            if (((o.entries = []), void 0 !== t.entries && null !== t.entries))
              for (const s of t.entries)
                o.entries.push(n.BatchEntry.fromJSON(s));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              t.entries
                ? (o.entries = t.entries.map((t) =>
                    t ? n.BatchEntry.toJSON(t) : void 0,
                  ))
                : (o.entries = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, O);
            if (((o.entries = []), void 0 !== t.entries && null !== t.entries))
              for (const s of t.entries)
                o.entries.push(n.BatchEntry.fromPartial(s));
            return o;
          },
        };
        const S = {};
        n.BatchEntry = {
          encode(t, o) {
            return (
              void 0 === o && (o = a.default.Writer.create()),
              void 0 !== t.exist &&
                n.ExistenceProof.encode(t.exist, o.uint32(10).fork()).ldelim(),
              void 0 !== t.nonexist &&
                n.NonExistenceProof.encode(
                  t.nonexist,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, S);
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.exist = n.ExistenceProof.decode(s, s.uint32());
                  break;
                case 2:
                  r.nonexist = n.NonExistenceProof.decode(s, s.uint32());
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, S);
            return (
              void 0 !== t.exist && null !== t.exist
                ? (o.exist = n.ExistenceProof.fromJSON(t.exist))
                : (o.exist = void 0),
              void 0 !== t.nonexist && null !== t.nonexist
                ? (o.nonexist = n.NonExistenceProof.fromJSON(t.nonexist))
                : (o.nonexist = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.exist &&
                (o.exist = t.exist ? n.ExistenceProof.toJSON(t.exist) : void 0),
              void 0 !== t.nonexist &&
                (o.nonexist = t.nonexist
                  ? n.NonExistenceProof.toJSON(t.nonexist)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, S);
            return (
              void 0 !== t.exist && null !== t.exist
                ? (o.exist = n.ExistenceProof.fromPartial(t.exist))
                : (o.exist = void 0),
              void 0 !== t.nonexist && null !== t.nonexist
                ? (o.nonexist = n.NonExistenceProof.fromPartial(t.nonexist))
                : (o.nonexist = void 0),
              o
            );
          },
        };
        const k = {};
        n.CompressedBatchProof = {
          encode(t, o) {
            void 0 === o && (o = a.default.Writer.create());
            for (const s of t.entries)
              n.CompressedBatchEntry.encode(s, o.uint32(10).fork()).ldelim();
            for (const s of t.lookupInners)
              n.InnerOp.encode(s, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, k);
            ((r.entries = []), (r.lookupInners = []));
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.entries.push(n.CompressedBatchEntry.decode(s, s.uint32()));
                  break;
                case 2:
                  r.lookupInners.push(n.InnerOp.decode(s, s.uint32()));
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, k);
            if (
              ((o.entries = []),
              (o.lookupInners = []),
              void 0 !== t.entries && null !== t.entries)
            )
              for (const s of t.entries)
                o.entries.push(n.CompressedBatchEntry.fromJSON(s));
            if (void 0 !== t.lookupInners && null !== t.lookupInners)
              for (const s of t.lookupInners)
                o.lookupInners.push(n.InnerOp.fromJSON(s));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              t.entries
                ? (o.entries = t.entries.map((t) =>
                    t ? n.CompressedBatchEntry.toJSON(t) : void 0,
                  ))
                : (o.entries = []),
              t.lookupInners
                ? (o.lookupInners = t.lookupInners.map((t) =>
                    t ? n.InnerOp.toJSON(t) : void 0,
                  ))
                : (o.lookupInners = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, k);
            if (((o.entries = []), void 0 !== t.entries && null !== t.entries))
              for (const s of t.entries)
                o.entries.push(n.CompressedBatchEntry.fromPartial(s));
            if (
              ((o.lookupInners = []),
              void 0 !== t.lookupInners && null !== t.lookupInners)
            )
              for (const s of t.lookupInners)
                o.lookupInners.push(n.InnerOp.fromPartial(s));
            return o;
          },
        };
        const x = {};
        n.CompressedBatchEntry = {
          encode(t, o) {
            return (
              void 0 === o && (o = a.default.Writer.create()),
              void 0 !== t.exist &&
                n.CompressedExistenceProof.encode(
                  t.exist,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.nonexist &&
                n.CompressedNonExistenceProof.encode(
                  t.nonexist,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, x);
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.exist = n.CompressedExistenceProof.decode(s, s.uint32());
                  break;
                case 2:
                  r.nonexist = n.CompressedNonExistenceProof.decode(
                    s,
                    s.uint32(),
                  );
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, x);
            return (
              void 0 !== t.exist && null !== t.exist
                ? (o.exist = n.CompressedExistenceProof.fromJSON(t.exist))
                : (o.exist = void 0),
              void 0 !== t.nonexist && null !== t.nonexist
                ? (o.nonexist = n.CompressedNonExistenceProof.fromJSON(
                    t.nonexist,
                  ))
                : (o.nonexist = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.exist &&
                (o.exist = t.exist
                  ? n.CompressedExistenceProof.toJSON(t.exist)
                  : void 0),
              void 0 !== t.nonexist &&
                (o.nonexist = t.nonexist
                  ? n.CompressedNonExistenceProof.toJSON(t.nonexist)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, x);
            return (
              void 0 !== t.exist && null !== t.exist
                ? (o.exist = n.CompressedExistenceProof.fromPartial(t.exist))
                : (o.exist = void 0),
              void 0 !== t.nonexist && null !== t.nonexist
                ? (o.nonexist = n.CompressedNonExistenceProof.fromPartial(
                    t.nonexist,
                  ))
                : (o.nonexist = void 0),
              o
            );
          },
        };
        const P = { path: 0 };
        n.CompressedExistenceProof = {
          encode(t, o) {
            (void 0 === o && (o = a.default.Writer.create()),
              0 !== t.key.length && o.uint32(10).bytes(t.key),
              0 !== t.value.length && o.uint32(18).bytes(t.value),
              void 0 !== t.leaf &&
                n.LeafOp.encode(t.leaf, o.uint32(26).fork()).ldelim(),
              o.uint32(34).fork());
            for (const n of t.path) o.int32(n);
            return (o.ldelim(), o);
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, P);
            ((r.path = []),
              (r.key = new Uint8Array()),
              (r.value = new Uint8Array()));
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.key = s.bytes();
                  break;
                case 2:
                  r.value = s.bytes();
                  break;
                case 3:
                  r.leaf = n.LeafOp.decode(s, s.uint32());
                  break;
                case 4:
                  if (2 === (7 & t)) {
                    const t = s.uint32() + s.pos;
                    while (s.pos < t) r.path.push(s.int32());
                  } else r.path.push(s.int32());
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, P);
            if (
              ((o.path = []),
              (o.key = new Uint8Array()),
              (o.value = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (o.key = w(t.key)),
              void 0 !== t.value && null !== t.value && (o.value = w(t.value)),
              void 0 !== t.leaf && null !== t.leaf
                ? (o.leaf = n.LeafOp.fromJSON(t.leaf))
                : (o.leaf = void 0),
              void 0 !== t.path && null !== t.path)
            )
              for (const n of t.path) o.path.push(Number(n));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.key &&
                (o.key = A(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.value &&
                (o.value = A(void 0 !== t.value ? t.value : new Uint8Array())),
              void 0 !== t.leaf &&
                (o.leaf = t.leaf ? n.LeafOp.toJSON(t.leaf) : void 0),
              t.path ? (o.path = t.path.map((t) => t)) : (o.path = []),
              o
            );
          },
          fromPartial(t) {
            var o, s;
            const i = Object.assign({}, P);
            if (
              ((i.key =
                null !== (o = t.key) && void 0 !== o ? o : new Uint8Array()),
              (i.value =
                null !== (s = t.value) && void 0 !== s ? s : new Uint8Array()),
              void 0 !== t.leaf && null !== t.leaf
                ? (i.leaf = n.LeafOp.fromPartial(t.leaf))
                : (i.leaf = void 0),
              (i.path = []),
              void 0 !== t.path && null !== t.path)
            )
              for (const n of t.path) i.path.push(n);
            return i;
          },
        };
        const R = {};
        n.CompressedNonExistenceProof = {
          encode(t, o) {
            return (
              void 0 === o && (o = a.default.Writer.create()),
              0 !== t.key.length && o.uint32(10).bytes(t.key),
              void 0 !== t.left &&
                n.CompressedExistenceProof.encode(
                  t.left,
                  o.uint32(18).fork(),
                ).ldelim(),
              void 0 !== t.right &&
                n.CompressedExistenceProof.encode(
                  t.right,
                  o.uint32(26).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const s =
              t instanceof a.default.Reader ? t : new a.default.Reader(t);
            let i = void 0 === o ? s.len : s.pos + o;
            const r = Object.assign({}, R);
            r.key = new Uint8Array();
            while (s.pos < i) {
              const t = s.uint32();
              switch (t >>> 3) {
                case 1:
                  r.key = s.bytes();
                  break;
                case 2:
                  r.left = n.CompressedExistenceProof.decode(s, s.uint32());
                  break;
                case 3:
                  r.right = n.CompressedExistenceProof.decode(s, s.uint32());
                  break;
                default:
                  s.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const o = Object.assign({}, R);
            return (
              (o.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (o.key = w(t.key)),
              void 0 !== t.left && null !== t.left
                ? (o.left = n.CompressedExistenceProof.fromJSON(t.left))
                : (o.left = void 0),
              void 0 !== t.right && null !== t.right
                ? (o.right = n.CompressedExistenceProof.fromJSON(t.right))
                : (o.right = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.key &&
                (o.key = A(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.left &&
                (o.left = t.left
                  ? n.CompressedExistenceProof.toJSON(t.left)
                  : void 0),
              void 0 !== t.right &&
                (o.right = t.right
                  ? n.CompressedExistenceProof.toJSON(t.right)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            var o;
            const s = Object.assign({}, R);
            return (
              (s.key =
                null !== (o = t.key) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== t.left && null !== t.left
                ? (s.left = n.CompressedExistenceProof.fromPartial(t.left))
                : (s.left = void 0),
              void 0 !== t.right && null !== t.right
                ? (s.right = n.CompressedExistenceProof.fromPartial(t.right))
                : (s.right = void 0),
              s
            );
          },
        };
        var E = (() => {
          if ("undefined" !== typeof E) return E;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const N =
          E.atob || ((t) => E.Buffer.from(t, "base64").toString("binary"));
        function w(t) {
          const n = N(t),
            o = new Uint8Array(n.length);
          for (let s = 0; s < n.length; ++s) o[s] = n.charCodeAt(s);
          return o;
        }
        const C =
          E.btoa || ((t) => E.Buffer.from(t, "binary").toString("base64"));
        function A(t) {
          const n = [];
          for (const o of t) n.push(String.fromCharCode(o));
          return C(n.join(""));
        }
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure());
      }).call(this, o(13));
    },
    3695: function (t, n, o) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ripemd160 = n.RIPEMD160 = n.md5 = n.MD5 = n.sha1 = n.SHA1 = void 0));
      const s = o(825),
        i = o(130),
        a = Uint32Array.from([
          1732584193, 4023233417, 2562383102, 271733878, 3285377520,
        ]),
        r = new Uint32Array(80);
      class SHA1 extends s.HashMD {
        constructor() {
          (super(64, 20, 8, !1),
            (this.A = 0 | a[0]),
            (this.B = 0 | a[1]),
            (this.C = 0 | a[2]),
            (this.D = 0 | a[3]),
            (this.E = 0 | a[4]));
        }
        get() {
          const { A: t, B: n, C: o, D: s, E: i } = this;
          return [t, n, o, s, i];
        }
        set(t, n, o, s, i) {
          ((this.A = 0 | t),
            (this.B = 0 | n),
            (this.C = 0 | o),
            (this.D = 0 | s),
            (this.E = 0 | i));
        }
        process(t, n) {
          for (let s = 0; s < 16; s++, n += 4) r[s] = t.getUint32(n, !1);
          for (let s = 16; s < 80; s++)
            r[s] = (0, i.rotl)(r[s - 3] ^ r[s - 8] ^ r[s - 14] ^ r[s - 16], 1);
          let { A: o, B: a, C: d, D: u, E: c } = this;
          for (let l = 0; l < 80; l++) {
            let t, n;
            l < 20
              ? ((t = (0, s.Chi)(a, d, u)), (n = 1518500249))
              : l < 40
                ? ((t = a ^ d ^ u), (n = 1859775393))
                : l < 60
                  ? ((t = (0, s.Maj)(a, d, u)), (n = 2400959708))
                  : ((t = a ^ d ^ u), (n = 3395469782));
            const f = ((0, i.rotl)(o, 5) + t + c + n + r[l]) | 0;
            ((c = u), (u = d), (d = (0, i.rotl)(a, 30)), (a = o), (o = f));
          }
          ((o = (o + this.A) | 0),
            (a = (a + this.B) | 0),
            (d = (d + this.C) | 0),
            (u = (u + this.D) | 0),
            (c = (c + this.E) | 0),
            this.set(o, a, d, u, c));
        }
        roundClean() {
          (0, i.clean)(r);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0), (0, i.clean)(this.buffer));
        }
      }
      ((n.SHA1 = SHA1), (n.sha1 = (0, i.createHasher)(() => new SHA1())));
      const d = Math.pow(2, 32),
        u = Array.from({ length: 64 }, (t, n) =>
          Math.floor(d * Math.abs(Math.sin(n + 1))),
        ),
        c = a.slice(0, 4),
        l = new Uint32Array(16);
      class MD5 extends s.HashMD {
        constructor() {
          (super(64, 16, 8, !0),
            (this.A = 0 | c[0]),
            (this.B = 0 | c[1]),
            (this.C = 0 | c[2]),
            (this.D = 0 | c[3]));
        }
        get() {
          const { A: t, B: n, C: o, D: s } = this;
          return [t, n, o, s];
        }
        set(t, n, o, s) {
          ((this.A = 0 | t),
            (this.B = 0 | n),
            (this.C = 0 | o),
            (this.D = 0 | s));
        }
        process(t, n) {
          for (let s = 0; s < 16; s++, n += 4) l[s] = t.getUint32(n, !0);
          let { A: o, B: a, C: r, D: d } = this;
          for (let c = 0; c < 64; c++) {
            let t, n, f;
            (c < 16
              ? ((t = (0, s.Chi)(a, r, d)), (n = c), (f = [7, 12, 17, 22]))
              : c < 32
                ? ((t = (0, s.Chi)(d, a, r)),
                  (n = (5 * c + 1) % 16),
                  (f = [5, 9, 14, 20]))
                : c < 48
                  ? ((t = a ^ r ^ d),
                    (n = (3 * c + 5) % 16),
                    (f = [4, 11, 16, 23]))
                  : ((t = r ^ (a | ~d)),
                    (n = (7 * c) % 16),
                    (f = [6, 10, 15, 21])),
              (t = t + o + u[c] + l[n]),
              (o = d),
              (d = r),
              (r = a),
              (a += (0, i.rotl)(t, f[c % 4])));
          }
          ((o = (o + this.A) | 0),
            (a = (a + this.B) | 0),
            (r = (r + this.C) | 0),
            (d = (d + this.D) | 0),
            this.set(o, a, r, d));
        }
        roundClean() {
          (0, i.clean)(l);
        }
        destroy() {
          (this.set(0, 0, 0, 0), (0, i.clean)(this.buffer));
        }
      }
      ((n.MD5 = MD5), (n.md5 = (0, i.createHasher)(() => new MD5())));
      const f = Uint8Array.from([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        p = (() => Uint8Array.from(new Array(16).fill(0).map((t, n) => n)))(),
        m = (() => p.map((t) => (9 * t + 5) % 16))(),
        h = (() => {
          const t = [p],
            n = [m],
            o = [t, n];
          for (let s = 0; s < 4; s++)
            for (let t of o) t.push(t[s].map((t) => f[t]));
          return o;
        })(),
        v = (() => h[0])(),
        b = (() => h[1])(),
        g = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((t) => Uint8Array.from(t)),
        y = v.map((t, n) => t.map((t) => g[n][t])),
        O = b.map((t, n) => t.map((t) => g[n][t])),
        S = Uint32Array.from([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        k = Uint32Array.from([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]);
      function x(t, n, o, s) {
        return 0 === t
          ? n ^ o ^ s
          : 1 === t
            ? (n & o) | (~n & s)
            : 2 === t
              ? (n | ~o) ^ s
              : 3 === t
                ? (n & s) | (o & ~s)
                : n ^ (o | ~s);
      }
      const P = new Uint32Array(16);
      class RIPEMD160 extends s.HashMD {
        constructor() {
          (super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776));
        }
        get() {
          const { h0: t, h1: n, h2: o, h3: s, h4: i } = this;
          return [t, n, o, s, i];
        }
        set(t, n, o, s, i) {
          ((this.h0 = 0 | t),
            (this.h1 = 0 | n),
            (this.h2 = 0 | o),
            (this.h3 = 0 | s),
            (this.h4 = 0 | i));
        }
        process(t, n) {
          for (let i = 0; i < 16; i++, n += 4) P[i] = t.getUint32(n, !0);
          let o = 0 | this.h0,
            s = o,
            a = 0 | this.h1,
            r = a,
            d = 0 | this.h2,
            u = d,
            c = 0 | this.h3,
            l = c,
            f = 0 | this.h4,
            p = f;
          for (let m = 0; m < 5; m++) {
            const t = 4 - m,
              n = S[m],
              h = k[m],
              g = v[m],
              R = b[m],
              E = y[m],
              N = O[m];
            for (let s = 0; s < 16; s++) {
              const t =
                ((0, i.rotl)(o + x(m, a, d, c) + P[g[s]] + n, E[s]) + f) | 0;
              ((o = f),
                (f = c),
                (c = 0 | (0, i.rotl)(d, 10)),
                (d = a),
                (a = t));
            }
            for (let o = 0; o < 16; o++) {
              const n =
                ((0, i.rotl)(s + x(t, r, u, l) + P[R[o]] + h, N[o]) + p) | 0;
              ((s = p),
                (p = l),
                (l = 0 | (0, i.rotl)(u, 10)),
                (u = r),
                (r = n));
            }
          }
          this.set(
            (this.h1 + d + l) | 0,
            (this.h2 + c + p) | 0,
            (this.h3 + f + s) | 0,
            (this.h4 + o + r) | 0,
            (this.h0 + a + u) | 0,
          );
        }
        roundClean() {
          (0, i.clean)(P);
        }
        destroy() {
          ((this.destroyed = !0),
            (0, i.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0));
        }
      }
      ((n.RIPEMD160 = RIPEMD160),
        (n.ripemd160 = (0, i.createHasher)(() => new RIPEMD160())));
    },
    4414: function (t, n, o) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ripemd160 = n.RIPEMD160 = void 0));
      const s = o(3695);
      ((n.RIPEMD160 = s.RIPEMD160), (n.ripemd160 = s.ripemd160));
    },
    4426: function (t, n, o) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.QueryClientImpl =
          n.QueryParamsResponse =
          n.QueryParamsRequest =
          n.QueryAccountResponse =
          n.QueryAccountRequest =
          n.protobufPackage =
            void 0));
      const i = s(o(2754)),
        a = s(o(2755)),
        r = o(2781),
        d = o(3323);
      n.protobufPackage = "cosmos.auth.v1beta1";
      const u = { address: "" };
      n.QueryAccountRequest = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, u);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.address && (n.address = t.address), n);
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, u);
          return (
            (o.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            o
          );
        },
      };
      const c = {};
      n.QueryAccountResponse = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.account &&
              r.Any.encode(t.account, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, c);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.account = r.Any.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.account && null !== t.account
              ? (n.account = r.Any.fromJSON(t.account))
              : (n.account = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.account &&
              (n.account = t.account ? r.Any.toJSON(t.account) : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.account && null !== t.account
              ? (n.account = r.Any.fromPartial(t.account))
              : (n.account = void 0),
            n
          );
        },
      };
      const l = {};
      n.QueryParamsRequest = {
        encode(t, n) {
          return (void 0 === n && (n = a.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, l);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          return n;
        },
      };
      const f = {};
      n.QueryParamsResponse = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.params &&
              d.Params.encode(t.params, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, f);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.params = d.Params.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.params && null !== t.params
              ? (n.params = d.Params.fromJSON(t.params))
              : (n.params = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.params &&
              (n.params = t.params ? d.Params.toJSON(t.params) : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.params && null !== t.params
              ? (n.params = d.Params.fromPartial(t.params))
              : (n.params = void 0),
            n
          );
        },
      };
      class QueryClientImpl {
        constructor(t) {
          ((this.rpc = t),
            (this.Account = this.Account.bind(this)),
            (this.Params = this.Params.bind(this)));
        }
        Account(t) {
          const o = n.QueryAccountRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", o);
          return s.then((t) =>
            n.QueryAccountResponse.decode(new a.default.Reader(t)),
          );
        }
        Params(t) {
          const o = n.QueryParamsRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", o);
          return s.then((t) =>
            n.QueryParamsResponse.decode(new a.default.Reader(t)),
          );
        }
      }
      ((n.QueryClientImpl = QueryClientImpl),
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure()));
    },
    4428: function (t, n, o) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.QueryClientImpl =
          n.QueryDenomMetadataResponse =
          n.QueryDenomMetadataRequest =
          n.QueryDenomsMetadataResponse =
          n.QueryDenomsMetadataRequest =
          n.QueryParamsResponse =
          n.QueryParamsRequest =
          n.QuerySupplyOfResponse =
          n.QuerySupplyOfRequest =
          n.QueryTotalSupplyResponse =
          n.QueryTotalSupplyRequest =
          n.QueryAllBalancesResponse =
          n.QueryAllBalancesRequest =
          n.QueryBalanceResponse =
          n.QueryBalanceRequest =
          n.protobufPackage =
            void 0));
      const i = s(o(2754)),
        a = s(o(2755)),
        r = o(2801),
        d = o(2926),
        u = o(3379);
      n.protobufPackage = "cosmos.bank.v1beta1";
      const c = { address: "", denom: "" };
      n.QueryBalanceRequest = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address),
            "" !== t.denom && n.uint32(18).string(t.denom),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, c);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = o.string();
                break;
              case 2:
                i.denom = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            void 0 !== t.denom && (n.denom = t.denom),
            n
          );
        },
        fromPartial(t) {
          var n, o;
          const s = Object.assign({}, c);
          return (
            (s.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            (s.denom = null !== (o = t.denom) && void 0 !== o ? o : ""),
            s
          );
        },
      };
      const l = {};
      n.QueryBalanceResponse = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.balance &&
              r.Coin.encode(t.balance, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, l);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.balance = r.Coin.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.balance && null !== t.balance
              ? (n.balance = r.Coin.fromJSON(t.balance))
              : (n.balance = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.balance &&
              (n.balance = t.balance ? r.Coin.toJSON(t.balance) : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          return (
            void 0 !== t.balance && null !== t.balance
              ? (n.balance = r.Coin.fromPartial(t.balance))
              : (n.balance = void 0),
            n
          );
        },
      };
      const f = { address: "" };
      n.QueryAllBalancesRequest = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address),
            void 0 !== t.pagination &&
              d.PageRequest.encode(t.pagination, n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, f);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = o.string();
                break;
              case 2:
                i.pagination = d.PageRequest.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          return (
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageRequest.fromJSON(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            void 0 !== t.pagination &&
              (n.pagination = t.pagination
                ? d.PageRequest.toJSON(t.pagination)
                : void 0),
            n
          );
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, f);
          return (
            (o.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            void 0 !== t.pagination && null !== t.pagination
              ? (o.pagination = d.PageRequest.fromPartial(t.pagination))
              : (o.pagination = void 0),
            o
          );
        },
      };
      const p = {};
      n.QueryAllBalancesResponse = {
        encode(t, n) {
          void 0 === n && (n = a.default.Writer.create());
          for (const o of t.balances)
            r.Coin.encode(o, n.uint32(10).fork()).ldelim();
          return (
            void 0 !== t.pagination &&
              d.PageResponse.encode(t.pagination, n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, p);
          i.balances = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.balances.push(r.Coin.decode(o, o.uint32()));
                break;
              case 2:
                i.pagination = d.PageResponse.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, p);
          if (((n.balances = []), void 0 !== t.balances && null !== t.balances))
            for (const o of t.balances) n.balances.push(r.Coin.fromJSON(o));
          return (
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageResponse.fromJSON(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            t.balances
              ? (n.balances = t.balances.map((t) =>
                  t ? r.Coin.toJSON(t) : void 0,
                ))
              : (n.balances = []),
            void 0 !== t.pagination &&
              (n.pagination = t.pagination
                ? d.PageResponse.toJSON(t.pagination)
                : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, p);
          if (((n.balances = []), void 0 !== t.balances && null !== t.balances))
            for (const o of t.balances) n.balances.push(r.Coin.fromPartial(o));
          return (
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageResponse.fromPartial(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
      };
      const m = {};
      n.QueryTotalSupplyRequest = {
        encode(t, n) {
          return (void 0 === n && (n = a.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, m);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
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
      const h = {};
      n.QueryTotalSupplyResponse = {
        encode(t, n) {
          void 0 === n && (n = a.default.Writer.create());
          for (const o of t.supply)
            r.Coin.encode(o, n.uint32(10).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, h);
          i.supply = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.supply.push(r.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, h);
          if (((n.supply = []), void 0 !== t.supply && null !== t.supply))
            for (const o of t.supply) n.supply.push(r.Coin.fromJSON(o));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            t.supply
              ? (n.supply = t.supply.map((t) =>
                  t ? r.Coin.toJSON(t) : void 0,
                ))
              : (n.supply = []),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, h);
          if (((n.supply = []), void 0 !== t.supply && null !== t.supply))
            for (const o of t.supply) n.supply.push(r.Coin.fromPartial(o));
          return n;
        },
      };
      const v = { denom: "" };
      n.QuerySupplyOfRequest = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, v);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, v);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.denom && (n.denom = t.denom), n);
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, v);
          return (
            (o.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            o
          );
        },
      };
      const b = {};
      n.QuerySupplyOfResponse = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.amount &&
              r.Coin.encode(t.amount, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, b);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.amount = r.Coin.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, b);
          return (
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = r.Coin.fromJSON(t.amount))
              : (n.amount = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.amount &&
              (n.amount = t.amount ? r.Coin.toJSON(t.amount) : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, b);
          return (
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = r.Coin.fromPartial(t.amount))
              : (n.amount = void 0),
            n
          );
        },
      };
      const g = {};
      n.QueryParamsRequest = {
        encode(t, n) {
          return (void 0 === n && (n = a.default.Writer.create()), n);
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, g);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, g);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, g);
          return n;
        },
      };
      const y = {};
      n.QueryParamsResponse = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.params &&
              u.Params.encode(t.params, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, y);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.params = u.Params.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, y);
          return (
            void 0 !== t.params && null !== t.params
              ? (n.params = u.Params.fromJSON(t.params))
              : (n.params = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.params &&
              (n.params = t.params ? u.Params.toJSON(t.params) : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, y);
          return (
            void 0 !== t.params && null !== t.params
              ? (n.params = u.Params.fromPartial(t.params))
              : (n.params = void 0),
            n
          );
        },
      };
      const O = {};
      n.QueryDenomsMetadataRequest = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.pagination &&
              d.PageRequest.encode(t.pagination, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, O);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.pagination = d.PageRequest.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, O);
          return (
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageRequest.fromJSON(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.pagination &&
              (n.pagination = t.pagination
                ? d.PageRequest.toJSON(t.pagination)
                : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, O);
          return (
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageRequest.fromPartial(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
      };
      const S = {};
      n.QueryDenomsMetadataResponse = {
        encode(t, n) {
          void 0 === n && (n = a.default.Writer.create());
          for (const o of t.metadatas)
            u.Metadata.encode(o, n.uint32(10).fork()).ldelim();
          return (
            void 0 !== t.pagination &&
              d.PageResponse.encode(t.pagination, n.uint32(18).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, S);
          i.metadatas = [];
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.metadatas.push(u.Metadata.decode(o, o.uint32()));
                break;
              case 2:
                i.pagination = d.PageResponse.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, S);
          if (
            ((n.metadatas = []), void 0 !== t.metadatas && null !== t.metadatas)
          )
            for (const o of t.metadatas)
              n.metadatas.push(u.Metadata.fromJSON(o));
          return (
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageResponse.fromJSON(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            t.metadatas
              ? (n.metadatas = t.metadatas.map((t) =>
                  t ? u.Metadata.toJSON(t) : void 0,
                ))
              : (n.metadatas = []),
            void 0 !== t.pagination &&
              (n.pagination = t.pagination
                ? d.PageResponse.toJSON(t.pagination)
                : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, S);
          if (
            ((n.metadatas = []), void 0 !== t.metadatas && null !== t.metadatas)
          )
            for (const o of t.metadatas)
              n.metadatas.push(u.Metadata.fromPartial(o));
          return (
            void 0 !== t.pagination && null !== t.pagination
              ? (n.pagination = d.PageResponse.fromPartial(t.pagination))
              : (n.pagination = void 0),
            n
          );
        },
      };
      const k = { denom: "" };
      n.QueryDenomMetadataRequest = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, k);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, k);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.denom && (n.denom = t.denom), n);
        },
        fromPartial(t) {
          var n;
          const o = Object.assign({}, k);
          return (
            (o.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            o
          );
        },
      };
      const x = {};
      n.QueryDenomMetadataResponse = {
        encode(t, n) {
          return (
            void 0 === n && (n = a.default.Writer.create()),
            void 0 !== t.metadata &&
              u.Metadata.encode(t.metadata, n.uint32(10).fork()).ldelim(),
            n
          );
        },
        decode(t, n) {
          const o = t instanceof a.default.Reader ? t : new a.default.Reader(t);
          let s = void 0 === n ? o.len : o.pos + n;
          const i = Object.assign({}, x);
          while (o.pos < s) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                i.metadata = u.Metadata.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, x);
          return (
            void 0 !== t.metadata && null !== t.metadata
              ? (n.metadata = u.Metadata.fromJSON(t.metadata))
              : (n.metadata = void 0),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.metadata &&
              (n.metadata = t.metadata
                ? u.Metadata.toJSON(t.metadata)
                : void 0),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, x);
          return (
            void 0 !== t.metadata && null !== t.metadata
              ? (n.metadata = u.Metadata.fromPartial(t.metadata))
              : (n.metadata = void 0),
            n
          );
        },
      };
      class QueryClientImpl {
        constructor(t) {
          ((this.rpc = t),
            (this.Balance = this.Balance.bind(this)),
            (this.AllBalances = this.AllBalances.bind(this)),
            (this.TotalSupply = this.TotalSupply.bind(this)),
            (this.SupplyOf = this.SupplyOf.bind(this)),
            (this.Params = this.Params.bind(this)),
            (this.DenomMetadata = this.DenomMetadata.bind(this)),
            (this.DenomsMetadata = this.DenomsMetadata.bind(this)));
        }
        Balance(t) {
          const o = n.QueryBalanceRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", o);
          return s.then((t) =>
            n.QueryBalanceResponse.decode(new a.default.Reader(t)),
          );
        }
        AllBalances(t) {
          const o = n.QueryAllBalancesRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", o);
          return s.then((t) =>
            n.QueryAllBalancesResponse.decode(new a.default.Reader(t)),
          );
        }
        TotalSupply(t) {
          const o = n.QueryTotalSupplyRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", o);
          return s.then((t) =>
            n.QueryTotalSupplyResponse.decode(new a.default.Reader(t)),
          );
        }
        SupplyOf(t) {
          const o = n.QuerySupplyOfRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", o);
          return s.then((t) =>
            n.QuerySupplyOfResponse.decode(new a.default.Reader(t)),
          );
        }
        Params(t) {
          const o = n.QueryParamsRequest.encode(t).finish(),
            s = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", o);
          return s.then((t) =>
            n.QueryParamsResponse.decode(new a.default.Reader(t)),
          );
        }
        DenomMetadata(t) {
          const o = n.QueryDenomMetadataRequest.encode(t).finish(),
            s = this.rpc.request(
              "cosmos.bank.v1beta1.Query",
              "DenomMetadata",
              o,
            );
          return s.then((t) =>
            n.QueryDenomMetadataResponse.decode(new a.default.Reader(t)),
          );
        }
        DenomsMetadata(t) {
          const o = n.QueryDenomsMetadataRequest.encode(t).finish(),
            s = this.rpc.request(
              "cosmos.bank.v1beta1.Query",
              "DenomsMetadata",
              o,
            );
          return s.then((t) =>
            n.QueryDenomsMetadataResponse.decode(new a.default.Reader(t)),
          );
        }
      }
      ((n.QueryClientImpl = QueryClientImpl),
        a.default.util.Long !== i.default &&
          ((a.default.util.Long = i.default), a.default.configure()));
    },
  },
]);
