(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [268],
  {
    3053: function (e, t) {},
    4929: function (e, t, r) {
      var n = r(4930),
        i = r(4931),
        s = r(4914),
        l = r(4932);
      function a(e, t) {
        return n(e) || i(e, t) || s(e, t) || l();
      }
      ((e.exports = a),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    4930: function (e, t) {
      function r(e) {
        if (Array.isArray(e)) return e;
      }
      ((e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    4931: function (e, t) {
      function r(e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n,
            i,
            s,
            l,
            a = [],
            o = !0,
            u = !1;
          try {
            if (((s = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              o = !1;
            } else
              for (
                ;
                !(o = (n = s.call(r)).done) &&
                (a.push(n.value), a.length !== t);
                o = !0
              );
          } catch (e) {
            ((u = !0), (i = e));
          } finally {
            try {
              if (
                !o &&
                null != r["return"] &&
                ((l = r["return"]()), Object(l) !== l)
              )
                return;
            } finally {
              if (u) throw i;
            }
          }
          return a;
        }
      }
      ((e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    4932: function (e, t) {
      function r() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      ((e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    6366: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = {};
      let i;
      ((t.wordlists = n), (t._default = i));
      try {
        ((t._default = i = r(8930)), (n.czech = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8931)), (n.chinese_simplified = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8932)), (n.chinese_traditional = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8933)), (n.korean = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8934)), (n.french = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8935)), (n.italian = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8936)), (n.spanish = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8937)), (n.japanese = i), (n.JA = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8938)), (n.portuguese = i));
      } catch (s) {}
      try {
        ((t._default = i = r(8939)), (n.english = i), (n.EN = i));
      } catch (s) {}
    },
    6367: function (e, t, r) {
      (function (n) {
        ((r) => {
          if ("object" === typeof window) {
            const t = {};
            e.exports ? (e.exports = r(t, !1)) : (window.bls = r(t, !1));
          } else r(t, !0);
        })((t, i) => {
          ((t.BN254 = 0),
            (t.BN381_1 = 1),
            (t.BLS12_381 = 5),
            (t.ethMode = !1),
            (t.ETH_MODE_DRAFT_05 = 1),
            (t.ETH_MODE_DRAFT_06 = 2),
            (t.ETH_MODE_DRAFT_07 = 3));
          const s = (e, t) => {
              const r = e.mod,
                n = 6,
                i = e.ethMode ? 4 : 6,
                s = e.ethMode ? 200 : 0,
                l = 10 * i + n + s,
                a = 8 * i,
                o = 8 * n,
                u = 3 * o * (e.ethMode ? 1 : 2),
                c = 3 * o * (e.ethMode ? 2 : 1),
                d = (e) => r._blsMalloc(e),
                f = (e) => {
                  r._blsFree(e);
                },
                y = (e, t) => {
                  let n = "";
                  for (let i = 0; i < t; i++)
                    n += String.fromCharCode(r.HEAP8[e + i]);
                  return n;
                },
                p = (e, t) => {
                  for (let n = 0; n < t.length; n++)
                    r.HEAP8[e + n] = t.charCodeAt(n);
                };
              ((e.toHex = (e, t, r) => {
                let n = "";
                for (let i = 0; i < r; i++)
                  n += ("0" + e[t + i].toString(16)).slice(-2);
                return n;
              }),
                (e.toHexStr = (t) => e.toHex(t, 0, t.length)),
                (e.fromHexStr = (e) => {
                  if (1 & e.length)
                    throw new Error(
                      "fromHexStr:length must be even " + e.length,
                    );
                  const t = e.length / 2,
                    r = new Uint8Array(t);
                  for (let n = 0; n < t; n++)
                    r[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
                  return r;
                }));
              const b = (e, t) => {
                  r.HEAP32.set(t, e / 4);
                },
                m = function (e, t) {
                  return (
                    void 0 === t && (t = !0),
                    function (n, i) {
                      void 0 === i && (i = 0);
                      const s = 3096,
                        l = d(s),
                        a = e(l, s, n, i);
                      if (a <= 0) throw new Error("err gen_str:" + n);
                      let o = null;
                      return (
                        (o = t
                          ? y(l, a)
                          : new Uint8Array(r.HEAP8.subarray(l, l + a))),
                        f(l),
                        o
                      );
                    }
                  );
                },
                _ = (e) => m(e, !1),
                S = (e) => (t, n) => {
                  const i = d(n.length);
                  r.HEAP8.set(n, i);
                  const s = e(t, i, n.length);
                  if ((f(i), 0 === s))
                    throw new Error("err _wrapDeserialize", n);
                },
                g = function (e, t, n) {
                  return (
                    void 0 === n && (n = !1),
                    function () {
                      const i = [...arguments],
                        s = i[t],
                        l = Object.prototype.toString.apply(s);
                      if (
                        [
                          "[object String]",
                          "[object Uint8Array]",
                          "[object Array]",
                        ].indexOf(l) < 0
                      )
                        throw new Error(
                          `err bad type:"${l}". Use String or Uint8Array.`,
                        );
                      const a = i[t + 1],
                        o = d(s.length);
                      "[object String]" === l ? p(o, s) : r.HEAP8.set(s, o);
                      const u = e(...i.slice(0, t), o, s.length, a);
                      if ((f(o), n)) return u;
                      if (u) throw new Error("err _wrapInput " + s);
                    }
                  );
                },
                v = (e, t, r, n, i) => {
                  const s = t._allocAndCopy(),
                    l = i._allocAndCopy(),
                    a = d(r * n.length);
                  for (let o = 0; o < n.length; o++) b(a + r * o, n[o].a_);
                  (e(s, a, n.length, l), f(a), f(l), t._saveAndFree(s));
                },
                w = (e, t, r, n, i) => {
                  const s = n.length;
                  if (s != i.length) throw "recover:bad length";
                  const l = t._alloc(),
                    o = d(r * s),
                    u = d(a * s);
                  for (let d = 0; d < s; d++)
                    (b(o + r * d, n[d].a_), b(u + a * d, i[d].a_));
                  const c = e(l, o, u, s);
                  if ((f(u), f(o), t._saveAndFree(l), c)) throw "callRecover";
                };
              ((e.blsInit = function (t) {
                void 0 === t && (t = e.ethMode ? e.BLS12_381 : e.BN254);
                const n = r._blsInit(t, l);
                if (n) throw "blsInit err " + n;
              }),
                (e.getCurveOrder = m(r._blsGetCurveOrder)),
                (e.getFieldOrder = m(r._blsGetFieldOrder)),
                (e.blsIdSetDecStr = g(r._blsIdSetDecStr, 1)),
                (e.blsIdSetHexStr = g(r._blsIdSetHexStr, 1)),
                (e.blsIdGetDecStr = m(r._blsIdGetDecStr)),
                (e.blsIdGetHexStr = m(r._blsIdGetHexStr)),
                (e.blsIdSerialize = _(r._blsIdSerialize)),
                (e.blsSecretKeySerialize = _(r._blsSecretKeySerialize)),
                (e.blsPublicKeySerialize = _(r._blsPublicKeySerialize)),
                (e.blsSignatureSerialize = _(r._blsSignatureSerialize)),
                (e.blsIdDeserialize = S(r._blsIdDeserialize)),
                (e.blsSecretKeyDeserialize = S(r._blsSecretKeyDeserialize)),
                (e.blsPublicKeyDeserialize = S(r._blsPublicKeyDeserialize)),
                (e.blsSignatureDeserialize = S(r._blsSignatureDeserialize)),
                (e.blsPublicKeySerializeUncompressed = _(
                  r._blsPublicKeySerializeUncompressed,
                )),
                (e.blsSignatureSerializeUncompressed = _(
                  r._blsSignatureSerializeUncompressed,
                )),
                (e.blsPublicKeyDeserializeUncompressed = S(
                  r._blsPublicKeyDeserializeUncompressed,
                )),
                (e.blsSignatureDeserializeUncompressed = S(
                  r._blsSignatureDeserializeUncompressed,
                )),
                (e.blsSecretKeySetLittleEndian = g(
                  r._blsSecretKeySetLittleEndian,
                  1,
                )),
                (e.blsSecretKeySetLittleEndianMod = g(
                  r._blsSecretKeySetLittleEndianMod,
                  1,
                )),
                (e.blsHashToSecretKey = g(r._blsHashToSecretKey, 1)),
                (e.blsSign = g(r._blsSign, 2)),
                (e.blsVerify = g(r._blsVerify, 2, !0)));
              class Common {
                constructor(e) {
                  this.a_ = new Uint32Array(e / 4);
                }
                deserializeHexStr(t) {
                  this.deserialize(e.fromHexStr(t));
                }
                serializeToHexStr() {
                  return e.toHexStr(this.serialize());
                }
                dump(e) {
                  (void 0 === e && (e = ""),
                    console.log(e + this.serializeToHexStr()));
                }
                clear() {
                  this.a_.fill(0);
                }
                _alloc() {
                  return d(4 * this.a_.length);
                }
                _allocAndCopy() {
                  const e = this._alloc();
                  return (r.HEAP32.set(this.a_, e / 4), e);
                }
                _save(e) {
                  this.a_.set(r.HEAP32.subarray(e / 4, e / 4 + this.a_.length));
                }
                _saveAndFree(e) {
                  (this._save(e), f(e));
                }
                _setter(e, t, r) {
                  const n = this._alloc(),
                    i = e(n, t, r);
                  if ((this._saveAndFree(n), i)) throw new Error("_setter err");
                }
                _getter(e, t, r) {
                  const n = this._allocAndCopy(),
                    i = e(n, t, r);
                  return (f(n), i);
                }
                _isEqual(e, t) {
                  const r = this._allocAndCopy(),
                    n = t._allocAndCopy(),
                    i = e(r, n);
                  return (f(n), f(r), 1 === i);
                }
                _op1(e) {
                  const t = new this.constructor(),
                    r = this._allocAndCopy(),
                    n = t._alloc();
                  return (e(n, r), t._saveAndFree(n), f(r), t);
                }
                _op2(e, t, r) {
                  void 0 === r && (r = null);
                  const n = r ? new r() : new this.constructor(),
                    i = this._allocAndCopy(),
                    s = t._allocAndCopy(),
                    l = n._alloc();
                  return (e(l, i, s), n._saveAndFree(l), f(s), f(i), n);
                }
                _update(e, t) {
                  const r = this._allocAndCopy(),
                    n = t._allocAndCopy();
                  (e(r, n), f(n), this._saveAndFree(r));
                }
              }
              ((e.Id = class extends Common {
                constructor() {
                  super(a);
                }
                setInt(e) {
                  this._setter(r._blsIdSetInt, e);
                }
                isEqual(e) {
                  return this._isEqual(r._blsIdIsEqual, e);
                }
                deserialize(t) {
                  this._setter(e.blsIdDeserialize, t);
                }
                serialize() {
                  return this._getter(e.blsIdSerialize);
                }
                setStr(t, r) {
                  switch ((void 0 === r && (r = 10), r)) {
                    case 10:
                      return void this._setter(e.blsIdSetDecStr, t);
                    case 16:
                      return void this._setter(e.blsIdSetHexStr, t);
                    default:
                      throw "BlsId.setStr:bad base:" + r;
                  }
                }
                getStr(t) {
                  switch ((void 0 === t && (t = 10), t)) {
                    case 10:
                      return this._getter(e.blsIdGetDecStr);
                    case 16:
                      return this._getter(e.blsIdGetHexStr);
                    default:
                      throw "BlsId.getStr:bad base:" + t;
                  }
                }
                setLittleEndian(t) {
                  this._setter(e.blsSecretKeySetLittleEndian, t);
                }
                setLittleEndianMod(t) {
                  this._setter(e.blsSecretKeySetLittleEndianMod, t);
                }
                setByCSPRNG() {
                  const t = new Uint8Array(a);
                  (e.getRandomValues(t), this.setLittleEndian(t));
                }
              }),
                (e.deserializeHexStrToId = (t) => {
                  const r = new e.Id();
                  return (r.deserializeHexStr(t), r);
                }),
                (e.SecretKey = class extends Common {
                  constructor() {
                    super(o);
                  }
                  setInt(e) {
                    this._setter(r._blsIdSetInt, e);
                  }
                  isZero() {
                    return 1 === this._getter(r._blsSecretKeyIsZero);
                  }
                  isEqual(e) {
                    return this._isEqual(r._blsSecretKeyIsEqual, e);
                  }
                  deserialize(t) {
                    this._setter(e.blsSecretKeyDeserialize, t);
                  }
                  serialize() {
                    return this._getter(e.blsSecretKeySerialize);
                  }
                  add(e) {
                    this._update(r._blsSecretKeyAdd, e);
                  }
                  share(e, t) {
                    v(r._blsSecretKeyShare, this, o, e, t);
                  }
                  recover(e, t) {
                    w(r._blsSecretKeyRecover, this, o, e, t);
                  }
                  setHashOf(t) {
                    this._setter(e.blsHashToSecretKey, t);
                  }
                  setLittleEndian(t) {
                    this._setter(e.blsSecretKeySetLittleEndian, t);
                  }
                  setLittleEndianMod(t) {
                    this._setter(e.blsSecretKeySetLittleEndianMod, t);
                  }
                  setByCSPRNG() {
                    const t = new Uint8Array(o);
                    (e.getRandomValues(t), this.setLittleEndian(t));
                  }
                  getPublicKey() {
                    const t = new e.PublicKey(),
                      n = this._allocAndCopy(),
                      i = t._alloc();
                    return (
                      r._blsGetPublicKey(i, n),
                      t._saveAndFree(i),
                      f(n),
                      t
                    );
                  }
                  sign(t) {
                    const r = new e.Signature(),
                      n = this._allocAndCopy(),
                      i = r._alloc();
                    return (e.blsSign(i, n, t), r._saveAndFree(i), f(n), r);
                  }
                }),
                (e.deserializeHexStrToSecretKey = (t) => {
                  const r = new e.SecretKey();
                  return (r.deserializeHexStr(t), r);
                }),
                (e.PublicKey = class extends Common {
                  constructor() {
                    super(u);
                  }
                  isZero() {
                    return 1 === this._getter(r._blsPublicKeyIsZero);
                  }
                  isEqual(e) {
                    return this._isEqual(r._blsPublicKeyIsEqual, e);
                  }
                  deserialize(t) {
                    this._setter(e.blsPublicKeyDeserialize, t);
                  }
                  serialize() {
                    return this._getter(e.blsPublicKeySerialize);
                  }
                  deserializeUncompressed(t) {
                    this._setter(e.blsPublicKeyDeserializeUncompressed, t);
                  }
                  serializeUncompressed() {
                    return this._getter(e.blsPublicKeySerializeUncompressed);
                  }
                  add(e) {
                    this._update(r._blsPublicKeyAdd, e);
                  }
                  share(e, t) {
                    v(r._blsPublicKeyShare, this, u, e, t);
                  }
                  recover(e, t) {
                    w(r._blsPublicKeyRecover, this, u, e, t);
                  }
                  isValidOrder() {
                    return this._getter(r._blsPublicKeyIsValidOrder);
                  }
                  verify(t, r) {
                    const n = this._allocAndCopy(),
                      i = t._allocAndCopy(),
                      s = e.blsVerify(i, n, r);
                    return (f(i), f(n), 0 != s);
                  }
                }),
                (e.deserializeHexStrToPublicKey = (t) => {
                  const r = new e.PublicKey();
                  return (r.deserializeHexStr(t), r);
                }),
                (e.Signature = class extends Common {
                  constructor() {
                    super(c);
                  }
                  isZero() {
                    return 1 === this._getter(r._blsSignatureIsZero);
                  }
                  isEqual(e) {
                    return this._isEqual(r._blsSignatureIsEqual, e);
                  }
                  deserialize(t) {
                    this._setter(e.blsSignatureDeserialize, t);
                  }
                  serialize() {
                    return this._getter(e.blsSignatureSerialize);
                  }
                  deserializeUncompressed(t) {
                    this._setter(e.blsSignatureDeserializeUncompressed, t);
                  }
                  serializeUncompressed() {
                    return this._getter(e.blsSignatureSerializeUncompressed);
                  }
                  add(e) {
                    this._update(r._blsSignatureAdd, e);
                  }
                  recover(e, t) {
                    w(r._blsSignatureRecover, this, c, e, t);
                  }
                  isValidOrder() {
                    return this._getter(r._blsSignatureIsValidOrder);
                  }
                  aggregate(e) {
                    const t = e.length,
                      n = this._allocAndCopy(),
                      i = d(c * t);
                    for (let l = 0; l < t; l++)
                      r.HEAP32.set(e[l].a_, (i + c * l) / 4);
                    const s = r._blsAggregateSignature(n, i, t);
                    return (f(i), this._saveAndFree(n), 1 == s);
                  }
                  fastAggregateVerify(e, t) {
                    const n = e.length,
                      i = t.length,
                      s = this._allocAndCopy(),
                      l = d(u * n),
                      a = d(i);
                    for (let c = 0; c < n; c++)
                      r.HEAP32.set(e[c].a_, (l + u * c) / 4);
                    r.HEAP8.set(t, a);
                    const o = r._blsFastAggregateVerify(s, l, n, a, i);
                    return (f(a), f(l), f(s), 1 == o);
                  }
                  aggregateVerifyNoCheck(e, t) {
                    const n = e.length,
                      i = 32;
                    if (0 == n || t.length != i * n) return !1;
                    const s = this._allocAndCopy(),
                      l = d(u * n),
                      a = d(t.length);
                    for (let c = 0; c < n; c++)
                      r.HEAP32.set(e[c].a_, (l + u * c) / 4);
                    r.HEAP8.set(t, a);
                    const o = r._blsAggregateVerifyNoCheck(s, l, a, i, n);
                    return (f(a), f(l), f(s), 1 == o);
                  }
                }),
                (e.deserializeHexStrToSignature = (t) => {
                  const r = new e.Signature();
                  return (r.deserializeHexStr(t), r);
                }),
                (e.setETHmode = (e) => {
                  if (0 != r._blsSetETHmode(e))
                    throw new Error("bad setETHmode " + e);
                }),
                (e.verifySignatureOrder = (e) => {
                  r._blsSignatureVerifyOrder(e);
                }),
                (e.verifyPublicKeyOrder = (e) => {
                  r._blsPublicKeyVerifyOrder(e);
                }),
                (e.areAllMsgDifferent = (e, t) => {
                  const r = e.length / t;
                  if (e.length != r * t) return !1;
                  h = {};
                  for (let n = 0; n < r; n++) {
                    const r = e.subarray(n * t, (n + 1) * t);
                    if (r in h) return !1;
                    h[r] = !0;
                  }
                  return !0;
                }),
                (e.multiVerify = (t, n, i) => {
                  const s = 32,
                    l = 8,
                    a = 0,
                    o = n.length;
                  if (t.length != o || i.length != o) return !1;
                  for (let e = 0; e < o; e++) if (i[e].length != s) return !1;
                  const y = d(c * o),
                    p = d(u * o),
                    b = d(s * o),
                    h = d(l * o);
                  e.getRandomValues(r.HEAP8.subarray(h, h + l * o));
                  for (let e = 0; e < o; e++)
                    (r.HEAP32.set(n[e].a_, (y + c * e) / 4),
                      r.HEAP32.set(t[e].a_, (p + u * e) / 4),
                      r.HEAP8.set(i[e], b + s * e));
                  const m = r._blsMultiVerify(y, p, b, s, h, l, o, a);
                  return (f(h), f(b), f(p), f(y), 1 == m);
                }),
                e.blsInit(t),
                e.ethMode && e.setETHmode(e.ETH_MODE_DRAFT_07));
            },
            l = function (e, r) {
              const n = new Uint8Array(r);
              t.getRandomValues(n);
              for (let i = 0; i < r; i++) t.mod.HEAP8[e + i] = n[i];
            };
          return (
            (t.setRandFunc = (e) => {
              t.getRandomValues = e;
            }),
            (t.init = function (a) {
              (void 0 === a && (a = t.BN254), (t.curveType = a));
              const o = "bls_c";
              return new Promise((u) => {
                if (i) {
                  const e = r(2764);
                  t.getRandomValues = e.randomFillSync;
                  const i = r(3077),
                    c = r(8943)(`./${o}.js`),
                    d = {
                      cryptoGetRandomValues: l,
                      locateFile: (e) => i.join(n, e),
                    };
                  c(d).then((e) => {
                    ((t.mod = e), s(t, a), u());
                  });
                } else {
                  const n = window.crypto || window.msCrypto;
                  ((t.getRandomValues = (e) => n.getRandomValues(e)),
                    fetch(`./${o}.wasm`)
                      .then((e) => e.arrayBuffer())
                      .then((e) => new Uint8Array(e))
                      .then(() => {
                        (e.exports ? (t.mod = r(6368)()) : (t.mod = Module()),
                          (t.mod.cryptoGetRandomValues = l),
                          (t.mod.onRuntimeInitialized = () => {
                            (s(t, a), u());
                          }));
                      }));
                }
              });
            }),
            t
          );
        });
      }).call(this, "/");
    },
    6368: function (e, t, r) {
      (function (t, n, i) {
        var s = (function () {
          var e =
            "undefined" !== typeof document && document.currentScript
              ? document.currentScript.src
              : void 0;
          return (
            (e = e || t),
            function (t) {
              t = t || {};
              t = "undefined" !== typeof t ? t : {};
              var s,
                l = {};
              for (s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
              var a = [],
                o = !1,
                u = !1,
                c = !1,
                d = !1;
              ((o = "object" === typeof window),
                (u = "function" === typeof importScripts),
                (c =
                  "object" === typeof n &&
                  "object" === typeof n.versions &&
                  "string" === typeof n.versions.node),
                (d = !o && !c && !u));
              var f,
                y,
                p,
                b,
                h = "";
              function m(e) {
                return t["locateFile"] ? t["locateFile"](e, h) : h + e;
              }
              c
                ? ((h = u ? r(3077).dirname(h) + "/" : i + "/"),
                  (f = function (e, t) {
                    return (
                      p || (p = r(3139)),
                      b || (b = r(3077)),
                      (e = b["normalize"](e)),
                      p["readFileSync"](e, t ? null : "utf8")
                    );
                  }),
                  (y = function (e) {
                    var t = f(e, !0);
                    return (
                      t.buffer || (t = new Uint8Array(t)),
                      A(t.buffer),
                      t
                    );
                  }),
                  n["argv"].length > 1 && n["argv"][1].replace(/\\/g, "/"),
                  (a = n["argv"].slice(2)),
                  function (e) {
                    n["exit"](e);
                  },
                  (t["inspect"] = function () {
                    return "[Emscripten Module object]";
                  }))
                : d
                  ? ("undefined" != typeof read &&
                      (f = function (e) {
                        return read(e);
                      }),
                    (y = function (e) {
                      var t;
                      return "function" === typeof readbuffer
                        ? new Uint8Array(readbuffer(e))
                        : ((t = read(e, "binary")),
                          A("object" === typeof t),
                          t);
                    }),
                    "undefined" != typeof scriptArgs
                      ? (a = scriptArgs)
                      : "undefined" != typeof arguments && (a = arguments),
                    "function" === typeof quit &&
                      function (e) {
                        quit(e);
                      },
                    "undefined" !== typeof print &&
                      ("undefined" === typeof console && (console = {}),
                      (console.log = print),
                      (console.warn = console.error =
                        "undefined" !== typeof printErr ? printErr : print)))
                  : (o || u) &&
                    (u
                      ? (h = self.location.href)
                      : document.currentScript &&
                        (h = document.currentScript.src),
                    e && (h = e),
                    (h =
                      0 !== h.indexOf("blob:")
                        ? h.substr(0, h.lastIndexOf("/") + 1)
                        : ""),
                    (f = function (e) {
                      var t = new XMLHttpRequest();
                      return (
                        t.open("GET", e, !1),
                        t.send(null),
                        t.responseText
                      );
                    }),
                    u &&
                      (y = function (e) {
                        var t = new XMLHttpRequest();
                        return (
                          t.open("GET", e, !1),
                          (t.responseType = "arraybuffer"),
                          t.send(null),
                          new Uint8Array(t.response)
                        );
                      }),
                    function (e, t, r) {
                      var n = new XMLHttpRequest();
                      (n.open("GET", e, !0),
                        (n.responseType = "arraybuffer"),
                        (n.onload = function () {
                          200 == n.status || (0 == n.status && n.response)
                            ? t(n.response)
                            : r();
                        }),
                        (n.onerror = r),
                        n.send(null));
                    });
              var _,
                S,
                g = t["print"] || console.log.bind(console),
                v = t["printErr"] || console.warn.bind(console);
              for (s in l) l.hasOwnProperty(s) && (t[s] = l[s]);
              ((l = null),
                t["arguments"] && (a = t["arguments"]),
                t["thisProgram"] && t["thisProgram"],
                t["quit"] && t["quit"],
                t["wasmBinary"] && (_ = t["wasmBinary"]),
                t["noExitRuntime"] && t["noExitRuntime"],
                "object" !== typeof WebAssembly &&
                  v("no native wasm support detected"));
              var w = new WebAssembly.Table({
                  initial: 197,
                  maximum: 197,
                  element: "anyfunc",
                }),
                K = !1;
              function A(e, t) {
                e || J("Assertion failed: " + t);
              }
              ("undefined" !== typeof TextDecoder && new TextDecoder("utf8"),
                "undefined" !== typeof TextDecoder &&
                  new TextDecoder("utf-16le"));
              var E,
                P,
                I,
                x = 65536;
              function z(e) {
                ((E = e),
                  (t["HEAP8"] = new Int8Array(e)),
                  (t["HEAP16"] = new Int16Array(e)),
                  (t["HEAP32"] = I = new Int32Array(e)),
                  (t["HEAPU8"] = P = new Uint8Array(e)),
                  (t["HEAPU16"] = new Uint16Array(e)),
                  (t["HEAPU32"] = new Uint32Array(e)),
                  (t["HEAPF32"] = new Float32Array(e)),
                  (t["HEAPF64"] = new Float64Array(e)));
              }
              var H = 5322560,
                D = 79520,
                U = t["INITIAL_MEMORY"] || 16777216;
              function F(e) {
                while (e.length > 0) {
                  var r = e.shift();
                  if ("function" != typeof r) {
                    var n = r.func;
                    "number" === typeof n
                      ? void 0 === r.arg
                        ? t["dynCall_v"](n)
                        : t["dynCall_vi"](n, r.arg)
                      : n(void 0 === r.arg ? null : r.arg);
                  } else r();
                }
              }
              ((S = t["wasmMemory"]
                ? t["wasmMemory"]
                : new WebAssembly.Memory({ initial: U / x, maximum: U / x })),
                S && (E = S.buffer),
                (U = E.byteLength),
                z(E),
                (I[D >> 2] = H));
              var M = [],
                R = [],
                G = [],
                T = [];
              function k() {
                if (t["preRun"]) {
                  "function" == typeof t["preRun"] &&
                    (t["preRun"] = [t["preRun"]]);
                  while (t["preRun"].length) V(t["preRun"].shift());
                }
                F(M);
              }
              function O() {
                (!0, F(R));
              }
              function C() {
                F(G);
              }
              function L() {
                if (t["postRun"]) {
                  "function" == typeof t["postRun"] &&
                    (t["postRun"] = [t["postRun"]]);
                  while (t["postRun"].length) B(t["postRun"].shift());
                }
                F(T);
              }
              function V(e) {
                M.unshift(e);
              }
              function B(e) {
                T.unshift(e);
              }
              var N = 0,
                j = null,
                q = null;
              function W(e) {
                (N++,
                  t["monitorRunDependencies"] &&
                    t["monitorRunDependencies"](N));
              }
              function Z(e) {
                if (
                  (N--,
                  t["monitorRunDependencies"] && t["monitorRunDependencies"](N),
                  0 == N && (null !== j && (clearInterval(j), (j = null)), q))
                ) {
                  var r = q;
                  ((q = null), r());
                }
              }
              function J(e) {
                throw (
                  t["onAbort"] && t["onAbort"](e),
                  (e += ""),
                  g(e),
                  v(e),
                  (K = !0),
                  1,
                  (e =
                    "abort(" +
                    e +
                    "). Build with -s ASSERTIONS=1 for more info."),
                  new WebAssembly.RuntimeError(e)
                );
              }
              ((t["preloadedImages"] = {}), (t["preloadedAudios"] = {}));
              var X = "data:application/octet-stream;base64,";
              function Y(e) {
                return String.prototype.startsWith
                  ? e.startsWith(X)
                  : 0 === e.indexOf(X);
              }
              var $ = "bls_c.wasm";
              function Q() {
                try {
                  if (_) return new Uint8Array(_);
                  if (y) return y($);
                  throw "both async and sync fetching of the wasm failed";
                } catch (v) {
                  J(v);
                }
              }
              function ee() {
                return _ || (!o && !u) || "function" !== typeof fetch
                  ? new Promise(function (e, t) {
                      e(Q());
                    })
                  : fetch($, { credentials: "same-origin" })
                      .then(function (e) {
                        if (!e["ok"])
                          throw (
                            "failed to load wasm binary file at '" + $ + "'"
                          );
                        return e["arrayBuffer"]();
                      })
                      .catch(function () {
                        return Q();
                      });
              }
              function te() {
                var e = { a: ie };
                function r(e, r) {
                  var n = e.exports;
                  ((t["asm"] = n), Z("wasm-instantiate"));
                }
                function n(e) {
                  r(e["instance"]);
                }
                function i(t) {
                  return ee()
                    .then(function (t) {
                      return WebAssembly.instantiate(t, e);
                    })
                    .then(t, function (e) {
                      (v("failed to asynchronously prepare wasm: " + e), J(e));
                    });
                }
                function s() {
                  if (
                    _ ||
                    "function" !== typeof WebAssembly.instantiateStreaming ||
                    Y($) ||
                    "function" !== typeof fetch
                  )
                    return i(n);
                  fetch($, { credentials: "same-origin" }).then(function (t) {
                    var r = WebAssembly.instantiateStreaming(t, e);
                    return r.then(n, function (e) {
                      (v("wasm streaming compile failed: " + e),
                        v("falling back to ArrayBuffer instantiation"),
                        i(n));
                    });
                  });
                }
                if ((W("wasm-instantiate"), t["instantiateWasm"]))
                  try {
                    var l = t["instantiateWasm"](e, r);
                    return l;
                  } catch (a) {
                    return (
                      v(
                        "Module.instantiateWasm callback failed with error: " +
                          a,
                      ),
                      !1
                    );
                  }
                return (s(), {});
              }
              function re(e, t, r) {
                P.copyWithin(e, t, t + r);
              }
              function ne(e) {
                return !1;
              }
              (Y($) || ($ = m($)),
                R.push({
                  func: function () {
                    ae();
                  },
                }));
              var ie = { a: re, b: ne, memory: S, table: w },
                se = te();
              t["asm"] = se;
              var le,
                ae = (t["___wasm_call_ctors"] = function () {
                  return (ae = t["___wasm_call_ctors"] = t["asm"]["c"]).apply(
                    null,
                    arguments,
                  );
                });
              ((t["_blsSetETHmode"] = function () {
                return (t["_blsSetETHmode"] = t["asm"]["d"]).apply(
                  null,
                  arguments,
                );
              }),
                (t["_blsInit"] = function () {
                  return (t["_blsInit"] = t["asm"]["e"]).apply(null, arguments);
                }),
                (t["_blsSetETHserialization"] = function () {
                  return (t["_blsSetETHserialization"] = t["asm"]["f"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsMalloc"] = function () {
                  return (t["_blsMalloc"] = t["asm"]["g"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsFree"] = function () {
                  return (t["_blsFree"] = t["asm"]["h"]).apply(null, arguments);
                }),
                (t["_blsIdSetInt"] = function () {
                  return (t["_blsIdSetInt"] = t["asm"]["i"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeySetLittleEndian"] = function () {
                  return (t["_blsSecretKeySetLittleEndian"] =
                    t["asm"]["j"]).apply(null, arguments);
                }),
                (t["_blsSecretKeySetLittleEndianMod"] = function () {
                  return (t["_blsSecretKeySetLittleEndianMod"] =
                    t["asm"]["k"]).apply(null, arguments);
                }),
                (t["_blsGetPublicKey"] = function () {
                  return (t["_blsGetPublicKey"] = t["asm"]["l"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsHashToSignature"] = function () {
                  return (t["_blsHashToSignature"] = t["asm"]["m"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSign"] = function () {
                  return (t["_blsSign"] = t["asm"]["n"]).apply(null, arguments);
                }),
                (t["_blsVerify"] = function () {
                  return (t["_blsVerify"] = t["asm"]["o"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsMultiVerify"] = function () {
                  return (t["_blsMultiVerify"] = t["asm"]["p"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsAggregateSignature"] = function () {
                  return (t["_blsAggregateSignature"] = t["asm"]["q"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureAdd"] = function () {
                  return (t["_blsSignatureAdd"] = t["asm"]["r"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyAdd"] = function () {
                  return (t["_blsPublicKeyAdd"] = t["asm"]["s"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsFastAggregateVerify"] = function () {
                  return (t["_blsFastAggregateVerify"] = t["asm"]["t"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsAggregateVerifyNoCheck"] = function () {
                  return (t["_blsAggregateVerifyNoCheck"] =
                    t["asm"]["u"]).apply(null, arguments);
                }),
                (t["_blsIdSerialize"] = function () {
                  return (t["_blsIdSerialize"] = t["asm"]["v"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeySerialize"] = function () {
                  return (t["_blsSecretKeySerialize"] = t["asm"]["w"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeySerialize"] = function () {
                  return (t["_blsPublicKeySerialize"] = t["asm"]["x"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureSerialize"] = function () {
                  return (t["_blsSignatureSerialize"] = t["asm"]["y"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdDeserialize"] = function () {
                  return (t["_blsIdDeserialize"] = t["asm"]["z"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyDeserialize"] = function () {
                  return (t["_blsSecretKeyDeserialize"] = t["asm"]["A"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyDeserialize"] = function () {
                  return (t["_blsPublicKeyDeserialize"] = t["asm"]["B"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureDeserialize"] = function () {
                  return (t["_blsSignatureDeserialize"] = t["asm"]["C"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdIsEqual"] = function () {
                  return (t["_blsIdIsEqual"] = t["asm"]["D"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyIsEqual"] = function () {
                  return (t["_blsSecretKeyIsEqual"] = t["asm"]["E"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyIsEqual"] = function () {
                  return (t["_blsPublicKeyIsEqual"] = t["asm"]["F"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureIsEqual"] = function () {
                  return (t["_blsSignatureIsEqual"] = t["asm"]["G"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdIsZero"] = function () {
                  return (t["_blsIdIsZero"] = t["asm"]["H"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyIsZero"] = function () {
                  return (t["_blsSecretKeyIsZero"] = t["asm"]["I"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyIsZero"] = function () {
                  return (t["_blsPublicKeyIsZero"] = t["asm"]["J"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureIsZero"] = function () {
                  return (t["_blsSignatureIsZero"] = t["asm"]["K"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyShare"] = function () {
                  return (t["_blsSecretKeyShare"] = t["asm"]["L"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyShare"] = function () {
                  return (t["_blsPublicKeyShare"] = t["asm"]["M"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyRecover"] = function () {
                  return (t["_blsSecretKeyRecover"] = t["asm"]["N"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyRecover"] = function () {
                  return (t["_blsPublicKeyRecover"] = t["asm"]["O"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureRecover"] = function () {
                  return (t["_blsSignatureRecover"] = t["asm"]["P"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyAdd"] = function () {
                  return (t["_blsSecretKeyAdd"] = t["asm"]["Q"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureVerifyOrder"] = function () {
                  return (t["_blsSignatureVerifyOrder"] = t["asm"]["R"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyVerifyOrder"] = function () {
                  return (t["_blsPublicKeyVerifyOrder"] = t["asm"]["S"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureIsValidOrder"] = function () {
                  return (t["_blsSignatureIsValidOrder"] = t["asm"]["T"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyIsValidOrder"] = function () {
                  return (t["_blsPublicKeyIsValidOrder"] = t["asm"]["U"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsVerifyAggregatedHashes"] = function () {
                  return (t["_blsVerifyAggregatedHashes"] =
                    t["asm"]["V"]).apply(null, arguments);
                }),
                (t["_blsSignHash"] = function () {
                  return (t["_blsSignHash"] = t["asm"]["W"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeySerializeUncompressed"] = function () {
                  return (t["_blsPublicKeySerializeUncompressed"] =
                    t["asm"]["X"]).apply(null, arguments);
                }),
                (t["_blsSignatureSerializeUncompressed"] = function () {
                  return (t["_blsSignatureSerializeUncompressed"] =
                    t["asm"]["Y"]).apply(null, arguments);
                }),
                (t["_blsPublicKeyDeserializeUncompressed"] = function () {
                  return (t["_blsPublicKeyDeserializeUncompressed"] =
                    t["asm"]["Z"]).apply(null, arguments);
                }),
                (t["_blsSignatureDeserializeUncompressed"] = function () {
                  return (t["_blsSignatureDeserializeUncompressed"] =
                    t["asm"]["_"]).apply(null, arguments);
                }),
                (t["_blsVerifyPairing"] = function () {
                  return (t["_blsVerifyPairing"] = t["asm"]["$"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsVerifyHash"] = function () {
                  return (t["_blsVerifyHash"] = t["asm"]["aa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeySub"] = function () {
                  return (t["_blsSecretKeySub"] = t["asm"]["ba"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeySub"] = function () {
                  return (t["_blsPublicKeySub"] = t["asm"]["ca"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureSub"] = function () {
                  return (t["_blsSignatureSub"] = t["asm"]["da"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetOpUnitSize"] = function () {
                  return (t["_blsGetOpUnitSize"] = t["asm"]["ea"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetCurveOrder"] = function () {
                  return (t["_blsGetCurveOrder"] = t["asm"]["fa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetFieldOrder"] = function () {
                  return (t["_blsGetFieldOrder"] = t["asm"]["ga"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetSerializedSecretKeyByteSize"] = function () {
                  return (t["_blsGetSerializedSecretKeyByteSize"] =
                    t["asm"]["ha"]).apply(null, arguments);
                }),
                (t["_blsGetFrByteSize"] = function () {
                  return (t["_blsGetFrByteSize"] = t["asm"]["ia"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetSerializedPublicKeyByteSize"] = function () {
                  return (t["_blsGetSerializedPublicKeyByteSize"] =
                    t["asm"]["ja"]).apply(null, arguments);
                }),
                (t["_blsGetG1ByteSize"] = function () {
                  return (t["_blsGetG1ByteSize"] = t["asm"]["ka"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetSerializedSignatureByteSize"] = function () {
                  return (t["_blsGetSerializedSignatureByteSize"] =
                    t["asm"]["la"]).apply(null, arguments);
                }),
                (t["_blsGetGeneratorOfPublicKey"] = function () {
                  return (t["_blsGetGeneratorOfPublicKey"] =
                    t["asm"]["ma"]).apply(null, arguments);
                }),
                (t["_blsIdSetDecStr"] = function () {
                  return (t["_blsIdSetDecStr"] = t["asm"]["na"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdSetHexStr"] = function () {
                  return (t["_blsIdSetHexStr"] = t["asm"]["oa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdSetLittleEndian"] = function () {
                  return (t["_blsIdSetLittleEndian"] = t["asm"]["pa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdGetDecStr"] = function () {
                  return (t["_blsIdGetDecStr"] = t["asm"]["qa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdGetHexStr"] = function () {
                  return (t["_blsIdGetHexStr"] = t["asm"]["ra"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsHashToSecretKey"] = function () {
                  return (t["_blsHashToSecretKey"] = t["asm"]["sa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsGetPop"] = function () {
                  return (t["_blsGetPop"] = t["asm"]["ta"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsVerifyPop"] = function () {
                  return (t["_blsVerifyPop"] = t["asm"]["ua"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsIdGetLittleEndian"] = function () {
                  return (t["_blsIdGetLittleEndian"] = t["asm"]["va"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeySetDecStr"] = function () {
                  return (t["_blsSecretKeySetDecStr"] = t["asm"]["wa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeySetHexStr"] = function () {
                  return (t["_blsSecretKeySetHexStr"] = t["asm"]["xa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyGetLittleEndian"] = function () {
                  return (t["_blsSecretKeyGetLittleEndian"] =
                    t["asm"]["ya"]).apply(null, arguments);
                }),
                (t["_blsSecretKeyGetDecStr"] = function () {
                  return (t["_blsSecretKeyGetDecStr"] = t["asm"]["za"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSecretKeyGetHexStr"] = function () {
                  return (t["_blsSecretKeyGetHexStr"] = t["asm"]["Aa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeySetHexStr"] = function () {
                  return (t["_blsPublicKeySetHexStr"] = t["asm"]["Ba"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsPublicKeyGetHexStr"] = function () {
                  return (t["_blsPublicKeyGetHexStr"] = t["asm"]["Ca"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureSetHexStr"] = function () {
                  return (t["_blsSignatureSetHexStr"] = t["asm"]["Da"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsSignatureGetHexStr"] = function () {
                  return (t["_blsSignatureGetHexStr"] = t["asm"]["Ea"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsDHKeyExchange"] = function () {
                  return (t["_blsDHKeyExchange"] = t["asm"]["Fa"]).apply(
                    null,
                    arguments,
                  );
                }),
                (t["_blsMultiAggregateSignature"] = function () {
                  return (t["_blsMultiAggregateSignature"] =
                    t["asm"]["Ga"]).apply(null, arguments);
                }),
                (t["_blsMultiAggregatePublicKey"] = function () {
                  return (t["_blsMultiAggregatePublicKey"] =
                    t["asm"]["Ha"]).apply(null, arguments);
                }),
                (t["dynCall_vi"] = function () {
                  return (t["dynCall_vi"] = t["asm"]["Ia"]).apply(
                    null,
                    arguments,
                  );
                }));
              function oe(e) {
                function r() {
                  le ||
                    ((le = !0),
                    (t["calledRun"] = !0),
                    K ||
                      (O(),
                      C(),
                      t["onRuntimeInitialized"] && t["onRuntimeInitialized"](),
                      L()));
                }
                ((e = e || a),
                  N > 0 ||
                    (k(),
                    N > 0 ||
                      (t["setStatus"]
                        ? (t["setStatus"]("Running..."),
                          setTimeout(function () {
                            (setTimeout(function () {
                              t["setStatus"]("");
                            }, 1),
                              r());
                          }, 1))
                        : r())));
              }
              if (
                ((t["asm"] = se),
                (t["then"] = function (e) {
                  if (le) e(t);
                  else {
                    var r = t["onRuntimeInitialized"];
                    t["onRuntimeInitialized"] = function () {
                      (r && r(), e(t));
                    };
                  }
                  return t;
                }),
                (q = function e() {
                  (le || oe(), le || (q = e));
                }),
                (t["run"] = oe),
                t["preInit"])
              ) {
                "function" == typeof t["preInit"] &&
                  (t["preInit"] = [t["preInit"]]);
                while (t["preInit"].length > 0) t["preInit"].pop()();
              }
              return (!0, oe(), t);
            }
          );
        })();
        e.exports = s;
      }).call(this, "/index.js", r(18), "/");
    },
    8925: function (e, t, r) {
      "use strict";
      e.exports = { account: r(8926), transaction: r(8945) };
    },
    8926: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(9),
          i = n(r(3170)),
          s = n(r(3171)),
          l = n(r(4929)),
          a = n(r(2834)),
          o = n(r(2839)),
          u = r(8927),
          c = u.derivePath,
          d = r(2764),
          f = r(3265),
          y = r(803),
          p = r(8929),
          b = r(8940),
          h = r(8941),
          m = r(8942),
          _ = r(8944),
          S = _.ERD,
          g = _.MNEMONIC_LEN,
          v = _.HD_PREFIX,
          w = (function () {
            function e() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              ((0, a["default"])(this, e),
                (this.privateKey = null),
                (this.publicKey = null),
                t &&
                  (r
                    ? this.loadFromKeyFile(t, r)
                    : console.warn("empty password provided for the keyfile")));
            }
            return (
              (0, o["default"])(e, [
                {
                  key: "loadFromKeyFile",
                  value: function (e, r) {
                    var n = e.crypto.kdfparams,
                      i = b.generateDerivedKey(
                        t.from(r),
                        t.from(n.salt, "hex"),
                        n.n,
                        n.r,
                        n.p,
                        n.dklen,
                      ),
                      s = t.from(e.crypto.ciphertext, "hex"),
                      l = d
                        .createHmac("sha256", i.slice(16, 32))
                        .update(s)
                        .digest();
                    if (l.toString("hex") !== e.crypto.mac)
                      throw new Error("MAC mismatch, possibly wrong password");
                    var a = d.createDecipheriv(
                        e.crypto.cipher,
                        i.slice(0, 16),
                        t.from(e.crypto.cipherparams.iv, "hex"),
                      ),
                      o = t.concat([a.update(s), a["final"]()]);
                    while (o.length < 32) {
                      var u = t.from([0]);
                      o = t.concat([u, o]);
                    }
                    return (this.loadFromPrivateKey(o), this);
                  },
                },
                {
                  key: "generateKeyFile",
                  value: function (e) {
                    if (this.publicKey && this.privateKey) {
                      var r = d.randomBytes(32),
                        n = {
                          dklen: 32,
                          salt: r.toString("hex"),
                          n: 4096,
                          r: 8,
                          p: 1,
                        },
                        i = d.randomBytes(16),
                        s = b.generateDerivedKey(
                          t.from(e),
                          r,
                          n.n,
                          n.r,
                          n.p,
                          n.dklen,
                        ),
                        l = d.createCipheriv("aes-128-ctr", s.slice(0, 16), i),
                        a = t.concat([l.update(this.privateKey), l["final"]()]),
                        o = d
                          .createHmac("sha256", s.slice(16, 32))
                          .update(a)
                          .digest();
                      return {
                        version: 4,
                        id: f({ random: d.randomBytes(16) }),
                        address: this.publicKeyAsString(),
                        bech32: this.address(),
                        crypto: {
                          ciphertext: a.toString("hex"),
                          cipherparams: { iv: i.toString("hex") },
                          cipher: "aes-128-ctr",
                          kdf: "scrypt",
                          kdfparams: n,
                          mac: o.toString("hex"),
                        },
                      };
                    }
                    console.warn("Account is not initialised");
                  },
                },
                {
                  key: "generateKeyFileFromPrivateKey",
                  value: function (e, t) {
                    return (this.loadFromSeed(e), this.generateKeyFile(t));
                  },
                },
                {
                  key: "loadFromPrivateKey",
                  value: function (e) {
                    ((this.privateKey = e),
                      (this.publicKey = h.generatePublicKey(e)));
                  },
                },
                {
                  key: "loadFromSeed",
                  value: function (e) {
                    var t = h.generatePairFromSeed(e),
                      r = (0, l["default"])(t, 2),
                      n = r[0],
                      i = r[1];
                    ((this.publicKey = n), (this.privateKey = i));
                  },
                },
                {
                  key: "loadFromHexPrivateKey",
                  value: function (e) {
                    var r = t.from(e, "hex");
                    this.loadFromPrivateKey(r);
                  },
                },
                {
                  key: "publicKeyAsString",
                  value: function () {
                    return t.from(this.publicKey).toString("hex");
                  },
                },
                {
                  key: "address",
                  value: function () {
                    var e = y.toWords(t.from(this.publicKey));
                    return y.encode(S, e);
                  },
                },
                {
                  key: "hexPublicKeyFromAddress",
                  value: function (e) {
                    var r = y.decode(e, 256);
                    return t.from(y.fromWords(r.words)).toString("hex");
                  },
                },
                {
                  key: "addressFromHexPublicKey",
                  value: function (e) {
                    var r = y.toWords(t.from(e, "hex"));
                    return y.encode(S, r);
                  },
                },
                {
                  key: "privateKeyAsString",
                  value: function () {
                    return t.from(this.privateKey).toString("hex");
                  },
                },
                {
                  key: "initNewKeyPair",
                  value: function () {
                    var e = h.keyPair(),
                      t = (0, l["default"])(e, 2),
                      r = t[0],
                      n = t[1];
                    return (
                      (this.publicKey = r),
                      (this.privateKey = n),
                      [this.publicKey, this.privateKey]
                    );
                  },
                },
                {
                  key: "initNewAccountFromPassword",
                  value: function (e) {
                    return (this.initNewKeyPair(), this.generateKeyFile(e));
                  },
                },
                {
                  key: "generateMnemonic",
                  value: function () {
                    return p.generateMnemonic(g);
                  },
                },
                {
                  key: "privateKeyFromMnemonic",
                  value: function (e) {
                    var t =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : "";
                    if (!p.validateMnemonic(e))
                      throw new Error("wrong mnemonic format");
                    var n = p.mnemonicToSeedSync(e, r),
                      i = c("".concat(v, "/").concat(t, "'"), n),
                      s = i.key;
                    return s.toString("hex");
                  },
                },
                {
                  key: "loadFromMnemonic",
                  value: function (e) {
                    var r = this.privateKeyFromMnemonic(e);
                    return this.loadFromSeed(t.from(r, "hex"));
                  },
                },
                {
                  key: "sign",
                  value: function (e) {
                    if (this.privateKey) {
                      var r = h.sign(e, this.privateKey);
                      return t.from(r).toString("hex");
                    }
                    console.warn(
                      "account is not initialized, cannot sign message",
                    );
                  },
                },
                {
                  key: "initBLS",
                  value: (function () {
                    var e = (0, s["default"])(
                      i["default"].mark(function e() {
                        return i["default"].wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", m.init());
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
                {
                  key: "generateBLSKeypair",
                  value: function (e) {
                    return m.generatePairFromSeed(e);
                  },
                },
                {
                  key: "computeBLSSig",
                  value: function (e, t) {
                    return m.sign(e, t);
                  },
                },
              ]),
              e
            );
          })();
        e.exports = w;
      }).call(this, r(2).Buffer);
    },
    8929: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(378),
          i = r(380),
          s = r(2966),
          l = r(130),
          a = r(6366);
        let o = a._default;
        const u = "Invalid mnemonic",
          c = "Invalid entropy",
          d = "Invalid mnemonic checksum",
          f =
            "A wordlist is required but a default could not be found.\nPlease pass a 2048 word array explicitly.";
        function y(e) {
          return (e || "").normalize("NFKD");
        }
        function p(e, t, r) {
          while (e.length < r) e = t + e;
          return e;
        }
        function b(e) {
          return parseInt(e, 2);
        }
        function h(e) {
          return e.map((e) => p(e.toString(2), "0", 8)).join("");
        }
        function m(e) {
          const t = 8 * e.length,
            r = t / 32,
            i = n.sha256(Uint8Array.from(e));
          return h(Array.from(i)).slice(0, r);
        }
        function _(e) {
          return "mnemonic" + (e || "");
        }
        function S(t, r) {
          const n = Uint8Array.from(e.from(y(t), "utf8")),
            l = Uint8Array.from(e.from(_(y(r)), "utf8")),
            a = s.pbkdf2(i.sha512, n, l, { c: 2048, dkLen: 64 });
          return e.from(a);
        }
        function g(t, r) {
          const n = Uint8Array.from(e.from(y(t), "utf8")),
            l = Uint8Array.from(e.from(_(y(r)), "utf8"));
          return s
            .pbkdf2Async(i.sha512, n, l, { c: 2048, dkLen: 64 })
            .then((t) => e.from(t));
        }
        function v(t, r) {
          if (((r = r || o), !r)) throw new Error(f);
          const n = y(t).split(" ");
          if (n.length % 3 !== 0) throw new Error(u);
          const i = n
              .map((e) => {
                const t = r.indexOf(e);
                if (-1 === t) throw new Error(u);
                return p(t.toString(2), "0", 11);
              })
              .join(""),
            s = 32 * Math.floor(i.length / 33),
            l = i.slice(0, s),
            a = i.slice(s),
            h = l.match(/(.{1,8})/g).map(b);
          if (h.length < 16) throw new Error(c);
          if (h.length > 32) throw new Error(c);
          if (h.length % 4 !== 0) throw new Error(c);
          const _ = e.from(h),
            S = m(_);
          if (S !== a) throw new Error(d);
          return _.toString("hex");
        }
        function w(t, r) {
          if ((e.isBuffer(t) || (t = e.from(t, "hex")), (r = r || o), !r))
            throw new Error(f);
          if (t.length < 16) throw new TypeError(c);
          if (t.length > 32) throw new TypeError(c);
          if (t.length % 4 !== 0) throw new TypeError(c);
          const n = h(Array.from(t)),
            i = m(t),
            s = n + i,
            l = s.match(/(.{1,11})/g),
            a = l.map((e) => {
              const t = b(e);
              return r[t];
            });
          return "あいこくしん" === r[0] ? a.join("　") : a.join(" ");
        }
        function K(t, r, n) {
          if (((t = t || 128), t % 32 !== 0)) throw new TypeError(c);
          return ((r = r || ((t) => e.from(l.randomBytes(t)))), w(r(t / 8), n));
        }
        function A(e, t) {
          try {
            v(e, t);
          } catch (r) {
            return !1;
          }
          return !0;
        }
        function E(e) {
          const t = a.wordlists[e];
          if (!t)
            throw new Error('Could not find wordlist for language "' + e + '"');
          o = t;
        }
        function P() {
          if (!o) throw new Error("No Default Wordlist set");
          return Object.keys(a.wordlists).filter(
            (e) =>
              "JA" !== e &&
              "EN" !== e &&
              a.wordlists[e].every((e, t) => e === o[t]),
          )[0];
        }
        ((t.mnemonicToSeedSync = S),
          (t.mnemonicToSeed = g),
          (t.mnemonicToEntropy = v),
          (t.entropyToMnemonic = w),
          (t.generateMnemonic = K),
          (t.validateMnemonic = A),
          (t.setDefaultWordlist = E),
          (t.getDefaultWordlist = P));
        var I = r(6366);
        t.wordlists = I.wordlists;
      }).call(this, r(2).Buffer);
    },
    8931: function (e) {
      e.exports = JSON.parse(
        '["的","一","是","在","不","了","有","和","人","这","中","大","为","上","个","国","我","以","要","他","时","来","用","们","生","到","作","地","于","出","就","分","对","成","会","可","主","发","年","动","同","工","也","能","下","过","子","说","产","种","面","而","方","后","多","定","行","学","法","所","民","得","经","十","三","之","进","着","等","部","度","家","电","力","里","如","水","化","高","自","二","理","起","小","物","现","实","加","量","都","两","体","制","机","当","使","点","从","业","本","去","把","性","好","应","开","它","合","还","因","由","其","些","然","前","外","天","政","四","日","那","社","义","事","平","形","相","全","表","间","样","与","关","各","重","新","线","内","数","正","心","反","你","明","看","原","又","么","利","比","或","但","质","气","第","向","道","命","此","变","条","只","没","结","解","问","意","建","月","公","无","系","军","很","情","者","最","立","代","想","已","通","并","提","直","题","党","程","展","五","果","料","象","员","革","位","入","常","文","总","次","品","式","活","设","及","管","特","件","长","求","老","头","基","资","边","流","路","级","少","图","山","统","接","知","较","将","组","见","计","别","她","手","角","期","根","论","运","农","指","几","九","区","强","放","决","西","被","干","做","必","战","先","回","则","任","取","据","处","队","南","给","色","光","门","即","保","治","北","造","百","规","热","领","七","海","口","东","导","器","压","志","世","金","增","争","济","阶","油","思","术","极","交","受","联","什","认","六","共","权","收","证","改","清","美","再","采","转","更","单","风","切","打","白","教","速","花","带","安","场","身","车","例","真","务","具","万","每","目","至","达","走","积","示","议","声","报","斗","完","类","八","离","华","名","确","才","科","张","信","马","节","话","米","整","空","元","况","今","集","温","传","土","许","步","群","广","石","记","需","段","研","界","拉","林","律","叫","且","究","观","越","织","装","影","算","低","持","音","众","书","布","复","容","儿","须","际","商","非","验","连","断","深","难","近","矿","千","周","委","素","技","备","半","办","青","省","列","习","响","约","支","般","史","感","劳","便","团","往","酸","历","市","克","何","除","消","构","府","称","太","准","精","值","号","率","族","维","划","选","标","写","存","候","毛","亲","快","效","斯","院","查","江","型","眼","王","按","格","养","易","置","派","层","片","始","却","专","状","育","厂","京","识","适","属","圆","包","火","住","调","满","县","局","照","参","红","细","引","听","该","铁","价","严","首","底","液","官","德","随","病","苏","失","尔","死","讲","配","女","黄","推","显","谈","罪","神","艺","呢","席","含","企","望","密","批","营","项","防","举","球","英","氧","势","告","李","台","落","木","帮","轮","破","亚","师","围","注","远","字","材","排","供","河","态","封","另","施","减","树","溶","怎","止","案","言","士","均","武","固","叶","鱼","波","视","仅","费","紧","爱","左","章","早","朝","害","续","轻","服","试","食","充","兵","源","判","护","司","足","某","练","差","致","板","田","降","黑","犯","负","击","范","继","兴","似","余","坚","曲","输","修","故","城","夫","够","送","笔","船","占","右","财","吃","富","春","职","觉","汉","画","功","巴","跟","虽","杂","飞","检","吸","助","升","阳","互","初","创","抗","考","投","坏","策","古","径","换","未","跑","留","钢","曾","端","责","站","简","述","钱","副","尽","帝","射","草","冲","承","独","令","限","阿","宣","环","双","请","超","微","让","控","州","良","轴","找","否","纪","益","依","优","顶","础","载","倒","房","突","坐","粉","敌","略","客","袁","冷","胜","绝","析","块","剂","测","丝","协","诉","念","陈","仍","罗","盐","友","洋","错","苦","夜","刑","移","频","逐","靠","混","母","短","皮","终","聚","汽","村","云","哪","既","距","卫","停","烈","央","察","烧","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","游","久","菜","味","旧","模","湖","货","损","预","阻","毫","普","稳","乙","妈","植","息","扩","银","语","挥","酒","守","拿","序","纸","医","缺","雨","吗","针","刘","啊","急","唱","误","训","愿","审","附","获","茶","鲜","粮","斤","孩","脱","硫","肥","善","龙","演","父","渐","血","欢","械","掌","歌","沙","刚","攻","谓","盾","讨","晚","粒","乱","燃","矛","乎","杀","药","宁","鲁","贵","钟","煤","读","班","伯","香","介","迫","句","丰","培","握","兰","担","弦","蛋","沉","假","穿","执","答","乐","谁","顺","烟","缩","征","脸","喜","松","脚","困","异","免","背","星","福","买","染","井","概","慢","怕","磁","倍","祖","皇","促","静","补","评","翻","肉","践","尼","衣","宽","扬","棉","希","伤","操","垂","秋","宜","氢","套","督","振","架","亮","末","宪","庆","编","牛","触","映","雷","销","诗","座","居","抓","裂","胞","呼","娘","景","威","绿","晶","厚","盟","衡","鸡","孙","延","危","胶","屋","乡","临","陆","顾","掉","呀","灯","岁","措","束","耐","剧","玉","赵","跳","哥","季","课","凯","胡","额","款","绍","卷","齐","伟","蒸","殖","永","宗","苗","川","炉","岩","弱","零","杨","奏","沿","露","杆","探","滑","镇","饭","浓","航","怀","赶","库","夺","伊","灵","税","途","灭","赛","归","召","鼓","播","盘","裁","险","康","唯","录","菌","纯","借","糖","盖","横","符","私","努","堂","域","枪","润","幅","哈","竟","熟","虫","泽","脑","壤","碳","欧","遍","侧","寨","敢","彻","虑","斜","薄","庭","纳","弹","饲","伸","折","麦","湿","暗","荷","瓦","塞","床","筑","恶","户","访","塔","奇","透","梁","刀","旋","迹","卡","氯","遇","份","毒","泥","退","洗","摆","灰","彩","卖","耗","夏","择","忙","铜","献","硬","予","繁","圈","雪","函","亦","抽","篇","阵","阴","丁","尺","追","堆","雄","迎","泛","爸","楼","避","谋","吨","野","猪","旗","累","偏","典","馆","索","秦","脂","潮","爷","豆","忽","托","惊","塑","遗","愈","朱","替","纤","粗","倾","尚","痛","楚","谢","奋","购","磨","君","池","旁","碎","骨","监","捕","弟","暴","割","贯","殊","释","词","亡","壁","顿","宝","午","尘","闻","揭","炮","残","冬","桥","妇","警","综","招","吴","付","浮","遭","徐","您","摇","谷","赞","箱","隔","订","男","吹","园","纷","唐","败","宋","玻","巨","耕","坦","荣","闭","湾","键","凡","驻","锅","救","恩","剥","凝","碱","齿","截","炼","麻","纺","禁","废","盛","版","缓","净","睛","昌","婚","涉","筒","嘴","插","岸","朗","庄","街","藏","姑","贸","腐","奴","啦","惯","乘","伙","恢","匀","纱","扎","辩","耳","彪","臣","亿","璃","抵","脉","秀","萨","俄","网","舞","店","喷","纵","寸","汗","挂","洪","贺","闪","柬","爆","烯","津","稻","墙","软","勇","像","滚","厘","蒙","芳","肯","坡","柱","荡","腿","仪","旅","尾","轧","冰","贡","登","黎","削","钻","勒","逃","障","氨","郭","峰","币","港","伏","轨","亩","毕","擦","莫","刺","浪","秘","援","株","健","售","股","岛","甘","泡","睡","童","铸","汤","阀","休","汇","舍","牧","绕","炸","哲","磷","绩","朋","淡","尖","启","陷","柴","呈","徒","颜","泪","稍","忘","泵","蓝","拖","洞","授","镜","辛","壮","锋","贫","虚","弯","摩","泰","幼","廷","尊","窗","纲","弄","隶","疑","氏","宫","姐","震","瑞","怪","尤","琴","循","描","膜","违","夹","腰","缘","珠","穷","森","枝","竹","沟","催","绳","忆","邦","剩","幸","浆","栏","拥","牙","贮","礼","滤","钠","纹","罢","拍","咱","喊","袖","埃","勤","罚","焦","潜","伍","墨","欲","缝","姓","刊","饱","仿","奖","铝","鬼","丽","跨","默","挖","链","扫","喝","袋","炭","污","幕","诸","弧","励","梅","奶","洁","灾","舟","鉴","苯","讼","抱","毁","懂","寒","智","埔","寄","届","跃","渡","挑","丹","艰","贝","碰","拔","爹","戴","码","梦","芽","熔","赤","渔","哭","敬","颗","奔","铅","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","仓","魏","锐","晓","氮","兼","隐","碍","赫","拨","忠","肃","缸","牵","抢","博","巧","壳","兄","杜","讯","诚","碧","祥","柯","页","巡","矩","悲","灌","龄","伦","票","寻","桂","铺","圣","恐","恰","郑","趣","抬","荒","腾","贴","柔","滴","猛","阔","辆","妻","填","撤","储","签","闹","扰","紫","砂","递","戏","吊","陶","伐","喂","疗","瓶","婆","抚","臂","摸","忍","虾","蜡","邻","胸","巩","挤","偶","弃","槽","劲","乳","邓","吉","仁","烂","砖","租","乌","舰","伴","瓜","浅","丙","暂","燥","橡","柳","迷","暖","牌","秧","胆","详","簧","踏","瓷","谱","呆","宾","糊","洛","辉","愤","竞","隙","怒","粘","乃","绪","肩","籍","敏","涂","熙","皆","侦","悬","掘","享","纠","醒","狂","锁","淀","恨","牲","霸","爬","赏","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鸭","趋","凤","晨","畜","辈","秩","卵","署","梯","炎","滩","棋","驱","筛","峡","冒","啥","寿","译","浸","泉","帽","迟","硅","疆","贷","漏","稿","冠","嫩","胁","芯","牢","叛","蚀","奥","鸣","岭","羊","凭","串","塘","绘","酵","融","盆","锡","庙","筹","冻","辅","摄","袭","筋","拒","僚","旱","钾","鸟","漆","沈","眉","疏","添","棒","穗","硝","韩","逼","扭","侨","凉","挺","碗","栽","炒","杯","患","馏","劝","豪","辽","勃","鸿","旦","吏","拜","狗","埋","辊","掩","饮","搬","骂","辞","勾","扣","估","蒋","绒","雾","丈","朵","姆","拟","宇","辑","陕","雕","偿","蓄","崇","剪","倡","厅","咬","驶","薯","刷","斥","番","赋","奉","佛","浇","漫","曼","扇","钙","桃","扶","仔","返","俗","亏","腔","鞋","棱","覆","框","悄","叔","撞","骗","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","胀","谐","抛","霉","桑","岗","嘛","衰","盗","渗","脏","赖","涌","甜","曹","阅","肌","哩","厉","烃","纬","毅","昨","伪","症","煮","叹","钉","搭","茎","笼","酷","偷","弓","锥","恒","杰","坑","鼻","翼","纶","叙","狱","逮","罐","络","棚","抑","膨","蔬","寺","骤","穆","冶","枯","册","尸","凸","绅","坯","牺","焰","轰","欣","晋","瘦","御","锭","锦","丧","旬","锻","垄","搜","扑","邀","亭","酯","迈","舒","脆","酶","闲","忧","酚","顽","羽","涨","卸","仗","陪","辟","惩","杭","姚","肚","捉","飘","漂","昆","欺","吾","郎","烷","汁","呵","饰","萧","雅","邮","迁","燕","撒","姻","赴","宴","烦","债","帐","斑","铃","旨","醇","董","饼","雏","姿","拌","傅","腹","妥","揉","贤","拆","歪","葡","胺","丢","浩","徽","昂","垫","挡","览","贪","慰","缴","汪","慌","冯","诺","姜","谊","凶","劣","诬","耀","昏","躺","盈","骑","乔","溪","丛","卢","抹","闷","咨","刮","驾","缆","悟","摘","铒","掷","颇","幻","柄","惠","惨","佳","仇","腊","窝","涤","剑","瞧","堡","泼","葱","罩","霍","捞","胎","苍","滨","俩","捅","湘","砍","霞","邵","萄","疯","淮","遂","熊","粪","烘","宿","档","戈","驳","嫂","裕","徙","箭","捐","肠","撑","晒","辨","殿","莲","摊","搅","酱","屏","疫","哀","蔡","堵","沫","皱","畅","叠","阁","莱","敲","辖","钩","痕","坝","巷","饿","祸","丘","玄","溜","曰","逻","彭","尝","卿","妨","艇","吞","韦","怨","矮","歇"]',
      );
    },
    8932: function (e) {
      e.exports = JSON.parse(
        '["的","一","是","在","不","了","有","和","人","這","中","大","為","上","個","國","我","以","要","他","時","來","用","們","生","到","作","地","於","出","就","分","對","成","會","可","主","發","年","動","同","工","也","能","下","過","子","說","產","種","面","而","方","後","多","定","行","學","法","所","民","得","經","十","三","之","進","著","等","部","度","家","電","力","裡","如","水","化","高","自","二","理","起","小","物","現","實","加","量","都","兩","體","制","機","當","使","點","從","業","本","去","把","性","好","應","開","它","合","還","因","由","其","些","然","前","外","天","政","四","日","那","社","義","事","平","形","相","全","表","間","樣","與","關","各","重","新","線","內","數","正","心","反","你","明","看","原","又","麼","利","比","或","但","質","氣","第","向","道","命","此","變","條","只","沒","結","解","問","意","建","月","公","無","系","軍","很","情","者","最","立","代","想","已","通","並","提","直","題","黨","程","展","五","果","料","象","員","革","位","入","常","文","總","次","品","式","活","設","及","管","特","件","長","求","老","頭","基","資","邊","流","路","級","少","圖","山","統","接","知","較","將","組","見","計","別","她","手","角","期","根","論","運","農","指","幾","九","區","強","放","決","西","被","幹","做","必","戰","先","回","則","任","取","據","處","隊","南","給","色","光","門","即","保","治","北","造","百","規","熱","領","七","海","口","東","導","器","壓","志","世","金","增","爭","濟","階","油","思","術","極","交","受","聯","什","認","六","共","權","收","證","改","清","美","再","採","轉","更","單","風","切","打","白","教","速","花","帶","安","場","身","車","例","真","務","具","萬","每","目","至","達","走","積","示","議","聲","報","鬥","完","類","八","離","華","名","確","才","科","張","信","馬","節","話","米","整","空","元","況","今","集","溫","傳","土","許","步","群","廣","石","記","需","段","研","界","拉","林","律","叫","且","究","觀","越","織","裝","影","算","低","持","音","眾","書","布","复","容","兒","須","際","商","非","驗","連","斷","深","難","近","礦","千","週","委","素","技","備","半","辦","青","省","列","習","響","約","支","般","史","感","勞","便","團","往","酸","歷","市","克","何","除","消","構","府","稱","太","準","精","值","號","率","族","維","劃","選","標","寫","存","候","毛","親","快","效","斯","院","查","江","型","眼","王","按","格","養","易","置","派","層","片","始","卻","專","狀","育","廠","京","識","適","屬","圓","包","火","住","調","滿","縣","局","照","參","紅","細","引","聽","該","鐵","價","嚴","首","底","液","官","德","隨","病","蘇","失","爾","死","講","配","女","黃","推","顯","談","罪","神","藝","呢","席","含","企","望","密","批","營","項","防","舉","球","英","氧","勢","告","李","台","落","木","幫","輪","破","亞","師","圍","注","遠","字","材","排","供","河","態","封","另","施","減","樹","溶","怎","止","案","言","士","均","武","固","葉","魚","波","視","僅","費","緊","愛","左","章","早","朝","害","續","輕","服","試","食","充","兵","源","判","護","司","足","某","練","差","致","板","田","降","黑","犯","負","擊","范","繼","興","似","餘","堅","曲","輸","修","故","城","夫","夠","送","筆","船","佔","右","財","吃","富","春","職","覺","漢","畫","功","巴","跟","雖","雜","飛","檢","吸","助","昇","陽","互","初","創","抗","考","投","壞","策","古","徑","換","未","跑","留","鋼","曾","端","責","站","簡","述","錢","副","盡","帝","射","草","衝","承","獨","令","限","阿","宣","環","雙","請","超","微","讓","控","州","良","軸","找","否","紀","益","依","優","頂","礎","載","倒","房","突","坐","粉","敵","略","客","袁","冷","勝","絕","析","塊","劑","測","絲","協","訴","念","陳","仍","羅","鹽","友","洋","錯","苦","夜","刑","移","頻","逐","靠","混","母","短","皮","終","聚","汽","村","雲","哪","既","距","衛","停","烈","央","察","燒","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","遊","久","菜","味","舊","模","湖","貨","損","預","阻","毫","普","穩","乙","媽","植","息","擴","銀","語","揮","酒","守","拿","序","紙","醫","缺","雨","嗎","針","劉","啊","急","唱","誤","訓","願","審","附","獲","茶","鮮","糧","斤","孩","脫","硫","肥","善","龍","演","父","漸","血","歡","械","掌","歌","沙","剛","攻","謂","盾","討","晚","粒","亂","燃","矛","乎","殺","藥","寧","魯","貴","鐘","煤","讀","班","伯","香","介","迫","句","豐","培","握","蘭","擔","弦","蛋","沉","假","穿","執","答","樂","誰","順","煙","縮","徵","臉","喜","松","腳","困","異","免","背","星","福","買","染","井","概","慢","怕","磁","倍","祖","皇","促","靜","補","評","翻","肉","踐","尼","衣","寬","揚","棉","希","傷","操","垂","秋","宜","氫","套","督","振","架","亮","末","憲","慶","編","牛","觸","映","雷","銷","詩","座","居","抓","裂","胞","呼","娘","景","威","綠","晶","厚","盟","衡","雞","孫","延","危","膠","屋","鄉","臨","陸","顧","掉","呀","燈","歲","措","束","耐","劇","玉","趙","跳","哥","季","課","凱","胡","額","款","紹","卷","齊","偉","蒸","殖","永","宗","苗","川","爐","岩","弱","零","楊","奏","沿","露","桿","探","滑","鎮","飯","濃","航","懷","趕","庫","奪","伊","靈","稅","途","滅","賽","歸","召","鼓","播","盤","裁","險","康","唯","錄","菌","純","借","糖","蓋","橫","符","私","努","堂","域","槍","潤","幅","哈","竟","熟","蟲","澤","腦","壤","碳","歐","遍","側","寨","敢","徹","慮","斜","薄","庭","納","彈","飼","伸","折","麥","濕","暗","荷","瓦","塞","床","築","惡","戶","訪","塔","奇","透","梁","刀","旋","跡","卡","氯","遇","份","毒","泥","退","洗","擺","灰","彩","賣","耗","夏","擇","忙","銅","獻","硬","予","繁","圈","雪","函","亦","抽","篇","陣","陰","丁","尺","追","堆","雄","迎","泛","爸","樓","避","謀","噸","野","豬","旗","累","偏","典","館","索","秦","脂","潮","爺","豆","忽","托","驚","塑","遺","愈","朱","替","纖","粗","傾","尚","痛","楚","謝","奮","購","磨","君","池","旁","碎","骨","監","捕","弟","暴","割","貫","殊","釋","詞","亡","壁","頓","寶","午","塵","聞","揭","炮","殘","冬","橋","婦","警","綜","招","吳","付","浮","遭","徐","您","搖","谷","贊","箱","隔","訂","男","吹","園","紛","唐","敗","宋","玻","巨","耕","坦","榮","閉","灣","鍵","凡","駐","鍋","救","恩","剝","凝","鹼","齒","截","煉","麻","紡","禁","廢","盛","版","緩","淨","睛","昌","婚","涉","筒","嘴","插","岸","朗","莊","街","藏","姑","貿","腐","奴","啦","慣","乘","夥","恢","勻","紗","扎","辯","耳","彪","臣","億","璃","抵","脈","秀","薩","俄","網","舞","店","噴","縱","寸","汗","掛","洪","賀","閃","柬","爆","烯","津","稻","牆","軟","勇","像","滾","厘","蒙","芳","肯","坡","柱","盪","腿","儀","旅","尾","軋","冰","貢","登","黎","削","鑽","勒","逃","障","氨","郭","峰","幣","港","伏","軌","畝","畢","擦","莫","刺","浪","秘","援","株","健","售","股","島","甘","泡","睡","童","鑄","湯","閥","休","匯","舍","牧","繞","炸","哲","磷","績","朋","淡","尖","啟","陷","柴","呈","徒","顏","淚","稍","忘","泵","藍","拖","洞","授","鏡","辛","壯","鋒","貧","虛","彎","摩","泰","幼","廷","尊","窗","綱","弄","隸","疑","氏","宮","姐","震","瑞","怪","尤","琴","循","描","膜","違","夾","腰","緣","珠","窮","森","枝","竹","溝","催","繩","憶","邦","剩","幸","漿","欄","擁","牙","貯","禮","濾","鈉","紋","罷","拍","咱","喊","袖","埃","勤","罰","焦","潛","伍","墨","欲","縫","姓","刊","飽","仿","獎","鋁","鬼","麗","跨","默","挖","鏈","掃","喝","袋","炭","污","幕","諸","弧","勵","梅","奶","潔","災","舟","鑑","苯","訟","抱","毀","懂","寒","智","埔","寄","屆","躍","渡","挑","丹","艱","貝","碰","拔","爹","戴","碼","夢","芽","熔","赤","漁","哭","敬","顆","奔","鉛","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","倉","魏","銳","曉","氮","兼","隱","礙","赫","撥","忠","肅","缸","牽","搶","博","巧","殼","兄","杜","訊","誠","碧","祥","柯","頁","巡","矩","悲","灌","齡","倫","票","尋","桂","鋪","聖","恐","恰","鄭","趣","抬","荒","騰","貼","柔","滴","猛","闊","輛","妻","填","撤","儲","簽","鬧","擾","紫","砂","遞","戲","吊","陶","伐","餵","療","瓶","婆","撫","臂","摸","忍","蝦","蠟","鄰","胸","鞏","擠","偶","棄","槽","勁","乳","鄧","吉","仁","爛","磚","租","烏","艦","伴","瓜","淺","丙","暫","燥","橡","柳","迷","暖","牌","秧","膽","詳","簧","踏","瓷","譜","呆","賓","糊","洛","輝","憤","競","隙","怒","粘","乃","緒","肩","籍","敏","塗","熙","皆","偵","懸","掘","享","糾","醒","狂","鎖","淀","恨","牲","霸","爬","賞","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鴨","趨","鳳","晨","畜","輩","秩","卵","署","梯","炎","灘","棋","驅","篩","峽","冒","啥","壽","譯","浸","泉","帽","遲","矽","疆","貸","漏","稿","冠","嫩","脅","芯","牢","叛","蝕","奧","鳴","嶺","羊","憑","串","塘","繪","酵","融","盆","錫","廟","籌","凍","輔","攝","襲","筋","拒","僚","旱","鉀","鳥","漆","沈","眉","疏","添","棒","穗","硝","韓","逼","扭","僑","涼","挺","碗","栽","炒","杯","患","餾","勸","豪","遼","勃","鴻","旦","吏","拜","狗","埋","輥","掩","飲","搬","罵","辭","勾","扣","估","蔣","絨","霧","丈","朵","姆","擬","宇","輯","陝","雕","償","蓄","崇","剪","倡","廳","咬","駛","薯","刷","斥","番","賦","奉","佛","澆","漫","曼","扇","鈣","桃","扶","仔","返","俗","虧","腔","鞋","棱","覆","框","悄","叔","撞","騙","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","脹","諧","拋","黴","桑","崗","嘛","衰","盜","滲","臟","賴","湧","甜","曹","閱","肌","哩","厲","烴","緯","毅","昨","偽","症","煮","嘆","釘","搭","莖","籠","酷","偷","弓","錐","恆","傑","坑","鼻","翼","綸","敘","獄","逮","罐","絡","棚","抑","膨","蔬","寺","驟","穆","冶","枯","冊","屍","凸","紳","坯","犧","焰","轟","欣","晉","瘦","禦","錠","錦","喪","旬","鍛","壟","搜","撲","邀","亭","酯","邁","舒","脆","酶","閒","憂","酚","頑","羽","漲","卸","仗","陪","闢","懲","杭","姚","肚","捉","飄","漂","昆","欺","吾","郎","烷","汁","呵","飾","蕭","雅","郵","遷","燕","撒","姻","赴","宴","煩","債","帳","斑","鈴","旨","醇","董","餅","雛","姿","拌","傅","腹","妥","揉","賢","拆","歪","葡","胺","丟","浩","徽","昂","墊","擋","覽","貪","慰","繳","汪","慌","馮","諾","姜","誼","兇","劣","誣","耀","昏","躺","盈","騎","喬","溪","叢","盧","抹","悶","諮","刮","駕","纜","悟","摘","鉺","擲","頗","幻","柄","惠","慘","佳","仇","臘","窩","滌","劍","瞧","堡","潑","蔥","罩","霍","撈","胎","蒼","濱","倆","捅","湘","砍","霞","邵","萄","瘋","淮","遂","熊","糞","烘","宿","檔","戈","駁","嫂","裕","徙","箭","捐","腸","撐","曬","辨","殿","蓮","攤","攪","醬","屏","疫","哀","蔡","堵","沫","皺","暢","疊","閣","萊","敲","轄","鉤","痕","壩","巷","餓","禍","丘","玄","溜","曰","邏","彭","嘗","卿","妨","艇","吞","韋","怨","矮","歇"]',
      );
    },
    8940: function (e, t, r) {
      "use strict";
      var n = r(5410),
        i = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 4096,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 8,
            s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 1,
            l =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 32;
          return n(e, t, r, i, s, l);
        };
      e.exports = { generateDerivedKey: i };
    },
    8941: function (e, t, r) {
      "use strict";
      var n = r(2925),
        i = function (e) {
          var t = n.sign.keyPair();
          return [t.publicKey, t.secretKey];
        },
        s = function (e) {
          var t = n.sign.keyPair.fromSecretKey(e);
          return t.publicKey;
        },
        l = function (e) {
          e = Uint8Array.from(e);
          var t = n.sign.keyPair.fromSeed(e);
          return [t.publicKey, t.secretKey];
        },
        a = function (e, t) {
          var r = n.sign(e, t);
          return r.slice(0, r.length - e.length);
        };
      e.exports = {
        keyPair: i,
        sign: a,
        generatePublicKey: s,
        generatePairFromSeed: l,
      };
    },
    8942: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(9),
          i = n(r(3170)),
          s = n(r(3171)),
          l = r(6367),
          a = (function () {
            var e = (0, s["default"])(
              i["default"].mark(function e() {
                return i["default"].wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ((e.next = 2), l.init(l.BLS12_381));
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          o = function (e) {
            var r = new l.SecretKey();
            r.setLittleEndian(Uint8Array.from(t.from(e, "hex")));
            var n = r.getPublicKey();
            return {
              publicKey: t.from(n.serialize()).toString("hex"),
              privateKey: t.from(r.serialize()).toString("hex"),
            };
          },
          u = function (e, r) {
            var n = new l.SecretKey();
            n.setLittleEndian(Uint8Array.from(t.from(r, "hex")));
            var i = Uint8Array.from(t.from(e, "hex"));
            return t.from(n.sign(i).serialize()).toString("hex");
          };
        e.exports = { generatePairFromSeed: o, sign: u, init: a };
      }).call(this, r(2).Buffer);
    },
    8943: function (e, t, r) {
      var n = { "./bls.js": 6367, "./bls_c.js": 6368 };
      function i(e) {
        var t = s(e);
        return r(t);
      }
      function s(e) {
        if (!r.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      ((i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = s),
        (e.exports = i),
        (i.id = 8943));
    },
    8944: function (e, t, r) {
      "use strict";
      var n = "m/44'/508'/0'/0'",
        i = "".concat(n, "/0'"),
        s = 256,
        l = "erd",
        a = "web",
        o = "ledger";
      e.exports = {
        HD_PREFIX: n,
        HD_PATH: i,
        MNEMONIC_LEN: s,
        ERD: l,
        ACC_TYPE_WEB: a,
        ACC_TYPE_LEDGER: o,
      };
    },
    8945: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(9),
          i = n(r(2834)),
          s = n(r(2839)),
          l = r(803),
          a = r(800),
          o = (function () {
            function e(t) {
              var r = t.nonce,
                n = void 0 === r ? 0 : r,
                s = t.from,
                l = void 0 === s ? "" : s,
                a = t.to,
                o = void 0 === a ? "" : a,
                u = t.senderUsername,
                c = void 0 === u ? "" : u,
                d = t.receiverUsername,
                f = void 0 === d ? "" : d,
                y = t.value,
                p = void 0 === y ? "" : y,
                b = t.gasPrice,
                h = void 0 === b ? "" : b,
                m = t.gasLimit,
                _ = void 0 === m ? "" : m,
                S = t.data,
                g = void 0 === S ? "" : S,
                v = t.chainID,
                w = void 0 === v ? "" : v,
                K = t.version,
                A = void 0 === K ? 0 : K;
              ((0, i["default"])(this, e),
                e.validateAddresses([l, o]),
                (this.nonce = n),
                (this.sender = l),
                (this.receiver = o),
                (this.senderUsername = c),
                (this.receiverUsername = f),
                (this.value = p),
                (this.gasPrice = h),
                (this.gasLimit = _),
                (this.data = g),
                (this.chainID = w),
                (this.version = A),
                (this.signature = ""));
            }
            return (
              (0, s["default"])(
                e,
                [
                  {
                    key: "prepareForSigning",
                    value: function () {
                      var e = {
                        nonce: this.nonce,
                        value: this.value,
                        receiver: this.receiver,
                        sender: this.sender,
                      };
                      (this.senderUsername &&
                        (e.senderUsername = this.senderUsername),
                        this.receiverUsername &&
                          (e.receiverUsername = this.receiverUsername),
                        this.gasPrice && (e.gasPrice = this.gasPrice),
                        this.gasLimit && (e.gasLimit = this.gasLimit),
                        this.data &&
                          (e.data = t.from(this.data).toString("base64")),
                        this.chainID && (e.chainID = this.chainID),
                        this.version && (e.version = this.version));
                      var r = JSON.stringify(e);
                      return t.from(r);
                    },
                  },
                  {
                    key: "prepareForNode",
                    value: function () {
                      return {
                        nonce: this.nonce,
                        value: this.value,
                        receiver: this.receiver,
                        sender: this.sender,
                        senderUsername: this.senderUsername,
                        receiverUsername: this.receiverUsername,
                        gasPrice: this.gasPrice,
                        gasLimit: this.gasLimit,
                        data: t.from(this.data).toString("base64"),
                        chainID: this.chainID,
                        version: this.version,
                        signature: this.signature,
                      };
                    },
                  },
                  {
                    key: "computeFee",
                    value: function (e) {
                      var r = e.minGasLimit,
                        n = e.gasPerDataByte,
                        i = e.gasPriceModifier,
                        s = r + t.from(this.data).length * n,
                        l = parseInt(this.gasLimit),
                        o = parseInt(this.gasPrice);
                      if (s > l)
                        throw new Error("Not enough gas provided ".concat(l));
                      var u = new a(o),
                        c = new a(s).multipliedBy(u);
                      if (s === l) return c;
                      var d = new a(l - s),
                        f = u.multipliedBy(new a(i)),
                        y = d.multipliedBy(f);
                      return c.plus(y);
                    },
                  },
                ],
                [
                  {
                    key: "validateAddresses",
                    value: function (e) {
                      var t = !0,
                        r = !1,
                        n = void 0;
                      try {
                        for (
                          var i, s = e[Symbol.iterator]();
                          !(t = (i = s.next()).done);
                          t = !0
                        ) {
                          var a = i.value;
                          try {
                            l.decode(a);
                          } catch (o) {
                            throw new Error("invalid bech32 address");
                          }
                        }
                      } catch (u) {
                        ((r = !0), (n = u));
                      } finally {
                        try {
                          t || null == s["return"] || s["return"]();
                        } finally {
                          if (r) throw n;
                        }
                      }
                    },
                  },
                ],
              ),
              e
            );
          })();
        e.exports = o;
      }).call(this, r(2).Buffer);
    },
  },
]);
