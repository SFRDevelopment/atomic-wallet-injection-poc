(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [241, 32],
  {
    2692: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(r(230)),
        s = n(r(794)),
        o = n(r(7656)),
        a = h(r(158));
      function h(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (h = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? n : r)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (s.get || s.set)
                ? i(o, r, s)
                : (o[r] = t[r]));
          return o;
        })(t, e);
      }
      function u(t, e, r) {
        (f(t, e), e.set(t, r));
      }
      function f(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function c(t, e) {
        return t.get(p(t, e));
      }
      function l(t, e, r) {
        return (t.set(p(t, e), r), r);
      }
      function p(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const d = new s.default(() =>
          Promise.resolve().then(r.t.bind(null, 6016, 7)),
        ),
        y = "NEM",
        _ = "XEM",
        g = "m/44'/43'/0'/0/0",
        m = 6,
        w = "0";
      var v = new WeakMap();
      class XEMCoin extends (0, a.default)(i.default) {
        constructor(t) {
          let {
            alias: e,
            notify: r,
            feeData: { fee: n },
            explorers: i,
            txWebUrl: s,
            socket: a,
            id: h,
          } = t;
          const f = {
            id: h,
            alias: e,
            notify: r,
            name: y,
            ticker: _,
            decimal: m,
            unspendableBalance: w,
            explorers: i,
            txWebUrl: s,
            socket: a,
          };
          (super(f),
            u(this, v, void 0),
            (this.derivation = g),
            this.setExplorersModules([o.default]),
            this.loadExplorers(f),
            (this.fee = n),
            (this.transactions = []),
            (this.fields.paymentId = !0));
        }
        async getNemLib() {
          const { default: t } = await d.get();
          return t;
        }
        getNetworkId(t) {
          return null === t || void 0 === t
            ? void 0
            : t.model.network.data.mainnet.id;
        }
        async getAddressFromPublicKey(t) {
          const e = await this.getNemLib(),
            r = this.getNetworkId(e);
          return e.model.address.toAddress(t, r);
        }
        async loadWallet(t, e) {
          const r = 6e3,
            n = await this.getNemLib(),
            i = n.crypto.helpers.derivePassSha(e, r).priv,
            s = n.crypto.keyPair.create(i),
            o = s.publicKey.toString();
          if (!i) throw new Error(this.ticker + " privateKey is empty");
          return (
            l(v, this, i),
            (this.address = await this.getAddressFromPublicKey(o)),
            { id: this.id, privateKey: c(v, this), address: this.address }
          );
        }
        async getAddress() {
          if (c(v, this)) {
            const t = await this.getNemLib(),
              e = t.crypto.keyPair.create(c(v, this)),
              r = e.publicKey.toString();
            return this.getAddressFromPublicKey(r);
          }
          return new Error(this.ticker + " privateKey is empty");
        }
        async validateAddress(t) {
          try {
            const e = await this.getNemLib(),
              r = this.getNetworkId(e);
            return (
              e.model.address.isValid(t) && e.model.address.isFromNetwork(t, r)
            );
          } catch (e) {
            throw new Error(`Fail to validate ${this.ticker} address [${t}]`);
          }
        }
        async createTransaction(t) {
          let { address: e, amount: r, memo: n = "" } = t;
          const i = await this.getNemLib(),
            s = this.getNetworkId(i),
            o = i.model.objects.create("common")("", c(v, this)),
            h = i.model.objects.create("transferTransaction")(
              e,
              this.toCurrencyUnit(r),
              n,
            ),
            u = i.model.transactions.prepare("transferTransaction")(o, h, s),
            f = this.getProvider(a.NODE_PROVIDER_OPERATION),
            { receiveTimeStamp: l } = await f.request(
              f.getNetworkTimeUrl(),
              f.getInfoMethod(),
            ),
            p = Math.floor(l / 1e3);
          ((u.timeStamp = p), (u.deadline = p + 3600));
          const d = i.crypto.keyPair.create(c(v, this)),
            y = i.utils.serialization.serializeTransaction(u),
            _ = d.sign(y),
            g = { data: i.utils.convert.ua2hex(y), signature: _.toString() };
          return JSON.stringify(g);
        }
        updateCoinParamsFromServer(t) {
          super.updateCoinParamsFromServer(t);
          const e = t.explorers.find((t) => {
            let { className: e } = t;
            return "NemNodeExplorer" === e;
          });
          e && (this.explorers[0].webUrl = t.txWebUrl);
        }
        setPrivateKey(t) {
          l(v, this, t);
        }
      }
      e.default = XEMCoin;
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2932: function (t, e, r) {
      (function (e, n) {
        var i = r(229),
          s = r(235).Stream,
          o = r(799),
          a =
            /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
        function h(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function u(t, e, r, n, s) {
          throw new i.AssertionError({
            message: o.format("%s (%s) is required", t, e),
            actual: void 0 === s ? typeof n : s(n),
            expected: e,
            operator: r || "===",
            stackStartFunction: u.caller,
          });
        }
        function f(t) {
          return Object.prototype.toString.call(t).slice(8, -1);
        }
        function c() {}
        var l = {
          bool: {
            check: function (t) {
              return "boolean" === typeof t;
            },
          },
          func: {
            check: function (t) {
              return "function" === typeof t;
            },
          },
          string: {
            check: function (t) {
              return "string" === typeof t;
            },
          },
          object: {
            check: function (t) {
              return "object" === typeof t && null !== t;
            },
          },
          number: {
            check: function (t) {
              return "number" === typeof t && !isNaN(t);
            },
          },
          finite: {
            check: function (t) {
              return "number" === typeof t && !isNaN(t) && isFinite(t);
            },
          },
          buffer: {
            check: function (t) {
              return e.isBuffer(t);
            },
            operator: "Buffer.isBuffer",
          },
          array: {
            check: function (t) {
              return Array.isArray(t);
            },
            operator: "Array.isArray",
          },
          stream: {
            check: function (t) {
              return t instanceof s;
            },
            operator: "instanceof",
            actual: f,
          },
          date: {
            check: function (t) {
              return t instanceof Date;
            },
            operator: "instanceof",
            actual: f,
          },
          regexp: {
            check: function (t) {
              return t instanceof RegExp;
            },
            operator: "instanceof",
            actual: f,
          },
          uuid: {
            check: function (t) {
              return "string" === typeof t && a.test(t);
            },
            operator: "isUUID",
          },
        };
        function p(t) {
          var e,
            r = Object.keys(l);
          return (
            (e = n.env.NODE_NDEBUG
              ? c
              : function (t, e) {
                  t || u(e, "true", t);
                }),
            r.forEach(function (r) {
              if (t) e[r] = c;
              else {
                var n = l[r];
                e[r] = function (t, e) {
                  n.check(t) || u(e, r, n.operator, t, n.actual);
                };
              }
            }),
            r.forEach(function (r) {
              var n = "optional" + h(r);
              if (t) e[n] = c;
              else {
                var i = l[r];
                e[n] = function (t, e) {
                  void 0 !== t &&
                    null !== t &&
                    (i.check(t) || u(e, r, i.operator, t, i.actual));
                };
              }
            }),
            r.forEach(function (r) {
              var n = "arrayOf" + h(r);
              if (t) e[n] = c;
              else {
                var i = l[r],
                  s = "[" + r + "]";
                e[n] = function (t, e) {
                  var r;
                  for (
                    Array.isArray(t) || u(e, s, i.operator, t, i.actual), r = 0;
                    r < t.length;
                    r++
                  )
                    i.check(t[r]) || u(e, s, i.operator, t, i.actual);
                };
              }
            }),
            r.forEach(function (r) {
              var n = "optionalArrayOf" + h(r);
              if (t) e[n] = c;
              else {
                var i = l[r],
                  s = "[" + r + "]";
                e[n] = function (t, e) {
                  var r;
                  if (void 0 !== t && null !== t)
                    for (
                      Array.isArray(t) || u(e, s, i.operator, t, i.actual),
                        r = 0;
                      r < t.length;
                      r++
                    )
                      i.check(t[r]) || u(e, s, i.operator, t, i.actual);
                };
              }
            }),
            Object.keys(i).forEach(function (r) {
              e[r] = "AssertionError" !== r && t ? c : i[r];
            }),
            (e._setExports = p),
            e
          );
        }
        t.exports = p(n.env.NODE_NDEBUG);
      }).call(this, r(2).Buffer, r(18));
    },
    3419: function (t, e, r) {
      var n = r(7695);
      t.exports = { Ber: n, BerReader: n.Reader, BerWriter: n.Writer };
    },
    3656: function (t, e, r) {
      "use strict";
      var n = r(818),
        i = r(836),
        s = r(104),
        o = r(387);
      t.exports = function (t, e, r) {
        if (!t || ("object" !== typeof t && "function" !== typeof t))
          throw new s("`obj` must be an object or a function`");
        if ("string" !== typeof e && "symbol" !== typeof e)
          throw new s("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" !== typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new s(
            "`nonEnumerable`, if provided, must be a boolean or null",
          );
        if (
          arguments.length > 4 &&
          "boolean" !== typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new s("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" !== typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new s(
            "`nonConfigurable`, if provided, must be a boolean or null",
          );
        if (arguments.length > 6 && "boolean" !== typeof arguments[6])
          throw new s("`loose`, if provided, must be a boolean");
        var a = arguments.length > 3 ? arguments[3] : null,
          h = arguments.length > 4 ? arguments[4] : null,
          u = arguments.length > 5 ? arguments[5] : null,
          f = arguments.length > 6 && arguments[6],
          c = !!o && o(t, e);
        if (n)
          n(t, e, {
            configurable: null === u && c ? c.configurable : !u,
            enumerable: null === a && c ? c.enumerable : !a,
            value: r,
            writable: null === h && c ? c.writable : !h,
          });
        else {
          if (!f && (a || h || u))
            throw new i(
              "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
            );
          t[e] = r;
        }
      };
    },
    4981: function (t, e) {
      t.exports = {
        newInvalidAsn1Error: function (t) {
          var e = new Error();
          return ((e.name = "InvalidAsn1Error"), (e.message = t || ""), e);
        },
      };
    },
    4982: function (t, e) {
      t.exports = {
        EOC: 0,
        Boolean: 1,
        Integer: 2,
        BitString: 3,
        OctetString: 4,
        Null: 5,
        OID: 6,
        ObjectDescriptor: 7,
        External: 8,
        Real: 9,
        Enumeration: 10,
        PDV: 11,
        Utf8String: 12,
        RelativeOID: 13,
        Sequence: 16,
        Set: 17,
        NumericString: 18,
        PrintableString: 19,
        T61String: 20,
        VideotexString: 21,
        IA5String: 22,
        UTCTime: 23,
        GeneralizedTime: 24,
        GraphicString: 25,
        VisibleString: 26,
        GeneralString: 28,
        UniversalString: 29,
        CharacterString: 30,
        BMPString: 31,
        Constructor: 32,
        Context: 128,
      };
    },
    4987: function (t, e) {
      function r(t) {
        this.dict = t || {};
      }
      ((r.prototype.set = function (t, e, r) {
        if ("object" !== typeof t) {
          "undefined" === typeof r && (r = !0);
          var n = this.has(t);
          return (
            !r && n
              ? (this.dict[n] = this.dict[n] + "," + e)
              : (this.dict[n || t] = e),
            n
          );
        }
        for (var i in t) this.set(i, t[i], e);
      }),
        (r.prototype.has = function (t) {
          for (
            var e = Object.keys(this.dict), r = ((t = t.toLowerCase()), 0);
            r < e.length;
            r++
          )
            if (e[r].toLowerCase() === t) return e[r];
          return !1;
        }),
        (r.prototype.get = function (t) {
          var e, r;
          t = t.toLowerCase();
          var n = this.dict;
          return (
            Object.keys(n).forEach(function (i) {
              ((r = i.toLowerCase()), t === r && (e = n[i]));
            }),
            e
          );
        }),
        (r.prototype.swap = function (t) {
          var e = this.has(t);
          if (e !== t) {
            if (!e)
              throw new Error('There is no header than matches "' + t + '"');
            ((this.dict[t] = this.dict[e]), delete this.dict[e]);
          }
        }),
        (r.prototype.del = function (t) {
          var e = this.has(t);
          return delete this.dict[e || t];
        }),
        (t.exports = function (t) {
          return new r(t);
        }),
        (t.exports.httpify = function (t, e) {
          var n = new r(e);
          return (
            (t.setHeader = function (t, e, r) {
              if ("undefined" !== typeof e) return n.set(t, e, r);
            }),
            (t.hasHeader = function (t) {
              return n.has(t);
            }),
            (t.getHeader = function (t) {
              return n.get(t);
            }),
            (t.removeHeader = function (t) {
              return n.del(t);
            }),
            (t.headers = n.dict),
            n
          );
        }));
    },
    6030: function (t, e, r) {
      "use strict";
      var n = r(7701).lowlevel.crypto_hash,
        i = 0,
        s = function () {
          ((this.S = [
            new Uint32Array([
              3509652390, 2564797868, 805139163, 3491422135, 3101798381,
              1780907670, 3128725573, 4046225305, 614570311, 3012652279,
              134345442, 2240740374, 1667834072, 1901547113, 2757295779,
              4103290238, 227898511, 1921955416, 1904987480, 2182433518,
              2069144605, 3260701109, 2620446009, 720527379, 3318853667,
              677414384, 3393288472, 3101374703, 2390351024, 1614419982,
              1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
              1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
              1439316330, 715854006, 3033291828, 289532110, 2706671279,
              2087905683, 3018724369, 1668267050, 732546397, 1947742710,
              3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
              680887927, 999245976, 1800124847, 3300911131, 1713906067,
              1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
              3917837745, 3693486850, 3949271944, 596196993, 3549867205,
              258830323, 2213823033, 772490370, 2760122372, 1774776394,
              2652871518, 566650946, 4142492826, 1728879713, 2882767088,
              1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
              326777828, 3124490320, 2130389656, 2716951837, 967770486,
              1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
              998989502, 3765401048, 2244026483, 1075463327, 1455516326,
              1322494562, 910128902, 469688178, 1117454909, 936433444,
              3490320968, 3675253459, 1240580251, 122909385, 2157517691,
              634681816, 4142456567, 3825094682, 3061402683, 2540495037,
              79693498, 3249098678, 1084186820, 1583128258, 426386531,
              1761308591, 1047286709, 322548459, 995290223, 1845252383,
              2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
              1712269319, 422464435, 3234572375, 1170764815, 3523960633,
              3117677531, 1434042557, 442511882, 3600875718, 1076654713,
              1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
              4251020053, 793779912, 2902807211, 842905082, 4246964064,
              1395751752, 1040244610, 2656851899, 3396308128, 445077038,
              3742853595, 3577915638, 679411651, 2892444358, 2354009459,
              1767581616, 3150600392, 3791627101, 3102740896, 284835224,
              4246832056, 1258075500, 768725851, 2589189241, 3069724005,
              3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
              3471099624, 4011903706, 913787905, 3497959166, 737222580,
              2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
              2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
              2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
              3014181293, 791618072, 3188594551, 3933548030, 2332172193,
              3852520463, 3043980520, 413987798, 3465142937, 3030929376,
              4245938359, 2093235073, 3534596313, 375366246, 2157278981,
              2479649556, 555357303, 3870105701, 2008414854, 3344188149,
              4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
              2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054,
              1432588573, 1507829418, 2025931657, 3646575487, 545086370,
              48609733, 2200306550, 1653985193, 298326376, 1316178497,
              3007786442, 2064951626, 458293330, 2589141269, 3591329599,
              3164325604, 727753846, 2179363840, 146436021, 1461446943,
              4069977195, 705550613, 3059967265, 3887724982, 4281599278,
              3313849956, 1404054877, 2845806497, 146425753, 1854211946,
            ]),
            new Uint32Array([
              1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
              1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
              1449415276, 3266420449, 422970021, 1963543593, 2690192192,
              3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
              2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
              2221992742, 1669523910, 35572830, 157838143, 1052438473,
              1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
              2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
              2956646967, 4031777805, 4028374788, 33600511, 2920084762,
              1018524850, 629373528, 3691585981, 3515945977, 2091462646,
              2486323059, 586499841, 988145025, 935516892, 3367335476,
              2599673255, 2839830854, 265290510, 3972581182, 2759138881,
              3795373465, 1005194799, 847297441, 406762289, 1314163512,
              1332590856, 1866599683, 4127851711, 750260880, 613907577,
              1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
              3704569646, 1427272223, 778793252, 1343938022, 2676280711,
              2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
              3682934266, 1661551462, 3294938066, 4011595847, 840292616,
              3712170807, 616741398, 312560963, 711312465, 1351876610,
              322626781, 1910503582, 271666773, 2175563734, 1594956187,
              70604529, 3617834859, 1007753275, 1495573769, 4069517037,
              2549218298, 2663038764, 504708206, 2263041392, 3941167025,
              2249088522, 1514023603, 1998579484, 1312622330, 694541497,
              2582060303, 2151582166, 1382467621, 776784248, 2618340202,
              3323268794, 2497899128, 2784771155, 503983604, 4076293799,
              907881277, 423175695, 432175456, 1378068232, 4145222326,
              3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
              26017576, 3274890735, 3194772133, 1700274565, 1756076034,
              4006520079, 3677328699, 720338349, 1533947780, 354530856,
              688349552, 3973924725, 1637815568, 332179504, 3949051286,
              53804574, 2852348879, 3044236432, 1282449977, 3583942155,
              3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
              1686838959, 431878346, 2686675385, 1700445008, 1080580658,
              1009431731, 832498133, 3223435511, 2605976345, 2271191193,
              2516031870, 1648197032, 4164389018, 2548247927, 300782431,
              375919233, 238389289, 3353747414, 2531188641, 2019080857,
              1475708069, 455242339, 2609103871, 448939670, 3451063019,
              1395535956, 2413381860, 1841049896, 1491858159, 885456874,
              4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
              540939232, 1173283510, 2745871338, 3681308437, 4207628240,
              3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
              2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
              4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
              1452454533, 157007616, 2904115357, 342012276, 595725824,
              1480756522, 206960106, 497939518, 591360097, 863170706,
              2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
              1082520231, 3463918190, 2785509508, 435703966, 3908032597,
              1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
              2655287854, 3276092548, 4258621189, 236887753, 3681803219,
              274041037, 1734335097, 3815195456, 3317970021, 1899903192,
              1026095262, 4050517792, 356393447, 2410691914, 3873677099,
              3682840055,
            ]),
            new Uint32Array([
              3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
              1979897079, 3170134830, 3567386728, 3557303409, 857797738,
              1136121015, 1342202287, 507115054, 2535736646, 337727348,
              3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
              3216771564, 62756741, 2142006736, 835421444, 2531993523,
              1442658625, 3659876326, 2882144922, 676362277, 1392781812,
              170690266, 3921047035, 1759253602, 3611846912, 1745797284,
              664899054, 1329594018, 3901205900, 3045908486, 2062866102,
              2865634940, 3543621612, 3464012697, 1080764994, 553557557,
              3656615353, 3996768171, 991055499, 499776247, 1265440854,
              648242737, 3940784050, 980351604, 3713745714, 1749149687,
              3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
              1431517754, 545492359, 4268468663, 3499529547, 1437099964,
              2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
              1593081372, 2418618748, 4260947970, 69676912, 2159744348,
              86519011, 2512459080, 3838209314, 1220612927, 3339683548,
              133810670, 1090789135, 1078426020, 1569222167, 845107691,
              3583754449, 4072456591, 1091646820, 628848692, 1613405280,
              3757631651, 526609435, 236106946, 48312990, 2942717905,
              3402727701, 1797494240, 859738849, 992217954, 4005476642,
              2243076622, 3870952857, 3732016268, 765654824, 3490871365,
              2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
              3281911079, 4080962846, 172450625, 2569994100, 980381355,
              4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
              3329971472, 1835478071, 660984891, 3704678404, 4045999559,
              3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
              2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
              1983633131, 926494387, 3423689081, 2150032023, 4096667949,
              1749200295, 3328846651, 309677260, 2016342300, 1779581495,
              3079819751, 111262694, 1274766160, 443224088, 298511866,
              1025883608, 3806446537, 1145181785, 168956806, 3641502830,
              3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
              2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
              4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
              2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
              3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
              1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
              2333990788, 2221543033, 2438960610, 1181637006, 548689776,
              2362791313, 3372408396, 3104550113, 3145860560, 296247880,
              1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
              3898220290, 166772364, 1251581989, 493813264, 448347421,
              195405023, 2709975567, 677966185, 3703036547, 1463355134,
              2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
              233230375, 2599980071, 2000651841, 3277868038, 1638401717,
              4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579,
              1405279636, 3267499572, 3150704214, 2428286686, 3959192993,
              3461946742, 1862657033, 1266418056, 963775037, 2089974820,
              2263052895, 1917689273, 448879540, 3550394620, 3981727096,
              150775221, 3627908307, 1303187396, 508620638, 2975983352,
              2726630617, 1817252668, 1876281319, 1457606340, 908771278,
              3720792119, 3617206836, 2455994898, 1729034894, 1080033504,
            ]),
            new Uint32Array([
              976866871, 3556439503, 2881648439, 1522871579, 1555064734,
              1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
              3593280638, 3338716283, 3079412587, 564236357, 2993598910,
              1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
              1393555694, 1183702653, 3581086237, 1288719814, 691649499,
              2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
              1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
              2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
              673620729, 2805611233, 1269405062, 4015350505, 3341807571,
              4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
              2601117357, 993977747, 3918593370, 2654263191, 753973209,
              36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599,
              2918365339, 1524020338, 1518925132, 3760827505, 3759777254,
              1202760957, 3985898139, 3906192525, 674977740, 4174734889,
              2031300136, 2019492241, 3983892565, 4153806404, 3822280332,
              352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578,
              2535922412, 2839152426, 457141659, 509813237, 4120667899,
              652014361, 1966332200, 2975202805, 55981186, 2327461051,
              676427537, 3255491064, 2882294119, 3433927263, 1307055953,
              942726286, 933058658, 2468411793, 3933900994, 4215176142,
              1361170020, 2001714738, 2830558078, 3274259782, 1222529897,
              1679025792, 2729314320, 3714953764, 1770335741, 151462246,
              3013232138, 1682292957, 1483529935, 471910574, 1539241949,
              458788160, 3436315007, 1807016891, 3718408830, 978976581,
              1043663428, 3165965781, 1927990952, 4200891579, 2372276910,
              3208408903, 3533431907, 1412390302, 2931980059, 4132332400,
              1947078029, 3881505623, 4168226417, 2941484381, 1077988104,
              1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804,
              3463356488, 1866414978, 891333506, 18488651, 661792760,
              1628790961, 3885187036, 3141171499, 876946877, 2693282273,
              1372485963, 791857591, 2686433993, 3759982718, 3167212022,
              3472953795, 2716379847, 445679433, 3561995674, 3504004811,
              3574258232, 54117162, 3331405415, 2381918588, 3769707343,
              4154350007, 1140177722, 4074052095, 668550556, 3214352940,
              367459370, 261225585, 2610173221, 4209349473, 3468074219,
              3265815641, 314222801, 3066103646, 3808782860, 282218597,
              3406013506, 3773591054, 379116347, 1285071038, 846784868,
              2669647154, 3771962079, 3550491691, 2305946142, 453669953,
              1268987020, 3317592352, 3279303384, 3744833421, 2610507566,
              3859509063, 266596637, 3847019092, 517658769, 3462560207,
              3443424879, 370717030, 4247526661, 2224018117, 4143653529,
              4112773975, 2788324899, 2477274417, 1456262402, 2901442914,
              1517677493, 1846949527, 2295493580, 3734397586, 2176403920,
              1280348187, 1908823572, 3871786941, 846861322, 1172426758,
              3287448474, 3383383037, 1655181056, 3139813346, 901632758,
              1897031941, 2986607138, 3066810236, 3447102507, 1393639104,
              373351379, 950779232, 625454576, 3124240540, 4148612726,
              2007998917, 544563296, 2244738638, 2330496472, 2058025392,
              1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329,
              2791104160, 1057563949, 3255363231, 3075367218, 3463963227,
              1469046755, 985887462,
            ]),
          ]),
            (this.P = new Uint32Array([
              608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832,
              137296536, 3964562569, 1160258022, 953160567, 3193202383,
              887688300, 3232508343, 3380367581, 1065670069, 3041331479,
              2450970073, 2306472731,
            ])));
        };
      function o(t, e, r) {
        return (
          ((t[0][e[r + 3]] + t[1][e[r + 2]]) ^ t[2][e[r + 1]]) + t[3][e[r]]
        );
      }
      function a(t, e) {
        var r,
          n = 0;
        for (r = 0; r < 4; r++, i++) (i >= e && (i = 0), (n = (n << 8) | t[i]));
        return n;
      }
      ((s.prototype.encipher = function (t, e) {
        (void 0 === e &&
          ((e = new Uint8Array(t.buffer)),
          0 !== t.byteOffset && (e = e.subarray(t.byteOffset))),
          (t[0] ^= this.P[0]));
        for (var r = 1; r < 16; r += 2)
          ((t[1] ^= o(this.S, e, 0) ^ this.P[r]),
            (t[0] ^= o(this.S, e, 4) ^ this.P[r + 1]));
        var n = t[0];
        ((t[0] = t[1] ^ this.P[17]), (t[1] = n));
      }),
        (s.prototype.decipher = function (t) {
          var e = new Uint8Array(t.buffer);
          (0 !== t.byteOffset && (e = e.subarray(t.byteOffset)),
            (t[0] ^= this.P[17]));
          for (var r = 16; r > 0; r -= 2)
            ((t[1] ^= o(this.S, e, 0) ^ this.P[r]),
              (t[0] ^= o(this.S, e, 4) ^ this.P[r - 1]));
          var n = t[0];
          ((t[0] = t[1] ^ this.P[0]), (t[1] = n));
        }),
        (s.prototype.expand0state = function (t, e) {
          var r,
            n,
            s = new Uint32Array(2),
            o = new Uint8Array(s.buffer);
          for (r = 0, i = 0; r < 18; r++) this.P[r] ^= a(t, e);
          for (i = 0, r = 0; r < 18; r += 2)
            (this.encipher(s, o), (this.P[r] = s[0]), (this.P[r + 1] = s[1]));
          for (r = 0; r < 4; r++)
            for (n = 0; n < 256; n += 2)
              (this.encipher(s, o),
                (this.S[r][n] = s[0]),
                (this.S[r][n + 1] = s[1]));
        }),
        (s.prototype.expandstate = function (t, e, r, n) {
          var s,
            o,
            h = new Uint32Array(2);
          for (s = 0, i = 0; s < 18; s++) this.P[s] ^= a(r, n);
          for (s = 0, i = 0; s < 18; s += 2)
            ((h[0] ^= a(t, e)),
              (h[1] ^= a(t, e)),
              this.encipher(h),
              (this.P[s] = h[0]),
              (this.P[s + 1] = h[1]));
          for (s = 0; s < 4; s++)
            for (o = 0; o < 256; o += 2)
              ((h[0] ^= a(t, e)),
                (h[1] ^= a(t, e)),
                this.encipher(h),
                (this.S[s][o] = h[0]),
                (this.S[s][o + 1] = h[1]));
          i = 0;
        }),
        (s.prototype.enc = function (t, e) {
          for (var r = 0; r < e; r++) this.encipher(t.subarray(2 * r));
        }),
        (s.prototype.dec = function (t, e) {
          for (var r = 0; r < e; r++) this.decipher(t.subarray(2 * r));
        }));
      var h = 8,
        u = 32;
      function f(t, e, r) {
        var n,
          i = new s(),
          o = new Uint32Array(h),
          u = new Uint8Array([
            79, 120, 121, 99, 104, 114, 111, 109, 97, 116, 105, 99, 66, 108,
            111, 119, 102, 105, 115, 104, 83, 119, 97, 116, 68, 121, 110, 97,
            109, 105, 116, 101,
          ]);
        for (i.expandstate(e, 64, t, 64), n = 0; n < 64; n++)
          (i.expand0state(e, 64), i.expand0state(t, 64));
        for (n = 0; n < h; n++) o[n] = a(u, u.byteLength);
        for (n = 0; n < 64; n++) i.enc(o, o.byteLength / 8);
        for (n = 0; n < h; n++)
          ((r[4 * n + 3] = o[n] >>> 24),
            (r[4 * n + 2] = o[n] >>> 16),
            (r[4 * n + 1] = o[n] >>> 8),
            (r[4 * n + 0] = o[n]));
      }
      function c(t, e, r, i, s, o, a) {
        var h,
          c,
          l,
          p,
          d,
          y,
          _ = new Uint8Array(64),
          g = new Uint8Array(64),
          m = new Uint8Array(u),
          w = new Uint8Array(u),
          v = new Uint8Array(i + 4),
          b = o;
        if (a < 1) return -1;
        if (
          0 === e ||
          0 === i ||
          0 === o ||
          o > m.byteLength * m.byteLength ||
          i > 1 << 20
        )
          return -1;
        for (
          p = Math.floor((o + m.byteLength - 1) / m.byteLength),
            l = Math.floor((o + p - 1) / p),
            h = 0;
          h < i;
          h++
        )
          v[h] = r[h];
        for (n(_, t, e), y = 1; o > 0; y++) {
          for (
            v[i + 0] = y >>> 24,
              v[i + 1] = y >>> 16,
              v[i + 2] = y >>> 8,
              v[i + 3] = y,
              n(g, v, i + 4),
              f(_, g, w),
              h = m.byteLength;
            h--;
          )
            m[h] = w[h];
          for (h = 1; h < a; h++)
            for (
              n(g, w, w.byteLength), f(_, g, w), c = 0;
              c < m.byteLength;
              c++
            )
              m[c] ^= w[c];
          for (l = Math.min(l, o), h = 0; h < l; h++) {
            if (((d = h * p + (y - 1)), d >= b)) break;
            s[d] = m[h];
          }
          o -= h;
        }
        return 0;
      }
      t.exports = { BLOCKS: h, HASHSIZE: u, hash: f, pbkdf: c };
    },
    6043: function (t, e) {
      var r = Array.prototype.slice;
      function n(t) {
        var e = this,
          n = r.call(arguments, 1);
        return new Promise(function (r, s) {
          if (
            ("function" === typeof t && (t = t.apply(e, n)),
            !t || "function" !== typeof t.next)
          )
            return r(t);
          function o(e) {
            var r;
            try {
              r = t.next(e);
            } catch (n) {
              return s(n);
            }
            u(r);
          }
          function a(e) {
            var r;
            try {
              r = t.throw(e);
            } catch (n) {
              return s(n);
            }
            u(r);
          }
          function u(t) {
            if (t.done) return r(t.value);
            var n = i.call(e, t.value);
            return n && h(n)
              ? n.then(o, a)
              : a(
                  new TypeError(
                    'You may only yield a function, promise, generator, array, or object, but the following object was passed: "' +
                      String(t.value) +
                      '"',
                  ),
                );
          }
          o();
        });
      }
      function i(t) {
        return t
          ? h(t)
            ? t
            : f(t) || u(t)
              ? n.call(this, t)
              : "function" == typeof t
                ? s.call(this, t)
                : Array.isArray(t)
                  ? o.call(this, t)
                  : c(t)
                    ? a.call(this, t)
                    : t
          : t;
      }
      function s(t) {
        var e = this;
        return new Promise(function (n, i) {
          t.call(e, function (t, e) {
            if (t) return i(t);
            (arguments.length > 2 && (e = r.call(arguments, 1)), n(e));
          });
        });
      }
      function o(t) {
        return Promise.all(t.map(i, this));
      }
      function a(t) {
        for (
          var e = new t.constructor(), r = Object.keys(t), n = [], s = 0;
          s < r.length;
          s++
        ) {
          var o = r[s],
            a = i.call(this, t[o]);
          a && h(a) ? u(a, o) : (e[o] = t[o]);
        }
        return Promise.all(n).then(function () {
          return e;
        });
        function u(t, r) {
          ((e[r] = void 0),
            n.push(
              t.then(function (t) {
                e[r] = t;
              }),
            ));
        }
      }
      function h(t) {
        return "function" == typeof t.then;
      }
      function u(t) {
        return "function" == typeof t.next && "function" == typeof t.throw;
      }
      function f(t) {
        var e = t.constructor;
        return (
          !!e &&
          ("GeneratorFunction" === e.name ||
            "GeneratorFunction" === e.displayName ||
            u(e.prototype))
        );
      }
      function c(t) {
        return Object == t.constructor;
      }
      ((t.exports = n["default"] = n.co = n),
        (n.wrap = function (t) {
          return ((e.__generatorFunction__ = t), e);
          function e() {
            return n.call(this, t.apply(this, arguments));
          }
        }));
    },
    7656: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(r(6016)),
        s = n(r(195)),
        o = n(r(129)),
        a = r(19),
        h = r(27),
        u = r(4);
      const f = i.default.model.network.data.mainnet;
      class NemNodeExplorer extends o.default {
        constructor() {
          (super(...arguments),
            (this.endpoint = i.default.model.objects.create("endpoint")(
              this.config.baseUrl,
              i.default.model.nodes.defaultPort,
            )));
        }
        getAllowedTickers() {
          return ["XEM"];
        }
        getWalletAddress() {
          return this.wallet.address;
        }
        getInfoUrl() {
          return "account/get";
        }
        getInfoParams(t) {
          return { address: t };
        }
        getTransactionUrl(t) {
          return "transaction/" + t;
        }
        getTransactionsUrl() {
          return "account/transfers/all";
        }
        getTransactionsParams(t) {
          return { address: t };
        }
        getLatestBlockUrl() {
          return "chain/height";
        }
        getSendTransactionUrl() {
          return "transaction/announce";
        }
        getNetworkTimeUrl() {
          return "/time-sync/network-time";
        }
        getSendTransactionParams(t) {
          return { ...JSON.parse(t) };
        }
        modifyInfoResponse(t) {
          return {
            balance: t.account.balance,
            transactions: this.wallet.transactions,
          };
        }
        async getTransaction(t) {
          const e = await this.request(
            this.getTransactionUrl(t),
            this.getTransactionMethod(),
          );
          return this.modifyTransactionResponse(e);
        }
        async getTransactions(t) {
          let { address: e, offset: r = 0, limit: n = this.defaultTxLimit } = t;
          this.latestBlock = await this.getLatestBlock();
          const i = await this.request(
            this.getTransactionsUrl(),
            this.getTransactionsMethod(),
            this.getTransactionsParams(e),
          );
          return this.modifyTransactionsResponse(i.data, e);
        }
        async getLatestBlock() {
          const t = await this.request(
            this.getLatestBlockUrl(),
            this.getTransactionsMethod(),
          );
          return t;
        }
        getTxHash(t) {
          return t.meta.hash.data;
        }
        getTxDateTime(t) {
          const e = Date.UTC(2015, 2, 29, 0, 6, 25, 0),
            r = 1e3 * Number(t.transaction.timeStamp) + e;
          return new Date(Number("" + r));
        }
        getTxMemo(t) {
          return (0, s.default)((0, u.hex2a)(t.transaction.message.payload));
        }
        getTxDirection(t, e) {
          return t === e.transaction.recipient;
        }
        getTxOtherSideAddress(t, e) {
          return this.getTxDirection(t, e)
            ? i.default.model.address.toAddress(e.transaction.signer, f.id)
            : e.transaction.recipient;
        }
        getTxValue(t, e) {
          return Number(
            this.wallet.toCurrencyUnit(
              this.getTxDirection(t, e)
                ? e.transaction.amount
                : new this.wallet.BN(e.transaction.amount).add(
                    new this.wallet.BN(e.transaction.fee),
                  ),
            ),
          );
        }
        getTxConfirmations(t) {
          return this.latestBlock
            ? this.latestBlock.height - t.meta.height
            : Number(1);
        }
        async sendTransaction(t) {
          try {
            const e = await this.request(
              this.getSendTransactionUrl(),
              this.getSendTransactionMethod(),
              this.getSendTransactionParams(t),
            );
            return this.modifySendTransactionResponse(e);
          } catch (e) {
            throw new a.ExplorerRequestError({
              type: h.SEND_TRANSACTION_TYPE,
              error: e,
              instance: this,
            });
          }
        }
        modifySendTransactionResponse(t) {
          if ("SUCCESS" !== t.message) throw new Error(t.message);
          return { txid: t.transactionHash.data };
        }
        getTxFee(t) {
          return this.wallet.toCurrencyUnit(
            (t && t.transaction && t.transaction.fee) || 0,
          );
        }
      }
      e.default = NemNodeExplorer;
    },
    7679: function (t, e, r) {
      "use strict";
      (function (t) {
        var n = r(2).Buffer,
          i = r(235).Transform,
          s = r(7680),
          o = r(799),
          a = r(229).ok,
          h = r(2).kMaxLength,
          u =
            "Cannot create final Buffer. It would be larger than 0x" +
            h.toString(16) +
            " bytes";
        ((s.Z_MIN_WINDOWBITS = 8),
          (s.Z_MAX_WINDOWBITS = 15),
          (s.Z_DEFAULT_WINDOWBITS = 15),
          (s.Z_MIN_CHUNK = 64),
          (s.Z_MAX_CHUNK = 1 / 0),
          (s.Z_DEFAULT_CHUNK = 16384),
          (s.Z_MIN_MEMLEVEL = 1),
          (s.Z_MAX_MEMLEVEL = 9),
          (s.Z_DEFAULT_MEMLEVEL = 8),
          (s.Z_MIN_LEVEL = -1),
          (s.Z_MAX_LEVEL = 9),
          (s.Z_DEFAULT_LEVEL = s.Z_DEFAULT_COMPRESSION));
        for (var f = Object.keys(s), c = 0; c < f.length; c++) {
          var l = f[c];
          l.match(/^Z/) &&
            Object.defineProperty(e, l, {
              enumerable: !0,
              value: s[l],
              writable: !1,
            });
        }
        for (
          var p = {
              Z_OK: s.Z_OK,
              Z_STREAM_END: s.Z_STREAM_END,
              Z_NEED_DICT: s.Z_NEED_DICT,
              Z_ERRNO: s.Z_ERRNO,
              Z_STREAM_ERROR: s.Z_STREAM_ERROR,
              Z_DATA_ERROR: s.Z_DATA_ERROR,
              Z_MEM_ERROR: s.Z_MEM_ERROR,
              Z_BUF_ERROR: s.Z_BUF_ERROR,
              Z_VERSION_ERROR: s.Z_VERSION_ERROR,
            },
            d = Object.keys(p),
            y = 0;
          y < d.length;
          y++
        ) {
          var _ = d[y];
          p[p[_]] = _;
        }
        function g(t, e, r) {
          var i = [],
            s = 0;
          function o() {
            var e;
            while (null !== (e = t.read())) (i.push(e), (s += e.length));
            t.once("readable", o);
          }
          function a(e) {
            (t.removeListener("end", f), t.removeListener("readable", o), r(e));
          }
          function f() {
            var e,
              o = null;
            (s >= h ? (o = new RangeError(u)) : (e = n.concat(i, s)),
              (i = []),
              t.close(),
              r(o, e));
          }
          (t.on("error", a), t.on("end", f), t.end(e), o());
        }
        function m(t, e) {
          if (("string" === typeof e && (e = n.from(e)), !n.isBuffer(e)))
            throw new TypeError("Not a string or buffer");
          var r = t._finishFlushFlag;
          return t._processChunk(e, r);
        }
        function w(t) {
          if (!(this instanceof w)) return new w(t);
          N.call(this, t, s.DEFLATE);
        }
        function v(t) {
          if (!(this instanceof v)) return new v(t);
          N.call(this, t, s.INFLATE);
        }
        function b(t) {
          if (!(this instanceof b)) return new b(t);
          N.call(this, t, s.GZIP);
        }
        function E(t) {
          if (!(this instanceof E)) return new E(t);
          N.call(this, t, s.GUNZIP);
        }
        function S(t) {
          if (!(this instanceof S)) return new S(t);
          N.call(this, t, s.DEFLATERAW);
        }
        function A(t) {
          if (!(this instanceof A)) return new A(t);
          N.call(this, t, s.INFLATERAW);
        }
        function x(t) {
          if (!(this instanceof x)) return new x(t);
          N.call(this, t, s.UNZIP);
        }
        function T(t) {
          return (
            t === s.Z_NO_FLUSH ||
            t === s.Z_PARTIAL_FLUSH ||
            t === s.Z_SYNC_FLUSH ||
            t === s.Z_FULL_FLUSH ||
            t === s.Z_FINISH ||
            t === s.Z_BLOCK
          );
        }
        function N(t, r) {
          var o = this;
          if (
            ((this._opts = t = t || {}),
            (this._chunkSize = t.chunkSize || e.Z_DEFAULT_CHUNK),
            i.call(this, t),
            t.flush && !T(t.flush))
          )
            throw new Error("Invalid flush flag: " + t.flush);
          if (t.finishFlush && !T(t.finishFlush))
            throw new Error("Invalid flush flag: " + t.finishFlush);
          if (
            ((this._flushFlag = t.flush || s.Z_NO_FLUSH),
            (this._finishFlushFlag =
              "undefined" !== typeof t.finishFlush
                ? t.finishFlush
                : s.Z_FINISH),
            t.chunkSize &&
              (t.chunkSize < e.Z_MIN_CHUNK || t.chunkSize > e.Z_MAX_CHUNK))
          )
            throw new Error("Invalid chunk size: " + t.chunkSize);
          if (
            t.windowBits &&
            (t.windowBits < e.Z_MIN_WINDOWBITS ||
              t.windowBits > e.Z_MAX_WINDOWBITS)
          )
            throw new Error("Invalid windowBits: " + t.windowBits);
          if (t.level && (t.level < e.Z_MIN_LEVEL || t.level > e.Z_MAX_LEVEL))
            throw new Error("Invalid compression level: " + t.level);
          if (
            t.memLevel &&
            (t.memLevel < e.Z_MIN_MEMLEVEL || t.memLevel > e.Z_MAX_MEMLEVEL)
          )
            throw new Error("Invalid memLevel: " + t.memLevel);
          if (
            t.strategy &&
            t.strategy != e.Z_FILTERED &&
            t.strategy != e.Z_HUFFMAN_ONLY &&
            t.strategy != e.Z_RLE &&
            t.strategy != e.Z_FIXED &&
            t.strategy != e.Z_DEFAULT_STRATEGY
          )
            throw new Error("Invalid strategy: " + t.strategy);
          if (t.dictionary && !n.isBuffer(t.dictionary))
            throw new Error(
              "Invalid dictionary: it should be a Buffer instance",
            );
          this._handle = new s.Zlib(r);
          var a = this;
          ((this._hadError = !1),
            (this._handle.onerror = function (t, r) {
              (L(a), (a._hadError = !0));
              var n = new Error(t);
              ((n.errno = r), (n.code = e.codes[r]), a.emit("error", n));
            }));
          var h = e.Z_DEFAULT_COMPRESSION;
          "number" === typeof t.level && (h = t.level);
          var u = e.Z_DEFAULT_STRATEGY;
          ("number" === typeof t.strategy && (u = t.strategy),
            this._handle.init(
              t.windowBits || e.Z_DEFAULT_WINDOWBITS,
              h,
              t.memLevel || e.Z_DEFAULT_MEMLEVEL,
              u,
              t.dictionary,
            ),
            (this._buffer = n.allocUnsafe(this._chunkSize)),
            (this._offset = 0),
            (this._level = h),
            (this._strategy = u),
            this.once("end", this.close),
            Object.defineProperty(this, "_closed", {
              get: function () {
                return !o._handle;
              },
              configurable: !0,
              enumerable: !0,
            }));
        }
        function L(e, r) {
          (r && t.nextTick(r),
            e._handle && (e._handle.close(), (e._handle = null)));
        }
        function U(t) {
          t.emit("close");
        }
        (Object.defineProperty(e, "codes", {
          enumerable: !0,
          value: Object.freeze(p),
          writable: !1,
        }),
          (e.Deflate = w),
          (e.Inflate = v),
          (e.Gzip = b),
          (e.Gunzip = E),
          (e.DeflateRaw = S),
          (e.InflateRaw = A),
          (e.Unzip = x),
          (e.createDeflate = function (t) {
            return new w(t);
          }),
          (e.createInflate = function (t) {
            return new v(t);
          }),
          (e.createDeflateRaw = function (t) {
            return new S(t);
          }),
          (e.createInflateRaw = function (t) {
            return new A(t);
          }),
          (e.createGzip = function (t) {
            return new b(t);
          }),
          (e.createGunzip = function (t) {
            return new E(t);
          }),
          (e.createUnzip = function (t) {
            return new x(t);
          }),
          (e.deflate = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new w(e), t, r)
            );
          }),
          (e.deflateSync = function (t, e) {
            return m(new w(e), t);
          }),
          (e.gzip = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new b(e), t, r)
            );
          }),
          (e.gzipSync = function (t, e) {
            return m(new b(e), t);
          }),
          (e.deflateRaw = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new S(e), t, r)
            );
          }),
          (e.deflateRawSync = function (t, e) {
            return m(new S(e), t);
          }),
          (e.unzip = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new x(e), t, r)
            );
          }),
          (e.unzipSync = function (t, e) {
            return m(new x(e), t);
          }),
          (e.inflate = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new v(e), t, r)
            );
          }),
          (e.inflateSync = function (t, e) {
            return m(new v(e), t);
          }),
          (e.gunzip = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new E(e), t, r)
            );
          }),
          (e.gunzipSync = function (t, e) {
            return m(new E(e), t);
          }),
          (e.inflateRaw = function (t, e, r) {
            return (
              "function" === typeof e && ((r = e), (e = {})),
              g(new A(e), t, r)
            );
          }),
          (e.inflateRawSync = function (t, e) {
            return m(new A(e), t);
          }),
          o.inherits(N, i),
          (N.prototype.params = function (r, n, i) {
            if (r < e.Z_MIN_LEVEL || r > e.Z_MAX_LEVEL)
              throw new RangeError("Invalid compression level: " + r);
            if (
              n != e.Z_FILTERED &&
              n != e.Z_HUFFMAN_ONLY &&
              n != e.Z_RLE &&
              n != e.Z_FIXED &&
              n != e.Z_DEFAULT_STRATEGY
            )
              throw new TypeError("Invalid strategy: " + n);
            if (this._level !== r || this._strategy !== n) {
              var o = this;
              this.flush(s.Z_SYNC_FLUSH, function () {
                (a(o._handle, "zlib binding closed"),
                  o._handle.params(r, n),
                  o._hadError || ((o._level = r), (o._strategy = n), i && i()));
              });
            } else t.nextTick(i);
          }),
          (N.prototype.reset = function () {
            return (
              a(this._handle, "zlib binding closed"),
              this._handle.reset()
            );
          }),
          (N.prototype._flush = function (t) {
            this._transform(n.alloc(0), "", t);
          }),
          (N.prototype.flush = function (e, r) {
            var i = this,
              o = this._writableState;
            (("function" === typeof e || (void 0 === e && !r)) &&
              ((r = e), (e = s.Z_FULL_FLUSH)),
              o.ended
                ? r && t.nextTick(r)
                : o.ending
                  ? r && this.once("end", r)
                  : o.needDrain
                    ? r &&
                      this.once("drain", function () {
                        return i.flush(e, r);
                      })
                    : ((this._flushFlag = e), this.write(n.alloc(0), "", r)));
          }),
          (N.prototype.close = function (e) {
            (L(this, e), t.nextTick(U, this));
          }),
          (N.prototype._transform = function (t, e, r) {
            var i,
              o = this._writableState,
              a = o.ending || o.ended,
              h = a && (!t || o.length === t.length);
            return null === t || n.isBuffer(t)
              ? this._handle
                ? (h
                    ? (i = this._finishFlushFlag)
                    : ((i = this._flushFlag),
                      t.length >= o.length &&
                        (this._flushFlag = this._opts.flush || s.Z_NO_FLUSH)),
                  void this._processChunk(t, i, r))
                : r(new Error("zlib binding closed"))
              : r(new Error("invalid input"));
          }),
          (N.prototype._processChunk = function (t, e, r) {
            var i = t && t.length,
              s = this._chunkSize - this._offset,
              o = 0,
              f = this,
              c = "function" === typeof r;
            if (!c) {
              var l,
                p = [],
                d = 0;
              (this.on("error", function (t) {
                l = t;
              }),
                a(this._handle, "zlib binding closed"));
              do {
                var y = this._handle.writeSync(
                  e,
                  t,
                  o,
                  i,
                  this._buffer,
                  this._offset,
                  s,
                );
              } while (!this._hadError && m(y[0], y[1]));
              if (this._hadError) throw l;
              if (d >= h) throw (L(this), new RangeError(u));
              var _ = n.concat(p, d);
              return (L(this), _);
            }
            a(this._handle, "zlib binding closed");
            var g = this._handle.write(
              e,
              t,
              o,
              i,
              this._buffer,
              this._offset,
              s,
            );
            function m(h, u) {
              if (
                (this && ((this.buffer = null), (this.callback = null)),
                !f._hadError)
              ) {
                var l = s - u;
                if ((a(l >= 0, "have should not go down"), l > 0)) {
                  var y = f._buffer.slice(f._offset, f._offset + l);
                  ((f._offset += l),
                    c ? f.push(y) : (p.push(y), (d += y.length)));
                }
                if (
                  ((0 === u || f._offset >= f._chunkSize) &&
                    ((s = f._chunkSize),
                    (f._offset = 0),
                    (f._buffer = n.allocUnsafe(f._chunkSize))),
                  0 === u)
                ) {
                  if (((o += i - h), (i = h), !c)) return !0;
                  var _ = f._handle.write(
                    e,
                    t,
                    o,
                    i,
                    f._buffer,
                    f._offset,
                    f._chunkSize,
                  );
                  return ((_.callback = m), void (_.buffer = t));
                }
                if (!c) return !1;
                r();
              }
            }
            ((g.buffer = t), (g.callback = m));
          }),
          o.inherits(w, N),
          o.inherits(v, N),
          o.inherits(b, N),
          o.inherits(E, N),
          o.inherits(S, N),
          o.inherits(A, N),
          o.inherits(x, N));
      }).call(this, r(18));
    },
    7680: function (t, e, r) {
      "use strict";
      (function (t, n) {
        var i = r(229),
          s = r(7681),
          o = r(7682),
          a = r(7685),
          h = r(7688);
        for (var u in h) e[u] = h[u];
        ((e.NONE = 0),
          (e.DEFLATE = 1),
          (e.INFLATE = 2),
          (e.GZIP = 3),
          (e.GUNZIP = 4),
          (e.DEFLATERAW = 5),
          (e.INFLATERAW = 6),
          (e.UNZIP = 7));
        var f = 31,
          c = 139;
        function l(t) {
          if ("number" !== typeof t || t < e.DEFLATE || t > e.UNZIP)
            throw new TypeError("Bad argument");
          ((this.dictionary = null),
            (this.err = 0),
            (this.flush = 0),
            (this.init_done = !1),
            (this.level = 0),
            (this.memLevel = 0),
            (this.mode = t),
            (this.strategy = 0),
            (this.windowBits = 0),
            (this.write_in_progress = !1),
            (this.pending_close = !1),
            (this.gzip_id_bytes_read = 0));
        }
        ((l.prototype.close = function () {
          this.write_in_progress
            ? (this.pending_close = !0)
            : ((this.pending_close = !1),
              i(this.init_done, "close before init"),
              i(this.mode <= e.UNZIP),
              this.mode === e.DEFLATE ||
              this.mode === e.GZIP ||
              this.mode === e.DEFLATERAW
                ? o.deflateEnd(this.strm)
                : (this.mode !== e.INFLATE &&
                    this.mode !== e.GUNZIP &&
                    this.mode !== e.INFLATERAW &&
                    this.mode !== e.UNZIP) ||
                  a.inflateEnd(this.strm),
              (this.mode = e.NONE),
              (this.dictionary = null));
        }),
          (l.prototype.write = function (t, e, r, n, i, s, o) {
            return this._write(!0, t, e, r, n, i, s, o);
          }),
          (l.prototype.writeSync = function (t, e, r, n, i, s, o) {
            return this._write(!1, t, e, r, n, i, s, o);
          }),
          (l.prototype._write = function (r, s, o, a, h, u, f, c) {
            if (
              (i.equal(arguments.length, 8),
              i(this.init_done, "write before init"),
              i(this.mode !== e.NONE, "already finalized"),
              i.equal(!1, this.write_in_progress, "write already in progress"),
              i.equal(!1, this.pending_close, "close is pending"),
              (this.write_in_progress = !0),
              i.equal(!1, void 0 === s, "must provide flush value"),
              (this.write_in_progress = !0),
              s !== e.Z_NO_FLUSH &&
                s !== e.Z_PARTIAL_FLUSH &&
                s !== e.Z_SYNC_FLUSH &&
                s !== e.Z_FULL_FLUSH &&
                s !== e.Z_FINISH &&
                s !== e.Z_BLOCK)
            )
              throw new Error("Invalid flush value");
            if (
              (null == o && ((o = t.alloc(0)), (h = 0), (a = 0)),
              (this.strm.avail_in = h),
              (this.strm.input = o),
              (this.strm.next_in = a),
              (this.strm.avail_out = c),
              (this.strm.output = u),
              (this.strm.next_out = f),
              (this.flush = s),
              !r)
            )
              return (
                this._process(),
                this._checkError() ? this._afterSync() : void 0
              );
            var l = this;
            return (
              n.nextTick(function () {
                (l._process(), l._after());
              }),
              this
            );
          }),
          (l.prototype._afterSync = function () {
            var t = this.strm.avail_out,
              e = this.strm.avail_in;
            return ((this.write_in_progress = !1), [e, t]);
          }),
          (l.prototype._process = function () {
            var t = null;
            switch (this.mode) {
              case e.DEFLATE:
              case e.GZIP:
              case e.DEFLATERAW:
                this.err = o.deflate(this.strm, this.flush);
                break;
              case e.UNZIP:
                switch (
                  (this.strm.avail_in > 0 && (t = this.strm.next_in),
                  this.gzip_id_bytes_read)
                ) {
                  case 0:
                    if (null === t) break;
                    if (this.strm.input[t] !== f) {
                      this.mode = e.INFLATE;
                      break;
                    }
                    if (
                      ((this.gzip_id_bytes_read = 1),
                      t++,
                      1 === this.strm.avail_in)
                    )
                      break;
                  case 1:
                    if (null === t) break;
                    this.strm.input[t] === c
                      ? ((this.gzip_id_bytes_read = 2), (this.mode = e.GUNZIP))
                      : (this.mode = e.INFLATE);
                    break;
                  default:
                    throw new Error(
                      "invalid number of gzip magic number bytes read",
                    );
                }
              case e.INFLATE:
              case e.GUNZIP:
              case e.INFLATERAW:
                ((this.err = a.inflate(this.strm, this.flush)),
                  this.err === e.Z_NEED_DICT &&
                    this.dictionary &&
                    ((this.err = a.inflateSetDictionary(
                      this.strm,
                      this.dictionary,
                    )),
                    this.err === e.Z_OK
                      ? (this.err = a.inflate(this.strm, this.flush))
                      : this.err === e.Z_DATA_ERROR &&
                        (this.err = e.Z_NEED_DICT)));
                while (
                  this.strm.avail_in > 0 &&
                  this.mode === e.GUNZIP &&
                  this.err === e.Z_STREAM_END &&
                  0 !== this.strm.next_in[0]
                )
                  (this.reset(), (this.err = a.inflate(this.strm, this.flush)));
                break;
              default:
                throw new Error("Unknown mode " + this.mode);
            }
          }),
          (l.prototype._checkError = function () {
            switch (this.err) {
              case e.Z_OK:
              case e.Z_BUF_ERROR:
                if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH)
                  return (this._error("unexpected end of file"), !1);
                break;
              case e.Z_STREAM_END:
                break;
              case e.Z_NEED_DICT:
                return (
                  null == this.dictionary
                    ? this._error("Missing dictionary")
                    : this._error("Bad dictionary"),
                  !1
                );
              default:
                return (this._error("Zlib error"), !1);
            }
            return !0;
          }),
          (l.prototype._after = function () {
            if (this._checkError()) {
              var t = this.strm.avail_out,
                e = this.strm.avail_in;
              ((this.write_in_progress = !1),
                this.callback(e, t),
                this.pending_close && this.close());
            }
          }),
          (l.prototype._error = function (t) {
            (this.strm.msg && (t = this.strm.msg),
              this.onerror(t, this.err),
              (this.write_in_progress = !1),
              this.pending_close && this.close());
          }),
          (l.prototype.init = function (t, r, n, s, o) {
            (i(
              4 === arguments.length || 5 === arguments.length,
              "init(windowBits, level, memLevel, strategy, [dictionary])",
            ),
              i(t >= 8 && t <= 15, "invalid windowBits"),
              i(r >= -1 && r <= 9, "invalid compression level"),
              i(n >= 1 && n <= 9, "invalid memlevel"),
              i(
                s === e.Z_FILTERED ||
                  s === e.Z_HUFFMAN_ONLY ||
                  s === e.Z_RLE ||
                  s === e.Z_FIXED ||
                  s === e.Z_DEFAULT_STRATEGY,
                "invalid strategy",
              ),
              this._init(r, t, n, s, o),
              this._setDictionary());
          }),
          (l.prototype.params = function () {
            throw new Error("deflateParams Not supported");
          }),
          (l.prototype.reset = function () {
            (this._reset(), this._setDictionary());
          }),
          (l.prototype._init = function (t, r, n, i, h) {
            switch (
              ((this.level = t),
              (this.windowBits = r),
              (this.memLevel = n),
              (this.strategy = i),
              (this.flush = e.Z_NO_FLUSH),
              (this.err = e.Z_OK),
              (this.mode !== e.GZIP && this.mode !== e.GUNZIP) ||
                (this.windowBits += 16),
              this.mode === e.UNZIP && (this.windowBits += 32),
              (this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW) ||
                (this.windowBits = -1 * this.windowBits),
              (this.strm = new s()),
              this.mode)
            ) {
              case e.DEFLATE:
              case e.GZIP:
              case e.DEFLATERAW:
                this.err = o.deflateInit2(
                  this.strm,
                  this.level,
                  e.Z_DEFLATED,
                  this.windowBits,
                  this.memLevel,
                  this.strategy,
                );
                break;
              case e.INFLATE:
              case e.GUNZIP:
              case e.INFLATERAW:
              case e.UNZIP:
                this.err = a.inflateInit2(this.strm, this.windowBits);
                break;
              default:
                throw new Error("Unknown mode " + this.mode);
            }
            (this.err !== e.Z_OK && this._error("Init error"),
              (this.dictionary = h),
              (this.write_in_progress = !1),
              (this.init_done = !0));
          }),
          (l.prototype._setDictionary = function () {
            if (null != this.dictionary) {
              switch (((this.err = e.Z_OK), this.mode)) {
                case e.DEFLATE:
                case e.DEFLATERAW:
                  this.err = o.deflateSetDictionary(this.strm, this.dictionary);
                  break;
                default:
                  break;
              }
              this.err !== e.Z_OK && this._error("Failed to set dictionary");
            }
          }),
          (l.prototype._reset = function () {
            switch (((this.err = e.Z_OK), this.mode)) {
              case e.DEFLATE:
              case e.DEFLATERAW:
              case e.GZIP:
                this.err = o.deflateReset(this.strm);
                break;
              case e.INFLATE:
              case e.INFLATERAW:
              case e.GUNZIP:
                this.err = a.inflateReset(this.strm);
                break;
              default:
                break;
            }
            this.err !== e.Z_OK && this._error("Failed to reset stream");
          }),
          (e.Zlib = l));
      }).call(this, r(2).Buffer, r(18));
    },
    7690: function (t, e, r) {
      var n = r(2764),
        i = r(231).parse,
        s = [
          "acl",
          "location",
          "logging",
          "notification",
          "partNumber",
          "policy",
          "requestPayment",
          "torrent",
          "uploadId",
          "uploads",
          "versionId",
          "versioning",
          "versions",
          "website",
        ];
      function o(t) {
        return "AWS " + t.key + ":" + h(t);
      }
      function a(t) {
        return n
          .createHmac("sha1", t.secret)
          .update(t.message)
          .digest("base64");
      }
      function h(t) {
        return ((t.message = f(t)), a(t));
      }
      function u(t) {
        return ((t.message = c(t)), a(t));
      }
      function f(t) {
        var e = t.amazonHeaders || "";
        e && (e += "\n");
        var r = [
          t.verb,
          t.md5,
          t.contentType,
          t.date ? t.date.toUTCString() : "",
          e + t.resource,
        ];
        return r.join("\n");
      }
      function c(t) {
        return "GET\n\n\n" + t.date + "\n" + t.resource;
      }
      function l(t) {
        for (var e = [], r = Object.keys(t), n = 0, i = r.length; n < i; ++n) {
          var s = r[n],
            o = t[s];
          s = s.toLowerCase();
          0 === s.indexOf("x-amz") && e.push(s + ":" + o);
        }
        return e.sort().join("\n");
      }
      function p(t) {
        var e = i(t, !0),
          r = e.pathname,
          n = [];
        return (
          Object.keys(e.query).forEach(function (t) {
            if (~s.indexOf(t)) {
              var r =
                "" == e.query[t] ? "" : "=" + encodeURIComponent(e.query[t]);
              n.push(t + r);
            }
          }),
          r + (n.length ? "?" + n.sort().join("&") : "")
        );
      }
      ((t.exports = o),
        (t.exports.authorization = o),
        (t.exports.hmacSha1 = a),
        (t.exports.sign = h),
        (t.exports.signQuery = u),
        (t.exports.queryStringToSign = f),
        (t.exports.queryStringToSign = c),
        (t.exports.canonicalizeHeaders = l),
        (t.exports.canonicalizeResource = p));
    },
    7691: function (t, e, r) {
      (function (t) {
        var n = e,
          i = r(231),
          s = r(3880),
          o = r(2764),
          a = r(7692),
          h = a(1e3);
        function u(t, e, r) {
          return o.createHmac("sha256", t).update(e, "utf8").digest(r);
        }
        function f(t, e) {
          return o.createHash("sha256").update(t, "utf8").digest(e);
        }
        function c(t) {
          return t.replace(/[!'()*]/g, function (t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        function l(t) {
          return c(encodeURIComponent(t));
        }
        var p = {
          authorization: !0,
          connection: !0,
          "x-amzn-trace-id": !0,
          "user-agent": !0,
          expect: !0,
          "presigned-expires": !0,
          range: !0,
        };
        function d(t, e) {
          "string" === typeof t && (t = i.parse(t));
          var r = (t.headers = Object.assign({}, t.headers || {})),
            n =
              (!this.service || !this.region) &&
              this.matchHost(t.hostname || t.host || r.Host || r.host);
          ((this.request = t),
            (this.credentials = e || this.defaultCredentials()),
            (this.service = t.service || n[0] || ""),
            (this.region = t.region || n[1] || "us-east-1"),
            "email" === this.service && (this.service = "ses"),
            !t.method && t.body && (t.method = "POST"),
            r.Host ||
              r.host ||
              ((r.Host = t.hostname || t.host || this.createHost()),
              t.port && (r.Host += ":" + t.port)),
            t.hostname || t.host || (t.hostname = r.Host || r.host),
            (this.isCodeCommitGit =
              "codecommit" === this.service && "GIT" === t.method),
            (this.extraHeadersToIgnore =
              t.extraHeadersToIgnore || Object.create(null)),
            (this.extraHeadersToInclude =
              t.extraHeadersToInclude || Object.create(null)));
        }
        ((d.prototype.matchHost = function (t) {
          var e = (t || "").match(
              /([^\.]{1,63})\.(?:([^\.]{0,63})\.)?amazonaws\.com(\.cn)?$/,
            ),
            r = (e || []).slice(1, 3);
          if (
            (("es" !== r[1] && "aoss" !== r[1]) || (r = r.reverse()),
            "s3" == r[1])
          )
            ((r[0] = "s3"), (r[1] = "us-east-1"));
          else
            for (var n = 0; n < 2; n++)
              if (/^s3-/.test(r[n])) {
                ((r[1] = r[n].slice(3)), (r[0] = "s3"));
                break;
              }
          return r;
        }),
          (d.prototype.isSingleRegion = function () {
            return (
              (["s3", "sdb"].indexOf(this.service) >= 0 &&
                "us-east-1" === this.region) ||
              [
                "cloudfront",
                "ls",
                "route53",
                "iam",
                "importexport",
                "sts",
              ].indexOf(this.service) >= 0
            );
          }),
          (d.prototype.createHost = function () {
            var t = this.isSingleRegion() ? "" : "." + this.region,
              e = "ses" === this.service ? "email" : this.service;
            return e + t + ".amazonaws.com";
          }),
          (d.prototype.prepareRequest = function () {
            this.parsePath();
            var e,
              r = this.request,
              n = r.headers;
            r.signQuery
              ? ((this.parsedPath.query = e = this.parsedPath.query || {}),
                this.credentials.sessionToken &&
                  (e["X-Amz-Security-Token"] = this.credentials.sessionToken),
                "s3" !== this.service ||
                  e["X-Amz-Expires"] ||
                  (e["X-Amz-Expires"] = 86400),
                e["X-Amz-Date"]
                  ? (this.datetime = e["X-Amz-Date"])
                  : (e["X-Amz-Date"] = this.getDateTime()),
                (e["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256"),
                (e["X-Amz-Credential"] =
                  this.credentials.accessKeyId + "/" + this.credentialString()),
                (e["X-Amz-SignedHeaders"] = this.signedHeaders()))
              : (r.doNotModifyHeaders ||
                  this.isCodeCommitGit ||
                  (!r.body ||
                    n["Content-Type"] ||
                    n["content-type"] ||
                    (n["Content-Type"] =
                      "application/x-www-form-urlencoded; charset=utf-8"),
                  !r.body ||
                    n["Content-Length"] ||
                    n["content-length"] ||
                    (n["Content-Length"] = t.byteLength(r.body)),
                  !this.credentials.sessionToken ||
                    n["X-Amz-Security-Token"] ||
                    n["x-amz-security-token"] ||
                    (n["X-Amz-Security-Token"] = this.credentials.sessionToken),
                  "s3" !== this.service ||
                    n["X-Amz-Content-Sha256"] ||
                    n["x-amz-content-sha256"] ||
                    (n["X-Amz-Content-Sha256"] = f(
                      this.request.body || "",
                      "hex",
                    )),
                  n["X-Amz-Date"] || n["x-amz-date"]
                    ? (this.datetime = n["X-Amz-Date"] || n["x-amz-date"])
                    : (n["X-Amz-Date"] = this.getDateTime())),
                delete n.Authorization,
                delete n.authorization);
          }),
          (d.prototype.sign = function () {
            return (
              this.parsedPath || this.prepareRequest(),
              this.request.signQuery
                ? (this.parsedPath.query["X-Amz-Signature"] = this.signature())
                : (this.request.headers.Authorization = this.authHeader()),
              (this.request.path = this.formatPath()),
              this.request
            );
          }),
          (d.prototype.getDateTime = function () {
            if (!this.datetime) {
              var t = this.request.headers,
                e = new Date(t.Date || t.date || new Date());
              ((this.datetime = e.toISOString().replace(/[:\-]|\.\d{3}/g, "")),
                this.isCodeCommitGit &&
                  (this.datetime = this.datetime.slice(0, -1)));
            }
            return this.datetime;
          }),
          (d.prototype.getDate = function () {
            return this.getDateTime().substr(0, 8);
          }),
          (d.prototype.authHeader = function () {
            return [
              "AWS4-HMAC-SHA256 Credential=" +
                this.credentials.accessKeyId +
                "/" +
                this.credentialString(),
              "SignedHeaders=" + this.signedHeaders(),
              "Signature=" + this.signature(),
            ].join(", ");
          }),
          (d.prototype.signature = function () {
            var t,
              e,
              r,
              n = this.getDate(),
              i = [
                this.credentials.secretAccessKey,
                n,
                this.region,
                this.service,
              ].join(),
              s = h.get(i);
            return (
              s ||
                ((t = u("AWS4" + this.credentials.secretAccessKey, n)),
                (e = u(t, this.region)),
                (r = u(e, this.service)),
                (s = u(r, "aws4_request")),
                h.set(i, s)),
              u(s, this.stringToSign(), "hex")
            );
          }),
          (d.prototype.stringToSign = function () {
            return [
              "AWS4-HMAC-SHA256",
              this.getDateTime(),
              this.credentialString(),
              f(this.canonicalString(), "hex"),
            ].join("\n");
          }),
          (d.prototype.canonicalString = function () {
            this.parsedPath || this.prepareRequest();
            var t,
              e = this.parsedPath.path,
              r = this.parsedPath.query,
              n = this.request.headers,
              i = "",
              s = "s3" !== this.service,
              o = "s3" === this.service || this.request.doNotEncodePath,
              a = "s3" === this.service,
              h = "s3" === this.service;
            if (
              ((t =
                "s3" === this.service && this.request.signQuery
                  ? "UNSIGNED-PAYLOAD"
                  : this.isCodeCommitGit
                    ? ""
                    : n["X-Amz-Content-Sha256"] ||
                      n["x-amz-content-sha256"] ||
                      f(this.request.body || "", "hex")),
              r)
            ) {
              var u = Object.keys(r).reduce(function (t, e) {
                  return e
                    ? ((t[l(e)] = Array.isArray(r[e]) && h ? r[e][0] : r[e]), t)
                    : t;
                }, {}),
                c = [];
              (Object.keys(u)
                .sort()
                .forEach(function (t) {
                  Array.isArray(u[t])
                    ? u[t]
                        .map(l)
                        .sort()
                        .forEach(function (e) {
                          c.push(t + "=" + e);
                        })
                    : c.push(t + "=" + l(u[t]));
                }),
                (i = c.join("&")));
            }
            return (
              "/" !== e &&
                (s && (e = e.replace(/\/{2,}/g, "/")),
                (e = e
                  .split("/")
                  .reduce(function (t, e) {
                    return (
                      s && ".." === e
                        ? t.pop()
                        : (s && "." === e) ||
                          (o && (e = decodeURIComponent(e.replace(/\+/g, " "))),
                          t.push(l(e))),
                      t
                    );
                  }, [])
                  .join("/")),
                "/" !== e[0] && (e = "/" + e),
                a && (e = e.replace(/%2F/g, "/"))),
              [
                this.request.method || "GET",
                e,
                i,
                this.canonicalHeaders() + "\n",
                this.signedHeaders(),
                t,
              ].join("\n")
            );
          }),
          (d.prototype.filterHeaders = function () {
            var t = this.request.headers,
              e = this.extraHeadersToInclude,
              r = this.extraHeadersToIgnore;
            this.filteredHeaders = Object.keys(t)
              .map(function (e) {
                return [e.toLowerCase(), t[e]];
              })
              .filter(function (t) {
                return e[t[0]] || (null == p[t[0]] && !r[t[0]]);
              })
              .sort(function (t, e) {
                return t[0] < e[0] ? -1 : 1;
              });
          }),
          (d.prototype.canonicalHeaders = function () {
            return (
              this.filteredHeaders || this.filterHeaders(),
              this.filteredHeaders
                .map(function (t) {
                  return (
                    t[0] + ":" + t[1].toString().trim().replace(/\s+/g, " ")
                  );
                })
                .join("\n")
            );
          }),
          (d.prototype.signedHeaders = function () {
            return (
              this.filteredHeaders || this.filterHeaders(),
              this.filteredHeaders
                .map(function (t) {
                  return t[0];
                })
                .join(";")
            );
          }),
          (d.prototype.credentialString = function () {
            return [
              this.getDate(),
              this.region,
              this.service,
              "aws4_request",
            ].join("/");
          }),
          (d.prototype.defaultCredentials = function () {
            var t = process.env;
            return {
              accessKeyId: t.AWS_ACCESS_KEY_ID || t.AWS_ACCESS_KEY,
              secretAccessKey: t.AWS_SECRET_ACCESS_KEY || t.AWS_SECRET_KEY,
              sessionToken: t.AWS_SESSION_TOKEN,
            };
          }),
          (d.prototype.parsePath = function () {
            var t = this.request.path || "/";
            /[^0-9A-Za-z;,/?:@&=+$\-_.!~*'()#%]/.test(t) &&
              (t = encodeURI(decodeURI(t)));
            var e = t.indexOf("?"),
              r = null;
            (e >= 0 && ((r = s.parse(t.slice(e + 1))), (t = t.slice(0, e))),
              (this.parsedPath = { path: t, query: r }));
          }),
          (d.prototype.formatPath = function () {
            var t = this.parsedPath.path,
              e = this.parsedPath.query;
            return e
              ? (null != e[""] && delete e[""], t + "?" + c(s.stringify(e)))
              : t;
          }),
          (n.RequestSigner = d),
          (n.sign = function (t, e) {
            return new d(t, e).sign();
          }));
      }).call(this, r(2).Buffer);
    },
    7692: function (t, e) {
      function r(t) {
        ((this.capacity = 0 | t),
          (this.map = Object.create(null)),
          (this.list = new n()));
      }
      function n() {
        ((this.firstNode = null), (this.lastNode = null));
      }
      function i(t, e) {
        ((this.key = t),
          (this.val = e),
          (this.prev = null),
          (this.next = null));
      }
      ((t.exports = function (t) {
        return new r(t);
      }),
        (r.prototype.get = function (t) {
          var e = this.map[t];
          if (null != e) return (this.used(e), e.val);
        }),
        (r.prototype.set = function (t, e) {
          var r = this.map[t];
          if (null != r) r.val = e;
          else {
            if ((this.capacity || this.prune(), !this.capacity)) return !1;
            ((r = new i(t, e)), (this.map[t] = r), this.capacity--);
          }
          return (this.used(r), !0);
        }),
        (r.prototype.used = function (t) {
          this.list.moveToFront(t);
        }),
        (r.prototype.prune = function () {
          var t = this.list.pop();
          null != t && (delete this.map[t.key], this.capacity++);
        }),
        (n.prototype.moveToFront = function (t) {
          this.firstNode != t &&
            (this.remove(t),
            null == this.firstNode
              ? ((this.firstNode = t),
                (this.lastNode = t),
                (t.prev = null),
                (t.next = null))
              : ((t.prev = null),
                (t.next = this.firstNode),
                (t.next.prev = t),
                (this.firstNode = t)));
        }),
        (n.prototype.pop = function () {
          var t = this.lastNode;
          return (null != t && this.remove(t), t);
        }),
        (n.prototype.remove = function (t) {
          (this.firstNode == t
            ? (this.firstNode = t.next)
            : null != t.prev && (t.prev.next = t.next),
            this.lastNode == t
              ? (this.lastNode = t.prev)
              : null != t.next && (t.next.prev = t.prev));
        }));
    },
    7695: function (t, e, r) {
      var n = r(4981),
        i = r(4982),
        s = r(7696),
        o = r(7697);
      for (var a in ((t.exports = { Reader: s, Writer: o }), i))
        i.hasOwnProperty(a) && (t.exports[a] = i[a]);
      for (var h in n) n.hasOwnProperty(h) && (t.exports[h] = n[h]);
    },
    7696: function (t, e, r) {
      var n = r(229),
        i = r(2933).Buffer,
        s = r(4982),
        o = r(4981),
        a = o.newInvalidAsn1Error;
      function h(t) {
        if (!t || !i.isBuffer(t))
          throw new TypeError("data must be a node Buffer");
        ((this._buf = t),
          (this._size = t.length),
          (this._len = 0),
          (this._offset = 0));
      }
      (Object.defineProperty(h.prototype, "length", {
        enumerable: !0,
        get: function () {
          return this._len;
        },
      }),
        Object.defineProperty(h.prototype, "offset", {
          enumerable: !0,
          get: function () {
            return this._offset;
          },
        }),
        Object.defineProperty(h.prototype, "remain", {
          get: function () {
            return this._size - this._offset;
          },
        }),
        Object.defineProperty(h.prototype, "buffer", {
          get: function () {
            return this._buf.slice(this._offset);
          },
        }),
        (h.prototype.readByte = function (t) {
          if (this._size - this._offset < 1) return null;
          var e = 255 & this._buf[this._offset];
          return (t || (this._offset += 1), e);
        }),
        (h.prototype.peek = function () {
          return this.readByte(!0);
        }),
        (h.prototype.readLength = function (t) {
          if ((void 0 === t && (t = this._offset), t >= this._size))
            return null;
          var e = 255 & this._buf[t++];
          if (null === e) return null;
          if (128 === (128 & e)) {
            if (((e &= 127), 0 === e))
              throw a("Indefinite length not supported");
            if (e > 4) throw a("encoding too long");
            if (this._size - t < e) return null;
            this._len = 0;
            for (var r = 0; r < e; r++)
              this._len = (this._len << 8) + (255 & this._buf[t++]);
          } else this._len = e;
          return t;
        }),
        (h.prototype.readSequence = function (t) {
          var e = this.peek();
          if (null === e) return null;
          if (void 0 !== t && t !== e)
            throw a(
              "Expected 0x" + t.toString(16) + ": got 0x" + e.toString(16),
            );
          var r = this.readLength(this._offset + 1);
          return null === r ? null : ((this._offset = r), e);
        }),
        (h.prototype.readInt = function () {
          return this._readTag(s.Integer);
        }),
        (h.prototype.readBoolean = function () {
          return 0 !== this._readTag(s.Boolean);
        }),
        (h.prototype.readEnumeration = function () {
          return this._readTag(s.Enumeration);
        }),
        (h.prototype.readString = function (t, e) {
          t || (t = s.OctetString);
          var r = this.peek();
          if (null === r) return null;
          if (r !== t)
            throw a(
              "Expected 0x" + t.toString(16) + ": got 0x" + r.toString(16),
            );
          var n = this.readLength(this._offset + 1);
          if (null === n) return null;
          if (this.length > this._size - n) return null;
          if (((this._offset = n), 0 === this.length))
            return e ? i.alloc(0) : "";
          var o = this._buf.slice(this._offset, this._offset + this.length);
          return ((this._offset += this.length), e ? o : o.toString("utf8"));
        }),
        (h.prototype.readOID = function (t) {
          t || (t = s.OID);
          var e = this.readString(t, !0);
          if (null === e) return null;
          for (var r = [], n = 0, i = 0; i < e.length; i++) {
            var o = 255 & e[i];
            ((n <<= 7),
              (n += 127 & o),
              0 === (128 & o) && (r.push(n), (n = 0)));
          }
          return (
            (n = r.shift()),
            r.unshift(n % 40),
            r.unshift((n / 40) >> 0),
            r.join(".")
          );
        }),
        (h.prototype._readTag = function (t) {
          n.ok(void 0 !== t);
          var e = this.peek();
          if (null === e) return null;
          if (e !== t)
            throw a(
              "Expected 0x" + t.toString(16) + ": got 0x" + e.toString(16),
            );
          var r = this.readLength(this._offset + 1);
          if (null === r) return null;
          if (this.length > 4) throw a("Integer too long: " + this.length);
          if (this.length > this._size - r) return null;
          this._offset = r;
          for (
            var i = this._buf[this._offset], s = 0, o = 0;
            o < this.length;
            o++
          )
            ((s <<= 8), (s |= 255 & this._buf[this._offset++]));
          return (128 === (128 & i) && 4 !== o && (s -= 1 << (8 * o)), s >> 0);
        }),
        (t.exports = h));
    },
    7697: function (t, e, r) {
      var n = r(229),
        i = r(2933).Buffer,
        s = r(4982),
        o = r(4981),
        a = o.newInvalidAsn1Error,
        h = { size: 1024, growthFactor: 8 };
      function u(t, e) {
        (n.ok(t),
          n.equal(typeof t, "object"),
          n.ok(e),
          n.equal(typeof e, "object"));
        var r = Object.getOwnPropertyNames(t);
        return (
          r.forEach(function (r) {
            if (!e[r]) {
              var n = Object.getOwnPropertyDescriptor(t, r);
              Object.defineProperty(e, r, n);
            }
          }),
          e
        );
      }
      function f(t) {
        ((t = u(h, t || {})),
          (this._buf = i.alloc(t.size || 1024)),
          (this._size = this._buf.length),
          (this._offset = 0),
          (this._options = t),
          (this._seq = []));
      }
      (Object.defineProperty(f.prototype, "buffer", {
        get: function () {
          if (this._seq.length)
            throw a(this._seq.length + " unended sequence(s)");
          return this._buf.slice(0, this._offset);
        },
      }),
        (f.prototype.writeByte = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("argument must be a Number");
          (this._ensure(1), (this._buf[this._offset++] = t));
        }),
        (f.prototype.writeInt = function (t, e) {
          if ("number" !== typeof t)
            throw new TypeError("argument must be a Number");
          "number" !== typeof e && (e = s.Integer);
          var r = 4;
          while (
            (0 === (4286578688 & t) || -8388608 === (4286578688 & t)) &&
            r > 1
          )
            (r--, (t <<= 8));
          if (r > 4) throw a("BER ints cannot be > 0xffffffff");
          (this._ensure(2 + r),
            (this._buf[this._offset++] = e),
            (this._buf[this._offset++] = r));
          while (r-- > 0)
            ((this._buf[this._offset++] = (4278190080 & t) >>> 24), (t <<= 8));
        }),
        (f.prototype.writeNull = function () {
          (this.writeByte(s.Null), this.writeByte(0));
        }),
        (f.prototype.writeEnumeration = function (t, e) {
          if ("number" !== typeof t)
            throw new TypeError("argument must be a Number");
          return (
            "number" !== typeof e && (e = s.Enumeration),
            this.writeInt(t, e)
          );
        }),
        (f.prototype.writeBoolean = function (t, e) {
          if ("boolean" !== typeof t)
            throw new TypeError("argument must be a Boolean");
          ("number" !== typeof e && (e = s.Boolean),
            this._ensure(3),
            (this._buf[this._offset++] = e),
            (this._buf[this._offset++] = 1),
            (this._buf[this._offset++] = t ? 255 : 0));
        }),
        (f.prototype.writeString = function (t, e) {
          if ("string" !== typeof t)
            throw new TypeError(
              "argument must be a string (was: " + typeof t + ")",
            );
          "number" !== typeof e && (e = s.OctetString);
          var r = i.byteLength(t);
          (this.writeByte(e),
            this.writeLength(r),
            r &&
              (this._ensure(r),
              this._buf.write(t, this._offset),
              (this._offset += r)));
        }),
        (f.prototype.writeBuffer = function (t, e) {
          if ("number" !== typeof e)
            throw new TypeError("tag must be a number");
          if (!i.isBuffer(t)) throw new TypeError("argument must be a buffer");
          (this.writeByte(e),
            this.writeLength(t.length),
            this._ensure(t.length),
            t.copy(this._buf, this._offset, 0, t.length),
            (this._offset += t.length));
        }),
        (f.prototype.writeStringArray = function (t) {
          if ((!t) instanceof Array)
            throw new TypeError("argument must be an Array[String]");
          var e = this;
          t.forEach(function (t) {
            e.writeString(t);
          });
        }),
        (f.prototype.writeOID = function (t, e) {
          if ("string" !== typeof t)
            throw new TypeError("argument must be a string");
          if (
            ("number" !== typeof e && (e = s.OID),
            !/^([0-9]+\.){3,}[0-9]+$/.test(t))
          )
            throw new Error("argument is not a valid OID string");
          function r(t, e) {
            e < 128
              ? t.push(e)
              : e < 16384
                ? (t.push((e >>> 7) | 128), t.push(127 & e))
                : e < 2097152
                  ? (t.push((e >>> 14) | 128),
                    t.push(255 & ((e >>> 7) | 128)),
                    t.push(127 & e))
                  : e < 268435456
                    ? (t.push((e >>> 21) | 128),
                      t.push(255 & ((e >>> 14) | 128)),
                      t.push(255 & ((e >>> 7) | 128)),
                      t.push(127 & e))
                    : (t.push(255 & ((e >>> 28) | 128)),
                      t.push(255 & ((e >>> 21) | 128)),
                      t.push(255 & ((e >>> 14) | 128)),
                      t.push(255 & ((e >>> 7) | 128)),
                      t.push(127 & e));
          }
          var n = t.split("."),
            i = [];
          (i.push(40 * parseInt(n[0], 10) + parseInt(n[1], 10)),
            n.slice(2).forEach(function (t) {
              r(i, parseInt(t, 10));
            }));
          var o = this;
          (this._ensure(2 + i.length),
            this.writeByte(e),
            this.writeLength(i.length),
            i.forEach(function (t) {
              o.writeByte(t);
            }));
        }),
        (f.prototype.writeLength = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("argument must be a Number");
          if ((this._ensure(4), t <= 127)) this._buf[this._offset++] = t;
          else if (t <= 255)
            ((this._buf[this._offset++] = 129),
              (this._buf[this._offset++] = t));
          else if (t <= 65535)
            ((this._buf[this._offset++] = 130),
              (this._buf[this._offset++] = t >> 8),
              (this._buf[this._offset++] = t));
          else {
            if (!(t <= 16777215)) throw a("Length too long (> 4 bytes)");
            ((this._buf[this._offset++] = 131),
              (this._buf[this._offset++] = t >> 16),
              (this._buf[this._offset++] = t >> 8),
              (this._buf[this._offset++] = t));
          }
        }),
        (f.prototype.startSequence = function (t) {
          ("number" !== typeof t && (t = s.Sequence | s.Constructor),
            this.writeByte(t),
            this._seq.push(this._offset),
            this._ensure(3),
            (this._offset += 3));
        }),
        (f.prototype.endSequence = function () {
          var t = this._seq.pop(),
            e = t + 3,
            r = this._offset - e;
          if (r <= 127) (this._shift(e, r, -2), (this._buf[t] = r));
          else if (r <= 255)
            (this._shift(e, r, -1),
              (this._buf[t] = 129),
              (this._buf[t + 1] = r));
          else if (r <= 65535)
            ((this._buf[t] = 130),
              (this._buf[t + 1] = r >> 8),
              (this._buf[t + 2] = r));
          else {
            if (!(r <= 16777215)) throw a("Sequence too long");
            (this._shift(e, r, 1),
              (this._buf[t] = 131),
              (this._buf[t + 1] = r >> 16),
              (this._buf[t + 2] = r >> 8),
              (this._buf[t + 3] = r));
          }
        }),
        (f.prototype._shift = function (t, e, r) {
          (n.ok(void 0 !== t),
            n.ok(void 0 !== e),
            n.ok(r),
            this._buf.copy(this._buf, t + r, t, t + e),
            (this._offset += r));
        }),
        (f.prototype._ensure = function (t) {
          if ((n.ok(t), this._size - this._offset < t)) {
            var e = this._size * this._options.growthFactor;
            e - this._offset < t && (e += t);
            var r = i.alloc(e);
            (this._buf.copy(r, 0, 0, this._offset),
              (this._buf = r),
              (this._size = e));
          }
        }),
        (t.exports = f));
    },
    7698: function (t, e) {},
    7701: function (t, e, r) {
      (function (t) {
        "use strict";
        var e = function (t) {
            var e,
              r = new Float64Array(16);
            if (t) for (e = 0; e < t.length; e++) r[e] = t[e];
            return r;
          },
          n = function () {
            throw new Error("no PRNG");
          },
          i = new Uint8Array(16),
          s = new Uint8Array(32);
        s[0] = 9;
        var o = e(),
          a = e([1]),
          h = e([56129, 1]),
          u = e([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          f = e([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          c = e([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          l = e([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          p = e([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function d(t, e, r, n) {
          ((t[e] = (r >> 24) & 255),
            (t[e + 1] = (r >> 16) & 255),
            (t[e + 2] = (r >> 8) & 255),
            (t[e + 3] = 255 & r),
            (t[e + 4] = (n >> 24) & 255),
            (t[e + 5] = (n >> 16) & 255),
            (t[e + 6] = (n >> 8) & 255),
            (t[e + 7] = 255 & n));
        }
        function y(t, e, r, n, i) {
          var s,
            o = 0;
          for (s = 0; s < i; s++) o |= t[e + s] ^ r[n + s];
          return (1 & ((o - 1) >>> 8)) - 1;
        }
        function _(t, e, r, n) {
          return y(t, e, r, n, 16);
        }
        function g(t, e, r, n) {
          return y(t, e, r, n, 32);
        }
        function m(t, e, r, n) {
          for (
            var i,
              s =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              o =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              a =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              h =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              u =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              f =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              c =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              l =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              p =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              d =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              y =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              _ =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              g =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              m =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              w =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              v =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              b = s,
              E = o,
              S = a,
              A = h,
              x = u,
              T = f,
              N = c,
              L = l,
              U = p,
              I = d,
              k = y,
              O = _,
              D = g,
              R = m,
              z = w,
              Z = v,
              F = 0;
            F < 20;
            F += 2
          )
            ((i = (b + D) | 0),
              (x ^= (i << 7) | (i >>> 25)),
              (i = (x + b) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + x) | 0),
              (D ^= (i << 13) | (i >>> 19)),
              (i = (D + U) | 0),
              (b ^= (i << 18) | (i >>> 14)),
              (i = (T + E) | 0),
              (I ^= (i << 7) | (i >>> 25)),
              (i = (I + T) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + I) | 0),
              (E ^= (i << 13) | (i >>> 19)),
              (i = (E + R) | 0),
              (T ^= (i << 18) | (i >>> 14)),
              (i = (k + N) | 0),
              (z ^= (i << 7) | (i >>> 25)),
              (i = (z + k) | 0),
              (S ^= (i << 9) | (i >>> 23)),
              (i = (S + z) | 0),
              (N ^= (i << 13) | (i >>> 19)),
              (i = (N + S) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (Z + O) | 0),
              (A ^= (i << 7) | (i >>> 25)),
              (i = (A + Z) | 0),
              (L ^= (i << 9) | (i >>> 23)),
              (i = (L + A) | 0),
              (O ^= (i << 13) | (i >>> 19)),
              (i = (O + L) | 0),
              (Z ^= (i << 18) | (i >>> 14)),
              (i = (b + A) | 0),
              (E ^= (i << 7) | (i >>> 25)),
              (i = (E + b) | 0),
              (S ^= (i << 9) | (i >>> 23)),
              (i = (S + E) | 0),
              (A ^= (i << 13) | (i >>> 19)),
              (i = (A + S) | 0),
              (b ^= (i << 18) | (i >>> 14)),
              (i = (T + x) | 0),
              (N ^= (i << 7) | (i >>> 25)),
              (i = (N + T) | 0),
              (L ^= (i << 9) | (i >>> 23)),
              (i = (L + N) | 0),
              (x ^= (i << 13) | (i >>> 19)),
              (i = (x + L) | 0),
              (T ^= (i << 18) | (i >>> 14)),
              (i = (k + I) | 0),
              (O ^= (i << 7) | (i >>> 25)),
              (i = (O + k) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + O) | 0),
              (I ^= (i << 13) | (i >>> 19)),
              (i = (I + U) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (Z + z) | 0),
              (D ^= (i << 7) | (i >>> 25)),
              (i = (D + Z) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + D) | 0),
              (z ^= (i << 13) | (i >>> 19)),
              (i = (z + R) | 0),
              (Z ^= (i << 18) | (i >>> 14)));
          ((b = (b + s) | 0),
            (E = (E + o) | 0),
            (S = (S + a) | 0),
            (A = (A + h) | 0),
            (x = (x + u) | 0),
            (T = (T + f) | 0),
            (N = (N + c) | 0),
            (L = (L + l) | 0),
            (U = (U + p) | 0),
            (I = (I + d) | 0),
            (k = (k + y) | 0),
            (O = (O + _) | 0),
            (D = (D + g) | 0),
            (R = (R + m) | 0),
            (z = (z + w) | 0),
            (Z = (Z + v) | 0),
            (t[0] = (b >>> 0) & 255),
            (t[1] = (b >>> 8) & 255),
            (t[2] = (b >>> 16) & 255),
            (t[3] = (b >>> 24) & 255),
            (t[4] = (E >>> 0) & 255),
            (t[5] = (E >>> 8) & 255),
            (t[6] = (E >>> 16) & 255),
            (t[7] = (E >>> 24) & 255),
            (t[8] = (S >>> 0) & 255),
            (t[9] = (S >>> 8) & 255),
            (t[10] = (S >>> 16) & 255),
            (t[11] = (S >>> 24) & 255),
            (t[12] = (A >>> 0) & 255),
            (t[13] = (A >>> 8) & 255),
            (t[14] = (A >>> 16) & 255),
            (t[15] = (A >>> 24) & 255),
            (t[16] = (x >>> 0) & 255),
            (t[17] = (x >>> 8) & 255),
            (t[18] = (x >>> 16) & 255),
            (t[19] = (x >>> 24) & 255),
            (t[20] = (T >>> 0) & 255),
            (t[21] = (T >>> 8) & 255),
            (t[22] = (T >>> 16) & 255),
            (t[23] = (T >>> 24) & 255),
            (t[24] = (N >>> 0) & 255),
            (t[25] = (N >>> 8) & 255),
            (t[26] = (N >>> 16) & 255),
            (t[27] = (N >>> 24) & 255),
            (t[28] = (L >>> 0) & 255),
            (t[29] = (L >>> 8) & 255),
            (t[30] = (L >>> 16) & 255),
            (t[31] = (L >>> 24) & 255),
            (t[32] = (U >>> 0) & 255),
            (t[33] = (U >>> 8) & 255),
            (t[34] = (U >>> 16) & 255),
            (t[35] = (U >>> 24) & 255),
            (t[36] = (I >>> 0) & 255),
            (t[37] = (I >>> 8) & 255),
            (t[38] = (I >>> 16) & 255),
            (t[39] = (I >>> 24) & 255),
            (t[40] = (k >>> 0) & 255),
            (t[41] = (k >>> 8) & 255),
            (t[42] = (k >>> 16) & 255),
            (t[43] = (k >>> 24) & 255),
            (t[44] = (O >>> 0) & 255),
            (t[45] = (O >>> 8) & 255),
            (t[46] = (O >>> 16) & 255),
            (t[47] = (O >>> 24) & 255),
            (t[48] = (D >>> 0) & 255),
            (t[49] = (D >>> 8) & 255),
            (t[50] = (D >>> 16) & 255),
            (t[51] = (D >>> 24) & 255),
            (t[52] = (R >>> 0) & 255),
            (t[53] = (R >>> 8) & 255),
            (t[54] = (R >>> 16) & 255),
            (t[55] = (R >>> 24) & 255),
            (t[56] = (z >>> 0) & 255),
            (t[57] = (z >>> 8) & 255),
            (t[58] = (z >>> 16) & 255),
            (t[59] = (z >>> 24) & 255),
            (t[60] = (Z >>> 0) & 255),
            (t[61] = (Z >>> 8) & 255),
            (t[62] = (Z >>> 16) & 255),
            (t[63] = (Z >>> 24) & 255));
        }
        function w(t, e, r, n) {
          for (
            var i,
              s =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              o =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              a =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              h =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              u =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              f =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              c =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              l =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              p =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              d =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              y =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              _ =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              g =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              m =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              w =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              v =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              b = s,
              E = o,
              S = a,
              A = h,
              x = u,
              T = f,
              N = c,
              L = l,
              U = p,
              I = d,
              k = y,
              O = _,
              D = g,
              R = m,
              z = w,
              Z = v,
              F = 0;
            F < 20;
            F += 2
          )
            ((i = (b + D) | 0),
              (x ^= (i << 7) | (i >>> 25)),
              (i = (x + b) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + x) | 0),
              (D ^= (i << 13) | (i >>> 19)),
              (i = (D + U) | 0),
              (b ^= (i << 18) | (i >>> 14)),
              (i = (T + E) | 0),
              (I ^= (i << 7) | (i >>> 25)),
              (i = (I + T) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + I) | 0),
              (E ^= (i << 13) | (i >>> 19)),
              (i = (E + R) | 0),
              (T ^= (i << 18) | (i >>> 14)),
              (i = (k + N) | 0),
              (z ^= (i << 7) | (i >>> 25)),
              (i = (z + k) | 0),
              (S ^= (i << 9) | (i >>> 23)),
              (i = (S + z) | 0),
              (N ^= (i << 13) | (i >>> 19)),
              (i = (N + S) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (Z + O) | 0),
              (A ^= (i << 7) | (i >>> 25)),
              (i = (A + Z) | 0),
              (L ^= (i << 9) | (i >>> 23)),
              (i = (L + A) | 0),
              (O ^= (i << 13) | (i >>> 19)),
              (i = (O + L) | 0),
              (Z ^= (i << 18) | (i >>> 14)),
              (i = (b + A) | 0),
              (E ^= (i << 7) | (i >>> 25)),
              (i = (E + b) | 0),
              (S ^= (i << 9) | (i >>> 23)),
              (i = (S + E) | 0),
              (A ^= (i << 13) | (i >>> 19)),
              (i = (A + S) | 0),
              (b ^= (i << 18) | (i >>> 14)),
              (i = (T + x) | 0),
              (N ^= (i << 7) | (i >>> 25)),
              (i = (N + T) | 0),
              (L ^= (i << 9) | (i >>> 23)),
              (i = (L + N) | 0),
              (x ^= (i << 13) | (i >>> 19)),
              (i = (x + L) | 0),
              (T ^= (i << 18) | (i >>> 14)),
              (i = (k + I) | 0),
              (O ^= (i << 7) | (i >>> 25)),
              (i = (O + k) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + O) | 0),
              (I ^= (i << 13) | (i >>> 19)),
              (i = (I + U) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (Z + z) | 0),
              (D ^= (i << 7) | (i >>> 25)),
              (i = (D + Z) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + D) | 0),
              (z ^= (i << 13) | (i >>> 19)),
              (i = (z + R) | 0),
              (Z ^= (i << 18) | (i >>> 14)));
          ((t[0] = (b >>> 0) & 255),
            (t[1] = (b >>> 8) & 255),
            (t[2] = (b >>> 16) & 255),
            (t[3] = (b >>> 24) & 255),
            (t[4] = (T >>> 0) & 255),
            (t[5] = (T >>> 8) & 255),
            (t[6] = (T >>> 16) & 255),
            (t[7] = (T >>> 24) & 255),
            (t[8] = (k >>> 0) & 255),
            (t[9] = (k >>> 8) & 255),
            (t[10] = (k >>> 16) & 255),
            (t[11] = (k >>> 24) & 255),
            (t[12] = (Z >>> 0) & 255),
            (t[13] = (Z >>> 8) & 255),
            (t[14] = (Z >>> 16) & 255),
            (t[15] = (Z >>> 24) & 255),
            (t[16] = (N >>> 0) & 255),
            (t[17] = (N >>> 8) & 255),
            (t[18] = (N >>> 16) & 255),
            (t[19] = (N >>> 24) & 255),
            (t[20] = (L >>> 0) & 255),
            (t[21] = (L >>> 8) & 255),
            (t[22] = (L >>> 16) & 255),
            (t[23] = (L >>> 24) & 255),
            (t[24] = (U >>> 0) & 255),
            (t[25] = (U >>> 8) & 255),
            (t[26] = (U >>> 16) & 255),
            (t[27] = (U >>> 24) & 255),
            (t[28] = (I >>> 0) & 255),
            (t[29] = (I >>> 8) & 255),
            (t[30] = (I >>> 16) & 255),
            (t[31] = (I >>> 24) & 255));
        }
        function v(t, e, r, n) {
          m(t, e, r, n);
        }
        function b(t, e, r, n) {
          w(t, e, r, n);
        }
        var E = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function S(t, e, r, n, i, s, o) {
          var a,
            h,
            u = new Uint8Array(16),
            f = new Uint8Array(64);
          for (h = 0; h < 16; h++) u[h] = 0;
          for (h = 0; h < 8; h++) u[h] = s[h];
          while (i >= 64) {
            for (v(f, u, o, E), h = 0; h < 64; h++) t[e + h] = r[n + h] ^ f[h];
            for (a = 1, h = 8; h < 16; h++)
              ((a = (a + (255 & u[h])) | 0), (u[h] = 255 & a), (a >>>= 8));
            ((i -= 64), (e += 64), (n += 64));
          }
          if (i > 0)
            for (v(f, u, o, E), h = 0; h < i; h++) t[e + h] = r[n + h] ^ f[h];
          return 0;
        }
        function A(t, e, r, n, i) {
          var s,
            o,
            a = new Uint8Array(16),
            h = new Uint8Array(64);
          for (o = 0; o < 16; o++) a[o] = 0;
          for (o = 0; o < 8; o++) a[o] = n[o];
          while (r >= 64) {
            for (v(h, a, i, E), o = 0; o < 64; o++) t[e + o] = h[o];
            for (s = 1, o = 8; o < 16; o++)
              ((s = (s + (255 & a[o])) | 0), (a[o] = 255 & s), (s >>>= 8));
            ((r -= 64), (e += 64));
          }
          if (r > 0) for (v(h, a, i, E), o = 0; o < r; o++) t[e + o] = h[o];
          return 0;
        }
        function x(t, e, r, n, i) {
          var s = new Uint8Array(32);
          b(s, n, i, E);
          for (var o = new Uint8Array(8), a = 0; a < 8; a++) o[a] = n[a + 16];
          return A(t, e, r, o, s);
        }
        function T(t, e, r, n, i, s, o) {
          var a = new Uint8Array(32);
          b(a, s, o, E);
          for (var h = new Uint8Array(8), u = 0; u < 8; u++) h[u] = s[u + 16];
          return S(t, e, r, n, i, h, a);
        }
        var N = function (t) {
          var e, r, n, i, s, o, a, h;
          ((this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (e = (255 & t[0]) | ((255 & t[1]) << 8)),
            (this.r[0] = 8191 & e),
            (r = (255 & t[2]) | ((255 & t[3]) << 8)),
            (this.r[1] = 8191 & ((e >>> 13) | (r << 3))),
            (n = (255 & t[4]) | ((255 & t[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (i = (255 & t[6]) | ((255 & t[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
            (s = (255 & t[8]) | ((255 & t[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (o = (255 & t[10]) | ((255 & t[11]) << 8)),
            (this.r[6] = 8191 & ((s >>> 14) | (o << 2))),
            (a = (255 & t[12]) | ((255 & t[13]) << 8)),
            (this.r[7] = 8065 & ((o >>> 11) | (a << 5))),
            (h = (255 & t[14]) | ((255 & t[15]) << 8)),
            (this.r[8] = 8191 & ((a >>> 8) | (h << 8))),
            (this.r[9] = (h >>> 5) & 127),
            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8)));
        };
        function L(t, e, r, n, i, s) {
          var o = new N(s);
          return (o.update(r, n, i), o.finish(t, e), 0);
        }
        function U(t, e, r, n, i, s) {
          var o = new Uint8Array(16);
          return (L(o, 0, r, n, i, s), _(t, e, o, 0));
        }
        function I(t, e, r, n, i) {
          var s;
          if (r < 32) return -1;
          for (
            T(t, 0, e, 0, r, n, i), L(t, 16, t, 32, r - 32, t), s = 0;
            s < 16;
            s++
          )
            t[s] = 0;
          return 0;
        }
        function k(t, e, r, n, i) {
          var s,
            o = new Uint8Array(32);
          if (r < 32) return -1;
          if ((x(o, 0, 32, n, i), 0 !== U(e, 16, e, 32, r - 32, o))) return -1;
          for (T(t, 0, e, 0, r, n, i), s = 0; s < 32; s++) t[s] = 0;
          return 0;
        }
        function O(t, e) {
          var r;
          for (r = 0; r < 16; r++) t[r] = 0 | e[r];
        }
        function D(t) {
          var e,
            r,
            n = 1;
          for (e = 0; e < 16; e++)
            ((r = t[e] + n + 65535),
              (n = Math.floor(r / 65536)),
              (t[e] = r - 65536 * n));
          t[0] += n - 1 + 37 * (n - 1);
        }
        function R(t, e, r) {
          for (var n, i = ~(r - 1), s = 0; s < 16; s++)
            ((n = i & (t[s] ^ e[s])), (t[s] ^= n), (e[s] ^= n));
        }
        function z(t, r) {
          var n,
            i,
            s,
            o = e(),
            a = e();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (D(a), D(a), D(a), i = 0; i < 2; i++) {
            for (o[0] = a[0] - 65517, n = 1; n < 15; n++)
              ((o[n] = a[n] - 65535 - ((o[n - 1] >> 16) & 1)),
                (o[n - 1] &= 65535));
            ((o[15] = a[15] - 32767 - ((o[14] >> 16) & 1)),
              (s = (o[15] >> 16) & 1),
              (o[14] &= 65535),
              R(a, o, 1 - s));
          }
          for (n = 0; n < 16; n++)
            ((t[2 * n] = 255 & a[n]), (t[2 * n + 1] = a[n] >> 8));
        }
        function Z(t, e) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return (z(r, t), z(n, e), g(r, 0, n, 0));
        }
        function F(t) {
          var e = new Uint8Array(32);
          return (z(e, t), 1 & e[0]);
        }
        function P(t, e) {
          var r;
          for (r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
          t[15] &= 32767;
        }
        function M(t, e, r) {
          for (var n = 0; n < 16; n++) t[n] = e[n] + r[n];
        }
        function B(t, e, r) {
          for (var n = 0; n < 16; n++) t[n] = e[n] - r[n];
        }
        function C(t, e, r) {
          var n,
            i,
            s = 0,
            o = 0,
            a = 0,
            h = 0,
            u = 0,
            f = 0,
            c = 0,
            l = 0,
            p = 0,
            d = 0,
            y = 0,
            _ = 0,
            g = 0,
            m = 0,
            w = 0,
            v = 0,
            b = 0,
            E = 0,
            S = 0,
            A = 0,
            x = 0,
            T = 0,
            N = 0,
            L = 0,
            U = 0,
            I = 0,
            k = 0,
            O = 0,
            D = 0,
            R = 0,
            z = 0,
            Z = r[0],
            F = r[1],
            P = r[2],
            M = r[3],
            B = r[4],
            C = r[5],
            H = r[6],
            j = r[7],
            K = r[8],
            q = r[9],
            W = r[10],
            G = r[11],
            Y = r[12],
            X = r[13],
            V = r[14],
            $ = r[15];
          ((n = e[0]),
            (s += n * Z),
            (o += n * F),
            (a += n * P),
            (h += n * M),
            (u += n * B),
            (f += n * C),
            (c += n * H),
            (l += n * j),
            (p += n * K),
            (d += n * q),
            (y += n * W),
            (_ += n * G),
            (g += n * Y),
            (m += n * X),
            (w += n * V),
            (v += n * $),
            (n = e[1]),
            (o += n * Z),
            (a += n * F),
            (h += n * P),
            (u += n * M),
            (f += n * B),
            (c += n * C),
            (l += n * H),
            (p += n * j),
            (d += n * K),
            (y += n * q),
            (_ += n * W),
            (g += n * G),
            (m += n * Y),
            (w += n * X),
            (v += n * V),
            (b += n * $),
            (n = e[2]),
            (a += n * Z),
            (h += n * F),
            (u += n * P),
            (f += n * M),
            (c += n * B),
            (l += n * C),
            (p += n * H),
            (d += n * j),
            (y += n * K),
            (_ += n * q),
            (g += n * W),
            (m += n * G),
            (w += n * Y),
            (v += n * X),
            (b += n * V),
            (E += n * $),
            (n = e[3]),
            (h += n * Z),
            (u += n * F),
            (f += n * P),
            (c += n * M),
            (l += n * B),
            (p += n * C),
            (d += n * H),
            (y += n * j),
            (_ += n * K),
            (g += n * q),
            (m += n * W),
            (w += n * G),
            (v += n * Y),
            (b += n * X),
            (E += n * V),
            (S += n * $),
            (n = e[4]),
            (u += n * Z),
            (f += n * F),
            (c += n * P),
            (l += n * M),
            (p += n * B),
            (d += n * C),
            (y += n * H),
            (_ += n * j),
            (g += n * K),
            (m += n * q),
            (w += n * W),
            (v += n * G),
            (b += n * Y),
            (E += n * X),
            (S += n * V),
            (A += n * $),
            (n = e[5]),
            (f += n * Z),
            (c += n * F),
            (l += n * P),
            (p += n * M),
            (d += n * B),
            (y += n * C),
            (_ += n * H),
            (g += n * j),
            (m += n * K),
            (w += n * q),
            (v += n * W),
            (b += n * G),
            (E += n * Y),
            (S += n * X),
            (A += n * V),
            (x += n * $),
            (n = e[6]),
            (c += n * Z),
            (l += n * F),
            (p += n * P),
            (d += n * M),
            (y += n * B),
            (_ += n * C),
            (g += n * H),
            (m += n * j),
            (w += n * K),
            (v += n * q),
            (b += n * W),
            (E += n * G),
            (S += n * Y),
            (A += n * X),
            (x += n * V),
            (T += n * $),
            (n = e[7]),
            (l += n * Z),
            (p += n * F),
            (d += n * P),
            (y += n * M),
            (_ += n * B),
            (g += n * C),
            (m += n * H),
            (w += n * j),
            (v += n * K),
            (b += n * q),
            (E += n * W),
            (S += n * G),
            (A += n * Y),
            (x += n * X),
            (T += n * V),
            (N += n * $),
            (n = e[8]),
            (p += n * Z),
            (d += n * F),
            (y += n * P),
            (_ += n * M),
            (g += n * B),
            (m += n * C),
            (w += n * H),
            (v += n * j),
            (b += n * K),
            (E += n * q),
            (S += n * W),
            (A += n * G),
            (x += n * Y),
            (T += n * X),
            (N += n * V),
            (L += n * $),
            (n = e[9]),
            (d += n * Z),
            (y += n * F),
            (_ += n * P),
            (g += n * M),
            (m += n * B),
            (w += n * C),
            (v += n * H),
            (b += n * j),
            (E += n * K),
            (S += n * q),
            (A += n * W),
            (x += n * G),
            (T += n * Y),
            (N += n * X),
            (L += n * V),
            (U += n * $),
            (n = e[10]),
            (y += n * Z),
            (_ += n * F),
            (g += n * P),
            (m += n * M),
            (w += n * B),
            (v += n * C),
            (b += n * H),
            (E += n * j),
            (S += n * K),
            (A += n * q),
            (x += n * W),
            (T += n * G),
            (N += n * Y),
            (L += n * X),
            (U += n * V),
            (I += n * $),
            (n = e[11]),
            (_ += n * Z),
            (g += n * F),
            (m += n * P),
            (w += n * M),
            (v += n * B),
            (b += n * C),
            (E += n * H),
            (S += n * j),
            (A += n * K),
            (x += n * q),
            (T += n * W),
            (N += n * G),
            (L += n * Y),
            (U += n * X),
            (I += n * V),
            (k += n * $),
            (n = e[12]),
            (g += n * Z),
            (m += n * F),
            (w += n * P),
            (v += n * M),
            (b += n * B),
            (E += n * C),
            (S += n * H),
            (A += n * j),
            (x += n * K),
            (T += n * q),
            (N += n * W),
            (L += n * G),
            (U += n * Y),
            (I += n * X),
            (k += n * V),
            (O += n * $),
            (n = e[13]),
            (m += n * Z),
            (w += n * F),
            (v += n * P),
            (b += n * M),
            (E += n * B),
            (S += n * C),
            (A += n * H),
            (x += n * j),
            (T += n * K),
            (N += n * q),
            (L += n * W),
            (U += n * G),
            (I += n * Y),
            (k += n * X),
            (O += n * V),
            (D += n * $),
            (n = e[14]),
            (w += n * Z),
            (v += n * F),
            (b += n * P),
            (E += n * M),
            (S += n * B),
            (A += n * C),
            (x += n * H),
            (T += n * j),
            (N += n * K),
            (L += n * q),
            (U += n * W),
            (I += n * G),
            (k += n * Y),
            (O += n * X),
            (D += n * V),
            (R += n * $),
            (n = e[15]),
            (v += n * Z),
            (b += n * F),
            (E += n * P),
            (S += n * M),
            (A += n * B),
            (x += n * C),
            (T += n * H),
            (N += n * j),
            (L += n * K),
            (U += n * q),
            (I += n * W),
            (k += n * G),
            (O += n * Y),
            (D += n * X),
            (R += n * V),
            (z += n * $),
            (s += 38 * b),
            (o += 38 * E),
            (a += 38 * S),
            (h += 38 * A),
            (u += 38 * x),
            (f += 38 * T),
            (c += 38 * N),
            (l += 38 * L),
            (p += 38 * U),
            (d += 38 * I),
            (y += 38 * k),
            (_ += 38 * O),
            (g += 38 * D),
            (m += 38 * R),
            (w += 38 * z),
            (i = 1),
            (n = s + i + 65535),
            (i = Math.floor(n / 65536)),
            (s = n - 65536 * i),
            (n = o + i + 65535),
            (i = Math.floor(n / 65536)),
            (o = n - 65536 * i),
            (n = a + i + 65535),
            (i = Math.floor(n / 65536)),
            (a = n - 65536 * i),
            (n = h + i + 65535),
            (i = Math.floor(n / 65536)),
            (h = n - 65536 * i),
            (n = u + i + 65535),
            (i = Math.floor(n / 65536)),
            (u = n - 65536 * i),
            (n = f + i + 65535),
            (i = Math.floor(n / 65536)),
            (f = n - 65536 * i),
            (n = c + i + 65535),
            (i = Math.floor(n / 65536)),
            (c = n - 65536 * i),
            (n = l + i + 65535),
            (i = Math.floor(n / 65536)),
            (l = n - 65536 * i),
            (n = p + i + 65535),
            (i = Math.floor(n / 65536)),
            (p = n - 65536 * i),
            (n = d + i + 65535),
            (i = Math.floor(n / 65536)),
            (d = n - 65536 * i),
            (n = y + i + 65535),
            (i = Math.floor(n / 65536)),
            (y = n - 65536 * i),
            (n = _ + i + 65535),
            (i = Math.floor(n / 65536)),
            (_ = n - 65536 * i),
            (n = g + i + 65535),
            (i = Math.floor(n / 65536)),
            (g = n - 65536 * i),
            (n = m + i + 65535),
            (i = Math.floor(n / 65536)),
            (m = n - 65536 * i),
            (n = w + i + 65535),
            (i = Math.floor(n / 65536)),
            (w = n - 65536 * i),
            (n = v + i + 65535),
            (i = Math.floor(n / 65536)),
            (v = n - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (i = 1),
            (n = s + i + 65535),
            (i = Math.floor(n / 65536)),
            (s = n - 65536 * i),
            (n = o + i + 65535),
            (i = Math.floor(n / 65536)),
            (o = n - 65536 * i),
            (n = a + i + 65535),
            (i = Math.floor(n / 65536)),
            (a = n - 65536 * i),
            (n = h + i + 65535),
            (i = Math.floor(n / 65536)),
            (h = n - 65536 * i),
            (n = u + i + 65535),
            (i = Math.floor(n / 65536)),
            (u = n - 65536 * i),
            (n = f + i + 65535),
            (i = Math.floor(n / 65536)),
            (f = n - 65536 * i),
            (n = c + i + 65535),
            (i = Math.floor(n / 65536)),
            (c = n - 65536 * i),
            (n = l + i + 65535),
            (i = Math.floor(n / 65536)),
            (l = n - 65536 * i),
            (n = p + i + 65535),
            (i = Math.floor(n / 65536)),
            (p = n - 65536 * i),
            (n = d + i + 65535),
            (i = Math.floor(n / 65536)),
            (d = n - 65536 * i),
            (n = y + i + 65535),
            (i = Math.floor(n / 65536)),
            (y = n - 65536 * i),
            (n = _ + i + 65535),
            (i = Math.floor(n / 65536)),
            (_ = n - 65536 * i),
            (n = g + i + 65535),
            (i = Math.floor(n / 65536)),
            (g = n - 65536 * i),
            (n = m + i + 65535),
            (i = Math.floor(n / 65536)),
            (m = n - 65536 * i),
            (n = w + i + 65535),
            (i = Math.floor(n / 65536)),
            (w = n - 65536 * i),
            (n = v + i + 65535),
            (i = Math.floor(n / 65536)),
            (v = n - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (t[0] = s),
            (t[1] = o),
            (t[2] = a),
            (t[3] = h),
            (t[4] = u),
            (t[5] = f),
            (t[6] = c),
            (t[7] = l),
            (t[8] = p),
            (t[9] = d),
            (t[10] = y),
            (t[11] = _),
            (t[12] = g),
            (t[13] = m),
            (t[14] = w),
            (t[15] = v));
        }
        function H(t, e) {
          C(t, e, e);
        }
        function j(t, r) {
          var n,
            i = e();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 253; n >= 0; n--)
            (H(i, i), 2 !== n && 4 !== n && C(i, i, r));
          for (n = 0; n < 16; n++) t[n] = i[n];
        }
        function K(t, r) {
          var n,
            i = e();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 250; n >= 0; n--) (H(i, i), 1 !== n && C(i, i, r));
          for (n = 0; n < 16; n++) t[n] = i[n];
        }
        function q(t, r, n) {
          var i,
            s,
            o = new Uint8Array(32),
            a = new Float64Array(80),
            u = e(),
            f = e(),
            c = e(),
            l = e(),
            p = e(),
            d = e();
          for (s = 0; s < 31; s++) o[s] = r[s];
          for (
            o[31] = (127 & r[31]) | 64, o[0] &= 248, P(a, n), s = 0;
            s < 16;
            s++
          )
            ((f[s] = a[s]), (l[s] = u[s] = c[s] = 0));
          for (u[0] = l[0] = 1, s = 254; s >= 0; --s)
            ((i = (o[s >>> 3] >>> (7 & s)) & 1),
              R(u, f, i),
              R(c, l, i),
              M(p, u, c),
              B(u, u, c),
              M(c, f, l),
              B(f, f, l),
              H(l, p),
              H(d, u),
              C(u, c, u),
              C(c, f, p),
              M(p, u, c),
              B(u, u, c),
              H(f, u),
              B(c, l, d),
              C(u, c, h),
              M(u, u, l),
              C(c, c, u),
              C(u, l, d),
              C(l, f, a),
              H(f, p),
              R(u, f, i),
              R(c, l, i));
          for (s = 0; s < 16; s++)
            ((a[s + 16] = u[s]),
              (a[s + 32] = c[s]),
              (a[s + 48] = f[s]),
              (a[s + 64] = l[s]));
          var y = a.subarray(32),
            _ = a.subarray(16);
          return (j(y, y), C(_, _, y), z(t, _), 0);
        }
        function W(t, e) {
          return q(t, e, s);
        }
        function G(t, e) {
          return (n(e, 32), W(t, e));
        }
        function Y(t, e, r) {
          var n = new Uint8Array(32);
          return (q(n, r, e), b(t, i, n, E));
        }
        ((N.prototype.blocks = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            h,
            u,
            f,
            c,
            l,
            p,
            d,
            y,
            _,
            g,
            m,
            w,
            v,
            b,
            E = this.fin ? 0 : 2048,
            S = this.h[0],
            A = this.h[1],
            x = this.h[2],
            T = this.h[3],
            N = this.h[4],
            L = this.h[5],
            U = this.h[6],
            I = this.h[7],
            k = this.h[8],
            O = this.h[9],
            D = this.r[0],
            R = this.r[1],
            z = this.r[2],
            Z = this.r[3],
            F = this.r[4],
            P = this.r[5],
            M = this.r[6],
            B = this.r[7],
            C = this.r[8],
            H = this.r[9];
          while (r >= 16)
            ((n = (255 & t[e + 0]) | ((255 & t[e + 1]) << 8)),
              (S += 8191 & n),
              (i = (255 & t[e + 2]) | ((255 & t[e + 3]) << 8)),
              (A += 8191 & ((n >>> 13) | (i << 3))),
              (s = (255 & t[e + 4]) | ((255 & t[e + 5]) << 8)),
              (x += 8191 & ((i >>> 10) | (s << 6))),
              (o = (255 & t[e + 6]) | ((255 & t[e + 7]) << 8)),
              (T += 8191 & ((s >>> 7) | (o << 9))),
              (a = (255 & t[e + 8]) | ((255 & t[e + 9]) << 8)),
              (N += 8191 & ((o >>> 4) | (a << 12))),
              (L += (a >>> 1) & 8191),
              (h = (255 & t[e + 10]) | ((255 & t[e + 11]) << 8)),
              (U += 8191 & ((a >>> 14) | (h << 2))),
              (u = (255 & t[e + 12]) | ((255 & t[e + 13]) << 8)),
              (I += 8191 & ((h >>> 11) | (u << 5))),
              (f = (255 & t[e + 14]) | ((255 & t[e + 15]) << 8)),
              (k += 8191 & ((u >>> 8) | (f << 8))),
              (O += (f >>> 5) | E),
              (c = 0),
              (l = c),
              (l += S * D),
              (l += A * (5 * H)),
              (l += x * (5 * C)),
              (l += T * (5 * B)),
              (l += N * (5 * M)),
              (c = l >>> 13),
              (l &= 8191),
              (l += L * (5 * P)),
              (l += U * (5 * F)),
              (l += I * (5 * Z)),
              (l += k * (5 * z)),
              (l += O * (5 * R)),
              (c += l >>> 13),
              (l &= 8191),
              (p = c),
              (p += S * R),
              (p += A * D),
              (p += x * (5 * H)),
              (p += T * (5 * C)),
              (p += N * (5 * B)),
              (c = p >>> 13),
              (p &= 8191),
              (p += L * (5 * M)),
              (p += U * (5 * P)),
              (p += I * (5 * F)),
              (p += k * (5 * Z)),
              (p += O * (5 * z)),
              (c += p >>> 13),
              (p &= 8191),
              (d = c),
              (d += S * z),
              (d += A * R),
              (d += x * D),
              (d += T * (5 * H)),
              (d += N * (5 * C)),
              (c = d >>> 13),
              (d &= 8191),
              (d += L * (5 * B)),
              (d += U * (5 * M)),
              (d += I * (5 * P)),
              (d += k * (5 * F)),
              (d += O * (5 * Z)),
              (c += d >>> 13),
              (d &= 8191),
              (y = c),
              (y += S * Z),
              (y += A * z),
              (y += x * R),
              (y += T * D),
              (y += N * (5 * H)),
              (c = y >>> 13),
              (y &= 8191),
              (y += L * (5 * C)),
              (y += U * (5 * B)),
              (y += I * (5 * M)),
              (y += k * (5 * P)),
              (y += O * (5 * F)),
              (c += y >>> 13),
              (y &= 8191),
              (_ = c),
              (_ += S * F),
              (_ += A * Z),
              (_ += x * z),
              (_ += T * R),
              (_ += N * D),
              (c = _ >>> 13),
              (_ &= 8191),
              (_ += L * (5 * H)),
              (_ += U * (5 * C)),
              (_ += I * (5 * B)),
              (_ += k * (5 * M)),
              (_ += O * (5 * P)),
              (c += _ >>> 13),
              (_ &= 8191),
              (g = c),
              (g += S * P),
              (g += A * F),
              (g += x * Z),
              (g += T * z),
              (g += N * R),
              (c = g >>> 13),
              (g &= 8191),
              (g += L * D),
              (g += U * (5 * H)),
              (g += I * (5 * C)),
              (g += k * (5 * B)),
              (g += O * (5 * M)),
              (c += g >>> 13),
              (g &= 8191),
              (m = c),
              (m += S * M),
              (m += A * P),
              (m += x * F),
              (m += T * Z),
              (m += N * z),
              (c = m >>> 13),
              (m &= 8191),
              (m += L * R),
              (m += U * D),
              (m += I * (5 * H)),
              (m += k * (5 * C)),
              (m += O * (5 * B)),
              (c += m >>> 13),
              (m &= 8191),
              (w = c),
              (w += S * B),
              (w += A * M),
              (w += x * P),
              (w += T * F),
              (w += N * Z),
              (c = w >>> 13),
              (w &= 8191),
              (w += L * z),
              (w += U * R),
              (w += I * D),
              (w += k * (5 * H)),
              (w += O * (5 * C)),
              (c += w >>> 13),
              (w &= 8191),
              (v = c),
              (v += S * C),
              (v += A * B),
              (v += x * M),
              (v += T * P),
              (v += N * F),
              (c = v >>> 13),
              (v &= 8191),
              (v += L * Z),
              (v += U * z),
              (v += I * R),
              (v += k * D),
              (v += O * (5 * H)),
              (c += v >>> 13),
              (v &= 8191),
              (b = c),
              (b += S * H),
              (b += A * C),
              (b += x * B),
              (b += T * M),
              (b += N * P),
              (c = b >>> 13),
              (b &= 8191),
              (b += L * F),
              (b += U * Z),
              (b += I * z),
              (b += k * R),
              (b += O * D),
              (c += b >>> 13),
              (b &= 8191),
              (c = ((c << 2) + c) | 0),
              (c = (c + l) | 0),
              (l = 8191 & c),
              (c >>>= 13),
              (p += c),
              (S = l),
              (A = p),
              (x = d),
              (T = y),
              (N = _),
              (L = g),
              (U = m),
              (I = w),
              (k = v),
              (O = b),
              (e += 16),
              (r -= 16));
          ((this.h[0] = S),
            (this.h[1] = A),
            (this.h[2] = x),
            (this.h[3] = T),
            (this.h[4] = N),
            (this.h[5] = L),
            (this.h[6] = U),
            (this.h[7] = I),
            (this.h[8] = k),
            (this.h[9] = O));
        }),
          (N.prototype.finish = function (t, e) {
            var r,
              n,
              i,
              s,
              o = new Uint16Array(10);
            if (this.leftover) {
              for (s = this.leftover, this.buffer[s++] = 1; s < 16; s++)
                this.buffer[s] = 0;
              ((this.fin = 1), this.blocks(this.buffer, 0, 16));
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, s = 2; s < 10; s++)
              ((this.h[s] += r), (r = this.h[s] >>> 13), (this.h[s] &= 8191));
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                o[0] = this.h[0] + 5,
                r = o[0] >>> 13,
                o[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              ((o[s] = this.h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191));
            for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n;
            for (n = ~n, s = 0; s < 10; s++) this.h[s] = (this.h[s] & n) | o[s];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                i = this.h[0] + this.pad[0],
                this.h[0] = 65535 & i,
                s = 1;
              s < 8;
              s++
            )
              ((i = (((this.h[s] + this.pad[s]) | 0) + (i >>> 16)) | 0),
                (this.h[s] = 65535 & i));
            ((t[e + 0] = (this.h[0] >>> 0) & 255),
              (t[e + 1] = (this.h[0] >>> 8) & 255),
              (t[e + 2] = (this.h[1] >>> 0) & 255),
              (t[e + 3] = (this.h[1] >>> 8) & 255),
              (t[e + 4] = (this.h[2] >>> 0) & 255),
              (t[e + 5] = (this.h[2] >>> 8) & 255),
              (t[e + 6] = (this.h[3] >>> 0) & 255),
              (t[e + 7] = (this.h[3] >>> 8) & 255),
              (t[e + 8] = (this.h[4] >>> 0) & 255),
              (t[e + 9] = (this.h[4] >>> 8) & 255),
              (t[e + 10] = (this.h[5] >>> 0) & 255),
              (t[e + 11] = (this.h[5] >>> 8) & 255),
              (t[e + 12] = (this.h[6] >>> 0) & 255),
              (t[e + 13] = (this.h[6] >>> 8) & 255),
              (t[e + 14] = (this.h[7] >>> 0) & 255),
              (t[e + 15] = (this.h[7] >>> 8) & 255));
          }),
          (N.prototype.update = function (t, e, r) {
            var n, i;
            if (this.leftover) {
              for (i = 16 - this.leftover, i > r && (i = r), n = 0; n < i; n++)
                this.buffer[this.leftover + n] = t[e + n];
              if (
                ((r -= i), (e += i), (this.leftover += i), this.leftover < 16)
              )
                return;
              (this.blocks(this.buffer, 0, 16), (this.leftover = 0));
            }
            if (
              (r >= 16 &&
                ((i = r - (r % 16)), this.blocks(t, e, i), (e += i), (r -= i)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = t[e + n];
              this.leftover += r;
            }
          }));
        var X = I,
          V = k;
        function $(t, e, r, n, i, s) {
          var o = new Uint8Array(32);
          return (Y(o, i, s), X(t, e, r, n, o));
        }
        function J(t, e, r, n, i, s) {
          var o = new Uint8Array(32);
          return (Y(o, i, s), V(t, e, r, n, o));
        }
        var Q = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
        function tt(t, e, r, n) {
          var i,
            s,
            o,
            a,
            h,
            u,
            f,
            c,
            l,
            p,
            d,
            y,
            _,
            g,
            m,
            w,
            v,
            b,
            E,
            S,
            A,
            x,
            T,
            N,
            L,
            U,
            I = new Int32Array(16),
            k = new Int32Array(16),
            O = t[0],
            D = t[1],
            R = t[2],
            z = t[3],
            Z = t[4],
            F = t[5],
            P = t[6],
            M = t[7],
            B = e[0],
            C = e[1],
            H = e[2],
            j = e[3],
            K = e[4],
            q = e[5],
            W = e[6],
            G = e[7],
            Y = 0;
          while (n >= 128) {
            for (E = 0; E < 16; E++)
              ((S = 8 * E + Y),
                (I[E] =
                  (r[S + 0] << 24) |
                  (r[S + 1] << 16) |
                  (r[S + 2] << 8) |
                  r[S + 3]),
                (k[E] =
                  (r[S + 4] << 24) |
                  (r[S + 5] << 16) |
                  (r[S + 6] << 8) |
                  r[S + 7]));
            for (E = 0; E < 80; E++)
              if (
                ((i = O),
                (s = D),
                (o = R),
                (a = z),
                (h = Z),
                (u = F),
                (f = P),
                (c = M),
                (l = B),
                (p = C),
                (d = H),
                (y = j),
                (_ = K),
                (g = q),
                (m = W),
                (w = G),
                (A = M),
                (x = G),
                (T = 65535 & x),
                (N = x >>> 16),
                (L = 65535 & A),
                (U = A >>> 16),
                (A =
                  ((Z >>> 14) | (K << 18)) ^
                  ((Z >>> 18) | (K << 14)) ^
                  ((K >>> 9) | (Z << 23))),
                (x =
                  ((K >>> 14) | (Z << 18)) ^
                  ((K >>> 18) | (Z << 14)) ^
                  ((Z >>> 9) | (K << 23))),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (A = (Z & F) ^ (~Z & P)),
                (x = (K & q) ^ (~K & W)),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (A = Q[2 * E]),
                (x = Q[2 * E + 1]),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (A = I[E % 16]),
                (x = k[E % 16]),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (N += T >>> 16),
                (L += N >>> 16),
                (U += L >>> 16),
                (v = (65535 & L) | (U << 16)),
                (b = (65535 & T) | (N << 16)),
                (A = v),
                (x = b),
                (T = 65535 & x),
                (N = x >>> 16),
                (L = 65535 & A),
                (U = A >>> 16),
                (A =
                  ((O >>> 28) | (B << 4)) ^
                  ((B >>> 2) | (O << 30)) ^
                  ((B >>> 7) | (O << 25))),
                (x =
                  ((B >>> 28) | (O << 4)) ^
                  ((O >>> 2) | (B << 30)) ^
                  ((O >>> 7) | (B << 25))),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (A = (O & D) ^ (O & R) ^ (D & R)),
                (x = (B & C) ^ (B & H) ^ (C & H)),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (N += T >>> 16),
                (L += N >>> 16),
                (U += L >>> 16),
                (c = (65535 & L) | (U << 16)),
                (w = (65535 & T) | (N << 16)),
                (A = a),
                (x = y),
                (T = 65535 & x),
                (N = x >>> 16),
                (L = 65535 & A),
                (U = A >>> 16),
                (A = v),
                (x = b),
                (T += 65535 & x),
                (N += x >>> 16),
                (L += 65535 & A),
                (U += A >>> 16),
                (N += T >>> 16),
                (L += N >>> 16),
                (U += L >>> 16),
                (a = (65535 & L) | (U << 16)),
                (y = (65535 & T) | (N << 16)),
                (D = i),
                (R = s),
                (z = o),
                (Z = a),
                (F = h),
                (P = u),
                (M = f),
                (O = c),
                (C = l),
                (H = p),
                (j = d),
                (K = y),
                (q = _),
                (W = g),
                (G = m),
                (B = w),
                E % 16 === 15)
              )
                for (S = 0; S < 16; S++)
                  ((A = I[S]),
                    (x = k[S]),
                    (T = 65535 & x),
                    (N = x >>> 16),
                    (L = 65535 & A),
                    (U = A >>> 16),
                    (A = I[(S + 9) % 16]),
                    (x = k[(S + 9) % 16]),
                    (T += 65535 & x),
                    (N += x >>> 16),
                    (L += 65535 & A),
                    (U += A >>> 16),
                    (v = I[(S + 1) % 16]),
                    (b = k[(S + 1) % 16]),
                    (A =
                      ((v >>> 1) | (b << 31)) ^
                      ((v >>> 8) | (b << 24)) ^
                      (v >>> 7)),
                    (x =
                      ((b >>> 1) | (v << 31)) ^
                      ((b >>> 8) | (v << 24)) ^
                      ((b >>> 7) | (v << 25))),
                    (T += 65535 & x),
                    (N += x >>> 16),
                    (L += 65535 & A),
                    (U += A >>> 16),
                    (v = I[(S + 14) % 16]),
                    (b = k[(S + 14) % 16]),
                    (A =
                      ((v >>> 19) | (b << 13)) ^
                      ((b >>> 29) | (v << 3)) ^
                      (v >>> 6)),
                    (x =
                      ((b >>> 19) | (v << 13)) ^
                      ((v >>> 29) | (b << 3)) ^
                      ((b >>> 6) | (v << 26))),
                    (T += 65535 & x),
                    (N += x >>> 16),
                    (L += 65535 & A),
                    (U += A >>> 16),
                    (N += T >>> 16),
                    (L += N >>> 16),
                    (U += L >>> 16),
                    (I[S] = (65535 & L) | (U << 16)),
                    (k[S] = (65535 & T) | (N << 16)));
            ((A = O),
              (x = B),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[0]),
              (x = e[0]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[0] = O = (65535 & L) | (U << 16)),
              (e[0] = B = (65535 & T) | (N << 16)),
              (A = D),
              (x = C),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[1]),
              (x = e[1]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[1] = D = (65535 & L) | (U << 16)),
              (e[1] = C = (65535 & T) | (N << 16)),
              (A = R),
              (x = H),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[2]),
              (x = e[2]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[2] = R = (65535 & L) | (U << 16)),
              (e[2] = H = (65535 & T) | (N << 16)),
              (A = z),
              (x = j),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[3]),
              (x = e[3]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[3] = z = (65535 & L) | (U << 16)),
              (e[3] = j = (65535 & T) | (N << 16)),
              (A = Z),
              (x = K),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[4]),
              (x = e[4]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[4] = Z = (65535 & L) | (U << 16)),
              (e[4] = K = (65535 & T) | (N << 16)),
              (A = F),
              (x = q),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[5]),
              (x = e[5]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[5] = F = (65535 & L) | (U << 16)),
              (e[5] = q = (65535 & T) | (N << 16)),
              (A = P),
              (x = W),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[6]),
              (x = e[6]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[6] = P = (65535 & L) | (U << 16)),
              (e[6] = W = (65535 & T) | (N << 16)),
              (A = M),
              (x = G),
              (T = 65535 & x),
              (N = x >>> 16),
              (L = 65535 & A),
              (U = A >>> 16),
              (A = t[7]),
              (x = e[7]),
              (T += 65535 & x),
              (N += x >>> 16),
              (L += 65535 & A),
              (U += A >>> 16),
              (N += T >>> 16),
              (L += N >>> 16),
              (U += L >>> 16),
              (t[7] = M = (65535 & L) | (U << 16)),
              (e[7] = G = (65535 & T) | (N << 16)),
              (Y += 128),
              (n -= 128));
          }
          return n;
        }
        function et(t, e, r) {
          var n,
            i = new Int32Array(8),
            s = new Int32Array(8),
            o = new Uint8Array(256),
            a = r;
          for (
            i[0] = 1779033703,
              i[1] = 3144134277,
              i[2] = 1013904242,
              i[3] = 2773480762,
              i[4] = 1359893119,
              i[5] = 2600822924,
              i[6] = 528734635,
              i[7] = 1541459225,
              s[0] = 4089235720,
              s[1] = 2227873595,
              s[2] = 4271175723,
              s[3] = 1595750129,
              s[4] = 2917565137,
              s[5] = 725511199,
              s[6] = 4215389547,
              s[7] = 327033209,
              tt(i, s, e, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            o[n] = e[a - r + n];
          for (
            o[r] = 128,
              r = 256 - 128 * (r < 112 ? 1 : 0),
              o[r - 9] = 0,
              d(o, r - 8, (a / 536870912) | 0, a << 3),
              tt(i, s, o, r),
              n = 0;
            n < 8;
            n++
          )
            d(t, 8 * n, i[n], s[n]);
          return 0;
        }
        function rt(t, r) {
          var n = e(),
            i = e(),
            s = e(),
            o = e(),
            a = e(),
            h = e(),
            u = e(),
            c = e(),
            l = e();
          (B(n, t[1], t[0]),
            B(l, r[1], r[0]),
            C(n, n, l),
            M(i, t[0], t[1]),
            M(l, r[0], r[1]),
            C(i, i, l),
            C(s, t[3], r[3]),
            C(s, s, f),
            C(o, t[2], r[2]),
            M(o, o, o),
            B(a, i, n),
            B(h, o, s),
            M(u, o, s),
            M(c, i, n),
            C(t[0], a, h),
            C(t[1], c, u),
            C(t[2], u, h),
            C(t[3], a, c));
        }
        function nt(t, e, r) {
          var n;
          for (n = 0; n < 4; n++) R(t[n], e[n], r);
        }
        function it(t, r) {
          var n = e(),
            i = e(),
            s = e();
          (j(s, r[2]),
            C(n, r[0], s),
            C(i, r[1], s),
            z(t, i),
            (t[31] ^= F(n) << 7));
        }
        function st(t, e, r) {
          var n, i;
          for (
            O(t[0], o), O(t[1], a), O(t[2], a), O(t[3], o), i = 255;
            i >= 0;
            --i
          )
            ((n = (r[(i / 8) | 0] >> (7 & i)) & 1),
              nt(t, e, n),
              rt(e, t),
              rt(t, t),
              nt(t, e, n));
        }
        function ot(t, r) {
          var n = [e(), e(), e(), e()];
          (O(n[0], c), O(n[1], l), O(n[2], a), C(n[3], c, l), st(t, n, r));
        }
        function at(t, r, i) {
          var s,
            o = new Uint8Array(64),
            a = [e(), e(), e(), e()];
          for (
            i || n(r, 32),
              et(o, r, 32),
              o[0] &= 248,
              o[31] &= 127,
              o[31] |= 64,
              ot(a, o),
              it(t, a),
              s = 0;
            s < 32;
            s++
          )
            r[s + 32] = t[s];
          return 0;
        }
        var ht = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function ut(t, e) {
          var r, n, i, s;
          for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
              ((e[i] += r - 16 * e[n] * ht[i - (n - 32)]),
                (r = (e[i] + 128) >> 8),
                (e[i] -= 256 * r));
            ((e[i] += r), (e[n] = 0));
          }
          for (r = 0, i = 0; i < 32; i++)
            ((e[i] += r - (e[31] >> 4) * ht[i]),
              (r = e[i] >> 8),
              (e[i] &= 255));
          for (i = 0; i < 32; i++) e[i] -= r * ht[i];
          for (n = 0; n < 32; n++)
            ((e[n + 1] += e[n] >> 8), (t[n] = 255 & e[n]));
        }
        function ft(t) {
          var e,
            r = new Float64Array(64);
          for (e = 0; e < 64; e++) r[e] = t[e];
          for (e = 0; e < 64; e++) t[e] = 0;
          ut(t, r);
        }
        function ct(t, r, n, i) {
          var s,
            o,
            a = new Uint8Array(64),
            h = new Uint8Array(64),
            u = new Uint8Array(64),
            f = new Float64Array(64),
            c = [e(), e(), e(), e()];
          (et(a, i, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64));
          var l = n + 64;
          for (s = 0; s < n; s++) t[64 + s] = r[s];
          for (s = 0; s < 32; s++) t[32 + s] = a[32 + s];
          for (
            et(u, t.subarray(32), n + 32), ft(u), ot(c, u), it(t, c), s = 32;
            s < 64;
            s++
          )
            t[s] = i[s];
          for (et(h, t, n + 64), ft(h), s = 0; s < 64; s++) f[s] = 0;
          for (s = 0; s < 32; s++) f[s] = u[s];
          for (s = 0; s < 32; s++)
            for (o = 0; o < 32; o++) f[s + o] += h[s] * a[o];
          return (ut(t.subarray(32), f), l);
        }
        function lt(t, r) {
          var n = e(),
            i = e(),
            s = e(),
            h = e(),
            f = e(),
            c = e(),
            l = e();
          return (
            O(t[2], a),
            P(t[1], r),
            H(s, t[1]),
            C(h, s, u),
            B(s, s, t[2]),
            M(h, t[2], h),
            H(f, h),
            H(c, f),
            C(l, c, f),
            C(n, l, s),
            C(n, n, h),
            K(n, n),
            C(n, n, s),
            C(n, n, h),
            C(n, n, h),
            C(t[0], n, h),
            H(i, t[0]),
            C(i, i, h),
            Z(i, s) && C(t[0], t[0], p),
            H(i, t[0]),
            C(i, i, h),
            Z(i, s)
              ? -1
              : (F(t[0]) === r[31] >> 7 && B(t[0], o, t[0]),
                C(t[3], t[0], t[1]),
                0)
          );
        }
        function pt(t, r, n, i) {
          var s,
            o,
            a = new Uint8Array(32),
            h = new Uint8Array(64),
            u = [e(), e(), e(), e()],
            f = [e(), e(), e(), e()];
          if (((o = -1), n < 64)) return -1;
          if (lt(f, i)) return -1;
          for (s = 0; s < n; s++) t[s] = r[s];
          for (s = 0; s < 32; s++) t[s + 32] = i[s];
          if (
            (et(h, t, n),
            ft(h),
            st(u, f, h),
            ot(f, r.subarray(32)),
            rt(u, f),
            it(a, u),
            (n -= 64),
            g(r, 0, a, 0))
          ) {
            for (s = 0; s < n; s++) t[s] = 0;
            return -1;
          }
          for (s = 0; s < n; s++) t[s] = r[s + 64];
          return ((o = n), o);
        }
        var dt = 32,
          yt = 24,
          _t = 32,
          gt = 16,
          mt = 32,
          wt = 32,
          vt = 32,
          bt = 32,
          Et = 32,
          St = yt,
          At = _t,
          xt = gt,
          Tt = 64,
          Nt = 32,
          Lt = 64,
          Ut = 32,
          It = 64;
        function kt(t, e) {
          if (t.length !== dt) throw new Error("bad key size");
          if (e.length !== yt) throw new Error("bad nonce size");
        }
        function Ot(t, e) {
          if (t.length !== vt) throw new Error("bad public key size");
          if (e.length !== bt) throw new Error("bad secret key size");
        }
        function Dt() {
          var t, e;
          for (e = 0; e < arguments.length; e++)
            if (
              "[object Uint8Array]" !==
              (t = Object.prototype.toString.call(arguments[e]))
            )
              throw new TypeError("unexpected type " + t + ", use Uint8Array");
        }
        function Rt(t) {
          for (var e = 0; e < t.length; e++) t[e] = 0;
        }
        ((t.lowlevel = {
          crypto_core_hsalsa20: b,
          crypto_stream_xor: T,
          crypto_stream: x,
          crypto_stream_salsa20_xor: S,
          crypto_stream_salsa20: A,
          crypto_onetimeauth: L,
          crypto_onetimeauth_verify: U,
          crypto_verify_16: _,
          crypto_verify_32: g,
          crypto_secretbox: I,
          crypto_secretbox_open: k,
          crypto_scalarmult: q,
          crypto_scalarmult_base: W,
          crypto_box_beforenm: Y,
          crypto_box_afternm: X,
          crypto_box: $,
          crypto_box_open: J,
          crypto_box_keypair: G,
          crypto_hash: et,
          crypto_sign: ct,
          crypto_sign_keypair: at,
          crypto_sign_open: pt,
          crypto_secretbox_KEYBYTES: dt,
          crypto_secretbox_NONCEBYTES: yt,
          crypto_secretbox_ZEROBYTES: _t,
          crypto_secretbox_BOXZEROBYTES: gt,
          crypto_scalarmult_BYTES: mt,
          crypto_scalarmult_SCALARBYTES: wt,
          crypto_box_PUBLICKEYBYTES: vt,
          crypto_box_SECRETKEYBYTES: bt,
          crypto_box_BEFORENMBYTES: Et,
          crypto_box_NONCEBYTES: St,
          crypto_box_ZEROBYTES: At,
          crypto_box_BOXZEROBYTES: xt,
          crypto_sign_BYTES: Tt,
          crypto_sign_PUBLICKEYBYTES: Nt,
          crypto_sign_SECRETKEYBYTES: Lt,
          crypto_sign_SEEDBYTES: Ut,
          crypto_hash_BYTES: It,
        }),
          t.util ||
            ((t.util = {}),
            (t.util.decodeUTF8 =
              t.util.encodeUTF8 =
              t.util.encodeBase64 =
              t.util.decodeBase64 =
                function () {
                  throw new Error(
                    "nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js",
                  );
                })),
          (t.randomBytes = function (t) {
            var e = new Uint8Array(t);
            return (n(e, t), e);
          }),
          (t.secretbox = function (t, e, r) {
            (Dt(t, e, r), kt(r, e));
            for (
              var n = new Uint8Array(_t + t.length),
                i = new Uint8Array(n.length),
                s = 0;
              s < t.length;
              s++
            )
              n[s + _t] = t[s];
            return (I(i, n, n.length, e, r), i.subarray(gt));
          }),
          (t.secretbox.open = function (t, e, r) {
            (Dt(t, e, r), kt(r, e));
            for (
              var n = new Uint8Array(gt + t.length),
                i = new Uint8Array(n.length),
                s = 0;
              s < t.length;
              s++
            )
              n[s + gt] = t[s];
            return (
              !(n.length < 32) &&
              0 === k(i, n, n.length, e, r) &&
              i.subarray(_t)
            );
          }),
          (t.secretbox.keyLength = dt),
          (t.secretbox.nonceLength = yt),
          (t.secretbox.overheadLength = gt),
          (t.scalarMult = function (t, e) {
            if ((Dt(t, e), t.length !== wt)) throw new Error("bad n size");
            if (e.length !== mt) throw new Error("bad p size");
            var r = new Uint8Array(mt);
            return (q(r, t, e), r);
          }),
          (t.scalarMult.base = function (t) {
            if ((Dt(t), t.length !== wt)) throw new Error("bad n size");
            var e = new Uint8Array(mt);
            return (W(e, t), e);
          }),
          (t.scalarMult.scalarLength = wt),
          (t.scalarMult.groupElementLength = mt),
          (t.box = function (e, r, n, i) {
            var s = t.box.before(n, i);
            return t.secretbox(e, r, s);
          }),
          (t.box.before = function (t, e) {
            (Dt(t, e), Ot(t, e));
            var r = new Uint8Array(Et);
            return (Y(r, t, e), r);
          }),
          (t.box.after = t.secretbox),
          (t.box.open = function (e, r, n, i) {
            var s = t.box.before(n, i);
            return t.secretbox.open(e, r, s);
          }),
          (t.box.open.after = t.secretbox.open),
          (t.box.keyPair = function () {
            var t = new Uint8Array(vt),
              e = new Uint8Array(bt);
            return (G(t, e), { publicKey: t, secretKey: e });
          }),
          (t.box.keyPair.fromSecretKey = function (t) {
            if ((Dt(t), t.length !== bt))
              throw new Error("bad secret key size");
            var e = new Uint8Array(vt);
            return (W(e, t), { publicKey: e, secretKey: new Uint8Array(t) });
          }),
          (t.box.publicKeyLength = vt),
          (t.box.secretKeyLength = bt),
          (t.box.sharedKeyLength = Et),
          (t.box.nonceLength = St),
          (t.box.overheadLength = t.secretbox.overheadLength),
          (t.sign = function (t, e) {
            if ((Dt(t, e), e.length !== Lt))
              throw new Error("bad secret key size");
            var r = new Uint8Array(Tt + t.length);
            return (ct(r, t, t.length, e), r);
          }),
          (t.sign.open = function (t, e) {
            if (2 !== arguments.length)
              throw new Error(
                "nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?",
              );
            if ((Dt(t, e), e.length !== Nt))
              throw new Error("bad public key size");
            var r = new Uint8Array(t.length),
              n = pt(r, t, t.length, e);
            if (n < 0) return null;
            for (var i = new Uint8Array(n), s = 0; s < i.length; s++)
              i[s] = r[s];
            return i;
          }),
          (t.sign.detached = function (e, r) {
            for (
              var n = t.sign(e, r), i = new Uint8Array(Tt), s = 0;
              s < i.length;
              s++
            )
              i[s] = n[s];
            return i;
          }),
          (t.sign.detached.verify = function (t, e, r) {
            if ((Dt(t, e, r), e.length !== Tt))
              throw new Error("bad signature size");
            if (r.length !== Nt) throw new Error("bad public key size");
            var n,
              i = new Uint8Array(Tt + t.length),
              s = new Uint8Array(Tt + t.length);
            for (n = 0; n < Tt; n++) i[n] = e[n];
            for (n = 0; n < t.length; n++) i[n + Tt] = t[n];
            return pt(s, i, i.length, r) >= 0;
          }),
          (t.sign.keyPair = function () {
            var t = new Uint8Array(Nt),
              e = new Uint8Array(Lt);
            return (at(t, e), { publicKey: t, secretKey: e });
          }),
          (t.sign.keyPair.fromSecretKey = function (t) {
            if ((Dt(t), t.length !== Lt))
              throw new Error("bad secret key size");
            for (var e = new Uint8Array(Nt), r = 0; r < e.length; r++)
              e[r] = t[32 + r];
            return { publicKey: e, secretKey: new Uint8Array(t) };
          }),
          (t.sign.keyPair.fromSeed = function (t) {
            if ((Dt(t), t.length !== Ut)) throw new Error("bad seed size");
            for (
              var e = new Uint8Array(Nt), r = new Uint8Array(Lt), n = 0;
              n < 32;
              n++
            )
              r[n] = t[n];
            return (at(e, r, !0), { publicKey: e, secretKey: r });
          }),
          (t.sign.publicKeyLength = Nt),
          (t.sign.secretKeyLength = Lt),
          (t.sign.seedLength = Ut),
          (t.sign.signatureLength = Tt),
          (t.hash = function (t) {
            Dt(t);
            var e = new Uint8Array(It);
            return (et(e, t, t.length), e);
          }),
          (t.hash.hashLength = It),
          (t.verify = function (t, e) {
            return (
              Dt(t, e),
              0 !== t.length &&
                0 !== e.length &&
                t.length === e.length &&
                0 === y(t, 0, e, 0, t.length)
            );
          }),
          (t.setPRNG = function (t) {
            n = t;
          }),
          (function () {
            var e =
              "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
            if (e && e.getRandomValues) {
              var n = 65536;
              t.setPRNG(function (t, r) {
                var i,
                  s = new Uint8Array(r);
                for (i = 0; i < r; i += n)
                  e.getRandomValues(s.subarray(i, i + Math.min(r - i, n)));
                for (i = 0; i < r; i++) t[i] = s[i];
                Rt(s);
              });
            } else
              ((e = r(7702)),
                e &&
                  e.randomBytes &&
                  t.setPRNG(function (t, r) {
                    var n,
                      i = e.randomBytes(r);
                    for (n = 0; n < r; n++) t[n] = i[n];
                    Rt(i);
                  }));
          })());
      })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
    },
    7702: function (t, e) {},
    7710: function (t, e, r) {
      (function (t) {
        function r(t) {
          return Array.isArray ? Array.isArray(t) : "[object Array]" === _(t);
        }
        function n(t) {
          return "boolean" === typeof t;
        }
        function i(t) {
          return null === t;
        }
        function s(t) {
          return null == t;
        }
        function o(t) {
          return "number" === typeof t;
        }
        function a(t) {
          return "string" === typeof t;
        }
        function h(t) {
          return "symbol" === typeof t;
        }
        function u(t) {
          return void 0 === t;
        }
        function f(t) {
          return "[object RegExp]" === _(t);
        }
        function c(t) {
          return "object" === typeof t && null !== t;
        }
        function l(t) {
          return "[object Date]" === _(t);
        }
        function p(t) {
          return "[object Error]" === _(t) || t instanceof Error;
        }
        function d(t) {
          return "function" === typeof t;
        }
        function y(t) {
          return (
            null === t ||
            "boolean" === typeof t ||
            "number" === typeof t ||
            "string" === typeof t ||
            "symbol" === typeof t ||
            "undefined" === typeof t
          );
        }
        function _(t) {
          return Object.prototype.toString.call(t);
        }
        ((e.isArray = r),
          (e.isBoolean = n),
          (e.isNull = i),
          (e.isNullOrUndefined = s),
          (e.isNumber = o),
          (e.isString = a),
          (e.isSymbol = h),
          (e.isUndefined = u),
          (e.isRegExp = f),
          (e.isObject = c),
          (e.isDate = l),
          (e.isError = p),
          (e.isFunction = d),
          (e.isPrimitive = y),
          (e.isBuffer = t.isBuffer));
      }).call(this, r(2).Buffer);
    },
    7752: function (t, e, r) {
      "use strict";
      var n = r(7753),
        i = r(818),
        s = r(406),
        o = r(7754);
      ((t.exports = function (t) {
        var e = s(arguments),
          r = t.length - (arguments.length - 1);
        return n(e, 1 + (r > 0 ? r : 0), !0);
      }),
        i ? i(t.exports, "apply", { value: o }) : (t.exports.apply = o));
    },
    7754: function (t, e, r) {
      "use strict";
      var n = r(162),
        i = r(407),
        s = r(879);
      t.exports = function () {
        return s(n, i, arguments);
      };
    },
    7788: function (t, e, r) {
      (function (e) {
        var n = r(799),
          i = r(235).Stream,
          s = r(7789);
        function o() {
          ((this.writable = !1),
            (this.readable = !0),
            (this.dataSize = 0),
            (this.maxDataSize = 2097152),
            (this.pauseStreams = !0),
            (this._released = !1),
            (this._streams = []),
            (this._currentStream = null),
            (this._insideLoop = !1),
            (this._pendingNext = !1));
        }
        ((t.exports = o),
          n.inherits(o, i),
          (o.create = function (t) {
            var e = new this();
            for (var r in ((t = t || {}), t)) e[r] = t[r];
            return e;
          }),
          (o.isStreamLike = function (t) {
            return (
              "function" !== typeof t &&
              "string" !== typeof t &&
              "boolean" !== typeof t &&
              "number" !== typeof t &&
              !e.isBuffer(t)
            );
          }),
          (o.prototype.append = function (t) {
            var e = o.isStreamLike(t);
            if (e) {
              if (!(t instanceof s)) {
                var r = s.create(t, {
                  maxDataSize: 1 / 0,
                  pauseStream: this.pauseStreams,
                });
                (t.on("data", this._checkDataSize.bind(this)), (t = r));
              }
              (this._handleErrors(t), this.pauseStreams && t.pause());
            }
            return (this._streams.push(t), this);
          }),
          (o.prototype.pipe = function (t, e) {
            return (i.prototype.pipe.call(this, t, e), this.resume(), t);
          }),
          (o.prototype._getNext = function () {
            if (((this._currentStream = null), this._insideLoop))
              this._pendingNext = !0;
            else {
              this._insideLoop = !0;
              try {
                do {
                  ((this._pendingNext = !1), this._realGetNext());
                } while (this._pendingNext);
              } finally {
                this._insideLoop = !1;
              }
            }
          }),
          (o.prototype._realGetNext = function () {
            var t = this._streams.shift();
            if ("undefined" != typeof t)
              if ("function" === typeof t) {
                var e = t;
                e(
                  function (t) {
                    var e = o.isStreamLike(t);
                    (e &&
                      (t.on("data", this._checkDataSize.bind(this)),
                      this._handleErrors(t)),
                      this._pipeNext(t));
                  }.bind(this),
                );
              } else this._pipeNext(t);
            else this.end();
          }),
          (o.prototype._pipeNext = function (t) {
            this._currentStream = t;
            var e = o.isStreamLike(t);
            if (e)
              return (
                t.on("end", this._getNext.bind(this)),
                void t.pipe(this, { end: !1 })
              );
            var r = t;
            (this.write(r), this._getNext());
          }),
          (o.prototype._handleErrors = function (t) {
            var e = this;
            t.on("error", function (t) {
              e._emitError(t);
            });
          }),
          (o.prototype.write = function (t) {
            this.emit("data", t);
          }),
          (o.prototype.pause = function () {
            this.pauseStreams &&
              (this.pauseStreams &&
                this._currentStream &&
                "function" == typeof this._currentStream.pause &&
                this._currentStream.pause(),
              this.emit("pause"));
          }),
          (o.prototype.resume = function () {
            (this._released ||
              ((this._released = !0), (this.writable = !0), this._getNext()),
              this.pauseStreams &&
                this._currentStream &&
                "function" == typeof this._currentStream.resume &&
                this._currentStream.resume(),
              this.emit("resume"));
          }),
          (o.prototype.end = function () {
            (this._reset(), this.emit("end"));
          }),
          (o.prototype.destroy = function () {
            (this._reset(), this.emit("close"));
          }),
          (o.prototype._reset = function () {
            ((this.writable = !1),
              (this._streams = []),
              (this._currentStream = null));
          }),
          (o.prototype._checkDataSize = function () {
            if (
              (this._updateDataSize(), !(this.dataSize <= this.maxDataSize))
            ) {
              var t =
                "DelayedStream#maxDataSize of " +
                this.maxDataSize +
                " bytes exceeded.";
              this._emitError(new Error(t));
            }
          }),
          (o.prototype._updateDataSize = function () {
            this.dataSize = 0;
            var t = this;
            (this._streams.forEach(function (e) {
              e.dataSize && (t.dataSize += e.dataSize);
            }),
              this._currentStream &&
                this._currentStream.dataSize &&
                (this.dataSize += this._currentStream.dataSize));
          }),
          (o.prototype._emitError = function (t) {
            (this._reset(), this.emit("error", t));
          }));
      }).call(this, r(2).Buffer);
    },
    7789: function (t, e, r) {
      var n = r(235).Stream,
        i = r(799);
      function s() {
        ((this.source = null),
          (this.dataSize = 0),
          (this.maxDataSize = 1048576),
          (this.pauseStream = !0),
          (this._maxDataSizeExceeded = !1),
          (this._released = !1),
          (this._bufferedEvents = []));
      }
      ((t.exports = s),
        i.inherits(s, n),
        (s.create = function (t, e) {
          var r = new this();
          for (var n in ((e = e || {}), e)) r[n] = e[n];
          r.source = t;
          var i = t.emit;
          return (
            (t.emit = function () {
              return (r._handleEmit(arguments), i.apply(t, arguments));
            }),
            t.on("error", function () {}),
            r.pauseStream && t.pause(),
            r
          );
        }),
        Object.defineProperty(s.prototype, "readable", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.source.readable;
          },
        }),
        (s.prototype.setEncoding = function () {
          return this.source.setEncoding.apply(this.source, arguments);
        }),
        (s.prototype.resume = function () {
          (this._released || this.release(), this.source.resume());
        }),
        (s.prototype.pause = function () {
          this.source.pause();
        }),
        (s.prototype.release = function () {
          ((this._released = !0),
            this._bufferedEvents.forEach(
              function (t) {
                this.emit.apply(this, t);
              }.bind(this),
            ),
            (this._bufferedEvents = []));
        }),
        (s.prototype.pipe = function () {
          var t = n.prototype.pipe.apply(this, arguments);
          return (this.resume(), t);
        }),
        (s.prototype._handleEmit = function (t) {
          this._released
            ? this.emit.apply(this, t)
            : ("data" === t[0] &&
                ((this.dataSize += t[1].length),
                this._checkIfMaxDataSizeExceeded()),
              this._bufferedEvents.push(t));
        }),
        (s.prototype._checkIfMaxDataSizeExceeded = function () {
          if (
            !this._maxDataSizeExceeded &&
            !(this.dataSize <= this.maxDataSize)
          ) {
            this._maxDataSizeExceeded = !0;
            var t =
              "DelayedStream#maxDataSize of " +
              this.maxDataSize +
              " bytes exceeded.";
            this.emit("error", new Error(t));
          }
        }));
    },
  },
]);
