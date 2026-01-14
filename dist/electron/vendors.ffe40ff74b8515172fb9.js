(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [133],
  {
    10053: function (e, t, r) {
      "use strict";
      var n = r(2757),
        o = r(6559);
      (0, n.detectPackage)(o.packageInfo, null, []);
    },
    10054: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { getAvailableDerives: !0, lazyDeriveSection: !0 };
      ((t.getAvailableDerives = l),
        Object.defineProperty(t, "lazyDeriveSection", {
          enumerable: !0,
          get: function () {
            return o.lazyDeriveSection;
          },
        }));
      var o = r(2770),
        i = r(10064);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(4787);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      const s = {
        allianceMotion: { instances: ["allianceMotion"], methods: [] },
        bagsList: {
          instances: ["voterBagsList", "voterList", "bagsList"],
          methods: [],
          withDetect: !0,
        },
        contracts: { instances: ["contracts"], methods: [] },
        council: { instances: ["council"], methods: [], withDetect: !0 },
        crowdloan: { instances: ["crowdloan"], methods: [] },
        democracy: { instances: ["democracy"], methods: [] },
        elections: {
          instances: [
            "phragmenElection",
            "electionsPhragmen",
            "elections",
            "council",
          ],
          methods: [],
          withDetect: !0,
        },
        imOnline: { instances: ["imOnline"], methods: [] },
        membership: { instances: ["membership"], methods: [] },
        parachains: { instances: ["parachains", "registrar"], methods: [] },
        session: { instances: ["session"], methods: [] },
        society: { instances: ["society"], methods: [] },
        staking: { instances: ["staking"], methods: ["erasRewardPoints"] },
        technicalCommittee: {
          instances: ["technicalCommittee"],
          methods: [],
          withDetect: !0,
        },
        treasury: { instances: ["treasury"], methods: [] },
      };
      function u(e, t, r) {
        return e.registry.getModuleInstances(t, r) || [];
      }
      function c(e, t, r) {
        const n = {},
          i = Object.keys(r),
          a = Object.keys(t.query),
          c = t.runtimeVersion.specName,
          l = (e) => a.includes(e),
          d = (e) => u(t, c, e).some(l),
          p = (e) => (r) => e.some((e) => a.includes(e) && t.query[e][r]),
          f = (e) => Object.keys(r[e]),
          m = (n, o) => r[n][o](e, t),
          y = (e) =>
            !s[e] ||
            (s[e].instances.some(l) &&
              (!s[e].methods.length ||
                s[e].methods.every(p(s[e].instances)))) ||
            (s[e].withDetect && s[e].instances.some(d));
        for (let s = 0, u = i.length; s < u; s++) {
          const e = i[s];
          y(e) && (0, o.lazyDeriveSection)(n, e, f, m);
        }
        return n;
      }
      function l(e, t, r) {
        return (
          void 0 === r && (r = {}),
          { ...c(e, t, i.derive), ...c(e, t, r) }
        );
      }
    },
    10059: function (e, t, r) {
      "use strict";
      function n(e) {
        const t = [];
        for (let n = 0, o = e.length; n < o; n++) {
          const r = e[n].toString(2);
          for (const e of r.split("").reverse()) t.push(!!parseInt(e, 10));
        }
        const r = t.lastIndexOf(!0);
        return r >= 0 ? t.slice(0, r + 1) : [];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.approvalFlagsToBools = n));
    },
    10060: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unwrapBlockNumber = o));
      var n = r(2757);
      function o(e) {
        return (0, n.isCompact)(e.number) ? e.number.unwrap() : e.number;
      }
    },
    10061: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deriveCache = void 0),
        (t.setDeriveCache = u));
      var n = r(6615);
      const o = 6048e5;
      let i = (t.deriveCache = void 0);
      function a(e, t) {
        return {
          del: (r) => t.del(`${e}${r}`),
          forEach: t.forEach,
          get: (r) => {
            const n = `${e}${r}`,
              o = t.get(n);
            if (o) return ((o.x = Date.now()), t.set(n, o), o.v);
          },
          set: (r, n) => {
            t.set(`${e}${r}`, { v: n, x: Date.now() });
          },
        };
      }
      function s(e) {
        const t = Date.now(),
          r = [];
        (e.forEach((e, n) => {
          let { x: i } = n;
          t - i > o && r.push(e);
        }),
          r.forEach((t) => e.del(t)));
      }
      function u(e, r) {
        (void 0 === e && (e = ""),
          (t.deriveCache = i = r ? a(`derive:${e}:`, r) : n.deriveNoopCache),
          r && s(r));
      }
      u();
    },
    10062: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.firstMemo = a),
        (t.firstObservable = i));
      var n = r(2766),
        o = r(5535);
      function i(e) {
        return e.pipe(
          (0, n.map)((e) => {
            let [t] = e;
            return t;
          }),
        );
      }
      function a(e) {
        return (t, r) =>
          (0, o.memo)(t, function () {
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return i(e(r, ...n));
          });
      }
    },
    10063: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lazyDeriveSection = o));
      var n = r(2757);
      function o(e, t, r, o) {
        (0, n.lazyMethod)(e, t, () =>
          (0, n.lazyMethods)({}, r(t), (e) => o(t, e)),
        );
      }
    },
    10064: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.derive = void 0));
      var n = M(r(10065)),
        o = M(r(10074)),
        i = M(r(10078)),
        a = M(r(10082)),
        s = M(r(10086)),
        u = M(r(10089)),
        c = M(r(10102)),
        l = M(r(10104)),
        d = M(r(10107)),
        p = M(r(10111)),
        f = M(r(10123)),
        m = M(r(10125)),
        y = M(r(10127)),
        v = M(r(10128)),
        b = M(r(10131)),
        g = M(r(10135)),
        h = M(r(10140)),
        _ = M(r(10163)),
        O = M(r(10164)),
        k = M(r(10166));
      function M(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (M = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            i,
            a = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((o = t ? n : r)) {
            if (o.has(e)) return o.get(e);
            o.set(e, a);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((i =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (i.get || i.set)
                ? o(a, r, i)
                : (a[r] = e[r]));
          return a;
        })(e, t);
      }
      t.derive = {
        accounts: n,
        alliance: o,
        bagsList: i,
        balances: a,
        bounties: s,
        chain: u,
        contracts: c,
        council: l,
        crowdloan: d,
        democracy: p,
        elections: f,
        imOnline: m,
        membership: y,
        parachains: v,
        session: b,
        society: g,
        staking: h,
        technicalCommittee: _,
        treasury: O,
        tx: k,
      };
    },
    10065: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10066);
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
      var o = r(10067);
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
      var i = r(10068);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10069);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(10070);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var u = r(10071);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var c = r(10072);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(10073);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
    },
    10066: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.accountId = s));
      var n = r(2766),
        o = r(2757),
        i = r(2961),
        a = r(2770);
      function s(e, t) {
        return (0, a.memo)(e, (e) => {
          const r = (0, o.isU8a)(e)
            ? e
            : (0, i.decodeAddress)((e || "").toString());
          if (r.length > 8)
            return (0, n.of)(t.registry.createType("AccountId", r));
          const a = t.registry.createType("AccountIndex", r);
          return t.derive.accounts
            .indexToId(a.toString())
            .pipe(
              (0, n.map)((e) =>
                (0, o.assertReturn)(e, "Unable to retrieve accountId"),
              ),
            );
        });
      }
    },
    10067: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._flags = s),
        (t.flags = u));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        let [r, n, o, i, a] = t;
        const s = null === e || void 0 === e ? void 0 : e.toString(),
          u = (e) => e.toString() === s;
        return {
          isCouncil: (
            (null === r || void 0 === r
              ? void 0
              : r.map((e) => (Array.isArray(e) ? e[0] : e.who))) ||
            n ||
            []
          ).some(u),
          isSociety: (i || []).some(u),
          isSudo: (null === a || void 0 === a ? void 0 : a.toString()) === s,
          isTechCommittee: (o || []).some(u),
        };
      }
      function s(e, t) {
        return (0, i.memo)(e, () => {
          var e, r, i, a, s;
          const u = [void 0, [], [], [], void 0],
            c = [
              null ===
                (e =
                  t.query.elections ||
                  t.query["phragmenElection"] ||
                  t.query["electionsPhragmen"]) || void 0 === e
                ? void 0
                : e.members,
              null === (r = t.query.council) || void 0 === r
                ? void 0
                : r.members,
              null === (i = t.query.technicalCommittee) || void 0 === i
                ? void 0
                : i.members,
              null === (a = t.query.society) || void 0 === a
                ? void 0
                : a.members,
              null === (s = t.query.sudo) || void 0 === s ? void 0 : s.key,
            ],
            l = c.filter((e) => e);
          return l.length
            ? t.queryMulti(l).pipe(
                (0, n.map)((e) => {
                  let t = -1;
                  for (let r = 0, n = c.length; r < n; r++)
                    (0, o.isFunction)(c[r]) && (u[r] = e[++t]);
                  return u;
                }),
              )
            : (0, n.of)(u);
        });
      }
      function u(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.accounts._flags().pipe((0, n.map)((t) => a(e, t))),
        );
      }
    },
    10068: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.idAndIndex = s));
      var n = r(2766),
        o = r(2757),
        i = r(2961),
        a = r(2770);
      function s(e, t) {
        return (0, a.memo)(e, (e) => {
          try {
            const r = (0, o.isU8a)(e)
              ? e
              : (0, i.decodeAddress)((e || "").toString());
            if (r.length > 8) {
              const e = t.registry.createType("AccountId", r);
              return t.derive.accounts
                .idToIndex(e)
                .pipe((0, n.map)((t) => [e, t]));
            }
            const a = t.registry.createType("AccountIndex", r);
            return t.derive.accounts
              .indexToId(a.toString())
              .pipe((0, n.map)((e) => [e, a]));
          } catch {
            return (0, n.of)([void 0, void 0]);
          }
        });
      }
    },
    10069: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._identity = p),
        (t.hasIdentity = void 0),
        (t.hasIdentityMulti = m),
        (t.identity = f));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      const a = { toHex: () => {} };
      function s(e) {
        return e
          ? e.isRaw
            ? (0, o.u8aToString)(e.asRaw.toU8a(!0))
            : e.isNone
              ? void 0
              : e.toHex()
          : e;
      }
      function u(e) {
        return e.reduce((e, t) => {
          let [r, n] = t;
          const o = s(r),
            i = s(n);
          return (o && i && (e[o] = i), e);
        }, {});
      }
      function c(e) {
        const t = e.unwrap();
        return Array.isArray(t) ? t[0] : t;
      }
      function l(e, t) {
        if (null === e || void 0 === e || !e.isSome) return { judgements: [] };
        const { info: r, judgements: n } = c(e),
          o = s(r.display);
        return {
          discord: s(r.discord),
          display: (t && s(t[1])) || o,
          displayParent: t && o,
          email: s(r.email),
          github: s(r.github),
          image: s(r.image),
          judgements: n,
          legal: s(r.legal),
          matrix: s(r.matrix),
          other: r.additional ? u(r.additional) : {},
          parent: null === t || void 0 === t ? void 0 : t[0],
          pgp: r.pgpFingerprint.unwrapOr(a).toHex(),
          riot: s(r.riot),
          twitter: s(r.twitter),
          web: s(r.web),
        };
      }
      function d(e, t, r) {
        if (null !== t && void 0 !== t && t.isSome)
          return (0, n.of)([t, void 0]);
        if (null !== r && void 0 !== r && r.isSome) {
          const t = r.unwrap();
          return (0, n.combineLatest)([
            e.derive.accounts._identity(t[0]).pipe(
              (0, n.map)((e) => {
                let [t] = e;
                return t;
              }),
            ),
            (0, n.of)(t),
          ]);
        }
        return (0, n.of)([void 0, void 0]);
      }
      function p(e, t) {
        return (0, i.memo)(e, (e) => {
          var r;
          return e &&
            null !== (r = t.query.identity) &&
            void 0 !== r &&
            r.identityOf
            ? (0, n.combineLatest)([
                t.query.identity.identityOf(e),
                t.query.identity.superOf(e),
              ])
            : (0, n.of)([void 0, void 0]);
        });
      }
      function f(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.accounts._identity(e).pipe(
            (0, n.switchMap)((e) => {
              let [r, n] = e;
              return d(t, r, n);
            }),
            (0, n.map)((e) => {
              let [t, r] = e;
              return l(t, r);
            }),
          ),
        );
      }
      t.hasIdentity = (0, i.firstMemo)((e, t) =>
        e.derive.accounts.hasIdentityMulti([t]),
      );
      function m(e, t) {
        return (0, i.memo)(e, (e) => {
          var r;
          return null !== (r = t.query.identity) && void 0 !== r && r.identityOf
            ? (0, n.combineLatest)([
                t.query.identity.identityOf.multi(e),
                t.query.identity.superOf.multi(e),
              ]).pipe(
                (0, n.map)((e) => {
                  let [t, r] = e;
                  return t.map((e, t) => {
                    const n = r[t],
                      i = n && n.isSome ? n.unwrap()[0].toString() : void 0;
                    let a;
                    if (e && e.isSome) {
                      const t = s(c(e).info.display);
                      t && !(0, o.isHex)(t) && (a = t);
                    }
                    return {
                      display: a,
                      hasIdentity: !(!a && !i),
                      parentId: i,
                    };
                  });
                }),
              )
            : (0, n.of)(e.map(() => ({ hasIdentity: !1 })));
        });
      }
    },
    10070: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.idToIndex = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          t.derive.accounts.indexes().pipe((0, n.map)((t) => t[e.toString()])),
        );
      }
    },
    10071: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.indexes = s));
      var n = r(2766),
        o = r(2770);
      let i = null;
      function a(e) {
        return e.query.indices.accounts.entries().pipe(
          (0, n.map)((t) =>
            t.reduce((t, r) => {
              let [n, o] = r;
              return (
                o.isSome &&
                  (t[o.unwrap()[0].toString()] = e.registry.createType(
                    "AccountIndex",
                    n.args[0],
                  )),
                t
              );
            }, {}),
          ),
        );
      }
      function s(e, t) {
        return (0, o.memo)(e, () =>
          i
            ? (0, n.of)(i)
            : (t.query.indices
                ? a(t).pipe((0, n.startWith)({}))
                : (0, n.of)({})
              ).pipe((0, n.map)((e) => ((i = e), e))),
        );
      }
    },
    10072: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.indexToId = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          t.query.indices
            ? t.query.indices
                .accounts(e)
                .pipe((0, n.map)((e) => e.unwrapOr([])[0]))
            : (0, n.of)(void 0),
        );
      }
    },
    10073: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.info = s));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        var r;
        return (
          t && null !== (r = e.query["nicks"]) && void 0 !== r && r["nameOf"]
            ? e.query["nicks"]["nameOf"](t)
            : (0, n.of)(void 0)
        ).pipe(
          (0, n.map)((t) =>
            null !== t && void 0 !== t && t.isSome
              ? (0, o.u8aToString)(t.unwrap()[0]).substring(
                  0,
                  e.consts["nicks"]["maxLength"].toNumber(),
                )
              : void 0,
          ),
        );
      }
      function s(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.accounts.idAndIndex(e).pipe(
            (0, n.switchMap)((e) => {
              let [r, o] = e;
              return (0, n.combineLatest)([
                (0, n.of)({ accountId: r, accountIndex: o }),
                t.derive.accounts.identity(r),
                a(t, r),
              ]);
            }),
            (0, n.map)((e) => {
              let [{ accountId: t, accountIndex: r }, n, o] = e;
              return {
                accountId: t,
                accountIndex: r,
                identity: n,
                nickname: o,
              };
            }),
          ),
        );
      }
    },
    10074: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.proposals =
          t.proposalHashes =
          t.proposalCount =
          t.proposal =
          t.prime =
          t.members =
          t.hasProposals =
            void 0));
      var n = r(4786);
      ((t.members = (0, n.members)("allianceMotion")),
        (t.hasProposals = (0, n.hasProposals)("allianceMotion")),
        (t.proposal = (0, n.proposal)("allianceMotion")),
        (t.proposalCount = (0, n.proposalCount)("allianceMotion")),
        (t.proposalHashes = (0, n.proposalHashes)("allianceMotion")),
        (t.proposals = (0, n.proposals)("allianceMotion")),
        (t.prime = (0, n.prime)("allianceMotion")));
    },
    10075: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.members = void 0));
      var n = r(5536);
      t.members = (0, n.callMethod)("members", []);
    },
    10076: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.prime = a));
      var n = r(2766),
        o = r(2757),
        i = r(5536);
      function a(e) {
        return (0, i.withSection)(
          e,
          (e) => () =>
            (0, o.isFunction)(null === e || void 0 === e ? void 0 : e.prime)
              ? e.prime().pipe((0, n.map)((e) => e.unwrapOr(null)))
              : (0, n.of)(null),
        );
      }
    },
    10077: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasProposals = c),
        (t.proposal = d),
        (t.proposalHashes = t.proposalCount = void 0),
        (t.proposals = l));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(5536);
      function s(e, t) {
        let [r, n, o] = t;
        return n.map((t, n) => ({
          hash: e.registry.createType("Hash", r[n]),
          proposal: t && t.isSome ? t.unwrap() : null,
          votes: o[n].unwrapOr(null),
        }));
      }
      function u(e, t, r) {
        return (
          (0, o.isFunction)(
            null === t || void 0 === t ? void 0 : t.proposals,
          ) && r.length
            ? (0, n.combineLatest)([
                (0, n.of)(r),
                t.proposalOf
                  .multi(r)
                  .pipe((0, n.catchError)(() => (0, n.of)(r.map(() => null)))),
                t.voting.multi(r),
              ])
            : (0, n.of)([[], [], []])
        ).pipe((0, n.map)((t) => s(e, t)));
      }
      function c(e) {
        return (0, a.withSection)(
          e,
          (e) => () =>
            (0, n.of)(
              (0, o.isFunction)(
                null === e || void 0 === e ? void 0 : e.proposals,
              ),
            ),
        );
      }
      function l(e) {
        return (0, a.withSection)(
          e,
          (t, r) => () =>
            r.derive[e]
              .proposalHashes()
              .pipe((0, n.switchMap)((e) => u(r, t, e))),
        );
      }
      function d(e) {
        return (0, a.withSection)(
          e,
          (e, t) => (r) =>
            (0, o.isFunction)(null === e || void 0 === e ? void 0 : e.proposals)
              ? (0, i.firstObservable)(u(t, e, [r]))
              : (0, n.of)(null),
        );
      }
      ((t.proposalCount = (0, a.callMethod)("proposalCount", null)),
        (t.proposalHashes = (0, a.callMethod)("proposals", [])));
    },
    10078: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10079);
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
      var o = r(10080);
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
      var i = r(10081);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
    },
    10079: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._getIds = u),
        (t.all = c),
        (t.get = l));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(6616);
      function s(e, t) {
        const r = e
            .map((e, r) => ({
              bag: t[r].unwrapOr(null),
              id: e,
              key: e.toString(),
            }))
            .sort((e, t) => t.id.cmp(e.id)),
          n = r.length - 1;
        return r.map((e, t) =>
          (0, o.objectSpread)(e, {
            bagLower: t === n ? o.BN_ZERO : r[t + 1].id,
            bagUpper: e.id,
            index: t,
          }),
        );
      }
      function u(e, t) {
        const r = (0, a.getQueryInterface)(t);
        return (0, i.memo)(e, (e) => {
          const t = e.map((e) => (0, o.bnToBn)(e));
          return t.length
            ? r.listBags.multi(t).pipe((0, n.map)((e) => s(t, e)))
            : (0, n.of)([]);
        });
      }
      function c(e, t) {
        const r = (0, a.getQueryInterface)(t);
        return (0, i.memo)(e, () =>
          r.listBags.keys().pipe(
            (0, n.switchMap)((e) =>
              t.derive.bagsList._getIds(
                e.map((e) => {
                  let {
                    args: [t],
                  } = e;
                  return t;
                }),
              ),
            ),
            (0, n.map)((e) =>
              e.filter((e) => {
                let { bag: t } = e;
                return t;
              }),
            ),
          ),
        );
      }
      function l(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.bagsList
            ._getIds([(0, o.bnToBn)(e)])
            .pipe((0, n.map)((e) => e[0])),
        );
      }
    },
    10080: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.expand = a),
        (t.getExpanded = s));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.bagsList
            .listNodes(e.bag)
            .pipe((0, n.map)((t) => (0, o.objectSpread)({ nodes: t }, e))),
        );
      }
      function s(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.bagsList
            .get(e)
            .pipe((0, n.switchMap)((e) => t.derive.bagsList.expand(e))),
        );
      }
    },
    10081: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.listNodes = u));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(6616);
      function s(e, t) {
        const r = new n.BehaviorSubject(t),
          i = (0, a.getQueryInterface)(e);
        return r.pipe(
          (0, n.switchMap)((e) => i.listNodes(e)),
          (0, n.tap)((e) => {
            (0, o.nextTick)(() => {
              e.isSome && e.value.next.isSome
                ? r.next(e.unwrap().next.unwrap())
                : r.complete();
            });
          }),
          (0, n.toArray)(),
          (0, n.map)((e) => e.map((e) => e.unwrap())),
        );
      }
      function u(e, t) {
        return (0, i.memo)(e, (e) =>
          e && e.head.isSome ? s(t, e.head.unwrap()) : (0, n.of)([]),
        );
      }
    },
    10082: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { votingBalance: !0, all: !0 };
      (Object.defineProperty(t, "all", {
        enumerable: !0,
        get: function () {
          return o.all;
        },
      }),
        (t.votingBalance = void 0));
      var o = r(10083),
        i = r(10084);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10085);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      t.votingBalance = o.all;
    },
    10083: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.all = y));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      const a = "0x76657374696e6720";
      function s(e, t, r) {
        let n = e.registry.createType("Balance"),
          i = [],
          s = e.registry.createType("Balance"),
          u = !1;
        if (Array.isArray(r)) {
          ((i = r.filter((e) => {
            let { until: r } = e;
            return !r || (t && r.gt(t));
          })),
            (u = i.some((e) => {
              let { amount: t } = e;
              return t && t.isMax();
            })),
            (s = e.registry.createType(
              "Balance",
              i
                .filter((e) => {
                  let { id: t } = e;
                  return t.eq(a);
                })
                .reduce((e, t) => {
                  let { amount: r } = t;
                  return e.iadd(r);
                }, new o.BN(0)),
            )));
          const c = i.filter((e) => {
            let { amount: t } = e;
            return t && !t.isMax();
          });
          c.length &&
            (n = e.registry.createType(
              "Balance",
              (0, o.bnMax)(
                ...c.map((e) => {
                  let { amount: t } = e;
                  return t;
                }),
              ),
            ));
        }
        return {
          allLocked: u,
          lockedBalance: n,
          lockedBreakdown: i,
          vestingLocked: s,
        };
      }
      function u(e, t, r, n) {
        const {
          allLocked: i,
          lockedBalance: a,
          lockedBreakdown: u,
          vestingLocked: c,
        } = s(e, t, n);
        return (0, o.objectSpread)({}, r, {
          availableBalance: e.registry.createType(
            "Balance",
            i
              ? 0
              : (0, o.bnMax)(
                  new o.BN(0),
                  null !== r && void 0 !== r && r.freeBalance
                    ? r.freeBalance.sub(a)
                    : new o.BN(0),
                ),
          ),
          lockedBalance: a,
          lockedBreakdown: u,
          vestingLocked: c,
        });
      }
      function c(e, t, r) {
        const n = r || [],
          i = !t.vestingLocked.isZero(),
          a = n.map((t) => {
            let { locked: r, perBlock: n, startingBlock: i } = t;
            return e.gt(i) ? (0, o.bnMin)(r, n.mul(e.sub(i))) : o.BN_ZERO;
          }),
          s = a.reduce((e, t) => e.iadd(t), new o.BN(0)),
          u = n.reduce((e, t) => {
            let { locked: r } = t;
            return e.iadd(r);
          }, new o.BN(0));
        return {
          isVesting: i,
          vestedBalance: s,
          vestedClaimable: i ? t.vestingLocked.sub(u.sub(s)) : o.BN_ZERO,
          vesting: n
            .map((e, t) => {
              let { locked: r, perBlock: n, startingBlock: o } = e;
              return {
                endBlock: r.div(n).iadd(o),
                locked: r,
                perBlock: n,
                startingBlock: o,
                vested: a[t],
              };
            })
            .filter((e) => {
              let { locked: t } = e;
              return !t.isZero();
            }),
          vestingTotal: u,
        };
      }
      function l(e, t) {
        const [r, [n, i, a], s] = t,
          l = u(e, s, r, i[0]);
        return (0, o.objectSpread)(l, c(s, l, n), {
          accountId: r.accountId,
          accountNonce: r.accountNonce,
          additional: i.slice(1).map((t, n) => u(e, s, r.additional[n], t)),
          namedReserves: a,
        });
      }
      function d(e, t) {
        return (0, n.combineLatest)([
          e.query.balances.locks(t),
          e.query.balances["vesting"](t),
        ]).pipe(
          (0, n.map)((t) => {
            let [r, n] = t,
              o = null;
            if (n.isSome) {
              const { offset: t, perBlock: r, startingBlock: i } = n.unwrap();
              o = e.registry.createType("VestingInfo", {
                locked: t,
                perBlock: r,
                startingBlock: i,
              });
            }
            return [o ? [o] : null, [r], []];
          }),
        );
      }
      const p = (e) => !!e;
      function f(e) {
        return [e.map((e) => !e), e.filter(p)];
      }
      function m(e, t, r) {
        var o;
        void 0 === r && (r = ["balances"]);
        const [i, a] = f(
            r.map((t) => {
              var r, n;
              return (
                (null === (r = e.derive[t]) || void 0 === r
                  ? void 0
                  : r.customLocks) ||
                (null === (n = e.query[t]) || void 0 === n ? void 0 : n.locks)
              );
            }),
          ),
          [s, u] = f(
            r.map((t) => {
              var r;
              return null === (r = e.query[t]) || void 0 === r
                ? void 0
                : r.reserves;
            }),
          );
        return (0, n.combineLatest)([
          null !== (o = e.query.vesting) && void 0 !== o && o.vesting
            ? e.query.vesting.vesting(t)
            : (0, n.of)(e.registry.createType("Option<VestingInfo>")),
          a.length ? (0, n.combineLatest)(a.map((e) => e(t))) : (0, n.of)([]),
          u.length ? (0, n.combineLatest)(u.map((e) => e(t))) : (0, n.of)([]),
        ]).pipe(
          (0, n.map)((t) => {
            let [r, n, o] = t,
              a = -1,
              u = -1;
            const c = r.unwrapOr(null);
            return [
              c ? (Array.isArray(c) ? c : [c]) : null,
              i.map((t) =>
                t ? e.registry.createType("Vec<BalanceLock>") : n[++a],
              ),
              s.map((t) =>
                t
                  ? e.registry.createType("Vec<PalletBalancesReserveData>")
                  : o[++u],
              ),
            ];
          }),
        );
      }
      function y(e, t) {
        const r = t.registry.getModuleInstances(
          t.runtimeVersion.specName,
          "balances",
        );
        return (0, i.memo)(e, (e) => {
          var i, a;
          return (0, n.combineLatest)([
            t.derive.balances.account(e),
            (0, o.isFunction)(
              null === (i = t.query.system) || void 0 === i
                ? void 0
                : i.account,
            ) ||
            (0, o.isFunction)(
              null === (a = t.query.balances) || void 0 === a
                ? void 0
                : a.account,
            )
              ? m(t, e, r)
              : d(t, e),
          ]).pipe(
            (0, n.switchMap)((e) => {
              let [r, o] = e;
              return (0, n.combineLatest)([
                (0, n.of)(r),
                (0, n.of)(o),
                t.derive.chain.bestNumber(),
              ]);
            }),
            (0, n.map)((e) => l(t, e)),
          );
        });
      }
    },
    10084: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.account = f));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e) {
        return e.registry.createType("Balance");
      }
      function s(e, t) {
        let [r, n, o, i] = t;
        const a = e.registry.createType("Balance", r.toBn());
        return {
          freeBalance: r,
          frozenFee: o,
          frozenMisc: i,
          reservedBalance: n,
          votingBalance: a,
        };
      }
      function u(e, t) {
        let [r, [n, [i, ...a]]] = t;
        return (0, o.objectSpread)(
          { accountId: r, accountNonce: n, additional: a.map((t) => s(e, t)) },
          s(e, i),
        );
      }
      function c(e, t) {
        return (0, n.combineLatest)([
          e.query.balances["freeBalance"](t),
          e.query.balances["reservedBalance"](t),
          e.query.system["accountNonce"](t),
        ]).pipe(
          (0, n.map)((t) => {
            let [r, n, o] = t;
            return [o, [[r, n, a(e), a(e)]]];
          }),
        );
      }
      function l(e, t) {
        const r = (t) => [t, [[a(e), a(e), a(e), a(e)]]];
        return (0, o.isFunction)(e.query.system.account)
          ? e.query.system.account(t).pipe(
              (0, n.map)((e) => {
                let { nonce: t } = e;
                return r(t);
              }),
            )
          : (0, o.isFunction)(e.query.system["accountNonce"])
            ? e.query.system["accountNonce"](t).pipe((0, n.map)((e) => r(e)))
            : (0, n.of)(r(e.registry.createType("Index")));
      }
      function d(e, t, r) {
        void 0 === r && (r = ["balances"]);
        const i = r
            .map((t) => {
              var r, n;
              return (
                (null === (r = e.derive[t]) || void 0 === r
                  ? void 0
                  : r.customAccount) ||
                (null === (n = e.query[t]) || void 0 === n ? void 0 : n.account)
              );
            })
            .filter((e) => (0, o.isFunction)(e)),
          a = (e, t) => [
            e,
            t.map((e) => {
              let { feeFrozen: t, free: r, miscFrozen: n, reserved: o } = e;
              return [r, o, t, n];
            }),
          ];
        return i.length
          ? (0, o.isFunction)(e.query.system.account)
            ? (0, n.combineLatest)([
                e.query.system.account(t),
                ...i.map((e) => e(t)),
              ]).pipe(
                (0, n.map)((e) => {
                  let [{ nonce: t }, ...r] = e;
                  return a(t, r);
                }),
              )
            : (0, n.combineLatest)([
                e.query.system["accountNonce"](t),
                ...i.map((e) => e(t)),
              ]).pipe(
                (0, n.map)((e) => {
                  let [t, ...r] = e;
                  return a(t, r);
                }),
              )
          : l(e, t);
      }
      function p(e, t) {
        return e.query.system.account(t).pipe(
          (0, n.map)((t) => {
            const r = t.nonce ? t.data : t[1],
              n = t.nonce || t[0];
            if (!r || r.isEmpty) return [n, [[a(e), a(e), a(e), a(e)]]];
            const { feeFrozen: o, free: i, miscFrozen: s, reserved: u } = r;
            return [n, [[i, u, o, s]]];
          }),
        );
      }
      function f(e, t) {
        const r = t.registry.getModuleInstances(
            t.runtimeVersion.specName,
            "balances",
          ),
          s = r && "balances" !== r[0];
        return (0, i.memo)(e, (e) =>
          t.derive.accounts.accountId(e).pipe(
            (0, n.switchMap)((e) => {
              var i, u, f;
              return e
                ? (0, n.combineLatest)([
                    (0, n.of)(e),
                    s
                      ? d(t, e, r)
                      : (0, o.isFunction)(
                            null === (i = t.query.system) || void 0 === i
                              ? void 0
                              : i.account,
                          )
                        ? p(t, e)
                        : (0, o.isFunction)(
                              null === (u = t.query.balances) || void 0 === u
                                ? void 0
                                : u.account,
                            )
                          ? d(t, e)
                          : (0, o.isFunction)(
                                null === (f = t.query.balances) || void 0 === f
                                  ? void 0
                                  : f["freeBalance"],
                              )
                            ? c(t, e)
                            : l(t, e),
                  ])
                : (0, n.of)([
                    t.registry.createType("AccountId"),
                    [
                      t.registry.createType("Index"),
                      [[a(t), a(t), a(t), a(t)]],
                    ],
                  ]);
            }),
            (0, n.map)((e) => u(t, e)),
          ),
        );
      }
    },
    10085: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.votingBalances = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          null !== e && void 0 !== e && e.length
            ? (0, n.combineLatest)(e.map((e) => t.derive.balances.account(e)))
            : (0, n.of)([]),
        );
      }
    },
    10086: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10087);
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
    10087: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bounties = s));
      var n = r(2766),
        o = r(2770),
        i = r(10088);
      function a(e) {
        let [t, r, n, o] = e;
        const i = [];
        return (
          t.forEach((e, t) => {
            e.isSome &&
              i.push({
                bounty: e.unwrap(),
                description: r[t].unwrapOrDefault().toUtf8(),
                index: n[t],
                proposals: o.filter(
                  (e) => e.proposal && n[t].eq(e.proposal.args[0]),
                ),
              });
          }),
          i
        );
      }
      function s(e, t) {
        const r = t.query.bounties || t.query.treasury;
        return (0, o.memo)(e, () =>
          r.bounties
            ? (0, n.combineLatest)([
                r.bountyCount(),
                t.query.council
                  ? t.query.council.proposalCount()
                  : (0, n.of)(0),
              ]).pipe(
                (0, n.switchMap)(() =>
                  (0, n.combineLatest)([
                    r.bounties.keys(),
                    t.derive.council
                      ? t.derive.council.proposals()
                      : (0, n.of)([]),
                  ]),
                ),
                (0, n.switchMap)((e) => {
                  let [o, a] = e;
                  const s = o.map((e) => {
                    let {
                      args: [t],
                    } = e;
                    return t;
                  });
                  return (0, n.combineLatest)([
                    r.bounties.multi(s),
                    r.bountyDescriptions.multi(s),
                    (0, n.of)(s),
                    (0, n.of)((0, i.filterBountiesProposals)(t, a)),
                  ]);
                }),
                (0, n.map)(a),
              )
            : (0, n.of)(a([[], [], [], []])),
        );
      }
    },
    10088: function (e, t, r) {
      "use strict";
      function n(e, t) {
        const r = e.tx.bounties ? e.tx.bounties : e.tx.treasury,
          n = [
            r.approveBounty,
            r.closeBounty,
            r.proposeCurator,
            r.unassignCurator,
          ];
        return t.filter((e) => n.find((t) => e.proposal && t.is(e.proposal)));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.filterBountiesProposals = n));
    },
    10089: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10090);
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
      var o = r(10091);
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
      var i = r(10092);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10093);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(10096);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var u = r(10097);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var c = r(10098);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(10099);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
      var d = r(10100);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var p = r(10101);
      Object.keys(p).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === p[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return p[e];
              },
            }));
      });
    },
    10090: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bestNumber = void 0));
      var n = r(4544);
      t.bestNumber = (0, n.createBlockNumberDerive)((e) =>
        e.rpc.chain.subscribeNewHeads(),
      );
    },
    10091: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bestNumberFinalized = void 0));
      var n = r(4544);
      t.bestNumberFinalized = (0, n.createBlockNumberDerive)((e) =>
        e.rpc.chain.subscribeFinalizedHeads(),
      );
    },
    10092: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bestNumberLag = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          (0, n.combineLatest)([
            t.derive.chain.bestNumber(),
            t.derive.chain.bestNumberFinalized(),
          ]).pipe(
            (0, n.map)((e) => {
              let [r, n] = e;
              return t.registry.createType("BlockNumber", r.sub(n));
            }),
          ),
        );
      }
    },
    10093: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBlock = s));
      var n = r(2766),
        o = r(4787),
        i = r(2770),
        a = r(4544);
      function s(e, t) {
        return (0, i.memo)(e, (e) =>
          (0, n.combineLatest)([t.rpc.chain.getBlock(e), t.queryAt(e)]).pipe(
            (0, n.switchMap)((r) => {
              let [o, i] = r;
              return (0, n.combineLatest)([
                (0, n.of)(o),
                i.system.events(),
                (0, a.getAuthorDetails)(t, o.block.header, e),
              ]);
            }),
            (0, n.map)((e) => {
              let [t, r, [, n, i]] = e;
              return (0, o.createSignedBlockExtended)(r.registry, t, r, n, i);
            }),
          ),
        );
      }
    },
    10094: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createHeaderExtended = a));
      var o = n(r(128)),
        i = r(6617);
      function a(e, t, r, n) {
        const a = e.createClass("Header");
        class Implementation extends a {
          constructor(e, t, r, n) {
            (super(e, t),
              (0, o.default)(this, "__internal__author", void 0),
              (this.__internal__author =
                n || (0, i.extractAuthor)(this.digest, r || [])),
              (this.createdAtHash =
                null === t || void 0 === t ? void 0 : t.createdAtHash));
          }
          get author() {
            return this.__internal__author;
          }
        }
        return new Implementation(e, t, r, n);
      }
    },
    10095: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createSignedBlockExtended = s));
      var o = n(r(128)),
        i = r(6617);
      function a(e, t) {
        return e.map((e, r) => {
          let n, o;
          const i = t
            .filter((e) => {
              let { phase: t } = e;
              return t.isApplyExtrinsic && t.asApplyExtrinsic.eq(r);
            })
            .map((e) => {
              let { event: t } = e;
              return (
                "system" === t.section &&
                  ("ExtrinsicSuccess" === t.method
                    ? (o = t.data[0])
                    : "ExtrinsicFailed" === t.method &&
                      ((n = t.data[0]), (o = t.data[1]))),
                t
              );
            });
          return { dispatchError: n, dispatchInfo: o, events: i, extrinsic: e };
        });
      }
      function s(e, t, r, n, s) {
        const u = e.createClass("SignedBlock");
        class Implementation extends u {
          constructor(e, t, r, n, s) {
            (super(e, t),
              (0, o.default)(this, "__internal__author", void 0),
              (0, o.default)(this, "__internal__events", void 0),
              (0, o.default)(this, "__internal__extrinsics", void 0),
              (this.__internal__author =
                s || (0, i.extractAuthor)(this.block.header.digest, n || [])),
              (this.__internal__events = r || []),
              (this.__internal__extrinsics = a(
                this.block.extrinsics,
                this.__internal__events,
              )),
              (this.createdAtHash =
                null === t || void 0 === t ? void 0 : t.createdAtHash));
          }
          get author() {
            return this.__internal__author;
          }
          get events() {
            return this.__internal__events;
          }
          get extrinsics() {
            return this.__internal__extrinsics;
          }
        }
        return new Implementation(e, t, r, n, s);
      }
    },
    10096: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getBlockByNumber = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          t.rpc.chain
            .getBlockHash(e)
            .pipe((0, n.switchMap)((e) => t.derive.chain.getBlock(e))),
        );
      }
    },
    10097: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getHeader = s));
      var n = r(2766),
        o = r(4787),
        i = r(2770),
        a = r(4544);
      function s(e, t) {
        return (0, i.memo)(e, (e) =>
          t.rpc.chain.getHeader(e).pipe(
            (0, n.switchMap)((r) => (0, a.getAuthorDetails)(t, r, e)),
            (0, n.map)((e) => {
              let [t, r, n] = e;
              return (0, o.createHeaderExtended)((r || t).registry, t, r, n);
            }),
          ),
        );
      }
    },
    10098: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.subscribeFinalizedBlocks = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          t.derive.chain
            .subscribeFinalizedHeads()
            .pipe(
              (0, n.switchMap)((e) =>
                t.derive.chain.getBlock(e.createdAtHash || e.hash),
              ),
            ),
        );
      }
    },
    10099: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._getHeaderRange = i),
        (t.subscribeFinalizedHeads = a));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, function (e, r, o) {
          return (
            void 0 === o && (o = []),
            t.rpc.chain
              .getHeader(e)
              .pipe(
                (0, n.switchMap)((e) =>
                  e.parentHash.eq(r)
                    ? (0, n.of)([e, ...o])
                    : t.derive.chain._getHeaderRange(e.parentHash, r, [
                        e,
                        ...o,
                      ]),
                ),
              )
          );
        });
      }
      function a(e, t) {
        return (0, o.memo)(e, () => {
          let e = null;
          return t.rpc.chain.subscribeFinalizedHeads().pipe(
            (0, n.switchMap)((r) => {
              const o = e,
                i = r.parentHash;
              return (
                (e = r.createdAtHash = r.hash),
                null === o || i.eq(o)
                  ? (0, n.of)(r)
                  : t.derive.chain
                      ._getHeaderRange(i, o, [r])
                      .pipe((0, n.switchMap)((e) => (0, n.from)(e)))
              );
            }),
          );
        });
      }
    },
    10100: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.subscribeNewBlocks = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          t.derive.chain
            .subscribeNewHeads()
            .pipe(
              (0, n.switchMap)((e) =>
                t.derive.chain.getBlock(e.createdAtHash || e.hash),
              ),
            ),
        );
      }
    },
    10101: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.subscribeNewHeads = s));
      var n = r(2766),
        o = r(4787),
        i = r(2770),
        a = r(4544);
      function s(e, t) {
        return (0, i.memo)(e, () =>
          t.rpc.chain.subscribeNewHeads().pipe(
            (0, n.switchMap)((e) => (0, a.getAuthorDetails)(t, e)),
            (0, n.map)((e) => {
              let [t, r, n] = e;
              return (
                (t.createdAtHash = t.hash),
                (0, o.createHeaderExtended)(t.registry, t, r, n)
              );
            }),
          ),
        );
      }
    },
    10102: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10103);
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
    10103: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.fees = a));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        return (0, n.of)([
          e.consts.contracts["callBaseFee"] || e.registry.createType("Balance"),
          e.consts.contracts["contractFee"] || e.registry.createType("Balance"),
          e.consts.contracts["creationFee"] || e.registry.createType("Balance"),
          e.consts.contracts["transactionBaseFee"] ||
            e.registry.createType("Balance"),
          e.consts.contracts["transactionByteFee"] ||
            e.registry.createType("Balance"),
          e.consts.contracts["transferFee"] || e.registry.createType("Balance"),
          e.consts.contracts["rentByteFee"] || e.registry.createType("Balance"),
          e.consts.contracts["rentDepositOffset"] ||
            e.registry.createType("Balance"),
          e.consts.contracts["surchargeReward"] ||
            e.registry.createType("Balance"),
          e.consts.contracts["tombstoneDeposit"] ||
            e.registry.createType("Balance"),
        ]);
      }
      function a(e, t) {
        return (0, o.memo)(e, () =>
          i(t).pipe(
            (0, n.map)((e) => {
              let [t, r, n, o, i, a, s, u, c, l] = e;
              return {
                callBaseFee: t,
                contractFee: r,
                creationFee: n,
                rentByteFee: s,
                rentDepositOffset: u,
                surchargeReward: c,
                tombstoneDeposit: l,
                transactionBaseFee: o,
                transactionByteFee: i,
                transferFee: a,
              };
            }),
          ),
        );
      }
    },
    10104: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        members: !0,
        hasProposals: !0,
        proposal: !0,
        proposalCount: !0,
        proposalHashes: !0,
        proposals: !0,
        prime: !0,
      };
      t.proposals =
        t.proposalHashes =
        t.proposalCount =
        t.proposal =
        t.prime =
        t.members =
        t.hasProposals =
          void 0;
      var o = r(4786),
        i = r(10105);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10106);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      ((t.members = (0, o.members)("council")),
        (t.hasProposals = (0, o.hasProposals)("council")),
        (t.proposal = (0, o.proposal)("council")),
        (t.proposalCount = (0, o.proposalCount)("council")),
        (t.proposalHashes = (0, o.proposalHashes)("council")),
        (t.proposals = (0, o.proposals)("council")),
        (t.prime = (0, o.prime)("council")));
    },
    10105: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.votes = l));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        return !Array.isArray(e);
      }
      function a(e) {
        return e["stakeOf"].entries().pipe(
          (0, n.map)((e) =>
            e.map((e) => {
              let [
                {
                  args: [t],
                },
                r,
              ] = e;
              return [t, r];
            }),
          ),
        );
      }
      function s(e) {
        return e["votesOf"].entries().pipe(
          (0, n.map)((e) =>
            e.map((e) => {
              let [
                {
                  args: [t],
                },
                r,
              ] = e;
              return [t, r];
            }),
          ),
        );
      }
      function u(e, t) {
        return (0, n.combineLatest)([a(t), s(t)]).pipe(
          (0, n.map)((t) => {
            let [r, n] = t;
            const o = [];
            return (
              n.forEach((t) => {
                let [r, n] = t;
                o.push([
                  r,
                  { stake: e.registry.createType("Balance"), votes: n },
                ]);
              }),
              r.forEach((e) => {
                let [t, r] = e;
                const n = o.find((e) => {
                  let [r] = e;
                  return r.eq(t);
                });
                n ? (n[1].stake = r) : o.push([t, { stake: r, votes: [] }]);
              }),
              o
            );
          }),
        );
      }
      function c(e) {
        return e.voting.entries().pipe(
          (0, n.map)((e) =>
            e.map((e) => {
              let [
                {
                  args: [t],
                },
                r,
              ] = e;
              return [
                t,
                i(r)
                  ? { stake: r.stake, votes: r.votes }
                  : { stake: r[0], votes: r[1] },
              ];
            }),
          ),
        );
      }
      function l(e, t) {
        const r =
          t.query.elections ||
          t.query["phragmenElection"] ||
          t.query["electionsPhragmen"];
        return (0, o.memo)(e, () =>
          r ? (r["stakeOf"] ? u(t, r) : c(r)) : (0, n.of)([]),
        );
      }
    },
    10106: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.votesOf = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          t.derive.council.votes().pipe(
            (0, n.map)(
              (r) =>
                (r.find((t) => {
                  let [r] = t;
                  return r.eq(e);
                }) || [
                  null,
                  { stake: t.registry.createType("Balance"), votes: [] },
                ])[1],
            ),
          ),
        );
      }
    },
    10107: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10108);
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
      var o = r(10109);
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
      var i = r(10110);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
    },
    10108: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.childKey = u));
      var n = r(2766),
        o = r(2757),
        i = r(2961),
        a = r(2770);
      function s(e) {
        return (0, o.u8aToHex)(
          (0, o.u8aConcat)(
            ":child_storage:default:",
            (0, i.blake2AsU8a)(
              (0, o.u8aConcat)(
                "crowdloan",
                (e.fundIndex || e.trieIndex).toU8a(),
              ),
            ),
          ),
        );
      }
      function u(e, t) {
        return (0, a.memo)(e, (e) =>
          t.query["crowdloan"]
            ["funds"](e)
            .pipe((0, n.map)((e) => (e.isSome ? s(e.unwrap()) : null))),
        );
      }
    },
    10109: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.contributions = f));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(6618);
      const s = 1e3;
      function u(e, t) {
        let r = [],
          o = [];
        return e.query.system.events().pipe(
          (0, n.switchMap)((e) => {
            const i = (0, a.extractContributed)(t, e);
            var s;
            return i.added.length || i.removed.length
              ? ((r = r.concat(...i.added)),
                (o = o.concat(...i.removed)),
                (0, n.of)({
                  added: r,
                  addedDelta: i.added,
                  blockHash:
                    (null === (s = e.createdAtHash) || void 0 === s
                      ? void 0
                      : s.toHex()) || "-",
                  removed: o,
                  removedDelta: i.removed,
                }))
              : n.EMPTY;
          }),
          (0, n.startWith)({
            added: r,
            addedDelta: [],
            blockHash: "-",
            removed: o,
            removedDelta: [],
          }),
        );
      }
      function c(e, t) {
        return e.query.system.events().pipe(
          (0, n.switchMap)((e) => {
            var r;
            const o = e.filter((e) => {
              let {
                event: {
                  data: [r],
                  method: n,
                  section: o,
                },
              } = e;
              return (
                "crowdloan" === o &&
                ["AllRefunded", "Dissolved", "PartiallyRefunded"].includes(n) &&
                r.eq(t)
              );
            });
            return o.length
              ? (0, n.of)(
                  (null === (r = e.createdAtHash) || void 0 === r
                    ? void 0
                    : r.toHex()) || "-",
                )
              : n.EMPTY;
          }),
          (0, n.startWith)("-"),
        );
      }
      function l(e, t) {
        const r = new n.BehaviorSubject(void 0);
        return r.pipe(
          (0, n.switchMap)((r) => e.rpc.childstate.getKeysPaged(t, "0x", s, r)),
          (0, n.tap)((e) => {
            (0, o.nextTick)(() => {
              e.length === s ? r.next(e[s - 1].toHex()) : r.complete();
            });
          }),
          (0, n.toArray)(),
          (0, n.map)((e) => (0, o.arrayFlatten)(e)),
        );
      }
      function d(e, t, r) {
        return c(e, t).pipe(
          (0, n.switchMap)(() =>
            (0, o.isFunction)(e.rpc.childstate.getKeysPaged)
              ? l(e, r)
              : e.rpc.childstate.getKeys(r, "0x"),
          ),
          (0, n.map)((e) => e.map((e) => e.toHex())),
        );
      }
      function p(e, t, r) {
        return (0, n.combineLatest)([d(e, t, r), u(e, t)]).pipe(
          (0, n.map)((e) => {
            let [t, { added: r, blockHash: n, removed: o }] = e;
            const i = {};
            return (
              t.forEach((e) => {
                i[e] = !0;
              }),
              r.forEach((e) => {
                i[e] = !0;
              }),
              o.forEach((e) => {
                delete i[e];
              }),
              { blockHash: n, contributorsHex: Object.keys(i) }
            );
          }),
        );
      }
      function f(e, t) {
        return (0, i.memo)(e, (e) =>
          t.derive.crowdloan
            .childKey(e)
            .pipe(
              (0, n.switchMap)((r) =>
                r
                  ? p(t, e, r)
                  : (0, n.of)({ blockHash: "-", contributorsHex: [] }),
              ),
            ),
        );
      }
    },
    10110: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ownContributions = l));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(6618);
      function s(e, t, r) {
        return (0, n.combineLatest)(
          r.map((r) => e.rpc.childstate.getStorage(t, r)),
        ).pipe(
          (0, n.map)((t) =>
            t
              .map((t) => e.registry.createType("Option<StorageData>", t))
              .map((t) =>
                t.isSome
                  ? e.registry.createType("Balance", t.unwrap())
                  : e.registry.createType("Balance"),
              )
              .reduce((e, t, n) => (0, o.objectSpread)(e, { [r[n]]: t }), {}),
          ),
        );
      }
      function u(e, t, r, o) {
        return e.query.system.events().pipe(
          (0, n.switchMap)((i) => {
            const u = (0, a.extractContributed)(t, i),
              c = o.filter((e) => u.added.includes(e) || u.removed.includes(e));
            return c.length ? s(e, r, c) : n.EMPTY;
          }),
          (0, n.startWith)({}),
        );
      }
      function c(e, t, r, i) {
        return (0, n.combineLatest)([s(e, r, i), u(e, t, r, i)]).pipe(
          (0, n.map)((e) => {
            let [t, r] = e;
            return (0, o.objectSpread)({}, t, r);
          }),
        );
      }
      function l(e, t) {
        return (0, i.memo)(e, (e, r) =>
          t.derive.crowdloan
            .childKey(e)
            .pipe(
              (0, n.switchMap)((o) =>
                o && r.length ? c(t, e, o, r) : (0, n.of)({}),
              ),
            ),
        );
      }
    },
    10111: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10112);
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
      var o = r(10113);
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
      var i = r(10114);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10115);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(10116);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var u = r(10117);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var c = r(10118);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(10119);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
      var d = r(10120);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var p = r(10121);
      Object.keys(p).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === p[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return p[e];
              },
            }));
      });
      var f = r(10122);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === f[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
    },
    10112: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dispatchQueue = m));
      var n = r(2766),
        o = r(3453),
        i = r(2757),
        a = r(2770),
        s = r(4545);
      const u = (0, i.stringToHex)("democrac");
      function c(e) {
        return e instanceof o.Enum;
      }
      function l(e) {
        return e.isInline || e.isLegacy || e.isLookup;
      }
      function d(e) {
        return e.query.democracy["dispatchQueue"]().pipe(
          (0, n.switchMap)((t) =>
            (0, n.combineLatest)([
              (0, n.of)(t),
              e.derive.democracy.preimages(
                t.map((e) => {
                  let [, t] = e;
                  return t;
                }),
              ),
            ]),
          ),
          (0, n.map)((e) => {
            let [t, r] = e;
            return t.map((e, t) => {
              let [n, o, i] = e;
              return {
                at: n,
                image: r[t],
                imageHash: (0, s.getImageHashBounded)(o),
                index: i,
              };
            });
          }),
        );
      }
      function p(e) {
        return e.derive.democracy.referendumsFinished().pipe(
          (0, n.switchMap)(() => e.query.scheduler.agenda.keys()),
          (0, n.switchMap)((t) => {
            const r = t.map((e) => {
              let {
                args: [t],
              } = e;
              return t;
            });
            return r.length
              ? (0, n.combineLatest)([
                  (0, n.of)(r),
                  e.query.scheduler.agenda
                    .multi(r)
                    .pipe((0, n.catchError)(() => (0, n.of)(r.map(() => [])))),
                ])
              : (0, n.of)([[], []]);
          }),
        );
      }
      function f(e) {
        return p(e).pipe(
          (0, n.switchMap)((t) => {
            let [r, o] = t;
            const i = [];
            return (
              r.forEach((t, r) => {
                (o[r] || [])
                  .filter((e) => e.isSome)
                  .forEach((r) => {
                    const n = r.unwrap();
                    if (n.maybeId.isSome) {
                      const r = n.maybeId.unwrap().toHex();
                      if (r.startsWith(u)) {
                        const o = c(n.call)
                          ? l(n.call)
                            ? (0, s.getImageHashBounded)(n.call)
                            : n.call.isHash
                              ? n.call.asHash.toHex()
                              : n.call.asValue.args[0].toHex()
                          : n.call.args[0].toHex();
                        i.push({
                          at: t,
                          imageHash: o,
                          index: e.registry.createType(
                            "(u64, ReferendumIndex)",
                            r,
                          )[1],
                        });
                      }
                    }
                  });
              }),
              (0, n.combineLatest)([
                (0, n.of)(i),
                i.length
                  ? e.derive.democracy.preimages(
                      i.map((e) => {
                        let { imageHash: t } = e;
                        return t;
                      }),
                    )
                  : (0, n.of)([]),
              ])
            );
          }),
          (0, n.map)((e) => {
            let [t, r] = e;
            return t.map((e, t) => (0, i.objectSpread)({ image: r[t] }, e));
          }),
        );
      }
      function m(e, t) {
        return (0, a.memo)(e, () => {
          var e;
          return (0, i.isFunction)(
            null === (e = t.query.scheduler) || void 0 === e
              ? void 0
              : e.agenda,
          )
            ? f(t)
            : t.query.democracy["dispatchQueue"]
              ? d(t)
              : (0, n.of)([]);
        });
      }
    },
    10113: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.locks = d));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      const a = [0, 1, 2, 4, 8, 16, 32];
      function s(e, t, r) {
        let { approved: n, end: i } = r;
        return [
          i,
          (n.isTrue && t.isAye) || (n.isFalse && t.isNay)
            ? i.add(
                (
                  e.consts.democracy.voteLockingPeriod ||
                  e.consts.democracy.enactmentPeriod
                ).muln(a[t.conviction.index]),
              )
            : o.BN_ZERO,
        ];
      }
      function u(e, t, r) {
        let [n, i] = t;
        const { balance: a, vote: u } = i.asStandard,
          [c, l] = r.isFinished
            ? s(e, u, r.asFinished)
            : [o.BN_ZERO, o.BN_ZERO];
        return {
          balance: a,
          isDelegated: !1,
          isFinished: r.isFinished,
          referendumEnd: c,
          referendumId: n,
          unlockAt: l,
          vote: u,
        };
      }
      function c(e, t) {
        let { balance: r, conviction: o, target: i } = t;
        return e.derive.democracy.locks(i).pipe(
          (0, n.map)((t) =>
            t.map((t) => {
              let {
                isFinished: n,
                referendumEnd: i,
                referendumId: s,
                unlockAt: u,
                vote: c,
              } = t;
              return {
                balance: r,
                isDelegated: !0,
                isFinished: n,
                referendumEnd: i,
                referendumId: s,
                unlockAt: u.isZero()
                  ? u
                  : i.add(
                      (
                        e.consts.democracy.voteLockingPeriod ||
                        e.consts.democracy.enactmentPeriod
                      ).muln(a[o.index]),
                    ),
                vote: e.registry.createType("Vote", {
                  aye: c.isAye,
                  conviction: o,
                }),
              };
            }),
          ),
        );
      }
      function l(e, t) {
        let { votes: r } = t;
        return r.length
          ? e.query.democracy.referendumInfoOf
              .multi(
                r.map((e) => {
                  let [t] = e;
                  return t;
                }),
              )
              .pipe(
                (0, n.map)((t) =>
                  r
                    .map((e, r) => [e, t[r].unwrapOr(null)])
                    .filter(
                      (e) =>
                        !!e[1] &&
                        (0, o.isUndefined)(e[1].end) &&
                        e[0][1].isStandard,
                    )
                    .map((t) => {
                      let [r, n] = t;
                      return u(e, r, n);
                    }),
                ),
              )
          : (0, n.of)([]);
      }
      function d(e, t) {
        return (0, i.memo)(e, (e) =>
          t.query.democracy.votingOf
            ? t.query.democracy
                .votingOf(e)
                .pipe(
                  (0, n.switchMap)((e) =>
                    e.isDirect
                      ? l(t, e.asDirect)
                      : e.isDelegating
                        ? c(t, e.asDelegating)
                        : (0, n.of)([]),
                  ),
                )
            : (0, n.of)([]),
        );
      }
    },
    10114: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nextExternal = s));
      var n = r(2766),
        o = r(2770),
        i = r(4545);
      function a(e, t) {
        if (t.isNone) return (0, n.of)(null);
        const [r, o] = t.unwrap();
        return e.derive.democracy
          .preimage(r)
          .pipe(
            (0, n.map)((e) => ({
              image: e,
              imageHash: (0, i.getImageHashBounded)(r),
              threshold: o,
            })),
          );
      }
      function s(e, t) {
        return (0, o.memo)(e, () => {
          var e;
          return null !== (e = t.query.democracy) &&
            void 0 !== e &&
            e.nextExternal
            ? t.query.democracy
                .nextExternal()
                .pipe((0, n.switchMap)((e) => a(t, e)))
            : (0, n.of)(null);
        });
      }
    },
    10115: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.preimage = void 0),
        (t.preimages = y));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(4545);
      function s(e) {
        return e.ticket || e.deposit;
      }
      function u(e) {
        return (e.maybeTicket || e.deposit).unwrapOrDefault();
      }
      function c(e, t) {
        return !!t && !e.query.democracy["dispatchQueue"];
      }
      function l(e, t) {
        let r,
          [n, o, i, a] = t;
        try {
          r = e.registry.createType("Call", n.toU8a(!0));
        } catch (s) {
          console.error(s);
        }
        return { at: a, balance: i, proposal: r, proposer: o };
      }
      function d(e, t) {
        if (!t.isNone) {
          if (c(e, t)) {
            const r = t.unwrap();
            if (r.isMissing) return;
            const {
              data: n,
              deposit: o,
              provider: i,
              since: a,
            } = r.asAvailable;
            return l(e, [n, i, o, a]);
          }
          return l(e, t.unwrap());
        }
      }
      function p(e, t) {
        let [r, n, i] = t;
        if (!n) return;
        const [a, c] = n.isUnrequested ? s(n.asUnrequested) : u(n.asRequested);
        let l;
        if (i)
          try {
            l = e.registry.createType("Call", i.toU8a(!0));
          } catch (d) {
            console.error(d);
          }
        return {
          at: o.BN_ZERO,
          balance: c,
          proposal: l,
          proposalHash: r,
          proposer: a,
        };
      }
      function f(e, t) {
        const r = t.map((e) => (0, a.getImageHashBounded)(e));
        return e.query.democracy["preimages"]
          .multi(r)
          .pipe((0, n.map)((t) => t.map((t) => d(e, t))));
      }
      function m(e, t) {
        const r = t.map((e) => (0, a.getImageHashBounded)(e)),
          o = e.registry.lookup.getTypeDef(
            e.query.preimage.preimageFor.creator.meta.type.asMap.key,
          ).type;
        return e.query.preimage.statusFor.multi(r).pipe(
          (0, n.switchMap)((t) => {
            const i = t.map((e) => e.unwrapOr(null)),
              a = i
                .map((e, t) =>
                  e
                    ? "H256" === o
                      ? r[t]
                      : e.isRequested
                        ? [r[t], e.asRequested.len.unwrapOr(0)]
                        : [r[t], e.asUnrequested.len]
                    : null,
                )
                .filter((e) => !!e);
            return e.query.preimage.preimageFor.multi(a).pipe(
              (0, n.map)((t) => {
                let n = -1;
                return i
                  .map((e, o) =>
                    e ? [r[o], e, t[++n].unwrapOr(null)] : [r[o], null, null],
                  )
                  .map((t) => p(e, t));
              }),
            );
          }),
        );
      }
      function y(e, t) {
        return (0, i.memo)(e, (e) =>
          e.length
            ? (0, o.isFunction)(t.query.democracy["preimages"])
              ? f(t, e)
              : (0, o.isFunction)(t.query.preimage.preimageFor)
                ? m(t, e)
                : (0, n.of)([])
            : (0, n.of)([]),
        );
      }
      t.preimage = (0, i.firstMemo)((e, t) =>
        e.derive.democracy.preimages([t]),
      );
    },
    10116: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.proposals = c));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(4545);
      function s(e) {
        return (0, o.isFunction)(e[1].mul);
      }
      function u(e) {
        let [t, r, n] = e;
        return t
          .filter((e, t) => {
            var r;
            let [, , o] = e;
            return (
              !(null === (r = n[t]) || void 0 === r || !r.isSome) && !o.isEmpty
            );
          })
          .map((e, t) => {
            let [i, u, c] = e;
            const l = n[t].unwrap();
            return (0, o.objectSpread)(
              {
                image: r[t],
                imageHash: (0, a.getImageHashBounded)(u),
                index: i,
                proposer: c,
              },
              s(l)
                ? { balance: l[1], seconds: l[0] }
                : { balance: l[0], seconds: l[1] },
            );
          });
      }
      function c(e, t) {
        return (0, i.memo)(e, () => {
          var e;
          return (0, o.isFunction)(
            null === (e = t.query.democracy) || void 0 === e
              ? void 0
              : e.publicProps,
          )
            ? t.query.democracy.publicProps().pipe(
                (0, n.switchMap)((e) =>
                  e.length
                    ? (0, n.combineLatest)([
                        (0, n.of)(e),
                        t.derive.democracy.preimages(
                          e.map((e) => {
                            let [, t] = e;
                            return t;
                          }),
                        ),
                        t.query.democracy.depositOf.multi(
                          e.map((e) => {
                            let [t] = e;
                            return t;
                          }),
                        ),
                      ])
                    : (0, n.of)([[], [], []]),
                ),
                (0, n.map)(u),
              )
            : (0, n.of)([]);
        });
      }
    },
    10117: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.referendumIds = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () => {
          var e;
          return null !== (e = t.query.democracy) &&
            void 0 !== e &&
            e.lowestUnbaked
            ? t
                .queryMulti([
                  t.query.democracy.lowestUnbaked,
                  t.query.democracy.referendumCount,
                ])
                .pipe(
                  (0, n.map)((e) => {
                    let [t, r] = e;
                    return r.gt(t)
                      ? [...Array(r.sub(t).toNumber())].map((e, r) => t.addn(r))
                      : [];
                  }),
                )
            : (0, n.of)([]);
        });
      }
    },
    10118: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.referendums = a));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        return (0, i.memo)(e, () =>
          t.derive.democracy.referendumsActive().pipe(
            (0, n.switchMap)((e) =>
              e.length
                ? (0, n.combineLatest)([
                    (0, n.of)(e),
                    t.derive.democracy._referendumsVotes(e),
                  ])
                : (0, n.of)([[], []]),
            ),
            (0, n.map)((e) => {
              let [t, r] = e;
              return t.map((e, t) => (0, o.objectSpread)({}, e, r[t]));
            }),
          ),
        );
      }
    },
    10119: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.referendumsActive = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          t.derive.democracy
            .referendumIds()
            .pipe(
              (0, n.switchMap)((e) =>
                e.length
                  ? t.derive.democracy.referendumsInfo(e)
                  : (0, n.of)([]),
              ),
            ),
        );
      }
    },
    10120: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.referendumsFinished = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          t.derive.democracy.referendumIds().pipe(
            (0, n.switchMap)((e) =>
              t.query.democracy.referendumInfoOf.multi(e),
            ),
            (0, n.map)((e) =>
              e
                .map((e) => e.unwrapOr(null))
                .filter((e) => !!e && e.isFinished)
                .map((e) => e.asFinished),
            ),
          ),
        );
      }
    },
    10121: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._referendumInfo = p),
        (t._referendumVotes = l),
        (t._referendumsVotes = d),
        (t.referendumsInfo = f));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(4545);
      function s(e, t) {
        return e.query.democracy["votersFor"](t).pipe(
          (0, n.switchMap)((r) =>
            (0, n.combineLatest)([
              (0, n.of)(r),
              r.length
                ? e.query.democracy["voteOf"].multi(r.map((e) => [t, e]))
                : (0, n.of)([]),
              e.derive.balances.votingBalances(r),
            ]),
          ),
          (0, n.map)((t) => {
            let [r, n, o] = t;
            return r.map((t, r) => ({
              accountId: t,
              balance: o[r].votingBalance || e.registry.createType("Balance"),
              isDelegating: !1,
              vote: n[r] || e.registry.createType("Vote"),
            }));
          }),
        );
      }
      function u(e, t) {
        return e
          .filter((e) => {
            let [, t] = e;
            return t.isDirect;
          })
          .map((e) => {
            let [r, n] = e;
            return [
              r,
              n.asDirect.votes.filter((e) => {
                let [r] = e;
                return r.eq(t);
              }),
            ];
          })
          .filter((e) => {
            let [, t] = e;
            return !!t.length;
          })
          .reduce((e, t) => {
            let [r, n] = t;
            return n.reduce((e, t) => {
              let [, n] = t;
              return (
                n.isStandard &&
                  e.push(
                    (0, o.objectSpread)(
                      { accountId: r, isDelegating: !1 },
                      n.asStandard,
                    ),
                  ),
                e
              );
            }, e);
          }, []);
      }
      function c(e, t) {
        return e.query.democracy.votingOf.entries().pipe(
          (0, n.map)((r) => {
            const n = r.map((e) => {
                let [
                  {
                    args: [t],
                  },
                  r,
                ] = e;
                return [t, r];
              }),
              o = u(n, t),
              i = n
                .filter((e) => {
                  let [, t] = e;
                  return t.isDelegating;
                })
                .map((e) => {
                  let [t, r] = e;
                  return [t, r.asDelegating];
                });
            return (
              i.forEach((t) => {
                let [r, { balance: n, conviction: a, target: s }] = t;
                const u = i.find((e) => {
                    let [t] = e;
                    return t.eq(s);
                  }),
                  c = o.find((e) => {
                    let { accountId: t } = e;
                    return t.eq(u ? u[0] : s);
                  });
                c &&
                  o.push({
                    accountId: r,
                    balance: n,
                    isDelegating: !0,
                    vote: e.registry.createType("Vote", {
                      aye: c.vote.isAye,
                      conviction: a,
                    }),
                  });
              }),
              o
            );
          }),
        );
      }
      function l(e, t) {
        return (0, i.memo)(e, (e) =>
          (0, n.combineLatest)([
            t.derive.democracy.sqrtElectorate(),
            (0, o.isFunction)(t.query.democracy.votingOf)
              ? c(t, e.index)
              : s(t, e.index),
          ]).pipe(
            (0, n.map)((t) => {
              let [r, n] = t;
              return (0, a.calcVotes)(r, e, n);
            }),
          ),
        );
      }
      function d(e, t) {
        return (0, i.memo)(e, (e) =>
          e.length
            ? (0, n.combineLatest)(
                e.map((e) => t.derive.democracy._referendumVotes(e)),
              )
            : (0, n.of)([]),
        );
      }
      function p(e, t) {
        return (0, i.memo)(e, (e, r) => {
          const o = (0, a.getStatus)(r);
          return o
            ? t.derive.democracy
                .preimage(o.proposal || o.proposalHash)
                .pipe(
                  (0, n.map)((r) => ({
                    image: r,
                    imageHash: (0, a.getImageHash)(o),
                    index: t.registry.createType("ReferendumIndex", e),
                    status: o,
                  })),
                )
            : (0, n.of)(null);
        });
      }
      function f(e, t) {
        return (0, i.memo)(e, (e) =>
          e.length
            ? t.query.democracy.referendumInfoOf.multi(e).pipe(
                (0, n.switchMap)((r) =>
                  (0, n.combineLatest)(
                    e.map((e, n) =>
                      t.derive.democracy._referendumInfo(e, r[n]),
                    ),
                  ),
                ),
                (0, n.map)((e) => e.filter((e) => !!e)),
              )
            : (0, n.of)([]),
        );
      }
    },
    10122: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sqrtElectorate = a));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        return (0, i.memo)(e, () =>
          t.query.balances.totalIssuance().pipe((0, n.map)(o.bnSqrt)),
        );
      }
    },
    10123: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10124);
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
    10124: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.info = y));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e) {
        return !Array.isArray(e);
      }
      function s(e) {
        return Array.isArray(e);
      }
      function u(e) {
        return a(e) ? [e.who, e.stake] : e;
      }
      function c(e) {
        return s(e) ? e[0] : e;
      }
      function l(e, t) {
        let [, r] = e,
          [, n] = t;
        return n.cmp(r);
      }
      function d(e, t) {
        return t
          ? {
              candidacyBond: e.consts[t].candidacyBond,
              desiredRunnersUp: e.consts[t].desiredRunnersUp,
              desiredSeats: e.consts[t].desiredMembers,
              termDuration: e.consts[t].termDuration,
              votingBond: e.consts[t]["votingBond"],
              votingBondBase: e.consts[t].votingBondBase,
              votingBondFactor: e.consts[t].votingBondFactor,
            }
          : {};
      }
      function p(e) {
        const [t] = e.registry.getModuleInstances(
            e.runtimeVersion.specName,
            "council",
          ) || ["council"],
          r = e.query["phragmenElection"]
            ? "phragmenElection"
            : e.query["electionsPhragmen"]
              ? "electionsPhragmen"
              : e.query.elections
                ? "elections"
                : null,
          n = e.query[t] ? t : "council";
        return [n, r];
      }
      function f(e, t, r) {
        return e.queryMulti([
          e.query[t].members,
          e.query[r].candidates,
          e.query[r].members,
          e.query[r].runnersUp,
        ]);
      }
      function m(e, t) {
        return (0, n.combineLatest)([
          e.query[t].members(),
          (0, n.of)([]),
          (0, n.of)([]),
          (0, n.of)([]),
        ]);
      }
      function y(e, t) {
        return (0, i.memo)(e, () => {
          const [e, r] = p(t);
          return (r ? f(t, e, r) : m(t, e)).pipe(
            (0, n.map)((e) => {
              let [n, i, a, s] = e;
              return (0, o.objectSpread)({}, d(t, r), {
                candidateCount: t.registry.createType("u32", i.length),
                candidates: i.map(c),
                members: a.length
                  ? a.map(u).sort(l)
                  : n.map((e) => [e, t.registry.createType("Balance")]),
                runnersUp: s.map(u).sort(l),
              });
            }),
          );
        });
      }
    },
    10125: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10126);
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
    10126: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.receivedHeartbeats = s));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e) {
        let [t, r, n, i] = e;
        return (
          r.forEach((e, r) => {
            const a = e.toString(),
              s = i[r],
              u = !n[r].isEmpty,
              c = t[a];
            (c && c.hasMessage === u && c.blockCount.eq(s)) ||
              (t[a] = {
                blockCount: s,
                hasMessage: u,
                isOnline: u || s.gt(o.BN_ZERO),
              });
          }),
          t
        );
      }
      function s(e, t) {
        return (0, i.memo)(e, () => {
          var e;
          return null !== (e = t.query.imOnline) &&
            void 0 !== e &&
            e.receivedHeartbeats
            ? t.derive.staking.overview().pipe(
                (0, n.switchMap)((e) => {
                  let { currentIndex: r, validators: o } = e;
                  return (0, n.combineLatest)([
                    (0, n.of)({}),
                    (0, n.of)(o),
                    t.query.imOnline.receivedHeartbeats.multi(
                      o.map((e, t) => [r, t]),
                    ),
                    t.query.imOnline.authoredBlocks.multi(o.map((e) => [r, e])),
                  ]);
                }),
                (0, n.map)(a),
              )
            : (0, n.of)({});
        });
      }
    },
    10127: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.proposals =
          t.proposalHashes =
          t.proposalCount =
          t.proposal =
          t.prime =
          t.members =
          t.hasProposals =
            void 0));
      var n = r(4786);
      ((t.members = (0, n.members)("membership")),
        (t.hasProposals = (0, n.hasProposals)("membership")),
        (t.proposal = (0, n.proposal)("membership")),
        (t.proposalCount = (0, n.proposalCount)("membership")),
        (t.proposalHashes = (0, n.proposalHashes)("membership")),
        (t.proposals = (0, n.proposals)("membership")),
        (t.prime = (0, n.prime)("membership")));
    },
    10128: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10129);
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
      var o = r(10130);
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
    10129: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.info = l));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(6619);
      function s(e, t) {
        const r = t.find((t) => {
          let [r] = t;
          return r === e;
        });
        if (r && r[1].isSome) {
          const [e, t] = r[1].unwrap();
          return (0, o.objectSpread)(
            { collatorId: e },
            t.isWithRetries
              ? { isRetriable: !0, retries: t.asWithRetries.toNumber() }
              : { isRetriable: !1, retries: 0 },
          );
        }
        return null;
      }
      function u(e, t) {
        return t.map((t) => {
          const r = t.find((t) => {
            let [r] = t;
            return r === e;
          });
          return r ? r[1] : null;
        });
      }
      function c(e, t) {
        let [r, n, i, c, l, d, p, f] = t;
        return l.isNone
          ? null
          : {
              active: s(e, r),
              didUpdate: (0, a.didUpdateToBool)(c, e),
              heads: p,
              id: e,
              info: (0, o.objectSpread)({ id: e }, l.unwrap()),
              pendingSwapId: d.unwrapOr(null),
              relayDispatchQueue: f,
              retryCollators: u(e, n),
              selectedCollators: u(e, i),
            };
      }
      function l(e, t) {
        return (0, i.memo)(e, (e) =>
          t.query["registrar"] && t.query["parachains"]
            ? t
                .queryMulti([
                  t.query["registrar"]["active"],
                  t.query["registrar"]["retryQueue"],
                  t.query["registrar"]["selectedThreads"],
                  t.query["parachains"]["didUpdate"],
                  [t.query["registrar"]["paras"], e],
                  [t.query["registrar"]["pendingSwap"], e],
                  [t.query["parachains"]["heads"], e],
                  [t.query["parachains"]["relayDispatchQueue"], e],
                ])
                .pipe(
                  (0, n.map)((r) => c(t.registry.createType("ParaId", e), r)),
                )
            : (0, n.of)(null),
        );
      }
    },
    10130: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.overview = u));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(6619);
      function s(e) {
        let [t, r, n, i, s] = e;
        return t.map((e, t) => ({
          didUpdate: (0, a.didUpdateToBool)(r, e),
          id: e,
          info: (0, o.objectSpread)({ id: e }, i[t].unwrapOr(null)),
          pendingSwapId: s[t].unwrapOr(null),
          relayDispatchQueueSize: n[t][0].toNumber(),
        }));
      }
      function u(e, t) {
        return (0, i.memo)(e, () => {
          var e;
          return null !== (e = t.query["registrar"]) &&
            void 0 !== e &&
            e["parachains"] &&
            t.query["parachains"]
            ? t.query["registrar"]["parachains"]().pipe(
                (0, n.switchMap)((e) =>
                  (0, n.combineLatest)([
                    (0, n.of)(e),
                    t.query["parachains"]["didUpdate"](),
                    t.query["parachains"]["relayDispatchQueueSize"].multi(e),
                    t.query["registrar"]["paras"].multi(e),
                    t.query["registrar"]["pendingSwap"].multi(e),
                  ]),
                ),
                (0, n.map)(s),
              )
            : (0, n.of)([]);
        });
      }
    },
    10131: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10132);
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
      var o = r(10133);
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
      var i = r(10134);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
    },
    10132: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.indexes = c));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        let [t, r, n, o, i] = e;
        return {
          activeEra: r,
          activeEraStart: n,
          currentEra: o,
          currentIndex: t,
          validatorCount: i,
        };
      }
      function a(e) {
        return e
          .queryMulti([
            e.query.session.currentIndex,
            e.query.staking.activeEra,
            e.query.staking.currentEra,
            e.query.staking.validatorCount,
          ])
          .pipe(
            (0, n.map)((e) => {
              let [t, r, n, o] = e;
              const { index: a, start: s } = r.unwrapOrDefault();
              return i([t, a, s, n.unwrapOrDefault(), o]);
            }),
          );
      }
      function s(e) {
        return e.query.session
          .currentIndex()
          .pipe(
            (0, n.map)((t) =>
              i([
                t,
                e.registry.createType("EraIndex"),
                e.registry.createType("Option<Moment>"),
                e.registry.createType("EraIndex"),
                e.registry.createType("u32"),
              ]),
            ),
          );
      }
      function u(e) {
        return (0, n.of)(
          i([
            e.registry.createType("SessionIndex", 1),
            e.registry.createType("EraIndex"),
            e.registry.createType("Option<Moment>"),
            e.registry.createType("EraIndex"),
            e.registry.createType("u32"),
          ]),
        );
      }
      function c(e, t) {
        return (0, o.memo)(e, () =>
          t.query.session ? (t.query.staking ? a(t) : s(t)) : u(t),
        );
      }
    },
    10133: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.info = a));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        return (0, i.memo)(e, () =>
          t.derive.session.indexes().pipe(
            (0, n.map)((e) => {
              var r, n, i, a;
              const s =
                  (null === (r = t.consts) ||
                  void 0 === r ||
                  null === (n = r.babe) ||
                  void 0 === n
                    ? void 0
                    : n.epochDuration) || t.registry.createType("u64", 1),
                u =
                  (null === (i = t.consts) ||
                  void 0 === i ||
                  null === (a = i.staking) ||
                  void 0 === a
                    ? void 0
                    : a.sessionsPerEra) ||
                  t.registry.createType("SessionIndex", 1);
              return (0, o.objectSpread)(
                {
                  eraLength: t.registry.createType("BlockNumber", u.mul(s)),
                  isEpoch: !!t.query.babe,
                  sessionLength: s,
                  sessionsPerEra: u,
                },
                e,
              );
            }),
          ),
        );
      }
    },
    10134: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.eraProgress = t.eraLength = void 0),
        (t.progress = l),
        (t.sessionProgress = void 0));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e) {
        return (t, r) =>
          (0, i.memo)(t, () =>
            r.derive.session.progress().pipe((0, n.map)((t) => t[e])),
          );
      }
      function s(e, t, r) {
        let [n, i, a, s] = r;
        const u = i.mul(t.sessionLength).iadd(a),
          c = n.sub(u),
          l = t.currentIndex.sub(s).imul(t.sessionLength).iadd(c);
        return (0, o.objectSpread)(
          {
            eraProgress: e.registry.createType("BlockNumber", l),
            sessionProgress: e.registry.createType("BlockNumber", c),
          },
          t,
        );
      }
      function u(e) {
        return e.derive.session
          .info()
          .pipe(
            (0, n.map)((t) =>
              (0, o.objectSpread)(
                {
                  eraProgress: e.registry.createType("BlockNumber"),
                  sessionProgress: e.registry.createType("BlockNumber"),
                },
                t,
              ),
            ),
          );
      }
      function c(e) {
        return e.derive.session.info().pipe(
          (0, n.switchMap)((t) => {
            var r;
            return (0, n.combineLatest)([
              (0, n.of)(t),
              null !== (r = e.query.staking) &&
              void 0 !== r &&
              r.erasStartSessionIndex
                ? e.queryMulti([
                    e.query.babe.currentSlot,
                    e.query.babe.epochIndex,
                    e.query.babe.genesisSlot,
                    [e.query.staking.erasStartSessionIndex, t.activeEra],
                  ])
                : e.queryMulti([
                    e.query.babe.currentSlot,
                    e.query.babe.epochIndex,
                    e.query.babe.genesisSlot,
                  ]),
            ]);
          }),
          (0, n.map)((t) => {
            let [r, [n, o, i, a]] = t;
            return [
              r,
              [
                n,
                o,
                i,
                a && a.isSome
                  ? a.unwrap()
                  : e.registry.createType("SessionIndex", 1),
              ],
            ];
          }),
        );
      }
      function l(e, t) {
        return (0, i.memo)(e, () =>
          t.query.babe
            ? c(t).pipe(
                (0, n.map)((e) => {
                  let [r, n] = e;
                  return s(t, r, n);
                }),
              )
            : u(t),
        );
      }
      ((t.eraLength = a("eraLength")),
        (t.eraProgress = a("eraProgress")),
        (t.sessionProgress = a("sessionProgress")));
    },
    10135: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10136);
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
      var o = r(10137);
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
      var i = r(10138);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10139);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
    },
    10136: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.candidates = s));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        return e.query.society.candidates().pipe(
          (0, n.switchMap)((t) =>
            (0, n.combineLatest)([
              (0, n.of)(t),
              e.query.society["suspendedCandidates"].multi(
                t.map((e) => {
                  let { who: t } = e;
                  return t;
                }),
              ),
            ]),
          ),
          (0, n.map)((e) => {
            let [t, r] = e;
            return t.map((e, t) => {
              let { kind: n, value: o, who: i } = e;
              return {
                accountId: i,
                isSuspended: r[t].isSome,
                kind: n,
                value: o,
              };
            });
          }),
        );
      }
      function a(e) {
        return e.query.society.candidates.entries().pipe(
          (0, n.map)((e) =>
            e
              .filter((e) => {
                let [, t] = e;
                return t.isSome;
              })
              .map((e) => {
                let [
                  {
                    args: [t],
                  },
                  r,
                ] = e;
                return [t, r.unwrap()];
              })
              .map((e) => {
                let [t, { bid: r, kind: n }] = e;
                return { accountId: t, isSuspended: !1, kind: n, value: r };
              }),
          ),
        );
      }
      function s(e, t) {
        return (0, o.memo)(e, () =>
          t.query.society["suspendedCandidates"] &&
          t.query.society.candidates.creator.meta.type.isPlain
            ? i(t)
            : a(t),
        );
      }
    },
    10137: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.info = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          (0, n.combineLatest)([
            t.query.society.bids(),
            t.query.society["defender"]
              ? t.query.society["defender"]()
              : (0, n.of)(void 0),
            t.query.society.founder(),
            t.query.society.head(),
            t.query.society["maxMembers"]
              ? t.query.society["maxMembers"]()
              : (0, n.of)(void 0),
            t.query.society.pot(),
          ]).pipe(
            (0, n.map)((e) => {
              let [t, r, n, o, i, a] = e;
              return {
                bids: t,
                defender:
                  null === r || void 0 === r ? void 0 : r.unwrapOr(void 0),
                founder: n.unwrapOr(void 0),
                hasDefender:
                  ((null === r || void 0 === r ? void 0 : r.isSome) &&
                    o.isSome &&
                    !o.eq(r)) ||
                  !1,
                head: o.unwrapOr(void 0),
                maxMembers: i,
                pot: a,
              };
            }),
          ),
        );
      }
    },
    10138: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.member = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          t.derive.society._members([e]).pipe(
            (0, n.map)((e) => {
              let [t] = e;
              return t;
            }),
          ),
        );
      }
    },
    10139: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._members = s),
        (t.members = u));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, n.combineLatest)([
          (0, n.of)(t),
          e.query.society.payouts.multi(t),
          e.query.society["strikes"].multi(t),
          e.query.society.defenderVotes.multi(t),
          e.query.society.suspendedMembers.multi(t),
          e.query.society["vouching"].multi(t),
        ]).pipe(
          (0, n.map)((e) => {
            let [t, r, n, o, i, a] = e;
            return t.map((e, t) => ({
              accountId: e,
              isDefenderVoter: o[t].isSome,
              isSuspended: i[t].isTrue,
              payouts: r[t],
              strikes: n[t],
              vote: o[t].unwrapOr(void 0),
              vouching: a[t].unwrapOr(void 0),
            }));
          }),
        );
      }
      function a(e, t) {
        return (0, n.combineLatest)([
          (0, n.of)(t),
          e.query.society.members.multi(t),
          e.query.society.payouts.multi(t),
          e.query.society
            .challengeRoundCount()
            .pipe(
              (0, n.switchMap)((r) =>
                e.query.society.defenderVotes.multi(t.map((e) => [r, e])),
              ),
            ),
          e.query.society.suspendedMembers.multi(t),
        ]).pipe(
          (0, n.map)((e) => {
            let [t, r, n, o, i] = e;
            return t
              .map((e, t) =>
                r[t].isSome
                  ? {
                      accountId: e,
                      isDefenderVoter: o[t].isSome,
                      isSuspended: i[t].isSome,
                      member: r[t].unwrap(),
                      payouts: n[t].payouts,
                    }
                  : null,
              )
              .filter((e) => !!e)
              .map((e) => {
                let {
                  accountId: t,
                  isDefenderVoter: r,
                  isSuspended: n,
                  member: o,
                  payouts: i,
                } = e;
                return {
                  accountId: t,
                  isDefenderVoter: r,
                  isSuspended: n,
                  payouts: i,
                  strikes: o.strikes,
                  vouching: o.vouching.unwrapOr(void 0),
                };
              });
          }),
        );
      }
      function s(e, t) {
        return (0, o.memo)(e, (e) =>
          t.query.society.members.creator.meta.type.isMap ? a(t, e) : i(t, e),
        );
      }
      function u(e, t) {
        return (0, o.memo)(e, () =>
          t.query.society.members.creator.meta.type.isMap
            ? t.query.society.members.keys().pipe(
                (0, n.switchMap)((e) =>
                  t.derive.society._members(
                    e.map((e) => {
                      let {
                        args: [t],
                      } = e;
                      return t;
                    }),
                  ),
                ),
              )
            : t.query.society
                .members()
                .pipe((0, n.switchMap)((e) => t.derive.society._members(e))),
        );
      }
    },
    10140: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10141);
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
      var o = r(10142);
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
      var i = r(10143);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10144);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(10145);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var u = r(10146);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var c = r(10147);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(10148);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
      var d = r(10149);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var p = r(10150);
      Object.keys(p).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === p[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return p[e];
              },
            }));
      });
      var f = r(10151);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === f[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      var m = r(10152);
      Object.keys(m).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === m[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return m[e];
              },
            }));
      });
      var y = r(10153);
      Object.keys(y).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === y[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return y[e];
              },
            }));
      });
      var v = r(10154);
      Object.keys(v).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === v[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return v[e];
              },
            }));
      });
      var b = r(10155);
      Object.keys(b).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === b[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return b[e];
              },
            }));
      });
      var g = r(10156);
      Object.keys(g).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === g[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return g[e];
              },
            }));
      });
      var h = r(10157);
      Object.keys(h).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === h[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return h[e];
              },
            }));
      });
      var _ = r(10158);
      Object.keys(_).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === _[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return _[e];
              },
            }));
      });
      var O = r(10159);
      Object.keys(O).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === O[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return O[e];
              },
            }));
      });
      var k = r(10160);
      Object.keys(k).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === k[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return k[e];
              },
            }));
      });
      var M = r(10161);
      Object.keys(M).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === M[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return M[e];
              },
            }));
      });
      var j = r(10162);
      Object.keys(j).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === j[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return j[e];
              },
            }));
      });
    },
    10141: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.account = void 0),
        (t.accounts = d));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      const a = {
        withDestination: !0,
        withLedger: !0,
        withNominations: !0,
        withPrefs: !0,
      };
      function s(e) {
        return e.reduce((e, t) => {
          let { era: r, value: n } = t;
          const i = r.toString();
          return ((e[i] = (e[i] || o.BN_ZERO).add(n.unwrap())), e);
        }, {});
      }
      function u(e, t, r) {
        const n = Object.entries(
          s(
            ((null === t || void 0 === t ? void 0 : t.unlocking) || []).filter(
              (e) => {
                let { era: t } = e;
                return t.unwrap().gt(r.activeEra);
              },
            ),
          ),
        ).map((t) => {
          let [n, i] = t;
          return {
            remainingEras: new o.BN(n).isub(r.activeEra),
            value: e.registry.createType("Balance", i),
          };
        });
        return n.length ? n : void 0;
      }
      function c(e, t, r) {
        return e.registry.createType(
          "Balance",
          ((null === t || void 0 === t ? void 0 : t.unlocking) || []).reduce(
            (e, t) => {
              let { era: n, value: o } = t;
              return n.unwrap().gt(r.currentEra) ? e : e.iadd(o.unwrap());
            },
            new o.BN(0),
          ),
        );
      }
      function l(e, t, r, n) {
        return (0, o.objectSpread)({}, r, n, {
          redeemable: c(e, n.stakingLedger, t),
          unlocking: u(e, n.stakingLedger, t),
        });
      }
      function d(e, t) {
        return (0, i.memo)(e, function (e, r) {
          return (
            void 0 === r && (r = a),
            t.derive.session.info().pipe(
              (0, n.switchMap)((o) =>
                (0, n.combineLatest)([
                  t.derive.staking.keysMulti(e),
                  t.derive.staking.queryMulti(e, r),
                ]).pipe(
                  (0, n.map)((e) => {
                    let [r, n] = e;
                    return n.map((e, n) => l(t, o, r[n], e));
                  }),
                ),
              ),
            )
          );
        });
      }
      t.account = (0, i.firstMemo)((e, t, r) =>
        e.derive.staking.accounts([t], r),
      );
    },
    10142: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.currentPoints = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          t.derive.session.indexes().pipe(
            (0, n.switchMap)((e) => {
              let { activeEra: r } = e;
              return t.query.staking.erasRewardPoints(r);
            }),
          ),
        );
      }
    },
    10143: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.electedInfo = u));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      const a = { withController: !0, withExposure: !0, withPrefs: !0 };
      function s(e, t) {
        return (0, o.arrayFlatten)([
          e,
          t.filter((t) => !e.find((e) => e.eq(t))),
        ]);
      }
      function u(e, t) {
        return (0, i.memo)(e, function (e, r) {
          return (
            void 0 === e && (e = a),
            void 0 === r && (r = 0),
            t.derive.staking.validators().pipe(
              (0, n.switchMap)((o) => {
                let { nextElected: i, validators: a } = o;
                return t.derive.staking
                  .queryMulti(s(i, a), e, r)
                  .pipe(
                    (0, n.map)((e) => ({
                      info: e,
                      nextElected: i,
                      validators: a,
                    })),
                  );
              }),
            )
          );
        });
      }
    },
    10144: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._eraExposure = l),
        (t.erasExposure = t.eraExposure = t._erasExposure = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(4546),
        a = r(3388);
      const s = "eraExposure";
      function u(e, t) {
        const r = {},
          n = {};
        return (
          t.forEach((e) => {
            let [t, o] = e;
            const i = t.args[1].toString();
            ((n[i] = o),
              o.others.forEach((e, t) => {
                let { who: n } = e;
                const o = n.toString();
                ((r[o] = r[o] || []),
                  r[o].push({ validatorId: i, validatorIndex: t }));
              }));
          }),
          { era: e, nominators: r, validators: n }
        );
      }
      function c(e, t) {
        const r = {},
          n = {};
        return (
          t.forEach((e) => {
            let [t, o] = e;
            if (o.isSome) {
              const e = t.args[1].toString(),
                i = o.unwrap();
              ((n[e] = i),
                i.others.forEach((t, n) => {
                  let { who: o } = t;
                  const i = o.toString();
                  ((r[i] = r[i] || []),
                    r[i].push({ validatorId: e, validatorIndex: n }));
                }));
            }
          }),
          { era: e, nominators: r, validators: n }
        );
      }
      function l(e, t) {
        return (0, o.memo)(e, function (e, r) {
          void 0 === r && (r = !1);
          const [o, a] = (0, i.getEraCache)(s, e, r);
          return a
            ? (0, n.of)(a)
            : t.query.staking.erasStakersPaged
              ? t.query.staking.erasStakersPaged
                  .entries(e)
                  .pipe((0, n.map)((t) => (0, i.setEraCache)(o, r, c(e, t))))
              : t.query.staking.erasStakersClipped
                  .entries(e)
                  .pipe((0, n.map)((t) => (0, i.setEraCache)(o, r, u(e, t))));
        });
      }
      ((t.eraExposure = (0, a.singleEra)("_eraExposure")),
        (t._erasExposure = (0, a.combineEras)("_eraExposure")),
        (t.erasExposure = (0, a.erasHistoricApply)("_erasExposure")));
    },
    10145: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.erasHistoric = a));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        return (0, i.memo)(e, (e) =>
          (0, n.combineLatest)([
            t.query.staking.activeEra(),
            t.consts.staking.historyDepth
              ? (0, n.of)(t.consts.staking.historyDepth)
              : t.query.staking["historyDepth"](),
          ]).pipe(
            (0, n.map)((r) => {
              let [n, i] = r;
              const a = [],
                s = i.toNumber(),
                u = n.unwrapOrDefault().index;
              let c = u;
              while (c.gte(o.BN_ZERO) && a.length < s)
                ((c === u && !0 !== e) ||
                  a.push(t.registry.createType("EraIndex", c)),
                  (c = c.sub(o.BN_ONE)));
              return a.reverse();
            }),
          ),
        );
      }
    },
    10146: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._erasPoints = d),
        (t.erasPoints = void 0));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(4546),
        s = r(3388);
      const u = "eraPoints";
      function c(e) {
        let { individual: t } = e;
        return [...t.entries()]
          .filter((e) => {
            let [, t] = e;
            return t.gt(o.BN_ZERO);
          })
          .reduce((e, t) => {
            let [r, n] = t;
            return ((e[r.toString()] = n), e);
          }, {});
      }
      function l(e, t) {
        return e.map((e, r) => ({
          era: e,
          eraPoints: t[r].total,
          validators: c(t[r]),
        }));
      }
      function d(e, t) {
        return (0, i.memo)(e, (e, r) => {
          if (!e.length) return (0, n.of)([]);
          const o = (0, a.getEraMultiCache)(u, e, r),
            i = (0, s.filterEras)(e, o);
          return i.length
            ? t.query.staking.erasRewardPoints
                .multi(i)
                .pipe(
                  (0, n.map)((t) =>
                    (0, a.filterCachedEras)(
                      e,
                      o,
                      (0, a.setEraMultiCache)(u, r, l(i, t)),
                    ),
                  ),
                )
            : (0, n.of)(o);
        });
      }
      t.erasPoints = (0, s.erasHistoricApply)("_erasPoints");
    },
    10147: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._eraPrefs = c),
        (t.erasPrefs = t.eraPrefs = t._erasPrefs = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(4546),
        a = r(3388);
      const s = "eraPrefs";
      function u(e, t) {
        const r = {};
        return (
          t.forEach((e) => {
            let [t, n] = e;
            r[t.args[1].toString()] = n;
          }),
          { era: e, validators: r }
        );
      }
      function c(e, t) {
        return (0, o.memo)(e, (e, r) => {
          const [o, a] = (0, i.getEraCache)(s, e, r);
          return a
            ? (0, n.of)(a)
            : t.query.staking.erasValidatorPrefs
                .entries(e)
                .pipe((0, n.map)((t) => (0, i.setEraCache)(o, r, u(e, t))));
        });
      }
      ((t.eraPrefs = (0, a.singleEra)("_eraPrefs")),
        (t._erasPrefs = (0, a.combineEras)("_eraPrefs")),
        (t.erasPrefs = (0, a.erasHistoricApply)("_erasPrefs")));
    },
    10148: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._erasRewards = c),
        (t.erasRewards = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(4546),
        a = r(3388);
      const s = "eraRewards";
      function u(e, t) {
        return e.map((e, r) => ({ era: e, eraReward: t[r].unwrapOrDefault() }));
      }
      function c(e, t) {
        return (0, o.memo)(e, (e, r) => {
          if (!e.length) return (0, n.of)([]);
          const o = (0, i.getEraMultiCache)(s, e, r),
            c = (0, a.filterEras)(e, o);
          return c.length
            ? t.query.staking.erasValidatorReward
                .multi(c)
                .pipe(
                  (0, n.map)((t) =>
                    (0, i.filterCachedEras)(
                      e,
                      o,
                      (0, i.setEraMultiCache)(s, r, u(c, t)),
                    ),
                  ),
                )
            : (0, n.of)(o);
        });
      }
      t.erasRewards = (0, a.erasHistoricApply)("_erasRewards");
    },
    10149: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._eraSlashes = c),
        (t.erasSlashes = t.eraSlashes = t._erasSlashes = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(4546),
        a = r(3388);
      const s = "eraSlashes";
      function u(e, t, r) {
        const n = {},
          o = {};
        return (
          t.forEach((e) => {
            let [t, r] = e;
            n[t.args[1].toString()] = r.unwrap();
          }),
          r.forEach((e) => {
            let [t, r] = e;
            o[t.args[1].toString()] = r.unwrapOrDefault()[1];
          }),
          { era: e, nominators: n, validators: o }
        );
      }
      function c(e, t) {
        return (0, o.memo)(e, (e, r) => {
          const [o, a] = (0, i.getEraCache)(s, e, r);
          return a
            ? (0, n.of)(a)
            : (0, n.combineLatest)([
                t.query.staking.nominatorSlashInEra.entries(e),
                t.query.staking.validatorSlashInEra.entries(e),
              ]).pipe(
                (0, n.map)((t) => {
                  let [n, a] = t;
                  return (0, i.setEraCache)(o, r, u(e, n, a));
                }),
              );
        });
      }
      ((t.eraSlashes = (0, a.singleEra)("_eraSlashes")),
        (t._erasSlashes = (0, a.combineEras)("_eraSlashes")),
        (t.erasSlashes = (0, a.erasHistoricApply)("_erasSlashes")));
    },
    10150: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.keys = void 0),
        (t.keysMulti = a));
      var n = r(2766),
        o = r(2770);
      function i(e, t, r) {
        const n = (t.find((t) => {
            let [r] = t;
            return r.eq(e);
          }) || [void 0, []])[1],
          o = r.unwrapOr([]);
        return {
          nextSessionIds: Array.isArray(o) ? o : [...o.values()],
          sessionIds: Array.isArray(n) ? n : [...n.values()],
        };
      }
      t.keys = (0, o.firstMemo)((e, t) => e.derive.staking.keysMulti([t]));
      function a(e, t) {
        return (0, o.memo)(e, (e) =>
          e.length
            ? t.query.session.queuedKeys().pipe(
                (0, n.switchMap)((r) => {
                  var o;
                  return (0, n.combineLatest)([
                    (0, n.of)(r),
                    null !== (o = t.consts["session"]) &&
                    void 0 !== o &&
                    o["dedupKeyPrefix"]
                      ? t.query.session.nextKeys.multi(
                          e.map((e) => [
                            t.consts["session"]["dedupKeyPrefix"],
                            e,
                          ]),
                        )
                      : (0, n.combineLatest)(
                          e.map((e) => t.query.session.nextKeys(e)),
                        ),
                  ]);
                }),
                (0, n.map)((t) => {
                  let [r, n] = t;
                  return e.map((e, t) => i(e, r, n[t]));
                }),
              )
            : (0, n.of)([]),
        );
      }
    },
    10151: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.overview = a));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        return (0, i.memo)(e, () =>
          (0, n.combineLatest)([
            t.derive.session.indexes(),
            t.derive.staking.validators(),
          ]).pipe(
            (0, n.map)((e) => {
              let [t, { nextElected: r, validators: n }] = e;
              return (0, o.objectSpread)({}, t, {
                nextElected: r,
                validators: n,
              });
            }),
          ),
        );
      }
    },
    10152: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._ownExposures = a),
        (t.ownExposures = t.ownExposure = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(3388);
      function a(e, t) {
        return (0, o.memo)(e, (e, r, o, i) => {
          const a = t.registry.createType("Exposure"),
            s = t.registry.createType("Option<Null>"),
            u = t.registry.createType("Option<Null>");
          return r.length
            ? (0, n.combineLatest)([
                t.query.staking.erasStakersClipped
                  ? (0, n.combineLatest)(
                      r.map((r) => t.query.staking.erasStakersClipped(r, e)),
                    )
                  : (0, n.of)(r.map((e) => a)),
                t.query.staking.erasStakers
                  ? (0, n.combineLatest)(
                      r.map((r) => t.query.staking.erasStakers(r, e)),
                    )
                  : (0, n.of)(r.map((e) => a)),
                t.query.staking.erasStakersPaged
                  ? (0, n.combineLatest)(
                      r.map((r) => t.query.staking.erasStakersPaged(r, e, i)),
                    )
                  : (0, n.of)(r.map((e) => s)),
                t.query.staking.erasStakersOverview
                  ? (0, n.combineLatest)(
                      r.map((r) => t.query.staking.erasStakersOverview(r, e)),
                    )
                  : (0, n.of)(r.map((e) => u)),
              ]).pipe(
                (0, n.map)((e) => {
                  let [t, n, o, i] = e;
                  return r.map((e, r) => ({
                    clipped: t[r],
                    era: e,
                    exposure: n[r],
                    exposureMeta: i[r],
                    exposurePaged: o[r],
                  }));
                }),
              )
            : (0, n.of)([]);
        });
      }
      ((t.ownExposure = (0, o.firstMemo)((e, t, r, n) =>
        e.derive.staking._ownExposures(t, [r], !0, n || 0),
      )),
        (t.ownExposures = (0, i.erasHistoricApplyAccount)("_ownExposures")));
    },
    10153: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._ownSlashes = a),
        (t.ownSlashes = t.ownSlash = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(3388);
      function a(e, t) {
        return (0, o.memo)(e, (e, r, o) =>
          r.length
            ? (0, n.combineLatest)([
                (0, n.combineLatest)(
                  r.map((r) => t.query.staking.validatorSlashInEra(r, e)),
                ),
                (0, n.combineLatest)(
                  r.map((r) => t.query.staking.nominatorSlashInEra(r, e)),
                ),
              ]).pipe(
                (0, n.map)((e) => {
                  let [t, n] = e;
                  return r.map((e, r) => ({
                    era: e,
                    total: t[r].isSome
                      ? t[r].unwrap()[1]
                      : n[r].unwrapOrDefault(),
                  }));
                }),
              )
            : (0, n.of)([]),
        );
      }
      ((t.ownSlash = (0, o.firstMemo)((e, t, r) =>
        e.derive.staking._ownSlashes(t, [r], !0),
      )),
        (t.ownSlashes = (0, i.erasHistoricApplyAccount)("_ownSlashes")));
    },
    10154: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.query = void 0),
        (t.queryMulti = p));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        return "boolean" === typeof e.isSome ? e.unwrapOr(null) : e;
      }
      function a(e, t) {
        return e.registry.createType(
          "Vec<u32>",
          t.filter((e) => -1 !== e),
        );
      }
      function s(e, t, r, n) {
        const o = {},
          i = {},
          a = e.map((e) => e.toString());
        return (
          r.forEach((e) => {
            let [t, r] = e;
            const n = t.args[1].toString(),
              i = t.args[0].toNumber();
            a.includes(n) &&
              (o[n] || (o[n] = new Map()), o[n].set(i, r.toArray()));
          }),
          n.forEach((e) => {
            let [t, r] = e;
            const n = t.args[1].toString(),
              o = t.args[0].toNumber();
            a.includes(n) &&
              r.isSome &&
              (i[n] || (i[n] = new Map()), i[n].set(o, r.unwrap().pageCount));
          }),
          e.map((e) => {
            const r = o[e.toString()],
              n = i[e.toString()];
            return t.map((e) => {
              if (r && r.has(e) && n && n.has(e)) {
                const t = r.get(e),
                  o = n.get(e);
                return t.length === o.toNumber() ? e : -1;
              }
              return -1;
            });
          })
        );
      }
      function u(e, t, r, n, o, s, u, c, l, d, p) {
        return {
          accountId: t,
          claimedRewardsEras: a(e, d),
          controllerId:
            (null === r || void 0 === r ? void 0 : r.unwrapOr(null)) || null,
          exposureEraStakers: p,
          exposureMeta: l,
          exposurePaged: u,
          nominators: n.isSome ? n.unwrap().targets : [],
          rewardDestination: i(o),
          stakingLedger: c.unwrapOrDefault(),
          stashId: t,
          validatorPrefs: s,
        };
      }
      function c(e, t, r) {
        let { withLedger: o = !1 } = r;
        const i = t.filter((e) => o && !!e && e.isSome).map((e) => e.unwrap()),
          a = e.registry.createType("Option<StakingLedger>");
        return (
          i.length
            ? (0, n.combineLatest)(i.map((t) => e.query.staking.ledger(t)))
            : (0, n.of)([])
        ).pipe(
          (0, n.map)((e) => {
            let r = -1;
            return t.map((t) => (t && t.isSome && e[++r]) || a);
          }),
        );
      }
      function l(e, t, r, o, i) {
        let {
          withClaimedRewardsEras: a,
          withController: u,
          withDestination: c,
          withExposure: l,
          withExposureErasStakersLegacy: d,
          withExposureMeta: p,
          withLedger: f,
          withNominations: m,
          withPrefs: y,
        } = o;
        const v = e.registry.createType("Option<Nominations>"),
          b = e.registry.createType("RewardDestination"),
          g = e.registry.createType("Exposure"),
          h = e.registry.createType("ValidatorPrefs"),
          _ = e.registry.createType("Option<Null>"),
          O = e.registry.createType("Option<Null>"),
          k = [-1],
          M = Number(e.consts.staking.historyDepth.toNumber()),
          j = new Array(M)
            .fill(0)
            .map((e, t) => (0 === t ? r.toNumber() - 1 : r.toNumber() - t - 1));
        return (0, n.combineLatest)([
          u || f
            ? (0, n.combineLatest)(t.map((t) => e.query.staking.bonded(t)))
            : (0, n.of)(t.map(() => null)),
          m
            ? (0, n.combineLatest)(t.map((t) => e.query.staking.nominators(t)))
            : (0, n.of)(t.map(() => v)),
          c
            ? (0, n.combineLatest)(t.map((t) => e.query.staking.payee(t)))
            : (0, n.of)(t.map(() => b)),
          y
            ? (0, n.combineLatest)(t.map((t) => e.query.staking.validators(t)))
            : (0, n.of)(t.map(() => h)),
          l && e.query.staking.erasStakersPaged
            ? (0, n.combineLatest)(
                t.map((t) => e.query.staking.erasStakersPaged(r, t, i)),
              )
            : (0, n.of)(t.map(() => _)),
          p && e.query.staking.erasStakersOverview
            ? (0, n.combineLatest)(
                t.map((t) => e.query.staking.erasStakersOverview(r, t)),
              )
            : (0, n.of)(t.map(() => O)),
          a && e.query.staking.claimedRewards
            ? (0, n.combineLatest)([
                e.query.staking.claimedRewards.entries(),
                e.query.staking.erasStakersOverview.entries(),
              ]).pipe(
                (0, n.map)((e) => {
                  let [r, n] = e;
                  return s(t, j, r, n);
                }),
              )
            : (0, n.of)(t.map(() => k)),
          d && e.query.staking.erasStakers
            ? (0, n.combineLatest)(
                t.map((t) => e.query.staking.erasStakers(r, t)),
              )
            : (0, n.of)(t.map(() => g)),
        ]);
      }
      function d(e, t, r, o, i) {
        return l(e, r, t, o, i).pipe(
          (0, n.switchMap)((t) => {
            let [i, a, s, l, d, p, f, m] = t;
            return c(e, i, o).pipe(
              (0, n.map)((t) =>
                r.map((r, n) =>
                  u(e, r, i[n], a[n], s[n], l[n], d[n], t[n], p[n], f[n], m[n]),
                ),
              ),
            );
          }),
        );
      }
      t.query = (0, o.firstMemo)((e, t, r, n) =>
        e.derive.staking.queryMulti([t], r, n),
      );
      function p(e, t) {
        return (0, o.memo)(e, (e, r, o) =>
          t.derive.session.indexes().pipe(
            (0, n.switchMap)((i) => {
              let { activeEra: a } = i;
              const s = e.map((e) => t.registry.createType("AccountId", e)),
                u = o || 0;
              return s.length ? d(t, a, s, r, u) : (0, n.of)([]);
            }),
          ),
        );
      }
    },
    10155: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._stakerExposures = i),
        (t.stakerExposure = void 0),
        (t.stakerExposures = a));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, function (e, r, o) {
          void 0 === o && (o = !1);
          const i = e.map((e) =>
            t.registry.createType("AccountId", e).toString(),
          );
          return t.derive.staking._erasExposure(r, o).pipe(
            (0, n.map)((e) =>
              i.map((t) =>
                e.map((e) => {
                  let { era: r, nominators: n, validators: o } = e;
                  const i = !!o[t],
                    a = {},
                    s = n[t] || [];
                  return (
                    i
                      ? (a[t] = o[t])
                      : s &&
                        s.forEach((e) => {
                          let { validatorId: t } = e;
                          a[t] = o[t];
                        }),
                    {
                      era: r,
                      isEmpty: !Object.keys(a).length,
                      isValidator: i,
                      nominating: s,
                      validators: a,
                    }
                  );
                }),
              ),
            ),
          );
        });
      }
      function a(e, t) {
        return (0, o.memo)(e, function (e, r) {
          return (
            void 0 === r && (r = !1),
            t.derive.staking
              .erasHistoric(r)
              .pipe(
                (0, n.switchMap)((n) =>
                  t.derive.staking._stakerExposures(e, n, r),
                ),
              )
          );
        });
      }
      t.stakerExposure = (0, o.firstMemo)((e, t, r) =>
        e.derive.staking.stakerExposures([t], r),
      );
    },
    10156: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._stakerPoints = a),
        (t.stakerPoints = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(3388);
      function a(e, t) {
        return (0, o.memo)(e, (e, r, o) => {
          const i = t.registry.createType("AccountId", e).toString();
          return t.derive.staking._erasPoints(r, o).pipe(
            (0, n.map)((e) =>
              e.map((e) => {
                let { era: r, eraPoints: n, validators: o } = e;
                return {
                  era: r,
                  eraPoints: n,
                  points: o[i] || t.registry.createType("RewardPoint"),
                };
              }),
            ),
          );
        });
      }
      t.stakerPoints = (0, i.erasHistoricApplyAccount)("_stakerPoints");
    },
    10157: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._stakerPrefs = a),
        (t.stakerPrefs = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(3388);
      function a(e, t) {
        return (0, o.memo)(e, (e, r, o) =>
          t.query.staking.erasValidatorPrefs
            .multi(r.map((t) => [t, e]))
            .pipe(
              (0, n.map)((e) =>
                e.map((e, t) => ({ era: r[t], validatorPrefs: e })),
              ),
            ),
        );
      }
      t.stakerPrefs = (0, i.erasHistoricApplyAccount)("_stakerPrefs");
    },
    10158: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._stakerRewards = p),
        (t._stakerRewardsEras = d),
        (t.stakerRewards = void 0),
        (t.stakerRewardsMulti = m),
        (t.stakerRewardsMultiEras = f));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        const r = t
          ? (t.legacyClaimedRewards || t.claimedRewards).toArray()
          : [];
        return e.toArray().concat(r);
      }
      function s(e, t, r, n) {
        let [i, a, s] = r;
        return n.map((r) => {
          let {
            era: n,
            isEmpty: u,
            isValidator: c,
            nominating: l,
            validators: d,
          } = r;
          const { eraPoints: p, validators: f } = i.find((e) =>
              e.era.eq(n),
            ) || { eraPoints: o.BN_ZERO, validators: {} },
            { eraReward: m } = s.find((e) => e.era.eq(n)) || {
              eraReward: e.registry.createType("Balance"),
            },
            { validators: y } = a.find((e) => e.era.eq(n)) || {
              validators: {},
            },
            v = {},
            b = t.toString();
          return (
            Object.entries(d).forEach((t) => {
              var r, n, i;
              let [a, s] = t;
              const u = f[a] || o.BN_ZERO,
                c =
                  (null === (r = y[a]) || void 0 === r
                    ? void 0
                    : r.commission.unwrap()) || o.BN_ZERO,
                l = s.total
                  ? null === (n = s.total) || void 0 === n
                    ? void 0
                    : n.unwrap()
                  : s.pageTotal
                    ? null === (i = s.pageTotal) || void 0 === i
                      ? void 0
                      : i.unwrap()
                    : o.BN_ZERO;
              let d,
                g = o.BN_ZERO;
              if (!(l.isZero() || u.isZero() || p.isZero())) {
                g = m.mul(u).div(p);
                const e = c.mul(g).div(o.BN_BILLION);
                let t;
                if (a === b)
                  if (s.own) t = s.own.unwrap();
                  else {
                    const e = s.others.find((e) => {
                      let { who: t } = e;
                      return t.eq(a);
                    });
                    t = e ? e.value.unwrap() : o.BN_ZERO;
                  }
                else {
                  const e = s.others.find((e) => {
                    let { who: t } = e;
                    return t.eq(b);
                  });
                  t = e ? e.value.unwrap() : o.BN_ZERO;
                }
                d = g
                  .sub(e)
                  .imul(t)
                  .div(l)
                  .iadd(a === b ? e : o.BN_ZERO);
              }
              v[a] = {
                total: e.registry.createType("Balance", g),
                value: e.registry.createType("Balance", d),
              };
            }),
            {
              era: n,
              eraReward: m,
              isEmpty: u,
              isValidator: c,
              nominating: l,
              validators: v,
            }
          );
        });
      }
      function u(e) {
        return e.reduce(
          (e, t) => {
            let [r, n] = e;
            const o = [];
            return (
              n.push(o),
              t.forEach((e) => {
                let { validators: t } = e;
                return Object.keys(t).forEach((e) => {
                  o.includes(e) || (o.push(e), r.includes(e) || r.push(e));
                });
              }),
              [r, n]
            );
          },
          [[], []],
        );
      }
      function c(e, t, r, n) {
        const o = [];
        (Object.keys(r.validators).forEach((i) => {
          const s = e.indexOf(i);
          if (-1 !== s) {
            const e = t[s].stakingLedger;
            a(n, e).some((e) => r.era.eq(e)) && o.push(i);
          }
        }),
          o.forEach((e) => {
            delete r.validators[e];
          }));
      }
      function l(e, t, r) {
        let { claimedRewardsEras: n, rewards: i, stakingLedger: s } = r;
        const u = e.filter((e) => !a(n, s).some((t) => t.eq(e))),
          l = t.map((e) => {
            let [t] = e;
            return t;
          }),
          d = t.map((e) => {
            let [, t] = e;
            return t;
          });
        return i
          .filter((e) => {
            let { isEmpty: t } = e;
            return !t;
          })
          .filter((e) => !!u.some((t) => e.era.eq(t)) && (c(l, d, e, n), !0))
          .filter((e) => {
            let { validators: t } = e;
            return 0 !== Object.keys(t).length;
          })
          .map((e) =>
            (0, o.objectSpread)({}, e, {
              nominators: e.nominating.filter(
                (t) => e.validators[t.validatorId],
              ),
            }),
          );
      }
      function d(e, t) {
        return (0, i.memo)(e, function (e, r) {
          return (
            void 0 === r && (r = !1),
            (0, n.combineLatest)([
              t.derive.staking._erasPoints(e, r),
              t.derive.staking._erasPrefs(e, r),
              t.derive.staking._erasRewards(e, r),
            ])
          );
        });
      }
      function p(e, t) {
        return (0, i.memo)(e, function (e, r, o) {
          return (
            void 0 === o && (o = !1),
            (0, n.combineLatest)([
              t.derive.staking.queryMulti(e, {
                withClaimedRewardsEras: !0,
                withLedger: !0,
              }),
              t.derive.staking._stakerExposures(e, r, o),
              t.derive.staking._stakerRewardsEras(r, o),
            ]).pipe(
              (0, n.switchMap)((e) => {
                let [i, a, c] = e;
                const d = i.map((e, r) => {
                  let {
                    claimedRewardsEras: n,
                    stakingLedger: o,
                    stashId: i,
                  } = e;
                  return i && (o || n) ? s(t, i, c, a[r]) : [];
                });
                if (o) return (0, n.of)(d);
                const [p, f] = u(d);
                return t.derive.staking
                  .queryMulti(p, { withClaimedRewardsEras: !0, withLedger: !0 })
                  .pipe(
                    (0, n.map)((e) =>
                      i.map((t, n) => {
                        let { claimedRewardsEras: o, stakingLedger: i } = t;
                        return l(
                          r,
                          f[n]
                            .map((t) => [t, e.find((e) => e.accountId.eq(t))])
                            .filter((e) => !!e[1]),
                          {
                            claimedRewardsEras: o,
                            rewards: d[n],
                            stakingLedger: i,
                          },
                        );
                      }),
                    ),
                  );
              }),
            )
          );
        });
      }
      t.stakerRewards = (0, i.firstMemo)((e, t, r) =>
        e.derive.staking
          .erasHistoric(r)
          .pipe(
            (0, n.switchMap)((n) => e.derive.staking._stakerRewards([t], n, r)),
          ),
      );
      function f(e, t) {
        return (0, i.memo)(e, (e, r) =>
          e.length && r.length
            ? t.derive.staking._stakerRewards(e, r, !1)
            : (0, n.of)([]),
        );
      }
      function m(e, t) {
        return (0, i.memo)(e, function (e, r) {
          return (
            void 0 === r && (r = !1),
            t.derive.staking
              .erasHistoric(r)
              .pipe(
                (0, n.switchMap)((r) =>
                  t.derive.staking.stakerRewardsMultiEras(e, r),
                ),
              )
          );
        });
      }
    },
    10159: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._stakerSlashes = a),
        (t.stakerSlashes = void 0));
      var n = r(2766),
        o = r(2770),
        i = r(3388);
      function a(e, t) {
        return (0, o.memo)(e, (e, r, o) => {
          const i = t.registry.createType("AccountId", e).toString();
          return t.derive.staking._erasSlashes(r, o).pipe(
            (0, n.map)((e) =>
              e.map((e) => {
                let { era: r, nominators: n, validators: o } = e;
                return {
                  era: r,
                  total: n[i] || o[i] || t.registry.createType("Balance"),
                };
              }),
            ),
          );
        });
      }
      t.stakerSlashes = (0, i.erasHistoricApplyAccount)("_stakerSlashes");
    },
    10160: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.stashes = a));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        let t = Date.now();
        return e.query.system.events().pipe(
          (0, n.map)(
            (e) => (
              (t = e.filter((e) => {
                let { event: t, phase: r } = e;
                try {
                  return (
                    r.isApplyExtrinsic &&
                    "staking" === t.section &&
                    "Bonded" === t.method
                  );
                } catch {
                  return !1;
                }
              })
                ? Date.now()
                : t),
              t
            ),
          ),
          (0, n.startWith)(t),
          (0, o.drr)({ skipTimeout: !0 }),
        );
      }
      function a(e, t) {
        return (0, o.memo)(e, () =>
          i(t).pipe(
            (0, n.switchMap)(() => t.query.staking.validators.keys()),
            (0, n.map)((e) =>
              e
                .map((e) => {
                  let {
                    args: [t],
                  } = e;
                  return t;
                })
                .filter((e) => e),
            ),
          ),
        );
      }
    },
    10161: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nextElected = i),
        (t.validators = a));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, () =>
          t.query.staking.erasStakersPaged
            ? t.derive.session.indexes().pipe(
                (0, n.switchMap)((e) => {
                  let { currentEra: r } = e;
                  return t.query.staking.erasStakersPaged.keys(r);
                }),
                (0, n.map)((e) =>
                  [
                    ...new Set(
                      e.map((e) => {
                        let {
                          args: [, t],
                        } = e;
                        return t.toString();
                      }),
                    ),
                  ].map((e) => t.registry.createType("AccountId", e)),
                ),
              )
            : t.query.staking.erasStakers
              ? t.derive.session.indexes().pipe(
                  (0, n.switchMap)((e) => {
                    let { currentEra: r } = e;
                    return t.query.staking.erasStakers.keys(r);
                  }),
                  (0, n.map)((e) =>
                    [
                      ...new Set(
                        e.map((e) => {
                          let {
                            args: [, t],
                          } = e;
                          return t.toString();
                        }),
                      ),
                    ].map((e) => t.registry.createType("AccountId", e)),
                  ),
                )
              : t.query.staking["currentElected"](),
        );
      }
      function a(e, t) {
        return (0, o.memo)(e, () =>
          (0, n.combineLatest)([
            t.query.session ? t.query.session.validators() : (0, n.of)([]),
            t.query.staking ? t.derive.staking.nextElected() : (0, n.of)([]),
          ]).pipe(
            (0, n.map)((e) => {
              let [t, r] = e;
              return { nextElected: r.length ? r : t, validators: t };
            }),
          ),
        );
      }
    },
    10162: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.waitingInfo = a));
      var n = r(2766),
        o = r(2770);
      const i = { withController: !0, withPrefs: !0 };
      function a(e, t) {
        return (0, o.memo)(e, function (e) {
          return (
            void 0 === e && (e = i),
            (0, n.combineLatest)([
              t.derive.staking.validators(),
              t.derive.staking.stashes(),
            ]).pipe(
              (0, n.switchMap)((r) => {
                let [{ nextElected: o }, i] = r;
                const a = o.map((e) => e.toString()),
                  s = i.filter((e) => !a.includes(e.toString()));
                return t.derive.staking
                  .queryMulti(s, e)
                  .pipe((0, n.map)((e) => ({ info: e, waiting: s })));
              }),
            )
          );
        });
      }
    },
    10163: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.proposals =
          t.proposalHashes =
          t.proposalCount =
          t.proposal =
          t.prime =
          t.members =
          t.hasProposals =
            void 0));
      var n = r(4786);
      ((t.members = (0, n.members)("technicalCommittee")),
        (t.hasProposals = (0, n.hasProposals)("technicalCommittee")),
        (t.proposal = (0, n.proposal)("technicalCommittee")),
        (t.proposalCount = (0, n.proposalCount)("technicalCommittee")),
        (t.proposalHashes = (0, n.proposalHashes)("technicalCommittee")),
        (t.proposals = (0, n.proposals)("technicalCommittee")),
        (t.prime = (0, n.prime)("technicalCommittee")));
    },
    10164: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10165);
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
    10165: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.proposals = s));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        let {
          allIds: r,
          allProposals: n,
          approvalIds: o,
          councilProposals: i,
          proposalCount: a,
        } = t;
        const s = [],
          u = [],
          c = i.filter((t) => {
            let { proposal: r } = t;
            return (
              r &&
              (e.tx.treasury.approveProposal.is(r) ||
                e.tx.treasury.rejectProposal.is(r))
            );
          });
        return (
          r.forEach((e, t) => {
            if (n[t].isSome) {
              const r = c
                  .filter((t) => {
                    let { proposal: r } = t;
                    return r && e.eq(r.args[0]);
                  })
                  .sort((e, t) =>
                    e.proposal && t.proposal
                      ? e.proposal.method.localeCompare(t.proposal.method)
                      : e.proposal
                        ? -1
                        : 1,
                  ),
                i = o.some((t) => t.eq(e)),
                a = { council: r, id: e, proposal: n[t].unwrap() };
              i ? s.push(a) : u.push(a);
            }
          }),
          { approvals: s, proposalCount: a, proposals: u }
        );
      }
      function a(e, t, r) {
        const o = [],
          a = t.toNumber();
        for (let n = 0; n < a; n++)
          r.some((e) => e.eqn(n)) ||
            o.push(e.registry.createType("ProposalIndex", n));
        const s = [...o, ...r];
        return (0, n.combineLatest)([
          e.query.treasury.proposals.multi(s),
          e.derive.council ? e.derive.council.proposals() : (0, n.of)([]),
        ]).pipe(
          (0, n.map)((n) => {
            let [o, a] = n;
            return i(e, {
              allIds: s,
              allProposals: o,
              approvalIds: r,
              councilProposals: a,
              proposalCount: t,
            });
          }),
        );
      }
      function s(e, t) {
        return (0, o.memo)(e, () =>
          t.query.treasury
            ? (0, n.combineLatest)([
                t.query.treasury.proposalCount(),
                t.query.treasury.approvals(),
              ]).pipe(
                (0, n.switchMap)((e) => {
                  let [r, n] = e;
                  return a(t, r, n);
                }),
              )
            : (0, n.of)({
                approvals: [],
                proposalCount: t.registry.createType("ProposalIndex"),
                proposals: [],
              }),
        );
      }
    },
    10166: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10167);
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
      var o = r(10168);
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
    10167: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.events = i));
      var n = r(2766),
        o = r(2770);
      function i(e, t) {
        return (0, o.memo)(e, (e) =>
          (0, n.combineLatest)([
            t.rpc.chain.getBlock(e),
            t.queryAt(e).pipe((0, n.switchMap)((e) => e.system.events())),
          ]).pipe(
            (0, n.map)((e) => {
              let [t, r] = e;
              return { block: t, events: r };
            }),
          ),
        );
      }
    },
    10168: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signingInfo = d));
      var n = r(2766),
        o = r(2757),
        i = r(2770),
        a = r(10169);
      function s(e, t) {
        return e.derive.balances.account(t).pipe(
          (0, n.map)((e) => {
            let { accountNonce: t } = e;
            return t;
          }),
        );
      }
      function u(e, t) {
        var r;
        return null !== (r = e.rpc.system) && void 0 !== r && r.accountNextIndex
          ? e.rpc.system.accountNextIndex(t)
          : s(e, t);
      }
      function c(e) {
        return (0, n.combineLatest)([
          e.rpc.chain
            .getHeader()
            .pipe(
              (0, n.switchMap)((t) =>
                t.parentHash.isEmpty
                  ? (0, n.of)(t)
                  : e.rpc.chain
                      .getHeader(t.parentHash)
                      .pipe((0, n.catchError)(() => (0, n.of)(t))),
              ),
            ),
          e.rpc.chain
            .getFinalizedHead()
            .pipe(
              (0, n.switchMap)((t) =>
                e.rpc.chain
                  .getHeader(t)
                  .pipe((0, n.catchError)(() => (0, n.of)(null))),
              ),
            ),
        ]).pipe(
          (0, n.map)((e) => {
            let [t, r] = e;
            return !r ||
              (0, i.unwrapBlockNumber)(t)
                .sub((0, i.unwrapBlockNumber)(r))
                .gt(a.MAX_FINALITY_LAG)
              ? t
              : r;
          }),
        );
      }
      function l(e) {
        var t, r, n;
        const o =
          (null === (t = e.consts.babe) || void 0 === t
            ? void 0
            : t.expectedBlockTime) ||
          (null === (r = e.consts["aura"]) || void 0 === r
            ? void 0
            : r.slotDuration) ||
          (null === (n = e.consts.timestamp) || void 0 === n
            ? void 0
            : n.minimumPeriod.muln(2));
        return o && o.isZero && !o.isZero() ? o : void 0;
      }
      function d(e, t) {
        return (e, r, i) =>
          (0, n.combineLatest)([
            (0, o.isUndefined)(r)
              ? s(t, e)
              : -1 === r
                ? u(t, e)
                : (0, n.of)(t.registry.createType("Index", r)),
            (0, o.isUndefined)(i) || ((0, o.isNumber)(i) && i > 0)
              ? c(t)
              : (0, n.of)(null),
          ]).pipe(
            (0, n.map)((e) => {
              var r, n;
              let [o, i] = e;
              return {
                header: i,
                mortalLength: Math.min(
                  (null === (r = t.consts.system) ||
                  void 0 === r ||
                  null === (n = r.blockHashCount) ||
                  void 0 === n
                    ? void 0
                    : n.toNumber()) || a.FALLBACK_MAX_HASH_COUNT,
                  a.MORTAL_PERIOD.div(l(t) || a.FALLBACK_PERIOD)
                    .iadd(a.MAX_FINALITY_LAG)
                    .toNumber(),
                ),
                nonce: o,
              };
            }),
          );
      }
    },
    10169: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MORTAL_PERIOD =
          t.MAX_FINALITY_LAG =
          t.FALLBACK_PERIOD =
          t.FALLBACK_MAX_HASH_COUNT =
            void 0));
      var n = r(2757);
      ((t.FALLBACK_MAX_HASH_COUNT = 250),
        (t.FALLBACK_PERIOD = new n.BN(6e3)),
        (t.MAX_FINALITY_LAG = new n.BN(5)),
        (t.MORTAL_PERIOD = new n.BN(3e5)));
    },
    2770: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { drr: !0, memo: !0 };
      (Object.defineProperty(t, "drr", {
        enumerable: !0,
        get: function () {
          return o.drr;
        },
      }),
        Object.defineProperty(t, "memo", {
          enumerable: !0,
          get: function () {
            return o.memo;
          },
        }));
      var o = r(5535),
        i = r(10059);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(10060);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(10061);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var u = r(6615);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var c = r(10062);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(10063);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
    },
    3388: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.combineEras = p),
        (t.erasHistoricApply = c),
        (t.erasHistoricApplyAccount = l),
        (t.filterEras = u),
        (t.singleEra = d));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      const a = 14;
      function s(e, t) {
        const r = (0, o.arrayChunk)(e, a);
        let i = 0;
        const s = new n.BehaviorSubject(r[i]);
        return s.pipe(
          (0, n.switchMap)(t),
          (0, n.tap)(() => {
            (0, o.nextTick)(() => {
              (i++, i === r.length ? s.complete() : s.next(r[i]));
            });
          }),
          (0, n.toArray)(),
          (0, n.map)(o.arrayFlatten),
        );
      }
      function u(e, t) {
        return e.filter(
          (e) =>
            !t.some((t) => {
              let { era: r } = t;
              return e.eq(r);
            }),
        );
      }
      function c(e) {
        return (t, r) =>
          (0, i.memo)(t, function (t) {
            return (
              void 0 === t && (t = !1),
              r.derive.staking
                .erasHistoric(t)
                .pipe((0, n.switchMap)((n) => r.derive.staking[e](n, t)))
            );
          });
      }
      function l(e) {
        return (t, r) =>
          (0, i.memo)(t, function (t, o, i) {
            return (
              void 0 === o && (o = !1),
              r.derive.staking
                .erasHistoric(o)
                .pipe(
                  (0, n.switchMap)((n) => r.derive.staking[e](t, n, o, i || 0)),
                )
            );
          });
      }
      function d(e) {
        return (t, r) => (0, i.memo)(t, (t) => r.derive.staking[e](t, !0));
      }
      function p(e) {
        return (t, r) =>
          (0, i.memo)(t, (t, o) =>
            t.length
              ? s(t, (t) =>
                  (0, n.combineLatest)(t.map((t) => r.derive.staking[e](t, o))),
                )
              : (0, n.of)([]),
          );
      }
    },
    4544: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createBlockNumberDerive = i),
        (t.getAuthorDetails = s));
      var n = r(2766),
        o = r(2770);
      function i(e) {
        return (t, r) =>
          (0, o.memo)(t, () => e(r).pipe((0, n.map)(o.unwrapBlockNumber)));
      }
      function a(e, t) {
        var r;
        const o =
            null !== (r = t.session) && void 0 !== r && r.validators
              ? t.session.validators()
              : (0, n.of)(null),
          {
            logs: [i],
          } = e.digest,
          a =
            i &&
            ((i.isConsensus && i.asConsensus[0].isNimbus && i.asConsensus[1]) ||
              (i.isPreRuntime &&
                i.asPreRuntime[0].isNimbus &&
                i.asPreRuntime[1]));
        if (a) {
          var s, u, c;
          if (
            null !== (s = t["authorMapping"]) &&
            void 0 !== s &&
            s["mappingWithDeposit"]
          )
            return (0, n.combineLatest)([
              (0, n.of)(e),
              o,
              t["authorMapping"]
                ["mappingWithDeposit"](a)
                .pipe((0, n.map)((e) => e.unwrapOr({ account: null }).account)),
            ]);
          if (
            null !== (u = t["parachainStaking"]) &&
            void 0 !== u &&
            u["selectedCandidates"] &&
            null !== (c = t.session) &&
            void 0 !== c &&
            c.nextKeys
          ) {
            const r = a.toHex();
            return (0, n.combineLatest)([
              (0, n.of)(e),
              o,
              t["parachainStaking"]["selectedCandidates"]().pipe(
                (0, n.mergeMap)((e) =>
                  (0, n.combineLatest)([
                    (0, n.of)(e),
                    t.session.nextKeys
                      .multi(e)
                      .pipe(
                        (0, n.map)((e) =>
                          e.findIndex(
                            (e) => e.unwrapOrDefault().nimbus.toHex() === r,
                          ),
                        ),
                      ),
                  ]),
                ),
                (0, n.map)((e) => {
                  let [t, r] = e;
                  return -1 === r ? null : t[r];
                }),
              ),
            ]);
          }
        }
        return (0, n.combineLatest)([(0, n.of)(e), o, (0, n.of)(null)]);
      }
      function s(e, t, r) {
        return e
          .queryAt(t.parentHash.isEmpty ? r || t.hash : t.parentHash)
          .pipe((0, n.switchMap)((e) => a(t, e)));
      }
    },
    4545: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.calcPassing = u),
        (t.calcVotes = d),
        (t.compareRationals = a),
        (t.getImageHash = m),
        (t.getImageHashBounded = f),
        (t.getStatus = p));
      var n = r(2757);
      function o(e) {
        return !!e.proposalHash;
      }
      function i(e) {
        return !!e.tally;
      }
      function a(e, t, r, n) {
        while (1) {
          const o = e.div(t),
            i = r.div(n);
          if (o.lt(i)) return !0;
          if (i.lt(o)) return !1;
          const a = e.mod(t),
            s = r.mod(n);
          if (s.isZero()) return !1;
          if (a.isZero()) return !0;
          ((e = n), (r = t), (t = s), (n = a));
        }
      }
      function s(e, t, r) {
        let { votedAye: o, votedNay: i, votedTotal: s } = r;
        const u = (0, n.bnSqrt)(s);
        return (
          !u.isZero() &&
          (e.isSuperMajorityApprove ? a(i, u, o, t) : a(i, t, o, u))
        );
      }
      function u(e, t, r) {
        return e.isSimpleMajority ? r.votedAye.gt(r.votedNay) : s(e, t, r);
      }
      function c(e) {
        return e.reduce(
          (e, t) => {
            const { balance: r, vote: n } = t,
              o = 0 === n.conviction.index,
              i = r.muln(o ? 1 : n.conviction.index).divn(o ? 10 : 1);
            return (
              n.isAye
                ? (e.allAye.push(t), e.voteCountAye++, e.votedAye.iadd(i))
                : (e.allNay.push(t), e.voteCountNay++, e.votedNay.iadd(i)),
              e.voteCount++,
              e.votedTotal.iadd(i),
              e
            );
          },
          {
            allAye: [],
            allNay: [],
            voteCount: 0,
            voteCountAye: 0,
            voteCountNay: 0,
            votedAye: new n.BN(0),
            votedNay: new n.BN(0),
            votedTotal: new n.BN(0),
          },
        );
      }
      function l(e, t) {
        const r = [],
          n = [];
        return (
          t.forEach((e) => {
            e.vote.isAye ? r.push(e) : n.push(e);
          }),
          {
            allAye: r,
            allNay: n,
            voteCount: r.length + n.length,
            voteCountAye: r.length,
            voteCountNay: n.length,
            votedAye: e.ayes,
            votedNay: e.nays,
            votedTotal: e.turnout,
          }
        );
      }
      function d(e, t, r) {
        const o = i(t.status) ? l(t.status.tally, r) : c(r);
        return (0, n.objectSpread)({}, o, {
          isPassing: u(t.status.threshold, e, o),
          votes: r,
        });
      }
      function p(e) {
        if (e.isNone) return null;
        const t = e.unwrap();
        return o(t) ? t : t.isOngoing ? t.asOngoing : null;
      }
      function f(e) {
        return e.isLegacy
          ? e.asLegacy.hash_.toHex()
          : e.isLookup
            ? e.asLookup.hash_.toHex()
            : e.isInline
              ? e.asInline.hash.toHex()
              : (0, n.isString)(e)
                ? (0, n.isHex)(e)
                  ? e
                  : (0, n.stringToHex)(e)
                : (0, n.isU8a)(e)
                  ? (0, n.u8aToHex)(e)
                  : e.toHex();
      }
      function m(e) {
        return f(e.proposal || e.proposalHash);
      }
    },
    4546: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.filterCachedEras = u),
        (t.getEraCache = o),
        (t.getEraMultiCache = i),
        (t.setEraCache = a),
        (t.setEraMultiCache = s));
      var n = r(2770);
      function o(e, t, r) {
        const o = `${e}-${t.toString()}`;
        return [o, r ? void 0 : n.deriveCache.get(o)];
      }
      function i(e, t, r) {
        const o = r
          ? []
          : t
              .map((t) => n.deriveCache.get(`${e}-${t.toString()}`))
              .filter((e) => !!e);
        return o;
      }
      function a(e, t, r) {
        return (!t && n.deriveCache.set(e, r), r);
      }
      function s(e, t, r) {
        return (
          !t &&
            r.forEach((t) => n.deriveCache.set(`${e}-${t.era.toString()}`, t)),
          r
        );
      }
      function u(e, t, r) {
        return e
          .map(
            (e) =>
              t.find((t) => {
                let { era: r } = t;
                return e.eq(r);
              }) ||
              r.find((t) => {
                let { era: r } = t;
                return e.eq(r);
              }),
          )
          .filter((e) => !!e);
      }
    },
    4786: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10075);
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
      var o = r(10076);
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
      var i = r(10077);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
    },
    4787: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createHeaderExtended", {
          enumerable: !0,
          get: function () {
            return n.createHeaderExtended;
          },
        }),
        Object.defineProperty(t, "createSignedBlockExtended", {
          enumerable: !0,
          get: function () {
            return o.createSignedBlockExtended;
          },
        }));
      var n = r(10094),
        o = r(10095);
    },
    5536: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.callMethod = u),
        (t.getInstance = a),
        (t.withSection = s));
      var n = r(2766),
        o = r(2757),
        i = r(2770);
      function a(e, t) {
        const r = e.registry.getModuleInstances(e.runtimeVersion.specName, t),
          n = null !== r && void 0 !== r && r.length ? r[0] : t;
        return e.query[n];
      }
      function s(e, t) {
        return (r, n) => (0, i.memo)(r, t(a(n, e), n, r));
      }
      function u(e, t) {
        return (r) =>
          s(
            r,
            (r) => () =>
              (0, o.isFunction)(null === r || void 0 === r ? void 0 : r[e])
                ? r[e]()
                : (0, n.of)(t),
          );
      }
    },
    6559: function (e, t, r) {
      function n(e) {
        const t = r.p;
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
        name: "@polkadot/api-derive",
        path:
          (n("node_modules/@polkadot/api-derive/packageInfo.js"),
          { url: n("node_modules/@polkadot/api-derive/packageInfo.js") }.url
            ? new URL(
                { url: n("node_modules/@polkadot/api-derive/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  { url: n("node_modules/@polkadot/api-derive/packageInfo.js") }
                    .url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    6612: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), r(10053));
      var n = r(10054);
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
    6615: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deriveNoopCache = t.deriveMapCache = void 0));
      const n = new Map();
      ((t.deriveMapCache = {
        del: (e) => {
          n.delete(e);
        },
        forEach: (e) => {
          for (const [t, r] of n.entries()) e(t, r);
        },
        get: (e) => n.get(e),
        set: (e, t) => {
          n.set(e, t);
        },
      }),
        (t.deriveNoopCache = {
          del: () => {},
          forEach: () => {},
          get: () => {},
          set: (e, t) => t,
        }));
    },
    6616: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          e.query.voterList || e.query["voterBagsList"] || e.query["bagsList"]
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getQueryInterface = n));
    },
    6617: function (e, t, r) {
      "use strict";
      function n(e, t) {
        const [r] = e.logs.filter((e) => e.isConsensus),
          [n] = e.logs.filter((e) => e.isPreRuntime),
          [o] = e.logs.filter((e) => e.isSeal);
        let i;
        try {
          if (n) {
            const [e, r] = n.asPreRuntime;
            i = e.extractAuthor(r, t);
          }
          if (!i && r) {
            const [e, n] = r.asConsensus;
            i = e.extractAuthor(n, t);
          }
          if (!i && o) {
            const [e, r] = o.asSeal;
            i = e.extractAuthor(r, t);
          }
        } catch {}
        return i;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractAuthor = n));
    },
    6618: function (e, t, r) {
      "use strict";
      function n(e, t) {
        var r;
        const n = [],
          o = [];
        return t
          .filter((t) => {
            let {
              event: {
                data: [, r],
                method: n,
                section: o,
              },
            } = t;
            return (
              "crowdloan" === o &&
              ["Contributed", "Withdrew"].includes(n) &&
              r.eq(e)
            );
          })
          .reduce(
            (e, t) => {
              let {
                event: {
                  data: [r],
                  method: n,
                },
              } = t;
              return (
                "Contributed" === n
                  ? e.added.push(r.toHex())
                  : e.removed.push(r.toHex()),
                e
              );
            },
            {
              added: n,
              blockHash:
                (null === (r = t.createdAtHash) || void 0 === r
                  ? void 0
                  : r.toHex()) || "-",
              removed: o,
            },
          );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractContributed = n));
    },
    6619: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return !!e.isSome && e.unwrap().some((e) => e.eq(t));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.didUpdateToBool = n));
    },
  },
]);
