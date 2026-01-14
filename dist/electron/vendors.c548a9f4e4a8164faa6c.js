(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [165],
  {
    2758: function (t, e, r) {
      var n = r(2848),
        i = r(2813),
        o = n.tfJSON,
        u = n.TfTypeError,
        f = n.TfPropertyTypeError,
        s = n.tfSubError,
        c = n.getValueTypeName,
        a = {
          arrayOf: function (t, e) {
            function r(r, n) {
              return (
                !!i.Array(r) &&
                !i.Nil(r) &&
                !(void 0 !== e.minLength && r.length < e.minLength) &&
                !(void 0 !== e.maxLength && r.length > e.maxLength) &&
                (void 0 === e.length || r.length === e.length) &&
                r.every(function (e, r) {
                  try {
                    return p(t, e, n);
                  } catch (i) {
                    throw s(i, r);
                  }
                })
              );
            }
            return (
              (t = h(t)),
              (e = e || {}),
              (r.toJSON = function () {
                var r = "[" + o(t) + "]";
                return (
                  void 0 !== e.length
                    ? (r += "{" + e.length + "}")
                    : (void 0 === e.minLength && void 0 === e.maxLength) ||
                      (r +=
                        "{" +
                        (void 0 === e.minLength ? 0 : e.minLength) +
                        "," +
                        (void 0 === e.maxLength ? 1 / 0 : e.maxLength) +
                        "}"),
                  r
                );
              }),
              r
            );
          },
          maybe: function t(e) {
            function r(r, n) {
              return i.Nil(r) || e(r, n, t);
            }
            return (
              (e = h(e)),
              (r.toJSON = function () {
                return "?" + o(e);
              }),
              r
            );
          },
          map: function (t, e) {
            function r(r, n) {
              if (!i.Object(r)) return !1;
              if (i.Nil(r)) return !1;
              for (var o in r) {
                try {
                  e && p(e, o, n);
                } catch (f) {
                  throw s(f, o, "key");
                }
                try {
                  var u = r[o];
                  p(t, u, n);
                } catch (f) {
                  throw s(f, o);
                }
              }
              return !0;
            }
            return (
              (t = h(t)),
              e && (e = h(e)),
              (r.toJSON = e
                ? function () {
                    return "{" + o(e) + ": " + o(t) + "}";
                  }
                : function () {
                    return "{" + o(t) + "}";
                  }),
              r
            );
          },
          object: function (t) {
            var e = {};
            for (var r in t) e[r] = h(t[r]);
            function n(t, r) {
              if (!i.Object(t)) return !1;
              if (i.Nil(t)) return !1;
              var n;
              try {
                for (n in e) {
                  var o = e[n],
                    u = t[n];
                  p(o, u, r);
                }
              } catch (c) {
                throw s(c, n);
              }
              if (r) for (n in t) if (!e[n]) throw new f(void 0, n);
              return !0;
            }
            return (
              (n.toJSON = function () {
                return o(e);
              }),
              n
            );
          },
          anyOf: function () {
            var t = [].slice.call(arguments).map(h);
            function e(e, r) {
              return t.some(function (t) {
                try {
                  return p(t, e, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(o).join("|");
              }),
              e
            );
          },
          allOf: function () {
            var t = [].slice.call(arguments).map(h);
            function e(e, r) {
              return t.every(function (t) {
                try {
                  return p(t, e, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(o).join(" & ");
              }),
              e
            );
          },
          quacksLike: function (t) {
            function e(e) {
              return t === c(e);
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
          tuple: function () {
            var t = [].slice.call(arguments).map(h);
            function e(e, r) {
              return (
                !i.Nil(e) &&
                !i.Nil(e.length) &&
                (!r || e.length === t.length) &&
                t.every(function (t, n) {
                  try {
                    return p(t, e[n], r);
                  } catch (i) {
                    throw s(i, n);
                  }
                })
              );
            }
            return (
              (e.toJSON = function () {
                return "(" + t.map(o).join(", ") + ")";
              }),
              e
            );
          },
          value: function (t) {
            function e(e) {
              return e === t;
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
        };
      function h(t) {
        if (i.String(t))
          return "?" === t[0] ? a.maybe(t.slice(1)) : i[t] || a.quacksLike(t);
        if (t && i.Object(t)) {
          if (i.Array(t)) {
            if (1 !== t.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1",
              );
            return a.arrayOf(t[0]);
          }
          return a.object(t);
        }
        return i.Function(t) ? t : a.value(t);
      }
      function p(t, e, r, n) {
        if (i.Function(t)) {
          if (t(e, r)) return !0;
          throw new u(n || t, e);
        }
        return p(h(t), e, r);
      }
      for (var l in ((a.oneOf = a.anyOf), i)) p[l] = i[l];
      for (l in a) p[l] = a[l];
      var d = r(2954);
      for (l in d) p[l] = d[l];
      ((p.compile = h),
        (p.TfTypeError = u),
        (p.TfPropertyTypeError = f),
        (t.exports = p));
    },
    2771: function (t) {
      t.exports = JSON.parse(
        '{"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}',
      );
    },
    2802: function (t, e, r) {
      var BigInteger = r(3048);
      (r(3268), (t.exports = BigInteger));
    },
    2813: function (t, e) {
      var r = {
        Array: function (t) {
          return null !== t && void 0 !== t && t.constructor === Array;
        },
        Boolean: function (t) {
          return "boolean" === typeof t;
        },
        Function: function (t) {
          return "function" === typeof t;
        },
        Nil: function (t) {
          return void 0 === t || null === t;
        },
        Number: function (t) {
          return "number" === typeof t;
        },
        Object: function (t) {
          return "object" === typeof t;
        },
        String: function (t) {
          return "string" === typeof t;
        },
        "": function () {
          return !0;
        },
      };
      for (var n in ((r.Null = r.Nil), r))
        r[n].toJSON = function (t) {
          return t;
        }.bind(null, n);
      t.exports = r;
    },
    2838: function (t, e, r) {
      (function (e) {
        var n = r(2792);
        function i(t, e) {
          if (void 0 !== e && t[0] !== e)
            throw new Error("Invalid network version");
          if (33 === t.length)
            return {
              version: t[0],
              privateKey: t.slice(1, 33),
              compressed: !1,
            };
          if (34 !== t.length) throw new Error("Invalid WIF length");
          if (1 !== t[33]) throw new Error("Invalid compression flag");
          return { version: t[0], privateKey: t.slice(1, 33), compressed: !0 };
        }
        function o(t, r, n) {
          var i = new e(n ? 34 : 33);
          return (i.writeUInt8(t, 0), r.copy(i, 1), n && (i[33] = 1), i);
        }
        function u(t, e) {
          return i(n.decode(t), e);
        }
        function f(t, e, r) {
          return "number" === typeof t
            ? n.encode(o(t, e, r))
            : n.encode(o(t.version, t.privateKey, t.compressed));
        }
        t.exports = { decode: u, decodeRaw: i, encode: f, encodeRaw: o };
      }).call(this, r(2).Buffer);
    },
    2848: function (t, e, r) {
      var n = r(2813);
      function i(t) {
        return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
      }
      function o(t) {
        return n.Nil(t) ? "" : i(t.constructor);
      }
      function u(t) {
        return n.Function(t)
          ? ""
          : n.String(t)
            ? JSON.stringify(t)
            : t && n.Object(t)
              ? ""
              : t;
      }
      function f(t, e) {
        Error.captureStackTrace && Error.captureStackTrace(t, e);
      }
      function s(t) {
        return n.Function(t)
          ? t.toJSON
            ? t.toJSON()
            : i(t)
          : n.Array(t)
            ? "Array"
            : t && n.Object(t)
              ? "Object"
              : void 0 !== t
                ? t
                : "";
      }
      function c(t, e, r) {
        var n = u(e);
        return (
          "Expected " +
          s(t) +
          ", got" +
          ("" !== r ? " " + r : "") +
          ("" !== n ? " " + n : "")
        );
      }
      function a(t, e, r) {
        ((r = r || o(e)),
          (this.message = c(t, e, r)),
          f(this, a),
          (this.__type = t),
          (this.__value = e),
          (this.__valueTypeName = r));
      }
      function h(t, e, r, n, i) {
        var o = '" of type ';
        return (
          "key" === e && (o = '" with key type '),
          c('property "' + s(r) + o + s(t), n, i)
        );
      }
      function p(t, e, r, n, i) {
        (t
          ? ((i = i || o(n)), (this.message = h(t, r, e, n, i)))
          : (this.message = 'Unexpected property "' + e + '"'),
          f(this, a),
          (this.__label = r),
          (this.__property = e),
          (this.__type = t),
          (this.__value = n),
          (this.__valueTypeName = i));
      }
      function l(t, e) {
        return new a(t, {}, e);
      }
      function d(t, e, r) {
        return (
          t instanceof p
            ? ((e = e + "." + t.__property),
              (t = new p(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
            : t instanceof a &&
              (t = new p(t.__type, e, r, t.__value, t.__valueTypeName)),
          f(t),
          t
        );
      }
      ((a.prototype = Object.create(Error.prototype)),
        (a.prototype.constructor = a),
        (p.prototype = Object.create(Error.prototype)),
        (p.prototype.constructor = a),
        (t.exports = {
          TfTypeError: a,
          TfPropertyTypeError: p,
          tfCustomError: l,
          tfSubError: d,
          tfJSON: s,
          getValueTypeName: o,
        }));
    },
    2864: function (t, e, r) {
      "use strict";
      var n = r(46).Buffer,
        i = 9007199254740991;
      function o(t) {
        if (t < 0 || t > i || t % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function u(t, e, r) {
        if ((o(t), e || (e = n.allocUnsafe(s(t))), !n.isBuffer(e)))
          throw new TypeError("buffer must be a Buffer instance");
        return (
          r || (r = 0),
          t < 253
            ? (e.writeUInt8(t, r), (u.bytes = 1))
            : t <= 65535
              ? (e.writeUInt8(253, r), e.writeUInt16LE(t, r + 1), (u.bytes = 3))
              : t <= 4294967295
                ? (e.writeUInt8(254, r),
                  e.writeUInt32LE(t, r + 1),
                  (u.bytes = 5))
                : (e.writeUInt8(255, r),
                  e.writeUInt32LE(t >>> 0, r + 1),
                  e.writeUInt32LE((t / 4294967296) | 0, r + 5),
                  (u.bytes = 9)),
          e
        );
      }
      function f(t, e) {
        if (!n.isBuffer(t))
          throw new TypeError("buffer must be a Buffer instance");
        e || (e = 0);
        var r = t.readUInt8(e);
        if (r < 253) return ((f.bytes = 1), r);
        if (253 === r) return ((f.bytes = 3), t.readUInt16LE(e + 1));
        if (254 === r) return ((f.bytes = 5), t.readUInt32LE(e + 1));
        f.bytes = 9;
        var i = t.readUInt32LE(e + 1),
          u = t.readUInt32LE(e + 5),
          s = 4294967296 * u + i;
        return (o(s), s);
      }
      function s(t) {
        return (o(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9);
      }
      t.exports = { encode: u, decode: f, encodingLength: s };
    },
    2898: function (t, e, r) {
      var n = r(46).Buffer;
      function i(t) {
        if (t.length < 8) return !1;
        if (t.length > 72) return !1;
        if (48 !== t[0]) return !1;
        if (t[1] !== t.length - 2) return !1;
        if (2 !== t[2]) return !1;
        var e = t[3];
        if (0 === e) return !1;
        if (5 + e >= t.length) return !1;
        if (2 !== t[4 + e]) return !1;
        var r = t[5 + e];
        return (
          0 !== r &&
          6 + e + r === t.length &&
          !(128 & t[4]) &&
          !(e > 1 && 0 === t[4] && !(128 & t[5])) &&
          !(128 & t[e + 6]) &&
          !(r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
        );
      }
      function o(t) {
        if (t.length < 8) throw new Error("DER sequence length is too short");
        if (t.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== t[0]) throw new Error("Expected DER sequence");
        if (t[1] !== t.length - 2)
          throw new Error("DER sequence length is invalid");
        if (2 !== t[2]) throw new Error("Expected DER integer");
        var e = t[3];
        if (0 === e) throw new Error("R length is zero");
        if (5 + e >= t.length) throw new Error("R length is too long");
        if (2 !== t[4 + e]) throw new Error("Expected DER integer (2)");
        var r = t[5 + e];
        if (0 === r) throw new Error("S length is zero");
        if (6 + e + r !== t.length) throw new Error("S length is invalid");
        if (128 & t[4]) throw new Error("R value is negative");
        if (e > 1 && 0 === t[4] && !(128 & t[5]))
          throw new Error("R value excessively padded");
        if (128 & t[e + 6]) throw new Error("S value is negative");
        if (r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
          throw new Error("S value excessively padded");
        return { r: t.slice(4, 4 + e), s: t.slice(6 + e) };
      }
      function u(t, e) {
        var r = t.length,
          i = e.length;
        if (0 === r) throw new Error("R length is zero");
        if (0 === i) throw new Error("S length is zero");
        if (r > 33) throw new Error("R length is too long");
        if (i > 33) throw new Error("S length is too long");
        if (128 & t[0]) throw new Error("R value is negative");
        if (128 & e[0]) throw new Error("S value is negative");
        if (r > 1 && 0 === t[0] && !(128 & t[1]))
          throw new Error("R value excessively padded");
        if (i > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("S value excessively padded");
        var o = n.allocUnsafe(6 + r + i);
        return (
          (o[0] = 48),
          (o[1] = o.length - 2),
          (o[2] = 2),
          (o[3] = t.length),
          t.copy(o, 4),
          (o[4 + r] = 2),
          (o[5 + r] = e.length),
          e.copy(o, 6 + r),
          o
        );
      }
      t.exports = { check: i, decode: o, encode: u };
    },
    2954: function (t, e, r) {
      (function (e) {
        var n = r(2813),
          i = r(2848);
        function o(t) {
          return e.isBuffer(t);
        }
        function u(t) {
          return "string" === typeof t && /^([0-9a-f]{2})+$/i.test(t);
        }
        function f(t, e) {
          var r = t.toJSON();
          function n(n) {
            if (!t(n)) return !1;
            if (n.length === e) return !0;
            throw i.tfCustomError(
              r + "(Length: " + e + ")",
              r + "(Length: " + n.length + ")",
            );
          }
          return (
            (n.toJSON = function () {
              return r;
            }),
            n
          );
        }
        var s = f.bind(null, n.Array),
          c = f.bind(null, o),
          a = f.bind(null, u),
          h = f.bind(null, n.String);
        function p(t, e, r) {
          function i(n, i) {
            return r(n, i) && n > t && n < e;
          }
          return (
            (r = r || n.Number),
            (i.toJSON = function () {
              return `${r.toJSON()} between [${t}, ${e}]`;
            }),
            i
          );
        }
        var l = Math.pow(2, 53) - 1;
        function d(t) {
          return "number" === typeof t && isFinite(t);
        }
        function v(t) {
          return (t << 24) >> 24 === t;
        }
        function m(t) {
          return (t << 16) >> 16 === t;
        }
        function y(t) {
          return (0 | t) === t;
        }
        function w(t) {
          return (
            "number" === typeof t && t >= -l && t <= l && Math.floor(t) === t
          );
        }
        function g(t) {
          return (255 & t) === t;
        }
        function b(t) {
          return (65535 & t) === t;
        }
        function S(t) {
          return t >>> 0 === t;
        }
        function E(t) {
          return (
            "number" === typeof t && t >= 0 && t <= l && Math.floor(t) === t
          );
        }
        var P = {
          ArrayN: s,
          Buffer: o,
          BufferN: c,
          Finite: d,
          Hex: u,
          HexN: a,
          Int8: v,
          Int16: m,
          Int32: y,
          Int53: w,
          Range: p,
          StringN: h,
          UInt8: g,
          UInt16: b,
          UInt32: S,
          UInt53: E,
        };
        for (var O in P)
          P[O].toJSON = function (t) {
            return t;
          }.bind(null, O);
        t.exports = P;
      }).call(this, r(2).Buffer);
    },
    2975: function (t, e, r) {
      var Point = r(3137),
        n = r(3138),
        i = r(3412);
      t.exports = { Curve: n, Point: Point, getCurveByName: i };
    },
    3030: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(2898),
        o = r(3062),
        u = r(2758),
        f = r(3080),
        s = r(6363),
        c = r(2771),
        a = r(3108),
        h = c.OP_RESERVED;
      function p(t) {
        return (
          f.Number(t) &&
          (t === c.OP_0 || (t >= c.OP_1 && t <= c.OP_16) || t === c.OP_1NEGATE)
        );
      }
      function l(t) {
        return f.Buffer(t) || p(t);
      }
      function d(t) {
        return f.Array(t) && t.every(l);
      }
      function v(t) {
        return 0 === t.length
          ? c.OP_0
          : 1 === t.length
            ? t[0] >= 1 && t[0] <= 16
              ? h + t[0]
              : 129 === t[0]
                ? c.OP_1NEGATE
                : void 0
            : void 0;
      }
      function m(t) {
        if (n.isBuffer(t)) return t;
        u(f.Array, t);
        var e = t.reduce(function (t, e) {
            return n.isBuffer(e)
              ? 1 === e.length && void 0 !== v(e)
                ? t + 1
                : t + o.encodingLength(e.length) + e.length
              : t + 1;
          }, 0),
          r = n.allocUnsafe(e),
          i = 0;
        if (
          (t.forEach(function (t) {
            if (n.isBuffer(t)) {
              var e = v(t);
              if (void 0 !== e) return (r.writeUInt8(e, i), void (i += 1));
              ((i += o.encode(r, t.length, i)), t.copy(r, i), (i += t.length));
            } else (r.writeUInt8(t, i), (i += 1));
          }),
          i !== r.length)
        )
          throw new Error("Could not decode chunks");
        return r;
      }
      function y(t) {
        if (f.Array(t)) return t;
        u(f.Buffer, t);
        var e = [],
          r = 0;
        while (r < t.length) {
          var n = t[r];
          if (n > c.OP_0 && n <= c.OP_PUSHDATA4) {
            var i = o.decode(t, r);
            if (null === i) return [];
            if (((r += i.size), r + i.number > t.length)) return [];
            var s = t.slice(r, r + i.number);
            r += i.number;
            var a = v(s);
            void 0 !== a ? e.push(a) : e.push(s);
          } else (e.push(n), (r += 1));
        }
        return e;
      }
      function w(t) {
        return (
          n.isBuffer(t) && (t = y(t)),
          t
            .map(function (t) {
              if (n.isBuffer(t)) {
                var e = v(t);
                if (void 0 === e) return t.toString("hex");
                t = e;
              }
              return a[t];
            })
            .join(" ")
        );
      }
      function g(t) {
        return (
          u(f.String, t),
          m(
            t.split(" ").map(function (t) {
              return void 0 !== c[t] ? c[t] : (u(f.Hex, t), n.from(t, "hex"));
            }),
          )
        );
      }
      function b(t) {
        return (
          (t = y(t)),
          u(d, t),
          t.map(function (t) {
            return n.isBuffer(t)
              ? t
              : t === c.OP_0
                ? n.allocUnsafe(0)
                : s.encode(t - h);
          })
        );
      }
      function S(t) {
        if (!n.isBuffer(t)) return !1;
        if (t.length < 33) return !1;
        switch (t[0]) {
          case 2:
          case 3:
            return 33 === t.length;
          case 4:
            return 65 === t.length;
        }
        return !1;
      }
      function E(t) {
        var e = -129 & t;
        return e > 0 && e < 4;
      }
      function P(t) {
        return (
          !!n.isBuffer(t) && !!E(t[t.length - 1]) && i.check(t.slice(0, -1))
        );
      }
      t.exports = {
        compile: m,
        decompile: y,
        fromASM: g,
        toASM: w,
        toStack: b,
        number: r(6363),
        isCanonicalPubKey: S,
        isCanonicalSignature: P,
        isPushOnly: d,
        isDefinedHashType: E,
      };
      var O = r(8900);
      for (var T in O) t.exports[T] = O[T];
    },
    3048: function (t, e, r) {
      function BigInteger(t, e, r) {
        if (!(this instanceof BigInteger)) return new BigInteger(t, e, r);
        null != t &&
          ("number" == typeof t
            ? this.fromNumber(t, e, r)
            : null == e && "string" != typeof t
              ? this.fromString(t, 256)
              : this.fromString(t, e));
      }
      var n,
        i = BigInteger.prototype;
      function o(t, e, r, n, i, o) {
        while (--o >= 0) {
          var u = e * this[t++] + r[n] + i;
          ((i = Math.floor(u / 67108864)), (r[n++] = 67108863 & u));
        }
        return i;
      }
      ((i.__bigi = r(3267).version),
        (BigInteger.isBigInteger = function (t, e) {
          return t && t.__bigi && (!e || t.__bigi === i.__bigi);
        }),
        (BigInteger.prototype.am = o),
        (n = 26),
        (BigInteger.prototype.DB = n),
        (BigInteger.prototype.DM = (1 << n) - 1));
      var u = (BigInteger.prototype.DV = 1 << n),
        f = 52;
      ((BigInteger.prototype.FV = Math.pow(2, f)),
        (BigInteger.prototype.F1 = f - n),
        (BigInteger.prototype.F2 = 2 * n - f));
      var s,
        c,
        a = "0123456789abcdefghijklmnopqrstuvwxyz",
        h = new Array();
      for (s = "0".charCodeAt(0), c = 0; c <= 9; ++c) h[s++] = c;
      for (s = "a".charCodeAt(0), c = 10; c < 36; ++c) h[s++] = c;
      for (s = "A".charCodeAt(0), c = 10; c < 36; ++c) h[s++] = c;
      function p(t) {
        return a.charAt(t);
      }
      function l(t, e) {
        var r = h[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function d(t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        ((t.t = this.t), (t.s = this.s));
      }
      function v(t) {
        ((this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + u) : (this.t = 0));
      }
      function m(t) {
        var e = new BigInteger();
        return (e.fromInt(t), e);
      }
      function y(t, e) {
        var r,
          n = this;
        if (16 == e) r = 4;
        else if (8 == e) r = 3;
        else if (256 == e) r = 8;
        else if (2 == e) r = 1;
        else if (32 == e) r = 5;
        else {
          if (4 != e) return void n.fromRadix(t, e);
          r = 2;
        }
        ((n.t = 0), (n.s = 0));
        var i = t.length,
          o = !1,
          u = 0;
        while (--i >= 0) {
          var f = 8 == r ? 255 & t[i] : l(t, i);
          f < 0
            ? "-" == t.charAt(i) && (o = !0)
            : ((o = !1),
              0 == u
                ? (n[n.t++] = f)
                : u + r > n.DB
                  ? ((n[n.t - 1] |= (f & ((1 << (n.DB - u)) - 1)) << u),
                    (n[n.t++] = f >> (n.DB - u)))
                  : (n[n.t - 1] |= f << u),
              (u += r),
              u >= n.DB && (u -= n.DB));
        }
        (8 == r &&
          0 != (128 & t[0]) &&
          ((n.s = -1), u > 0 && (n[n.t - 1] |= ((1 << (n.DB - u)) - 1) << u)),
          n.clamp(),
          o && BigInteger.ZERO.subTo(n, n));
      }
      function w() {
        var t = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == t) --this.t;
      }
      function g(t) {
        var e,
          r = this;
        if (r.s < 0) return "-" + r.negate().toString(t);
        if (16 == t) e = 4;
        else if (8 == t) e = 3;
        else if (2 == t) e = 1;
        else if (32 == t) e = 5;
        else {
          if (4 != t) return r.toRadix(t);
          e = 2;
        }
        var n,
          i = (1 << e) - 1,
          o = !1,
          u = "",
          f = r.t,
          s = r.DB - ((f * r.DB) % e);
        if (f-- > 0) {
          s < r.DB && (n = r[f] >> s) > 0 && ((o = !0), (u = p(n)));
          while (f >= 0)
            (s < e
              ? ((n = (r[f] & ((1 << s) - 1)) << (e - s)),
                (n |= r[--f] >> (s += r.DB - e)))
              : ((n = (r[f] >> (s -= e)) & i), s <= 0 && ((s += r.DB), --f)),
              n > 0 && (o = !0),
              o && (u += p(n)));
        }
        return o ? u : "0";
      }
      function b() {
        var t = new BigInteger();
        return (BigInteger.ZERO.subTo(this, t), t);
      }
      function S() {
        return this.s < 0 ? this.negate() : this;
      }
      function E(t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var r = this.t;
        if (((e = r - t.t), 0 != e)) return this.s < 0 ? -e : e;
        while (--r >= 0) if (0 != (e = this[r] - t[r])) return e;
        return 0;
      }
      function P(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      function O() {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + P(this[this.t - 1] ^ (this.s & this.DM));
      }
      function T() {
        return this.bitLength() >> 3;
      }
      function I(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r) e[r] = 0;
        ((e.t = this.t + t), (e.s = this.s));
      }
      function _(t, e) {
        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
        ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
      }
      function B(t, e) {
        var r,
          n = this,
          i = t % n.DB,
          o = n.DB - i,
          u = (1 << o) - 1,
          f = Math.floor(t / n.DB),
          s = (n.s << i) & n.DM;
        for (r = n.t - 1; r >= 0; --r)
          ((e[r + f + 1] = (n[r] >> o) | s), (s = (n[r] & u) << i));
        for (r = f - 1; r >= 0; --r) e[r] = 0;
        ((e[f] = s), (e.t = n.t + f + 1), (e.s = n.s), e.clamp());
      }
      function N(t, e) {
        var r = this;
        e.s = r.s;
        var n = Math.floor(t / r.DB);
        if (n >= r.t) e.t = 0;
        else {
          var i = t % r.DB,
            o = r.DB - i,
            u = (1 << i) - 1;
          e[0] = r[n] >> i;
          for (var f = n + 1; f < r.t; ++f)
            ((e[f - n - 1] |= (r[f] & u) << o), (e[f - n] = r[f] >> i));
          (i > 0 && (e[r.t - n - 1] |= (r.s & u) << o),
            (e.t = r.t - n),
            e.clamp());
        }
      }
      function H(t, e) {
        var r = this,
          n = 0,
          i = 0,
          o = Math.min(t.t, r.t);
        while (n < o) ((i += r[n] - t[n]), (e[n++] = i & r.DM), (i >>= r.DB));
        if (t.t < r.t) {
          i -= t.s;
          while (n < r.t) ((i += r[n]), (e[n++] = i & r.DM), (i >>= r.DB));
          i += r.s;
        } else {
          i += r.s;
          while (n < t.t) ((i -= t[n]), (e[n++] = i & r.DM), (i >>= r.DB));
          i -= t.s;
        }
        ((e.s = i < 0 ? -1 : 0),
          i < -1 ? (e[n++] = r.DV + i) : i > 0 && (e[n++] = i),
          (e.t = n),
          e.clamp());
      }
      function A(t, e) {
        var r = this.abs(),
          n = t.abs(),
          i = r.t;
        e.t = i + n.t;
        while (--i >= 0) e[i] = 0;
        for (i = 0; i < n.t; ++i) e[i + r.t] = r.am(0, n[i], e, i, 0, r.t);
        ((e.s = 0), e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e));
      }
      function U(t) {
        var e = this.abs(),
          r = (t.t = 2 * e.t);
        while (--r >= 0) t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var n = e.am(r, e[r], t, 2 * r, 0, 1);
          (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >=
            e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
        }
        (t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
          (t.s = 0),
          t.clamp());
      }
      function x(t, e, r) {
        var n = this,
          i = t.abs();
        if (!(i.t <= 0)) {
          var o = n.abs();
          if (o.t < i.t)
            return (null != e && e.fromInt(0), void (null != r && n.copyTo(r)));
          null == r && (r = new BigInteger());
          var u = new BigInteger(),
            f = n.s,
            s = t.s,
            c = n.DB - P(i[i.t - 1]);
          c > 0
            ? (i.lShiftTo(c, u), o.lShiftTo(c, r))
            : (i.copyTo(u), o.copyTo(r));
          var a = u.t,
            h = u[a - 1];
          if (0 != h) {
            var p = h * (1 << n.F1) + (a > 1 ? u[a - 2] >> n.F2 : 0),
              l = n.FV / p,
              d = (1 << n.F1) / p,
              v = 1 << n.F2,
              m = r.t,
              y = m - a,
              w = null == e ? new BigInteger() : e;
            (u.dlShiftTo(y, w),
              r.compareTo(w) >= 0 && ((r[r.t++] = 1), r.subTo(w, r)),
              BigInteger.ONE.dlShiftTo(a, w),
              w.subTo(u, u));
            while (u.t < a) u[u.t++] = 0;
            while (--y >= 0) {
              var g =
                r[--m] == h ? n.DM : Math.floor(r[m] * l + (r[m - 1] + v) * d);
              if ((r[m] += u.am(0, g, r, y, 0, a)) < g) {
                (u.dlShiftTo(y, w), r.subTo(w, r));
                while (r[m] < --g) r.subTo(w, r);
              }
            }
            (null != e &&
              (r.drShiftTo(a, e), f != s && BigInteger.ZERO.subTo(e, e)),
              (r.t = a),
              r.clamp(),
              c > 0 && r.rShiftTo(c, r),
              f < 0 && BigInteger.ZERO.subTo(r, r));
          }
        }
      }
      function k(t) {
        var e = new BigInteger();
        return (
          this.abs().divRemTo(t, null, e),
          this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e),
          e
        );
      }
      function D(t) {
        this.m = t;
      }
      function L(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }
      function R(t) {
        return t;
      }
      function K(t) {
        t.divRemTo(this.m, null, t);
      }
      function C(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function M(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function G() {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var e = 3 & t;
        return (
          (e = (e * (2 - (15 & t) * e)) & 15),
          (e = (e * (2 - (255 & t) * e)) & 255),
          (e = (e * (2 - (((65535 & t) * e) & 65535))) & 65535),
          (e = (e * (2 - ((t * e) % this.DV))) % this.DV),
          e > 0 ? this.DV - e : -e
        );
      }
      function F(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function q(t) {
        var e = new BigInteger();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e),
          e
        );
      }
      function W(t) {
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function V(t) {
        while (t.t <= this.mt2) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var r = 32767 & t[e],
            n =
              (r * this.mpl +
                (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) &
              t.DM;
          ((r = e + this.m.t), (t[r] += this.m.am(0, n, t, e, 0, this.m.t)));
          while (t[r] >= t.DV) ((t[r] -= t.DV), t[++r]++);
        }
        (t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
      }
      function z(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function J(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function j() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }
      function Y(t, e) {
        if (t > 4294967295 || t < 1) return BigInteger.ONE;
        var r = new BigInteger(),
          n = new BigInteger(),
          i = e.convert(this),
          o = P(t) - 1;
        i.copyTo(r);
        while (--o >= 0)
          if ((e.sqrTo(r, n), (t & (1 << o)) > 0)) e.mulTo(n, i, r);
          else {
            var u = r;
            ((r = n), (n = u));
          }
        return e.revert(r);
      }
      function Q(t, e) {
        var r;
        return (
          (r = t < 256 || e.isEven() ? new D(e) : new F(e)),
          this.exp(t, r)
        );
      }
      function Z() {
        var t = new BigInteger();
        return (this.copyTo(t), t);
      }
      function X() {
        if (this.s < 0) {
          if (1 == this.t) return this[0] - this.DV;
          if (0 == this.t) return -1;
        } else {
          if (1 == this.t) return this[0];
          if (0 == this.t) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }
      function $() {
        return 0 == this.t ? this.s : (this[0] << 24) >> 24;
      }
      function tt() {
        return 0 == this.t ? this.s : (this[0] << 16) >> 16;
      }
      function et(t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }
      function rt() {
        return this.s < 0
          ? -1
          : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
      }
      function nt(t) {
        if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
          return "0";
        var e = this.chunkSize(t),
          r = Math.pow(t, e),
          n = m(r),
          i = new BigInteger(),
          o = new BigInteger(),
          u = "";
        this.divRemTo(n, i, o);
        while (i.signum() > 0)
          ((u = (r + o.intValue()).toString(t).substr(1) + u),
            i.divRemTo(n, i, o));
        return o.intValue().toString(t) + u;
      }
      function it(t, e) {
        var r = this;
        (r.fromInt(0), null == e && (e = 10));
        for (
          var n = r.chunkSize(e),
            i = Math.pow(e, n),
            o = !1,
            u = 0,
            f = 0,
            s = 0;
          s < t.length;
          ++s
        ) {
          var c = l(t, s);
          c < 0
            ? "-" == t.charAt(s) && 0 == r.signum() && (o = !0)
            : ((f = e * f + c),
              ++u >= n &&
                (r.dMultiply(i), r.dAddOffset(f, 0), (u = 0), (f = 0)));
        }
        (u > 0 && (r.dMultiply(Math.pow(e, u)), r.dAddOffset(f, 0)),
          o && BigInteger.ZERO.subTo(r, r));
      }
      function ot(t, e, r) {
        var n = this;
        if ("number" == typeof e)
          if (t < 2) n.fromInt(1);
          else {
            (n.fromNumber(t, r),
              n.testBit(t - 1) ||
                n.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), lt, n),
              n.isEven() && n.dAddOffset(1, 0));
            while (!n.isProbablePrime(e))
              (n.dAddOffset(2, 0),
                n.bitLength() > t &&
                  n.subTo(BigInteger.ONE.shiftLeft(t - 1), n));
          }
        else {
          var i = new Array(),
            o = 7 & t;
          ((i.length = 1 + (t >> 3)),
            e.nextBytes(i),
            o > 0 ? (i[0] &= (1 << o) - 1) : (i[0] = 0),
            n.fromString(i, 256));
        }
      }
      function ut() {
        var t = this,
          e = t.t,
          r = new Array();
        r[0] = t.s;
        var n,
          i = t.DB - ((e * t.DB) % 8),
          o = 0;
        if (e-- > 0) {
          i < t.DB &&
            (n = t[e] >> i) != (t.s & t.DM) >> i &&
            (r[o++] = n | (t.s << (t.DB - i)));
          while (e >= 0)
            (i < 8
              ? ((n = (t[e] & ((1 << i) - 1)) << (8 - i)),
                (n |= t[--e] >> (i += t.DB - 8)))
              : ((n = (t[e] >> (i -= 8)) & 255), i <= 0 && ((i += t.DB), --e)),
              0 != (128 & n) && (n |= -256),
              0 === o && (128 & t.s) != (128 & n) && ++o,
              (o > 0 || n != t.s) && (r[o++] = n));
        }
        return r;
      }
      function ft(t) {
        return 0 == this.compareTo(t);
      }
      function st(t) {
        return this.compareTo(t) < 0 ? this : t;
      }
      function ct(t) {
        return this.compareTo(t) > 0 ? this : t;
      }
      function at(t, e, r) {
        var n,
          i,
          o = this,
          u = Math.min(t.t, o.t);
        for (n = 0; n < u; ++n) r[n] = e(o[n], t[n]);
        if (t.t < o.t) {
          for (i = t.s & o.DM, n = u; n < o.t; ++n) r[n] = e(o[n], i);
          r.t = o.t;
        } else {
          for (i = o.s & o.DM, n = u; n < t.t; ++n) r[n] = e(i, t[n]);
          r.t = t.t;
        }
        ((r.s = e(o.s, t.s)), r.clamp());
      }
      function ht(t, e) {
        return t & e;
      }
      function pt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, ht, e), e);
      }
      function lt(t, e) {
        return t | e;
      }
      function dt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, lt, e), e);
      }
      function vt(t, e) {
        return t ^ e;
      }
      function mt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, vt, e), e);
      }
      function yt(t, e) {
        return t & ~e;
      }
      function wt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, yt, e), e);
      }
      function gt() {
        for (var t = new BigInteger(), e = 0; e < this.t; ++e)
          t[e] = this.DM & ~this[e];
        return ((t.t = this.t), (t.s = ~this.s), t);
      }
      function bt(t) {
        var e = new BigInteger();
        return (t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e);
      }
      function St(t) {
        var e = new BigInteger();
        return (t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e);
      }
      function Et(t) {
        if (0 == t) return -1;
        var e = 0;
        return (
          0 == (65535 & t) && ((t >>= 16), (e += 16)),
          0 == (255 & t) && ((t >>= 8), (e += 8)),
          0 == (15 & t) && ((t >>= 4), (e += 4)),
          0 == (3 & t) && ((t >>= 2), (e += 2)),
          0 == (1 & t) && ++e,
          e
        );
      }
      function Pt() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this[t]) return t * this.DB + Et(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function Ot(t) {
        var e = 0;
        while (0 != t) ((t &= t - 1), ++e);
        return e;
      }
      function Tt() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
          t += Ot(this[r] ^ e);
        return t;
      }
      function It(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t
          ? 0 != this.s
          : 0 != (this[e] & (1 << (t % this.DB)));
      }
      function _t(t, e) {
        var r = BigInteger.ONE.shiftLeft(t);
        return (this.bitwiseTo(r, e, r), r);
      }
      function Bt(t) {
        return this.changeBit(t, lt);
      }
      function Nt(t) {
        return this.changeBit(t, yt);
      }
      function Ht(t) {
        return this.changeBit(t, vt);
      }
      function At(t, e) {
        var r = this,
          n = 0,
          i = 0,
          o = Math.min(t.t, r.t);
        while (n < o) ((i += r[n] + t[n]), (e[n++] = i & r.DM), (i >>= r.DB));
        if (t.t < r.t) {
          i += t.s;
          while (n < r.t) ((i += r[n]), (e[n++] = i & r.DM), (i >>= r.DB));
          i += r.s;
        } else {
          i += r.s;
          while (n < t.t) ((i += t[n]), (e[n++] = i & r.DM), (i >>= r.DB));
          i += t.s;
        }
        ((e.s = i < 0 ? -1 : 0),
          i > 0 ? (e[n++] = i) : i < -1 && (e[n++] = r.DV + i),
          (e.t = n),
          e.clamp());
      }
      function Ut(t) {
        var e = new BigInteger();
        return (this.addTo(t, e), e);
      }
      function xt(t) {
        var e = new BigInteger();
        return (this.subTo(t, e), e);
      }
      function kt(t) {
        var e = new BigInteger();
        return (this.multiplyTo(t, e), e);
      }
      function Dt() {
        var t = new BigInteger();
        return (this.squareTo(t), t);
      }
      function Lt(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, e, null), e);
      }
      function Rt(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, null, e), e);
      }
      function Kt(t) {
        var e = new BigInteger(),
          r = new BigInteger();
        return (this.divRemTo(t, e, r), new Array(e, r));
      }
      function Ct(t) {
        ((this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp());
      }
      function Mt(t, e) {
        if (0 != t) {
          while (this.t <= e) this[this.t++] = 0;
          this[e] += t;
          while (this[e] >= this.DV)
            ((this[e] -= this.DV),
              ++e >= this.t && (this[this.t++] = 0),
              ++this[e]);
        }
      }
      function Gt() {}
      function Ft(t) {
        return t;
      }
      function qt(t, e, r) {
        t.multiplyTo(e, r);
      }
      function Wt(t, e) {
        t.squareTo(e);
      }
      function Vt(t) {
        return this.exp(t, new Gt());
      }
      function zt(t, e, r) {
        var n,
          i = Math.min(this.t + t.t, e);
        ((r.s = 0), (r.t = i));
        while (i > 0) r[--i] = 0;
        for (n = r.t - this.t; i < n; ++i)
          r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
        for (n = Math.min(t.t, e); i < n; ++i) this.am(0, t[i], r, i, 0, e - i);
        r.clamp();
      }
      function Jt(t, e, r) {
        --e;
        var n = (r.t = this.t + t.t - e);
        r.s = 0;
        while (--n >= 0) r[n] = 0;
        for (n = Math.max(e - this.t, 0); n < t.t; ++n)
          r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
        (r.clamp(), r.drShiftTo(1, r));
      }
      function jt(t) {
        ((this.r2 = new BigInteger()),
          (this.q3 = new BigInteger()),
          BigInteger.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      function Yt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function Qt(t) {
        return t;
      }
      function Zt(t) {
        var e = this;
        (t.drShiftTo(e.m.t - 1, e.r2),
          t.t > e.m.t + 1 && ((t.t = e.m.t + 1), t.clamp()),
          e.mu.multiplyUpperTo(e.r2, e.m.t + 1, e.q3),
          e.m.multiplyLowerTo(e.q3, e.m.t + 1, e.r2));
        while (t.compareTo(e.r2) < 0) t.dAddOffset(1, e.m.t + 1);
        t.subTo(e.r2, t);
        while (t.compareTo(e.m) >= 0) t.subTo(e.m, t);
      }
      function Xt(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function $t(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function te(t, e) {
        var r,
          n,
          i = t.bitLength(),
          o = m(1);
        if (i <= 0) return o;
        ((r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6),
          (n = i < 8 ? new D(e) : e.isEven() ? new jt(e) : new F(e)));
        var u = new Array(),
          f = 3,
          s = r - 1,
          c = (1 << r) - 1;
        if (((u[1] = n.convert(this)), r > 1)) {
          var a = new BigInteger();
          n.sqrTo(u[1], a);
          while (f <= c)
            ((u[f] = new BigInteger()), n.mulTo(a, u[f - 2], u[f]), (f += 2));
        }
        var h,
          p,
          l = t.t - 1,
          d = !0,
          v = new BigInteger();
        i = P(t[l]) - 1;
        while (l >= 0) {
          (i >= s
            ? (h = (t[l] >> (i - s)) & c)
            : ((h = (t[l] & ((1 << (i + 1)) - 1)) << (s - i)),
              l > 0 && (h |= t[l - 1] >> (this.DB + i - s))),
            (f = r));
          while (0 == (1 & h)) ((h >>= 1), --f);
          if (((i -= f) < 0 && ((i += this.DB), --l), d))
            (u[h].copyTo(o), (d = !1));
          else {
            while (f > 1) (n.sqrTo(o, v), n.sqrTo(v, o), (f -= 2));
            (f > 0 ? n.sqrTo(o, v) : ((p = o), (o = v), (v = p)),
              n.mulTo(v, u[h], o));
          }
          while (l >= 0 && 0 == (t[l] & (1 << i)))
            (n.sqrTo(o, v),
              (p = o),
              (o = v),
              (v = p),
              --i < 0 && ((i = this.DB - 1), --l));
        }
        return n.revert(o);
      }
      function ee(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
          var n = e;
          ((e = r), (r = n));
        }
        var i = e.getLowestSetBit(),
          o = r.getLowestSetBit();
        if (o < 0) return e;
        (i < o && (o = i), o > 0 && (e.rShiftTo(o, e), r.rShiftTo(o, r)));
        while (e.signum() > 0)
          ((i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
            (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
            e.compareTo(r) >= 0
              ? (e.subTo(r, e), e.rShiftTo(1, e))
              : (r.subTo(e, r), r.rShiftTo(1, r)));
        return (o > 0 && r.lShiftTo(o, r), r);
      }
      function re(t) {
        if (t <= 0) return 0;
        var e = this.DV % t,
          r = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (0 == e) r = this[0] % t;
          else for (var n = this.t - 1; n >= 0; --n) r = (e * r + this[n]) % t;
        return r;
      }
      function ne(t) {
        var e = t.isEven();
        if (0 === this.signum()) throw new Error("division by zero");
        if ((this.isEven() && e) || 0 == t.signum()) return BigInteger.ZERO;
        var r = t.clone(),
          n = this.clone(),
          i = m(1),
          o = m(0),
          u = m(0),
          f = m(1);
        while (0 != r.signum()) {
          while (r.isEven())
            (r.rShiftTo(1, r),
              e
                ? ((i.isEven() && o.isEven()) ||
                    (i.addTo(this, i), o.subTo(t, o)),
                  i.rShiftTo(1, i))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o));
          while (n.isEven())
            (n.rShiftTo(1, n),
              e
                ? ((u.isEven() && f.isEven()) ||
                    (u.addTo(this, u), f.subTo(t, f)),
                  u.rShiftTo(1, u))
                : f.isEven() || f.subTo(t, f),
              f.rShiftTo(1, f));
          r.compareTo(n) >= 0
            ? (r.subTo(n, r), e && i.subTo(u, i), o.subTo(f, o))
            : (n.subTo(r, n), e && u.subTo(i, u), f.subTo(o, f));
        }
        if (0 != n.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
        while (f.compareTo(t) >= 0) f.subTo(t, f);
        while (f.signum() < 0) f.addTo(t, f);
        return f;
      }
      ((D.prototype.convert = L),
        (D.prototype.revert = R),
        (D.prototype.reduce = K),
        (D.prototype.mulTo = C),
        (D.prototype.sqrTo = M),
        (F.prototype.convert = q),
        (F.prototype.revert = W),
        (F.prototype.reduce = V),
        (F.prototype.mulTo = J),
        (F.prototype.sqrTo = z),
        (i.copyTo = d),
        (i.fromInt = v),
        (i.fromString = y),
        (i.clamp = w),
        (i.dlShiftTo = I),
        (i.drShiftTo = _),
        (i.lShiftTo = B),
        (i.rShiftTo = N),
        (i.subTo = H),
        (i.multiplyTo = A),
        (i.squareTo = U),
        (i.divRemTo = x),
        (i.invDigit = G),
        (i.isEven = j),
        (i.exp = Y),
        (i.toString = g),
        (i.negate = b),
        (i.abs = S),
        (i.compareTo = E),
        (i.bitLength = O),
        (i.byteLength = T),
        (i.mod = k),
        (i.modPowInt = Q),
        (Gt.prototype.convert = Ft),
        (Gt.prototype.revert = Ft),
        (Gt.prototype.mulTo = qt),
        (Gt.prototype.sqrTo = Wt),
        (jt.prototype.convert = Yt),
        (jt.prototype.revert = Qt),
        (jt.prototype.reduce = Zt),
        (jt.prototype.mulTo = $t),
        (jt.prototype.sqrTo = Xt));
      var ie = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
          569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
          647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
          743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
          839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
          941, 947, 953, 967, 971, 977, 983, 991, 997,
        ],
        oe = (1 << 26) / ie[ie.length - 1];
      function ue(t) {
        var e,
          r = this.abs();
        if (1 == r.t && r[0] <= ie[ie.length - 1]) {
          for (e = 0; e < ie.length; ++e) if (r[0] == ie[e]) return !0;
          return !1;
        }
        if (r.isEven()) return !1;
        e = 1;
        while (e < ie.length) {
          var n = ie[e],
            i = e + 1;
          while (i < ie.length && n < oe) n *= ie[i++];
          n = r.modInt(n);
          while (e < i) if (n % ie[e++] == 0) return !1;
        }
        return r.millerRabin(t);
      }
      function fe(t) {
        var e = this.subtract(BigInteger.ONE),
          r = e.getLowestSetBit();
        if (r <= 0) return !1;
        var n = e.shiftRight(r);
        ((t = (t + 1) >> 1), t > ie.length && (t = ie.length));
        for (var i = new BigInteger(null), o = [], u = 0; u < t; ++u) {
          for (;;)
            if (
              ((s = ie[Math.floor(Math.random() * ie.length)]),
              -1 == o.indexOf(s))
            )
              break;
          (o.push(s), i.fromInt(s));
          var f = i.modPow(n, this);
          if (0 != f.compareTo(BigInteger.ONE) && 0 != f.compareTo(e)) {
            var s = 1;
            while (s++ < r && 0 != f.compareTo(e))
              if (
                ((f = f.modPowInt(2, this)), 0 == f.compareTo(BigInteger.ONE))
              )
                return !1;
            if (0 != f.compareTo(e)) return !1;
          }
        }
        return !0;
      }
      ((i.chunkSize = et),
        (i.toRadix = nt),
        (i.fromRadix = it),
        (i.fromNumber = ot),
        (i.bitwiseTo = at),
        (i.changeBit = _t),
        (i.addTo = At),
        (i.dMultiply = Ct),
        (i.dAddOffset = Mt),
        (i.multiplyLowerTo = zt),
        (i.multiplyUpperTo = Jt),
        (i.modInt = re),
        (i.millerRabin = fe),
        (i.clone = Z),
        (i.intValue = X),
        (i.byteValue = $),
        (i.shortValue = tt),
        (i.signum = rt),
        (i.toByteArray = ut),
        (i.equals = ft),
        (i.min = st),
        (i.max = ct),
        (i.and = pt),
        (i.or = dt),
        (i.xor = mt),
        (i.andNot = wt),
        (i.not = gt),
        (i.shiftLeft = bt),
        (i.shiftRight = St),
        (i.getLowestSetBit = Pt),
        (i.bitCount = Tt),
        (i.testBit = It),
        (i.setBit = Bt),
        (i.clearBit = Nt),
        (i.flipBit = Ht),
        (i.add = Ut),
        (i.subtract = xt),
        (i.multiply = kt),
        (i.divide = Lt),
        (i.remainder = Rt),
        (i.divideAndRemainder = Kt),
        (i.modPow = te),
        (i.modInverse = ne),
        (i.pow = Vt),
        (i.gcd = ee),
        (i.isProbablePrime = ue),
        (i.square = Dt),
        (BigInteger.ZERO = m(0)),
        (BigInteger.ONE = m(1)),
        (BigInteger.valueOf = m),
        (t.exports = BigInteger));
    },
    3062: function (t, e, r) {
      var n = r(2771);
      function i(t) {
        return t < n.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
      }
      function o(t, e, r) {
        var o = i(e);
        return (
          1 === o
            ? t.writeUInt8(e, r)
            : 2 === o
              ? (t.writeUInt8(n.OP_PUSHDATA1, r), t.writeUInt8(e, r + 1))
              : 3 === o
                ? (t.writeUInt8(n.OP_PUSHDATA2, r), t.writeUInt16LE(e, r + 1))
                : (t.writeUInt8(n.OP_PUSHDATA4, r), t.writeUInt32LE(e, r + 1)),
          o
        );
      }
      function u(t, e) {
        var r,
          i,
          o = t.readUInt8(e);
        if (o < n.OP_PUSHDATA1) ((r = o), (i = 1));
        else if (o === n.OP_PUSHDATA1) {
          if (e + 2 > t.length) return null;
          ((r = t.readUInt8(e + 1)), (i = 2));
        } else if (o === n.OP_PUSHDATA2) {
          if (e + 3 > t.length) return null;
          ((r = t.readUInt16LE(e + 1)), (i = 3));
        } else {
          if (e + 5 > t.length) return null;
          if (o !== n.OP_PUSHDATA4) throw new Error("Unexpected opcode");
          ((r = t.readUInt32LE(e + 1)), (i = 5));
        }
        return { opcode: o, number: r, size: i };
      }
      t.exports = { encodingLength: i, encode: o, decode: u };
    },
    3080: function (t, e, r) {
      var n = r(2758),
        i = Math.pow(2, 31) - 1;
      function o(t) {
        return n.UInt32(t) && t <= i;
      }
      function u(t) {
        return n.String(t) && t.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }
      u.toJSON = function () {
        return "BIP32 derivation path";
      };
      var f = 21e14;
      function s(t) {
        return n.UInt53(t) && t <= f;
      }
      var c = n.quacksLike("BigInteger"),
        a = n.quacksLike("Point"),
        ECSignature = n.compile({ r: c, s: c }),
        h = n.compile({
          messagePrefix: n.oneOf(n.Buffer, n.String),
          bip32: { public: n.UInt32, private: n.UInt32 },
          pubKeyHash: n.UInt8,
          scriptHash: n.UInt8,
          wif: n.UInt8,
        }),
        p = {
          BigInt: c,
          BIP32Path: u,
          Buffer256bit: n.BufferN(32),
          ECPoint: a,
          ECSignature: ECSignature,
          Hash160bit: n.BufferN(20),
          Hash256bit: n.BufferN(32),
          Network: h,
          Satoshi: s,
          UInt31: o,
        };
      for (var l in n) p[l] = n[l];
      t.exports = p;
    },
    3108: function (t, e, r) {
      var n = r(2771),
        i = {};
      for (var o in n) {
        var u = n[o];
        i[u] = o;
      }
      t.exports = i;
    },
    3110: function (t, e, r) {
      (function (e) {
        t.exports = function (t, r) {
          if (!Array.isArray(t)) throw TypeError("Expected values Array");
          if ("function" !== typeof r)
            throw TypeError("Expected digest Function");
          var n = t.length,
            i = t.concat();
          while (n > 1) {
            for (var o = 0, u = 0; u < n; u += 2, ++o) {
              var f = i[u],
                s = u + 1 === n ? f : i[u + 1],
                c = e.concat([f, s]);
              i[o] = r(c);
            }
            n = o;
          }
          return i[0];
        };
      }).call(this, r(2).Buffer);
    },
    3137: function (t, e, r) {
      var n = r(229),
        i = r(46).Buffer,
        BigInteger = r(2802),
        o = BigInteger.valueOf(3);
      function Point(t, e, r, i) {
        (n.notStrictEqual(i, void 0, "Missing Z coordinate"),
          (this.curve = t),
          (this.x = e),
          (this.y = r),
          (this.z = i),
          (this._zInv = null),
          (this.compressed = !0));
      }
      (Object.defineProperty(Point.prototype, "zInv", {
        get: function () {
          return (
            null === this._zInv &&
              (this._zInv = this.z.modInverse(this.curve.p)),
            this._zInv
          );
        },
      }),
        Object.defineProperty(Point.prototype, "affineX", {
          get: function () {
            return this.x.multiply(this.zInv).mod(this.curve.p);
          },
        }),
        Object.defineProperty(Point.prototype, "affineY", {
          get: function () {
            return this.y.multiply(this.zInv).mod(this.curve.p);
          },
        }),
        (Point.fromAffine = function (t, e, r) {
          return new Point(t, e, r, BigInteger.ONE);
        }),
        (Point.prototype.equals = function (t) {
          if (t === this) return !0;
          if (this.curve.isInfinity(this)) return this.curve.isInfinity(t);
          if (this.curve.isInfinity(t)) return this.curve.isInfinity(this);
          var e = t.y
            .multiply(this.z)
            .subtract(this.y.multiply(t.z))
            .mod(this.curve.p);
          if (0 !== e.signum()) return !1;
          var r = t.x
            .multiply(this.z)
            .subtract(this.x.multiply(t.z))
            .mod(this.curve.p);
          return 0 === r.signum();
        }),
        (Point.prototype.negate = function () {
          var t = this.curve.p.subtract(this.y);
          return new Point(this.curve, this.x, t, this.z);
        }),
        (Point.prototype.add = function (t) {
          if (this.curve.isInfinity(this)) return t;
          if (this.curve.isInfinity(t)) return this;
          var e = this.x,
            r = this.y,
            n = t.x,
            i = t.y,
            u = i.multiply(this.z).subtract(r.multiply(t.z)).mod(this.curve.p),
            f = n.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p);
          if (0 === f.signum())
            return 0 === u.signum() ? this.twice() : this.curve.infinity;
          var s = f.square(),
            c = s.multiply(f),
            a = e.multiply(s),
            h = u.square().multiply(this.z),
            p = h
              .subtract(a.shiftLeft(1))
              .multiply(t.z)
              .subtract(c)
              .multiply(f)
              .mod(this.curve.p),
            l = a
              .multiply(o)
              .multiply(u)
              .subtract(r.multiply(c))
              .subtract(h.multiply(u))
              .multiply(t.z)
              .add(u.multiply(c))
              .mod(this.curve.p),
            d = c.multiply(this.z).multiply(t.z).mod(this.curve.p);
          return new Point(this.curve, p, l, d);
        }),
        (Point.prototype.twice = function () {
          if (this.curve.isInfinity(this)) return this;
          if (0 === this.y.signum()) return this.curve.infinity;
          var t = this.x,
            e = this.y,
            r = e.multiply(this.z).mod(this.curve.p),
            n = r.multiply(e).mod(this.curve.p),
            i = this.curve.a,
            u = t.square().multiply(o);
          (0 !== i.signum() && (u = u.add(this.z.square().multiply(i))),
            (u = u.mod(this.curve.p)));
          var f = u
              .square()
              .subtract(t.shiftLeft(3).multiply(n))
              .shiftLeft(1)
              .multiply(r)
              .mod(this.curve.p),
            s = u
              .multiply(o)
              .multiply(t)
              .subtract(n.shiftLeft(1))
              .shiftLeft(2)
              .multiply(n)
              .subtract(u.pow(3))
              .mod(this.curve.p),
            c = r.pow(3).shiftLeft(3).mod(this.curve.p);
          return new Point(this.curve, f, s, c);
        }),
        (Point.prototype.multiply = function (t) {
          if (this.curve.isInfinity(this)) return this;
          if (0 === t.signum()) return this.curve.infinity;
          for (
            var e = t,
              r = e.multiply(o),
              n = this.negate(),
              i = this,
              u = r.bitLength() - 2;
            u > 0;
            --u
          ) {
            var f = r.testBit(u),
              s = e.testBit(u);
            ((i = i.twice()), f !== s && (i = i.add(f ? this : n)));
          }
          return i;
        }),
        (Point.prototype.multiplyTwo = function (t, e, r) {
          var n = Math.max(t.bitLength(), r.bitLength()) - 1,
            i = this.curve.infinity,
            o = this.add(e);
          while (n >= 0) {
            var u = t.testBit(n),
              f = r.testBit(n);
            ((i = i.twice()),
              u ? (i = f ? i.add(o) : i.add(this)) : f && (i = i.add(e)),
              --n);
          }
          return i;
        }),
        (Point.prototype.getEncoded = function (t) {
          if ((null == t && (t = this.compressed), this.curve.isInfinity(this)))
            return i.alloc(1, 0);
          var e,
            r = this.affineX,
            n = this.affineY,
            o = this.curve.pLength;
          return (
            t
              ? ((e = i.allocUnsafe(1 + o)),
                e.writeUInt8(n.isEven() ? 2 : 3, 0))
              : ((e = i.allocUnsafe(1 + o + o)),
                e.writeUInt8(4, 0),
                n.toBuffer(o).copy(e, 1 + o)),
            r.toBuffer(o).copy(e, 1),
            e
          );
        }),
        (Point.decodeFrom = function (t, e) {
          var r,
            i = e.readUInt8(0),
            o = 4 !== i,
            u = Math.floor((t.p.bitLength() + 7) / 8),
            f = BigInteger.fromBuffer(e.slice(1, 1 + u));
          if (o) {
            (n.equal(e.length, u + 1, "Invalid sequence length"),
              n(2 === i || 3 === i, "Invalid sequence tag"));
            var s = 3 === i;
            r = t.pointFromX(s, f);
          } else {
            n.equal(e.length, 1 + u + u, "Invalid sequence length");
            var c = BigInteger.fromBuffer(e.slice(1 + u));
            r = Point.fromAffine(t, f, c);
          }
          return ((r.compressed = o), r);
        }),
        (Point.prototype.toString = function () {
          return this.curve.isInfinity(this)
            ? "(INFINITY)"
            : "(" +
                this.affineX.toString() +
                "," +
                this.affineY.toString() +
                ")";
        }),
        (t.exports = Point));
    },
    3138: function (t, e, r) {
      var n = r(229),
        BigInteger = r(2802),
        Point = r(3137);
      function i(t, e, r, n, i, o, u) {
        ((this.p = t),
          (this.a = e),
          (this.b = r),
          (this.G = Point.fromAffine(this, n, i)),
          (this.n = o),
          (this.h = u),
          (this.infinity = new Point(this, null, null, BigInteger.ZERO)),
          (this.pOverFour = t.add(BigInteger.ONE).shiftRight(2)),
          (this.pLength = Math.floor((this.p.bitLength() + 7) / 8)));
      }
      ((i.prototype.pointFromX = function (t, e) {
        var r = e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p),
          n = r.modPow(this.pOverFour, this.p),
          i = n;
        return (
          n.isEven() ^ !t && (i = this.p.subtract(i)),
          Point.fromAffine(this, e, i)
        );
      }),
        (i.prototype.isInfinity = function (t) {
          return (
            t === this.infinity || (0 === t.z.signum() && 0 !== t.y.signum())
          );
        }),
        (i.prototype.isOnCurve = function (t) {
          if (this.isInfinity(t)) return !0;
          var e = t.affineX,
            r = t.affineY,
            n = this.a,
            i = this.b,
            o = this.p;
          if (e.signum() < 0 || e.compareTo(o) >= 0) return !1;
          if (r.signum() < 0 || r.compareTo(o) >= 0) return !1;
          var u = r.square().mod(o),
            f = e.pow(3).add(n.multiply(e)).add(i).mod(o);
          return u.equals(f);
        }),
        (i.prototype.validate = function (t) {
          (n(!this.isInfinity(t), "Point is at infinity"),
            n(this.isOnCurve(t), "Point is not on the curve"));
          var e = t.multiply(this.n);
          return (
            n(this.isInfinity(e), "Point is not a scalar multiple of G"),
            !0
          );
        }),
        (t.exports = i));
    },
    3267: function (t) {
      t.exports = JSON.parse(
        '{"name":"bigi","version":"1.4.2","description":"Big integers.","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"repository":{"url":"https://github.com/cryptocoinjs/bigi","type":"git"},"main":"./lib/index.js","scripts":{"browser-test":"./node_modules/.bin/mochify --wd -R spec","test":"./node_modules/.bin/_mocha -- test/*.js","jshint":"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true","unit":"./node_modules/.bin/mocha","coverage":"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},"dependencies":{},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]}}',
      );
    },
    3268: function (t, e, r) {
      (function (t) {
        var e = r(229),
          BigInteger = r(3048);
        ((BigInteger.fromByteArrayUnsigned = function (t) {
          return 128 & t[0] ? new BigInteger([0].concat(t)) : new BigInteger(t);
        }),
          (BigInteger.prototype.toByteArrayUnsigned = function () {
            var t = this.toByteArray();
            return 0 === t[0] ? t.slice(1) : t;
          }),
          (BigInteger.fromDERInteger = function (t) {
            return new BigInteger(t);
          }),
          (BigInteger.prototype.toDERInteger =
            BigInteger.prototype.toByteArray),
          (BigInteger.fromBuffer = function (t) {
            if (128 & t[0]) {
              var e = Array.prototype.slice.call(t);
              return new BigInteger([0].concat(e));
            }
            return new BigInteger(t);
          }),
          (BigInteger.fromHex = function (t) {
            return "" === t
              ? BigInteger.ZERO
              : (e.equal(t, t.match(/^[A-Fa-f0-9]+/), "Invalid hex string"),
                e.equal(t.length % 2, 0, "Incomplete hex"),
                new BigInteger(t, 16));
          }),
          (BigInteger.prototype.toBuffer = function (e) {
            var r = this.toByteArrayUnsigned(),
              n = [],
              i = e - r.length;
            while (n.length < i) n.push(0);
            return new t(n.concat(r));
          }),
          (BigInteger.prototype.toHex = function (t) {
            return this.toBuffer(t).toString("hex");
          }));
      }).call(this, r(2).Buffer);
    },
    3412: function (t, e, r) {
      var BigInteger = r(2802),
        n = r(3413),
        i = r(3138);
      function o(t) {
        var e = n[t];
        if (!e) return null;
        var r = new BigInteger(e.p, 16),
          o = new BigInteger(e.a, 16),
          u = new BigInteger(e.b, 16),
          f = new BigInteger(e.n, 16),
          s = new BigInteger(e.h, 16),
          c = new BigInteger(e.Gx, 16),
          a = new BigInteger(e.Gy, 16);
        return new i(r, o, u, c, a, f, s);
      }
      t.exports = o;
    },
    3413: function (t) {
      t.exports = JSON.parse(
        '{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}',
      );
    },
    3923: function (t, e, r) {
      var n = r(797);
      function i(t) {
        return n("rmd160").update(t).digest();
      }
      function o(t) {
        return n("sha1").update(t).digest();
      }
      function u(t) {
        return n("sha256").update(t).digest();
      }
      function f(t) {
        return i(u(t));
      }
      function s(t) {
        return u(u(t));
      }
      t.exports = { hash160: f, hash256: s, ripemd160: i, sha1: o, sha256: u };
    },
    4511: function (t, e) {
      t.exports = {
        bitcoin: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
        },
        testnet: {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        },
        litecoin: {
          messagePrefix: "Litecoin Signed Message:\n",
          bip32: { public: 27108450, private: 27106558 },
          pubKeyHash: 48,
          scriptHash: 50,
          wif: 176,
        },
      };
    },
    5406: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(3923),
        o = r(3030),
        u = r(6365),
        f = r(2771),
        s = r(2758),
        c = r(3080),
        a = r(2864);
      function h(t) {
        var e = t.length;
        return a.encodingLength(e) + e;
      }
      function p(t) {
        var e = t.length;
        return (
          a.encodingLength(e) +
          t.reduce(function (t, e) {
            return t + h(e);
          }, 0)
        );
      }
      function l() {
        ((this.version = 1),
          (this.locktime = 0),
          (this.ins = []),
          (this.outs = []));
      }
      ((l.DEFAULT_SEQUENCE = 4294967295),
        (l.SIGHASH_ALL = 1),
        (l.SIGHASH_NONE = 2),
        (l.SIGHASH_SINGLE = 3),
        (l.SIGHASH_ANYONECANPAY = 128),
        (l.ADVANCED_TRANSACTION_MARKER = 0),
        (l.ADVANCED_TRANSACTION_FLAG = 1));
      var d = n.allocUnsafe(0),
        v = [],
        m = n.from(
          "0000000000000000000000000000000000000000000000000000000000000000",
          "hex",
        ),
        y = n.from(
          "0000000000000000000000000000000000000000000000000000000000000001",
          "hex",
        ),
        w = n.from("ffffffffffffffff", "hex"),
        g = { script: d, valueBuffer: w };
      ((l.fromBuffer = function (t, e) {
        var r = 0;
        function n(e) {
          return ((r += e), t.slice(r - e, r));
        }
        function i() {
          var e = t.readUInt32LE(r);
          return ((r += 4), e);
        }
        function o() {
          var e = t.readInt32LE(r);
          return ((r += 4), e);
        }
        function f() {
          var e = u.readUInt64LE(t, r);
          return ((r += 8), e);
        }
        function s() {
          var e = a.decode(t, r);
          return ((r += a.decode.bytes), e);
        }
        function c() {
          return n(s());
        }
        function h() {
          for (var t = s(), e = [], r = 0; r < t; r++) e.push(c());
          return e;
        }
        var p = new l();
        p.version = o();
        var d = t.readUInt8(r),
          m = t.readUInt8(r + 1),
          y = !1;
        d === l.ADVANCED_TRANSACTION_MARKER &&
          m === l.ADVANCED_TRANSACTION_FLAG &&
          ((r += 2), (y = !0));
        for (var w = s(), g = 0; g < w; ++g)
          p.ins.push({
            hash: n(32),
            index: i(),
            script: c(),
            sequence: i(),
            witness: v,
          });
        var b = s();
        for (g = 0; g < b; ++g) p.outs.push({ value: f(), script: c() });
        if (y) {
          for (g = 0; g < w; ++g) p.ins[g].witness = h();
          if (!p.hasWitnesses())
            throw new Error("Transaction has superfluous witness data");
        }
        if (((p.locktime = i()), e)) return p;
        if (r !== t.length) throw new Error("Transaction has unexpected data");
        return p;
      }),
        (l.fromHex = function (t) {
          return l.fromBuffer(n.from(t, "hex"));
        }),
        (l.isCoinbaseHash = function (t) {
          s(c.Hash256bit, t);
          for (var e = 0; e < 32; ++e) if (0 !== t[e]) return !1;
          return !0;
        }),
        (l.prototype.isCoinbase = function () {
          return 1 === this.ins.length && l.isCoinbaseHash(this.ins[0].hash);
        }),
        (l.prototype.addInput = function (t, e, r, n) {
          return (
            s(
              c.tuple(
                c.Hash256bit,
                c.UInt32,
                c.maybe(c.UInt32),
                c.maybe(c.Buffer),
              ),
              arguments,
            ),
            c.Null(r) && (r = l.DEFAULT_SEQUENCE),
            this.ins.push({
              hash: t,
              index: e,
              script: n || d,
              sequence: r,
              witness: v,
            }) - 1
          );
        }),
        (l.prototype.addOutput = function (t, e) {
          return (
            s(c.tuple(c.Buffer, c.Satoshi), arguments),
            this.outs.push({ script: t, value: e }) - 1
          );
        }),
        (l.prototype.hasWitnesses = function () {
          return this.ins.some(function (t) {
            return 0 !== t.witness.length;
          });
        }),
        (l.prototype.weight = function () {
          var t = this.__byteLength(!1),
            e = this.__byteLength(!0);
          return 3 * t + e;
        }),
        (l.prototype.virtualSize = function () {
          return Math.ceil(this.weight() / 4);
        }),
        (l.prototype.byteLength = function () {
          return this.__byteLength(!0);
        }),
        (l.prototype.__byteLength = function (t) {
          var e = t && this.hasWitnesses();
          return (
            (e ? 10 : 8) +
            a.encodingLength(this.ins.length) +
            a.encodingLength(this.outs.length) +
            this.ins.reduce(function (t, e) {
              return t + 40 + h(e.script);
            }, 0) +
            this.outs.reduce(function (t, e) {
              return t + 8 + h(e.script);
            }, 0) +
            (e
              ? this.ins.reduce(function (t, e) {
                  return t + p(e.witness);
                }, 0)
              : 0)
          );
        }),
        (l.prototype.clone = function () {
          var t = new l();
          return (
            (t.version = this.version),
            (t.locktime = this.locktime),
            (t.ins = this.ins.map(function (t) {
              return {
                hash: t.hash,
                index: t.index,
                script: t.script,
                sequence: t.sequence,
                witness: t.witness,
              };
            })),
            (t.outs = this.outs.map(function (t) {
              return { script: t.script, value: t.value };
            })),
            t
          );
        }),
        (l.prototype.hashForSignature = function (t, e, r) {
          if (
            (s(c.tuple(c.UInt32, c.Buffer, c.Number), arguments),
            t >= this.ins.length)
          )
            return y;
          var u = o.compile(
              o.decompile(e).filter(function (t) {
                return t !== f.OP_CODESEPARATOR;
              }),
            ),
            a = this.clone();
          if ((31 & r) === l.SIGHASH_NONE)
            ((a.outs = []),
              a.ins.forEach(function (e, r) {
                r !== t && (e.sequence = 0);
              }));
          else if ((31 & r) === l.SIGHASH_SINGLE) {
            if (t >= this.outs.length) return y;
            a.outs.length = t + 1;
            for (var h = 0; h < t; h++) a.outs[h] = g;
            a.ins.forEach(function (e, r) {
              r !== t && (e.sequence = 0);
            });
          }
          r & l.SIGHASH_ANYONECANPAY
            ? ((a.ins = [a.ins[t]]), (a.ins[0].script = u))
            : (a.ins.forEach(function (t) {
                t.script = d;
              }),
              (a.ins[t].script = u));
          var p = n.allocUnsafe(a.__byteLength(!1) + 4);
          return (
            p.writeInt32LE(r, p.length - 4),
            a.__toBuffer(p, 0, !1),
            i.hash256(p)
          );
        }),
        (l.prototype.hashForWitnessV0 = function (t, e, r, o) {
          var f, p;
          function d(t) {
            p += t.copy(f, p);
          }
          function v(t) {
            p = f.writeUInt32LE(t, p);
          }
          function y(t) {
            p = u.writeUInt64LE(f, t, p);
          }
          function w(t) {
            (a.encode(t, f, p), (p += a.encode.bytes));
          }
          function g(t) {
            (w(t.length), d(t));
          }
          s(c.tuple(c.UInt32, c.Buffer, c.Satoshi, c.UInt32), arguments);
          var b = m,
            S = m,
            E = m;
          if (
            (o & l.SIGHASH_ANYONECANPAY ||
              ((f = n.allocUnsafe(36 * this.ins.length)),
              (p = 0),
              this.ins.forEach(function (t) {
                (d(t.hash), v(t.index));
              }),
              (S = i.hash256(f))),
            o & l.SIGHASH_ANYONECANPAY ||
              (31 & o) === l.SIGHASH_SINGLE ||
              (31 & o) === l.SIGHASH_NONE ||
              ((f = n.allocUnsafe(4 * this.ins.length)),
              (p = 0),
              this.ins.forEach(function (t) {
                v(t.sequence);
              }),
              (E = i.hash256(f))),
            (31 & o) !== l.SIGHASH_SINGLE && (31 & o) !== l.SIGHASH_NONE)
          ) {
            var P = this.outs.reduce(function (t, e) {
              return t + 8 + h(e.script);
            }, 0);
            ((f = n.allocUnsafe(P)),
              (p = 0),
              this.outs.forEach(function (t) {
                (y(t.value), g(t.script));
              }),
              (b = i.hash256(f)));
          } else if ((31 & o) === l.SIGHASH_SINGLE && t < this.outs.length) {
            var O = this.outs[t];
            ((f = n.allocUnsafe(8 + h(O.script))),
              (p = 0),
              y(O.value),
              g(O.script),
              (b = i.hash256(f)));
          }
          ((f = n.allocUnsafe(156 + h(e))), (p = 0));
          var T = this.ins[t];
          return (
            v(this.version),
            d(S),
            d(E),
            d(T.hash),
            v(T.index),
            g(e),
            y(r),
            v(T.sequence),
            d(b),
            v(this.locktime),
            v(o),
            i.hash256(f)
          );
        }),
        (l.prototype.getHash = function () {
          return i.hash256(this.__toBuffer(void 0, void 0, !1));
        }),
        (l.prototype.getId = function () {
          return this.getHash().reverse().toString("hex");
        }),
        (l.prototype.toBuffer = function (t, e) {
          return this.__toBuffer(t, e, !0);
        }),
        (l.prototype.__toBuffer = function (t, e, r) {
          t || (t = n.allocUnsafe(this.__byteLength(r)));
          var i = e || 0;
          function o(e) {
            i += e.copy(t, i);
          }
          function f(e) {
            i = t.writeUInt8(e, i);
          }
          function s(e) {
            i = t.writeUInt32LE(e, i);
          }
          function c(e) {
            i = t.writeInt32LE(e, i);
          }
          function h(e) {
            i = u.writeUInt64LE(t, e, i);
          }
          function p(e) {
            (a.encode(e, t, i), (i += a.encode.bytes));
          }
          function d(t) {
            (p(t.length), o(t));
          }
          function v(t) {
            (p(t.length), t.forEach(d));
          }
          c(this.version);
          var m = r && this.hasWitnesses();
          return (
            m &&
              (f(l.ADVANCED_TRANSACTION_MARKER),
              f(l.ADVANCED_TRANSACTION_FLAG)),
            p(this.ins.length),
            this.ins.forEach(function (t) {
              (o(t.hash), s(t.index), d(t.script), s(t.sequence));
            }),
            p(this.outs.length),
            this.outs.forEach(function (t) {
              (t.valueBuffer ? o(t.valueBuffer) : h(t.value), d(t.script));
            }),
            m &&
              this.ins.forEach(function (t) {
                v(t.witness);
              }),
            s(this.locktime),
            void 0 !== e ? t.slice(e, i) : t
          );
        }),
        (l.prototype.toHex = function () {
          return this.toBuffer().toString("hex");
        }),
        (l.prototype.setInputScript = function (t, e) {
          (s(c.tuple(c.Number, c.Buffer), arguments), (this.ins[t].script = e));
        }),
        (l.prototype.setWitness = function (t, e) {
          (s(c.tuple(c.Number, [c.Buffer]), arguments),
            (this.ins[t].witness = e));
        }),
        (t.exports = l));
    },
    5407: function (t, e, r) {
      var n = r(5408),
        i = r(3923),
        o = r(8922),
        u = r(377),
        f = r(2758),
        s = r(3080),
        c = r(2838),
        a = r(4511),
        BigInteger = r(2802),
        h = r(2975),
        p = o.__curve;
      function ECPair(t, e, r) {
        if (
          (r &&
            f(
              { compressed: s.maybe(s.Boolean), network: s.maybe(s.Network) },
              r,
            ),
          (r = r || {}),
          t)
        ) {
          if (t.signum() <= 0)
            throw new Error("Private key must be greater than 0");
          if (t.compareTo(p.n) >= 0)
            throw new Error("Private key must be less than the curve order");
          if (e) throw new TypeError("Unexpected publicKey parameter");
          this.d = t;
        } else (f(s.ECPoint, e), (this.__Q = e));
        ((this.compressed = void 0 === r.compressed || r.compressed),
          (this.network = r.network || a.bitcoin));
      }
      (Object.defineProperty(ECPair.prototype, "Q", {
        get: function () {
          return (
            !this.__Q && this.d && (this.__Q = p.G.multiply(this.d)),
            this.__Q
          );
        },
      }),
        (ECPair.fromPublicKeyBuffer = function (t, e) {
          var r = h.Point.decodeFrom(p, t);
          return new ECPair(null, r, { compressed: r.compressed, network: e });
        }),
        (ECPair.fromWIF = function (t, e) {
          var r = c.decode(t),
            n = r.version;
          if (s.Array(e)) {
            if (
              ((e = e
                .filter(function (t) {
                  return n === t.wif;
                })
                .pop()),
              !e)
            )
              throw new Error("Unknown network version");
          } else if (((e = e || a.bitcoin), n !== e.wif))
            throw new Error("Invalid network version");
          var i = BigInteger.fromBuffer(r.privateKey);
          return new ECPair(i, null, { compressed: r.compressed, network: e });
        }),
        (ECPair.makeRandom = function (t) {
          t = t || {};
          var e,
            r = t.rng || u;
          do {
            var n = r(32);
            (f(s.Buffer256bit, n), (e = BigInteger.fromBuffer(n)));
          } while (e.signum() <= 0 || e.compareTo(p.n) >= 0);
          return new ECPair(e, null, t);
        }),
        (ECPair.prototype.getAddress = function () {
          return n.toBase58Check(
            i.hash160(this.getPublicKeyBuffer()),
            this.getNetwork().pubKeyHash,
          );
        }),
        (ECPair.prototype.getNetwork = function () {
          return this.network;
        }),
        (ECPair.prototype.getPublicKeyBuffer = function () {
          return this.Q.getEncoded(this.compressed);
        }),
        (ECPair.prototype.sign = function (t) {
          if (!this.d) throw new Error("Missing private key");
          return o.sign(t, this.d);
        }),
        (ECPair.prototype.toWIF = function () {
          if (!this.d) throw new Error("Missing private key");
          return c.encode(
            this.network.wif,
            this.d.toBuffer(32),
            this.compressed,
          );
        }),
        (ECPair.prototype.verify = function (t, e) {
          return o.verify(t, e, this.Q);
        }),
        (t.exports = ECPair));
    },
    5408: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(8921),
        o = r(2792),
        u = r(3030),
        f = r(4511),
        s = r(2758),
        c = r(3080);
      function a(t) {
        var e = o.decode(t);
        if (e.length < 21) throw new TypeError(t + " is too short");
        if (e.length > 21) throw new TypeError(t + " is too long");
        var r = e.readUInt8(0),
          n = e.slice(1);
        return { version: r, hash: n };
      }
      function h(t) {
        var e = i.decode(t),
          r = i.fromWords(e.words.slice(1));
        return { version: e.words[0], prefix: e.prefix, data: n.from(r) };
      }
      function p(t, e) {
        s(c.tuple(c.Hash160bit, c.UInt8), arguments);
        var r = n.allocUnsafe(21);
        return (r.writeUInt8(e, 0), t.copy(r, 1), o.encode(r));
      }
      function l(t, e, r) {
        var n = i.toWords(t);
        return (n.unshift(e), i.encode(r, n));
      }
      function d(t, e) {
        if (((e = e || f.bitcoin), u.pubKeyHash.output.check(t)))
          return p(u.compile(t).slice(3, 23), e.pubKeyHash);
        if (u.scriptHash.output.check(t))
          return p(u.compile(t).slice(2, 22), e.scriptHash);
        if (u.witnessPubKeyHash.output.check(t))
          return l(u.compile(t).slice(2, 22), 0, e.bech32);
        if (u.witnessScriptHash.output.check(t))
          return l(u.compile(t).slice(2, 34), 0, e.bech32);
        throw new Error(u.toASM(t) + " has no matching Address");
      }
      function v(t, e) {
        var r;
        e = e || f.bitcoin;
        try {
          r = a(t);
        } catch (n) {}
        if (r) {
          if (r.version === e.pubKeyHash)
            return u.pubKeyHash.output.encode(r.hash);
          if (r.version === e.scriptHash)
            return u.scriptHash.output.encode(r.hash);
        } else {
          try {
            r = h(t);
          } catch (n) {}
          if (r) {
            if (r.prefix !== e.bech32)
              throw new Error(t + " has an invalid prefix");
            if (0 === r.version) {
              if (20 === r.data.length)
                return u.witnessPubKeyHash.output.encode(r.data);
              if (32 === r.data.length)
                return u.witnessScriptHash.output.encode(r.data);
            }
          }
        }
        throw new Error(t + " has no matching Script");
      }
      t.exports = {
        fromBase58Check: a,
        fromBech32: h,
        fromOutputScript: d,
        toBase58Check: p,
        toBech32: l,
        toOutputScript: v,
      };
    },
    5409: function (t, e, r) {
      (function (e) {
        var n = r(2898),
          i = r(2758),
          o = r(3080),
          BigInteger = r(2802);
        function ECSignature(t, e) {
          (i(o.tuple(o.BigInt, o.BigInt), arguments),
            (this.r = t),
            (this.s = e));
        }
        ((ECSignature.parseCompact = function (t) {
          if (65 !== t.length) throw new Error("Invalid signature length");
          var e = t.readUInt8(0) - 27;
          if (e !== (7 & e)) throw new Error("Invalid signature parameter");
          var r = !!(4 & e),
            n = 3 & e,
            i = BigInteger.fromBuffer(t.slice(1, 33)),
            o = BigInteger.fromBuffer(t.slice(33));
          return { compressed: r, i: n, signature: new ECSignature(i, o) };
        }),
          (ECSignature.fromDER = function (t) {
            var e = n.decode(t),
              r = BigInteger.fromDERInteger(e.r),
              i = BigInteger.fromDERInteger(e.s);
            return new ECSignature(r, i);
          }),
          (ECSignature.parseScriptSignature = function (t) {
            var e = t.readUInt8(t.length - 1),
              r = -129 & e;
            if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + e);
            return {
              signature: ECSignature.fromDER(t.slice(0, -1)),
              hashType: e,
            };
          }),
          (ECSignature.prototype.toCompact = function (t, r) {
            (r && (t += 4), (t += 27));
            var n = e.alloc(65);
            return (
              n.writeUInt8(t, 0),
              this.r.toBuffer(32).copy(n, 1),
              this.s.toBuffer(32).copy(n, 33),
              n
            );
          }),
          (ECSignature.prototype.toDER = function () {
            var t = e.from(this.r.toDERInteger()),
              r = e.from(this.s.toDERInteger());
            return n.encode(t, r);
          }),
          (ECSignature.prototype.toScriptSignature = function (t) {
            var r = -129 & t;
            if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
            var n = e.alloc(1);
            return (n.writeUInt8(t, 0), e.concat([this.toDER(), n]));
          }),
          (t.exports = ECSignature));
      }).call(this, r(2).Buffer);
    },
    6363: function (t, e, r) {
      var n = r(46).Buffer;
      function i(t, e, r) {
        ((e = e || 4), (r = void 0 === r || r));
        var n = t.length;
        if (0 === n) return 0;
        if (n > e) throw new TypeError("Script number overflow");
        if (r && 0 === (127 & t[n - 1]) && (n <= 1 || 0 === (128 & t[n - 2])))
          throw new Error("Non-minimally encoded script number");
        if (5 === n) {
          var i = t.readUInt32LE(0),
            o = t.readUInt8(4);
          return 128 & o ? -(4294967296 * (-129 & o) + i) : 4294967296 * o + i;
        }
        for (var u = 0, f = 0; f < n; ++f) u |= t[f] << (8 * f);
        return 128 & t[n - 1] ? -(u & ~(128 << (8 * (n - 1)))) : u;
      }
      function o(t) {
        return t > 2147483647
          ? 5
          : t > 8388607
            ? 4
            : t > 32767
              ? 3
              : t > 127
                ? 2
                : t > 0
                  ? 1
                  : 0;
      }
      function u(t) {
        for (
          var e = Math.abs(t), r = o(e), i = n.allocUnsafe(r), u = t < 0, f = 0;
          f < r;
          ++f
        )
          (i.writeUInt8(255 & e, f), (e >>= 8));
        return (
          128 & i[r - 1]
            ? i.writeUInt8(u ? 128 : 0, r - 1)
            : u && (i[r - 1] |= 128),
          i
        );
      }
      t.exports = { decode: i, encode: u };
    },
    6364: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(3030),
        o = r(2758);
      function u(t, e) {
        var r = i.decompile(t);
        if (r.length < 1) return !1;
        var o = r[r.length - 1];
        if (!n.isBuffer(o)) return !1;
        var u = i.decompile(i.compile(r.slice(0, -1))),
          f = i.decompile(o);
        if (0 === f.length) return !1;
        if (!i.isPushOnly(u)) return !1;
        var s = i.classifyInput(u, e),
          c = i.classifyOutput(f);
        return 1 === r.length
          ? c === i.types.P2WSH || c === i.types.P2WPKH
          : s === c;
      }
      function f(t, e) {
        var r = i.compile(e);
        return [].concat(t, r);
      }
      function s(t, e) {
        var r = i.decompile(t);
        return i.compile(f(r, e));
      }
      function c(t) {
        return (
          o(u, t),
          { redeemScriptStack: t.slice(0, -1), redeemScript: t[t.length - 1] }
        );
      }
      function a(t) {
        var e = i.decompile(t),
          r = c(e);
        return (
          (r.redeemScriptSig = i.compile(r.redeemScriptStack)),
          delete r.redeemScriptStack,
          r
        );
      }
      ((u.toJSON = function () {
        return "scriptHash input";
      }),
        (t.exports = {
          check: u,
          decode: a,
          decodeStack: c,
          encode: s,
          encodeStack: f,
        }));
    },
    6365: function (t, e, r) {
      var n = r(3062),
        i = r(2864);
      function o(t, e) {
        if ("number" !== typeof t)
          throw new Error("cannot write a non-number as a number");
        if (t < 0)
          throw new Error(
            "specified a negative value for writing an unsigned value",
          );
        if (t > e) throw new Error("RangeError: value out of range");
        if (Math.floor(t) !== t)
          throw new Error("value has a fractional component");
      }
      function u(t, e) {
        var r = t.readUInt32LE(e),
          n = t.readUInt32LE(e + 4);
        return ((n *= 4294967296), o(n + r, 9007199254740991), n + r);
      }
      function f(t, e, r) {
        return (
          o(e, 9007199254740991),
          t.writeInt32LE(-1 & e, r),
          t.writeUInt32LE(Math.floor(e / 4294967296), r + 4),
          r + 8
        );
      }
      function s(t, e) {
        var r = i.decode(t, e);
        return { number: r, size: i.decode.bytes };
      }
      function c(t, e, r) {
        return (i.encode(e, t, r), i.encode.bytes);
      }
      t.exports = {
        pushDataSize: n.encodingLength,
        readPushDataInt: n.decode,
        readUInt64LE: u,
        readVarInt: s,
        varIntBuffer: i.encode,
        varIntSize: i.encodingLength,
        writePushDataInt: n.encode,
        writeUInt64LE: f,
        writeVarInt: c,
      };
    },
    8898: function (t, e, r) {
      t.exports = {
        Block: r(8899),
        ECPair: r(5407),
        ECSignature: r(5409),
        HDNode: r(8923),
        Transaction: r(5406),
        TransactionBuilder: r(8924),
        address: r(5408),
        bufferutils: r(6365),
        crypto: r(3923),
        networks: r(4511),
        opcodes: r(2771),
        script: r(3030),
      };
    },
    8899: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(3923),
        o = r(3110),
        u = r(2758),
        f = r(3080),
        s = r(2864),
        c = r(5406);
      function Block() {
        ((this.version = 1),
          (this.prevHash = null),
          (this.merkleRoot = null),
          (this.timestamp = 0),
          (this.bits = 0),
          (this.nonce = 0));
      }
      ((Block.fromBuffer = function (t) {
        if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
        var e = 0;
        function r(r) {
          return ((e += r), t.slice(e - r, e));
        }
        function n() {
          var r = t.readUInt32LE(e);
          return ((e += 4), r);
        }
        function i() {
          var r = t.readInt32LE(e);
          return ((e += 4), r);
        }
        var o = new Block();
        if (
          ((o.version = i()),
          (o.prevHash = r(32)),
          (o.merkleRoot = r(32)),
          (o.timestamp = n()),
          (o.bits = n()),
          (o.nonce = n()),
          80 === t.length)
        )
          return o;
        function u() {
          var r = s.decode(t, e);
          return ((e += s.decode.bytes), r);
        }
        function f() {
          var r = c.fromBuffer(t.slice(e), !0);
          return ((e += r.byteLength()), r);
        }
        var a = u();
        o.transactions = [];
        for (var h = 0; h < a; ++h) {
          var p = f();
          o.transactions.push(p);
        }
        return o;
      }),
        (Block.prototype.byteLength = function (t) {
          return t || !this.transactions
            ? 80
            : 80 +
                s.encodingLength(this.transactions.length) +
                this.transactions.reduce(function (t, e) {
                  return t + e.byteLength();
                }, 0);
        }),
        (Block.fromHex = function (t) {
          return Block.fromBuffer(n.from(t, "hex"));
        }),
        (Block.prototype.getHash = function () {
          return i.hash256(this.toBuffer(!0));
        }),
        (Block.prototype.getId = function () {
          return this.getHash().reverse().toString("hex");
        }),
        (Block.prototype.getUTCDate = function () {
          var t = new Date(0);
          return (t.setUTCSeconds(this.timestamp), t);
        }),
        (Block.prototype.toBuffer = function (t) {
          var e = n.allocUnsafe(this.byteLength(t)),
            r = 0;
          function i(t) {
            (t.copy(e, r), (r += t.length));
          }
          function o(t) {
            (e.writeInt32LE(t, r), (r += 4));
          }
          function u(t) {
            (e.writeUInt32LE(t, r), (r += 4));
          }
          return (
            o(this.version),
            i(this.prevHash),
            i(this.merkleRoot),
            u(this.timestamp),
            u(this.bits),
            u(this.nonce),
            t ||
              !this.transactions ||
              (s.encode(this.transactions.length, e, r),
              (r += s.encode.bytes),
              this.transactions.forEach(function (t) {
                var n = t.byteLength();
                (t.toBuffer(e, r), (r += n));
              })),
            e
          );
        }),
        (Block.prototype.toHex = function (t) {
          return this.toBuffer(t).toString("hex");
        }),
        (Block.calculateTarget = function (t) {
          var e = ((4278190080 & t) >> 24) - 3,
            r = 8388607 & t,
            i = n.alloc(32, 0);
          return (i.writeUInt32BE(r, 28 - e), i);
        }),
        (Block.calculateMerkleRoot = function (t) {
          if ((u([{ getHash: f.Function }], t), 0 === t.length))
            throw TypeError("Cannot compute merkle root for zero transactions");
          var e = t.map(function (t) {
            return t.getHash();
          });
          return o(e, i.hash256);
        }),
        (Block.prototype.checkMerkleRoot = function () {
          if (!this.transactions) return !1;
          var t = Block.calculateMerkleRoot(this.transactions);
          return 0 === this.merkleRoot.compare(t);
        }),
        (Block.prototype.checkProofOfWork = function () {
          var t = this.getHash().reverse(),
            e = Block.calculateTarget(this.bits);
          return t.compare(e) <= 0;
        }),
        (t.exports = Block));
    },
    8900: function (t, e, r) {
      var n = r(3030).decompile,
        i = r(8901),
        o = r(8904),
        u = r(8905),
        f = r(8908),
        s = r(8911),
        c = r(8913),
        a = r(8916),
        h = r(8919),
        p = {
          MULTISIG: "multisig",
          NONSTANDARD: "nonstandard",
          NULLDATA: "nulldata",
          P2PK: "pubkey",
          P2PKH: "pubkeyhash",
          P2SH: "scripthash",
          P2WPKH: "witnesspubkeyhash",
          P2WSH: "witnessscripthash",
          WITNESS_COMMITMENT: "witnesscommitment",
        };
      function l(t) {
        if (c.output.check(t)) return p.P2WPKH;
        if (a.output.check(t)) return p.P2WSH;
        if (f.output.check(t)) return p.P2PKH;
        if (s.output.check(t)) return p.P2SH;
        var e = n(t);
        return i.output.check(e)
          ? p.MULTISIG
          : u.output.check(e)
            ? p.P2PK
            : h.output.check(e)
              ? p.WITNESS_COMMITMENT
              : o.output.check(e)
                ? p.NULLDATA
                : p.NONSTANDARD;
      }
      function d(t, e) {
        var r = n(t);
        return f.input.check(r)
          ? p.P2PKH
          : s.input.check(r, e)
            ? p.P2SH
            : i.input.check(r, e)
              ? p.MULTISIG
              : u.input.check(r)
                ? p.P2PK
                : p.NONSTANDARD;
      }
      function v(t, e) {
        var r = n(t);
        return c.input.check(r)
          ? p.P2WPKH
          : a.input.check(r, e)
            ? p.P2WSH
            : p.NONSTANDARD;
      }
      t.exports = {
        classifyInput: d,
        classifyOutput: l,
        classifyWitness: v,
        multisig: i,
        nullData: o,
        pubKey: u,
        pubKeyHash: f,
        scriptHash: s,
        witnessPubKeyHash: c,
        witnessScriptHash: a,
        witnessCommitment: h,
        types: p,
      };
    },
    8901: function (t, e, r) {
      t.exports = { input: r(8902), output: r(8903) };
    },
    8902: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(3030),
        o = r(2758),
        u = r(2771);
      function f(t) {
        return t === u.OP_0 || i.isCanonicalSignature(t);
      }
      function s(t, e) {
        var r = i.decompile(t);
        return (
          !(r.length < 2) &&
          r[0] === u.OP_0 &&
          (e ? r.slice(1).every(f) : r.slice(1).every(i.isCanonicalSignature))
        );
      }
      s.toJSON = function () {
        return "multisig input";
      };
      var c = n.allocUnsafe(0);
      function a(t, e) {
        if ((o([f], t), e)) {
          var r = i.multisig.output.decode(e);
          if (t.length < r.m)
            throw new TypeError("Not enough signatures provided");
          if (t.length > r.pubKeys.length)
            throw new TypeError("Too many signatures provided");
        }
        return [].concat(
          c,
          t.map(function (t) {
            return t === u.OP_0 ? c : t;
          }),
        );
      }
      function h(t, e) {
        return i.compile(a(t, e));
      }
      function p(t, e) {
        return (o(s, t, e), t.slice(1));
      }
      function l(t, e) {
        var r = i.decompile(t);
        return p(r, e);
      }
      t.exports = {
        check: s,
        decode: l,
        decodeStack: p,
        encode: h,
        encodeStack: a,
      };
    },
    8903: function (t, e, r) {
      var n = r(3030),
        i = r(3080),
        o = r(2758),
        u = r(2771),
        f = u.OP_RESERVED;
      function s(t, e) {
        var r = n.decompile(t);
        if (r.length < 4) return !1;
        if (r[r.length - 1] !== u.OP_CHECKMULTISIG) return !1;
        if (!i.Number(r[0])) return !1;
        if (!i.Number(r[r.length - 2])) return !1;
        var o = r[0] - f,
          s = r[r.length - 2] - f;
        if (o <= 0) return !1;
        if (s > 16) return !1;
        if (o > s) return !1;
        if (s !== r.length - 3) return !1;
        if (e) return !0;
        var c = r.slice(1, -2);
        return c.every(n.isCanonicalPubKey);
      }
      function c(t, e) {
        o(
          { m: i.Number, pubKeys: [n.isCanonicalPubKey] },
          { m: t, pubKeys: e },
        );
        var r = e.length;
        if (r < t) throw new TypeError("Not enough pubKeys provided");
        return n.compile([].concat(f + t, e, f + r, u.OP_CHECKMULTISIG));
      }
      function a(t, e) {
        var r = n.decompile(t);
        return (o(s, r, e), { m: r[0] - f, pubKeys: r.slice(1, -2) });
      }
      ((s.toJSON = function () {
        return "multi-sig output";
      }),
        (t.exports = { check: s, decode: a, encode: c }));
    },
    8904: function (t, e, r) {
      var n = r(3030),
        i = r(3080),
        o = r(2758),
        u = r(2771);
      function f(t) {
        var e = n.compile(t);
        return e.length > 1 && e[0] === u.OP_RETURN;
      }
      function s(t) {
        return (o(i.Buffer, t), n.compile([u.OP_RETURN, t]));
      }
      function c(t) {
        return (o(f, t), t.slice(2));
      }
      ((f.toJSON = function () {
        return "null data output";
      }),
        (t.exports = { output: { check: f, decode: c, encode: s } }));
    },
    8905: function (t, e, r) {
      t.exports = { input: r(8906), output: r(8907) };
    },
    8906: function (t, e, r) {
      var n = r(3030),
        i = r(2758);
      function o(t) {
        var e = n.decompile(t);
        return 1 === e.length && n.isCanonicalSignature(e[0]);
      }
      function u(t) {
        return (i(n.isCanonicalSignature, t), [t]);
      }
      function f(t) {
        return n.compile(u(t));
      }
      function s(t) {
        return (i(o, t), t[0]);
      }
      function c(t) {
        var e = n.decompile(t);
        return s(e);
      }
      ((o.toJSON = function () {
        return "pubKey input";
      }),
        (t.exports = {
          check: o,
          decode: c,
          decodeStack: s,
          encode: f,
          encodeStack: u,
        }));
    },
    8907: function (t, e, r) {
      var n = r(3030),
        i = r(2758),
        o = r(2771);
      function u(t) {
        var e = n.decompile(t);
        return (
          2 === e.length && n.isCanonicalPubKey(e[0]) && e[1] === o.OP_CHECKSIG
        );
      }
      function f(t) {
        return (i(n.isCanonicalPubKey, t), n.compile([t, o.OP_CHECKSIG]));
      }
      function s(t) {
        var e = n.decompile(t);
        return (i(u, e), e[0]);
      }
      ((u.toJSON = function () {
        return "pubKey output";
      }),
        (t.exports = { check: u, decode: s, encode: f }));
    },
    8908: function (t, e, r) {
      t.exports = { input: r(8909), output: r(8910) };
    },
    8909: function (t, e, r) {
      var n = r(3030),
        i = r(2758);
      function o(t) {
        var e = n.decompile(t);
        return (
          2 === e.length &&
          n.isCanonicalSignature(e[0]) &&
          n.isCanonicalPubKey(e[1])
        );
      }
      function u(t, e) {
        return (
          i(
            { signature: n.isCanonicalSignature, pubKey: n.isCanonicalPubKey },
            { signature: t, pubKey: e },
          ),
          [t, e]
        );
      }
      function f(t, e) {
        return n.compile(u(t, e));
      }
      function s(t) {
        return (i(o, t), { signature: t[0], pubKey: t[1] });
      }
      function c(t) {
        var e = n.decompile(t);
        return s(e);
      }
      ((o.toJSON = function () {
        return "pubKeyHash input";
      }),
        (t.exports = {
          check: o,
          decode: c,
          decodeStack: s,
          encode: f,
          encodeStack: u,
        }));
    },
    8910: function (t, e, r) {
      var n = r(3030),
        i = r(3080),
        o = r(2758),
        u = r(2771);
      function f(t) {
        var e = n.compile(t);
        return (
          25 === e.length &&
          e[0] === u.OP_DUP &&
          e[1] === u.OP_HASH160 &&
          20 === e[2] &&
          e[23] === u.OP_EQUALVERIFY &&
          e[24] === u.OP_CHECKSIG
        );
      }
      function s(t) {
        return (
          o(i.Hash160bit, t),
          n.compile([
            u.OP_DUP,
            u.OP_HASH160,
            t,
            u.OP_EQUALVERIFY,
            u.OP_CHECKSIG,
          ])
        );
      }
      function c(t) {
        return (o(f, t), t.slice(3, 23));
      }
      ((f.toJSON = function () {
        return "pubKeyHash output";
      }),
        (t.exports = { check: f, decode: c, encode: s }));
    },
    8911: function (t, e, r) {
      t.exports = { input: r(6364), output: r(8912) };
    },
    8912: function (t, e, r) {
      var n = r(3030),
        i = r(3080),
        o = r(2758),
        u = r(2771);
      function f(t) {
        var e = n.compile(t);
        return (
          23 === e.length &&
          e[0] === u.OP_HASH160 &&
          20 === e[1] &&
          e[22] === u.OP_EQUAL
        );
      }
      function s(t) {
        return (o(i.Hash160bit, t), n.compile([u.OP_HASH160, t, u.OP_EQUAL]));
      }
      function c(t) {
        return (o(f, t), t.slice(2, 22));
      }
      ((f.toJSON = function () {
        return "scriptHash output";
      }),
        (t.exports = { check: f, decode: c, encode: s }));
    },
    8913: function (t, e, r) {
      t.exports = { input: r(8914), output: r(8915) };
    },
    8914: function (t, e, r) {
      var n = r(3030),
        i = r(2758);
      function o(t) {
        return n.isCanonicalPubKey(t) && 33 === t.length;
      }
      function u(t) {
        var e = n.decompile(t);
        return 2 === e.length && n.isCanonicalSignature(e[0]) && o(e[1]);
      }
      function f(t, e) {
        return (
          i(
            { signature: n.isCanonicalSignature, pubKey: o },
            { signature: t, pubKey: e },
          ),
          [t, e]
        );
      }
      function s(t) {
        return (i(u, t), { signature: t[0], pubKey: t[1] });
      }
      ((u.toJSON = function () {
        return "witnessPubKeyHash input";
      }),
        (t.exports = { check: u, decodeStack: s, encodeStack: f }));
    },
    8915: function (t, e, r) {
      var n = r(3030),
        i = r(3080),
        o = r(2758),
        u = r(2771);
      function f(t) {
        var e = n.compile(t);
        return 22 === e.length && e[0] === u.OP_0 && 20 === e[1];
      }
      function s(t) {
        return (o(i.Hash160bit, t), n.compile([u.OP_0, t]));
      }
      function c(t) {
        return (o(f, t), t.slice(2));
      }
      ((f.toJSON = function () {
        return "Witness pubKeyHash output";
      }),
        (t.exports = { check: f, decode: c, encode: s }));
    },
    8916: function (t, e, r) {
      t.exports = { input: r(8917), output: r(8918) };
    },
    8917: function (t, e, r) {
      var n = r(6364);
      t.exports = {
        check: n.check,
        decodeStack: n.decodeStack,
        encodeStack: n.encodeStack,
      };
    },
    8918: function (t, e, r) {
      var n = r(3030),
        i = r(3080),
        o = r(2758),
        u = r(2771);
      function f(t) {
        var e = n.compile(t);
        return 34 === e.length && e[0] === u.OP_0 && 32 === e[1];
      }
      function s(t) {
        return (o(i.Hash256bit, t), n.compile([u.OP_0, t]));
      }
      function c(t) {
        return (o(f, t), t.slice(2));
      }
      ((f.toJSON = function () {
        return "Witness scriptHash output";
      }),
        (t.exports = { check: f, decode: c, encode: s }));
    },
    8919: function (t, e, r) {
      t.exports = { output: r(8920) };
    },
    8920: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(3030),
        o = r(3080),
        u = r(2758),
        f = r(2771),
        s = n.from("aa21a9ed", "hex");
      function c(t) {
        var e = i.compile(t);
        return (
          e.length > 37 &&
          e[0] === f.OP_RETURN &&
          36 === e[1] &&
          e.slice(2, 6).equals(s)
        );
      }
      function a(t) {
        u(o.Hash256bit, t);
        var e = n.allocUnsafe(36);
        return (s.copy(e, 0), t.copy(e, 4), i.compile([f.OP_RETURN, e]));
      }
      function h(t) {
        return (u(c, t), i.decompile(t)[1].slice(4, 36));
      }
      ((c.toJSON = function () {
        return "Witness commitment output";
      }),
        (t.exports = { check: c, decode: h, encode: a }));
    },
    8921: function (t, e, r) {
      "use strict";
      let n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
        i = {};
      for (let p = 0; p < n.length; p++) {
        let t = n.charAt(p);
        if (void 0 !== i[t]) throw new TypeError(t + " is ambiguous");
        i[t] = p;
      }
      function o(t) {
        let e = t >> 25;
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((e >> 0) & 1)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        );
      }
      function u(t) {
        let e = 1;
        for (let r = 0; r < t.length; ++r) {
          let n = t.charCodeAt(r);
          if (n < 33 || n > 126) throw new Error("Invalid prefix (" + t + ")");
          e = o(e) ^ (n >> 5);
        }
        e = o(e);
        for (let r = 0; r < t.length; ++r) {
          let n = t.charCodeAt(r);
          e = o(e) ^ (31 & n);
        }
        return e;
      }
      function f(t, e) {
        if (t.length + 7 + e.length > 90)
          throw new TypeError("Exceeds Bech32 maximum length");
        t = t.toLowerCase();
        let r = u(t),
          i = t + "1";
        for (let u = 0; u < e.length; ++u) {
          let t = e[u];
          if (t >> 5 !== 0) throw new Error("Non 5-bit word");
          ((r = o(r) ^ t), (i += n.charAt(t)));
        }
        for (let n = 0; n < 6; ++n) r = o(r);
        r ^= 1;
        for (let o = 0; o < 6; ++o) {
          let t = (r >> (5 * (5 - o))) & 31;
          i += n.charAt(t);
        }
        return i;
      }
      function s(t) {
        if (t.length < 8) throw new TypeError(t + " too short");
        if (t.length > 90) throw new TypeError(t + " too long");
        let e = t.toLowerCase(),
          r = t.toUpperCase();
        if (t !== e && t !== r) throw new Error("Mixed-case string " + t);
        t = e;
        let n = t.lastIndexOf("1");
        if (0 === n) throw new Error("Missing prefix for " + t);
        let f = t.slice(0, n),
          s = t.slice(n + 1);
        if (s.length < 6) throw new Error("Data too short");
        let c = u(f),
          a = [];
        for (let u = 0; u < s.length; ++u) {
          let t = s.charAt(u),
            e = i[t];
          if (void 0 === e) throw new Error("Unknown character " + t);
          ((c = o(c) ^ e), u + 6 >= s.length || a.push(e));
        }
        if (1 !== c) throw new Error("Invalid checksum for " + t);
        return { prefix: f, words: a };
      }
      function c(t, e, r, n) {
        let i = 0,
          o = 0,
          u = (1 << r) - 1,
          f = [];
        for (let s = 0; s < t.length; ++s) {
          ((i = (i << e) | t[s]), (o += e));
          while (o >= r) ((o -= r), f.push((i >> o) & u));
        }
        if (n) o > 0 && f.push((i << (r - o)) & u);
        else {
          if (o >= e) throw new Error("Excess padding");
          if ((i << (r - o)) & u) throw new Error("Non-zero padding");
        }
        return f;
      }
      function a(t) {
        return c(t, 8, 5, !0);
      }
      function h(t) {
        return c(t, 5, 8, !1);
      }
      t.exports = { decode: s, encode: f, toWords: a, fromWords: h };
    },
    8922: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(2828),
        o = r(2758),
        u = r(3080),
        BigInteger = r(2802),
        ECSignature = r(5409),
        f = n.alloc(1, 0),
        s = n.alloc(1, 1),
        c = r(2975),
        a = c.getCurveByName("secp256r1");
      function h(t, e, r) {
        o(u.tuple(u.Hash256bit, u.Buffer256bit, u.Function), arguments);
        var c = n.alloc(32, 0),
          h = n.alloc(32, 1);
        ((c = i("sha256", c).update(h).update(f).update(e).update(t).digest()),
          (h = i("sha256", c).update(h).digest()),
          (c = i("sha256", c).update(h).update(s).update(e).update(t).digest()),
          (h = i("sha256", c).update(h).digest()),
          (h = i("sha256", c).update(h).digest()));
        var p = BigInteger.fromBuffer(h);
        while (p.signum() <= 0 || p.compareTo(a.n) >= 0 || !r(p))
          ((c = i("sha256", c).update(h).update(f).digest()),
            (h = i("sha256", c).update(h).digest()),
            (h = i("sha256", c).update(h).digest()),
            (p = BigInteger.fromBuffer(h)));
        return p;
      }
      var p = a.n.shiftRight(1);
      function l(t, e) {
        o(u.tuple(u.Hash256bit, u.BigInt), arguments);
        var r,
          n,
          i = e.toBuffer(32),
          f = BigInteger.fromBuffer(t),
          s = a.n,
          c = a.G;
        return (
          h(t, i, function (t) {
            var i = c.multiply(t);
            return (
              !a.isInfinity(i) &&
              ((r = i.affineX.mod(s)),
              0 !== r.signum() &&
                ((n = t
                  .modInverse(s)
                  .multiply(f.add(e.multiply(r)))
                  .mod(s)),
                0 !== n.signum()))
            );
          }),
          n.compareTo(p) > 0 && (n = s.subtract(n)),
          new ECSignature(r, n)
        );
      }
      function d(t, e, r) {
        o(u.tuple(u.Hash256bit, u.ECSignature, u.ECPoint), arguments);
        var n = a.n,
          i = a.G,
          f = e.r,
          s = e.s;
        if (f.signum() <= 0 || f.compareTo(n) >= 0) return !1;
        if (s.signum() <= 0 || s.compareTo(n) >= 0) return !1;
        var c = BigInteger.fromBuffer(t),
          h = s.modInverse(n),
          p = c.multiply(h).mod(n),
          l = f.multiply(h).mod(n),
          d = i.multiplyTwo(p, r, l);
        if (a.isInfinity(d)) return !1;
        var v = d.affineX,
          m = v.mod(n);
        return m.equals(f);
      }
      t.exports = { deterministicGenerateK: h, sign: l, verify: d, __curve: a };
    },
    8923: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(2792),
        o = r(3923),
        u = r(2828),
        f = r(2758),
        s = r(3080),
        c = r(4511),
        BigInteger = r(2802),
        ECPair = r(5407),
        a = r(2975),
        h = a.getCurveByName("secp256r1");
      function HDNode(t, e) {
        if ((f(s.tuple("ECPair", s.Buffer256bit), arguments), !t.compressed))
          throw new TypeError("BIP32 only allows compressed keyPairs");
        ((this.keyPair = t),
          (this.chainCode = e),
          (this.depth = 0),
          (this.index = 0),
          (this.parentFingerprint = 0));
      }
      ((HDNode.HIGHEST_BIT = 2147483648),
        (HDNode.LENGTH = 78),
        (HDNode.MASTER_SECRET = n.from("Nist256p1 seed", "utf8")),
        (HDNode.fromSeedBuffer = function (t, e) {
          if (
            (f(s.tuple(s.Buffer, s.maybe(s.Network)), arguments), t.length < 16)
          )
            throw new TypeError("Seed should be at least 128 bits");
          if (t.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          var r = u("sha512", HDNode.MASTER_SECRET).update(t).digest(),
            n = r.slice(0, 32),
            i = r.slice(32),
            o = BigInteger.fromBuffer(n),
            c = new ECPair(o, null, { network: e });
          return new HDNode(c, i);
        }),
        (HDNode.fromSeedHex = function (t, e) {
          return HDNode.fromSeedBuffer(n.from(t, "hex"), e);
        }),
        (HDNode.fromBase58 = function (t, e) {
          var r = i.decode(t);
          if (78 !== r.length) throw new Error("Invalid buffer length");
          var n,
            o = r.readUInt32BE(0);
          if (Array.isArray(e)) {
            if (
              ((n = e
                .filter(function (t) {
                  return o === t.bip32.private || o === t.bip32.public;
                })
                .pop()),
              !n)
            )
              throw new Error("Unknown network version");
          } else n = e || c.bitcoin;
          if (o !== n.bip32.private && o !== n.bip32.public)
            throw new Error("Invalid network version");
          var u = r[4],
            f = r.readUInt32BE(5);
          if (0 === u && 0 !== f) throw new Error("Invalid parent fingerprint");
          var s = r.readUInt32BE(9);
          if (0 === u && 0 !== s) throw new Error("Invalid index");
          var p,
            l = r.slice(13, 45);
          if (o === n.bip32.private) {
            if (0 !== r.readUInt8(45)) throw new Error("Invalid private key");
            var d = BigInteger.fromBuffer(r.slice(46, 78));
            p = new ECPair(d, null, { network: n });
          } else {
            var v = a.Point.decodeFrom(h, r.slice(45, 78));
            (h.validate(v), (p = new ECPair(null, v, { network: n })));
          }
          var m = new HDNode(p, l);
          return ((m.depth = u), (m.index = s), (m.parentFingerprint = f), m);
        }),
        (HDNode.prototype.getAddress = function () {
          return this.keyPair.getAddress();
        }),
        (HDNode.prototype.getIdentifier = function () {
          return o.hash160(this.keyPair.getPublicKeyBuffer());
        }),
        (HDNode.prototype.getFingerprint = function () {
          return this.getIdentifier().slice(0, 4);
        }),
        (HDNode.prototype.getNetwork = function () {
          return this.keyPair.getNetwork();
        }),
        (HDNode.prototype.getPublicKeyBuffer = function () {
          return this.keyPair.getPublicKeyBuffer();
        }),
        (HDNode.prototype.neutered = function () {
          var t = new ECPair(null, this.keyPair.Q, {
              network: this.keyPair.network,
            }),
            e = new HDNode(t, this.chainCode);
          return (
            (e.depth = this.depth),
            (e.index = this.index),
            (e.parentFingerprint = this.parentFingerprint),
            e
          );
        }),
        (HDNode.prototype.sign = function (t) {
          return this.keyPair.sign(t);
        }),
        (HDNode.prototype.verify = function (t, e) {
          return this.keyPair.verify(t, e);
        }),
        (HDNode.prototype.toBase58 = function (t) {
          if (void 0 !== t)
            throw new TypeError("Unsupported argument in 2.0.0");
          var e = this.keyPair.network,
            r = this.isNeutered() ? e.bip32.public : e.bip32.private,
            o = n.allocUnsafe(78);
          return (
            o.writeUInt32BE(r, 0),
            o.writeUInt8(this.depth, 4),
            o.writeUInt32BE(this.parentFingerprint, 5),
            o.writeUInt32BE(this.index, 9),
            this.chainCode.copy(o, 13),
            this.isNeutered()
              ? this.keyPair.getPublicKeyBuffer().copy(o, 45)
              : (o.writeUInt8(0, 45), this.keyPair.d.toBuffer(32).copy(o, 46)),
            i.encode(o)
          );
        }),
        (HDNode.prototype.derive = function (t) {
          f(s.UInt32, t);
          var e = t >= HDNode.HIGHEST_BIT,
            r = n.allocUnsafe(37);
          if (e) {
            if (this.isNeutered())
              throw new TypeError("Could not derive hardened child key");
            ((r[0] = 0),
              this.keyPair.d.toBuffer(32).copy(r, 1),
              r.writeUInt32BE(t, 33));
          } else
            (this.keyPair.getPublicKeyBuffer().copy(r, 0),
              r.writeUInt32BE(t, 33));
          var i,
            o = u("sha512", this.chainCode).update(r).digest(),
            c = o.slice(0, 32),
            a = o.slice(32),
            p = BigInteger.fromBuffer(c);
          if (p.compareTo(h.n) >= 0) return this.derive(t + 1);
          if (this.isNeutered()) {
            var l = h.G.multiply(p).add(this.keyPair.Q);
            if (h.isInfinity(l)) return this.derive(t + 1);
            i = new ECPair(null, l, { network: this.keyPair.network });
          } else {
            var d = p.add(this.keyPair.d).mod(h.n);
            if (0 === d.signum()) return this.derive(t + 1);
            i = new ECPair(d, null, { network: this.keyPair.network });
          }
          var v = new HDNode(i, a);
          return (
            (v.depth = this.depth + 1),
            (v.index = t),
            (v.parentFingerprint = this.getFingerprint().readUInt32BE(0)),
            v
          );
        }),
        (HDNode.prototype.deriveHardened = function (t) {
          return (f(s.UInt31, t), this.derive(t + HDNode.HIGHEST_BIT));
        }),
        (HDNode.prototype.isNeutered = function () {
          return !this.keyPair.d;
        }),
        (HDNode.prototype.derivePath = function (t) {
          f(s.BIP32Path, t);
          var e = t.split("/");
          if ("m" === e[0]) {
            if (this.parentFingerprint) throw new Error("Not a master node");
            e = e.slice(1);
          }
          return e.reduce(function (t, e) {
            var r;
            return "'" === e.slice(-1)
              ? ((r = parseInt(e.slice(0, -1), 10)), t.deriveHardened(r))
              : ((r = parseInt(e, 10)), t.derive(r));
          }, this);
        }),
        (t.exports = HDNode));
    },
    8924: function (t, e, r) {
      var n = r(46).Buffer,
        i = r(5408),
        o = r(3923),
        u = r(3030),
        f = r(4511),
        s = r(2771),
        c = r(2758),
        a = r(3080),
        h = u.types,
        p = [u.types.P2PKH, u.types.P2PK, u.types.MULTISIG],
        l = p.concat([u.types.P2WPKH, u.types.P2WSH]),
        ECPair = r(5407),
        ECSignature = r(5409),
        d = r(5406);
      function v(t) {
        return -1 !== p.indexOf(t);
      }
      function m(t) {
        return -1 !== l.indexOf(t);
      }
      function y(t, e, r) {
        var n = [],
          i = [];
        switch (t) {
          case h.P2PKH:
            ((n = e.slice(1)), (i = e.slice(0, 1)));
            break;
          case h.P2PK:
            ((n[0] = r ? u.pubKey.output.decode(r) : void 0),
              (i = e.slice(0, 1)));
            break;
          case h.MULTISIG:
            if (r) {
              var o = u.multisig.output.decode(r);
              n = o.pubKeys;
            }
            i = e.slice(1).map(function (t) {
              return 0 === t.length ? void 0 : t;
            });
            break;
        }
        return { pubKeys: n, signatures: i };
      }
      function w(t, e) {
        if (0 === t.length && 0 === e.length) return {};
        var r,
          n,
          i,
          f,
          s,
          c,
          a,
          p,
          l,
          d,
          w = !1,
          g = !1,
          b = !1,
          S = u.decompile(t),
          E = u.classifyInput(S, !0);
        E === h.P2SH &&
          ((b = !0),
          (s = S[S.length - 1]),
          (p = u.classifyOutput(s)),
          (r = u.scriptHash.output.encode(o.hash160(s))),
          (n = h.P2SH),
          (f = s));
        var P = u.classifyWitness(e, !0);
        if (P === h.P2WSH) {
          if (
            ((c = e[e.length - 1]),
            (a = u.classifyOutput(c)),
            (g = !0),
            (w = !0),
            0 === t.length)
          ) {
            if (
              ((r = u.witnessScriptHash.output.encode(o.sha256(c))),
              (n = h.P2WSH),
              void 0 !== s)
            )
              throw new Error("Redeem script given when unnecessary");
          } else {
            if (!s)
              throw new Error(
                "No redeemScript provided for P2WSH, but scriptSig non-empty",
              );
            if (
              ((l = u.witnessScriptHash.output.encode(o.sha256(c))),
              !s.equals(l))
            )
              throw new Error("Redeem script didn't match witnessScript");
          }
          if (!v(u.classifyOutput(c)))
            throw new Error("unsupported witness script");
          ((f = c), (i = a), (d = e.slice(0, -1)));
        } else if (P === h.P2WPKH) {
          w = !0;
          var O = e[e.length - 1],
            T = o.hash160(O);
          if (0 === t.length) {
            if (
              ((r = u.witnessPubKeyHash.output.encode(T)),
              (n = h.P2WPKH),
              "undefined" !== typeof s)
            )
              throw new Error("Redeem script given when unnecessary");
          } else {
            if (!s)
              throw new Error(
                "No redeemScript provided for P2WPKH, but scriptSig wasn't empty",
              );
            if (((l = u.witnessPubKeyHash.output.encode(T)), !s.equals(l)))
              throw new Error(
                "Redeem script did not have the right witness program",
              );
          }
          ((i = h.P2PKH), (d = e));
        } else if (s) {
          if (!m(p)) throw new Error("Bad redeemscript!");
          ((f = s), (i = p), (d = S.slice(0, -1)));
        } else ((n = i = u.classifyInput(t)), (d = S));
        var I = y(i, d, f),
          _ = {
            pubKeys: I.pubKeys,
            signatures: I.signatures,
            prevOutScript: r,
            prevOutType: n,
            signType: i,
            signScript: f,
            witness: Boolean(w),
          };
        return (
          b && ((_.redeemScript = s), (_.redeemScriptType = p)),
          g && ((_.witnessScript = c), (_.witnessScriptType = a)),
          _
        );
      }
      function g(t, e, r) {
        if (
          t.redeemScriptType === h.MULTISIG &&
          t.redeemScript &&
          t.pubKeys.length !== t.signatures.length
        ) {
          var n = t.signatures.concat();
          t.signatures = t.pubKeys.map(function (i) {
            var o,
              u = ECPair.fromPublicKeyBuffer(i);
            return (
              n.some(function (i, f) {
                if (!i) return !1;
                var s = ECSignature.parseScriptSignature(i),
                  c = e.hashForSignature(r, t.redeemScript, s.hashType);
                return (
                  !!u.verify(c, s.signature) && ((n[f] = void 0), (o = i), !0)
                );
              }),
              o
            );
          });
        }
      }
      function b(t, e, r) {
        c(a.Buffer, t);
        var n = u.decompile(t);
        e || (e = u.classifyOutput(t));
        var i = [];
        switch (e) {
          case h.P2PKH:
            if (!r) break;
            var f = n[2],
              s = o.hash160(r);
            f.equals(s) && (i = [r]);
            break;
          case h.P2WPKH:
            if (!r) break;
            var p = n[1],
              l = o.hash160(r);
            p.equals(l) && (i = [r]);
            break;
          case h.P2PK:
            i = n.slice(0, 1);
            break;
          case h.MULTISIG:
            i = n.slice(1, -2);
            break;
          default:
            return { scriptType: e };
        }
        return { pubKeys: i, scriptType: e, signatures: i.map(function () {}) };
      }
      function S(t, e) {
        if (t.prevOutType) {
          if (t.prevOutType !== h.P2SH)
            throw new Error("PrevOutScript must be P2SH");
          var r = u.decompile(t.prevOutScript)[1];
          if (!r.equals(e))
            throw new Error("Inconsistent hash160(RedeemScript)");
        }
      }
      function E(t, e) {
        if (t.prevOutType) {
          if (t.prevOutType !== h.P2WSH)
            throw new Error("PrevOutScript must be P2WSH");
          var r = u.decompile(t.prevOutScript)[1];
          if (!r.equals(e))
            throw new Error("Inconsistent sha25(WitnessScript)");
        }
      }
      function P(t, e, r, n, i) {
        var f,
          s,
          p,
          l,
          d,
          v,
          m,
          y,
          w,
          g = !1,
          P = !1,
          O = !1;
        if (r && i) {
          if (
            ((d = o.hash160(r)),
            (m = o.sha256(i)),
            S(t, d),
            !r.equals(u.witnessScriptHash.output.encode(m)))
          )
            throw new Error("Witness script inconsistent with redeem script");
          if (((f = b(i, void 0, e)), !f.pubKeys))
            throw new Error('WitnessScript not supported "' + u.toASM(r) + '"');
          ((s = u.types.P2SH),
            (p = u.scriptHash.output.encode(d)),
            (g = P = O = !0),
            (l = u.types.P2WSH),
            (y = v = f.scriptType),
            (w = i));
        } else if (r) {
          if (((d = o.hash160(r)), S(t, d), (f = b(r, void 0, e)), !f.pubKeys))
            throw new Error('RedeemScript not supported "' + u.toASM(r) + '"');
          ((s = u.types.P2SH),
            (p = u.scriptHash.output.encode(d)),
            (g = !0),
            (y = l = f.scriptType),
            (w = r),
            (P = y === u.types.P2WPKH));
        } else if (i) {
          if (((m = o.sha256(i)), E(t, m), (f = b(i, void 0, e)), !f.pubKeys))
            throw new Error('WitnessScript not supported "' + u.toASM(r) + '"');
          ((s = u.types.P2WSH),
            (p = u.witnessScriptHash.output.encode(m)),
            (P = O = !0),
            (y = v = f.scriptType),
            (w = i));
        } else if (t.prevOutType) {
          if (t.prevOutType === h.P2SH || t.prevOutType === h.P2WSH)
            throw new Error(
              "PrevOutScript is " + t.prevOutType + ", requires redeemScript",
            );
          if (
            ((s = t.prevOutType),
            (p = t.prevOutScript),
            (f = b(t.prevOutScript, t.prevOutType, e)),
            !f.pubKeys)
          )
            return;
          ((P = t.prevOutType === h.P2WPKH), (y = s), (w = p));
        } else
          ((p = u.pubKeyHash.output.encode(o.hash160(e))),
            (f = b(p, h.P2PKH, e)),
            (s = h.P2PKH),
            (P = !1),
            (y = s),
            (w = p));
        if (void 0 !== n || P) {
          if ((c(a.Satoshi, n), void 0 !== t.value && t.value !== n))
            throw new Error("Input didn't match witnessValue");
          t.value = n;
        }
        (y === h.P2WPKH &&
          (w = u.pubKeyHash.output.encode(
            u.witnessPubKeyHash.output.decode(w),
          )),
          g && ((t.redeemScript = r), (t.redeemScriptType = l)),
          O && ((t.witnessScript = i), (t.witnessScriptType = v)),
          (t.pubKeys = f.pubKeys),
          (t.signatures = f.signatures),
          (t.signScript = w),
          (t.signType = y),
          (t.prevOutScript = p),
          (t.prevOutType = s),
          (t.witness = P));
      }
      function O(t, e, r, i) {
        if (t === h.P2PKH) {
          if (1 === e.length && n.isBuffer(e[0]) && 1 === r.length)
            return u.pubKeyHash.input.encodeStack(e[0], r[0]);
        } else if (t === h.P2PK) {
          if (1 === e.length && n.isBuffer(e[0]))
            return u.pubKey.input.encodeStack(e[0]);
        } else {
          if (t !== h.MULTISIG) throw new Error("Not yet supported");
          if (e.length > 0)
            return (
              (e = e.map(function (t) {
                return t || s.OP_0;
              })),
              i ||
                (e = e.filter(function (t) {
                  return t !== s.OP_0;
                })),
              u.multisig.input.encodeStack(e)
            );
        }
        if (!i) throw new Error("Not enough signatures provided");
        return [];
      }
      function T(t, e) {
        var r = t.prevOutType,
          n = [],
          i = [];
        v(r) && (n = O(r, t.signatures, t.pubKeys, e));
        var o = !1;
        if (r === u.types.P2SH) {
          if (!e && !m(t.redeemScriptType))
            throw new Error("Impossible to sign this type");
          (v(t.redeemScriptType) &&
            (n = O(t.redeemScriptType, t.signatures, t.pubKeys, e)),
            t.redeemScriptType && ((o = !0), (r = t.redeemScriptType)));
        }
        switch (r) {
          case u.types.P2WPKH:
            i = O(u.types.P2PKH, t.signatures, t.pubKeys, e);
            break;
          case u.types.P2WSH:
            if (!e && !v(t.witnessScriptType))
              throw new Error("Impossible to sign this type");
            v(t.witnessScriptType) &&
              ((i = O(t.witnessScriptType, t.signatures, t.pubKeys, e)),
              i.push(t.witnessScript),
              (r = t.witnessScriptType));
            break;
        }
        return (
          o && n.push(t.redeemScript),
          { type: r, script: u.compile(n), witness: i }
        );
      }
      function I(t, e) {
        ((this.prevTxMap = {}),
          (this.network = t || f.bitcoin),
          (this.maximumFeeRate = e || 1e3),
          (this.inputs = []),
          (this.tx = new d()));
      }
      function _(t) {
        return (
          void 0 !== t.prevOutScript &&
          void 0 !== t.signScript &&
          void 0 !== t.pubKeys &&
          void 0 !== t.signatures &&
          t.signatures.length === t.pubKeys.length &&
          t.pubKeys.length > 0 &&
          void 0 !== t.witness
        );
      }
      function B(t) {
        return t.readUInt8(t.length - 1);
      }
      ((I.prototype.setLockTime = function (t) {
        if (
          (c(a.UInt32, t),
          this.inputs.some(function (t) {
            return (
              !!t.signatures &&
              t.signatures.some(function (t) {
                return t;
              })
            );
          }))
        )
          throw new Error("No, this would invalidate signatures");
        this.tx.locktime = t;
      }),
        (I.prototype.setVersion = function (t) {
          (c(a.UInt32, t), (this.tx.version = t));
        }),
        (I.fromTransaction = function (t, e) {
          var r = new I(e);
          return (
            r.setVersion(t.version),
            r.setLockTime(t.locktime),
            t.outs.forEach(function (t) {
              r.addOutput(t.script, t.value);
            }),
            t.ins.forEach(function (t) {
              r.__addInputUnsafe(t.hash, t.index, {
                sequence: t.sequence,
                script: t.script,
                witness: t.witness,
              });
            }),
            r.inputs.forEach(function (e, r) {
              g(e, t, r);
            }),
            r
          );
        }),
        (I.prototype.addInput = function (t, e, r, i) {
          if (!this.__canModifyInputs())
            throw new Error("No, this would invalidate signatures");
          var o;
          if ("string" === typeof t) t = n.from(t, "hex").reverse();
          else if (t instanceof d) {
            var u = t.outs[e];
            ((i = u.script), (o = u.value), (t = t.getHash()));
          }
          return this.__addInputUnsafe(t, e, {
            sequence: r,
            prevOutScript: i,
            value: o,
          });
        }),
        (I.prototype.__addInputUnsafe = function (t, e, r) {
          if (d.isCoinbaseHash(t))
            throw new Error("coinbase inputs not supported");
          var n = t.toString("hex") + ":" + e;
          if (void 0 !== this.prevTxMap[n])
            throw new Error("Duplicate TxOut: " + n);
          var i = {};
          if (
            (void 0 !== r.script && (i = w(r.script, r.witness || [])),
            void 0 !== r.value && (i.value = r.value),
            !i.prevOutScript && r.prevOutScript)
          ) {
            var o;
            if (!i.pubKeys && !i.signatures) {
              var f = b(r.prevOutScript);
              (f.pubKeys &&
                ((i.pubKeys = f.pubKeys), (i.signatures = f.signatures)),
                (o = f.scriptType));
            }
            ((i.prevOutScript = r.prevOutScript),
              (i.prevOutType = o || u.classifyOutput(r.prevOutScript)));
          }
          var s = this.tx.addInput(t, e, r.sequence, r.scriptSig);
          return ((this.inputs[s] = i), (this.prevTxMap[n] = s), s);
        }),
        (I.prototype.addOutput = function (t, e) {
          if (!this.__canModifyOutputs())
            throw new Error("No, this would invalidate signatures");
          return (
            "string" === typeof t && (t = i.toOutputScript(t, this.network)),
            this.tx.addOutput(t, e)
          );
        }),
        (I.prototype.build = function () {
          return this.__build(!1);
        }),
        (I.prototype.buildIncomplete = function () {
          return this.__build(!0);
        }),
        (I.prototype.__build = function (t) {
          if (!t) {
            if (!this.tx.ins.length)
              throw new Error("Transaction has no inputs");
            if (!this.tx.outs.length)
              throw new Error("Transaction has no outputs");
          }
          var e = this.tx.clone();
          if (
            (this.inputs.forEach(function (r, n) {
              var i =
                r.witnessScriptType || r.redeemScriptType || r.prevOutType;
              if (!i && !t) throw new Error("Transaction is not complete");
              var o = T(r, t);
              if (!t && !v(o.type) && o.type !== u.types.P2WPKH)
                throw new Error(o.type + " not supported");
              (e.setInputScript(n, o.script), e.setWitness(n, o.witness));
            }),
            !t && this.__overMaximumFees(e.virtualSize()))
          )
            throw new Error("Transaction has absurd fees");
          return e;
        }),
        (I.prototype.sign = function (t, e, r, n, i, o) {
          if (e.network !== this.network)
            throw new Error("Inconsistent network");
          if (!this.inputs[t]) throw new Error("No input at index: " + t);
          n = n || d.SIGHASH_ALL;
          var u = this.inputs[t];
          if (void 0 !== u.redeemScript && r && !u.redeemScript.equals(r))
            throw new Error("Inconsistent redeemScript");
          var f,
            s = e.getPublicKeyBuffer();
          if (!_(u) && (P(u, s, r, i, o), !_(u)))
            throw Error(u.prevOutType + " not supported");
          f = u.witness
            ? this.tx.hashForWitnessV0(t, u.signScript, u.value, n)
            : this.tx.hashForSignature(t, u.signScript, n);
          var c = u.pubKeys.some(function (t, r) {
            if (!s.equals(t)) return !1;
            if (u.signatures[r]) throw new Error("Signature already exists");
            if (!e.compressed && u.signType === h.P2WPKH)
              throw new Error(
                "BIP143 rejects uncompressed public keys in P2WPKH or P2WSH",
              );
            return ((u.signatures[r] = e.sign(f).toScriptSignature(n)), !0);
          });
          if (!c) throw new Error("Key pair cannot sign for this input");
        }),
        (I.prototype.__canModifyInputs = function () {
          return this.inputs.every(function (t) {
            return (
              void 0 === t.signatures ||
              t.signatures.every(function (t) {
                if (!t) return !0;
                var e = B(t);
                return e & d.SIGHASH_ANYONECANPAY;
              })
            );
          });
        }),
        (I.prototype.__canModifyOutputs = function () {
          var t = this.tx.ins.length,
            e = this.tx.outs.length;
          return this.inputs.every(function (r) {
            return (
              void 0 === r.signatures ||
              r.signatures.every(function (r) {
                if (!r) return !0;
                var n = B(r),
                  i = 31 & n;
                return (
                  i === d.SIGHASH_NONE ||
                  (i === d.SIGHASH_SINGLE ? t <= e : void 0)
                );
              })
            );
          });
        }),
        (I.prototype.__overMaximumFees = function (t) {
          var e = this.inputs.reduce(function (t, e) {
              return t + (e.value >>> 0);
            }, 0),
            r = this.tx.outs.reduce(function (t, e) {
              return t + e.value;
            }, 0),
            n = e - r,
            i = n / t;
          return i > this.maximumFeeRate;
        }),
        (t.exports = I));
    },
  },
]);
