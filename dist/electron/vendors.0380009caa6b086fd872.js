(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [17],
  {
    2897: function (t, e, i) {
      "use strict";
      var r = i(3209),
        s = i(2852);
      t.exports = {
        checkState: function (t, e) {
          if (!t) throw new r.InvalidState(e);
        },
        checkArgument: function (t, e, i, s) {
          if (!t) throw new r.InvalidArgument(e, i, s);
        },
        checkArgumentType: function (t, e, n) {
          if (((n = n || "(unknown name)"), s.isString(e))) {
            if ("Buffer" === e) {
              var u = i(2);
              if (!u.Buffer.isBuffer(t))
                throw new r.InvalidArgumentType(t, e, n);
            } else if (typeof t !== e) throw new r.InvalidArgumentType(t, e, n);
          } else if (!(t instanceof e))
            throw new r.InvalidArgumentType(t, e.name, n);
        },
      };
    },
    2936: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2),
          s = (i(229), i(2990), i(2897));
        function n(t, e) {
          if (t.length !== e.length) return !1;
          for (var i = t.length, r = 0; r < i; r++)
            if (t[r] !== e[r]) return !1;
          return !0;
        }
        ((t.exports = {
          fill: function (t, e) {
            (s.checkArgumentType(t, "Buffer", "buffer"),
              s.checkArgumentType(e, "number", "value"));
            for (var i = t.length, r = 0; r < i; r++) t[r] = e;
            return t;
          },
          copy: function (t) {
            var i = e.alloc(t.length);
            return (t.copy(i), i);
          },
          isBuffer: function (t) {
            return r.Buffer.isBuffer(t) || t instanceof Uint8Array;
          },
          emptyBuffer: function (t) {
            s.checkArgumentType(t, "number", "bytes");
            for (var i = e.alloc(t), r = 0; r < t; r++) i.write("\0", r);
            return i;
          },
          concat: r.Buffer.concat,
          equals: n,
          equal: n,
          integerAsSingleByteBuffer: function (t) {
            return (
              s.checkArgumentType(t, "number", "integer"),
              e.from([255 & t])
            );
          },
          integerAsBuffer: function (t) {
            s.checkArgumentType(t, "number", "integer");
            var i = [];
            return (
              i.push((t >> 24) & 255),
              i.push((t >> 16) & 255),
              i.push((t >> 8) & 255),
              i.push(255 & t),
              e.from(i)
            );
          },
          integerFromBuffer: function (t) {
            return (
              s.checkArgumentType(t, "Buffer", "buffer"),
              (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3]
            );
          },
          integerFromSingleByteBuffer: function (t) {
            return (s.checkArgumentType(t, "Buffer", "buffer"), t[0]);
          },
          bufferToHex: function (t) {
            return (
              s.checkArgumentType(t, "Buffer", "buffer"),
              t.toString("hex")
            );
          },
          reverse: function (t) {
            return e.from(t).reverse();
          },
        }),
          (t.exports.NULL_HASH = t.exports.fill(e.alloc(32), 0)),
          (t.exports.EMPTY_BUFFER = e.alloc(0)));
      }).call(this, i(2).Buffer);
    },
    2990: function (t, e, i) {
      "use strict";
      var r = i(2852),
        s = function (t) {
          return !!r.isString(t) && /^[0-9a-fA-F]+$/.test(t);
        };
      t.exports = {
        isValidJSON: function (t) {
          var e;
          if (!r.isString(t)) return !1;
          try {
            e = JSON.parse(t);
          } catch (i) {
            return !1;
          }
          return "object" === typeof e;
        },
        isHexa: s,
        isHexaString: s,
        cloneArray: function (t) {
          return [].concat(t);
        },
        defineImmutable: function (t, e) {
          return (
            Object.keys(e).forEach(function (i) {
              Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                value: e[i],
              });
            }),
            t
          );
        },
        isNaturalNumber: function (t) {
          return (
            "number" === typeof t &&
            isFinite(t) &&
            Math.floor(t) === t &&
            t >= 0
          );
        },
      };
    },
    3169: function (t, e, i) {
      ((t.exports = i(5857)), (t.exports.Interpreter = i(7075)));
    },
    3366: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(3046),
          Point = i(3873),
          s = i(3047),
          n = i(2990),
          u = i(3637),
          o = i(2852),
          h = i(2897);
        function a(t, e) {
          if (!(this instanceof a)) return new a(t, e);
          if (
            (h.checkArgument(
              t,
              "First argument is required, please include public key data.",
            ),
            t instanceof a)
          )
            return t;
          e = e || {};
          var i = this._classifyArgs(t, e);
          return (
            i.point.validate(),
            n.defineImmutable(this, {
              point: i.point,
              compressed: i.compressed,
              network: i.network || u.defaultNetwork,
            }),
            this
          );
        }
        ((a.prototype._classifyArgs = function (t, i) {
          var r = { compressed: o.isUndefined(i.compressed) || i.compressed };
          if (t instanceof Point) r.point = t;
          else if (t.x && t.y) r = a._transformObject(t);
          else if ("string" === typeof t) r = a._transformDER(e.from(t, "hex"));
          else if (a._isBuffer(t)) r = a._transformDER(t);
          else {
            if (!a._isPrivateKey(t))
              throw new TypeError(
                "First argument is an unrecognized data format.",
              );
            r = a._transformPrivateKey(t);
          }
          return (
            r.network ||
              (r.network = o.isUndefined(i.network)
                ? void 0
                : u.get(i.network)),
            r
          );
        }),
          (a._isPrivateKey = function (t) {
            var e = i(4097);
            return t instanceof e;
          }),
          (a._isBuffer = function (t) {
            return t instanceof e || t instanceof Uint8Array;
          }),
          (a._transformPrivateKey = function (t) {
            h.checkArgument(
              a._isPrivateKey(t),
              "Must be an instance of PrivateKey",
            );
            var e = {};
            return (
              (e.point = Point.getG().mul(t.bn)),
              (e.compressed = t.compressed),
              (e.network = t.network),
              e
            );
          }),
          (a._transformDER = function (t, e) {
            h.checkArgument(
              a._isBuffer(t),
              "Must be a hex buffer of DER encoded public key",
            );
            var i,
              s,
              n,
              u,
              c = {};
            if (
              ((e = !!o.isUndefined(e) || e),
              4 !== t[0] && (e || (6 !== t[0] && 7 !== t[0])))
            )
              if (3 === t[0])
                ((n = t.slice(1)),
                  (i = new r(n)),
                  (c = a._transformX(!0, i)),
                  (c.compressed = !0));
              else {
                if (2 !== t[0])
                  throw new TypeError("Invalid DER format public key");
                ((n = t.slice(1)),
                  (i = new r(n)),
                  (c = a._transformX(!1, i)),
                  (c.compressed = !0));
              }
            else {
              if (
                ((n = t.slice(1, 33)),
                (u = t.slice(33, 65)),
                32 !== n.length || 32 !== u.length || 65 !== t.length)
              )
                throw new TypeError("Length of x and y must be 32 bytes");
              ((i = new r(n)),
                (s = new r(u)),
                (c.point = new Point(i, s)),
                (c.compressed = !1));
            }
            return c;
          }),
          (a._transformX = function (t, e) {
            h.checkArgument(
              "boolean" === typeof t,
              "Must specify whether y is odd or not (true or false)",
            );
            var i = {};
            return ((i.point = Point.fromX(t, e)), i);
          }),
          (a._transformObject = function (t) {
            var e = new r(t.x, "hex"),
              i = new r(t.y, "hex"),
              s = new Point(e, i);
            return new a(s, { compressed: t.compressed });
          }),
          (a.fromPrivateKey = function (t) {
            h.checkArgument(
              a._isPrivateKey(t),
              "Must be an instance of PrivateKey",
            );
            var e = a._transformPrivateKey(t);
            return new a(e.point, {
              compressed: e.compressed,
              network: e.network,
            });
          }),
          (a.fromDER = a.fromBuffer =
            function (t, e) {
              h.checkArgument(
                a._isBuffer(t),
                "Must be a hex buffer of DER encoded public key",
              );
              var i = a._transformDER(t, e);
              return new a(i.point, { compressed: i.compressed });
            }),
          (a.fromPoint = function (t, e) {
            return (
              h.checkArgument(
                t instanceof Point,
                "First argument must be an instance of Point.",
              ),
              new a(t, { compressed: e })
            );
          }),
          (a.fromString = function (t, i) {
            var r = e.from(t, i || "hex"),
              s = a._transformDER(r);
            return new a(s.point, { compressed: s.compressed });
          }),
          (a.fromX = function (t, e) {
            var i = a._transformX(t, e);
            return new a(i.point, { compressed: i.compressed });
          }),
          (a.getValidationError = function (t) {
            var e;
            try {
              new a(t);
            } catch (i) {
              e = i;
            }
            return e;
          }),
          (a.isValid = function (t) {
            return !a.getValidationError(t);
          }),
          (a.prototype.toObject = a.prototype.toJSON =
            function () {
              return {
                x: this.point.getX().toString("hex", 2),
                y: this.point.getY().toString("hex", 2),
                compressed: this.compressed,
              };
            }),
          (a.prototype.toBuffer = a.prototype.toDER =
            function () {
              var t,
                i = this.point.getX(),
                r = this.point.getY(),
                s = i.toBuffer({ size: 32 }),
                n = r.toBuffer({ size: 32 });
              if (this.compressed) {
                var u = n[n.length - 1] % 2;
                return ((t = u ? e.from([3]) : e.from([2])), e.concat([t, s]));
              }
              return ((t = e.from([4])), e.concat([t, s, n]));
            }),
          (a.prototype._getID = function () {
            return s.sha256ripemd160(this.toBuffer());
          }),
          (a.prototype.toAddress = function (t, e) {
            var r = i(3367);
            return r.fromPublicKey(this, t || this.network, e);
          }),
          (a.prototype.toString = function () {
            return this.toDER().toString("hex");
          }),
          (a.prototype.inspect = function () {
            return (
              "<PublicKey: " +
              this.toString() +
              (this.compressed ? "" : ", uncompressed") +
              ">"
            );
          }),
          (t.exports = a));
      }).call(this, i(2).Buffer);
    },
    3411: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(3046),
          n = (i(2), i(2936)),
          u = i(2990),
          o = i(3136),
          h = i(3169),
          a = i(2897),
          c = i(3209),
          p = 9007199254740991;
        function f(t) {
          if (!(this instanceof f)) return new f(t);
          if (!r.isObject(t))
            throw new TypeError("Unrecognized argument for Output");
          var i;
          ((this.satoshis = t.satoshis),
            n.isBuffer(t.script)
              ? (this._scriptBuffer = t.script)
              : ((i =
                  r.isString(t.script) && u.isHexa(t.script)
                    ? e.from(t.script, "hex")
                    : t.script),
                this.setScript(i)));
        }
        (Object.defineProperty(f.prototype, "script", {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (
              this._script || this.setScriptFromBuffer(this._scriptBuffer),
              this._script
            );
          },
        }),
          Object.defineProperty(f.prototype, "satoshis", {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return this._satoshis;
            },
            set: function (t) {
              (t instanceof s
                ? ((this._satoshisBN = t), (this._satoshis = t.toNumber()))
                : r.isString(t)
                  ? ((this._satoshis = parseInt(t)),
                    (this._satoshisBN = s.fromNumber(this._satoshis)))
                  : (a.checkArgument(
                      u.isNaturalNumber(t),
                      "Output satoshis is not a natural number",
                    ),
                    (this._satoshisBN = s.fromNumber(t)),
                    (this._satoshis = t)),
                a.checkState(
                  u.isNaturalNumber(this._satoshis),
                  "Output satoshis is not a natural number",
                ));
            },
          }),
          (f.prototype.invalidSatoshis = function () {
            return this._satoshis > p
              ? "transaction txout satoshis greater than max safe integer"
              : this._satoshis !== this._satoshisBN.toNumber()
                ? "transaction txout satoshis has corrupted value"
                : this._satoshis < 0 && "transaction txout negative";
          }),
          (f.prototype.toObject = f.prototype.toJSON =
            function () {
              var t = { satoshis: this.satoshis };
              return ((t.script = this._scriptBuffer.toString("hex")), t);
            }),
          (f.fromObject = function (t) {
            return new f(t);
          }),
          (f.prototype.setScriptFromBuffer = function (t) {
            this._scriptBuffer = t;
            try {
              ((this._script = h.fromBuffer(this._scriptBuffer)),
                (this._script._isOutput = !0));
            } catch (e) {
              if (!(e instanceof c.Script.InvalidBuffer)) throw e;
              this._script = null;
            }
          }),
          (f.prototype.setScript = function (t) {
            if (t instanceof h)
              ((this._scriptBuffer = t.toBuffer()),
                (this._script = t),
                (this._script._isOutput = !0));
            else if (r.isString(t))
              ((this._script = h.fromString(t)),
                (this._scriptBuffer = this._script.toBuffer()),
                (this._script._isOutput = !0));
            else {
              if (!n.isBuffer(t))
                throw new TypeError("Invalid argument type: script");
              this.setScriptFromBuffer(t);
            }
            return this;
          }),
          (f.prototype.inspect = function () {
            var t;
            return (
              (t = this.script
                ? this.script.inspect()
                : this._scriptBuffer.toString("hex")),
              "<Output (" + this.satoshis + " sats) " + t + ">"
            );
          }),
          (f.fromBufferReader = function (t) {
            var i = {};
            i.satoshis = t.readUInt64LEBN();
            var r = t.readVarintNum();
            return ((i.script = 0 !== r ? t.read(r) : e.from([])), new f(i));
          }),
          (f.prototype.toBufferWriter = function (t) {
            (t || (t = new o()), t.writeUInt64LEBN(this._satoshisBN));
            var e = this._scriptBuffer;
            return (t.writeVarintNum(e.length), t.write(e), t);
          }),
          (t.exports = f));
      }).call(this, i(2).Buffer);
    },
    3526: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(3168),
          s = i(3169),
          n = i(3411),
          u = i(3410),
          o = i(3136),
          h = i(3046),
          a = i(3047),
          c = i(4611),
          p = i(2897),
          f = i(2852);
        const _ = i(7076);
        var d =
            "0000000000000000000000000000000000000000000000000000000000000001",
          l = "ffffffffffffffff",
          g = function (t, c, p, f) {
            var _,
              g = i(4909),
              S = i(4910),
              I = g.shallowCopy(t);
            for (
              f = new s(f), f.removeCodeseparators(), _ = 0;
              _ < I.inputs.length;
              _++
            )
              I.inputs[_] = new S(I.inputs[_]).setScript(s.empty());
            if (
              ((I.inputs[p] = new S(I.inputs[p]).setScript(f)),
              (31 & c) === r.SIGHASH_NONE || (31 & c) === r.SIGHASH_SINGLE)
            )
              for (_ = 0; _ < I.inputs.length; _++)
                _ !== p && (I.inputs[_].sequenceNumber = 0);
            if ((31 & c) === r.SIGHASH_NONE) I.outputs = [];
            else if ((31 & c) === r.SIGHASH_SINGLE) {
              if (p >= I.outputs.length) return e.from(d, "hex");
              for (I.outputs.length = p + 1, _ = 0; _ < p; _++)
                I.outputs[_] = new n({
                  satoshis: h.fromBuffer(e.from(l, "hex")),
                  script: s.empty(),
                });
            }
            c & r.SIGHASH_ANYONECANPAY && (I.inputs = [I.inputs[p]]);
            var O = new o().write(I.toBuffer()).writeInt32LE(c).toBuffer(),
              P = a.sha256sha256(O);
            return ((P = new u(P).readReverse()), P);
          };
        function S(t, e, i, r, s, n) {
          n = n || "ecdsa";
          let u,
            o = g(t, i, r, s);
          switch (n) {
            case "ecdsa":
              u = c.sign(o, e, "little").set({ nhashtype: i });
              break;
            case "schnorr":
              u = _.sign(e.toString(), o);
              break;
            default:
              throw new Error("signingMethod not supported ", n);
          }
          return u;
        }
        function I(t, e, i, r, s, n) {
          (p.checkArgument(!f.isUndefined(t), "Transaction Undefined"),
            p.checkArgument(
              !f.isUndefined(e) && !f.isUndefined(e.nhashtype),
              "Signature Undefined",
            ),
            (n = n || "ecdsa"));
          let u = g(t, e.nhashtype, r, s),
            o = !1;
          switch (n) {
            case "ecdsa":
              o = c.verify(u, e, i, "little");
              break;
            case "schnorr":
              o = _.verify(i, u, e);
              break;
            default:
              throw new Error("signingMethod not supported ", n);
          }
          return o;
        }
        t.exports = { sighash: g, sign: S, verify: I };
      }).call(this, i(2).Buffer);
    },
    4097: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(3367),
          n = i(4098),
          u = i(3046),
          o = i(2990),
          h = i(3637),
          Point = i(3873),
          a = i(3366),
          c = i(4618),
          p = i(2897);
        function f(t, e) {
          if (!(this instanceof f)) return new f(t, e);
          if (t instanceof f) return t;
          var i = this._classifyArguments(t, e);
          if (!i.bn || 0 === i.bn.cmp(new u(0)))
            throw new TypeError(
              "Number can not be equal to zero, undefined, null or false",
            );
          if (!i.bn.lt(Point.getN()))
            throw new TypeError("Number must be less than N");
          if ("undefined" === typeof i.network)
            throw new TypeError(
              'Must specify the network ("livenet" or "testnet")',
            );
          return (
            o.defineImmutable(this, {
              bn: i.bn,
              compressed: i.compressed,
              network: i.network,
            }),
            Object.defineProperty(this, "publicKey", {
              configurable: !1,
              enumerable: !0,
              get: this.toPublicKey.bind(this),
            }),
            this
          );
        }
        ((f.prototype._classifyArguments = function (t, i) {
          var s = { compressed: !0, network: i ? h.get(i) : h.defaultNetwork };
          if (r.isUndefined(t) || r.isNull(t)) s.bn = f._getRandomBN();
          else if (t instanceof u) s.bn = t;
          else if (t instanceof e || t instanceof Uint8Array)
            s = f._transformBuffer(t, i);
          else if (t.bn && t.network) s = f._transformObject(t);
          else if (!i && h.get(t))
            ((s.bn = f._getRandomBN()), (s.network = h.get(t)));
          else {
            if ("string" !== typeof t)
              throw new TypeError(
                "First argument is an unrecognized data type.",
              );
            o.isHexa(t)
              ? (s.bn = new u(e.from(t, "hex")))
              : (s = f._transformWIF(t, i));
          }
          return s;
        }),
          (f._getRandomBN = function () {
            var t, e;
            do {
              var i = c.getRandomBuffer(32);
              ((e = u.fromBuffer(i)), (t = e.lt(Point.getN())));
            } while (!t);
            return e;
          }),
          (f._transformBuffer = function (t, e) {
            var i = {};
            if (32 === t.length) return f._transformBNBuffer(t, e);
            if (((i.network = h.get(t[0], "privatekey")), !i.network))
              throw new Error("Invalid network");
            if (e && i.network !== h.get(e))
              throw new TypeError("Private key network mismatch");
            if (34 === t.length && 1 === t[33]) i.compressed = !0;
            else {
              if (33 !== t.length)
                throw new Error(
                  "Length of buffer must be 33 (uncompressed) or 34 (compressed)",
                );
              i.compressed = !1;
            }
            return ((i.bn = u.fromBuffer(t.slice(1, 33))), i);
          }),
          (f._transformBNBuffer = function (t, e) {
            var i = {};
            return (
              (i.network = h.get(e) || h.defaultNetwork),
              (i.bn = u.fromBuffer(t)),
              (i.compressed = !1),
              i
            );
          }),
          (f._transformWIF = function (t, e) {
            return f._transformBuffer(n.decode(t), e);
          }),
          (f.fromBuffer = function (t, e) {
            return new f(t, e);
          }),
          (f._transformObject = function (t) {
            var e = new u(t.bn, "hex"),
              i = h.get(t.network);
            return { bn: e, network: i, compressed: t.compressed };
          }),
          (f.fromString = f.fromWIF =
            function (t) {
              return (
                p.checkArgument(
                  r.isString(t),
                  "First argument is expected to be a string.",
                ),
                new f(t)
              );
            }),
          (f.fromObject = function (t) {
            return (
              p.checkArgument(
                r.isObject(t),
                "First argument is expected to be an object.",
              ),
              new f(t)
            );
          }),
          (f.fromRandom = function (t) {
            var e = f._getRandomBN();
            return new f(e, t);
          }),
          (f.getValidationError = function (t, e) {
            var i;
            try {
              new f(t, e);
            } catch (r) {
              i = r;
            }
            return i;
          }),
          (f.isValid = function (t, e) {
            return !!t && !f.getValidationError(t, e);
          }),
          (f.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (f.prototype.toWIF = function () {
            var t,
              i = this.network,
              r = this.compressed;
            return (
              (t = r
                ? e.concat([
                    e.from([i.privatekey]),
                    this.bn.toBuffer({ size: 32 }),
                    e.from([1]),
                  ])
                : e.concat([
                    e.from([i.privatekey]),
                    this.bn.toBuffer({ size: 32 }),
                  ])),
              n.encode(t)
            );
          }),
          (f.prototype.toBigNumber = function () {
            return this.bn;
          }),
          (f.prototype.toBuffer = function () {
            return this.bn.toBuffer({ size: 32 });
          }),
          (f.prototype.toBufferNoPadding = function () {
            return this.bn.toBuffer();
          }),
          (f.prototype.toPublicKey = function () {
            return (
              this._pubkey || (this._pubkey = a.fromPrivateKey(this)),
              this._pubkey
            );
          }),
          (f.prototype.toAddress = function (t, e) {
            var i = this.toPublicKey();
            return s.fromPublicKey(i, t || this.network, e);
          }),
          (f.prototype.toObject = f.prototype.toJSON =
            function () {
              return {
                bn: this.bn.toString("hex"),
                compressed: this.compressed,
                network: this.network.toString(),
              };
            }),
          (f.prototype.inspect = function () {
            var t = this.compressed ? "" : ", uncompressed";
            return (
              "<PrivateKey: " +
              this.toString() +
              ", network: " +
              this.network +
              t +
              ">"
            );
          }),
          (t.exports = f));
      }).call(this, i(2).Buffer);
    },
    4100: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(2897);
        const n = i(3209);
        var u = i(3136),
          o = (i(2), i(2936)),
          h = i(2990),
          a = i(3169),
          c = i(3526),
          p = i(3411),
          f = 4294967295,
          _ = f,
          d = f - 1,
          l = f - 2;
        const g = Math.pow(2, 31),
          S = Math.pow(2, 22),
          I = 65535,
          O = 512,
          P = Math.pow(2, 16) - 1;
        function E(t) {
          return this instanceof E
            ? t
              ? this._fromObject(t)
              : void 0
            : new E(t);
        }
        ((E.MAXINT = f),
          (E.DEFAULT_SEQNUMBER = _),
          (E.DEFAULT_LOCKTIME_SEQNUMBER = d),
          (E.DEFAULT_RBF_SEQNUMBER = l),
          (E.SEQUENCE_LOCKTIME_TYPE_FLAG = S),
          Object.defineProperty(E.prototype, "script", {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return this.isNull()
                ? null
                : (this._script ||
                    ((this._script = new a(this._scriptBuffer)),
                    (this._script._isInput = !0)),
                  this._script);
            },
          }),
          (E.fromObject = function (t) {
            s.checkArgument(r.isObject(t));
            var e = new E();
            return e._fromObject(t);
          }),
          (E.prototype._fromObject = function (t) {
            var i;
            if (
              ((i =
                r.isString(t.prevTxId) && h.isHexa(t.prevTxId)
                  ? e.from(t.prevTxId, "hex")
                  : t.prevTxId),
              (this.witnesses = []),
              (this.output = t.output
                ? t.output instanceof p
                  ? t.output
                  : new p(t.output)
                : void 0),
              (this.prevTxId = i || t.txidbuf),
              (this.outputIndex = r.isUndefined(t.outputIndex)
                ? t.txoutnum
                : t.outputIndex),
              (this.sequenceNumber = r.isUndefined(t.sequenceNumber)
                ? r.isUndefined(t.seqnum)
                  ? _
                  : t.seqnum
                : t.sequenceNumber),
              r.isUndefined(t.script) && r.isUndefined(t.scriptBuffer))
            )
              throw new n.Transaction.Input.MissingScript();
            return (this.setScript(t.scriptBuffer || t.script), this);
          }),
          (E.prototype.toObject = E.prototype.toJSON =
            function () {
              var t = {
                prevTxId: this.prevTxId.toString("hex"),
                outputIndex: this.outputIndex,
                sequenceNumber: this.sequenceNumber,
                script: this._scriptBuffer.toString("hex"),
              };
              return (
                this.script && (t.scriptString = this.script.toString()),
                this.output && (t.output = this.output.toObject()),
                t
              );
            }),
          (E.fromBufferReader = function (t) {
            var e = new E();
            return (
              (e.prevTxId = t.readReverse(32)),
              (e.outputIndex = t.readUInt32LE()),
              (e._scriptBuffer = t.readVarLengthBuffer()),
              (e.sequenceNumber = t.readUInt32LE()),
              e
            );
          }),
          (E.prototype.toBufferWriter = function (t) {
            (t || (t = new u()),
              t.writeReverse(this.prevTxId),
              t.writeUInt32LE(this.outputIndex));
            var e = this._scriptBuffer;
            return (
              t.writeVarintNum(e.length),
              t.write(e),
              t.writeUInt32LE(this.sequenceNumber),
              t
            );
          }),
          (E.prototype.setScript = function (t) {
            if (((this._script = null), t instanceof a))
              ((this._script = t),
                (this._script._isInput = !0),
                (this._scriptBuffer = t.toBuffer()));
            else if (h.isHexa(t)) this._scriptBuffer = e.from(t, "hex");
            else if (r.isString(t))
              ((this._script = new a(t)),
                (this._script._isInput = !0),
                (this._scriptBuffer = this._script.toBuffer()));
            else {
              if (!o.isBuffer(t))
                throw new TypeError("Invalid argument type: script");
              this._scriptBuffer = e.from(t);
            }
            return this;
          }),
          (E.prototype.getSignatures = function () {
            throw new n.AbstractMethodInvoked(
              "Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " +
                JSON.stringify(this),
            );
          }),
          (E.prototype.getSatoshisBuffer = function () {
            return (
              s.checkState(this.output instanceof p),
              s.checkState(this.output._satoshisBN),
              new u().writeUInt64LEBN(this.output._satoshisBN).toBuffer()
            );
          }),
          (E.prototype.isFullySigned = function () {
            throw new n.AbstractMethodInvoked("Input#isFullySigned");
          }),
          (E.prototype.isFinal = function () {
            return this.sequenceNumber !== E.MAXINT;
          }),
          (E.prototype.addSignature = function () {
            throw new n.AbstractMethodInvoked("Input#addSignature");
          }),
          (E.prototype.clearSignatures = function () {
            throw new n.AbstractMethodInvoked("Input#clearSignatures");
          }),
          (E.prototype.hasWitnesses = function () {
            return !!(this.witnesses && this.witnesses.length > 0);
          }),
          (E.prototype.getWitnesses = function () {
            return this.witnesses;
          }),
          (E.prototype.setWitnesses = function (t) {
            this.witnesses = t;
          }),
          (E.prototype.isValidSignature = function (t, e, i) {
            return (
              (i = i || "ecdsa"),
              (e.signature.nhashtype = e.sigtype),
              c.verify(
                t,
                e.signature,
                e.publicKey,
                e.inputIndex,
                this.output.script,
                i,
              )
            );
          }),
          (E.prototype.isNull = function () {
            return (
              "0000000000000000000000000000000000000000000000000000000000000000" ===
                this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            );
          }),
          (E.prototype._estimateSize = function () {
            return this.toBufferWriter().toBuffer().length;
          }),
          (E.prototype.lockForSeconds = function (t) {
            if ((s.checkArgument(r.isNumber(t)), t < 0 || t >= O * I))
              throw new n.Transaction.Input.LockTimeRange();
            return (
              (t = parseInt(Math.floor(t / O))),
              (this.sequenceNumber = t | S),
              this
            );
          }),
          (E.prototype.lockUntilBlockHeight = function (t) {
            if ((s.checkArgument(r.isNumber(t)), t < 0 || t >= P))
              throw new n.Transaction.Input.BlockHeightOutOfRange();
            return ((this.sequenceNumber = t), this);
          }),
          (E.prototype.getLockTime = function () {
            if (this.sequenceNumber & g) return null;
            if (this.sequenceNumber & S) {
              var t = O * (this.sequenceNumber & I);
              return t;
            }
            var e = this.sequenceNumber & I;
            return e;
          }),
          (t.exports = E));
      }).call(this, i(2).Buffer);
    },
    4102: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(2897),
          n = i(4101),
          u = i(2936),
          o = i(2990),
          h = i(3366),
          a = i(3209),
          c = i(3168);
        function p(t) {
          if (!(this instanceof p)) return new p(t);
          if (t instanceof p) return t;
          if (r.isObject(t)) return this._fromObject(t);
          throw new a.InvalidArgument(
            "TransactionSignatures must be instantiated from an object",
          );
        }
        (n(p, c),
          (p.prototype._fromObject = function (t) {
            return (
              this._checkObjectArgs(t),
              (this.publicKey = new h(t.publicKey)),
              (this.prevTxId = u.isBuffer(t.prevTxId)
                ? t.prevTxId
                : e.from(t.prevTxId, "hex")),
              (this.outputIndex = t.outputIndex),
              (this.inputIndex = t.inputIndex),
              (this.signature =
                t.signature instanceof c
                  ? t.signature
                  : u.isBuffer(t.signature)
                    ? c.fromBuffer(t.signature)
                    : c.fromString(t.signature)),
              (this.sigtype = t.sigtype),
              this
            );
          }),
          (p.prototype._checkObjectArgs = function (t) {
            (s.checkArgument(h(t.publicKey), "publicKey"),
              s.checkArgument(!r.isUndefined(t.inputIndex), "inputIndex"),
              s.checkArgument(!r.isUndefined(t.outputIndex), "outputIndex"),
              s.checkState(
                r.isNumber(t.inputIndex),
                "inputIndex must be a number",
              ),
              s.checkState(
                r.isNumber(t.outputIndex),
                "outputIndex must be a number",
              ),
              s.checkArgument(t.signature, "signature"),
              s.checkArgument(t.prevTxId, "prevTxId"),
              s.checkState(
                t.signature instanceof c ||
                  u.isBuffer(t.signature) ||
                  o.isHexa(t.signature),
                "signature must be a buffer or hexa value",
              ),
              s.checkState(
                u.isBuffer(t.prevTxId) || o.isHexa(t.prevTxId),
                "prevTxId must be a buffer or hexa value",
              ),
              s.checkArgument(t.sigtype, "sigtype"),
              s.checkState(r.isNumber(t.sigtype), "sigtype must be a number"));
          }),
          (p.prototype.toObject = p.prototype.toJSON =
            function () {
              return {
                publicKey: this.publicKey.toString(),
                prevTxId: this.prevTxId.toString("hex"),
                outputIndex: this.outputIndex,
                inputIndex: this.inputIndex,
                signature: this.signature.toString(),
                sigtype: this.sigtype,
              };
            }),
          (p.fromObject = function (t) {
            return (s.checkArgument(t), new p(t));
          }),
          (t.exports = p));
      }).call(this, i(2).Buffer);
    },
    4613: function (t, e, i) {
      ((t.exports = i(4909)),
        (t.exports.Input = i(4910)),
        (t.exports.Output = i(3411)),
        (t.exports.UnspentOutput = i(5858)),
        (t.exports.Signature = i(4102)),
        (t.exports.Sighash = i(3526)),
        (t.exports.SighashWitness = i(4617)));
    },
    4617: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(3168),
          s = (i(3169), i(3411), i(3410)),
          n = i(3136),
          u = (i(3046), i(3047)),
          o = i(4611),
          h = i(2897),
          a = i(2852),
          c = function (t, i, o, h, a) {
            var c, p, f;
            if (!(i & r.SIGHASH_ANYONECANPAY)) {
              for (var _ = [], d = 0; d < t.inputs.length; d++) {
                var l = t.inputs[d],
                  g = new s(l.prevTxId).readReverse();
                _.push(g);
                var S = e.alloc(4);
                (S.writeUInt32LE(l.outputIndex, 0), _.push(S));
              }
              c = u.sha256sha256(e.concat(_));
            }
            if (
              !(i & r.SIGHASH_ANYONECANPAY) &&
              (31 & i) !== r.SIGHASH_SINGLE &&
              (31 & i) !== r.SIGHASH_NONE
            ) {
              for (var I = [], O = 0; O < t.inputs.length; O++) {
                var P = e.alloc(4);
                (P.writeUInt32LE(t.inputs[O].sequenceNumber, 0), I.push(P));
              }
              p = u.sha256sha256(e.concat(I));
            }
            var E = new n();
            if ((31 & i) !== r.SIGHASH_SINGLE && (31 & i) !== r.SIGHASH_NONE) {
              for (var m = 0; m < t.outputs.length; m++)
                t.outputs[m].toBufferWriter(E);
              f = u.sha256sha256(E.toBuffer());
            } else
              (31 & i) === r.SIGHASH_SINGLE &&
                o < t.outputs.length &&
                (t.outputs[o].toBufferWriter(E),
                (f = u.sha256sha256(E.toBuffer())));
            var y = new n();
            (y.writeUInt32LE(t.version), y.write(c), y.write(p));
            var T = new s(t.inputs[o].prevTxId).readReverse();
            return (
              y.write(T),
              y.writeUInt32LE(t.inputs[o].outputIndex),
              y.write(h),
              y.write(a),
              y.writeUInt32LE(t.inputs[o].sequenceNumber),
              y.write(f),
              y.writeUInt32LE(t.nLockTime),
              y.writeInt32LE(i),
              u.sha256sha256(y.toBuffer())
            );
          };
        function p(t, e, i, r, s, n, u) {
          var h;
          if (((u = u || "ecdsa"), "ecdsa" === u)) {
            let u = c(t, i, r, s, n);
            return ((h = o.sign(u, e).set({ nhashtype: i })), h);
          }
          throw new Error("signingMethod not supported ", u);
        }
        function f(t, e, i, r, s, n, u) {
          if (
            (h.checkArgument(!a.isUndefined(t)),
            h.checkArgument(!a.isUndefined(e) && !a.isUndefined(e.nhashtype)),
            (u = u || "ecdsa"),
            "ecdsa" === u)
          ) {
            let u = c(t, e.nhashtype, r, s, n);
            return o.verify(u, e, i);
          }
          throw new Error("signingMethod not supported ", u);
        }
        t.exports = { sighash: c, sign: p, verify: f };
      }).call(this, i(2).Buffer);
    },
    4908: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(2897),
          n = i(2936),
          u = i(2990);
        function o(t) {
          if (!(this instanceof o)) return new o(t);
          var e;
          if (r.isNumber(t)) e = t;
          else {
            if (!r.isString(t))
              throw new TypeError(
                'Unrecognized num type: "' + typeof t + '" for Opcode',
              );
            e = o.map[t];
          }
          return (u.defineImmutable(this, { num: e }), this);
        }
        for (var h in ((o.fromBuffer = function (t) {
          return (
            s.checkArgument(n.isBuffer(t)),
            new o(Number("0x" + t.toString("hex")))
          );
        }),
        (o.fromNumber = function (t) {
          return (s.checkArgument(r.isNumber(t)), new o(t));
        }),
        (o.fromString = function (t) {
          s.checkArgument(r.isString(t));
          var e = o.map[t];
          if ("undefined" === typeof e)
            throw new TypeError("Invalid opcodestr");
          return new o(e);
        }),
        (o.prototype.toHex = function () {
          return this.num.toString(16);
        }),
        (o.prototype.toBuffer = function () {
          return e.from(this.toHex(), "hex");
        }),
        (o.prototype.toNumber = function () {
          return this.num;
        }),
        (o.prototype.toString = function () {
          var t = o.reverseMap[this.num];
          if ("undefined" === typeof t)
            throw new Error("Opcode does not have a string representation");
          return t;
        }),
        (o.smallInt = function (t) {
          return (
            s.checkArgument(
              r.isNumber(t),
              "Invalid Argument: n should be number",
            ),
            s.checkArgument(
              t >= 0 && t <= 16,
              "Invalid Argument: n must be between 0 and 16",
            ),
            0 === t ? o("OP_0") : new o(o.map.OP_1 + t - 1)
          );
        }),
        (o.map = {
          OP_FALSE: 0,
          OP_0: 0,
          OP_PUSHDATA1: 76,
          OP_PUSHDATA2: 77,
          OP_PUSHDATA4: 78,
          OP_1NEGATE: 79,
          OP_RESERVED: 80,
          OP_TRUE: 81,
          OP_1: 81,
          OP_2: 82,
          OP_3: 83,
          OP_4: 84,
          OP_5: 85,
          OP_6: 86,
          OP_7: 87,
          OP_8: 88,
          OP_9: 89,
          OP_10: 90,
          OP_11: 91,
          OP_12: 92,
          OP_13: 93,
          OP_14: 94,
          OP_15: 95,
          OP_16: 96,
          OP_NOP: 97,
          OP_VER: 98,
          OP_IF: 99,
          OP_NOTIF: 100,
          OP_VERIF: 101,
          OP_VERNOTIF: 102,
          OP_ELSE: 103,
          OP_ENDIF: 104,
          OP_VERIFY: 105,
          OP_RETURN: 106,
          OP_TOALTSTACK: 107,
          OP_FROMALTSTACK: 108,
          OP_2DROP: 109,
          OP_2DUP: 110,
          OP_3DUP: 111,
          OP_2OVER: 112,
          OP_2ROT: 113,
          OP_2SWAP: 114,
          OP_IFDUP: 115,
          OP_DEPTH: 116,
          OP_DROP: 117,
          OP_DUP: 118,
          OP_NIP: 119,
          OP_OVER: 120,
          OP_PICK: 121,
          OP_ROLL: 122,
          OP_ROT: 123,
          OP_SWAP: 124,
          OP_TUCK: 125,
          OP_CAT: 126,
          OP_SUBSTR: 127,
          OP_LEFT: 128,
          OP_RIGHT: 129,
          OP_SIZE: 130,
          OP_INVERT: 131,
          OP_AND: 132,
          OP_OR: 133,
          OP_XOR: 134,
          OP_EQUAL: 135,
          OP_EQUALVERIFY: 136,
          OP_RESERVED1: 137,
          OP_RESERVED2: 138,
          OP_1ADD: 139,
          OP_1SUB: 140,
          OP_2MUL: 141,
          OP_2DIV: 142,
          OP_NEGATE: 143,
          OP_ABS: 144,
          OP_NOT: 145,
          OP_0NOTEQUAL: 146,
          OP_ADD: 147,
          OP_SUB: 148,
          OP_MUL: 149,
          OP_DIV: 150,
          OP_MOD: 151,
          OP_LSHIFT: 152,
          OP_RSHIFT: 153,
          OP_BOOLAND: 154,
          OP_BOOLOR: 155,
          OP_NUMEQUAL: 156,
          OP_NUMEQUALVERIFY: 157,
          OP_NUMNOTEQUAL: 158,
          OP_LESSTHAN: 159,
          OP_GREATERTHAN: 160,
          OP_LESSTHANOREQUAL: 161,
          OP_GREATERTHANOREQUAL: 162,
          OP_MIN: 163,
          OP_MAX: 164,
          OP_WITHIN: 165,
          OP_RIPEMD160: 166,
          OP_SHA1: 167,
          OP_SHA256: 168,
          OP_HASH160: 169,
          OP_HASH256: 170,
          OP_CODESEPARATOR: 171,
          OP_CHECKSIG: 172,
          OP_CHECKSIGVERIFY: 173,
          OP_CHECKMULTISIG: 174,
          OP_CHECKMULTISIGVERIFY: 175,
          OP_CHECKLOCKTIMEVERIFY: 177,
          OP_CHECKSEQUENCEVERIFY: 178,
          OP_NOP1: 176,
          OP_NOP2: 177,
          OP_NOP3: 178,
          OP_NOP4: 179,
          OP_NOP5: 180,
          OP_NOP6: 181,
          OP_NOP7: 182,
          OP_NOP8: 183,
          OP_NOP9: 184,
          OP_NOP10: 185,
          OP_PUBKEYHASH: 253,
          OP_PUBKEY: 254,
          OP_INVALIDOPCODE: 255,
        }),
        (o.reverseMap = []),
        o.map))
          o.reverseMap[o.map[h]] = h;
        (r.extend(o, o.map),
          (o.isSmallIntOp = function (t) {
            return (
              t instanceof o && (t = t.toNumber()),
              t === o.map.OP_0 || (t >= o.map.OP_1 && t <= o.map.OP_16)
            );
          }),
          (o.prototype.inspect = function () {
            return (
              "<Opcode: " +
              this.toString() +
              ", hex: " +
              this.toHex() +
              ", decimal: " +
              this.num +
              ">"
            );
          }),
          (t.exports = o));
      }).call(this, i(2).Buffer);
    },
    4909: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(2897),
          n = i(2),
          u = e.compare || i(3638),
          o = i(3209),
          h = i(2936),
          a = i(2990),
          c = i(3410),
          p = i(3136),
          f = i(3047),
          _ = i(3168),
          d = i(3526),
          l = i(4617),
          g = i(3367),
          S = i(5858),
          I = i(4910),
          O = I.PublicKeyHash,
          P = I.PublicKey,
          E = I.MultiSigScriptHash,
          m = I.MultiSig,
          y = i(3411),
          T = i(3169),
          A = i(4097),
          R = i(3046);
        function k(t, e) {
          if (!(this instanceof k)) return new k(t);
          if (
            ((this.inputs = []),
            (this.outputs = []),
            (this._inputAmount = void 0),
            (this._outputAmount = void 0),
            t)
          ) {
            if (t instanceof k) return k.shallowCopy(t);
            if (a.isHexa(t)) this.fromString(t);
            else if (h.isBuffer(t)) this.fromBuffer(t);
            else {
              if (!r.isObject(t))
                throw new o.InvalidArgument(
                  "Must provide an object or string to deserialize a transaction",
                );
              this.fromObject(t, e);
            }
          } else this._newTransaction();
        }
        var b = 2,
          v = 0,
          N = 1e6;
        ((k.DUST_AMOUNT = 546),
          (k.FEE_SECURITY_MARGIN = 150),
          (k.MAX_MONEY = 21e14),
          (k.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8),
          (k.NLOCKTIME_MAX_VALUE = 4294967295),
          (k.FEE_PER_KB = 1e5),
          (k.CHANGE_OUTPUT_MAX_SIZE = 62),
          (k.MAXIMUM_EXTRA_SIZE = 26),
          (k.shallowCopy = function (t) {
            var e = new k(t.toBuffer());
            return e;
          }));
        var w = {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return (
                (this._hash = new c(this._getHash())
                  .readReverse()
                  .toString("hex")),
                this._hash
              );
            },
          },
          C = {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return new c(this._getWitnessHash())
                .readReverse()
                .toString("hex");
            },
          };
        (Object.defineProperty(k.prototype, "witnessHash", C),
          Object.defineProperty(k.prototype, "hash", w),
          Object.defineProperty(k.prototype, "id", w));
        var B = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this._getInputAmount();
          },
        };
        (Object.defineProperty(k.prototype, "inputAmount", B),
          (B.get = function () {
            return this._getOutputAmount();
          }),
          Object.defineProperty(k.prototype, "outputAmount", B),
          (k.prototype._getHash = function () {
            return f.sha256sha256(this.toBuffer(!0));
          }),
          (k.prototype._getWitnessHash = function () {
            return f.sha256sha256(this.toBuffer(!1));
          }),
          (k.prototype.serialize = function (t) {
            return !0 === t || (t && t.disableAll)
              ? this.uncheckedSerialize()
              : this.checkedSerialize(t);
          }),
          (k.prototype.uncheckedSerialize = k.prototype.toString =
            function () {
              return this.toBuffer().toString("hex");
            }),
          (k.prototype.checkedSerialize = function (t) {
            var e = this.getSerializationError(t);
            if (e)
              throw (
                (e.message +=
                  " - For more information please see: https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib/docs/transaction.md#serialization-checks"),
                e
              );
            return this.uncheckedSerialize();
          }),
          (k.prototype.invalidSatoshis = function () {
            for (var t = !1, e = 0; e < this.outputs.length; e++)
              this.outputs[e].invalidSatoshis() && (t = !0);
            return t;
          }),
          (k.prototype.getSerializationError = function (t) {
            if (((t = t || {}), this.invalidSatoshis()))
              return new o.Transaction.InvalidSatoshis();
            var e,
              i = this._getUnspentValue();
            return (
              i < 0
                ? t.disableMoreOutputThanInput ||
                  (e = new o.Transaction.InvalidOutputAmountSum())
                : (e = this._hasFeeError(t, i)),
              e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            );
          }),
          (k.prototype._hasFeeError = function (t, e) {
            if (!r.isUndefined(this._fee) && this._fee !== e)
              return new o.Transaction.FeeError.Different(
                "Unspent value is " + e + " but specified fee is " + this._fee,
              );
            if (!t.disableLargeFees) {
              var i = Math.floor(k.FEE_SECURITY_MARGIN * this._estimateFee());
              if (e > i)
                return this._missingChange()
                  ? new o.Transaction.ChangeAddressMissing(
                      "Fee is too large and no change address was provided",
                    )
                  : new o.Transaction.FeeError.TooLarge(
                      "expected less than " + i + " but got " + e,
                    );
            }
            if (!t.disableSmallFees) {
              var s = Math.ceil(this._estimateFee() / k.FEE_SECURITY_MARGIN);
              if (e < s)
                return new o.Transaction.FeeError.TooSmall(
                  "expected more than " + s + " but got " + e,
                );
            }
          }),
          (k.prototype._missingChange = function () {
            return !this._changeScript;
          }),
          (k.prototype._hasDustOutputs = function (t) {
            var e, i;
            if (!t.disableDustOutputs)
              for (e in this.outputs)
                if (
                  ((i = this.outputs[e]),
                  i.satoshis < k.DUST_AMOUNT && !i.script.isDataOut())
                )
                  return new o.Transaction.DustOutputs();
          }),
          (k.prototype._isMissingSignatures = function (t) {
            if (!t.disableIsFullySigned)
              return this.isFullySigned()
                ? void 0
                : new o.Transaction.MissingSignatures();
          }),
          (k.prototype.inspect = function () {
            return "<Transaction: " + this.uncheckedSerialize() + ">";
          }),
          (k.prototype.toBuffer = function (t) {
            var e = new p();
            return this.toBufferWriter(e, t).toBuffer();
          }),
          (k.prototype.hasWitnesses = function () {
            for (var t = 0; t < this.inputs.length; t++)
              if (this.inputs[t].hasWitnesses()) return !0;
            return !1;
          }),
          (k.prototype.toBufferWriter = function (t, i) {
            t.writeInt32LE(this.version);
            var s = this.hasWitnesses();
            return (
              s && !i && t.write(e.from("0001", "hex")),
              t.writeVarintNum(this.inputs.length),
              r.each(this.inputs, function (e) {
                e.toBufferWriter(t);
              }),
              t.writeVarintNum(this.outputs.length),
              r.each(this.outputs, function (e) {
                e.toBufferWriter(t);
              }),
              s &&
                !i &&
                r.each(this.inputs, function (e) {
                  var i = e.getWitnesses();
                  t.writeVarintNum(i.length);
                  for (var r = 0; r < i.length; r++)
                    (t.writeVarintNum(i[r].length), t.write(i[r]));
                }),
              t.writeUInt32LE(this.nLockTime),
              t
            );
          }),
          (k.prototype.fromBuffer = function (t) {
            var e = new c(t);
            return this.fromBufferReader(e);
          }),
          (k.prototype.fromBufferReader = function (t) {
            (s.checkArgument(!t.finished(), "No transaction data received"),
              (this.version = t.readInt32LE()));
            var e = t.readVarintNum(),
              i = !1;
            0 === e &&
              0 !== t.buf[t.pos] &&
              ((t.pos += 1), (i = !0), (e = t.readVarintNum()));
            for (var r = 0; r < e; r++) {
              var n = I.fromBufferReader(t);
              this.inputs.push(n);
            }
            for (var u = t.readVarintNum(), o = 0; o < u; o++)
              this.outputs.push(y.fromBufferReader(t));
            if (i)
              for (var h = 0; h < e; h++) {
                for (var a = t.readVarintNum(), c = [], p = 0; p < a; p++) {
                  var f = t.readVarintNum(),
                    _ = t.read(f);
                  c.push(_);
                }
                this.inputs[h].setWitnesses(c);
              }
            return ((this.nLockTime = t.readUInt32LE()), this);
          }),
          (k.prototype.toObject = k.prototype.toJSON =
            function () {
              var t = [];
              this.inputs.forEach(function (e) {
                t.push(e.toObject());
              });
              var e = [];
              this.outputs.forEach(function (t) {
                e.push(t.toObject());
              });
              var i = {
                hash: this.hash,
                version: this.version,
                inputs: t,
                outputs: e,
                nLockTime: this.nLockTime,
              };
              return (
                this._changeScript &&
                  (i.changeScript = this._changeScript.toString()),
                r.isUndefined(this._changeIndex) ||
                  (i.changeIndex = this._changeIndex),
                r.isUndefined(this._fee) || (i.fee = this._fee),
                i
              );
            }),
          (k.prototype.fromObject = function (t, e) {
            s.checkArgument(r.isObject(t) || t instanceof k);
            var i,
              n = this;
            return (
              (i = t instanceof k ? i.toObject() : t),
              r.each(i.inputs, function (t) {
                if (t.output && t.output.script) {
                  var i,
                    r = new T(t.output.script);
                  if (
                    (r.isScriptHashOut() || r.isWitnessScriptHashOut()) &&
                    t.publicKeys &&
                    t.threshold
                  )
                    i = new I.MultiSigScriptHash(
                      t,
                      t.publicKeys,
                      t.threshold,
                      t.signatures,
                      e,
                    );
                  else if (
                    r.isPublicKeyHashOut() ||
                    r.isWitnessPublicKeyHashOut() ||
                    r.isScriptHashOut()
                  )
                    i = new I.PublicKeyHash(t);
                  else {
                    if (!r.isPublicKeyOut())
                      throw new o.Transaction.Input.UnsupportedScript(
                        t.output.script,
                      );
                    i = new I.PublicKey(t);
                  }
                  n.addInput(i);
                } else n.uncheckedAddInput(new I(t));
              }),
              r.each(i.outputs, function (t) {
                n.addOutput(new y(t));
              }),
              i.changeIndex && (this._changeIndex = i.changeIndex),
              i.changeScript && (this._changeScript = new T(i.changeScript)),
              i.fee && (this._fee = i.fee),
              (this.nLockTime = i.nLockTime),
              (this.version = i.version),
              this._checkConsistency(t),
              this
            );
          }),
          (k.prototype._checkConsistency = function (t) {
            (r.isUndefined(this._changeIndex) ||
              (s.checkState(this._changeScript, "Change script is expected."),
              s.checkState(
                this.outputs[this._changeIndex],
                "Change index points to undefined output.",
              ),
              s.checkState(
                this.outputs[this._changeIndex].script.toString() ===
                  this._changeScript.toString(),
                "Change output has an unexpected script.",
              )),
              t &&
                t.hash &&
                s.checkState(
                  t.hash === this.hash,
                  "Hash in object does not match transaction hash.",
                ));
          }),
          (k.prototype.lockUntilDate = function (t) {
            if (
              (s.checkArgument(t),
              r.isNumber(t) && t < k.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new o.Transaction.LockTimeTooEarly();
            r.isDate(t) && (t = t.getTime() / 1e3);
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (k.prototype.lockUntilBlockHeight = function (t) {
            if (
              (s.checkArgument(r.isNumber(t)),
              t >= k.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new o.Transaction.BlockHeightTooHigh();
            if (t < 0) throw new o.Transaction.NLockTimeOutOfRange();
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (k.prototype.getLockTime = function () {
            return this.nLockTime
              ? this.nLockTime < k.NLOCKTIME_BLOCKHEIGHT_LIMIT
                ? this.nLockTime
                : new Date(1e3 * this.nLockTime)
              : null;
          }),
          (k.prototype.fromString = function (t) {
            this.fromBuffer(n.Buffer.from(t, "hex"));
          }),
          (k.prototype._newTransaction = function () {
            ((this.version = b), (this.nLockTime = v));
          }),
          (k.prototype.from = function (t, e, i, s) {
            if (r.isArray(t)) {
              var n = this;
              return (
                r.each(t, function (t) {
                  n.from(t, e, i, s);
                }),
                this
              );
            }
            var u = r.some(this.inputs, function (e) {
              return (
                e.prevTxId.toString("hex") === t.txId &&
                e.outputIndex === t.outputIndex
              );
            });
            return (
              u ||
                (e && i
                  ? this._fromMultisigUtxo(t, e, i, s)
                  : this._fromNonP2SH(t)),
              this
            );
          }),
          (k.prototype.associateInputs = function (t, e, i, r) {
            let s = [];
            for (let n of t) {
              const t = this.inputs.findIndex(
                (t) =>
                  t.prevTxId.toString("hex") === n.txId &&
                  t.outputIndex === n.outputIndex,
              );
              (s.push(t),
                t >= 0 && (this.inputs[t] = this._getInputFrom(n, e, i, r)));
            }
            return s;
          }),
          (k.prototype._selectInputType = function (t, e, i) {
            var r;
            return (
              (t = new S(t)),
              e && i
                ? t.script.isMultisigOut()
                  ? (r = m)
                  : (t.script.isScriptHashOut() ||
                      t.script.isWitnessScriptHashOut()) &&
                    (r = E)
                : (r =
                    t.script.isPublicKeyHashOut() ||
                    t.script.isWitnessPublicKeyHashOut() ||
                    t.script.isScriptHashOut()
                      ? O
                      : t.script.isPublicKeyOut()
                        ? P
                        : I),
              r
            );
          }),
          (k.prototype._getInputFrom = function (t, e, i, r) {
            t = new S(t);
            const s = this._selectInputType(t, e, i),
              n = {
                output: new y({ script: t.script, satoshis: t.satoshis }),
                prevTxId: t.txId,
                outputIndex: t.outputIndex,
                sequenceNumber: t.sequenceNumber,
                script: T.empty(),
              };
            let u = e && i ? [e, i, !1, r] : [];
            return new s(n, ...u);
          }),
          (k.prototype._fromNonP2SH = function (t) {
            const e = this._getInputFrom(t);
            this.addInput(e);
          }),
          (k.prototype._fromMultisigUtxo = function (t, e, i, r) {
            s.checkArgument(
              i <= e.length,
              "Number of required signatures must be greater than the number of public keys",
            );
            const n = this._getInputFrom(t, e, i, r);
            this.addInput(n);
          }),
          (k.prototype.addInput = function (t, e, i) {
            if (
              (s.checkArgumentType(t, I, "input"),
              !t.output && (r.isUndefined(e) || r.isUndefined(i)))
            )
              throw new o.Transaction.NeedMoreInfo(
                "Need information about the UTXO script and satoshis",
              );
            return (
              t.output ||
                !e ||
                r.isUndefined(i) ||
                ((e = e instanceof T ? e : new T(e)),
                s.checkArgumentType(i, "number", "satoshis"),
                (t.output = new y({ script: e, satoshis: i }))),
              this.uncheckedAddInput(t)
            );
          }),
          (k.prototype.uncheckedAddInput = function (t) {
            return (
              s.checkArgumentType(t, I, "input"),
              this.inputs.push(t),
              (this._inputAmount = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype.hasAllUtxoInfo = function () {
            return r.every(
              this.inputs.map(function (t) {
                return !!t.output;
              }),
            );
          }),
          (k.prototype.fee = function (t) {
            return (
              s.checkArgument(r.isNumber(t), "amount must be a number"),
              (this._fee = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype.feePerKb = function (t) {
            return (
              s.checkArgument(r.isNumber(t), "amount must be a number"),
              (this._feePerKb = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype.feePerByte = function (t) {
            return (
              s.checkArgument(r.isNumber(t), "amount must be a number"),
              (this._feePerByte = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype.change = function (t) {
            return (
              s.checkArgument(t, "address is required"),
              (this._changeScript = T.fromAddress(t)),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype.getChangeOutput = function () {
            return r.isUndefined(this._changeIndex)
              ? null
              : this.outputs[this._changeIndex];
          }),
          (k.prototype.to = function (t, e) {
            if (r.isArray(t)) {
              var i = this;
              return (
                r.each(t, function (t) {
                  i.to(t.address, t.satoshis);
                }),
                this
              );
            }
            return (
              s.checkArgument(
                a.isNaturalNumber(e),
                "Amount is expected to be a positive integer",
              ),
              this.addOutput(new y({ script: T(new g(t)), satoshis: e })),
              this
            );
          }),
          (k.prototype.addData = function (t) {
            return (
              this.addOutput(new y({ script: T.buildDataOut(t), satoshis: 0 })),
              this
            );
          }),
          (k.prototype.addOutput = function (t) {
            return (
              s.checkArgumentType(t, y, "output"),
              this._addOutput(t),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype.clearOutputs = function () {
            return (
              (this.outputs = []),
              this._clearSignatures(),
              (this._outputAmount = void 0),
              (this._changeIndex = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (k.prototype._addOutput = function (t) {
            (this.outputs.push(t), (this._outputAmount = void 0));
          }),
          (k.prototype._getOutputAmount = function () {
            if (r.isUndefined(this._outputAmount)) {
              var t = this;
              ((this._outputAmount = 0),
                r.each(this.outputs, function (e) {
                  t._outputAmount += e.satoshis;
                }));
            }
            return this._outputAmount;
          }),
          (k.prototype._getInputAmount = function () {
            return (
              r.isUndefined(this._inputAmount) &&
                (this._inputAmount = r.sumBy(this.inputs, function (t) {
                  if (r.isUndefined(t.output))
                    throw new o.Transaction.Input.MissingPreviousOutput();
                  return t.output.satoshis;
                })),
              this._inputAmount
            );
          }),
          (k.prototype._updateChangeOutput = function () {
            if (this._changeScript) {
              (this._clearSignatures(),
                r.isUndefined(this._changeIndex) ||
                  this._removeOutput(this._changeIndex));
              var t = this._getUnspentValue(),
                e = this.getFee(),
                i = t - e;
              i > k.DUST_AMOUNT
                ? ((this._changeIndex = this.outputs.length),
                  this._addOutput(
                    new y({ script: this._changeScript, satoshis: i }),
                  ))
                : (this._changeIndex = void 0);
            }
          }),
          (k.prototype.getFee = function () {
            return this.isCoinbase()
              ? 0
              : r.isUndefined(this._fee)
                ? this._changeScript
                  ? this._estimateFee()
                  : this._getUnspentValue()
                : this._fee;
          }),
          (k.prototype._estimateFee = function () {
            var t = this._estimateSize(),
              e = this._getUnspentValue(),
              i = this._feePerByte || (this._feePerKb || k.FEE_PER_KB) / 1e3;
            function r(t) {
              return t * i;
            }
            var s = Math.ceil(r(t)),
              n = Math.ceil(r(t) + r(k.CHANGE_OUTPUT_MAX_SIZE));
            return !this._changeScript || e <= n ? s : n;
          }),
          (k.prototype._getUnspentValue = function () {
            return this._getInputAmount() - this._getOutputAmount();
          }),
          (k.prototype._clearSignatures = function () {
            r.each(this.inputs, function (t) {
              t.clearSignatures();
            });
          }),
          (k.prototype._estimateSize = function () {
            var t = k.MAXIMUM_EXTRA_SIZE;
            return (
              r.each(this.inputs, function (e) {
                ((t += 36), (t += e._estimateSize()));
              }),
              r.each(this.outputs, function (e) {
                t += e.script.toBuffer().length + 9;
              }),
              Math.ceil(t)
            );
          }),
          (k.prototype._removeOutput = function (t) {
            var e = this.outputs[t];
            ((this.outputs = r.without(this.outputs, e)),
              (this._outputAmount = void 0));
          }),
          (k.prototype.removeOutput = function (t) {
            (this._removeOutput(t), this._updateChangeOutput());
          }),
          (k.prototype.sort = function () {
            return (
              this.sortInputs(function (t) {
                var e = Array.prototype.concat.apply([], t);
                let i = 0;
                return (
                  e.forEach((t) => {
                    t.i = i++;
                  }),
                  e.sort(function (t, e) {
                    return (
                      u(t.prevTxId, e.prevTxId) ||
                      t.outputIndex - e.outputIndex ||
                      t.i - e.i
                    );
                  }),
                  e
                );
              }),
              this.sortOutputs(function (t) {
                var e = Array.prototype.concat.apply([], t);
                let i = 0;
                return (
                  e.forEach((t) => {
                    t.i = i++;
                  }),
                  e.sort(function (t, e) {
                    return (
                      t.satoshis - e.satoshis ||
                      u(t.script.toBuffer(), e.script.toBuffer()) ||
                      t.i - e.i
                    );
                  }),
                  e
                );
              }),
              this
            );
          }),
          (k.prototype.shuffleOutputs = function () {
            return this.sortOutputs(r.shuffle);
          }),
          (k.prototype.sortOutputs = function (t) {
            var e = t(this.outputs);
            return this._newOutputOrder(e);
          }),
          (k.prototype.sortInputs = function (t) {
            return (
              (this.inputs = t(this.inputs)),
              this._clearSignatures(),
              this
            );
          }),
          (k.prototype._newOutputOrder = function (t) {
            var e =
              this.outputs.length !== t.length ||
              0 !== r.difference(this.outputs, t).length;
            if (e) throw new o.Transaction.InvalidSorting();
            if (!r.isUndefined(this._changeIndex)) {
              var i = this.outputs[this._changeIndex];
              this._changeIndex = r.findIndex(t, i);
            }
            return ((this.outputs = t), this);
          }),
          (k.prototype.removeInput = function (t, e) {
            var i;
            if (
              ((i =
                !e && r.isNumber(t)
                  ? t
                  : r.findIndex(this.inputs, function (i) {
                      return (
                        i.prevTxId.toString("hex") === t && i.outputIndex === e
                      );
                    })),
              i < 0 || i >= this.inputs.length)
            )
              throw new o.Transaction.InvalidIndex(i, this.inputs.length);
            var s = this.inputs[i];
            ((this.inputs = r.without(this.inputs, s)),
              (this._inputAmount = void 0),
              this._updateChangeOutput());
          }),
          (k.prototype.sign = function (t, e, i) {
            s.checkState(
              this.hasAllUtxoInfo(),
              "Not all utxo information is available to sign the transaction.",
            );
            var n = this;
            return r.isArray(t)
              ? (r.each(t, function (t) {
                  n.sign(t, e, i);
                }),
                this)
              : (r.each(this.getSignatures(t, e, i), function (t) {
                  n.applySignature(t, i);
                }),
                this);
          }),
          (k.prototype.getSignatures = function (t, e, i) {
            ((t = new A(t)), (e = e || _.SIGHASH_ALL));
            var s = this,
              n = [],
              u = f.sha256ripemd160(t.publicKey.toBuffer());
            return (
              r.each(this.inputs, function (o, h) {
                r.each(o.getSignatures(s, t, h, e, u, i), function (t) {
                  n.push(t);
                });
              }),
              n
            );
          }),
          (k.prototype.applySignature = function (t, e) {
            return (this.inputs[t.inputIndex].addSignature(this, t, e), this);
          }),
          (k.prototype.isFullySigned = function () {
            return (
              r.each(this.inputs, function (t) {
                if (t.isFullySigned === I.prototype.isFullySigned)
                  throw new o.Transaction.UnableToVerifySignature(
                    "Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction",
                  );
              }),
              r.every(
                r.map(this.inputs, function (t) {
                  return t.isFullySigned();
                }),
              )
            );
          }),
          (k.prototype.isValidSignature = function (t, e) {
            var i = this;
            if (
              this.inputs[t.inputIndex].isValidSignature ===
              I.prototype.isValidSignature
            )
              throw new o.Transaction.UnableToVerifySignature(
                "Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction",
              );
            return this.inputs[t.inputIndex].isValidSignature(i, t, e);
          }),
          (k.prototype.verifySignature = function (t, e, i, n, u, o, h) {
            if ((r.isUndefined(u) && (u = 0), 1 === u)) {
              var c,
                f = n.toBuffer(),
                _ = new p();
              (_.writeVarintNum(f.length),
                _.write(f),
                o
                  ? (s.checkState(a.isNaturalNumber(o)),
                    (c = new p().writeUInt64LEBN(new R(o)).toBuffer()))
                  : (c = this.inputs[i].getSatoshisBuffer()));
              var g = l.verify(this, t, e, i, _.toBuffer(), c, h);
              return g;
            }
            return d.verify(this, t, e, i, n, h);
          }),
          (k.prototype.verify = function () {
            if (0 === this.inputs.length) return "transaction txins empty";
            if (0 === this.outputs.length) return "transaction txouts empty";
            for (var t = new R(0), e = 0; e < this.outputs.length; e++) {
              var i = this.outputs[e];
              if (i.invalidSatoshis())
                return "transaction txout " + e + " satoshis is invalid";
              if (i._satoshisBN.gt(new R(k.MAX_MONEY, 10)))
                return "transaction txout " + e + " greater than MAX_MONEY";
              if (((t = t.add(i._satoshisBN)), t.gt(new R(k.MAX_MONEY))))
                return (
                  "transaction txout " +
                  e +
                  " total output greater than MAX_MONEY"
                );
            }
            if (this.toBuffer().length > N)
              return "transaction over the maximum block size";
            var s = {};
            for (e = 0; e < this.inputs.length; e++) {
              var n = this.inputs[e],
                u = n.prevTxId + ":" + n.outputIndex;
              if (!r.isUndefined(s[u]))
                return "transaction input " + e + " duplicate input";
              s[u] = !0;
            }
            var o = this.isCoinbase();
            if (o) {
              var h = this.inputs[0]._scriptBuffer;
              if (h.length < 2 || h.length > 100)
                return "coinbase transaction script size invalid";
            } else
              for (e = 0; e < this.inputs.length; e++)
                if (this.inputs[e].isNull())
                  return "transaction input " + e + " has null input";
            return !0;
          }),
          (k.prototype.isCoinbase = function () {
            return 1 === this.inputs.length && this.inputs[0].isNull();
          }),
          (k.prototype.isRBF = function () {
            for (var t = 0; t < this.inputs.length; t++) {
              var e = this.inputs[t];
              if (e.sequenceNumber < I.MAXINT - 1) return !0;
            }
            return !1;
          }),
          (k.prototype.enableRBF = function () {
            for (var t = 0; t < this.inputs.length; t++) {
              var e = this.inputs[t];
              e.sequenceNumber >= I.MAXINT - 1 &&
                (e.sequenceNumber = I.DEFAULT_RBF_SEQNUMBER);
            }
            return this;
          }),
          (k.prototype.setVersion = function (t) {
            return (
              s.checkArgument(
                a.isNaturalNumber(t) && t <= b,
                "Wrong version number",
              ),
              (this.version = t),
              this
            );
          }),
          (t.exports = k));
      }).call(this, i(2).Buffer);
    },
    4910: function (t, e, i) {
      ((t.exports = i(4100)),
        (t.exports.PublicKey = i(7080)),
        (t.exports.PublicKeyHash = i(7081)),
        (t.exports.MultiSig = i(7082)),
        (t.exports.MultiSigScriptHash = i(7083)));
    },
    4911: function (t, e, i) {
      "use strict";
      var r = i(2852),
        s = i(3209),
        n = i(2897),
        u = {
          BTC: [1e8, 8],
          mBTC: [1e5, 5],
          uBTC: [100, 2],
          bits: [100, 2],
          satoshis: [1, 0],
        };
      function o(t, e) {
        if (!(this instanceof o)) return new o(t, e);
        if (r.isNumber(e)) {
          if (e <= 0) throw new s.Unit.InvalidRate(e);
          ((t /= e), (e = o.BTC));
        }
        this._value = this._from(t, e);
        var i = this,
          n = function (t) {
            Object.defineProperty(i, t, {
              get: function () {
                return i.to(t);
              },
              enumerable: !0,
            });
          };
        Object.keys(u).forEach(n);
      }
      (Object.keys(u).forEach(function (t) {
        o[t] = t;
      }),
        (o.fromObject = function (t) {
          return (
            n.checkArgument(
              r.isObject(t),
              "Argument is expected to be an object",
            ),
            new o(t.amount, t.code)
          );
        }),
        (o.fromBTC = function (t) {
          return new o(t, o.BTC);
        }),
        (o.fromMillis = o.fromMilis =
          function (t) {
            return new o(t, o.mBTC);
          }),
        (o.fromMicros = o.fromBits =
          function (t) {
            return new o(t, o.bits);
          }),
        (o.fromSatoshis = function (t) {
          return new o(t, o.satoshis);
        }),
        (o.fromFiat = function (t, e) {
          return new o(t, e);
        }),
        (o.prototype._from = function (t, e) {
          if (!u[e]) throw new s.Unit.UnknownCode(e);
          return parseInt((t * u[e][0]).toFixed());
        }),
        (o.prototype.to = function (t) {
          if (r.isNumber(t)) {
            if (t <= 0) throw new s.Unit.InvalidRate(t);
            return parseFloat((this.BTC * t).toFixed(2));
          }
          if (!u[t]) throw new s.Unit.UnknownCode(t);
          var e = this._value / u[t][0];
          return parseFloat(e.toFixed(u[t][1]));
        }),
        (o.prototype.toBTC = function () {
          return this.to(o.BTC);
        }),
        (o.prototype.toMillis = o.prototype.toMilis =
          function () {
            return this.to(o.mBTC);
          }),
        (o.prototype.toMicros = o.prototype.toBits =
          function () {
            return this.to(o.bits);
          }),
        (o.prototype.toSatoshis = function () {
          return this.to(o.satoshis);
        }),
        (o.prototype.atRate = function (t) {
          return this.to(t);
        }),
        (o.prototype.toString = function () {
          return this.satoshis + " satoshis";
        }),
        (o.prototype.toObject = o.prototype.toJSON =
          function () {
            return { amount: this.BTC, code: o.BTC };
          }),
        (o.prototype.inspect = function () {
          return "<Unit: " + this.toString() + ">";
        }),
        (t.exports = o));
    },
    5857: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(3367),
          s = i(3410),
          n = i(3136),
          u = i(3047),
          o = i(4908),
          h = i(3366),
          a = i(3168),
          c = i(3637),
          p = i(2897),
          f = i(2852),
          _ = i(3209),
          d = (i(2), i(2936)),
          l = i(2990),
          g = function t(e) {
            return this instanceof t
              ? ((this.chunks = []),
                d.isBuffer(e)
                  ? t.fromBuffer(e)
                  : e instanceof r
                    ? t.fromAddress(e)
                    : e instanceof t
                      ? t.fromBuffer(e.toBuffer())
                      : f.isString(e)
                        ? t.fromString(e)
                        : void (
                            f.isObject(e) &&
                            f.isArray(e.chunks) &&
                            this.set(e)
                          ))
              : new t(e);
          };
        ((g.VERIFY_TAPROOT = 1 << 17),
          (g.prototype.set = function (t) {
            return (
              p.checkArgument(f.isObject(t)),
              p.checkArgument(f.isArray(t.chunks)),
              (this.chunks = t.chunks),
              this
            );
          }),
          (g.fromBuffer = function (t) {
            var e = new g();
            e.chunks = [];
            var i = new s(t);
            while (!i.finished())
              try {
                var r,
                  n,
                  u = i.readUInt8();
                u > 0 && u < o.OP_PUSHDATA1
                  ? ((r = u),
                    e.chunks.push({ buf: i.read(r), len: r, opcodenum: u }))
                  : u === o.OP_PUSHDATA1
                    ? ((r = i.readUInt8()),
                      (n = i.read(r)),
                      e.chunks.push({ buf: n, len: r, opcodenum: u }))
                    : u === o.OP_PUSHDATA2
                      ? ((r = i.readUInt16LE()),
                        (n = i.read(r)),
                        e.chunks.push({ buf: n, len: r, opcodenum: u }))
                      : u === o.OP_PUSHDATA4
                        ? ((r = i.readUInt32LE()),
                          (n = i.read(r)),
                          e.chunks.push({ buf: n, len: r, opcodenum: u }))
                        : e.chunks.push({ opcodenum: u });
              } catch (h) {
                if (h instanceof RangeError)
                  throw new _.Script.InvalidBuffer(t.toString("hex"));
                throw h;
              }
            return e;
          }),
          (g.prototype.toBuffer = function () {
            for (var t = new n(), e = 0; e < this.chunks.length; e++) {
              var i = this.chunks[e],
                r = i.opcodenum;
              (t.writeUInt8(i.opcodenum),
                i.buf &&
                  (r < o.OP_PUSHDATA1
                    ? t.write(i.buf)
                    : r === o.OP_PUSHDATA1
                      ? (t.writeUInt8(i.len), t.write(i.buf))
                      : r === o.OP_PUSHDATA2
                        ? (t.writeUInt16LE(i.len), t.write(i.buf))
                        : r === o.OP_PUSHDATA4 &&
                          (t.writeUInt32LE(i.len), t.write(i.buf))));
            }
            return t.concat();
          }),
          (g.fromASM = function (t) {
            var i = new g();
            i.chunks = [];
            var r = t.split(" "),
              s = 0;
            while (s < r.length) {
              var n = r[s],
                u = o(n),
                h = u.toNumber();
              if (f.isUndefined(h)) {
                var a = e.from(r[s], "hex");
                (i.chunks.push({ buf: a, len: a.length, opcodenum: a.length }),
                  (s += 1));
              } else
                h === o.OP_PUSHDATA1 ||
                h === o.OP_PUSHDATA2 ||
                h === o.OP_PUSHDATA4
                  ? (i.chunks.push({
                      buf: e.from(r[s + 2], "hex"),
                      len: parseInt(r[s + 1]),
                      opcodenum: h,
                    }),
                    (s += 3))
                  : (i.chunks.push({ opcodenum: h }), (s += 1));
            }
            return i;
          }),
          (g.fromHex = function (t) {
            return new g(e.from(t, "hex"));
          }),
          (g.fromString = function (t) {
            if (l.isHexa(t) || 0 === t.length) return new g(e.from(t, "hex"));
            var i = new g();
            i.chunks = [];
            var r = t.split(" "),
              s = 0;
            while (s < r.length) {
              var n = r[s],
                u = o(n),
                h = u.toNumber();
              if (f.isUndefined(h)) {
                if (((h = parseInt(n)), !(h > 0 && h < o.OP_PUSHDATA1)))
                  throw new Error("Invalid script: " + JSON.stringify(t));
                (i.chunks.push({
                  buf: e.from(r[s + 1].slice(2), "hex"),
                  len: h,
                  opcodenum: h,
                }),
                  (s += 2));
              } else if (
                h === o.OP_PUSHDATA1 ||
                h === o.OP_PUSHDATA2 ||
                h === o.OP_PUSHDATA4
              ) {
                if ("0x" !== r[s + 2].slice(0, 2))
                  throw new Error("Pushdata data must start with 0x");
                (i.chunks.push({
                  buf: e.from(r[s + 2].slice(2), "hex"),
                  len: parseInt(r[s + 1]),
                  opcodenum: h,
                }),
                  (s += 3));
              } else (i.chunks.push({ opcodenum: h }), (s += 1));
            }
            return i;
          }),
          (g.prototype._chunkToString = function (t, e) {
            var i = t.opcodenum,
              r = "asm" === e,
              s = "";
            if (t.buf)
              (((!r && i === o.OP_PUSHDATA1) ||
                i === o.OP_PUSHDATA2 ||
                i === o.OP_PUSHDATA4) &&
                (s = s + " " + o(i).toString()),
                t.len > 0 &&
                  (s = r
                    ? s + " " + t.buf.toString("hex")
                    : s + " " + t.len + " 0x" + t.buf.toString("hex")));
            else if ("undefined" !== typeof o.reverseMap[i])
              r
                ? 0 === i
                  ? (s += " 0")
                  : 79 === i
                    ? (s += " -1")
                    : (s = s + " " + o(i).toString())
                : (s = s + " " + o(i).toString());
            else {
              var n = i.toString(16);
              (n.length % 2 !== 0 && (n = "0" + n),
                (s = r ? s + " " + n : s + " 0x" + n));
            }
            return s;
          }),
          (g.prototype.toASM = function () {
            for (var t = "", e = 0; e < this.chunks.length; e++) {
              var i = this.chunks[e];
              t += this._chunkToString(i, "asm");
            }
            return t.substr(1);
          }),
          (g.prototype.toString = function () {
            for (var t = "", e = 0; e < this.chunks.length; e++) {
              var i = this.chunks[e];
              t += this._chunkToString(i);
            }
            return t.substr(1);
          }),
          (g.prototype.toHex = function () {
            return this.toBuffer().toString("hex");
          }),
          (g.prototype.inspect = function () {
            return "<Script: " + this.toString() + ">";
          }),
          (g.prototype.isPublicKeyHashOut = function () {
            return !(
              5 !== this.chunks.length ||
              this.chunks[0].opcodenum !== o.OP_DUP ||
              this.chunks[1].opcodenum !== o.OP_HASH160 ||
              !this.chunks[2].buf ||
              20 !== this.chunks[2].buf.length ||
              this.chunks[3].opcodenum !== o.OP_EQUALVERIFY ||
              this.chunks[4].opcodenum !== o.OP_CHECKSIG
            );
          }),
          (g.prototype.isPublicKeyHashIn = function () {
            if (2 === this.chunks.length) {
              var t = this.chunks[0].buf,
                e = this.chunks[1].buf;
              if (t && t.length && 48 === t[0] && e && e.length) {
                var i = e[0];
                if ((4 === i || 6 === i || 7 === i) && 65 === e.length)
                  return !0;
                if ((3 === i || 2 === i) && 33 === e.length) return !0;
              }
            }
            return !1;
          }),
          (g.prototype.getPublicKey = function () {
            return (
              p.checkState(
                this.isPublicKeyOut(),
                "Can't retrieve PublicKey from a non-PK output",
              ),
              this.chunks[0].buf
            );
          }),
          (g.prototype.getPublicKeyHash = function () {
            if (this.isPublicKeyHashOut()) return this.chunks[2].buf;
            if (this.isWitnessPublicKeyHashOut()) return this.chunks[1].buf;
            throw new Error(
              "Can't retrieve PublicKeyHash from a non-PKH output",
            );
          }),
          (g.prototype.isPublicKeyOut = function () {
            if (
              2 === this.chunks.length &&
              this.chunks[0].buf &&
              this.chunks[0].buf.length &&
              this.chunks[1].opcodenum === o.OP_CHECKSIG
            ) {
              var t = this.chunks[0].buf,
                e = t[0],
                i = !1;
              if (
                ((((4 !== e && 6 !== e && 7 !== e) || 65 !== t.length) &&
                  ((3 !== e && 2 !== e) || 33 !== t.length)) ||
                  (i = !0),
                i)
              )
                return h.isValid(t);
            }
            return !1;
          }),
          (g.prototype.isPublicKeyIn = function () {
            if (1 === this.chunks.length) {
              var t = this.chunks[0].buf;
              if (t && t.length && 48 === t[0]) return !0;
            }
            return !1;
          }),
          (g.prototype.isScriptHashOut = function () {
            var t = this.toBuffer();
            return (
              23 === t.length &&
              t[0] === o.OP_HASH160 &&
              20 === t[1] &&
              t[t.length - 1] === o.OP_EQUAL
            );
          }),
          (g.prototype.isWitnessScriptHashOut = function () {
            var t = this.toBuffer();
            return 34 === t.length && t[0] === o.OP_0 && 32 === t[1];
          }),
          (g.prototype.isWitnessPublicKeyHashOut = function () {
            var t = this.toBuffer();
            return 22 === t.length && t[0] === o.OP_0 && 20 === t[1];
          }),
          (g.prototype.isTaproot = function () {
            var t = this.toBuffer();
            return 34 === t.length && t[0] === o.OP_1 && 32 === t[1];
          }),
          (g.prototype.isWitnessProgram = function (t) {
            t || (t = {});
            var e = this.toBuffer();
            return (
              !(e.length < 4 || e.length > 42) &&
              (e[0] === o.OP_0 || (e[0] >= o.OP_1 && e[0] <= o.OP_16)) &&
              e.length === e[1] + 2 &&
              ((t.version = e[0]), (t.program = e.slice(2, e.length)), !0)
            );
          }),
          (g.prototype.isScriptHashIn = function () {
            if (this.chunks.length <= 1) return !1;
            var t,
              e = this.chunks[this.chunks.length - 1],
              i = e.buf;
            if (!i) return !1;
            try {
              t = g.fromBuffer(i);
            } catch (s) {
              if (s instanceof _.Script.InvalidBuffer) return !1;
              throw s;
            }
            var r = t.classify();
            return r !== g.types.UNKNOWN;
          }),
          (g.prototype.isMultisigOut = function () {
            return (
              this.chunks.length > 3 &&
              o.isSmallIntOp(this.chunks[0].opcodenum) &&
              this.chunks.slice(1, this.chunks.length - 2).every(function (t) {
                return t.buf && d.isBuffer(t.buf);
              }) &&
              o.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) &&
              this.chunks[this.chunks.length - 1].opcodenum ===
                o.OP_CHECKMULTISIG
            );
          }),
          (g.prototype.isMultisigIn = function () {
            return (
              this.chunks.length >= 2 &&
              0 === this.chunks[0].opcodenum &&
              this.chunks.slice(1, this.chunks.length).every(function (t) {
                return t.buf && d.isBuffer(t.buf) && a.isTxDER(t.buf);
              })
            );
          }),
          (g.prototype.isDataOut = function () {
            return (
              this.chunks.length >= 1 &&
              this.chunks[0].opcodenum === o.OP_RETURN &&
              (1 === this.chunks.length ||
                (2 === this.chunks.length &&
                  this.chunks[1].buf &&
                  this.chunks[1].buf.length <= g.OP_RETURN_STANDARD_SIZE &&
                  this.chunks[1].length === this.chunks.len))
            );
          }),
          (g.prototype.getData = function () {
            if (
              this.isDataOut() ||
              this.isScriptHashOut() ||
              this.isWitnessScriptHashOut() ||
              this.isWitnessPublicKeyHashOut() ||
              this.isTaproot()
            )
              return f.isUndefined(this.chunks[1])
                ? e.alloc(0)
                : e.from(this.chunks[1].buf);
            if (this.isPublicKeyHashOut()) return e.from(this.chunks[2].buf);
            throw new Error("Unrecognized script type to get data from");
          }),
          (g.prototype.isPushOnly = function () {
            return f.every(this.chunks, function (t) {
              return t.opcodenum <= o.OP_16;
            });
          }),
          (g.types = {}),
          (g.types.UNKNOWN = "Unknown"),
          (g.types.PUBKEY_OUT = "Pay to public key"),
          (g.types.PUBKEY_IN = "Spend from public key"),
          (g.types.PUBKEYHASH_OUT = "Pay to public key hash"),
          (g.types.PUBKEYHASH_IN = "Spend from public key hash"),
          (g.types.SCRIPTHASH_OUT = "Pay to script hash"),
          (g.types.SCRIPTHASH_IN = "Spend from script hash"),
          (g.types.MULTISIG_OUT = "Pay to multisig"),
          (g.types.MULTISIG_IN = "Spend from multisig"),
          (g.types.DATA_OUT = "Data push"),
          (g.OP_RETURN_STANDARD_SIZE = 80),
          (g.prototype.classify = function () {
            if (this._isInput) return this.classifyInput();
            if (this._isOutput) return this.classifyOutput();
            var t = this.classifyOutput();
            return t != g.types.UNKNOWN ? t : this.classifyInput();
          }),
          (g.outputIdentifiers = {}),
          (g.outputIdentifiers.PUBKEY_OUT = g.prototype.isPublicKeyOut),
          (g.outputIdentifiers.PUBKEYHASH_OUT = g.prototype.isPublicKeyHashOut),
          (g.outputIdentifiers.MULTISIG_OUT = g.prototype.isMultisigOut),
          (g.outputIdentifiers.SCRIPTHASH_OUT = g.prototype.isScriptHashOut),
          (g.outputIdentifiers.DATA_OUT = g.prototype.isDataOut),
          (g.prototype.classifyOutput = function () {
            for (var t in g.outputIdentifiers)
              if (g.outputIdentifiers[t].bind(this)()) return g.types[t];
            return g.types.UNKNOWN;
          }),
          (g.inputIdentifiers = {}),
          (g.inputIdentifiers.PUBKEY_IN = g.prototype.isPublicKeyIn),
          (g.inputIdentifiers.PUBKEYHASH_IN = g.prototype.isPublicKeyHashIn),
          (g.inputIdentifiers.MULTISIG_IN = g.prototype.isMultisigIn),
          (g.inputIdentifiers.SCRIPTHASH_IN = g.prototype.isScriptHashIn),
          (g.prototype.classifyInput = function () {
            for (var t in g.inputIdentifiers)
              if (g.inputIdentifiers[t].bind(this)()) return g.types[t];
            return g.types.UNKNOWN;
          }),
          (g.prototype.isStandard = function () {
            return this.classify() !== g.types.UNKNOWN;
          }),
          (g.prototype.prepend = function (t) {
            return (this._addByType(t, !0), this);
          }),
          (g.prototype.equals = function (t) {
            if (
              (p.checkState(t instanceof g, "Must provide another script"),
              this.chunks.length !== t.chunks.length)
            )
              return !1;
            var e;
            for (e = 0; e < this.chunks.length; e++) {
              if (
                d.isBuffer(this.chunks[e].buf) &&
                !d.isBuffer(t.chunks[e].buf)
              )
                return !1;
              if (
                d.isBuffer(this.chunks[e].buf) &&
                !d.equals(this.chunks[e].buf, t.chunks[e].buf)
              )
                return !1;
              if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1;
            }
            return !0;
          }),
          (g.prototype.add = function (t) {
            return (this._addByType(t, !1), this);
          }),
          (g.prototype._addByType = function (t, e) {
            if ("string" === typeof t) this._addOpcode(t, e);
            else if ("number" === typeof t) this._addOpcode(t, e);
            else if (t instanceof o) this._addOpcode(t, e);
            else if (d.isBuffer(t)) this._addBuffer(t, e);
            else if (t instanceof g) this.chunks = this.chunks.concat(t.chunks);
            else {
              if ("object" !== typeof t)
                throw new Error("Invalid script chunk");
              this._insertAtPosition(t, e);
            }
          }),
          (g.prototype._insertAtPosition = function (t, e) {
            e ? this.chunks.unshift(t) : this.chunks.push(t);
          }),
          (g.prototype._addOpcode = function (t, e) {
            var i;
            return (
              (i =
                "number" === typeof t
                  ? t
                  : t instanceof o
                    ? t.toNumber()
                    : o(t).toNumber()),
              this._insertAtPosition({ opcodenum: i }, e),
              this
            );
          }),
          (g.prototype._addBuffer = function (t, e) {
            var i,
              r = t.length;
            if (r >= 0 && r < o.OP_PUSHDATA1) i = r;
            else if (r < Math.pow(2, 8)) i = o.OP_PUSHDATA1;
            else if (r < Math.pow(2, 16)) i = o.OP_PUSHDATA2;
            else {
              if (!(r < Math.pow(2, 32)))
                throw new Error("You can't push that much data");
              i = o.OP_PUSHDATA4;
            }
            return (
              this._insertAtPosition({ buf: t, len: r, opcodenum: i }, e),
              this
            );
          }),
          (g.prototype.hasCodeseparators = function () {
            for (var t = 0; t < this.chunks.length; t++)
              if (this.chunks[t].opcodenum === o.OP_CODESEPARATOR) return !0;
            return !1;
          }),
          (g.prototype.removeCodeseparators = function () {
            for (var t = [], e = 0; e < this.chunks.length; e++)
              this.chunks[e].opcodenum !== o.OP_CODESEPARATOR &&
                t.push(this.chunks[e]);
            return ((this.chunks = t), this);
          }),
          (g.buildMultisigOut = function (t, e, i) {
            (p.checkArgument(
              e <= t.length,
              "Number of required signatures must be less than or equal to the number of public keys",
            ),
              (i = i || {}));
            var r = new g();
            (r.add(o.smallInt(e)), (t = f.map(t, h)));
            var s = t;
            i.noSorting ||
              (s = f.sortBy(t, function (t) {
                return t.toString("hex");
              }));
            for (var n = 0; n < s.length; n++) {
              var u = s[n];
              r.add(u.toBuffer());
            }
            return (r.add(o.smallInt(t.length)), r.add(o.OP_CHECKMULTISIG), r);
          }),
          (g.buildWitnessMultisigOutFromScript = function (t) {
            if (t instanceof g) {
              var e = new g();
              return (e.add(o.OP_0), e.add(u.sha256(t.toBuffer())), e);
            }
            throw new TypeError(
              "First argument is expected to be a p2sh script",
            );
          }),
          (g.buildMultisigIn = function (t, e, i, r) {
            (p.checkArgument(f.isArray(t)),
              p.checkArgument(f.isNumber(e)),
              p.checkArgument(f.isArray(i)),
              (r = r || {}));
            var s = new g();
            return (
              s.add(o.OP_0),
              f.each(i, function (t) {
                (p.checkArgument(
                  d.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  s.add(t));
              }),
              s
            );
          }),
          (g.buildP2SHMultisigIn = function (t, e, i, r) {
            (p.checkArgument(f.isArray(t)),
              p.checkArgument(f.isNumber(e)),
              p.checkArgument(f.isArray(i)),
              (r = r || {}));
            var s = new g();
            return (
              s.add(o.OP_0),
              f.each(i, function (t) {
                (p.checkArgument(
                  d.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  s.add(t));
              }),
              s.add(
                (r.cachedMultisig || g.buildMultisigOut(t, e, r)).toBuffer(),
              ),
              s
            );
          }),
          (g.buildPublicKeyHashOut = function (t) {
            (p.checkArgument(!f.isUndefined(t)),
              p.checkArgument(
                t instanceof h || t instanceof r || f.isString(t),
              ),
              t instanceof h
                ? (t = t.toAddress())
                : f.isString(t) && (t = new r(t)));
            var e = new g();
            return (
              e
                .add(o.OP_DUP)
                .add(o.OP_HASH160)
                .add(t.hashBuffer)
                .add(o.OP_EQUALVERIFY)
                .add(o.OP_CHECKSIG),
              (e._network = t.network),
              e
            );
          }),
          (g.buildWitnessV0Out = function (t) {
            (p.checkArgument(!f.isUndefined(t)),
              p.checkArgument(
                t instanceof h || t instanceof r || f.isString(t),
              ),
              t instanceof h
                ? (t = t.toAddress(null, r.PayToWitnessPublicKeyHash))
                : f.isString(t) && (t = new r(t)));
            var e = new g();
            return (
              e.add(o.OP_0).add(t.hashBuffer),
              (e._network = t.network),
              e
            );
          }),
          (g.buildPublicKeyOut = function (t) {
            p.checkArgument(t instanceof h);
            var e = new g();
            return (e.add(t.toBuffer()).add(o.OP_CHECKSIG), e);
          }),
          (g.buildDataOut = function (t, i) {
            (p.checkArgument(
              f.isUndefined(t) || f.isString(t) || d.isBuffer(t),
            ),
              f.isString(t) && (t = e.from(t, i)));
            var r = new g();
            return (r.add(o.OP_RETURN), f.isUndefined(t) || r.add(t), r);
          }),
          (g.buildScriptHashOut = function (t) {
            p.checkArgument(
              t instanceof g || (t instanceof r && t.isPayToScriptHash()),
            );
            var e = new g();
            return (
              e
                .add(o.OP_HASH160)
                .add(
                  t instanceof r
                    ? t.hashBuffer
                    : u.sha256ripemd160(t.toBuffer()),
                )
                .add(o.OP_EQUAL),
              (e._network = t._network || t.network),
              e
            );
          }),
          (g.buildPublicKeyIn = function (t, e) {
            (p.checkArgument(t instanceof a || d.isBuffer(t)),
              p.checkArgument(f.isUndefined(e) || f.isNumber(e)),
              t instanceof a && (t = t.toBuffer()));
            var i = new g();
            return (
              i.add(
                d.concat([t, d.integerAsSingleByteBuffer(e || a.SIGHASH_ALL)]),
              ),
              i
            );
          }),
          (g.buildPublicKeyHashIn = function (t, e, i) {
            (p.checkArgument(e instanceof a || d.isBuffer(e)),
              p.checkArgument(f.isUndefined(i) || f.isNumber(i)),
              e instanceof a && (e = e.toBuffer()));
            var r = new g()
              .add(
                d.concat([e, d.integerAsSingleByteBuffer(i || a.SIGHASH_ALL)]),
              )
              .add(new h(t).toBuffer());
            return r;
          }),
          (g.empty = function () {
            return new g();
          }),
          (g.prototype.toScriptHashOut = function () {
            return g.buildScriptHashOut(this);
          }),
          (g.fromAddress = function (t) {
            if (((t = r(t)), t.isPayToScriptHash()))
              return g.buildScriptHashOut(t);
            if (t.isPayToPublicKeyHash()) return g.buildPublicKeyHashOut(t);
            if (t.isPayToWitnessPublicKeyHash()) return g.buildWitnessV0Out(t);
            if (t.isPayToWitnessScriptHash()) return g.buildWitnessV0Out(t);
            throw new _.Script.UnrecognizedAddress(t);
          }),
          (g.prototype.getAddressInfo = function (t) {
            if (this._isInput) return this._getInputAddressInfo();
            if (this._isOutput) return this._getOutputAddressInfo();
            var e = this._getOutputAddressInfo();
            return e || this._getInputAddressInfo();
          }),
          (g.prototype._getOutputAddressInfo = function () {
            var t = {};
            if (this.isScriptHashOut())
              ((t.hashBuffer = this.getData()), (t.type = r.PayToScriptHash));
            else if (this.isPublicKeyHashOut())
              ((t.hashBuffer = this.getData()),
                (t.type = r.PayToPublicKeyHash));
            else if (this.isWitnessScriptHashOut())
              ((t.hashBuffer = this.getData()),
                (t.type = r.PayToWitnessScriptHash));
            else if (this.isWitnessPublicKeyHashOut())
              ((t.hashBuffer = this.getData()),
                (t.type = r.PayToWitnessPublicKeyHash));
            else {
              if (!this.isTaproot()) return !1;
              ((t.hashBuffer = this.getData()), (t.type = r.PayToTaproot));
            }
            return t;
          }),
          (g.prototype._getInputAddressInfo = function () {
            var t = {};
            if (this.isPublicKeyHashIn())
              ((t.hashBuffer = u.sha256ripemd160(this.chunks[1].buf)),
                (t.type = r.PayToPublicKeyHash));
            else {
              if (!this.isScriptHashIn()) return !1;
              ((t.hashBuffer = u.sha256ripemd160(
                this.chunks[this.chunks.length - 1].buf,
              )),
                (t.type = r.PayToScriptHash));
            }
            return t;
          }),
          (g.prototype.toAddress = function (t) {
            var e = this.getAddressInfo();
            return (
              !!e &&
              ((e.network = c.get(t) || this._network || c.defaultNetwork),
              new r(e))
            );
          }),
          (g.prototype.findAndDelete = function (t) {
            for (
              var e = t.toBuffer(), i = e.toString("hex"), r = 0;
              r < this.chunks.length;
              r++
            ) {
              var s = g({ chunks: [this.chunks[r]] }),
                n = s.toBuffer(),
                u = n.toString("hex");
              i === u && this.chunks.splice(r, 1);
            }
            return this;
          }),
          (g.prototype.checkMinimalPush = function (t) {
            var e = this.chunks[t],
              i = e.buf,
              r = e.opcodenum;
            return (
              !i ||
              (0 === i.length
                ? r === o.OP_0
                : 1 === i.length && i[0] >= 1 && i[0] <= 16
                  ? r === o.OP_1 + (i[0] - 1)
                  : 1 === i.length && 129 === i[0]
                    ? r === o.OP_1NEGATE
                    : i.length <= 75
                      ? r === i.length
                      : i.length <= 255
                        ? r === o.OP_PUSHDATA1
                        : !(i.length <= 65535) || r === o.OP_PUSHDATA2)
            );
          }),
          (g.prototype._decodeOP_N = function (t) {
            if (t === o.OP_0) return 0;
            if (t >= o.OP_1 && t <= o.OP_16) return t - (o.OP_1 - 1);
            throw new Error("Invalid opcode: " + JSON.stringify(t));
          }),
          (g.prototype.getSignatureOperationsCount = function (t) {
            t = !!f.isUndefined(t) || t;
            var e = this,
              i = 0,
              r = o.OP_INVALIDOPCODE;
            return (
              f.each(e.chunks, function (s) {
                var n = s.opcodenum;
                (n == o.OP_CHECKSIG || n == o.OP_CHECKSIGVERIFY
                  ? i++
                  : (n != o.OP_CHECKMULTISIG &&
                      n != o.OP_CHECKMULTISIGVERIFY) ||
                    (t && r >= o.OP_1 && r <= o.OP_16
                      ? (i += e._decodeOP_N(r))
                      : (i += 20)),
                  (r = n));
              }),
              i
            );
          }),
          (t.exports = g));
      }).call(this, i(2).Buffer);
    },
    5858: function (t, e, i) {
      "use strict";
      var r = i(2852),
        s = i(2897),
        n = i(2990),
        u = i(3169),
        o = i(3367),
        h = i(4911);
      function a(t) {
        if (!(this instanceof a)) return new a(t);
        s.checkArgument(
          r.isObject(t),
          "Must provide an object from where to extract data",
        );
        var e = t.address ? new o(t.address) : void 0,
          i = t.txid ? t.txid : t.txId;
        if (!i || !n.isHexaString(i) || i.length > 64)
          throw new Error("Invalid TXID in object", t);
        var c = r.isUndefined(t.vout) ? t.outputIndex : t.vout;
        if (!r.isNumber(c))
          throw new Error("Invalid outputIndex, received " + c);
        s.checkArgument(
          !r.isUndefined(t.scriptPubKey) || !r.isUndefined(t.script),
          "Must provide the scriptPubKey for that output!",
        );
        var p = new u(t.scriptPubKey || t.script);
        s.checkArgument(
          !r.isUndefined(t.amount) || !r.isUndefined(t.satoshis),
          "Must provide an amount for the output",
        );
        var f = r.isUndefined(t.amount)
          ? t.satoshis
          : new h.fromBTC(t.amount).toSatoshis();
        (s.checkArgument(r.isNumber(f), "Amount must be a number"),
          n.defineImmutable(this, {
            address: e,
            txId: i,
            outputIndex: c,
            script: p,
            satoshis: f,
          }));
      }
      ((a.prototype.inspect = function () {
        return (
          "<UnspentOutput: " +
          this.txId +
          ":" +
          this.outputIndex +
          ", satoshis: " +
          this.satoshis +
          ", address: " +
          this.address +
          ">"
        );
      }),
        (a.prototype.toString = function () {
          return this.txId + ":" + this.outputIndex;
        }),
        (a.fromObject = function (t) {
          return new a(t);
        }),
        (a.prototype.toObject = a.prototype.toJSON =
          function () {
            return {
              address: this.address ? this.address.toString() : void 0,
              txid: this.txId,
              vout: this.outputIndex,
              scriptPubKey: this.script.toBuffer().toString("hex"),
              amount: h.fromSatoshis(this.satoshis).toBTC(),
            };
          }),
        (t.exports = a));
    },
    7075: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(5857),
          n = i(4908),
          u = i(3046),
          o = i(3047),
          h = i(3168),
          a = i(3366),
          c = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e ? (this.initialize(), this.set(e)) : this.initialize();
          };
        ((c.SIGVERSION_BASE = 0),
          (c.SIGVERSION_WITNESS_V0 = 1),
          (c.SIGVERSION_TAPROOT = 2),
          (c.SIGVERSION_TAPSCRIPT = 3),
          (c.prototype.verifyWitnessProgram = function (t, e, i, r, u) {
            var h = new s(),
              a = [];
            if (0 !== t)
              return (
                !(u & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM) ||
                ((this.errstr =
                  "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM"),
                !1)
              );
            if (32 === e.length) {
              if (0 === i.length)
                return (
                  (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WITNESS_EMPTY"),
                  !1
                );
              var p = i[i.length - 1];
              h = new s(p);
              var f = o.sha256(p);
              if (f.toString("hex") !== e.toString("hex"))
                return (
                  (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH"),
                  !1
                );
              a = i.slice(0, -1);
            } else {
              if (20 !== e.length)
                return (
                  (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WRONG_LENGTH"),
                  !1
                );
              if (2 !== i.length)
                return (
                  (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH"),
                  !1
                );
              (h.add(n.OP_DUP),
                h.add(n.OP_HASH160),
                h.add(e),
                h.add(n.OP_EQUALVERIFY),
                h.add(n.OP_CHECKSIG),
                (a = i));
            }
            if (
              (this.initialize(),
              this.set({
                script: h,
                stack: a,
                sigversion: c.SIGVERSION_WITNESS_V0,
                satoshis: r,
                flags: u,
              }),
              !this.evaluate())
            )
              return !1;
            if (1 !== this.stack.length)
              return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE"), !1);
            var _ = this.stack[this.stack.length - 1];
            return (
              !!c.castToBool(_) ||
              ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK"), !1)
            );
          }),
          (c.prototype.verify = function (t, e, n, u, o, h, a) {
            var p,
              f = i(4613);
            if (
              (r.isUndefined(n) && (n = new f()),
              r.isUndefined(u) && (u = 0),
              r.isUndefined(o) && (o = 0),
              r.isUndefined(h) && (h = null),
              r.isUndefined(a) && (a = 0),
              this.set({
                script: t,
                tx: n,
                nin: u,
                sigversion: c.SIGVERSION_BASE,
                satoshis: 0,
                flags: o,
              }),
              0 !== (o & c.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly())
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
            if (!this.evaluate()) return !1;
            o & c.SCRIPT_VERIFY_P2SH && (p = this.stack.slice());
            var _ = this.stack;
            if (
              (this.initialize(),
              this.set({ script: e, stack: _, tx: n, nin: u, flags: o }),
              !this.evaluate())
            )
              return !1;
            if (0 === this.stack.length)
              return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT"), !1);
            var d = this.stack[this.stack.length - 1];
            if (!c.castToBool(d))
              return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK"), !1);
            var l = !1;
            if (o & c.SCRIPT_VERIFY_WITNESS) {
              var g = {};
              if (e.isWitnessProgram(g)) {
                if (((l = !0), 0 !== t.toBuffer().length)) return !1;
                if (
                  !this.verifyWitnessProgram(
                    g.version,
                    g.program,
                    h,
                    a,
                    this.flags,
                  )
                )
                  return !1;
              }
            }
            if (o & c.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
              if (!t.isPushOnly())
                return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
              if (0 === p.length)
                throw new Error("internal error - stack copy empty");
              var S = p[p.length - 1],
                I = s.fromBuffer(S);
              if (
                (p.pop(),
                this.initialize(),
                this.set({ script: I, stack: p, tx: n, nin: u, flags: o }),
                !this.evaluate())
              )
                return !1;
              if (0 === p.length)
                return (
                  (this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK"),
                  !1
                );
              if (!c.castToBool(p[p.length - 1]))
                return (
                  (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK"),
                  !1
                );
              if (o & c.SCRIPT_VERIFY_WITNESS) {
                var O = {};
                if (I.isWitnessProgram(O)) {
                  l = !0;
                  var P = new s();
                  if ((P.add(I.toBuffer()), t.toHex() !== P.toHex()))
                    return (
                      (this.errstr = "SCRIPT_ERR_WITNESS_MALLEATED_P2SH"),
                      !1
                    );
                  if (
                    !this.verifyWitnessProgram(
                      O.version,
                      O.program,
                      h,
                      a,
                      this.flags,
                    )
                  )
                    return !1;
                  _ = [_[0]];
                }
              }
            }
            if (0 != (this.flags & c.SCRIPT_VERIFY_CLEANSTACK)) {
              if (0 == (this.flags & c.SCRIPT_VERIFY_P2SH))
                throw "flags & SCRIPT_VERIFY_P2SH";
              if (1 != p.length)
                return ((this.errstr = "SCRIPT_ERR_CLEANSTACK"), !1);
            }
            return (
              !(this.flags & c.SCRIPT_VERIFY_WITNESS && !l && h.length > 0) ||
              ((this.errstr = "SCRIPT_ERR_WITNESS_UNEXPECTED"), !1)
            );
          }),
          (t.exports = c),
          (c.prototype.initialize = function (t) {
            ((this.stack = []),
              (this.altstack = []),
              (this.pc = 0),
              (this.satoshis = 0),
              (this.sigversion = c.SIGVERSION_BASE),
              (this.pbegincodehash = 0),
              (this.nOpCount = 0),
              (this.vfExec = []),
              (this.errstr = ""),
              (this.flags = 0));
          }),
          (c.prototype.set = function (t) {
            ((this.script = t.script || this.script),
              (this.tx = t.tx || this.tx),
              (this.nin = "undefined" !== typeof t.nin ? t.nin : this.nin),
              (this.stack = t.stack || this.stack),
              (this.altstack = t.altack || this.altstack),
              (this.pc = "undefined" !== typeof t.pc ? t.pc : this.pc),
              (this.pbegincodehash =
                "undefined" !== typeof t.pbegincodehash
                  ? t.pbegincodehash
                  : this.pbegincodehash),
              (this.sigversion =
                "undefined" !== typeof t.sigversion
                  ? t.sigversion
                  : this.sigversion),
              (this.satoshis =
                "undefined" !== typeof t.satoshis ? t.satoshis : this.satoshis),
              (this.nOpCount =
                "undefined" !== typeof t.nOpCount ? t.nOpCount : this.nOpCount),
              (this.vfExec = t.vfExec || this.vfExec),
              (this.errstr = t.errstr || this.errstr),
              (this.flags =
                "undefined" !== typeof t.flags ? t.flags : this.flags));
          }),
          (c.true = e.from([1])),
          (c.false = e.from([])),
          (c.MAX_SCRIPT_ELEMENT_SIZE = 520),
          (c.LOCKTIME_THRESHOLD = 5e8),
          (c.LOCKTIME_THRESHOLD_BN = new u(c.LOCKTIME_THRESHOLD)),
          (c.SCRIPT_VERIFY_NONE = 0),
          (c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM = 4096),
          (c.SCRIPT_VERIFY_P2SH = 1),
          (c.SCRIPT_VERIFY_STRICTENC = 2),
          (c.SCRIPT_VERIFY_DERSIG = 4),
          (c.SCRIPT_VERIFY_LOW_S = 8),
          (c.SCRIPT_VERIFY_NULLDUMMY = 16),
          (c.SCRIPT_VERIFY_SIGPUSHONLY = 32),
          (c.SCRIPT_VERIFY_MINIMALDATA = 64),
          (c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128),
          (c.SCRIPT_VERIFY_CLEANSTACK = 256),
          (c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512),
          (c.SCRIPT_VERIFY_WITNESS = 1024),
          (c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 2048),
          (c.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = 1024),
          (c.SCRIPT_VERIFY_MINIMALIF = 8192),
          (c.SCRIPT_VERIFY_NULLFAIL = 16384),
          (c.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE = 32768),
          (c.SCRIPT_ENABLE_SIGHASH_FORKID = 65536),
          (c.SCRIPT_ENABLE_REPLAY_PROTECTION = 1 << 17),
          (c.SCRIPT_ENABLE_MONOLITH_OPCODES = 1 << 18),
          (c.SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 << 31),
          (c.SEQUENCE_LOCKTIME_TYPE_FLAG = 1 << 22),
          (c.SEQUENCE_LOCKTIME_MASK = 65535),
          (c.castToBool = function (t) {
            for (var e = 0; e < t.length; e++)
              if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
            return !1;
          }),
          (c.prototype.checkSignatureEncoding = function (t) {
            var e;
            if (0 == t.length) return !0;
            if (
              0 !==
                (this.flags &
                  (c.SCRIPT_VERIFY_DERSIG |
                    c.SCRIPT_VERIFY_LOW_S |
                    c.SCRIPT_VERIFY_STRICTENC)) &&
              !h.isTxDER(t)
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT"), !1);
            if (0 !== (this.flags & c.SCRIPT_VERIFY_LOW_S)) {
              if (((e = h.fromTxFormat(t)), !e.hasLowS()))
                return ((this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S"), !1);
            } else if (
              0 !== (this.flags & c.SCRIPT_VERIFY_STRICTENC) &&
              ((e = h.fromTxFormat(t)), !e.hasDefinedHashtype())
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_HASHTYPE"), !1);
            return !0;
          }),
          (c.prototype.checkPubkeyEncoding = function (t) {
            return 0 === (this.flags & c.SCRIPT_VERIFY_STRICTENC) ||
              a.isValid(t)
              ? !(
                  0 != (this.flags & c.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE) &&
                  this.sigversion == c.SIGVERSION_WITNESS_V0 &&
                  !a.fromBuffer(t).compressed
                ) || ((this.errstr = "SCRIPT_ERR_WITNESS_PUBKEYTYPE"), !1)
              : ((this.errstr = "SCRIPT_ERR_PUBKEYTYPE"), !1);
          }),
          (c.prototype.evaluate = function () {
            if (this.script.toBuffer().length > 1e4)
              return ((this.errstr = "SCRIPT_ERR_SCRIPT_SIZE"), !1);
            try {
              while (this.pc < this.script.chunks.length) {
                var t = this.step();
                if (!t) return !1;
              }
              if (this.stack.length + this.altstack.length > 1e3)
                return ((this.errstr = "SCRIPT_ERR_STACK_SIZE"), !1);
            } catch (e) {
              return ((this.errstr = "SCRIPT_ERR_UNKNOWN_ERROR: " + e), !1);
            }
            return (
              !(this.vfExec.length > 0) ||
              ((this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"), !1)
            );
          }),
          (c.prototype.checkLockTime = function (t) {
            return (
              !!(
                (this.tx.nLockTime < c.LOCKTIME_THRESHOLD &&
                  t.lt(c.LOCKTIME_THRESHOLD_BN)) ||
                (this.tx.nLockTime >= c.LOCKTIME_THRESHOLD &&
                  t.gte(c.LOCKTIME_THRESHOLD_BN))
              ) &&
              !t.gt(new u(this.tx.nLockTime)) &&
              !!this.tx.inputs[this.nin].isFinal()
            );
          }),
          (c.prototype.checkSequence = function (t) {
            var e = this.tx.inputs[this.nin].sequenceNumber;
            if (this.tx.version < 2) return !1;
            if (e & SEQUENCE_LOCKTIME_DISABLE_FLAG) return !1;
            var i = c.SEQUENCE_LOCKTIME_TYPE_FLAG | c.SEQUENCE_LOCKTIME_MASK,
              r = new u(e & i),
              s = t.and(i),
              n = new u(c.SEQUENCE_LOCKTIME_TYPE_FLAG);
            return (
              !!((r.lt(n) && s.lt(n)) || (r.gte(n) && s.gte(n))) && !s.gt(r)
            );
          }),
          (c.prototype.step = function () {
            var t,
              e,
              i,
              p,
              f,
              _,
              d,
              l,
              g,
              S,
              I,
              O,
              P,
              E,
              m,
              y,
              T,
              A = 0 !== (this.flags & c.SCRIPT_VERIFY_MINIMALDATA),
              R = -1 === this.vfExec.indexOf(!1),
              k = this.script.chunks[this.pc];
            this.pc++;
            var b = k.opcodenum;
            if (r.isUndefined(b))
              return ((this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE"), !1);
            if (k.buf && k.buf.length > c.MAX_SCRIPT_ELEMENT_SIZE)
              return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
            if (b > n.OP_16 && ++this.nOpCount > 201)
              return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
            if (
              b === n.OP_CAT ||
              b === n.OP_SUBSTR ||
              b === n.OP_LEFT ||
              b === n.OP_RIGHT ||
              b === n.OP_INVERT ||
              b === n.OP_AND ||
              b === n.OP_OR ||
              b === n.OP_XOR ||
              b === n.OP_2MUL ||
              b === n.OP_2DIV ||
              b === n.OP_MUL ||
              b === n.OP_DIV ||
              b === n.OP_MOD ||
              b === n.OP_LSHIFT ||
              b === n.OP_RSHIFT
            )
              return ((this.errstr = "SCRIPT_ERR_DISABLED_OPCODE"), !1);
            if (R && 0 <= b && b <= n.OP_PUSHDATA4) {
              if (A && !this.script.checkMinimalPush(this.pc - 1))
                return ((this.errstr = "SCRIPT_ERR_MINIMALDATA"), !1);
              if (k.buf) {
                if (k.len !== k.buf.length)
                  throw new Error(
                    "Length of push value not equal to length of data",
                  );
                this.stack.push(k.buf);
              } else this.stack.push(c.false);
            } else if (R || (n.OP_IF <= b && b <= n.OP_ENDIF))
              switch (b) {
                case n.OP_1NEGATE:
                case n.OP_1:
                case n.OP_2:
                case n.OP_3:
                case n.OP_4:
                case n.OP_5:
                case n.OP_6:
                case n.OP_7:
                case n.OP_8:
                case n.OP_9:
                case n.OP_10:
                case n.OP_11:
                case n.OP_12:
                case n.OP_13:
                case n.OP_14:
                case n.OP_15:
                case n.OP_16:
                  ((f = b - (n.OP_1 - 1)),
                    (t = new u(f).toScriptNumBuffer()),
                    this.stack.push(t));
                  break;
                case n.OP_NOP:
                  break;
                case n.OP_NOP2:
                case n.OP_CHECKLOCKTIMEVERIFY:
                  if (!(this.flags & c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                    if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                      return (
                        (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                        !1
                      );
                    break;
                  }
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var v = u.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    A,
                    5,
                  );
                  if (v.lt(new u(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (!this.checkLockTime(v))
                    return (
                      (this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME"),
                      !1
                    );
                  break;
                case n.OP_NOP3:
                case n.OP_CHECKSEQUENCEVERIFY:
                  if (!(this.flags & c.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
                    if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                      return (
                        (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                        !1
                      );
                    break;
                  }
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var N = u.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    A,
                    5,
                  );
                  if (N.lt(new u(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (0 != (N & c.SEQUENCE_LOCKTIME_DISABLE_FLAG)) break;
                  if (!this.checkSequence(N))
                    return (
                      (this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME"),
                      !1
                    );
                  break;
                case n.OP_NOP1:
                case n.OP_NOP4:
                case n.OP_NOP5:
                case n.OP_NOP6:
                case n.OP_NOP7:
                case n.OP_NOP8:
                case n.OP_NOP9:
                case n.OP_NOP10:
                  if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                    return (
                      (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                      !1
                    );
                  break;
                case n.OP_IF:
                case n.OP_NOTIF:
                  if (((y = !1), R)) {
                    if (this.stack.length < 1)
                      return (
                        (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                        !1
                      );
                    if (
                      ((t = this.stack[this.stack.length - 1]),
                      this.flags & c.SCRIPT_VERIFY_MINIMALIF)
                    ) {
                      if (
                        ((t = this.stack[this.stack.length - 1]), t.length > 1)
                      )
                        return ((this.errstr = "SCRIPT_ERR_MINIMALIF"), !1);
                      if (1 == t.length && 1 != t[0])
                        return ((this.errstr = "SCRIPT_ERR_MINIMALIF"), !1);
                    }
                    ((y = c.castToBool(t)),
                      b === n.OP_NOTIF && (y = !y),
                      this.stack.pop());
                  }
                  this.vfExec.push(y);
                  break;
                case n.OP_ELSE:
                  if (0 === this.vfExec.length)
                    return (
                      (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                      !1
                    );
                  this.vfExec[this.vfExec.length - 1] =
                    !this.vfExec[this.vfExec.length - 1];
                  break;
                case n.OP_ENDIF:
                  if (0 === this.vfExec.length)
                    return (
                      (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                      !1
                    );
                  this.vfExec.pop();
                  break;
                case n.OP_VERIFY:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((t = this.stack[this.stack.length - 1]),
                    (y = c.castToBool(t)),
                    !y)
                  )
                    return ((this.errstr = "SCRIPT_ERR_VERIFY"), !1);
                  this.stack.pop();
                  break;
                case n.OP_RETURN:
                  return ((this.errstr = "SCRIPT_ERR_OP_RETURN"), !1);
                case n.OP_TOALTSTACK:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.altstack.push(this.stack.pop());
                  break;
                case n.OP_FROMALTSTACK:
                  if (this.altstack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_ALTSTACK_OPERATION"),
                      !1
                    );
                  this.stack.push(this.altstack.pop());
                  break;
                case n.OP_2DROP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  (this.stack.pop(), this.stack.pop());
                  break;
                case n.OP_2DUP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 2]),
                    (i = this.stack[this.stack.length - 1]),
                    this.stack.push(e),
                    this.stack.push(i));
                  break;
                case n.OP_3DUP:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 3]),
                    (i = this.stack[this.stack.length - 2]));
                  var w = this.stack[this.stack.length - 1];
                  (this.stack.push(e), this.stack.push(i), this.stack.push(w));
                  break;
                case n.OP_2OVER:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 4]),
                    (i = this.stack[this.stack.length - 3]),
                    this.stack.push(e),
                    this.stack.push(i));
                  break;
                case n.OP_2ROT:
                  if (this.stack.length < 6)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((p = this.stack.splice(this.stack.length - 6, 2)),
                    this.stack.push(p[0]),
                    this.stack.push(p[1]));
                  break;
                case n.OP_2SWAP:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((p = this.stack.splice(this.stack.length - 4, 2)),
                    this.stack.push(p[0]),
                    this.stack.push(p[1]));
                  break;
                case n.OP_IFDUP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((t = this.stack[this.stack.length - 1]),
                    (y = c.castToBool(t)),
                    y && this.stack.push(t));
                  break;
                case n.OP_DEPTH:
                  ((t = new u(this.stack.length).toScriptNumBuffer()),
                    this.stack.push(t));
                  break;
                case n.OP_DROP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.pop();
                  break;
                case n.OP_DUP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.push(this.stack[this.stack.length - 1]);
                  break;
                case n.OP_NIP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.splice(this.stack.length - 2, 1);
                  break;
                case n.OP_OVER:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.push(this.stack[this.stack.length - 2]);
                  break;
                case n.OP_PICK:
                case n.OP_ROLL:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((t = this.stack[this.stack.length - 1]),
                    (l = u.fromScriptNumBuffer(t, A)),
                    (f = l.toNumber()),
                    this.stack.pop(),
                    f < 0 || f >= this.stack.length)
                  )
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((t = this.stack[this.stack.length - f - 1]),
                    b === n.OP_ROLL &&
                      this.stack.splice(this.stack.length - f - 1, 1),
                    this.stack.push(t));
                  break;
                case n.OP_ROT:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((_ = this.stack[this.stack.length - 3]),
                    (d = this.stack[this.stack.length - 2]));
                  var C = this.stack[this.stack.length - 1];
                  ((this.stack[this.stack.length - 3] = d),
                    (this.stack[this.stack.length - 2] = C),
                    (this.stack[this.stack.length - 1] = _));
                  break;
                case n.OP_SWAP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((_ = this.stack[this.stack.length - 2]),
                    (d = this.stack[this.stack.length - 1]),
                    (this.stack[this.stack.length - 2] = d),
                    (this.stack[this.stack.length - 1] = _));
                  break;
                case n.OP_TUCK:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.splice(
                    this.stack.length - 2,
                    0,
                    this.stack[this.stack.length - 1],
                  );
                  break;
                case n.OP_SIZE:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((l = new u(this.stack[this.stack.length - 1].length)),
                    this.stack.push(l.toScriptNumBuffer()));
                  break;
                case n.OP_EQUAL:
                case n.OP_EQUALVERIFY:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 2]),
                    (i = this.stack[this.stack.length - 1]));
                  var B = e.toString("hex") === i.toString("hex");
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(B ? c.true : c.false),
                    b === n.OP_EQUALVERIFY)
                  ) {
                    if (!B)
                      return ((this.errstr = "SCRIPT_ERR_EQUALVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case n.OP_1ADD:
                case n.OP_1SUB:
                case n.OP_NEGATE:
                case n.OP_ABS:
                case n.OP_NOT:
                case n.OP_0NOTEQUAL:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  switch (
                    ((t = this.stack[this.stack.length - 1]),
                    (l = u.fromScriptNumBuffer(t, A)),
                    b)
                  ) {
                    case n.OP_1ADD:
                      l = l.add(u.One);
                      break;
                    case n.OP_1SUB:
                      l = l.sub(u.One);
                      break;
                    case n.OP_NEGATE:
                      l = l.neg();
                      break;
                    case n.OP_ABS:
                      l.cmp(u.Zero) < 0 && (l = l.neg());
                      break;
                    case n.OP_NOT:
                      l = new u((0 === l.cmp(u.Zero)) + 0);
                      break;
                    case n.OP_0NOTEQUAL:
                      l = new u((0 !== l.cmp(u.Zero)) + 0);
                      break;
                  }
                  (this.stack.pop(), this.stack.push(l.toScriptNumBuffer()));
                  break;
                case n.OP_ADD:
                case n.OP_SUB:
                case n.OP_BOOLAND:
                case n.OP_BOOLOR:
                case n.OP_NUMEQUAL:
                case n.OP_NUMEQUALVERIFY:
                case n.OP_NUMNOTEQUAL:
                case n.OP_LESSTHAN:
                case n.OP_GREATERTHAN:
                case n.OP_LESSTHANOREQUAL:
                case n.OP_GREATERTHANOREQUAL:
                case n.OP_MIN:
                case n.OP_MAX:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  switch (
                    ((g = u.fromScriptNumBuffer(
                      this.stack[this.stack.length - 2],
                      A,
                    )),
                    (S = u.fromScriptNumBuffer(
                      this.stack[this.stack.length - 1],
                      A,
                    )),
                    (l = new u(0)),
                    b)
                  ) {
                    case n.OP_ADD:
                      l = g.add(S);
                      break;
                    case n.OP_SUB:
                      l = g.sub(S);
                      break;
                    case n.OP_BOOLAND:
                      l = new u(
                        (0 !== g.cmp(u.Zero) && 0 !== S.cmp(u.Zero)) + 0,
                      );
                      break;
                    case n.OP_BOOLOR:
                      l = new u(
                        (0 !== g.cmp(u.Zero) || 0 !== S.cmp(u.Zero)) + 0,
                      );
                      break;
                    case n.OP_NUMEQUAL:
                      l = new u((0 === g.cmp(S)) + 0);
                      break;
                    case n.OP_NUMEQUALVERIFY:
                      l = new u((0 === g.cmp(S)) + 0);
                      break;
                    case n.OP_NUMNOTEQUAL:
                      l = new u((0 !== g.cmp(S)) + 0);
                      break;
                    case n.OP_LESSTHAN:
                      l = new u((g.cmp(S) < 0) + 0);
                      break;
                    case n.OP_GREATERTHAN:
                      l = new u((g.cmp(S) > 0) + 0);
                      break;
                    case n.OP_LESSTHANOREQUAL:
                      l = new u((g.cmp(S) <= 0) + 0);
                      break;
                    case n.OP_GREATERTHANOREQUAL:
                      l = new u((g.cmp(S) >= 0) + 0);
                      break;
                    case n.OP_MIN:
                      l = g.cmp(S) < 0 ? g : S;
                      break;
                    case n.OP_MAX:
                      l = g.cmp(S) > 0 ? g : S;
                      break;
                  }
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(l.toScriptNumBuffer()),
                    b === n.OP_NUMEQUALVERIFY)
                  ) {
                    if (!c.castToBool(this.stack[this.stack.length - 1]))
                      return ((this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case n.OP_WITHIN:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((g = u.fromScriptNumBuffer(
                    this.stack[this.stack.length - 3],
                    A,
                  )),
                    (S = u.fromScriptNumBuffer(
                      this.stack[this.stack.length - 2],
                      A,
                    )));
                  var U = u.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    A,
                  );
                  ((y = S.cmp(g) <= 0 && g.cmp(U) < 0),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(y ? c.true : c.false));
                  break;
                case n.OP_RIPEMD160:
                case n.OP_SHA1:
                case n.OP_SHA256:
                case n.OP_HASH160:
                case n.OP_HASH256:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var x;
                  ((t = this.stack[this.stack.length - 1]),
                    b === n.OP_RIPEMD160
                      ? (x = o.ripemd160(t))
                      : b === n.OP_SHA1
                        ? (x = o.sha1(t))
                        : b === n.OP_SHA256
                          ? (x = o.sha256(t))
                          : b === n.OP_HASH160
                            ? (x = o.sha256ripemd160(t))
                            : b === n.OP_HASH256 && (x = o.sha256sha256(t)),
                    this.stack.pop(),
                    this.stack.push(x));
                  break;
                case n.OP_CODESEPARATOR:
                  this.pbegincodehash = this.pc;
                  break;
                case n.OP_CHECKSIG:
                case n.OP_CHECKSIGVERIFY:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((I = this.stack[this.stack.length - 2]),
                    (O = this.stack[this.stack.length - 1]),
                    !this.checkSignatureEncoding(I) ||
                      !this.checkPubkeyEncoding(O))
                  )
                    return !1;
                  P = new s().set({
                    chunks: this.script.chunks.slice(this.pbegincodehash),
                  });
                  var L = new s().add(I);
                  P.findAndDelete(L);
                  try {
                    ((E = h.fromTxFormat(I)),
                      (m = a.fromBuffer(O, !1)),
                      (T = this.tx.verifySignature(
                        E,
                        m,
                        this.nin,
                        P,
                        this.sigversion,
                        this.satoshis,
                      )));
                  } catch (W) {
                    T = !1;
                  }
                  if (!T && this.flags & c.SCRIPT_VERIFY_NULLFAIL && I.length)
                    return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(T ? c.true : c.false),
                    b === n.OP_CHECKSIGVERIFY)
                  ) {
                    if (!T)
                      return ((this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case n.OP_CHECKMULTISIG:
                case n.OP_CHECKMULTISIGVERIFY:
                  var H = 1;
                  if (this.stack.length < H)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var K = u
                    .fromScriptNumBuffer(this.stack[this.stack.length - H], A)
                    .toNumber();
                  if (K < 0 || K > 20)
                    return ((this.errstr = "SCRIPT_ERR_PUBKEY_COUNT"), !1);
                  if (((this.nOpCount += K), this.nOpCount > 201))
                    return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
                  var D = ++H;
                  H += K;
                  var M = K + 2;
                  if (this.stack.length < H)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var F = u
                    .fromScriptNumBuffer(this.stack[this.stack.length - H], A)
                    .toNumber();
                  if (F < 0 || F > K)
                    return ((this.errstr = "SCRIPT_ERR_SIG_COUNT"), !1);
                  var V = ++H;
                  if (((H += F), this.stack.length < H))
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  P = new s().set({
                    chunks: this.script.chunks.slice(this.pbegincodehash),
                  });
                  for (var G = 0; G < F; G++)
                    ((I = this.stack[this.stack.length - V - G]),
                      P.findAndDelete(new s().add(I)));
                  T = !0;
                  while (T && F > 0) {
                    if (
                      ((I = this.stack[this.stack.length - V]),
                      (O = this.stack[this.stack.length - D]),
                      !this.checkSignatureEncoding(I) ||
                        !this.checkPubkeyEncoding(O))
                    )
                      return !1;
                    var Y;
                    try {
                      ((E = h.fromTxFormat(I)),
                        (m = a.fromBuffer(O, !1)),
                        (Y = this.tx.verifySignature(
                          E,
                          m,
                          this.nin,
                          P,
                          this.sigversion,
                          this.satoshis,
                        )));
                    } catch (W) {
                      Y = !1;
                    }
                    (Y && (V++, F--), D++, K--, F > K && (T = !1));
                  }
                  while (H-- > 1) {
                    if (
                      !T &&
                      this.flags & c.SCRIPT_VERIFY_NULLFAIL &&
                      !M &&
                      this.stack[this.stack.length - 1].length
                    )
                      return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                    (M > 0 && M--, this.stack.pop());
                  }
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    this.flags & c.SCRIPT_VERIFY_NULLDUMMY &&
                    this.stack[this.stack.length - 1].length
                  )
                    return ((this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.push(T ? c.true : c.false),
                    b === n.OP_CHECKMULTISIGVERIFY)
                  ) {
                    if (!T)
                      return (
                        (this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY"),
                        !1
                      );
                    this.stack.pop();
                  }
                  break;
                default:
                  return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
              }
            return !0;
          }));
      }).call(this, i(2).Buffer);
    },
    7080: function (t, e, i) {
      "use strict";
      var r = i(4101),
        s = i(2897),
        n = (i(2936), i(4100)),
        u = i(3411),
        o = i(3526),
        h = i(3169),
        a = i(3168),
        c = i(4102);
      function p() {
        n.apply(this, arguments);
      }
      (r(p, n),
        (p.prototype.getSignatures = function (t, e, i, r, n, h) {
          (s.checkState(this.output instanceof u), (r = r || a.SIGHASH_ALL));
          var p = e.toPublicKey();
          return p.toString() ===
            this.output.script.getPublicKey().toString("hex")
            ? [
                new c({
                  publicKey: p,
                  prevTxId: this.prevTxId,
                  outputIndex: this.outputIndex,
                  inputIndex: i,
                  signature: o.sign(t, e, r, i, this.output.script, h),
                  sigtype: r,
                }),
              ]
            : [];
        }),
        (p.prototype.addSignature = function (t, e, i) {
          return (
            s.checkState(
              this.isValidSignature(t, e, i),
              "Signature is invalid",
            ),
            this.setScript(h.buildPublicKeyIn(e.signature.toDER(), e.sigtype)),
            this
          );
        }),
        (p.prototype.clearSignatures = function () {
          return (this.setScript(h.empty()), this);
        }),
        (p.prototype.isFullySigned = function () {
          return this.script.isPublicKeyIn();
        }),
        (p.SCRIPT_MAX_SIZE = 73),
        (p.prototype._estimateSize = function () {
          return p.SCRIPT_MAX_SIZE;
        }),
        (t.exports = p));
    },
    7081: function (t, e, i) {
      "use strict";
      var r = i(4101),
        s = i(2897),
        n = i(2936),
        u = (i(3367), i(3047)),
        o = i(4100),
        h = i(3411),
        a = i(3526),
        c = i(4617),
        p = i(3136),
        f = ((n = i(2936)), i(3169)),
        _ = i(3168),
        d = i(4102);
      function l() {
        o.apply(this, arguments);
      }
      (r(l, o),
        (l.prototype.getRedeemScript = function (t) {
          if (!this.redeemScript) {
            var e = f.buildWitnessV0Out(t);
            if (f.buildScriptHashOut(e).equals(this.output.script)) {
              var i = new f();
              (i.add(e.toBuffer()), this.setScript(i), (this.redeemScript = e));
            }
          }
          return this.redeemScript;
        }),
        (l.prototype.getScriptCode = function (t) {
          var e,
            i = new p();
          e = this.output.script.isScriptHashOut()
            ? this.getRedeemScript(t)
            : this.output.script;
          var r = f.buildPublicKeyHashOut(e.toAddress()).toBuffer();
          return (i.writeVarintNum(r.length), i.write(r), i.toBuffer());
        }),
        (l.prototype.getSighash = function (t, e, i, r) {
          var s = this.getScriptCode(e),
            n = this.getSatoshisBuffer();
          return c.sighash(t, r, i, s, n);
        }),
        (l.prototype.getSignatures = function (t, e, i, r, o, p) {
          var f;
          if (
            (s.checkState(this.output instanceof h),
            (o = o || u.sha256ripemd160(e.publicKey.toBuffer())),
            (r = r || _.SIGHASH_ALL),
            (p = p || "ecdsa"),
            (f = this.output.script.isScriptHashOut()
              ? this.getRedeemScript(e.publicKey)
              : this.output.script),
            f && n.equals(o, f.getPublicKeyHash()))
          ) {
            var l;
            if (f.isWitnessPublicKeyHashOut()) {
              var g = this.getSatoshisBuffer(),
                S = this.getScriptCode(e.publicKey);
              l = c.sign(t, e, r, i, S, g, p);
            } else l = a.sign(t, e, r, i, this.output.script, p);
            return [
              new d({
                publicKey: e.publicKey,
                prevTxId: this.prevTxId,
                outputIndex: this.outputIndex,
                inputIndex: i,
                signature: l,
                sigtype: r,
              }),
            ];
          }
          return [];
        }),
        (l.prototype.addSignature = function (t, e, i) {
          return (
            s.checkState(
              this.isValidSignature(t, e, i),
              "Signature is invalid",
            ),
            this.output.script.isWitnessPublicKeyHashOut() ||
            this.output.script.isScriptHashOut()
              ? this.setWitnesses([
                  n.concat([
                    e.signature.toDER(),
                    n.integerAsSingleByteBuffer(e.sigtype),
                  ]),
                  e.publicKey.toBuffer(),
                ])
              : this.setScript(
                  f.buildPublicKeyHashIn(
                    e.publicKey,
                    e.signature.toDER(),
                    e.sigtype,
                  ),
                ),
            this
          );
        }),
        (l.prototype.clearSignatures = function () {
          return (this.setScript(f.empty()), this.setWitnesses([]), this);
        }),
        (l.prototype.isFullySigned = function () {
          return this.script.isPublicKeyHashIn() || this.hasWitnesses();
        }),
        (l.prototype.isValidSignature = function (t, e, i) {
          if (
            ((e.signature.nhashtype = e.sigtype),
            this.output.script.isWitnessPublicKeyHashOut() ||
              this.output.script.isScriptHashOut())
          ) {
            var r = this.getScriptCode(),
              s = this.getSatoshisBuffer();
            return c.verify(t, e.signature, e.publicKey, e.inputIndex, r, s, i);
          }
          return a.verify(
            t,
            e.signature,
            e.publicKey,
            e.inputIndex,
            this.output.script,
            i,
          );
        }),
        (l.SCRIPT_MAX_SIZE = 107),
        (l.REDEEM_SCRIPT_SIZE = 22),
        (l.prototype._estimateSize = function () {
          var t = 4;
          const e = l.SCRIPT_MAX_SIZE / t;
          return this.output.script.isWitnessPublicKeyHashOut()
            ? e
            : this.output.script.isScriptHashOut()
              ? e + l.REDEEM_SCRIPT_SIZE
              : l.SCRIPT_MAX_SIZE;
        }),
        (t.exports = l));
    },
    7082: function (t, e, i) {
      "use strict";
      var r = i(2852),
        s = i(4101),
        n = (i(4909), i(4100)),
        u = i(3411),
        o = i(2897),
        h = i(3169),
        a = i(3168),
        c = i(3526),
        p = (i(3366), i(2936)),
        f = i(4102);
      function _(t, e, i, s, u) {
        ((u = u || {}), n.apply(this, arguments));
        var a = this;
        ((e = e || t.publicKeys),
          (i = i || t.threshold),
          (s = s || t.signatures),
          u.noSorting
            ? (this.publicKeys = e)
            : (this.publicKeys = r.sortBy(e, function (t) {
                return t.toString("hex");
              })),
          o.checkState(
            h.buildMultisigOut(this.publicKeys, i).equals(this.output.script),
            "Provided public keys don't match to the provided output script",
          ),
          (this.publicKeyIndex = {}),
          r.each(this.publicKeys, function (t, e) {
            a.publicKeyIndex[t.toString()] = e;
          }),
          (this.threshold = i),
          (this.signatures = s
            ? this._deserializeSignatures(s)
            : new Array(this.publicKeys.length)));
      }
      (s(_, n),
        (_.prototype.toObject = function () {
          var t = n.prototype.toObject.apply(this, arguments);
          return (
            (t.threshold = this.threshold),
            (t.publicKeys = r.map(this.publicKeys, function (t) {
              return t.toString();
            })),
            (t.signatures = this._serializeSignatures()),
            t
          );
        }),
        (_.prototype._deserializeSignatures = function (t) {
          return r.map(t, function (t) {
            if (t) return new f(t);
          });
        }),
        (_.prototype._serializeSignatures = function () {
          return r.map(this.signatures, function (t) {
            if (t) return t.toObject();
          });
        }),
        (_.prototype.getSignatures = function (t, e, i, s, n, h) {
          (o.checkState(this.output instanceof u),
            (s = s || a.SIGHASH_ALL),
            (h = h || "ecdsa"));
          var p = this,
            _ = [];
          return (
            r.each(this.publicKeys, function (r) {
              r.toString() === e.publicKey.toString() &&
                _.push(
                  new f({
                    publicKey: e.publicKey,
                    prevTxId: p.prevTxId,
                    outputIndex: p.outputIndex,
                    inputIndex: i,
                    signature: c.sign(t, e, s, i, p.output.script, h),
                    sigtype: s,
                  }),
                );
            }),
            _
          );
        }),
        (_.prototype.addSignature = function (t, e, i) {
          return (
            o.checkState(
              !this.isFullySigned(),
              "All needed signatures have already been added",
            ),
            o.checkArgument(
              !r.isUndefined(
                this.publicKeyIndex[e.publicKey.toString()],
                "Signature Undefined",
              ),
              "Signature has no matching public key",
            ),
            o.checkState(this.isValidSignature(t, e, i), "Invalid Signature"),
            (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e),
            this._updateScript(),
            this
          );
        }),
        (_.prototype._updateScript = function () {
          return (
            this.setScript(
              h.buildMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(),
              ),
            ),
            this
          );
        }),
        (_.prototype._createSignatures = function () {
          return r.map(
            r.filter(this.signatures, function (t) {
              return !r.isUndefined(t);
            }),
            function (t) {
              return p.concat([
                t.signature.toDER(),
                p.integerAsSingleByteBuffer(t.sigtype),
              ]);
            },
          );
        }),
        (_.prototype.clearSignatures = function () {
          ((this.signatures = new Array(this.publicKeys.length)),
            this._updateScript());
        }),
        (_.prototype.isFullySigned = function () {
          return this.countSignatures() === this.threshold;
        }),
        (_.prototype.countMissingSignatures = function () {
          return this.threshold - this.countSignatures();
        }),
        (_.prototype.countSignatures = function () {
          return r.reduce(
            this.signatures,
            function (t, e) {
              return t + !!e;
            },
            0,
          );
        }),
        (_.prototype.publicKeysWithoutSignature = function () {
          var t = this;
          return r.filter(this.publicKeys, function (e) {
            return !t.signatures[t.publicKeyIndex[e.toString()]];
          });
        }),
        (_.prototype.isValidSignature = function (t, e, i) {
          return (
            (e.signature.nhashtype = e.sigtype),
            c.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.output.script,
              i,
            )
          );
        }),
        (_.normalizeSignatures = function (t, e, i, r, s, n) {
          return s.map(function (s) {
            var u = null;
            return (
              (r = r.filter(function (r) {
                if (u) return !0;
                var o = new f({
                  signature: a.fromTxFormat(r),
                  publicKey: s,
                  prevTxId: e.prevTxId,
                  outputIndex: e.outputIndex,
                  inputIndex: i,
                  sigtype: a.SIGHASH_ALL,
                });
                o.signature.nhashtype = o.sigtype;
                var h = c.verify(
                  t,
                  o.signature,
                  o.publicKey,
                  o.inputIndex,
                  e.output.script,
                  n,
                );
                return !h || ((u = o), !1);
              })),
              u || null
            );
          });
        }),
        (_.OPCODES_SIZE = 1),
        (_.SIGNATURE_SIZE = 73),
        (_.prototype._estimateSize = function () {
          return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE;
        }),
        (t.exports = _));
    },
    7083: function (t, e, i) {
      "use strict";
      (function (e) {
        var r = i(2852),
          s = i(4101),
          n = i(4100),
          u = i(3411),
          o = i(2897),
          h = i(3367),
          a = i(3169),
          c = i(3168),
          p = i(3526),
          f = i(4617),
          _ = i(3136),
          d = i(2936),
          l = i(4102);
        function g(t, e, i, s, u) {
          ((u = u || {}), n.apply(this, arguments));
          var o = this;
          ((e = e || t.publicKeys),
            (i = i || t.threshold),
            (s = s || t.signatures),
            u.noSorting
              ? (this.publicKeys = e)
              : (this.publicKeys = r.sortBy(e, function (t) {
                  return t.toString("hex");
                })),
            (this.redeemScript = a.buildMultisigOut(this.publicKeys, i, u)));
          var c = a.buildWitnessMultisigOutFromScript(this.redeemScript);
          if (c.equals(this.output.script))
            ((this.nestedWitness = !1), (this.type = h.PayToWitnessScriptHash));
          else if (a.buildScriptHashOut(c).equals(this.output.script))
            ((this.nestedWitness = !0), (this.type = h.PayToScriptHash));
          else {
            if (
              !a
                .buildScriptHashOut(this.redeemScript)
                .equals(this.output.script)
            )
              throw new Error(
                "Provided public keys don't hash to the provided output",
              );
            ((this.nestedWitness = !1), (this.type = h.PayToScriptHash));
          }
          if (this.nestedWitness) {
            var p = new a();
            (p.add(c.toBuffer()), this.setScript(p));
          }
          ((this.publicKeyIndex = {}),
            r.each(this.publicKeys, function (t, e) {
              o.publicKeyIndex[t.toString()] = e;
            }),
            (this.threshold = i),
            (this.signatures = s
              ? this._deserializeSignatures(s)
              : new Array(this.publicKeys.length)));
        }
        (s(g, n),
          (g.prototype.toObject = function () {
            var t = n.prototype.toObject.apply(this, arguments);
            return (
              (t.threshold = this.threshold),
              (t.publicKeys = r.map(this.publicKeys, function (t) {
                return t.toString();
              })),
              (t.signatures = this._serializeSignatures()),
              t
            );
          }),
          (g.prototype._deserializeSignatures = function (t) {
            return r.map(t, function (t) {
              if (t) return new l(t);
            });
          }),
          (g.prototype._serializeSignatures = function () {
            return r.map(this.signatures, function (t) {
              if (t) return t.toObject();
            });
          }),
          (g.prototype.getScriptCode = function () {
            var t = new _();
            if (this.redeemScript.hasCodeseparators()) throw new Error("@TODO");
            var e = this.redeemScript.toBuffer();
            return (t.writeVarintNum(e.length), t.write(e), t.toBuffer());
          }),
          (g.prototype.getSighash = function (t, e, i, r) {
            var s,
              n = this;
            if (n.nestedWitness || n.type === h.PayToWitnessScriptHash) {
              var u = n.getScriptCode(),
                o = n.getSatoshisBuffer();
              s = f.sighash(t, r, i, u, o);
            } else s = p.sighash(t, r, i, n.redeemScript);
            return s;
          }),
          (g.prototype.getSignatures = function (t, e, i, s, n, a) {
            (o.checkState(this.output instanceof u),
              (s = s || c.SIGHASH_ALL),
              (a = a || "ecdsa"));
            var _ = this,
              d = [];
            return (
              r.each(this.publicKeys, function (r) {
                if (r.toString() === e.publicKey.toString()) {
                  var n;
                  if (_.nestedWitness || _.type === h.PayToWitnessScriptHash) {
                    var u = _.getScriptCode(),
                      o = _.getSatoshisBuffer();
                    n = f.sign(t, e, s, i, u, o, a);
                  } else n = p.sign(t, e, s, i, _.redeemScript, a);
                  d.push(
                    new l({
                      publicKey: e.publicKey,
                      prevTxId: _.prevTxId,
                      outputIndex: _.outputIndex,
                      inputIndex: i,
                      signature: n,
                      sigtype: s,
                    }),
                  );
                }
              }),
              d
            );
          }),
          (g.prototype.addSignature = function (t, e, i) {
            return (
              o.checkState(
                !this.isFullySigned(),
                "All needed signatures have already been added",
              ),
              o.checkArgument(
                !r.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
                "Signature has no matching public key",
              ),
              o.checkState(
                this.isValidSignature(t, e, i),
                "Invalid Signature!",
              ),
              (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] =
                e),
              this._updateScript(),
              this
            );
          }),
          (g.prototype._updateScript = function () {
            if (this.nestedWitness || this.type === h.PayToWitnessScriptHash) {
              for (
                var t = [e.alloc(0)], i = this._createSignatures(), r = 0;
                r < i.length;
                r++
              )
                t.push(i[r]);
              (t.push(this.redeemScript.toBuffer()), this.setWitnesses(t));
            } else {
              var s = a.buildP2SHMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(),
                { cachedMultisig: this.redeemScript },
              );
              this.setScript(s);
            }
            return this;
          }),
          (g.prototype._createSignatures = function () {
            return r.map(
              r.filter(this.signatures, function (t) {
                return !r.isUndefined(t);
              }),
              function (t) {
                return d.concat([
                  t.signature.toDER(),
                  d.integerAsSingleByteBuffer(t.sigtype),
                ]);
              },
            );
          }),
          (g.prototype.clearSignatures = function () {
            ((this.signatures = new Array(this.publicKeys.length)),
              this._updateScript());
          }),
          (g.prototype.isFullySigned = function () {
            return this.countSignatures() === this.threshold;
          }),
          (g.prototype.countMissingSignatures = function () {
            return this.threshold - this.countSignatures();
          }),
          (g.prototype.countSignatures = function () {
            return r.reduce(
              this.signatures,
              function (t, e) {
                return t + !!e;
              },
              0,
            );
          }),
          (g.prototype.publicKeysWithoutSignature = function () {
            var t = this;
            return r.filter(this.publicKeys, function (e) {
              return !t.signatures[t.publicKeyIndex[e.toString()]];
            });
          }),
          (g.prototype.isValidSignature = function (t, e, i) {
            if (
              ((i = i || "ecdsa"),
              this.nestedWitness || this.type === h.PayToWitnessScriptHash)
            ) {
              e.signature.nhashtype = e.sigtype;
              var r = this.getScriptCode(),
                s = this.getSatoshisBuffer();
              return f.verify(
                t,
                e.signature,
                e.publicKey,
                e.inputIndex,
                r,
                s,
                i,
              );
            }
            return (
              (e.signature.nhashtype = e.sigtype),
              p.verify(
                t,
                e.signature,
                e.publicKey,
                e.inputIndex,
                this.redeemScript,
                i,
              )
            );
          }),
          (g.OPCODES_SIZE = 7),
          (g.SIGNATURE_SIZE = 74),
          (g.PUBKEY_SIZE = 34),
          (g.REDEEM_SCRIPT_SIZE = 34),
          (g.prototype._estimateSize = function () {
            var t = 4,
              e =
                g.OPCODES_SIZE +
                this.threshold * g.SIGNATURE_SIZE +
                this.publicKeys.length * g.PUBKEY_SIZE;
            return this.type === h.PayToWitnessScriptHash
              ? e / t
              : this.nestedWitness
                ? e / t + g.REDEEM_SCRIPT_SIZE
                : e;
          }),
          (t.exports = g));
      }).call(this, i(2).Buffer);
    },
    7088: function (t, e, i) {
      "use strict";
      var r = i(2852),
        s = i(231),
        n = i(3367),
        u = i(4911),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          if (
            ((this.extras = {}),
            (this.knownParams = e || []),
            (this.address = this.network = this.amount = this.message = null),
            "string" === typeof t)
          ) {
            var i = o.parse(t);
            (i.amount && (i.amount = this._parseAmount(i.amount)),
              this._fromObject(i));
          } else {
            if ("object" !== typeof t)
              throw new TypeError("Unrecognized data format.");
            this._fromObject(t);
          }
        };
      ((o.fromString = function (t) {
        if ("string" !== typeof t) throw new TypeError("Expected a string");
        return new o(t);
      }),
        (o.fromObject = function (t) {
          return new o(t);
        }),
        (o.isValid = function (t, e) {
          try {
            new o(t, e);
          } catch (i) {
            return !1;
          }
          return !0;
        }),
        (o.parse = function (t) {
          var e = s.parse(t, !0);
          if ("bitcoin:" !== e.protocol)
            throw new TypeError("Invalid bitcoin URI");
          var i = /[^:]*:\/?\/?([^?]*)/.exec(t);
          return ((e.query.address = (i && i[1]) || void 0), e.query);
        }),
        (o.Members = ["address", "amount", "message", "label", "r"]),
        (o.prototype._fromObject = function (t) {
          if (!n.isValid(t.address))
            throw new TypeError("Invalid bitcoin address");
          for (var e in ((this.address = new n(t.address)),
          (this.network = this.address.network),
          (this.amount = t.amount),
          t))
            if ("address" !== e && "amount" !== e) {
              if (/^req-/.exec(e) && -1 === this.knownParams.indexOf(e))
                throw Error("Unknown required argument " + e);
              var i = o.Members.indexOf(e) > -1 ? this : this.extras;
              i[e] = t[e];
            }
        }),
        (o.prototype._parseAmount = function (t) {
          if (((t = Number(t)), isNaN(t)))
            throw new TypeError("Invalid amount");
          return u.fromBTC(t).toSatoshis();
        }),
        (o.prototype.toObject = o.prototype.toJSON =
          function () {
            for (var t = {}, e = 0; e < o.Members.length; e++) {
              var i = o.Members[e];
              this.hasOwnProperty(i) &&
                "undefined" !== typeof this[i] &&
                (t[i] = this[i].toString());
            }
            return (r.extend(t, this.extras), t);
          }),
        (o.prototype.toString = function () {
          var t = {};
          return (
            this.amount && (t.amount = u.fromSatoshis(this.amount).toBTC()),
            this.message && (t.message = this.message),
            this.label && (t.label = this.label),
            this.r && (t.r = this.r),
            r.extend(t, this.extras),
            s.format({ protocol: "bitcoin:", host: this.address, query: t })
          );
        }),
        (o.prototype.inspect = function () {
          return "<URI: " + this.toString() + ">";
        }),
        (t.exports = o));
    },
  },
]);
