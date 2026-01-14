(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [35],
  {
    3452: function (e, t, a) {
      function n(e) {
        const t = a.p;
        let n = "";
        return (
          (!t || t.indexOf("://") < 0) &&
            (n += window.location.protocol + "//" + window.location.host),
          (n += t || "/"),
          n + e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.packageInfo = void 0));
      t.packageInfo = {
        name: "@polkadot/types",
        path:
          (n("node_modules/@polkadot/types/packageInfo.js"),
          { url: n("node_modules/@polkadot/types/packageInfo.js") }.url
            ? new URL(
                { url: n("node_modules/@polkadot/types/packageInfo.js") }.url,
              ).pathname.substring(
                0,
                new URL(
                  { url: n("node_modules/@polkadot/types/packageInfo.js") }.url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    3453: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), a(9707));
      var n = a(9708);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
    },
    4536: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "flattenUniq", {
          enumerable: !0,
          get: function () {
            return n.flattenUniq;
          },
        }),
        Object.defineProperty(t, "getSiName", {
          enumerable: !0,
          get: function () {
            return r.getSiName;
          },
        }),
        Object.defineProperty(t, "getUniqTypes", {
          enumerable: !0,
          get: function () {
            return o.getUniqTypes;
          },
        }),
        Object.defineProperty(t, "toCallsOnly", {
          enumerable: !0,
          get: function () {
            return i.toCallsOnly;
          },
        }),
        Object.defineProperty(t, "validateTypes", {
          enumerable: !0,
          get: function () {
            return s.validateTypes;
          },
        }));
      var n = a(5505),
        r = a(9543),
        o = a(9544),
        i = a(9546),
        s = a(6531);
    },
    4537: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectNameToString = t.objectNameToCamel = void 0));
      var n = a(2757);
      function r(e) {
        return (t) => {
          let { name: a } = t;
          return e(a);
        };
      }
      ((t.objectNameToCamel = r(n.stringCamelCase)),
        (t.objectNameToString = r((e) => e.toString())));
    },
    5505: function (e, t, a) {
      "use strict";
      function n(e, t) {
        void 0 === t && (t = []);
        for (let a = 0, r = e.length; a < r; a++) {
          const r = e[a];
          Array.isArray(r) ? n(r, t) : t.push(r);
        }
        return [...new Set(t)];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.flattenUniq = n));
    },
    5506: function (e, t, a) {
      "use strict";
      var n = a(9);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        assetConversion: !0,
        assets: !0,
        aura: !0,
        authorship: !0,
        babe: !0,
        balances: !0,
        beefy: !0,
        benchmark: !0,
        blockbuilder: !0,
        collective: !0,
        consensus: !0,
        contracts: !0,
        democracy: !0,
        dev: !0,
        discovery: !0,
        elections: !0,
        engine: !0,
        evm: !0,
        extrinsics: !0,
        fungibles: !0,
        genericAsset: !0,
        genesisBuilder: !0,
        gilt: !0,
        grandpa: !0,
        identity: !0,
        imOnline: !0,
        lottery: !0,
        mixnet: !0,
        mmr: !0,
        nfts: !0,
        nompools: !0,
        offences: !0,
        pow: !0,
        proxy: !0,
        recovery: !0,
        scheduler: !0,
        session: !0,
        society: !0,
        staking: !0,
        statement: !0,
        support: !0,
        syncstate: !0,
        system: !0,
        treasury: !0,
        txpayment: !0,
        txqueue: !0,
        uniques: !0,
        utility: !0,
        vesting: !0,
        attestations: !0,
        bridges: !0,
        claims: !0,
        crowdloan: !0,
        cumulus: !0,
        finality: !0,
        parachains: !0,
        poll: !0,
        purchase: !0,
        xcm: !0,
        contractsAbi: !0,
        eth: !0,
        nimbus: !0,
        ormlOracle: !0,
        ormlTokens: !0,
        rpc: !0,
        author: !0,
        chain: !0,
        childstate: !0,
        offchain: !0,
        payment: !0,
        state: !0,
      };
      (Object.defineProperty(t, "assetConversion", {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      }),
        Object.defineProperty(t, "assets", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "attestations", {
          enumerable: !0,
          get: function () {
            return te.default;
          },
        }),
        Object.defineProperty(t, "aura", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "author", {
          enumerable: !0,
          get: function () {
            return ge.default;
          },
        }),
        Object.defineProperty(t, "authorship", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "babe", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "balances", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "beefy", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "benchmark", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "blockbuilder", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "bridges", {
          enumerable: !0,
          get: function () {
            return ae.default;
          },
        }),
        Object.defineProperty(t, "chain", {
          enumerable: !0,
          get: function () {
            return be.default;
          },
        }),
        Object.defineProperty(t, "childstate", {
          enumerable: !0,
          get: function () {
            return Ve.default;
          },
        }),
        Object.defineProperty(t, "claims", {
          enumerable: !0,
          get: function () {
            return ne.default;
          },
        }),
        Object.defineProperty(t, "collective", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "consensus", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "contracts", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "contractsAbi", {
          enumerable: !0,
          get: function () {
            return de.default;
          },
        }),
        Object.defineProperty(t, "crowdloan", {
          enumerable: !0,
          get: function () {
            return re.default;
          },
        }),
        Object.defineProperty(t, "cumulus", {
          enumerable: !0,
          get: function () {
            return oe.default;
          },
        }),
        Object.defineProperty(t, "democracy", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "dev", {
          enumerable: !0,
          get: function () {
            return V.default;
          },
        }),
        Object.defineProperty(t, "discovery", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "elections", {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(t, "engine", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "eth", {
          enumerable: !0,
          get: function () {
            return pe.default;
          },
        }),
        Object.defineProperty(t, "evm", {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        Object.defineProperty(t, "extrinsics", {
          enumerable: !0,
          get: function () {
            return I.default;
          },
        }),
        Object.defineProperty(t, "finality", {
          enumerable: !0,
          get: function () {
            return ie.default;
          },
        }),
        Object.defineProperty(t, "fungibles", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "genericAsset", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "genesisBuilder", {
          enumerable: !0,
          get: function () {
            return T.default;
          },
        }),
        Object.defineProperty(t, "gilt", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "grandpa", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(t, "identity", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "imOnline", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(t, "lottery", {
          enumerable: !0,
          get: function () {
            return B.default;
          },
        }),
        Object.defineProperty(t, "mixnet", {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(t, "mmr", {
          enumerable: !0,
          get: function () {
            return N.default;
          },
        }),
        Object.defineProperty(t, "nfts", {
          enumerable: !0,
          get: function () {
            return R.default;
          },
        }),
        Object.defineProperty(t, "nimbus", {
          enumerable: !0,
          get: function () {
            return me.default;
          },
        }),
        Object.defineProperty(t, "nompools", {
          enumerable: !0,
          get: function () {
            return H.default;
          },
        }),
        Object.defineProperty(t, "offchain", {
          enumerable: !0,
          get: function () {
            return ve.default;
          },
        }),
        Object.defineProperty(t, "offences", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "ormlOracle", {
          enumerable: !0,
          get: function () {
            return ye.default;
          },
        }),
        Object.defineProperty(t, "ormlTokens", {
          enumerable: !0,
          get: function () {
            return he.default;
          },
        }),
        Object.defineProperty(t, "parachains", {
          enumerable: !0,
          get: function () {
            return se.default;
          },
        }),
        Object.defineProperty(t, "payment", {
          enumerable: !0,
          get: function () {
            return Se.default;
          },
        }),
        Object.defineProperty(t, "poll", {
          enumerable: !0,
          get: function () {
            return ce.default;
          },
        }),
        Object.defineProperty(t, "pow", {
          enumerable: !0,
          get: function () {
            return D.default;
          },
        }),
        Object.defineProperty(t, "proxy", {
          enumerable: !0,
          get: function () {
            return U.default;
          },
        }),
        Object.defineProperty(t, "purchase", {
          enumerable: !0,
          get: function () {
            return ue.default;
          },
        }),
        Object.defineProperty(t, "recovery", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(t, "rpc", {
          enumerable: !0,
          get: function () {
            return fe.default;
          },
        }),
        Object.defineProperty(t, "scheduler", {
          enumerable: !0,
          get: function () {
            return L.default;
          },
        }),
        Object.defineProperty(t, "session", {
          enumerable: !0,
          get: function () {
            return F.default;
          },
        }),
        Object.defineProperty(t, "society", {
          enumerable: !0,
          get: function () {
            return W.default;
          },
        }),
        Object.defineProperty(t, "staking", {
          enumerable: !0,
          get: function () {
            return q.default;
          },
        }),
        Object.defineProperty(t, "state", {
          enumerable: !0,
          get: function () {
            return _e.default;
          },
        }),
        Object.defineProperty(t, "statement", {
          enumerable: !0,
          get: function () {
            return K.default;
          },
        }),
        Object.defineProperty(t, "support", {
          enumerable: !0,
          get: function () {
            return G.default;
          },
        }),
        Object.defineProperty(t, "syncstate", {
          enumerable: !0,
          get: function () {
            return z.default;
          },
        }),
        Object.defineProperty(t, "system", {
          enumerable: !0,
          get: function () {
            return J.default;
          },
        }),
        Object.defineProperty(t, "treasury", {
          enumerable: !0,
          get: function () {
            return X.default;
          },
        }),
        Object.defineProperty(t, "txpayment", {
          enumerable: !0,
          get: function () {
            return $.default;
          },
        }),
        Object.defineProperty(t, "txqueue", {
          enumerable: !0,
          get: function () {
            return Q.default;
          },
        }),
        Object.defineProperty(t, "uniques", {
          enumerable: !0,
          get: function () {
            return Z.default;
          },
        }),
        Object.defineProperty(t, "utility", {
          enumerable: !0,
          get: function () {
            return Y.default;
          },
        }),
        Object.defineProperty(t, "vesting", {
          enumerable: !0,
          get: function () {
            return ee.default;
          },
        }),
        Object.defineProperty(t, "xcm", {
          enumerable: !0,
          get: function () {
            return le.default;
          },
        }));
      var o = a(9548);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var i = n(a(9561)),
        s = n(a(9563)),
        c = n(a(9565)),
        u = n(a(9567)),
        l = n(a(9568)),
        d = n(a(9571)),
        p = n(a(9572)),
        m = n(a(9575)),
        y = n(a(9577)),
        h = n(a(9579)),
        f = n(a(9580)),
        g = n(a(9581)),
        b = n(a(9584)),
        V = n(a(9585)),
        v = n(a(9587)),
        S = n(a(9589)),
        _ = n(a(9590)),
        C = n(a(9592)),
        I = n(a(9593)),
        x = n(a(9594)),
        P = n(a(9596)),
        T = n(a(9597)),
        M = n(a(9599)),
        k = n(a(9600)),
        O = n(a(9603)),
        A = n(a(9604)),
        B = n(a(9605)),
        E = n(a(9606)),
        N = n(a(9608)),
        R = n(a(9611)),
        H = n(a(9613)),
        w = n(a(9615)),
        D = n(a(9616)),
        U = n(a(9618)),
        j = n(a(9619)),
        L = n(a(9620)),
        F = n(a(9621)),
        W = n(a(9623)),
        q = n(a(9624)),
        K = n(a(9626)),
        G = n(a(9628)),
        z = n(a(9629)),
        J = n(a(9631)),
        X = n(a(9634)),
        $ = n(a(9635)),
        Q = n(a(9636)),
        Z = n(a(9638)),
        Y = n(a(9639)),
        ee = n(a(9640)),
        te = n(a(9641)),
        ae = n(a(9642)),
        ne = n(a(9643)),
        re = n(a(9644)),
        oe = n(a(9645)),
        ie = n(a(9647)),
        se = n(a(9649)),
        ce = n(a(9653)),
        ue = n(a(9654)),
        le = n(a(9655)),
        de = n(a(9659)),
        pe = n(a(9660)),
        me = n(a(9663)),
        ye = n(a(9665)),
        he = n(a(9667)),
        fe = n(a(9669)),
        ge = n(a(9671)),
        be = n(a(9673)),
        Ve = n(a(9675)),
        ve = n(a(9677)),
        Se = n(a(9680)),
        _e = n(a(9683));
    },
    5507: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "decorateConstants", {
          enumerable: !0,
          get: function () {
            return r.decorateConstants;
          },
        }),
        Object.defineProperty(t, "decorateErrors", {
          enumerable: !0,
          get: function () {
            return o.decorateErrors;
          },
        }),
        Object.defineProperty(t, "decorateEvents", {
          enumerable: !0,
          get: function () {
            return i.decorateEvents;
          },
        }),
        Object.defineProperty(t, "decorateExtrinsics", {
          enumerable: !0,
          get: function () {
            return s.decorateExtrinsics;
          },
        }),
        Object.defineProperty(t, "decorateStorage", {
          enumerable: !0,
          get: function () {
            return c.decorateStorage;
          },
        }),
        (t.expandMetadata = u),
        Object.defineProperty(t, "filterCallsSome", {
          enumerable: !0,
          get: function () {
            return s.filterCallsSome;
          },
        }),
        Object.defineProperty(t, "filterEventsSome", {
          enumerable: !0,
          get: function () {
            return i.filterEventsSome;
          },
        }));
      var n = a(5508),
        r = a(9696),
        o = a(6538),
        i = a(9697),
        s = a(6536),
        c = a(9698);
      function u(e, t) {
        if (!(t instanceof n.Metadata))
          throw new Error(
            "You need to pass a valid Metadata instance to Decorated",
          );
        const a = t.asLatest,
          u = t.version;
        return {
          consts: (0, r.decorateConstants)(e, a, u),
          errors: (0, o.decorateErrors)(e, a, u),
          events: (0, i.decorateEvents)(e, a, u),
          query: (0, c.decorateStorage)(e, a, u),
          registry: e,
          tx: (0, s.decorateExtrinsics)(e, a, u),
        };
      }
    },
    5508: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Metadata = void 0));
      var n = a(2757),
        r = a(6537);
      const o = new Uint8Array([109, 101, 116, 97, 9]),
        i = o.length - 1;
      function s(e, t) {
        if (0 === t.length) return o;
        if (9 === t[i])
          try {
            return new r.MetadataVersioned(e, t);
          } catch {
            t[i] = 10;
          }
        return t;
      }
      class Metadata extends r.MetadataVersioned {
        constructor(e, t) {
          super(
            e,
            (0, n.isU8a)(t) || (0, n.isString)(t)
              ? s(e, (0, n.u8aToU8a)(t))
              : t,
          );
        }
      }
      t.Metadata = Metadata;
    },
    5509: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PortableRegistry", {
          enumerable: !0,
          get: function () {
            return n.PortableRegistry;
          },
        }),
        Object.defineProperty(t, "convertSiV0toV1", {
          enumerable: !0,
          get: function () {
            return r.toV1;
          },
        }));
      var n = a(9702),
        r = a(9703);
    },
    6528: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = a(9520);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var r = a(9530);
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === r[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            }));
      });
      var o = a(9540);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
    },
    6531: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validateTypes = s));
      var n = a(2757),
        r = a(9545),
        o = a(5505);
      const i = (0, n.logger)("metadata");
      function s(e, t, a) {
        const n = (0, o.flattenUniq)((0, r.extractTypes)(a))
          .filter((t) => !e.hasType(t) && !e.isLookupType(t))
          .sort();
        if (0 !== n.length) {
          const e = "Unknown types found, no types for " + n.join(", ");
          if (t) throw new Error(e);
          i.warn(e);
        }
        return a;
      }
    },
    6532: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = a(9547);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
    },
    6533: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AllHashers = void 0));
      t.AllHashers = {
        Blake2_128: null,
        Blake2_256: null,
        Blake2_128Concat: null,
        Twox128: null,
        Twox256: null,
        Twox64Concat: null,
        Identity: null,
      };
    },
    6534: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.v1 = t.Si1Variant = void 0));
      const n = (t.Si1Variant = {
        name: "Text",
        fields: "Vec<Si1Field>",
        index: "u8",
        docs: "Vec<Text>",
      });
      t.v1 = {
        Si1Field: {
          name: "Option<Text>",
          type: "Si1LookupTypeId",
          typeName: "Option<Text>",
          docs: "Vec<Text>",
        },
        Si1LookupTypeId: "Compact<u32>",
        Si1Path: "Si0Path",
        Si1Type: {
          path: "Si1Path",
          params: "Vec<Si1TypeParameter>",
          def: "Si1TypeDef",
          docs: "Vec<Text>",
        },
        Si1TypeDef: {
          _enum: {
            Composite: "Si1TypeDefComposite",
            Variant: "Si1TypeDefVariant",
            Sequence: "Si1TypeDefSequence",
            Array: "Si1TypeDefArray",
            Tuple: "Si1TypeDefTuple",
            Primitive: "Si1TypeDefPrimitive",
            Compact: "Si1TypeDefCompact",
            BitSequence: "Si1TypeDefBitSequence",
            HistoricMetaCompat: "Type",
          },
        },
        Si1TypeDefArray: { len: "u32", type: "Si1LookupTypeId" },
        Si1TypeDefBitSequence: {
          bitStoreType: "Si1LookupTypeId",
          bitOrderType: "Si1LookupTypeId",
        },
        Si1TypeDefCompact: { type: "Si1LookupTypeId" },
        Si1TypeDefComposite: { fields: "Vec<Si1Field>" },
        Si1TypeDefPrimitive: "Si0TypeDefPrimitive",
        Si1TypeDefSequence: { type: "Si1LookupTypeId" },
        Si1TypeDefTuple: "Vec<Si1LookupTypeId>",
        Si1TypeParameter: { name: "Text", type: "Option<Si1LookupTypeId>" },
        Si1TypeDefVariant: { variants: "Vec<Si1Variant>" },
        Si1Variant: n,
      };
    },
    6535: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.knownOrigins = t.default = void 0));
      var n = a(9558);
      const r = {
        Fixed64: "Int<64, Fixed64>",
        FixedI64: "Int<64, FixedI64>",
        FixedU64: "UInt<64, FixedU64>",
        Fixed128: "Int<128, Fixed128>",
        FixedI128: "Int<128, FixedI128>",
        FixedU128: "UInt<128, FixedU128>",
        I32F32: "Int<64, I32F32>",
        U32F32: "UInt<64, U32F32>",
        PerU16: "UInt<16, PerU16>",
        Perbill: "UInt<32, Perbill>",
        Percent: "UInt<8, Percent>",
        Permill: "UInt<32, Permill>",
        Perquintill: "UInt<64, Perquintill>",
      };
      t.knownOrigins = {
        Council: "CollectiveOrigin",
        System: "SystemOrigin",
        TechnicalCommittee: "CollectiveOrigin",
        Xcm: "XcmOrigin",
        XcmPallet: "XcmOrigin",
        Authority: "AuthorityOrigin",
        GeneralCouncil: "CollectiveOrigin",
      };
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          ...r,
          AccountId: "AccountId32",
          AccountId20: "GenericEthereumAccountId",
          AccountId32: "GenericAccountId32",
          AccountId33: "GenericAccountId33",
          AccountIdOf: "AccountId",
          AccountIndex: "GenericAccountIndex",
          Address: "MultiAddress",
          AssetId: "u32",
          Balance: "UInt<128, Balance>",
          BalanceOf: "Balance",
          Block: "GenericBlock",
          BlockNumber: "u32",
          BlockNumberFor: "BlockNumber",
          BlockNumberOf: "BlockNumber",
          Call: "GenericCall",
          CallHash: "Hash",
          CallHashOf: "CallHash",
          ChangesTrieConfiguration: {
            digestInterval: "u32",
            digestLevels: "u32",
          },
          ChangesTrieSignal: {
            _enum: { NewConfiguration: "Option<ChangesTrieConfiguration>" },
          },
          ConsensusEngineId: "GenericConsensusEngineId",
          CodecHash: "Hash",
          CrateVersion: { major: "u16", minor: "u8", patch: "u8" },
          Digest: { logs: "Vec<DigestItem>" },
          DigestItem: {
            _enum: {
              Other: "Bytes",
              AuthoritiesChange: "Vec<AuthorityId>",
              ChangesTrieRoot: "Hash",
              SealV0: "SealV0",
              Consensus: "Consensus",
              Seal: "Seal",
              PreRuntime: "PreRuntime",
              ChangesTrieSignal: "ChangesTrieSignal",
              RuntimeEnvironmentUpdated: "Null",
            },
          },
          ExtrinsicsWeight: { normal: "Weight", operational: "Weight" },
          H32: "[u8; 4; H32]",
          H64: "[u8; 8; H64]",
          H128: "[u8; 16; H128]",
          H160: "[u8; 20; H160]",
          H256: "[u8; 32; H256]",
          H512: "[u8; 64; H512]",
          H1024: "[u8; 128; H1024]",
          H2048: "[u8; 256; H2048]",
          Hash: "H256",
          Header: {
            parentHash: "Hash",
            number: "Compact<BlockNumber>",
            stateRoot: "Hash",
            extrinsicsRoot: "Hash",
            digest: "Digest",
          },
          HeaderPartial: { parentHash: "Hash", number: "BlockNumber" },
          IndicesLookupSource: "GenericLookupSource",
          Index: "u32",
          Justification: "(ConsensusEngineId, EncodedJustification)",
          EncodedJustification: "Bytes",
          Justifications: "Vec<Justification>",
          KeyValue: "(StorageKey, StorageData)",
          KeyTypeId: "u32",
          LockIdentifier: "[u8; 8]",
          LookupSource: "MultiAddress",
          LookupTarget: "AccountId",
          ModuleId: "LockIdentifier",
          MultiAddress: "GenericMultiAddress",
          MultiSigner: {
            _enum: {
              Ed25519: "[u8; 32]",
              Sr25519: "[u8; 32]",
              Ecdsa: "[u8; 33]",
            },
          },
          Moment: "UInt<64, Moment>",
          OpaqueCall: "Bytes",
          Origin: "DoNotConstruct<Origin>",
          OriginCaller: { _enum: { System: "SystemOrigin" } },
          PalletId: "LockIdentifier",
          PalletsOrigin: "OriginCaller",
          PalletVersion: { major: "u16", minor: "u8", patch: "u8" },
          Pays: { _enum: ["Yes", "No"] },
          Phantom: "Null",
          PhantomData: "Null",
          Releases: {
            _enum: [
              "V1",
              "V2",
              "V3",
              "V4",
              "V5",
              "V6",
              "V7",
              "V8",
              "V9",
              "V10",
            ],
          },
          RuntimeCall: "Call",
          RuntimeEvent: "Event",
          RuntimeDbWeight: { read: "Weight", write: "Weight" },
          SignedBlock: "SignedBlockWithJustifications",
          SignedBlockWithJustification: {
            block: "Block",
            justification: "Option<EncodedJustification>",
          },
          SignedBlockWithJustifications: {
            block: "Block",
            justifications: "Option<Justifications>",
          },
          Slot: "u64",
          SlotDuration: "u64",
          StorageData: "Bytes",
          StorageInfo: {
            palletName: "Bytes",
            storage_name: "Bytes",
            prefix: "Bytes",
            maxValues: "Option<u32>",
            maxSize: "Option<u32>",
          },
          StorageProof: { trieNodes: "Vec<Bytes>" },
          TransactionPriority: "u64",
          TransactionLongevity: "u64",
          TransactionTag: "Bytes",
          TransactionInfo: {
            _alias: { dataSize: "size" },
            chunkRoot: "H256",
            contentHash: "H256",
            dataSize: "u32",
            blockChunks: "u32",
          },
          TransactionStorageProof: { chunk: "Vec<u8>", proof: "Vec<Vec<u8>>" },
          ValidatorId: "AccountId",
          ValidatorIdOf: "ValidatorId",
          WeightV0: "u32",
          WeightV1: "u64",
          WeightV2: { refTime: "Compact<u64>", proofSize: "Compact<u64>" },
          Weight: "WeightV2",
          WeightMultiplier: "Fixed64",
          PreRuntime: "(ConsensusEngineId, Bytes)",
          SealV0: "(u64, Signature)",
          Seal: "(ConsensusEngineId, Bytes)",
          Consensus: "(ConsensusEngineId, Bytes)",
          ExtrinsicInclusionMode: { _enum: ["AllExtrinsics", "OnlyInherents"] },
        },
      };
    },
    6536: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createCallFunction = u),
        (t.decorateExtrinsics = l),
        (t.filterCallsSome = c));
      var n = a(2757),
        r = a(4534),
        o = a(4536),
        i = a(4537),
        s = a(9685);
      function c(e) {
        let { calls: t } = e;
        return t.isSome;
      }
      function u(e, t, a, r, i) {
        const { fields: c, index: u } = a,
          l = c.length,
          d = new Array(l);
        for (let s = 0; s < l; s++) {
          const { name: e, type: a, typeName: r } = c[s];
          d[s] = (0, n.objectSpread)(
            {
              name: (0, n.stringCamelCase)(e.unwrapOr("param" + s)),
              type: (0, o.getSiName)(t, a),
            },
            r.isSome ? { typeName: r.unwrap() } : null,
          );
        }
        return (0, s.createUnchecked)(
          e,
          r,
          new Uint8Array([i, u.toNumber()]),
          e.createTypeUnsafe("FunctionMetadataLatest", [
            (0, n.objectSpread)({ args: d }, a),
          ]),
        );
      }
      function l(e, t, a) {
        let { lookup: o, pallets: s } = t;
        const l = {},
          d = s.filter(c);
        for (let c = 0, p = d.length; c < p; c++) {
          const { calls: t, index: s, name: p } = d[c],
            m = (0, n.stringCamelCase)(p),
            y = a >= 12 ? s.toNumber() : c;
          (0, n.lazyMethod)(l, m, () =>
            (0, r.lazyVariants)(o, t.unwrap(), i.objectNameToCamel, (t) =>
              u(e, o, t, m, y),
            ),
          );
        }
        return l;
      }
    },
    6537: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MetadataVersioned = void 0));
      var r = n(a(128)),
        o = a(2855),
        i = a(4536),
        s = a(9686),
        c = a(9687),
        u = a(9688),
        l = a(9689),
        d = a(9690),
        p = a(9692),
        m = a(9693),
        y = a(9694),
        h = a(9695);
      class MetadataVersioned extends o.Struct {
        constructor(e, t) {
          (super(e, { magicNumber: y.MagicNumber, metadata: "MetadataAll" }, t),
            (0, r.default)(this, "__internal__converted", new Map()),
            (0, r.default)(this, "__internal__assertVersion", (e) => {
              if (this.version > e)
                throw new Error(
                  `Cannot convert metadata from version ${this.version} to ${e}`,
                );
              return this.version === e;
            }),
            (0, r.default)(this, "__internal__getVersion", (e, t) => {
              if ("latest" !== e && this.__internal__assertVersion(e)) {
                const t = "asV" + e;
                return this.__internal__metadata()[t];
              }
              if (!this.__internal__converted.has(e)) {
                const a =
                  "latest" === e ? "asV" + h.LATEST_VERSION : "asV" + (e - 1);
                this.__internal__converted.set(
                  e,
                  t(this.registry, this[a], this.version),
                );
              }
              return this.__internal__converted.get(e);
            }),
            (0, r.default)(this, "__internal__metadata", () =>
              this.getT("metadata"),
            ));
        }
        get asCallsOnly() {
          return new MetadataVersioned(this.registry, {
            magicNumber: this.magicNumber,
            metadata: this.registry.createTypeUnsafe("MetadataAll", [
              (0, i.toCallsOnly)(this.registry, this.asLatest),
              h.TO_CALLS_VERSION,
            ]),
          });
        }
        get asV9() {
          return (
            this.__internal__assertVersion(9),
            this.__internal__metadata().asV9
          );
        }
        get asV10() {
          return this.__internal__getVersion(10, s.toV10);
        }
        get asV11() {
          return this.__internal__getVersion(11, c.toV11);
        }
        get asV12() {
          return this.__internal__getVersion(12, u.toV12);
        }
        get asV13() {
          return this.__internal__getVersion(13, l.toV13);
        }
        get asV14() {
          return this.__internal__getVersion(14, d.toV14);
        }
        get asV15() {
          return this.__internal__getVersion(15, p.toV15);
        }
        get asLatest() {
          return this.__internal__getVersion("latest", m.toLatest);
        }
        get magicNumber() {
          return this.getT("magicNumber");
        }
        get version() {
          return this.__internal__metadata().index;
        }
        getUniqTypes(e) {
          return (0, i.getUniqTypes)(this.registry, this.asLatest, e);
        }
        toJSON() {
          return (this.asLatest, super.toJSON());
        }
      }
      t.MetadataVersioned = MetadataVersioned;
    },
    6538: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decorateErrors = s),
        (t.variantToMeta = i));
      var n = a(2757),
        r = a(4534),
        o = a(4537);
      function i(e, t) {
        return (0, n.objectSpread)(
          {
            args: t.fields.map((t) => {
              let { type: a } = t;
              return e.getTypeDef(a).type;
            }),
          },
          t,
        );
      }
      function s(e, t, a) {
        let { lookup: s, pallets: c } = t;
        const u = {};
        for (let l = 0, d = c.length; l < d; l++) {
          const { errors: t, index: d, name: p } = c[l];
          if (t.isSome) {
            const c = a >= 12 ? d.toNumber() : l;
            (0, n.lazyMethod)(u, (0, n.stringCamelCase)(p), () =>
              (0, r.lazyVariants)(s, t.unwrap(), o.objectNameToString, (t) => ({
                is: (e) =>
                  (0, n.isCodec)(e) &&
                  (0, n.isCodec)(e.index) &&
                  e.index.eq(c) &&
                  ((0, n.isU8a)(e.error)
                    ? e.error[0] === t.index.toNumber()
                    : (0, n.isCodec)(e.error) && e.error.eq(t.index)),
                meta: e.createTypeUnsafe("ErrorMetadataLatest", [i(s, t)]),
              })),
            );
          }
        }
        return u;
      }
    },
    6539: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NO_RAW_ARGS = void 0),
        (t.createFunction = v),
        (t.createKeyInspect = p),
        (t.createKeyRaw = m),
        (t.createKeyRawParts = d));
      var n = a(2855),
        r = a(2757),
        o = a(2961),
        i = a(4536),
        s = a(9699);
      const c = (t.NO_RAW_ARGS = { args: [], hashers: [], keys: [] });
      function u(e) {
        return !(0, r.isUndefined)(e);
      }
      function l(e, t) {
        let { method: a, section: n } = e,
          { args: o, keys: i } = t;
        if (!Array.isArray(o))
          throw new Error(
            `Call to ${(0, r.stringCamelCase)(n || "unknown")}.${(0, r.stringCamelCase)(a || "unknown")} needs ${i.length} arguments`,
          );
        if (o.filter(u).length !== i.length)
          throw new Error(
            `Call to ${(0, r.stringCamelCase)(n || "unknown")}.${(0, r.stringCamelCase)(a || "unknown")} needs ${i.length} arguments, found [${o.join(", ")}]`,
          );
      }
      function d(e, t, a) {
        let { args: n, hashers: r, keys: i } = a;
        const c = i.length,
          u = new Array(c);
        for (let o = 0; o < c; o++)
          u[o] = (0, s.getHasher)(r[o])(
            e.createTypeUnsafe(e.createLookupType(i[o]), [n[o]]).toU8a(),
          );
        return [
          [
            (0, o.xxhashAsU8a)(t.prefix, 128),
            (0, o.xxhashAsU8a)(t.method, 128),
          ],
          u,
        ];
      }
      function p(e, t, a) {
        l(t, a);
        const { meta: n } = t,
          [r, o] = d(e, t, a);
        let s = [];
        if (n.type.isMap) {
          const { hashers: t, key: a } = n.type.asMap;
          s =
            1 === t.length
              ? [`${t[0].type}(${(0, i.getSiName)(e.lookup, a)})`]
              : e.lookup
                  .getSiType(a)
                  .def.asTuple.map(
                    (a, n) => `${t[n].type}(${(0, i.getSiName)(e.lookup, a)})`,
                  );
        }
        const c = ["module", "method"].concat(...a.args.map((e, t) => s[t]));
        return {
          inner: r.concat(...o).map((e, t) => ({ name: c[t], outer: [e] })),
        };
      }
      function m(e, t, a) {
        const [n, o] = d(e, t, a);
        return (0, r.u8aConcat)(...n, ...o);
      }
      function y(e, t, a) {
        return (l(t, a), (0, r.compactAddLength)(m(e, t, a)));
      }
      function h(e, t, a) {
        const {
          meta: { type: n },
        } = t;
        return function () {
          if (n.isPlain)
            return a.skipHashing
              ? {
                  inner: [],
                  name: "wellKnown",
                  outer: [(0, r.u8aToU8a)(a.key)],
                }
              : p(e, t, c);
          const { hashers: o, key: i } = n.asMap;
          for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++)
            u[l] = arguments[l];
          return 1 === o.length
            ? p(e, t, { args: u, hashers: o, keys: [i] })
            : p(e, t, {
                args: u,
                hashers: o,
                keys: e.lookup.getSiType(i).def.asTuple,
              });
        };
      }
      function f(e, t, a) {
        const {
          meta: { type: n },
        } = t;
        let o = null;
        return function () {
          if (n.isPlain)
            return (
              o ||
                (o = a.skipHashing
                  ? (0, r.compactAddLength)((0, r.u8aToU8a)(a.key))
                  : y(e, t, c)),
              o
            );
          const { hashers: i, key: s } = n.asMap;
          for (var u = arguments.length, l = new Array(u), d = 0; d < u; d++)
            l[d] = arguments[d];
          return 1 === i.length
            ? y(e, t, { args: l, hashers: i, keys: [s] })
            : y(e, t, {
                args: l,
                hashers: i,
                keys: e.lookup.getSiType(s).def.asTuple,
              });
        };
      }
      function g(e, t, a) {
        const { meta: n, method: o, prefix: i, section: s } = t,
          c = f(e, t, a);
        return (
          (c.inspect = h(e, t, a)),
          (c.meta = n),
          (c.method = (0, r.stringCamelCase)(o)),
          (c.prefix = i),
          (c.section = s),
          (c.toJSON = () =>
            (0, r.objectSpread)(
              { storage: { method: o, prefix: i, section: s } },
              n.toJSON(),
            )),
          c
        );
      }
      function b(e, t, a, n) {
        let {
            meta: { docs: r, name: o, type: i },
            section: s,
          } = t,
          { method: c } = a;
        const u = e.createTypeUnsafe("StorageEntryMetadataLatest", [
          {
            docs: r,
            fallback: e.createTypeUnsafe("Bytes", []),
            modifier: e.createTypeUnsafe("StorageEntryModifierLatest", [1]),
            name: o,
            type: e.createTypeUnsafe("StorageEntryTypeLatest", [
              i.asMap.key,
              0,
            ]),
          },
        ]);
        n.meta = u;
        const l = function () {
          return e.createTypeUnsafe("StorageKey", [
            n(...arguments),
            { method: c, section: s },
          ]);
        };
        return ((l.meta = u), l);
      }
      function V(e, t, a) {
        const {
          meta: { type: o },
          method: i,
          section: s,
        } = t;
        return (
          (a.iterKey = b(e, t, a, function () {
            for (var a = arguments.length, u = new Array(a), l = 0; l < a; l++)
              u[l] = arguments[l];
            if (u.length && (o.isPlain || u.length >= o.asMap.hashers.length))
              throw new Error(
                `Iteration of ${(0, r.stringCamelCase)(s || "unknown")}.${(0, r.stringCamelCase)(i || "unknown")} needs arguments to be at least one less than the full arguments, found [${u.join(", ")}]`,
              );
            if (u.length && o.isMap) {
              const { hashers: a, key: r } = o.asMap,
                i = 1 === a.length ? [r] : e.lookup.getSiType(r).def.asTuple;
              return new n.Raw(
                e,
                m(e, t, {
                  args: u,
                  hashers: a.slice(0, u.length),
                  keys: i.slice(0, u.length),
                }),
              );
            }
            return new n.Raw(e, m(e, t, c));
          })),
          a
        );
      }
      function v(e, t, a) {
        const {
            meta: { type: n },
          } = t,
          o = g(e, t, a);
        return (
          n.isMap && V(e, t, o),
          (o.keyPrefix = function () {
            return (
              (o.iterKey && o.iterKey(...arguments)) ||
              (0, r.compactStripLength)(o())[1]
            );
          }),
          o
        );
      }
    },
    6540: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createRuntimeFunction = s));
      var n = a(3123),
        r = a(6539);
      function o(e, t) {
        const a = t.toLowerCase();
        return e.lookup.types.find(
          (e) =>
            (e.type.def.isPrimitive &&
              e.type.def.asPrimitive.toString().toLowerCase() === a) ||
            (e.type.def.isHistoricMetaCompat &&
              e.type.def.asHistoricMetaCompat.toString().toLowerCase() === a),
        );
      }
      function i(e, t) {
        let a = o(e, t);
        if (!a && ("Bytes" === t || t.startsWith("[u8;"))) {
          const r = o(e, "u8");
          if (r)
            if ("Bytes" === t)
              a = e.lookup.types.find(
                (e) =>
                  (e.type.def.isSequence &&
                    e.type.def.asSequence.type.eq(r.id)) ||
                  (e.type.def.isHistoricMetaCompat &&
                    e.type.def.asHistoricMetaCompat.eq(t)),
              );
            else {
              const o = (0, n.getTypeDef)(t);
              a = e.lookup.types.find(
                (e) =>
                  (e.type.def.isArray &&
                    e.type.def.asArray.eq({ len: o.length, type: r.id })) ||
                  (e.type.def.isHistoricMetaCompat &&
                    e.type.def.asHistoricMetaCompat.eq(t)),
              );
            }
        }
        return (a || console.warn(`Unable to map ${t} to a lookup index`), a);
      }
      function s(e, t, a) {
        let { method: n, prefix: o, section: s } = e,
          { docs: c, type: u } = a;
        return (e) => {
          var a;
          return (0, r.createFunction)(
            e,
            {
              meta: e.createTypeUnsafe("StorageEntryMetadataLatest", [
                {
                  docs: e.createTypeUnsafe("Vec<Text>", [[c]]),
                  modifier: e.createTypeUnsafe("StorageEntryModifierLatest", [
                    "Required",
                  ]),
                  name: e.createTypeUnsafe("Text", [n]),
                  toJSON: () => t,
                  type: e.createTypeUnsafe("StorageEntryTypeLatest", [
                    {
                      Plain:
                        (null === (a = i(e, u)) || void 0 === a
                          ? void 0
                          : a.id) || 0,
                    },
                  ]),
                },
              ]),
              method: n,
              prefix: o,
              section: s,
            },
            { key: t, skipHashing: !0 },
          );
        };
      }
    },
    9540: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BitVec", {
          enumerable: !0,
          get: function () {
            return n.BitVec;
          },
        }),
        Object.defineProperty(t, "Bool", {
          enumerable: !0,
          get: function () {
            return n.Bool;
          },
        }),
        Object.defineProperty(t, "Bytes", {
          enumerable: !0,
          get: function () {
            return n.Bytes;
          },
        }),
        Object.defineProperty(t, "Data", {
          enumerable: !0,
          get: function () {
            return r.Data;
          },
        }),
        Object.defineProperty(t, "F32", {
          enumerable: !0,
          get: function () {
            return n.F32;
          },
        }),
        Object.defineProperty(t, "F64", {
          enumerable: !0,
          get: function () {
            return n.F64;
          },
        }),
        Object.defineProperty(t, "I128", {
          enumerable: !0,
          get: function () {
            return n.I128;
          },
        }),
        Object.defineProperty(t, "I16", {
          enumerable: !0,
          get: function () {
            return n.I16;
          },
        }),
        Object.defineProperty(t, "I256", {
          enumerable: !0,
          get: function () {
            return n.I256;
          },
        }),
        Object.defineProperty(t, "I32", {
          enumerable: !0,
          get: function () {
            return n.I32;
          },
        }),
        Object.defineProperty(t, "I64", {
          enumerable: !0,
          get: function () {
            return n.I64;
          },
        }),
        Object.defineProperty(t, "I8", {
          enumerable: !0,
          get: function () {
            return n.I8;
          },
        }),
        Object.defineProperty(t, "ISize", {
          enumerable: !0,
          get: function () {
            return n.ISize;
          },
        }),
        Object.defineProperty(t, "Null", {
          enumerable: !0,
          get: function () {
            return n.Null;
          },
        }),
        Object.defineProperty(t, "OptionBool", {
          enumerable: !0,
          get: function () {
            return n.OptionBool;
          },
        }),
        Object.defineProperty(t, "StorageKey", {
          enumerable: !0,
          get: function () {
            return o.StorageKey;
          },
        }),
        Object.defineProperty(t, "Text", {
          enumerable: !0,
          get: function () {
            return n.Text;
          },
        }),
        Object.defineProperty(t, "Type", {
          enumerable: !0,
          get: function () {
            return n.Type;
          },
        }),
        Object.defineProperty(t, "U128", {
          enumerable: !0,
          get: function () {
            return n.U128;
          },
        }),
        Object.defineProperty(t, "U16", {
          enumerable: !0,
          get: function () {
            return n.U16;
          },
        }),
        Object.defineProperty(t, "U256", {
          enumerable: !0,
          get: function () {
            return n.U256;
          },
        }),
        Object.defineProperty(t, "U32", {
          enumerable: !0,
          get: function () {
            return n.U32;
          },
        }),
        Object.defineProperty(t, "U64", {
          enumerable: !0,
          get: function () {
            return n.U64;
          },
        }),
        Object.defineProperty(t, "U8", {
          enumerable: !0,
          get: function () {
            return n.U8;
          },
        }),
        Object.defineProperty(t, "USize", {
          enumerable: !0,
          get: function () {
            return n.USize;
          },
        }),
        Object.defineProperty(t, "bool", {
          enumerable: !0,
          get: function () {
            return n.bool;
          },
        }),
        Object.defineProperty(t, "f32", {
          enumerable: !0,
          get: function () {
            return n.f32;
          },
        }),
        Object.defineProperty(t, "f64", {
          enumerable: !0,
          get: function () {
            return n.f64;
          },
        }),
        Object.defineProperty(t, "i128", {
          enumerable: !0,
          get: function () {
            return n.i128;
          },
        }),
        Object.defineProperty(t, "i16", {
          enumerable: !0,
          get: function () {
            return n.i16;
          },
        }),
        Object.defineProperty(t, "i256", {
          enumerable: !0,
          get: function () {
            return n.i256;
          },
        }),
        Object.defineProperty(t, "i32", {
          enumerable: !0,
          get: function () {
            return n.i32;
          },
        }),
        Object.defineProperty(t, "i64", {
          enumerable: !0,
          get: function () {
            return n.i64;
          },
        }),
        Object.defineProperty(t, "i8", {
          enumerable: !0,
          get: function () {
            return n.i8;
          },
        }),
        Object.defineProperty(t, "isize", {
          enumerable: !0,
          get: function () {
            return n.isize;
          },
        }),
        Object.defineProperty(t, "u128", {
          enumerable: !0,
          get: function () {
            return n.u128;
          },
        }),
        Object.defineProperty(t, "u16", {
          enumerable: !0,
          get: function () {
            return n.u16;
          },
        }),
        Object.defineProperty(t, "u256", {
          enumerable: !0,
          get: function () {
            return n.u256;
          },
        }),
        Object.defineProperty(t, "u32", {
          enumerable: !0,
          get: function () {
            return n.u32;
          },
        }),
        Object.defineProperty(t, "u64", {
          enumerable: !0,
          get: function () {
            return n.u64;
          },
        }),
        Object.defineProperty(t, "u8", {
          enumerable: !0,
          get: function () {
            return n.u8;
          },
        }),
        Object.defineProperty(t, "usize", {
          enumerable: !0,
          get: function () {
            return n.usize;
          },
        }));
      var n = a(2855),
        r = a(9541),
        o = a(9542);
    },
    9541: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Data = void 0));
      var n = a(2855),
        r = a(2757);
      function o(e, t) {
        const a = t[0];
        if (!a) return [void 0, void 0];
        if (a >= 1 && a <= 33) {
          const n = a - 1,
            r = t.subarray(1, n + 1);
          return [e.createTypeUnsafe("Raw", [r]), 1];
        }
        if (a >= 34 && a <= 37) return [t.subarray(1, 33), a - 32];
        throw new Error("Unable to decode Data, invalid indicator byte " + a);
      }
      function i(e, t) {
        return (0, r.isU8a)(t) || (0, r.isString)(t)
          ? o(e, (0, r.u8aToU8a)(t))
          : t
            ? [t, void 0]
            : [void 0, void 0];
      }
      class Data extends n.Enum {
        constructor(e, t) {
          if (
            (super(
              e,
              {
                None: "Null",
                Raw: "Bytes",
                BlakeTwo256: "H256",
                Sha256: "H256",
                Keccak256: "H256",
                ShaThree256: "H256",
              },
              ...i(e, t),
            ),
            this.isRaw && this.asRaw.length > 32)
          )
            throw new Error(
              "Data.Raw values are limited to a maximum length of 32 bytes",
            );
        }
        get asBlakeTwo256() {
          return this.value;
        }
        get asKeccak256() {
          return this.value;
        }
        get asRaw() {
          return this.value;
        }
        get asSha256() {
          return this.value;
        }
        get asShaThree256() {
          return this.value;
        }
        get isBlakeTwo256() {
          return 2 === this.index;
        }
        get isKeccak256() {
          return 4 === this.index;
        }
        get isNone() {
          return 0 === this.index;
        }
        get isRaw() {
          return 1 === this.index;
        }
        get isSha256() {
          return 3 === this.index;
        }
        get isShaThree256() {
          return 5 === this.index;
        }
        get encodedLength() {
          return this.toU8a().length;
        }
        toU8a() {
          if (0 === this.index) return new Uint8Array(1);
          if (1 === this.index) {
            const e = this.value.toU8a(!0),
              t = Math.min(e.length, 32),
              a = new Uint8Array(t + 1);
            return (a.set([t + 1], 0), a.set(e.subarray(0, t), 1), a);
          }
          const e = new Uint8Array(33);
          return (e.set([this.index + 32], 0), e.set(this.value.toU8a(), 1), e);
        }
      }
      t.Data = Data;
    },
    9542: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StorageKey = void 0));
      var r = n(a(128)),
        o = a(2855),
        i = a(2757),
        s = a(4536),
        c = a(6532);
      const u = {
        Blake2_128: [16, !1],
        Blake2_128Concat: [16, !0],
        Blake2_256: [32, !1],
        Identity: [0, !0],
        Twox128: [16, !1],
        Twox256: [32, !1],
        Twox64Concat: [8, !0],
      };
      function l(e) {
        if ((0, i.isU8a)(e) || !e || (0, i.isString)(e)) return { key: e };
        if (e instanceof StorageKey)
          return { key: e, method: e.method, section: e.section };
        if ((0, i.isFunction)(e))
          return { key: e(), method: e.method, section: e.section };
        if (Array.isArray(e)) {
          const [t, a = []] = e;
          if (!(0, i.isFunction)(t))
            throw new Error("Expected function input for key construction");
          if (t.meta && t.meta.type.isMap) {
            const e = t.meta.type.asMap;
            if (!Array.isArray(a) || a.length !== e.hashers.length)
              throw new Error(
                `Expected an array of ${e.hashers.length} values as params to a Map query`,
              );
          }
          return { key: t(...a), method: t.method, section: t.section };
        }
        throw new Error(`Unable to convert input ${e} to StorageKey`);
      }
      function d(e, t, a) {
        let n = 32;
        const r = a.length,
          o = new Array(r);
        for (let i = 0; i < r; i++) {
          const [r, c] = a[i],
            [l, d] = u[r.type],
            p = d
              ? e.createTypeUnsafe((0, s.getSiName)(e.lookup, c), [
                  t.subarray(n + l),
                ])
              : e.createTypeUnsafe("Raw", [t.subarray(n, n + l)]);
          ((n += l + (d ? p.encodedLength : 0)), (o[i] = p));
        }
        return o;
      }
      function p(e, t, a) {
        if (!a || !a.type.isMap) return [];
        const { hashers: n, key: r } = a.type.asMap,
          o = 1 === n.length ? [r] : e.lookup.getSiType(r).def.asTuple;
        return d(
          e,
          t,
          n.map((e, t) => [e, o[t]]),
        );
      }
      function m(e) {
        if (e instanceof StorageKey) return e.meta;
        if ((0, i.isFunction)(e)) return e.meta;
        if (Array.isArray(e)) {
          const [t] = e;
          return t.meta;
        }
      }
      function y(e, t) {
        if (t instanceof StorageKey) return t.outputType;
        if ((0, i.isFunction)(t))
          return (0, c.unwrapStorageType)(e, t.meta.type);
        if (Array.isArray(t)) {
          const [a] = t;
          if (a.meta) return (0, c.unwrapStorageType)(e, a.meta.type);
        }
        return "Raw";
      }
      class StorageKey extends o.Bytes {
        constructor(e, t, a) {
          void 0 === a && (a = {});
          const { key: n, method: o, section: i } = l(t);
          (super(e, n),
            (0, r.default)(this, "__internal__args", void 0),
            (0, r.default)(this, "__internal__meta", void 0),
            (0, r.default)(this, "__internal__outputType", void 0),
            (0, r.default)(this, "__internal__method", void 0),
            (0, r.default)(this, "__internal__section", void 0),
            (this.__internal__outputType = y(e, t)),
            this.setMeta(m(t), a.section || i, a.method || o));
        }
        get args() {
          return this.__internal__args;
        }
        get meta() {
          return this.__internal__meta;
        }
        get method() {
          return this.__internal__method;
        }
        get outputType() {
          return this.__internal__outputType;
        }
        get section() {
          return this.__internal__section;
        }
        is(e) {
          return e.section === this.section && e.method === this.method;
        }
        setMeta(e, t, a) {
          ((this.__internal__meta = e),
            (this.__internal__method = a || this.__internal__method),
            (this.__internal__section = t || this.__internal__section),
            e &&
              (this.__internal__outputType = (0, c.unwrapStorageType)(
                this.registry,
                e.type,
              )));
          try {
            this.__internal__args = p(this.registry, this.toU8a(!0), e);
          } catch {}
          return this;
        }
        toHuman(e, t) {
          return this.__internal__args.length
            ? this.__internal__args.map((e) => e.toHuman(void 0, t))
            : super.toHuman(void 0, t);
        }
        toRawType() {
          return "StorageKey";
        }
      }
      t.StorageKey = StorageKey;
    },
    9543: function (e, t, a) {
      "use strict";
      function n(e, t) {
        const a = e.getTypeDef(t);
        return a.lookupName || a.type;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSiName = n));
    },
    9544: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUniqTypes = c));
      var n = a(5505),
        r = a(6531);
      function o(e, t) {
        return t.map((t) => {
          let { type: a } = t;
          return e.getTypeDef(a).type;
        });
      }
      function i(e, t) {
        return e.getSiType(t).def.asVariant.variants.map((t) => {
          let { fields: a } = t;
          return o(e, a);
        });
      }
      function s(e) {
        let { lookup: t, pallets: a } = e;
        return a.reduce((e, a) => {
          let { calls: n, constants: r, events: s, storage: c } = a;
          return (
            e.push([o(t, r)]),
            n.isSome && e.push(i(t, n.unwrap().type)),
            s.isSome && e.push(i(t, s.unwrap().type)),
            c.isSome &&
              e.push(
                c.unwrap().items.map((e) => {
                  let { type: a } = e;
                  if (a.isPlain) return [t.getTypeDef(a.asPlain).type];
                  const { hashers: n, key: r, value: o } = a.asMap;
                  return 1 === n.length
                    ? [t.getTypeDef(o).type, t.getTypeDef(r).type]
                    : [
                        t.getTypeDef(o).type,
                        ...t
                          .getSiType(r)
                          .def.asTuple.map((e) => t.getTypeDef(e).type),
                      ];
                }),
              ),
            e
          );
        }, []);
      }
      function c(e, t, a) {
        return (0, r.validateTypes)(e, a, (0, n.flattenUniq)(s(t)));
      }
    },
    9545: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractTypes = c));
      var n = a(3123);
      function r(e, t) {
        let { sub: a } = t;
        const { lookupName: n, type: r } = a;
        return c([n || r]);
      }
      function o(e, t) {
        let { sub: a } = t;
        return c(
          a.map((e) => {
            let { lookupName: t, type: a } = e;
            return t || a;
          }),
        );
      }
      function i(e, t) {
        let { info: a } = t;
        throw new Error(
          `Unhandled: Unable to create and validate type from ${e} (info=${n.TypeDefInfo[a]})`,
        );
      }
      const s = {
        [n.TypeDefInfo.BTreeMap]: o,
        [n.TypeDefInfo.BTreeSet]: r,
        [n.TypeDefInfo.Compact]: r,
        [n.TypeDefInfo.DoNotConstruct]: i,
        [n.TypeDefInfo.Enum]: o,
        [n.TypeDefInfo.HashMap]: o,
        [n.TypeDefInfo.Int]: i,
        [n.TypeDefInfo.Linkage]: r,
        [n.TypeDefInfo.Null]: i,
        [n.TypeDefInfo.Option]: r,
        [n.TypeDefInfo.Plain]: (e, t) => t.lookupName || t.type,
        [n.TypeDefInfo.Range]: r,
        [n.TypeDefInfo.RangeInclusive]: r,
        [n.TypeDefInfo.Result]: o,
        [n.TypeDefInfo.Set]: o,
        [n.TypeDefInfo.Si]: i,
        [n.TypeDefInfo.Struct]: o,
        [n.TypeDefInfo.Tuple]: o,
        [n.TypeDefInfo.UInt]: i,
        [n.TypeDefInfo.Vec]: r,
        [n.TypeDefInfo.VecFixed]: r,
        [n.TypeDefInfo.WrapperKeepOpaque]: r,
        [n.TypeDefInfo.WrapperOpaque]: r,
      };
      function c(e) {
        const t = e.length,
          a = new Array(t);
        for (let r = 0; r < t; r++) {
          const t = e[r],
            o = (0, n.getTypeDef)(t);
          a[r] = s[o.info](t, o);
        }
        return a;
      }
    },
    9546: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toCallsOnly = o));
      var n = a(2757);
      function r(e) {
        const t = e.map((e) => e.toString().trim()),
          a = t.findIndex((e) => !e.length);
        return -1 === a ? t : t.slice(0, a);
      }
      function o(e, t) {
        let { extrinsic: a, lookup: o, pallets: i } = t;
        return e
          .createTypeUnsafe("MetadataLatest", [
            {
              extrinsic: a,
              lookup: {
                types: o.types.map((t) => {
                  let { id: a, type: o } = t;
                  return e.createTypeUnsafe("PortableType", [
                    {
                      id: a,
                      type: (0, n.objectSpread)({}, o, { docs: r(o.docs) }),
                    },
                  ]);
                }),
              },
              pallets: i.map((t) => {
                let { calls: a, index: n, name: r } = t;
                return {
                  calls: e.createTypeUnsafe(
                    "Option<PalletCallMetadataLatest>",
                    [a.unwrapOr(null)],
                  ),
                  index: n,
                  name: r,
                };
              }),
            },
          ])
          .toJSON();
      }
    },
    9547: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unwrapStorageSi = r),
        (t.unwrapStorageType = o));
      var n = a(4536);
      function r(e) {
        return e.isPlain ? e.asPlain : e.asMap.value;
      }
      function o(e, t, a) {
        const o = (0, n.getSiName)(e.lookup, r(t));
        return a ? `Option<${o}>` : o;
      }
    },
    9548: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "metadata", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "runtime", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "scaleInfo", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var r = n(a(9549)),
        o = n(a(6535)),
        i = n(a(9559));
    },
    9549: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AllHashers", {
          enumerable: !0,
          get: function () {
            return n.AllHashers;
          },
        }),
        (t.default = void 0));
      var n = a(6533),
        r = a(9550),
        o = a(9551),
        i = a(9552),
        s = a(9553),
        c = a(9554),
        u = a(9555),
        l = a(9556),
        d = a(9557);
      t.default = {
        rpc: {},
        runtime: r.runtime,
        types: {
          ...o.v9,
          ...i.v10,
          ...s.v11,
          ...c.v12,
          ...u.v13,
          ...l.v14,
          ...d.v15,
          ErrorMetadataLatest: "ErrorMetadataV14",
          EventMetadataLatest: "EventMetadataV14",
          ExtrinsicMetadataLatest: "ExtrinsicMetadataV15",
          FunctionArgumentMetadataLatest: "FunctionArgumentMetadataV14",
          FunctionMetadataLatest: "FunctionMetadataV14",
          MetadataLatest: "MetadataV15",
          PalletCallMetadataLatest: "PalletCallMetadataV14",
          PalletConstantMetadataLatest: "PalletConstantMetadataV14",
          PalletErrorMetadataLatest: "PalletErrorMetadataV14",
          PalletEventMetadataLatest: "PalletEventMetadataV14",
          PalletMetadataLatest: "PalletMetadataV15",
          PalletStorageMetadataLatest: "PalletStorageMetadataV14",
          PortableType: "PortableTypeV14",
          RuntimeApiMetadataLatest: "RuntimeApiMetadataV15",
          SignedExtensionMetadataLatest: "SignedExtensionMetadataV14",
          StorageEntryMetadataLatest: "StorageEntryMetadataV14",
          StorageEntryModifierLatest: "StorageEntryModifierV14",
          StorageEntryTypeLatest: "StorageEntryTypeV14",
          StorageHasher: "StorageHasherV14",
          OpaqueMetadata: "Opaque<Bytes>",
          MetadataAll: {
            _enum: {
              V0: "DoNotConstruct<MetadataV0>",
              V1: "DoNotConstruct<MetadataV1>",
              V2: "DoNotConstruct<MetadataV2>",
              V3: "DoNotConstruct<MetadataV3>",
              V4: "DoNotConstruct<MetadataV4>",
              V5: "DoNotConstruct<MetadataV5>",
              V6: "DoNotConstruct<MetadataV6>",
              V7: "DoNotConstruct<MetadataV7>",
              V8: "DoNotConstruct<MetadataV8>",
              V9: "MetadataV9",
              V10: "MetadataV10",
              V11: "MetadataV11",
              V12: "MetadataV12",
              V13: "MetadataV13",
              V14: "MetadataV14",
              V15: "MetadataV15",
            },
          },
        },
      };
    },
    9550: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
        metadata: {
          description: "Returns the metadata of a runtime",
          params: [],
          type: "OpaqueMetadata",
        },
      };
      t.runtime = {
        Metadata: [
          {
            methods: {
              metadata_at_version: {
                description: "Returns the metadata at a given version.",
                params: [{ name: "version", type: "u32" }],
                type: "Option<OpaqueMetadata>",
              },
              metadata_versions: {
                description: "Returns the supported metadata versions.",
                params: [],
                type: "Vec<u32>",
              },
              ...n,
            },
            version: 2,
          },
          { methods: { ...n }, version: 1 },
        ],
      };
    },
    9551: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v9 = void 0));
      t.v9 = {
        ErrorMetadataV9: { name: "Text", docs: "Vec<Text>" },
        EventMetadataV9: { name: "Text", args: "Vec<Type>", docs: "Vec<Text>" },
        FunctionArgumentMetadataV9: { name: "Text", type: "Type" },
        FunctionMetadataV9: {
          name: "Text",
          args: "Vec<FunctionArgumentMetadataV9>",
          docs: "Vec<Text>",
        },
        MetadataV9: { modules: "Vec<ModuleMetadataV9>" },
        ModuleConstantMetadataV9: {
          name: "Text",
          type: "Type",
          value: "Bytes",
          docs: "Vec<Text>",
        },
        ModuleMetadataV9: {
          name: "Text",
          storage: "Option<StorageMetadataV9>",
          calls: "Option<Vec<FunctionMetadataV9>>",
          events: "Option<Vec<EventMetadataV9>>",
          constants: "Vec<ModuleConstantMetadataV9>",
          errors: "Vec<ErrorMetadataV9>",
        },
        StorageEntryMetadataV9: {
          name: "Text",
          modifier: "StorageEntryModifierV9",
          type: "StorageEntryTypeV9",
          fallback: "Bytes",
          docs: "Vec<Text>",
        },
        StorageEntryModifierV9: { _enum: ["Optional", "Default", "Required"] },
        StorageEntryTypeV9: {
          _enum: {
            Plain: "Type",
            Map: {
              hasher: "StorageHasherV9",
              key: "Type",
              value: "Type",
              linked: "bool",
            },
            DoubleMap: {
              hasher: "StorageHasherV9",
              key1: "Type",
              key2: "Type",
              value: "Type",
              key2Hasher: "StorageHasherV9",
            },
          },
        },
        StorageHasherV9: {
          _enum: {
            Blake2_128: null,
            Blake2_256: null,
            Twox128: null,
            Twox256: null,
            Twox64Concat: null,
          },
        },
        StorageMetadataV9: {
          prefix: "Text",
          items: "Vec<StorageEntryMetadataV9>",
        },
      };
    },
    9552: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v10 = void 0));
      t.v10 = {
        ErrorMetadataV10: "ErrorMetadataV9",
        EventMetadataV10: "EventMetadataV9",
        FunctionArgumentMetadataV10: "FunctionArgumentMetadataV9",
        FunctionMetadataV10: "FunctionMetadataV9",
        MetadataV10: { modules: "Vec<ModuleMetadataV10>" },
        ModuleConstantMetadataV10: "ModuleConstantMetadataV9",
        ModuleMetadataV10: {
          name: "Text",
          storage: "Option<StorageMetadataV10>",
          calls: "Option<Vec<FunctionMetadataV10>>",
          events: "Option<Vec<EventMetadataV10>>",
          constants: "Vec<ModuleConstantMetadataV10>",
          errors: "Vec<ErrorMetadataV10>",
        },
        StorageEntryModifierV10: "StorageEntryModifierV9",
        StorageEntryMetadataV10: {
          name: "Text",
          modifier: "StorageEntryModifierV10",
          type: "StorageEntryTypeV10",
          fallback: "Bytes",
          docs: "Vec<Text>",
        },
        StorageEntryTypeV10: {
          _enum: {
            Plain: "Type",
            Map: {
              hasher: "StorageHasherV10",
              key: "Type",
              value: "Type",
              linked: "bool",
            },
            DoubleMap: {
              hasher: "StorageHasherV10",
              key1: "Type",
              key2: "Type",
              value: "Type",
              key2Hasher: "StorageHasherV10",
            },
          },
        },
        StorageMetadataV10: {
          prefix: "Text",
          items: "Vec<StorageEntryMetadataV10>",
        },
        StorageHasherV10: {
          _enum: {
            Blake2_128: null,
            Blake2_256: null,
            Blake2_128Concat: null,
            Twox128: null,
            Twox256: null,
            Twox64Concat: null,
          },
        },
      };
    },
    9553: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v11 = void 0));
      var n = a(6533);
      t.v11 = {
        ErrorMetadataV11: "ErrorMetadataV10",
        EventMetadataV11: "EventMetadataV10",
        ExtrinsicMetadataV11: { version: "u8", signedExtensions: "Vec<Text>" },
        FunctionArgumentMetadataV11: "FunctionArgumentMetadataV10",
        FunctionMetadataV11: "FunctionMetadataV10",
        MetadataV11: {
          modules: "Vec<ModuleMetadataV11>",
          extrinsic: "ExtrinsicMetadataV11",
        },
        ModuleConstantMetadataV11: "ModuleConstantMetadataV10",
        ModuleMetadataV11: {
          name: "Text",
          storage: "Option<StorageMetadataV11>",
          calls: "Option<Vec<FunctionMetadataV11>>",
          events: "Option<Vec<EventMetadataV11>>",
          constants: "Vec<ModuleConstantMetadataV11>",
          errors: "Vec<ErrorMetadataV11>",
        },
        StorageEntryModifierV11: "StorageEntryModifierV10",
        StorageEntryMetadataV11: {
          name: "Text",
          modifier: "StorageEntryModifierV11",
          type: "StorageEntryTypeV11",
          fallback: "Bytes",
          docs: "Vec<Text>",
        },
        StorageEntryTypeV11: {
          _enum: {
            Plain: "Type",
            Map: {
              hasher: "StorageHasherV11",
              key: "Type",
              value: "Type",
              linked: "bool",
            },
            DoubleMap: {
              hasher: "StorageHasherV11",
              key1: "Type",
              key2: "Type",
              value: "Type",
              key2Hasher: "StorageHasherV11",
            },
          },
        },
        StorageMetadataV11: {
          prefix: "Text",
          items: "Vec<StorageEntryMetadataV11>",
        },
        StorageHasherV11: { _enum: n.AllHashers },
      };
    },
    9554: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v12 = void 0));
      t.v12 = {
        ErrorMetadataV12: "ErrorMetadataV11",
        EventMetadataV12: "EventMetadataV11",
        ExtrinsicMetadataV12: "ExtrinsicMetadataV11",
        FunctionArgumentMetadataV12: "FunctionArgumentMetadataV11",
        FunctionMetadataV12: "FunctionMetadataV11",
        MetadataV12: {
          modules: "Vec<ModuleMetadataV12>",
          extrinsic: "ExtrinsicMetadataV12",
        },
        ModuleConstantMetadataV12: "ModuleConstantMetadataV11",
        ModuleMetadataV12: {
          name: "Text",
          storage: "Option<StorageMetadataV12>",
          calls: "Option<Vec<FunctionMetadataV12>>",
          events: "Option<Vec<EventMetadataV12>>",
          constants: "Vec<ModuleConstantMetadataV12>",
          errors: "Vec<ErrorMetadataV12>",
          index: "u8",
        },
        StorageEntryModifierV12: "StorageEntryModifierV11",
        StorageEntryMetadataV12: "StorageEntryMetadataV11",
        StorageEntryTypeV12: "StorageEntryTypeV11",
        StorageMetadataV12: "StorageMetadataV11",
        StorageHasherV12: "StorageHasherV11",
      };
    },
    9555: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v13 = void 0));
      t.v13 = {
        ErrorMetadataV13: "ErrorMetadataV12",
        EventMetadataV13: "EventMetadataV12",
        ExtrinsicMetadataV13: "ExtrinsicMetadataV12",
        FunctionArgumentMetadataV13: "FunctionArgumentMetadataV12",
        FunctionMetadataV13: "FunctionMetadataV12",
        MetadataV13: {
          modules: "Vec<ModuleMetadataV13>",
          extrinsic: "ExtrinsicMetadataV13",
        },
        ModuleConstantMetadataV13: "ModuleConstantMetadataV12",
        ModuleMetadataV13: {
          name: "Text",
          storage: "Option<StorageMetadataV13>",
          calls: "Option<Vec<FunctionMetadataV13>>",
          events: "Option<Vec<EventMetadataV13>>",
          constants: "Vec<ModuleConstantMetadataV13>",
          errors: "Vec<ErrorMetadataV13>",
          index: "u8",
        },
        StorageEntryModifierV13: "StorageEntryModifierV12",
        StorageEntryMetadataV13: {
          name: "Text",
          modifier: "StorageEntryModifierV13",
          type: "StorageEntryTypeV13",
          fallback: "Bytes",
          docs: "Vec<Text>",
        },
        StorageEntryTypeV13: {
          _enum: {
            Plain: "Type",
            Map: {
              hasher: "StorageHasherV13",
              key: "Type",
              value: "Type",
              linked: "bool",
            },
            DoubleMap: {
              hasher: "StorageHasherV13",
              key1: "Type",
              key2: "Type",
              value: "Type",
              key2Hasher: "StorageHasherV13",
            },
            NMap: {
              keyVec: "Vec<Type>",
              hashers: "Vec<StorageHasherV13>",
              value: "Type",
            },
          },
        },
        StorageMetadataV13: {
          prefix: "Text",
          items: "Vec<StorageEntryMetadataV13>",
        },
        StorageHasherV13: "StorageHasherV12",
      };
    },
    9556: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v14 = void 0));
      var n = a(6534);
      t.v14 = {
        PortableTypeV14: { id: "Si1LookupTypeId", type: "Si1Type" },
        ErrorMetadataV14: { ...n.Si1Variant, args: "Vec<Type>" },
        EventMetadataV14: { ...n.Si1Variant, args: "Vec<Type>" },
        FunctionArgumentMetadataV14: {
          name: "Text",
          type: "Type",
          typeName: "Option<Type>",
        },
        FunctionMetadataV14: {
          ...n.Si1Variant,
          args: "Vec<FunctionArgumentMetadataV14>",
        },
        ExtrinsicMetadataV14: {
          type: "SiLookupTypeId",
          version: "u8",
          signedExtensions: "Vec<SignedExtensionMetadataV14>",
        },
        MetadataV14: {
          lookup: "PortableRegistry",
          pallets: "Vec<PalletMetadataV14>",
          extrinsic: "ExtrinsicMetadataV14",
          type: "SiLookupTypeId",
        },
        PalletCallMetadataV14: { type: "SiLookupTypeId" },
        PalletConstantMetadataV14: {
          name: "Text",
          type: "SiLookupTypeId",
          value: "Bytes",
          docs: "Vec<Text>",
        },
        PalletErrorMetadataV14: { type: "SiLookupTypeId" },
        PalletEventMetadataV14: { type: "SiLookupTypeId" },
        PalletMetadataV14: {
          name: "Text",
          storage: "Option<PalletStorageMetadataV14>",
          calls: "Option<PalletCallMetadataV14>",
          events: "Option<PalletEventMetadataV14>",
          constants: "Vec<PalletConstantMetadataV14>",
          errors: "Option<PalletErrorMetadataV14>",
          index: "u8",
        },
        PalletStorageMetadataV14: {
          prefix: "Text",
          items: "Vec<StorageEntryMetadataV14>",
        },
        SignedExtensionMetadataV14: {
          identifier: "Text",
          type: "SiLookupTypeId",
          additionalSigned: "SiLookupTypeId",
        },
        StorageEntryMetadataV14: {
          name: "Text",
          modifier: "StorageEntryModifierV14",
          type: "StorageEntryTypeV14",
          fallback: "Bytes",
          docs: "Vec<Text>",
        },
        StorageEntryModifierV14: "StorageEntryModifierV13",
        StorageEntryTypeV14: {
          _enum: {
            Plain: "SiLookupTypeId",
            Map: {
              hashers: "Vec<StorageHasherV14>",
              key: "SiLookupTypeId",
              value: "SiLookupTypeId",
            },
          },
        },
        StorageHasherV14: "StorageHasherV13",
      };
    },
    9557: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v15 = void 0));
      t.v15 = {
        CustomMetadata15: { map: "BTreeMap<Text, CustomValueMetadata15>" },
        CustomValueMetadata15: { type: "SiLookupTypeId", value: "Bytes" },
        ExtrinsicMetadataV15: {
          version: "u8",
          addressType: "SiLookupTypeId",
          callType: "SiLookupTypeId",
          signatureType: "SiLookupTypeId",
          extraType: "SiLookupTypeId",
          signedExtensions: "Vec<SignedExtensionMetadataV14>",
        },
        OuterEnums15: {
          callType: "SiLookupTypeId",
          eventType: "SiLookupTypeId",
          errorType: "SiLookupTypeId",
        },
        PalletMetadataV15: {
          name: "Text",
          storage: "Option<PalletStorageMetadataV14>",
          calls: "Option<PalletCallMetadataV14>",
          events: "Option<PalletEventMetadataV14>",
          constants: "Vec<PalletConstantMetadataV14>",
          errors: "Option<PalletErrorMetadataV14>",
          index: "u8",
          docs: "Vec<Text>",
        },
        RuntimeApiMetadataV15: {
          name: "Text",
          methods: "Vec<RuntimeApiMethodMetadataV15>",
          docs: "Vec<Text>",
        },
        RuntimeApiMethodMetadataV15: {
          name: "Text",
          inputs: "Vec<RuntimeApiMethodParamMetadataV15>",
          output: "SiLookupTypeId",
          docs: "Vec<Text>",
        },
        RuntimeApiMethodParamMetadataV15: {
          name: "Text",
          type: "SiLookupTypeId",
        },
        MetadataV15: {
          lookup: "PortableRegistry",
          pallets: "Vec<PalletMetadataV15>",
          extrinsic: "ExtrinsicMetadataV15",
          type: "SiLookupTypeId",
          apis: "Vec<RuntimeApiMetadataV15>",
          outerEnums: "OuterEnums15",
          custom: "CustomMetadata15",
        },
      };
    },
    9558: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          execute_block: {
            description: "Execute the given block.",
            params: [{ name: "block", type: "Block" }],
            type: "Null",
          },
        },
        r = {
          version: {
            description: "Returns the version of the runtime.",
            params: [],
            type: "RuntimeVersionPre3",
          },
        },
        o = {
          initialize_block: {
            description: "Initialize a block with the given header.",
            params: [{ name: "header", type: "Header" }],
            type: "Null",
          },
        },
        i = {
          version: {
            description: "Returns the version of the runtime.",
            params: [],
            type: "RuntimeVersion",
          },
        },
        s = {
          ...n,
          initialize_block: {
            description: "Initialize a block with the given header.",
            params: [{ name: "header", type: "Header" }],
            type: "ExtrinsicInclusionMode",
          },
        };
      t.runtime = {
        Core: [
          { methods: { ...i, ...s }, version: 5 },
          { methods: { ...i, ...n, ...o }, version: 4 },
          {
            methods: {
              version: {
                description: "Returns the version of the runtime.",
                params: [],
                type: "RuntimeVersionPre4",
              },
              ...n,
              ...o,
            },
            version: 3,
          },
          { methods: { ...r, ...n, ...o }, version: 2 },
          {
            methods: {
              initialise_block: {
                description: "Initialize a block with the given header.",
                params: [{ name: "header", type: "Header" }],
                type: "Null",
              },
              ...r,
              ...n,
            },
            version: 1,
          },
        ],
      };
    },
    9559: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9560),
        r = a(6534);
      t.default = {
        rpc: {},
        types: {
          ...n.v0,
          ...r.v1,
          SiField: "Si1Field",
          SiLookupTypeId: "Si1LookupTypeId",
          SiPath: "Si1Path",
          SiType: "Si1Type",
          SiTypeDef: "Si1TypeDef",
          SiTypeDefArray: "Si1TypeDefArray",
          SiTypeDefBitSequence: "Si1TypeDefBitSequence",
          SiTypeDefCompact: "Si1TypeDefCompact",
          SiTypeDefComposite: "Si1TypeDefComposite",
          SiTypeDefPrimitive: "Si1TypeDefPrimitive",
          SiTypeDefSequence: "Si1TypeDefSequence",
          SiTypeDefTuple: "Si1TypeDefTuple",
          SiTypeParameter: "Si1TypeParameter",
          SiTypeDefVariant: "Si1TypeDefVariant",
          SiVariant: "Si1Variant",
        },
      };
    },
    9560: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v0 = void 0));
      t.v0 = {
        Si0Field: {
          name: "Option<Text>",
          type: "Si0LookupTypeId",
          typeName: "Option<Text>",
          docs: "Vec<Text>",
        },
        Si0LookupTypeId: "u32",
        Si0Path: "Vec<Text>",
        Si0Type: {
          path: "Si0Path",
          params: "Vec<Si0LookupTypeId>",
          def: "Si0TypeDef",
        },
        Si0TypeDef: {
          _enum: {
            Composite: "Si0TypeDefComposite",
            Variant: "Si0TypeDefVariant",
            Sequence: "Si0TypeDefSequence",
            Array: "Si0TypeDefArray",
            Tuple: "Si0TypeDefTuple",
            Primitive: "Si0TypeDefPrimitive",
            Compact: "Si0TypeDefCompact",
            Phantom: "Si0TypeDefPhantom",
            BitSequence: "Si0TypeDefBitSequence",
          },
        },
        Si0TypeDefArray: { len: "u32", type: "Si0LookupTypeId" },
        Si0TypeDefBitSequence: {
          bitStoreType: "Si0LookupTypeId",
          bitOrderType: "Si0LookupTypeId",
        },
        Si0TypeDefCompact: { type: "Si0LookupTypeId" },
        Si0TypeDefComposite: { fields: "Vec<Si0Field>" },
        Si0TypeDefPhantom: "Null",
        Si0TypeDefVariant: { variants: "Vec<Si0Variant>" },
        Si0TypeDefPrimitive: {
          _enum: [
            "Bool",
            "Char",
            "Str",
            "U8",
            "U16",
            "U32",
            "U64",
            "U128",
            "U256",
            "I8",
            "I16",
            "I32",
            "I64",
            "I128",
            "I256",
          ],
        },
        Si0TypeDefSequence: { type: "Si0LookupTypeId" },
        Si0TypeDefTuple: "Vec<Si0LookupTypeId>",
        Si0TypeParameter: { name: "Text", type: "Option<Si0LookupTypeId>" },
        Si0Variant: {
          name: "Text",
          fields: "Vec<Si0Field>",
          index: "Option<u8>",
          discriminant: "Option<u64>",
          docs: "Vec<Text>",
        },
      };
    },
    9561: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9562);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: { TAssetConversion: "Option<MultiLocation>" },
      };
    },
    9562: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AssetConversionApi: [
          {
            methods: {
              get_reserves: {
                description: "Get pool reserves",
                params: [
                  { name: "asset1", type: "StagingXcmV3MultiLocation" },
                  { name: "asset2", type: "StagingXcmV3MultiLocation" },
                ],
                type: "Option<(Balance,Balance)>",
              },
              quote_price_exact_tokens_for_tokens: {
                description: "Quote price: exact tokens for tokens",
                params: [
                  { name: "asset1", type: "StagingXcmV3MultiLocation" },
                  { name: "asset2", type: "StagingXcmV3MultiLocation" },
                  { name: "amount", type: "u128" },
                  { name: "include_fee", type: "bool" },
                ],
                type: "Option<(Balance)>",
              },
              quote_price_tokens_for_exact_tokens: {
                description: "Quote price: tokens for exact tokens",
                params: [
                  { name: "asset1", type: "StagingXcmV3MultiLocation" },
                  { name: "asset2", type: "StagingXcmV3MultiLocation" },
                  { name: "amount", type: "u128" },
                  { name: "include_fee", type: "bool" },
                ],
                type: "Option<(Balance)>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9563: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9564);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          AssetApprovalKey: { owner: "AccountId", delegate: "AccountId" },
          AssetApproval: {
            amount: "TAssetBalance",
            deposit: "TAssetDepositBalance",
          },
          AssetBalance: {
            balance: "TAssetBalance",
            isFrozen: "bool",
            isSufficient: "bool",
          },
          AssetDestroyWitness: {
            accounts: "Compact<u32>",
            sufficients: "Compact<u32>",
            approvals: "Compact<u32>",
          },
          AssetDetails: {
            owner: "AccountId",
            issuer: "AccountId",
            admin: "AccountId",
            freezer: "AccountId",
            supply: "TAssetBalance",
            deposit: "TAssetDepositBalance",
            minBalance: "TAssetBalance",
            isSufficient: "bool",
            accounts: "u32",
            sufficients: "u32",
            approvals: "u32",
            isFrozen: "bool",
          },
          AssetMetadata: {
            deposit: "TAssetDepositBalance",
            name: "Vec<u8>",
            symbol: "Vec<u8>",
            decimals: "u8",
            isFrozen: "bool",
          },
          TAssetBalance: "u64",
          TAssetDepositBalance: "BalanceOf",
        },
      };
    },
    9564: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AssetsApi: [
          {
            methods: {
              account_balances: {
                description: "Return the current set of authorities.",
                params: [{ name: "account", type: "AccountId" }],
                type: "Vec<(u32, TAssetBalance)>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9565: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9566);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: { RawAuraPreDigest: { slotNumber: "u64" } },
      };
    },
    9566: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AuraApi: [
          {
            methods: {
              authorities: {
                description: "Return the current set of authorities.",
                params: [],
                type: "Vec<AuthorityId>",
              },
              slot_duration: {
                description: "Returns the slot duration for Aura.",
                params: [],
                type: "SlotDuration",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9567: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          UncleEntryItem: {
            _enum: {
              InclusionHeight: "BlockNumber",
              Uncle: "(Hash, Option<AccountId>)",
            },
          },
        },
      };
    },
    9568: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9569),
        r = a(9570);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          AllowedSlots: {
            _enum: [
              "PrimarySlots",
              "PrimaryAndSecondaryPlainSlots",
              "PrimaryAndSecondaryVRFSlots",
            ],
          },
          BabeAuthorityWeight: "u64",
          BabeEpochConfiguration: {
            c: "(u64, u64)",
            allowedSlots: "AllowedSlots",
          },
          BabeBlockWeight: "u32",
          BabeEquivocationProof: {
            offender: "AuthorityId",
            slotNumber: "SlotNumber",
            firstHeader: "Header",
            secondHeader: "Header",
          },
          BabeGenesisConfiguration: {
            slotDuration: "u64",
            epochLength: "u64",
            c: "(u64, u64)",
            genesisAuthorities: "Vec<(AuthorityId, BabeAuthorityWeight)>",
            randomness: "Randomness",
            allowedSlots: "AllowedSlots",
          },
          BabeGenesisConfigurationV1: {
            slotDuration: "u64",
            epochLength: "u64",
            c: "(u64, u64)",
            genesisAuthorities: "Vec<(AuthorityId, BabeAuthorityWeight)>",
            randomness: "Randomness",
            secondarySlots: "bool",
          },
          BabeWeight: "u64",
          MaybeRandomness: "Option<Randomness>",
          MaybeVrf: "Option<VrfData>",
          Epoch: {
            epochIndex: "u64",
            startSlot: "Slot",
            duration: "u64",
            authorities: "Vec<(AuthorityId, BabeAuthorityWeight)>",
            randomness: "Hash",
            config: "BabeEpochConfiguration",
          },
          EpochAuthorship: {
            primary: "Vec<u64>",
            secondary: "Vec<u64>",
            secondary_vrf: "Vec<u64>",
          },
          NextConfigDescriptor: {
            _enum: { V0: "Null", V1: "NextConfigDescriptorV1" },
          },
          NextConfigDescriptorV1: {
            c: "(u64, u64)",
            allowedSlots: "AllowedSlots",
          },
          OpaqueKeyOwnershipProof: "Bytes",
          Randomness: "Hash",
          RawBabePreDigest: {
            _enum: {
              Phantom: "Null",
              Primary: "RawBabePreDigestPrimary",
              SecondaryPlain: "RawBabePreDigestSecondaryPlain",
              SecondaryVRF: "RawBabePreDigestSecondaryVRF",
            },
          },
          RawBabePreDigestPrimary: {
            authorityIndex: "u32",
            slotNumber: "SlotNumber",
            vrfOutput: "VrfOutput",
            vrfProof: "VrfProof",
          },
          RawBabePreDigestSecondaryPlain: {
            authorityIndex: "u32",
            slotNumber: "SlotNumber",
          },
          RawBabePreDigestSecondaryVRF: {
            authorityIndex: "u32",
            slotNumber: "SlotNumber",
            vrfOutput: "VrfOutput",
            vrfProof: "VrfProof",
          },
          RawBabePreDigestTo159: {
            _enum: {
              Primary: "RawBabePreDigestPrimaryTo159",
              Secondary: "RawBabePreDigestSecondaryTo159",
            },
          },
          RawBabePreDigestPrimaryTo159: {
            authorityIndex: "u32",
            slotNumber: "SlotNumber",
            weight: "BabeBlockWeight",
            vrfOutput: "VrfOutput",
            vrfProof: "VrfProof",
          },
          RawBabePreDigestSecondaryTo159: {
            authorityIndex: "u32",
            slotNumber: "SlotNumber",
            weight: "BabeBlockWeight",
          },
          RawBabePreDigestCompat: {
            _enum: { Zero: "u32", One: "u32", Two: "u32", Three: "u32" },
          },
          SlotNumber: "u64",
          VrfData: "[u8; 32]",
          VrfOutput: "[u8; 32]",
          VrfProof: "[u8; 64]",
        },
      };
    },
    9569: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        epochAuthorship: {
          description:
            "Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore",
          isUnsafe: !0,
          params: [],
          type: "HashMap<AuthorityId, EpochAuthorship>",
        },
      };
    },
    9570: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
        current_epoch: {
          description: "Returns information regarding the current epoch.",
          params: [],
          type: "Epoch",
        },
        current_epoch_start: {
          description: "Returns the slot that started the current epoch.",
          params: [],
          type: "Slot",
        },
        generate_key_ownership_proof: {
          description:
            "Generates a proof of key ownership for the given authority in the current epoch.",
          params: [
            { name: "slot", type: "Slot" },
            { name: "authorityId", type: "AuthorityId" },
          ],
          type: "Option<OpaqueKeyOwnershipProof>",
        },
        next_epoch: {
          description:
            "Returns information regarding the next epoch (which was already previously announced).",
          params: [],
          type: "Epoch",
        },
        submit_report_equivocation_unsigned_extrinsic: {
          description:
            "Submits an unsigned extrinsic to report an equivocation.",
          params: [
            { name: "equivocationProof", type: "BabeEquivocationProof" },
            { name: "keyOwnerProof", type: "OpaqueKeyOwnershipProof" },
          ],
          type: "Option<Null>",
        },
      };
      t.runtime = {
        BabeApi: [
          {
            methods: {
              configuration: {
                description:
                  "Return the genesis configuration for BABE. The configuration is only read on genesis.",
                params: [],
                type: "BabeGenesisConfiguration",
              },
              ...n,
            },
            version: 2,
          },
          {
            methods: {
              configuration: {
                description: "Return the configuration for BABE. Version 1.",
                params: [],
                type: "BabeGenesisConfigurationV1",
              },
              ...n,
            },
            version: 1,
          },
        ],
      };
    },
    9571: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          AccountData: {
            free: "Balance",
            reserved: "Balance",
            miscFrozen: "Balance",
            feeFrozen: "Balance",
          },
          BalanceLockTo212: {
            id: "LockIdentifier",
            amount: "Balance",
            until: "BlockNumber",
            reasons: "WithdrawReasons",
          },
          BalanceLock: {
            id: "LockIdentifier",
            amount: "Balance",
            reasons: "Reasons",
          },
          BalanceStatus: { _enum: ["Free", "Reserved"] },
          Reasons: { _enum: ["Fee", "Misc", "All"] },
          ReserveData: { id: "ReserveIdentifier", amount: "Balance" },
          ReserveIdentifier: "[u8; 8]",
          VestingSchedule: {
            offset: "Balance",
            perBlock: "Balance",
            startingBlock: "BlockNumber",
          },
          WithdrawReasons: {
            _set: {
              TransactionPayment: 1,
              Transfer: 2,
              Reserve: 4,
              Fee: 8,
              Tip: 16,
            },
          },
        },
      };
    },
    9572: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9573),
        r = a(9574);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          BeefyAuthoritySet: { id: "u64", len: "u32", root: "H256" },
          BeefyCommitment: {
            payload: "BeefyPayload",
            blockNumber: "BlockNumber",
            validatorSetId: "ValidatorSetId",
          },
          BeefyId: "[u8; 33]",
          BeefyEquivocationProof: {
            first: "BeefyVoteMessage",
            second: "BeefyVoteMessage",
          },
          BeefyCompactSignedCommitment: {
            commitment: "BeefyCommitment",
            signaturesFrom: "Vec<u8>",
            validatorSetLen: "u32",
            signaturesCompact: "Vec<EcdsaSignature>",
          },
          BeefySignedCommitment: {
            commitment: "BeefyCommitment",
            signatures: "Vec<Option<EcdsaSignature>>",
          },
          BeefyVersionedFinalityProof: {
            _enum: { V0: "Null", V1: "BeefyCompactSignedCommitment" },
          },
          BeefyNextAuthoritySet: { id: "u64", len: "u32", root: "H256" },
          BeefyPayload: "Vec<(BeefyPayloadId, Bytes)>",
          BeefyPayloadId: "[u8;2]",
          BeefyVoteMessage: {
            commitment: "BeefyCommitment",
            id: "AuthorityId",
            signature: "Signature",
          },
          MmrRootHash: "H256",
          ValidatorSetId: "u64",
          ValidatorSet: {
            validators: "Vec<AuthorityId>",
            id: "ValidatorSetId",
          },
        },
      };
    },
    9573: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        getFinalizedHead: {
          description:
            "Returns hash of the latest BEEFY finalized block as seen by this client.",
          params: [],
          type: "H256",
        },
        subscribeJustifications: {
          description:
            "Returns the block most recently finalized by BEEFY, alongside its justification.",
          params: [],
          pubsub: [
            "justifications",
            "subscribeJustifications",
            "unsubscribeJustifications",
          ],
          type: "BeefyVersionedFinalityProof",
        },
      };
    },
    9574: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          beefy_genesis: {
            description:
              "Return the block number where BEEFY consensus is enabled/started",
            params: [],
            type: "Option<BlockNumber>",
          },
          generate_key_ownership_proof: {
            description:
              "Generates a proof of key ownership for the given authority in the given set.",
            params: [
              { name: "setId", type: "ValidatorSetId" },
              { name: "authorityId", type: "AuthorityId" },
            ],
            type: "Option<OpaqueKeyOwnershipProof>",
          },
          submit_report_equivocation_unsigned_extrinsic: {
            description:
              "Submits an unsigned extrinsic to report an equivocation.",
            params: [
              { name: "equivocationProof", type: "BeefyEquivocationProof" },
              { name: "keyOwnerProof", type: "OpaqueKeyOwnershipProof" },
            ],
            type: "Option<Null>",
          },
          validator_set: {
            description: "Return the current active BEEFY validator set",
            params: [],
            type: "Option<ValidatorSet>",
          },
        },
        r = {
          authority_set_proof: {
            description:
              "Return the currently active BEEFY authority set proof.",
            params: [],
            type: "BeefyAuthoritySet",
          },
          next_authority_set_proof: {
            description: "Return the next/queued BEEFY authority set proof.",
            params: [],
            type: "BeefyNextAuthoritySet",
          },
        };
      t.runtime = {
        BeefyApi: [
          { methods: n, version: 3 },
          { methods: n, version: 2 },
          { methods: n, version: 1 },
        ],
        BeefyMmrApi: [{ methods: r, version: 1 }],
      };
    },
    9575: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9576);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          BenchmarkBatch: {
            pallet: "Text",
            instance: "Text",
            benchmark: "Text",
            results: "Vec<BenchmarkResult>",
          },
          BenchmarkConfig: {
            pallet: "Bytes",
            benchmark: "Bytes",
            selectedComponents: "Vec<(BenchmarkParameter, u32)>",
            verify: "bool",
            internalRepeats: "u32",
          },
          BenchmarkList: {
            pallet: "Bytes",
            instance: "Bytes",
            benchmarks: "Vec<BenchmarkMetadata>",
          },
          BenchmarkMetadata: {
            name: "Bytes",
            components: "Vec<(BenchmarkParameter, u32, u32)>",
          },
          BenchmarkParameter: {
            _enum: [
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
            ],
          },
          BenchmarkResult: {
            components: "Vec<(BenchmarkParameter, u32)>",
            extrinsicTime: "u128",
            storageRootTime: "u128",
            reads: "u32",
            repeatReads: "u32",
            writes: "u32",
            repeatWrites: "u32",
            proofSize: "u32",
            benchKeys: "Vec<(Vec<u8>, u32, u32, bool)>",
          },
        },
      };
    },
    9576: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        Benchmark: [
          {
            methods: {
              benchmark_metadata: {
                description:
                  "Get the benchmark metadata available for this runtime.",
                params: [{ name: "extra", type: "bool" }],
                type: "(Vec<BenchmarkList>, Vec<StorageInfo>)",
              },
              dispatch_benchmark: {
                description: "Dispatch the given benchmark.",
                params: [{ name: "config", type: "BenchmarkConfig" }],
                type: "Result<Vec<BenchmarkBatch>, Text>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9577: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9578);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          CheckInherentsResult: {
            okay: "bool",
            fatalError: "bool",
            errors: "InherentData",
          },
          InherentData: { data: "BTreeMap<InherentIdentifier, Bytes>" },
          InherentIdentifier: "[u8; 8]",
        },
      };
    },
    9578: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          random_seed: {
            description: "Generate a random seed.",
            params: [],
            type: "Hash",
          },
        },
        r = {
          apply_extrinsic: {
            description: "Apply the given extrinsic.",
            params: [{ name: "extrinsic", type: "Extrinsic" }],
            type: "ApplyExtrinsicResultPre6",
          },
        },
        o = {
          check_inherents: {
            description: "Check that the inherents are valid.",
            params: [
              { name: "block", type: "Block" },
              { name: "data", type: "InherentData" },
            ],
            type: "CheckInherentsResult",
          },
          inherent_extrinsics: {
            description: "Generate inherent extrinsics.",
            params: [{ name: "inherent", type: "InherentData" }],
            type: "Vec<Extrinsic>",
          },
        },
        i = {
          finalize_block: {
            description: "Finish the current block.",
            params: [],
            type: "Header",
          },
        };
      t.runtime = {
        BlockBuilder: [
          {
            methods: {
              apply_extrinsic: {
                description: "Apply the given extrinsic.",
                params: [{ name: "extrinsic", type: "Extrinsic" }],
                type: "ApplyExtrinsicResult",
              },
              ...o,
              ...i,
            },
            version: 6,
          },
          { methods: { ...r, ...o, ...i }, version: 5 },
          { methods: { ...n, ...r, ...o, ...i }, version: 4 },
          { methods: { ...n, ...o, ...i }, version: 3 },
          {
            methods: {
              finalise_block: {
                description: "Finish the current block.",
                params: [],
                type: "Header",
              },
              ...n,
              ...o,
            },
            version: 2,
          },
        ],
      };
    },
    9579: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          CollectiveOrigin: {
            _enum: {
              Members: "(MemberCount, MemberCount)",
              Member: "AccountId",
            },
          },
          MemberCount: "u32",
          ProposalIndex: "u32",
          VotesTo230: {
            index: "ProposalIndex",
            threshold: "MemberCount",
            ayes: "Vec<AccountId>",
            nays: "Vec<AccountId>",
          },
          Votes: {
            index: "ProposalIndex",
            threshold: "MemberCount",
            ayes: "Vec<AccountId>",
            nays: "Vec<AccountId>",
            end: "BlockNumber",
          },
        },
      };
    },
    9580: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: { AuthorityId: "AccountId", RawVRFOutput: "[u8; 32]" },
      };
    },
    9581: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9582),
        r = a(9583);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          AliveContractInfo: {
            trieId: "TrieId",
            storageSize: "u32",
            pairCount: "u32",
            codeHash: "CodeHash",
            rentAllowance: "Balance",
            rentPaid: "Balance",
            deductBlock: "BlockNumber",
            lastWrite: "Option<BlockNumber>",
            _reserved: "Option<Null>",
          },
          CodeHash: "Hash",
          CodeSource: { _enum: { Upload: "Bytes", Existing: "Hash" } },
          CodeUploadRequest: {
            origin: "AccountId",
            code: "Bytes",
            storageDepositLimit: "Option<Balance>",
          },
          CodeUploadResult: "Result<CodeUploadResultValue, DispatchError>",
          CodeUploadResultValue: { codeHash: "CodeHash", deposit: "Balance" },
          ContractCallRequest: {
            origin: "AccountId",
            dest: "AccountId",
            value: "Balance",
            gasLimit: "u64",
            storageDepositLimit: "Option<Balance>",
            inputData: "Bytes",
          },
          ContractExecResultSuccessTo255: { status: "u8", data: "Raw" },
          ContractExecResultTo255: {
            _enum: { Success: "ContractExecResultSuccessTo255", Error: "Null" },
          },
          ContractExecResultSuccessTo260: {
            flags: "ContractReturnFlags",
            data: "Bytes",
            gasConsumed: "u64",
          },
          ContractExecResultTo260: {
            _enum: { Success: "ContractExecResultSuccessTo260", Error: "Null" },
          },
          ContractExecResultOk: { flags: "ContractReturnFlags", data: "Bytes" },
          ContractExecResultResult:
            "Result<ContractExecResultOk, DispatchError>",
          ContractExecResultTo267: {
            gasConsumed: "u64",
            debugMessage: "Text",
            result: "ContractExecResultResult",
          },
          ContractExecResult: {
            gasConsumed: "Weight",
            gasRequired: "Weight",
            storageDeposit: "StorageDeposit",
            debugMessage: "Text",
            result: "ContractExecResultResult",
          },
          ContractExecResultU64: {
            gasConsumed: "u64",
            gasRequired: "u64",
            storageDeposit: "StorageDeposit",
            debugMessage: "Text",
            result: "ContractExecResultResult",
          },
          ContractInfo: {
            _enum: {
              Alive: "AliveContractInfo",
              Tombstone: "TombstoneContractInfo",
            },
          },
          ContractCallFlags: {
            _set: {
              _bitLength: 32,
              ForwardInput: 1,
              CloneInput: 2,
              TailCall: 4,
              AllowReentry: 8,
            },
          },
          ContractReturnFlags: { _set: { _bitLength: 32, Revert: 1 } },
          ContractStorageKey: "[u8; 32]",
          DeletedContract: { pairCount: "u32", trieId: "TrieId" },
          ExecReturnValue: { flags: "ContractReturnFlags", data: "Bytes" },
          Gas: "u64",
          HostFnWeightsTo264: {
            caller: "Weight",
            address: "Weight",
            gasLeft: "Weight",
            balance: "Weight",
            valueTransferred: "Weight",
            minimumBalance: "Weight",
            tombstoneDeposit: "Weight",
            rentAllowance: "Weight",
            blockNumber: "Weight",
            now: "Weight",
            weightToFee: "Weight",
            gas: "Weight",
            input: "Weight",
            inputPerByte: "Weight",
            return: "Weight",
            returnPerByte: "Weight",
            terminate: "Weight",
            restoreTo: "Weight",
            restoreToPerDelta: "Weight",
            random: "Weight",
            depositEvent: "Weight",
            depositEventPerTopic: "Weight",
            depositEventPerByte: "Weight",
            setRentAllowance: "Weight",
            setStorage: "Weight",
            setStoragePerByte: "Weight",
            clearStorage: "Weight",
            getStorage: "Weight",
            getStoragePerByte: "Weight",
            transfer: "Weight",
            call: "Weight",
            callTransferSurcharge: "Weight",
            callPerInputByte: "Weight",
            callPerOutputByte: "Weight",
            instantiate: "Weight",
            instantiatePerInputByte: "Weight",
            instantiatePerOutputByte: "Weight",
            hashSha2256: "Weight",
            hashSha2256PerByte: "Weight",
            hashKeccak256: "Weight",
            hashKeccak256PerByte: "Weight",
            hashBlake2256: "Weight",
            hashBlake2256PerByte: "Weight",
            hashBlake2128: "Weight",
            hashBlake2128PerByte: "Weight",
          },
          HostFnWeights: {
            caller: "Weight",
            address: "Weight",
            gasLeft: "Weight",
            balance: "Weight",
            valueTransferred: "Weight",
            minimumBalance: "Weight",
            tombstoneDeposit: "Weight",
            rentAllowance: "Weight",
            blockNumber: "Weight",
            now: "Weight",
            weightToFee: "Weight",
            gas: "Weight",
            input: "Weight",
            inputPerByte: "Weight",
            return: "Weight",
            returnPerByte: "Weight",
            terminate: "Weight",
            terminatePerCodeByte: "Weight",
            restoreTo: "Weight",
            restoreToPerCallerCodeByte: "Weight",
            restoreToPerTombstoneCodeByte: "Weight",
            restoreToPerDelta: "Weight",
            random: "Weight",
            depositEvent: "Weight",
            depositEventPerTopic: "Weight",
            depositEventPerByte: "Weight",
            setRentAllowance: "Weight",
            setStorage: "Weight",
            setStoragePerByte: "Weight",
            clearStorage: "Weight",
            getStorage: "Weight",
            getStoragePerByte: "Weight",
            transfer: "Weight",
            call: "Weight",
            callPerCodeByte: "Weight",
            callTransferSurcharge: "Weight",
            callPerInputByte: "Weight",
            callPerOutputByte: "Weight",
            instantiate: "Weight",
            instantiatePerCodeByte: "Weight",
            instantiatePerInputByte: "Weight",
            instantiatePerOutputByte: "Weight",
            instantiatePerSaltByte: "Weight",
            hashSha2256: "Weight",
            hashSha2256PerByte: "Weight",
            hashKeccak256: "Weight",
            hashKeccak256PerByte: "Weight",
            hashBlake2256: "Weight",
            hashBlake2256PerByte: "Weight",
            hashBlake2128: "Weight",
            hashBlake2128PerByte: "Weight",
            rentParams: "Weight",
          },
          InstantiateRequestV1: {
            origin: "AccountId",
            value: "Balance",
            gasLimit: "Gas",
            code: "Bytes",
            data: "Bytes",
            salt: "Bytes",
          },
          InstantiateRequestV2: {
            _fallback: "InstantiateRequestV1",
            origin: "AccountId",
            value: "Balance",
            gasLimit: "Gas",
            storageDepositLimit: "Option<Balance>",
            code: "Bytes",
            data: "Bytes",
            salt: "Bytes",
          },
          InstantiateRequest: {
            _fallback: "InstantiateRequestV2",
            origin: "AccountId",
            value: "Balance",
            gasLimit: "Gas",
            storageDepositLimit: "Option<Balance>",
            code: "CodeSource",
            data: "Bytes",
            salt: "Bytes",
          },
          ContractInstantiateResultTo267:
            "Result<InstantiateReturnValueTo267, Null>",
          ContractInstantiateResultTo299:
            "Result<InstantiateReturnValueOk, Null>",
          ContractInstantiateResult: {
            gasConsumed: "WeightV2",
            gasRequired: "WeightV2",
            storageDeposit: "StorageDeposit",
            debugMessage: "Text",
            result: "InstantiateReturnValue",
          },
          ContractInstantiateResultU64: {
            _fallback: "ContractInstantiateResultTo299",
            gasConsumed: "u64",
            gasRequired: "u64",
            storageDeposit: "StorageDeposit",
            debugMessage: "Text",
            result: "InstantiateReturnValue",
          },
          InstantiateReturnValueTo267: {
            result: "ExecReturnValue",
            accountId: "AccountId",
            rentProjection: "Option<RentProjection>",
          },
          InstantiateReturnValueOk: {
            result: "ExecReturnValue",
            accountId: "AccountId",
          },
          InstantiateReturnValue:
            "Result<InstantiateReturnValueOk, DispatchError>",
          InstructionWeights: {
            i64const: "u32",
            i64load: "u32",
            i64store: "u32",
            select: "u32",
            rIf: "u32",
            br: "u32",
            brIf: "u32",
            brIable: "u32",
            brIablePerEntry: "u32",
            call: "u32",
            callIndirect: "u32",
            callIndirectPerParam: "u32",
            localGet: "u32",
            localSet: "u32",
            local_tee: "u32",
            globalGet: "u32",
            globalSet: "u32",
            memoryCurrent: "u32",
            memoryGrow: "u32",
            i64clz: "u32",
            i64ctz: "u32",
            i64popcnt: "u32",
            i64eqz: "u32",
            i64extendsi32: "u32",
            i64extendui32: "u32",
            i32wrapi64: "u32",
            i64eq: "u32",
            i64ne: "u32",
            i64lts: "u32",
            i64ltu: "u32",
            i64gts: "u32",
            i64gtu: "u32",
            i64les: "u32",
            i64leu: "u32",
            i64ges: "u32",
            i64geu: "u32",
            i64add: "u32",
            i64sub: "u32",
            i64mul: "u32",
            i64divs: "u32",
            i64divu: "u32",
            i64rems: "u32",
            i64remu: "u32",
            i64and: "u32",
            i64or: "u32",
            i64xor: "u32",
            i64shl: "u32",
            i64shrs: "u32",
            i64shru: "u32",
            i64rotl: "u32",
            i64rotr: "u32",
          },
          LimitsTo264: {
            eventTopics: "u32",
            stackHeight: "u32",
            globals: "u32",
            parameters: "u32",
            memoryPages: "u32",
            tableSize: "u32",
            brTableSize: "u32",
            subjectLen: "u32",
            codeSize: "u32",
          },
          Limits: {
            eventTopics: "u32",
            stackHeight: "u32",
            globals: "u32",
            parameters: "u32",
            memoryPages: "u32",
            tableSize: "u32",
            brTableSize: "u32",
            subjectLen: "u32",
          },
          PrefabWasmModule: {
            scheduleVersion: "Compact<u32>",
            initial: "Compact<u32>",
            maximum: "Compact<u32>",
            refcount: "Compact<u64>",
            _reserved: "Option<Null>",
            code: "Bytes",
            originalCodeLen: "u32",
          },
          RentProjection: {
            _enum: { EvictionAt: "BlockNumber", NoEviction: "Null" },
          },
          ScheduleTo212: {
            version: "u32",
            putCodePerByteCost: "Gas",
            growMemCost: "Gas",
            regularOpCost: "Gas",
            returnDataPerByteCost: "Gas",
            eventDataPerByteCost: "Gas",
            eventPerTopicCost: "Gas",
            eventBaseCost: "Gas",
            sandboxDataReadCost: "Gas",
            sandboxDataWriteCost: "Gas",
            maxEventTopics: "u32",
            maxStackHeight: "u32",
            maxMemoryPages: "u32",
            enablePrintln: "bool",
            maxSubjectLen: "u32",
          },
          ScheduleTo258: {
            version: "u32",
            putCodePerByteCost: "Gas",
            growMemCost: "Gas",
            regularOpCost: "Gas",
            returnDataPerByteCost: "Gas",
            eventDataPerByteCost: "Gas",
            eventPerTopicCost: "Gas",
            eventBaseCost: "Gas",
            sandboxDataReadCost: "Gas",
            sandboxDataWriteCost: "Gas",
            transferCost: "Gas",
            maxEventTopics: "u32",
            maxStackHeight: "u32",
            maxMemoryPages: "u32",
            enablePrintln: "bool",
            maxSubjectLen: "u32",
          },
          ScheduleTo264: {
            version: "u32",
            enablePrintln: "bool",
            limits: "LimitsTo264",
            instructionWeights: "InstructionWeights",
            hostFnWeights: "HostFnWeightsTo264",
          },
          Schedule: {
            version: "u32",
            enablePrintln: "bool",
            limits: "Limits",
            instructionWeights: "InstructionWeights",
            hostFnWeights: "HostFnWeights",
          },
          SeedOf: "Hash",
          StorageDeposit: { _enum: { Refund: "Balance", Charge: "Balance" } },
          TombstoneContractInfo: "Hash",
          TrieId: "Bytes",
        },
      };
    },
    9582: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        call: {
          deprecated:
            "Use the runtime interface `api.call.contractsApi.call` instead",
          description: "Executes a call to a contract",
          params: [
            { name: "callRequest", type: "ContractCallRequest" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "ContractExecResult",
        },
        getStorage: {
          deprecated:
            "Use the runtime interface `api.call.contractsApi.getStorage` instead",
          description:
            "Returns the value under a specified storage key in a contract",
          params: [
            { name: "address", type: "AccountId" },
            { name: "key", type: "H256" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Option<Bytes>",
        },
        instantiate: {
          deprecated:
            "Use the runtime interface `api.call.contractsApi.instantiate` instead",
          description: "Instantiate a new contract",
          params: [
            { name: "request", type: "InstantiateRequestV1" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "ContractInstantiateResult",
        },
        rentProjection: {
          deprecated:
            "Not available in newer versions of the contracts interfaces",
          description:
            "Returns the projected time a given contract will be able to sustain paying its rent",
          params: [
            { name: "address", type: "AccountId" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Option<BlockNumber>",
        },
        uploadCode: {
          deprecated:
            "Use the runtime interface `api.call.contractsApi.uploadCode` instead",
          description:
            "Upload new code without instantiating a contract from it",
          endpoint: "contracts_upload_code",
          params: [
            { name: "uploadRequest", type: "CodeUploadRequest" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "CodeUploadResult",
        },
      };
    },
    9583: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
        get_storage: {
          description: "Query a given storage key in a given contract.",
          params: [
            { name: "address", type: "AccountId" },
            { name: "key", type: "Bytes" },
          ],
          type: "Option<Bytes>",
        },
        upload_code: {
          description:
            "Upload new code without instantiating a contract from it.",
          params: [
            { name: "origin", type: "AccountId" },
            { name: "code", type: "Bytes" },
            { name: "storageDepositLimit", type: "Option<Balance>" },
          ],
          type: "CodeUploadResult",
        },
      };
      t.runtime = {
        ContractsApi: [
          {
            methods: {
              call: {
                description:
                  "Perform a call from a specified account to a given contract.",
                params: [
                  { name: "origin", type: "AccountId" },
                  { name: "dest", type: "AccountId" },
                  { name: "value", type: "Balance" },
                  { name: "gasLimit", type: "Option<WeightV2>" },
                  { name: "storageDepositLimit", type: "Option<Balance>" },
                  { name: "inputData", type: "Vec<u8>" },
                ],
                type: "ContractExecResult",
              },
              instantiate: {
                description: "Instantiate a new contract.",
                params: [
                  { name: "origin", type: "AccountId" },
                  { name: "value", type: "Balance" },
                  { name: "gasLimit", type: "Option<WeightV2>" },
                  { name: "storageDepositLimit", type: "Option<Balance>" },
                  { name: "code", type: "CodeSource" },
                  { name: "data", type: "Bytes" },
                  { name: "salt", type: "Bytes" },
                ],
                type: "ContractInstantiateResult",
              },
              ...n,
            },
            version: 2,
          },
          {
            methods: {
              call: {
                description:
                  "Perform a call from a specified account to a given contract.",
                params: [
                  { name: "origin", type: "AccountId" },
                  { name: "dest", type: "AccountId" },
                  { name: "value", type: "Balance" },
                  { name: "gasLimit", type: "u64" },
                  { name: "storageDepositLimit", type: "Option<Balance>" },
                  { name: "inputData", type: "Vec<u8>" },
                ],
                type: "ContractExecResultU64",
              },
              instantiate: {
                description: "Instantiate a new contract.",
                params: [
                  { name: "origin", type: "AccountId" },
                  { name: "value", type: "Balance" },
                  { name: "gasLimit", type: "u64" },
                  { name: "storageDepositLimit", type: "Option<Balance>" },
                  { name: "code", type: "CodeSource" },
                  { name: "data", type: "Bytes" },
                  { name: "salt", type: "Bytes" },
                ],
                type: "ContractInstantiateResultU64",
              },
              ...n,
            },
            version: 1,
          },
        ],
      };
    },
    9584: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.AllConvictions = void 0));
      const n = (t.AllConvictions = [
        "None",
        "Locked1x",
        "Locked2x",
        "Locked3x",
        "Locked4x",
        "Locked5x",
        "Locked6x",
      ]);
      t.default = {
        rpc: {},
        types: {
          AccountVote: {
            _enum: {
              Standard: "AccountVoteStandard",
              Split: "AccountVoteSplit",
            },
          },
          AccountVoteSplit: { aye: "Balance", nay: "Balance" },
          AccountVoteStandard: { vote: "Vote", balance: "Balance" },
          Conviction: { _enum: n },
          Delegations: { votes: "Balance", capital: "Balance" },
          PreimageStatus: {
            _enum: {
              Missing: "BlockNumber",
              Available: "PreimageStatusAvailable",
            },
          },
          PreimageStatusAvailable: {
            data: "Bytes",
            provider: "AccountId",
            deposit: "Balance",
            since: "BlockNumber",
            expiry: "Option<BlockNumber>",
          },
          PriorLock: "(BlockNumber, Balance)",
          PropIndex: "u32",
          Proposal: "Call",
          ProxyState: { _enum: { Open: "AccountId", Active: "AccountId" } },
          ReferendumIndex: "u32",
          ReferendumInfoTo239: {
            end: "BlockNumber",
            proposalHash: "Hash",
            threshold: "VoteThreshold",
            delay: "BlockNumber",
          },
          ReferendumInfo: {
            _enum: {
              Ongoing: "ReferendumStatus",
              Finished: "ReferendumInfoFinished",
            },
          },
          ReferendumInfoFinished: { approved: "bool", end: "BlockNumber" },
          ReferendumStatus: {
            end: "BlockNumber",
            proposalHash: "Hash",
            threshold: "VoteThreshold",
            delay: "BlockNumber",
            tally: "Tally",
          },
          Tally: { ayes: "Balance", nays: "Balance", turnout: "Balance" },
          Voting: {
            _enum: { Direct: "VotingDirect", Delegating: "VotingDelegating" },
          },
          VotingDirect: {
            votes: "Vec<VotingDirectVote>",
            delegations: "Delegations",
            prior: "PriorLock",
          },
          VotingDirectVote: "(ReferendumIndex, AccountVote)",
          VotingDelegating: {
            balance: "Balance",
            target: "AccountId",
            conviction: "Conviction",
            delegations: "Delegations",
            prior: "PriorLock",
          },
        },
      };
    },
    9585: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9586);
      t.default = {
        rpc: n.rpc,
        types: {
          BlockStats: {
            witnessLen: "u64",
            witnessCompactLen: "u64",
            blockLen: "u64",
            blockNumExtrinsics: "u64",
          },
        },
      };
    },
    9586: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        getBlockStats: {
          description:
            "Reexecute the specified `block_hash` and gather statistics while doing so",
          isUnsafe: !0,
          params: [{ isHistoric: !0, name: "at", type: "Hash" }],
          type: "Option<BlockStats>",
        },
      };
    },
    9587: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9588);
      t.default = { rpc: {}, runtime: n.runtime, types: {} };
    },
    9588: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AuthorityDiscoveryApi: [
          {
            methods: {
              authorities: {
                description:
                  "Retrieve authority identifiers of the current and next authority set.",
                params: [],
                type: "Vec<AuthorityId>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9589: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          ApprovalFlag: "u32",
          DefunctVoter: {
            who: "AccountId",
            voteCount: "Compact<u32>",
            candidateCount: "Compact<u32>",
          },
          Renouncing: {
            _enum: {
              Member: "Null",
              RunnerUp: "Null",
              Candidate: "Compact<u32>",
            },
          },
          SetIndex: "u32",
          Vote: "GenericVote",
          VoteIndex: "u32",
          VoterInfo: {
            lastActive: "VoteIndex",
            lastWin: "VoteIndex",
            pot: "Balance",
            stake: "Balance",
          },
          VoteThreshold: {
            _enum: [
              "Super Majority Approve",
              "Super Majority Against",
              "Simple Majority",
            ],
          },
        },
      };
    },
    9590: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9591);
      t.default = {
        rpc: n.rpc,
        types: {
          CreatedBlock: {
            _alias: { blockHash: "hash" },
            blockHash: "BlockHash",
            aux: "ImportedAux",
          },
          ImportedAux: {
            headerOnly: "bool",
            clearJustificationRequests: "bool",
            needsJustification: "bool",
            badJustification: "bool",
            needsFinalityProof: "bool",
            isNewBest: "bool",
          },
        },
      };
    },
    9591: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        createBlock: {
          description:
            "Instructs the manual-seal authorship task to create a new block",
          params: [
            { name: "createEmpty", type: "bool" },
            { name: "finalize", type: "bool" },
            { isOptional: !0, name: "parentHash", type: "BlockHash" },
          ],
          type: "CreatedBlock",
        },
        finalizeBlock: {
          description:
            "Instructs the manual-seal authorship task to finalize a block",
          params: [
            { name: "hash", type: "BlockHash" },
            { isOptional: !0, name: "justification", type: "Justification" },
          ],
          type: "bool",
        },
      };
    },
    9592: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          EvmAccount: { nonce: "u256", balance: "u256" },
          EvmCallInfo: {
            exitReason: "ExitReason",
            value: "Bytes",
            usedGas: "U256",
            logs: "Vec<EvmLog>",
          },
          EvmCreateInfo: {
            exitReason: "ExitReason",
            value: "H160",
            usedGas: "U256",
            logs: "Vec<EvmLog>",
          },
          EvmCallInfoV2: {
            exitReason: "ExitReason",
            value: "Bytes",
            usedGas: "U256",
            weightInfo: "Option<EvmWeightInfo>",
            logs: "Vec<EvmLog>",
          },
          EvmCreateInfoV2: {
            exitReason: "ExitReason",
            value: "H160",
            usedGas: "U256",
            weightInfo: "Option<EvmWeightInfo>",
            logs: "Vec<EvmLog>",
          },
          EvmLog: { address: "H160", topics: "Vec<H256>", data: "Bytes" },
          EvmVicinity: { gasPrice: "u256", origin: "H160" },
          EvmWeightInfo: {
            refTimeLimit: "Option<u64>",
            proofSizeLimit: "Option<u64>",
            refTimeUsage: "Option<u64>",
            proofSizeUsage: "Option<u64>",
          },
          ExitError: {
            _enum: {
              StackUnderflow: "Null",
              StackOverflow: "Null",
              InvalidJump: "Null",
              InvalidRange: "Null",
              DesignatedInvalid: "Null",
              CallTooDeep: "Null",
              CreateCollision: "Null",
              CreateContractLimit: "Null",
              OutOfOffset: "Null",
              OutOfGas: "Null",
              OutOfFund: "Null",
              PCUnderflow: "Null",
              CreateEmpty: "Null",
              Other: "Text",
            },
          },
          ExitFatal: {
            _enum: {
              NotSupported: "Null",
              UnhandledInterrupt: "Null",
              CallErrorAsFatal: "ExitError",
              Other: "Text",
            },
          },
          ExitReason: {
            _enum: {
              Succeed: "ExitSucceed",
              Error: "ExitError",
              Revert: "ExitRevert",
              Fatal: "ExitFatal",
            },
          },
          ExitRevert: { _enum: ["Reverted"] },
          ExitSucceed: { _enum: ["Stopped", "Returned", "Suicided"] },
        },
      };
    },
    9593: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          Extrinsic: "GenericExtrinsic",
          ExtrinsicEra: "GenericExtrinsicEra",
          ExtrinsicPayload: "GenericExtrinsicPayload",
          ExtrinsicSignature: "MultiSignature",
          ExtrinsicV4: "GenericExtrinsicV4",
          ExtrinsicPayloadV4: "GenericExtrinsicPayloadV4",
          ExtrinsicSignatureV4: "GenericExtrinsicSignatureV4",
          ExtrinsicUnknown: "GenericExtrinsicUnknown",
          ExtrinsicPayloadUnknown: "GenericExtrinsicPayloadUnknown",
          Era: "ExtrinsicEra",
          ImmortalEra: "GenericImmortalEra",
          MortalEra: "GenericMortalEra",
          AnySignature: "H512",
          MultiSignature: {
            _enum: {
              Ed25519: "Ed25519Signature",
              Sr25519: "Sr25519Signature",
              Ecdsa: "EcdsaSignature",
            },
          },
          Signature: "H512",
          SignerPayload: "GenericSignerPayload",
          EcdsaSignature: "[u8; 65]",
          Ed25519Signature: "H512",
          Sr25519Signature: "H512",
        },
      };
    },
    9594: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9595);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          FungiblesAccessError: {
            _enum: [
              "AssetIdConversionFailed",
              "AmountToBalanceConversionFailed",
            ],
          },
        },
      };
    },
    9595: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        FungiblesApi: [
          {
            methods: {
              query_account_balances: {
                description:
                  "Returns the list of all `MultiAsset` that an `AccountId` has",
                params: [{ name: "account", type: "AccountId" }],
                type: "Result<Vec<XcmV3MultiAsset>, FungiblesAccessError>",
              },
            },
            version: 1,
          },
          {
            methods: {
              query_account_balances: {
                description:
                  "Returns the list of all `MultiAsset` that an `AccountId` has",
                params: [{ name: "account", type: "AccountId" }],
                type: "Result<XcmVersionedMultiAssets, FungiblesAccessError>",
              },
            },
            version: 2,
          },
        ],
      };
    },
    9596: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          AssetOptions: {
            initalIssuance: "Compact<Balance>",
            permissions: "PermissionLatest",
          },
          Owner: { _enum: { None: "Null", Address: "AccountId" } },
          PermissionsV1: { update: "Owner", mint: "Owner", burn: "Owner" },
          PermissionVersions: { _enum: { V1: "PermissionsV1" } },
          PermissionLatest: "PermissionsV1",
        },
      };
    },
    9597: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9598);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: { GenesisBuildErr: "Text" },
      };
    },
    9598: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        GenesisBuilder: [
          {
            methods: {
              build_config: {
                description:
                  "Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the storage.",
                params: [{ name: "json", type: "Vec<u8>" }],
                type: "Result<(), GenesisBuildErr>",
              },
              create_default_config: {
                description:
                  "Creates the default `RuntimeGenesisConfig` and returns it as a JSON blob.",
                params: [],
                type: "Vec<u8>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9599: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          ActiveGilt: {
            proportion: "Perquintill",
            amount: "Balance",
            who: "AccountId",
            expiry: "BlockNumber",
          },
          ActiveGiltsTotal: {
            frozen: "Balance",
            proportion: "Perquintill",
            index: "ActiveIndex",
            target: "Perquintill",
          },
          ActiveIndex: "u32",
          GiltBid: { amount: "Balance", who: "AccountId" },
        },
      };
    },
    9600: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9601),
        r = a(9602);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          AuthorityIndex: "u64",
          AuthorityList: "Vec<NextAuthority>",
          AuthoritySet: {
            currentAuthorities: "AuthorityList",
            setId: "u64",
            pendingStandardChanges: "ForkTreePendingChange",
            pendingForcedChanges: "Vec<PendingChange>",
            authoritySetChanges: "AuthoritySetChanges",
          },
          ForkTreePendingChange: {
            roots: "Vec<ForkTreePendingChangeNode>",
            bestFinalizedNumber: "Option<BlockNumber>",
          },
          ForkTreePendingChangeNode: {
            hash: "BlockHash",
            number: "BlockNumber",
            data: "PendingChange",
            children: "Vec<ForkTreePendingChangeNode>",
          },
          AuthoritySetChange: "(U64, BlockNumber)",
          AuthoritySetChanges: "Vec<AuthoritySetChange>",
          AuthorityWeight: "u64",
          DelayKind: { _enum: { Finalized: "Null", Best: "DelayKindBest" } },
          DelayKindBest: { medianLastFinalized: "BlockNumber" },
          EncodedFinalityProofs: "Bytes",
          GrandpaEquivocation: {
            _enum: {
              Prevote: "GrandpaEquivocationValue",
              Precommit: "GrandpaEquivocationValue",
            },
          },
          GrandpaEquivocationProof: {
            setId: "SetId",
            equivocation: "GrandpaEquivocation",
          },
          GrandpaEquivocationValue: {
            roundNumber: "u64",
            identity: "AuthorityId",
            first: "(GrandpaPrevote, AuthoritySignature)",
            second: "(GrandpaPrevote, AuthoritySignature)",
          },
          GrandpaPrevote: { targetHash: "Hash", targetNumber: "BlockNumber" },
          GrandpaCommit: {
            targetHash: "BlockHash",
            targetNumber: "BlockNumber",
            precommits: "Vec<GrandpaSignedPrecommit>",
          },
          GrandpaPrecommit: {
            targetHash: "BlockHash",
            targetNumber: "BlockNumber",
          },
          GrandpaSignedPrecommit: {
            precommit: "GrandpaPrecommit",
            signature: "AuthoritySignature",
            id: "AuthorityId",
          },
          GrandpaJustification: {
            round: "u64",
            commit: "GrandpaCommit",
            votesAncestries: "Vec<Header>",
          },
          JustificationNotification: "Bytes",
          KeyOwnerProof: "MembershipProof",
          NextAuthority: "(AuthorityId, AuthorityWeight)",
          PendingChange: {
            nextAuthorities: "AuthorityList",
            delay: "BlockNumber",
            canonHeight: "BlockNumber",
            canonHash: "BlockHash",
            delayKind: "DelayKind",
          },
          PendingPause: { scheduledAt: "BlockNumber", delay: "BlockNumber" },
          PendingResume: { scheduledAt: "BlockNumber", delay: "BlockNumber" },
          Precommits: {
            currentWeight: "u32",
            missing: "BTreeSet<AuthorityId>",
          },
          Prevotes: { currentWeight: "u32", missing: "BTreeSet<AuthorityId>" },
          ReportedRoundStates: {
            setId: "u32",
            best: "RoundState",
            background: "Vec<RoundState>",
          },
          RoundState: {
            round: "u32",
            totalWeight: "u32",
            thresholdWeight: "u32",
            prevotes: "Prevotes",
            precommits: "Precommits",
          },
          SetId: "u64",
          StoredPendingChange: {
            scheduledAt: "BlockNumber",
            delay: "BlockNumber",
            nextAuthorities: "AuthorityList",
          },
          StoredState: {
            _enum: {
              Live: "Null",
              PendingPause: "PendingPause",
              Paused: "Null",
              PendingResume: "PendingResume",
            },
          },
        },
      };
    },
    9601: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        proveFinality: {
          description:
            "Prove finality for the given block number, returning the Justification for the last block in the set.",
          params: [{ name: "blockNumber", type: "BlockNumber" }],
          type: "Option<EncodedFinalityProofs>",
        },
        roundState: {
          description:
            "Returns the state of the current best round state as well as the ongoing background rounds",
          params: [],
          type: "ReportedRoundStates",
        },
        subscribeJustifications: {
          description: "Subscribes to grandpa justifications",
          params: [],
          pubsub: [
            "justifications",
            "subscribeJustifications",
            "unsubscribeJustifications",
          ],
          type: "JustificationNotification",
        },
      };
    },
    9602: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
        generate_key_ownership_proof: {
          description:
            "Generates a proof of key ownership for the given authority in the given set.",
          params: [
            { name: "setId", type: "SetId" },
            { name: "authorityId", type: "AuthorityId" },
          ],
          type: "Option<OpaqueKeyOwnershipProof>",
        },
        grandpa_authorities: {
          description:
            "Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.",
          params: [],
          type: "AuthorityList",
        },
        submit_report_equivocation_unsigned_extrinsic: {
          description:
            "Submits an unsigned extrinsic to report an equivocation.",
          params: [
            { name: "equivocationProof", type: "GrandpaEquivocationProof" },
            { name: "keyOwnerProof", type: "OpaqueKeyOwnershipProof" },
          ],
          type: "Option<Null>",
        },
      };
      t.runtime = {
        GrandpaApi: [
          {
            methods: {
              current_set_id: {
                description: "Get current GRANDPA authority set id.",
                params: [],
                type: "SetId",
              },
              ...n,
            },
            version: 3,
          },
          { methods: n, version: 2 },
        ],
      };
    },
    9603: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          IdentityFields: {
            _set: {
              _bitLength: 64,
              Display: 1,
              Legal: 2,
              Web: 4,
              Riot: 8,
              Email: 16,
              PgpFingerprint: 32,
              Image: 64,
              Twitter: 128,
            },
          },
          IdentityInfoAdditional: "(Data, Data)",
          IdentityInfoTo198: {
            additional: "Vec<IdentityInfoAdditional>",
            display: "Data",
            legal: "Data",
            web: "Data",
            riot: "Data",
            email: "Data",
            pgpFingerprint: "Option<H160>",
            image: "Data",
          },
          IdentityInfo: {
            _fallback: "IdentityInfoTo198",
            additional: "Vec<IdentityInfoAdditional>",
            display: "Data",
            legal: "Data",
            web: "Data",
            riot: "Data",
            email: "Data",
            pgpFingerprint: "Option<H160>",
            image: "Data",
            twitter: "Data",
          },
          IdentityJudgement: {
            _enum: {
              Unknown: "Null",
              FeePaid: "Balance",
              Reasonable: "Null",
              KnownGood: "Null",
              OutOfDate: "Null",
              LowQuality: "Null",
              Erroneous: "Null",
            },
          },
          RegistrationJudgement: "(RegistrarIndex, IdentityJudgement)",
          RegistrationTo198: {
            judgements: "Vec<RegistrationJudgement>",
            deposit: "Balance",
            info: "IdentityInfoTo198",
          },
          Registration: {
            _fallback: "RegistrationTo198",
            judgements: "Vec<RegistrationJudgement>",
            deposit: "Balance",
            info: "IdentityInfo",
          },
          RegistrarIndex: "u32",
          RegistrarInfo: {
            account: "AccountId",
            fee: "Balance",
            fields: "IdentityFields",
          },
        },
      };
    },
    9604: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          AuthIndex: "u32",
          AuthoritySignature: "Signature",
          Heartbeat: {
            blockNumber: "BlockNumber",
            networkState: "OpaqueNetworkState",
            sessionIndex: "SessionIndex",
            authorityIndex: "AuthIndex",
            validatorsLen: "u32",
          },
          HeartbeatTo244: {
            blockNumber: "BlockNumber",
            networkState: "OpaqueNetworkState",
            sessionIndex: "SessionIndex",
            authorityIndex: "AuthIndex",
          },
          OpaqueMultiaddr: "Opaque<Bytes>",
          OpaquePeerId: "Opaque<Bytes>",
          OpaqueNetworkState: {
            peerId: "OpaquePeerId",
            externalAddresses: "Vec<OpaqueMultiaddr>",
          },
        },
      };
    },
    9605: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          CallIndex: "(u8, u8)",
          LotteryConfig: {
            price: "Balance",
            start: "BlockNumber",
            length: "BlockNumber",
            delay: "BlockNumber",
            repeat: "bool",
          },
        },
      };
    },
    9606: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9607);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          Mixnode: {
            externalAddresses: "Vec<Bytes>",
            kxPublic: "[u8; 32]",
            peerId: "[u8; 32]",
          },
          MixnodesErr: {
            _enum: { InsufficientRegistrations: { min: "u32", num: "u32" } },
          },
          SessionPhase: {
            _enum: [
              "CoverToCurrent",
              "RequestsToCurrent",
              "CoverToPrev",
              "DisconnectFromPrev",
            ],
          },
          SessionStatus: { currentIndex: "u32", phase: "SessionPhase" },
        },
      };
    },
    9607: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        MixnetApi: [
          {
            methods: {
              current_mixnodes: {
                description: "Get the index and phase of the current session.",
                params: [],
                type: "Result<Mixnode, MixnodesErr>",
              },
              maybe_register: {
                description: "Try to register a mixnode for the next session.",
                params: [
                  { name: "session_index", type: "u32" },
                  { name: "mixnode", type: "Mixnode" },
                ],
                type: "bool",
              },
              prev_mixnodes: {
                description: "Get the index and phase of the current session.",
                params: [],
                type: "Result<Mixnode, MixnodesErr>",
              },
              session_status: {
                description: "Get the index and phase of the current session.",
                params: [],
                type: "SessionStatus",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9608: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9609),
        r = a(9610);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          MmrBatchProof: {
            leafIndices: "Vec<MmrLeafIndex>",
            leafCount: "MmrNodeIndex",
            items: "Vec<Hash>",
          },
          MmrEncodableOpaqueLeaf: "Bytes",
          MmrError: {
            _enum: [
              "InvalidNumericOp",
              "Push",
              "GetRoot",
              "Commit",
              "GenerateProof",
              "Verify",
              "LeafNotFound",
              " PalletNotIncluded",
              "InvalidLeafIndex",
              "InvalidBestKnownBlock",
            ],
          },
          MmrHash: "Hash",
          MmrLeafBatchProof: {
            blockHash: "BlockHash",
            leaves: "Bytes",
            proof: "Bytes",
          },
          MmrLeafIndex: "u64",
          MmrLeafProof: {
            blockHash: "BlockHash",
            leaf: "Bytes",
            proof: "Bytes",
          },
          MmrNodeIndex: "u64",
          MmrProof: {
            leafIndex: "MmrLeafIndex",
            leafCount: "MmrNodeIndex",
            items: "Vec<Hash>",
          },
        },
      };
    },
    9609: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        generateProof: {
          description: "Generate MMR proof for the given block numbers.",
          params: [
            { name: "blockNumbers", type: "Vec<u64>" },
            { isOptional: !0, name: "bestKnownBlockNumber", type: "u64" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "MmrLeafBatchProof",
        },
        root: {
          description: "Get the MMR root hash for the current best block.",
          params: [
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "MmrHash",
        },
        verifyProof: {
          description: "Verify an MMR proof",
          params: [{ name: "proof", type: "MmrLeafBatchProof" }],
          type: "bool",
        },
        verifyProofStateless: {
          description: "Verify an MMR proof statelessly given an mmr_root",
          params: [
            { name: "root", type: "MmrHash" },
            { name: "proof", type: "MmrLeafBatchProof" },
          ],
          type: "bool",
        },
      };
    },
    9610: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          generate_proof: {
            description: "Generate MMR proof for the given block numbers.",
            params: [
              { name: "blockNumbers", type: "Vec<BlockNumber>" },
              { name: "bestKnownBlockNumber", type: "Option<BlockNumber>" },
            ],
            type: "Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>",
          },
          mmr_leaf_count: {
            description: "Return the number of MMR blocks in the chain.",
            params: [],
            type: "Result<U64, MmrError>",
          },
          mmr_root: {
            description: "Return the on-chain MMR root hash.",
            params: [],
            type: "Result<Hash, MmrError>",
          },
          verify_proof: {
            description: "Verify MMR proof against on-chain MMR.",
            params: [
              { name: "leaves", type: "Vec<MmrEncodableOpaqueLeaf>" },
              { name: "proof", type: "MmrBatchProof" },
            ],
            type: "Result<(), MmrError>",
          },
          verify_proof_stateless: {
            description: "Verify MMR proof against given root hash.",
            params: [
              { name: "root", type: "Hash" },
              { name: "leaves", type: "Vec<MmrEncodableOpaqueLeaf>" },
              { name: "proof", type: "MmrBatchProof" },
            ],
            type: "Result<(), MmrError>",
          },
        },
        r = {
          generate_batch_proof: {
            description:
              "Generate MMR proof for a series of leaves under given indices.",
            params: [{ name: "leafIndices", type: "Vec<MmrLeafIndex>" }],
            type: "Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>",
          },
          generate_proof: {
            description: "Generate MMR proof for a leaf under given index.",
            params: [{ name: "leafIndex", type: "MmrLeafIndex" }],
            type: "Result<(MmrEncodableOpaqueLeaf, MmrProof), MmrError>",
          },
          mmr_root: {
            description: "Return the on-chain MMR root hash.",
            params: [],
            type: "Result<Hash, MmrError>",
          },
          verify_batch_proof: {
            description:
              "Verify MMR proof against on-chain MMR for a batch of leaves.",
            params: [
              { name: "leaves", type: "Vec<MmrEncodableOpaqueLeaf>" },
              { name: "proof", type: "MmrBatchProof" },
            ],
            type: "Result<(), MmrError>",
          },
          verify_batch_proof_stateless: {
            description:
              "Verify MMR proof against given root hash or a batch of leaves.",
            params: [
              { name: "root", type: "Hash" },
              { name: "leaves", type: "Vec<MmrEncodableOpaqueLeaf>" },
              { name: "proof", type: "MmrBatchProof" },
            ],
            type: "Result<(), MmrError>",
          },
          verify_proof: {
            description: "Verify MMR proof against on-chain MMR.",
            params: [
              { name: "leaf", type: "MmrEncodableOpaqueLeaf" },
              { name: "proof", type: "MmrProof" },
            ],
            type: "Result<(), MmrError>",
          },
          verify_proof_stateless: {
            description: "Verify MMR proof against given root hash.",
            params: [
              { name: "root", type: "Hash" },
              { name: "leaf", type: "MmrEncodableOpaqueLeaf" },
              { name: "proof", type: "MmrProof" },
            ],
            type: "Result<(), MmrError>",
          },
        };
      t.runtime = {
        MmrApi: [
          { methods: n, version: 2 },
          { methods: r, version: 1 },
        ],
      };
    },
    9611: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9612);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: { NftCollectionId: "u32", NftItemId: "u32" },
      };
    },
    9612: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        NftsApi: [
          {
            methods: {
              attribute: {
                description: "An attribute",
                params: [
                  { name: "collection", type: "NftCollectionId" },
                  { name: "item", type: "NftItemId" },
                  { name: "key", type: "Bytes" },
                ],
                type: "Option<Bytes>",
              },
              collection_attribute: {
                description: "A collection attribute",
                params: [
                  { name: "collection", type: "NftCollectionId" },
                  { name: "key", type: "Bytes" },
                ],
                type: "Option<Bytes>",
              },
              collection_owner: {
                description: "A collection owner",
                params: [{ name: "collection", type: "NftCollectionId" }],
                type: "Option<AccountId>",
              },
              custom_attribute: {
                description: "A custom attribute",
                params: [
                  { name: "account", type: "AccountId" },
                  { name: "collection", type: "NftCollectionId" },
                  { name: "item", type: "NftItemId" },
                  { name: "key", type: "Bytes" },
                ],
                type: "Option<Bytes>",
              },
              owner: {
                description: "Collection owner",
                params: [
                  { name: "collection", type: "NftCollectionId" },
                  { name: "item", type: "NftItemId" },
                ],
                type: "Option<AccountId>",
              },
              system_attribute: {
                description: "System attribute",
                params: [
                  { name: "collection", type: "NftCollectionId" },
                  { name: "item", type: "NftItemId" },
                  { name: "key", type: "Bytes" },
                ],
                type: "Option<Bytes>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9613: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9614);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          NpApiError: { _enum: ["MemberNotFound", "OverflowInPendingRewards"] },
          NpPoolId: "u32",
        },
      };
    },
    9614: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        NominationPoolsApi: [
          {
            methods: {
              balance_to_points: {
                description:
                  "Returns the equivalent points of `new_funds` for a given pool.",
                params: [
                  { name: "poolId", type: "NpPoolId" },
                  { name: "newFunds", type: "Balance" },
                ],
                type: "Balance",
              },
              pending_rewards: {
                description:
                  "Returns the pending rewards for the given member.",
                params: [{ name: "member", type: "AccountId" }],
                type: "Balance",
              },
              points_to_balance: {
                description:
                  "Returns the equivalent balance of `points` for a given pool.",
                params: [
                  { name: "poolId", type: "NpPoolId" },
                  { name: "points", type: "Balance" },
                ],
                type: "Balance",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9615: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          DeferredOffenceOf:
            "(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)",
          Kind: "[u8; 16]",
          OffenceDetails: { offender: "Offender", reporters: "Vec<Reporter>" },
          Offender: "IdentificationTuple",
          OpaqueTimeSlot: "Bytes",
          ReportIdOf: "Hash",
          Reporter: "AccountId",
        },
      };
    },
    9616: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9617);
      t.default = { rpc: {}, runtime: n.runtime, types: {} };
    },
    9617: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        DifficultyApi: [
          {
            methods: {
              difficulty: {
                description: "Return the target difficulty of the next block.",
                params: [],
                type: "Raw",
              },
            },
            version: 1,
          },
        ],
        TimestampApi: [
          {
            methods: {
              timestamp: {
                description:
                  "API necessary for timestamp-based difficulty adjustment algorithms.",
                params: [],
                type: "Moment",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9618: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          ProxyDefinition: {
            delegate: "AccountId",
            proxyType: "ProxyType",
            delay: "BlockNumber",
          },
          ProxyType: { _enum: ["Any", "NonTransfer", "Governance", "Staking"] },
          ProxyAnnouncement: {
            real: "AccountId",
            callHash: "Hash",
            height: "BlockNumber",
          },
        },
      };
    },
    9619: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          ActiveRecovery: {
            created: "BlockNumber",
            deposit: "Balance",
            friends: "Vec<AccountId>",
          },
          RecoveryConfig: {
            delayPeriod: "BlockNumber",
            deposit: "Balance",
            friends: "Vec<AccountId>",
            threshold: "u16",
          },
        },
      };
    },
    9620: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          Period: "(BlockNumber, u32)",
          Priority: "u8",
          SchedulePeriod: "Period",
          SchedulePriority: "Priority",
          Scheduled: {
            maybeId: "Option<Bytes>",
            priority: "SchedulePriority",
            call: "Call",
            maybePeriodic: "Option<SchedulePeriod>",
            origin: "PalletsOrigin",
          },
          ScheduledTo254: {
            maybeId: "Option<Bytes>",
            priority: "SchedulePriority",
            call: "Call",
            maybePeriodic: "Option<SchedulePeriod>",
          },
          TaskAddress: "(BlockNumber, u32)",
        },
      };
    },
    9621: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9622);
      const r = {
        BeefyKey: "[u8; 33]",
        Keys: "SessionKeys4",
        SessionKeys1: "(AccountId)",
        SessionKeys2: "(AccountId, AccountId)",
        SessionKeys3: "(AccountId, AccountId, AccountId)",
        SessionKeys4: "(AccountId, AccountId, AccountId, AccountId)",
        SessionKeys5: "(AccountId, AccountId, AccountId, AccountId, AccountId)",
        SessionKeys6:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
        SessionKeys6B:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
        SessionKeys7:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
        SessionKeys7B:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
        SessionKeys8:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
        SessionKeys8B:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
        SessionKeys9:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
        SessionKeys9B:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
        SessionKeys10:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
        SessionKeys10B:
          "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
      };
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          ...r,
          FullIdentification: "Exposure",
          IdentificationTuple: "(ValidatorId, FullIdentification)",
          MembershipProof: {
            session: "SessionIndex",
            trieNodes: "Vec<Bytes>",
            validatorCount: "ValidatorCount",
          },
          SessionIndex: "u32",
          ValidatorCount: "u32",
        },
      };
    },
    9622: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        SessionKeys: [
          {
            methods: {
              decode_session_keys: {
                description: "Decode the given public session keys.",
                params: [{ name: "encoded", type: "Bytes" }],
                type: "Option<Vec<(Bytes, KeyTypeId)>>",
              },
              generate_session_keys: {
                description:
                  "Generate a set of session keys with optionally using the given seed.",
                params: [{ name: "seed", type: "Option<Bytes>" }],
                type: "Bytes",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9623: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          Bid: { who: "AccountId", kind: "BidKind", value: "Balance" },
          BidKind: {
            _enum: { Deposit: "Balance", Vouch: "(AccountId, Balance)" },
          },
          SocietyJudgement: { _enum: ["Rebid", "Reject", "Approve"] },
          SocietyVote: { _enum: ["Skeptic", "Reject", "Approve"] },
          StrikeCount: "u32",
          VouchingStatus: { _enum: ["Vouching", "Banned"] },
        },
      };
    },
    9624: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9625);
      const r = {
          Points: "u32",
          EraPoints: { total: "Points", individual: "Vec<Points>" },
        },
        o = {
          CompactAssignments: "CompactAssignmentsWith16",
          CompactAssignmentsWith16: {
            votes1: "Vec<(NominatorIndexCompact, ValidatorIndexCompact)>",
            votes2:
              "Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>",
            votes3:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>",
            votes4:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>",
            votes5:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>",
            votes6:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>",
            votes7:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>",
            votes8:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>",
            votes9:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>",
            votes10:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>",
            votes11:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>",
            votes12:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>",
            votes13:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>",
            votes14:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>",
            votes15:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>",
            votes16:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>",
          },
          CompactAssignmentsWith24: {
            votes1: "Vec<(NominatorIndexCompact, ValidatorIndexCompact)>",
            votes2:
              "Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>",
            votes3:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>",
            votes4:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>",
            votes5:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>",
            votes6:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>",
            votes7:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>",
            votes8:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>",
            votes9:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>",
            votes10:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>",
            votes11:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>",
            votes12:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>",
            votes13:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>",
            votes14:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>",
            votes15:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>",
            votes16:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>",
            votes17:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 16], ValidatorIndexCompact)>",
            votes18:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 17], ValidatorIndexCompact)>",
            votes19:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 18], ValidatorIndexCompact)>",
            votes20:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 19], ValidatorIndexCompact)>",
            votes21:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 20], ValidatorIndexCompact)>",
            votes22:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 21], ValidatorIndexCompact)>",
            votes23:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 22], ValidatorIndexCompact)>",
            votes24:
              "Vec<(NominatorIndexCompact, [CompactScoreCompact; 23], ValidatorIndexCompact)>",
          },
          CompactAssignmentsTo265: "CompactAssignmentsWith16",
          CompactAssignmentsTo257: {
            votes1: "Vec<(NominatorIndex, [CompactScore; 0], ValidatorIndex)>",
            votes2: "Vec<(NominatorIndex, [CompactScore; 1], ValidatorIndex)>",
            votes3: "Vec<(NominatorIndex, [CompactScore; 2], ValidatorIndex)>",
            votes4: "Vec<(NominatorIndex, [CompactScore; 3], ValidatorIndex)>",
            votes5: "Vec<(NominatorIndex, [CompactScore; 4], ValidatorIndex)>",
            votes6: "Vec<(NominatorIndex, [CompactScore; 5], ValidatorIndex)>",
            votes7: "Vec<(NominatorIndex, [CompactScore; 6], ValidatorIndex)>",
            votes8: "Vec<(NominatorIndex, [CompactScore; 7], ValidatorIndex)>",
            votes9: "Vec<(NominatorIndex, [CompactScore; 8], ValidatorIndex)>",
            votes10: "Vec<(NominatorIndex, [CompactScore; 9], ValidatorIndex)>",
            votes11:
              "Vec<(NominatorIndex, [CompactScore; 10], ValidatorIndex)>",
            votes12:
              "Vec<(NominatorIndex, [CompactScore; 11], ValidatorIndex)>",
            votes13:
              "Vec<(NominatorIndex, [CompactScore; 12], ValidatorIndex)>",
            votes14:
              "Vec<(NominatorIndex, [CompactScore; 13], ValidatorIndex)>",
            votes15:
              "Vec<(NominatorIndex, [CompactScore; 14], ValidatorIndex)>",
            votes16:
              "Vec<(NominatorIndex, [CompactScore; 15], ValidatorIndex)>",
          },
          CompactScore: "(ValidatorIndex, OffchainAccuracy)",
          CompactScoreCompact:
            "(ValidatorIndexCompact, OffchainAccuracyCompact)",
          ElectionCompute: { _enum: ["OnChain", "Signed", "Unsigned"] },
          ElectionPhase: {
            _enum: {
              Off: null,
              Signed: null,
              Unsigned: "(bool, BlockNumber)",
              Emergency: null,
            },
          },
          ElectionResult: {
            compute: "ElectionCompute",
            slotStake: "Balance",
            electedStashes: "Vec<AccountId>",
            exposures: "Vec<(AccountId, Exposure)>",
          },
          ElectionScore: "[u128; 3]",
          ElectionSize: {
            validators: "Compact<ValidatorIndex>",
            nominators: "Compact<NominatorIndex>",
          },
          ElectionStatus: { _enum: { Close: "Null", Open: "BlockNumber" } },
          ExtendedBalance: "u128",
          RawSolution: "RawSolutionWith16",
          RawSolutionWith16: {
            compact: "CompactAssignmentsWith16",
            score: "ElectionScore",
            round: "u32",
          },
          RawSolutionWith24: {
            compact: "CompactAssignmentsWith24",
            score: "ElectionScore",
            round: "u32",
          },
          RawSolutionTo265: "RawSolutionWith16",
          ReadySolution: {
            supports: "SolutionSupports",
            score: "ElectionScore",
            compute: "ElectionCompute",
          },
          RoundSnapshot: {
            voters: "Vec<(AccountId, VoteWeight, Vec<AccountId>)>",
            targets: "Vec<AccountId>",
          },
          SeatHolder: {
            who: "AccountId",
            stake: "Balance",
            deposit: "Balance",
          },
          SignedSubmission: {
            _fallback: "SignedSubmissionTo276",
            who: "AccountId",
            deposit: "Balance",
            solution: "RawSolution",
            reward: "Balance",
          },
          SignedSubmissionTo276: {
            who: "AccountId",
            deposit: "Balance",
            solution: "RawSolution",
          },
          SignedSubmissionOf: "SignedSubmission",
          SolutionOrSnapshotSize: {
            voters: "Compact<u32>",
            targets: "Compact<u32>",
          },
          SolutionSupport: {
            total: "ExtendedBalance",
            voters: "Vec<(AccountId, ExtendedBalance)>",
          },
          SolutionSupports: "Vec<(AccountId, SolutionSupport)>",
          Supports: "SolutionSupports",
          SubmissionIndicesOf: "BTreeMap<ElectionScore, u32>",
          Voter: {
            votes: "Vec<AccountId>",
            stake: "Balance",
            deposit: "Balance",
          },
          VoteWeight: "u64",
        };
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          ...r,
          ...o,
          ActiveEraInfo: { index: "EraIndex", start: "Option<Moment>" },
          EraIndex: "u32",
          EraRewardPoints: {
            total: "RewardPoint",
            individual: "BTreeMap<AccountId, RewardPoint>",
          },
          EraRewards: { total: "u32", rewards: "Vec<u32>" },
          Exposure: {
            total: "Compact<Balance>",
            own: "Compact<Balance>",
            others: "Vec<IndividualExposure>",
          },
          Forcing: {
            _enum: ["NotForcing", "ForceNew", "ForceNone", "ForceAlways"],
          },
          IndividualExposure: { who: "AccountId", value: "Compact<Balance>" },
          KeyType: "AccountId",
          MomentOf: "Moment",
          Nominations: {
            targets: "Vec<AccountId>",
            submittedIn: "EraIndex",
            suppressed: "bool",
          },
          NominatorIndex: "u32",
          NominatorIndexCompact: "Compact<NominatorIndex>",
          OffchainAccuracy: "PerU16",
          OffchainAccuracyCompact: "Compact<OffchainAccuracy>",
          PhragmenScore: "[u128; 3]",
          Points: "u32",
          RewardDestination: {
            _enum: {
              Staked: "Null",
              Stash: "Null",
              Controller: "Null",
              Account: "AccountId",
              None: "Null",
            },
          },
          RewardPoint: "u32",
          SlashJournalEntry: {
            who: "AccountId",
            amount: "Balance",
            ownSlash: "Balance",
          },
          SlashingSpansTo204: {
            spanIndex: "SpanIndex",
            lastStart: "EraIndex",
            prior: "Vec<EraIndex>",
          },
          SlashingSpans: {
            spanIndex: "SpanIndex",
            lastStart: "EraIndex",
            lastNonzeroSlash: "EraIndex",
            prior: "Vec<EraIndex>",
          },
          SpanIndex: "u32",
          SpanRecord: { slashed: "Balance", paidOut: "Balance" },
          StakingLedgerTo223: {
            stash: "AccountId",
            total: "Compact<Balance>",
            active: "Compact<Balance>",
            unlocking: "Vec<UnlockChunk>",
          },
          StakingLedgerTo240: {
            _fallback: "StakingLedgerTo223",
            stash: "AccountId",
            total: "Compact<Balance>",
            active: "Compact<Balance>",
            unlocking: "Vec<UnlockChunk>",
            lastReward: "Option<EraIndex>",
          },
          StakingLedger: {
            stash: "AccountId",
            total: "Compact<Balance>",
            active: "Compact<Balance>",
            unlocking: "Vec<UnlockChunk>",
            claimedRewards: "Vec<EraIndex>",
          },
          UnappliedSlashOther: "(AccountId, Balance)",
          UnappliedSlash: {
            validator: "AccountId",
            own: "Balance",
            others: "Vec<UnappliedSlashOther>",
            reporters: "Vec<AccountId>",
            payout: "Balance",
          },
          UnlockChunk: {
            value: "Compact<Balance>",
            era: "Compact<BlockNumber>",
          },
          ValidatorIndex: "u16",
          ValidatorIndexCompact: "Compact<ValidatorIndex>",
          ValidatorPrefs: "ValidatorPrefsWithBlocked",
          ValidatorPrefsWithCommission: { commission: "Compact<Perbill>" },
          ValidatorPrefsWithBlocked: {
            commission: "Compact<Perbill>",
            blocked: "bool",
          },
          ValidatorPrefsTo196: { validatorPayment: "Compact<Balance>" },
          ValidatorPrefsTo145: {
            unstakeThreshold: "Compact<u32>",
            validatorPayment: "Compact<Balance>",
          },
        },
      };
    },
    9625: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        StakingApi: [
          {
            methods: {
              nominations_quota: {
                description:
                  "Returns the nominations quota for a nominator with a given balance.",
                params: [{ name: "balance", type: "Balance" }],
                type: "u32",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9626: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9627);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          StatementStoreStatementSource: {
            _enum: ["Chain", "Network", "Local"],
          },
          StatementStoreValidStatement: { maxCount: "u32", maxSize: "u32" },
          StatementStoreInvalidStatement: {
            _enum: ["BadProof", "NoProof", "InternalError"],
          },
        },
      };
    },
    9627: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        ValidateStatement: [
          {
            methods: {
              valdate_statement: {
                description: "Validate the statement.",
                params: [
                  { name: "source", type: "StatementStoreStatementSource" },
                  { name: "statement", type: "SpStatementStoreStatement" },
                ],
                type: "Result<StatementStoreValidStatement, StatementStoreInvalidStatement>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9628: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          WeightToFeeCoefficient: {
            coeffInteger: "Balance",
            coeffFrac: "Perbill",
            negative: "bool",
            degree: "u8",
          },
        },
      };
    },
    9629: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9630);
      t.default = { rpc: n.rpc, types: {} };
    },
    9630: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        genSyncSpec: {
          description:
            "Returns the json-serialized chainspec running the node, with a sync state.",
          endpoint: "sync_state_genSyncSpec",
          params: [{ name: "raw", type: "bool" }],
          type: "Json",
        },
      };
    },
    9631: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9632),
        r = a(9633);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          AccountInfo: "AccountInfoWithTripleRefCount",
          AccountInfoWithRefCountU8: {
            nonce: "Index",
            refcount: "u8",
            data: "AccountData",
          },
          AccountInfoWithRefCount: {
            _fallback: "AccountInfoWithRefCountU8",
            nonce: "Index",
            refcount: "RefCount",
            data: "AccountData",
          },
          AccountInfoWithDualRefCount: {
            _fallback: "AccountInfoWithRefCount",
            nonce: "Index",
            consumers: "RefCount",
            providers: "RefCount",
            data: "AccountData",
          },
          AccountInfoWithProviders: "AccountInfoWithDualRefCount",
          AccountInfoWithTripleRefCount: {
            _fallback: "AccountInfoWithDualRefCount",
            nonce: "Index",
            consumers: "RefCount",
            providers: "RefCount",
            sufficients: "RefCount",
            data: "AccountData",
          },
          ApplyExtrinsicResult:
            "Result<DispatchOutcome, TransactionValidityError>",
          ApplyExtrinsicResultPre6:
            "Result<DispatchOutcomePre6, TransactionValidityError>",
          ArithmeticError: {
            _enum: ["Underflow", "Overflow", "DivisionByZero"],
          },
          BlockLength: { max: "PerDispatchClassU32" },
          BlockWeights: {
            baseBlock: "Weight",
            maxBlock: "Weight",
            perClass: "PerDispatchClassWeightsPerClass",
          },
          ChainProperties: "GenericChainProperties",
          ChainType: {
            _enum: {
              Development: "Null",
              Local: "Null",
              Live: "Null",
              Custom: "Text",
            },
          },
          ConsumedWeight: "PerDispatchClassWeight",
          DigestOf: "Digest",
          DispatchClass: { _enum: ["Normal", "Operational", "Mandatory"] },
          DispatchError: {
            _enum: {
              Other: "Null",
              CannotLookup: "Null",
              BadOrigin: "Null",
              Module: "DispatchErrorModule",
              ConsumerRemaining: "Null",
              NoProviders: "Null",
              TooManyConsumers: "Null",
              Token: "TokenError",
              Arithmetic: "ArithmeticError",
              Transactional: "TransactionalError",
              Exhausted: "Null",
              Corruption: "Null",
              Unavailable: "Null",
            },
          },
          DispatchErrorPre6: {
            _enum: {
              Other: "Null",
              CannotLookup: "Null",
              BadOrigin: "Null",
              Module: "DispatchErrorModulePre6",
              ConsumerRemaining: "Null",
              NoProviders: "Null",
              TooManyConsumers: "Null",
              Token: "TokenError",
              Arithmetic: "ArithmeticError",
              Transactional: "TransactionalError",
            },
          },
          DispatchErrorPre6First: {
            _enum: {
              Other: "Null",
              CannotLookup: "Null",
              BadOrigin: "Null",
              Module: "DispatchErrorModulePre6",
              ConsumerRemaining: "Null",
              NoProviders: "Null",
              Token: "TokenError",
              Arithmetic: "ArithmeticError",
              Transactional: "TransactionalError",
            },
          },
          DispatchErrorModuleU8: { index: "u8", error: "u8" },
          DispatchErrorModuleU8a: { index: "u8", error: "[u8; 4]" },
          DispatchErrorModule: "DispatchErrorModuleU8a",
          DispatchErrorModulePre6: "DispatchErrorModuleU8",
          DispatchErrorTo198: { module: "Option<u8>", error: "u8" },
          DispatchInfo: {
            weight: "Weight",
            class: "DispatchClass",
            paysFee: "Pays",
          },
          DispatchInfoTo190: { weight: "Weight", class: "DispatchClass" },
          DispatchInfoTo244: {
            weight: "Weight",
            class: "DispatchClass",
            paysFee: "bool",
          },
          DispatchOutcome: "Result<(), DispatchError>",
          DispatchOutcomePre6: "Result<(), DispatchErrorPre6>",
          DispatchResult: "Result<(), DispatchError>",
          DispatchResultOf: "DispatchResult",
          DispatchResultTo198: "Result<(), Text>",
          Event: "GenericEvent",
          EventId: "[u8; 2]",
          EventIndex: "u32",
          EventRecord: { phase: "Phase", event: "Event", topics: "Vec<Hash>" },
          Health: { peers: "u64", isSyncing: "bool", shouldHavePeers: "bool" },
          InvalidTransaction: {
            _enum: {
              Call: "Null",
              Payment: "Null",
              Future: "Null",
              Stale: "Null",
              BadProof: "Null",
              AncientBirthBlock: "Null",
              ExhaustsResources: "Null",
              Custom: "u8",
              BadMandatory: "Null",
              MandatoryDispatch: "Null",
              BadSigner: "Null",
            },
          },
          Key: "Bytes",
          LastRuntimeUpgradeInfo: {
            specVersion: "Compact<u32>",
            specName: "Text",
          },
          NetworkState: {
            peerId: "Text",
            listenedAddresses: "Vec<Text>",
            externalAddresses: "Vec<Text>",
            connectedPeers: "HashMap<Text, Peer>",
            notConnectedPeers: "HashMap<Text, NotConnectedPeer>",
            averageDownloadPerSec: "u64",
            averageUploadPerSec: "u64",
            peerset: "NetworkStatePeerset",
          },
          NetworkStatePeerset: {
            messageQueue: "u64",
            nodes: "HashMap<Text, NetworkStatePeersetInfo>",
          },
          NetworkStatePeersetInfo: { connected: "bool", reputation: "i32" },
          NodeRole: {
            _enum: {
              Full: "Null",
              LightClient: "Null",
              Authority: "Null",
              UnknownRole: "u8",
            },
          },
          NotConnectedPeer: {
            knownAddresses: "Vec<Text>",
            latestPingTime: "Option<PeerPing>",
            versionString: "Option<Text>",
          },
          Peer: {
            enabled: "bool",
            endpoint: "PeerEndpoint",
            knownAddresses: "Vec<Text>",
            latestPingTime: "PeerPing",
            open: "bool",
            versionString: "Text",
          },
          PeerEndpoint: { listening: "PeerEndpointAddr" },
          PeerEndpointAddr: {
            _alias: { localAddr: "local_addr", sendBackAddr: "send_back_addr" },
            localAddr: "Text",
            sendBackAddr: "Text",
          },
          PeerPing: { nanos: "u64", secs: "u64" },
          PeerInfo: {
            peerId: "Text",
            roles: "Text",
            protocolVersion: "u32",
            bestHash: "Hash",
            bestNumber: "BlockNumber",
          },
          PerDispatchClassU32: {
            normal: "u32",
            operational: "u32",
            mandatory: "u32",
          },
          PerDispatchClassWeight: {
            normal: "Weight",
            operational: "Weight",
            mandatory: "Weight",
          },
          PerDispatchClassWeightsPerClass: {
            normal: "WeightPerClass",
            operational: "WeightPerClass",
            mandatory: "WeightPerClass",
          },
          Phase: {
            _enum: {
              ApplyExtrinsic: "u32",
              Finalization: "Null",
              Initialization: "Null",
            },
          },
          RawOrigin: {
            _enum: { Root: "Null", Signed: "AccountId", None: "Null" },
          },
          RefCount: "u32",
          RefCountTo259: "u8",
          SyncState: {
            startingBlock: "BlockNumber",
            currentBlock: "BlockNumber",
            highestBlock: "Option<BlockNumber>",
          },
          SystemOrigin: "RawOrigin",
          TokenError: {
            _enum: [
              "NoFunds",
              "WouldDie",
              "BelowMinimum",
              "CannotCreate",
              "UnknownAsset",
              "Frozen",
              "Unsupported",
              "Underflow",
              "Overflow",
            ],
          },
          TransactionValidityError: {
            _enum: {
              Invalid: "InvalidTransaction",
              Unknown: "UnknownTransaction",
            },
          },
          TransactionalError: { _enum: ["LimitReached", "NoLayer"] },
          UnknownTransaction: {
            _enum: {
              CannotLookup: "Null",
              NoUnsignedValidator: "Null",
              Custom: "u8",
            },
          },
          WeightPerClass: {
            baseExtrinsic: "Weight",
            maxExtrinsic: "Option<Weight>",
            maxTotal: "Option<Weight>",
            reserved: "Option<Weight>",
          },
        },
      };
    },
    9632: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        accountNextIndex: {
          alias: ["account_nextIndex"],
          description:
            "Retrieves the next accountIndex as available on the node",
          params: [{ name: "accountId", type: "AccountId" }],
          type: "Index",
        },
        addLogFilter: {
          description: "Adds the supplied directives to the current log filter",
          isUnsafe: !0,
          params: [{ name: "directives", type: "Text" }],
          type: "Null",
        },
        addReservedPeer: {
          description: "Adds a reserved peer",
          isUnsafe: !0,
          params: [{ name: "peer", type: "Text" }],
          type: "Text",
        },
        chain: { description: "Retrieves the chain", params: [], type: "Text" },
        chainType: {
          description: "Retrieves the chain type",
          params: [],
          type: "ChainType",
        },
        dryRun: {
          alias: ["system_dryRunAt"],
          description: "Dry run an extrinsic at a given block",
          isUnsafe: !0,
          params: [
            { name: "extrinsic", type: "Bytes" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "ApplyExtrinsicResult",
        },
        health: {
          description: "Return health status of the node",
          noErrorLog: !0,
          params: [],
          type: "Health",
        },
        localListenAddresses: {
          description:
            "The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example",
          params: [],
          type: "Vec<Text>",
        },
        localPeerId: {
          description: "Returns the base58-encoded PeerId of the node",
          params: [],
          type: "Text",
        },
        name: {
          description: "Retrieves the node name",
          params: [],
          type: "Text",
        },
        networkState: {
          alias: ["system_unstable_networkState"],
          description: "Returns current state of the network",
          isUnsafe: !0,
          params: [],
          type: "NetworkState",
        },
        nodeRoles: {
          description: "Returns the roles the node is running as",
          params: [],
          type: "Vec<NodeRole>",
        },
        peers: {
          description: "Returns the currently connected peers",
          isUnsafe: !0,
          params: [],
          type: "Vec<PeerInfo>",
        },
        properties: {
          description:
            "Get a custom set of properties as a JSON object, defined in the chain spec",
          params: [],
          type: "ChainProperties",
        },
        removeReservedPeer: {
          description: "Remove a reserved peer",
          isUnsafe: !0,
          params: [{ name: "peerId", type: "Text" }],
          type: "Text",
        },
        reservedPeers: {
          description: "Returns the list of reserved peers",
          params: [],
          type: "Vec<Text>",
        },
        resetLogFilter: {
          description: "Resets the log filter to Substrate defaults",
          isUnsafe: !0,
          params: [],
          type: "Null",
        },
        syncState: {
          description: "Returns the state of the syncing of the node",
          params: [],
          type: "SyncState",
        },
        version: {
          description: "Retrieves the version of the node",
          params: [],
          type: "Text",
        },
      };
    },
    9633: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AccountNonceApi: [
          {
            methods: {
              account_nonce: {
                description:
                  "The API to query account nonce (aka transaction index)",
                params: [{ name: "accountId", type: "AccountId" }],
                type: "Index",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9634: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          Bounty: {
            proposer: "AccountId",
            value: "Balance",
            fee: "Balance",
            curatorDeposit: "Balance",
            bond: "Balance",
            status: "BountyStatus",
          },
          BountyIndex: "u32",
          BountyStatus: {
            _enum: {
              Proposed: "Null",
              Approved: "Null",
              Funded: "Null",
              CuratorProposed: "BountyStatusCuratorProposed",
              Active: "BountyStatusActive",
              PendingPayout: "BountyStatusPendingPayout",
            },
          },
          BountyStatusActive: {
            curator: "AccountId",
            updateDue: "BlockNumber",
          },
          BountyStatusCuratorProposed: { curator: "AccountId" },
          BountyStatusPendingPayout: {
            curator: "AccountId",
            beneficiary: "AccountId",
            unlockAt: "BlockNumber",
          },
          OpenTip: {
            reason: "Hash",
            who: "AccountId",
            finder: "AccountId",
            deposit: "Balance",
            closes: "Option<BlockNumber>",
            tips: "Vec<OpenTipTip>",
            findersFee: "bool",
          },
          OpenTipTo225: {
            reason: "Hash",
            who: "AccountId",
            finder: "Option<OpenTipFinderTo225>",
            closes: "Option<BlockNumber>",
            tips: "Vec<OpenTipTip>",
          },
          OpenTipFinderTo225: "(AccountId, Balance)",
          OpenTipTip: "(AccountId, Balance)",
          TreasuryProposal: {
            proposer: "AccountId",
            value: "Balance",
            beneficiary: "AccountId",
            bond: "Balance",
          },
        },
      };
    },
    9635: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = { rpc: {}, types: { Multiplier: "Fixed128" } };
    },
    9636: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9637);
      t.default = {
        rpc: {},
        runtime: n.runtime,
        types: {
          TransactionSource: { _enum: ["InBlock", "Local", "External"] },
          TransactionValidity:
            "Result<ValidTransaction, TransactionValidityError>",
          ValidTransaction: {
            priority: "TransactionPriority",
            requires: "Vec<TransactionTag>",
            provides: "Vec<TransactionTag>",
            longevity: "TransactionLongevity",
            propagate: "bool",
          },
        },
      };
    },
    9637: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        TaggedTransactionQueue: [
          {
            methods: {
              validate_transaction: {
                description: "Validate the transaction.",
                params: [
                  { name: "source", type: "TransactionSource" },
                  { name: "tx", type: "Extrinsic" },
                  { name: "blockHash", type: "BlockHash" },
                ],
                type: "TransactionValidity",
              },
            },
            version: 3,
          },
          {
            methods: {
              validate_transaction: {
                description: "Validate the transaction.",
                params: [
                  { name: "source", type: "TransactionSource" },
                  { name: "tx", type: "Extrinsic" },
                ],
                type: "TransactionValidity",
              },
            },
            version: 2,
          },
          {
            methods: {
              validate_transaction: {
                description: "Validate the transaction.",
                params: [{ name: "tx", type: "Extrinsic" }],
                type: "TransactionValidity",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9638: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          ClassId: "u32",
          InstanceId: "u32",
          DepositBalance: "Balance",
          DepositBalanceOf: "Balance",
          ClassDetails: {
            owner: "AccountId",
            issuer: "AccountId",
            admin: "AccountId",
            freezer: "AccountId",
            totalDeposit: "DepositBalance",
            freeHolding: "bool",
            instances: "u32",
            instanceMetadatas: "u32",
            attributes: "u32",
            isFrozen: "bool",
          },
          DestroyWitness: {
            instances: "Compact<u32>",
            instanceMetadatas: "Compact<u32>",
            attributes: "Compact<u32>",
          },
          InstanceDetails: {
            owner: "AccountId",
            approved: "Option<AccountId>",
            isFrozen: "bool",
            deposit: "DepositBalance",
          },
          ClassMetadata: {
            deposit: "DepositBalance",
            data: "Vec<u8>",
            isFrozen: "bool",
          },
          InstanceMetadata: {
            deposit: "DepositBalance",
            data: "Vec<u8>",
            isFrozen: "bool",
          },
        },
      };
    },
    9639: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          Multisig: {
            when: "Timepoint",
            deposit: "Balance",
            depositor: "AccountId",
            approvals: "Vec<AccountId>",
          },
          Timepoint: { height: "BlockNumber", index: "u32" },
        },
      };
    },
    9640: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          VestingInfo: {
            locked: "Balance",
            perBlock: "Balance",
            startingBlock: "BlockNumber",
          },
        },
      };
    },
    9641: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          BlockAttestations: {
            receipt: "CandidateReceipt",
            valid: "Vec<AccountId>",
            invalid: "Vec<AccountId>",
          },
          IncludedBlocks: {
            actualNumber: "BlockNumber",
            session: "SessionIndex",
            randomSeed: "H256",
            activeParachains: "Vec<ParaId>",
            paraBlocks: "Vec<Hash>",
          },
          MoreAttestations: {},
        },
      };
    },
    9642: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          BridgedBlockHash: "H256",
          BridgedBlockNumber: "BlockNumber",
          BridgedHeader: "Header",
          BridgeMessageId: "(LaneId, MessageNonce)",
          CallOrigin: {
            _enum: {
              SourceRoot: "Null",
              TargetAccount: "(AccountId, MultiSigner, MultiSignature)",
              SourceAccount: "AccountId",
            },
          },
          ChainId: "[u8; 4]",
          DeliveredMessages: {
            begin: "MessageNonce",
            end: "MessageNonce",
            dispatchResults: "BitVec",
          },
          DispatchFeePayment: { _enum: ["AtSourceChain", "AtTargetChain"] },
          InboundLaneData: {
            relayers: "Vec<UnrewardedRelayer>",
            lastConfirmedNonce: "MessageNonce",
          },
          InboundRelayer: "AccountId",
          InitializationData: {
            header: "Header",
            authorityList: "AuthorityList",
            setId: "SetId",
            isHalted: "bool",
          },
          LaneId: "[u8; 4]",
          MessageData: { payload: "Bytes", fee: "Balance" },
          MessagesDeliveryProofOf: {
            bridgedHeaderHash: "BlockHash",
            storageProof: "Vec<Bytes>",
            lane: "LaneId",
          },
          MessageKey: { laneId: "LaneId", nonce: "MessageNonce" },
          MessageNonce: "u64",
          MessagesProofOf: {
            bridgedHeaderHash: "BridgedBlockHash",
            storageProof: "Vec<Bytes>",
            lane: "LaneId",
            noncesStart: "MessageNonce",
            noncesEnd: "MessageNonce",
          },
          OperatingMode: {
            _enum: ["Normal", "RejectingOutboundMessages", "Halted"],
          },
          OutboundLaneData: {
            oldestUnprunedNonce: "MessageNonce",
            latestReceivedNonce: "MessageNonce",
            latestGeneratedNonce: "MessageNonce",
          },
          OutboundMessageFee: "Balance",
          OutboundPayload: {
            specVersion: "u32",
            weight: "Weight",
            origin: "CallOrigin",
            dispatchFeePayment: "DispatchFeePayment",
            call: "Bytes",
          },
          Parameter: "Null",
          RelayerId: "AccountId",
          UnrewardedRelayer: {
            relayer: "RelayerId",
            messages: "DeliveredMessages",
          },
          UnrewardedRelayersState: {
            unrewardedRelayer_Entries: "MessageNonce",
            messagesInOldestEntry: "MessageNonce",
            totalMessages: "MessageNonce",
          },
        },
      };
    },
    9643: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: { StatementKind: { _enum: ["Regular", "Saft"] } },
      };
    },
    9644: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          FundIndex: "u32",
          LastContribution: {
            _enum: { Never: "Null", PreEnding: "u32", Ending: "BlockNumber" },
          },
          FundInfo: {
            depositor: "AccountId",
            verifier: "Option<MultiSigner>",
            deposit: "Balance",
            raised: "Balance",
            end: "BlockNumber",
            cap: "Balance",
            lastContribution: "LastContribution",
            firstPeriod: "LeasePeriod",
            lastPeriod: "LeasePeriod",
            trieIndex: "TrieIndex",
          },
          TrieIndex: "u32",
        },
      };
    },
    9645: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9646);
      const r = {
        CollationInfo: {
          upwardMessages: "Vec<UpwardMessage>",
          horizontalMessages: "Vec<OutboundHrmpMessage>",
          newValidationCode: "Option<ValidationCode>",
          processedDownwardMessages: "u32",
          hrmpWatermark: "RelayBlockNumber",
          headData: "HeadData",
        },
        CollationInfoV1: {
          upwardMessages: "Vec<UpwardMessage>",
          horizontalMessages: "Vec<OutboundHrmpMessage>",
          newValidationCode: "Option<ValidationCode>",
          processedDownwardMessages: "u32",
          hrmpWatermark: "RelayBlockNumber",
        },
        ConfigData: { maxIndividual: "Weight" },
        MessageId: "[u8; 32]",
        OverweightIndex: "u64",
        PageCounter: "u32",
        PageIndexData: {
          beginUsed: "PageCounter",
          endUsed: "PageCounter",
          overweightCount: "OverweightIndex",
        },
      };
      t.default = { rpc: {}, runtime: n.runtime, types: r };
    },
    9646: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AuraUnincludedSegmentApi: [
          {
            methods: {
              can_build_upon: {
                description: "Whether it is legal to extend the chain",
                params: [
                  { name: "includedHash", type: "BlockHash" },
                  { name: "slot", type: "Slot" },
                ],
                type: "bool",
              },
            },
            version: 1,
          },
        ],
        CollectCollationInfo: [
          {
            methods: {
              collect_collation_info: {
                description: "Collect information about a collation.",
                params: [{ name: "header", type: "Header" }],
                type: "CollationInfo",
              },
            },
            version: 2,
          },
          {
            methods: {
              collect_collation_info: {
                description: "Collect information about a collation.",
                params: [],
                type: "CollationInfoV1",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9647: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9648);
      t.default = { rpc: {}, runtime: n.runtime, types: {} };
    },
    9648: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
        methods: {
          best_finalized: {
            description:
              "Returns number and hash of the best finalized header known to the bridge module.",
            params: [],
            type: "(BlockNumber, Hash)",
          },
        },
        version: 1,
      };
      t.runtime = {
        KusamaFinalityApi: [n],
        PolkadotFinalityApi: [n],
        RococoFinalityApi: [n],
        WestendFinalityApi: [n],
      };
    },
    9649: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(a(9650)),
        o = a(9651),
        i = n(a(9652));
      const s = {
          ParachainProposal: {
            proposer: "AccountId",
            genesisHead: "HeadData",
            validators: "Vec<ValidatorId>",
            name: "Bytes",
            balance: "Balance",
          },
          RegisteredParachainInfo: {
            validators: "Vec<ValidatorId>",
            proposer: "AccountId",
          },
        },
        c = { ServiceQuality: { _enum: ["Ordered", "Fast"] } },
        u = {
          DisputeLocation: { _enum: ["Local", "Remote"] },
          DisputeResult: { _enum: ["Valid", "Invalid"] },
          DisputeState: {
            validatorsFor: "BitVec",
            validatorsAgainst: "BitVec",
            start: "BlockNumber",
            concludedAt: "Option<BlockNumber>",
          },
          DisputeStatement: {
            _enum: {
              Valid: "ValidDisputeStatementKind",
              Invalid: "InvalidDisputeStatementKind",
            },
          },
          DisputeStatementSet: {
            candidateHash: "CandidateHash",
            session: "SessionIndex",
            statements:
              "Vec<(DisputeStatement, ParaValidatorIndex, ValidatorSignature)>",
          },
          ExecutorParam: {
            _enum: {
              Phantom: "Null",
              MaxMemoryPages: "u32",
              StackLogicalMax: "u32",
              StackNativeMax: "u32",
              PrecheckingMaxMemory: "u64",
              PvfPrepTimeout: "(PvfPrepTimeoutKind, u64)",
              PvfExecTimeout: "(PvfExecTimeoutKind, u64)",
            },
          },
          ExecutorParamsHash: "Hash",
          ExecutorParams: "Vec<ExecutorParam>",
          ExplicitDisputeStatement: {
            valid: "bool",
            candidateHash: "CandidateHash",
            session: "SessionIndex",
          },
          InvalidDisputeStatementKind: { _enum: ["Explicit"] },
          MultiDisputeStatementSet: "Vec<DisputeStatementSet>",
          PvfExecTimeoutKind: { _enum: ["Backing", "Approval"] },
          PvfPrepTimeoutKind: { _enum: ["Precheck", "Lenient"] },
          ValidDisputeStatementKind: {
            _enum: {
              Explicit: "Null",
              BackingSeconded: "Hash",
              BackingValid: "Hash",
              ApprovalChecking: "Null",
            },
          },
        };
      t.default = {
        rpc: {},
        runtime: o.runtime,
        types: {
          ...c,
          ...u,
          ...r.default,
          ...s,
          ...i.default,
          AbridgedCandidateReceipt: {
            parachainIndex: "ParaId",
            relayParent: "Hash",
            headData: "HeadData",
            collator: "CollatorId",
            signature: "CollatorSignature",
            povBlockHash: "Hash",
            commitments: "CandidateCommitments",
          },
          AbridgedHostConfiguration: {
            maxCodeSize: "u32",
            maxHeadDataSize: "u32",
            maxUpwardQueueCount: "u32",
            maxUpwardQueueSize: "u32",
            maxUpwardMessageSize: "u32",
            maxUpwardMessageNumPerCandidate: "u32",
            hrmpMaxMessageNumPerCandidate: "u32",
            validationUpgradeFrequency: "BlockNumber",
            validationUpgradeDelay: "BlockNumber",
          },
          AbridgedHrmpChannel: {
            maxCapacity: "u32",
            maxTotalSize: "u32",
            maxMessageSize: "u32",
            msgCount: "u32",
            totalSize: "u32",
            mqcHead: "Option<Hash>",
          },
          ApprovalVotingParams: { maxApprovalCoalesceCount: "u32" },
          AssignmentId: "AccountId",
          AssignmentKind: {
            _enum: { Parachain: "Null", Parathread: "(CollatorId, u32)" },
          },
          AsyncBackingParams: {
            maxCandidateDepth: "u32",
            allowedAncestryLen: "u32",
          },
          AttestedCandidate: {
            candidate: "AbridgedCandidateReceipt",
            validityVotes: "Vec<ValidityAttestation>",
            validatorIndices: "BitVec",
          },
          AuthorityDiscoveryId: "AccountId",
          AvailabilityBitfield: "BitVec",
          AvailabilityBitfieldRecord: {
            bitfield: "AvailabilityBitfield",
            submittedTt: "BlockNumber",
          },
          BackedCandidate: {
            candidate: "CommittedCandidateReceipt",
            validityVotes: "Vec<ValidityAttestation>",
            validatorIndices: "BitVec",
          },
          BackingState: {
            constraints: "Constraints",
            pendingAvailability: "Vec<CandidatePendingAvailability>",
          },
          BufferedSessionChange: {
            applyAt: "BlockNumber",
            validators: "Vec<ValidatorId>",
            queued: "Vec<ValidatorId>",
            sessionIndex: "SessionIndex",
          },
          CandidateCommitments: {
            upwardMessages: "Vec<UpwardMessage>",
            horizontalMessages: "Vec<OutboundHrmpMessage>",
            newValidationCode: "Option<ValidationCode>",
            headData: "HeadData",
            processedDownwardMessages: "u32",
            hrmpWatermark: "BlockNumber",
          },
          CandidateDescriptor: {
            paraId: "ParaId",
            relayParent: "RelayChainHash",
            collatorId: "CollatorId",
            persistedValidationDataHash: "Hash",
            povHash: "Hash",
            erasureRoot: "Hash",
            signature: "CollatorSignature",
            paraHead: "Hash",
            validationCodeHash: "ValidationCodeHash",
          },
          CandidateEvent: {
            _enum: {
              CandidateBacked:
                "(CandidateReceipt, HeadData, CoreIndex, GroupIndex)",
              CandidateIncluded:
                "(CandidateReceipt, HeadData, CoreIndex, GroupIndex)",
              CandidateTimedOut: "(CandidateReceipt, HeadData, CoreIndex)",
            },
          },
          CandidateHash: "Hash",
          CandidateInfo: { who: "AccountId", deposit: "Balance" },
          CandidatePendingAvailability: {
            core: "CoreIndex",
            hash: "CandidateHash",
            descriptor: "CandidateDescriptor",
            availabilityVotes: "BitVec",
            backers: "BitVec",
            relayParentNumber: "BlockNumber",
            backedInNumber: "BlockNumber",
            backingGroup: "GroupIndex",
          },
          CandidateReceipt: {
            descriptor: "CandidateDescriptor",
            commitmentsHash: "Hash",
          },
          GlobalValidationData: {
            maxCodeSize: "u32",
            maxHeadDataSize: "u32",
            blockNumber: "BlockNumber",
          },
          CollatorId: "H256",
          CollatorSignature: "Signature",
          CommittedCandidateReceipt: {
            descriptor: "CandidateDescriptor",
            commitments: "CandidateCommitments",
          },
          Constraints: {
            minRelayParentNumber: "BlockNumber",
            maxPovSize: "u32",
            maxCodeSize: "u32",
            umpRemaining: "u32",
            umpRemainingBytes: "u32",
            maxUmpNumPerCandidate: "u32",
            dmpRemainingMessages: "Vec<BlockNumber>",
            hrmpInbound: "InboundHrmpLimitations",
            hrmpChannelsOut: "HashMap<ParaId, OutboundHrmpChannelLimitations>",
            maxHrmpNumPerCandidate: "u32",
            requiredParent: "HeadData",
            validationCodeHash: "ValidationCodeHash",
            upgradeRestriction: "Option<UpgradeRestriction>",
            futureValidationCode: "Option<(BlockNumber, ValidationCodeHash)>",
          },
          CoreAssignment: {
            core: "CoreIndex",
            paraId: "ParaId",
            kind: "AssignmentKind",
            groupIdx: "GroupIndex",
          },
          CoreIndex: "u32",
          CoreOccupied: {
            _enum: { Parathread: "ParathreadEntry", Parachain: "Null" },
          },
          CoreState: {
            _enum: {
              Occupied: "OccupiedCore",
              Scheduled: "ScheduledCore",
              Free: "Null",
            },
          },
          DisputeProof: {
            timeSlot: "DisputesTimeSlot",
            kind: "SlashingOffenceKind",
            validatorIndex: "ValidatorIndex",
            validatorId: "ValidatorId",
          },
          DisputesTimeSlot: {
            sessionIndex: "SessionIndex",
            candidateHash: "CandidateHash",
          },
          DoubleVoteReport: {
            identity: "ValidatorId",
            first: "(Statement, ValidatorSignature)",
            second: "(Statement, ValidatorSignature)",
            proof: "MembershipProof",
            signingContext: "SigningContext",
          },
          DownwardMessage: "Bytes",
          GroupIndex: "u32",
          GroupRotationInfo: {
            sessionStartBlock: "BlockNumber",
            groupRotationFrequency: "BlockNumber",
            now: "BlockNumber",
          },
          GlobalValidationSchedule: {
            maxCodeSize: "u32",
            maxHeadDataSize: "u32",
            blockNumber: "BlockNumber",
          },
          HeadData: "Bytes",
          HostConfiguration: {
            maxCodeSize: "u32",
            maxHeadDataSize: "u32",
            maxUpwardQueueCount: "u32",
            maxUpwardQueueSize: "u32",
            maxUpwardMessageSize: "u32",
            maxUpwardMessageNumPerCandidate: "u32",
            hrmpMaxMessageNumPerCandidate: "u32",
            validationUpgradeFrequency: "BlockNumber",
            validationUpgradeDelay: "BlockNumber",
            maxPovSize: "u32",
            maxDownwardMessageSize: "u32",
            preferredDispatchableUpwardMessagesStepWeight: "Weight",
            hrmpMaxParachainOutboundChannels: "u32",
            hrmpMaxParathreadOutboundChannels: "u32",
            hrmpOpenRequestTtl: "u32",
            hrmpSenderDeposit: "Balance",
            hrmpRecipientDeposit: "Balance",
            hrmpChannelMaxCapacity: "u32",
            hrmpChannelMaxTotalSize: "u32",
            hrmpMaxParachainInboundChannels: "u32",
            hrmpMaxParathreadInboundChannels: "u32",
            hrmpChannelMaxMessageSize: "u32",
            codeRetentionPeriod: "BlockNumber",
            parathreadCores: "u32",
            parathreadRetries: "u32",
            groupRotationFrequency: "BlockNumber",
            chainAvailabilityPeriod: "BlockNumber",
            threadAvailabilityPeriod: "BlockNumber",
            schedulingLookahead: "u32",
            maxValidatorsPerCore: "Option<u32>",
            maxValidators: "Option<u32>",
            disputePeriod: "SessionIndex",
            disputePostConclusionAcceptancePeriod: "BlockNumber",
            disputeMaxSpamSlots: "u32",
            disputeConclusionByTimeOutPeriod: "BlockNumber",
            noShowSlots: "u32",
            nDelayTranches: "u32",
            zerothDelayTrancheWidth: "u32",
            neededApprovals: "u32",
            relayVrfModuloSamples: "u32",
          },
          InboundDownwardMessage: {
            pubSentAt: "BlockNumber",
            pubMsg: "DownwardMessage",
          },
          InboundHrmpMessage: { sentAt: "BlockNumber", data: "Bytes" },
          InboundHrmpLimitations: { validWatermarks: "Vec<BlockNumber>" },
          InboundHrmpMessages: "Vec<InboundHrmpMessage>",
          LocalValidationData: {
            parentHead: "HeadData",
            balance: "Balance",
            codeUpgradeAllowed: "Option<BlockNumber>",
          },
          MessageIngestionType: {
            downwardMessages: "Vec<InboundDownwardMessage>",
            horizontalMessages: "BTreeMap<ParaId, InboundHrmpMessages>",
          },
          MessageQueueChain: "RelayChainHash",
          NodeFeatures: "BitVec",
          OccupiedCore: {
            nextUpOnAvailable: "Option<ScheduledCore>",
            occupiedSince: "BlockNumber",
            timeOutAt: "BlockNumber",
            nextUpOnTimeOut: "Option<ScheduledCore>",
            availability: "BitVec",
            groupResponsible: "GroupIndex",
            candidateHash: "CandidateHash",
            candidateDescriptor: "CandidateDescriptor",
          },
          OccupiedCoreAssumption: { _enum: ["Included,", "TimedOut", "Free"] },
          OutboundHrmpChannelLimitations: {
            bytesRemaining: "u32",
            messagesRemaining: "u32",
          },
          OutboundHrmpMessage: { recipient: "u32", data: "Bytes" },
          PendingSlashes: {
            _alias: { slashKeys: "keys" },
            slashKeys: "BTreeMap<ValidatorIndex, ValidatorId>",
            kind: "SlashingOffenceKind",
          },
          ParachainDispatchOrigin: { _enum: ["Signed", "Parachain", "Root"] },
          ParachainInherentData: {
            validationData: "PersistedValidationData",
            relayChainState: "StorageProof",
            downwardMessages: "Vec<InboundDownwardMessage>",
            horizontalMessages: "BTreeMap<ParaId, VecInboundHrmpMessage>",
          },
          ParachainsInherentData: {
            bitfields: "SignedAvailabilityBitfields",
            backedCandidates: "Vec<BackedCandidate>",
            disputes: "MultiDisputeStatementSet",
            parentHeader: "Header",
          },
          ParaGenesisArgs: {
            genesisHead: "Bytes",
            validationCode: "Bytes",
            parachain: "bool",
          },
          ParaId: "u32",
          ParaInfo: {
            manager: "AccountId",
            deposit: "Balance",
            locked: "bool",
          },
          ParaLifecycle: {
            _enum: [
              "Onboarding",
              "Parathread",
              "Parachain",
              "UpgradingToParachain",
              "DowngradingToParathread",
              "OutgoingParathread",
              "OutgoingParachain",
            ],
          },
          ParaPastCodeMeta: {
            upgradeTimes: "Vec<ReplacementTimes>",
            lastPruned: "Option<BlockNumber>",
          },
          ParaScheduling: { _enum: ["Always", "Dynamic"] },
          ParathreadClaim: "(ParaId, CollatorId)",
          ParathreadClaimQueue: {
            queue: "Vec<QueuedParathread>",
            nextCoreOffset: "u32",
          },
          ParathreadEntry: { claim: "ParathreadClaim", retries: "u32" },
          ParaValidatorIndex: "u32",
          PersistedValidationData: {
            parentHead: "HeadData",
            relayParentNumber: "RelayChainBlockNumber",
            relayParentStorageRoot: "Hash",
            maxPovSize: "u32",
          },
          PvfCheckStatement: {
            accept: "bool",
            subject: "ValidationCodeHash",
            sessionIndex: "SessionIndex",
            validatorIndex: "ParaValidatorIndex",
          },
          QueuedParathread: { claim: "ParathreadEntry", coreOffset: "u32" },
          RelayBlockNumber: "u32",
          RelayChainBlockNumber: "RelayBlockNumber",
          RelayHash: "Hash",
          RelayChainHash: "RelayHash",
          Remark: "[u8; 32]",
          ReplacementTimes: {
            expectedAt: "BlockNumber",
            activatedAt: "BlockNumber",
          },
          Retriable: { _enum: { Never: "Null", WithRetries: "u32" } },
          ScheduledCore: { paraId: "ParaId", collator: "Option<CollatorId>" },
          Scheduling: { _enum: ["Always", "Dynamic"] },
          ScrapedOnChainVotes: {
            session: "SessionIndex",
            backingValidatorsPerCandidate:
              "Vec<(CandidateReceipt, Vec<(ParaValidatorIndex, ValidityAttestation)>)>",
            disputes: "MultiDisputeStatementSet",
          },
          SessionInfo: {
            activeValidatorIndices: "Vec<ParaValidatorIndex>",
            randomSeed: "[u8; 32]",
            disputePeriod: "SessionIndex",
            validators: "Vec<ValidatorId>",
            discoveryKeys: "Vec<AuthorityDiscoveryId>",
            assignmentKeys: "Vec<AssignmentId>",
            validatorGroups: "Vec<Vec<ValidatorIndex>>",
            nCores: "u32",
            zerothDelayTrancheWidth: "u32",
            relayVrfModuloSamples: "u32",
            nDelayTranches: "u32",
            noShowSlots: "u32",
            neededApprovals: "u32",
          },
          OldV1SessionInfo: {
            validators: "Vec<ValidatorId>",
            discoveryKeys: "Vec<AuthorityDiscoveryId>",
            assignmentKeys: "Vec<AssignmentId>",
            validatorGroups: "Vec<Vec<ParaValidatorIndex>>",
            nCores: "u32",
            zerothDelayTrancheWidth: "u32",
            relayVrfModuloSamples: "u32",
            nDelayTranches: "u32",
            noShowSlots: "u32",
            neededApprovals: "u32",
          },
          SessionInfoValidatorGroup: "Vec<ParaValidatorIndex>",
          SignedAvailabilityBitfield: {
            payload: "BitVec",
            validatorIndex: "ParaValidatorIndex",
            signature: "ValidatorSignature",
          },
          SignedAvailabilityBitfields: "Vec<SignedAvailabilityBitfield>",
          SigningContext: { sessionIndex: "SessionIndex", parentHash: "Hash" },
          SlashingOffenceKind: { _enum: ["ForInvalid", "AgainstValid"] },
          Statement: {
            _enum: {
              Never: "Null",
              Candidate: "Hash",
              Valid: "Hash",
              Invalid: "Hash",
            },
          },
          TransientValidationData: {
            maxCodeSize: "u32",
            maxHeadDataSize: "u32",
            balance: "Balance",
            codeUpgradeAllowed: "Option<BlockNumber>",
            dmqLength: "u32",
          },
          UpgradeGoAhead: { _enum: ["Abort", "GoAhead"] },
          UpgradeRestriction: { _enum: ["Present"] },
          UpwardMessage: "Bytes",
          ValidationFunctionParams: {
            maxCodeSize: "u32",
            relayChainHeight: "RelayChainBlockNumber",
            codeUpgradeAllowed: "Option<RelayChainBlockNumber>",
          },
          ValidationCode: "Bytes",
          ValidationCodeHash: "Hash",
          ValidationData: {
            persisted: "PersistedValidationData",
            transient: "TransientValidationData",
          },
          ValidationDataType: {
            validationData: "ValidationData",
            relayChainState: "Vec<Bytes>",
          },
          ValidatorSignature: "Signature",
          ValidityAttestation: {
            _enum: {
              Never: "Null",
              Implicit: "ValidatorSignature",
              Explicit: "ValidatorSignature",
            },
          },
          MessagingStateSnapshot: {
            relayDispatchQueueSize: "(u32, u32)",
            egressChannels: "Vec<MessagingStateSnapshotEgressEntry>",
          },
          MessagingStateSnapshotEgressEntry: "(ParaId, AbridgedHrmpChannel)",
          SystemInherentData: "ParachainInherentData",
          VecInboundHrmpMessage: "Vec<InboundHrmpMessage>",
        },
      };
    },
    9650: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        HrmpChannel: {
          maxCapacity: "u32",
          maxTotalSize: "u32",
          maxMessageSize: "u32",
          msgCount: "u32",
          totalSize: "u32",
          mqcHead: "Option<Hash>",
          senderDeposit: "Balance",
          recipientDeposit: "Balance",
        },
        HrmpChannelId: { sender: "u32", receiver: "u32" },
        HrmpOpenChannelRequest: {
          confirmed: "bool",
          age: "SessionIndex",
          senderDeposit: "Balance",
          maxMessageSize: "u32",
          maxCapacity: "u32",
          maxTotalSize: "u32",
        },
      };
    },
    9651: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          assumed_validation_data: {
            description:
              "Returns the persisted validation data for the given `ParaId` along with the corresponding validation code hash.",
            params: [
              { name: "paraId", type: "ParaId" },
              { name: "hash", type: "Hash" },
            ],
            type: "Option<(PersistedValidationData, ValidationCodeHash)>",
          },
          availability_cores: {
            description:
              "Yields information on all availability cores as relevant to the child block.",
            params: [],
            type: "Vec<CoreState>",
          },
          candidate_events: {
            description:
              "Get a vector of events concerning candidates that occurred within a block.",
            params: [],
            type: "Vec<CandidateEvent>",
          },
          candidate_pending_availability: {
            description: "Get the receipt of a candidate pending availability.",
            params: [{ name: "paraId", type: "ParaId" }],
            type: "Option<CommittedCandidateReceipt>",
          },
          check_validation_outputs: {
            description:
              "Checks if the given validation outputs pass the acceptance criteria.",
            params: [
              { name: "paraId", type: "ParaId" },
              { name: "outputs", type: "CandidateCommitments" },
            ],
            type: "bool",
          },
          dmq_contents: {
            description:
              "Get all the pending inbound messages in the downward message queue for a para.",
            params: [{ name: "paraId", type: "ParaId" }],
            type: "Vec<InboundDownwardMessage>",
          },
          inbound_hrmp_channels_contents: {
            description:
              "Get the contents of all channels addressed to the given recipient.",
            params: [{ name: "paraId", type: "ParaId" }],
            type: "Vec<InboundHrmpMessage>",
          },
          on_chain_votes: {
            description:
              "Scrape dispute relevant from on-chain, backing votes and resolved disputes.",
            params: [],
            type: "Option<ScrapedOnChainVotes>",
          },
          persisted_validation_data: {
            description:
              "Yields the persisted validation data for the given `ParaId` along with an assumption that should be used if the para currently occupies a core.",
            params: [
              { name: "paraId", type: "ParaId" },
              { name: "assumption", type: "OccupiedCoreAssumption" },
            ],
            type: "Option<PersistedValidationData>",
          },
          session_index_for_child: {
            description:
              "Returns the session index expected at a child of the block.",
            params: [],
            type: "SessionIndex",
          },
          validation_code: {
            description:
              "Fetch the validation code used by a para, making the given `OccupiedCoreAssumption`.",
            params: [
              { name: "paraId", type: "ParaId" },
              { name: "assumption", type: "OccupiedCoreAssumption" },
            ],
            type: "Option<ValidationCode>",
          },
          validation_code_by_hash: {
            description: "Get the validation code from its hash.",
            params: [{ name: "hash", type: "ValidationCodeHash" }],
            type: "Option<ValidationCode>",
          },
          validator_groups: {
            description:
              "Returns the validator groups and rotation info localized based on the hypothetical child of a block whose state  this is invoked on",
            params: [],
            type: "(Vec<Vec<ParaValidatorIndex>>, GroupRotationInfo)",
          },
          validators: {
            description: "Get the current validators.",
            params: [],
            type: "Vec<ValidatorId>",
          },
        },
        r = {
          pvfs_require_precheck: {
            description:
              "Returns code hashes of PVFs that require pre-checking by validators in the active set.",
            params: [],
            type: "Vec<ValidationCodeHash>",
          },
          session_info: {
            description:
              "Get the session info for the given session, if stored.",
            params: [{ name: "index", type: "SessionIndex" }],
            type: "Option<SessionInfo>",
          },
          submit_pvf_check_statement: {
            description:
              "Submits a PVF pre-checking statement into the transaction pool.",
            params: [
              { name: "stmt", type: "PvfCheckStatement" },
              { name: "signature", type: "ValidatorSignature" },
            ],
            type: "Null",
          },
          validation_code_hash: {
            description:
              "Fetch the hash of the validation code used by a para, making the given `OccupiedCoreAssumption`.",
            params: [
              { name: "paraId", type: "ParaId" },
              { name: "assumption", type: "OccupiedCoreAssumption" },
            ],
            type: "Option<ValidationCodeHash>",
          },
        },
        o = {
          disputes: {
            description: "Returns all onchain disputes.",
            params: [],
            type: "Vec<(SessionIndex, CandidateHash, DisputeState)>",
          },
        },
        i = {
          session_executor_params: {
            description: "Returns execution parameters for the session.",
            params: [{ name: "sessionIndex", type: "SessionIndex" }],
            type: "Option<ExecutorParams>",
          },
        },
        s = {
          key_ownership_proof: {
            description: "Returns a merkle proof of a validator session key",
            params: [{ name: "validatorId", type: "ValidatorId" }],
            type: "Option<OpaqueKeyOwnershipProof>",
          },
          submit_report_dispute_lost: {
            description:
              "Submit an unsigned extrinsic to slash validators who lost a dispute about a candidate of a past session",
            params: [
              { name: "disputeProof", type: "DisputeProof" },
              { name: "keyOwnershipProof", type: "OpaqueKeyOwnershipProof" },
            ],
            type: "Option<Null>",
          },
          unapplied_slashes: {
            description:
              "Returns a list of validators that lost a past session dispute and need to be slashed",
            params: [],
            type: "Vec<(SessionIndex, CandidateHash, PendingSlashes)>",
          },
        },
        c = {
          minimum_backing_votes: {
            description:
              "Get the minimum number of backing votes for a parachain candidate. This is a staging method! Do not use on production runtimes!",
            params: [],
            type: "u32",
          },
        },
        u = {
          async_backing_params: {
            description:
              "Returns candidate's acceptance limitations for asynchronous backing for a relay parent",
            params: [],
            type: "AsyncBackingParams",
          },
          para_backing_state: {
            description:
              "Returns the state of parachain backing for a given para",
            params: [{ name: "paraId", type: "ParaId" }],
            type: "Option<BackingState>",
          },
        },
        l = {
          disabled_validators: {
            description:
              "Returns a list of all disabled validators at the given block",
            params: [],
            type: "ValidatorIndex",
          },
        },
        d = {
          node_features: {
            description:
              "Get node features. This is a staging method! Do not use on production runtimes!",
            params: [],
            type: "NodeFeatures",
          },
        },
        p = {
          approval_voting_params: {
            description: "Approval voting configuration parameters",
            params: [],
            type: "ApprovalVotingParams",
          },
        },
        m = {
          claim_queue: {
            description: "Claim queue",
            params: [],
            type: "BTreeMap<CoreIndex, Vec<u32>>",
          },
        };
      t.runtime = {
        ParachainHost: [
          {
            methods: {
              ...n,
              ...r,
              ...o,
              ...i,
              ...s,
              ...c,
              ...u,
              ...l,
              ...d,
              ...p,
              ...m,
            },
            version: 11,
          },
          {
            methods: {
              ...n,
              ...r,
              ...o,
              ...i,
              ...s,
              ...c,
              ...u,
              ...l,
              ...d,
              ...p,
            },
            version: 10,
          },
          {
            methods: { ...n, ...r, ...o, ...i, ...s, ...c, ...u, ...l, ...d },
            version: 9,
          },
          {
            methods: { ...n, ...r, ...o, ...i, ...s, ...c, ...u, ...l },
            version: 8,
          },
          { methods: { ...n, ...r, ...o, ...i, ...s, ...c, ...u }, version: 7 },
          { methods: { ...n, ...r, ...o, ...i, ...s, ...c }, version: 6 },
          { methods: { ...n, ...r, ...o, ...i, ...s }, version: 5 },
          { methods: { ...n, ...r, ...o, ...i }, version: 4 },
          { methods: { ...n, ...r, ...o }, version: 3 },
          { methods: { ...n, ...r }, version: 2 },
          {
            methods: {
              session_info: {
                description:
                  "Get the session info for the given session, if stored.",
                params: [{ name: "index", type: "SessionIndex" }],
                type: "Option<OldV1SessionInfo>",
              },
              ...n,
            },
            version: 1,
          },
        ],
      };
    },
    9652: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = {
          _enum: [
            "ZeroZero",
            "ZeroOne",
            "ZeroTwo",
            "ZeroThree",
            "OneOne",
            "OneTwo",
            "OneThree",
            "TwoTwo",
            "TwoThree",
            "ThreeThree",
          ],
        },
        r = {
          _enum: [
            "ZeroZero",
            "ZeroOne",
            "ZeroTwo",
            "ZeroThree",
            "ZeroFour",
            "ZeroFive",
            "ZeroSix",
            "ZeroSeven",
            "OneOne",
            "OneTwo",
            "OneThree",
            "OneFour",
            "OneFive",
            "OneSix",
            "OneSeven",
            "TwoTwo",
            "TwoThree",
            "TwoFour",
            "TwoFive",
            "TwoSix",
            "TwoSeven",
            "ThreeThree",
            "ThreeFour",
            "ThreeFive",
            "ThreeSix",
            "ThreeSeven",
            "FourFour",
            "FourFive",
            "FourSix",
            "FourSeven",
            "FiveFive",
            "FiveSix",
            "FiveSeven",
            "SixSix",
            "SixSeven",
            "SevenSeven",
          ],
        },
        o = {
          Bidder: { _enum: { New: "NewBidder", Existing: "ParaId" } },
          IncomingParachain: {
            _enum: {
              Unset: "NewBidder",
              Fixed: "IncomingParachainFixed",
              Deploy: "IncomingParachainDeploy",
            },
          },
          IncomingParachainDeploy: {
            code: "ValidationCode",
            initialHeadData: "HeadData",
          },
          IncomingParachainFixed: {
            codeHash: "Hash",
            codeSize: "u32",
            initialHeadData: "HeadData",
          },
          NewBidder: { who: "AccountId", sub: "SubId" },
          SubId: "u32",
        };
      t.default = {
        ...o,
        AuctionIndex: "u32",
        LeasePeriod: "BlockNumber",
        LeasePeriodOf: "BlockNumber",
        SlotRange10: n,
        SlotRange: r,
        WinningData10: `[WinningDataEntry; ${n._enum.length}]`,
        WinningData: `[WinningDataEntry; ${r._enum.length}]`,
        WinningDataEntry: "Option<(AccountId, ParaId, BalanceOf)>",
        WinnersData10: "Vec<WinnersDataTuple10>",
        WinnersData: "Vec<WinnersDataTuple>",
        WinnersDataTuple10: "(AccountId, ParaId, BalanceOf, SlotRange10)",
        WinnersDataTuple: "(AccountId, ParaId, BalanceOf, SlotRange)",
      };
    },
    9653: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = { rpc: {}, types: { Approvals: "[bool; 4]" } };
    },
    9654: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        rpc: {},
        types: {
          AccountStatus: {
            validity: "AccountValidity",
            freeBalance: "Balance",
            lockedBalance: "Balance",
            signature: "Vec<u8>",
            vat: "Permill",
          },
          AccountValidity: {
            _enum: [
              "Invalid",
              "Initiated",
              "Pending",
              "ValidLow",
              "ValidHigh",
              "Completed",
            ],
          },
        },
      };
    },
    9655: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(3123),
        r = a(9656),
        o = a(9657),
        i = a(9658);
      const s = "V2",
        c = {
          XcmOrigin: { _enum: { Xcm: "MultiLocation" } },
          XcmpMessageFormat: {
            _enum: [
              "ConcatenatedVersionedXcm",
              "ConcatenatedEncodedBlob",
              "Signals",
            ],
          },
          XcmAssetId: {
            _enum: { Concrete: "MultiLocation", Abstract: "Bytes" },
          },
          InboundStatus: { _enum: ["Ok", "Suspended"] },
          OutboundStatus: { _enum: ["Ok", "Suspended"] },
          MultiAssets: "Vec<MultiAsset>",
        },
        u = {
          BodyId: {
            _enum: {
              Unit: "Null",
              Named: "Vec<u8>",
              Index: "Compact<u32>",
              Executive: "Null",
              Technical: "Null",
              Legislative: "Null",
              Judicial: "Null",
            },
          },
          BodyPart: {
            _enum: {
              Voice: "Null",
              Members: "Compact<u32>",
              Fraction: { nom: "Compact<u32>", denom: "Compact<u32>" },
              AtLeastProportion: { nom: "Compact<u32>", denom: "Compact<u32>" },
              MoreThanProportion: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
              },
            },
          },
          InteriorMultiLocation: "Junctions",
          NetworkId: {
            _enum: {
              Any: "Null",
              Named: "Vec<u8>",
              Polkadot: "Null",
              Kusama: "Null",
            },
          },
        };
      t.default = {
        rpc: {},
        types: {
          ...u,
          ...c,
          ...r.v0,
          ...o.v1,
          ...i.v2,
          ...(0, n.mapXcmTypes)(s),
          DoubleEncodedCall: { encoded: "Vec<u8>" },
          XcmOriginKind: {
            _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"],
          },
          Outcome: {
            _enum: {
              Complete: "Weight",
              Incomplete: "(Weight, XcmErrorV0)",
              Error: "XcmErrorV0",
            },
          },
          QueryId: "u64",
          QueryStatus: {
            _enum: {
              Pending: {
                responder: "VersionedMultiLocation",
                maybeNotify: "Option<(u8, u8)>",
                timeout: "BlockNumber",
              },
              Ready: { response: "VersionedResponse", at: "BlockNumber" },
            },
          },
          QueueConfigData: {
            suspendThreshold: "u32",
            dropThreshold: "u32",
            resumeThreshold: "u32",
            thresholdWeight: "Weight",
            weightRestrictDecay: "Weight",
          },
          VersionMigrationStage: {
            _enum: {
              MigrateSupportedVersion: "Null",
              MigrateVersionNotifiers: "Null",
              NotifyCurrentTargets: "Option<Bytes>",
              MigrateAndNotifyOldTargets: "Null",
            },
          },
          VersionedMultiAsset: {
            _enum: {
              V0: "MultiAssetV0",
              V1: "MultiAssetV1",
              V2: "MultiAssetV2",
            },
          },
          VersionedMultiAssets: {
            _enum: {
              V0: "Vec<MultiAssetV0>",
              V1: "MultiAssetsV1",
              V2: "MultiAssetsV2",
            },
          },
          VersionedMultiLocation: {
            _enum: {
              V0: "MultiLocationV0",
              V1: "MultiLocationV1",
              V2: "MultiLocationV2",
            },
          },
          VersionedResponse: {
            V0: "ResponseV0",
            V1: "ResponseV1",
            V2: "ResponseV2",
          },
          VersionedXcm: { _enum: { V0: "XcmV0", V1: "XcmV1", V2: "XcmV2" } },
          XcmVersion: "u32",
        },
      };
    },
    9656: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v0 = void 0));
      t.v0 = {
        FungibilityV0: "FungibilityV1",
        WildFungibilityV0: "WildFungibilityV1",
        AssetInstanceV0: {
          _enum: {
            Undefined: "Null",
            Index8: "u8",
            Index16: "Compact<u16>",
            Index32: "Compact<u32>",
            Index64: "Compact<u64>",
            Index128: "Compact<u128>",
            Array4: "[u8; 4]",
            Array8: "[u8; 8]",
            Array16: "[u8; 16]",
            Array32: "[u8; 32]",
            Blob: "Vec<u8>",
          },
        },
        JunctionV0: {
          _enum: {
            Parent: "Null",
            Parachain: "Compact<u32>",
            AccountId32: { network: "NetworkId", id: "AccountId" },
            AccountIndex64: { network: "NetworkId", index: "Compact<u64>" },
            AccountKey20: { network: "NetworkId", key: "[u8; 20]" },
            PalletInstance: "u8",
            GeneralIndex: "Compact<u128>",
            GeneralKey: "Vec<u8>",
            OnlyChild: "Null",
            Plurality: { id: "BodyId", part: "BodyPart" },
          },
        },
        MultiAssetV0: {
          _enum: {
            None: "Null",
            All: "Null",
            AllFungible: "Null",
            AllNonFungible: "Null",
            AllAbstractFungible: "Vec<u8>",
            AllAbstractNonFungible: "Vec<u8>",
            AllConcreteFungible: "MultiLocationV0",
            AllConcreteNonFungible: "MultiLocationV0",
            AbstractFungible: { id: "Vec<u8>", instance: "Compact<u128>" },
            AbstractNonFungible: {
              class: "Vec<u8>",
              instance: "AssetInstanceV0",
            },
            ConcreteFungible: {
              id: "MultiLocationV0",
              amount: "Compact<u128>",
            },
            ConcreteNonFungible: {
              class: "MultiLocationV0",
              instance: "AssetInstanceV0",
            },
          },
        },
        MultiLocationV0: {
          _enum: {
            Here: "Null",
            X1: "JunctionV0",
            X2: "(JunctionV0, JunctionV0)",
            X3: "(JunctionV0, JunctionV0, JunctionV0)",
            X4: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
            X5: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
            X6: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
            X7: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
            X8: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
          },
        },
        OriginKindV0: {
          _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"],
        },
        ResponseV0: { _enum: { Assets: "Vec<MultiAssetV0>" } },
        XcmV0: {
          _enum: {
            WithdrawAsset: {
              assets: "Vec<MultiAssetV0>",
              effects: "Vec<XcmOrderV0>",
            },
            ReserveAssetDeposit: {
              assets: "Vec<MultiAssetV0>",
              effects: "Vec<XcmOrderV0>",
            },
            ReceiveTeleportedAsset: {
              assets: "Vec<MultiAssetV0>",
              effects: "Vec<XcmOrderV0>",
            },
            QueryResponse: { queryId: "Compact<u64>", response: "ResponseV0" },
            TransferAsset: {
              assets: "Vec<MultiAssetV0>",
              dest: "MultiLocationV0",
            },
            TransferReserveAsset: {
              assets: "Vec<MultiAssetV0>",
              dest: "MultiLocationV0",
              effects: "Vec<XcmOrderV0>",
            },
            Transact: {
              originType: "XcmOriginKind",
              requireWeightAtMost: "u64",
              call: "DoubleEncodedCall",
            },
            HrmpNewChannelOpenRequest: {
              sender: "Compact<u32>",
              maxMessageSize: "Compact<u32>",
              maxCapacity: "Compact<u32>",
            },
            HrmpChannelAccepted: { recipient: "Compact<u32>" },
            HrmpChannelClosing: {
              initiator: "Compact<u32>",
              sender: "Compact<u32>",
              recipient: "Compact<u32>",
            },
            RelayedFrom: { who: "MultiLocationV0", message: "XcmV0" },
          },
        },
        XcmErrorV0: {
          _enum: {
            Undefined: "Null",
            Overflow: "Null",
            Unimplemented: "Null",
            UnhandledXcmVersion: "Null",
            UnhandledXcmMessage: "Null",
            UnhandledEffect: "Null",
            EscalationOfPrivilege: "Null",
            UntrustedReserveLocation: "Null",
            UntrustedTeleportLocation: "Null",
            DestinationBufferOverflow: "Null",
            SendFailed: "Null",
            CannotReachDestination: "(MultiLocation, Xcm)",
            MultiLocationFull: "Null",
            FailedToDecode: "Null",
            BadOrigin: "Null",
            ExceedsMaxMessageSize: "Null",
            FailedToTransactAsset: "Null",
            WeightLimitReached: "Weight",
            Wildcard: "Null",
            TooMuchWeightRequired: "Null",
            NotHoldingFees: "Null",
            WeightNotComputable: "Null",
            Barrier: "Null",
            NotWithdrawable: "Null",
            LocationCannotHold: "Null",
            TooExpensive: "Null",
            AssetNotFound: "Null",
            RecursionLimitReached: "Null",
          },
        },
        XcmOrderV0: {
          _enum: {
            Null: "Null",
            DepositAsset: {
              assets: "Vec<MultiAssetV0>",
              dest: "MultiLocationV0",
            },
            DepositReserveAsset: {
              assets: "Vec<MultiAssetV0>",
              dest: "MultiLocationV0",
              effects: "Vec<XcmOrderV0>",
            },
            ExchangeAsset: {
              give: "Vec<MultiAssetV0>",
              receive: "Vec<MultiAssetV0>",
            },
            InitiateReserveWithdraw: {
              assets: "Vec<MultiAssetV0>",
              reserve: "MultiLocationV0",
              effects: "Vec<XcmOrderV0>",
            },
            InitiateTeleport: {
              assets: "Vec<MultiAssetV0>",
              dest: "MultiLocationV0",
              effects: "Vec<XcmOrderV0>",
            },
            QueryHolding: {
              queryId: "Compact<u64>",
              dest: "MultiLocationV0",
              assets: "Vec<MultiAssetV0>",
            },
            BuyExecution: {
              fees: "MultiAssetV0",
              weight: "u64",
              debt: "u64",
              haltOnError: "bool",
              xcm: "Vec<XcmV0>",
            },
          },
        },
      };
    },
    9657: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v1 = void 0));
      t.v1 = {
        AssetInstanceV1: {
          _enum: {
            Undefined: "Null",
            Index: "Compact<u128>",
            Array4: "[u8; 4]",
            Array8: "[u8; 8]",
            Array16: "[u8; 16]",
            Array32: "[u8; 32]",
            Blob: "Bytes",
          },
        },
        FungibilityV1: {
          _enum: { Fungible: "Compact<u128>", NonFungible: "AssetInstanceV1" },
        },
        JunctionV1: {
          _enum: {
            Parachain: "Compact<u32>",
            AccountId32: { network: "NetworkId", id: "AccountId" },
            AccountIndex64: { network: "NetworkId", index: "Compact<u64>" },
            AccountKey20: { network: "NetworkId", key: "[u8; 20]" },
            PalletInstance: "u8",
            GeneralIndex: "Compact<u128>",
            GeneralKey: "Vec<u8>",
            OnlyChild: "Null",
            Plurality: { id: "BodyId", part: "BodyPart" },
          },
        },
        JunctionsV1: {
          _enum: {
            Here: "Null",
            X1: "JunctionV1",
            X2: "(JunctionV1, JunctionV1)",
            X3: "(JunctionV1, JunctionV1, JunctionV1)",
            X4: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
            X5: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
            X6: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
            X7: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
            X8: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
          },
        },
        MultiAssetsV1: "Vec<MultiAssetV1>",
        MultiAssetV1: { id: "XcmAssetId", fungibility: "FungibilityV1" },
        MultiAssetFilterV1: {
          _enum: { Definite: "MultiAssetsV1", Wild: "WildMultiAssetV1" },
        },
        MultiLocationV1: { parents: "u8", interior: "JunctionsV1" },
        OriginKindV1: "OriginKindV0",
        ResponseV1: { _enum: { Assets: "MultiAssetsV1" } },
        WildFungibilityV1: { _enum: ["Fungible", "NonFungible"] },
        WildMultiAssetV1: {
          _enum: {
            All: "Null",
            AllOf: { id: "XcmAssetId", fungibility: "WildFungibilityV1" },
          },
        },
        XcmV1: {
          _enum: {
            WithdrawAsset: {
              assets: "MultiAssetsV1",
              effects: "Vec<XcmOrderV1>",
            },
            ReserveAssetDeposit: {
              assets: "MultiAssetsV1",
              effects: "Vec<XcmOrderV1>",
            },
            ReceiveTeleportedAsset: {
              assets: "MultiAssetsV1",
              effects: "Vec<XcmOrderV1>",
            },
            QueryResponse: { queryId: "Compact<u64>", response: "ResponseV1" },
            TransferAsset: { assets: "MultiAssetsV1", dest: "MultiLocationV1" },
            TransferReserveAsset: {
              assets: "MultiAssetsV1",
              dest: "MultiLocationV1",
              effects: "Vec<XcmOrderV1>",
            },
            Transact: {
              originType: "XcmOriginKind",
              requireWeightAtMost: "u64",
              call: "DoubleEncodedCall",
            },
            HrmpNewChannelOpenRequest: {
              sender: "Compact<u32>",
              maxMessageSize: "Compact<u32>",
              maxCapacity: "Compact<u32>",
            },
            HrmpChannelAccepted: { recipient: "Compact<u32>" },
            HrmpChannelClosing: {
              initiator: "Compact<u32>",
              sender: "Compact<u32>",
              recipient: "Compact<u32>",
            },
            RelayedFrom: { who: "MultiLocationV1", message: "XcmV1" },
          },
        },
        XcmErrorV1: {
          _enum: {
            Undefined: "Null",
            Overflow: "Null",
            Unimplemented: "Null",
            UnhandledXcmVersion: "Null",
            UnhandledXcmMessage: "Null",
            UnhandledEffect: "Null",
            EscalationOfPrivilege: "Null",
            UntrustedReserveLocation: "Null",
            UntrustedTeleportLocation: "Null",
            DestinationBufferOverflow: "Null",
            SendFailed: "Null",
            CannotReachDestination: "(MultiLocationV1, XcmV1)",
            MultiLocationFull: "Null",
            FailedToDecode: "Null",
            BadOrigin: "Null",
            ExceedsMaxMessageSize: "Null",
            FailedToTransactAsset: "Null",
            WeightLimitReached: "Weight",
            Wildcard: "Null",
            TooMuchWeightRequired: "Null",
            NotHoldingFees: "Null",
            WeightNotComputable: "Null",
            Barrier: "Null",
            NotWithdrawable: "Null",
            LocationCannotHold: "Null",
            TooExpensive: "Null",
            AssetNotFound: "Null",
            DestinationUnsupported: "Null",
            RecursionLimitReached: "Null",
          },
        },
        XcmOrderV1: {
          _enum: {
            Noop: "Null",
            DepositAsset: {
              assets: "MultiAssetFilterV1",
              maxAssets: "u32",
              beneficiary: "MultiLocationV1",
            },
            DepositReserveAsset: {
              assets: "MultiAssetFilterV1",
              maxAssets: "u32",
              dest: "MultiLocationV1",
              effects: "Vec<XcmOrderV1>",
            },
            ExchangeAsset: {
              give: "MultiAssetFilterV1",
              receive: "MultiAssetsV1",
            },
            InitiateReserveWithdraw: {
              assets: "MultiAssetFilterV1",
              reserve: "MultiLocationV1",
              effects: "Vec<XcmOrderV1>",
            },
            InitiateTeleport: {
              assets: "MultiAssetFilterV1",
              dest: "MultiLocationV1",
              effects: "Vec<XcmOrderV1>",
            },
            QueryHolding: {
              queryId: "Compact<u64>",
              dest: "MultiLocationV1",
              assets: "MultiAssetFilterV1",
            },
            BuyExecution: {
              fees: "MultiAssetV1",
              weight: "u64",
              debt: "u64",
              haltOnError: "bool",
              instructions: "Vec<XcmV1>",
            },
          },
        },
      };
    },
    9658: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.v2 = void 0));
      t.v2 = {
        AssetInstanceV2: "AssetInstanceV1",
        FungibilityV2: "FungibilityV1",
        JunctionV2: "JunctionV1",
        JunctionsV2: "JunctionsV1",
        MultiAssetsV2: "MultiAssetsV1",
        MultiAssetV2: "MultiAssetV1",
        MultiAssetFilterV2: "MultiAssetFilterV1",
        MultiLocationV2: "MultiLocationV1",
        OriginKindV2: "OriginKindV1",
        WildFungibilityV2: "WildFungibilityV1",
        ResponseV2: {
          _enum: {
            Null: "Null",
            Assets: "MultiAssetsV2",
            ExecutionResult: "ResponseV2Result",
          },
        },
        ResponseV2Error: "(u32, XcmErrorV2)",
        ResponseV2Result: "Result<Null, ResponseV2Error>",
        WeightLimitV2: {
          _enum: { Unlimited: "Null", Limited: "Compact<u64>" },
        },
        InstructionV2: {
          _enum: {
            WithdrawAsset: "MultiAssetsV2",
            ReserveAssetDeposited: "MultiAssetsV2",
            ReceiveTeleportedAsset: "MultiAssetsV2",
            QueryResponse: {
              queryId: "Compact<u64>",
              response: "ResponseV2",
              maxWeight: "Compact<u64>",
            },
            TransferAsset: {
              assets: "MultiAssetsV2",
              beneficiary: "MultiLocationV2",
            },
            TransferReserveAsset: {
              assets: "MultiAssetsV2",
              dest: "MultiLocationV2",
              xcm: "XcmV2",
            },
            Transact: {
              originType: "OriginKindV2",
              requireWeightAtMost: "u64",
              call: "DoubleEncodedCall",
            },
            HrmpNewChannelOpenRequest: {
              sender: "Compact<u32>",
              maxMessageSize: "Compact<u32>",
              maxCapacity: "Compact<u32>",
            },
            HrmpChannelAccepted: { recipient: "Compact<u32>" },
            HrmpChannelClosing: {
              initiator: "Compact<u32>",
              sender: "Compact<u32>",
              recipient: "Compact<u32>",
            },
            ClearOrigin: "Null",
            DescendOrigin: "InteriorMultiLocation",
            ReportError: {
              queryId: "Compact<u64>",
              dest: "MultiLocationV2",
              maxResponseWeight: "Compact<u64>",
            },
            DepositAsset: {
              assets: "MultiAssetFilterV2",
              maxAssets: "u32",
              beneficiary: "MultiLocationV2",
            },
            DepositReserveAsset: {
              assets: "MultiAssetFilterV2",
              maxAssets: "u32",
              dest: "MultiLocationV2",
              xcm: "XcmV2",
            },
            ExchangeAsset: {
              give: "MultiAssetFilterV2",
              receive: "MultiAssetsV2",
            },
            InitiateReserveWithdraw: {
              assets: "MultiAssetFilterV2",
              reserve: "MultiLocationV2",
              xcm: "XcmV2",
            },
            InitiateTeleport: {
              assets: "MultiAssetFilterV2",
              dest: "MultiLocationV2",
              xcm: "XcmV2",
            },
            QueryHolding: {
              query_id: "Compact<u64>",
              dest: "MultiLocationV2",
              assets: "MultiAssetFilterV2",
              maxResponse_Weight: "Compact<u64>",
            },
            BuyExecution: {
              fees: "MultiAssetV2",
              weightLimit: "WeightLimitV2",
            },
            RefundSurplus: "Null",
            SetErrorHandler: "XcmV2",
            SetAppendix: "XcmV2",
            ClearError: "Null",
            ClaimAsset: { assets: "MultiAssetsV2", ticket: "MultiLocationV2" },
            Trap: "u64",
          },
        },
        WildMultiAssetV2: "WildMultiAssetV1",
        XcmV2: "Vec<InstructionV2>",
        XcmErrorV2: {
          _enum: {
            Undefined: "Null",
            Overflow: "Null",
            Unimplemented: "Null",
            UnhandledXcmVersion: "Null",
            UnhandledXcmMessage: "Null",
            UnhandledEffect: "Null",
            EscalationOfPrivilege: "Null",
            UntrustedReserveLocation: "Null",
            UntrustedTeleportLocation: "Null",
            DestinationBufferOverflow: "Null",
            MultiLocationFull: "Null",
            MultiLocationNotInvertible: "Null",
            FailedToDecode: "Null",
            BadOrigin: "Null",
            ExceedsMaxMessageSize: "Null",
            FailedToTransactAsset: "Null",
            WeightLimitReached: "Weight",
            Wildcard: "Null",
            TooMuchWeightRequired: "Null",
            NotHoldingFees: "Null",
            WeightNotComputable: "Null",
            Barrier: "Null",
            NotWithdrawable: "Null",
            LocationCannotHold: "Null",
            TooExpensive: "Null",
            AssetNotFound: "Null",
            DestinationUnsupported: "Null",
            RecursionLimitReached: "Null",
            Transport: "Null",
            Unroutable: "Null",
            UnknownWeightRequired: "Null",
            Trap: "u64",
            UnknownClaim: "Null",
            InvalidLocation: "Null",
          },
        },
        XcmOrderV2: "XcmOrderV1",
      };
    },
    9659: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = {
          ContractCryptoHasher: {
            _enum: ["Blake2x256", "Sha2x256", "Keccak256"],
          },
          ContractDiscriminant: "u32",
          ContractLayoutArray: {
            offset: "ContractLayoutKey",
            len: "u32",
            cellsPerElem: "u64",
            layout: "ContractStorageLayout",
          },
          ContractLayoutCell: {
            key: "ContractLayoutKey",
            ty: "SiLookupTypeId",
          },
          ContractLayoutEnum: {
            dispatchKey: "ContractLayoutKey",
            variants: "BTreeMap<ContractDiscriminant, ContractLayoutStruct>",
          },
          ContractLayoutHash: {
            offset: "ContractLayoutKey",
            strategy: "ContractLayoutHashingStrategy",
            layout: "ContractStorageLayout",
          },
          ContractLayoutHashingStrategy: {
            hasher: "ContractCryptoHasher",
            postfix: "Vec<u8>",
            prefix: "Vec<u8>",
          },
          ContractLayoutKey: "[u8; 32]",
          ContractLayoutStruct: { fields: "Vec<ContractLayoutStructField>" },
          ContractLayoutStructField: {
            layout: "ContractStorageLayout",
            name: "Text",
          },
          ContractStorageLayout: {
            _enum: {
              Cell: "ContractLayoutCell",
              Hash: "ContractLayoutHash",
              Array: "ContractLayoutArray",
              Struct: "ContractLayoutStruct",
              Enum: "ContractLayoutEnum",
            },
          },
        },
        r = {
          ContractConstructorSpecV0: {
            name: "Text",
            selector: "ContractSelector",
            args: "Vec<ContractMessageParamSpecV0>",
            docs: "Vec<Text>",
          },
          ContractConstructorSpecV1: {
            name: "Vec<Text>",
            selector: "ContractSelector",
            args: "Vec<ContractMessageParamSpecV0>",
            docs: "Vec<Text>",
          },
          ContractConstructorSpecV2: {
            label: "Text",
            selector: "ContractSelector",
            args: "Vec<ContractMessageParamSpecV2>",
            docs: "Vec<Text>",
          },
          ContractConstructorSpecV3: {
            label: "Text",
            selector: "ContractSelector",
            payable: "bool",
            args: "Vec<ContractMessageParamSpecV2>",
            docs: "Vec<Text>",
          },
          ContractConstructorSpecV4: {
            label: "Text",
            selector: "ContractSelector",
            payable: "bool",
            args: "Vec<ContractMessageParamSpecV2>",
            docs: "Vec<Text>",
            default: "bool",
            returnType: "Option<ContractTypeSpec>",
          },
          ContractContractSpecV0: {
            constructors: "Vec<ContractConstructorSpecV0>",
            messages: "Vec<ContractMessageSpecV0>",
            events: "Vec<ContractEventSpecV0>",
            docs: "Vec<Text>",
          },
          ContractContractSpecV1: {
            constructors: "Vec<ContractConstructorSpecV1>",
            messages: "Vec<ContractMessageSpecV1>",
            events: "Vec<ContractEventSpecV1>",
            docs: "Vec<Text>",
          },
          ContractContractSpecV2: {
            constructors: "Vec<ContractConstructorSpecV2>",
            messages: "Vec<ContractMessageSpecV2>",
            events: "Vec<ContractEventSpecV2>",
            docs: "Vec<Text>",
          },
          ContractContractSpecV3: {
            constructors: "Vec<ContractConstructorSpecV3>",
            messages: "Vec<ContractMessageSpecV2>",
            events: "Vec<ContractEventSpecV2>",
            docs: "Vec<Text>",
          },
          ContractContractSpecV4: {
            constructors: "Vec<ContractConstructorSpecV4>",
            messages: "Vec<ContractMessageSpecV3>",
            events: "Vec<ContractEventSpecV2>",
            docs: "Vec<Text>",
            environment: "ContractEnvironmentV4",
          },
          ContractContractSpecV5: {
            constructors: "Vec<ContractConstructorSpecV4>",
            messages: "Vec<ContractMessageSpecV3>",
            events: "Vec<ContractEventSpecV3>",
            docs: "Vec<Text>",
            environment: "ContractEnvironmentV4",
          },
          ContractDisplayName: "SiPath",
          ContractEventParamSpecV0: {
            name: "Text",
            indexed: "bool",
            type: "ContractTypeSpec",
            docs: "Vec<Text>",
          },
          ContractEventParamSpecV2: {
            label: "Text",
            indexed: "bool",
            type: "ContractTypeSpec",
            docs: "Vec<Text>",
          },
          ContractEventSpecV0: {
            name: "Text",
            args: "Vec<ContractEventParamSpecV0>",
            docs: "Vec<Text>",
          },
          ContractEventSpecV1: {
            name: "Text",
            args: "Vec<ContractEventParamSpecV0>",
            docs: "Vec<Text>",
          },
          ContractEventSpecV2: {
            label: "Text",
            args: "Vec<ContractEventParamSpecV2>",
            docs: "Vec<Text>",
          },
          ContractEventSpecV3: {
            label: "Text",
            args: "Vec<ContractEventParamSpecV2>",
            docs: "Vec<Text>",
            module_path: "Text",
            signature_topic: "Option<[u8; 32]>",
          },
          ContractMessageParamSpecV0: {
            name: "Text",
            type: "ContractTypeSpec",
          },
          ContractMessageParamSpecV2: {
            label: "Text",
            type: "ContractTypeSpec",
          },
          ContractMessageSpecV0: {
            name: "Text",
            selector: "ContractSelector",
            mutates: "bool",
            payable: "bool",
            args: "Vec<ContractMessageParamSpecV0>",
            returnType: "Option<ContractTypeSpec>",
            docs: "Vec<Text>",
          },
          ContractMessageSpecV1: {
            name: "Vec<Text>",
            selector: "ContractSelector",
            mutates: "bool",
            payable: "bool",
            args: "Vec<ContractMessageParamSpecV0>",
            returnType: "Option<ContractTypeSpec>",
            docs: "Vec<Text>",
          },
          ContractMessageSpecV2: {
            label: "Text",
            selector: "ContractSelector",
            mutates: "bool",
            payable: "bool",
            args: "Vec<ContractMessageParamSpecV2>",
            returnType: "Option<ContractTypeSpec>",
            docs: "Vec<Text>",
          },
          ContractMessageSpecV3: {
            label: "Text",
            selector: "ContractSelector",
            mutates: "bool",
            payable: "bool",
            args: "Vec<ContractMessageParamSpecV2>",
            returnType: "Option<ContractTypeSpec>",
            docs: "Vec<Text>",
            default: "bool",
          },
          ContractSelector: "[u8; 4]",
          ContractTypeSpec: {
            type: "SiLookupTypeId",
            displayName: "ContractDisplayName",
          },
        },
        o = {
          ContractConstructorSpecLatest: "ContractConstructorSpecV4",
          ContractEventSpecLatest: "ContractEventSpecV3",
          ContractEventParamSpecLatest: "ContractEventParamSpecV2",
          ContractMessageParamSpecLatest: "ContractMessageParamSpecV2",
          ContractMessageSpecLatest: "ContractMessageSpecV3",
          ContractMetadataLatest: "ContractMetadataV5",
        };
      t.default = {
        rpc: {},
        types: {
          ...n,
          ...r,
          ...o,
          ContractProjectInfo: {
            source: "ContractProjectSource",
            contract: "ContractProjectContract",
          },
          ContractMetadataV0: {
            metadataVersion: "Text",
            types: "Vec<Si0Type>",
            spec: "ContractContractSpecV0",
          },
          ContractMetadataV1: {
            types: "Vec<PortableType>",
            spec: "ContractContractSpecV1",
          },
          ContractMetadataV2: {
            types: "Vec<PortableType>",
            spec: "ContractContractSpecV2",
          },
          ContractMetadataV3: {
            types: "Vec<PortableType>",
            spec: "ContractContractSpecV3",
          },
          ContractMetadataV4: {
            types: "Vec<PortableType>",
            spec: "ContractContractSpecV4",
            version: "Text",
          },
          ContractMetadataV5: {
            types: "Vec<PortableType>",
            spec: "ContractContractSpecV5",
            version: "u64",
          },
          ContractMetadata: {
            _enum: {
              V0: "ContractMetadataV0",
              V1: "ContractMetadataV1",
              V2: "ContractMetadataV2",
              V3: "ContractMetadataV3",
              V4: "ContractMetadataV4",
              V5: "ContractMetadataV5",
            },
          },
          ContractProjectV0: {
            metadataVersion: "Text",
            source: "ContractProjectSource",
            contract: "ContractProjectContract",
            types: "Vec<Si0Type>",
            spec: "ContractContractSpecV0",
          },
          ContractProject: "(ContractProjectInfo, ContractMetadata)",
          ContractProjectContract: {
            _alias: { docs: "documentation" },
            name: "Text",
            version: "Text",
            authors: "Vec<Text>",
            description: "Option<Text>",
            docs: "Option<Text>",
            repository: "Option<Text>",
            homepage: "Option<Text>",
            license: "Option<Text>",
          },
          ContractProjectSource: {
            _alias: { wasmHash: "hash" },
            wasmHash: "[u8; 32]",
            language: "Text",
            compiler: "Text",
            wasm: "Raw",
          },
          ContractEnvironmentV4: {
            _alias: { hashType: "hash" },
            accountId: "Option<ContractTypeSpec>",
            balance: "Option<ContractTypeSpec>",
            blockNumber: "Option<ContractTypeSpec>",
            hashType: "Option<ContractTypeSpec>",
            timestamp: "Option<ContractTypeSpec>",
            maxEventTopics: "Option<u32>",
          },
        },
      };
    },
    9660: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9661),
        r = a(9662);
      const o = {
          BlockV0: {
            header: "EthHeader",
            transactions: "Vec<TransactionV0>",
            ommers: "Vec<EthHeader>",
          },
          LegacyTransaction: {
            nonce: "U256",
            gasPrice: "U256",
            gasLimit: "U256",
            action: "EthTransactionAction",
            value: "U256",
            input: "Bytes",
            signature: "EthTransactionSignature",
          },
          TransactionV0: "LegacyTransaction",
        },
        i = {
          BlockV1: {
            header: "EthHeader",
            transactions: "Vec<TransactionV1>",
            ommers: "Vec<EthHeader>",
          },
          EIP2930Transaction: {
            chainId: "u64",
            nonce: "U256",
            gasPrice: "U256",
            gasLimit: "U256",
            action: "EthTransactionAction",
            value: "U256",
            input: "Bytes",
            accessList: "EthAccessList",
            oddYParity: "bool",
            r: "H256",
            s: "H256",
          },
          TransactionV1: {
            _enum: {
              Legacy: "LegacyTransaction",
              EIP2930: "EIP2930Transaction",
            },
          },
        },
        s = {
          BlockV2: {
            header: "EthHeader",
            transactions: "Vec<TransactionV2>",
            ommers: "Vec<EthHeader>",
          },
          EIP1559Transaction: {
            chainId: "u64",
            nonce: "U256",
            maxPriorityFeePerGas: "U256",
            maxFeePerGas: "U256",
            gasLimit: "U256",
            action: "EthTransactionAction",
            value: "U256",
            input: "Bytes",
            accessList: "EthAccessList",
            oddYParity: "bool",
            r: "H256",
            s: "H256",
          },
          TransactionV2: {
            _enum: {
              Legacy: "LegacyTransaction",
              EIP2930: "EIP2930Transaction",
              EIP1559: "EIP1559Transaction",
            },
          },
        },
        c = {
          ...o,
          ...i,
          ...s,
          EthereumAccountId: "GenericEthereumAccountId",
          EthereumAddress: "GenericEthereumAccountId",
          EthereumLookupSource: "GenericEthereumLookupSource",
          EthereumSignature: "[u8; 65]",
          EthAccessListItem: { address: "EthAddress", slots: "Vec<H256>" },
          EthAccessList: "Vec<EthAccessListItem>",
          EthAccount: {
            address: "EthAddress",
            balance: "U256",
            nonce: "U256",
            codeHash: "H256",
            storageHash: "H256",
            accountProof: "Vec<Bytes>",
            storageProof: "Vec<EthStorageProof>",
          },
          EthAddress: "H160",
          EthBlock: {
            header: "EthHeader",
            transactions: "Vec<EthTransaction>",
            ommers: "Vec<EthHeader>",
          },
          EthHeader: {
            parentHash: "H256",
            ommersHash: "H256",
            beneficiary: "EthAddress",
            stateRoot: "H256",
            transactionsRoot: "H256",
            receiptsRoot: "H256",
            logsBloom: "EthBloom",
            difficulty: "U256",
            number: "U256",
            gasLimit: "U256",
            gasUsed: "U256",
            timestamp: "u64",
            extraData: "Bytes",
            mixMash: "H256",
            nonce: "H64",
          },
          EthRichBlock: {
            _alias: { blockHash: "hash", blockSize: "size" },
            blockHash: "Option<H256>",
            parentHash: "H256",
            sha3Uncles: "H256",
            author: "EthAddress",
            miner: "EthAddress",
            stateRoot: "H256",
            transactionsRoot: "H256",
            receiptsRoot: "H256",
            number: "Option<U256>",
            gasUsed: "U256",
            gasLimit: "U256",
            extraData: "Bytes",
            logsBloom: "EthBloom",
            timestamp: "U256",
            difficulty: "U256",
            totalDifficulty: "Option<U256>",
            sealFields: "Vec<Bytes>",
            uncles: "Vec<H256>",
            transactions: "Vec<EthTransaction>",
            blockSize: "Option<U256>",
          },
          EthBloom: "H2048",
          EthCallRequest: {
            from: "Option<EthAddress>",
            to: "Option<EthAddress>",
            gasPrice: "Option<U256>",
            gas: "Option<U256>",
            value: "Option<U256>",
            data: "Option<Bytes>",
            nonce: "Option<U256>",
          },
          EthFeeHistory: {
            oldestBlock: "U256",
            baseFeePerGas: "Vec<U256>",
            gasUsedRatio: "Vec<f64>",
            reward: "Option<Vec<Vec<U256>>>",
          },
          EthFilter: {
            fromBlock: "Option<BlockNumber>",
            toBlock: "Option<BlockNumber>",
            blockHash: "Option<H256>",
            address: "Option<EthFilterAddress>",
            topics: "Option<EthFilterTopic>",
          },
          EthFilterAddress: {
            _enum: {
              Single: "EthAddress",
              Multiple: "Vec<EthAddress>",
              Null: "Null",
            },
          },
          EthFilterChanges: {
            _enum: { Logs: "Vec<EthLog>", Hashes: "Vec<H256>", Empty: "Null" },
          },
          EthFilterTopic: {
            _enum: {
              Single: "EthFilterTopicInner",
              Multiple: "Vec<EthFilterTopicInner>",
              Null: "Null",
            },
          },
          EthFilterTopicEntry: "Option<H256>",
          EthFilterTopicInner: {
            _enum: {
              Single: "EthFilterTopicEntry",
              Multiple: "Vec<EthFilterTopicEntry>",
              Null: "Null",
            },
          },
          EthRichHeader: {
            _alias: { blockHash: "hash", blockSize: "size" },
            blockHash: "Option<H256>",
            parentHash: "H256",
            sha3Uncles: "H256",
            author: "EthAddress",
            miner: "EthAddress",
            stateRoot: "H256",
            transactionsRoot: "H256",
            receiptsRoot: "H256",
            number: "Option<U256>",
            gasUsed: "U256",
            gasLimit: "U256",
            extraData: "Bytes",
            logsBloom: "EthBloom",
            timestamp: "U256",
            difficulty: "U256",
            sealFields: "Vec<Bytes>",
            blockSize: "Option<U256>",
          },
          EthLog: {
            address: "EthAddress",
            topics: "Vec<H256>",
            data: "Bytes",
            blockHash: "Option<H256>",
            blockNumber: "Option<U256>",
            transactionHash: "Option<H256>",
            transactionIndex: "Option<U256>",
            logIndex: "Option<U256>",
            transactionLogIndex: "Option<U256>",
            removed: "bool",
          },
          EthReceipt: {
            transactionHash: "Option<H256>",
            transactionIndex: "Option<U256>",
            blockHash: "Option<H256>",
            from: "Option<EthAddress>",
            to: "Option<EthAddress>",
            blockNumber: "Option<U256>",
            cumulativeGasUsed: "U256",
            gasUsed: "Option<U256>",
            contractAddress: "Option<EthAddress>",
            logs: "Vec<EthLog>",
            root: "Option<H256>",
            logsBloom: "EthBloom",
            statusCode: "Option<U64>",
          },
          EthReceiptV0: "EthReceipt",
          EthReceiptV3: "EthReceipt",
          EthStorageProof: { key: "U256", value: "U256", proof: "Vec<Bytes>" },
          EthSubKind: {
            _enum: ["newHeads", "logs", "newPendingTransactions", "syncing"],
          },
          EthSubParams: { _enum: { None: "Null", Logs: "EthFilter" } },
          EthSubResult: {
            _enum: {
              Header: "EthRichHeader",
              Log: "EthLog",
              TransactionHash: "H256",
              SyncState: "EthSyncStatus",
            },
          },
          EthSyncInfo: {
            startingBlock: "U256",
            currentBlock: "U256",
            highestBlock: "U256",
            warpChunksAmount: "Option<U256>",
            warpChunksProcessed: "Option<U256>",
          },
          EthSyncStatus: { _enum: { Info: "EthSyncInfo", None: "Null" } },
          EthTransaction: {
            hash: "H256",
            nonce: "U256",
            blockHash: "Option<H256>",
            blockNumber: "Option<U256>",
            transactionIndex: "Option<U256>",
            from: "H160",
            to: "Option<H160>",
            value: "U256",
            gasPrice: "Option<U256>",
            maxFeePerGas: "Option<U256>",
            maxPriorityFeePerGas: "Option<U256>",
            gas: "U256",
            input: "Bytes",
            creates: "Option<H160>",
            raw: "Bytes",
            publicKey: "Option<H512>",
            chainId: "Option<U64>",
            standardV: "U256",
            v: "U256",
            r: "U256",
            s: "U256",
            accessList: "Option<Vec<EthAccessListItem>>",
            transactionType: "Option<U256>",
          },
          EthTransactionSignature: { v: "u64", r: "H256", s: "H256" },
          EthTransactionAction: { _enum: { Call: "H160", Create: "Null" } },
          EthTransactionCondition: { _enum: { block: "u64", time: "u64" } },
          EthTransactionRequest: {
            from: "Option<EthAddress>",
            to: "Option<EthAddress>",
            gasPrice: "Option<U256>",
            gas: "Option<U256>",
            value: "Option<U256>",
            data: "Option<Bytes>",
            nonce: "Option<U256>",
          },
          EthTransactionStatus: {
            transactionHash: "H256",
            transactionIndex: "u32",
            from: "EthAddress",
            to: "Option<EthAddress>",
            contractAddress: "Option<EthAddress>",
            logs: "Vec<EthLog>",
            logsBloom: "EthBloom",
          },
          EthWork: {
            powHash: "H256",
            seedHash: "H256",
            target: "H256",
            number: "Option<u64>",
          },
        };
      t.default = { rpc: n.rpc, runtime: r.runtime, types: c };
    },
    9661: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      const n = {
          listening: {
            aliasSection: "net",
            description:
              "Returns true if client is actively listening for network connections. Otherwise false.",
            params: [],
            type: "bool",
          },
          peerCount: {
            aliasSection: "net",
            description: "Returns number of peers connected to node.",
            params: [],
            type: "Text",
          },
          version: {
            aliasSection: "net",
            description: "Returns protocol version.",
            params: [],
            type: "Text",
          },
        },
        r = {
          clientVersion: {
            aliasSection: "web3",
            description: "Returns current client version.",
            params: [],
            type: "Text",
          },
          sha3: {
            aliasSection: "web3",
            description: "Returns sha3 of the given data",
            params: [{ name: "data", type: "Bytes" }],
            type: "H256",
          },
        };
      t.rpc = {
        ...n,
        ...r,
        accounts: {
          description: "Returns accounts list.",
          params: [],
          type: "Vec<H160>",
        },
        blockNumber: {
          description: "Returns the blockNumber",
          params: [],
          type: "U256",
        },
        call: {
          description: "Call contract, returning the output data.",
          params: [
            { name: "request", type: "EthCallRequest" },
            {
              isHistoric: !0,
              isOptional: !0,
              name: "number",
              type: "BlockNumber",
            },
          ],
          type: "Bytes",
        },
        chainId: {
          description:
            "Returns the chain ID used for transaction signing at the current best block. None is returned if not available.",
          params: [],
          type: "U64",
        },
        coinbase: {
          description: "Returns block author.",
          params: [],
          type: "H160",
        },
        estimateGas: {
          description: "Estimate gas needed for execution of given contract.",
          params: [
            { name: "request", type: "EthCallRequest" },
            {
              isHistoric: !0,
              isOptional: !0,
              name: "number",
              type: "BlockNumber",
            },
          ],
          type: "U256",
        },
        feeHistory: {
          description:
            "Returns fee history for given block count & reward percentiles",
          params: [
            { name: "blockCount", type: "U256" },
            { name: "newestBlock", type: "BlockNumber" },
            { name: "rewardPercentiles", type: "Option<Vec<f64>>" },
          ],
          type: "EthFeeHistory",
        },
        gasPrice: {
          description: "Returns current gas price.",
          params: [],
          type: "U256",
        },
        getBalance: {
          description: "Returns balance of the given account.",
          params: [
            { name: "address", type: "H160" },
            {
              isHistoric: !0,
              isOptional: !0,
              name: "number",
              type: "BlockNumber",
            },
          ],
          type: "U256",
        },
        getBlockByHash: {
          description: "Returns block with given hash.",
          params: [
            { name: "hash", type: "H256" },
            { name: "full", type: "bool" },
          ],
          type: "Option<EthRichBlock>",
        },
        getBlockByNumber: {
          description: "Returns block with given number.",
          params: [
            { name: "block", type: "BlockNumber" },
            { name: "full", type: "bool" },
          ],
          type: "Option<EthRichBlock>",
        },
        getBlockTransactionCountByHash: {
          description:
            "Returns the number of transactions in a block with given hash.",
          params: [{ name: "hash", type: "H256" }],
          type: "U256",
        },
        getBlockTransactionCountByNumber: {
          description:
            "Returns the number of transactions in a block with given block number.",
          params: [{ name: "block", type: "BlockNumber" }],
          type: "U256",
        },
        getCode: {
          description:
            "Returns the code at given address at given time (block number).",
          params: [
            { name: "address", type: "H160" },
            {
              isHistoric: !0,
              isOptional: !0,
              name: "number",
              type: "BlockNumber",
            },
          ],
          type: "Bytes",
        },
        getFilterChanges: {
          description: "Returns filter changes since last poll.",
          params: [{ name: "index", type: "U256" }],
          type: "EthFilterChanges",
        },
        getFilterLogs: {
          description:
            "Returns all logs matching given filter (in a range 'from' - 'to').",
          params: [{ name: "index", type: "U256" }],
          type: "Vec<EthLog>",
        },
        getLogs: {
          description: "Returns logs matching given filter object.",
          params: [{ name: "filter", type: "EthFilter" }],
          type: "Vec<EthLog>",
        },
        getProof: {
          description: "Returns proof for account and storage.",
          params: [
            { name: "address", type: "H160" },
            { name: "storageKeys", type: "Vec<H256>" },
            { name: "number", type: "BlockNumber" },
          ],
          type: "EthAccount",
        },
        getStorageAt: {
          description: "Returns content of the storage at given address.",
          params: [
            { name: "address", type: "H160" },
            { name: "index", type: "U256" },
            {
              isHistoric: !0,
              isOptional: !0,
              name: "number",
              type: "BlockNumber",
            },
          ],
          type: "H256",
        },
        getTransactionByBlockHashAndIndex: {
          description: "Returns transaction at given block hash and index.",
          params: [
            { name: "hash", type: "H256" },
            { name: "index", type: "U256" },
          ],
          type: "EthTransaction",
        },
        getTransactionByBlockNumberAndIndex: {
          description: "Returns transaction by given block number and index.",
          params: [
            { name: "number", type: "BlockNumber" },
            { name: "index", type: "U256" },
          ],
          type: "EthTransaction",
        },
        getTransactionByHash: {
          description: "Get transaction by its hash.",
          params: [{ name: "hash", type: "H256" }],
          type: "EthTransaction",
        },
        getTransactionCount: {
          description:
            "Returns the number of transactions sent from given address at given time (block number).",
          params: [
            { name: "address", type: "H160" },
            {
              isHistoric: !0,
              isOptional: !0,
              name: "number",
              type: "BlockNumber",
            },
          ],
          type: "U256",
        },
        getTransactionReceipt: {
          description: "Returns transaction receipt by transaction hash.",
          params: [{ name: "hash", type: "H256" }],
          type: "EthReceipt",
        },
        getUncleByBlockHashAndIndex: {
          description: "Returns an uncles at given block and index.",
          params: [
            { name: "hash", type: "H256" },
            { name: "index", type: "U256" },
          ],
          type: "EthRichBlock",
        },
        getUncleByBlockNumberAndIndex: {
          description: "Returns an uncles at given block and index.",
          params: [
            { name: "number", type: "BlockNumber" },
            { name: "index", type: "U256" },
          ],
          type: "EthRichBlock",
        },
        getUncleCountByBlockHash: {
          description:
            "Returns the number of uncles in a block with given hash.",
          params: [{ name: "hash", type: "H256" }],
          type: "U256",
        },
        getUncleCountByBlockNumber: {
          description:
            "Returns the number of uncles in a block with given block number.",
          params: [{ name: "number", type: "BlockNumber" }],
          type: "U256",
        },
        getWork: {
          description:
            "Returns the hash of the current block, the seedHash, and the boundary condition to be met.",
          params: [],
          type: "EthWork",
        },
        hashrate: {
          description:
            "Returns the number of hashes per second that the node is mining with.",
          params: [],
          type: "U256",
        },
        maxPriorityFeePerGas: {
          description: "Returns max priority fee per gas",
          params: [],
          type: "U256",
        },
        mining: {
          description: "Returns true if client is actively mining new blocks.",
          params: [],
          type: "bool",
        },
        newBlockFilter: {
          description: "Returns id of new block filter.",
          params: [],
          type: "U256",
        },
        newFilter: {
          description: "Returns id of new filter.",
          params: [{ name: "filter", type: "EthFilter" }],
          type: "U256",
        },
        newPendingTransactionFilter: {
          description: "Returns id of new block filter.",
          params: [],
          type: "U256",
        },
        protocolVersion: {
          description:
            "Returns protocol version encoded as a string (quotes are necessary).",
          params: [],
          type: "u64",
        },
        sendRawTransaction: {
          description: "Sends signed transaction, returning its hash.",
          params: [{ name: "bytes", type: "Bytes" }],
          type: "H256",
        },
        sendTransaction: {
          description:
            "Sends transaction; will block waiting for signer to return the transaction hash",
          params: [{ name: "tx", type: "EthTransactionRequest" }],
          type: "H256",
        },
        submitHashrate: {
          description: "Used for submitting mining hashrate.",
          params: [
            { name: "index", type: "U256" },
            { name: "hash", type: "H256" },
          ],
          type: "bool",
        },
        submitWork: {
          description: "Used for submitting a proof-of-work solution.",
          params: [
            { name: "nonce", type: "H64" },
            { name: "headerHash", type: "H256" },
            { name: "mixDigest", type: "H256" },
          ],
          type: "bool",
        },
        subscribe: {
          description: "Subscribe to Eth subscription.",
          params: [
            { name: "kind", type: "EthSubKind" },
            { isOptional: !0, name: "params", type: "EthSubParams" },
          ],
          pubsub: ["subscription", "subscribe", "unsubscribe"],
          type: "Null",
        },
        syncing: {
          description:
            "Returns an object with data about the sync status or false.",
          params: [],
          type: "EthSyncStatus",
        },
        uninstallFilter: {
          description: "Uninstalls filter.",
          params: [{ name: "index", type: "U256" }],
          type: "bool",
        },
      };
    },
    9662: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          account_basic: {
            description: "Returns pallet_evm::Accounts by address.",
            params: [{ name: "address", type: "H160" }],
            type: "EvmAccount",
          },
          account_code_at: {
            description:
              "For a given account address, returns pallet_evm::AccountCodes.",
            params: [{ name: "address", type: "H160" }],
            type: "Bytes",
          },
          author: {
            description:
              "Returns the converted FindAuthor::find_author authority id.",
            params: [],
            type: "H160",
          },
          call: {
            description:
              "Returns a frame_ethereum::call response. If `estimate` is true,",
            params: [
              { name: "from", type: "H160" },
              { name: "to", type: "H160" },
              { name: "data", type: "Vec<u8>" },
              { name: "value", type: "U256" },
              { name: "gasLimit", type: "U256" },
              { name: "maxFeePerGas", type: "Option<U256>" },
              { name: "maxPriorityFeePerGas", type: "Option<U256>" },
              { name: "nonce", type: "Option<U256>" },
              { name: "estimate", type: "bool" },
              { name: "accessList", type: "Option<Vec<(H160, Vec<H256>)>>" },
            ],
            type: "Result<EvmCallInfo, DispatchError>",
          },
          chain_id: {
            description: "Returns runtime defined pallet_evm::ChainId.",
            params: [],
            type: "u64",
          },
          create: {
            description:
              "Returns a frame_ethereum::call response. If `estimate` is true,",
            params: [
              { name: "from", type: "H160" },
              { name: "data", type: "Vec<u8>" },
              { name: "value", type: "U256" },
              { name: "gasLimit", type: "U256" },
              { name: "maxFeePerGas", type: "Option<U256>" },
              { name: "maxPriorityFeePerGas", type: "Option<U256>" },
              { name: "nonce", type: "Option<U256>" },
              { name: "estimate", type: "bool" },
              { name: "accessList", type: "Option<Vec<(H160, Vec<H256>)>>" },
            ],
            type: "Result<EvmCreateInfo, DispatchError>",
          },
          current_all: {
            description:
              "Return all the current data for a block in a single runtime call.",
            params: [],
            type: "(Option<BlockV2>, Option<Vec<EthReceiptV3>>, Option<Vec<EthTransactionStatus>>)",
          },
          current_block: {
            description: "Return the current block.",
            params: [],
            type: "BlockV2",
          },
          current_receipts: {
            description: "Return the current receipt.",
            params: [],
            type: "Option<Vec<EthReceiptV3>>",
          },
          current_transaction_statuses: {
            description: "Return the current transaction status.",
            params: [],
            type: "Option<Vec<EthTransactionStatus>>",
          },
          elasticity: {
            description: "Return the elasticity multiplier.",
            params: [],
            type: "Option<Permill>",
          },
          extrinsic_filter: {
            description:
              "Receives a `Vec<OpaqueExtrinsic>` and filters all the ethereum transactions.",
            params: [{ name: "xts", type: "Vec<Extrinsic>" }],
            type: "Vec<TransactionV2>",
          },
          gas_price: {
            description: "Returns FixedGasPrice::min_gas_price",
            params: [],
            type: "u256",
          },
          storage_at: {
            description:
              "For a given account address and index, returns pallet_evm::AccountStorages.",
            params: [
              { name: "address", type: "H160" },
              { name: "index", type: "u256" },
            ],
            type: "H256",
          },
        },
        r = {
          call: {
            description:
              "Returns a frame_ethereum::call response. If `estimate` is true,",
            params: [
              { name: "from", type: "H160" },
              { name: "to", type: "H160" },
              { name: "data", type: "Vec<u8>" },
              { name: "value", type: "U256" },
              { name: "gasLimit", type: "U256" },
              { name: "maxFeePerGas", type: "Option<U256>" },
              { name: "maxPriorityFeePerGas", type: "Option<U256>" },
              { name: "nonce", type: "Option<U256>" },
              { name: "estimate", type: "bool" },
              { name: "accessList", type: "Option<Vec<(H160, Vec<H256>)>>" },
            ],
            type: "Result<EvmCallInfoV2, DispatchError>",
          },
          create: {
            description:
              "Returns a frame_ethereum::call response. If `estimate` is true,",
            params: [
              { name: "from", type: "H160" },
              { name: "data", type: "Vec<u8>" },
              { name: "value", type: "U256" },
              { name: "gasLimit", type: "U256" },
              { name: "maxFeePerGas", type: "Option<U256>" },
              { name: "maxPriorityFeePerGas", type: "Option<U256>" },
              { name: "nonce", type: "Option<U256>" },
              { name: "estimate", type: "bool" },
              { name: "accessList", type: "Option<Vec<(H160, Vec<H256>)>>" },
            ],
            type: "Result<EvmCreateInfoV2, DispatchError>",
          },
        };
      t.runtime = {
        ConvertTransactionRuntimeApi: [
          {
            methods: {
              convert_transaction: {
                description:
                  "Converts an Ethereum-style transaction to Extrinsic",
                params: [{ name: "transaction", type: "TransactionV2" }],
                type: "Extrinsic",
              },
            },
            version: 2,
          },
        ],
        DebugRuntimeApi: [
          {
            methods: {
              trace_block: {
                description: "Trace all block extrinsics",
                params: [
                  { name: "extrinsics", type: "Vec<Extrinsic>" },
                  { name: "knownTransactions", type: "Vec<H256>" },
                ],
                type: "Result<(), DispatchError>",
              },
              trace_transaction: {
                description: "Trace transaction extrinsics",
                params: [
                  { name: "extrinsics", type: "Vec<Extrinsic>" },
                  { name: "transaction", type: "EthTransaction" },
                ],
                type: "Result<(), DispatchError>",
              },
            },
            version: 4,
          },
        ],
        EthereumRuntimeRPCApi: [
          { methods: { ...n }, version: 4 },
          { methods: { ...n, ...r }, version: 5 },
        ],
      };
    },
    9663: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9664);
      t.default = { rpc: {}, runtime: n.runtime, types: {} };
    },
    9664: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        AuthorFilterAPI: [
          {
            methods: {
              can_author: {
                description:
                  "The runtime api used to predict whether an author will be eligible in the given slot",
                params: [
                  { name: "author", type: "AccountId" },
                  { name: "relayParent", type: "u32" },
                  { name: "parentHeader", type: "Header" },
                ],
                type: "bool",
              },
            },
            version: 2,
          },
          {
            methods: {
              can_author: {
                description:
                  "The runtime api used to predict whether an author will be eligible in the given slot",
                params: [
                  { name: "author", type: "AccountId" },
                  { name: "relayParent", type: "u32" },
                ],
                type: "bool",
              },
            },
            version: 1,
          },
        ],
        NimbusApi: [
          {
            methods: {
              can_author: {
                description:
                  "The runtime api used to predict whether a Nimbus author will be eligible in the given slot",
                params: [
                  { name: "author", type: "AccountId" },
                  { name: "relayParent", type: "u32" },
                  { name: "parentHeader", type: "Header" },
                ],
                type: "bool",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9665: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9666);
      t.default = { rpc: {}, runtime: n.runtime, types: {} };
    },
    9666: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        OracleApi: [
          {
            methods: {
              get_all_values: {
                description: "Retrieves all values",
                params: [{ name: "providerId", type: "Raw" }],
                type: "Raw",
              },
              get_value: {
                description: "Retrieves a single value",
                params: [
                  { name: "providerId", type: "Raw" },
                  { name: "key", type: "Raw" },
                ],
                type: "Option<Raw>",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9667: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9668);
      t.default = { rpc: {}, runtime: n.runtime, types: {} };
    },
    9668: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        TokensApi: [
          {
            methods: {
              query_existential_deposit: {
                description:
                  "Query the existential amount for a specific currency",
                params: [{ name: "currencyId", type: "Raw" }],
                type: "u128",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9669: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9670);
      t.default = {
        rpc: n.rpc,
        types: { RpcMethods: { version: "u32", methods: "Vec<Text>" } },
      };
    },
    9670: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        methods: {
          description:
            "Retrieves the list of RPC methods that are exposed by the node",
          params: [],
          type: "RpcMethods",
        },
      };
    },
    9671: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9672);
      t.default = {
        rpc: n.rpc,
        types: {
          ExtrinsicOrHash: { _enum: { Hash: "Hash", Extrinsic: "Bytes" } },
          ExtrinsicStatus: {
            _enum: {
              Future: "Null",
              Ready: "Null",
              Broadcast: "Vec<Text>",
              InBlock: "Hash",
              Retracted: "Hash",
              FinalityTimeout: "Hash",
              Finalized: "Hash",
              Usurped: "Hash",
              Dropped: "Null",
              Invalid: "Null",
            },
          },
        },
      };
    },
    9672: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        hasKey: {
          description:
            "Returns true if the keystore has private keys for the given public key and key type.",
          isUnsafe: !0,
          params: [
            { name: "publicKey", type: "Bytes" },
            { name: "keyType", type: "Text" },
          ],
          type: "bool",
        },
        hasSessionKeys: {
          description:
            "Returns true if the keystore has private keys for the given session public keys.",
          isUnsafe: !0,
          params: [{ name: "sessionKeys", type: "Bytes" }],
          type: "bool",
        },
        insertKey: {
          description: "Insert a key into the keystore.",
          isUnsafe: !0,
          params: [
            { name: "keyType", type: "Text" },
            { name: "suri", type: "Text" },
            { name: "publicKey", type: "Bytes" },
          ],
          type: "Bytes",
        },
        pendingExtrinsics: {
          description:
            "Returns all pending extrinsics, potentially grouped by sender",
          params: [],
          type: "Vec<Extrinsic>",
        },
        removeExtrinsic: {
          description:
            "Remove given extrinsic from the pool and temporarily ban it to prevent reimporting",
          isUnsafe: !0,
          params: [{ name: "bytesOrHash", type: "Vec<ExtrinsicOrHash>" }],
          type: "Vec<Hash>",
        },
        rotateKeys: {
          description:
            "Generate new session keys and returns the corresponding public keys",
          isUnsafe: !0,
          params: [],
          type: "Bytes",
        },
        submitAndWatchExtrinsic: {
          description:
            "Submit and subscribe to watch an extrinsic until unsubscribed",
          isSigned: !0,
          params: [{ name: "extrinsic", type: "Extrinsic" }],
          pubsub: [
            "extrinsicUpdate",
            "submitAndWatchExtrinsic",
            "unwatchExtrinsic",
          ],
          type: "ExtrinsicStatus",
        },
        submitExtrinsic: {
          description: "Submit a fully formatted extrinsic for block inclusion",
          isSigned: !0,
          params: [{ name: "extrinsic", type: "Extrinsic" }],
          type: "Hash",
        },
      };
    },
    9673: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9674);
      t.default = { rpc: n.rpc, types: { BlockHash: "Hash" } };
    },
    9674: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        getBlock: {
          description: "Get header and body of a relay chain block",
          params: [
            { isHistoric: !0, isOptional: !0, name: "hash", type: "BlockHash" },
          ],
          type: "SignedBlock",
        },
        getBlockHash: {
          description: "Get the block hash for a specific block",
          params: [
            { isOptional: !0, name: "blockNumber", type: "BlockNumber" },
          ],
          type: "BlockHash",
        },
        getFinalizedHead: {
          alias: ["chain_getFinalisedHead"],
          description:
            "Get hash of the last finalized block in the canon chain",
          params: [],
          type: "BlockHash",
        },
        getHeader: {
          alias: ["chain_getHead"],
          description: "Retrieves the header for a specific block",
          params: [
            { isHistoric: !0, isOptional: !0, name: "hash", type: "BlockHash" },
          ],
          type: "Header",
        },
        subscribeAllHeads: {
          description: "Retrieves the newest header via subscription",
          params: [],
          pubsub: ["allHead", "subscribeAllHeads", "unsubscribeAllHeads"],
          type: "Header",
        },
        subscribeFinalizedHeads: {
          alias: [
            "chain_subscribeFinalisedHeads",
            "chain_unsubscribeFinalisedHeads",
          ],
          description: "Retrieves the best finalized header via subscription",
          params: [],
          pubsub: [
            "finalizedHead",
            "subscribeFinalizedHeads",
            "unsubscribeFinalizedHeads",
          ],
          type: "Header",
        },
        subscribeNewHeads: {
          alias: [
            "chain_unsubscribeNewHeads",
            "subscribe_newHead",
            "unsubscribe_newHead",
          ],
          description: "Retrieves the best header via subscription",
          params: [],
          pubsub: ["newHead", "subscribeNewHead", "unsubscribeNewHead"],
          type: "Header",
        },
      };
    },
    9675: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9676);
      t.default = { rpc: n.rpc, types: { PrefixedStorageKey: "StorageKey" } };
    },
    9676: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        getKeys: {
          description:
            "Returns the keys with prefix from a child storage, leave empty to get all the keys",
          params: [
            { name: "childKey", type: "PrefixedStorageKey" },
            { name: "prefix", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "Hash" },
          ],
          type: "Vec<StorageKey>",
        },
        getKeysPaged: {
          alias: ["childstate_getKeysPagedAt"],
          description:
            "Returns the keys with prefix from a child storage with pagination support",
          params: [
            { name: "childKey", type: "PrefixedStorageKey" },
            { name: "prefix", type: "StorageKey" },
            { name: "count", type: "u32" },
            { isOptional: !0, name: "startKey", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "Hash" },
          ],
          type: "Vec<StorageKey>",
        },
        getStorage: {
          description:
            "Returns a child storage entry at a specific block state",
          params: [
            { name: "childKey", type: "PrefixedStorageKey" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "Hash" },
          ],
          type: "Option<StorageData>",
        },
        getStorageEntries: {
          description:
            "Returns child storage entries for multiple keys at a specific block state",
          params: [
            { name: "childKey", type: "PrefixedStorageKey" },
            { name: "keys", type: "Vec<StorageKey>" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "Hash" },
          ],
          type: "Vec<Option<StorageData>>",
        },
        getStorageHash: {
          description:
            "Returns the hash of a child storage entry at a block state",
          params: [
            { name: "childKey", type: "PrefixedStorageKey" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "Hash" },
          ],
          type: "Option<Hash>",
        },
        getStorageSize: {
          description:
            "Returns the size of a child storage entry at a block state",
          params: [
            { name: "childKey", type: "PrefixedStorageKey" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "Hash" },
          ],
          type: "Option<u64>",
        },
      };
    },
    9677: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9678),
        r = a(9679);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: { StorageKind: { _enum: { PERSISTENT: 1, LOCAL: 2 } } },
      };
    },
    9678: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        localStorageGet: {
          description: "Get offchain local storage under given key and prefix",
          isUnsafe: !0,
          params: [
            { name: "kind", type: "StorageKind" },
            { name: "key", type: "Bytes" },
          ],
          type: "Option<Bytes>",
        },
        localStorageSet: {
          description: "Set offchain local storage under given key and prefix",
          isUnsafe: !0,
          params: [
            { name: "kind", type: "StorageKind" },
            { name: "key", type: "Bytes" },
            { name: "value", type: "Bytes" },
          ],
          type: "Null",
        },
      };
    },
    9679: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      t.runtime = {
        OffchainWorkerApi: [
          {
            methods: {
              offchain_worker: {
                description:
                  "Starts the off-chain task for given block header.",
                params: [{ name: "header", type: "Header" }],
                type: "Null",
              },
            },
            version: 2,
          },
          {
            methods: {
              offchain_worker: {
                description:
                  "Starts the off-chain task for given block header.",
                params: [{ name: "number", type: "BlockNumber" }],
                type: "Null",
              },
            },
            version: 1,
          },
        ],
      };
    },
    9680: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9681),
        r = a(9682);
      t.default = {
        rpc: n.rpc,
        runtime: r.runtime,
        types: {
          FeeDetails: { inclusionFee: "Option<InclusionFee>" },
          InclusionFee: {
            baseFee: "Balance",
            lenFee: "Balance",
            adjustedWeightFee: "Balance",
          },
          RuntimeDispatchInfo: {
            weight: "Weight",
            class: "DispatchClass",
            partialFee: "Balance",
          },
          RuntimeDispatchInfoV1: {
            weight: "WeightV1",
            class: "DispatchClass",
            partialFee: "Balance",
          },
          RuntimeDispatchInfoV2: {
            weight: "WeightV2",
            class: "DispatchClass",
            partialFee: "Balance",
          },
        },
      };
    },
    9681: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        queryFeeDetails: {
          deprecated:
            "Use `api.call.transactionPaymentApi.queryFeeDetails` instead",
          description: "Query the detailed fee of a given encoded extrinsic",
          params: [
            { name: "extrinsic", type: "Bytes" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "FeeDetails",
        },
        queryInfo: {
          deprecated: "Use `api.call.transactionPaymentApi.queryInfo` instead",
          description: "Retrieves the fee information for an encoded extrinsic",
          params: [
            { name: "extrinsic", type: "Bytes" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "RuntimeDispatchInfoV1",
        },
      };
    },
    9682: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtime = void 0));
      const n = {
          query_fee_details: {
            description: "The transaction fee details",
            params: [
              { name: "uxt", type: "Extrinsic" },
              { name: "len", type: "u32" },
            ],
            type: "FeeDetails",
          },
        },
        r = {
          query_call_fee_details: {
            description: "The call fee details",
            params: [
              { name: "call", type: "Call" },
              { name: "len", type: "u32" },
            ],
            type: "FeeDetails",
          },
        },
        o = {
          query_info: {
            description: "The transaction info",
            params: [
              { name: "uxt", type: "Extrinsic" },
              { name: "len", type: "u32" },
            ],
            type: "RuntimeDispatchInfo",
          },
        },
        i = {
          query_call_info: {
            description: "The call info",
            params: [
              { name: "call", type: "Call" },
              { name: "len", type: "u32" },
            ],
            type: "RuntimeDispatchInfo",
          },
        },
        s = {
          query_length_to_fee: {
            description:
              "Query the output of the current LengthToFee given some input",
            params: [{ name: "length", type: "u32" }],
            type: "Balance",
          },
          query_weight_to_fee: {
            description:
              "Query the output of the current WeightToFee given some input",
            params: [{ name: "weight", type: "Weight" }],
            type: "Balance",
          },
        };
      t.runtime = {
        TransactionPaymentApi: [
          { methods: { ...s, ...o, ...n }, version: 4 },
          { methods: { ...s, ...o, ...n }, version: 3 },
          { methods: { ...o, ...n }, version: 2 },
          {
            methods: {
              query_info: {
                description: "The transaction info",
                params: [
                  { name: "uxt", type: "Extrinsic" },
                  { name: "len", type: "u32" },
                ],
                type: "RuntimeDispatchInfo",
              },
              ...n,
            },
            version: 1,
          },
        ],
        TransactionPaymentCallApi: [
          { methods: { ...s, ...i, ...r }, version: 3 },
          { methods: { ...i, ...r }, version: 2 },
          {
            methods: {
              CALL: {
                description: "The call info",
                params: [
                  { name: "call", type: "Call" },
                  { name: "len", type: "u32" },
                ],
                type: "RuntimeDispatchInfo",
              },
              ...r,
            },
            version: 1,
          },
        ],
      };
    },
    9683: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(9684);
      t.default = {
        rpc: n.rpc,
        types: {
          ApiId: "[u8; 8]",
          BlockTrace: {
            blockHash: "Text",
            parentHash: "Text",
            tracingTargets: "Text",
            storageKeys: "Text",
            spans: "Vec<BlockTraceSpan>",
            events: "Vec<BlockTraceEvent>",
          },
          BlockTraceEvent: {
            target: "Text",
            data: "BlockTraceEventData",
            parentId: "Option<u64>",
          },
          BlockTraceEventData: { stringValues: "HashMap<Text, Text>" },
          BlockTraceSpan: {
            id: "u64",
            parentId: "Option<u64>",
            name: "Text",
            target: "Text",
            wasm: "bool",
          },
          KeyValueOption: "(StorageKey, Option<StorageData>)",
          MigrationStatusResult: {
            topRemainingToMigrate: "u64",
            childRemainingToMigrate: "u64",
          },
          ReadProof: { at: "Hash", proof: "Vec<Bytes>" },
          RuntimeVersionApi: "(ApiId, u32)",
          RuntimeVersion: {
            specName: "Text",
            implName: "Text",
            authoringVersion: "u32",
            specVersion: "u32",
            implVersion: "u32",
            apis: "Vec<RuntimeVersionApi>",
            transactionVersion: "u32",
            stateVersion: "u8",
          },
          RuntimeVersionPre4: {
            specName: "Text",
            implName: "Text",
            authoringVersion: "u32",
            specVersion: "u32",
            implVersion: "u32",
            apis: "Vec<RuntimeVersionApi>",
            transactionVersion: "u32",
          },
          RuntimeVersionPre3: {
            specName: "Text",
            implName: "Text",
            authoringVersion: "u32",
            specVersion: "u32",
            implVersion: "u32",
            apis: "Vec<RuntimeVersionApi>",
          },
          RuntimeVersionPartial: {
            specName: "Text",
            specVersion: "u32",
            apis: "Vec<RuntimeVersionApi>",
          },
          SpecVersion: "u32",
          StorageChangeSet: { block: "Hash", changes: "Vec<KeyValueOption>" },
          TraceBlockResponse: {
            _enum: { TraceError: "TraceError", BlockTrace: "BlockTrace" },
          },
          TraceError: { error: "Text" },
        },
      };
    },
    9684: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.rpc = void 0));
      t.rpc = {
        call: {
          alias: ["state_callAt"],
          description: "Perform a call to a builtin on the chain",
          params: [
            { name: "method", type: "Text" },
            { name: "data", type: "Bytes" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Bytes",
        },
        getChildKeys: {
          description:
            "Retrieves the keys with prefix of a specific child storage",
          params: [
            { name: "childStorageKey", type: "StorageKey" },
            { name: "childDefinition", type: "StorageKey" },
            { name: "childType", type: "u32" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Vec<StorageKey>",
        },
        getChildReadProof: {
          description:
            "Returns proof of storage for child key entries at a specific block state.",
          params: [
            { name: "childStorageKey", type: "PrefixedStorageKey" },
            { name: "keys", type: "Vec<StorageKey>" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "ReadProof",
        },
        getChildStorage: {
          description: "Retrieves the child storage for a key",
          params: [
            { name: "childStorageKey", type: "StorageKey" },
            { name: "childDefinition", type: "StorageKey" },
            { name: "childType", type: "u32" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "StorageData",
        },
        getChildStorageHash: {
          description: "Retrieves the child storage hash",
          params: [
            { name: "childStorageKey", type: "StorageKey" },
            { name: "childDefinition", type: "StorageKey" },
            { name: "childType", type: "u32" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Hash",
        },
        getChildStorageSize: {
          description: "Retrieves the child storage size",
          params: [
            { name: "childStorageKey", type: "StorageKey" },
            { name: "childDefinition", type: "StorageKey" },
            { name: "childType", type: "u32" },
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "u64",
        },
        getKeys: {
          deprecated: "Use `api.rpc.state.getKeysPaged` to retrieve keys",
          description: "Retrieves the keys with a certain prefix",
          params: [
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Vec<StorageKey>",
        },
        getKeysPaged: {
          alias: ["state_getKeysPagedAt"],
          description: "Returns the keys with prefix with pagination support.",
          params: [
            { name: "key", type: "StorageKey" },
            { name: "count", type: "u32" },
            { isOptional: !0, name: "startKey", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Vec<StorageKey>",
        },
        getMetadata: {
          description: "Returns the runtime metadata",
          params: [
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Metadata",
        },
        getPairs: {
          deprecated: "Use `api.rpc.state.getKeysPaged` to retrieve keys",
          description:
            "Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)",
          isUnsafe: !0,
          params: [
            { name: "prefix", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Vec<KeyValue>",
        },
        getReadProof: {
          description:
            "Returns proof of storage entries at a specific block state",
          params: [
            { name: "keys", type: "Vec<StorageKey>" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "ReadProof",
        },
        getRuntimeVersion: {
          alias: ["chain_getRuntimeVersion"],
          description: "Get the runtime version",
          params: [
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "RuntimeVersion",
        },
        getStorage: {
          alias: ["state_getStorageAt"],
          description: "Retrieves the storage for a key",
          params: [
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "StorageData",
        },
        getStorageHash: {
          alias: ["state_getStorageHashAt"],
          description: "Retrieves the storage hash",
          params: [
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Hash",
        },
        getStorageSize: {
          alias: ["state_getStorageSizeAt"],
          description: "Retrieves the storage size",
          params: [
            { name: "key", type: "StorageKey" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "u64",
        },
        queryStorage: {
          description:
            "Query historical storage entries (by key) starting from a start block",
          isUnsafe: !0,
          params: [
            { name: "keys", type: "Vec<StorageKey>" },
            { name: "fromBlock", type: "Hash" },
            { isOptional: !0, name: "toBlock", type: "BlockHash" },
          ],
          type: "Vec<StorageChangeSet>",
        },
        queryStorageAt: {
          description:
            "Query storage entries (by key) starting at block hash given as the second parameter",
          params: [
            { name: "keys", type: "Vec<StorageKey>" },
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "Vec<StorageChangeSet>",
        },
        subscribeRuntimeVersion: {
          alias: [
            "chain_subscribeRuntimeVersion",
            "chain_unsubscribeRuntimeVersion",
          ],
          description: "Retrieves the runtime version via subscription",
          params: [],
          pubsub: [
            "runtimeVersion",
            "subscribeRuntimeVersion",
            "unsubscribeRuntimeVersion",
          ],
          type: "RuntimeVersion",
        },
        subscribeStorage: {
          description: "Subscribes to storage changes for the provided keys",
          params: [{ isOptional: !0, name: "keys", type: "Vec<StorageKey>" }],
          pubsub: ["storage", "subscribeStorage", "unsubscribeStorage"],
          type: "StorageChangeSet",
        },
        traceBlock: {
          description:
            "Provides a way to trace the re-execution of a single block",
          isUnsafe: !0,
          params: [
            { name: "block", type: "Hash" },
            { name: "targets", type: "Option<Text>" },
            { name: "storageKeys", type: "Option<Text>" },
            { name: "methods", type: "Option<Text>" },
          ],
          type: "TraceBlockResponse",
        },
        trieMigrationStatus: {
          description: "Check current migration state",
          isUnsafe: !0,
          params: [
            { isHistoric: !0, isOptional: !0, name: "at", type: "BlockHash" },
          ],
          type: "MigrationStatusResult",
        },
      };
    },
    9685: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createUnchecked = o));
      var n = a(2757);
      function r(e, t) {
        return e.callIndex[0] === t[0] && e.callIndex[1] === t[1];
      }
      function o(e, t, a, o) {
        const i = o.fields,
          s = (0, n.stringCamelCase)(o.name),
          c = function () {
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            if (i.length !== r.length)
              throw new Error(
                `Extrinsic ${t}.${s} expects ${i.length} arguments, got ${r.length}.`,
              );
            return e.createTypeUnsafe("Call", [{ args: r, callIndex: a }, o]);
          };
        return (
          (c.is = (e) => r(e, a)),
          (c.callIndex = a),
          (c.meta = o),
          (c.method = s),
          (c.section = t),
          (c.toJSON = () => o.toJSON()),
          c
        );
      }
    },
    9686: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV10 = s));
      var n = a(2757);
      function r(e, t) {
        return t.toNumber() >= 2
          ? e.createTypeUnsafe("StorageHasherV10", [t.toNumber() + 1])
          : e.createTypeUnsafe("StorageHasherV10", [t]);
      }
      function o(e, t) {
        return t.isMap
          ? [
              (0, n.objectSpread)({}, t.asMap, {
                hasher: r(e, t.asMap.hasher),
              }),
              1,
            ]
          : t.isDoubleMap
            ? [
                (0, n.objectSpread)({}, t.asDoubleMap, {
                  hasher: r(e, t.asDoubleMap.hasher),
                  key2Hasher: r(e, t.asDoubleMap.key2Hasher),
                }),
                2,
              ]
            : [t.asPlain, 0];
      }
      function i(e, t) {
        const a = t.storage.unwrapOr(null);
        return e.createTypeUnsafe("ModuleMetadataV10", [
          (0, n.objectSpread)({}, t, {
            storage: a
              ? (0, n.objectSpread)({}, a, {
                  items: a.items.map((t) =>
                    (0, n.objectSpread)({}, t, {
                      type: e.createTypeUnsafe(
                        "StorageEntryTypeV10",
                        o(e, t.type),
                      ),
                    }),
                  ),
                })
              : null,
          }),
        ]);
      }
      function s(e, t) {
        let { modules: a } = t;
        return e.createTypeUnsafe("MetadataV10", [
          { modules: a.map((t) => i(e, t)) },
        ]);
      }
    },
    9687: function (e, t, a) {
      "use strict";
      function n(e, t) {
        let { modules: a } = t;
        return e.createTypeUnsafe("MetadataV11", [
          { extrinsic: { signedExtensions: [], version: 0 }, modules: a },
        ]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV11 = n));
    },
    9688: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV12 = r));
      var n = a(2757);
      function r(e, t) {
        let { extrinsic: a, modules: r } = t;
        return e.createTypeUnsafe("MetadataV12", [
          {
            extrinsic: a,
            modules: r.map((t) =>
              e.createTypeUnsafe("ModuleMetadataV12", [
                (0, n.objectSpread)({}, t, { index: 255 }),
              ]),
            ),
          },
        ]);
      }
    },
    9689: function (e, t, a) {
      "use strict";
      function n(e, t) {
        return e.createTypeUnsafe("MetadataV13", [t]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV13 = n));
    },
    9690: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV14 = S));
      var n = a(2757),
        r = a(9691),
        o = a(6535);
      const i = [
        ["<", ">"],
        ["<", ","],
        [",", ">"],
        ["(", ")"],
        ["(", ","],
        [",", ","],
        [",", ")"],
      ];
      function s(e, t) {
        const a = t.toString(),
          n = e.findIndex((e) => {
            let { def: t } = e;
            return t.HistoricMetaCompat === a;
          });
        return -1 !== n ? n : e.push({ def: { HistoricMetaCompat: a } }) - 1;
      }
      function c(e) {
        for (
          let t = 0, a = arguments.length <= 1 ? 0 : arguments.length - 1;
          t < a;
          t++
        )
          s(
            e,
            t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1],
          );
      }
      function u(e, t) {
        return e.push({ def: { Tuple: t } }) - 1;
      }
      function l(e, t, a, n) {
        return (
          a.push({
            def: { Variant: { variants: n } },
            path: ["pallet_" + e.toString(), "pallet", t],
          }) - 1
        );
      }
      function d(e, t, a) {
        e.register({
          OriginCaller: {
            _enum: t
              .map((e, t) => [
                e.name.toString(),
                a >= 12 ? e.index.toNumber() : t,
              ])
              .sort((e, t) => e[1] - t[1])
              .reduce((e, t) => {
                let [a, n] = t;
                for (let r = Object.keys(e).length; r < n; r++)
                  e["Empty" + r] = "Null";
                return ((e[a] = o.knownOrigins[a] || "Null"), e);
              }, {}),
          },
        });
      }
      function p(e, t) {
        t.forEach((t) => {
          const a = Object.keys(e).find((e) => t.eq(e));
          if (a) t.setOverride(e[a]);
          else {
            const a = t.toString(),
              n = Object.entries(e).reduce((e, t) => {
                let [a, n] = t;
                return i.reduce((e, t) => {
                  let [r, o] = t;
                  return e.replace(`${r}${a}${o}`, `${r}${n}${o}`);
                }, e);
              }, a);
            a !== n && t.setOverride(n);
          }
        });
      }
      function m(e, t, a, n, r) {
        const o = n.map((a, n) => {
          let { args: o, docs: i, name: c } = a;
          return (
            p(
              r,
              o.map((e) => {
                let { type: t } = e;
                return t;
              }),
            ),
            t.createTypeUnsafe("SiVariant", [
              {
                docs: i,
                fields: o.map((a) => {
                  let { name: n, type: r } = a;
                  return t.createTypeUnsafe("SiField", [
                    { name: n, type: s(e, r) },
                  ]);
                }),
                index: n,
                name: c,
              },
            ])
          );
        });
        return t.createTypeUnsafe("PalletCallMetadataV14", [
          { type: l(a, "Call", e, o) },
        ]);
      }
      function y(e, t, a, n) {
        return a.map((a) => {
          let { docs: r, name: o, type: i, value: c } = a;
          return (
            p(n, [i]),
            t.createTypeUnsafe("PalletConstantMetadataV14", [
              { docs: r, name: o, type: s(e, i), value: c },
            ])
          );
        });
      }
      function h(e, t, a, n, r) {
        const o = n.map((e, a) => {
          let { docs: n, name: r } = e;
          return t.createTypeUnsafe("SiVariant", [
            { docs: n, fields: [], index: a, name: r },
          ]);
        });
        return t.createTypeUnsafe("PalletErrorMetadataV14", [
          { type: l(a, "Error", e, o) },
        ]);
      }
      function f(e, t, a, n, r) {
        const o = n.map((a, n) => {
          let { args: o, docs: i, name: c } = a;
          return (
            p(r, o),
            t.createTypeUnsafe("SiVariant", [
              {
                docs: i,
                fields: o.map((a) =>
                  t.createTypeUnsafe("SiField", [{ type: s(e, a) }]),
                ),
                index: n,
                name: c,
              },
            ])
          );
        });
        return t.createTypeUnsafe("PalletEventMetadataV14", [
          { type: l(a, "Event", e, o) },
        ]);
      }
      function g(e, t, a, n) {
        let { hashers: r, isLinked: o, isOptional: i, keys: c, value: l } = n;
        return (
          p(a, [l, ...(Array.isArray(c) ? c : [c])]),
          t.createTypeUnsafe("StorageEntryTypeV14", [
            {
              Map: {
                hashers: r,
                key:
                  1 === r.length
                    ? s(e, c[0])
                    : u(
                        e,
                        c.map((t) => s(e, t)),
                      ),
                value: s(
                  e,
                  o
                    ? `(${i ? `Option<${l.toString()}>` : l.toString()}, Linkage<${c[0].toString()}>)`
                    : l,
                ),
              },
            },
          ])
        );
      }
      function b(e, t, a, n) {
        let { items: r, prefix: o } = a;
        return t.createTypeUnsafe("PalletStorageMetadataV14", [
          {
            items: r.map((a) => {
              let r,
                { docs: o, fallback: i, modifier: c, name: u, type: l } = a;
              if (l.isPlain) {
                const a = l.asPlain;
                (p(n, [a]),
                  (r = t.createTypeUnsafe("StorageEntryTypeV14", [
                    { Plain: s(e, a) },
                  ])));
              } else if (l.isMap) {
                const a = l.asMap;
                r = g(e, t, n, {
                  hashers: [a.hasher],
                  isLinked: a.linked.isTrue,
                  isOptional: c.isOptional,
                  keys: [a.key],
                  value: a.value,
                });
              } else if (l.isDoubleMap) {
                const a = l.asDoubleMap;
                r = g(e, t, n, {
                  hashers: [a.hasher, a.key2Hasher],
                  isLinked: !1,
                  isOptional: c.isOptional,
                  keys: [a.key1, a.key2],
                  value: a.value,
                });
              } else {
                const a = l.asNMap;
                r = g(e, t, n, {
                  hashers: a.hashers,
                  isLinked: !1,
                  isOptional: c.isOptional,
                  keys: a.keyVec,
                  value: a.value,
                });
              }
              return t.createTypeUnsafe("StorageEntryMetadataV14", [
                { docs: o, fallback: i, modifier: c, name: u, type: r },
              ]);
            }),
            prefix: o,
          },
        ]);
      }
      function V(e, t) {
        let { signedExtensions: a, version: n } = t;
        return e.createTypeUnsafe("ExtrinsicMetadataV14", [
          {
            signedExtensions: a.map((e) => ({ identifier: e, type: 0 })),
            type: 0,
            version: n,
          },
        ]);
      }
      function v(e, t, a, o) {
        let { calls: i, constants: s, errors: c, events: u, storage: l } = o;
        const d = (0, r.getAliasTypes)(t, (0, n.stringCamelCase)(a.name));
        return t.createTypeUnsafe("PalletMetadataV14", [
          {
            calls: i && m(e, t, a.name, i, d),
            constants: y(e, t, s, d),
            errors: c && h(e, t, a.name, c, d),
            events: u && f(e, t, a.name, u, d),
            index: a.index,
            name: a.name,
            storage: l && b(e, t, l, d),
          },
        ]);
      }
      function S(e, t, a) {
        const n = [];
        (c(n, "Null", "u8", "u16", "u32", "u64"), d(e, t.modules, a));
        const r = V(e, t.extrinsic),
          o = t.modules.map((t) =>
            v(n, e, t, {
              calls: t.calls.unwrapOr(null),
              constants: t.constants,
              errors: t.errors.length ? t.errors : null,
              events: t.events.unwrapOr(null),
              storage: t.storage.unwrapOr(null),
            }),
          );
        return e.createTypeUnsafe("MetadataV14", [
          {
            extrinsic: r,
            lookup: {
              types: n.map((t, a) =>
                e.createTypeUnsafe("PortableType", [{ id: a, type: t }]),
              ),
            },
            pallets: o,
          },
        ]);
      }
    },
    9691: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAliasTypes = r));
      const n = {
        assets: {
          Approval: "AssetApproval",
          ApprovalKey: "AssetApprovalKey",
          Balance: "TAssetBalance",
          DestroyWitness: "AssetDestroyWitness",
        },
        babe: { EquivocationProof: "BabeEquivocationProof" },
        balances: { Status: "BalanceStatus" },
        beefy: { AuthorityId: "BeefyId" },
        contracts: { StorageKey: "ContractStorageKey" },
        electionProviderMultiPhase: { Phase: "ElectionPhase" },
        ethereum: {
          Block: "EthBlock",
          Header: "EthHeader",
          Receipt: "EthReceipt",
          Transaction: "EthTransaction",
          TransactionStatus: "EthTransactionStatus",
        },
        evm: { Account: "EvmAccount", Log: "EvmLog", Vicinity: "EvmVicinity" },
        grandpa: {
          Equivocation: "GrandpaEquivocation",
          EquivocationProof: "GrandpaEquivocationProof",
        },
        identity: { Judgement: "IdentityJudgement" },
        inclusion: { ValidatorIndex: "ParaValidatorIndex" },
        paraDisputes: { ValidatorIndex: "ParaValidatorIndex" },
        paraInclusion: { ValidatorIndex: "ParaValidatorIndex" },
        paraScheduler: { ValidatorIndex: "ParaValidatorIndex" },
        paraShared: { ValidatorIndex: "ParaValidatorIndex" },
        parachains: { Id: "ParaId" },
        parasDisputes: { ValidatorIndex: "ParaValidatorIndex" },
        parasInclusion: { ValidatorIndex: "ParaValidatorIndex" },
        parasScheduler: { ValidatorIndex: "ParaValidatorIndex" },
        parasShared: { ValidatorIndex: "ParaValidatorIndex" },
        proposeParachain: { Proposal: "ParachainProposal" },
        proxy: { Announcement: "ProxyAnnouncement" },
        scheduler: { ValidatorIndex: "ParaValidatorIndex" },
        shared: { ValidatorIndex: "ParaValidatorIndex" },
        society: { Judgement: "SocietyJudgement", Vote: "SocietyVote" },
        staking: { Compact: "CompactAssignments" },
        treasury: { Proposal: "TreasuryProposal" },
        xcm: { AssetId: "XcmAssetId" },
        xcmPallet: { AssetId: "XcmAssetId" },
      };
      function r(e, t) {
        var a, r, o;
        let { knownTypes: i } = e;
        return {
          ...(null !== (a = n[t]) && void 0 !== a ? a : {}),
          ...(null !==
            (r = null === (o = i.typesAlias) || void 0 === o ? void 0 : o[t]) &&
          void 0 !== r
            ? r
            : {}),
        };
      }
    },
    9692: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV15 = r));
      var n = a(2757);
      function r(e, t, a) {
        var r;
        const o = t.lookup.paramTypes.SpRuntimeUncheckedExtrinsic;
        return e.createTypeUnsafe("MetadataV15", [
          (0, n.objectSpread)({}, t, {
            extrinsic: e.createTypeUnsafe("ExtrinsicMetadataV15", [
              (0, n.objectSpread)({}, t.extrinsic, {
                addressType:
                  null === o || void 0 === o ? void 0 : o[0].type.unwrapOr(0),
                callType:
                  null === o || void 0 === o ? void 0 : o[1].type.unwrapOr(0),
                extraType:
                  null === o || void 0 === o ? void 0 : o[3].type.unwrapOr(0),
                signatureType:
                  null === o || void 0 === o ? void 0 : o[2].type.unwrapOr(0),
              }),
            ]),
            outerEnums: e.createTypeUnsafe("OuterEnums15", [
              {
                callType:
                  null === o || void 0 === o ? void 0 : o[1].type.unwrapOr(0),
                eventType:
                  null === (r = t.lookup.paramTypes.FrameSystemEventRecord) ||
                  void 0 === r
                    ? void 0
                    : r[0].type.unwrapOr(0),
              },
            ]),
          }),
        ]);
      }
    },
    9693: function (e, t, a) {
      "use strict";
      function n(e, t, a) {
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toLatest = n));
    },
    9694: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MagicNumber = t.MAGIC_NUMBER = void 0));
      var n = a(2855);
      const r = (t.MAGIC_NUMBER = 1635018093);
      class MagicNumber extends n.U32 {
        constructor(e, t) {
          if ((super(e, t), !this.isEmpty && !this.eq(r)))
            throw new Error(
              `MagicNumber mismatch: expected ${e.createTypeUnsafe("u32", [r]).toHex()}, found ${this.toHex()}`,
            );
        }
      }
      t.MagicNumber = MagicNumber;
    },
    9695: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TO_CALLS_VERSION = t.LATEST_VERSION = t.KNOWN_VERSIONS = void 0));
      const n = (t.KNOWN_VERSIONS = [15, 14, 13, 12, 11, 10, 9]);
      ((t.LATEST_VERSION = n[0]), (t.TO_CALLS_VERSION = 14));
    },
    9696: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decorateConstants = o));
      var n = a(2757),
        r = a(4537);
      function o(e, t, a) {
        let { pallets: o } = t;
        const i = {};
        for (let s = 0, c = o.length; s < c; s++) {
          const { constants: t, name: a } = o[s];
          t.isEmpty ||
            (0, n.lazyMethod)(i, (0, n.stringCamelCase)(a), () =>
              (0, n.lazyMethods)(
                {},
                t,
                (t) => {
                  const a = e.createTypeUnsafe(e.createLookupType(t.type), [
                    (0, n.hexToU8a)(t.value.toHex()),
                  ]);
                  return ((a.meta = t), a);
                },
                r.objectNameToCamel,
              ),
            );
        }
        return i;
      }
    },
    9697: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decorateEvents = c),
        (t.filterEventsSome = s));
      var n = a(2757),
        r = a(4534),
        o = a(6538),
        i = a(4537);
      function s(e) {
        let { events: t } = e;
        return t.isSome;
      }
      function c(e, t, a) {
        let { lookup: c, pallets: u } = t;
        const l = {},
          d = u.filter(s);
        for (let s = 0, p = d.length; s < p; s++) {
          const { events: t, index: u, name: p } = d[s],
            m = a >= 12 ? u.toNumber() : s;
          (0, n.lazyMethod)(l, (0, n.stringCamelCase)(p), () =>
            (0, r.lazyVariants)(c, t.unwrap(), i.objectNameToString, (t) => ({
              is: (e) =>
                (0, n.isCodec)(e) &&
                (0, n.isU8a)(e.index) &&
                m === e.index[0] &&
                t.index.eq(e.index[1]),
              meta: e.createTypeUnsafe("EventMetadataLatest", [
                (0, o.variantToMeta)(c, t),
              ]),
            })),
          );
        }
        return l;
      }
    },
    9698: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decorateStorage = d));
      var n = a(2757),
        r = a(4537),
        o = a(6539),
        i = a(9700),
        s = a(6540);
      const c = "palletVersion",
        u = ":__STORAGE_VERSION__:",
        l = {
          docs: "Returns the current pallet version from storage",
          type: "u16",
        };
      function d(e, t, a) {
        let { pallets: d } = t;
        const p = (0, i.getStorage)(e);
        for (let i = 0, m = d.length; i < m; i++) {
          const { name: t, storage: a } = d[i];
          if (a.isSome) {
            const i = (0, n.stringCamelCase)(t),
              { items: d, prefix: m } = a.unwrap(),
              y = m.toString();
            (0, n.lazyMethod)(p, i, () =>
              (0, n.lazyMethods)(
                {
                  palletVersion: (0, s.createRuntimeFunction)(
                    { method: c, prefix: y, section: i },
                    (0, o.createKeyRaw)(
                      e,
                      { method: u, prefix: t.toString() },
                      o.NO_RAW_ARGS,
                    ),
                    l,
                  )(e),
                },
                d,
                (t) =>
                  (0, o.createFunction)(
                    e,
                    {
                      meta: t,
                      method: t.name.toString(),
                      prefix: y,
                      section: i,
                    },
                    {},
                  ),
                r.objectNameToCamel,
              ),
            );
          }
        }
        return p;
      }
    },
    9699: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getHasher = s));
      var n = a(2757),
        r = a(2961);
      const o = (e) => (0, r.xxhashAsU8a)(e, 128),
        i = {
          Blake2_128: (e) => (0, r.blake2AsU8a)(e, 128),
          Blake2_128Concat: (e) =>
            (0, n.u8aConcat)((0, r.blake2AsU8a)(e, 128), (0, n.u8aToU8a)(e)),
          Blake2_256: (e) => (0, r.blake2AsU8a)(e, 256),
          Identity: (e) => (0, n.u8aToU8a)(e),
          Twox128: (e) => (0, r.xxhashAsU8a)(e, 128),
          Twox256: (e) => (0, r.xxhashAsU8a)(e, 256),
          Twox64Concat: (e) =>
            (0, n.u8aConcat)((0, r.xxhashAsU8a)(e, 64), (0, n.u8aToU8a)(e)),
        };
      function s(e) {
        return i[e.type] || o;
      }
    },
    9700: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getStorage = r));
      var n = a(9701);
      function r(e) {
        const t = {},
          a = Object.entries(n.substrate);
        for (let n = 0, r = a.length; n < r; n++) t[a[n][0]] = a[n][1](e);
        return { substrate: t };
      }
    },
    9701: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.substrate = void 0));
      var n = a(6540);
      const r = "Substrate",
        o = "substrate";
      function i(e, t, a) {
        return (0, n.createRuntimeFunction)(
          { method: e, prefix: r, section: o },
          t,
          a,
        );
      }
      t.substrate = {
        changesTrieConfig: i("changesTrieConfig", ":changes_trie", {
          docs: "Changes trie configuration is stored under this key.",
          type: "u32",
        }),
        childStorageKeyPrefix: i("childStorageKeyPrefix", ":child_storage:", {
          docs: "Prefix of child storage keys.",
          type: "u32",
        }),
        code: i("code", ":code", {
          docs: "Wasm code of the runtime.",
          type: "Bytes",
        }),
        extrinsicIndex: i("extrinsicIndex", ":extrinsic_index", {
          docs: "Current extrinsic index (u32) is stored under this key.",
          type: "u32",
        }),
        heapPages: i("heapPages", ":heappages", {
          docs: "Number of wasm linear memory pages required for execution of the runtime.",
          type: "u64",
        }),
        intrablockEntropy: i("intrablockEntropy", ":intrablock_entropy", {
          docs: "Current intra-block entropy (a universally unique `[u8; 32]` value) is stored here.",
          type: "[u8; 32]",
        }),
      };
    },
    9702: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PortableRegistry = void 0));
      var r = n(a(128)),
        o = a(2855),
        i = a(3123),
        s = a(2757);
      const c = (0, s.logger)("PortableRegistry"),
        u = { toNumber: () => -1 },
        l = { Char: "u32", Str: "Text" },
        d = v([
          "sp_core::crypto::AccountId32",
          "sp_runtime::generic::era::Era",
          "sp_runtime::multiaddress::MultiAddress",
          "fp_account::AccountId20",
          "account::AccountId20",
          "polkadot_runtime_common::claims::EthereumAddress",
          "frame_support::weights::weight_v2::Weight",
          "sp_weights::weight_v2::Weight",
          "*_democracy::vote::Vote",
          "*_conviction_voting::vote::Vote",
          "*_identity::types::Data",
          "sp_core::OpaqueMetadata",
          "sp_core::OpaquePeerId",
          "sp_core::offchain::OpaqueMultiaddr",
          "primitive_types::*",
          "sp_arithmetic::per_things::*",
          "*_runtime::RuntimeCall",
          "*_runtime::RuntimeEvent",
          "ink::env::types::*",
          "ink::primitives::types::*",
          "ink_env::types::*",
          "ink_primitives::types::*",
          "np_runtime::accountname::AccountName",
          "np_runtime::universaladdress::UniversalAddress",
        ]),
        p = v(["pallet_identity::types::BitFlags"]),
        m = ["bitvec::order::Lsb0", "BitOrderLsb0"],
        y = ["bitvec::order::Msb0", "BitOrderMsb0"],
        h = [...m, ...y],
        f = [
          "BoundedBTreeMap",
          "BoundedBTreeSet",
          "BoundedVec",
          "Box",
          "BTreeMap",
          "BTreeSet",
          "Cow",
          "Option",
          "Range",
          "RangeInclusive",
          "Result",
          "WeakBoundedVec",
          "WrapperKeepOpaque",
          "WrapperOpaque",
        ],
        g = ["entries", "keys", "new", "size", "hash", "registry"],
        b = ["generic", "misc", "pallet", "traits", "types"];
      function V(e) {
        const t = e.length,
          a = new Array(t);
        for (let n = 0; n < t; n++) a[n] = e[n].toString();
        return a;
      }
      function v(e) {
        const t = e.length,
          a = new Array(t);
        for (let n = 0; n < t; n++) a[n] = e[n].split("::");
        return a;
      }
      function S(e, t) {
        return (
          e.length === t.length &&
          e.every((e, a) => {
            const n = t[a].toString();
            if ("*" === e || e === n) return !0;
            if (e.includes("*") && e.includes("_") && n.includes("_")) {
              let t = e.split("_"),
                a = n.split("_");
              if ("*" === t[0]) {
                const e = a.indexOf(t[1]);
                -1 !== e && ((t = t.slice(1)), (a = a.slice(e)));
              }
              return (
                (2 === t.length && "*" === t[1] && t[0] === a[0]) || S(t, a)
              );
            }
            return !1;
          })
        );
      }
      function _(e) {
        let { def: t, path: a } = e;
        return [
          "frame_support::weights::weight_v2::Weight",
          "sp_weights::weight_v2::Weight",
        ].includes(a.join("::"))
          ? t.isComposite && 1 !== t.asComposite.fields.length
            ? null
            : "WeightV1"
          : a.length && d.some((e) => S(e, a))
            ? a[a.length - 1].toString()
            : null;
      }
      function C(e, t, a, n, r) {
        void 0 === r && (r = !1);
        const o = n.length;
        if (0 === o || f.includes(n[o - 1].toString())) return null;
        const i = new Array(o),
          c = new Array(o);
        for (let l = 0; l < o; l++) {
          const e = (0, s.stringPascalCase)(
              r ? n[l].replace("pallet_", "") : n[l],
            ),
            t = e.toLowerCase();
          ((i[l] = e), (c[l] = t));
        }
        let u = "";
        for (let s = 0; s < o; s++) {
          const e = c[s];
          (1 === s && b.includes(e)) || (e !== c[s + 1] && (u += i[s]));
        }
        if (
          "RawOrigin" === i[1] &&
          2 === o &&
          2 === a.length &&
          a[1].type.isSome
        ) {
          const t = e[a[1].type.unwrap().toNumber()];
          2 === t.type.path.length && (u = `${u}${t.type.path[1].toString()}`);
        }
        return { lookupIndex: t, name: u, params: a };
      }
      function I(e, t, a) {
        let {
          type: { params: n, path: r },
        } = a;
        return C(e, t, n, r);
      }
      function x(e, t, a) {
        const n = [a[t]];
        for (let r = t + 1, o = a.length; r < o; r++) {
          const t = a[r];
          t.name === e && n.push(t);
        }
        return n;
      }
      function P(e, t) {
        const a = e.length;
        for (let n = 0; n < a; n++) {
          const t = e[n];
          for (let r = n + 1; r < a; r++) {
            const a = e[r];
            if (t.lookupIndex !== a.lookupIndex && t.name === a.name) return !1;
          }
        }
        for (let n = 0; n < a; n++) {
          const a = e[n];
          t[a.lookupIndex] = a.name;
        }
        return !0;
      }
      function T(e, t, a) {
        const n = {};
        return a
          .map((r, o) => {
            const { lookupIndex: i, name: s, params: c } = r;
            if (!s) return null;
            if (n[i]) return r;
            const l = x(s, o, a);
            if (1 === l.length) return r;
            const d = l.some(
              (e) =>
                c.length !== e.params.length ||
                c.some(
                  (t, a) =>
                    !t.name.eq(e.params[a].name) ||
                    t.type.unwrapOr(u).toNumber() !==
                      e.params[a].type.unwrapOr(u).toNumber(),
                ),
            );
            if (!d) return r;
            const p = c.findIndex((e, t) => {
              let { type: a } = e;
              return l.every((e, n) => {
                let { params: r } = e;
                return r[t].type.isSome && (0 === n || !r[t].type.eq(a));
              });
            });
            if (-1 === p) return r;
            const m = l.length,
              y = new Array(m);
            for (let t = 0; t < m; t++) {
              const { lookupIndex: a, name: n, params: r } = l[t],
                { def: o, path: i } = e.getSiType(r[p].type.unwrap());
              if (!o.isPrimitive && !i.length) return null;
              y[t] = {
                lookupIndex: a,
                name: o.isPrimitive
                  ? `${n}${o.asPrimitive.toString()}`
                  : `${n}${i[i.length - 1].toString()}`,
              };
            }
            if (P(y, n)) return r;
            for (let a = 0; a < m; a++) {
              const { lookupIndex: n, name: r, params: o } = l[a],
                { def: i, path: s } = e.getSiType(o[p].type.unwrap()),
                c = C(t, n, o, s, !0);
              if (i.isPrimitive || !c) return null;
              y[a] = { lookupIndex: n, name: `${r}${c.name}` };
            }
            return P(y, n) ? r : null;
          })
          .filter((e) => !!e)
          .map((e) => {
            let { lookupIndex: t, name: a, params: r } = e;
            return { lookupIndex: t, name: n[t] || a, params: r };
          });
      }
      function M(e, t, a, n) {
        if ((e.registry.register(t), n.SpRuntimeUncheckedExtrinsic)) {
          const [t, , r] = n.SpRuntimeUncheckedExtrinsic,
            o = e.getSiType(t.type.unwrap()),
            i = e.getSiType(r.type.unwrap()),
            s = i.path.join("::");
          let c = o.path.join("::");
          const u = "sp_runtime::multiaddress::MultiAddress" === c;
          if (u) {
            const [t] = o.params;
            c = e.getSiType(t.type.unwrap()).path.join("::");
          }
          e.registry.register({
            AccountId:
              c.endsWith("::AccountId20") || c.endsWith("::H160")
                ? "AccountId20"
                : "AccountId32",
            Address: u ? "MultiAddress" : "AccountId",
            ExtrinsicSignature: ["sp_runtime::MultiSignature"].includes(s)
              ? "MultiSignature"
              : a[r.type.unwrap().toNumber()] || "MultiSignature",
          });
        }
      }
      function k(e, t) {
        const a = Object.keys(e).some((e) => !e.startsWith("Pallet")),
          n = {};
        if (e.SpRuntimeUncheckedExtrinsic) {
          const [, { type: t }] = e.SpRuntimeUncheckedExtrinsic;
          n[t.unwrap().toNumber()] = "Call";
        } else
          a &&
            !t &&
            c.warn(
              "Unable to determine runtime Call type, cannot inspect sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic",
            );
        if (e.FrameSystemEventRecord) {
          const [{ type: t }] = e.FrameSystemEventRecord;
          n[t.unwrap().toNumber()] = "Event";
        } else
          a &&
            !t &&
            c.warn(
              "Unable to determine runtime Event type, cannot inspect frame_system::EventRecord",
            );
        return n;
      }
      function O(e, t) {
        const a = [],
          n = {};
        for (let c = 0, u = t.length; c < u; c++) {
          const e = t[c],
            r = e.id.toNumber(),
            o = I(t, r, t[c]);
          (o && a.push(o), (n[r] = e));
        }
        const r = {},
          o = {},
          i = {},
          s = T(e, t, a);
        for (let c = 0, u = s.length; c < u; c++) {
          const { lookupIndex: t, name: a, params: n } = s[c];
          ((o[t] = a), (r[a] = e.registry.createLookupType(t)), (i[a] = n));
        }
        return { lookups: r, names: o, params: i, types: n };
      }
      class PortableRegistry extends o.Struct {
        constructor(e, t, a) {
          (super(e, { types: "Vec<PortableType>" }, t),
            (0, r.default)(this, "__internal__alias", void 0),
            (0, r.default)(this, "__internal__lookups", void 0),
            (0, r.default)(this, "__internal__names", void 0),
            (0, r.default)(this, "__internal__params", void 0),
            (0, r.default)(this, "__internal__typeDefs", {}),
            (0, r.default)(this, "__internal__types", void 0));
          const {
            lookups: n,
            names: o,
            params: i,
            types: s,
          } = O(this, this.types);
          ((this.__internal__alias = k(i, a)),
            (this.__internal__lookups = n),
            (this.__internal__names = o),
            (this.__internal__params = i),
            (this.__internal__types = s));
        }
        get names() {
          return Object.values(this.__internal__names).sort();
        }
        get paramTypes() {
          return this.__internal__params;
        }
        get types() {
          return this.getT("types");
        }
        register() {
          M(
            this,
            this.__internal__lookups,
            this.__internal__names,
            this.__internal__params,
          );
        }
        getName(e) {
          return this.__internal__names[this.__internal__getLookupId(e)];
        }
        getSiType(e) {
          const t = (this.__internal__types || this.types)[
            this.__internal__getLookupId(e)
          ];
          if (!t)
            throw new Error(
              "PortableRegistry: Unable to find type with lookupId " +
                e.toString(),
            );
          return t.type;
        }
        getTypeDef(e) {
          const t = this.__internal__getLookupId(e);
          if (!this.__internal__typeDefs[t]) {
            const a = this.__internal__names[t],
              n = {
                info: i.TypeDefInfo.DoNotConstruct,
                lookupIndex: t,
                lookupName: a,
                type: this.registry.createLookupType(t),
              };
            a && (this.__internal__typeDefs[t] = n);
            const r = this.__internal__extract(this.getSiType(e), t);
            (a || (this.__internal__typeDefs[t] = n),
              Object.keys(r).forEach((e) => {
                ("lookupName" !== e || r[e]) &&
                  (this.__internal__typeDefs[t][e] = r[e]);
              }),
              r.info === i.TypeDefInfo.Plain &&
                ((this.__internal__typeDefs[t].lookupNameRoot =
                  this.__internal__typeDefs[t].lookupName),
                delete this.__internal__typeDefs[t].lookupName));
          }
          return this.__internal__typeDefs[t];
        }
        sanitizeField(e) {
          let t = null,
            a = null;
          return (
            e.isSome &&
              ((t = (0, s.stringCamelCase)(e.unwrap())),
              t.includes("#")
                ? ((a = t), (t = a.replace(/#/g, "_")))
                : g.includes(t) && ((a = t), (t += "_"))),
            [t, a]
          );
        }
        __internal__createSiDef(e) {
          const t = this.getTypeDef(e),
            a = e.toNumber();
          return [
            i.TypeDefInfo.DoNotConstruct,
            i.TypeDefInfo.Enum,
            i.TypeDefInfo.Struct,
          ].includes(t.info) && t.lookupName
            ? {
                docs: t.docs,
                info: i.TypeDefInfo.Si,
                lookupIndex: a,
                lookupName: this.__internal__names[a],
                type: this.registry.createLookupType(e),
              }
            : t;
        }
        __internal__getLookupId(e) {
          if ((0, s.isString)(e)) {
            if (!this.registry.isLookupType(e))
              throw new Error(
                "PortableRegistry: Expected a lookup string type, found " + e,
              );
            return parseInt(e.replace("Lookup", ""), 10);
          }
          return (0, s.isNumber)(e) ? e : e.toNumber();
        }
        __internal__extract(e, t) {
          const a = e.path.join("::");
          let n;
          const r = this.__internal__alias[t] || _(e);
          try {
            if (r) n = this.__internal__extractAliasPath(t, r);
            else
              switch (e.def.type) {
                case "Array":
                  n = this.__internal__extractArray(t, e.def.asArray);
                  break;
                case "BitSequence":
                  n = this.__internal__extractBitSequence(
                    t,
                    e.def.asBitSequence,
                  );
                  break;
                case "Compact":
                  n = this.__internal__extractCompact(t, e.def.asCompact);
                  break;
                case "Composite":
                  n = this.__internal__extractComposite(
                    t,
                    e,
                    e.def.asComposite,
                  );
                  break;
                case "HistoricMetaCompat":
                  n = this.__internal__extractHistoric(
                    t,
                    e.def.asHistoricMetaCompat,
                  );
                  break;
                case "Primitive":
                  n = this.__internal__extractPrimitive(t, e);
                  break;
                case "Sequence":
                  n = this.__internal__extractSequence(t, e.def.asSequence);
                  break;
                case "Tuple":
                  n = this.__internal__extractTuple(t, e.def.asTuple);
                  break;
                case "Variant":
                  n = this.__internal__extractVariant(t, e, e.def.asVariant);
                  break;
                default:
                  (0, s.assertUnreachable)(e.def.type);
              }
          } catch (o) {
            throw new Error(
              `PortableRegistry: ${t}${a ? ` (${a})` : ""}: Error extracting ${(0, s.stringify)(e)}: ${o.message}`,
            );
          }
          return (0, s.objectSpread)({ docs: V(e.docs), namespace: a }, n);
        }
        __internal__extractArray(e, t) {
          let { len: a, type: n } = t;
          const r = a.toNumber();
          if (r > 2048)
            throw new Error(
              "Only support for [Type; <length>], where length <= 2048",
            );
          return (0, i.withTypeString)(this.registry, {
            info: i.TypeDefInfo.VecFixed,
            length: r,
            sub: this.__internal__createSiDef(n),
          });
        }
        __internal__extractBitSequence(e, t) {
          let { bitOrderType: a, bitStoreType: n } = t;
          const r = this.__internal__createSiDef(a),
            o = this.__internal__createSiDef(n),
            [s, c] = h.includes(r.namespace || "") ? [r, o] : [o, r];
          if (!s.namespace || !h.includes(s.namespace))
            throw new Error(
              "Unexpected bitOrder found as " + (s.namespace || "<unknown>"),
            );
          if (c.info !== i.TypeDefInfo.Plain || "u8" !== c.type)
            throw new Error(
              "Only u8 bitStore is currently supported, found " + c.type,
            );
          m.includes(s.namespace);
          return { info: i.TypeDefInfo.Plain, type: "BitVec" };
        }
        __internal__extractCompact(e, t) {
          let { type: a } = t;
          return (0, i.withTypeString)(this.registry, {
            info: i.TypeDefInfo.Compact,
            sub: this.__internal__createSiDef(a),
          });
        }
        __internal__extractComposite(e, t, a) {
          let { params: n, path: r } = t,
            { fields: o } = a;
          if (r.length) {
            const e = r[0].toString(),
              t = r[r.length - 1].toString();
            if (1 === r.length && "BTreeMap" === e) {
              if (2 !== n.length)
                throw new Error(
                  "BTreeMap requires 2 parameters, found " + n.length,
                );
              return (0, i.withTypeString)(this.registry, {
                info: i.TypeDefInfo.BTreeMap,
                sub: n.map((e) => {
                  let { type: t } = e;
                  return this.__internal__createSiDef(t.unwrap());
                }),
              });
            }
            if (1 === r.length && "BTreeSet" === e) {
              if (1 !== n.length)
                throw new Error(
                  "BTreeSet requires 1 parameter, found " + n.length,
                );
              return (0, i.withTypeString)(this.registry, {
                info: i.TypeDefInfo.BTreeSet,
                sub: this.__internal__createSiDef(n[0].type.unwrap()),
              });
            }
            if (["Range", "RangeInclusive"].includes(e)) {
              if (1 !== n.length)
                throw new Error(
                  "Range requires 1 parameter, found " + n.length,
                );
              return (0, i.withTypeString)(this.registry, {
                info:
                  "Range" === e
                    ? i.TypeDefInfo.Range
                    : i.TypeDefInfo.RangeInclusive,
                sub: this.__internal__createSiDef(n[0].type.unwrap()),
                type: e,
              });
            }
            if (["WrapperKeepOpaque", "WrapperOpaque"].includes(t)) {
              if (1 !== n.length)
                throw new Error(
                  "WrapperOpaque requires 1 parameter, found " + n.length,
                );
              return (0, i.withTypeString)(this.registry, {
                info:
                  "WrapperKeepOpaque" === t
                    ? i.TypeDefInfo.WrapperKeepOpaque
                    : i.TypeDefInfo.WrapperOpaque,
                sub: this.__internal__createSiDef(n[0].type.unwrap()),
                type: t,
              });
            }
          }
          return p.some((e) => S(e, r))
            ? this.__internal__extractCompositeSet(e, n, o)
            : this.__internal__extractFields(e, o);
        }
        __internal__extractCompositeSet(e, t, a) {
          if (1 !== t.length || 1 !== a.length)
            throw new Error(
              "Set handling expects param/field as single entries",
            );
          return (0, i.withTypeString)(this.registry, {
            info: i.TypeDefInfo.Set,
            length: this.registry
              .createTypeUnsafe(this.registry.createLookupType(a[0].type), [])
              .bitLength(),
            sub: this.getSiType(t[0].type.unwrap()).def.asVariant.variants.map(
              (e) => {
                let { index: t, name: a } = e;
                return {
                  index: t.toNumber(),
                  info: i.TypeDefInfo.Plain,
                  name: a.toString(),
                  type: "Null",
                };
              },
            ),
          });
        }
        __internal__extractFields(e, t) {
          let a = !0,
            n = !0;
          const r = t.length;
          for (let o = 0; o < r; o++) {
            const { name: e } = t[o];
            ((a = a && e.isSome), (n = n && e.isNone));
          }
          if (!n && !a)
            throw new Error(
              "Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)",
            );
          if (0 === r) return { info: i.TypeDefInfo.Null, type: "Null" };
          if (n && 1 === r) {
            const a = this.__internal__createSiDef(t[0].type);
            return (0, s.objectSpread)(
              {},
              a,
              -1 === e
                ? null
                : {
                    lookupIndex: e,
                    lookupName: this.__internal__names[e],
                    lookupNameRoot: a.lookupName,
                  },
              t[0].typeName.isSome
                ? { typeName: (0, o.sanitize)(t[0].typeName.unwrap()) }
                : null,
            );
          }
          const [c, u] = this.__internal__extractFieldsAlias(t);
          return (0, i.withTypeString)(
            this.registry,
            (0, s.objectSpread)(
              { info: n ? i.TypeDefInfo.Tuple : i.TypeDefInfo.Struct, sub: c },
              u.size ? { alias: u } : null,
              -1 === e
                ? null
                : { lookupIndex: e, lookupName: this.__internal__names[e] },
            ),
          );
        }
        __internal__extractFieldsAlias(e) {
          const t = new Map(),
            a = e.length,
            n = new Array(a);
          for (let r = 0; r < a; r++) {
            const { docs: a, name: i, type: c, typeName: u } = e[r],
              l = this.__internal__createSiDef(c);
            if (i.isNone) n[r] = l;
            else {
              const [e, c] = this.sanitizeField(i);
              (e && c && t.set(e, c),
                (n[r] = (0, s.objectSpread)(
                  { docs: V(a), name: e },
                  l,
                  u.isSome ? { typeName: (0, o.sanitize)(u.unwrap()) } : null,
                )));
            }
          }
          return [n, t];
        }
        __internal__extractHistoric(e, t) {
          return (0, s.objectSpread)(
            { displayName: t.toString(), isFromSi: !0 },
            (0, i.getTypeDef)(t),
          );
        }
        __internal__extractPrimitive(e, t) {
          const a = t.def.asPrimitive.type.toString();
          return { info: i.TypeDefInfo.Plain, type: l[a] || a.toLowerCase() };
        }
        __internal__extractAliasPath(e, t) {
          return { info: i.TypeDefInfo.Plain, type: t };
        }
        __internal__extractSequence(e, t) {
          let { type: a } = t;
          const n = this.__internal__createSiDef(a);
          return "u8" === n.type
            ? { info: i.TypeDefInfo.Plain, type: "Bytes" }
            : (0, i.withTypeString)(this.registry, {
                info: i.TypeDefInfo.Vec,
                lookupIndex: e,
                lookupName: this.__internal__names[e],
                sub: n,
              });
        }
        __internal__extractTuple(e, t) {
          if (0 === t.length) return { info: i.TypeDefInfo.Null, type: "Null" };
          if (1 === t.length) return this.getTypeDef(t[0]);
          const a = t.map((e) => this.__internal__createSiDef(e));
          return (0, i.withTypeString)(this.registry, {
            info: i.TypeDefInfo.Tuple,
            lookupIndex: e,
            lookupName: this.__internal__names[e],
            sub: a,
          });
        }
        __internal__extractVariant(e, t, a) {
          let { params: n, path: r } = t,
            { variants: o } = a;
          if (r.length) {
            const e = r[0].toString();
            if ("Option" === e) {
              if (1 !== n.length)
                throw new Error(
                  "Option requires 1 parameter, found " + n.length,
                );
              return (0, i.withTypeString)(this.registry, {
                info: i.TypeDefInfo.Option,
                sub: this.__internal__createSiDef(n[0].type.unwrap()),
              });
            }
            if ("Result" === e) {
              if (2 !== n.length)
                throw new Error(
                  "Result requires 2 parameters, found " + n.length,
                );
              return (0, i.withTypeString)(this.registry, {
                info: i.TypeDefInfo.Result,
                sub: n.map((e, t) => {
                  let { type: a } = e;
                  return (0, s.objectSpread)(
                    { name: ["Ok", "Error"][t] },
                    this.__internal__createSiDef(a.unwrap()),
                  );
                }),
              });
            }
          }
          return 0 === o.length
            ? { info: i.TypeDefInfo.Null, type: "Null" }
            : this.__internal__extractVariantEnum(e, o);
        }
        __internal__extractVariantEnum(e, t) {
          const a = [];
          return (
            t
              .slice()
              .sort((e, t) => e.index.cmp(t.index))
              .forEach((e) => {
                let { fields: t, index: n, name: r } = e;
                const o = n.toNumber();
                while (a.length !== o)
                  a.push({
                    index: a.length,
                    info: i.TypeDefInfo.Null,
                    name: "__Unused" + a.length,
                    type: "Null",
                  });
                a.push(
                  (0, s.objectSpread)(this.__internal__extractFields(-1, t), {
                    index: o,
                    name: r.toString(),
                  }),
                );
              }),
            (0, i.withTypeString)(this.registry, {
              info: i.TypeDefInfo.Enum,
              lookupIndex: e,
              lookupName: this.__internal__names[e],
              sub: a,
            })
          );
        }
      }
      t.PortableRegistry = PortableRegistry;
    },
    9703: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toV1 = f));
      var n = a(2757);
      function r(e) {
        return (t, a) => {
          let { type: n } = a;
          return t.createType("Si1TypeDef", { [e]: { type: n.toNumber() } });
        };
      }
      function o(e, t) {
        let { len: a, type: n } = t;
        return e.createType("Si1TypeDef", {
          Array: { len: a, type: n.toNumber() },
        });
      }
      function i(e, t) {
        let { bitOrderType: a, bitStoreType: n } = t;
        return e.createType("Si1TypeDef", {
          BitSequence: {
            bitOrderType: a.toNumber(),
            bitStoreType: n.toNumber(),
          },
        });
      }
      const s = r("Compact");
      function c(e, t) {
        let { fields: a } = t;
        return e.createType("Si1TypeDef", { Composite: { fields: u(e, a) } });
      }
      function u(e, t) {
        return t.map((t) => {
          let { docs: a, name: n, type: r, typeName: o } = t;
          return e.createType("Si1Field", {
            docs: a,
            name: n,
            type: r.toNumber(),
            typeName: o,
          });
        });
      }
      function l(e, t) {
        return (
          console.warn(
            `Converting phantom type ${t.map((e) => e.toString()).join("::")} to empty tuple`,
          ),
          e.createType("Si1TypeDef", { Tuple: [] })
        );
      }
      function d(e, t) {
        return e.createType("Si1TypeDef", { Primitive: t.toString() });
      }
      const p = r("Sequence");
      function m(e, t) {
        return e.createType("Si1TypeDef", {
          Tuple: t.map((e) => e.toNumber()),
        });
      }
      function y(e, t) {
        let { variants: a } = t;
        return e.createType("Si1TypeDef", {
          Variant: {
            variants: a.map((t, a) => {
              let { discriminant: n, docs: r, fields: o, name: i } = t;
              return e.createType("Si1Variant", {
                docs: r,
                fields: u(e, o),
                index: n.isSome ? n.unwrap().toNumber() : a,
                name: i,
              });
            }),
          },
        });
      }
      function h(e, t) {
        let a,
          { def: r, path: u } = t;
        switch (r.type) {
          case "Array":
            a = o(e, r.asArray);
            break;
          case "BitSequence":
            a = i(e, r.asBitSequence);
            break;
          case "Compact":
            a = s(e, r.asCompact);
            break;
          case "Composite":
            a = c(e, r.asComposite);
            break;
          case "Phantom":
            a = l(e, u);
            break;
          case "Primitive":
            a = d(e, r.asPrimitive);
            break;
          case "Sequence":
            a = p(e, r.asSequence);
            break;
          case "Tuple":
            a = m(e, r.asTuple);
            break;
          case "Variant":
            a = y(e, r.asVariant);
            break;
          default:
            (0, n.assertUnreachable)(r.type);
        }
        return a;
      }
      function f(e, t) {
        return t.map((t, a) =>
          e.createType("PortableType", {
            id: a + 1,
            type: {
              def: h(e, t),
              docs: [],
              params: t.params.map((t) =>
                e.createType("Si1TypeParameter", { type: t.toNumber() }),
              ),
              path: t.path.map((e) => e.toString()),
            },
          }),
        );
      }
    },
    9707: function (e, t, a) {
      "use strict";
      var n = a(3934),
        r = a(5502),
        o = a(2757),
        i = a(3452);
      (0, o.detectPackage)(i.packageInfo, null, [n.packageInfo, r.packageInfo]);
    },
    9709: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(2757),
        r = o(a(5506));
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            o,
            i = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return i;
          if ((r = t ? n : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, i);
          }
          for (const a in e)
            "default" !== a &&
              {}.hasOwnProperty.call(e, a) &&
              ((o =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, a)) &&
              (o.get || o.set)
                ? r(i, a, o)
                : (i[a] = e[a]));
          return i;
        })(e, t);
      }
      const i = {};
      Object.keys(r).forEach((e) =>
        Object.entries(r[e].rpc || {}).forEach((t) => {
          let [a, r] = t;
          const o = r.aliasSection || e;
          (i[o] || (i[o] = {}),
            (i[o][a] = (0, n.objectSpread)({}, r, {
              isSubscription: !!r.pubsub,
              jsonrpc: `${o}_${a}`,
              method: a,
              section: o,
            })));
        }),
      );
      t.default = i;
    },
    9711: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Metadata", {
          enumerable: !0,
          get: function () {
            return r.Metadata;
          },
        }),
        Object.defineProperty(t, "PortableRegistry", {
          enumerable: !0,
          get: function () {
            return o.PortableRegistry;
          },
        }),
        Object.defineProperty(t, "decorateConstants", {
          enumerable: !0,
          get: function () {
            return n.decorateConstants;
          },
        }),
        Object.defineProperty(t, "decorateExtrinsics", {
          enumerable: !0,
          get: function () {
            return n.decorateExtrinsics;
          },
        }),
        Object.defineProperty(t, "decorateStorage", {
          enumerable: !0,
          get: function () {
            return n.decorateStorage;
          },
        }),
        Object.defineProperty(t, "expandMetadata", {
          enumerable: !0,
          get: function () {
            return n.expandMetadata;
          },
        }));
      var n = a(5507),
        r = a(5508),
        o = a(5509);
    },
  },
]);
