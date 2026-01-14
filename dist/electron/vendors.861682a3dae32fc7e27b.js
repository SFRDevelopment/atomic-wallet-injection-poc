(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [66],
  {
    1261: function (t, e) {
      (function () {
        "use strict";
        for (
          var t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = new Uint8Array(256),
            a = 0;
          a < t.length;
          a++
        )
          n[t.charCodeAt(a)] = a;
        ((e.encode = function (e) {
          var n,
            a = new Uint8Array(e),
            i = a.length,
            r = "";
          for (n = 0; n < i; n += 3)
            ((r += t[a[n] >> 2]),
              (r += t[((3 & a[n]) << 4) | (a[n + 1] >> 4)]),
              (r += t[((15 & a[n + 1]) << 2) | (a[n + 2] >> 6)]),
              (r += t[63 & a[n + 2]]));
          return (
            i % 3 === 2
              ? (r = r.substring(0, r.length - 1) + "=")
              : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
            r
          );
        }),
          (e.decode = function (t) {
            var e,
              a,
              i,
              r,
              s,
              o = 0.75 * t.length,
              u = t.length,
              l = 0;
            "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
            var c = new ArrayBuffer(o),
              p = new Uint8Array(c);
            for (e = 0; e < u; e += 4)
              ((a = n[t.charCodeAt(e)]),
                (i = n[t.charCodeAt(e + 1)]),
                (r = n[t.charCodeAt(e + 2)]),
                (s = n[t.charCodeAt(e + 3)]),
                (p[l++] = (a << 2) | (i >> 4)),
                (p[l++] = ((15 & i) << 4) | (r >> 2)),
                (p[l++] = ((3 & r) << 6) | (63 & s)));
            return c;
          }));
      })();
    },
    1269: function (t, e) {
      function n(t) {
        ((t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0));
      }
      ((t.exports = n),
        (n.prototype.duration = function () {
          var t = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var e = Math.random(),
              n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
          }
          return 0 | Math.min(t, this.max);
        }),
        (n.prototype.reset = function () {
          this.attempts = 0;
        }),
        (n.prototype.setMin = function (t) {
          this.ms = t;
        }),
        (n.prototype.setMax = function (t) {
          this.max = t;
        }),
        (n.prototype.setJitter = function (t) {
          this.jitter = t;
        }));
    },
    1270: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(1271)),
        r = a(n(103)),
        s = a(n(1272));
      function o(t, e) {
        (u(t, e), e.add(t));
      }
      function u(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function l(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      var c = new WeakSet();
      class WalletsInstaller {
        constructor(t, e) {
          (o(this, c),
            (this.config = t.walletConfigs),
            (this.atomicId = t.params.atomicId),
            (this.installCoinHandler = e),
            (this.installTokensPromises = []));
        }
        installCoins() {
          return Promise.allSettled(
            this.config.map((t) =>
              l(c, this, p).call(this, { ...t, atomicId: this.atomicId }),
            ),
          );
        }
        preloadCoinClasses() {
          return Promise.allSettled(
            this.config.map((t) => {
              let { className: e, id: n } = t;
              return i.default[e] && r.default.isActive(n)
                ? i.default[e]()
                : Promise.resolve();
            }),
          );
        }
        installTokens() {
          return Promise.allSettled(this.installTokensPromises);
        }
      }
      async function p(t) {
        const e = i.default[t.className];
        if (e)
          try {
            l(c, this, d).call(this, (await e()).default, t);
          } catch (n) {
            console.error(`[${t.id}] #installCoin Error:`, n);
          }
        else console.warn(`Error installCoin: [${t.id}] importFn is undefined`);
      }
      function d(t, e) {
        this.installTokensPromises.push(
          this.installCoinHandler((0, s.default)(t, e)),
        );
      }
      e.default = WalletsInstaller;
    },
    1272: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = n(403);
      function i(t, e) {
        var n, i, r;
        return "EVM" === e.walletType
          ? (0, a.createEVMCoin)(e)
          : new t({
              id: e.id,
              ticker: e.ticker,
              name: e.name,
              isL2: e.isL2,
              isUseModeratedGasPrice: e.isUseModeratedGasPrice,
              isUseEIP1559: e.isUseEIP1559,
              alias: "atomic",
              features: e.features,
              feeData: e.feeData,
              explorers: e.explorers,
              txWebUrl: e.txWebUrl,
              socket: !!e.socket,
              stakingContract:
                null === (n = e.feeData) || void 0 === n
                  ? void 0
                  : n.stakingContract,
              stakingProxyContract:
                null === (i = e.feeData) || void 0 === i
                  ? void 0
                  : i.stakingProxyContract,
              network: e.network,
              chainId: e.chainId,
              notify: null !== (r = e.notify) && void 0 !== r && r,
              isTestnet: !!e.isTestnet,
              atomicId: e.atomicId,
              prefix: e.prefix,
              denom: e.denom,
              derivation: e.derivation,
              decimal: e.decimal,
            });
      }
      e.default = i;
    },
    1273: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(8)),
        r = a(n(21));
      class FLRToken extends r.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async getFee(t) {
          let { amount: e = 0, isSendAll: n, gasPrice: a, gasLimit: i } = t;
          const r = Number(a.toString()) * Number(this.coefficient),
            s = i || this.gasLimit;
          return new this.BN(s).mul(new this.BN(r));
        }
        getFeeSettings() {
          return i.default.get("eth-gas-price");
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = FLRToken;
    },
    1274: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class BSCToken extends i.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async getFee(t) {
          let { amount: e = 0, isSendAll: n, gasPrice: a, gasLimit: i } = t;
          const r = Number(a.toString()) * Number(this.coefficient),
            s = i || this.gasLimit;
          return new this.BN(s).mul(new this.BN(r));
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = BSCToken;
    },
    1275: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class TRXToken extends i.default {
        async createTransaction(t) {
          let { address: e, amount: n, userFee: a } = t;
          return {
            address: e,
            amount: n,
            contract: this.contract,
            transfer: !0,
            userFee: a,
          };
        }
        getUserTicker() {
          return (
            (-1 !== this.ticker.indexOf("-") && this.ticker.split("-")[1]) ||
            this.ticker
          );
        }
      }
      e.default = TRXToken;
    },
    1276: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class BNBToken extends i.default {
        constructor(t) {
          (super(t), (this.fields.paymentId = !0), (this.balances = {}));
        }
        async availableBalance() {
          return this.balances && this.balances.available
            ? this.balances.available
            : this.divisibleBalance
              ? String(this.divisibleBalance)
              : "0";
        }
        async getInfo() {
          return (
            await this.getBalance(),
            { balance: String(this.balance), transactions: this.transactions }
          );
        }
        async createTransaction(t) {
          let { address: e, amount: n, memo: a } = t;
          return { address: e, amount: n, memo: a, asset: this.ticker };
        }
        async getBalance() {
          return this.balance;
        }
        getUserTicker() {
          return this.ticker.split("-")[0];
        }
      }
      e.default = BNBToken;
    },
    1277: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      function r(t, e, n) {
        (s(t, e), e.set(t, n));
      }
      function s(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function o(t, e) {
        return t.get(l(t, e));
      }
      function u(t, e, n) {
        return (t.set(l(t, e), n), n);
      }
      function l(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      const c = "a9059cbb",
        p = 64,
        d = "60",
        y = 2;
      var f = new WeakMap();
      class VETToken extends i.default {
        constructor() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          (super(...e),
            r(this, f, void 0),
            (this.id = this.ticker),
            (this.fee = d),
            u(f, this, e.parent));
        }
        get feeTicker() {
          return this.ticker;
        }
        get feeWallet() {
          return this;
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async getFee() {
          return new this.BN(this.toMinimalUnit(this.fee));
        }
        async createTransaction(t) {
          let { address: e, amount: n } = t;
          const a = 16,
            i = Number(this.toCurrencyUnit(await this.getFee())),
            r = `0x${c}${this.addLeadingZero(e.substring(y), p)}${this.addLeadingZero(new this.BN(n).toString(a), p)}`;
          return {
            contract: this.contract,
            amount: "0",
            dataToSend: r,
            fee: i,
          };
        }
        async sendTransaction(t) {
          const e = await o(f, this).createTokenTransaction(t);
          return o(f, this).sendTransaction(e);
        }
        async isAvailableForFee() {
          const t = await this.getFee();
          return this.indivisibleBalance.gte(t);
        }
        async availableBalance() {
          const t = await this.getFee(),
            e = new this.BN(this.balance).sub(t);
          return e.lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(e);
        }
        addLeadingZero(t, e) {
          return String(t).padStart(e, "0");
        }
      }
      e.default = VETToken;
    },
    1278: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class ZILToken extends i.default {
        async createTransaction(t) {
          let { address: e, amount: n } = t;
          return { address: e, amount: n, contract: this.contract };
        }
      }
      e.default = ZILToken;
    },
    1279: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(11)),
        r = a(n(21));
      const s = "150000";
      class MATICToken extends r.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = s),
            (this.coefficient = 1),
            (this.BN = i.default));
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async getFee(t) {
          let { gasPrice: e, gasLimit: n } = t;
          const a = new this.BN(e.toString()).mul(
              new this.BN(this.coefficient),
            ),
            i = n || this.gasLimit;
          return new this.BN(i).mul(new this.BN(a));
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = MATICToken;
    },
    1280: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(11)),
        r = a(n(21));
      function s(t, e, n) {
        (o(t, e), e.set(t, n));
      }
      function o(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function u(t, e) {
        return t.get(c(t, e));
      }
      function l(t, e, n) {
        return (t.set(c(t, e), n), n);
      }
      function c(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      var p = new WeakMap();
      class THETAToken extends r.default {
        constructor(t) {
          (super(t),
            s(this, p, void 0),
            (this.id = this.ticker),
            l(p, this, t.parent));
        }
        get feeTicker() {
          return this.ticker;
        }
        get feeWallet() {
          return this;
        }
        async createTransaction(t) {
          let { address: e, amount: n, userFee: a } = t;
          return {
            address: e,
            amount: n,
            contract: this.contract,
            ticker: this.ticker,
            userFee: a || (await this.getFee()),
          };
        }
        async sendTransaction(t) {
          const e = await u(p, this).createTransaction(t);
          return u(p, this).sendTransaction(e);
        }
        async availableBalance(t) {
          return u(p, this).getAvailableBalanceForWallet(this, t);
        }
        async isAvailableForSend(t, e) {
          const n = await this.availableBalance(this.toMinimalUnit(e));
          return new i.default(this.toMinimalUnit(t)).lte(
            new i.default(this.toMinimalUnit(n)),
          );
        }
        async isAvailableForFee(t) {
          return u(p, this).hasEnoughFeeBalance(t);
        }
      }
      e.default = THETAToken;
    },
    1281: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(74),
        r = a(n(8)),
        s = a(n(21));
      class FTMToken extends s.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async getFee(t) {
          let { amount: e = 0, isSendAll: n, gasPrice: a, gasLimit: i } = t;
          const r = Number(a.toString()) * Number(this.coefficient),
            s = i || this.gasLimit;
          return new this.BN(s).mul(new this.BN(r));
        }
        getFeeSettings() {
          return r.default.get(i.ConfigKey.FantomGasPrice);
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = FTMToken;
    },
    14: function (t, e, n) {
      t.exports = n(943);
    },
    157: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "isPrototypePollutionKey", function () {
          return i;
        }));
      const a = ["__proto__", "constructor", "prototype"];
      function i(t) {
        return a.includes(t);
      }
    },
    1770: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(1771));
      e.default = { ERC20: i.default };
    },
    1771: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(293)),
        r = a(n(1772)),
        s = a(n(873)),
        o = a(n(874)),
        u = a(n(596));
      e.default = {
        standard: {
          methods: {
            approve: { name: "approve", params: ["address", "amount"] },
            increaseAllowance: {
              name: "increaseAllowance",
              params: ["address", "amount"],
            },
          },
          abi: i.default,
        },
        "0xf98864DA30a5bd657B13e70A57f5718aBf7BAB31": {
          methods: {
            stake: {
              name: "buyVoucher",
              params: [
                "address",
                "amount",
                "heimdallFee",
                "accept",
                "signerPubkey",
              ],
            },
            abi: u.default,
          },
        },
        "0x85627d71921AE25769f5370E482AdA5E1e418d37": {
          methods: {
            getUnclaimedEpochs: {
              name: "getEpochsWithUnclaimedRewards",
              params: ["address"],
            },
            getRewardsState: {
              name: "getStateOfRewards",
              params: ["address", "epoch"],
            },
            claim: {
              name: "claim",
              params: ["address", "address", "epochs", "wrap"],
            },
          },
          abi: o.default,
        },
        "0x1d80c49bbbcd1c0911346656b529df9e5c2f783d": {
          methods: {
            stake: { name: "deposit", params: [] },
            unstake: { name: "withdraw", params: ["amount"] },
            delegate: { name: "delegate", params: ["address", "bips"] },
            undelegate: { name: "undelegateAll", params: [] },
          },
          abi: s.default,
        },
        "0xae7ab96520de3a18e5e111b5eaab095312d7fe84": {
          methods: { stake: { name: "submit", params: ["address"] } },
          abi: r.default,
        },
      };
    },
    1772: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = [
        {
          constant: !0,
          name: "submit",
          inputs: [{ name: "_referral", type: "address" }],
          outputs: [{ name: "shares", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    1773: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = [
        {
          inputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousRootChain",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newRootChain",
              type: "address",
            },
          ],
          name: "RootChainChanged",
          type: "event",
        },
        {
          constant: !0,
          inputs: [],
          name: "CHECKPOINT_REWARD",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "NFTContract",
          outputs: [
            { internalType: "contract StakingNFT", name: "", type: "address" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "NFTCounter",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "WITHDRAWAL_DELAY",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "accountStateRoot",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "auctionPeriod",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "newRootChain", type: "address" },
          ],
          name: "changeRootChain",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "checkPointBlockInterval",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "blockInterval", type: "uint256" },
            { internalType: "bytes32", name: "voteHash", type: "bytes32" },
            { internalType: "bytes32", name: "stateRoot", type: "bytes32" },
            { internalType: "address", name: "proposer", type: "address" },
            {
              internalType: "uint256[3][]",
              name: "sigs",
              type: "uint256[3][]",
            },
          ],
          name: "checkSignatures",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "checkpointRewardDelta",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "accumFeeAmount",
              type: "uint256",
            },
            { internalType: "uint256", name: "index", type: "uint256" },
            { internalType: "bytes", name: "proof", type: "bytes" },
          ],
          name: "claimFee",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "heimdallFee", type: "uint256" },
          ],
          name: "confirmAuctionBid",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "currentEpoch",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "currentValidatorSetSize",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "currentValidatorSetTotalStake",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "decreaseValidatorDelegatedAmount",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "delegatedAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "address", name: "delegator", type: "address" },
          ],
          name: "delegationDeposit",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "delegationEnabled",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "delegatorsReward",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "auctionUser", type: "address" },
            { internalType: "uint256", name: "heimdallFee", type: "uint256" },
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "auctionAmount", type: "uint256" },
            { internalType: "bool", name: "acceptDelegation", type: "bool" },
            { internalType: "bytes", name: "signerPubkey", type: "bytes" },
          ],
          name: "dethroneAndStake",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "destination", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "drain",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "address", name: "tokenAddr", type: "address" },
            {
              internalType: "address payable",
              name: "destination",
              type: "address",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "drainValidatorShares",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "dynasty",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "epoch",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "eventsHub",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "extensionCode",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "forceUnstake",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "getRegistry",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "getValidatorContract",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "user", type: "address" }],
          name: "getValidatorId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "governance",
          outputs: [
            { internalType: "contract IGovernance", name: "", type: "address" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "_registry", type: "address" },
            { internalType: "address", name: "_rootchain", type: "address" },
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "address", name: "_NFTContract", type: "address" },
            {
              internalType: "address",
              name: "_stakingLogger",
              type: "address",
            },
            {
              internalType: "address",
              name: "_validatorShareFactory",
              type: "address",
            },
            { internalType: "address", name: "_governance", type: "address" },
            { internalType: "address", name: "_owner", type: "address" },
            {
              internalType: "address",
              name: "_extensionCode",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address[]", name: "_signers", type: "address[]" },
          ],
          name: "insertSigners",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "isOwner",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "isValidator",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "latestSignerUpdateEpoch",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "lock",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "locked",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "logger",
          outputs: [
            { internalType: "contract StakingInfo", name: "", type: "address" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "maxRewardedCheckpoints",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "fromValidatorId",
              type: "uint256",
            },
            { internalType: "uint256", name: "toValidatorId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "migrateDelegation",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "validatorIdFrom",
              type: "uint256",
            },
            { internalType: "uint256", name: "validatorIdTo", type: "uint256" },
          ],
          name: "migrateValidatorsData",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "minDeposit",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "minHeimdallFee",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "prevBlockInterval",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "proposerBonus",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "registry",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "_NFTContract", type: "address" },
            {
              internalType: "address",
              name: "_stakingLogger",
              type: "address",
            },
            {
              internalType: "address",
              name: "_validatorShareFactory",
              type: "address",
            },
            {
              internalType: "address",
              name: "_extensionCode",
              type: "address",
            },
          ],
          name: "reinitialize",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "replacementCoolDown",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bool", name: "stakeRewards", type: "bool" },
          ],
          name: "restake",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "rewardDecreasePerCheckpoint",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "rewardPerStake",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "rootChain",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "_currentEpoch", type: "uint256" },
          ],
          name: "setCurrentEpoch",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [{ internalType: "bool", name: "enabled", type: "bool" }],
          name: "setDelegationEnabled",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
          ],
          name: "setStakingToken",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "signerToValidator",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "signerUpdateLimit",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "signers",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "bytes", name: "_slashingInfoList", type: "bytes" },
          ],
          name: "slash",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "heimdallFee", type: "uint256" },
            { internalType: "bool", name: "acceptDelegation", type: "bool" },
            { internalType: "bytes", name: "signerPubkey", type: "bytes" },
          ],
          name: "stakeFor",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bool", name: "_acceptDelegation", type: "bool" },
            { internalType: "bytes", name: "_signerPubkey", type: "bytes" },
          ],
          name: "startAuction",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "forNCheckpoints",
              type: "uint256",
            },
          ],
          name: "stopAuctions",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "token",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "heimdallFee", type: "uint256" },
          ],
          name: "topUpForFee",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalHeimdallFee",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalRewardsLiquidated",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalStaked",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "user", type: "address" }],
          name: "totalStakedFor",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "address", name: "delegator", type: "address" },
          ],
          name: "transferFunds",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "unjail",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "unlock",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "unstake",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "unstakeClaim",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "_blocks", type: "uint256" },
          ],
          name: "updateCheckPointBlockInterval",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "newReward", type: "uint256" },
          ],
          name: "updateCheckpointReward",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "_rewardDecreasePerCheckpoint",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxRewardedCheckpoints",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_checkpointRewardDelta",
              type: "uint256",
            },
          ],
          name: "updateCheckpointRewardParams",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            {
              internalType: "uint256",
              name: "newCommissionRate",
              type: "uint256",
            },
          ],
          name: "updateCommissionRate",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "newDynasty", type: "uint256" },
          ],
          name: "updateDynastyValue",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "_minDeposit", type: "uint256" },
            {
              internalType: "uint256",
              name: "_minHeimdallFee",
              type: "uint256",
            },
          ],
          name: "updateMinAmounts",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "newProposerBonus",
              type: "uint256",
            },
          ],
          name: "updateProposerBonus",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "bytes", name: "signerPubkey", type: "bytes" },
          ],
          name: "updateSigner",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "_limit", type: "uint256" },
          ],
          name: "updateSignerUpdateLimit",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            {
              internalType: "address",
              name: "newContractAddress",
              type: "address",
            },
          ],
          name: "updateValidatorContractAddress",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [{ internalType: "bool", name: "delegation", type: "bool" }],
          name: "updateValidatorDelegation",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
            { internalType: "int256", name: "amount", type: "int256" },
          ],
          name: "updateValidatorState",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "newThreshold", type: "uint256" },
          ],
          name: "updateValidatorThreshold",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "userFeeExit",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "validatorAuction",
          outputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "startEpoch", type: "uint256" },
            { internalType: "address", name: "user", type: "address" },
            { internalType: "bool", name: "acceptDelegation", type: "bool" },
            { internalType: "bytes", name: "signerPubkey", type: "bytes" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "validatorReward",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "validatorShareFactory",
          outputs: [
            {
              internalType: "contract ValidatorShareFactory",
              name: "",
              type: "address",
            },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "validatorStake",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "validatorState",
          outputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "stakerCount", type: "uint256" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "validatorStateChanges",
          outputs: [
            { internalType: "int256", name: "amount", type: "int256" },
            { internalType: "int256", name: "stakerCount", type: "int256" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "validatorThreshold",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "validators",
          outputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "reward", type: "uint256" },
            {
              internalType: "uint256",
              name: "activationEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deactivationEpoch",
              type: "uint256",
            },
            { internalType: "uint256", name: "jailTime", type: "uint256" },
            { internalType: "address", name: "signer", type: "address" },
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "enum StakeManagerStorage.Status",
              name: "status",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "commissionRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastCommissionUpdate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "delegatorsReward",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "delegatedAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initialRewardPerStake",
              type: "uint256",
            },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "withdrawDelegatorsReward",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "validatorId", type: "uint256" },
          ],
          name: "withdrawRewards",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "withdrawalDelay",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    1774: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class OPToken extends i.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = OPToken;
    },
    1775: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class ARBToken extends i.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getInfo() {
          return {
            balance: String(this.balance),
            transactions: this.transactions,
          };
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = ARBToken;
    },
    1776: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      class EVMToken extends i.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
      }
      e.default = EVMToken;
    },
    1777: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      function r(t, e, n) {
        (s(t, e), e.set(t, n));
      }
      function s(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function o(t, e) {
        return t.get(l(t, e));
      }
      function u(t, e, n) {
        return (t.set(l(t, e), n), n);
      }
      function l(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      var c = new WeakMap();
      class ONTToken extends i.default {
        constructor(t) {
          (super(t),
            r(this, c, void 0),
            (this.id = this.ticker),
            u(c, this, t.parent));
        }
        async createTransaction(t) {
          let { address: e, amount: n } = t;
          return { address: e, amount: n, asset: this.ticker };
        }
        async sendTransaction(t) {
          const e = await o(c, this).createTransaction(t);
          return o(c, this).sendTransaction(e);
        }
        sendRawTransaction(t) {
          return o(c, this).sendTransaction(t);
        }
        getFee() {
          return o(c, this).getFee();
        }
        get feeWallet() {
          return this;
        }
        get feeTicker() {
          return this.ticker;
        }
        isAvailableForFee(t) {
          return o(c, this).isAvailableForFee(t);
        }
        async availableBalance(t) {
          void 0 === t && (t = "0");
          const e = this.balance || "0",
            n = new this.BN(e).sub(new this.BN(t));
          return new this.BN(n).lt(new this.BN(0))
            ? "0"
            : this.toCurrencyUnit(n);
        }
      }
      e.default = ONTToken;
    },
    1778: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      function r(t, e, n) {
        (s(t, e), e.set(t, n));
      }
      function s(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function o(t, e) {
        return t.get(l(t, e));
      }
      function u(t, e, n) {
        return (t.set(l(t, e), n), n);
      }
      function l(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      var c = new WeakMap();
      class NEOToken extends i.default {
        constructor(t) {
          (super(t),
            r(this, c, void 0),
            (this.id = "GAS3"),
            u(c, this, t.parent));
        }
        async createTransaction(t) {
          let { address: e, amount: n } = t;
          return {
            address: e,
            amount: this.toCurrencyUnit(n),
            asset: this.ticker,
          };
        }
        sendRawTransaction(t) {
          return o(c, this).sendTransaction(t);
        }
        getFee() {
          return o(c, this).getFee();
        }
        get feeTicker() {
          return this.ticker;
        }
        get feeWallet() {
          return this;
        }
        isAvailableForFee(t) {
          return o(c, this).isAvailableForFee(t);
        }
      }
      e.default = NEOToken;
    },
    1779: function (t, e, n) {
      "use strict";
      n.r(e);
      var a,
        i,
        r = n(125),
        s = n(21),
        o = (t, e, n) => {
          if (!e.has(t)) throw TypeError("Cannot " + n);
        },
        u = (t, e, n) => (
          o(t, e, "read from private field"),
          n ? n.call(t) : e.get(t)
        ),
        l = (t, e, n) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, n);
        },
        c = (t, e, n, a) => (
          o(t, e, "write to private field"),
          a ? a.call(t, n) : e.set(t, n),
          n
        ),
        p = (t, e, n) =>
          new Promise((a, i) => {
            var r = (t) => {
                try {
                  o(n.next(t));
                } catch (e) {
                  i(e);
                }
              },
              s = (t) => {
                try {
                  o(n.throw(t));
                } catch (e) {
                  i(e);
                }
              },
              o = (t) =>
                t.done ? a(t.value) : Promise.resolve(t.value).then(r, s);
            o((n = n.apply(t, e)).next());
          });
      const d = "solanaWeb3Lib";
      class SOLToken extends s["default"] {
        constructor(t) {
          (super(t),
            l(this, a, void 0),
            l(this, i, ""),
            (this.mint = t.mint),
            c(this, a, t.parent),
            t.balance && (this.balance = t.balance),
            t.imgUri && (this.imgUri = t.imgUri),
            this.loadAddress());
        }
        get address() {
          return u(this, i);
        }
        set address(t) {
          c(this, i, t);
        }
        loadAddress() {
          return p(this, null, function* () {
            var t;
            const { PublicKey: e } = yield u(this, a).loadLib(d),
              n = u(this, a).getProvider("node"),
              i = u(this, a).getProvider("websocket"),
              r =
                null != (t = n.findTokenProgramId(this.mint))
                  ? t
                  : yield n.getAccountOwner(this.mint),
              s = new e("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
            try {
              const t = e.findProgramAddressSync(
                [
                  new e(u(this, a).address).toBuffer(),
                  r.toBuffer(),
                  new e(this.mint).toBuffer(),
                ],
                s,
              )[0];
              ((this.publicKey = t),
                (this.address = t.toString()),
                null == i ||
                  i.connection.onAccountChange(
                    t,
                    (t, e) => this.processAccountChange(t, e, r),
                    { commitment: "confirmed" },
                  ));
            } catch (o) {
              console.error(`SOLToken: "${this.mint}" error:`, o);
            }
          });
        }
        processAccountChange(t, e, n) {
          var a;
          const i = Object(r["unpackAccount"])(this.publicKey, t, n);
          (console.log(
            `SOLToken (${this.mint}, ${this.ticker}): processing processAccountChange, old value: ${null == (a = this.balance) ? void 0 : a.toString()}, new value: ${i.amount}`,
          ),
            (this.balance = i.amount.toString()),
            this.eventEmitter.emit("update", { id: this.id }));
        }
        getInfo() {
          return p(this, null, function* () {
            const t = yield u(this, a).getTokenInfo({ mint: this.mint });
            return (t && (this.balance = t), { balance: this.balance });
          });
        }
        createTransaction(t) {
          return p(this, arguments, function* ({ address: t, amount: e }) {
            return {
              mint: this.mint,
              address: t,
              amount: e,
              decimals: this.decimal,
              transfer: !0,
            };
          });
        }
        getTransactions(t, e) {
          return p(this, null, function* () {
            try {
              const n = yield u(this, a).getTransactions({
                address: this.address,
                offset: t,
                limit: e,
              });
              return n;
            } catch (n) {
              return this.transactions;
            }
          });
        }
      }
      ((a = new WeakMap()), (i = new WeakMap()), (e["default"] = SOLToken));
    },
    1872: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      function r(t, e, n) {
        (s(t, e), e.set(t, n));
      }
      function s(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function o(t, e) {
        return t.get(l(t, e));
      }
      function u(t, e, n) {
        return (t.set(l(t, e), n), n);
      }
      function l(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      var c = new WeakMap();
      class SUIToken extends i.default {
        constructor(t) {
          (super(t),
            r(this, c, void 0),
            (this.tokenType = `${t.contract}${t.tokenTypePostfix}`),
            u(c, this, t.parent));
        }
        async createTransaction(t) {
          let { address: e, amount: n } = t;
          return { address: e, amount: n, tokenType: this.tokenType };
        }
        async getTransactions(t) {
          return o(c, this).getTokenTransactions({
            ...t,
            tokenType: this.tokenType,
            id: this.id,
            ticker: this.ticker,
            decimal: this.decimal,
          });
        }
      }
      e.default = SUIToken;
    },
    1873: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(8)),
        r = a(n(21));
      class AVAXToken extends r.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getTransactions() {
          return this.getTokenTransactions();
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
        getFeeSettings() {
          return i.default.get("avax-gas-price");
        }
      }
      e.default = AVAXToken;
    },
    2018: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "getVersion", function () {
          return o;
        }),
        n.d(e, "compareVersions", function () {
          return u;
        }),
        n.d(e, "isSupportedAppVersion", function () {
          return l;
        }));
      var a = Math.pow;
      const i = /[.-]/;
      function r(t) {
        const e = t.split(i).map((t) => Number(t));
        return e.some((t) => Number.isNaN(t)) ? [] : e;
      }
      const s = [30, 25, 20, 15, 10, 5];
      function o(t, e) {
        const n = r(e.replace(t, ""));
        if (n.length > s.length)
          throw new TypeError(
            `getVersion supports maximum ${s.length} version pieces`,
          );
        return n.reduce((t, e, n) => t + e * a(10, s[n]), 0);
      }
      function u(t, e) {
        var n, a;
        const [i, s] = [t, e].map(r),
          o = Math.max(i.length, s.length);
        for (let r = 0; r < o; r += 1) {
          const t = null != (n = i[r]) ? n : 0,
            e = null != (a = s[r]) ? a : 0;
          if (t !== e) return t > e ? 1 : -1;
        }
        return 0;
      }
      function l(t, e, n) {
        return n.startsWith(t) && u(e, n.substring(t.length)) >= 0;
      }
    },
    2038: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      class ValidationSchema {
        validateToThrow(t) {}
      }
      e.default = ValidationSchema;
    },
    245: function (t, e, n) {
      "use strict";
      (function (e) {
        var a = n(50),
          i = n(948),
          r = n(420),
          s = { "Content-Type": "application/x-www-form-urlencoded" };
        function o(t, e) {
          !a.isUndefined(t) &&
            a.isUndefined(t["Content-Type"]) &&
            (t["Content-Type"] = e);
        }
        function u() {
          var t;
          return (
            ("undefined" !== typeof XMLHttpRequest ||
              ("undefined" !== typeof e &&
                "[object process]" === Object.prototype.toString.call(e))) &&
              (t = n(421)),
            t
          );
        }
        function l(t, e, n) {
          if (a.isString(t))
            try {
              return ((e || JSON.parse)(t), a.trim(t));
            } catch (i) {
              if ("SyntaxError" !== i.name) throw i;
            }
          return (n || JSON.stringify)(t);
        }
        var c = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: u(),
          transformRequest: [
            function (t, e) {
              return (
                i(e, "Accept"),
                i(e, "Content-Type"),
                a.isFormData(t) ||
                a.isArrayBuffer(t) ||
                a.isBuffer(t) ||
                a.isStream(t) ||
                a.isFile(t) ||
                a.isBlob(t)
                  ? t
                  : a.isArrayBufferView(t)
                    ? t.buffer
                    : a.isURLSearchParams(t)
                      ? (o(
                          e,
                          "application/x-www-form-urlencoded;charset=utf-8",
                        ),
                        t.toString())
                      : a.isObject(t) ||
                          (e && "application/json" === e["Content-Type"])
                        ? (o(e, "application/json"), l(t))
                        : t
              );
            },
          ],
          transformResponse: [
            function (t) {
              var e = this.transitional,
                n = e && e.silentJSONParsing,
                i = e && e.forcedJSONParsing,
                s = !n && "json" === this.responseType;
              if (s || (i && a.isString(t) && t.length))
                try {
                  return JSON.parse(t);
                } catch (o) {
                  if (s) {
                    if ("SyntaxError" === o.name)
                      throw r(o, this, "E_JSON_PARSE");
                    throw o;
                  }
                }
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        (a.forEach(["delete", "get", "head"], function (t) {
          c.headers[t] = {};
        }),
          a.forEach(["post", "put", "patch"], function (t) {
            c.headers[t] = a.merge(s);
          }),
          (t.exports = c));
      }).call(this, n(18));
    },
    2652: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "TaskQueue", function () {
          return TaskQueue_TaskQueue;
        }));
      var a = (t = 1100) => {
          const e = new Map(),
            n = new Map();
          return (a, i) => {
            const r = Date.now(),
              s = n.get(a),
              o = e.get(a);
            if (o && s && r - s < t) return o;
            const u = i().finally(() => {
              (e.delete(a), n.delete(a));
            });
            return (e.set(a, u), n.set(a, r), u);
          };
        },
        i = n(335),
        r = (t, e, n) =>
          new Promise((a, i) => {
            var r = (t) => {
                try {
                  o(n.next(t));
                } catch (e) {
                  i(e);
                }
              },
              s = (t) => {
                try {
                  o(n.throw(t));
                } catch (e) {
                  i(e);
                }
              },
              o = (t) =>
                t.done ? a(t.value) : Promise.resolve(t.value).then(r, s);
            o((n = n.apply(t, e)).next());
          });
      class TaskQueue_TaskQueue {
        constructor(t, e) {
          ((this.queue = []),
            (this.isProcessing = !1),
            (this.interval = t),
            (this.preventConcurrentTask = a(e)));
        }
        addTask(t, e) {
          return new Promise((n, a) => {
            const i = () =>
              r(this, null, function* () {
                try {
                  let a;
                  ((a =
                    null !== t
                      ? yield this.preventConcurrentTask(t, () =>
                          r(this, null, function* () {
                            return "function" === typeof e ? e() : e;
                          }),
                        )
                      : "function" === typeof e
                        ? yield e()
                        : e),
                    n(a));
                } catch (i) {
                  a(i);
                }
              });
            (this.queue.push(i), this.processQueue());
          });
        }
        processQueue() {
          return r(this, null, function* () {
            if (!this.isProcessing) {
              this.isProcessing = !0;
              while (this.queue.length > 0) {
                const e = this.queue.shift();
                if (e) {
                  try {
                    yield e();
                  } catch (t) {
                    console.error(t);
                  }
                  yield Object(i["sleepFor"])(this.interval);
                }
              }
              ((this.isProcessing = !1),
                this.queue.length > 0 && this.processQueue());
            }
          });
        }
      }
    },
    27: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WALLET_ERROR =
          e.UNDEFINED_OPERATION_ERROR =
          e.TxEventTypes =
          e.STAKING_SETTINGS_DEFAULT =
          e.STAKE_ADDR_TYPE =
          e.SEND_TRANSACTION_TYPE =
          e.REVIEW_SETTINGS_DEFAULT =
          e.PUBLIC_KEY_TO_ADDRESS_ERROR =
          e.PARAMETER_UPDATE_COINS_INTERVAL =
          e.ONE_MINUTE =
          e.LOCAL_ENV_CONFIG =
          e.LOAD_WALLET_ERROR =
          e.LIB_NAME_INDEX =
          e.IcxTxTypes =
          e.INTERNAL_ERROR =
          e.HTTP_STATUS_SERVER_ERROR =
          e.HTTP_STATUS_OK =
          e.HTTP_STATUS_NOT_FOUND =
          e.HTTP_STATUS_BAD_REQUEST =
          e.GET_UTXO_TYPE =
          e.GET_TRANSACTION_TYPE =
          e.GET_TRANSACTIONS_TYPE =
          e.GET_TOKENS_TYPE =
          e.GET_LATEST_BLOCK_TYPE =
          e.GET_BLOCK_TYPE =
          e.GET_BALANCE_TYPE =
          e.EXTERNAL_ERROR =
          e.EXPLORER_API_ERROR =
          e.BTC_MOCK_ADDR =
          e.ATOM_MSG_TYPES =
            void 0));
      ((e.ONE_MINUTE = 6e4),
        (e.GET_TRANSACTIONS_TYPE = "GetTxs"),
        (e.GET_TOKENS_TYPE = "GetTkns"),
        (e.GET_TRANSACTION_TYPE = "GetTx"),
        (e.SEND_TRANSACTION_TYPE = "Send"),
        (e.GET_UTXO_TYPE = "UTXO"),
        (e.GET_LATEST_BLOCK_TYPE = "GetLatestBlock"),
        (e.GET_BLOCK_TYPE = "GetBlockType"),
        (e.GET_BALANCE_TYPE = "Balance"),
        (e.INTERNAL_ERROR = "Internal"),
        (e.EXTERNAL_ERROR = "External"),
        (e.WALLET_ERROR = "Wallet internal error"),
        (e.UNDEFINED_OPERATION_ERROR = "Undefined operation"),
        (e.LOAD_WALLET_ERROR = "LoadWallet"),
        (e.EXPLORER_API_ERROR = "Explorer Api request error"),
        (e.PUBLIC_KEY_TO_ADDRESS_ERROR =
          "can't get address from public key from method: history/get_key_accounts, node: "),
        (e.LOCAL_ENV_CONFIG = "LocalEnvConfig"),
        (e.HTTP_STATUS_OK = 200),
        (e.HTTP_STATUS_BAD_REQUEST = 400),
        (e.HTTP_STATUS_NOT_FOUND = 404),
        (e.HTTP_STATUS_SERVER_ERROR = 500),
        (e.BTC_MOCK_ADDR = "1LTcbL8h7xcWrJoDs4rcrEgpHMJ9TgsriS"),
        (e.ATOM_MSG_TYPES = {
          Send: "cosmos-sdk/MsgSend",
          Delegate: "cosmos-sdk/MsgDelegate",
          Undelegate: "cosmos-sdk/MsgUndelegate",
          Withdraw: "cosmos-sdk/MsgWithdrawDelegationReward",
          Redelegate: "cosmos-sdk/MsgBeginRedelegate",
        }),
        (e.STAKE_ADDR_TYPE = "stakeAddr"),
        (e.STAKING_SETTINGS_DEFAULT = [
          {
            ticker: "NEAR",
            displayTicker: "NEAR",
            name: "NearProtocol",
            reward: 7.4,
            defaultValidator: "LunaNova",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
            tags: [],
          },
          {
            ticker: "SOL",
            displayTicker: "SOL",
            name: "Solana",
            reward: 7.4,
            defaultValidator: "AtomicWallet",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
            tags: [],
          },
          {
            ticker: "ZIL",
            displayTicker: "ZIL",
            name: "Zilliqa",
            reward: 20,
            defaultValidator: "AtomicWallet",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
            tags: [],
          },
          {
            ticker: "ADA",
            displayTicker: "ADA",
            name: "Cardano",
            reward: 5,
            defaultValidator: "Atomic Wallet",
            platforms: ["desktop2.24.0", "ios0.68.0", "android0.68.0"],
            tags: [],
          },
          {
            ticker: "AWC-986",
            displayTicker: "AWC",
            name: "Atomic Wallet Token",
            reward: 20,
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "DOT",
            displayTicker: "DOT",
            name: "Polkadot",
            reward: 10,
            platforms: ["desktop2.25.0", "ios0.69.0", "android0.69.0"],
          },
          {
            ticker: "ICX",
            displayTicker: "ICX",
            name: "Icon",
            reward: 10,
            defaultValidator: "Atomic Wallet",
            platforms: ["desktop2.24.0", "ios0.68.0", "android0.68.0"],
            tags: [],
          },
          {
            ticker: "ATOM",
            displayTicker: "Atom",
            name: "Cosmos",
            reward: 10,
            defaultValidator: "Everstake",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "XTZ",
            displayTicker: "XTZ",
            name: "Tezos",
            reward: 7,
            defaultValidator: "Everstake",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "TRX",
            displayTicker: "TRX",
            name: "Tron",
            reward: 5,
            defaultValidator: "Binance",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "BAND",
            displayTicker: "BAND",
            name: "Band Protocol",
            reward: 17,
            defaultValidator: "Everstake",
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "NEO",
            displayTicker: "NEO - GAS",
            name: "NEO",
            reward: 1.4,
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "KMD",
            displayTicker: "KMD",
            name: "Komodo",
            reward: 5.1,
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "ALGO",
            displayTicker: "ALGO",
            name: "ALgorand",
            reward: 5.6,
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "VET",
            displayTicker: "VET - VTHO",
            name: "Vechain",
            reward: 1.63,
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
          {
            ticker: "BNB",
            displayTicker: "BNB",
            name: "Binance chain",
            reward: 4,
            platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
          },
        ]),
        (e.TxEventTypes = [
          "receive",
          "confirm",
          "confirm::reward",
          "confirm::freeze",
          "confirm::unfreeze",
          "confirm::vote",
        ]),
        (e.IcxTxTypes = {
          TXTYPE_STAKE: "13",
          TXTYPE_DELEGATE: "14",
          TXTYPE_CLAIM: "15",
        }),
        (e.REVIEW_SETTINGS_DEFAULT = {
          selectTitle: "Select subject",
          selectValues: [
            "Balance issue",
            "Transaction issue (deposit/withdrawal)",
            "Exchange",
            "Buy Crypto",
            "Staking",
            "Fee question",
            "Backup and Recovery",
            "Cashback/Membership/AWC staking rewards",
            "Report a Bug, Security issue, or Scam",
            "General question",
            "Feature/Coin request",
            "Other issues",
          ],
        }),
        (e.LIB_NAME_INDEX = {
          BITCORE: "bitcore",
          BITCOINJS: "bitcoinJs",
          BITGO: "bitgo",
        }),
        (e.PARAMETER_UPDATE_COINS_INTERVAL = 3e5));
    },
    293: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = [
        {
          constant: !0,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "success", type: "bool" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "success", type: "bool" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "version",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "_owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "success", type: "bool" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
            { name: "_extraData", type: "bytes" },
          ],
          name: "approveAndCall",
          outputs: [{ name: "success", type: "bool" }],
          payable: !1,
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "remaining", type: "uint256" }],
          payable: !1,
          type: "function",
        },
        {
          inputs: [
            { name: "_initialAmount", type: "uint256" },
            { name: "_tokenName", type: "string" },
            { name: "_decimalUnits", type: "uint8" },
            { name: "_tokenSymbol", type: "string" },
          ],
          type: "constructor",
        },
        { payable: !1, type: "fallback" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "_from", type: "address" },
            { indexed: !0, name: "_to", type: "address" },
            { indexed: !1, name: "_value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "_owner", type: "address" },
            { indexed: !0, name: "_spender", type: "address" },
            { indexed: !1, name: "_value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          constant: !1,
          inputs: [
            { name: "spender", type: "address" },
            { name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ name: "success", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
    331: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TX_STAT_TYPES = void 0),
        (e.createSendTransactionStatTracker = d));
      var i = n(35),
        r = a(n(26)),
        s = a(n(21)),
        o = a(n(102));
      const u = "SUCCESFULL",
        l = "UNSUCCESSFULL";
      e.TX_STAT_TYPES = {
        SEND: "SENDING",
        EXCHANGE: "EXCHANGE",
        STAKE: "STAKING",
        CLAIM: "CLAIM",
        UNSTAKE: "UNSTAKE",
      };
      let c = null;
      function p(t, e, n) {
        var a;
        const { amount: i, txStatType: r } = n[0],
          s = e.toCurrencyUnit(i),
          u =
            e.address ||
            (null === (a = t.getWallet(e.parent)) || void 0 === a
              ? void 0
              : a.address) ||
            "";
        return {
          atomicId: t.hash,
          coinName: e.name,
          ticker: e.ticker,
          fromAddress: u,
          amount: s,
          usdValue: o.default.convertToUSD(s, e, "USD").toString(),
          txType: r,
          txHash: "NONE_FAILED_TO_CREATE",
        };
      }
      function d(t, e) {
        if (!e.createTransaction || !e.sendTransaction) return {};
        const n = e.createTransaction.bind(e),
          a = e.sendTransaction.bind(e),
          o = async function () {
            for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
              o[u] = arguments[u];
            try {
              null === c &&
                ((c = p(t, e, o)),
                e instanceof s.default && (c.parentCoin = e.parent),
                (c.type = l));
            } catch (d) {
              console.error(d);
            }
            try {
              return await n(...o);
            } catch (d) {
              throw (
                void 0 !== c.txType &&
                  r.default.emit(i.WALLETS.TX_SENT, { ...c }),
                (c = null),
                d
              );
            }
          },
          d = async function () {
            try {
              const t = await a(...arguments);
              return (c && ((c.txHash = t.txid), (c.type = u)), t);
            } catch (t) {
              throw (c && (c.type = l), t);
            } finally {
              (c &&
                void 0 !== c.txType &&
                ((c.fromAddress = e.address),
                c.txHash || (c.txHash = "NONE"),
                r.default.emit(i.WALLETS.TX_SENT, { ...c })),
                (c = null));
            }
          };
        return { sendTransaction: d, createTransaction: o };
      }
    },
    335: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "sleepFor", function () {
          return a;
        }));
      const a = (t) => new Promise((e) => setTimeout(e, t));
    },
    4: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "PROMISE_STATE", {
          enumerable: !0,
          get: function () {
            return h.PROMISE_STATE;
          },
        }),
        Object.defineProperty(e, "REQUEST_TYPE", {
          enumerable: !0,
          get: function () {
            return d.REQUEST_TYPE;
          },
        }),
        Object.defineProperty(e, "TaskQueue", {
          enumerable: !0,
          get: function () {
            return f.TaskQueue;
          },
        }),
        Object.defineProperty(e, "arrayToObject", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "chunkArray", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "chunkString", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(e, "db", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(e, "getCachedBalance", {
          enumerable: !0,
          get: function () {
            return c.getCachedBalance;
          },
        }),
        Object.defineProperty(e, "getGeo", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(e, "getPromiseState", {
          enumerable: !0,
          get: function () {
            return h.getPromiseState;
          },
        }),
        Object.defineProperty(e, "getTokenId", {
          enumerable: !0,
          get: function () {
            return m.getTokenId;
          },
        }),
        Object.defineProperty(e, "hex2a", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "isBalanceCached", {
          enumerable: !0,
          get: function () {
            return c.isBalanceCached;
          },
        }),
        Object.defineProperty(e, "isPrototypePollutionKey", {
          enumerable: !0,
          get: function () {
            return v.isPrototypePollutionKey;
          },
        }),
        Object.defineProperty(e, "randomElementFromArray", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(e, "requestQueueState", {
          enumerable: !0,
          get: function () {
            return d.requestQueueState;
          },
        }),
        Object.defineProperty(e, "safeUpdateObject", {
          enumerable: !0,
          get: function () {
            return T.safeUpdateObject;
          },
        }),
        Object.defineProperty(e, "sanitizeBoolean", {
          enumerable: !0,
          get: function () {
            return k.sanitizeBoolean;
          },
        }),
        Object.defineProperty(e, "sanitizeNumber", {
          enumerable: !0,
          get: function () {
            return w.sanitizeNumber;
          },
        }),
        Object.defineProperty(e, "sanitizeObject", {
          enumerable: !0,
          get: function () {
            return E.sanitizeObject;
          },
        }),
        Object.defineProperty(e, "sanitizeString", {
          enumerable: !0,
          get: function () {
            return g.sanitizeString;
          },
        }),
        Object.defineProperty(e, "sanitizeUrl", {
          enumerable: !0,
          get: function () {
            return b.sanitizeUrl;
          },
        }),
        Object.defineProperty(e, "setCachedBalance", {
          enumerable: !0,
          get: function () {
            return c.setCachedBalance;
          },
        }),
        Object.defineProperty(e, "sleepFor", {
          enumerable: !0,
          get: function () {
            return y.sleepFor;
          },
        }));
      var i = a(n(962)),
        r = a(n(963)),
        s = a(n(964)),
        o = a(n(965)),
        u = a(n(966)),
        l = a(n(967)),
        c = n(968),
        p = a(n(969)),
        d = n(970),
        y = n(335),
        f = n(2652),
        m = n(971),
        h = n(972),
        b = n(973),
        T = n(977),
        v = n(157),
        g = n(978),
        w = n(979),
        k = n(980),
        E = n(981);
    },
    402: function (t, e, n) {
      !(function (e) {
        "use strict";
        var a = {};
        t.exports
          ? ((a.bytesToHex = n(1213).bytesToHex),
            (a.convertString = n(1214)),
            (t.exports = l))
          : ((a.bytesToHex = e.convertHex.bytesToHex),
            (a.convertString = e.convertString),
            (e.sha256 = l));
        var i = [];
        !(function () {
          function t(t) {
            for (var e = Math.sqrt(t), n = 2; n <= e; n++)
              if (!(t % n)) return !1;
            return !0;
          }
          function e(t) {
            return (4294967296 * (t - (0 | t))) | 0;
          }
          var n = 2,
            a = 0;
          while (a < 64) (t(n) && ((i[a] = e(Math.pow(n, 1 / 3))), a++), n++);
        })();
        var r = function (t) {
            for (var e = [], n = 0, a = 0; n < t.length; n++, a += 8)
              e[a >>> 5] |= t[n] << (24 - (a % 32));
            return e;
          },
          s = function (t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8)
              e.push((t[n >>> 5] >>> (24 - (n % 32))) & 255);
            return e;
          },
          o = [],
          u = function (t, e, n) {
            for (
              var a = t[0],
                r = t[1],
                s = t[2],
                u = t[3],
                l = t[4],
                c = t[5],
                p = t[6],
                d = t[7],
                y = 0;
              y < 64;
              y++
            ) {
              if (y < 16) o[y] = 0 | e[n + y];
              else {
                var f = o[y - 15],
                  m =
                    ((f << 25) | (f >>> 7)) ^
                    ((f << 14) | (f >>> 18)) ^
                    (f >>> 3),
                  h = o[y - 2],
                  b =
                    ((h << 15) | (h >>> 17)) ^
                    ((h << 13) | (h >>> 19)) ^
                    (h >>> 10);
                o[y] = m + o[y - 7] + b + o[y - 16];
              }
              var T = (l & c) ^ (~l & p),
                v = (a & r) ^ (a & s) ^ (r & s),
                g =
                  ((a << 30) | (a >>> 2)) ^
                  ((a << 19) | (a >>> 13)) ^
                  ((a << 10) | (a >>> 22)),
                w =
                  ((l << 26) | (l >>> 6)) ^
                  ((l << 21) | (l >>> 11)) ^
                  ((l << 7) | (l >>> 25)),
                k = d + w + T + i[y] + o[y],
                E = g + v;
              ((d = p),
                (p = c),
                (c = l),
                (l = (u + k) | 0),
                (u = s),
                (s = r),
                (r = a),
                (a = (k + E) | 0));
            }
            ((t[0] = (t[0] + a) | 0),
              (t[1] = (t[1] + r) | 0),
              (t[2] = (t[2] + s) | 0),
              (t[3] = (t[3] + u) | 0),
              (t[4] = (t[4] + l) | 0),
              (t[5] = (t[5] + c) | 0),
              (t[6] = (t[6] + p) | 0),
              (t[7] = (t[7] + d) | 0));
          };
        function l(t, e) {
          t.constructor === String &&
            (t = a.convertString.UTF8.stringToBytes(t));
          var n = [
              1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
              2600822924, 528734635, 1541459225,
            ],
            i = r(t),
            o = 8 * t.length;
          ((i[o >> 5] |= 128 << (24 - (o % 32))),
            (i[15 + (((o + 64) >> 9) << 4)] = o));
          for (var l = 0; l < i.length; l += 16) u(n, i, l);
          var c = s(n);
          return e && e.asBytes
            ? c
            : e && e.asString
              ? a.convertString.bytesToString(c)
              : a.bytesToHex(c);
        }
        l.x2 = function (t, e) {
          return l(l(t, { asBytes: !0 }), e);
        };
      })(this);
    },
    404: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(8)),
        r = a(n(21));
      class ETHToken extends r.default {
        constructor() {
          (super(...arguments),
            (this.gasLimit = "150000"),
            (this.coefficient = 1));
        }
        async getTransactions() {
          return this.getTokenTransactions();
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r = this.gasLimit,
            multiplier: s = this.multiplier,
            nonce: o,
          } = t;
          return {
            address: e,
            amount: n,
            custom: a,
            userGasPrice: i,
            gasLimit: r,
            contract: this.contract,
            multiplier: s,
            nonce: o,
          };
        }
        getFeeSettings() {
          return i.default.get("eth-gas-price");
        }
      }
      e.default = ETHToken;
    },
    418: function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        return function () {
          for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
            n[a] = arguments[a];
          return t.apply(e, n);
        };
      };
    },
    419: function (t, e, n) {
      "use strict";
      var a = n(50);
      function i(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      t.exports = function (t, e, n) {
        if (!e) return t;
        var r;
        if (n) r = n(e);
        else if (a.isURLSearchParams(e)) r = e.toString();
        else {
          var s = [];
          (a.forEach(e, function (t, e) {
            null !== t &&
              "undefined" !== typeof t &&
              (a.isArray(t) ? (e += "[]") : (t = [t]),
              a.forEach(t, function (t) {
                (a.isDate(t)
                  ? (t = t.toISOString())
                  : a.isObject(t) && (t = JSON.stringify(t)),
                  s.push(i(e) + "=" + i(t)));
              }));
          }),
            (r = s.join("&")));
        }
        if (r) {
          var o = t.indexOf("#");
          (-1 !== o && (t = t.slice(0, o)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + r));
        }
        return t;
      };
    },
    420: function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n, a, i) {
        return (
          (t.config = e),
          n && (t.code = n),
          (t.request = a),
          (t.response = i),
          (t.isAxiosError = !0),
          (t.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          t
        );
      };
    },
    421: function (t, e, n) {
      "use strict";
      var a = n(50),
        i = n(949),
        r = n(950),
        s = n(419),
        o = n(951),
        u = n(954),
        l = n(955),
        c = n(422);
      t.exports = function (t) {
        return new Promise(function (e, n) {
          var p = t.data,
            d = t.headers,
            y = t.responseType;
          a.isFormData(p) && delete d["Content-Type"];
          var f = new XMLHttpRequest();
          if (t.auth) {
            var m = t.auth.username || "",
              h = t.auth.password
                ? unescape(encodeURIComponent(t.auth.password))
                : "";
            d.Authorization = "Basic " + btoa(m + ":" + h);
          }
          var b = o(t.baseURL, t.url);
          function T() {
            if (f) {
              var a =
                  "getAllResponseHeaders" in f
                    ? u(f.getAllResponseHeaders())
                    : null,
                r =
                  y && "text" !== y && "json" !== y
                    ? f.response
                    : f.responseText,
                s = {
                  data: r,
                  status: f.status,
                  statusText: f.statusText,
                  headers: a,
                  config: t,
                  request: f,
                };
              (i(e, n, s), (f = null));
            }
          }
          if (
            (f.open(
              t.method.toUpperCase(),
              s(b, t.params, t.paramsSerializer),
              !0,
            ),
            (f.timeout = t.timeout),
            "onloadend" in f
              ? (f.onloadend = T)
              : (f.onreadystatechange = function () {
                  f &&
                    4 === f.readyState &&
                    (0 !== f.status ||
                      (f.responseURL &&
                        0 === f.responseURL.indexOf("file:"))) &&
                    setTimeout(T);
                }),
            (f.onabort = function () {
              f && (n(c("Request aborted", t, "ECONNABORTED", f)), (f = null));
            }),
            (f.onerror = function () {
              (n(c("Network Error", t, null, f)), (f = null));
            }),
            (f.ontimeout = function () {
              var e = "timeout of " + t.timeout + "ms exceeded";
              (t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                n(
                  c(
                    e,
                    t,
                    t.transitional && t.transitional.clarifyTimeoutError
                      ? "ETIMEDOUT"
                      : "ECONNABORTED",
                    f,
                  ),
                ),
                (f = null));
            }),
            a.isStandardBrowserEnv())
          ) {
            var v =
              (t.withCredentials || l(b)) && t.xsrfCookieName
                ? r.read(t.xsrfCookieName)
                : void 0;
            v && (d[t.xsrfHeaderName] = v);
          }
          ("setRequestHeader" in f &&
            a.forEach(d, function (t, e) {
              "undefined" === typeof p && "content-type" === e.toLowerCase()
                ? delete d[e]
                : f.setRequestHeader(e, t);
            }),
            a.isUndefined(t.withCredentials) ||
              (f.withCredentials = !!t.withCredentials),
            y && "json" !== y && (f.responseType = t.responseType),
            "function" === typeof t.onDownloadProgress &&
              f.addEventListener("progress", t.onDownloadProgress),
            "function" === typeof t.onUploadProgress &&
              f.upload &&
              f.upload.addEventListener("progress", t.onUploadProgress),
            t.cancelToken &&
              t.cancelToken.promise.then(function (t) {
                f && (f.abort(), n(t), (f = null));
              }),
            p || (p = null),
            f.send(p));
        });
      };
    },
    422: function (t, e, n) {
      "use strict";
      var a = n(420);
      t.exports = function (t, e, n, i, r) {
        var s = new Error(t);
        return a(s, e, n, i, r);
      };
    },
    423: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return !(!t || !t.__CANCEL__);
      };
    },
    424: function (t, e, n) {
      "use strict";
      var a = n(50);
      t.exports = function (t, e) {
        e = e || {};
        var n = {},
          i = ["url", "method", "data"],
          r = ["headers", "auth", "proxy", "params"],
          s = [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "timeoutMessage",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "decompress",
            "maxContentLength",
            "maxBodyLength",
            "maxRedirects",
            "transport",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
            "responseEncoding",
          ],
          o = ["validateStatus"];
        function u(t, e) {
          return a.isPlainObject(t) && a.isPlainObject(e)
            ? a.merge(t, e)
            : a.isPlainObject(e)
              ? a.merge({}, e)
              : a.isArray(e)
                ? e.slice()
                : e;
        }
        function l(i) {
          a.isUndefined(e[i])
            ? a.isUndefined(t[i]) || (n[i] = u(void 0, t[i]))
            : (n[i] = u(t[i], e[i]));
        }
        (a.forEach(i, function (t) {
          a.isUndefined(e[t]) || (n[t] = u(void 0, e[t]));
        }),
          a.forEach(r, l),
          a.forEach(s, function (i) {
            a.isUndefined(e[i])
              ? a.isUndefined(t[i]) || (n[i] = u(void 0, t[i]))
              : (n[i] = u(void 0, e[i]));
          }),
          a.forEach(o, function (a) {
            a in e
              ? (n[a] = u(t[a], e[a]))
              : a in t && (n[a] = u(void 0, t[a]));
          }));
        var c = i.concat(r).concat(s).concat(o),
          p = Object.keys(t)
            .concat(Object.keys(e))
            .filter(function (t) {
              return -1 === c.indexOf(t);
            });
        return (a.forEach(p, l), n);
      };
    },
    425: function (t, e, n) {
      "use strict";
      function a(t) {
        this.message = t;
      }
      ((a.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (a.prototype.__CANCEL__ = !0),
        (t.exports = a));
    },
    436: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "CHECK_IN_ACTION", function () {
          return b;
        }),
        n.d(e, "startActivityTracking", function () {
          return E;
        }),
        n.d(e, "clearWalletHash", function () {
          return A;
        }));
      var a = n(14),
        i = n.n(a),
        r = n(26),
        s = n.n(r),
        o = n(35),
        u = n(37),
        l = n.n(u),
        c = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        f = (t, e, n) =>
          e in t
            ? c(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        m = (t, e) => {
          for (var n in e || (e = {})) d.call(e, n) && f(t, n, e[n]);
          if (p) for (var n of p(e)) y.call(e, n) && f(t, n, e[n]);
          return t;
        },
        h = (t, e, n) =>
          new Promise((a, i) => {
            var r = (t) => {
                try {
                  o(n.next(t));
                } catch (e) {
                  i(e);
                }
              },
              s = (t) => {
                try {
                  o(n.throw(t));
                } catch (e) {
                  i(e);
                }
              },
              o = (t) =>
                t.done ? a(t.value) : Promise.resolve(t.value).then(r, s);
            o((n = n.apply(t, e)).next());
          });
      const b = "CHECK_IN",
        T = 864e5;
      let v = null;
      const g = (t, ...e) =>
          h(void 0, [t, ...e], function* (t, e = {}) {
            if (null === v) throw new Error("Wallet hash is not set");
            yield i.a.post(
              "https://apollo.atomicwallet.io/users/activity",
              m({ atomicId: v, type: t }, e),
              { headers: l.a.getUserAgentHttpHeader() },
            );
          }),
        w = (...t) =>
          h(void 0, [...t], function* (t = {}) {
            yield i.a.post(
              "https://apollo.atomicwallet.io/sendings",
              m({}, t),
              { headers: l.a.getUserAgentHttpHeader() },
            );
          }),
        k = () => {
          g(b).then(() => {
            setTimeout(() => {
              k();
            }, T);
          });
        };
      function E() {
        (s.a.on(o["WALLETS"].NEW_ATOMIC_ID, ({ atomicId: t }) => {
          null === v &&
            64 === (null == t ? void 0 : t.length) &&
            ((v = t), k());
        }),
          s.a.on(o["WALLETS"].TX_SENT, w));
      }
      function A() {
        v = null;
      }
      e["default"] = g;
    },
    50: function (t, e, n) {
      "use strict";
      var a = n(418),
        i = Object.prototype.toString;
      function r(t) {
        return "[object Array]" === i.call(t);
      }
      function s(t) {
        return "undefined" === typeof t;
      }
      function o(t) {
        return (
          null !== t &&
          !s(t) &&
          null !== t.constructor &&
          !s(t.constructor) &&
          "function" === typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      }
      function u(t) {
        return "[object ArrayBuffer]" === i.call(t);
      }
      function l(t) {
        return "undefined" !== typeof FormData && t instanceof FormData;
      }
      function c(t) {
        var e;
        return (
          (e =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && t.buffer instanceof ArrayBuffer),
          e
        );
      }
      function p(t) {
        return "string" === typeof t;
      }
      function d(t) {
        return "number" === typeof t;
      }
      function y(t) {
        return null !== t && "object" === typeof t;
      }
      function f(t) {
        if ("[object Object]" !== i.call(t)) return !1;
        var e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype;
      }
      function m(t) {
        return "[object Date]" === i.call(t);
      }
      function h(t) {
        return "[object File]" === i.call(t);
      }
      function b(t) {
        return "[object Blob]" === i.call(t);
      }
      function T(t) {
        return "[object Function]" === i.call(t);
      }
      function v(t) {
        return y(t) && T(t.pipe);
      }
      function g(t) {
        return (
          "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
        );
      }
      function w(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function k() {
        return (
          ("undefined" === typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" !== typeof window &&
          "undefined" !== typeof document
        );
      }
      function E(t, e) {
        if (null !== t && "undefined" !== typeof t)
          if (("object" !== typeof t && (t = [t]), r(t)))
            for (var n = 0, a = t.length; n < a; n++) e.call(null, t[n], n, t);
          else
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) &&
                e.call(null, t[i], i, t);
      }
      function A() {
        var t = {};
        function e(e, n) {
          f(t[n]) && f(e)
            ? (t[n] = A(t[n], e))
            : f(e)
              ? (t[n] = A({}, e))
              : r(e)
                ? (t[n] = e.slice())
                : (t[n] = e);
        }
        for (var n = 0, a = arguments.length; n < a; n++) E(arguments[n], e);
        return t;
      }
      function _(t, e, n) {
        return (
          E(e, function (e, i) {
            t[i] = n && "function" === typeof e ? a(e, n) : e;
          }),
          t
        );
      }
      function S(t) {
        return (65279 === t.charCodeAt(0) && (t = t.slice(1)), t);
      }
      t.exports = {
        isArray: r,
        isArrayBuffer: u,
        isBuffer: o,
        isFormData: l,
        isArrayBufferView: c,
        isString: p,
        isNumber: d,
        isObject: y,
        isPlainObject: f,
        isUndefined: s,
        isDate: m,
        isFile: h,
        isBlob: b,
        isFunction: T,
        isStream: v,
        isURLSearchParams: g,
        isStandardBrowserEnv: k,
        forEach: E,
        merge: A,
        extend: _,
        trim: w,
        stripBOM: S,
      };
    },
    596: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = [
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: !0,
          inputs: [],
          name: "activeAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
            {
              internalType: "uint256",
              name: "_minSharesToMint",
              type: "uint256",
            },
          ],
          name: "buyVoucher",
          outputs: [
            {
              internalType: "uint256",
              name: "amountToDeposit",
              type: "uint256",
            },
          ],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "commissionRate_deprecated",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "delegation",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            {
              internalType: "address payable",
              name: "destination",
              type: "address",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "drain",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "eventsHub",
          outputs: [
            { internalType: "contract EventsHub", name: "", type: "address" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "exchangeRate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "user", type: "address" }],
          name: "getLiquidRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "getRewardPerShare",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "user", type: "address" }],
          name: "getTotalStake",
          outputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "initalRewardPerShare",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "_validatorId", type: "uint256" },
            {
              internalType: "address",
              name: "_stakingLogger",
              type: "address",
            },
            { internalType: "address", name: "_stakeManager", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "isOwner",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "lastCommissionUpdate_deprecated",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "lock",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "locked",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "migrateIn",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "migrateOut",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "minAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "restake",
          outputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "rewardPerShare",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "claimAmount", type: "uint256" },
            {
              internalType: "uint256",
              name: "maximumSharesToBurn",
              type: "uint256",
            },
          ],
          name: "sellVoucher",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "claimAmount", type: "uint256" },
            {
              internalType: "uint256",
              name: "maximumSharesToBurn",
              type: "uint256",
            },
          ],
          name: "sellVoucher_new",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            {
              internalType: "uint256",
              name: "validatorStake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "delegatedAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalAmountToSlash",
              type: "uint256",
            },
          ],
          name: "slash",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "stakeManager",
          outputs: [
            {
              internalType: "contract IStakeManager",
              name: "",
              type: "address",
            },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "stakingLogger",
          outputs: [
            { internalType: "contract StakingInfo", name: "", type: "address" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalStake_deprecated",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "unbondNonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "unbonds",
          outputs: [
            { internalType: "uint256", name: "shares", type: "uint256" },
            { internalType: "uint256", name: "withdrawEpoch", type: "uint256" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "unbonds_new",
          outputs: [
            { internalType: "uint256", name: "shares", type: "uint256" },
            { internalType: "uint256", name: "withdrawEpoch", type: "uint256" },
          ],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "unlock",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "unstakeClaimTokens",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { internalType: "uint256", name: "unbondNonce", type: "uint256" },
          ],
          name: "unstakeClaimTokens_new",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [{ internalType: "bool", name: "_delegation", type: "bool" }],
          name: "updateDelegation",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "validatorId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "validatorRewards_deprecated",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "withdrawExchangeRate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "withdrawPool",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "withdrawRewards",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "withdrawShares",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    67: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "MILLISECONDS_IN_ONE_SECOND", function () {
          return r;
        }),
        n.d(e, "toMinimal", function () {
          return u;
        }),
        n.d(e, "toCurrency", function () {
          return l;
        }),
        n.d(e, "convertTimestampToDateTime", function () {
          return c;
        }),
        n.d(e, "convertSecondsToDateTime", function () {
          return p;
        }),
        n.d(e, "getStringWithEnsuredEndChar", function () {
          return d;
        }),
        n.d(e, "getNumberWithoutENotation", function () {
          return y;
        }));
      var a = n(11),
        i = n.n(a);
      const r = 1e3,
        s = /^0+/;
      function o(t, e) {
        if (((t = t.replace(s, "")), !t)) return "0";
        let n = e;
        if (t.includes("e")) {
          const [e, a] = t.split("e", 2);
          if (((t = e), (n += Number(a)), n < 0)) return "0";
        }
        if (0 === e)
          return ((t = t.split(".", 2)[0]), "" === t || "0" === t ? "0" : t);
        const a = t.indexOf(".");
        if (a > -1) {
          const e = t.substring(0, a),
            i = t.substring(a + 1, a + 1 + n);
          ((t = `${e}${i}`.replace(s, "")), (n -= i.length));
        }
        return n > 0 ? t.padEnd(n + t.length, "0") : t;
      }
      function u(t, e) {
        if (!Number.isInteger(e) || e < 0)
          throw new TypeError(
            "toMinimal error: precision is not a positive integer",
          );
        let n = t.toString().replace(",", ".");
        const a = n.startsWith("-");
        a && (n = n.substring(1));
        const i = o(n, e);
        return "0" !== i && a ? "-" + i : i;
      }
      function l(t, e) {
        if (null === t || void 0 === t)
          throw new Error("value must not be null or undefined");
        if ("string" === typeof t) {
          if (t.includes(".")) throw new Error(t + " must not contain '.'");
          if (t.includes("-")) throw new Error(t + " must not contain '-'");
          if ("number" !== typeof e)
            throw new TypeError("toCurrency error: decimal is not a number");
        }
        const n = new i.a(t);
        if (n.isNeg()) throw new Error("negative value");
        const a = n.toString(),
          r = a.substring(0, a.length - e).replace(/^0+/, "") || "0",
          s = a
            .substring(a.length - e)
            .padStart(e, "0")
            .replace(/0+$/, "");
        return s ? `${r}.${s}` : r;
      }
      function c(t, e) {
        return new Date((t * r) / e);
      }
      function p(t) {
        return c(t, 1);
      }
      function d(t, e) {
        return t.endsWith(e) ? t : t.concat(e);
      }
      function y(t) {
        const e = t.toString().replace(s, "").toLowerCase();
        if (!e) return "0";
        if (!e.includes("e")) return e;
        const [n, a] = e.split("e", 2),
          i = Number(a);
        if (0 === i) return n;
        const r = n.indexOf(".");
        if (r > -1) {
          const [t, e] = n.split(".");
          return i > 0
            ? i < e.length
              ? `${t}${e.slice(0, i)}.${e.slice(i)}`
              : `${t}${e}${"0".repeat(i - e.length)}`
            : `0.${"0".repeat(Math.abs(i) - 1)}${t}${e}`;
        }
        return i > 0
          ? n.padEnd(i + n.length, "0")
          : `0.${"0".repeat(Math.abs(i) - 1)}${n}`;
      }
    },
    681: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ACTION_WITHDRAW =
          e.ACTION_VOTE =
          e.ACTION_UNSTAKE =
          e.ACTION_STAKE =
          e.ACTION_SEND =
          e.ACTION_FREEZE =
          e.ACTION_EXCHANGE =
          e.ACTION_CLAIM =
          e.ACTION_BUY =
            void 0));
      ((e.ACTION_BUY = "buy"),
        (e.ACTION_CLAIM = "claim"),
        (e.ACTION_EXCHANGE = "exchange"),
        (e.ACTION_FREEZE = "freeze"),
        (e.ACTION_SEND = "send"),
        (e.ACTION_STAKE = "stake"),
        (e.ACTION_UNSTAKE = "unstake"),
        (e.ACTION_VOTE = "vote"),
        (e.ACTION_WITHDRAW = "withdraw"));
    },
    803: function (t, e, n) {
      "use strict";
      for (
        var a = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", i = {}, r = 0;
        r < a.length;
        r++
      ) {
        var s = a.charAt(r);
        if (void 0 !== i[s]) throw new TypeError(s + " is ambiguous");
        i[s] = r;
      }
      function o(t) {
        var e = t >> 25;
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
        for (var e = 1, n = 0; n < t.length; ++n) {
          var a = t.charCodeAt(n);
          if (a < 33 || a > 126) return "Invalid prefix (" + t + ")";
          e = o(e) ^ (a >> 5);
        }
        for (e = o(e), n = 0; n < t.length; ++n) {
          var i = t.charCodeAt(n);
          e = o(e) ^ (31 & i);
        }
        return e;
      }
      function l(t, e, n) {
        if (((n = n || 90), t.length + 7 + e.length > n))
          throw new TypeError("Exceeds length limit");
        t = t.toLowerCase();
        var i = u(t);
        if ("string" === typeof i) throw new Error(i);
        for (var r = t + "1", s = 0; s < e.length; ++s) {
          var l = e[s];
          if (l >> 5 !== 0) throw new Error("Non 5-bit word");
          ((i = o(i) ^ l), (r += a.charAt(l)));
        }
        for (s = 0; s < 6; ++s) i = o(i);
        for (i ^= 1, s = 0; s < 6; ++s) {
          var c = (i >> (5 * (5 - s))) & 31;
          r += a.charAt(c);
        }
        return r;
      }
      function c(t, e) {
        if (((e = e || 90), t.length < 8)) return t + " too short";
        if (t.length > e) return "Exceeds length limit";
        var n = t.toLowerCase(),
          a = t.toUpperCase();
        if (t !== n && t !== a) return "Mixed-case string " + t;
        t = n;
        var r = t.lastIndexOf("1");
        if (-1 === r) return "No separator character for " + t;
        if (0 === r) return "Missing prefix for " + t;
        var s = t.slice(0, r),
          l = t.slice(r + 1);
        if (l.length < 6) return "Data too short";
        var c = u(s);
        if ("string" === typeof c) return c;
        for (var p = [], d = 0; d < l.length; ++d) {
          var y = l.charAt(d),
            f = i[y];
          if (void 0 === f) return "Unknown character " + y;
          ((c = o(c) ^ f), d + 6 >= l.length || p.push(f));
        }
        return 1 !== c ? "Invalid checksum for " + t : { prefix: s, words: p };
      }
      function p() {
        var t = c.apply(null, arguments);
        if ("object" === typeof t) return t;
      }
      function d(t) {
        var e = c.apply(null, arguments);
        if ("object" === typeof e) return e;
        throw new Error(e);
      }
      function y(t, e, n, a) {
        for (
          var i = 0, r = 0, s = (1 << n) - 1, o = [], u = 0;
          u < t.length;
          ++u
        ) {
          ((i = (i << e) | t[u]), (r += e));
          while (r >= n) ((r -= n), o.push((i >> r) & s));
        }
        if (a) r > 0 && o.push((i << (n - r)) & s);
        else {
          if (r >= e) return "Excess padding";
          if ((i << (n - r)) & s) return "Non-zero padding";
        }
        return o;
      }
      function f(t) {
        var e = y(t, 8, 5, !0);
        if (Array.isArray(e)) return e;
      }
      function m(t) {
        var e = y(t, 8, 5, !0);
        if (Array.isArray(e)) return e;
        throw new Error(e);
      }
      function h(t) {
        var e = y(t, 5, 8, !1);
        if (Array.isArray(e)) return e;
      }
      function b(t) {
        var e = y(t, 5, 8, !1);
        if (Array.isArray(e)) return e;
        throw new Error(e);
      }
      t.exports = {
        decodeUnsafe: p,
        decode: d,
        encode: l,
        toWordsUnsafe: f,
        toWords: m,
        fromWordsUnsafe: h,
        fromWords: b,
      };
    },
    805: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ARBToken", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(e, "AVAXToken", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(e, "BNBToken", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(e, "BSCToken", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(e, "ETHToken", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(e, "EVMToken", {
          enumerable: !0,
          get: function () {
            return T.default;
          },
        }),
        Object.defineProperty(e, "FLRToken", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "FTMToken", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(e, "LUNCToken", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(e, "MATICToken", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(e, "NEOToken", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(e, "ONTToken", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(e, "OPToken", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(e, "SOLToken", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(e, "SUIToken", {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(e, "StakableMaticETHToken", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(e, "THETAToken", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(e, "TONToken", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(e, "TRXToken", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "VETToken", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "ZILToken", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }));
      var i = a(n(404)),
        r = a(n(1273)),
        s = a(n(1274)),
        o = a(n(1275)),
        u = a(n(1276)),
        l = a(n(1277)),
        c = a(n(1278)),
        p = a(n(1279)),
        d = a(n(870)),
        y = a(n(1280)),
        f = a(n(1281)),
        m = a(n(871)),
        h = a(n(1774)),
        b = a(n(1775)),
        T = a(n(1776)),
        v = a(n(1777)),
        g = a(n(1778)),
        w = a(n(1779)),
        k = a(n(876)),
        E = a(n(1872)),
        A = a(n(1873));
    },
    812: function (t, e, n) {
      "use strict";
      ((e.byteLength = c), (e.toByteArray = d), (e.fromByteArray = m));
      for (
        var a = [],
          i = [],
          r = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          o = 0,
          u = s.length;
        o < u;
        ++o
      )
        ((a[o] = s[o]), (i[s.charCodeAt(o)] = o));
      function l(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        -1 === n && (n = e);
        var a = n === e ? 0 : 4 - (n % 4);
        return [n, a];
      }
      function c(t) {
        var e = l(t),
          n = e[0],
          a = e[1];
        return (3 * (n + a)) / 4 - a;
      }
      function p(t, e, n) {
        return (3 * (e + n)) / 4 - n;
      }
      function d(t) {
        var e,
          n,
          a = l(t),
          s = a[0],
          o = a[1],
          u = new r(p(t, s, o)),
          c = 0,
          d = o > 0 ? s - 4 : s;
        for (n = 0; n < d; n += 4)
          ((e =
            (i[t.charCodeAt(n)] << 18) |
            (i[t.charCodeAt(n + 1)] << 12) |
            (i[t.charCodeAt(n + 2)] << 6) |
            i[t.charCodeAt(n + 3)]),
            (u[c++] = (e >> 16) & 255),
            (u[c++] = (e >> 8) & 255),
            (u[c++] = 255 & e));
        return (
          2 === o &&
            ((e = (i[t.charCodeAt(n)] << 2) | (i[t.charCodeAt(n + 1)] >> 4)),
            (u[c++] = 255 & e)),
          1 === o &&
            ((e =
              (i[t.charCodeAt(n)] << 10) |
              (i[t.charCodeAt(n + 1)] << 4) |
              (i[t.charCodeAt(n + 2)] >> 2)),
            (u[c++] = (e >> 8) & 255),
            (u[c++] = 255 & e)),
          u
        );
      }
      function y(t) {
        return (
          a[(t >> 18) & 63] + a[(t >> 12) & 63] + a[(t >> 6) & 63] + a[63 & t]
        );
      }
      function f(t, e, n) {
        for (var a, i = [], r = e; r < n; r += 3)
          ((a =
            ((t[r] << 16) & 16711680) +
            ((t[r + 1] << 8) & 65280) +
            (255 & t[r + 2])),
            i.push(y(a)));
        return i.join("");
      }
      function m(t) {
        for (
          var e, n = t.length, i = n % 3, r = [], s = 16383, o = 0, u = n - i;
          o < u;
          o += s
        )
          r.push(f(t, o, o + s > u ? u : o + s));
        return (
          1 === i
            ? ((e = t[n - 1]), r.push(a[e >> 2] + a[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              r.push(a[e >> 10] + a[(e >> 4) & 63] + a[(e << 2) & 63] + "=")),
          r.join("")
        );
      }
      ((i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63));
    },
    822: function (t, e, n) {
      "use strict";
      var a = n(46).Buffer;
      function i(t) {
        if (t.length >= 255) throw new TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
        for (var i = 0; i < t.length; i++) {
          var r = t.charAt(i),
            s = r.charCodeAt(0);
          if (255 !== e[s]) throw new TypeError(r + " is ambiguous");
          e[s] = i;
        }
        var o = t.length,
          u = t.charAt(0),
          l = Math.log(o) / Math.log(256),
          c = Math.log(256) / Math.log(o);
        function p(e) {
          if (
            ((Array.isArray(e) || e instanceof Uint8Array) && (e = a.from(e)),
            !a.isBuffer(e))
          )
            throw new TypeError("Expected Buffer");
          if (0 === e.length) return "";
          var n = 0,
            i = 0,
            r = 0,
            s = e.length;
          while (r !== s && 0 === e[r]) (r++, n++);
          var l = ((s - r) * c + 1) >>> 0,
            p = new Uint8Array(l);
          while (r !== s) {
            for (
              var d = e[r], y = 0, f = l - 1;
              (0 !== d || y < i) && -1 !== f;
              f--, y++
            )
              ((d += (256 * p[f]) >>> 0),
                (p[f] = (d % o) >>> 0),
                (d = (d / o) >>> 0));
            if (0 !== d) throw new Error("Non-zero carry");
            ((i = y), r++);
          }
          var m = l - i;
          while (m !== l && 0 === p[m]) m++;
          for (var h = u.repeat(n); m < l; ++m) h += t.charAt(p[m]);
          return h;
        }
        function d(t) {
          if ("string" !== typeof t) throw new TypeError("Expected String");
          if (0 === t.length) return a.alloc(0);
          var n = 0,
            i = 0,
            r = 0;
          while (t[n] === u) (i++, n++);
          var s = ((t.length - n) * l + 1) >>> 0,
            c = new Uint8Array(s);
          while (n < t.length) {
            var p = t.charCodeAt(n);
            if (p > 255) return;
            var d = e[p];
            if (255 === d) return;
            for (var y = 0, f = s - 1; (0 !== d || y < r) && -1 !== f; f--, y++)
              ((d += (o * c[f]) >>> 0),
                (c[f] = (d % 256) >>> 0),
                (d = (d / 256) >>> 0));
            if (0 !== d) throw new Error("Non-zero carry");
            ((r = y), n++);
          }
          var m = s - r;
          while (m !== s && 0 === c[m]) m++;
          var h = a.allocUnsafe(i + (s - m));
          h.fill(0, 0, i);
          var b = i;
          while (m !== s) h[b++] = c[m++];
          return h;
        }
        function y(t) {
          var e = d(t);
          if (e) return e;
          throw new Error("Non-base" + o + " character");
        }
        return { encode: p, decodeUnsafe: d, decode: y };
      }
      t.exports = i;
    },
    85: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.STAKING_PREDEFINED_VALIDATORS_UPDATED =
          e.STAKING_BALANCES_UPDATED =
          e.STAKING_BALANCES_CACHE =
          e.HISTORY_WALLET_UPDATED =
            void 0));
      const a = (t, e) => ({
        topic: t + "::staking::predefined-validators-updated",
        payload: e,
      });
      e.STAKING_PREDEFINED_VALIDATORS_UPDATED = a;
      const i = (t, e) => ({
        topic: t + "::staking::balances-updated",
        payload: e,
      });
      e.STAKING_BALANCES_UPDATED = i;
      const r = (t, e) => ({ topic: t + "-staking-infos", payload: e });
      e.STAKING_BALANCES_CACHE = r;
      const s = (t, e) => ({ topic: t + "-history-updated", payload: e });
      e.HISTORY_WALLET_UPDATED = s;
    },
    854: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "delayedRepeatUntilSuccess", function () {
          return u;
        }),
        n.d(e, "formatAmount", function () {
          return l;
        }),
        n.d(e, "isStartsWith", function () {
          return c;
        }),
        n.d(e, "getRandomInt", function () {
          return p;
        }),
        n.d(e, "isDifferent", function () {
          return d;
        }));
      var a = n(341),
        i = n.n(a),
        r = (t, e, n) =>
          new Promise((a, i) => {
            var r = (t) => {
                try {
                  o(n.next(t));
                } catch (e) {
                  i(e);
                }
              },
              s = (t) => {
                try {
                  o(n.throw(t));
                } catch (e) {
                  i(e);
                }
              },
              o = (t) =>
                t.done ? a(t.value) : Promise.resolve(t.value).then(r, s);
            o((n = n.apply(t, e)).next());
          });
      const s = "en-US";
      function o(t, e, n) {
        return r(this, null, function* () {
          return new Promise((a, i) => {
            setTimeout(
              () =>
                r(this, null, function* () {
                  try {
                    const n = yield t(...e);
                    a(n);
                  } catch (n) {
                    i(n);
                  }
                }),
              n,
            );
          });
        });
      }
      function u(t, e, n, a) {
        return r(this, null, function* () {
          for (let r = 0; r < n; r++)
            try {
              return yield o(t, e, a);
            } catch (i) {
              console.warn(i);
            }
        });
      }
      function l(t) {
        return new Intl.NumberFormat(s).format(t);
      }
      function c(t, e) {
        return 0 === t.indexOf(e);
      }
      function p(t) {
        return Math.floor(Math.random() * t);
      }
      function d(t, e) {
        return i()(t) !== i()(e);
      }
    },
    870: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(21));
      const r = 6,
        s = 10 ** r,
        o = 10 * s,
        u = 0.012;
      class LUNCToken extends i.default {
        constructor(t) {
          var e;
          (super(t),
            (this.denom = t.denom),
            (this.fields.paymentId = !0),
            (this.stabilityFee =
              (null === (e = this.config) || void 0 === e
                ? void 0
                : e.stabilityFee) || u));
        }
        async createTransaction(t) {
          let {
            address: e,
            amount: n,
            userGasPrice: a,
            gasLimit: i,
            multiplier: r,
            feeLimit: s = o,
            memo: u,
          } = t;
          return {
            address: e,
            amount: n,
            contract: this.contract,
            transfer: !0,
            ticker: this.ticker,
            userGasPrice: a,
            gasLimit: i,
            multiplier: r,
            feeLimit: s,
            denom: this.denom,
            memo: u,
          };
        }
        async availableBalance() {
          if (this.divisibleBalance) {
            const t = await this.getStabilityFee(this.indivisibleBalance),
              e = this.indivisibleBalance.sub(new this.BN(t));
            return e.gt(0) ? this.toCurrencyUnit(e.toString()) : "0";
          }
          return "0";
        }
        getStabilityFee(t) {
          return (Number(t) * this.stabilityFee + 1).toFixed(0);
        }
      }
      e.default = LUNCToken;
    },
    871: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(397)),
        r = a(n(386)),
        s = a(n(73)),
        o = a(n(596)),
        u = a(n(1773)),
        l = a(n(293)),
        c = a(n(404));
      const p = 5e4,
        d = 3e5,
        y = 17e4,
        f = "0x5E3EF299FDDF15EAA0432E6E66473ACE8C13D908",
        m =
          "115792089237316195423570985008687907853269984665640564039457584007913129639935";
      class StakableMaticETHToken extends (0, r.default)(
        (0, i.default)(c.default),
      ) {
        constructor(t) {
          var e, n, a, i, r, s, o;
          let { config: u, ...l } = t;
          (super({ config: u, ...l }),
            (this.stakingContract =
              null !== (e = u.stakingContract) && void 0 !== e ? e : f),
            (this.stakingGasLimit =
              null !== (n = u.stakingGasLimit) && void 0 !== n ? n : d),
            (this.unstakingGasLimit =
              null !== (a = u.unstakingGasLimit) && void 0 !== a ? a : d),
            (this.restakeRewardsGasLimit =
              null !== (i = u.restakeRewardsGasLimit) && void 0 !== i ? i : d),
            (this.claimRewardsGasLimit =
              null !== (r = u.claimRewardsGasLimit) && void 0 !== r ? r : y),
            (this.withdrawGasLimit =
              null !== (s = u.withdrawGasLimit) && void 0 !== s ? s : d),
            (this.approvalGasLimit =
              null !== (o = u.approvalGasLimit) && void 0 !== o ? o : p));
        }
        async getInfo() {
          return (
            await super.getInfo(),
            await this.getStakingInfo(),
            { balance: this.balance, balances: this.balances }
          );
        }
        calculateTotal(t) {
          let { balance: e, staked: n, unstaking: a, rewards: i } = t;
          const r = e
            .toBN()
            .add(n.toBN())
            .add(i.toBN())
            .add(a.toBN())
            .toString();
          return new s.default(r, this);
        }
        async calculateAvailableForStake(t) {
          let { balance: e, availableVotes: n } = t;
          return n.toBN().gte(e.toBN())
            ? new s.default(e.toMinimal(), this)
            : new s.default("0", this);
        }
        accumulateValidatorsValues(t, e) {
          return Object.values(t).reduce(
            (t, n) => {
              let { ["" + e]: a } = n;
              return new s.default(t.toBN().add(a.toBN()), this);
            },
            new s.default("0", this),
          );
        }
        calculateStaked(t) {
          return this.accumulateValidatorsValues(t, "staked");
        }
        calculateUnstaking(t) {
          return this.accumulateValidatorsValues(t, "unstaking");
        }
        calculateRewards(t) {
          return this.accumulateValidatorsValues(t, "rewards");
        }
        calculatePendingWithdrawals(t) {
          return this.accumulateValidatorsValues(t, "pendingWithdrawals");
        }
        calculateAvailableWithdrawals(t) {
          return this.accumulateValidatorsValues(t, "availableWithdrawals");
        }
        async fetchStakingInfo() {
          const t = Object.fromEntries(
              await Promise.all(
                this.predefinedValidators.map(async (t) => {
                  let { address: e } = t;
                  const n = await this.makeRawCall(
                      u.default,
                      this.stakingContract,
                      "currentEpoch",
                    ),
                    a = await this.makeRawCall(o.default, e, "unbondNonces", [
                      this.address,
                    ]),
                    { shares: i, withdrawEpoch: r } = await this.makeRawCall(
                      o.default,
                      e,
                      "unbonds_new",
                      [this.address, a],
                    ),
                    l = Number(n) > Number(r) + 82,
                    c = new s.default(l ? "0" : i, this),
                    p = new s.default(l ? i : "0", this),
                    d = new s.default(c.toBN().add(p.toBN()).toString(), this);
                  return [
                    e,
                    {
                      staked: new s.default(
                        await this.makeRawCall(o.default, e, "balanceOf", [
                          this.address,
                        ]),
                        this,
                      ),
                      rewards: new s.default(
                        await this.makeRawCall(
                          o.default,
                          e,
                          "getLiquidRewards",
                          [this.address],
                        ),
                        this,
                      ),
                      pendingWithdrawals: c,
                      availableWithdrawals: p,
                      unstaking: d,
                    },
                  ];
                }),
              ),
            ),
            e = this.calculateStaked(t),
            n = this.calculateUnstaking(t),
            a = this.calculateRewards(t),
            i = this.calculatePendingWithdrawals(t),
            r = this.calculateAvailableWithdrawals(t),
            c = new s.default(
              await this.makeRawCall(l.default, this.contract, "allowance", [
                this.address,
                this.stakingContract,
              ]),
              this,
            );
          return {
            balance: new s.default(this.balance, this),
            staked: e,
            unstaking: n,
            availableVotes: c,
            pendingWithdrawals: i,
            availableWithdrawals: r,
            rewards: a,
            validators: t,
          };
        }
        makeApproval(t) {
          let { address: e, amount: n } = t;
          const a = this.createSmartContractCall({
            smartContractAddress: e,
            standard: !0,
            action: "approve",
            args: [e, n],
          });
          return a;
        }
        increaseAllowance(t) {
          let { address: e, amount: n } = t;
          const a = this.createSmartContractCall({
            smartContractAddress: e,
            standard: !0,
            action: "increaseAllowance",
            args: [e, n],
          });
          return a;
        }
        createApproveTransaction(t) {
          let {
            nonce: e,
            userGasPrice: n,
            gasLimit: a = this.approvalGasLimit,
            multiplier: i,
          } = void 0 === t ? {} : t;
          const r = this.makeApproval({
            address: this.stakingContract,
            amount: m,
          });
          return this.createRawTransactions({
            address: this.contract,
            amount: "0",
            paymentData: r,
            nonce: e,
            userGasPrice: n,
            gasLimit: a,
            multiplier: i,
          });
        }
        createDelegationTransaction(t) {
          let {
            amount: e,
            validator: n,
            nonce: a,
            userGasPrice: i,
            gasLimit: r = this.stakingGasLimit,
            multiplier: s,
          } = t;
          const u = new this.coreLibrary.eth.Contract(o.default, n),
            l = u.methods.buyVoucher(e, e).encodeABI();
          return this.createRawTransactions({
            address: n,
            paymentData: l,
            amount: "0",
            nonce: a,
            userGasPrice: i,
            gasLimit: r,
            multiplier: s,
          });
        }
        createUnstakeTransaction(t) {
          let {
            amount: e,
            validator: n,
            nonce: a,
            userGasPrice: i,
            gasLimit: r = this.unstakingGasLimit,
            multiplier: s,
          } = t;
          const u = new this.coreLibrary.eth.Contract(o.default, n),
            l = u.methods.sellVoucher_new(e, e).encodeABI();
          return this.createRawTransactions({
            address: n,
            paymentData: l,
            amount: "0",
            nonce: a,
            userGasPrice: i,
            gasLimit: r,
            multiplier: s,
          });
        }
        async createWithdrawTransaction(t) {
          let {
            validator: e,
            nonce: n,
            userGasPrice: a,
            gasLimit: i = this.withdrawGasLimit,
            multiplier: r,
          } = t;
          const s = new this.coreLibrary.eth.Contract(o.default, e),
            u = await this.makeRawCall(o.default, e, "unbondNonces", [
              this.address,
            ]),
            l = s.methods.unstakeClaimTokens_new(u).encodeABI();
          return this.createRawTransactions({
            address: e,
            paymentData: l,
            amount: "0",
            nonce: n,
            userGasPrice: a,
            gasLimit: i,
            multiplier: r,
          });
        }
        createClaimRewardsTransaction(t) {
          let {
            validator: e,
            nonce: n,
            userGasPrice: a,
            gasLimit: i = this.claimRewardsGasLimit,
            multiplier: r,
          } = t;
          const s = new this.coreLibrary.eth.Contract(o.default, e),
            u = s.methods.withdrawRewards().encodeABI();
          return this.createRawTransactions({
            address: e,
            paymentData: u,
            amount: "0",
            nonce: n,
            userGasPrice: a,
            gasLimit: i,
            multiplier: r,
          });
        }
        createRestakeRewardsTransaction(t) {
          let {
            validator: e,
            nonce: n,
            userGasPrice: a,
            gasLimit: i = this.restakeRewardsGasLimit,
            multiplier: r,
          } = t;
          const s = new this.coreLibrary.eth.Contract(o.default, e),
            u = s.methods.restake().encodeABI();
          return this.createRawTransactions({
            address: e,
            paymentData: u,
            amount: "0",
            nonce: n,
            userGasPrice: a,
            gasLimit: i,
            multiplier: r,
          });
        }
        getPredefineValidatorsConfigIdentifier() {
          return this.ticker.toLowerCase() + "_eth";
        }
      }
      e.default = StakableMaticETHToken;
    },
    873: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = [
        {
          name: "approve",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          name: "balanceOf",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          name: "delegate",
          inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_bips", type: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          name: "delegatesOf",
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          outputs: [
            {
              internalType: "address[]",
              name: "_delegateAddresses",
              type: "address[]",
            },
            { internalType: "uint256[]", name: "_bips", type: "uint256[]" },
            { internalType: "uint256", name: "_count", type: "uint256" },
            {
              internalType: "uint256",
              name: "_delegationMode",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          name: "delegatesOfAt",
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "uint256", name: "_blockNumber", type: "uint256" },
          ],
          outputs: [
            {
              internalType: "address[]",
              name: "_delegateAddresses",
              type: "address[]",
            },
            { internalType: "uint256[]", name: "_bips", type: "uint256[]" },
            { internalType: "uint256", name: "_count", type: "uint256" },
            {
              internalType: "uint256",
              name: "_delegationMode",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          name: "delegationModeOf",
          inputs: [{ internalType: "address", name: "_who", type: "address" }],
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          name: "deposit",
          inputs: [],
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          name: "depositTo",
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
          ],
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "_selector", type: "bytes4" },
          ],
          name: "executeGovernanceCall",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "governance",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "governanceSettings",
          outputs: [
            {
              internalType: "contract IGovernanceSettings",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "governanceVotePower",
          outputs: [
            {
              internalType: "contract IGovernanceVotePower",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_initialGovernance",
              type: "address",
            },
          ],
          name: "initialise",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "productionMode",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "readVotePowerContract",
          outputs: [
            {
              internalType: "contract IVPContractEvents",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_who", type: "address" },
            { internalType: "uint256", name: "_blockNumber", type: "uint256" },
          ],
          name: "revokeDelegationAt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_cleanerContract",
              type: "address",
            },
          ],
          name: "setCleanerContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_blockNumber", type: "uint256" },
          ],
          name: "setCleanupBlockNumber",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalVotePower",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "undelegateAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_delegateAddresses",
              type: "address[]",
            },
          ],
          name: "undelegateAllExplicit",
          outputs: [
            {
              internalType: "uint256",
              name: "_remainingDelegation",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_from", type: "address" },
            { internalType: "address", name: "_to", type: "address" },
          ],
          name: "votePowerFromTo",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          name: "votePowerOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "uint256", name: "_blockNumber", type: "uint256" },
          ],
          name: "votePowerOfAtIgnoringRevocation",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
    874: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = [
        {
          inputs: [
            { internalType: "address", name: "_beneficiary", type: "address" },
            { internalType: "uint256", name: "_rewardEpoch", type: "uint256" },
          ],
          name: "getStateOfRewards",
          outputs: [
            {
              internalType: "address[]",
              name: "_dataProviders",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "_rewardAmounts",
              type: "uint256[]",
            },
            { internalType: "bool[]", name: "_claimed", type: "bool[]" },
            { internalType: "bool", name: "_claimable", type: "bool" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_rewardOwner", type: "address" },
            {
              internalType: "address payable",
              name: "_recipient",
              type: "address",
            },
            { internalType: "uint256", name: "_rewardEpoch", type: "uint256" },
            { internalType: "bool", name: "_wrap", type: "bool" },
          ],
          name: "claim",
          outputs: [
            { internalType: "uint256", name: "_rewardAmount", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_beneficiary", type: "address" },
          ],
          name: "getEpochsWithUnclaimedRewards",
          outputs: [
            { internalType: "uint256[]", name: "_epochIds", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "newFtsoRewardManager",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimSetupManager",
          outputs: [
            {
              internalType: "contract IIClaimSetupManager",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    876: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(69)),
        r = a(n(21)),
        s = a(n(81)),
        o = n(85);
      function u(t, e, n) {
        (l(t, e), e.set(t, n));
      }
      function l(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function c(t, e) {
        return t.get(d(t, e));
      }
      function p(t, e, n) {
        return (t.set(d(t, e), n), n);
      }
      function d(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      var y = new WeakMap();
      class TONToken extends r.default {
        constructor(t) {
          (super(t),
            u(this, y, void 0),
            (0, i.default)(this, "_jettonWalletAddress", null),
            (0, i.default)(this, "fields", { paymentId: !0 }),
            p(y, this, t.parent),
            (this.mint = t.mint),
            this._getJettonWalletAddress());
        }
        async _getJettonWalletAddress() {
          return (
            this._jettonWalletAddress ||
              (await c(y, this).ensureWalletInitialized(),
              (this._jettonWalletAddress = await c(
                y,
                this,
              ).getJettonWalletAddressStr(this.mint))),
            this._jettonWalletAddress
          );
        }
        async getInfo() {
          await c(y, this).ensureWalletInitialized();
          const t = await c(y, this).getTokenInfo({ mint: this.mint });
          return (t && (this.balance = t), { balance: this.balance });
        }
        async createTransaction(t) {
          let { address: e, amount: n, memo: a } = t;
          return {
            mint: this.mint,
            address: e,
            amount: n,
            decimals: this.decimal,
            transfer: !0,
            memo: a,
          };
        }
        async getTransactions(t, e) {
          try {
            await c(y, this).ensureWalletInitialized();
            const t = await c(y, this).getTokenTransactions({
              contract: this._jettonWalletAddress,
            });
            if (t.length > 0) {
              const e = t.filter((t) => t.walletId === this.id);
              await s.default.filterAndUpdateTransactions(e);
              const { topic: n, payload: a } = (0, o.HISTORY_WALLET_UPDATED)(
                this.id,
                e,
              );
              (this.eventEmitter.emit(n, a), (this.transactions = e));
            }
            return t;
          } catch (n) {
            return this.transactions;
          }
        }
      }
      e.default = TONToken;
    },
    943: function (t, e, n) {
      "use strict";
      var a = n(50),
        i = n(418),
        r = n(944),
        s = n(424),
        o = n(245);
      function u(t) {
        var e = new r(t),
          n = i(r.prototype.request, e);
        return (a.extend(n, r.prototype, e), a.extend(n, e), n);
      }
      var l = u(o);
      ((l.Axios = r),
        (l.create = function (t) {
          return u(s(l.defaults, t));
        }),
        (l.Cancel = n(425)),
        (l.CancelToken = n(958)),
        (l.isCancel = n(423)),
        (l.all = function (t) {
          return Promise.all(t);
        }),
        (l.spread = n(959)),
        (l.isAxiosError = n(960)),
        (t.exports = l),
        (t.exports.default = l));
    },
    944: function (t, e, n) {
      "use strict";
      var a = n(50),
        i = n(419),
        r = n(945),
        s = n(946),
        o = n(424),
        u = n(956),
        l = u.validators;
      function c(t) {
        ((this.defaults = t),
          (this.interceptors = { request: new r(), response: new r() }));
      }
      ((c.prototype.request = function (t) {
        ("string" === typeof t
          ? ((t = arguments[1] || {}), (t.url = arguments[0]))
          : (t = t || {}),
          (t = o(this.defaults, t)),
          t.method
            ? (t.method = t.method.toLowerCase())
            : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get"));
        var e = t.transitional;
        void 0 !== e &&
          u.assertOptions(
            e,
            {
              silentJSONParsing: l.transitional(l.boolean, "1.0.0"),
              forcedJSONParsing: l.transitional(l.boolean, "1.0.0"),
              clarifyTimeoutError: l.transitional(l.boolean, "1.0.0"),
            },
            !1,
          );
        var n = [],
          a = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((a = a && e.synchronous), n.unshift(e.fulfilled, e.rejected));
        });
        var i,
          r = [];
        if (
          (this.interceptors.response.forEach(function (t) {
            r.push(t.fulfilled, t.rejected);
          }),
          !a)
        ) {
          var c = [s, void 0];
          (Array.prototype.unshift.apply(c, n),
            (c = c.concat(r)),
            (i = Promise.resolve(t)));
          while (c.length) i = i.then(c.shift(), c.shift());
          return i;
        }
        var p = t;
        while (n.length) {
          var d = n.shift(),
            y = n.shift();
          try {
            p = d(p);
          } catch (f) {
            y(f);
            break;
          }
        }
        try {
          i = s(p);
        } catch (f) {
          return Promise.reject(f);
        }
        while (r.length) i = i.then(r.shift(), r.shift());
        return i;
      }),
        (c.prototype.getUri = function (t) {
          return (
            (t = o(this.defaults, t)),
            i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
          );
        }),
        a.forEach(["delete", "get", "head", "options"], function (t) {
          c.prototype[t] = function (e, n) {
            return this.request(
              o(n || {}, { method: t, url: e, data: (n || {}).data }),
            );
          };
        }),
        a.forEach(["post", "put", "patch"], function (t) {
          c.prototype[t] = function (e, n, a) {
            return this.request(o(a || {}, { method: t, url: e, data: n }));
          };
        }),
        (t.exports = c));
    },
    945: function (t, e, n) {
      "use strict";
      var a = n(50);
      function i() {
        this.handlers = [];
      }
      ((i.prototype.use = function (t, e, n) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: e,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (i.prototype.eject = function (t) {
          this.handlers[t] && (this.handlers[t] = null);
        }),
        (i.prototype.forEach = function (t) {
          a.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }),
        (t.exports = i));
    },
    946: function (t, e, n) {
      "use strict";
      var a = n(50),
        i = n(947),
        r = n(423),
        s = n(245);
      function o(t) {
        t.cancelToken && t.cancelToken.throwIfRequested();
      }
      t.exports = function (t) {
        (o(t),
          (t.headers = t.headers || {}),
          (t.data = i.call(t, t.data, t.headers, t.transformRequest)),
          (t.headers = a.merge(
            t.headers.common || {},
            t.headers[t.method] || {},
            t.headers,
          )),
          a.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (e) {
              delete t.headers[e];
            },
          ));
        var e = t.adapter || s.adapter;
        return e(t).then(
          function (e) {
            return (
              o(t),
              (e.data = i.call(t, e.data, e.headers, t.transformResponse)),
              e
            );
          },
          function (e) {
            return (
              r(e) ||
                (o(t),
                e &&
                  e.response &&
                  (e.response.data = i.call(
                    t,
                    e.response.data,
                    e.response.headers,
                    t.transformResponse,
                  ))),
              Promise.reject(e)
            );
          },
        );
      };
    },
    947: function (t, e, n) {
      "use strict";
      var a = n(50),
        i = n(245);
      t.exports = function (t, e, n) {
        var r = this || i;
        return (
          a.forEach(n, function (n) {
            t = n.call(r, t, e);
          }),
          t
        );
      };
    },
    948: function (t, e, n) {
      "use strict";
      var a = n(50);
      t.exports = function (t, e) {
        a.forEach(t, function (n, a) {
          a !== e &&
            a.toUpperCase() === e.toUpperCase() &&
            ((t[e] = n), delete t[a]);
        });
      };
    },
    949: function (t, e, n) {
      "use strict";
      var a = n(422);
      t.exports = function (t, e, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status)
          ? e(
              a(
                "Request failed with status code " + n.status,
                n.config,
                null,
                n.request,
                n,
              ),
            )
          : t(n);
      };
    },
    950: function (t, e, n) {
      "use strict";
      var a = n(50);
      t.exports = a.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (t, e, n, i, r, s) {
                var o = [];
                (o.push(t + "=" + encodeURIComponent(e)),
                  a.isNumber(n) &&
                    o.push("expires=" + new Date(n).toGMTString()),
                  a.isString(i) && o.push("path=" + i),
                  a.isString(r) && o.push("domain=" + r),
                  !0 === s && o.push("secure"),
                  (document.cookie = o.join("; ")));
              },
              read: function (t) {
                var e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove: function (t) {
                this.write(t, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    951: function (t, e, n) {
      "use strict";
      var a = n(952),
        i = n(953);
      t.exports = function (t, e) {
        return t && !a(e) ? i(t, e) : e;
      };
    },
    952: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
      };
    },
    953: function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
      };
    },
    954: function (t, e, n) {
      "use strict";
      var a = n(50),
        i = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      t.exports = function (t) {
        var e,
          n,
          r,
          s = {};
        return t
          ? (a.forEach(t.split("\n"), function (t) {
              if (
                ((r = t.indexOf(":")),
                (e = a.trim(t.substr(0, r)).toLowerCase()),
                (n = a.trim(t.substr(r + 1))),
                e)
              ) {
                if (s[e] && i.indexOf(e) >= 0) return;
                s[e] =
                  "set-cookie" === e
                    ? (s[e] ? s[e] : []).concat([n])
                    : s[e]
                      ? s[e] + ", " + n
                      : n;
              }
            }),
            s)
          : s;
      };
    },
    955: function (t, e, n) {
      "use strict";
      var a = n(50);
      t.exports = a.isStandardBrowserEnv()
        ? (function () {
            var t,
              e = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function i(t) {
              var a = t;
              return (
                e && (n.setAttribute("href", a), (a = n.href)),
                n.setAttribute("href", a),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (t = i(window.location.href)),
              function (e) {
                var n = a.isString(e) ? i(e) : e;
                return n.protocol === t.protocol && n.host === t.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    956: function (t, e, n) {
      "use strict";
      var a = n(957),
        i = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (t, e) {
          i[t] = function (n) {
            return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        },
      );
      var r = {},
        s = a.version.split(".");
      function o(t, e) {
        for (
          var n = e ? e.split(".") : s, a = t.split("."), i = 0;
          i < 3;
          i++
        ) {
          if (n[i] > a[i]) return !0;
          if (n[i] < a[i]) return !1;
        }
        return !1;
      }
      function u(t, e, n) {
        if ("object" !== typeof t)
          throw new TypeError("options must be an object");
        var a = Object.keys(t),
          i = a.length;
        while (i-- > 0) {
          var r = a[i],
            s = e[r];
          if (s) {
            var o = t[r],
              u = void 0 === o || s(o, r, t);
            if (!0 !== u) throw new TypeError("option " + r + " must be " + u);
          } else if (!0 !== n) throw Error("Unknown option " + r);
        }
      }
      ((i.transitional = function (t, e, n) {
        var i = e && o(e);
        function s(t, e) {
          return (
            "[Axios v" +
            a.version +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, o) {
          if (!1 === t) throw new Error(s(a, " has been removed in " + e));
          return (
            i &&
              !r[a] &&
              ((r[a] = !0),
              console.warn(
                s(
                  a,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future",
                ),
              )),
            !t || t(n, a, o)
          );
        };
      }),
        (t.exports = { isOlderVersion: o, assertOptions: u, validators: i }));
    },
    957: function (t) {
      t.exports = JSON.parse(
        '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}',
      );
    },
    958: function (t, e, n) {
      "use strict";
      var a = n(425);
      function i(t) {
        if ("function" !== typeof t)
          throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function (t) {
          e = t;
        });
        var n = this;
        t(function (t) {
          n.reason || ((n.reason = new a(t)), e(n.reason));
        });
      }
      ((i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (i.source = function () {
          var t,
            e = new i(function (e) {
              t = e;
            });
          return { token: e, cancel: t };
        }),
        (t.exports = i));
    },
    959: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      };
    },
    960: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return "object" === typeof t && !0 === t.isAxiosError;
      };
    },
    962: function (t, e, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(426));
      const r = new i.default("dexie");
      let s = 1;
      (r
        .version(s++)
        .stores({
          rates: "++id, [ticker+fiat]",
          tokens: "++id, uniqueField, parentTicker",
          exchangeTxs: "++exid, id",
          transactions: "++id, [txid+ticker+alias+direction]",
        }),
        r
          .version(s++)
          .stores({
            rates: "++id, [ticker+fiat]",
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            transactions: "++id, [ticker+alias], [txid+ticker+alias]",
          }),
        r
          .version(s++)
          .stores({
            rates: null,
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            transactions: null,
          }),
        r
          .version(s++)
          .stores({
            rates: "id, fiat, [ticker+fiat]",
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            transactions: "id, [ticker+alias], [txid+ticker+alias]",
          }),
        r
          .version(s++)
          .stores({
            rates: "id, fiat, [ticker+fiat]",
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            simplexTxs: "id, quoteId",
            transactions: "id, [ticker+alias], [txid+ticker+alias]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
          }),
        r
          .version(s++)
          .stores({
            rates: "id, fiat, [ticker+fiat]",
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            simplexTxs: "id, quoteId",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
          }),
        r
          .version(s++)
          .stores({
            configs: "id, expired",
            rates: "id, fiat, [ticker+fiat]",
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            simplexTxs: "id, quoteId",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
          }),
        r
          .version(s++)
          .stores({
            configs: "id, expired",
            rates: "id, fiat, [ticker+fiat]",
            tokens: "++id, uniqueField, parentTicker",
            exchangeTxs: "++exid, id",
            simplexTxs: "id, quoteId",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
            addrCache: "id, ticker, address, type, [ticker+type]",
          }),
        r
          .version(s++)
          .stores({
            addrCache: "id, ticker, address, type, [ticker+type]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
            configs: "id, expired",
            exchangeTxs: "++exid, id",
            nfts: "id, ticker",
            rates: "id, fiat, [ticker+fiat]",
            simplexTxs: "id, quoteId",
            tokens: "++id, uniqueField, parentTicker",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
          }),
        r
          .version(s++)
          .stores({
            addrCache: "id, ticker, address, type, [ticker+type]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
            configs: "id, expired",
            exchangeTxs: "++exid, id",
            nfts: "id, ticker",
            rates: "id, fiat, [walletId+fiat]",
            simplexTxs: "id, quoteId",
            tokens: "++id, uniqueField, parentTicker",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
          }),
        r
          .version(s++)
          .stores({
            addrCache: "id, ticker, address, type, [ticker+type]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
            configs: "id, expired",
            exchangeTxs: "++exid, id",
            nfts: "id, ticker, deletedTill",
            rates: "id, fiat, [walletId+fiat]",
            simplexTxs: "id, quoteId",
            tokens: "++id, uniqueField, parentTicker",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
          }),
        r
          .version(s++)
          .stores({
            addrCache: "id, ticker, address, type, [ticker+type]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
            configs: "id, expired",
            exchangeTxs: "++exid, id",
            nfts: "id, ticker, [ticker+id]",
            sentNfts: "id, ticker, expiredAt",
            rates: "id, fiat, [walletId+fiat]",
            simplexTxs: "id, quoteId",
            tokens: "++id, uniqueField, parentTicker",
            transactions:
              "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
          }),
        r
          .version(s++)
          .stores({
            addrCache: "id, ticker, address, type, [ticker+type]",
            chartData: "id, fiat, [ticker+fiat+endPoint]",
            configs: "id, expired",
            exchangeTxs: "++exid, id",
            nfts: "id, ticker, [ticker+id]",
            sentNfts: "id, ticker, expiredAt",
            rates: "id, fiat, [walletId+fiat]",
            simplexTxs: "id, quoteId",
            tokens: "++id, uniqueField, parentTicker",
            transactions:
              "id, alias, [txid+alias], [alias+walletid], [txid+alias+walletid], [ticker+alias], [txid+ticker+alias], [ticker+alias+walletid], [txid+ticker+alias+walletid]",
          }),
        r
          .version(s++)
          .stores({
            tokens:
              "++id, uniqueField, parentTicker, [parentTicker+uniqueField]",
          }),
        r.version(s++).stores({ nfts: null, sentNfts: null }),
        r
          .version(s++)
          .stores({
            nfts: "[ticker+contractAddress+tokenId], ticker",
            sentNfts: "[ticker+contractAddress+tokenId], ticker, expiredAt",
          }),
        r.version(s++).stores({ ifProgramState: "key" }),
        r.version(s++).stores({ banner: "key" }),
        r
          .version(s++)
          .stores({
            chartData: "id, fiat, [fiat+endPoint], [ticker+fiat+endPoint]",
          }),
        r.version(s++).stores({ exchangeTxs: null }),
        r.version(s++).stores({ exchangeTxs: "id" }),
        r.version(s++).stores({ nfts: null, sentNfts: null }),
        r
          .version(s++)
          .stores({
            nfts: "[coinId+contractAddress+tokenId], coinId",
            sentNfts: "[coinId+contractAddress+tokenId], coinId, expiredAt",
          }),
        r.version(s++).stores({ customWallets: "id, type, [id+type]" }),
        r.version(s++).stores({ transactions: null }),
        r
          .version(s++)
          .stores({
            transactions:
              "id, alias, [txid+alias], [alias+walletid], [txid+alias+walletid], [ticker+alias], [txid+ticker+alias], [ticker+alias+walletid], [txid+ticker+alias+walletid]",
          }),
        r.version(s++).stores({ buyHistory: "id" }),
        r
          .version(s++)
          .stores({ memesHistory: "txid, from.contract, to.contract" }));
      e.default = r;
    },
    963: function (t, e, n) {
      "use strict";
      n.r(e);
      const a = (t) => {
        let e = "";
        if (t) {
          const n = "" + t;
          for (let t = 0; t < n.length; t += 2)
            e += String.fromCharCode(parseInt(n.substr(t, 2), 16));
        }
        return e;
      };
      e["default"] = a;
    },
    964: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(14),
        i = n.n(a),
        r = (t, e, n) =>
          new Promise((a, i) => {
            var r = (t) => {
                try {
                  o(n.next(t));
                } catch (e) {
                  i(e);
                }
              },
              s = (t) => {
                try {
                  o(n.throw(t));
                } catch (e) {
                  i(e);
                }
              },
              o = (t) =>
                t.done ? a(t.value) : Promise.resolve(t.value).then(r, s);
            o((n = n.apply(t, e)).next());
          });
      e["default"] = () =>
        r(void 0, null, function* () {
          const { data: t } = yield i.a.get(
              "https://api.ipstack.com/check?access_key=4e58e3f8a7bb4fd994f948b63e127e3b",
            ),
            { ip: e, latitude: n, longitude: a } = t;
          return { ip: e, geo: `${n}, ${a}` };
        });
    },
    965: function (t, e, n) {
      "use strict";
      n.r(e);
      const a = (t, e) => {
        const n = [],
          a = t.length;
        for (let i = 0; i < a; i += e) n.push(t.slice(i, i + e));
        return n;
      };
      e["default"] = a;
    },
    966: function (t, e, n) {
      "use strict";
      n.r(e);
      const a = 100,
        i = (t, e = a) => {
          const n = [];
          while (t.length > e) {
            const a = t.slice(0, e),
              i = "," === t[e] ? e : a.lastIndexOf(",");
            (n.push(t.slice(0, i)), (t = t.slice(i + 1)));
          }
          return (t.length > 0 && n.push(t), n);
        };
      e["default"] = i;
    },
    967: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const a = (t, e) => {
        const n = t.length,
          a = {};
        for (let i = 0; i < n; i += 1) a[t[i][e]] = t[i];
        return a;
      };
      e.default = a;
    },
    968: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "getCachedBalance", function () {
          return r;
        }),
        n.d(e, "isBalanceCached", function () {
          return s;
        }),
        n.d(e, "setCachedBalance", function () {
          return o;
        }));
      const a = (t) => t + "-balance",
        i = (t) => {
          const e = localStorage.getItem(a(t));
          return null !== e && void 0 !== e ? e : null;
        },
        r = (t) => {
          const e = i(t);
          return e ? Number(e) : 0;
        },
        s = (t) => null !== i(t),
        o = (t, e) => {
          localStorage.setItem(a(t), e.toString());
        };
    },
    969: function (t, e, n) {
      "use strict";
      (n.r(e),
        (e["default"] = (t) => {
          if (!Array.isArray(t)) throw new TypeError("Invalid Array");
          const e = Math.floor(Math.random() * t.length);
          return t[e];
        }));
    },
    970: function (t, e, n) {
      "use strict";
      function a(t, e) {
        (r(t, e), e.add(t));
      }
      function i(t, e, n) {
        (r(t, e), e.set(t, n));
      }
      function r(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function s(t, e) {
        return t.get(u(t, e));
      }
      function o(t, e, n) {
        return (t.set(u(t, e), n), n);
      }
      function u(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object");
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.requestQueueState = e.REQUEST_TYPE = void 0));
      const l = (e.REQUEST_TYPE = {
          INITIAL_RATES: "initial_rates",
          WALLETS_LOADED: "wallets_loaded",
          INITIAL_BALANCES: "initial_balances",
          INITIAL_TRANSACTIONS: "initial_transactions",
          NEXT: "next",
        }),
        c = [
          l.INITIAL_RATES,
          l.WALLETS_LOADED,
          l.INITIAL_BALANCES,
          l.INITIAL_TRANSACTIONS,
          l.NEXT,
        ];
      var p = new WeakMap(),
        d = new WeakMap();
      class RequestState {
        constructor(t) {
          (i(this, p, !1),
            i(this, d, !1),
            (this.promise = new Promise((e) => {
              ((this.resolve = e), t && this.setPermitted());
            })));
        }
        setPermitted() {
          (o(p, this, !0), this.resolve());
        }
        setCompleted() {
          (o(d, this, !0), this.setPermitted());
        }
        getIsCompleted() {
          return s(d, this);
        }
      }
      var y = new WeakMap(),
        f = new WeakSet();
      class RequestQueueState {
        constructor() {
          (a(this, f),
            i(
              this,
              y,
              c.reduce(
                (t, e, n) => ((t[e] = new RequestState(0 === n || void 0)), t),
                {},
              ),
            ));
        }
        setAsCompleted(t) {
          (u(f, this, m).call(this, t), s(y, this)[t].setCompleted());
          for (let e = 0; e < c.length; e++) {
            const n = c[e];
            if (
              (s(y, this)[n].setPermitted(), n === t && t !== c[c.length - 1])
            ) {
              const t = c[e + 1];
              s(y, this)[t].setPermitted();
              break;
            }
          }
        }
        waitForPermitted(t) {
          return (u(f, this, m).call(this, t), s(y, this)[t].promise);
        }
      }
      function m(t) {
        if (!c.includes(t))
          throw new Error(`The type '${t}' is not in REQUEST_TYPE`);
      }
      e.requestQueueState = new RequestQueueState();
    },
    971: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "getTokenId", function () {
          return r;
        }));
      var a = n(336),
        i = n.n(a);
      const r = ({ contract: t, parent: e, network: n, ticker: a }) =>
        i.a.hash(
          [a, t, e || n]
            .map((t) => (null == t ? void 0 : t.toLowerCase()))
            .join(""),
        );
    },
    972: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getPromiseState = e.PROMISE_STATE = void 0));
      const a = (e.PROMISE_STATE = {
          PENDING: "pending",
          FULFILLED: "fulfilled",
          REJECTED: "rejected",
        }),
        i = (t) => {
          const e = {};
          return Promise.race([t, e])
            .then((t) => (t === e ? a.PENDING : a.FULFILLED))
            .catch(() => a.REJECTED);
        };
      e.getPromiseState = i;
    },
    973: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "sanitizeUrl", function () {
          return r;
        }));
      var a = n(195),
        i = n.n(a);
      function r(t, e = "") {
        try {
          const e = new URL(t);
          if ("http:" === e.protocol || "https:" === e.protocol)
            return i()(e.href);
          throw new Error("Invalid URL protocol");
        } catch (n) {
          return (console.warn("Invalid URL provided:", t), e);
        }
      }
    },
    977: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "safeUpdateObject", function () {
          return i;
        }));
      var a = n(157);
      function i(t, e, n = !0, i = !0) {
        if ("object" !== typeof t || null === t)
          throw new Error("Target must be a non-null object");
        if ("object" !== typeof e || null === e)
          throw new Error("Source must be a non-null object");
        const r = Object.keys(e).filter(
          (e) => !!n || Object.prototype.hasOwnProperty.call(t, e),
        );
        r.forEach((n) => {
          const r = e[n];
          Object(a["isPrototypePollutionKey"])(n) ||
            ((i || (void 0 !== r && null !== r)) &&
              Object.defineProperty(t, n, {
                value: r,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              }));
        });
      }
    },
    978: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "sanitizeString", function () {
          return r;
        }));
      var a = n(195),
        i = n.n(a);
      function r(t, e = "") {
        return "string" === typeof t ? i()(t) : e;
      }
    },
    979: function (t, e, n) {
      "use strict";
      function a(t, e = 0) {
        return "number" !== typeof t || Number.isNaN(t) ? e : t;
      }
      (n.r(e),
        n.d(e, "sanitizeNumber", function () {
          return a;
        }));
    },
    980: function (t, e, n) {
      "use strict";
      function a(t, e = !1) {
        return "boolean" === typeof t ? t : e;
      }
      (n.r(e),
        n.d(e, "sanitizeBoolean", function () {
          return a;
        }));
    },
    981: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "sanitizeObject", function () {
          return f;
        }));
      var a = n(157),
        i = Object.defineProperty,
        r = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable,
        u = (t, e, n) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        l = (t, e) => {
          for (var n in e || (e = {})) s.call(e, n) && u(t, n, e[n]);
          if (r) for (var n of r(e)) o.call(e, n) && u(t, n, e[n]);
          return t;
        };
      const c = {
        maxDepth: 10,
        maxArrayLength: 1e4,
        allowedTypes: new Set([
          "string",
          "number",
          "boolean",
          "object",
          "undefined",
        ]),
      };
      function p(t) {
        if ("object" !== typeof t || null === t) return !1;
        const e = Object.getPrototypeOf(t);
        return e === Object.prototype || null === e;
      }
      function d(t, e, n) {
        if (e > n.maxDepth) return;
        const a = typeof t;
        return n.allowedTypes.has(a)
          ? null === t
            ? null
            : Array.isArray(t)
              ? t.length > n.maxArrayLength
                ? []
                : t.map((t) => d(t, e + 1, n)).filter((t) => void 0 !== t)
              : p(t)
                ? y(t, e + 1, n)
                : "string" === a ||
                    "number" === a ||
                    "boolean" === a ||
                    "undefined" === a
                  ? t
                  : void 0
          : void 0;
      }
      function y(t, e, n) {
        const i = {};
        for (const r in t)
          if (
            !Object(a["isPrototypePollutionKey"])(r) &&
            Object.prototype.hasOwnProperty.call(t, r)
          ) {
            const a = d(t[r], e, n);
            void 0 !== a && (i[r] = a);
          }
        return i;
      }
      function f(t, e) {
        const n = l(l({}, c), e);
        return y(t, 0, n);
      }
    },
    996: function (t, e, n) {
      "use strict";
      function a() {
        const t = new Map();
        return (e, n) => {
          if (!t.has(e)) {
            const a = n().finally(() => {
              t.delete(e);
            });
            t.set(e, a);
          }
          return t.get(e);
        };
      }
      (n.r(e),
        n.d(e, "default", function () {
          return a;
        }));
    },
  },
]);
