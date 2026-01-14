(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [82],
  {
    1141: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(439));
      class AtomicRaki extends n.default {
        constructor() {
          super("https://raki.atomicwallet.io/v2");
        }
      }
      t.default = AtomicRaki;
    },
    1142: function (e) {
      e.exports = JSON.parse(
        '{"BSC":"BNB","gZIL":"GZIL","ODEM":"ODE","ONG":"ONGAS","PRE":"SRCH","SEN":"CSEN","TRX-USDC":"USDC","TRX-USDT":"USDT"}',
      );
    },
    1143: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(14)),
        i = l(a(8)),
        s = r(a(28)),
        o = r(a(440)),
        c = r(a(1144));
      function l(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            r = new WeakMap();
        return (l = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((n = t ? r : a)) {
            if (n.has(e)) return n.get(e);
            n.set(e, s);
          }
          for (const a in e)
            "default" !== a &&
              {}.hasOwnProperty.call(e, a) &&
              ((i =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, a)) &&
              (i.get || i.set)
                ? n(s, a, i)
                : (s[a] = e[a]));
          return s;
        })(e, t);
      }
      class CoinMarketCap extends o.default {
        constructor() {
          super(c.default);
        }
        convert(e, t) {
          let { data: a } = e;
          return Object.keys(a).reduce((e, r) => {
            const n = a[r].quote[t];
            return n
              ? e.concat({
                  rate: n.price || 0,
                  change: n.percent_change_24h || 0,
                  volume: n.volume_24h || 0,
                  supply: a[r].total_supply || 0,
                  marketCap: n.fully_diluted_market_cap || 0,
                  ticker: r,
                })
              : e;
          }, []);
        }
        async fetch(e, t) {
          try {
            const a =
                "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
              { data: r } = await (0, n.default)({
                url: `${a}?convert=${t}&symbol=${e.join(",")}`,
                method: "get",
                headers: {
                  "X-CMC_PRO_API_KEY": "eae47ace-66b0-4503-9def-54356e4cd00f",
                },
              });
            return r;
          } catch (a) {
            return (console.warn("Fetch rates error", a), []);
          }
        }
        async getTargetTickersMap(e) {
          const t = await i.default
            .get(i.ConfigKey.CoinMarketCapSupportedCoins)
            .then((e) => {
              let { data: t } = e;
              return t;
            })
            .catch((e) => (s.default.error(e), []));
          return e.reduce((e, a) => {
            let { id: r, contract: n, parent: i, ticker: s } = a;
            const o = t.find((e) => {
              let { is_active: t, platform: a, symbol: r } = e;
              const o =
                  void 0 === n &&
                  null === a &&
                  this.getTargetTicker(s).toUpperCase() ===
                    (null === r || void 0 === r ? void 0 : r.toUpperCase()),
                c =
                  void 0 !== n &&
                  null !== a &&
                  i.toUpperCase() === a.symbol.toUpperCase() &&
                  (n === a.token_address ||
                    ("BNB" === i.toUpperCase() && a.token_address === s));
              return t && (o || c);
            });
            return void 0 === o ? e : Object.assign({ [r]: o.symbol }, e);
          }, {});
        }
      }
      t.default = CoinMarketCap;
    },
    1144: function (e) {
      e.exports = JSON.parse('{"BSC":"BNB"}');
    },
    1145: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(439));
      class CryptoCompare extends n.default {
        constructor() {
          super("https://min-api.cryptocompare.com/data");
        }
      }
      t.default = CryptoCompare;
    },
    1146: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = [
        {
          isMember: !0,
          class: "blue",
          text: "Blue",
          percent: 0.0025,
          minAWC: 0,
          maxAWC: 300,
          limit: 150,
        },
        {
          isMember: !0,
          class: "silver",
          text: "Silver",
          percent: 0.005,
          minAWC: 300,
          maxAWC: 600,
          limit: 300,
        },
        {
          isMember: !0,
          class: "gold",
          text: "Gold",
          percent: 0.0075,
          minAWC: 600,
          maxAWC: 1e3,
          limit: 450,
        },
        {
          isMember: !0,
          class: "platinum",
          text: "Platinum",
          percent: 0.01,
          minAWC: 1e3,
          maxAWC: 1e3,
          limit: 900,
        },
      ];
    },
    1209: function (e, t, a) {
      "use strict";
      (function (e) {
        var r = a(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var n = r(a(69)),
          i = r(a(14)),
          s = r(a(8)),
          o = a(74);
        const c = /(^ipfs:\/\/ipfs\/|^ipfs:\/\/)/,
          l = "https://dweb.link/ipfs/",
          u = 200;
        class NftToken {
          constructor(e, t, a, r, n, i, s, o) {
            (void 0 === s && (s = void 0),
              (this.contractAddress = e),
              (this.tokenId = t),
              (this.coinId = a),
              (this.blockchain = r),
              (this.tokenStandard = n),
              (this.name = i),
              (this.description = s),
              (this.imageUrl = o));
          }
          get address() {
            return this.contractAddress;
          }
          get id() {
            return `${this.coinId}-${this.contractAddress}-${this.tokenId}`;
          }
          get standard() {
            return this.tokenStandard;
          }
          get image() {
            return this.imageUrl;
          }
          getImageUrl() {
            var e;
            return null === (e = this.imageUrl) || void 0 === e
              ? void 0
              : e.replace(c, NftToken.ipfsGateway);
          }
          async fetchImageBlob() {
            if (!this.imageUrl)
              throw new Error("NftToken: fetchImageBlob: No imageUrl");
            const t = await (0, i.default)(this.getImageUrl(), {
              responseType: "arraybuffer",
            });
            if (t.status !== u)
              throw new Error(
                "NftToken: fetchImageBlob: Could not fetch image blob: Server returned " +
                  t.status,
              );
            return {
              base64: t.data,
              buffer: e.from(t.data, "base64"),
              contentType: t.headers["content-type"],
            };
          }
          static async updateIpfsGateway() {
            var e;
            const { ipfsGateway: t } =
              null !==
                (e = await s.default.get(o.ConfigKey.IpfsGateway).catch()) &&
              void 0 !== e
                ? e
                : {};
            t && (NftToken.ipfsGateway = t);
          }
        }
        (0, n.default)(NftToken, "ipfsGateway", l);
        t.default = NftToken;
      }).call(this, a(2).Buffer);
    },
    1211: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(160);
      const n = "Solana",
        i = "SPL";
      class SOLNftToken extends r.NftToken {
        constructor(e, t, a, r, s) {
          super(null, e, t, n, i, a, r, s);
        }
      }
      t.default = SOLNftToken;
    },
    126: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Everstake", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "solTrackerClient", {
          enumerable: !0,
          get: function () {
            return s.solTrackerClient;
          },
        }),
        Object.defineProperty(t, "utmService", {
          enumerable: !0,
          get: function () {
            return i.utmService;
          },
        }));
      var n = r(a(2015)),
        i = a(679),
        s = a(2016);
    },
    160: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ETHNftToken", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "NftToken", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "SOLNftToken", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var n = r(a(1209)),
        i = r(a(1211)),
        s = r(a(813));
    },
    1875: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.LiquidStakingAdapterMixin = void 0));
      var n = r(a(69)),
        i = r(a(73)),
        s = r(a(8)),
        o = a(85),
        c = a(2651),
        l = a(1876);
      function u(e, t) {
        (f(e, t), t.add(e));
      }
      function d(e, t, a) {
        (f(e, t), t.set(e, a));
      }
      function f(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function h(e, t) {
        return e.get(m(e, t));
      }
      function p(e, t, a) {
        return (e.set(m(e, t), a), a);
      }
      function m(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const g = "web3Sdk",
        y = "0xF7F4049e7472fC32805Aae5bcCE909419a34D254",
        b = "0x737EBf814D2C14fb21E00Fd2990AFc364C2AF506",
        w = "100000000000000000000",
        v = "Stake Shark",
        k = "24",
        T = "shZIL",
        A = 18,
        E = (e) => {
          var t, a, r, f, E;
          return (
            (t = new WeakMap()),
            (a = new WeakMap()),
            (r = new WeakMap()),
            (f = new WeakMap()),
            (E = new WeakSet()),
            class extends e {
              constructor(e) {
                (super(e),
                  u(this, E),
                  d(this, t, void 0),
                  d(this, a, void 0),
                  d(this, r, void 0),
                  d(this, f, !1),
                  (0, n.default)(
                    this,
                    "reserveForStakeFallback",
                    "100000000000000000",
                  ),
                  p(a, this, []),
                  p(t, this, {}));
              }
              getPoolSupportedIds() {
                return ["ZILEVM"];
              }
              createPool() {
                if (!this.getPoolSupportedIds().includes(this.id)) return;
                s.default.register(this.getPredefineValidatorsConfigName());
                const e = y,
                  r = b,
                  n = w,
                  i = v,
                  o = k,
                  u = T,
                  d = A;
                this.poolConfig = {
                  poolAddress: e,
                  nativeTokenDecimals: 18,
                  lstTokenAddress: r,
                  lstTokenSymbol: u,
                  lstTokenDecimals: d,
                  minimumStake: new this.BN(n),
                  withdrawPeriodMinutes: 0,
                };
                const f = [
                    {
                      name: i,
                      reward: o,
                      address: this.poolConfig.poolAddress,
                      staked: "0",
                      validator: this.poolConfig.poolAddress,
                      isDeactivated: !1,
                      isAvailableForWithdraw: !0,
                    },
                  ],
                  h = { [this.poolConfig.poolAddress]: f[0] };
                (p(a, this, f),
                  this.setBalances(m(E, this, S).call(this, h)),
                  p(t, this, { additional: {}, staking: h }),
                  p(a, this, f));
                const C = this.getProvider("send");
                this.dependencies[g].get().then((e) => {
                  const t = new e.default(
                    new l.RetryableHttpProvider(C.config.baseUrl, {
                      maxRetries: 4,
                      retryDelay: 3e3,
                    }),
                  );
                  this.pool = new c.LiquidStakingPool(this.poolConfig, t);
                });
              }
              loadWallet() {
                const e = super.loadWallet(...arguments);
                return (
                  p(r, this, e.privateKey),
                  this.createPool(h(r, this), this.address),
                  e
                );
              }
              async createDelegationTransaction(e, t) {
                return this.pool.createStakeTransaction(
                  new this.BN(t),
                  h(r, this),
                );
              }
              async createUnbondingDelegationTransaction(e, t) {
                return this.pool.createUnstakeTransaction(new this.BN(t), {
                  address: this.address,
                  privateKey: h(r, this),
                });
              }
              async createWithdrawDelegationTransaction() {
                return this.pool.createClaimTransaction({
                  address: this.address,
                  privateKey: h(r, this),
                });
              }
              getGasLimit() {
                return this.feeData.stakingGasLimit || "1000000";
              }
              get predefinedValidators() {
                return h(a, this);
              }
              get feeTicker() {
                return "ZIL";
              }
              defaultAmount() {
                return new i.default("0", this);
              }
              setBalances(e) {
                p(t, this, e);
                const { topic: a, payload: r } = (0,
                o.STAKING_BALANCES_UPDATED)(this.id, h(t, this));
                (m(E, this, C).call(this, r),
                  this.eventEmitter && this.eventEmitter.emit(a, r));
              }
              isStakingSupported() {
                return !0;
              }
              isRedelegationSupported() {
                return !1;
              }
              async getInfo() {
                return this.getStakingInfo();
              }
              async makeStakingInfoStruct(e) {
                let {
                  staked: t = this.defaultAmount(),
                  unstaking: a = this.defaultAmount(),
                  availableWithdrawals: r = this.defaultAmount(),
                  pendingWithdrawals: n = this.defaultAmount(),
                  availableForUnstake: s = this.defaultAmount(),
                  rewards: o = this.defaultAmount(),
                  validators: c = {},
                  additional: l = {},
                } = void 0 === e ? {} : e;
                return {
                  total: this.calculateTotal({
                    balance: new i.default(this.balance || "0", this),
                    staked: t,
                    unstaking: a,
                    rewards: o,
                    availableWithdrawals: r,
                    pendingWithdrawals: n,
                  }),
                  availableForStake: await this.calculateAvailableForStake({
                    balance: new i.default(this.balance || "0", this),
                    staked: t,
                    unstaking: a,
                    rewards: o,
                  }),
                  availableForUnstake: s,
                  staked: t,
                  unstaking: a,
                  pendingWithdrawals: n,
                  availableWithdrawals: r,
                  rewards: o,
                  validators: c,
                  additional: l,
                  staking: c,
                };
              }
              async fetchStakingInfo() {
                try {
                  const e = await this.pool.getUserInfo(this.address),
                    t = e.totalPendingClaims,
                    a = m(E, this, _).call(this, e);
                  return {
                    staked: new i.default(e.lstBalance.toString(), this),
                    unstaking: new i.default(t.toString(), this),
                    availableForUnstake: new i.default(
                      e.lstBalance.toString(),
                      this,
                    ),
                    availableWithdrawals: new i.default(
                      e.claimableAmount.toString(),
                      this,
                    ),
                    pendingWithdrawals: new i.default(t.toString(), this),
                    rewards: new i.default(e.zilValue.toString(), this),
                    validators: a,
                    additional: {},
                    staking: a,
                  };
                } catch (e) {
                  return (
                    console.error("Error fetching staking info:", e),
                    {
                      staked: this.defaultAmount(),
                      unstaking: this.defaultAmount(),
                      availableWithdrawals: this.defaultAmount(),
                      availableForUnstake: this.defaultAmount(),
                      pendingWithdrawals: this.defaultAmount(),
                      rewards: this.defaultAmount(),
                      validators: {},
                      additional: {},
                      staking: m(E, this, S).call(this),
                    }
                  );
                }
              }
              async getStakingInfo() {
                const e = await this.fetchStakingInfo();
                return (
                  this.setBalances(await this.makeStakingInfoStruct(e)),
                  h(t, this)
                );
              }
              calculateTotal(e) {
                let {
                  balance: t,
                  staked: a,
                  unstaking: r,
                  rewards: n,
                  availableWithdrawals: s,
                  pendingWithdrawals: o,
                } = e;
                const c = new i.default("0", this);
                return (
                  (c.amount = t.amount
                    .add(a.amount)
                    .add(o.amount)
                    .add(s.amount)),
                  c
                );
              }
              async calculateAvailableForStake(e) {
                let { balance: t } = e;
                const a = new i.default("0", this);
                try {
                  const e = await this.getFee({ gasLimit: this.getGasLimit() }),
                    r = new this.BN(
                      this.feeData.reserveForStake ||
                        this.reserveForStakeFallback,
                    ),
                    n = t.amount.sub(new this.BN(e)).sub(r);
                  n.gtn(0) && (a.amount = n);
                } catch (r) {
                  console.error("Error calculating available for stake:", r);
                }
                return a;
              }
              calculateAvailableForUnstake() {
                return h(t, this).availableForUnstake || this.defaultAmount();
              }
              calculateStakedAmount() {
                return h(t, this).staked || this.defaultAmount();
              }
              calculateUnstakingAmount() {
                return h(t, this).unstaking || this.defaultAmount();
              }
              calculateAvailableWithdrawalsAmount() {
                return h(t, this).availableWithdrawals || this.defaultAmount();
              }
              calculatePendingWithdrawalsAmount() {
                return h(t, this).pendingWithdrawals || this.defaultAmount();
              }
              calculateRewards(e, t) {
                return new i.default(e.zilAmount.toString(), this);
              }
              getValidators() {
                return h(t, this).staking;
              }
              getTotalBalance() {
                return h(t, this).total || this.defaultAmount();
              }
              getAvailableBalance() {
                return h(t, this).availableForStake || this.defaultAmount();
              }
              getAvailableForUnstakeBalance() {
                return h(t, this).availableForUnstake || this.defaultAmount();
              }
              getStakedBalance(e) {
                return m(E, this, R).call(this, "staked", e);
              }
              getUnstakingBalance(e) {
                return m(E, this, R).call(this, "unstaking", e);
              }
              getRewards(e) {
                return h(t, this).rewards;
              }
              getPendingWithdrawals() {
                return m(E, this, R).call(this, "pendingWithdrawals");
              }
              getAvailableWithdrawals(e) {
                return m(E, this, R).call(this, "availableWithdrawals", e);
              }
              async getUserValidators(e) {
                return [this.poolConfig.poolAddress];
              }
              getAdditionalInfo() {
                return h(t, this).additional || {};
              }
              async getPredefinedValidators() {
                return h(a, this);
              }
              getDefaultValidators() {
                return h(a, this);
              }
              getPredefineValidatorsConfigIdentifier() {
                return this.id;
              }
              getPredefineValidatorsConfigName() {
                return (
                  "stake_validators_" +
                  this.getPredefineValidatorsConfigIdentifier().toLowerCase()
                );
              }
              async setPrivateKey(e) {
                p(r, this, e);
                const t = await this.getCoreLibrary(),
                  a = await t.eth.accounts.privateKeyToAccount(e);
                this.address = a.address;
              }
            }
          );
          function S(e) {
            return {
              total: new i.default("0", this),
              availableForStake: new i.default("0", this),
              availableForUnstake: new i.default("0", this),
              staked: new i.default("0", this),
              unstaking: new i.default("0", this),
              pendingWithdrawals: new i.default("0", this),
              availableWithdrawals: new i.default("0", this),
              rewards: new i.default("0", this),
              validators: {},
              additional: {},
              staking: e,
            };
          }
          function C(e) {
            const { topic: t, payload: a } = (0, o.STAKING_BALANCES_CACHE)(
              this.id,
              e,
            );
            "undefined" !== typeof localStorage &&
              localStorage.setItem(t, JSON.stringify(a));
          }
          function _(e) {
            const t = new i.default(e.totalPendingClaims.toString(), this);
            return {
              [this.poolConfig.poolAddress]: {
                address: this.poolConfig.poolAddress,
                contract: this.poolConfig.poolAddress,
                staked: new i.default(e.lstBalance.toString(), this),
                unstaking: t,
                pendingWithdrawals: t,
                availableWithdrawals: new i.default(
                  e.claimableAmount.toString(),
                  this,
                ),
                availableForUnstake: new i.default(e.zilValue.toString(), this),
              },
            };
          }
          function R(e, a) {
            if (a)
              try {
                return h(t, this).validators[a][e] || this.defaultAmount();
              } catch (r) {
                return (
                  console.warn(`Validator ${a} not found for ${e}`),
                  this.defaultAmount()
                );
              }
            return h(t, this)[e] || this.defaultAmount();
          }
        };
      t.LiquidStakingAdapterMixin = E;
      t.default = E;
    },
    1876: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, "RetryableHttpProvider", function () {
          return RetryableHttpProvider;
        }));
      var r = a(398),
        n = a.n(r),
        i = Object.getPrototypeOf,
        s = Reflect.get,
        o = (e, t, a) => s(i(e), a, t),
        c = (e, t, a) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  o(a.next(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) => {
                try {
                  o(a.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              o = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
            o((a = a.apply(e, t)).next());
          });
      class RetryableHttpProvider extends n.a {
        constructor(e, t = {}) {
          (super(e, t),
            (this.maxRetries = t.maxRetries || 3),
            (this.retryDelay = t.retryDelay || 1e3));
        }
        send(e, t) {
          this.sendWithRetry(e, t, 0);
        }
        sendWithRetry(e, t, a) {
          return c(this, null, function* () {
            o(RetryableHttpProvider.prototype, this, "send").call(
              this,
              e,
              (r, n) => {
                r && a < this.maxRetries - 1
                  ? setTimeout(() => {
                      this.sendWithRetry(e, t, a + 1);
                    }, this.retryDelay)
                  : t(r, n);
              },
            );
          });
        }
      }
    },
    1988: function (e) {
      e.exports = JSON.parse(
        '{"groups":[{"name":"Popular","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]},{"name":"Stablecoins","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]},{"name":"DeFi","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]},{"name":"GameFi","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]}],"filters":[{"name":"New","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]}]}',
      );
    },
    2015: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(14)),
        i = a(19);
      const s = {
          QTUM: "2b76f09cfa059bb0be79b58a6580c918",
          ICX: "410c29bffb5931ba3eb87492b493d882",
          DOT: "773e9b457ee990ac620316c382774397",
          ADA: "fa282c50b8605c884c3cefe241fbd7aa",
          ATOM: "3a0efbd8d84808e8887f785daadd635d",
          BAND: "bcbc89707c4ee983b681c442d7a1b0db",
          XTZ: "a76192ac8395bdabcff083022831e814",
        },
        o = "https://aff-api.everstake.one/atomic/delegations",
        c = "post",
        l = "142575db16b31752843bcdd1d50454c7";
      t.default = {
        isEverstake(e) {
          return (void 0 === e && (e = ""), "everstake" === e.toLowerCase());
        },
        isCompatible(e) {
          return !!s[e];
        },
        submitEverstakeTx(e) {
          let { provider: t, currency: a = "", hash: r } = e;
          if (this.isEverstake(t) && this.isCompatible(a)) {
            const e = {
              url: o,
              method: c,
              data: { link_id: s[a.toUpperCase()], delegations: [r] },
              headers: { "X-API-KEY": l, "Content-type": "application/json" },
            };
            (0, n.default)(e).catch(
              (e) =>
                new i.InternalError({
                  type: "Everstake API Error",
                  error: e,
                  instance: this,
                }),
            );
          }
        },
      };
    },
    2016: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, "solTrackerClient", function () {
          return i;
        }));
      var r = a(14),
        n = a.n(r);
      const i = n.a.create({
        baseURL: "https://data.solanatracker.io",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "7f2f0ec9-631d-48d7-a1ef-03b4da918cdc",
        },
      });
    },
    2022: function (e) {
      e.exports = JSON.parse(
        '{"usdterc20":{"ticker":"usdt"},"bandmainnet":{"ticker":"band"},"bnbmainnet":{"ticker":"bnb"},"usdttrc20":{"ticker":"trx-usdt"},"bnbbsc":{"ticker":"bsc"},"avaxc":{"ticker":"avax"},"maticmainnet":{"ticker":"matic","parentTicker":"matic"},"matic":{"ticker":"matic","parentTicker":"eth"},"usdt":{"ticker":"usdt","parentTicker":"eth"},"ftmmainnet":{"ticker":"ftm","network":"ftm"},"eth":{"ticker":"eth","parentTicker":"eth"}}',
      );
    },
    2033: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.inviteFriendsProgram = void 0));
      var n = r(a(14)),
        i = a(19),
        s = a(27),
        o = a(4),
        c = a(35),
        l = r(a(26)),
        u = a(2034),
        d = a(2035),
        f = a(2036),
        h = a(2039);
      function p(e, t) {
        (g(e, t), t.add(e));
      }
      function m(e, t, a) {
        (g(e, t), t.set(e, a));
      }
      function g(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function y(e, t, a) {
        return (e.set(w(e, t), a), a);
      }
      function b(e, t) {
        return e.get(w(e, t));
      }
      function w(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const v = (e) =>
          [d.HTTP_STATUS_OK, d.HTTP_STATUS_BAD_REQUEST].includes(e),
        k = n.default.create({ validateStatus: v }),
        T = "state",
        A = /^(\w|\d){5,10}/;
      var E = new WeakMap(),
        S = new WeakSet(),
        C = new WeakMap();
      class InviteFriendsProgram {
        constructor() {
          (p(this, S),
            m(this, E, void 0),
            m(this, C, (e) => {
              if (!e)
                throw new i.InternalError({
                  type: s.INTERNAL_ERROR,
                  error: "AtomicId cannot be empty",
                  instance: this,
                });
              y(E, this, e);
            }),
            l.default.on(c.WALLETS.NEW_ATOMIC_ID, w(S, this, _).bind(this)));
        }
        get atomicId() {
          if (!b(E, this))
            throw new i.InternalError({
              type: s.INTERNAL_ERROR,
              error: "Empty atomicId",
              instance: this,
            });
          return b(E, this);
        }
        async getIsAffiliate() {
          const e = await this.getAffiliateInfo();
          return null !== e;
        }
        async getIsReferral() {
          const e = await this.getReferralInfo();
          return null !== e;
        }
        async updateRewardHistory() {
          throw new i.UndeclaredAbstractMethodError(
            "updateRewardHistory",
            this,
          );
        }
        async registerAsAffiliate() {
          try {
            const { status: e, data: { referralLink: t, promoCode: a } = {} } =
              await k.post(u.API_AFFILIATE_REGISTER, {
                atomicId: this.atomicId,
              });
            if (e === d.HTTP_STATUS_BAD_REQUEST)
              throw new i.ExternalError({
                type: s.EXTERNAL_ERROR,
                error: "Affiliate already registered",
                instance: this,
              });
            const r = await w(S, this, R).call(this);
            await w(S, this, O).call(this, r, {
              referralLink: t,
              promoCode: a,
            });
          } catch (e) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: e,
              instance: this,
            });
          }
        }
        async registerAsReferral(e) {
          const t = A.test(e);
          if (!t)
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: "Wrong promoCode",
              instance: this,
            });
          try {
            const { status: t, data: { invitedWithPromoCode: a } = {} } =
              await k.post(u.API_REFERRAL_REGISTER, {
                atomicId: this.atomicId,
                promoCode: e,
              });
            if (t === d.HTTP_STATUS_BAD_REQUEST)
              throw new i.ExternalError({
                type: s.EXTERNAL_ERROR,
                error: "Referral already registered",
                instance: this,
              });
            const r = await w(S, this, R).call(this);
            await w(S, this, O).call(this, r, { invitedWithPromoCode: a });
          } catch (a) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: a,
              instance: this,
            });
          }
        }
        async getIsPromoCodeExists(e) {
          try {
            const { status: t } = await k.get(u.API_AFFILIATE_EXISTENCE, {
              params: { promoCode: e },
            });
            return t === d.HTTP_STATUS_OK;
          } catch (t) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: t,
              instance: this,
            });
          }
        }
        async getAffiliateInfo() {
          try {
            const e = await w(S, this, R).call(this);
            if (null !== e && void 0 !== e && e.promoCode) return e;
            const { data: { referralLink: t, promoCode: a } = {} } =
              await k.get(u.API_AFFILIATE_INFO, {
                params: { atomicId: this.atomicId },
              });
            if (a) {
              const e = await w(S, this, R).call(this);
              return (
                await w(S, this, O).call(this, e, {
                  referralLink: t,
                  promoCode: a,
                }),
                { referralLink: t, promoCode: a }
              );
            }
            return null;
          } catch (e) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: e,
              instance: this,
            });
          }
        }
        async getAffiliateStatistics() {
          try {
            const {
              status: e,
              data: {
                referrals: t,
                activeReferrals: a,
                receivedRewards: r,
                pendingRewards: n,
              } = {},
            } = await k.get(u.API_AFFILIATE_STAT, {
              params: { atomicId: this.atomicId },
            });
            if (e === d.HTTP_STATUS_BAD_REQUEST)
              throw new i.ExternalError({
                type: s.EXTERNAL_ERROR,
                error: "Invalid atomicId",
                instance: this,
              });
            return {
              referralCount: t,
              activeReferralCount: a,
              receivedRewards: r,
              pendingRewards: n,
            };
          } catch (e) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: e,
              instance: this,
            });
          }
        }
        async getReferralInfo() {
          try {
            const e = await w(S, this, R).call(this);
            if (null !== e && void 0 !== e && e.invitedWithPromoCode)
              return { invitedWithPromoCode: e.invitedWithPromoCode };
            const { data: { invitedWithPromoCode: t } = {} } = await k.get(
              u.API_REFERRAL_INFO,
              { params: { atomicId: this.atomicId } },
            );
            if (t) {
              const e = await w(S, this, R).call(this);
              return (
                await w(S, this, O).call(this, e, { invitedWithPromoCode: t }),
                { invitedWithPromoCode: t }
              );
            }
            return null;
          } catch (e) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: e,
              instance: this,
            });
          }
        }
        async getExchangeBonusesState() {
          try {
            const {
              status: e,
              data: { currentProgress: t, untilNextReward: a, stages: r } = {},
            } = await k.get(u.API_REFERRAL_REWARDS, {
              params: { atomicId: this.atomicId },
            });
            if (e === d.HTTP_STATUS_BAD_REQUEST)
              throw new i.ExternalError({
                type: s.EXTERNAL_ERROR,
                error: "Invalid atomicId",
                instance: this,
              });
            const n = { currentProgress: t, untilNextReward: a, stages: r };
            return (f.exchangeBonusesValidationSchema.validateToThrow(n), n);
          } catch (e) {
            throw new i.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: e,
              instance: this,
            });
          }
        }
        getGuidanceList() {
          return h.guidanceList.getKeys();
        }
        getGuidanceListItem(e) {
          return h.guidanceList.getItemByKey(e);
        }
        async getRewardHistory() {
          throw new i.UndeclaredAbstractMethodError("getRewardHistory", this);
        }
      }
      function _(e) {
        let { atomicId: t } = e;
        b(C, this).call(this, t);
      }
      async function R() {
        try {
          return await o.db.ifProgramState.get(T);
        } catch (e) {
          throw new i.ExternalError({
            type: s.EXTERNAL_ERROR,
            error: e,
            instance: this,
          });
        }
      }
      async function P(e) {
        try {
          await o.db.ifProgramState.put({ ...e, key: T });
        } catch (t) {
          throw new i.ExternalError({
            type: s.EXTERNAL_ERROR,
            error: t,
            instance: this,
          });
        }
      }
      function O(e, t) {
        return w(S, this, P).call(this, { ...e, ...t });
      }
      t.inviteFriendsProgram = new InviteFriendsProgram();
    },
    2034: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.API_REFERRAL_REWARDS =
          t.API_REFERRAL_REGISTER =
          t.API_REFERRAL_INFO =
          t.API_AFFILIATE_STAT =
          t.API_AFFILIATE_REGISTER =
          t.API_AFFILIATE_INFO =
          t.API_AFFILIATE_EXISTENCE =
            void 0));
      var n = r(a(433)),
        i = a(67);
      const s = "REFERRAL_PROGRAM_API_URL",
        o = (0, i.getStringWithEnsuredEndChar)(n.default.get(s), "/");
      ((t.API_AFFILIATE_STAT = o + "v1/affiliate/stat"),
        (t.API_AFFILIATE_INFO = o + "v1/affiliate/info"),
        (t.API_AFFILIATE_EXISTENCE = o + "v1/affiliate"),
        (t.API_AFFILIATE_REGISTER = o + "v1/affiliate/register"),
        (t.API_REFERRAL_REWARDS = o + "v1/referral/rewards"),
        (t.API_REFERRAL_INFO = o + "v1/referral/info"),
        (t.API_REFERRAL_REGISTER = o + "v1/referral/register"));
    },
    2035: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HTTP_STATUS_OK =
          t.HTTP_STATUS_NOT_FOUND =
          t.HTTP_STATUS_BAD_REQUEST =
            void 0));
      ((t.HTTP_STATUS_OK = 200),
        (t.HTTP_STATUS_BAD_REQUEST = 400),
        (t.HTTP_STATUS_NOT_FOUND = 404));
    },
    2036: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "exchangeBonusesValidationSchema", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }));
      var n = r(a(2037));
    },
    2037: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(2038));
      const i = {
        type: "object",
        required: ["currentProgress", "untilNextReward", "stages"],
        properties: {
          currentProgress: { type: "string" },
          untilNextReward: { type: "string" },
          stages: {
            type: "array",
            minItems: 1,
            items: {
              type: "object",
              required: ["volume", "reward"],
              properties: {
                volume: { type: "string" },
                reward: { type: "string" },
              },
            },
          },
        },
        additionalProperties: !0,
      };
      t.default = new n.default(i);
    },
    2039: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.guidanceList = void 0));
      var n = a(19),
        i = a(27),
        s = r(a(8));
      const o = "referral-program-texts";
      class GuidanceList {
        async getItemByKey(e) {
          try {
            const t = (await s.default.get(o))[e];
            if (!t) throw new Error("Incorrect key");
            return t;
          } catch (t) {
            throw new n.ExternalError({
              type: i.EXTERNAL_ERROR,
              error: t,
              instance: this,
            });
          }
        }
        async getKeys() {
          try {
            const e = await s.default.get(o);
            return Object.keys(e);
          } catch (e) {
            throw new n.ExternalError({
              type: i.EXTERNAL_ERROR,
              error: e,
              instance: this,
            });
          }
        }
      }
      t.guidanceList = new GuidanceList();
    },
    2041: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notifyService = t.AtomicNotify = void 0));
      var n = r(a(14)),
        i = r(a(37));
      class AtomicNotify {
        constructor(e) {
          (void 0 === e && (e = "https://atomic-notify.atomicwallet.io/"),
            (this.axios = n.default.create({ baseURL: e })));
        }
        async registerToken(e) {
          let { token: t, userId: a, deviceId: r = "" } = e;
          try {
            (await this.axios.post("/notifications/token", {
              userId: a,
              deviceId: r,
              platform: i.default.getPlatform(),
              token: t,
            }),
              (this.token = t));
          } catch (n) {
            return (console.error(n), !1);
          }
          return !0;
        }
        async subscribe(e) {
          try {
            (this.validateToken(),
              await this.axios.post("/subscriptions/subscribe", {
                token: this.token,
                type: e,
              }));
          } catch (t) {
            return (console.error(t), !1);
          }
          return !0;
        }
        async unsubscribe(e) {
          try {
            (this.validateToken(),
              await this.axios.post("/subscriptions/unsubscribe", {
                token: this.token,
                type: e,
              }));
          } catch (t) {
            return (console.error(t), !1);
          }
          return !0;
        }
        async getSubscriptions() {
          try {
            this.validateToken();
            const e = await this.axios.get(
                "/subscriptions?token=" + this.token,
              ),
              t = e.data,
              a = t.map((e) => {
                if (!e.type || !e.isEnabled)
                  throw new Error(
                    "AtomicNotify: wrong subscriptions answer format",
                  );
                return { type: e.type, isEnabled: "true" === e.isEnabled };
              });
            return a;
          } catch (e) {
            throw (console.error(e), e);
          }
        }
        validateToken() {
          if ("string" !== typeof this.token || !this.token)
            throw new Error("AtomicNotify: token not registered");
        }
      }
      t.AtomicNotify = AtomicNotify;
      t.notifyService = new AtomicNotify();
    },
    2042: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ArticlesSettings", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "FilterSettings", {
          enumerable: !0,
          get: function () {
            return s.filtersAndGroupsConfig;
          },
        }),
        Object.defineProperty(t, "FontSettings", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }));
      var n = r(a(2043)),
        i = r(a(2044)),
        s = a(675);
    },
    2043: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, "ICON_FONT_URL", function () {
          return o;
        }));
      var r = a(8),
        n = a.n(r),
        i = a(4),
        s = (e, t, a) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  o(a.next(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) => {
                try {
                  o(a.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              o = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
            o((a = a.apply(e, t)).next());
          });
      const o = "https://services.atomicwallet.io/fonts/icon-font.css";
      function c(e) {
        return "number" === typeof e && Number.isFinite(e);
      }
      t["default"] = {
        loadStyles(e = 1, t) {
          const a = document.createElement("style");
          if (!c(e))
            throw new Error(
              "fontSettings.loadStyles: version is not a fintite number",
            );
          const r = `${t}?v=${e}`,
            n = Object(i["sanitizeUrl"])(r, o),
            s = `@import url(${n})`;
          (document.body.append(a), a.append(document.createTextNode(s)));
        },
        loadIconFontStyles() {
          return s(this, null, function* () {
            try {
              const e = yield n.a.get(r["ConfigKey"].FontIcon);
              (null == e ? void 0 : e.iconFontVersion) &&
                this.loadStyles(e.iconFontVersion, e.iconFontUrl || o);
            } catch (e) {
              console.warn("Failed load font styles", e);
            }
          });
        },
      };
    },
    2044: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(8)),
        i = r(a(28)),
        s = r(a(2045));
      t.default = {
        async loadArticles() {
          let e;
          try {
            e = await n.default.get("learn-staking");
          } catch (t) {
            i.default.error({ error: t });
          }
          return e || s.default;
        },
      };
    },
    2045: function (e) {
      e.exports = JSON.parse(
        '[{"link":"https://support.atomicwallet.io/article/155-how-to-stake-zil","title":"How to Stake ZIL","image":"","ticker":"ZIL","isVideo":false},{"link":"https://support.atomicwallet.io/article/157-ada-staking","title":"How to Stake ADA","image":"","ticker":"ADA","isVideo":false},{"link":"https://support.atomicwallet.io/article/151-how-to-stake-awc","title":"How to Stake AWC","image":"","ticker":"AWC","isVideo":false},{"link":"https://support.atomicwallet.io/article/158-icx-staking","title":"How to Stake ICX","image":"","ticker":"ICX","isVideo":false},{"link":"https://support.atomicwallet.io/article/152-how-to-stake-band","title":"How to Stake BAND","image":"","ticker":"BAND","isVideo":false},{"link":"https://support.atomicwallet.io/article/128-how-to-stake-xtz","title":"How to Stake XTZ","image":"","ticker":"XTZ","isVideo":false},{"link":"https://support.atomicwallet.io/article/131-how-to-stake-trx","title":"How to Stake TRX","image":"","ticker":"TRX","isVideo":false},{"link":"https://support.atomicwallet.io/article/132-how-to-stake-kmd","title":"How to Stake KMD","image":"","ticker":"KMD","isVideo":false},{"link":"https://support.atomicwallet.io/article/72-how-to-claim-neo-gas","title":"How to Stake NEO","image":"","ticker":"NEO","isVideo":false},{"link":"https://support.atomicwallet.io/article/133-how-to-stake-algo","title":"How to Stake ALGO","image":"","ticker":"ALGO","isVideo":false}]',
      );
    },
    2651: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, "LiquidStakingPool", function () {
          return LiquidStakingPool_LiquidStakingPool;
        }));
      var r = a(11),
        n = a.n(r),
        i = a(45),
        s = (e, t, a) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  o(a.next(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) => {
                try {
                  o(a.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              o = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
            o((a = a.apply(e, t)).next());
          });
      class Web3ContractReader_Web3ContractReader {
        constructor(e) {
          this.web3 = e;
        }
        readContract(e, t, a) {
          return s(this, arguments, function* (e, t, a, r = [], s = {}) {
            try {
              if (!this.web3.utils.isAddress(e))
                throw new Error(
                  `[Web3ContractReader.readContract] Error: "${e}" is not a valid address`,
                );
              const i = this.web3.utils.toChecksumAddress(e),
                o = r.map((e) => {
                  if (
                    "string" === typeof e &&
                    e.startsWith("0x") &&
                    42 === e.length
                  ) {
                    const t = this.web3.utils.toChecksumAddress(e);
                    return t;
                  }
                  return e;
                }),
                c = new this.web3.eth.Contract(t, i),
                l = yield c.methods[a](...o).call(s);
              if ("string" === typeof l && /^\d+$/.test(l)) return new n.a(l);
              if (Array.isArray(l))
                return l.map((e) =>
                  Array.isArray(e)
                    ? e.map((e) =>
                        "string" === typeof e && /^\d+$/.test(e)
                          ? new n.a(e)
                          : e,
                      )
                    : "string" === typeof e && /^\d+$/.test(e)
                      ? new n.a(e)
                      : e,
                );
              if (l && "object" === typeof l && !Array.isArray(l)) {
                const e = Object.keys(l);
                if (e.length > 0 && e.every((e) => /^\d+$/.test(e))) {
                  const t = e.map((e) => {
                    const t = l[e];
                    return "string" === typeof t && /^\d+$/.test(t)
                      ? new n.a(t)
                      : t;
                  });
                  return t;
                }
              }
              return l;
            } catch (o) {
              console.error(
                `[Web3ContractReader.readContract] Error in readContract for function ${a} at address ${e}:`,
                o,
              );
              const t = o instanceof Error ? o.message : String(o),
                r = `Failed to read contract function ${a} at address ${e}. Error: ${t}`;
              throw new i["ContractReaderError"](
                r,
                "CONTRACT_READ_ERROR",
                "readContract",
                o,
              );
            }
          });
        }
        getBlockNumber() {
          return s(this, null, function* () {
            try {
              const e = yield this.web3.eth.getBlockNumber();
              return new n.a(e.toString());
            } catch (e) {
              const t = e instanceof Error ? e.message : String(e),
                a = "Failed to get current block number. Error: " + t;
              throw new i["ContractReaderError"](
                a,
                "BLOCK_NUMBER_ERROR",
                "getBlockNumber",
                e,
              );
            }
          });
        }
      }
      function o(e, t) {
        const a = e.split("."),
          r = a[0] || "0",
          i = (a[1] || "").padEnd(t, "0").slice(0, t),
          s = new n.a(r).mul(new n.a(10).pow(new n.a(t))),
          o = new n.a(i);
        return s.add(o);
      }
      function c(e, t) {
        const a = new n.a(10).pow(new n.a(t)),
          r = e.div(a),
          i = e.mod(a);
        if (i.isZero()) return r.toString();
        const s = i.toString().padStart(t, "0"),
          o = s.replace(/0+$/, "");
        return "" === o ? r.toString() : `${r}.${o}`;
      }
      var l = Object.defineProperty,
        u = Object.defineProperties,
        d = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        m = (e, t, a) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        g = (e, t) => {
          for (var a in t || (t = {})) h.call(t, a) && m(e, a, t[a]);
          if (f) for (var a of f(t)) p.call(t, a) && m(e, a, t[a]);
          return e;
        },
        y = (e, t) => u(e, d(t)),
        b = (e, t, a) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  o(a.next(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) => {
                try {
                  o(a.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              o = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
            o((a = a.apply(e, t)).next());
          });
      const w = 5e3;
      class ContractTransactionBuilder_ContractTransactionBuilder {
        constructor(e, t) {
          ((this.web3Provider = e), (this.abi = t));
        }
        createAndSignTransaction(e) {
          return b(this, null, function* () {
            var t, a;
            const r = this.web3Provider.toChecksumAddress(e.address),
              n = this.web3Provider.toChecksumAddress(
                this.web3Provider.privateKeyToAccount(e.privateKey).address,
              );
            if ("undefined" === typeof n)
              throw new TypeError("undefined checksum account");
            const i = this.abi.find((t) => t.name === e.functionName);
            if ((null == i ? void 0 : i.payable) && !e.value)
              throw new Error(
                "`value` parameter is required for this transaction.",
              );
            const s = this.web3Provider.encodeContractMethod(
                this.abi,
                e.functionName,
                e.args || [],
                r,
              ),
              o = {
                to: r,
                data: s,
                from: n,
                value: null == (t = e.value) ? void 0 : t.toString(),
              },
              c = yield this.web3Provider.estimateGas(o),
              l = yield this.web3Provider.getGasPrice(),
              u = yield this.web3Provider.getNonce(n),
              d = y(g({}, o), {
                gas: c,
                gasPrice: l,
                nonce: u,
                value: null == (a = e.value) ? void 0 : a.toString(),
              }),
              f = yield this.signTransaction(d, e.privateKey);
            if (!f.rawTransaction)
              throw new Error("[BUILDER] Error: no rawTransaction");
            return f.rawTransaction;
          });
        }
        estimateTransactionFee(e) {
          return b(this, null, function* () {
            var t, a, r, i;
            const s = new n.a(
                null != (a = null == (t = e.gasPrice) ? void 0 : t.toString())
                  ? a
                  : "0",
              ),
              o = new n.a(
                null != (i = null == (r = e.gas) ? void 0 : r.toString())
                  ? i
                  : "0",
              );
            return s.mul(o);
          });
        }
        signTransaction(e, t) {
          return b(this, null, function* () {
            try {
              return this.web3Provider.signTransaction(e, t);
            } catch (a) {
              throw new i["TransactionBuilderError"](
                "Failed to sign transaction: " +
                  (a instanceof Error ? a.message : String(a)),
                "TX_SIGN_ERROR",
                "signTransaction",
                a,
              );
            }
          });
        }
        waitForTransaction(e) {
          return b(this, null, function* () {
            try {
              const t = yield this.waitForTransactionReceipt(e, 6e4);
              return {
                hash: e,
                blockNumber: Number(t.blockNumber),
                status: t.status ? "success" : "failed",
                gasUsed: new n.a(t.gasUsed.toString()),
              };
            } catch (t) {
              throw new i["TransactionBuilderError"](
                "Transaction failed or timed out: " +
                  (t instanceof Error ? t.message : String(t)),
                "TX_RECEIPT_ERROR",
                "waitForTransaction",
                t,
              );
            }
          });
        }
        waitForTransactionReceipt(e, t) {
          return b(this, null, function* () {
            const a = Date.now();
            let r = 0;
            const n = 6;
            while (Date.now() - a < t && r < n) {
              try {
                const t = yield this.web3Provider.getTransactionReceipt(e);
                if (t) return t;
              } catch (i) {}
              (r++, yield new Promise((e) => setTimeout(e, w)));
            }
            throw new Error(`Transaction receipt timeout after ${t}ms`);
          });
        }
        sendAndWait(e) {
          return b(this, null, function* () {
            try {
              const t = yield this.web3Provider.sendSignedTransaction(e);
              return yield this.waitForTransaction(t.transactionHash);
            } catch (t) {
              throw (
                console.error(
                  "[BUILDER][sendAndWait]: Error during execution:",
                  t,
                ),
                new i["TransactionBuilderError"](
                  "Failed to execute and confirm transaction",
                  "TX_EXECUTION_ERROR",
                  "sendAndWait",
                  t,
                )
              );
            }
          });
        }
      }
      var v = (e, t, a) =>
        new Promise((r, n) => {
          var i = (e) => {
              try {
                o(a.next(e));
              } catch (t) {
                n(t);
              }
            },
            s = (e) => {
              try {
                o(a.throw(e));
              } catch (t) {
                n(t);
              }
            },
            o = (e) =>
              e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
          o((a = a.apply(e, t)).next());
        });
      class Web3Provider {
        constructor(e) {
          this.web3 = e;
        }
        toChecksumAddress(e) {
          return this.web3.utils.toChecksumAddress(e);
        }
        encodeContractMethod(e, t, a, r) {
          const n = new this.web3.eth.Contract(e, r);
          return n.methods[t](...(a || [])).encodeABI();
        }
        estimateGas(e) {
          return this.web3.eth.estimateGas(e);
        }
        getGasPrice() {
          return this.web3.eth.getGasPrice();
        }
        sendTransaction(e) {
          return this.web3.eth.sendTransaction(e);
        }
        getTransactionReceipt(e) {
          return this.web3.eth.getTransactionReceipt(e);
        }
        signTransaction(e, t) {
          return v(this, null, function* () {
            const a = yield this.web3.eth.accounts.signTransaction(e, t);
            if (!a.rawTransaction)
              throw new Error(
                "Failed to sign transaction: rawTransaction is undefined.",
              );
            return a;
          });
        }
        sendSignedTransaction(e) {
          return v(this, null, function* () {
            if (!e.rawTransaction)
              throw new Error(
                "[PROVIDER] Error: no serialized transaction given",
              );
            const t = yield this.web3.eth.sendSignedTransaction(
              e.rawTransaction,
            );
            return t;
          });
        }
        privateKeyToAccount(e) {
          return this.web3.eth.accounts.privateKeyToAccount(e);
        }
        getBalance(e) {
          return v(this, null, function* () {
            return this.web3.eth.getBalance(e);
          });
        }
        getChainId() {
          return v(this, null, function* () {
            return this.web3.eth.getChainId();
          });
        }
        getNetworkId() {
          return v(this, null, function* () {
            return this.web3.eth.net.getId();
          });
        }
        getTransactionCount(e) {
          return v(this, null, function* () {
            return this.web3.eth.getTransactionCount(e);
          });
        }
        getNonce(e) {
          return v(this, null, function* () {
            return this.getTransactionCount(e);
          });
        }
      }
      var k = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        A = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        S = (e, t, a) =>
          t in e
            ? k(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        C = (e, t) => {
          for (var a in t || (t = {})) A.call(t, a) && S(e, a, t[a]);
          if (T) for (var a of T(t)) E.call(t, a) && S(e, a, t[a]);
          return e;
        },
        _ = (e, t, a) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  o(a.next(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) => {
                try {
                  o(a.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              o = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
            o((a = a.apply(e, t)).next());
          });
      class LiquidStakingPool_LiquidStakingPool {
        constructor(e, t) {
          ((this.config = e),
            (this.contractReader = new Web3ContractReader_Web3ContractReader(
              t,
            )));
          const a = new Web3Provider(t);
          this.abi = i["LIQUID_DELEGATOR_ABI"];
          const r = new ContractTransactionBuilder_ContractTransactionBuilder(
            a,
            this.abi,
          );
          this.txBuilder = r;
        }
        getConfig() {
          return C({}, this.config);
        }
        createStakeTransaction(e, t) {
          return _(this, null, function* () {
            if (e.lt(this.config.minimumStake))
              throw new i["LiquidStakePoolError"](
                `Amount ${c(e, this.config.nativeTokenDecimals)} ZIL is below minimum stake ${c(this.config.minimumStake, this.config.nativeTokenDecimals)} ZIL`,
                "BELOW_MINIMUM_STAKE",
                "stake",
              );
            const a = {
              address: this.config.poolAddress,
              functionName: "stake",
              args: [],
              value: e,
              privateKey: t,
            };
            return this.txBuilder.createAndSignTransaction(a);
          });
        }
        estimateRewards(e) {
          return _(this, null, function* () {
            const t = yield this.getExchangeRate(),
              a = this.calculateLSTAmount(e, t);
            return a;
          });
        }
        createUnstakeTransaction(e, t) {
          return _(this, null, function* () {
            const a = yield this.getLSTBalance(t.address);
            if (e.gt(a))
              throw new i["LiquidStakePoolError"](
                "Insufficient LST balance",
                "INSUFFICIENT_BALANCE",
                "unstake",
              );
            const r = {
              address: this.config.poolAddress,
              functionName: "unstake",
              args: [e],
              privateKey: t.privateKey,
            };
            return this.txBuilder.createAndSignTransaction(r);
          });
        }
        createClaimTransaction(e) {
          return _(this, null, function* () {
            const t = {
              address: this.config.poolAddress,
              functionName: "claim",
              args: [],
              privateKey: e.privateKey,
            };
            return this.txBuilder.createAndSignTransaction(t);
          });
        }
        getExchangeRate() {
          return _(this, null, function* () {
            const e = yield this.contractReader.readContract(
                this.config.poolAddress,
                i["LIQUID_DELEGATOR_ABI"],
                "getPrice",
              ),
              t = 1 / parseFloat(c(e, this.config.nativeTokenDecimals));
            return t;
          });
        }
        getLSTBalance(e) {
          return _(this, null, function* () {
            const t = yield this.contractReader.readContract(
              this.config.lstTokenAddress,
              i["ERC20_ABI"],
              "balanceOf",
              [e],
            );
            return new n.a(t.toString());
          });
        }
        getZILValue(e) {
          return _(this, null, function* () {
            const t = yield this.getExchangeRate();
            return this.calculateZILAmount(e, t);
          });
        }
        getPendingClaims(e) {
          return _(this, null, function* () {
            const t = yield this.contractReader.readContract(
              this.config.poolAddress,
              i["LIQUID_DELEGATOR_ABI"],
              "getPendingClaims",
              [],
              { from: e },
            );
            return t.map((e) => {
              const [t, a] = e;
              return { zilAmount: a, blockNumber: t };
            });
          });
        }
        getClaimableAmount(e) {
          return _(this, null, function* () {
            const t = yield this.contractReader.readContract(
              this.config.poolAddress,
              i["LIQUID_DELEGATOR_ABI"],
              "getClaimable",
              [],
              { from: e },
            );
            return new n.a(t.toString());
          });
        }
        getUserInfo(e) {
          return _(this, null, function* () {
            const [t, a] = yield Promise.all([
                this.getLSTBalance(e),
                this.getPendingClaims(e),
              ]),
              r = yield this.getZILValue(t),
              i = a.reduce((e, t) => e.add(t.zilAmount), new n.a(0)),
              s = yield this.getClaimableAmount(e);
            return {
              lstBalance: t,
              zilValue: r,
              pendingClaims: a,
              totalPendingClaims: i,
              claimableAmount: s,
            };
          });
        }
        calculateLSTAmount(e, t) {
          const a = parseFloat(c(e, this.config.nativeTokenDecimals)),
            r = a * t,
            n = r.toFixed(this.config.lstTokenDecimals);
          return o(n, this.config.lstTokenDecimals);
        }
        calculateZILAmount(e, t) {
          const a = parseFloat(c(e, this.config.lstTokenDecimals)),
            r = a / t,
            n = r.toFixed(this.config.nativeTokenDecimals);
          return o(n, this.config.nativeTokenDecimals);
        }
      }
    },
    388: function (e) {
      e.exports = JSON.parse(
        '[{"currency":"EGLD","validators":[{"address":"erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc0llllsayxegu","name":"Binance Staking","reward":9.4},{"address":"erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqq8hlllls7a6h85","name":"Just Mining","reward":9.4}]},{"currency":"NEAR","validators":[{"address":"lunanova.poolv1.near","name":"LunaNova","fee":7,"reward":11}]},{"currency":"ATOM","validators":[{"name":"Sikka","reward":"10.16","address":"cosmosvaloper1ey69r37gfxvxg62sh4r0ktpuc46pzjrm873ae8","consensus_pubkey":"cosmosvalconspub1zcjduepqg6y8magedjwr9p6s2c28zp28jdjtecxhn97ew6tnuzqklg63zgfspp9y3n","description":{"moniker":"Sikka","identity":"https://keybase.io/team/sikka","website":"sikka.tech","details":"Sunny Aggarwal (@sunnya97) and Dev Ojha (@ValarDragon)"},"commission":{"rate":"0.000000000000000000","max_rate":"1.000000000000000000","max_change_rate":"1.000000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"Polychain Labs","reward":"8.13","address":"cosmosvaloper14k4pzckkre6uxxyd2lnhnpp8sngys9m6hl6ml7","consensus_pubkey":"cosmosvalconspub1zcjduepquhlqdhjw4qp2c2t6qh5z7tfk52qc72623f0etc8f3n7hy8uuh25ql34fvu","description":{"moniker":"Polychain Labs","identity":"A51CE3B9CD649C3F","website":"https://cosmos.polychainlabs.com","details":"Secure staking with Polychain Labs, the most experienced institutional grade staking team."},"commission":{"rate":"0.200000000000000000","max_rate":"1.000000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-04-22T04:57:29.717811274Z"}},{"name":"🐠stake.fish | bitfish","reward":"9.76","address":"cosmosvaloper1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u2lcnj0","consensus_pubkey":"cosmosvalconspub1zcjduepq6fpkt3qn9xd7u44478ypkhrvtx45uhfj3uhdny420hzgsssrvh3qnzwdpe","description":{"moniker":"🐠stake.fish | bitfish","identity":"90B597A673FC950E","website":"stake.fish","details":"Winner of the Game of Stakes. Brought to you by stake.fish and bitfish."},"commission":{"rate":"0.040000000000000000","max_rate":"1.000000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"DokiaCapital","reward":"8.64","address":"cosmosvaloper14lultfckehtszvzw4ehu0apvsr77afvyju5zzy","consensus_pubkey":"cosmosvalconspub1zcjduepqp0j4vum7ryt6nl6zsgq9ar347afmq2c5z6jmzeavv2p2ns6m0dgs5zmg4z","description":{"moniker":"DokiaCapital","identity":"25422F4ADF3F6765","website":"https://ion.dokia.capital","details":"We are open for delegations."},"commission":{"rate":"0.150000000000000000","max_rate":"0.150000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"SparkPool","reward":"9.76","address":"cosmosvaloper1rwh0cxa72d3yle3r4l8gd7vyphrmjy2kpe4x72","consensus_pubkey":"cosmosvalconspub1zcjduepq5kg8xls9l35ftulkm2rt70hexeeyr5cqqkcv4h7936z5uasvvazqla8eck","description":{"moniker":"SparkPool","identity":"DE8E37240061B04E","website":"https://cosmos.sparkpool.com/","details":"The biggest Ethereum mining pool, we can be a reliable validator with our 3 years"},"commission":{"rate":"0.040000000000000000","max_rate":"0.200000000000000000","max_change_rate":"0.050000000000000000","update_time":"2019-09-26T06:05:19.676181518Z"}},{"name":"Certus One","reward":"8.89","address":"cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys","consensus_pubkey":"cosmosvalconspub1zcjduepqwrjpn0slu86e32zfu5xxg8l42uk40guuw6er44vw2yl6s7wc38est6l0ux","description":{"moniker":"Certus One","identity":"ABD51DF68C0D1ECF","website":"https://certus.one","details":"Stake and earn rewards with the most secure and stable validator. Winner of the Game of Stakes. Operated by Certus One Inc. By delegating, you confirm that you are aware of the risk of slashing and that Certus One Inc is not liable for any potential damages to your investment."},"commission":{"rate":"0.125000000000000000","max_rate":"0.300000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"Cosmostation","reward":"8.94","address":"cosmosvaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn","consensus_pubkey":"cosmosvalconspub1zcjduepq0dc9apn3pz2x2qyujcnl2heqq4aceput2uaucuvhrjts75q0rv5smjjn7v","description":{"moniker":"Cosmostation","identity":"AE4C403A6E7AA1AC","website":"https://www.cosmostation.io","details":"CØSMOSTATION Validator. Delegate your atoms and Start Earning Staking Rewards"},"commission":{"rate":"0.120000000000000000","max_rate":"0.200000000000000000","max_change_rate":"0.100000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"iqlusion","reward":"9.15","address":"cosmosvaloper1grgelyng2v6v3t8z87wu3sxgt9m5s03xfytvz7","consensus_pubkey":"cosmosvalconspub1zcjduepqdgvppnyr5c9pulsrmzr9e9rp7qpgm9jwp5yu8g3aumekgjugxacq8a9p2c","description":{"moniker":"iqlusion","identity":"DCB176E79AE7D51F","website":"iqlusion.io","details":""},"commission":{"rate":"0.100000000000000000","max_rate":"1.000000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"Figment Networks","reward":"8.94","address":"cosmosvaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpfdn6m9d","consensus_pubkey":"cosmosvalconspub1zcjduepqnltddase4lqjcfhup8ymg0qex3srakg54ppv06pstvwdjxkm6tmq08znvs","description":{"moniker":"Figment Networks","identity":"E5F274B870BDA01D","website":"https://figment.network","details":"Makers of Hubble and Canada’s largest Cosmos validator, Figment is the easiest and most secure way to stake your Atoms."},"commission":{"rate":"0.120000000000000000","max_rate":"0.300000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-04-30T21:17:48.866795285Z"}},{"name":"Forbole","reward":"10.16","address":"cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj","consensus_pubkey":"cosmosvalconspub1zcjduepqmfxl36td7rcdzszzrk6c7kzp5l3jlw4lnxz8zms3py7qcsa9xlns7zxfd6","description":{"moniker":"Forbole","identity":"2861F5EE06627224","website":"https://www.forbole.com/cosmos-hub-validator/","details":"We are a named winner in Game of Stakes and HackAtom3 by Cosmos proving us as a validator with high uptime and never jailed. We are currently running a [#PWYW campaign](https://bit.ly/2Hx9dM2) which you can choose how much commission you would like to pay us."},"commission":{"rate":"0.000000000000000000","max_rate":"0.250000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-28T07:25:41.600375946Z"}},{"name":"jackzampolin","reward":"9.15","address":"cosmosvaloper130mdu9a0etmeuw52qfxk73pn0ga6gawkxsrlwf","consensus_pubkey":"cosmosvalconspub1zcjduepqfahazsjeru5wqulfuzklmkh272ggss2ru6fk00zq2fmlfzcq773sqlqe42","description":{"moniker":"jackzampolin","identity":"0979483D4F669CFF","website":"https://pylonvalidator.com","details":"\'Trust, but verify.\' -Russian Proverb"},"commission":{"rate":"0.100000000000000000","max_rate":"0.150000000000000000","max_change_rate":"0.100000000000000000","update_time":"2019-03-25T15:28:01.171914203Z"}}]},{"currency":"BAND","validators":[{"name":"Figment Networks Inc.","reward":"10.16","address":"bandvaloper1zm5p8gg3ugjcdwz9yrxaf6fdptxa4gw04rplr9","consensus_pubkey":"bandvalconspub1addwnpepqvll0h6xd65l4w0dvunurmdz7dapxxxp7jm2s5fg7v6rqla8fqmpqmwytma","description":{"moniker":"figment","identity":"E5F274B870BDA01D","website":"https://figment.network","details":"Figment Networks Inc."},"commission":{"rate":"0.100000000000000000","max_rate":"0.250000000000000000","max_change_rate":"0.050000000000000000","update_time":"2020-05-28T14:00:00Z"}},{"name":"Chorus One","reward":"10.16","address":"bandvaloper1fyn907tzlxknxgmvkjvmhgksf7t3zwjlcd6a0a","consensus_pubkey":"bandvalconspub1addwnpepqg008dkxcurd0fl47glld92j0aycld27nvl8ufkp8vqwlu2pmzzqy7me5tg","description":{"moniker":"Chorus One","identity":"00B79D689B7DC1CE","website":"https://chorus.one","details":"Secure Band and shape its future by delegating to Chorus One, a highly secure and stable validator. By delegating, you agree to the terms of service."},"commission":{"rate":"0.120000000000000000","max_rate":"0.300000000000000000","max_change_rate":"0.100000000000000000","update_time":"2020-05-28T14:00:00Z"}}]},{"currency":"OSMO","validators":[{"name":"Atomic Wallet","reward":"11","address":"osmovaloper1x2e2pnenh0mmc99cnp7sukngnt8lc4saljavr3"}]},{"currency":"XTZ","validators":[{"address":"tz1TcH4Nb3aHNDJ7CGZhU7jgAK1BkSP4Lxds","name":"XTZ Antipodes","logo":"xtz-antipodes.png","site":"https://xtzantipodes.org","balance":118800.355971,"stakingBalance":904501.913143,"stakingCapacity":1127415.637111,"estimatedRoi":0.064791},{"address":"tz3adcvQaKXTCg12zbninqo3q8ptKKtDFTLv","name":"Tezzigator","logo":"tezzigator.png","site":"https://www.tezzigator.com","balance":1029350.686895,"stakingBalance":7431297.310968,"stakingCapacity":9772716.158969,"estimatedRoi":0.063356},{"address":"tz1YKh8T79LAtWxX29N5VedCSmaZGw9LNVxQ","name":"Tezos Brazil","logo":"tezos-brazil.png","site":"https://tezosbr.com","balance":21826.653288,"stakingBalance":96594.775482,"stakingCapacity":208302.655757,"estimatedRoi":0.063728},{"address":"tz1TDSmoZXwVevLTEvKCTHWpomG76oC9S2fJ","name":"Tezos Capital Legacy","logo":"tezos-capital.png","site":"https://www.tezos.capital","balance":1871626.207705,"stakingBalance":11820408.108919,"stakingCapacity":17758503.268737,"estimatedRoi":0.059872},{"address":"tz3bEQoFCZEEfZMskefZ8q8e4eiHH1pssRax","name":"Ceibo XTZ","logo":"ceibo-xtz.png","site":"https://www.ceiboxtz.com","balance":26485.185431,"stakingBalance":229672.952134,"stakingCapacity":257566.932136,"estimatedRoi":0.065288},{"address":"tz2PdGc7U5tiyqPgTSgqCDct94qd6ovQwP6u","name":"Tezos Capital","logo":"tezos-capital.png","site":"https://www.tezos.capital","balance":100349.565992,"stakingBalance":510696.612696,"stakingCapacity":964435.509474,"estimatedRoi":0.055632},{"address":"tz1NRGxXV9h6SdNaZLcgmjuLx3hyy2f8YoGN","name":"Bake ꜩ For Me","logo":"bake-tz-for-me.png","site":"https://baketzfor.me","balance":12320.529561,"stakingBalance":75422.663562,"stakingCapacity":122412.00096,"estimatedRoi":0.06054},{"address":"tz1Ldzz6k1BHdhuKvAtMRX7h5kJSMHESMHLC","name":"PayTezos","logo":"paytezos.png","site":"https://paytezos.com","balance":1268461.397504,"stakingBalance":7910797.121167,"stakingCapacity":12041367.832962,"estimatedRoi":0.063363},{"address":"tz1Xek93iSXXckyQ6aYLVS5Rr2tge2en7ZxS","name":"XTZ Delegate","logo":"xtz-delegate.png","site":"https://xtzdelegate.io","balance":49473.941936,"stakingBalance":307538.312934,"stakingCapacity":474708.941335,"estimatedRoi":0.062688},{"address":"tz1TaLYBeGZD3yKVHQGBM857CcNnFFNceLYh","name":"Tezocracy","logo":"tezocracy.png","site":"https://tezocracy.com","balance":712467.090159,"stakingBalance":4434120.689041,"stakingCapacity":6760795.80625,"estimatedRoi":0.063388,"insAmount":12560.84988}]},{"currency":"ADA","validators":[{"address":"57eb48cdf25980039f087207af09fafb4970018e322d37c11c9a2496","ticker":"EVERS","name":"Everstake","logo":"57eb48cdf25980039f087207af09fafb4970018e322d37c11c9a2496.png","estimatedRoi":0.063388,"visibility":false},{"address":"ae66e56ab11ccb39e882669f220a37956c683e4ce84fefd910012d7a","ticker":"AWP2","name":"Atomic Wallet 2","estimatedRoi":5,"visibility":true},{"address":"a3ac6ca0694fc5825f831c8d0d97f202c4f298741ae60874730fafb8","ticker":"AWP","name":"Atomic Wallet","estimatedRoi":5,"visibility":true}]},{"currency":"TRX","validators":[{"name":"Binance","reward":"4.32","address":"TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH"},{"name":"Sesameseed","reward":"4.32","address":"TGzz8gjYiYRqpfmDwnLxfgPuLVNmpCswVp"},{"name":"BitGuils","reward":"4.32","address":"TV9QitxEJ3pdiAUAfJ2QuPxLKp9qTTR3og"}]},{"currency":"ICX","validators":[{"address":"hx0b047c751658f7ce1b2595da34d57a0e7dad357d","name":"ICON Foundation","reward":"10"},{"address":"hxfba37e91ccc13ec1dab115811f73e429cde44d48","name":"ICX_Station","reward":"10"},{"address":"hxd0d9b0fee857de26fd1e8b15209ca15b14b851b2","name":"VELIC","reward":"10"},{"address":"hx54d6f19c3d16b2ef23c09c885ca1ba776aaa80e2","name":"Ubik Capital","reward":"10"},{"address":"hx262afdeda4eba10fe41fa5ef21796ac2bdcc6629","name":"ICONation","reward":"10"},{"address":"hx4a43790d44b07909d20fbcc233548fc80f7a4067","name":"RHIZOME","reward":"10"},{"address":"hxab751d4e83b6fda412a38cb5f7f96860396b1327","name":"Symmetry SLC","reward":"10"},{"address":"hxd5059fec8665bc7b769f4893aef65cf00049377a","name":"ICON Hyperconnect","reward":"10"},{"address":"hxf75bfd0df8d96ee0963965135af2485cee6d5000","name":"weBloc asia","reward":"10"},{"address":"hxdc35f82a3a943e040ae2b9ab2baa2118781b2bc9","name":"Mineable","reward":"10"},{"address":"hx863e16bd18ceaa7d498b4b275e36cd58818b1f25","name":"ICONVIET","reward":"10"},{"address":"hxe4c008b838e8a9a7c065f20f393974de4c86f917","name":"ReliantNode","reward":"10"},{"address":"hx168d2cfe6d73acb8cb690d3abda54d3af266addf","name":"block42","reward":"10"},{"address":"hxb11448743cbb63fcf29609401cdc5782793be211","name":"ICONbet Community","reward":"10"},{"address":"hx8e6dcffdf06f850af5d372ac96389135e17d56d3","name":"Everstake","reward":"10"},{"address":"hx3aa778e1f00c77d3490e9e625f1f83ed26f90133","name":"Paradigm Citadel","reward":"10"},{"address":"hx5b97bbec2e555289351806103833a465b7fbbd47","name":"Blockmove","reward":"10"},{"address":"hx231a795d1c719b9edf35c46b9daa4e0b5a1e83aa","name":"iBriz - ICONOsphere","reward":"10"},{"address":"hx6f89b2c25c15f6294c79810221753131067ed3f8","name":"Sharpn","reward":"10"},{"address":"hx9780bfcd8d33c50f56e37f5b27313433c28eb8d8","name":"Stakin (POS Bakerz)","reward":"10"}]},{"currency":"ZIL","validators":[{"address":"0x122219cceab410901e96c3a0e55e46231480341b","name":"Zilliqa","reward":null},{"address":"0x3ee34d308f962d17774a591f32cd1214e8bc470d","name":"Shardpool.io","reward":null},{"address":"0x635eff625a147c7ca0397445eee436129ee6ca0b","name":"Moonlet.io","reward":null},{"address":"0x82b82c65213e0b2b206492d3d8a2a679e7fe52e0","name":"ViewBlock","reward":null},{"address":"0xb83fc2c72c44b6b869c64384375c979dc3f7cf05","name":"Zillacracy","reward":null}]},{"currency":"SOL","validators":[{"address":"2Y2opv8Kq8zFATg6ipqb2AjgCf18tkv1CLMLXQGif2NH","name":"AtomicWallet","reward":7.4}]},{"currency":"BNB","validators":[{"address":"bva1t42gtf6hawqgpmdpjzmvlzvmlttlqtkvlmgjxt","name":"BscScan","reward":4.7},{"address":"bva1rv0d5yehn48jnza2f490xa00t20scse9y4khvh","name":"Neptune","reward":4.2}]},{"currency":"LUNC","validators":[{"name":"Interstellar Lounge","reward":"10.16","address":"terravaloper1fg5g8acntt90n9303cm5fjza9s3newleq60zt9"},{"name":"Orion.Money","reward":"8.13","address":"terravaloper1259cmu5zyklsdkmgstxhwqpe0utfe5hhyty0at"}]},{"currency":"LUNA","validators":[{"name":"Allnodes.com ⚡️ Auto-compound (Ledger or Keplr)","reward":"7","address":"terravaloper120ppepaj2lh5vreadx42wnjjznh55vvktp78wk"},{"name":"polkachu.com","reward":"7","address":"terravaloper1rr2g4z2ch4cqwl8s70yj94a5l2vakg0v36nmjh"}]},{"currency":"FET","validators":[{"name":"Binance Staking","reward":"11","address":"fetchvaloper17zr49k6tmcz7eezxgl7x0pfxa9e92h7lv29hd3"}]}]',
      );
    },
    397: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(8)),
        i = r(a(28)),
        s = r(a(388)),
        o = a(19),
        c = a(85),
        l = r(a(73));
      function u(e, t) {
        (f(e, t), t.add(e));
      }
      function d(e, t, a) {
        (f(e, t), t.set(e, a));
      }
      function f(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function h(e, t) {
        return e.get(m(e, t));
      }
      function p(e, t, a) {
        return (e.set(m(e, t), a), a);
      }
      function m(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const g = (e) => `Probably ${e} doesn't have such validator yet\n`,
        y = (e) => {
          var t, a, r, f;
          return (
            (t = new WeakMap()),
            (a = new WeakMap()),
            (r = new WeakMap()),
            (f = new WeakSet()),
            class extends e {
              constructor(e) {
                (super(e),
                  u(this, f),
                  d(this, t, void 0),
                  d(this, a, void 0),
                  d(this, r, void 0),
                  p(a, this, []),
                  p(t, this, {}),
                  m(f, this, y).call(this),
                  n.default.register(this.getPredefineValidatorsConfigName()));
              }
              get balances() {
                return h(t, this);
              }
              get predefinedValidators() {
                return h(a, this);
              }
              defaultAmount() {
                return new l.default("0", this);
              }
              setBalances(e) {
                p(t, this, e);
                const { topic: a, payload: r } = (0,
                c.STAKING_BALANCES_UPDATED)(this.id, this.balances);
                (m(f, this, b).call(this, r), this.eventEmitter.emit(a, r));
              }
              isStakingSupported() {
                return !0;
              }
              isRedelegationSupported() {
                return !1;
              }
              async makeStakingInfoStruct(e) {
                let {
                  staked: t = this.defaultAmount(),
                  unstaking: a = this.defaultAmount(),
                  delegatedVotes: r = this.defaultAmount(),
                  availableVotes: n = this.defaultAmount(),
                  pendingWithdrawals: i = this.defaultAmount(),
                  availableWithdrawals: s = this.defaultAmount(),
                  availableForUnstake: o = this.defaultAmount(),
                  rewards: c = this.defaultAmount(),
                  frozenVotes: u = this.defaultAmount(),
                  frozenEnergy: d = this.defaultAmount(),
                  validators: f = {},
                  additional: h = {},
                } = void 0 === e ? {} : e;
                return {
                  total: this.calculateTotal({
                    balance: new l.default(this.balance || "0", this),
                    staked: t,
                    unstaking: a,
                    rewards: c,
                    availableWithdrawals: s,
                    frozenVotes: u,
                    frozenEnergy: d,
                  }),
                  availableForStake: await this.calculateAvailableForStake({
                    balance: new l.default(this.balance || "0", this),
                    staked: t,
                    unstaking: a,
                    rewards: c,
                    frozenVotes: u,
                    frozenEnergy: d,
                    availableVotes: n,
                  }),
                  availableForUnstake: o,
                  staked: t,
                  unstaking: a,
                  delegatedVotes: r,
                  availableVotes: n,
                  frozenVotes: u,
                  frozenEnergy: d,
                  pendingWithdrawals: i,
                  availableWithdrawals: s,
                  rewards: c,
                  validators: f,
                  additional: h,
                };
              }
              fetchStakingInfo() {
                return this.getProvider("staking").fetchStakingInfo(
                  this.address,
                );
              }
              async getStakingInfo() {
                const e = await this.fetchStakingInfo();
                return (
                  this.setBalances(await this.makeStakingInfoStruct(e)),
                  h(t, this)
                );
              }
              calculateTotal(e) {
                let {
                  balance: t,
                  staked: a,
                  unstaking: r,
                  availableWithdrawals: n,
                  pendingWithdrawals: i,
                  rewards: s,
                } = e;
                throw new o.UndeclaredAbstractMethodError(
                  "calculateTotal",
                  this,
                );
              }
              async calculateAvailableForStake(e) {
                let { balance: t, staked: a, unstaking: r } = e;
                throw new o.UndeclaredAbstractMethodError(
                  "calculateAvailableForStake",
                  this,
                );
              }
              calculateAvailableForUnstake() {
                throw new o.UndeclaredAbstractMethodError(
                  "calculateAvailableForUnstake",
                  this,
                );
              }
              calculateStakedAmount() {
                throw new o.UndeclaredAbstractMethodError(
                  "calculateStakedAmount",
                  this,
                );
              }
              calculateUnstakingAmount() {
                throw new o.UndeclaredAbstractMethodError(
                  "calculateUnstakingAmount",
                  this,
                );
              }
              calculateAvailableWithdrawalsAmount() {
                throw new o.UndeclaredAbstractMethodError(
                  "calculateAvailableWithdrawalsAmount",
                  this,
                );
              }
              calculatePendingWithdrawalsAmount() {
                throw new o.UndeclaredAbstractMethodError(
                  "calculatePendingWithdrawalsAmount",
                  this,
                );
              }
              calculateRewards() {
                throw new o.UndeclaredAbstractMethodError(
                  "calculateRewards",
                  this,
                );
              }
              getValidators() {
                return h(t, this).validators;
              }
              getTotalBalance() {
                return h(t, this).total;
              }
              getAvailableBalance() {
                return h(t, this).availableForStake;
              }
              getAvailableForUnstakeBalance() {
                return h(t, this).availableForUnstake;
              }
              getStakedBalance(e) {
                return m(f, this, T).call(this, "staked", e);
              }
              getUnstakingBalance(e) {
                return m(f, this, T).call(this, "unstaking", e);
              }
              getRewards(e) {
                return m(f, this, T).call(this, "rewards", e);
              }
              getDelegatedVotes() {
                return h(t, this).delegatedVotes;
              }
              getAvailableVotes() {
                return h(t, this).availableVotes;
              }
              getFrozenVotes() {
                return h(t, this).frozenVotes;
              }
              getFrozenEnergy() {
                return h(t, this).frozenEnergy;
              }
              getPendingWithdrawals(e) {
                return m(f, this, T).call(this, "pendingWithdrawals", e);
              }
              getAvailableWithdrawals(e) {
                return m(f, this, T).call(this, "availableWithdrawals", e);
              }
              getUserValidators(e) {
                return this.getProvider("staking").getUserValidators(e);
              }
              getAdditionalInfo() {
                return m(f, this, T).call(this, "additional");
              }
              async getPredefinedValidators() {
                if (h(a, this).length > 0) return h(a, this);
                const e = await n.default
                  .get(this.getPredefineValidatorsConfigName())
                  .catch((e) => i.default.error({ instance: this, error: e }));
                p(
                  a,
                  this,
                  null !== e && void 0 !== e ? e : this.getDefaultValidators(),
                );
                const { topic: t, payload: r } = (0,
                c.STAKING_PREDEFINED_VALIDATORS_UPDATED)(this.id, h(a, this));
                return (this.eventEmitter.emit(t, r), h(a, this));
              }
              getDefaultValidators() {
                var e;
                const t = s.default.find((e) => {
                  let { currency: t } = e;
                  return t === this.ticker;
                });
                return null !==
                  (e = null === t || void 0 === t ? void 0 : t.validators) &&
                  void 0 !== e
                  ? e
                  : [];
              }
              getPredefineValidatorsConfigIdentifier() {
                return this.ticker;
              }
              getPredefineValidatorsConfigName() {
                return (
                  "stake_validators_" +
                  this.getPredefineValidatorsConfigIdentifier().toLowerCase()
                );
              }
            }
          );
          async function y() {
            const { topic: e } = (0, c.STAKING_BALANCES_CACHE)(this.id);
            try {
              const t = localStorage.getItem(e);
              return this.setBalances(
                t
                  ? m(f, this, k).call(this, JSON.parse(t))
                  : await this.makeStakingInfoStruct(),
              );
            } catch (t) {
              return (
                i.default.error({ instance: this, error: t }),
                this.setBalances(await this.makeStakingInfoStruct())
              );
            }
          }
          function b(e) {
            const { topic: t, payload: a } = (0, c.STAKING_BALANCES_CACHE)(
              this.id,
              e,
            );
            localStorage.setItem(t, JSON.stringify(a));
          }
          function w(e) {
            try {
              return new l.default(e, this);
            } catch (t) {
              throw new Error(
                `${this}: \`transformValidatorsObjectFromJSON\`: Unable to transform value: ${e}`,
              );
            }
          }
          function v(e) {
            return Object.entries(e).reduce((e, t) => {
              let [a, r] = t;
              return (
                (e[a] = Object.entries(r).reduce((e, t) => {
                  let [a, r] = t;
                  if (["address", "contract", "owner"].includes(a)) e[a] = r;
                  else
                    try {
                      e[a] = m(f, this, w).call(this, r);
                    } catch (n) {
                      throw new Error(`${n.message}, key: ${a}`);
                    }
                  return e;
                }, {})),
                e
              );
            }, {});
          }
          function k(e) {
            return (
              void 0 === e && (e = {}),
              Object.entries(e).reduce((e, t) => {
                let [a, r] = t;
                if ("additional" === a)
                  (Object.entries(r).forEach((e) => {
                    let [t, a] = e;
                    "frozenVotesV1" === t &&
                      (r[t] = m(f, this, w).call(this, a));
                  }),
                    (e[a] = r));
                else if ("validators" === a) e[a] = m(f, this, v).call(this, r);
                else
                  try {
                    e[a] = m(f, this, w).call(this, r);
                  } catch (n) {
                    throw new Error(`${n.message}, key: ${a}`);
                  }
                return e;
              }, {})
            );
          }
          function T(e, a) {
            if (a)
              try {
                return h(t, this).validators[a][e];
              } catch (r) {
                return (console.warn(g(this.ticker, e, a), r), "0");
              }
            return h(t, this)[e];
          }
        };
      t.default = y;
    },
    438: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AtomicRaki", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "CoinMarketCap", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "CryptoCompare", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }));
      var n = r(a(1141)),
        i = r(a(1143)),
        s = r(a(1145));
    },
    439: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(a(14)),
        i = a(4),
        s = r(a(440)),
        o = r(a(1142));
      class CryptoCompareLikeRatesProvider extends s.default {
        constructor(e) {
          (super(o.default), (this.baseUrl = e));
        }
        convert(e, t) {
          return e
            .map((e) => {
              let { RAW: a } = e;
              return Object.keys(a)
                .map((e) => {
                  const r = a[e][t];
                  if (r)
                    return {
                      rate: r.PRICE || 0,
                      change: r.CHANGEPCT24HOUR || 0,
                      volume: r.TOTALVOLUME24HTO || 0,
                      supply: r.SUPPLY || 0,
                      marketCap: r.MKTCAP || 0,
                      ticker: e,
                    };
                })
                .filter((e) => void 0 !== e);
            })
            .flat(1);
        }
        async fetch(e, t) {
          try {
            const a = 1e3,
              r = await Promise.all(
                (0, i.chunkString)(e.join(","), a).map((e) =>
                  (0, n.default)({
                    url: `${this.baseUrl}/pricemultifull?tsyms=${t}&fsyms=${e.toString()}`,
                    method: "get",
                  }),
                ),
              );
            return r.map((e) => {
              let { data: t } = e;
              return t;
            });
          } catch (a) {
            console.warn("Fetch rates error", a);
          }
          return [];
        }
        async getTargetTickersMap(e) {
          return e.reduce((e, t) => {
            let { id: a, ticker: r } = t;
            return Object.assign({ [a]: this.getTargetTicker(r) }, e);
          }, {});
        }
        async getTargetTickers(e, t) {
          const a = await super.getTargetTickers(e);
          return (a.includes(t) || a.push(t), a);
        }
      }
      t.default = CryptoCompareLikeRatesProvider;
    },
    440: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      class RatesProvider {
        constructor(e) {
          this.aliases = e;
        }
        convert(e) {
          return e;
        }
        async fetch() {
          return [];
        }
        async get(e, t) {
          const a = await this.getTargetTickers(e, t);
          if (0 === a.length) return [];
          const r = await this.fetch(a, t);
          return this.convert(r, t);
        }
        getTargetTicker(e) {
          var t;
          return null !== (t = this.aliases[e]) && void 0 !== t ? t : e;
        }
        async getTargetTickersMap() {
          return {};
        }
        async getTargetTickers(e) {
          return Object.values(await this.getTargetTickersMap(e));
        }
      }
      t.default = RatesProvider;
    },
    45: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, "LIQUID_DELEGATOR_ABI", function () {
          return l;
        }),
        a.d(t, "ERC20_ABI", function () {
          return c;
        }),
        a.d(t, "DEPOSIT_ABI", function () {
          return u;
        }),
        a.d(t, "StakingError", function () {
          return StakingError;
        }),
        a.d(t, "TransactionBuilderError", function () {
          return TransactionBuilderError;
        }),
        a.d(t, "LiquidStakePoolError", function () {
          return LiquidStakePoolError;
        }),
        a.d(t, "ContractReaderError", function () {
          return ContractReaderError;
        }));
      const r = [
          {
            inputs: [],
            name: "getFutureTotalStake",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawalPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        n = [
          {
            inputs: [],
            name: "stake",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "shares", type: "uint256" },
            ],
            name: "unstake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "getPendingClaims",
            outputs: [
              {
                internalType: "uint256[2][]",
                name: "claims",
                type: "uint256[2][]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getMinDelegation",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getCommission",
            outputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getStake",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getClaimable",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        i = [
          {
            inputs: [],
            name: "getLST",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getPrice",
            outputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        s = [
          {
            inputs: [],
            name: "getDelegatedAmount",
            outputs: [{ type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "rewards",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getDelegatedTotal",
            outputs: [
              { internalType: "uint256", name: "result", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawAllRewards",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "stakeRewards",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        o = [...i, ...n],
        c = [
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        l = o,
        u = r;
      class StakingError extends Error {
        constructor(e, t, a, r) {
          (super(e),
            (this.code = t),
            (this.operation = a),
            (this.originalError = r),
            (this.name = "StakingError"));
        }
      }
      class TransactionBuilderError extends Error {
        constructor(e, t, a, r) {
          (super(e),
            (this.code = t),
            (this.operation = a),
            (this.originalError = r),
            (this.name = "TransactionBuilderError"));
        }
      }
      class LiquidStakePoolError extends Error {
        constructor(e, t, a, r) {
          (super(e),
            (this.code = t),
            (this.operation = a),
            (this.originalError = r),
            (this.name = "LiquidStakePoolError"));
        }
      }
      class ContractReaderError extends Error {
        constructor(e, t, a, r) {
          (super(e),
            (this.code = t),
            (this.operation = a),
            (this.originalError = r),
            (this.name = "ContractReaderError"));
        }
      }
    },
    675: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.filtersAndGroupsConfig = void 0));
      var n = r(a(8)),
        i = a(74),
        s = r(a(1988)),
        o = a(4);
      const c = (e, t) => e.toLowerCase() === t.toLowerCase();
      let l = s.default,
        u = null;
      async function d() {
        try {
          l = await n.default.get(i.ConfigKey.FiltersAndGroups);
        } catch (e) {
          (console.warn(
            `Could not load "${i.ConfigKey.FiltersAndGroups}" config, using fallback`,
          ),
            console.error(e));
        }
      }
      function f(e) {
        return "string" === typeof e
          ? e
          : e.contract && e.ticker && e.network
            ? (0, o.getTokenId)(e)
            : e.ticker
              ? e.ticker
              : null;
      }
      t.filtersAndGroupsConfig = {
        load() {
          return (u || (u = d()), u);
        },
        getGroups() {
          var e, t;
          return null !==
            (e =
              null === (t = l.groups) || void 0 === t
                ? void 0
                : t.map((e) => ({
                    name: e.name,
                    coinIds: e.coins.map((e) => f(e)).filter((e) => null !== e),
                  }))) && void 0 !== e
            ? e
            : [];
        },
        getFilterNames() {
          var e, t;
          return null !==
            (e =
              null === (t = l.filters) || void 0 === t
                ? void 0
                : t.map((e) => {
                    let { name: t } = e;
                    return t;
                  })) && void 0 !== e
            ? e
            : [];
        },
        getCoinsForFilter(e) {
          var t;
          const a = l.filters.find((t) => {
            let { name: a } = t;
            return c(a, e);
          });
          return null !==
            (t =
              null === a || void 0 === a ? void 0 : a.coins.map((e) => f(e))) &&
            void 0 !== t
            ? t
            : [];
        },
      };
    },
    679: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, "UtmService", function () {
          return UtmService;
        }),
        a.d(t, "utmService", function () {
          return T;
        }));
      var r = a(14),
        n = a.n(r),
        i = a(37),
        s = a.n(i),
        o = a(26),
        c = a.n(o),
        l = a(35),
        u = Object.defineProperty,
        d = Object.defineProperties,
        f = Object.getOwnPropertyDescriptors,
        h = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        g = (e, t, a) =>
          t in e
            ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        y = (e, t) => {
          for (var a in t || (t = {})) p.call(t, a) && g(e, a, t[a]);
          if (h) for (var a of h(t)) m.call(t, a) && g(e, a, t[a]);
          return e;
        },
        b = (e, t) => d(e, f(t)),
        w = (e, t, a) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  o(a.next(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) => {
                try {
                  o(a.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              o = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
            o((a = a.apply(e, t)).next());
          });
      const v = "https://apollo.atomicwallet.io",
        k = "x-atomic-id";
      class UtmService {
        constructor() {
          c.a.once(l["WALLETS"].NEW_ATOMIC_ID, ({ atomicId: e }) => {
            const t = s.a.getUserAgentHttpHeader();
            this.http = n.a.create({
              baseURL: v,
              headers: b(y({}, t), { [k]: e }),
            });
          });
        }
        saveUtm(e) {
          return w(this, null, function* () {
            try {
              if (!this.http) throw new Error("No axios instance");
              yield this.http.post("/users/utm_data", e);
            } catch (t) {
              return (console.error(t), !1);
            }
            return !0;
          });
        }
      }
      const T = new UtmService();
    },
    68: function (e, t, a) {
      "use strict";
      (function (e) {
        var r = a(0);
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          env: !0,
          Buy: !0,
          Coin: !0,
          Swap: !0,
          Memes: !0,
          MemesTradesActivity: !0,
          Rates: !0,
          Token: !0,
          Logger: !0,
          Amount: !0,
          Emmiter: !0,
          History: !0,
          NftHistory: !0,
          Wallets: !0,
          Reviews: !0,
          Cashback: !0,
          Stakings: !0,
          Explorer: !0,
          SimplexDb: !0,
          ChartData: !0,
          Exchanges: !0,
          FeePlugin: !0,
          Membership: !0,
          Transaction: !0,
          PriceAlerts: !0,
          AboutInfoList: !0,
          ConfigManager: !0,
          inviteFriendsProgram: !0,
          SecureStorage: !0,
          PlatformVersion: !0,
          CoinRestrictionPolicy: !0,
          TxPushSubscription: !0,
          ACTION_BUY: !0,
          ACTION_CLAIM: !0,
          ACTION_EXCHANGE: !0,
          ACTION_FREEZE: !0,
          ACTION_SEND: !0,
          ACTION_STAKE: !0,
          ACTION_UNSTAKE: !0,
          ACTION_VOTE: !0,
          ACTION_WITHDRAW: !0,
          submitActivityRequest: !0,
          notifyService: !0,
          getCachedBalance: !0,
          isBalanceCached: !0,
          setCachedBalance: !0,
          TX_STAT_TYPES: !0,
          banner: !0,
          CoinFeature: !0,
          exchangerV2: !0,
          utmService: !0,
        };
        (Object.defineProperty(t, "ACTION_BUY", {
          enumerable: !0,
          get: function () {
            return D.ACTION_BUY;
          },
        }),
          Object.defineProperty(t, "ACTION_CLAIM", {
            enumerable: !0,
            get: function () {
              return D.ACTION_CLAIM;
            },
          }),
          Object.defineProperty(t, "ACTION_EXCHANGE", {
            enumerable: !0,
            get: function () {
              return D.ACTION_EXCHANGE;
            },
          }),
          Object.defineProperty(t, "ACTION_FREEZE", {
            enumerable: !0,
            get: function () {
              return D.ACTION_FREEZE;
            },
          }),
          Object.defineProperty(t, "ACTION_SEND", {
            enumerable: !0,
            get: function () {
              return D.ACTION_SEND;
            },
          }),
          Object.defineProperty(t, "ACTION_STAKE", {
            enumerable: !0,
            get: function () {
              return D.ACTION_STAKE;
            },
          }),
          Object.defineProperty(t, "ACTION_UNSTAKE", {
            enumerable: !0,
            get: function () {
              return D.ACTION_UNSTAKE;
            },
          }),
          Object.defineProperty(t, "ACTION_VOTE", {
            enumerable: !0,
            get: function () {
              return D.ACTION_VOTE;
            },
          }),
          Object.defineProperty(t, "ACTION_WITHDRAW", {
            enumerable: !0,
            get: function () {
              return D.ACTION_WITHDRAW;
            },
          }),
          Object.defineProperty(t, "AboutInfoList", {
            enumerable: !0,
            get: function () {
              return N.default;
            },
          }),
          Object.defineProperty(t, "Amount", {
            enumerable: !0,
            get: function () {
              return g.default;
            },
          }),
          Object.defineProperty(t, "Buy", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(t, "Cashback", {
            enumerable: !0,
            get: function () {
              return T.default;
            },
          }),
          Object.defineProperty(t, "ChartData", {
            enumerable: !0,
            get: function () {
              return C.default;
            },
          }),
          Object.defineProperty(t, "Coin", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(t, "CoinFeature", {
            enumerable: !0,
            get: function () {
              return X.CoinFeature;
            },
          }),
          Object.defineProperty(t, "CoinRestrictionPolicy", {
            enumerable: !0,
            get: function () {
              return B.default;
            },
          }),
          Object.defineProperty(t, "ConfigManager", {
            enumerable: !0,
            get: function () {
              return x.default;
            },
          }),
          Object.defineProperty(t, "Emmiter", {
            enumerable: !0,
            get: function () {
              return y.default;
            },
          }),
          Object.defineProperty(t, "Exchanges", {
            enumerable: !0,
            get: function () {
              return _.default;
            },
          }),
          Object.defineProperty(t, "Explorer", {
            enumerable: !0,
            get: function () {
              return E.default;
            },
          }),
          Object.defineProperty(t, "FeePlugin", {
            enumerable: !0,
            get: function () {
              return R.default;
            },
          }),
          Object.defineProperty(t, "History", {
            enumerable: !0,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(t, "Logger", {
            enumerable: !0,
            get: function () {
              return m.default;
            },
          }),
          Object.defineProperty(t, "Membership", {
            enumerable: !0,
            get: function () {
              return P.default;
            },
          }),
          Object.defineProperty(t, "Memes", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(t, "MemesTradesActivity", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(t, "NftHistory", {
            enumerable: !0,
            get: function () {
              return w.default;
            },
          }),
          Object.defineProperty(t, "PlatformVersion", {
            enumerable: !0,
            get: function () {
              return q.default;
            },
          }),
          Object.defineProperty(t, "PriceAlerts", {
            enumerable: !0,
            get: function () {
              return I.default;
            },
          }),
          Object.defineProperty(t, "Rates", {
            enumerable: !0,
            get: function () {
              return h.default;
            },
          }),
          Object.defineProperty(t, "Reviews", {
            enumerable: !0,
            get: function () {
              return k.default;
            },
          }),
          Object.defineProperty(t, "SecureStorage", {
            enumerable: !0,
            get: function () {
              return L.default;
            },
          }),
          Object.defineProperty(t, "SimplexDb", {
            enumerable: !0,
            get: function () {
              return S.default;
            },
          }),
          Object.defineProperty(t, "Stakings", {
            enumerable: !0,
            get: function () {
              return A.default;
            },
          }),
          Object.defineProperty(t, "Swap", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(t, "TX_STAT_TYPES", {
            enumerable: !0,
            get: function () {
              return G.TX_STAT_TYPES;
            },
          }),
          Object.defineProperty(t, "Token", {
            enumerable: !0,
            get: function () {
              return p.default;
            },
          }),
          Object.defineProperty(t, "Transaction", {
            enumerable: !0,
            get: function () {
              return O.default;
            },
          }),
          Object.defineProperty(t, "TxPushSubscription", {
            enumerable: !0,
            get: function () {
              return F.default;
            },
          }),
          Object.defineProperty(t, "Wallets", {
            enumerable: !0,
            get: function () {
              return v.default;
            },
          }),
          Object.defineProperty(t, "banner", {
            enumerable: !0,
            get: function () {
              return K.banner;
            },
          }),
          (t.default = void 0),
          Object.defineProperty(t, "env", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(t, "exchangerV2", {
            enumerable: !0,
            get: function () {
              return Z.exchangerV2;
            },
          }),
          Object.defineProperty(t, "getCachedBalance", {
            enumerable: !0,
            get: function () {
              return H.getCachedBalance;
            },
          }),
          Object.defineProperty(t, "inviteFriendsProgram", {
            enumerable: !0,
            get: function () {
              return j.inviteFriendsProgram;
            },
          }),
          Object.defineProperty(t, "isBalanceCached", {
            enumerable: !0,
            get: function () {
              return H.isBalanceCached;
            },
          }),
          Object.defineProperty(t, "notifyService", {
            enumerable: !0,
            get: function () {
              return V.notifyService;
            },
          }),
          Object.defineProperty(t, "setCachedBalance", {
            enumerable: !0,
            get: function () {
              return H.setCachedBalance;
            },
          }),
          Object.defineProperty(t, "submitActivityRequest", {
            enumerable: !0,
            get: function () {
              return M.default;
            },
          }),
          Object.defineProperty(t, "utmService", {
            enumerable: !0,
            get: function () {
              return $.utmService;
            },
          }));
        var i = r(a(942)),
          s = a(35);
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
        var o = r(a(434)),
          c = r(a(256)),
          l = r(a(230)),
          u = r(a(2014)),
          d = r(a(79)),
          f = r(a(332)),
          h = r(a(102)),
          p = r(a(21)),
          m = r(a(28)),
          g = r(a(73)),
          y = r(a(26)),
          b = r(a(81)),
          w = r(a(258)),
          v = r(a(124)),
          k = r(a(458)),
          T = r(a(437)),
          A = r(a(840)),
          E = r(a(129)),
          S = r(a(2019)),
          C = r(a(248)),
          _ = r(a(2020)),
          R = r(a(2653)),
          P = r(a(2031)),
          O = r(a(80)),
          I = r(a(2032)),
          N = r(a(338)),
          x = r(a(8)),
          j = a(2033),
          L = r(a(676)),
          q = r(a(37)),
          B = r(a(257)),
          F = r(a(2040)),
          D = a(681),
          M = r(a(436)),
          z = a(27);
        Object.keys(z).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(n, e) ||
              (e in t && t[e] === z[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return z[e];
                },
              }));
        });
        var U,
          W,
          V = a(2041),
          H = a(4),
          G = a(331),
          K = a(790),
          X = a(127),
          Z = a(193),
          $ = a(679);
        t.default = i.default;
        (null !== (U = e) &&
          void 0 !== U &&
          null !== (W = U.env) &&
          void 0 !== W &&
          W.MANUAL_CORE_BOOTSTRAP_ENABLED) ||
          (0, i.default)();
      }).call(this, a(18));
    },
    813: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.erc721StandardTest =
          t.erc1155StandardTest =
          t.default =
          t.UNRECOGNIZED_TOKEN_STANDARD =
          t.ERC721_TOKEN_STANDARD =
          t.ERC1155_TOKEN_STANDARD =
            void 0));
      var r = a(160);
      const n = "Ethereum",
        i = "BNB Smart Chain",
        s = "Polygon",
        o = "Avalanche",
        c = "Fantom",
        l = "Arbitrum",
        u = (e) => {
          switch (e) {
            case "ETH":
              return n;
            case "BSC":
              return i;
            case "MATIC":
              return s;
            case "AVAX":
              return o;
            case "FTM":
              return c;
            case "ARB":
              return l;
            default:
              return;
          }
        };
      ((t.ERC721_TOKEN_STANDARD = "ERC-721"),
        (t.ERC1155_TOKEN_STANDARD = "ERC-1155"),
        (t.UNRECOGNIZED_TOKEN_STANDARD = Symbol("UNRECOGNIZED_TOKEN_STANDARD")),
        (t.erc721StandardTest = /^ERC.?721$/i),
        (t.erc1155StandardTest = /^ERC.?1155$/i));
      class ETHNftToken extends r.NftToken {
        constructor(e, t, a, r, n, i, s) {
          (void 0 === i && (i = void 0), super(e, t, a, u(a), r, n, i, s));
        }
      }
      t.default = ETHNftToken;
    },
    823: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(27),
        i = a(19),
        s = r(a(258));
      const o = (e) =>
        class extends e {
          constructor() {
            if ((super(...arguments), "function" !== typeof super.getProvider))
              throw new i.InternalError({
                type: n.INTERNAL_ERROR,
                instance: this,
              });
          }
          getNftInfoUrl(e, t) {
            return this.getProvider("nft-mint-url").makeNftInfoUrl(e, t);
          }
          async getNftList(e) {
            return this.getProvider("nft-get").fetchNftList(this, e);
          }
          async transferNft(e, t, a, r) {
            let o, c;
            void 0 === r && (r = {});
            try {
              const a = await s.default.getOneOptimistic(this, e, t);
              o = a.tokenStandard;
            } catch (l) {
              throw (
                console.warn(l),
                new i.InternalError({
                  type: n.INTERNAL_ERROR,
                  error: l,
                  instance: this,
                })
              );
            }
            try {
              c = await this.getProvider("nft-send").sendNft(
                this,
                a,
                e,
                t,
                o,
                r,
              );
            } catch (l) {
              throw (
                console.warn(l),
                new i.ExternalError({
                  type: n.EXTERNAL_ERROR,
                  error: l,
                  instance: this,
                })
              );
            }
            try {
              await s.default.delete(this, e, t);
            } catch (l) {
              throw (
                console.warn(l),
                new i.InternalError({
                  type: n.INTERNAL_ERROR,
                  error: l,
                  instance: this,
                })
              );
            }
            return c;
          }
        };
      t.default = o;
    },
  },
]);
