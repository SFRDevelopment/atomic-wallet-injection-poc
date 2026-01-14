(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [40],
  {
    3123: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }), c(9511));
      var t = c(9512);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
    },
    4534: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.lazyVariants = f));
      var t = c(2757);
      function f(e, a, c, f) {
        let { type: n } = a;
        const d = {},
          r = e.getSiType(n).def.asVariant.variants;
        for (let b = 0, i = r.length; b < i; b++)
          (0, t.lazyMethod)(d, r[b], f, c, b);
        return d;
      }
    },
    4535: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.UNMASK_VERSION =
          a.IMMORTAL_ERA =
          a.EMPTY_U8A =
          a.DEFAULT_VERSION =
          a.BIT_UNSIGNED =
          a.BIT_SIGNED =
            void 0));
      ((a.BIT_SIGNED = 128),
        (a.BIT_UNSIGNED = 0),
        (a.EMPTY_U8A = new Uint8Array()),
        (a.DEFAULT_VERSION = 4),
        (a.IMMORTAL_ERA = new Uint8Array([0])),
        (a.UNMASK_VERSION = 127));
    },
    4763: function (e, a, c) {
      function t(e) {
        const a = c.p;
        let t = "";
        return (
          (!a || a.indexOf("://") < 0) &&
            (t += window.location.protocol + "//" + window.location.host),
          (t += a || "/"),
          t + e
        );
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.packageInfo = void 0));
      a.packageInfo = {
        name: "@polkadot/rpc-core",
        path:
          (t("node_modules/@polkadot/rpc-core/packageInfo.js"),
          { url: t("node_modules/@polkadot/rpc-core/packageInfo.js") }.url
            ? new URL(
                { url: t("node_modules/@polkadot/rpc-core/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  { url: t("node_modules/@polkadot/rpc-core/packageInfo.js") }
                    .url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    4768: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }), c(9502));
      var t = c(9504);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
      var f = c(9505);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
    },
    4769: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericAccountIndex = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(2961);
      const d = 239,
        r = 252,
        b = 253,
        i = 254,
        o = new f.BN(d),
        s = new f.BN(1).shln(16),
        x = new f.BN(1).shln(32);
      function u(e) {
        return e instanceof GenericAccountIndex
          ? e.toBn()
          : (0, f.isBn)(e) ||
              (0, f.isNumber)(e) ||
              (0, f.isHex)(e) ||
              (0, f.isU8a)(e) ||
              (0, f.isBigInt)(e)
            ? e
            : u((0, n.decodeAddress)(e));
      }
      class GenericAccountIndex extends t.u32 {
        constructor(e, a) {
          (void 0 === a && (a = new f.BN(0)), super(e, u(a)));
        }
        static calcLength(e) {
          const a = (0, f.bnToBn)(e);
          return a.lte(o) ? 1 : a.lt(s) ? 2 : a.lt(x) ? 4 : 8;
        }
        static readLength(e) {
          const a = e[0];
          return a === r
            ? [1, 2]
            : a === b
              ? [1, 4]
              : a === i
                ? [1, 8]
                : [0, 1];
        }
        static writeLength(e) {
          switch (e.length) {
            case 2:
              return new Uint8Array([r]);
            case 4:
              return new Uint8Array([b]);
            case 8:
              return new Uint8Array([i]);
            default:
              return new Uint8Array([]);
          }
        }
        eq(e) {
          return (0, f.isBn)(e) || (0, f.isNumber)(e)
            ? super.eq(e)
            : super.eq(this.registry.createTypeUnsafe("AccountIndex", [e]));
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return this.toString();
        }
        toPrimitive() {
          return this.toJSON();
        }
        toString() {
          const e = GenericAccountIndex.calcLength(this);
          return (0, n.encodeAddress)(
            this.toU8a().subarray(0, e),
            this.registry.chainSS58,
          );
        }
        toRawType() {
          return "AccountIndex";
        }
      }
      a.GenericAccountIndex = GenericAccountIndex;
    },
    5502: function (e, a, c) {
      function t(e) {
        const a = c.p;
        let t = "";
        return (
          (!a || a.indexOf("://") < 0) &&
            (t += window.location.protocol + "//" + window.location.host),
          (t += a || "/"),
          t + e
        );
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.packageInfo = void 0));
      a.packageInfo = {
        name: "@polkadot/types-create",
        path:
          (t("node_modules/@polkadot/types-create/packageInfo.js"),
          { url: t("node_modules/@polkadot/types-create/packageInfo.js") }.url
            ? new URL(
                { url: t("node_modules/@polkadot/types-create/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  {
                    url: t(
                      "node_modules/@polkadot/types-create/packageInfo.js",
                    ),
                  }.url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    5503: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.emptyCheck = void 0));
      a.emptyCheck = { extrinsic: {}, payload: {} };
    },
    5504: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericAccountId33 = a.GenericAccountId = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(2961);
      function d(e) {
        if ((0, f.isU8a)(e) || Array.isArray(e)) return (0, f.u8aToU8a)(e);
        if (!e) return new Uint8Array();
        if ((0, f.isHex)(e)) return (0, f.hexToU8a)(e);
        if ((0, f.isString)(e)) return (0, n.decodeAddress)(e.toString());
        throw new Error(
          "Unknown type passed to AccountId constructor, found typeof " +
            typeof e,
        );
      }
      class BaseAccountId extends t.U8aFixed {
        constructor(e, a, c) {
          void 0 === a && (a = 264);
          const t = d(c),
            f = 8 * t.length;
          if (f < a && t.some((e) => e))
            throw new Error(
              `Invalid AccountId provided, expected ${a >> 3} bytes, found ${t.length}`,
            );
          super(e, t, a);
        }
        eq(e) {
          return super.eq(d(e));
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return this.toString();
        }
        toPrimitive() {
          return this.toJSON();
        }
        toString() {
          return (0, n.encodeAddress)(this, this.registry.chainSS58);
        }
        toRawType() {
          return "AccountId";
        }
      }
      class GenericAccountId extends BaseAccountId {
        constructor(e, a) {
          super(e, 256, a);
        }
      }
      a.GenericAccountId = GenericAccountId;
      class GenericAccountId33 extends BaseAccountId {
        constructor(e, a) {
          super(e, 264, a);
        }
      }
      a.GenericAccountId33 = GenericAccountId33;
    },
    5514: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = {};
      ((a.default = void 0), c(9776));
      var f = c(9778);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      a.default = f.Keyring;
    },
    5515: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createPair = p));
      var t = c(2757),
        f = c(2961),
        n = c(9779),
        d = c(9780),
        r = c(9781);
      const b = new Uint8Array(),
        i = {
          ecdsa: f.secp256k1PairFromSeed,
          ed25519: f.ed25519PairFromSeed,
          ethereum: f.secp256k1PairFromSeed,
          sr25519: f.sr25519PairFromSeed,
        },
        o = {
          ecdsa: new Uint8Array([2]),
          ed25519: new Uint8Array([0]),
          ethereum: new Uint8Array([2]),
          sr25519: new Uint8Array([1]),
        },
        s = {
          ecdsa: (e, a) => (0, f.secp256k1Sign)(e, a, "blake2"),
          ed25519: f.ed25519Sign,
          ethereum: (e, a) => (0, f.secp256k1Sign)(e, a, "keccak"),
          sr25519: f.sr25519Sign,
        },
        x = {
          ecdsa: (e) => (e.length > 32 ? (0, f.blake2AsU8a)(e) : e),
          ed25519: (e) => e,
          ethereum: (e) =>
            20 === e.length ? e : (0, f.keccakAsU8a)((0, f.secp256k1Expand)(e)),
          sr25519: (e) => e,
        };
      function u(e) {
        return !e || (0, t.u8aEmpty)(e);
      }
      function l(e, a, c) {
        return (0, f.blake2AsU8a)((0, t.u8aConcat)(a || "", c || "", e));
      }
      function p(e, a, c, h, y) {
        let { toSS58: g, type: _ } = e,
          { publicKey: m, secretKey: v } = a;
        (void 0 === c && (c = {}), void 0 === h && (h = null));
        const T = (e, a) => {
            const c = (0, n.decodePair)(e, a || h, y);
            if (64 === c.secretKey.length)
              ((m = c.publicKey), (v = c.secretKey));
            else {
              const e = i[_](c.secretKey);
              ((m = e.publicKey), (v = e.secretKey));
            }
          },
          k = (e) => (
            u(v) && h && T(e, h),
            (h = (0, d.encodePair)({ publicKey: m, secretKey: v }, e)),
            (y = void 0),
            h
          ),
          I = () => {
            const e = x[_](m);
            return "ethereum" === _ ? (0, f.ethereumEncode)(e) : g(e);
          };
        return {
          get address() {
            return I();
          },
          get addressRaw() {
            const e = x[_](m);
            return "ethereum" === _ ? e.slice(-20) : e;
          },
          get isLocked() {
            return u(v);
          },
          get meta() {
            return c;
          },
          get publicKey() {
            return m;
          },
          get type() {
            return _;
          },
          decodePkcs8: T,
          derive: (e, a) => {
            if ("ethereum" === _)
              throw new Error("Unable to derive on this keypair");
            if (u(v)) throw new Error("Cannot derive on a locked keypair");
            const { path: c } = (0, f.keyExtractPath)(e),
              t = (0, f.keyFromPath)({ publicKey: m, secretKey: v }, c, _);
            return p({ toSS58: g, type: _ }, t, a, null);
          },
          encodePkcs8: (e) => k(e),
          lock: () => {
            v = new Uint8Array();
          },
          setMeta: (e) => {
            c = (0, t.objectSpread)({}, c, e);
          },
          sign: function (e, a) {
            if ((void 0 === a && (a = {}), u(v)))
              throw new Error("Cannot sign with a locked key pair");
            return (0, t.u8aConcat)(
              a.withType ? o[_] : b,
              s[_]((0, t.u8aToU8a)(e), { publicKey: m, secretKey: v }),
            );
          },
          toJson: (e) => {
            const a = ["ecdsa", "ethereum"].includes(_)
              ? 20 === m.length
                ? (0, t.u8aToHex)(m)
                : (0, t.u8aToHex)((0, f.secp256k1Compress)(m))
              : I();
            return (0, r.pairToJson)(_, { address: a, meta: c }, k(e), !!e);
          },
          unlock: (e) => T(e),
          verify: (e, a, c) =>
            (0, f.signatureVerify)(e, a, x[_]((0, t.u8aToU8a)(c))).isValid,
          vrfSign: (e, a, c) => {
            if (u(v)) throw new Error("Cannot sign with a locked key pair");
            if ("sr25519" === _)
              return (0, f.sr25519VrfSign)(e, { secretKey: v }, a, c);
            const n = s[_]((0, t.u8aToU8a)(e), { publicKey: m, secretKey: v });
            return (0, t.u8aConcat)(l(n, a, c), n);
          },
          vrfVerify: (e, a, c, n, d) => {
            if ("sr25519" === _) return (0, f.sr25519VrfVerify)(e, a, m, n, d);
            const r = (0, f.signatureVerify)(
              e,
              (0, t.u8aConcat)(o[_], a.subarray(32)),
              x[_]((0, t.u8aToU8a)(c)),
            );
            return (
              r.isValid &&
              (0, t.u8aEq)(a.subarray(0, 32), l(a.subarray(32), n, d))
            );
          },
        };
      }
    },
    5516: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }), c(9792));
      var t = c(9793);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
    },
    5517: function (e, a, c) {
      function t(e) {
        const a = c.p;
        let t = "";
        return (
          (!a || a.indexOf("://") < 0) &&
            (t += window.location.protocol + "//" + window.location.host),
          (t += a || "/"),
          t + e
        );
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.packageInfo = void 0));
      a.packageInfo = {
        name: "@polkadot/types-known",
        path:
          (t("node_modules/@polkadot/types-known/packageInfo.js"),
          { url: t("node_modules/@polkadot/types-known/packageInfo.js") }.url
            ? new URL(
                { url: t("node_modules/@polkadot/types-known/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  {
                    url: t("node_modules/@polkadot/types-known/packageInfo.js"),
                  }.url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    6478: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }), c(9359));
      var t = c(9360);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
    },
    6479: function (e, a, c) {
      function t(e) {
        const a = c.p;
        let t = "";
        return (
          (!a || a.indexOf("://") < 0) &&
            (t += window.location.protocol + "//" + window.location.host),
          (t += a || "/"),
          t + e
        );
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.packageInfo = void 0));
      a.packageInfo = {
        name: "@polkadot/rpc-augment",
        path:
          (t("node_modules/@polkadot/rpc-augment/packageInfo.js"),
          { url: t("node_modules/@polkadot/rpc-augment/packageInfo.js") }.url
            ? new URL(
                { url: t("node_modules/@polkadot/rpc-augment/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  {
                    url: t("node_modules/@polkadot/rpc-augment/packageInfo.js"),
                  }.url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    6482: function (e, a, c) {
      function t(e) {
        const a = c.p;
        let t = "";
        return (
          (!a || a.indexOf("://") < 0) &&
            (t += window.location.protocol + "//" + window.location.host),
          (t += a || "/"),
          t + e
        );
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.packageInfo = void 0));
      a.packageInfo = {
        name: "@polkadot/networks",
        path:
          (t("node_modules/@polkadot/networks/packageInfo.js"),
          { url: t("node_modules/@polkadot/networks/packageInfo.js") }.url
            ? new URL(
                { url: t("node_modules/@polkadot/networks/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  { url: t("node_modules/@polkadot/networks/packageInfo.js") }
                    .url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "12.6.2",
      };
    },
    6489: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = { packageInfo: !0 };
      Object.defineProperty(a, "packageInfo", {
        enumerable: !0,
        get: function () {
          return n.packageInfo;
        },
      });
      var f = c(9425);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      var n = c(6482);
    },
    6522: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = c(6523);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
      var f = c(9510);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      var n = c(9513);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === n[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var d = c(4534);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === d[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var r = c(9514);
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === r[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            }));
      });
    },
    6523: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = c(9501);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
      var f = c(9507);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
    },
    6524: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.constructTypeClass = y),
        (a.createClassUnsafe = _),
        (a.getTypeClass = g));
      var t = c(2855),
        f = c(2757),
        n = c(4768),
        d = c(6525);
      function r(e) {
        let { lookupName: a, type: c } = e;
        return a || c;
      }
      function b(e) {
        if (!Array.isArray(e.sub))
          throw new Error(
            "Expected subtype as TypeDef[] in " + (0, f.stringify)(e),
          );
        return e.sub;
      }
      function i(e) {
        if (!e.sub || Array.isArray(e.sub))
          throw new Error(
            "Expected subtype as TypeDef in " + (0, f.stringify)(e),
          );
        return e.sub;
      }
      function o(e) {
        return r(i(e));
      }
      function s(e) {
        const a = b(e),
          c = {};
        for (let t = 0, n = a.length; t < n; t++) {
          const e = a[t];
          if (!e.name)
            throw new Error(
              "No name found in definition " + (0, f.stringify)(e),
            );
          c[e.name] = r(e);
        }
        return c;
      }
      function x(e) {
        return b(e).map(r);
      }
      function u(e, a) {
        let { displayName: c, length: t } = a;
        if (!(0, f.isNumber)(t))
          throw new Error(
            `Expected bitLength information for ${c || e.constructor.name}<bitLength>`,
          );
        return e.with(t, c);
      }
      function l(e, a) {
        const [c, t] = x(a);
        return e.with(c, t);
      }
      function p(e, a) {
        return e.with(o(a));
      }
      const h = {
        [n.TypeDefInfo.BTreeMap]: (e, a) => l(t.BTreeMap, a),
        [n.TypeDefInfo.BTreeSet]: (e, a) => p(t.BTreeSet, a),
        [n.TypeDefInfo.Compact]: (e, a) => p(t.Compact, a),
        [n.TypeDefInfo.DoNotConstruct]: (e, a) =>
          t.DoNotConstruct.with(a.displayName || a.type),
        [n.TypeDefInfo.Enum]: (e, a) => {
          const c = b(a);
          return t.Enum.with(
            c.every((e) => {
              let { type: a } = e;
              return "Null" === a;
            })
              ? c.reduce((e, a, c) => {
                  let { index: t, name: f } = a;
                  if (!f) throw new Error("No name found in sub definition");
                  return ((e[f] = t || c), e);
                }, {})
              : s(a),
          );
        },
        [n.TypeDefInfo.HashMap]: (e, a) => l(t.HashMap, a),
        [n.TypeDefInfo.Int]: (e, a) => u(t.Int, a),
        [n.TypeDefInfo.Linkage]: (e, a) => {
          const c = `Option<${o(a)}>`,
            f = t.Struct.with({ previous: c, next: c });
          return (
            (f.prototype.toRawType = function () {
              return `Linkage<${this.next.toRawType(!0)}>`;
            }),
            f
          );
        },
        [n.TypeDefInfo.Null]: (e, a) => t.Null,
        [n.TypeDefInfo.Option]: (e, a) => {
          if (!a.sub || Array.isArray(a.sub))
            throw new Error("Expected type information for Option");
          return p(t.Option, a);
        },
        [n.TypeDefInfo.Plain]: (e, a) => e.getOrUnknown(a.type),
        [n.TypeDefInfo.Range]: (e, a) => p(t.Range, a),
        [n.TypeDefInfo.RangeInclusive]: (e, a) => p(t.RangeInclusive, a),
        [n.TypeDefInfo.Result]: (e, a) => {
          const [c, f] = x(a);
          return t.Result.with({ Err: f, Ok: c });
        },
        [n.TypeDefInfo.Set]: (e, a) =>
          t.CodecSet.with(
            b(a).reduce((e, a) => {
              let { index: c, name: t } = a;
              if (!t || !(0, f.isNumber)(c))
                throw new Error("No name found in sub definition");
              return ((e[t] = c), e);
            }, {}),
            a.length,
          ),
        [n.TypeDefInfo.Si]: (e, a) => g(e, e.lookup.getTypeDef(a.type)),
        [n.TypeDefInfo.Struct]: (e, a) => t.Struct.with(s(a), a.alias),
        [n.TypeDefInfo.Tuple]: (e, a) => t.Tuple.with(x(a)),
        [n.TypeDefInfo.UInt]: (e, a) => u(t.UInt, a),
        [n.TypeDefInfo.Vec]: (e, a) => {
          let { sub: c } = a;
          if (!c || Array.isArray(c))
            throw new Error("Expected type information for vector");
          return "u8" === c.type ? t.Bytes : t.Vec.with(r(c));
        },
        [n.TypeDefInfo.VecFixed]: (e, a) => {
          let { displayName: c, length: n, sub: d } = a;
          if (!(0, f.isNumber)(n) || !d || Array.isArray(d))
            throw new Error(
              "Expected length & type information for fixed vector",
            );
          return "u8" === d.type
            ? t.U8aFixed.with(8 * n, c)
            : t.VecFixed.with(r(d), n);
        },
        [n.TypeDefInfo.WrapperKeepOpaque]: (e, a) => p(t.WrapperKeepOpaque, a),
        [n.TypeDefInfo.WrapperOpaque]: (e, a) => p(t.WrapperOpaque, a),
      };
      function y(e, a) {
        try {
          const c = h[a.info](e, a);
          if (!c) throw new Error("No class created");
          return (
            !c.__fallbackType &&
              a.fallbackType &&
              (c.__fallbackType = a.fallbackType),
            c
          );
        } catch (c) {
          throw new Error(
            `Unable to construct class from ${(0, f.stringify)(a)}: ${c.message}`,
          );
        }
      }
      function g(e, a) {
        return e.getUnsafe(a.type, !1, a);
      }
      function _(e, a) {
        return (
          e.getUnsafe(a) ||
          g(
            e,
            e.isLookupType(a) ? e.lookup.getTypeDef(a) : (0, d.getTypeDef)(a),
          )
        );
      }
    },
    6525: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.getTypeDef = k));
      var t = c(2855),
        f = c(2757),
        n = c(4768),
        d = c(6526);
      const r = ["_alias", "_fallback"];
      function b(e) {
        return (0, f.isString)(e) ? e.toString() : (0, f.stringify)(e);
      }
      function i(e) {
        const a = Object.values(e);
        if (a.some((e) => (0, f.isNumber)(e))) {
          if (!a.every((e) => (0, f.isNumber)(e) && e >= 0 && e <= 255))
            throw new Error("Invalid number-indexed enum definition");
          return !1;
        }
        return !0;
      }
      function o(e, a, c, t) {
        return (
          (e.info = n.TypeDefInfo.Enum),
          (e.fallbackType = t),
          Array.isArray(a)
            ? (e.sub = a.map((e, a) => ({
                index: a,
                info: n.TypeDefInfo.Plain,
                name: e,
                type: "Null",
              })))
            : i(a)
              ? (e.sub = Object.entries(a).map((e, a) => {
                  let [t, n] = e;
                  return (0, f.objectSpread)(
                    {},
                    k(b(n || "Null"), { name: t }, c),
                    { index: a },
                  );
                }))
              : (e.sub = Object.entries(a).map((e) => {
                  let [a, c] = e;
                  return {
                    index: c,
                    info: n.TypeDefInfo.Plain,
                    name: a,
                    type: "Null",
                  };
                })),
          e
        );
      }
      function s(e, a, c) {
        return (
          (e.info = n.TypeDefInfo.Set),
          (e.fallbackType = c),
          (e.length = a._bitLength),
          (e.sub = Object.entries(a)
            .filter((e) => {
              let [a] = e;
              return !a.startsWith("_");
            })
            .map((e) => {
              let [a, c] = e;
              return {
                index: c,
                info: n.TypeDefInfo.Plain,
                name: a,
                type: "Null",
              };
            })),
          e
        );
      }
      function x(e, a, c, t) {
        const f = JSON.parse(a),
          n = Object.keys(f);
        return f._enum
          ? o(e, f._enum, t, f._fallback)
          : f._set
            ? s(e, f._set, f._fallback)
            : ((e.alias = f._alias
                ? new Map(Object.entries(f._alias))
                : void 0),
              (e.fallbackType = f._fallback),
              (e.sub = n
                .filter((e) => !r.includes(e))
                .map((e) => k(b(f[e]), { name: e }, t))),
              e);
      }
      function u(e, a, c, t) {
        const f = a.length - 1;
        let n = -1,
          d = 0;
        for (let s = 1; s < f && -1 === n; s++)
          switch (a[s]) {
            case ";":
              0 === d && (n = s);
              break;
            case "[":
            case "(":
            case "<":
              d++;
              break;
            case "]":
            case ")":
            case ">":
              d--;
              break;
          }
        if (-1 === n)
          throw new Error(a + ": Unable to extract location of ';'");
        const r = a.substring(1, n),
          [b, i] = a.substring(n + 1, f).split(";"),
          o = parseInt(b.trim(), 10);
        if (o > 2048)
          throw new Error(
            a + ": Only support for [Type; <length>], where length <= 2048",
          );
        return ((e.displayName = i), (e.length = o), (e.sub = k(r, {}, t)), e);
      }
      function l(e, a, c, t) {
        return (
          (e.sub =
            0 === c.length ? [] : (0, d.typeSplit)(c).map((e) => k(e, {}, t))),
          e
        );
      }
      function p(e, a, c, t) {
        const [f, n] = a.substring(t.length + 1, a.length - 1).split(","),
          d = parseInt(f.trim(), 10);
        if (d > 8192 || d % 8)
          throw new Error(
            `${a}: Only support for ${t}<bitLength>, where length <= 8192 and a power of 8, found ${d}`,
          );
        return ((e.displayName = n), (e.length = d), e);
      }
      function h(e, a, c) {
        return p(e, a, c, "Int");
      }
      function y(e, a, c) {
        return p(e, a, c, "UInt");
      }
      function g(e, a, c) {
        const t = "DoNotConstruct".length;
        return ((e.displayName = a.substring(t + 1, a.length - 1)), e);
      }
      function _(e, a) {
        let [c, t] = a;
        return e.startsWith(c) && e.slice(-1 * t.length) === t;
      }
      const m = [
          ["[", "]", n.TypeDefInfo.VecFixed, u],
          ["{", "}", n.TypeDefInfo.Struct, x],
          ["(", ")", n.TypeDefInfo.Tuple, l],
          ["BTreeMap<", ">", n.TypeDefInfo.BTreeMap, l],
          ["HashMap<", ">", n.TypeDefInfo.HashMap, l],
          ["Int<", ">", n.TypeDefInfo.Int, h],
          ["Result<", ">", n.TypeDefInfo.Result, l],
          ["UInt<", ">", n.TypeDefInfo.UInt, y],
          ["DoNotConstruct<", ">", n.TypeDefInfo.DoNotConstruct, g],
        ],
        v = [
          ["BTreeSet<", ">", n.TypeDefInfo.BTreeSet],
          ["Compact<", ">", n.TypeDefInfo.Compact],
          ["Linkage<", ">", n.TypeDefInfo.Linkage],
          ["Opaque<", ">", n.TypeDefInfo.WrapperOpaque],
          ["Option<", ">", n.TypeDefInfo.Option],
          ["Range<", ">", n.TypeDefInfo.Range],
          ["RangeInclusive<", ">", n.TypeDefInfo.RangeInclusive],
          ["Vec<", ">", n.TypeDefInfo.Vec],
          ["WrapperKeepOpaque<", ">", n.TypeDefInfo.WrapperKeepOpaque],
          ["WrapperOpaque<", ">", n.TypeDefInfo.WrapperOpaque],
        ];
      function T(e, a) {
        let [c, t] = a;
        return e.substring(c.length, e.length - t.length);
      }
      function k(e, a, c) {
        let { displayName: f, name: d } = void 0 === a ? {} : a;
        void 0 === c && (c = 0);
        const r = (0, t.sanitize)(e),
          b = { displayName: f, info: n.TypeDefInfo.Plain, name: d, type: r };
        if (++c > 64)
          throw new Error("getTypeDef: Maximum nested limit reached");
        const i = m.find((e) => _(r, e));
        if (i) return ((b.info = i[2]), i[3](b, r, T(r, i), c));
        const o = v.find((e) => _(r, e));
        return (o && ((b.info = o[2]), (b.sub = k(T(r, o), {}, c))), b);
      }
    },
    6526: function (e, a, c) {
      "use strict";
      function t(e) {
        const a = [];
        let c = 0,
          t = 0,
          f = 0,
          n = 0,
          d = 0;
        for (let r = 0, b = e.length; r < b; r++)
          switch (e[r]) {
            case ",":
              c ||
                t ||
                f ||
                n ||
                (a.push(e.substring(d, r).trim()), (d = r + 1));
              break;
            case "<":
              c++;
              break;
            case ">":
              c--;
              break;
            case "[":
              t++;
              break;
            case "]":
              t--;
              break;
            case "{":
              f++;
              break;
            case "}":
              f--;
              break;
            case "(":
              n++;
              break;
            case ")":
              n--;
              break;
          }
        if (c || t || f || n)
          throw new Error(
            "Invalid definition (missing terminators) found in " + e,
          );
        return (a.push(e.substring(d, e.length).trim()), a);
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.typeSplit = t));
    },
    6527: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericEventData = a.GenericEvent = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757);
      function r(e, a) {
        if (null === a || void 0 === a || !a.length)
          return { DataType: n.Null };
        const c = a.subarray(0, 2);
        return {
          DataType: e.findMetaEvent(c),
          value: { data: a.subarray(2), index: c },
        };
      }
      class GenericEventData extends n.Tuple {
        constructor(e, a, c, t, n) {
          (void 0 === t && (t = "<unknown>"),
            void 0 === n && (n = "<unknown>"));
          const r = (null === c || void 0 === c ? void 0 : c.fields) || [];
          (super(
            e,
            r.map((a) => {
              let { type: c } = a;
              return e.createLookupType(c);
            }),
            a,
          ),
            (0, f.default)(this, "__internal__meta", void 0),
            (0, f.default)(this, "__internal__method", void 0),
            (0, f.default)(this, "__internal__names", null),
            (0, f.default)(this, "__internal__section", void 0),
            (0, f.default)(this, "__internal__typeDef", void 0),
            (this.__internal__meta = c),
            (this.__internal__method = n),
            (this.__internal__section = t),
            (this.__internal__typeDef = r.map((a) => {
              let { type: c } = a;
              return e.lookup.getTypeDef(c);
            })));
          const b = r
            .map((a) => {
              let { name: c } = a;
              return e.lookup.sanitizeField(c)[0];
            })
            .filter((e) => !!e);
          b.length === r.length &&
            ((this.__internal__names = b),
            (0, d.objectProperties)(this, b, (e, a) => this[a]));
        }
        get meta() {
          return this.__internal__meta;
        }
        get method() {
          return this.__internal__method;
        }
        get names() {
          return this.__internal__names;
        }
        get section() {
          return this.__internal__section;
        }
        get typeDef() {
          return this.__internal__typeDef;
        }
        toHuman(e, a) {
          if (null !== this.__internal__names) {
            const c = {};
            for (let t = 0, f = this.__internal__names.length; t < f; t++)
              c[this.__internal__names[t]] = this[t].toHuman(e, a);
            return c;
          }
          return super.toHuman(e);
        }
      }
      a.GenericEventData = GenericEventData;
      class GenericEvent extends n.Struct {
        constructor(e, a) {
          const { DataType: c, value: t } = r(e, a);
          super(e, { index: "EventId", data: c }, t);
        }
        get data() {
          return this.getT("data");
        }
        get index() {
          return this.getT("index");
        }
        get meta() {
          return this.data.meta;
        }
        get method() {
          return this.data.method;
        }
        get section() {
          return this.data.section;
        }
        get typeDef() {
          return this.data.typeDef;
        }
        toHuman(e, a) {
          return (0, d.objectSpread)(
            { method: this.method, section: this.section },
            e ? { docs: this.meta.docs.map((e) => e.toString()) } : null,
            super.toHuman(e, a),
          );
        }
      }
      a.GenericEvent = GenericEvent;
    },
    6529: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericExtrinsicPayloadV4 = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757),
        r = c(9528);
      class GenericExtrinsicPayloadV4 extends n.Struct {
        constructor(e, a) {
          (super(
            e,
            (0, d.objectSpread)(
              { method: "Bytes" },
              e.getSignedExtensionTypes(),
              e.getSignedExtensionExtra(),
            ),
            a,
          ),
            (0, f.default)(this, "__internal__signOptions", void 0),
            (this.__internal__signOptions = {
              withType:
                e.createTypeUnsafe("ExtrinsicSignature", []) instanceof n.Enum,
            }));
        }
        inspect() {
          return super.inspect({ method: !0 });
        }
        get blockHash() {
          return this.getT("blockHash");
        }
        get era() {
          return this.getT("era");
        }
        get genesisHash() {
          return this.getT("genesisHash");
        }
        get method() {
          return this.getT("method");
        }
        get nonce() {
          return this.getT("nonce");
        }
        get specVersion() {
          return this.getT("specVersion");
        }
        get tip() {
          return this.getT("tip");
        }
        get transactionVersion() {
          return this.getT("transactionVersion");
        }
        get assetId() {
          return this.getT("assetId");
        }
        get metadataHash() {
          return this.getT("metadataHash");
        }
        sign(e) {
          return (0, r.sign)(
            this.registry,
            e,
            this.toU8a({ method: !0 }),
            this.__internal__signOptions,
          );
        }
      }
      a.GenericExtrinsicPayloadV4 = GenericExtrinsicPayloadV4;
    },
    6530: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericEthereumAccountId = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(2961);
      function d(e) {
        return (0, f.isU8a)(e) || Array.isArray(e)
          ? (0, f.u8aToU8a)(e)
          : (0, f.isHex)(e) || (0, n.isEthereumAddress)(e.toString())
            ? (0, f.hexToU8a)(e.toString())
            : (0, f.isString)(e)
              ? (0, f.u8aToU8a)(e)
              : e;
      }
      class GenericEthereumAccountId extends t.U8aFixed {
        constructor(e, a) {
          (void 0 === a && (a = new Uint8Array()), super(e, d(a), 160));
        }
        eq(e) {
          return !!e && super.eq(d(e));
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return this.toString();
        }
        toPrimitive() {
          return this.toJSON();
        }
        toString() {
          return (0, n.ethereumEncode)(this);
        }
        toRawType() {
          return "AccountId";
        }
      }
      a.GenericEthereumAccountId = GenericEthereumAccountId;
    },
    6553: function (e, a, c) {
      function t(e) {
        const a = c.p;
        let t = "";
        return (
          (!a || a.indexOf("://") < 0) &&
            (t += window.location.protocol + "//" + window.location.host),
          (t += a || "/"),
          t + e
        );
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.packageInfo = void 0));
      a.packageInfo = {
        name: "@polkadot/keyring",
        path:
          (t("node_modules/@polkadot/keyring/packageInfo.js"),
          { url: t("node_modules/@polkadot/keyring/packageInfo.js") }.url
            ? new URL(
                { url: t("node_modules/@polkadot/keyring/packageInfo.js") }.url,
              ).pathname.substring(
                0,
                new URL(
                  { url: t("node_modules/@polkadot/keyring/packageInfo.js") }
                    .url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "12.6.2",
      };
    },
    6554: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.Keyring = void 0));
      var f = t(c(128)),
        n = c(2757),
        d = c(2961),
        r = c(5515),
        b = c(6556),
        i = c(9782);
      const o = {
        ecdsa: (e) => (0, d.secp256k1PairFromSeed)(e),
        ed25519: (e) => (0, d.ed25519PairFromSeed)(e),
        ethereum: (e) => (0, d.secp256k1PairFromSeed)(e),
        sr25519: (e) => (0, d.sr25519PairFromSeed)(e),
      };
      function s(e) {
        let { publicKey: a } = e;
        return a;
      }
      class Keyring {
        constructor(e) {
          if (
            (void 0 === e && (e = {}),
            (0, f.default)(this, "__internal__pairs", void 0),
            (0, f.default)(this, "__internal__type", void 0),
            (0, f.default)(this, "__internal__ss58", void 0),
            (0, f.default)(this, "decodeAddress", d.decodeAddress),
            (0, f.default)(this, "encodeAddress", (e, a) =>
              "ethereum" === this.type
                ? (0, d.ethereumEncode)(e)
                : (0, d.encodeAddress)(
                    e,
                    null !== a && void 0 !== a ? a : this.__internal__ss58,
                  ),
            ),
            (e.type = e.type || "ed25519"),
            !["ecdsa", "ethereum", "ed25519", "sr25519"].includes(
              e.type || "undefined",
            ))
          )
            throw new Error(
              "Expected a keyring type of either 'ed25519', 'sr25519', 'ethereum' or 'ecdsa', found '" +
                (e.type || "unknown"),
            );
          ((this.__internal__pairs = new i.Pairs()),
            (this.__internal__ss58 = e.ss58Format),
            (this.__internal__type = e.type));
        }
        get pairs() {
          return this.getPairs();
        }
        get publicKeys() {
          return this.getPublicKeys();
        }
        get type() {
          return this.__internal__type;
        }
        addPair(e) {
          return this.__internal__pairs.add(e);
        }
        addFromAddress(e, a, c, t, f, n) {
          (void 0 === a && (a = {}),
            void 0 === c && (c = null),
            void 0 === t && (t = this.type));
          const d = this.decodeAddress(e, f);
          return this.addPair(
            (0, r.createPair)(
              { toSS58: this.encodeAddress, type: t },
              { publicKey: d, secretKey: new Uint8Array() },
              a,
              c,
              n,
            ),
          );
        }
        addFromJson(e, a) {
          return this.addPair(this.createFromJson(e, a));
        }
        addFromMnemonic(e, a, c) {
          return (
            void 0 === a && (a = {}),
            void 0 === c && (c = this.type),
            this.addFromUri(e, a, c)
          );
        }
        addFromPair(e, a, c) {
          return (
            void 0 === a && (a = {}),
            void 0 === c && (c = this.type),
            this.addPair(this.createFromPair(e, a, c))
          );
        }
        addFromSeed(e, a, c) {
          return (
            void 0 === a && (a = {}),
            void 0 === c && (c = this.type),
            this.addPair(
              (0, r.createPair)(
                { toSS58: this.encodeAddress, type: c },
                o[c](e),
                a,
                null,
              ),
            )
          );
        }
        addFromUri(e, a, c) {
          return (
            void 0 === a && (a = {}),
            void 0 === c && (c = this.type),
            this.addPair(this.createFromUri(e, a, c))
          );
        }
        createFromJson(e, a) {
          let {
            address: c,
            encoded: t,
            encoding: { content: f, type: b, version: i },
            meta: o,
          } = e;
          if ("3" === i && "pkcs8" !== f[0])
            throw new Error(
              `Unable to decode non-pkcs8 type, [${f.join(",")}] found}`,
            );
          const s = "0" !== i && Array.isArray(f) ? f[1] : this.type,
            x = Array.isArray(b) ? b : [b];
          if (!["ed25519", "sr25519", "ecdsa", "ethereum"].includes(s))
            throw new Error("Unknown crypto type " + s);
          const u = (0, n.isHex)(c)
              ? (0, n.hexToU8a)(c)
              : this.decodeAddress(c, a),
            l = (0, n.isHex)(t) ? (0, n.hexToU8a)(t) : (0, d.base64Decode)(t);
          return (0, r.createPair)(
            { toSS58: this.encodeAddress, type: s },
            { publicKey: u, secretKey: new Uint8Array() },
            o,
            l,
            x,
          );
        }
        createFromPair(e, a, c) {
          return (
            void 0 === a && (a = {}),
            void 0 === c && (c = this.type),
            (0, r.createPair)(
              { toSS58: this.encodeAddress, type: c },
              e,
              a,
              null,
            )
          );
        }
        createFromUri(e, a, c) {
          (void 0 === a && (a = {}), void 0 === c && (c = this.type));
          const t = e.startsWith("//") ? `${b.DEV_PHRASE}${e}` : e,
            {
              derivePath: f,
              password: i,
              path: s,
              phrase: x,
            } = (0, d.keyExtractSuri)(t);
          let u;
          const l = (0, n.isHex)(x, 256);
          if (l) u = (0, n.hexToU8a)(x);
          else {
            const e = x.split(" ");
            if ([12, 15, 18, 21, 24].includes(e.length))
              u =
                "ethereum" === c
                  ? (0, d.mnemonicToLegacySeed)(x, "", !1, 64)
                  : (0, d.mnemonicToMiniSecret)(x, i);
            else {
              if (x.length > 32)
                throw new Error(
                  "specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes",
                );
              u = (0, n.stringToU8a)(x.padEnd(32));
            }
          }
          const p =
            "ethereum" === c
              ? l
                ? o[c](u)
                : (0, d.hdEthereum)(u, f.substring(1))
              : (0, d.keyFromPath)(o[c](u), s, c);
          return (0, r.createPair)(
            { toSS58: this.encodeAddress, type: c },
            p,
            a,
            null,
          );
        }
        getPair(e) {
          return this.__internal__pairs.get(e);
        }
        getPairs() {
          return this.__internal__pairs.all();
        }
        getPublicKeys() {
          return this.__internal__pairs.all().map(s);
        }
        removePair(e) {
          this.__internal__pairs.remove(e);
        }
        setSS58Format(e) {
          this.__internal__ss58 = e;
        }
        toJson(e, a) {
          return this.__internal__pairs.get(e).toJson(a);
        }
      }
      a.Keyring = Keyring;
    },
    6555: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.SEED_LENGTH =
          a.SEC_LENGTH =
          a.SALT_LENGTH =
          a.PUB_LENGTH =
          a.PKCS8_HEADER =
          a.PKCS8_DIVIDER =
            void 0));
      ((a.PKCS8_DIVIDER = new Uint8Array([161, 35, 3, 33, 0])),
        (a.PKCS8_HEADER = new Uint8Array([
          48, 83, 2, 1, 1, 48, 5, 6, 3, 43, 101, 112, 4, 34, 4, 32,
        ])),
        (a.PUB_LENGTH = 32),
        (a.SALT_LENGTH = 32),
        (a.SEC_LENGTH = 64),
        (a.SEED_LENGTH = 32));
    },
    6556: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.DEV_SEED = a.DEV_PHRASE = void 0));
      ((a.DEV_PHRASE =
        "bottom drive obey lake curtain smoke basket hold race lonely fit walk"),
        (a.DEV_SEED =
          "0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e"));
    },
    6557: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.PAIRSSR25519 = a.PAIRSETHEREUM = void 0),
        (a.createTestKeyring = i));
      var t = c(2757),
        f = c(5515),
        n = c(6554);
      const d = (a.PAIRSSR25519 = [
          {
            p: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
            s: "0x98319d4ff8a9508c4bb0cf0b5a78d760a0b2082c02775e6e82370816fedfff48925a225d97aa00682d6a59b95b18780c10d7032336e88f3442b42361f4a66011",
            seed: "Alice",
            type: "sr25519",
          },
          {
            p: "0xbe5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f",
            s: "0xe8da6c9d810e020f5e3c7f5af2dea314cbeaa0d72bc6421e92c0808a0c584a6046ab28e97c3ffc77fe12b5a4d37e8cd4afbfebbf2391ffc7cb07c0f38c023efd",
            seed: "Alice//stash",
            type: "sr25519",
          },
          {
            p: "0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48",
            s: "0x081ff694633e255136bdb456c20a5fc8fed21f8b964c11bb17ff534ce80ebd5941ae88f85d0c1bfc37be41c904e1dfc01de8c8067b0d6d5df25dd1ac0894a325",
            seed: "Bob",
            type: "sr25519",
          },
          {
            p: "0xfe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e",
            s: "0xc006507cdfc267a21532394c49ca9b754ca71de21e15a1cdf807c7ceab6d0b6c3ed408d9d35311540dcd54931933e67cf1ea10d46f75408f82b789d9bd212fde",
            seed: "Bob//stash",
            type: "sr25519",
          },
          {
            p: "0x90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22",
            s: "0xa8f2d83016052e5d6d77b2f6fd5d59418922a09024cda701b3c34369ec43a7668faf12ff39cd4e5d92bb773972f41a7a5279ebc2ed92264bed8f47d344f8f18c",
            seed: "Charlie",
            type: "sr25519",
          },
          {
            p: "0x306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc20",
            s: "0x20e05482ca4677e0edbc58ae9a3a59f6ed3b1a9484ba17e64d6fe8688b2b7b5d108c4487b9323b98b11fe36cb301b084e920f7b7895536809a6d62a451b25568",
            seed: "Dave",
            type: "sr25519",
          },
          {
            p: "0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e",
            s: "0x683576abfd5dc35273e4264c23095a1bf21c14517bece57c7f0cc5c0ed4ce06a3dbf386b7828f348abe15d76973a72009e6ef86a5c91db2990cb36bb657c6587",
            seed: "Eve",
            type: "sr25519",
          },
          {
            p: "0x1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c",
            s: "0xb835c20f450079cf4f513900ae9faf8df06ad86c681884122c752a4b2bf74d4303e4f21bc6cc62bb4eeed5a9cce642c25e2d2ac1464093b50f6196d78e3a7426",
            seed: "Ferdie",
            type: "sr25519",
          },
        ]),
        r = (a.PAIRSETHEREUM = [
          {
            name: "Alith",
            p: "0x02509540919faacf9ab52146c9aa40db68172d83777250b28e4679176e49ccdd9f",
            s: "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133",
            type: "ethereum",
          },
          {
            name: "Baltathar",
            p: "0x033bc19e36ff1673910575b6727a974a9abd80c9a875d41ab3e2648dbfb9e4b518",
            s: "0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b",
            type: "ethereum",
          },
          {
            name: "Charleth",
            p: "0x0234637bdc0e89b5d46543bcbf8edff329d2702bc995e27e9af4b1ba009a3c2a5e",
            s: "0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b",
            type: "ethereum",
          },
          {
            name: "Dorothy",
            p: "0x02a00d60b2b408c2a14c5d70cdd2c205db8985ef737a7e55ad20ea32cc9e7c417c",
            s: "0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68",
            type: "ethereum",
          },
          {
            name: "Ethan",
            p: "0x025cdc005b752651cd3f728fb9192182acb3a9c89e19072cbd5b03f3ee1f1b3ffa",
            s: "0x7dce9bc8babb68fec1409be38c8e1a52650206a7ed90ff956ae8a6d15eeaaef4",
            type: "ethereum",
          },
          {
            name: "Faith",
            p: "0x037964b6c9d546da4646ada28a99e34acaa1d14e7aba861a9055f9bd200c8abf74",
            s: "0xb9d2ea9a615f3165812e8d44de0d24da9bbd164b65c4f0573e1ce2c8dbd9c8df",
            type: "ethereum",
          },
        ]);
      function b(e, a) {
        if (!e && !a)
          throw new Error("Testing pair should have either a name or a seed");
        return {
          isTesting: !0,
          name:
            e ||
            (null === a || void 0 === a
              ? void 0
              : a.replace("//", "_").toLowerCase()),
        };
      }
      function i(e, a) {
        (void 0 === e && (e = {}), void 0 === a && (a = !0));
        const c = new n.Keyring(e),
          i = "ethereum" === e.type ? r : d;
        for (const { name: n, p: d, s: r, seed: o, type: s } of i) {
          const i = b(n, o),
            x =
              a || n || !o
                ? c.addPair(
                    (0, f.createPair)(
                      { toSS58: c.encodeAddress, type: s },
                      {
                        publicKey: (0, t.hexToU8a)(d),
                        secretKey: (0, t.hexToU8a)(r),
                      },
                      i,
                    ),
                  )
                : c.addFromUri(o, i, e.type);
          x.lock = () => {};
        }
        return c;
      }
    },
    9359: function (e, a, c) {
      "use strict";
      var t = c(4763),
        f = c(3452),
        n = c(2757),
        d = c(6479);
      (0, n.detectPackage)(d.packageInfo, null, [t.packageInfo, f.packageInfo]);
    },
    9360: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "packageInfo", {
          enumerable: !0,
          get: function () {
            return t.packageInfo;
          },
        }),
        c(9361));
      var t = c(6479);
    },
    9361: function (e, a, c) {
      "use strict";
      c(9362);
    },
    9362: function (e, a, c) {
      "use strict";
      c(9363);
    },
    9363: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
    },
    9425: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.selectableNetworks = a.availableNetworks = a.allNetworks = void 0));
      var f = t(c(9426)),
        n = c(9427);
      const d = [0, 2, 42],
        r = ["testnet"];
      function b(e) {
        var a, c;
        const t = e.network || "",
          f = t.replace(/_/g, "-").split("-"),
          d = e;
        return (
          (d.slip44 = n.knownLedger[t]),
          (d.hasLedgerSupport = !!d.slip44),
          (d.genesisHash = n.knownGenesis[t] || []),
          (d.icon = n.knownIcon[t] || "substrate"),
          (d.isTestnet = !!n.knownTestnet[t] || r.includes(f[f.length - 1])),
          (d.isIgnored =
            d.isTestnet ||
            (!(
              e.standardAccount &&
              null !== (a = e.decimals) &&
              void 0 !== a &&
              a.length &&
              null !== (c = e.symbols) &&
              void 0 !== c &&
              c.length
            ) &&
              42 !== e.prefix)),
          d
        );
      }
      function i(e) {
        let { genesisHash: a, prefix: c } = e;
        return !!a.length || 42 === c;
      }
      function o(e) {
        return !e.isIgnored && !!e.network;
      }
      function s(e, a) {
        const c = d.includes(e.prefix),
          t = d.includes(a.prefix);
        return c === t
          ? c
            ? 0
            : e.displayName.localeCompare(a.displayName)
          : c
            ? -1
            : 1;
      }
      const x = (a.allNetworks = f.default.map(b)),
        u = (a.availableNetworks = x.filter(o).sort(s));
      a.selectableNetworks = u.filter(i);
    },
    9427: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "knownGenesis", {
          enumerable: !0,
          get: function () {
            return t.knownGenesis;
          },
        }),
        Object.defineProperty(a, "knownIcon", {
          enumerable: !0,
          get: function () {
            return f.knownIcon;
          },
        }),
        Object.defineProperty(a, "knownLedger", {
          enumerable: !0,
          get: function () {
            return n.knownLedger;
          },
        }),
        Object.defineProperty(a, "knownTestnet", {
          enumerable: !0,
          get: function () {
            return d.knownTestnet;
          },
        }));
      var t = c(9428),
        f = c(9429),
        n = c(9430),
        d = c(9431);
    },
    9428: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.knownGenesis = void 0));
      a.knownGenesis = {
        acala: [
          "0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c",
        ],
        ajuna: [
          "0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee",
        ],
        "aleph-node": [
          "0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e",
        ],
        astar: [
          "0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6",
        ],
        basilisk: [
          "0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755",
        ],
        bifrost: [
          "0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b",
        ],
        "bifrost-kusama": [
          "0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed",
        ],
        bittensor: [
          "0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03",
        ],
        centrifuge: [
          "0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82",
          "0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5",
        ],
        cere: [
          "0x81443836a9a24caaa23f1241897d1235717535711d1d3fe24eae4fdc942c092c",
        ],
        composable: [
          "0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d",
        ],
        darwinia: [
          "0xe71578b37a7c799b0ab4ee87ffa6f059a6b98f71f06fb8c84a8d88013a548ad6",
        ],
        "dock-mainnet": [
          "0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae",
          "0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9",
        ],
        edgeware: [
          "0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b",
        ],
        enjin: [
          "0xd8761d3c88f26dc12875c00d3165f7d67243d56fc85b4cf19937601a7916e5a9",
        ],
        equilibrium: [
          "0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925",
        ],
        genshiro: [
          "0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243",
        ],
        hydradx: [
          "0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d",
          "0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc",
          "0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9",
          "0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047",
          "0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2",
        ],
        "interlay-parachain": [
          "0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72",
        ],
        karura: [
          "0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b",
        ],
        khala: [
          "0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d",
        ],
        kulupu: [
          "0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba",
        ],
        kusama: [
          "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
          "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
          "0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf",
        ],
        matrixchain: [
          "0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615",
        ],
        nodle: [
          "0x97da7ede98d7bad4e36b4d734b6055425a3be036da2a332ea5a7037656427a21",
        ],
        origintrail: [
          "0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174",
        ],
        p3d: [
          "0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66",
        ],
        parallel: [
          "0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97",
        ],
        pendulum: [
          "0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86",
        ],
        phala: [
          "0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736",
        ],
        picasso: [
          "0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc",
          "0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c",
        ],
        polkadex: [
          "0x3920bcb4960a1eef5580cd5367ff3f430eef052774f78468852f7b9cb39f8a3c",
        ],
        polkadot: [
          "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
        ],
        polymesh: [
          "0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063",
        ],
        quartz: [
          "0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554",
        ],
        rococo: [
          "0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e",
          "0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897",
          "0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770",
          "0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff",
          "0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a",
          "0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9",
          "0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779",
          "0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215",
          "0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9",
          "0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147",
          "0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd",
          "0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299",
        ],
        sora: [
          "0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5",
        ],
        stafi: [
          "0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80",
        ],
        statemine: [
          "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a",
        ],
        statemint: [
          "0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f",
        ],
        subsocial: [
          "0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8",
        ],
        ternoa: [
          "0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e",
        ],
        unique: [
          "0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31",
        ],
        vtb: [
          "0x286bc8414c7000ce1d6ee6a834e29a54c1784814b76243eb77ed0b2c5573c60f",
          "0x7483b89572fb2bd687c7b9a93b242d0b237f9aba463aba07ec24503931038aaa",
        ],
        westend: [
          "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
        ],
        xxnetwork: [
          "0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa",
        ],
        zeitgeist: [
          "0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060",
        ],
      };
    },
    9429: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.knownIcon = void 0));
      a.knownIcon = {
        centrifuge: "polkadot",
        kusama: "polkadot",
        polkadot: "polkadot",
        sora: "polkadot",
        statemine: "polkadot",
        statemint: "polkadot",
        westmint: "polkadot",
      };
    },
    9430: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.knownLedger = void 0));
      a.knownLedger = {
        acala: 787,
        ajuna: 354,
        "aleph-node": 643,
        astar: 810,
        bifrost: 788,
        "bifrost-kusama": 788,
        centrifuge: 747,
        composable: 354,
        darwinia: 354,
        "dock-mainnet": 594,
        edgeware: 523,
        enjin: 1155,
        equilibrium: 99999997,
        genshiro: 99999996,
        hydradx: 354,
        "interlay-parachain": 354,
        karura: 686,
        khala: 434,
        kusama: 434,
        matrixchain: 1155,
        nodle: 1003,
        origintrail: 354,
        parallel: 354,
        pendulum: 354,
        phala: 354,
        picasso: 434,
        polkadex: 799,
        polkadot: 354,
        polymesh: 595,
        quartz: 631,
        sora: 617,
        stafi: 907,
        statemine: 434,
        statemint: 354,
        ternoa: 995,
        unique: 661,
        vtb: 694,
        xxnetwork: 1955,
        zeitgeist: 354,
      };
    },
    9431: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.knownTestnet = void 0));
      a.knownTestnet = {
        "": !0,
        "cess-testnet": !0,
        "dock-testnet": !0,
        jupiter: !0,
        "mathchain-testnet": !0,
        p3dt: !0,
        subspace_testnet: !0,
        "zero-alphaville": !0,
      };
    },
    9501: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = c(6524);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
      var f = c(9506);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
    },
    9502: function (e, a, c) {
      "use strict";
      c(9503);
    },
    9503: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
    },
    9504: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
    },
    9505: function (e, a, c) {
      "use strict";
      var t;
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.TypeDefInfo = void 0),
        (function (e) {
          ((e[(e["BTreeMap"] = 0)] = "BTreeMap"),
            (e[(e["BTreeSet"] = 1)] = "BTreeSet"),
            (e[(e["Compact"] = 2)] = "Compact"),
            (e[(e["DoNotConstruct"] = 3)] = "DoNotConstruct"),
            (e[(e["Enum"] = 4)] = "Enum"),
            (e[(e["HashMap"] = 5)] = "HashMap"),
            (e[(e["Int"] = 6)] = "Int"),
            (e[(e["Linkage"] = 7)] = "Linkage"),
            (e[(e["Null"] = 8)] = "Null"),
            (e[(e["Option"] = 9)] = "Option"),
            (e[(e["Plain"] = 10)] = "Plain"),
            (e[(e["Range"] = 11)] = "Range"),
            (e[(e["RangeInclusive"] = 12)] = "RangeInclusive"),
            (e[(e["Result"] = 13)] = "Result"),
            (e[(e["Set"] = 14)] = "Set"),
            (e[(e["Si"] = 15)] = "Si"),
            (e[(e["Struct"] = 16)] = "Struct"),
            (e[(e["Tuple"] = 17)] = "Tuple"),
            (e[(e["UInt"] = 18)] = "UInt"),
            (e[(e["Vec"] = 19)] = "Vec"),
            (e[(e["VecFixed"] = 20)] = "VecFixed"),
            (e[(e["WrapperKeepOpaque"] = 21)] = "WrapperKeepOpaque"),
            (e[(e["WrapperOpaque"] = 22)] = "WrapperOpaque"));
        })(t || (a.TypeDefInfo = t = {})));
    },
    9506: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createTypeUnsafe = i));
      var t = c(2855),
        f = c(2757),
        n = c(6524);
      function d(e, a) {
        const c = e.toU8a(),
          t = e.toRawType(),
          n =
            (0, f.u8aEq)(c, a) ||
            (["Bytes", "Text", "Type"].includes(t) && a.length === e.length) ||
            (e.isEmpty && a.every((e) => !e));
        if (!n)
          throw new Error(
            `${t}:: Decoded input doesn't match input, received ${(0, f.u8aToHex)(a, 512)} (${a.length} bytes), created ${(0, f.u8aToHex)(c, 512)} (${c.length} bytes)`,
          );
      }
      function r(e, a) {
        let [c] = a;
        (0, f.isU8a)(c) ? d(e, c) : (0, f.isHex)(c) && d(e, (0, f.u8aToU8a)(c));
      }
      function b(e, a, c, f) {
        void 0 === c && (c = []);
        let {
          blockHash: n,
          isFallback: d,
          isOptional: b,
          isPedantic: o,
        } = void 0 === f ? {} : f;
        const s = new (b ? t.Option.with(a) : a)(e, ...c);
        return (
          o && r(s, c),
          n && (s.createdAtHash = i(e, "BlockHash", [n])),
          d && (s.isStorageFallback = !0),
          s
        );
      }
      function i(e, a, c, t) {
        var f;
        (void 0 === c && (c = []), void 0 === t && (t = {}));
        let d = null,
          r = null;
        try {
          return ((d = (0, n.createClassUnsafe)(e, a)), b(e, d, c, t));
        } catch (i) {
          r = new Error(`createType(${a}):: ${i.message}`);
        }
        if (null !== (f = d) && void 0 !== f && f.__fallbackType)
          try {
            return (
              (d = (0, n.createClassUnsafe)(e, d.__fallbackType)),
              b(e, d, c, t)
            );
          } catch {}
        throw r;
      }
    },
    9507: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = c(9508);
      Object.keys(t).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === t[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            }));
      });
      var f = c(6525);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === f[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      var n = c(6526);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === n[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var d = c(9509);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in a && a[e] === d[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
    },
    9508: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.encodeTypeDef = x),
        (a.paramsNotation = r),
        (a.withTypeString = u));
      var t = c(2757),
        f = c(4768);
      const n = (e) => e.toString(),
        d = [
          "BTreeMap",
          "BTreeSet",
          "Compact",
          "HashMap",
          "Option",
          "Result",
          "Vec",
        ];
      function r(e, a, c) {
        return (
          void 0 === c && (c = n),
          `${e}${a ? `<${(Array.isArray(a) ? a : [a]).map(c).join(", ")}>` : ""}`
        );
      }
      function b(e, a, c) {
        const { info: n, sub: d } = a;
        switch (n) {
          case f.TypeDefInfo.BTreeMap:
          case f.TypeDefInfo.BTreeSet:
          case f.TypeDefInfo.Compact:
          case f.TypeDefInfo.HashMap:
          case f.TypeDefInfo.Linkage:
          case f.TypeDefInfo.Option:
          case f.TypeDefInfo.Range:
          case f.TypeDefInfo.RangeInclusive:
          case f.TypeDefInfo.Result:
          case f.TypeDefInfo.Vec:
          case f.TypeDefInfo.WrapperKeepOpaque:
          case f.TypeDefInfo.WrapperOpaque:
            return r(c, d, (a) => x(e, a));
        }
        throw new Error(`Unable to encode ${(0, t.stringify)(a)} with params`);
      }
      function i(e, a, c, f) {
        const n = a.map((e) => {
          let { name: a } = e;
          return a;
        });
        if (!n.every((e) => !!e))
          throw new Error(
            "Subtypes does not have consistent names, " + n.join(", "),
          );
        const d = (0, t.objectSpread)({}, f);
        for (let r = 0, b = a.length; r < b; r++) {
          const c = a[r];
          if (!c.name)
            throw new Error("No name found in " + (0, t.stringify)(c));
          d[c.name] = x(e, c);
        }
        return (0, t.stringify)(c ? { _enum: d } : d);
      }
      const o = {
        [f.TypeDefInfo.BTreeMap]: (e, a) => b(e, a, "BTreeMap"),
        [f.TypeDefInfo.BTreeSet]: (e, a) => b(e, a, "BTreeSet"),
        [f.TypeDefInfo.Compact]: (e, a) => b(e, a, "Compact"),
        [f.TypeDefInfo.DoNotConstruct]: (e, a) => {
          let { displayName: c, lookupIndex: f, lookupName: n } = a;
          return `DoNotConstruct<${n || c || ((0, t.isUndefined)(f) ? "Unknown" : e.createLookupType(f))}>`;
        },
        [f.TypeDefInfo.Enum]: (e, a) => {
          let { sub: c } = a;
          if (!Array.isArray(c)) throw new Error("Unable to encode Enum type");
          return c.every((e) => {
            let { type: a } = e;
            return "Null" === a;
          })
            ? (0, t.stringify)({
                _enum: c.map((e, a) => {
                  let { name: c } = e;
                  return "" + (c || "Empty" + a);
                }),
              })
            : i(e, c, !0);
        },
        [f.TypeDefInfo.HashMap]: (e, a) => b(e, a, "HashMap"),
        [f.TypeDefInfo.Int]: (e, a) => {
          let { length: c = 32 } = a;
          return `Int<${c}>`;
        },
        [f.TypeDefInfo.Linkage]: (e, a) => b(e, a, "Linkage"),
        [f.TypeDefInfo.Null]: (e, a) => "Null",
        [f.TypeDefInfo.Option]: (e, a) => b(e, a, "Option"),
        [f.TypeDefInfo.Plain]: (e, a) => {
          let { displayName: c, type: t } = a;
          return c || t;
        },
        [f.TypeDefInfo.Range]: (e, a) => b(e, a, "Range"),
        [f.TypeDefInfo.RangeInclusive]: (e, a) => b(e, a, "RangeInclusive"),
        [f.TypeDefInfo.Result]: (e, a) => b(e, a, "Result"),
        [f.TypeDefInfo.Set]: (e, a) => {
          let { length: c = 8, sub: f } = a;
          if (!Array.isArray(f)) throw new Error("Unable to encode Set type");
          return (0, t.stringify)({
            _set: f.reduce(
              (e, a, c) => {
                let { index: f, name: n } = a;
                return (0, t.objectSpread)(e, {
                  ["" + (n || "Unknown" + (f || c))]: f || c,
                });
              },
              { _bitLength: c || 8 },
            ),
          });
        },
        [f.TypeDefInfo.Si]: (e, a) => {
          let { lookupName: c, type: t } = a;
          return c || t;
        },
        [f.TypeDefInfo.Struct]: (e, a) => {
          let { alias: c, sub: f } = a;
          if (!Array.isArray(f))
            throw new Error("Unable to encode Struct type");
          return i(
            e,
            f,
            !1,
            c
              ? {
                  _alias: [...c.entries()].reduce((e, a) => {
                    let [c, f] = a;
                    return (0, t.objectSpread)(e, { [c]: f });
                  }, {}),
                }
              : {},
          );
        },
        [f.TypeDefInfo.Tuple]: (e, a) => {
          let { sub: c } = a;
          if (!Array.isArray(c)) throw new Error("Unable to encode Tuple type");
          return `(${c.map((a) => x(e, a)).join(",")})`;
        },
        [f.TypeDefInfo.UInt]: (e, a) => {
          let { length: c = 32 } = a;
          return `UInt<${c}>`;
        },
        [f.TypeDefInfo.Vec]: (e, a) => b(e, a, "Vec"),
        [f.TypeDefInfo.VecFixed]: (e, a) => {
          let { length: c, sub: f } = a;
          if (!(0, t.isNumber)(c) || !f || Array.isArray(f))
            throw new Error("Unable to encode VecFixed type");
          return `[${f.type};${c}]`;
        },
        [f.TypeDefInfo.WrapperKeepOpaque]: (e, a) =>
          b(e, a, "WrapperKeepOpaque"),
        [f.TypeDefInfo.WrapperOpaque]: (e, a) => b(e, a, "WrapperOpaque"),
      };
      function s(e, a, c) {
        return (
          void 0 === c && (c = !0),
          c && a.lookupName ? a.lookupName : o[a.info](e, a)
        );
      }
      function x(e, a) {
        return a.displayName && !d.some((e) => a.displayName === e)
          ? a.displayName
          : s(e, a);
      }
      function u(e, a) {
        return (0, t.objectSpread)({}, a, { type: s(e, a, !1) });
      }
    },
    9509: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.XCM_MAPPINGS = void 0),
        (a.mapXcmTypes = n));
      var t = c(2757);
      const f = (a.XCM_MAPPINGS = [
        "AssetInstance",
        "Fungibility",
        "Junction",
        "Junctions",
        "MultiAsset",
        "MultiAssetFilter",
        "MultiLocation",
        "Response",
        "WildFungibility",
        "WildMultiAsset",
        "Xcm",
        "XcmError",
        "XcmOrder",
      ]);
      function n(e) {
        return f.reduce(
          (a, c) => (0, t.objectSpread)(a, { [c]: `${c}${e}` }),
          {},
        );
      }
    },
    9510: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createClass = f));
      var t = c(3123);
      function f(e, a) {
        return (0, t.createClassUnsafe)(e, a);
      }
    },
    9511: function (e, a, c) {
      "use strict";
      var t = c(3934),
        f = c(2757),
        n = c(5502);
      (0, f.detectPackage)(n.packageInfo, null, [t.packageInfo]);
    },
    9512: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = { packageInfo: !0, TypeDefInfo: !0 };
      (Object.defineProperty(a, "TypeDefInfo", {
        enumerable: !0,
        get: function () {
          return n.TypeDefInfo;
        },
      }),
        Object.defineProperty(a, "packageInfo", {
          enumerable: !0,
          get: function () {
            return f.packageInfo;
          },
        }));
      var f = c(5502),
        n = c(4768),
        d = c(6523);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === d[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
    },
    9513: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createType = f));
      var t = c(3123);
      function f(e, a) {
        for (
          var c = arguments.length, f = new Array(c > 2 ? c - 2 : 0), n = 2;
          n < c;
          n++
        )
          f[n - 2] = arguments[n];
        return (0, t.createTypeUnsafe)(e, a, f);
      }
    },
    9514: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.TypeRegistry = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(3123),
        r = c(2757),
        b = c(2961),
        i = c(9515),
        o = c(6527),
        s = g(c(6528)),
        x = g(c(5506)),
        u = c(6536),
        l = c(5507),
        p = c(5508),
        h = c(5509),
        y = c(4534);
      function g(e, a) {
        if ("function" == typeof WeakMap)
          var c = new WeakMap(),
            t = new WeakMap();
        return (g = function (e, a) {
          if (!a && e && e.__esModule) return e;
          var f,
            n,
            d = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return d;
          if ((f = a ? t : c)) {
            if (f.has(e)) return f.get(e);
            f.set(e, d);
          }
          for (const c in e)
            "default" !== c &&
              {}.hasOwnProperty.call(e, c) &&
              ((n =
                (f = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, c)) &&
              (n.get || n.set)
                ? f(d, c, n)
                : (d[c] = e[c]));
          return d;
        })(e, a);
      }
      const _ = new Uint8Array(2),
        m = (0, r.logger)("registry");
      function v(e, a) {
        return parseInt(e, 10) - parseInt(a, 10);
      }
      function T(e) {
        return e.toString();
      }
      function k(e, a) {
        const c = a.length,
          t = new Array(c);
        for (let f = 0; f < c; f++) t[f] = e.getTypeDef(a[f].type).type;
        return t;
      }
      function I(e) {
        const a = Object.keys(e);
        for (let c = 0, t = a.length; c < t; c++) delete e[a[c]];
      }
      function E(e) {
        let { index: a } = e;
        return a.toString();
      }
      function w(e, a, c, t) {
        let { lookup: f, pallets: n } = a;
        I(t);
        for (let d = 0, b = n.length; d < b; d++) {
          const { errors: e, index: a, name: b } = n[d];
          if (e.isSome) {
            const n = (0, r.stringCamelCase)(b);
            (0, r.lazyMethod)(t, c >= 12 ? a.toNumber() : d, () =>
              (0, y.lazyVariants)(f, e.unwrap(), E, (e) => {
                let { docs: a, fields: c, index: t, name: d } = e;
                return {
                  args: k(f, c),
                  docs: a.map(T),
                  fields: c,
                  index: t.toNumber(),
                  method: d.toString(),
                  name: d.toString(),
                  section: n,
                };
              }),
            );
          }
        }
      }
      function P(e, a, c, t) {
        let { lookup: f, pallets: n } = a;
        const d = n.filter(l.filterEventsSome);
        I(t);
        for (let b = 0, i = d.length; b < i; b++) {
          const { events: a, index: n, name: i } = d[b];
          (0, r.lazyMethod)(t, c >= 12 ? n.toNumber() : b, () =>
            (0, y.lazyVariants)(f, a.unwrap(), E, (a) => {
              const c = e.createType(
                "EventMetadataLatest",
                (0, r.objectSpread)({}, a, { args: k(f, a.fields) }),
              );
              return class extends o.GenericEventData {
                constructor(e, t) {
                  super(e, t, c, (0, r.stringCamelCase)(i), a.name.toString());
                }
              };
            }),
          );
        }
      }
      function S(e, a, c, t, f) {
        let { lookup: n, pallets: d } = a;
        const b = d.filter(l.filterCallsSome);
        (I(t), I(f));
        for (let i = 0, o = b.length; i < o; i++) {
          const { calls: a, index: d, name: o } = b[i],
            s = c >= 12 ? d.toNumber() : i,
            x = (0, r.stringCamelCase)(o),
            l = a.unwrap();
          (0, r.lazyMethod)(t, s, () =>
            (0, y.lazyVariants)(n, l, E, (a) =>
              (0, u.createCallFunction)(e, n, a, x, s),
            ),
          );
          const { path: p } = e.lookup.getSiType(l.type),
            h = p.findIndex((e) => e.eq("pallet"));
          if (-1 !== h) {
            const e = (0, r.stringCamelCase)(
              p
                .slice(0, h)
                .map((e, a) =>
                  0 === a ? e.replace(/^(frame|pallet)_/, "") : e,
                )
                .join(" "),
            );
            f[e] ? f[e].push(x) : (f[e] = [x]);
          }
        }
      }
      function O(e, a) {
        const c = e.getChainProperties(),
          t = (0, l.decorateConstants)(e, a.asLatest, a.version),
          f =
            t["system"] &&
            (t["system"]["sS58Prefix"] || t["system"]["ss58Prefix"]);
        if (!f) return c;
        const { isEthereum: n, tokenDecimals: d, tokenSymbol: r } = c || {};
        return e.createTypeUnsafe("ChainProperties", [
          { isEthereum: n, ss58Format: f, tokenDecimals: d, tokenSymbol: r },
        ]);
      }
      class TypeRegistry {
        constructor(e) {
          ((0, f.default)(this, "__internal__chainProperties", void 0),
            (0, f.default)(this, "__internal__classes", new Map()),
            (0, f.default)(this, "__internal__definitions", new Map()),
            (0, f.default)(this, "__internal__firstCallIndex", null),
            (0, f.default)(this, "__internal__hasher", b.blake2AsU8a),
            (0, f.default)(this, "__internal__knownTypes", {}),
            (0, f.default)(this, "__internal__lookup", void 0),
            (0, f.default)(this, "__internal__metadata", void 0),
            (0, f.default)(this, "__internal__metadataVersion", 0),
            (0, f.default)(
              this,
              "__internal__signedExtensions",
              i.fallbackExtensions,
            ),
            (0, f.default)(this, "__internal__unknownTypes", new Map()),
            (0, f.default)(this, "__internal__userExtensions", void 0),
            (0, f.default)(this, "__internal__knownDefaults", void 0),
            (0, f.default)(this, "__internal__knownDefaultsEntries", void 0),
            (0, f.default)(this, "__internal__knownDefinitions", void 0),
            (0, f.default)(this, "__internal__metadataCalls", {}),
            (0, f.default)(this, "__internal__metadataErrors", {}),
            (0, f.default)(this, "__internal__metadataEvents", {}),
            (0, f.default)(this, "__internal__moduleMap", {}),
            (0, f.default)(this, "createdAtHash", void 0),
            (0, f.default)(this, "__internal__registerObject", (e) => {
              const a = Object.entries(e);
              for (let c = 0, t = a.length; c < t; c++) {
                const [e, t] = a[c];
                if ((0, r.isFunction)(t)) this.__internal__classes.set(e, t);
                else {
                  const a = (0, r.isString)(t) ? t : (0, r.stringify)(t);
                  if (e === a)
                    throw new Error(
                      `Unable to register circular ${e} === ${a}`,
                    );
                  (this.__internal__classes.has(e) &&
                    this.__internal__classes.delete(e),
                    this.__internal__definitions.set(e, a));
                }
              }
            }),
            (0, f.default)(this, "__internal__registerLookup", (e) => {
              this.setLookup(e);
              let a = null;
              if (this.hasType("SpWeightsWeightV2Weight")) {
                const e = this.createType("SpWeightsWeightV2Weight");
                a =
                  e.refTime && e.proofSize
                    ? "SpWeightsWeightV2Weight"
                    : "WeightV1";
              } else (0, r.isBn)(this.createType("Weight")) || (a = "WeightV1");
              a && this.register({ Weight: a });
            }),
            (this.__internal__knownDefaults = (0, r.objectSpread)(
              {
                Json: n.Json,
                Metadata: p.Metadata,
                PortableRegistry: h.PortableRegistry,
                Raw: n.Raw,
              },
              s,
            )),
            (this.__internal__knownDefaultsEntries = Object.entries(
              this.__internal__knownDefaults,
            )),
            (this.__internal__knownDefinitions = x));
          const a = Object.values(this.__internal__knownDefinitions);
          for (let c = 0, t = a.length; c < t; c++) this.register(a[c].types);
          e && (this.createdAtHash = this.createType("BlockHash", e));
        }
        get chainDecimals() {
          var e;
          if (
            null !== (e = this.__internal__chainProperties) &&
            void 0 !== e &&
            e.tokenDecimals.isSome
          ) {
            const e = this.__internal__chainProperties.tokenDecimals.unwrap();
            if (e.length) return e.map((e) => e.toNumber());
          }
          return [12];
        }
        get chainIsEthereum() {
          var e;
          return (
            (null === (e = this.__internal__chainProperties) || void 0 === e
              ? void 0
              : e.isEthereum.isTrue) || !1
          );
        }
        get chainSS58() {
          var e;
          return null !== (e = this.__internal__chainProperties) &&
            void 0 !== e &&
            e.ss58Format.isSome
            ? this.__internal__chainProperties.ss58Format.unwrap().toNumber()
            : void 0;
        }
        get chainTokens() {
          var e;
          if (
            null !== (e = this.__internal__chainProperties) &&
            void 0 !== e &&
            e.tokenSymbol.isSome
          ) {
            const e = this.__internal__chainProperties.tokenSymbol.unwrap();
            if (e.length) return e.map(T);
          }
          return [r.formatBalance.getDefaults().unit];
        }
        get firstCallIndex() {
          return this.__internal__firstCallIndex || _;
        }
        isLookupType(e) {
          return /Lookup\d+$/.test(e);
        }
        createLookupType(e) {
          return "Lookup" + ("number" === typeof e ? e : e.toNumber());
        }
        get knownTypes() {
          return this.__internal__knownTypes;
        }
        get lookup() {
          return (0, r.assertReturn)(
            this.__internal__lookup,
            "PortableRegistry has not been set on this registry",
          );
        }
        get metadata() {
          return (0, r.assertReturn)(
            this.__internal__metadata,
            "Metadata has not been set on this registry",
          );
        }
        get unknownTypes() {
          return [...this.__internal__unknownTypes.keys()];
        }
        get signedExtensions() {
          return this.__internal__signedExtensions;
        }
        clearCache() {
          this.__internal__classes = new Map();
        }
        createClass(e) {
          return (0, d.createClassUnsafe)(this, e);
        }
        createClassUnsafe(e) {
          return (0, d.createClassUnsafe)(this, e);
        }
        createType(e) {
          for (
            var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), t = 1;
            t < a;
            t++
          )
            c[t - 1] = arguments[t];
          return (0, d.createTypeUnsafe)(this, e, c);
        }
        createTypeUnsafe(e, a, c) {
          return (0, d.createTypeUnsafe)(this, e, a, c);
        }
        findMetaCall(e) {
          const [a, c] = [e[0], e[1]];
          return (0, r.assertReturn)(
            this.__internal__metadataCalls["" + a] &&
              this.__internal__metadataCalls["" + a]["" + c],
            () =>
              `findMetaCall: Unable to find Call with index [${a}, ${c}]/[${e.toString()}]`,
          );
        }
        findMetaError(e) {
          const [a, c] = (0, r.isU8a)(e)
            ? [e[0], e[1]]
            : [
                e.index.toNumber(),
                (0, r.isU8a)(e.error) ? e.error[0] : e.error.toNumber(),
              ];
          return (0, r.assertReturn)(
            this.__internal__metadataErrors["" + a] &&
              this.__internal__metadataErrors["" + a]["" + c],
            () =>
              `findMetaError: Unable to find Error with index [${a}, ${c}]/[${e.toString()}]`,
          );
        }
        findMetaEvent(e) {
          const [a, c] = [e[0], e[1]];
          return (0, r.assertReturn)(
            this.__internal__metadataEvents["" + a] &&
              this.__internal__metadataEvents["" + a]["" + c],
            () =>
              `findMetaEvent: Unable to find Event with index [${a}, ${c}]/[${e.toString()}]`,
          );
        }
        get(e, a, c) {
          return this.getUnsafe(e, a, c);
        }
        getUnsafe(e, a, c) {
          let t =
            this.__internal__classes.get(e) ||
            this.__internal__knownDefaults[e];
          if (!t) {
            const f = this.__internal__definitions.get(e);
            let b;
            (f
              ? (b = (0, d.createClassUnsafe)(this, f))
              : c
                ? (b = (0, d.constructTypeClass)(this, c))
                : a &&
                  (m.warn(
                    `Unable to resolve type ${e}, it will fail on construction`,
                  ),
                  this.__internal__unknownTypes.set(e, !0),
                  (b = n.DoNotConstruct.with(e))),
              b &&
                ((t = class extends b {}),
                this.__internal__classes.set(e, t),
                c &&
                  (0, r.isNumber)(c.lookupIndex) &&
                  this.__internal__classes.set(
                    this.createLookupType(c.lookupIndex),
                    t,
                  )));
          }
          return t;
        }
        getChainProperties() {
          return this.__internal__chainProperties;
        }
        getClassName(e) {
          const a = [];
          for (const [c, t] of this.__internal__knownDefaultsEntries)
            e === t && a.push(c);
          for (const [c, t] of this.__internal__classes.entries())
            e === t && a.push(c);
          return a.length ? a.sort().reverse()[0] : void 0;
        }
        getDefinition(e) {
          return this.__internal__definitions.get(e);
        }
        getModuleInstances(e, a) {
          var c, t, f, n, d;
          return (
            (null === (c = this.__internal__knownTypes) ||
            void 0 === c ||
            null === (t = c.typesBundle) ||
            void 0 === t ||
            null === (f = t.spec) ||
            void 0 === f ||
            null === (n = f[e.toString()]) ||
            void 0 === n ||
            null === (d = n.instances) ||
            void 0 === d
              ? void 0
              : d[a]) || this.__internal__moduleMap[a]
          );
        }
        getOrThrow(e) {
          const a = this.get(e);
          if (!a) throw new Error(`type ${e} not found`);
          return a;
        }
        getOrUnknown(e) {
          return this.get(e, !0);
        }
        getSignedExtensionExtra() {
          return (0, i.expandExtensionTypes)(
            this.__internal__signedExtensions,
            "payload",
            this.__internal__userExtensions,
          );
        }
        getSignedExtensionTypes() {
          return (0, i.expandExtensionTypes)(
            this.__internal__signedExtensions,
            "extrinsic",
            this.__internal__userExtensions,
          );
        }
        hasClass(e) {
          return (
            this.__internal__classes.has(e) ||
            !!this.__internal__knownDefaults[e]
          );
        }
        hasDef(e) {
          return this.__internal__definitions.has(e);
        }
        hasType(e) {
          return (
            !this.__internal__unknownTypes.get(e) &&
            (this.hasClass(e) || this.hasDef(e))
          );
        }
        hash(e) {
          return this.createType("CodecHash", this.__internal__hasher(e));
        }
        register(e, a) {
          if ((0, r.isFunction)(e)) this.__internal__classes.set(e.name, e);
          else if ((0, r.isString)(e)) {
            if (!(0, r.isFunction)(a))
              throw new Error(
                `Expected class definition passed to '${e}' registration`,
              );
            if (e === a.toString())
              throw new Error(`Unable to register circular ${e} === ${e}`);
            this.__internal__classes.set(e, a);
          } else this.__internal__registerObject(e);
        }
        setChainProperties(e) {
          e && (this.__internal__chainProperties = e);
        }
        setHasher(e) {
          this.__internal__hasher = e || b.blake2AsU8a;
        }
        setKnownTypes(e) {
          this.__internal__knownTypes = e;
        }
        setLookup(e) {
          ((this.__internal__lookup = e), e.register());
        }
        setMetadata(e, a, c, t) {
          ((this.__internal__metadata = e.asLatest),
            (this.__internal__metadataVersion = e.version),
            (this.__internal__firstCallIndex = null),
            this.__internal__registerLookup(this.__internal__metadata.lookup),
            S(
              this,
              this.__internal__metadata,
              this.__internal__metadataVersion,
              this.__internal__metadataCalls,
              this.__internal__moduleMap,
            ),
            w(
              this,
              this.__internal__metadata,
              this.__internal__metadataVersion,
              this.__internal__metadataErrors,
            ),
            P(
              this,
              this.__internal__metadata,
              this.__internal__metadataVersion,
              this.__internal__metadataEvents,
            ));
          const [f] = Object.keys(this.__internal__metadataCalls).sort(v);
          if (f) {
            const [e] = Object.keys(this.__internal__metadataCalls[f]).sort(v);
            e &&
              (this.__internal__firstCallIndex = new Uint8Array([
                parseInt(f, 10),
                parseInt(e, 10),
              ]));
          }
          (this.setSignedExtensions(
            a ||
              (this.__internal__metadata.extrinsic.version.gt(r.BN_ZERO)
                ? this.__internal__metadata.extrinsic.signedExtensions.map(
                    (e) => {
                      let { identifier: a } = e;
                      return a.toString();
                    },
                  )
                : i.fallbackExtensions),
            c,
            t,
          ),
            this.setChainProperties(O(this, e)));
        }
        setSignedExtensions(e, a, c) {
          if (
            (void 0 === e && (e = i.fallbackExtensions),
            (this.__internal__signedExtensions = e),
            (this.__internal__userExtensions = a),
            !c)
          ) {
            const e = (0, i.findUnknownExtensions)(
              this.__internal__signedExtensions,
              this.__internal__userExtensions,
            );
            e.length &&
              m.warn(
                `Unknown signed extensions ${e.join(", ")} found, treating them as no-effect`,
              );
          }
        }
      }
      a.TypeRegistry = TypeRegistry;
    },
    9515: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.allExtensions = void 0),
        (a.expandExtensionTypes = o),
        (a.fallbackExtensions = void 0),
        (a.findUnknownExtensions = i));
      var t = c(2757),
        f = c(9516),
        n = c(9517),
        d = c(9518),
        r = c(9519);
      const b = (a.allExtensions = (0, t.objectSpread)(
        {},
        r.substrate,
        f.polkadot,
        n.shell,
        d.statemint,
      ));
      a.fallbackExtensions = [
        "CheckVersion",
        "CheckGenesis",
        "CheckEra",
        "CheckNonce",
        "CheckWeight",
        "ChargeTransactionPayment",
        "CheckBlockGasLimit",
      ];
      function i(e, a) {
        void 0 === a && (a = {});
        const c = [...Object.keys(b), ...Object.keys(a)];
        return e.filter((e) => !c.includes(e));
      }
      function o(e, a, c) {
        return (
          void 0 === c && (c = {}),
          e
            .map((e) => c[e] || b[e])
            .filter((e) => !!e)
            .reduce((e, c) => (0, t.objectSpread)(e, c[a]), {})
        );
      }
    },
    9516: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.polkadot = void 0));
      var t = c(5503);
      a.polkadot = {
        LimitParathreadCommits: t.emptyCheck,
        OnlyStakingAndClaims: t.emptyCheck,
        PrevalidateAttests: t.emptyCheck,
        RestrictFunctionality: t.emptyCheck,
        TransactionCallFilter: t.emptyCheck,
        ValidateDoubleVoteReports: t.emptyCheck,
      };
    },
    9517: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.shell = void 0));
      var t = c(5503);
      a.shell = { DisallowSigned: t.emptyCheck };
    },
    9518: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.statemint = void 0));
      a.statemint = {
        ChargeAssetTxPayment: {
          extrinsic: { tip: "Compact<Balance>", assetId: "TAssetConversion" },
          payload: {},
        },
      };
    },
    9519: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.substrate = void 0));
      var t = c(5503);
      const f = {
          extrinsic: { mode: "u8" },
          payload: { metadataHash: "Option<[u8;32]>" },
        },
        n = {
          extrinsic: { era: "ExtrinsicEra" },
          payload: { blockHash: "Hash" },
        },
        d = { extrinsic: { tip: "Compact<Balance>" }, payload: {} };
      a.substrate = {
        ChargeTransactionPayment: d,
        CheckBlockGasLimit: t.emptyCheck,
        CheckEra: n,
        CheckGenesis: { extrinsic: {}, payload: { genesisHash: "Hash" } },
        CheckMetadataHash: f,
        CheckMortality: n,
        CheckNonZeroSender: t.emptyCheck,
        CheckNonce: { extrinsic: { nonce: "Compact<Index>" }, payload: {} },
        CheckSpecVersion: { extrinsic: {}, payload: { specVersion: "u32" } },
        CheckTxVersion: {
          extrinsic: {},
          payload: { transactionVersion: "u32" },
        },
        CheckVersion: { extrinsic: {}, payload: { specVersion: "u32" } },
        CheckWeight: t.emptyCheck,
        LockStakingStatus: t.emptyCheck,
        SkipCheckIfFeeless: d,
        ValidateEquivocationReport: t.emptyCheck,
      };
    },
    9520: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = {
        GenericExtrinsic: !0,
        GenericExtrinsicEra: !0,
        GenericImmortalEra: !0,
        GenericMortalEra: !0,
        GenericExtrinsicPayload: !0,
        GenericExtrinsicPayloadUnknown: !0,
        GenericExtrinsicUnknown: !0,
        GenericSignerPayload: !0,
      };
      (Object.defineProperty(a, "GenericExtrinsic", {
        enumerable: !0,
        get: function () {
          return f.GenericExtrinsic;
        },
      }),
        Object.defineProperty(a, "GenericExtrinsicEra", {
          enumerable: !0,
          get: function () {
            return n.GenericExtrinsicEra;
          },
        }),
        Object.defineProperty(a, "GenericExtrinsicPayload", {
          enumerable: !0,
          get: function () {
            return d.GenericExtrinsicPayload;
          },
        }),
        Object.defineProperty(a, "GenericExtrinsicPayloadUnknown", {
          enumerable: !0,
          get: function () {
            return r.GenericExtrinsicPayloadUnknown;
          },
        }),
        Object.defineProperty(a, "GenericExtrinsicUnknown", {
          enumerable: !0,
          get: function () {
            return b.GenericExtrinsicUnknown;
          },
        }),
        Object.defineProperty(a, "GenericImmortalEra", {
          enumerable: !0,
          get: function () {
            return n.ImmortalEra;
          },
        }),
        Object.defineProperty(a, "GenericMortalEra", {
          enumerable: !0,
          get: function () {
            return n.MortalEra;
          },
        }),
        Object.defineProperty(a, "GenericSignerPayload", {
          enumerable: !0,
          get: function () {
            return i.GenericSignerPayload;
          },
        }));
      var f = c(9521),
        n = c(9522),
        d = c(9523),
        r = c(9524),
        b = c(9525),
        i = c(9526),
        o = c(9527);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === o[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
    },
    9521: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericExtrinsic = void 0),
        Object.defineProperty(a, "LATEST_EXTRINSIC_VERSION", {
          enumerable: !0,
          get: function () {
            return r.EXTRINSIC_VERSION;
          },
        }));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757),
        r = c(4527),
        b = c(4535);
      const i = [
        "ExtrinsicUnknown",
        "ExtrinsicUnknown",
        "ExtrinsicUnknown",
        "ExtrinsicUnknown",
        "ExtrinsicV4",
      ];
      function o(e, a, c) {
        if (a instanceof GenericExtrinsic) return a.unwrap();
        const t = (c & b.BIT_SIGNED) === b.BIT_SIGNED,
          f = i[c & b.UNMASK_VERSION] || i[0];
        return e.createTypeUnsafe(f, [a, { isSigned: t, version: c }]);
      }
      function s(e, a, c) {
        return (
          void 0 === c && (c = b.DEFAULT_VERSION),
          (0, d.isU8a)(a) || Array.isArray(a) || (0, d.isHex)(a)
            ? x(e, (0, d.u8aToU8a)(a), c)
            : a instanceof e.createClassUnsafe("Call")
              ? o(e, { method: a }, c)
              : o(e, a, c)
        );
      }
      function x(e, a, c) {
        if (!a.length) return o(e, new Uint8Array(), c);
        const [t, f] = (0, d.compactFromU8a)(a),
          n = t + f.toNumber();
        if (n > a.length)
          throw new Error(
            `Extrinsic: length less than remainder, expected at least ${n}, found ${a.length}`,
          );
        const r = a.subarray(t, n);
        return o(e, r.subarray(1), r[0]);
      }
      class ExtrinsicBase extends n.AbstractBase {
        constructor(e, a, c) {
          super(e, a, c);
          const t = Object.keys(e.getSignedExtensionTypes()),
            f = (e) => this.inner.signature[e];
          for (let n = 0, r = t.length; n < r; n++)
            (0, d.objectProperty)(this, t[n], f);
        }
        get args() {
          return this.method.args;
        }
        get argsDef() {
          return this.method.argsDef;
        }
        get callIndex() {
          return this.method.callIndex;
        }
        get data() {
          return this.method.data;
        }
        get era() {
          return this.inner.signature.era;
        }
        get encodedLength() {
          return this.toU8a().length;
        }
        get isSigned() {
          return this.inner.signature.isSigned;
        }
        get length() {
          return this.toU8a(!0).length;
        }
        get meta() {
          return this.method.meta;
        }
        get method() {
          return this.inner.method;
        }
        get nonce() {
          return this.inner.signature.nonce;
        }
        get signature() {
          return this.inner.signature.signature;
        }
        get signer() {
          return this.inner.signature.signer;
        }
        get tip() {
          return this.inner.signature.tip;
        }
        get assetId() {
          return this.inner.signature.assetId;
        }
        get metadataHash() {
          return this.inner.signature.metadataHash;
        }
        get type() {
          return this.inner.version;
        }
        get inner() {
          return this.unwrap();
        }
        get version() {
          return this.type | (this.isSigned ? b.BIT_SIGNED : b.BIT_UNSIGNED);
        }
        is(e) {
          return this.method.is(e);
        }
        unwrap() {
          return super.unwrap();
        }
      }
      class GenericExtrinsic extends ExtrinsicBase {
        constructor(e, a, c) {
          let { version: t } = void 0 === c ? {} : c;
          (super(e, s(e, a, t)),
            (0, f.default)(this, "__internal__hashCache", void 0));
        }
        get hash() {
          return (
            this.__internal__hashCache ||
              (this.__internal__hashCache = super.hash),
            this.__internal__hashCache
          );
        }
        addSignature(e, a, c) {
          return (
            this.inner.addSignature(e, a, c),
            (this.__internal__hashCache = void 0),
            this
          );
        }
        inspect() {
          const e = (0, d.u8aConcat)(...this.toU8aInner());
          return {
            inner: this.isSigned
              ? this.inner.inspect().inner
              : this.inner.method.inspect().inner,
            outer: [
              (0, d.compactToU8a)(e.length),
              new Uint8Array([this.version]),
            ],
          };
        }
        sign(e, a) {
          return (
            this.inner.sign(e, a),
            (this.__internal__hashCache = void 0),
            this
          );
        }
        signFake(e, a) {
          return (
            this.inner.signFake(e, a),
            (this.__internal__hashCache = void 0),
            this
          );
        }
        toHex(e) {
          return (0, d.u8aToHex)(this.toU8a(e));
        }
        toHuman(e, a) {
          return (0, d.objectSpread)(
            {},
            { isSigned: this.isSigned, method: this.method.toHuman(e, a) },
            this.isSigned
              ? {
                  assetId: this.assetId ? this.assetId.toHuman(e, a) : null,
                  era: this.era.toHuman(e, a),
                  metadataHash: this.metadataHash
                    ? this.metadataHash.toHex()
                    : null,
                  nonce: this.nonce.toHuman(e, a),
                  signature: this.signature.toHex(),
                  signer: this.signer.toHuman(e, a),
                  tip: this.tip.toHuman(e, a),
                }
              : null,
          );
        }
        toJSON() {
          return this.toHex();
        }
        toRawType() {
          return "Extrinsic";
        }
        toU8a(e) {
          const a = (0, d.u8aConcat)(...this.toU8aInner());
          return e ? a : (0, d.compactAddLength)(a);
        }
        toU8aInner() {
          return [new Uint8Array([this.version]), this.inner.toU8a()];
        }
      }
      ((a.GenericExtrinsic = GenericExtrinsic),
        (0, f.default)(
          GenericExtrinsic,
          "LATEST_EXTRINSIC_VERSION",
          r.EXTRINSIC_VERSION,
        ));
    },
    9522: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.MortalEra = a.ImmortalEra = a.GenericExtrinsicEra = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(4535);
      function d(e) {
        const a = e.toString(2);
        let c = 0;
        while ("0" === a[a.length - 1 - c]) c++;
        return c;
      }
      function r(e, a) {
        if ((0, f.isU8a)(a) || (0, f.isHex)(a) || Array.isArray(a))
          return i(e, (0, f.u8aToU8a)(a));
        if (!a) return [new t.U64(e), new t.U64(e)];
        if ((0, f.isObject)(a)) return b(e, a);
        throw new Error("Invalid data passed to Mortal era");
      }
      function b(e, a) {
        const { current: c, period: f } = a;
        let n = Math.pow(2, Math.ceil(Math.log2(f)));
        n = Math.min(Math.max(n, 4), 65536);
        const d = c % n,
          r = Math.max(n >> 12, 1),
          b = (d / r) * r;
        return [new t.U64(e, n), new t.U64(e, b)];
      }
      function i(e, a) {
        if (0 === a.length) return [new t.U64(e), new t.U64(e)];
        const c = (0, f.u8aToBn)(a.subarray(0, 1)).toNumber(),
          n = (0, f.u8aToBn)(a.subarray(1, 2)).toNumber(),
          d = c + (n << 8),
          r = 2 << (d % 16),
          b = Math.max(r >> 12, 1),
          i = (d >> 4) * b;
        if (r < 4 || i >= r)
          throw new Error("Invalid data passed to Mortal era");
        return [new t.U64(e, r), new t.U64(e, i)];
      }
      function o(e) {
        if ((void 0 === e && (e = new Uint8Array()), (0, f.isU8a)(e)))
          return e.length && 0 !== e[0]
            ? new Uint8Array([1, e[0], e[1]])
            : new Uint8Array([0]);
        if (!e) return new Uint8Array([0]);
        if (e instanceof GenericExtrinsicEra) return o(e.toU8a());
        if ((0, f.isHex)(e)) return o((0, f.hexToU8a)(e));
        if ((0, f.isObject)(e)) {
          const a = Object.entries(e).map((e) => {
              let [a, c] = e;
              return [a.toLowerCase(), c];
            }),
            c = a.find((e) => {
              let [a] = e;
              return "mortalera" === a.toLowerCase();
            }),
            t = a.find((e) => {
              let [a] = e;
              return "immortalera" === a.toLowerCase();
            });
          return c
            ? { MortalEra: c[1] }
            : t
              ? { ImmortalEra: t[1] }
              : { MortalEra: e };
        }
        throw new Error("Invalid data passed to Era");
      }
      class ImmortalEra extends t.Raw {
        constructor(e, a) {
          super(e, n.IMMORTAL_ERA);
        }
      }
      a.ImmortalEra = ImmortalEra;
      class MortalEra extends t.Tuple {
        constructor(e, a) {
          super(e, { period: t.U64, phase: t.U64 }, r(e, a));
        }
        get encodedLength() {
          return 2;
        }
        get period() {
          return this[0];
        }
        get phase() {
          return this[1];
        }
        toHuman() {
          return {
            period: (0, f.formatNumber)(this.period),
            phase: (0, f.formatNumber)(this.phase),
          };
        }
        toJSON() {
          return this.toHex();
        }
        toU8a(e) {
          const a = this.period.toNumber(),
            c =
              Math.min(15, Math.max(1, d(a) - 1)) +
              ((this.phase.toNumber() / Math.max(a >> 12, 1)) << 4);
          return new Uint8Array([255 & c, c >> 8]);
        }
        birth(e) {
          const a = this.phase.toNumber(),
            c = this.period.toNumber();
          return ~~((Math.max((0, f.bnToBn)(e).toNumber(), a) - a) / c) * c + a;
        }
        death(e) {
          return this.birth(e) + this.period.toNumber();
        }
      }
      a.MortalEra = MortalEra;
      class GenericExtrinsicEra extends t.Enum {
        constructor(e, a) {
          super(e, { ImmortalEra: ImmortalEra, MortalEra: MortalEra }, o(a));
        }
        get encodedLength() {
          return this.isImmortalEra
            ? this.asImmortalEra.encodedLength
            : this.asMortalEra.encodedLength;
        }
        get asImmortalEra() {
          if (!this.isImmortalEra)
            throw new Error(`Cannot convert '${this.type}' via asImmortalEra`);
          return this.inner;
        }
        get asMortalEra() {
          if (!this.isMortalEra)
            throw new Error(`Cannot convert '${this.type}' via asMortalEra`);
          return this.inner;
        }
        get isImmortalEra() {
          return 0 === this.index;
        }
        get isMortalEra() {
          return this.index > 0;
        }
        toU8a(e) {
          return this.isMortalEra
            ? this.asMortalEra.toU8a(e)
            : this.asImmortalEra.toU8a(e);
        }
      }
      a.GenericExtrinsicEra = GenericExtrinsicEra;
    },
    9523: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericExtrinsicPayload = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(4535);
      const d = [
        "ExtrinsicPayloadUnknown",
        "ExtrinsicPayloadUnknown",
        "ExtrinsicPayloadUnknown",
        "ExtrinsicPayloadUnknown",
        "ExtrinsicPayloadV4",
      ];
      function r(e, a, c) {
        return (
          void 0 === c && (c = n.DEFAULT_VERSION),
          a instanceof GenericExtrinsicPayload
            ? a.unwrap()
            : e.createTypeUnsafe(d[c] || d[0], [a, { version: c }])
        );
      }
      class GenericExtrinsicPayload extends t.AbstractBase {
        constructor(e, a, c) {
          let { version: t } = void 0 === c ? {} : c;
          super(e, r(e, a, t));
        }
        get blockHash() {
          return this.inner.blockHash;
        }
        get era() {
          return this.inner.era;
        }
        get genesisHash() {
          return (
            this.inner.genesisHash || this.registry.createTypeUnsafe("Hash", [])
          );
        }
        get method() {
          return this.inner.method;
        }
        get nonce() {
          return this.inner.nonce;
        }
        get specVersion() {
          return (
            this.inner.specVersion || this.registry.createTypeUnsafe("u32", [])
          );
        }
        get tip() {
          return (
            this.inner.tip ||
            this.registry.createTypeUnsafe("Compact<Balance>", [])
          );
        }
        get transactionVersion() {
          return (
            this.inner.transactionVersion ||
            this.registry.createTypeUnsafe("u32", [])
          );
        }
        get assetId() {
          return this.inner.assetId;
        }
        get metadataHash() {
          return this.inner.metadataHash;
        }
        eq(e) {
          return this.inner.eq(e);
        }
        sign(e) {
          const a = this.inner.sign(e);
          return { signature: (0, f.u8aToHex)(a) };
        }
        toHuman(e, a) {
          return this.inner.toHuman(e, a);
        }
        toJSON() {
          return this.toHex();
        }
        toRawType() {
          return "ExtrinsicPayload";
        }
        toString() {
          return this.toHex();
        }
        toU8a(e) {
          return super.toU8a(!!e && { method: !0 });
        }
      }
      a.GenericExtrinsicPayload = GenericExtrinsicPayload;
    },
    9524: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericExtrinsicPayloadUnknown = void 0));
      var t = c(2855);
      class GenericExtrinsicPayloadUnknown extends t.Struct {
        constructor(e, a, c) {
          let { version: t = 0 } = void 0 === c ? {} : c;
          throw (
            super(e, {}),
            new Error("Unsupported extrinsic payload version " + t)
          );
        }
      }
      a.GenericExtrinsicPayloadUnknown = GenericExtrinsicPayloadUnknown;
    },
    9525: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericExtrinsicUnknown = void 0));
      var t = c(2855),
        f = c(4535);
      class GenericExtrinsicUnknown extends t.Struct {
        constructor(e, a, c) {
          let { isSigned: t = !1, version: n = 0 } = void 0 === c ? {} : c;
          throw (
            super(e, {}),
            new Error(
              `Unsupported ${t ? "" : "un"}signed extrinsic version ${n & f.UNMASK_VERSION}`,
            )
          );
        }
      }
      a.GenericExtrinsicUnknown = GenericExtrinsicUnknown;
    },
    9526: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericSignerPayload = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757);
      const r = {
        address: "Address",
        assetId: "Option<TAssetConversion>",
        blockHash: "Hash",
        blockNumber: "BlockNumber",
        era: "ExtrinsicEra",
        genesisHash: "Hash",
        metadataHash: "Option<[u8;32]>",
        method: "Call",
        mode: "u8",
        nonce: "Compact<Index>",
        runtimeVersion: "RuntimeVersion",
        signedExtensions: "Vec<Text>",
        tip: "Compact<Balance>",
        version: "u8",
      };
      class GenericSignerPayload extends n.Struct {
        constructor(e, a) {
          const c = (0, d.objectSpread)(
            {},
            e.getSignedExtensionTypes(),
            e.getSignedExtensionExtra(),
          );
          (super(e, (0, d.objectSpread)({}, c, r), a),
            (0, f.default)(this, "__internal__extraTypes", void 0),
            (this.__internal__extraTypes = {}));
          const t = (e) => this.get(e);
          for (const [f, n] of Object.entries(c))
            (r[f] || (this.__internal__extraTypes[f] = n),
              (0, d.objectProperty)(this, f, t));
        }
        get address() {
          return this.getT("address");
        }
        get blockHash() {
          return this.getT("blockHash");
        }
        get blockNumber() {
          return this.getT("blockNumber");
        }
        get era() {
          return this.getT("era");
        }
        get genesisHash() {
          return this.getT("genesisHash");
        }
        get method() {
          return this.getT("method");
        }
        get nonce() {
          return this.getT("nonce");
        }
        get runtimeVersion() {
          return this.getT("runtimeVersion");
        }
        get signedExtensions() {
          return this.getT("signedExtensions");
        }
        get tip() {
          return this.getT("tip");
        }
        get assetId() {
          return this.getT("assetId");
        }
        get version() {
          return this.getT("version");
        }
        get mode() {
          return this.getT("mode");
        }
        get metadataHash() {
          return this.getT("metadataHash");
        }
        toPayload() {
          const e = {},
            a = Object.keys(this.__internal__extraTypes);
          for (let c = 0, t = a.length; c < t; c++) {
            const t = a[c],
              f = this.getT(t);
            (f instanceof n.Option && !f.isSome) || (e[t] = f.toJSON());
          }
          return (0, d.objectSpread)(e, {
            address: this.address.toString(),
            assetId: this.assetId ? this.assetId.toJSON() : null,
            blockHash: this.blockHash.toHex(),
            blockNumber: this.blockNumber.toHex(),
            era: this.era.toHex(),
            genesisHash: this.genesisHash.toHex(),
            metadataHash: this.metadataHash.isSome
              ? this.metadataHash.toHex()
              : null,
            method: this.method.toHex(),
            mode: this.mode.toNumber(),
            nonce: this.nonce.toHex(),
            signedExtensions: this.signedExtensions.map((e) => e.toString()),
            specVersion: this.runtimeVersion.specVersion.toHex(),
            tip: this.tip.toHex(),
            transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
            version: this.version.toNumber(),
          });
        }
        toRaw() {
          const e = this.toPayload(),
            a = (0, d.u8aToHex)(
              this.registry
                .createTypeUnsafe("ExtrinsicPayload", [
                  e,
                  { version: e.version },
                ])
                .toU8a({ method: !0 }),
            );
          return { address: e.address, data: a, type: "payload" };
        }
      }
      a.GenericSignerPayload = GenericSignerPayload;
    },
    9527: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "GenericExtrinsicPayloadV4", {
          enumerable: !0,
          get: function () {
            return f.GenericExtrinsicPayloadV4;
          },
        }),
        Object.defineProperty(a, "GenericExtrinsicSignatureV4", {
          enumerable: !0,
          get: function () {
            return n.GenericExtrinsicSignatureV4;
          },
        }),
        Object.defineProperty(a, "GenericExtrinsicV4", {
          enumerable: !0,
          get: function () {
            return t.GenericExtrinsicV4;
          },
        }));
      var t = c(4527),
        f = c(6529),
        n = c(9529);
    },
    9528: function (e, a, c) {
      "use strict";
      function t(e, a, c, t) {
        const f = c.length > 256 ? e.hash(c) : c;
        return a.sign(f, t);
      }
      (Object.defineProperty(a, "__esModule", { value: !0 }), (a.sign = t));
    },
    9529: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericExtrinsicSignatureV4 = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757),
        r = c(4535),
        b = c(6529);
      const i = new Uint8Array(256).fill(1);
      function o(e, a) {
        return e.createTypeUnsafe("Address", [
          (0, d.isU8a)(a) ? (0, d.u8aToHex)(a) : a,
        ]);
      }
      class GenericExtrinsicSignatureV4 extends n.Struct {
        constructor(e, a, c) {
          let { isSigned: t } = void 0 === c ? {} : c;
          const n = e.getSignedExtensionTypes();
          (super(
            e,
            (0, d.objectSpread)(
              { signer: "Address", signature: "ExtrinsicSignature" },
              n,
            ),
            GenericExtrinsicSignatureV4.decodeExtrinsicSignature(a, t),
          ),
            (0, f.default)(this, "__internal__signKeys", void 0),
            (this.__internal__signKeys = Object.keys(n)),
            (0, d.objectProperties)(this, this.__internal__signKeys, (e) =>
              this.get(e),
            ));
        }
        static decodeExtrinsicSignature(e, a) {
          return (
            void 0 === a && (a = !1),
            e && (e instanceof GenericExtrinsicSignatureV4 || a)
              ? e
              : r.EMPTY_U8A
          );
        }
        get encodedLength() {
          return this.isSigned ? super.encodedLength : 0;
        }
        get isSigned() {
          return !this.signature.isEmpty;
        }
        get era() {
          return this.getT("era");
        }
        get nonce() {
          return this.getT("nonce");
        }
        get signature() {
          return this.multiSignature.value || this.multiSignature;
        }
        get multiSignature() {
          return this.getT("signature");
        }
        get signer() {
          return this.getT("signer");
        }
        get tip() {
          return this.getT("tip");
        }
        get assetId() {
          return this.getT("assetId");
        }
        get metadataHash() {
          return this.getT("metadataHash");
        }
        _injectSignature(e, a, c) {
          for (let t = 0, f = this.__internal__signKeys.length; t < f; t++) {
            const e = this.__internal__signKeys[t],
              a = c.get(e);
            (0, d.isUndefined)(a) || this.set(e, a);
          }
          return (this.set("signer", e), this.set("signature", a), this);
        }
        addSignature(e, a, c) {
          return this._injectSignature(
            o(this.registry, e),
            this.registry.createTypeUnsafe("ExtrinsicSignature", [a]),
            new b.GenericExtrinsicPayloadV4(this.registry, c),
          );
        }
        createPayload(e, a) {
          const {
            era: c,
            runtimeVersion: { specVersion: t, transactionVersion: f },
          } = a;
          return new b.GenericExtrinsicPayloadV4(
            this.registry,
            (0, d.objectSpread)({}, a, {
              era: c || r.IMMORTAL_ERA,
              method: e.toHex(),
              specVersion: t,
              transactionVersion: f,
            }),
          );
        }
        sign(e, a, c) {
          if (null === a || void 0 === a || !a.addressRaw)
            throw new Error(
              "Expected a valid keypair for signing, found " +
                (0, d.stringify)(a),
            );
          const t = this.createPayload(e, c);
          return this._injectSignature(
            o(this.registry, a.addressRaw),
            this.registry.createTypeUnsafe("ExtrinsicSignature", [t.sign(a)]),
            t,
          );
        }
        signFake(e, a, c) {
          if (!a)
            throw new Error(
              "Expected a valid address for signing, found " +
                (0, d.stringify)(a),
            );
          const t = this.createPayload(e, c);
          return this._injectSignature(
            o(this.registry, a),
            this.registry.createTypeUnsafe("ExtrinsicSignature", [i]),
            t,
          );
        }
        toU8a(e) {
          return this.isSigned ? super.toU8a(e) : r.EMPTY_U8A;
        }
      }
      a.GenericExtrinsicSignatureV4 = GenericExtrinsicSignatureV4;
    },
    9530: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = {
        GenericAccountId: !0,
        GenericAccountId32: !0,
        GenericAccountId33: !0,
        GenericAccountIndex: !0,
        GenericBlock: !0,
        GenericCall: !0,
        GenericChainProperties: !0,
        GenericConsensusEngineId: !0,
        GenericEvent: !0,
        GenericEventData: !0,
        GenericLookupSource: !0,
        GenericAddress: !0,
        GenericMultiAddress: !0,
        GenericVote: !0,
      };
      (Object.defineProperty(a, "GenericAccountId", {
        enumerable: !0,
        get: function () {
          return f.GenericAccountId;
        },
      }),
        Object.defineProperty(a, "GenericAccountId32", {
          enumerable: !0,
          get: function () {
            return f.GenericAccountId;
          },
        }),
        Object.defineProperty(a, "GenericAccountId33", {
          enumerable: !0,
          get: function () {
            return f.GenericAccountId33;
          },
        }),
        Object.defineProperty(a, "GenericAccountIndex", {
          enumerable: !0,
          get: function () {
            return n.GenericAccountIndex;
          },
        }),
        Object.defineProperty(a, "GenericAddress", {
          enumerable: !0,
          get: function () {
            return x.GenericMultiAddress;
          },
        }),
        Object.defineProperty(a, "GenericBlock", {
          enumerable: !0,
          get: function () {
            return d.GenericBlock;
          },
        }),
        Object.defineProperty(a, "GenericCall", {
          enumerable: !0,
          get: function () {
            return r.GenericCall;
          },
        }),
        Object.defineProperty(a, "GenericChainProperties", {
          enumerable: !0,
          get: function () {
            return b.GenericChainProperties;
          },
        }),
        Object.defineProperty(a, "GenericConsensusEngineId", {
          enumerable: !0,
          get: function () {
            return i.GenericConsensusEngineId;
          },
        }),
        Object.defineProperty(a, "GenericEvent", {
          enumerable: !0,
          get: function () {
            return o.GenericEvent;
          },
        }),
        Object.defineProperty(a, "GenericEventData", {
          enumerable: !0,
          get: function () {
            return o.GenericEventData;
          },
        }),
        Object.defineProperty(a, "GenericLookupSource", {
          enumerable: !0,
          get: function () {
            return s.GenericLookupSource;
          },
        }),
        Object.defineProperty(a, "GenericMultiAddress", {
          enumerable: !0,
          get: function () {
            return x.GenericMultiAddress;
          },
        }),
        Object.defineProperty(a, "GenericVote", {
          enumerable: !0,
          get: function () {
            return u.GenericVote;
          },
        }));
      var f = c(5504),
        n = c(4769),
        d = c(9531),
        r = c(9532),
        b = c(9533),
        i = c(9534),
        o = c(6527),
        s = c(9535),
        x = c(9536),
        u = c(9537),
        l = c(9538);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === l[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
    },
    9531: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericBlock = void 0));
      var t = c(2855);
      class GenericBlock extends t.Struct {
        constructor(e, a) {
          super(e, { header: "Header", extrinsics: "Vec<Extrinsic>" }, a);
        }
        get contentHash() {
          return this.registry.hash(this.toU8a());
        }
        get extrinsics() {
          return this.getT("extrinsics");
        }
        get hash() {
          return this.header.hash;
        }
        get header() {
          return this.getT("header");
        }
      }
      a.GenericBlock = GenericBlock;
    },
    9532: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericCallIndex = a.GenericCall = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757);
      function r(e, a) {
        return a.fields.reduce((a, c, t) => {
          let { name: f, type: n } = c;
          return (
            (a[f.unwrapOr("param" + t).toString()] = e.createLookupType(n)),
            a
          );
        }, {});
      }
      function b(e, a, c) {
        const { args: t, callIndex: f } = a,
          n = f instanceof GenericCallIndex ? f.toU8a() : f,
          d = c || e.findMetaCall(n).meta;
        return { args: t, argsDef: r(e, d), callIndex: f, meta: d };
      }
      function i(e, a, c) {
        const t = e.firstCallIndex.slice();
        t.set(a.subarray(0, 2), 0);
        const f = c || e.findMetaCall(t).meta;
        return { args: a.subarray(2), argsDef: r(e, f), callIndex: t, meta: f };
      }
      function o(e, a, c) {
        if (
          (void 0 === a && (a = new Uint8Array()),
          (0, d.isU8a)(a) || (0, d.isHex)(a))
        )
          return i(e, (0, d.u8aToU8a)(a), c);
        if ((0, d.isObject)(a) && a.callIndex && a.args) return b(e, a, c);
        throw new Error(`Call: Cannot decode value '${a}' of type ${typeof a}`);
      }
      class GenericCallIndex extends n.U8aFixed {
        constructor(e, a) {
          super(e, a, 16);
        }
        toPrimitive() {
          return this.toHex();
        }
      }
      a.GenericCallIndex = GenericCallIndex;
      class GenericCall extends n.Struct {
        constructor(e, a, c) {
          const t = o(e, a, c);
          try {
            (super(
              e,
              { callIndex: GenericCallIndex, args: n.Struct.with(t.argsDef) },
              t,
            ),
              (0, f.default)(this, "_meta", void 0));
          } catch (d) {
            let a = "unknown.unknown";
            try {
              const c = e.findMetaCall(t.callIndex);
              a = `${c.section}.${c.method}`;
            } catch {}
            throw new Error(`Call: failed decoding ${a}:: ${d.message}`);
          }
          this._meta = t.meta;
        }
        get args() {
          return [...this.getT("args").values()];
        }
        get argsDef() {
          return r(this.registry, this.meta);
        }
        get argsEntries() {
          return [...this.getT("args").entries()];
        }
        get callIndex() {
          return this.getT("callIndex").toU8a();
        }
        get data() {
          return this.getT("args").toU8a();
        }
        get meta() {
          return this._meta;
        }
        get method() {
          return this.registry.findMetaCall(this.callIndex).method;
        }
        get section() {
          return this.registry.findMetaCall(this.callIndex).section;
        }
        is(e) {
          return (
            e.callIndex[0] === this.callIndex[0] &&
            e.callIndex[1] === this.callIndex[1]
          );
        }
        toHuman(e, a) {
          var c, t;
          let f;
          try {
            f = this.registry.findMetaCall(this.callIndex);
          } catch {}
          return (0, d.objectSpread)(
            {
              args: this.argsEntries.reduce((c, t) => {
                let [f, n] = t;
                return (0, d.objectSpread)(c, { [f]: n.toHuman(e, a) });
              }, {}),
              method: null === (c = f) || void 0 === c ? void 0 : c.method,
              section: null === (t = f) || void 0 === t ? void 0 : t.section,
            },
            e && f ? { docs: f.meta.docs.map((e) => e.toString()) } : null,
          );
        }
        toRawType() {
          return "Call";
        }
      }
      a.GenericCall = GenericCall;
    },
    9533: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericChainProperties = void 0));
      var t = c(2855),
        f = c(2757);
      function n(e, a, c, t) {
        return (
          void 0 === t && (t = !0),
          c && (0, f.isFunction)(c.unwrapOrDefault)
            ? c
            : e.createTypeUnsafe(a, [
                t
                  ? (0, f.isNull)(c) || (0, f.isUndefined)(c)
                    ? null
                    : Array.isArray(c)
                      ? c
                      : [c]
                  : c,
              ])
        );
      }
      function d(e, a, c) {
        return "ss58Format" === a
          ? n(e, "Option<u32>", c, !1)
          : "tokenDecimals" === a
            ? n(e, "Option<Vec<u32>>", c)
            : "tokenSymbol" === a
              ? n(e, "Option<Vec<Text>>", c)
              : "isEthereum" === a
                ? n(e, "Bool", c, !1)
                : c;
      }
      function r(e, a) {
        return (
          a && (0, f.isFunction)(a.entries)
            ? [...a.entries()]
            : Object.entries(a || {})
        ).reduce(
          (a, c) => {
            let [t, f] = c;
            return ((a[t] = d(e, t, f)), a);
          },
          {
            isEthereum: e.createTypeUnsafe("Bool", []),
            ss58Format: e.createTypeUnsafe("Option<u32>", []),
            tokenDecimals: e.createTypeUnsafe("Option<Vec<u32>>", []),
            tokenSymbol: e.createTypeUnsafe("Option<Vec<Text>>", []),
          },
        );
      }
      class GenericChainProperties extends t.Json {
        constructor(e, a) {
          super(e, r(e, a));
        }
        get isEthereum() {
          return this.getT("isEthereum");
        }
        get ss58Format() {
          return this.getT("ss58Format");
        }
        get tokenDecimals() {
          return this.getT("tokenDecimals");
        }
        get tokenSymbol() {
          return this.getT("tokenSymbol");
        }
      }
      a.GenericChainProperties = GenericChainProperties;
    },
    9534: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericConsensusEngineId =
          a.CID_POW =
          a.CID_NMBS =
          a.CID_GRPA =
          a.CID_BABE =
          a.CID_AURA =
            void 0));
      var t = c(2855),
        f = c(2757);
      const n = (a.CID_AURA = (0, f.stringToU8a)("aura")),
        d = (a.CID_BABE = (0, f.stringToU8a)("BABE")),
        r = (a.CID_GRPA = (0, f.stringToU8a)("FRNK")),
        b = (a.CID_POW = (0, f.stringToU8a)("pow_")),
        i = (a.CID_NMBS = (0, f.stringToU8a)("nmbs"));
      function o(e, a, c) {
        return c[
          e
            .createTypeUnsafe("RawAuraPreDigest", [a.toU8a(!0)])
            .slotNumber.mod(new f.BN(c.length))
            .toNumber()
        ];
      }
      function s(e, a, c) {
        const t = e.createTypeUnsafe("RawBabePreDigestCompat", [a.toU8a(!0)]);
        return c[t.value.toNumber()];
      }
      function x(e, a) {
        return e.createTypeUnsafe("AccountId", [a]);
      }
      class GenericConsensusEngineId extends t.U8aFixed {
        constructor(e, a) {
          super(
            e,
            (0, f.isNumber)(a) ? (0, f.bnToU8a)(a, { isLe: !1 }) : a,
            32,
          );
        }
        get isAura() {
          return this.eq(n);
        }
        get isBabe() {
          return this.eq(d);
        }
        get isGrandpa() {
          return this.eq(r);
        }
        get isPow() {
          return this.eq(b);
        }
        get isNimbus() {
          return this.eq(i);
        }
        extractAuthor(e, a) {
          if (null !== a && void 0 !== a && a.length) {
            if (this.isAura) return o(this.registry, e, a);
            if (this.isBabe) return s(this.registry, e, a);
          }
          if (this.isPow || this.isNimbus) return x(this.registry, e);
        }
        toHuman() {
          return this.toString();
        }
        toRawType() {
          return "ConsensusEngineId";
        }
        toString() {
          return this.isAscii
            ? (0, f.u8aToString)(this)
            : (0, f.u8aToHex)(this);
        }
      }
      a.GenericConsensusEngineId = GenericConsensusEngineId;
    },
    9535: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericLookupSource = a.ACCOUNT_ID_PREFIX = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(2961),
        d = c(5504),
        r = c(4769);
      const b = (a.ACCOUNT_ID_PREFIX = new Uint8Array([255]));
      function i(e, a) {
        const c = (0, n.decodeAddress)(a);
        return 32 === c.length
          ? e.createTypeUnsafe("AccountId", [c])
          : e.createTypeUnsafe("AccountIndex", [(0, f.u8aToBn)(c)]);
      }
      function o(e, a) {
        if (32 === a.length) return e.createTypeUnsafe("AccountId", [a]);
        if (255 === a[0])
          return e.createTypeUnsafe("AccountId", [a.subarray(1)]);
        const [c, t] = r.GenericAccountIndex.readLength(a);
        return e.createTypeUnsafe("AccountIndex", [
          (0, f.u8aToBn)(a.subarray(c, c + t)),
        ]);
      }
      function s(e, a) {
        return a instanceof GenericLookupSource
          ? a.inner
          : a instanceof d.GenericAccountId ||
              a instanceof r.GenericAccountIndex
            ? a
            : (0, f.isBn)(a) || (0, f.isNumber)(a) || (0, f.isBigInt)(a)
              ? e.createTypeUnsafe("AccountIndex", [a])
              : Array.isArray(a) || (0, f.isHex)(a) || (0, f.isU8a)(a)
                ? o(e, (0, f.u8aToU8a)(a))
                : i(e, a);
      }
      class GenericLookupSource extends t.AbstractBase {
        constructor(e, a) {
          (void 0 === a && (a = new Uint8Array()), super(e, s(e, a)));
        }
        get encodedLength() {
          const e = this._rawLength;
          return e + (e > 1 ? 1 : 0);
        }
        get _rawLength() {
          return this.inner instanceof r.GenericAccountIndex
            ? r.GenericAccountIndex.calcLength(this.inner)
            : this.inner.encodedLength;
        }
        inspect() {
          const e = this.inner.toU8a().subarray(0, this._rawLength);
          return {
            outer: [
              new Uint8Array(
                this.inner instanceof r.GenericAccountIndex
                  ? r.GenericAccountIndex.writeLength(e)
                  : b,
              ),
              e,
            ],
          };
        }
        toHex() {
          return (0, f.u8aToHex)(this.toU8a());
        }
        toRawType() {
          return "Address";
        }
        toU8a(e) {
          const a = this.inner.toU8a().subarray(0, this._rawLength);
          return e
            ? a
            : (0, f.u8aConcat)(
                this.inner instanceof r.GenericAccountIndex
                  ? r.GenericAccountIndex.writeLength(a)
                  : b,
                a,
              );
        }
      }
      a.GenericLookupSource = GenericLookupSource;
    },
    9536: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericMultiAddress = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(2961),
        d = c(5504),
        r = c(4769);
      function b(e, a) {
        return [0, 32].includes(a.length)
          ? { Id: a }
          : 20 === a.length
            ? { Address20: a }
            : a.length <= 8
              ? { Index: e.createTypeUnsafe("AccountIndex", [a]).toNumber() }
              : a;
      }
      function i(e, a) {
        return a instanceof d.GenericAccountId
          ? { Id: a }
          : (0, f.isU8a)(a)
            ? b(e, a)
            : a instanceof GenericMultiAddress
              ? a
              : a instanceof r.GenericAccountIndex ||
                  (0, f.isBn)(a) ||
                  (0, f.isNumber)(a)
                ? { Index: (0, f.isNumber)(a) ? a : a.toNumber() }
                : (0, f.isString)(a)
                  ? b(e, (0, n.decodeAddress)(a.toString()))
                  : a;
      }
      class GenericMultiAddress extends t.Enum {
        constructor(e, a) {
          super(
            e,
            {
              Id: "AccountId",
              Index: "Compact<AccountIndex>",
              Raw: "Bytes",
              Address32: "H256",
              Address20: "H160",
            },
            i(e, a),
          );
        }
        inspect() {
          const { inner: e, outer: a = [] } = this.inner.inspect();
          return { inner: e, outer: [new Uint8Array([this.index]), ...a] };
        }
        toString() {
          return this.value.toString();
        }
      }
      a.GenericMultiAddress = GenericMultiAddress;
    },
    9537: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericVote = void 0));
      var f = t(c(128)),
        n = c(2855),
        d = c(2757);
      const r = 128,
        b = 0,
        i = 127,
        o = 0;
      function s(e) {
        return e ? new Uint8Array([r | o]) : new Uint8Array([b]);
      }
      function x(e) {
        return e.length ? e.subarray(0, 1) : new Uint8Array([b]);
      }
      function u(e, a) {
        return new Uint8Array([
          (new n.Bool(e, a.aye).isTrue ? r : b) |
            e.createTypeUnsafe("Conviction", [a.conviction || o]).index,
        ]);
      }
      function l(e, a) {
        return (0, d.isU8a)(a)
          ? x(a)
          : (0, d.isUndefined)(a) || a instanceof Boolean || (0, d.isBoolean)(a)
            ? s(new n.Bool(e, a).isTrue)
            : (0, d.isNumber)(a)
              ? s(a < 0)
              : u(e, a);
      }
      class GenericVote extends n.U8aFixed {
        constructor(e, a) {
          const c = l(e, a);
          (super(e, c, 8),
            (0, f.default)(this, "__internal__aye", void 0),
            (0, f.default)(this, "__internal__conviction", void 0),
            (this.__internal__aye = (c[0] & r) === r),
            (this.__internal__conviction = this.registry.createTypeUnsafe(
              "Conviction",
              [c[0] & i],
            )));
        }
        get conviction() {
          return this.__internal__conviction;
        }
        get isAye() {
          return this.__internal__aye;
        }
        get isNay() {
          return !this.isAye;
        }
        toHuman(e) {
          return {
            conviction: this.conviction.toHuman(e),
            vote: this.isAye ? "Aye" : "Nay",
          };
        }
        toPrimitive() {
          return { aye: this.isAye, conviction: this.conviction.toPrimitive() };
        }
        toRawType() {
          return "Vote";
        }
      }
      a.GenericVote = GenericVote;
    },
    9538: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "GenericEthereumAccountId", {
          enumerable: !0,
          get: function () {
            return t.GenericEthereumAccountId;
          },
        }),
        Object.defineProperty(a, "GenericEthereumLookupSource", {
          enumerable: !0,
          get: function () {
            return f.GenericEthereumLookupSource;
          },
        }));
      var t = c(6530),
        f = c(9539);
    },
    9539: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.GenericEthereumLookupSource = a.ACCOUNT_ID_PREFIX = void 0));
      var t = c(2855),
        f = c(2757),
        n = c(2961),
        d = c(4769),
        r = c(6530);
      const b = (a.ACCOUNT_ID_PREFIX = new Uint8Array([255]));
      function i(e, a) {
        const c = (0, n.decodeAddress)(a);
        return 20 === c.length
          ? e.createTypeUnsafe("EthereumAccountId", [c])
          : e.createTypeUnsafe("AccountIndex", [(0, f.u8aToBn)(c)]);
      }
      function o(e, a) {
        if (20 === a.length)
          return e.createTypeUnsafe("EthereumAccountId", [a]);
        if (255 === a[0])
          return e.createTypeUnsafe("EthereumAccountId", [a.subarray(1)]);
        const [c, t] = d.GenericAccountIndex.readLength(a);
        return e.createTypeUnsafe("AccountIndex", [
          (0, f.u8aToBn)(a.subarray(c, c + t)),
        ]);
      }
      function s(e, a) {
        return a instanceof GenericEthereumLookupSource
          ? a.inner
          : a instanceof r.GenericEthereumAccountId ||
              a instanceof d.GenericAccountIndex
            ? a
            : (0, f.isU8a)(a) || Array.isArray(a) || (0, f.isHex)(a)
              ? o(e, (0, f.u8aToU8a)(a))
              : (0, f.isBn)(a) || (0, f.isNumber)(a) || (0, f.isBigInt)(a)
                ? e.createTypeUnsafe("AccountIndex", [a])
                : i(e, a);
      }
      class GenericEthereumLookupSource extends t.AbstractBase {
        constructor(e, a) {
          (void 0 === a && (a = new Uint8Array()), super(e, s(e, a)));
        }
        get encodedLength() {
          const e = this._rawLength;
          return e + (e > 1 ? 1 : 0);
        }
        get _rawLength() {
          return this.inner instanceof d.GenericAccountIndex
            ? d.GenericAccountIndex.calcLength(this.inner)
            : this.inner.encodedLength;
        }
        toHex() {
          return (0, f.u8aToHex)(this.toU8a());
        }
        toRawType() {
          return "Address";
        }
        toU8a(e) {
          const a = this.inner.toU8a().subarray(0, this._rawLength);
          return e
            ? a
            : (0, f.u8aConcat)(
                this.inner instanceof d.GenericAccountIndex
                  ? d.GenericAccountIndex.writeLength(a)
                  : b,
                a,
              );
        }
      }
      a.GenericEthereumLookupSource = GenericEthereumLookupSource;
    },
    9708: function (e, a, c) {
      "use strict";
      var t = c(9);
      Object.defineProperty(a, "__esModule", { value: !0 });
      var f = {
        typeDefinitions: !0,
        rpcDefinitions: !0,
        TypeDefInfo: !0,
        convertSiV0toV1: !0,
        packageInfo: !0,
        unwrapStorageType: !0,
      };
      (Object.defineProperty(a, "TypeDefInfo", {
        enumerable: !0,
        get: function () {
          return r.TypeDefInfo;
        },
      }),
        Object.defineProperty(a, "convertSiV0toV1", {
          enumerable: !0,
          get: function () {
            return b.convertSiV0toV1;
          },
        }),
        Object.defineProperty(a, "packageInfo", {
          enumerable: !0,
          get: function () {
            return i.packageInfo;
          },
        }),
        Object.defineProperty(a, "rpcDefinitions", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        (a.typeDefinitions = void 0),
        Object.defineProperty(a, "unwrapStorageType", {
          enumerable: !0,
          get: function () {
            return o.unwrapStorageType;
          },
        }));
      var n = p(c(5506));
      a.typeDefinitions = n;
      var d = t(c(9709)),
        r = c(3123),
        b = c(5509),
        i = c(3452),
        o = c(6532),
        s = c(9710);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(f, e) ||
            (e in a && a[e] === s[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var x = c(6522);
      Object.keys(x).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(f, e) ||
            (e in a && a[e] === x[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return x[e];
              },
            }));
      });
      var u = c(6528);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(f, e) ||
            (e in a && a[e] === u[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var l = c(9711);
      function p(e, a) {
        if ("function" == typeof WeakMap)
          var c = new WeakMap(),
            t = new WeakMap();
        return (p = function (e, a) {
          if (!a && e && e.__esModule) return e;
          var f,
            n,
            d = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return d;
          if ((f = a ? t : c)) {
            if (f.has(e)) return f.get(e);
            f.set(e, d);
          }
          for (const c in e)
            "default" !== c &&
              {}.hasOwnProperty.call(e, c) &&
              ((n =
                (f = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, c)) &&
              (n.get || n.set)
                ? f(d, c, n)
                : (d[c] = e[c]));
          return d;
        })(e, a);
      }
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(f, e) ||
            (e in a && a[e] === l[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
    },
    9710: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "BTreeMap", {
          enumerable: !0,
          get: function () {
            return t.BTreeMap;
          },
        }),
        Object.defineProperty(a, "BTreeSet", {
          enumerable: !0,
          get: function () {
            return t.BTreeSet;
          },
        }),
        Object.defineProperty(a, "CodecMap", {
          enumerable: !0,
          get: function () {
            return t.CodecMap;
          },
        }),
        Object.defineProperty(a, "CodecSet", {
          enumerable: !0,
          get: function () {
            return t.CodecSet;
          },
        }),
        Object.defineProperty(a, "Compact", {
          enumerable: !0,
          get: function () {
            return t.Compact;
          },
        }),
        Object.defineProperty(a, "DoNotConstruct", {
          enumerable: !0,
          get: function () {
            return t.DoNotConstruct;
          },
        }),
        Object.defineProperty(a, "Enum", {
          enumerable: !0,
          get: function () {
            return t.Enum;
          },
        }),
        Object.defineProperty(a, "HashMap", {
          enumerable: !0,
          get: function () {
            return t.HashMap;
          },
        }),
        Object.defineProperty(a, "Int", {
          enumerable: !0,
          get: function () {
            return t.Int;
          },
        }),
        Object.defineProperty(a, "Json", {
          enumerable: !0,
          get: function () {
            return t.Json;
          },
        }),
        Object.defineProperty(a, "Linkage", {
          enumerable: !0,
          get: function () {
            return t.Linkage;
          },
        }),
        Object.defineProperty(a, "Map", {
          enumerable: !0,
          get: function () {
            return t.Map;
          },
        }),
        Object.defineProperty(a, "Option", {
          enumerable: !0,
          get: function () {
            return t.Option;
          },
        }),
        Object.defineProperty(a, "Range", {
          enumerable: !0,
          get: function () {
            return t.Range;
          },
        }),
        Object.defineProperty(a, "RangeInclusive", {
          enumerable: !0,
          get: function () {
            return t.RangeInclusive;
          },
        }),
        Object.defineProperty(a, "Raw", {
          enumerable: !0,
          get: function () {
            return t.Raw;
          },
        }),
        Object.defineProperty(a, "Result", {
          enumerable: !0,
          get: function () {
            return t.Result;
          },
        }),
        Object.defineProperty(a, "Set", {
          enumerable: !0,
          get: function () {
            return t.Set;
          },
        }),
        Object.defineProperty(a, "Struct", {
          enumerable: !0,
          get: function () {
            return t.Struct;
          },
        }),
        Object.defineProperty(a, "Tuple", {
          enumerable: !0,
          get: function () {
            return t.Tuple;
          },
        }),
        Object.defineProperty(a, "U8aFixed", {
          enumerable: !0,
          get: function () {
            return t.U8aFixed;
          },
        }),
        Object.defineProperty(a, "UInt", {
          enumerable: !0,
          get: function () {
            return t.UInt;
          },
        }),
        Object.defineProperty(a, "Vec", {
          enumerable: !0,
          get: function () {
            return t.Vec;
          },
        }),
        Object.defineProperty(a, "VecFixed", {
          enumerable: !0,
          get: function () {
            return t.VecFixed;
          },
        }),
        Object.defineProperty(a, "WrapperKeepOpaque", {
          enumerable: !0,
          get: function () {
            return t.WrapperKeepOpaque;
          },
        }),
        Object.defineProperty(a, "WrapperOpaque", {
          enumerable: !0,
          get: function () {
            return t.WrapperOpaque;
          },
        }));
      var t = c(2855);
    },
    9776: function (e, a, c) {
      "use strict";
      var t = c(9),
        f = c(2757),
        n = t(c(9777)),
        d = c(6553);
      (0, f.detectPackage)(d.packageInfo, null, n.default);
    },
    9777: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var t = c(4759),
        f = c(5484);
      a.default = [t.packageInfo, f.packageInfo];
    },
    9778: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = {
        decodeAddress: !0,
        encodeAddress: !0,
        setSS58Format: !0,
        Keyring: !0,
        packageInfo: !0,
        createPair: !0,
        createTestKeyring: !0,
        createTestPairs: !0,
      };
      (Object.defineProperty(a, "Keyring", {
        enumerable: !0,
        get: function () {
          return n.Keyring;
        },
      }),
        Object.defineProperty(a, "createPair", {
          enumerable: !0,
          get: function () {
            return r.createPair;
          },
        }),
        Object.defineProperty(a, "createTestKeyring", {
          enumerable: !0,
          get: function () {
            return b.createTestKeyring;
          },
        }),
        Object.defineProperty(a, "createTestPairs", {
          enumerable: !0,
          get: function () {
            return i.createTestPairs;
          },
        }),
        Object.defineProperty(a, "decodeAddress", {
          enumerable: !0,
          get: function () {
            return f.decodeAddress;
          },
        }),
        Object.defineProperty(a, "encodeAddress", {
          enumerable: !0,
          get: function () {
            return f.encodeAddress;
          },
        }),
        Object.defineProperty(a, "packageInfo", {
          enumerable: !0,
          get: function () {
            return d.packageInfo;
          },
        }),
        Object.defineProperty(a, "setSS58Format", {
          enumerable: !0,
          get: function () {
            return f.setSS58Format;
          },
        }));
      var f = c(2961),
        n = c(6554),
        d = c(6553),
        r = c(5515),
        b = c(6557),
        i = c(9783),
        o = c(6556);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === o[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
    },
    9779: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.decodePair = r));
      var t = c(2757),
        f = c(2961),
        n = c(6555);
      const d = n.PKCS8_HEADER.length;
      function r(e, a, c) {
        const r = Array.isArray(c) || void 0 === c ? c : [c],
          b = (0, f.jsonDecryptData)(a, e, r),
          i = b.subarray(0, n.PKCS8_HEADER.length);
        if (!(0, t.u8aEq)(i, n.PKCS8_HEADER))
          throw new Error("Invalid Pkcs8 header found in body");
        let o = b.subarray(d, d + n.SEC_LENGTH),
          s = d + n.SEC_LENGTH,
          x = b.subarray(s, s + n.PKCS8_DIVIDER.length);
        if (
          !(0, t.u8aEq)(x, n.PKCS8_DIVIDER) &&
          ((s = d + n.SEED_LENGTH),
          (o = b.subarray(d, s)),
          (x = b.subarray(s, s + n.PKCS8_DIVIDER.length)),
          !(0, t.u8aEq)(x, n.PKCS8_DIVIDER))
        )
          throw new Error("Invalid Pkcs8 divider found in body");
        const u = s + n.PKCS8_DIVIDER.length,
          l = b.subarray(u, u + n.PUB_LENGTH);
        return { publicKey: l, secretKey: o };
      }
    },
    9780: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.encodePair = d));
      var t = c(2757),
        f = c(2961),
        n = c(6555);
      function d(e, a) {
        let { publicKey: c, secretKey: d } = e;
        if (!d)
          throw new Error("Expected a valid secretKey to be passed to encode");
        const r = (0, t.u8aConcat)(n.PKCS8_HEADER, d, n.PKCS8_DIVIDER, c);
        if (!a) return r;
        const { params: b, password: i, salt: o } = (0, f.scryptEncode)(a),
          { encrypted: s, nonce: x } = (0, f.naclEncrypt)(r, i.subarray(0, 32));
        return (0, t.u8aConcat)((0, f.scryptToU8a)(o, b), x, s);
      }
    },
    9781: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.pairToJson = n));
      var t = c(2757),
        f = c(2961);
      function n(e, a, c, n) {
        let { address: d, meta: r } = a;
        return (0, t.objectSpread)(
          (0, f.jsonEncryptFormat)(c, ["pkcs8", e], n),
          { address: d, meta: r },
        );
      }
    },
    9782: function (e, a, c) {
      "use strict";
      var t = c(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.Pairs = void 0));
      var f = t(c(128)),
        n = c(2757),
        d = c(2961);
      class Pairs {
        constructor() {
          (0, f.default)(this, "__internal__map", {});
        }
        add(e) {
          return (
            (this.__internal__map[(0, d.decodeAddress)(e.address).toString()] =
              e),
            e
          );
        }
        all() {
          return Object.values(this.__internal__map);
        }
        get(e) {
          const a = this.__internal__map[(0, d.decodeAddress)(e).toString()];
          if (!a)
            throw new Error(
              `Unable to retrieve keypair '${(0, n.isU8a)(e) || (0, n.isHex)(e) ? (0, n.u8aToHex)((0, n.u8aToU8a)(e)) : e}'`,
            );
          return a;
        }
        remove(e) {
          delete this.__internal__map[(0, d.decodeAddress)(e).toString()];
        }
      }
      a.Pairs = Pairs;
    },
    9783: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.createTestPairs = n));
      var t = c(9784),
        f = c(6557);
      function n(e, a) {
        void 0 === a && (a = !0);
        const c = (0, f.createTestKeyring)(e, a),
          n = c.getPairs(),
          d = { nobody: (0, t.nobody)() };
        for (const t of n) t.meta.name && (d[t.meta.name] = t);
        return d;
      }
    },
    9784: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }), (a.nobody = b));
      const t = new Uint8Array(32),
        f = "5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM",
        n = { isTesting: !0, name: "nobody" },
        d = {
          address: f,
          encoded: "",
          encoding: {
            content: ["pkcs8", "ed25519"],
            type: "none",
            version: "0",
          },
          meta: n,
        },
        r = {
          address: f,
          addressRaw: t,
          decodePkcs8: (e, a) => {},
          derive: (e, a) => r,
          encodePkcs8: (e) => new Uint8Array(0),
          isLocked: !0,
          lock: () => {},
          meta: n,
          publicKey: t,
          setMeta: (e) => {},
          sign: (e) => new Uint8Array(64),
          toJson: (e) => d,
          type: "ed25519",
          unlock: (e) => {},
          verify: (e, a) => !1,
          vrfSign: (e, a, c) => new Uint8Array(96),
          vrfVerify: (e, a, c, t) => !1,
        };
      function b() {
        return r;
      }
    },
    9792: function (e, a, c) {
      "use strict";
      var t = c(3452),
        f = c(2757),
        n = c(5517);
      (0, f.detectPackage)(n.packageInfo, null, [t.packageInfo]);
    },
    9793: function (e, a, c) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = { mapXcmTypes: !0, packageInfo: !0 };
      (Object.defineProperty(a, "mapXcmTypes", {
        enumerable: !0,
        get: function () {
          return f.mapXcmTypes;
        },
      }),
        Object.defineProperty(a, "packageInfo", {
          enumerable: !0,
          get: function () {
            return n.packageInfo;
          },
        }));
      var f = c(3123),
        n = c(5517),
        d = c(9794);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(t, e) ||
            (e in a && a[e] === d[e]) ||
            Object.defineProperty(a, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
    },
    9794: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.getSpecAlias = l),
        (a.getSpecExtensions = i),
        (a.getSpecHasher = s),
        (a.getSpecRpc = x),
        (a.getSpecRuntime = u),
        (a.getSpecTypes = o),
        (a.getUpgradeVersion = p));
      var t = c(2757),
        f = c(9795),
        n = c(9796),
        d = c(9808);
      function r(e, a, c) {
        return c(e.toString(), a.toString());
      }
      function b(e, a) {
        return (
          void 0 === e && (e = []),
          e
            .filter((e) => {
              let {
                minmax: [c, t],
              } = e;
              return (
                (void 0 === c || null === c || a >= c) &&
                (void 0 === t || null === t || a <= t)
              );
            })
            .reduce((e, a) => {
              let { types: c } = a;
              return { ...e, ...c };
            }, {})
        );
      }
      function i(e, a, c) {
        let { knownTypes: t } = e;
        return r(a, c, (e, a) => {
          var c, f, n, d, r, b, i, o;
          return {
            ...(null !==
              (c =
                null === (f = t.typesBundle) ||
                void 0 === f ||
                null === (n = f.spec) ||
                void 0 === n ||
                null === (d = n[a]) ||
                void 0 === d
                  ? void 0
                  : d.signedExtensions) && void 0 !== c
              ? c
              : {}),
            ...(null !==
              (r =
                null === (b = t.typesBundle) ||
                void 0 === b ||
                null === (i = b.chain) ||
                void 0 === i ||
                null === (o = i[e]) ||
                void 0 === o
                  ? void 0
                  : o.signedExtensions) && void 0 !== r
              ? r
              : {}),
          };
        });
      }
      function o(e, a, c, d) {
        let { knownTypes: i } = e;
        const o = (0, t.bnToBn)(d).toNumber();
        return r(a, c, (e, a) => {
          var c, t, d, r, s, x, u, l, p, h, y;
          return {
            ...b(n.typesSpec[a], o),
            ...b(f.typesChain[e], o),
            ...b(
              null === (c = i.typesBundle) ||
                void 0 === c ||
                null === (t = c.spec) ||
                void 0 === t ||
                null === (d = t[a]) ||
                void 0 === d
                ? void 0
                : d.types,
              o,
            ),
            ...b(
              null === (r = i.typesBundle) ||
                void 0 === r ||
                null === (s = r.chain) ||
                void 0 === s ||
                null === (x = s[e]) ||
                void 0 === x
                ? void 0
                : x.types,
              o,
            ),
            ...(null !==
              (u =
                null === (l = i.typesSpec) || void 0 === l ? void 0 : l[a]) &&
            void 0 !== u
              ? u
              : {}),
            ...(null !==
              (p =
                null === (h = i.typesChain) || void 0 === h ? void 0 : h[e]) &&
            void 0 !== p
              ? p
              : {}),
            ...(null !== (y = i.types) && void 0 !== y ? y : {}),
          };
        });
      }
      function s(e, a, c) {
        let { knownTypes: t } = e;
        return r(a, c, (e, a) => {
          var c, f, n, d, r, b;
          return (
            t.hasher ||
            (null === (c = t.typesBundle) ||
            void 0 === c ||
            null === (f = c.chain) ||
            void 0 === f ||
            null === (n = f[e]) ||
            void 0 === n
              ? void 0
              : n.hasher) ||
            (null === (d = t.typesBundle) ||
            void 0 === d ||
            null === (r = d.spec) ||
            void 0 === r ||
            null === (b = r[a]) ||
            void 0 === b
              ? void 0
              : b.hasher) ||
            null
          );
        });
      }
      function x(e, a, c) {
        let { knownTypes: t } = e;
        return r(a, c, (e, a) => {
          var c, f, n, d, r, b, i, o;
          return {
            ...(null !==
              (c =
                null === (f = t.typesBundle) ||
                void 0 === f ||
                null === (n = f.spec) ||
                void 0 === n ||
                null === (d = n[a]) ||
                void 0 === d
                  ? void 0
                  : d.rpc) && void 0 !== c
              ? c
              : {}),
            ...(null !==
              (r =
                null === (b = t.typesBundle) ||
                void 0 === b ||
                null === (i = b.chain) ||
                void 0 === i ||
                null === (o = i[e]) ||
                void 0 === o
                  ? void 0
                  : o.rpc) && void 0 !== r
              ? r
              : {}),
          };
        });
      }
      function u(e, a, c) {
        let { knownTypes: t } = e;
        return r(a, c, (e, a) => {
          var c, f, n, d, r, b, i, o;
          return {
            ...(null !==
              (c =
                null === (f = t.typesBundle) ||
                void 0 === f ||
                null === (n = f.spec) ||
                void 0 === n ||
                null === (d = n[a]) ||
                void 0 === d
                  ? void 0
                  : d.runtime) && void 0 !== c
              ? c
              : {}),
            ...(null !==
              (r =
                null === (b = t.typesBundle) ||
                void 0 === b ||
                null === (i = b.chain) ||
                void 0 === i ||
                null === (o = i[e]) ||
                void 0 === o
                  ? void 0
                  : o.runtime) && void 0 !== r
              ? r
              : {}),
          };
        });
      }
      function l(e, a, c) {
        let { knownTypes: t } = e;
        return r(a, c, (e, a) => {
          var c, f, n, d, r, b, i, o, s;
          return {
            ...(null !==
              (c =
                null === (f = t.typesBundle) ||
                void 0 === f ||
                null === (n = f.spec) ||
                void 0 === n ||
                null === (d = n[a]) ||
                void 0 === d
                  ? void 0
                  : d.alias) && void 0 !== c
              ? c
              : {}),
            ...(null !==
              (r =
                null === (b = t.typesBundle) ||
                void 0 === b ||
                null === (i = b.chain) ||
                void 0 === i ||
                null === (o = i[e]) ||
                void 0 === o
                  ? void 0
                  : o.alias) && void 0 !== r
              ? r
              : {}),
            ...(null !== (s = t.typesAlias) && void 0 !== s ? s : {}),
          };
        });
      }
      function p(e, a) {
        const c = d.upgrades.find((a) => e.eq(a.genesisHash));
        return c
          ? [
              c.versions.reduce(
                (e, c) => (a.gt(c.blockNumber) ? c : e),
                void 0,
              ),
              c.versions.find((e) => a.lte(e.blockNumber)),
            ]
          : [void 0, void 0];
      }
    },
    9795: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.typesChain = void 0));
      a.typesChain = {};
    },
    9796: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.typesSpec = void 0));
      var t = c(9797),
        f = c(9798),
        n = c(9799),
        d = c(9800),
        r = c(9801),
        b = c(9802),
        i = c(9803),
        o = c(9804),
        s = c(9805),
        x = c(9806),
        u = c(9807);
      a.typesSpec = {
        "centrifuge-chain": t.versioned,
        kusama: f.versioned,
        node: n.versioned,
        "node-template": d.versioned,
        polkadot: r.versioned,
        rococo: b.versioned,
        shell: i.versioned,
        statemine: o.versioned,
        statemint: s.versioned,
        westend: x.versioned,
        westmint: u.versioned,
      };
    },
    9797: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      const t = {
          AnchorData: { anchoredBlock: "u64", docRoot: "H256", id: "H256" },
          DispatchErrorModule: "DispatchErrorModuleU8",
          PreCommitData: {
            expirationBlock: "u64",
            identity: "H256",
            signingRoot: "H256",
          },
          Fee: { key: "Hash", price: "Balance" },
          MultiAccountData: {
            deposit: "Balance",
            depositor: "AccountId",
            signatories: "Vec<AccountId>",
            threshold: "u16",
          },
          ChainId: "u8",
          DepositNonce: "u64",
          ResourceId: "[u8; 32]",
          "chainbridge::ChainId": "u8",
          RegistryId: "H160",
          TokenId: "U256",
          AssetId: { registryId: "RegistryId", tokenId: "TokenId" },
          AssetInfo: { metadata: "Bytes" },
          MintInfo: {
            anchorId: "Hash",
            proofs: "Vec<ProofMint>",
            staticHashes: "[Hash; 3]",
          },
          Proof: { leafHash: "H256", sortedHashes: "H256" },
          ProofMint: {
            hashes: "Vec<Hash>",
            property: "Bytes",
            salt: "[u8; 32]",
            value: "Bytes",
          },
          RegistryInfo: { fields: "Vec<Bytes>", ownerCanBurn: "bool" },
          ProxyType: {
            _enum: ["Any", "NonTransfer", "Governance", "Staking", "NonProxy"],
          },
        },
        f = {
          ...t,
          AccountInfo: "AccountInfoWithRefCount",
          Address: "LookupSource",
          LookupSource: "IndicesLookupSource",
          Multiplier: "Fixed64",
          RefCount: "RefCountTo259",
        };
      a.versioned = [
        {
          minmax: [240, 243],
          types: {
            ...f,
            ProxyType: {
              _enum: ["Any", "NonTransfer", "Governance", "Staking", "Vesting"],
            },
          },
        },
        { minmax: [244, 999], types: { ...f } },
        { minmax: [1e3, void 0], types: { ...t } },
      ];
    },
    9798: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      var t = c(3123);
      const f = {
          CompactAssignments: "CompactAssignmentsWith24",
          DispatchErrorModule: "DispatchErrorModuleU8",
          RawSolution: "RawSolutionWith24",
          Keys: "SessionKeys6",
          ProxyType: {
            _enum: [
              "Any",
              "NonTransfer",
              "Governance",
              "Staking",
              "IdentityJudgement",
              "CancelProxy",
              "Auction",
            ],
          },
          Weight: "WeightV1",
        },
        n = {
          AccountInfo: "AccountInfoWithRefCount",
          Address: "LookupSource",
          CompactAssignments: "CompactAssignmentsWith16",
          DispatchErrorModule: "DispatchErrorModuleU8",
          RawSolution: "RawSolutionWith16",
          Keys: "SessionKeys5",
          LookupSource: "IndicesLookupSource",
          ValidatorPrefs: "ValidatorPrefsWithCommission",
        },
        d = {
          AccountInfo: "AccountInfoWithRefCount",
          Address: "AccountId",
          CompactAssignments: "CompactAssignmentsWith16",
          DispatchErrorModule: "DispatchErrorModuleU8",
          RawSolution: "RawSolutionWith16",
          Keys: "SessionKeys5",
          LookupSource: "AccountId",
          ValidatorPrefs: "ValidatorPrefsWithCommission",
        };
      a.versioned = [
        {
          minmax: [1019, 1031],
          types: {
            ...n,
            BalanceLock: "BalanceLockTo212",
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchError: "DispatchErrorTo198",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            IdentityInfo: "IdentityInfoTo198",
            Keys: "SessionKeys5",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            ReferendumInfo: "ReferendumInfoTo239",
            Scheduled: "ScheduledTo254",
            SlashingSpans: "SlashingSpansTo204",
            StakingLedger: "StakingLedgerTo223",
            Votes: "VotesTo230",
            Weight: "u32",
          },
        },
        {
          minmax: [1032, 1042],
          types: {
            ...n,
            BalanceLock: "BalanceLockTo212",
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            Keys: "SessionKeys5",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            ReferendumInfo: "ReferendumInfoTo239",
            Scheduled: "ScheduledTo254",
            SlashingSpans: "SlashingSpansTo204",
            StakingLedger: "StakingLedgerTo223",
            Votes: "VotesTo230",
            Weight: "u32",
          },
        },
        {
          minmax: [1043, 1045],
          types: {
            ...n,
            BalanceLock: "BalanceLockTo212",
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            Keys: "SessionKeys5",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            ReferendumInfo: "ReferendumInfoTo239",
            Scheduled: "ScheduledTo254",
            StakingLedger: "StakingLedgerTo223",
            Votes: "VotesTo230",
            Weight: "u32",
          },
        },
        {
          minmax: [1046, 1049],
          types: {
            ...f,
            ...d,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            ReferendumInfo: "ReferendumInfoTo239",
            Scheduled: "ScheduledTo254",
            StakingLedger: "StakingLedgerTo223",
            Weight: "u32",
          },
        },
        {
          minmax: [1050, 1054],
          types: {
            ...f,
            ...d,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            ReferendumInfo: "ReferendumInfoTo239",
            Scheduled: "ScheduledTo254",
            StakingLedger: "StakingLedgerTo240",
            Weight: "u32",
          },
        },
        {
          minmax: [1055, 1056],
          types: {
            ...f,
            ...d,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            Scheduled: "ScheduledTo254",
            StakingLedger: "StakingLedgerTo240",
            Weight: "u32",
          },
        },
        {
          minmax: [1057, 1061],
          types: {
            ...f,
            ...d,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            Scheduled: "ScheduledTo254",
          },
        },
        {
          minmax: [1062, 2012],
          types: {
            ...f,
            ...d,
            CompactAssignments: "CompactAssignmentsTo257",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
          },
        },
        {
          minmax: [2013, 2022],
          types: {
            ...f,
            ...d,
            CompactAssignments: "CompactAssignmentsTo257",
            RefCount: "RefCountTo259",
          },
        },
        {
          minmax: [2023, 2024],
          types: { ...f, ...d, RefCount: "RefCountTo259" },
        },
        { minmax: [2025, 2027], types: { ...f, ...d } },
        {
          minmax: [2028, 2029],
          types: {
            ...f,
            AccountInfo: "AccountInfoWithDualRefCount",
            CompactAssignments: "CompactAssignmentsWith16",
            RawSolution: "RawSolutionWith16",
          },
        },
        {
          minmax: [2030, 9e3],
          types: {
            ...f,
            CompactAssignments: "CompactAssignmentsWith16",
            RawSolution: "RawSolutionWith16",
          },
        },
        { minmax: [9010, 9099], types: { ...f, ...(0, t.mapXcmTypes)("V0") } },
        { minmax: [9100, 9105], types: { ...f, ...(0, t.mapXcmTypes)("V1") } },
        { minmax: [9106, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9799: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      a.versioned = [{ minmax: [0, void 0], types: { Weight: "WeightV2" } }];
    },
    9800: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      a.versioned = [{ minmax: [0, void 0], types: { Weight: "WeightV2" } }];
    },
    9801: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      const t = {
          CompactAssignments: "CompactAssignmentsWith16",
          DispatchErrorModule: "DispatchErrorModuleU8",
          RawSolution: "RawSolutionWith16",
          Keys: "SessionKeys6",
          ProxyType: {
            _enum: {
              Any: 0,
              NonTransfer: 1,
              Governance: 2,
              Staking: 3,
              UnusedSudoBalances: 4,
              IdentityJudgement: 5,
              CancelProxy: 6,
              Auction: 7,
            },
          },
          Weight: "WeightV1",
        },
        f = {
          AccountInfo: "AccountInfoWithRefCount",
          Address: "AccountId",
          DispatchErrorModule: "DispatchErrorModuleU8",
          Keys: "SessionKeys5",
          LookupSource: "AccountId",
          ValidatorPrefs: "ValidatorPrefsWithCommission",
        };
      a.versioned = [
        {
          minmax: [0, 12],
          types: {
            ...t,
            ...f,
            CompactAssignments: "CompactAssignmentsTo257",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
          },
        },
        {
          minmax: [13, 22],
          types: {
            ...t,
            ...f,
            CompactAssignments: "CompactAssignmentsTo257",
            RefCount: "RefCountTo259",
          },
        },
        { minmax: [23, 24], types: { ...t, ...f, RefCount: "RefCountTo259" } },
        { minmax: [25, 27], types: { ...t, ...f } },
        {
          minmax: [28, 29],
          types: { ...t, AccountInfo: "AccountInfoWithDualRefCount" },
        },
        { minmax: [30, 9109], types: { ...t } },
        { minmax: [9110, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9802: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      var t = c(3123);
      const f = {
        DispatchErrorModule: "DispatchErrorModuleU8",
        FullIdentification: "()",
        Keys: "SessionKeys7B",
        Weight: "WeightV1",
      };
      a.versioned = [
        {
          minmax: [0, 200],
          types: {
            ...f,
            AccountInfo: "AccountInfoWithDualRefCount",
            Address: "AccountId",
            LookupSource: "AccountId",
          },
        },
        {
          minmax: [201, 214],
          types: { ...f, AccountInfo: "AccountInfoWithDualRefCount" },
        },
        { minmax: [215, 228], types: { ...f, Keys: "SessionKeys6" } },
        { minmax: [229, 9099], types: { ...f, ...(0, t.mapXcmTypes)("V0") } },
        { minmax: [9100, 9105], types: { ...f, ...(0, t.mapXcmTypes)("V1") } },
        { minmax: [9106, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9803: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      a.versioned = [{ minmax: [0, void 0], types: {} }];
    },
    9804: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      var t = c(3123);
      const f = {
        DispatchErrorModule: "DispatchErrorModuleU8",
        TAssetBalance: "u128",
        ProxyType: {
          _enum: [
            "Any",
            "NonTransfer",
            "CancelProxy",
            "Assets",
            "AssetOwner",
            "AssetManager",
            "Staking",
          ],
        },
        Weight: "WeightV1",
      };
      a.versioned = [
        {
          minmax: [0, 3],
          types: {
            DispatchError: "DispatchErrorPre6First",
            ...f,
            ...(0, t.mapXcmTypes)("V0"),
          },
        },
        {
          minmax: [4, 5],
          types: {
            DispatchError: "DispatchErrorPre6First",
            ...f,
            ...(0, t.mapXcmTypes)("V1"),
          },
        },
        {
          minmax: [500, 9999],
          types: { Weight: "WeightV1", TAssetConversion: "Option<AssetId>" },
        },
        { minmax: [1e4, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9805: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      var t = c(3123);
      const f = {
        DispatchErrorModule: "DispatchErrorModuleU8",
        TAssetBalance: "u128",
        ProxyType: {
          _enum: [
            "Any",
            "NonTransfer",
            "CancelProxy",
            "Assets",
            "AssetOwner",
            "AssetManager",
            "Staking",
          ],
        },
        Weight: "WeightV1",
      };
      a.versioned = [
        {
          minmax: [0, 3],
          types: {
            DispatchError: "DispatchErrorPre6First",
            ...f,
            ...(0, t.mapXcmTypes)("V0"),
          },
        },
        {
          minmax: [4, 5],
          types: {
            DispatchError: "DispatchErrorPre6First",
            ...f,
            ...(0, t.mapXcmTypes)("V1"),
          },
        },
        {
          minmax: [500, 1001003],
          types: { Weight: "WeightV1", TAssetConversion: "Option<AssetId>" },
        },
        { minmax: [1002e3, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9806: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      var t = c(3123);
      const f = {
          CompactAssignments: "CompactAssignmentsWith16",
          DispatchErrorModule: "DispatchErrorModuleU8",
          RawSolution: "RawSolutionWith16",
          Keys: "SessionKeys6",
          ProxyType: {
            _enum: [
              "Any",
              "NonTransfer",
              "Staking",
              "SudoBalances",
              "IdentityJudgement",
              "CancelProxy",
            ],
          },
          Weight: "WeightV1",
        },
        n = {
          AccountInfo: "AccountInfoWithRefCount",
          Address: "AccountId",
          CompactAssignments: "CompactAssignmentsWith16",
          DispatchErrorModule: "DispatchErrorModuleU8",
          LookupSource: "AccountId",
          Keys: "SessionKeys5",
          RawSolution: "RawSolutionWith16",
          ValidatorPrefs: "ValidatorPrefsWithCommission",
        };
      a.versioned = [
        {
          minmax: [1, 2],
          types: {
            ...f,
            ...n,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            Multiplier: "Fixed64",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
            Weight: "u32",
          },
        },
        {
          minmax: [3, 22],
          types: {
            ...f,
            ...n,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            OpenTip: "OpenTipTo225",
            RefCount: "RefCountTo259",
          },
        },
        {
          minmax: [23, 42],
          types: {
            ...f,
            ...n,
            CompactAssignments: "CompactAssignmentsTo257",
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            RefCount: "RefCountTo259",
          },
        },
        {
          minmax: [43, 44],
          types: {
            ...f,
            ...n,
            DispatchInfo: "DispatchInfoTo244",
            Heartbeat: "HeartbeatTo244",
            RefCount: "RefCountTo259",
          },
        },
        { minmax: [45, 47], types: { ...f, ...n } },
        {
          minmax: [48, 49],
          types: { ...f, AccountInfo: "AccountInfoWithDualRefCount" },
        },
        { minmax: [50, 9099], types: { ...f, ...(0, t.mapXcmTypes)("V0") } },
        { minmax: [9100, 9105], types: { ...f, ...(0, t.mapXcmTypes)("V1") } },
        { minmax: [9106, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9807: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.versioned = void 0));
      var t = c(3123);
      const f = {
        DispatchErrorModule: "DispatchErrorModuleU8",
        TAssetBalance: "u128",
        ProxyType: {
          _enum: [
            "Any",
            "NonTransfer",
            "CancelProxy",
            "Assets",
            "AssetOwner",
            "AssetManager",
            "Staking",
          ],
        },
        Weight: "WeightV1",
      };
      a.versioned = [
        {
          minmax: [0, 3],
          types: {
            DispatchError: "DispatchErrorPre6First",
            ...f,
            ...(0, t.mapXcmTypes)("V0"),
          },
        },
        {
          minmax: [4, 5],
          types: {
            DispatchError: "DispatchErrorPre6First",
            ...f,
            ...(0, t.mapXcmTypes)("V1"),
          },
        },
        {
          minmax: [500, 9434],
          types: { Weight: "WeightV1", TAssetConversion: "Option<AssetId>" },
        },
        { minmax: [9435, void 0], types: { Weight: "WeightV1" } },
      ];
    },
    9808: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.upgrades = void 0));
      var t = c(6489),
        f = c(2757),
        n = d(c(9809));
      function d(e, a) {
        if ("function" == typeof WeakMap)
          var c = new WeakMap(),
            t = new WeakMap();
        return (d = function (e, a) {
          if (!a && e && e.__esModule) return e;
          var f,
            n,
            d = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return d;
          if ((f = a ? t : c)) {
            if (f.has(e)) return f.get(e);
            f.set(e, d);
          }
          for (const c in e)
            "default" !== c &&
              {}.hasOwnProperty.call(e, c) &&
              ((n =
                (f = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, c)) &&
              (n.get || n.set)
                ? f(d, c, n)
                : (d[c] = e[c]));
          return d;
        })(e, a);
      }
      const r = {
        westend: {
          genesisHash: [
            "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
          ],
        },
      };
      function b(e) {
        let [a, c] = e;
        const n = t.selectableNetworks.find((e) => e.network === a) || r[a];
        if (!n) throw new Error("Unable to find info for chain " + a);
        return {
          genesisHash: (0, f.hexToU8a)(n.genesisHash[0]),
          network: a,
          versions: c.map((e) => {
            let [a, c, t] = e;
            return {
              apis: t,
              blockNumber: new f.BN(a),
              specVersion: new f.BN(c),
            };
          }),
        };
      }
      a.upgrades = Object.entries(n).map(b);
    },
    9809: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "kusama", {
          enumerable: !0,
          get: function () {
            return t.upgrades;
          },
        }),
        Object.defineProperty(a, "polkadot", {
          enumerable: !0,
          get: function () {
            return f.upgrades;
          },
        }),
        Object.defineProperty(a, "westend", {
          enumerable: !0,
          get: function () {
            return n.upgrades;
          },
        }));
      var t = c(9810),
        f = c(9811),
        n = c(9812);
    },
    9810: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.upgrades = void 0));
      a.upgrades = [
        [
          0,
          1020,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          26669,
          1021,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          38245,
          1022,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          54248,
          1023,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          59659,
          1024,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          67651,
          1025,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          82191,
          1027,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          83238,
          1028,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          101503,
          1029,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          203466,
          1030,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          295787,
          1031,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          461692,
          1032,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          504329,
          1033,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          569327,
          1038,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 1],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          587687,
          1039,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          653183,
          1040,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          693488,
          1042,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          901442,
          1045,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1375086,
          1050,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1445458,
          1051,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1472960,
          1052,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1475648,
          1053,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1491596,
          1054,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1574408,
          1055,
          [
            ["0xdf6acb689907609b", 2],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 1],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2064961,
          1058,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2201991,
          1062,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2671528,
          2005,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2704202,
          2007,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2728002,
          2008,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2832534,
          2011,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2962294,
          2012,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          324e4,
          2013,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3274408,
          2015,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3323565,
          2019,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3534175,
          2022,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3860281,
          2023,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4143129,
          2024,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4401242,
          2025,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4841367,
          2026,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5961600,
          2027,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6137912,
          2028,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6561855,
          2029,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7100891,
          2030,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7468792,
          9010,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7668600,
          9030,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7812476,
          9040,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8010981,
          9050,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8073833,
          9070,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8555825,
          9080,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8945245,
          9090,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9611377,
          9100,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9625129,
          9111,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9866422,
          9122,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10403784,
          9130,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10960765,
          9150,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11006614,
          9151,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11404482,
          9160,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11601803,
          9170,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          12008022,
          9180,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          12405451,
          9190,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          12665416,
          9200,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          12909508,
          9220,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          13109752,
          9230,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          13555777,
          9250,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          13727747,
          9260,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          14248044,
          9271,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          14433840,
          9280,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          14645900,
          9291,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          15048375,
          9300,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          15426015,
          9320,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          15680713,
          9340,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          15756296,
          9350,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          15912007,
          9360,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          16356547,
          9370,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          17335450,
          9381,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 3],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          18062739,
          9420,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          18625e3,
          9430,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          20465806,
          1e6,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 5],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          2157e4,
          1001e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 7],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          21786291,
          1001002,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 7],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          22515962,
          1001003,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 7],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          2279e4,
          1002e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          23176015,
          1002001,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          23450253,
          1002004,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          23565293,
          1002005,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
      ];
    },
    9811: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.upgrades = void 0));
      a.upgrades = [
        [
          0,
          0,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          29231,
          1,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          188836,
          5,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          199405,
          6,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          214264,
          7,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          244358,
          8,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          303079,
          9,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          314201,
          10,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          342400,
          11,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          443963,
          12,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          528470,
          13,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          687751,
          14,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          746085,
          15,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          787923,
          16,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          799302,
          17,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1205128,
          18,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1603423,
          23,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1733218,
          24,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2005673,
          25,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2436698,
          26,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3613564,
          27,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3899547,
          28,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4345767,
          29,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4876134,
          30,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5661442,
          9050,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6321619,
          9080,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6713249,
          9090,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7217907,
          9100,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7229126,
          9110,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7560558,
          9122,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8115869,
          9140,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8638103,
          9151,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9280179,
          9170,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9738717,
          9180,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10156856,
          9190,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10458576,
          9200,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10655116,
          9220,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10879371,
          9230,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11328884,
          9250,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11532856,
          9260,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11933818,
          9270,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          12217535,
          9280,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
          ],
        ],
        [
          12245277,
          9281,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
          ],
        ],
        [
          12532644,
          9291,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
          ],
        ],
        [
          12876189,
          9300,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
          ],
        ],
        [
          13800015,
          9340,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
          ],
        ],
        [
          14188833,
          9360,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
          ],
        ],
        [
          14543918,
          9370,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
          ],
        ],
        [
          15978362,
          9420,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
          ],
        ],
        [
          1645e4,
          9430,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
          ],
        ],
        [
          1784e4,
          9431,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
          ],
        ],
        [
          18407475,
          1000001,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 5],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
          ],
        ],
        [
          19551e3,
          1001002,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 5],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          20181758,
          1001003,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 5],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          20438530,
          1002e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          21169168,
          1002004,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
      ];
    },
    9812: function (e, a, c) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.upgrades = void 0));
      a.upgrades = [
        [
          214356,
          4,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 1],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          392764,
          7,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          409740,
          8,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          809976,
          20,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          877581,
          24,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          879238,
          25,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          889472,
          26,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          902937,
          27,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          932751,
          28,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          991142,
          29,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1030162,
          31,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1119657,
          32,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1199282,
          33,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1342534,
          34,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1392263,
          35,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1431703,
          36,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1433369,
          37,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          1490972,
          41,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2087397,
          43,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2316688,
          44,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          2549864,
          45,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3925782,
          46,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          3925843,
          47,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4207800,
          48,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          4627944,
          49,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5124076,
          50,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5478664,
          900,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5482450,
          9e3,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 4],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5584305,
          9010,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5784566,
          9030,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5879822,
          9031,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5896856,
          9032,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          5897316,
          9033,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6117927,
          9050,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6210274,
          9070,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 2],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6379314,
          9080,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 2],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          6979141,
          9090,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7568453,
          9100,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7766394,
          9111,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7911691,
          9120,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7968866,
          9121,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          7982889,
          9122,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          8514322,
          9130,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9091726,
          9140,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9091774,
          9150,
          [
            ["0xdf6acb689907609b", 3],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 1],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9406726,
          9160,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          9921066,
          9170,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10007115,
          9180,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 5],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10480973,
          9190,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10578091,
          9200,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10678509,
          9210,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          10811001,
          9220,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11096116,
          9230,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11409279,
          9250,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11584820,
          9251,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11716837,
          9260,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11876919,
          9261,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
          ],
        ],
        [
          11987927,
          9270,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          12077324,
          9271,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          12301871,
          9280,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          12604343,
          9290,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 2],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          12841034,
          9300,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          13128237,
          9310,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 1],
            ["0xf3ff14d5ab527059", 1],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          13272363,
          9320,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          13483497,
          9330,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          13649433,
          9340,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          13761100,
          9350,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          13847400,
          9360,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          14249200,
          9370,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 2],
            ["0xf3ff14d5ab527059", 2],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          14576855,
          9380,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 3],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 3],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
          ],
        ],
        [
          14849830,
          9390,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 1],
            ["0x91d5df18b0d2cf58", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 3],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          15146832,
          9400,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 3],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          15332317,
          9401,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 1],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 3],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          15661793,
          9420,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          16165469,
          9430,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 4],
            ["0x49eaaf1b548a0cb0", 2],
            ["0x91d5df18b0d2cf58", 2],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
          ],
        ],
        [
          18293984,
          102e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 7],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          18293991,
          103e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 8],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          18451783,
          104e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 9],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          18679741,
          1005e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 9],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          19166695,
          1006e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          19234157,
          1006001,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          19542944,
          1007e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          19621258,
          1007001,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          19761406,
          1008e3,
          [
            ["0xdf6acb689907609b", 4],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          20056997,
          1009e3,
          [
            ["0xdf6acb689907609b", 5],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          20368318,
          101e4,
          [
            ["0xdf6acb689907609b", 5],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 10],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x6ff52ee858e6c5bd", 1],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          20649086,
          1011e3,
          [
            ["0xdf6acb689907609b", 5],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 11],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x6ff52ee858e6c5bd", 1],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
        [
          21217837,
          1011001,
          [
            ["0xdf6acb689907609b", 5],
            ["0x37e397fc7c91f5e4", 2],
            ["0x40fe3ad401f8959a", 6],
            ["0xd2bc9897eed08f15", 3],
            ["0xf78b278be53f454c", 2],
            ["0xaf2c0297a23e6d3d", 11],
            ["0x49eaaf1b548a0cb0", 3],
            ["0x91d5df18b0d2cf58", 2],
            ["0x2a5e924655399e60", 1],
            ["0xed99c5acb25eedf5", 3],
            ["0xcbca25e39f142387", 2],
            ["0x687ad44ad37f03c2", 1],
            ["0xab3c0572291feb8b", 1],
            ["0xbc9d89904f5b923f", 1],
            ["0x37c8bb1350a9a2a8", 4],
            ["0xf3ff14d5ab527059", 3],
            ["0x6ff52ee858e6c5bd", 1],
            ["0x17a6bc0d0062aeb3", 1],
            ["0x18ef58a3b67ba770", 1],
            ["0xfbc577b9d747efd6", 1],
          ],
        ],
      ];
    },
  },
]);
